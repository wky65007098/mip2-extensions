/**
 * @file mip-infinitescroll 组件
 * @author wangpei07, liangjiaying
 */

import InfiniteScroll from './infinitescroll'

let { CustomElement, util, templates } = MIP

export default class MipInfiniteScroll extends CustomElement {
  constructor (...args) {
    // 继承父类属性、方法
    super(...args)
    this.infiniteScroll = null
  }

  /**
   * 提前渲染
   */
  prerenderAllowed () {
    return true
  }

  /**
   * 挂载到DOM上之后，首次出现在视口内时执行
   */
  firstInviewCallback () {
    let element = this.element
    let src = element.getAttribute('data-src') || ''

    // 如果没有写data-src, 则报错提示
    if (!src) {
      console.error('未填写src字段，不能获取数据')
      element.remove()
      return
    }

    // 默认参数设置
    this.params = {
      rn: 20,
      prn: 6,
      pn: 1,
      pnName: 'pn',
      bufferHeightPx: 10,
      loadingHtml: '加载中...',
      loadFailHtml: '加载失败',
      loadOverHtml: '加载完毕!',
      renderTplFailHtml: '渲染模板失败',
      timeout: 5000
    }

    // 获取用户设置参数
    try {
      let script = element.querySelector('script[type="application/json"]')
      if (script) {
        this.params = util.fn.extend(this.params, JSON.parse(script.textContent.toString()))
        // 由于JSON.parse() 内不能填写Infinity(number), 只能填"Infinity"(string)来转换
        this.params.rn = (this.params.rn === 'Infinity' ? Infinity : this.params.rn)
      }
    } catch (e) {
      // eslint-disable-line
      console.warn('json is illegal')
      // eslint-disable-line
      console.warn(e)
      return
    }

    this.url = this.getUrl(src)

    // 异步请求返回后，解析数据，使用mustache 渲染插入页面
    this.pushResult = async (rn, status) => {
      // 异步获取数据示例
      if (rn > this.params.rn) {
        return 'NULL'
      }

      let data
      try {
        const res = await window.fetchJsonp(this.url, {
          jsonpCallback: 'callback',
          timeout: this.params.timeout
        })
        data = await res.json()
      } catch (e) {
        throw new Error(this.params.loadFailHtml)
      }
      // 数据加载成功，请求返回
      if (data && parseInt(data.status, 10) === 0 && data.data) {
        if (rn > this.params.rn || !data.data.items || !data.data.items.length) {
          return 'NULL'
        }

        let htmls
        try {
          htmls = await templates.render(this.element, data.data.items)
        } catch (e) {
          throw new Error(this.params.renderTplFailHtml)
        }

        this.params.pn++
        this.url = this.getUrl(src)
        return htmls
      }
      return 'NULL'
    }

    this.infiniteScroll = new InfiniteScroll({
      $result: element.querySelector('.mip-infinitescroll-results'),
      $loading: element.querySelector('.mip-infinitescroll-loading'),
      loadingHtml: this.params.loadingHtml,
      loadFailHtml: this.params.loadFailHtml,
      loadOverHtml: this.params.loadOverHtml,
      bufferHeightPx: this.params.bufferHeightPx,
      pageResultNum: this.params.prn,
      limitShowPn: 0,
      preLoadPn: 2,
      firstResult: [],
      pushResult: this.pushResult
    })
  }

  disconnectedCallback () {
    this.infiniteScroll.destroy()
  }

  /**
   * [getUrl url 拼接函数]
   *
   * @param {string} src 获取的最初url
   * @returns {string} 拼接后的url
   */
  getUrl (src) {
    let url = src
    if (src.indexOf('?') > 0) {
      url += src[src.length - 1] === '?' ? '' : '&'
      url += this.params.pnName + '=' + this.params.pn
    } else {
      url += '?' + this.params.pnName + '=' + this.params.pn
    }
    return url
  }
}
