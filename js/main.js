!function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var d=document.head||document.getElementsByTagName("head")[0],e=document.createElement("div");e.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',d.appendChild(e.childNodes[1])}return b&&a.extend(c,b),this.each(function(){var b=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];c.customSelector&&b.push(c.customSelector);var d=".fitvidsignore";c.ignore&&(d=d+", "+c.ignore);var e=a(this).find(b.join(","));e=e.not("object object"),e=e.not(d),e.each(function(){var b=a(this);if(!(b.parents(d).length>0||"embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){b.css("height")||b.css("width")||!isNaN(b.attr("height"))&&!isNaN(b.attr("width"))||(b.attr("height",9),b.attr("width",16));var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),e=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),f=c/e;if(!b.attr("name")){var g="fitvid"+a.fn.fitVids._count;b.attr("name",g),a.fn.fitVids._count++}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*f+"%"),b.removeAttr("height").removeAttr("width")}})})},a.fn.fitVids._count=0}(window.jQuery||window.Zepto),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h=function(){},i=!!window.jQuery,j=a(window),k=function(a,c){b.ev.on("mfp"+a+".mfp",c)},l=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},m=function(c,d){b.ev.triggerHandler("mfp"+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},n=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},o=function(){a.magnificPopup.instance||(b=new h,b.init(),a.magnificPopup.instance=b)},p=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};h.prototype={constructor:h,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=p(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(!1===c.isObj){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=l("bg").on("click.mfp",function(){b.close()}),b.wrap=l("wrap").attr("tabindex",-1).on("click.mfp",function(a){b._checkIfClose(a.target)&&b.close()}),b.container=l("container",b.wrap)),b.contentContainer=l("content"),b.st.preloader&&(b.preloader=l("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var o=i[e];o=o.charAt(0).toUpperCase()+o.slice(1),b["init"+o].call(b)}m("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(k("MarkupParse",function(a,b,c,d){c.close_replaceWith=n(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(n())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:j.scrollTop(),position:"absolute"}),(!1===b.st.fixedBgPos||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup.mfp",function(a){27===a.keyCode&&b.close()}),j.on("resize.mfp",function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var p=b.wH=j.height(),q={};if(b.fixedContentPos&&b._hasScrollBar(p)){var r=b._getScrollbarSize();r&&(q.marginRight=r)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):q.overflow="hidden");var s=b.st.mainClass;return b.isIE7&&(s+=" mfp-ie7"),s&&b._addClassToMFP(s),b.updateItemHTML(),m("BuildControls"),a("html").css(q),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP("mfp-ready"),b._setFocus()):b.bgOverlay.addClass("mfp-ready"),d.on("focusin.mfp",b._onFocusIn)},16),b.isOpen=!0,b.updateSize(p),m("Open"),c},close:function(){b.isOpen&&(m("BeforeClose"),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP("mfp-removing"),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){m("Close");var c="mfp-removing mfp-ready ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup.mfp focusin.mfp"),b.ev.off(".mfp"),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&!0!==b.currTemplate[b.currItem.type]||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,m("AfterClose")},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||j.height();b.fixedContentPos||b.wrap.css("height",b.wH),m("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(m("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=!!b.st[d]&&b.st[d].markup;m("FirstMarkupParse",f),b.currTemplate[d]=!f||a(f)}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,m("Change",c),e=c.type,b.container.prepend(b.contentContainer),m("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&!0===b.currTemplate[c]?b.content.find(".mfp-close").length||b.content.append(n()):b.content=a:b.content="",m("BeforeAppend"),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,m("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){if((void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick)||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var f=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(b))return!0}else if(j.width()<f)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};m("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass("mfp-prevent-close")){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||j.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){if(c.target!==b.wrap[0]&&!a.contains(b.wrap[0],c.target))return b._setFocus(),!1},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),m("MarkupParse",[b,c,d]),a.each(c,function(c,d){if(void 0===d||!1===d)return!0;if(e=c.split("_"),e.length>1){var f=b.find(".mfp-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(".mfp-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:h.prototype,modules:[],open:function(b,c){return o(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){o();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=i?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),i?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var q,r,s,t=function(){s&&(r.after(s.addClass(q)).detach(),s=null)};a.magnificPopup.registerModule("inline",{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push("inline"),k("Close.inline",function(){t()})},getInline:function(c,d){if(t(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(r||(q=e.hiddenClass,r=l(q),q="mfp-"+q),s=f.after(r).detach().removeClass(q)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var u,v=function(){u&&a(document.body).removeClass(u)},w=function(){v(),b.req&&b.req.abort()};a.magnificPopup.registerModule("ajax",{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push("ajax"),u=b.st.ajax.cursor,k("Close.ajax",w),k("BeforeChange.ajax",w)},getAjax:function(c){u&&a(document.body).addClass(u),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};m("ParseAjax",g),b.appendContent(a(g.data),"ajax"),c.finished=!0,v(),b._setFocus(),setTimeout(function(){b.wrap.addClass("mfp-ready")},16),b.updateStatus("ready"),m("AjaxContentAdded")},error:function(){v(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var x,y=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),k("Open"+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),k("Close"+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),j.off("resize.mfp")}),k("Resize"+d,b.resizeImage),b.isLowIE&&k("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,x&&clearInterval(x),a.isCheckingImgSize=!1,m("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){x&&clearInterval(x),x=setInterval(function(){if(d.naturalWidth>0)return void b._onImageHasSize(a);c>200&&clearInterval(x),c++,3===c?e(10):40===c?e(50):100===c&&e(500)},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,m("ImageLoadComplete")):(e++,e<200?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:y(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(x&&clearInterval(x),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var z,A=function(){return void 0===z&&(z=void 0!==document.createElement("p").style.MozTransform),z};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,h=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},i=function(){b.content.css("visibility","visible")};k("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),!(a=b._getItemToZoom()))return void i();f=h(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){i(),setTimeout(function(){f.remove(),a=f=null,m("ZoomAnimationEnded")},16)},g)},16)}}),k("BeforeClose"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(!(a=b._getItemToZoom()))return;f=h(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),k("Close"+d,function(){b._allowZoom()&&(i(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return!!b.currItem.hasSize&&b.currItem.img},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(i?d.innerHeight():d[0].offsetHeight)-g-f};return A()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var B=function(a){if(b.currTemplate.iframe){var c=b.currTemplate.iframe.find("iframe");c.length&&(a||(c[0].src="//about:blank"),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule("iframe",{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push("iframe"),k("BeforeChange",function(a,b,c){b!==c&&("iframe"===b?B():"iframe"===c&&B(!0))}),k("Close.iframe",function(){B()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){if(e.indexOf(this.index)>-1)return this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var C=function(a){var c=b.items.length;return a>c-1?a-c:a<0?c+a:a},D=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";if(b.direction=!0,!c||!c.enabled)return!1;f+=" mfp-gallery",k("Open"+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){if(b.items.length>1)return b.next(),!1}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),k("UpdateStatus"+e,function(a,c){c.text&&(c.text=D(c.text,b.currItem.index,b.items.length))}),k("MarkupParse"+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?D(c.tCounter,f.index,g):""}),k("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass("mfp-prevent-close"),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass("mfp-prevent-close");e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),k("Change"+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),k("Close"+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})},next:function(){b.direction=!0,b.index=C(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=C(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=C(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),m("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,m("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});a.magnificPopup.registerModule("retina",{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(k("ImageHasSize.retina",function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),k("ElementParse.retina",function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),o()}),function(a,b,c,d){a.extend(a.fn,{accrue:function(b){return b=a.extend({calculationMethod:f},a.fn.accrue.options,b),this.each(function(){var c=a(this);c.find(".form").length||c.append('<div class="form"></div>');e(c,b,"amount"),e(c,b,"rate"),e(c,b,"term");if("compare"==b.mode){e(c,b,"rate_compare")}var d;".results"===b.response_output_div?(0===c.find(".results").length&&c.append('<div class="results"></div>'),d=c.find(".results")):d=a(b.response_output_div);var i;switch(b.mode){case"basic":i=f;break;case"compare":i=g;break;case"amortization":i=h}i(c,b,d),"button"==b.operation?(0===c.find("button").length&&0===c.find("input[type=submit]").length&&0===c.find("input[type=image]").length&&c.find(".form").append('<button class="accrue-calculate">'+b.button_label+"</button>"),c.find("button, input[type=submit], input[type=image]").each(function(){a(this).click(function(a){a.preventDefault(),i(c,b,d)})})):c.find("input, select").each(function(){a(this).bind("keyup change",function(){i(c,b,d)})}),c.find("form").each(function(){a(this).submit(function(a){a.preventDefault(),i(c,b,d)})})})}}),a.fn.accrue.options={mode:"basic",operation:"keyup",default_values:{amount:"$7,500",rate:"7%",rate_compare:"1.49%",term:"36m"},field_titles:{amount:"Loan Amount",rate:"Rate (APR)",rate_compare:"Comparison Rate",term:"Term"},button_label:"Calculate",field_comments:{amount:"",rate:"",rate_compare:"",term:"Format: 12m, 36m, 3y, 7y"},response_output_div:".results",response_basic:"<p><strong>Monthly Payment:</strong><br />$%payment_amount%</p><p><strong>Number of Payments:</strong><br />%num_payments%</p><p><strong>Total Payments:</strong><br />$%total_payments%</p><p><strong>Total Interest:</strong><br />$%total_interest%</p>",response_compare:'<p class="total-savings">Save $%savings% in interest!</p>',error_text:'<p class="error">Please fill in all fields.</p>',callback:function(a,b){}};var e=function(a,b,c){var d;return a.find(".accrue-"+c).length?d=a.find(".accrue-"+c):a.find("."+c).length?d=a.find("."+c):a.find("input[name~="+c+"]").length?a.find("input[name~="+c+"]"):d="","string"!=typeof d?d.val():"term_compare"!=c&&(a.find(".form").append('<div class="accrue-field-'+c+'"><p><label>'+b.field_titles[c]+':</label><input type="text" class="'+c+'" value="'+b.default_values[c]+'" />'+(b.field_comments[c].length>0?"<small>"+b.field_comments[c]+"</small>":"")+"</p></div>"),a.find("."+c).val())},f=function(b,c,d){var f=a.loanInfo({amount:e(b,c,"amount"),rate:e(b,c,"rate"),term:e(b,c,"term")});if(0!==f){var g=c.response_basic.replace("%payment_amount%",f.payment_amount_formatted).replace("%num_payments%",f.num_payments).replace("%total_payments%",f.total_payments_formatted).replace("%total_interest%",f.total_interest_formatted);d.html(g)}else d.html(c.error_text);c.callback(b,f)},g=function(b,c,d){var f=e(b,c,"term_compare");"boolean"==typeof f&&(f=e(b,c,"term"));var g=a.loanInfo({amount:e(b,c,"amount"),rate:e(b,c,"rate"),term:e(b,c,"term")}),h=a.loanInfo({amount:e(b,c,"amount"),rate:e(b,c,"rate_compare"),term:f}),i={loan_1:g,loan_2:h};if(0!==g&&0!==h){g.total_interest-h.total_interest>0?i.savings=g.total_interest-h.total_interest:i.savings=0;var j=c.response_compare.replace("%savings%",i.savings.toFixed(2)).replace("%loan_1_payment_amount%",h.payment_amount_formatted).replace("%loan_1_num_payments%",h.num_payments).replace("%loan_1_total_payments%",h.total_payments_formatted).replace("%loan_1_total_interest%",h.total_interest_formatted).replace("%loan_2_payment_amount%",g.payment_amount_formatted).replace("%loan_2_num_payments%",g.num_payments).replace("%loan_2_total_payments%",g.total_payments_formatted).replace("%loan_2_total_interest%",g.total_interest_formatted);d.html(j)}else d.html(c.error_text);c.callback(b,i)},h=function(b,c,d){var f=a.loanInfo({amount:e(b,c,"amount"),rate:e(b,c,"rate"),term:e(b,c,"term")});if(0!==f){for(var g='<table class="accrue-amortization"><tr><th class="accrue-payment-number">#</th><th class="accrue-payment-amount">Payment Amt.</th><th class="accrue-total-interest">Total Interest</th><th class="accrue-total-payments">Total Payments</th><th class="accrue-balance">Balance</th></tr>',h=f.payment_amount-f.original_amount/f.num_payments,i=f.payment_amount-h,j=0,k=0,l=parseInt(f.original_amount),m=0;m<f.num_payments;m++){j+=h,k+=f.payment_amount,l-=i;var n="td";m==f.num_payments-1&&(n="th"),g=g+"<tr><"+n+' class="accrue-payment-number">'+(m+1)+"</"+n+"><"+n+' class="accrue-payment-amount">$'+f.payment_amount_formatted+"</"+n+"><"+n+' class="accrue-total-interest">$'+j.toFixed(2)+"</"+n+"><"+n+' class="accrue-total-payments">$'+k.toFixed(2)+"</"+n+"><"+n+' class="accrue-balance">$'+l.toFixed(2)+"</"+n+"></tr>"}g+="</table>",d.html(g)}else d.html(c.error_text);c.callback(b,f)};a.loanInfo=function(a){var b=(void 0!==a.amount?a.amount:0).replace(/[^\d.]/gi,""),c=(void 0!==a.rate?a.rate:0).replace(/[^\d.]/gi,""),d=void 0!==a.term?a.term:0;d=d.match("y")?12*parseInt(d.replace(/[^\d.]/gi,"")):parseInt(d.replace(/[^\d.]/gi,""));var e=c/100/12,f=Math.pow(1+e,d),g=b*f*e/(f-1);return b*c*d>0?{original_amount:b,payment_amount:g,payment_amount_formatted:g.toFixed(2),num_payments:d,total_payments:g*d,total_payments_formatted:(g*d).toFixed(2),total_interest:g*d-b,total_interest_formatted:(g*d-b).toFixed(2)}:0}}(jQuery,window,document),jQuery(document).ready(function(a){if(a(".calculator-compare").accrue({mode:"compare"}),a(".calculator-loan").accrue(),a(".calculator.scratch.one").length){var b=function(){var b=a(".calculator.scratch.one"),c=b.find(".amount").val(),d=b.find(".term").val(),e=b.find(".rate").val();if(""!=c&&0!=c&&""!=d&&0!=d&&""!=e&&0!=e){var f=a.loanInfo({amount:c,term:d,rate:e});f.payment_amount>0?b.find(".payment").val("$"+f.payment_amount_formatted):b.find(".payment").val("")}};b(),a(".calculator.scratch.one input").keyup(b)}if(a(".calculator.scratch.two").length){var b=function(){var b=a(".calculator.scratch.two"),c=b.find(".amount").val(),d=b.find(".term").val(),e=b.find(".rate").val();if(""!=c&&0!=c&&""!=d&&0!=d&&""!=e&&0!=e){var f=a.loanInfo({amount:c,term:d,rate:e});f.payment_amount>0?b.find(".payment").val("$"+f.payment_amount_formatted):b.find(".payment").val("")}};b(),a(".calculator.scratch.two input").keyup(b)}if(a(".calculator.scratch.three").length){var b=function(){var b=a(".calculator.scratch.three"),c=b.find(".amount").val(),d=b.find(".term").val(),e=b.find(".rate").val();if(""!=c&&0!=c&&""!=d&&0!=d&&""!=e&&0!=e){var f=a.loanInfo({amount:c,term:d,rate:e});f.payment_amount>0?b.find(".payment").val("$"+f.payment_amount_formatted):b.find(".payment").val("")}};b(),a(".calculator.scratch.three input").keyup(b)}});var jaaulde=window.jaaulde||{};jaaulde.utils=jaaulde.utils||{},jaaulde.utils.cookies=function(){var a,b,c,d,e={expiresAt:null,path:"/",domain:null,secure:!1};return a=function(a){var b,c;return"object"!=typeof a||null===a?b=e:(b={expiresAt:e.expiresAt,path:e.path,domain:e.domain,secure:e.secure},"object"==typeof a.expiresAt&&a.expiresAt instanceof Date?b.expiresAt=a.expiresAt:"number"==typeof a.hoursToLive&&0!==a.hoursToLive&&(c=new Date,c.setTime(c.getTime()+60*a.hoursToLive*60*1e3),b.expiresAt=c),"string"==typeof a.path&&""!==a.path&&(b.path=a.path),"string"==typeof a.domain&&""!==a.domain&&(b.domain=a.domain),!0===a.secure&&(b.secure=a.secure)),b},b=function(b){return b=a(b),("object"==typeof b.expiresAt&&b.expiresAt instanceof Date?"; expires="+b.expiresAt.toGMTString():"")+"; path="+b.path+("string"==typeof b.domain?"; domain="+b.domain:"")+(!0===b.secure?"; secure":"")},c=function(){var a,b,c,d,e,f={},g=document.cookie.split(";");for(a=0;a<g.length;a+=1){b=g[a].split("="),c=b[0].replace(/^\s*/,"").replace(/\s*$/,"");try{d=decodeURIComponent(b[1])}catch(a){d=b[1]}if("object"==typeof JSON&&null!==JSON&&"function"==typeof JSON.parse)try{e=d,d=JSON.parse(d)}catch(a){d=e}f[c]=d}return f},d=function(){},d.prototype.get=function(a){var b,d,e=c();if("string"==typeof a)b=void 0!==e[a]?e[a]:null;else if("object"==typeof a&&null!==a){b={};for(d in a)void 0!==e[a[d]]?b[a[d]]=e[a[d]]:b[a[d]]=null}else b=e;return b},d.prototype.filter=function(a){var b,d={},e=c();"string"==typeof a&&(a=new RegExp(a));for(b in e)b.match(a)&&(d[b]=e[b]);return d},d.prototype.set=function(a,c,d){if("object"==typeof d&&null!==d||(d={}),void 0===c||null===c)c="",d.hoursToLive=-8760;else if("string"!=typeof c){if("object"!=typeof JSON||null===JSON||"function"!=typeof JSON.stringify)throw new Error("cookies.set() received non-string value and could not serialize.");c=JSON.stringify(c)}var e=b(d);document.cookie=a+"="+encodeURIComponent(c)+e},d.prototype.del=function(a,b){var c,d={};"object"==typeof b&&null!==b||(b={}),"boolean"==typeof a&&!0===a?d=this.get():"string"==typeof a&&(d[a]=!0);for(c in d)"string"==typeof c&&""!==c&&this.set(c,null,b)},d.prototype.test=function(){var a=!1;return this.set("cT","data"),"data"===this.get("cT")&&(this.del("cT"),a=!0),a},d.prototype.setOptions=function(b){"object"!=typeof b&&(b=null),e=a(b)},new d}(),function(){window.jQuery&&function(a){a.cookies=jaaulde.utils.cookies;var b={cookify:function(b){return this.each(function(){var c,d,e,f=["name","id"],g=a(this);for(c in f)if(!isNaN(c)&&"string"==typeof(d=g.attr(f[c]))&&""!==d){g.is(":checkbox, :radio")?g.attr("checked")&&(e=g.val()):e=g.is(":input")?g.val():g.html(),"string"==typeof e&&""!==e||(e=null),a.cookies.set(d,e,b);break}})},cookieFill:function(){return this.each(function(){var b,c,d,e,f=["name","id"],g=a(this);for(c=function(){return!!(b=f.pop())};c();)if("string"==typeof(d=g.attr(b))&&""!==d){e=a.cookies.get(d),null!==e&&(g.is(":checkbox, :radio")?g.val()===e?g.attr("checked","checked"):g.removeAttr("checked"):g.is(":input")?g.val(e):g.html(e));break}})},cookieBind:function(b){return this.each(function(){var c=a(this);c.cookieFill().change(function(){c.cookify(b)})})}};a.each(b,function(b){a.fn[b]=this})}(window.jQuery)}(),jQuery(document).ready(function(a){var b=a("header nav"),c=b.find("button.menu-toggle"),d=b.find(".nav-menu")
;a(".content img").removeAttr("width").removeAttr("height"),c.click(function(){d.is(":visible")?d.hide():d.show(),d.find("a").click(function(){var b=a(this).parent("li"),c=a(this).next("ul");!c.is(":visible")&&b.hasClass("menu-item-has-children")&&(event.preventDefault(),b.addClass("open"),c.show())})}),a(".accordion-box-title").click(function(){a(this).parent(".accordion-box").children(".accordion-box-content").slideToggle(600)}),a("button[data-url]").click(function(){window.location.href=a(this).attr("data-url")}),a(".content a:not(.previous):not(.next):not(.lightbox-iframe)").click(function(b){b.preventDefault();var c=a(this),d=c.attr("href");c.hasClass("bypass")||d.match(/lpccu.dev/i)||d.match(/lpccu.coop/i)||d.match(/lp.giraph.io/i)||"#"===d.charAt(0)||"/"===d.charAt(0)?location.href=d:confirm("This link is taking you to a third party provider - are you sure you want to proceed?")&&window.open(d,"_blank")}),a(".lightbox-iframe").magnificPopup({type:"iframe"})}),function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src="https://www.google-analytics.com/analytics.js",g.parentNode.insertBefore(f,g)}(window,document,"script",0,"ga"),ga("create","UA-97184804-1","auto"),ga("send","pageview"),jQuery(document).ready(function(a){if(a(".products")){var b=a(".products"),c=b.find(".product-list"),d=1;if(c.length){var e=b.find("button.product-nav"),f=b.find("button.product-nav.next"),g=b.find("button.product-nav.previous"),h=c.find(".product").length,i=function(){var a=c.width(),i=b.find(".product"),j=i.width()+2*parseFloat(i.css("margin-right").replace("px",""))+2*parseFloat(i.css("padding-right").replace("px","")),k=Math.round(a/j),l=Math.ceil(h/k);d>1&&g.prop("disabled",!1),d==l&&f.prop("disabled",!0),1==d&&g.prop("disabled",!0),d<l&&f.prop("disabled",!1),1==d&&d==l&&(e.addClass("unnecessary"),c.addClass("no-nav"))};i(),e.click(function(){var e=a(this).attr("class").replace("product-nav ",""),f=c.width(),g=b.find(".product"),j=g.width()+2*parseFloat(g.css("margin-right").replace("px",""))+2*parseFloat(g.css("padding-right").replace("px","")),k=Math.round(f/j);Math.ceil(h/k);"next"==e&&(c.css("text-indent",parseInt(c.css("text-indent"))-f),d+=1,i()),"previous"==e&&(c.css("text-indent",parseInt(c.css("text-indent"))+f),d-=1,i(),parseInt(c.css("text-indent"))>0&&c.css("text-indent",0))}),a(window).resize(function(){c.css("text-indent",0),d=1,i()})}}}),jQuery(document).ready(function(a){a(".showcase").each(function(){var b=a(this),c=0,d=b.find(".slide").size();if(void 0!==b){var e=b.find(".slide.visible"),f=b.find(".slide").last(),g=function(){var a=i(),b=a.prev(".slide");b.length||(b=f),a.attr("class","slide"),b.attr("class","slide visible"),setTimeout(function(){a.attr("class","slide hide-left")},400),j()},h=function(){var a=i(),b=a.next(".slide");b.length||(b=e),a.attr("class","slide hide-left"),b.attr("class","slide visible"),setTimeout(function(){a.attr("class","slide")},400),j()},i=function(){return b.find(".slide.visible")},j=function(){var c=i(),d=c.find("img");if(b.find(".slide-wrapper").length)var e=2*b.find(".slide-wrapper").css("margin-top").replace("px","");else var e=0;a(window).width()>=768?b.height(d.height()+e):b.height(c.height())};setTimeout(function(){j(),d>1&&(c=setInterval(h,1e4))},500),a(window).resize(function(){i();j()}),b.find(".showcase-nav a").click(function(){a(this).hasClass("previous")?g():h(),d>1&&clearInterval(c)}),b.find(".showcase-nav a.previous").hover(function(){b.find(".slide:not(.visible)").attr("class","slide hide-left")}),b.find(".showcase-nav a.next").hover(function(){b.find(".showcase .slide:not(.visible)").attr("class","slide")})}})}),jQuery(document).ready(function(a){a(".tab-content:first").length&&a(".tab-nav li").click(function(){var b=a(this).attr("class"),c=a(".tab-container").offset().top;a(".tab-content:not(."+b+"):visible").slideUp("slow"),a(".tab-content."+b+":hidden").slideDown("slow"),a("html,body").animate({scrollTop:c},700)}),a(".area-tabs").length&&(a(".area-tab-navigation li:first-child").click(function(){a(".area-tab-navigation li.active").removeClass("active"),a(this).addClass("active"),a(".area-tab-content.minors").removeClass("active").hide(),a(".area-tab-content.majors").addClass("active").show()}),a(".area-tab-navigation li:nth-child(2)").click(function(){a(".area-tab-navigation li.active").removeClass("active"),a(this).addClass("active"),a(".area-tab-content.majors").removeClass("active").hide(),a(".area-tab-content.minors").addClass("active").show()}))});