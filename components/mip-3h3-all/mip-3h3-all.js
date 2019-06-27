import './index.less'

//判断元素是否有class
function hasClass(ele, cls) { 
    return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
//元素增加class
function addClass(ele, cls) { 
    if (!hasClass(ele, cls)) ele.className += " "+cls;
}
//元素移除class
function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}
    
export default class MIP3h3All extends MIP.CustomElement {
  build () {
    var con = this.element;
    var gtype = con.getAttribute('g_type');
    var siteurl = '//m.3h3.com/';
    if (gtype === '3h3_news') {
        // 点击量统计
        var module = con.getAttribute('module');
        var hitsurl = siteurl + 'ajax.asp?action=4&id=' + con.getAttribute('id');
        if (module !== '') {
            hitsurl += '&module=' + module;
        }
        $.getJSON(hitsurl);
    } else if (gtype === '3h3_youxi_content_hideshow') {
        // 内容缩进
        if (con.offsetHeight > 200) {
            var newcon = con.querySelector('.m-con');
            newcon.className += ' wraptext snbg';
            var btn = con.querySelector('.m-show');
            btn.onclick = function () {
                if (hasClass(this, 'show')) {
                    addClass(newcon, 'wraptext');
                    addClass(newcon, 'snbg');
                    removeClass(this, 'show');
                } else {
                    removeClass(newcon, 'wraptext');
                    removeClass(newcon, 'snbg');
                    addClass(this, 'show');
                }
            }
        } else {
            con.querySelector('.m-show').style.display = 'none';
        }
    } else if (gtype === '3h3_youxi_tab') {
        if(con.querySelector('.m-anchor') !== null) {
            let anchorLi = con.querySelectorAll('.m-anchor li');
            var anchor1 = anchorLi[0];
            var anchor2 = anchorLi[1];
            var anchor3 = anchorLi[2];
            var anchor4 = anchorLi[3];
            anchor1.onclick = function () {
                if(con.querySelector('.app_intro') !== null) {
                    con.querySelector('.app_intro').style.display = 'block';
                }
                if(con.querySelector('.app_soft') !== null) {
                    con.querySelector('.app_soft').style.display = 'block';
                }
                if(con.querySelector('.ztshow') !== null) {
                    con.querySelector('.ztshow').style.display = 'block';
                    con.querySelector('.ztshow').nextSibling.style.display = 'block';
                }
                if(con.querySelector('.app_article') !== null) {
                    con.querySelector('.app_article').style.display = 'block';
                }
                if(con.querySelector('.con-box') !== null) {
                    con.querySelector('.con-box').style.display = 'block';
                }
                if(con.querySelector('.app_guess') !== null) {
                    con.querySelector('.app_guess').style.display = 'block';
                }
                if(con.querySelector('.Qtag') !== null) {
                    con.querySelector('.Qtag').style.display = 'block';
                }
                if(con.querySelector('.app_appmore') !== null) {
                    con.querySelector('.app_appmore').style.display = 'block';
                }
                addClass(this, 'on');
                removeClass(anchor2, 'on');
                removeClass(anchor3, 'on');
                removeClass(anchor4, 'on');
            }
            anchor2.onclick = function () {
                if(con.querySelector('.app_intro') !== null) {
                    con.querySelector('.app_intro').style.display = 'none';
                }
                if(con.querySelector('.app_soft') !== null) {
                    con.querySelector('.app_soft').style.display = 'block';
                }
                if(con.querySelector('.ztshow') !== null) {
                    con.querySelector('.ztshow').style.display = 'block';
                    con.querySelector('.ztshow').nextSibling.style.display = 'block';
                }
                if(con.querySelector('.app_article') !== null) {
                    con.querySelector('.app_article').style.display = 'block';
                }
                if(con.querySelector('.con-box') !== null) {
                    con.querySelector('.con-box').style.display = 'block';
                }
                if(con.querySelector('.app_guess') !== null) {
                    con.querySelector('.app_guess').style.display = 'block';
                }
                if(con.querySelector('.Qtag') !== null) {
                    con.querySelector('.Qtag').style.display = 'block';
                }
                if(con.querySelector('.app_appmore') !== null) {
                    con.querySelector('.app_appmore').style.display = 'block';
                }
                addClass(this, 'on');
                removeClass(anchor1, 'on');
                removeClass(anchor3, 'on');
                removeClass(anchor4, 'on');
            }
            anchor3.onclick = function () {
                if(con.querySelector('.app_intro') !== null) {
                    con.querySelector('.app_intro').style.display = 'none';
                }
                if(con.querySelector('.app_soft') !== null) {
                    con.querySelector('.app_soft').style.display = 'none';
                }
                if(con.querySelector('.ztshow') !== null) {
                    con.querySelector('.ztshow').style.display = 'none';
                    con.querySelector('.ztshow').nextSibling.style.display = 'none';
                }
                if(con.querySelector('.app_article') !== null) {
                    con.querySelector('.app_article').style.display = 'none';
                }
                if(con.querySelector('.con-box') !== null) {
                    con.querySelector('.con-box').style.display = 'none';
                }
                if(con.querySelector('.app_guess') !== null) {
                    con.querySelector('.app_guess').style.display = 'block';
                }
                if(con.querySelector('.Qtag') !== null) {
                    con.querySelector('.Qtag').style.display = 'block';
                }
                if(con.querySelector('.app_appmore') !== null) {
                    con.querySelector('.app_appmore').style.display = 'block';
                }
                addClass(this, 'on');
                removeClass(anchor1, 'on');
                removeClass(anchor2, 'on');
                removeClass(anchor4, 'on');
            }
            anchor4.onclick = function () {
                if(con.querySelector('.app_intro') !== null) {
                    con.querySelector('.app_intro').style.display = 'none';
                }
                if(con.querySelector('.app_soft') !== null) {
                    con.querySelector('.app_soft').style.display = 'none';
                }
                if(con.querySelector('.ztshow') !== null) {
                    con.querySelector('.ztshow').style.display = 'none';
                    con.querySelector('.ztshow').nextSibling.style.display = 'none';
                }
                if(con.querySelector('.app_article') !== null) {
                    con.querySelector('.app_article').style.display = 'none';
                }
                if(con.querySelector('.con-box') !== null) {
                    con.querySelector('.con-box').style.display = 'none';
                }
                if(con.querySelector('.app_guess') !== null) {
                    con.querySelector('.app_guess').style.display = 'none';
                }
                if(con.querySelector('.Qtag') !== null) {
                    con.querySelector('.Qtag').style.display = 'none';
                }
                if(con.querySelector('.app_appmore') !== null) {
                    con.querySelector('.app_appmore').style.display = 'block';
                }
                addClass(this, 'on');
                removeClass(anchor1, 'on');
                removeClass(anchor2, 'on');
                removeClass(anchor3, 'on');
            }
        }
        var txtlist1 = con.querySelector('.txt-list1');
        if (txtlist1.innerHTML.trim() === '') {
            txtlist1.parentNode.parentNode.removeChild(txtlist1.parentNode);
        }
        var hdarticle = con.querySelector('.app_guess .hd_article');
        if (hdarticle.innerHTML.trim() === '') {
            hdarticle.parentNode.parentNode.removeChild(hdarticle.parentNode);
        }
        var cnxhNotNullSize = 0;
        let guessCont = con.querySelectorAll('.app_guess #guess_main .guessCont');
        for (let i = 0; i < guessCont.length; i++) {
            if (guessCont[i].innerHTML.trim() === '') {
                guessCont[i].style.display = 'none';
                let spIndex = hdarticle.querySelectorAll('span')[i];
                spIndex.style.display = 'none';
            } else {
                cnxhNotNullSize++;
            }
        }
        if (cnxhNotNullSize === 1) {
            hdarticle.style.width = '50%';
        } else if (cnxhNotNullSize === 0) {
            hdarticle.parentNode.parentNode.removeChild(hdarticle.parentNode);
            anchor3.style.display = 'none';
            let manLi = con.querySelectorAll('.m-anchor li');
            for (let i = 0; i < manLi.length; i++) {
                manLi[i].style.width = '33.3%';
            }
        }
        if (hdarticle.innerHTML.trim() === '') {
            hdarticle.parentNode.parentNode.removeChild(hdarticle.parentNode);
        } else {
            var isClick = false;
            setTimeout(function () {
                let hdSpan = con.querySelectorAll('.app_guess .hd_article span');
                for (let i = 0; i < hdSpan.length; i++) {
                    if (hdSpan[i].style.display !== 'none' && isClick === false) {
                        hdSpan[i].click();
                        isClick = true;
                    }
                }
            }, 600);
        }
        var appsoft = con.querySelector('.app_soft');
        if (appsoft.querySelectorAll('#m-rel .m-option')[1].innerHTML.trim() === '') {
            let tabLi = appsoft.querySelectorAll('#m-rel .tab-1 li')[1];
            tabLi.parentNode.removeChild(tabLi);
        }
        if (appsoft.querySelectorAll('#m-rel .m-option')[0].innerHTML.trim() === ''
            && appsoft.querySelectorAll('#m-rel .m-option')[1].innerHTML.trim() === '') {
            appsoft.parentNode.removeChild(appsoft);
        }
        var apparticle = con.querySelector('.app_article');
        if(apparticle !== null) {
            var apparticleNotNullSize = 0;
            let xgListUl = apparticle.querySelectorAll('#xg_main .xg_main_ul .xg_list ul');
            for (let i = 0; i < xgListUl.length; i++) {
                if (xgListUl[i].innerHTML.trim() !== '') {
                    apparticleNotNullSize++;
                } else {
                    con.querySelectorAll('.hd_article span')[index].style.display = 'none';
                }
            }
            let artSpan = apparticle.querySelectorAll('.hd_article span');
            for (let i = 0; i < artSpan.length; i++) {
                if (artSpan[i].style.display !== 'none') {
                    artSpan[i].click();
                    return false;
                }
            }
        }
        if (apparticleNotNullSize === 0) {
            apparticle.parentNode.removeChild(apparticle);
        }
    } else if (gtype === '3h3_youxi_downhref') {
        var downaddressa = con.querySelector('#address');
        if (downaddressa.getAttribute('murl') !== '') {
            downaddressa.getAttribute('href', downaddressa.getAttribute('murl'));
        }
        if (con.querySelector('.down_flag') !== null) {
            var downpageid = con.querySelector('.down_flag').getAttribute('down_page_id');
            let req = siteurl + 'ajax_nodown.asp?id=' + downpageid;
            fetchJsonp(req, {
                jsonpCallback: 'callback'
            }).then(function (res) {
                return res.json()
            }).then(function (date) {
               // 处理parse 后的data数据
               if (date === 1) {
                    con.querySelector('.down_flag').style.background = 'rgb(204, 204, 204)';
                    con.querySelector('.down_flag').setAttribute('href', 'javascript:;');
                    con.querySelector('.down_flag').setAttribute('data-href', 'javascript:;');
                    con.querySelector('.down_flag').text = '下载已关闭';
                }
            }).catch(function(ex) {
                // 捕获 parse的异常
                console.log('parsing failed', ex)
            })
        }
        downaddressa.onclick = function() {   
            if(downaddressa.getAttribute('href') !== 'javascript:;') {
                let downHitsUrl = siteurl + 'ajax.asp?Action=5&id=' + downpageid;
                fetchJsonp(downHitsUrl, {
                    jsonpCallback: 'callback'
                }).then(function (res) {
                    return res.json()
                }).then(function (date) {
                    
                }).catch(function(ex) {
                    // 捕获 parse的异常
                    console.log('parsing failed', ex)
                })
            }
        }
    } else if (gtype === '3h3_youxi_imgs') {
        setTimeout(function () {
            var firstImgHeight = con.querySelectorAll('.m-slide1 ul li')[0].querySelector('img').offsetHeight;
            var firstImgWidth = con.querySelectorAll('.m-slide1 ul li')[0].querySelector('img').offsetWidth;
            if (firstImgHeight < firstImgWidth) {
                addClass(con.querySelector('.m-slide1'), 'banner_pics');
                con.querySelector('.m-slide1').style.height = '150px';
            } else {
                con.querySelector('.m-slide1').style.height = firstImgHeight;
            }
        }, 500);
    } else if (gtype === '3h3_news_tab') {
        var tabsnav = con.getAttribute('tabs-nav');
        var navcur = con.getAttribute('nav-cur');
        var tabskey = con.getAttribute('tabs-key');
        let tbKey = con.querySelectorAll(tabskey);
        for (let i = 0; i < tbKey.length; i++) {
            if (tbKey[i].querySelector('ul').innerHTML.trim() === '') {
                tbKey[i].parentNode.removeChild(tbKey[i]);
                let tb = con.querySelectorAll(tabsnav)[i];
                tb.parentNode.removeChild(tb);
            }
        }
        con.querySelector(tabskey).style.display = 'none';
        con.querySelector(tabsnav).onclick = function () {
            con.querySelector(tabskey).style.display = 'none';
            con.querySelector(tabskey)[this.index].style.display = 'block';
            removeClass(con.querySelector(tabsnav), navcur);
            addClass(this, navcur);
        }
        if (con.querySelector(tabsnav).length === 1) {
            con.querySelector(tabsnav).parentNode.css('width', '50%');
        }
        con.querySelector(tabsnav).eq(0).click();
    } else if (gtype === '3h3_youxi_search') {
        var submitbtn = con.getAttribute('submit_btn');
        con.querySelector(submitbtn).onclick = function () {
            con.querySelector('form').submit();
        }
    } else if (gtype === '3h3_zt_show_menu') {
        var headsearch = con.querySelector('.headsearch');
        headsearch.onclick = function () {
            if (con.querySelector('.search-box').style.display === 'block') {
                con.querySelector('.search-box').style.display = 'none';
            } else {
                con.querySelector('.search-box').style.display = 'block';
            }
        }
        var navbtn = con.querySelector('.nav-btn');
        navbtn.onclick = function () {
            if (con.querySelector('.nav').style.display === 'block') {
                con.querySelector('.nav').style.display = 'none';
            } else {
                con.querySelector('.nav').style.display = 'block';
            }
        }
        con.querySelector('.m-aside .menu').style.display = 'block';
        var menubtn = con.querySelector('.m-aside .menu');
        menubtn.onclick = function () {
            if (con.querySelector('.body-masking').style.display === 'block') {
                con.querySelector('.body-masking').style.display = 'none';
            } else {
                con.querySelector('.body-masking').style.display = 'block';
            }
        }
        var bodymasking = con.querySelector('.body-masking');
        bodymasking.onclick = function () {
            bodymasking.style.display = 'none';
        }
    }
  }
}
