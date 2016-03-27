/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-audio-backgroundsize-bgpositionshorthand-bgrepeatspace_bgrepeatround-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-capture-classlist-csscolumns-cssfilters-cssgradients-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransitions-cubicbezierrange-directory-fileinput-flexboxtweener-flexwrap-fontface-formattribute-formvalidation-generatedcontent-hsla-ie8compat-lastchild-localizednumber-mediaqueries-multiplebgs-nthchild-objectfit-opacity-overflowscrolling-placeholder-regions-requestautocomplete-rgba-shapes-siblinggeneral-subpixelfont-supports-svg-target-textalignlast-textareamaxlength-textshadow-video-webgl-printshiv-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,a,s;for(var d in x)if(x.hasOwnProperty(d)){if(e=[],t=x[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],s=a.split("."),1===s.length?Modernizr[s[0]]=i:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=i),y.push((i?"":"no-")+s.join("-"))}}function o(e){var t=k.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?k.className.baseVal=t:k.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e,t){return!!~(""+e).indexOf(t)}function d(){var e=t.body;return e||(e=a(S?"svg":"body"),e.fake=!0),e}function l(e,n,r,i){var o,s,l,u,c="modernizr",p=a("div"),f=d();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=i?i[r]:c+(r+1),p.appendChild(l);return o=a("style"),o.type="text/css",o.id="s"+c,(f.fake?f:p).appendChild(o),f.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),p.id=c,f.fake&&(f.style.background="",f.style.overflow="hidden",u=k.style.overflow,k.style.overflow="hidden",k.appendChild(f)),s=n(p,e),f.fake?(f.parentNode.removeChild(f),k.style.overflow=u,k.offsetHeight):p.parentNode.removeChild(p),!!s}function u(e,t){if("object"==typeof e)for(var n in e)j(e,n)&&u(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?p(i,n||t):i);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(m(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+m(t[i])+":"+r+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function g(e,t,i,o){function d(){u&&(delete W.style,delete W.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var l=h(e,i);if(!r(l,"undefined"))return l}for(var u,p,f,m,g,v=["modernizr","tspan"];!W.style;)u=!0,W.modElem=a(v.shift()),W.style=W.modElem.style;for(f=e.length,p=0;f>p;p++)if(m=e[p],g=W.style[m],s(m,"-")&&(m=c(m)),W.style[m]!==n){if(o||r(i,"undefined"))return d(),"pfx"==t?m:!0;try{W.style[m]=i}catch(b){}if(W.style[m]!=g)return d(),"pfx"==t?m:!0}return d(),!1}function v(e,t,n,i,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+M.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?g(s,t,i,o):(s=(e+" "+B.join(a+" ")+a).split(" "),f(s,t,n))}function b(e,t,r){return v(e,n,n,t,r)}var y=[],x=[],T={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=T,Modernizr=new Modernizr,Modernizr.addTest("ie8compat",!e.addEventListener&&!!t.documentMode&&7===t.documentMode),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var w="CSS"in e&&"supports"in e.CSS,C="supportsCSS"in e;Modernizr.addTest("supports",w||C),Modernizr.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(n){return!1}});var k=t.documentElement;Modernizr.addTest("classlist","classList"in k);var S="svg"===k.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var e=a("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("video",function(){var e=a("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("webgl",function(){var t=a("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e}),Modernizr.addTest("bgpositionshorthand",function(){var e=a("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("multiplebgs",function(){var e=a("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("csspointerevents",function(){var e=a("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),Modernizr.addTest("regions",function(){if(S)return!1;var e=Modernizr.prefixed("flowFrom"),t=Modernizr.prefixed("flowInto"),r=!1;if(!e||!t)return r;var i=a("iframe"),o=a("div"),s=a("div"),d=a("div"),l="modernizr_flow_for_regions_check";s.innerText="M",o.style.cssText="top: 150px; left: 150px; padding: 0px;",d.style.cssText="width: 50px; height: 50px; padding: 42px;",d.style[e]=l,o.appendChild(s),o.appendChild(d),k.appendChild(o);var u,c,p=s.getBoundingClientRect();return s.style[t]=l,u=s.getBoundingClientRect(),c=parseInt(u.left-p.left,10),k.removeChild(o),42==c?r=!0:(k.appendChild(i),p=i.getBoundingClientRect(),i.style[t]=l,u=i.getBoundingClientRect(),p.height>0&&p.height!==u.height&&0===u.height&&(r=!0)),s=d=o=i=n,r}),Modernizr.addTest("cssremunit",function(){var e=a("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("rgba",function(){var e=a("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("capture","capture"in a("input")),Modernizr.addTest("fileinput",function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var e=a("input");return e.type="file",!e.disabled}),Modernizr.addTest("formattribute",function(){var e,n=a("form"),r=a("input"),i=a("div"),o="formtest"+(new Date).getTime(),s=!1;n.id=o;try{r.setAttribute("form",o)}catch(d){t.createAttribute&&(e=t.createAttribute("form"),e.nodeValue=o,r.setAttributeNode(e))}return i.appendChild(n),i.appendChild(r),k.appendChild(i),s=n.elements&&1===n.elements.length&&r.form==n,i.parentNode.removeChild(i),s}),Modernizr.addTest("placeholder","placeholder"in a("input")&&"placeholder"in a("textarea")),Modernizr.addTest("textareamaxlength",!!("maxLength"in a("textarea")));var E=T._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];T._prefixes=E,Modernizr.addTest("cubicbezierrange",function(){var e=a("a");return e.style.cssText=E.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",i=0,o=E.length-1;o>i;i++)e=0===i?"to ":"",r+=t+E[i]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var s=a("a"),d=s.style;return d.cssText=r,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=a("a").style;return e.cssText=E.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=a("a"),r=n.style;return r.cssText=e+E.join(t+";"+e).slice(0,-e.length),-1!==r.position.indexOf(t)});S||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=k.elements;return"string"==typeof e?e.split(" "):e}function i(e,t){var n=k.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),k.elements=n+" "+e,l(t)}function o(e){var t=C[e[T]];return t||(t={},w++,e[T]=w,C[w]=t),t}function a(e,n,r){if(n||(n=t),g)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():x.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||y.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function s(e,n){if(e||(e=t),g)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,s=r(),d=s.length;d>a;a++)i.createElement(s[a]);return i}function d(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return k.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(k,t.frag)}function l(e){e||(e=t);var r=o(e);return!k.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||d(e,r),e}function u(e){for(var t,n=e.getElementsByTagName("*"),i=n.length,o=RegExp("^(?:"+r().join("|")+")$","i"),a=[];i--;)t=n[i],o.test(t.nodeName)&&a.push(t.applyElement(c(t)));return a}function c(e){for(var t,n=e.attributes,r=n.length,i=e.ownerDocument.createElement(E+":"+e.nodeName);r--;)t=n[r],t.specified&&i.setAttribute(t.nodeName,t.nodeValue);return i.style.cssText=e.style.cssText,i}function p(e){for(var t,n=e.split("{"),i=n.length,o=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+E+"\\:$2";i--;)t=n[i]=n[i].split("}"),t[t.length-1]=t[t.length-1].replace(o,a),n[i]=t.join("}");return n.join("{")}function f(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,i,a=o(e),s=e.namespaces,d=e.parentWindow;return!z||e.printShived?e:("undefined"==typeof s[E]&&s.add(E),d.attachEvent("onbeforeprint",function(){t();for(var o,a,s,d=e.styleSheets,l=[],c=d.length,f=Array(c);c--;)f[c]=d[c];for(;s=f.pop();)if(!s.disabled&&S.test(s.media)){try{o=s.imports,a=o.length}catch(m){a=0}for(c=0;a>c;c++)f.push(o[c]);try{l.push(s.cssText)}catch(m){}}l=p(l.reverse().join("")),i=u(e),r=n(e,l)}),d.attachEvent("onafterprint",function(){f(i),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,g,v="3.7.3",b=e.html5||{},y=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,x=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,T="_html5shiv",w=0,C={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,g=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){h=!0,g=!0}}();var k={elements:b.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:v,shivCSS:b.shivCSS!==!1,supportsUnknownElements:g,shivMethods:b.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:s,addElements:i};e.html5=k,l(t);var S=/^$|\b(?:all|print)\b/,E="html5shiv",z=!g&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();k.type+=" print",k.shivPrint=m,m(t),"object"==typeof module&&module.exports&&(module.exports=k)}("undefined"!=typeof e?e:this,t),Modernizr.addTest("hsla",function(){var e=a("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",s(e.backgroundColor,"rgba")||s(e.backgroundColor,"hsla")});var z=T.testStyles=l,_=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,i=533>t&&e.match(/android/gi);return n||i||r}();_?Modernizr.addTest("fontface",!1):z('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),i=r.sheet||r.styleSheet,o=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"",a=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",a)}),z('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=7)}),Modernizr.addTest("cssinvalid",function(){return z("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=a("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),z("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),z("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)},5),z("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+E.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(e){Modernizr.addTest("cssscrollbar",40==e.scrollWidth)}),Modernizr.addTest("siblinggeneral",function(){return z("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),z("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(t){var n=t.firstChild;n.innerHTML="This is a text written in Arial",Modernizr.addTest("subpixelfont",e.getComputedStyle?"44px"!==e.getComputedStyle(n,null).getPropertyValue("width"):!1)},1,["subpixel"]),Modernizr.addTest("formvalidation",function(){var t=a("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var n,r=!1;return Modernizr.formvalidationapi=!0,t.addEventListener("submit",function(t){(!e.opera||e.operamini)&&t.preventDefault(),t.stopPropagation()},!1),t.innerHTML='<input name="modTest" required="required" /><button></button>',z("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(t),n=t.getElementsByTagName("input")[0],n.addEventListener("invalid",function(e){r=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!n.validationMessage,t.getElementsByTagName("button")[0].click()}),r});var P=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();T.mq=P,Modernizr.addTest("mediaqueries",P("only all"));var j;!function(){var e={}.hasOwnProperty;j=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),T._l={},T.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},T._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){T.addTest=u});var N="Moz O ms Webkit",B=T._config.usePrefixes?N.toLowerCase().split(" "):[];T._domPrefixes=B,Modernizr.addTest("fileinputdirectory",function(){var e=a("input"),t="directory";if(e.type="file",t in e)return!0;for(var n=0,r=B.length;r>n;n++)if(B[n]+t in e)return!0;return!1});var R=a("input"),A="search tel url email datetime date month week time datetime-local number range color".split(" "),L={};Modernizr.inputtypes=function(e){for(var r,i,o,a=e.length,s="1)",d=0;a>d;d++)R.setAttribute("type",r=e[d]),o="text"!==R.type&&"style"in R,o&&(R.value=s,R.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&R.style.WebkitAppearance!==n?(k.appendChild(R),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(R,null).WebkitAppearance&&0!==R.offsetHeight,k.removeChild(R)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?R.checkValidity&&R.checkValidity()===!1:R.value!=s)),L[e[d]]=!!o;return L}(A),Modernizr.addTest("localizednumber",function(){if(!Modernizr.inputtypes.number)return!1;if(!Modernizr.formvalidation)return!1;var e,n=a("div"),r=d(),i=function(){return k.insertBefore(r,k.firstElementChild||k.firstChild)}();n.innerHTML='<input type="number" value="1.0" step="0.1"/>';var o=n.childNodes[0];i.appendChild(n),o.focus();try{t.execCommand("InsertText",!1,"1,1")}catch(s){}return e="number"===o.type&&1.1===o.valueAsNumber&&o.checkValidity(),i.removeChild(n),r.fake&&i.parentNode.removeChild(i),e});var M=T._config.usePrefixes?N.split(" "):[];T._cssomPrefixes=M;var q=function(t){var r,i=E.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var a=0;i>a;a++){var s=E[a],d=s.toUpperCase()+"_"+r;if(d in o)return"@-"+s.toLowerCase()+"-"+t}return!1};T.atRule=q;var $={elem:a("modernizr")};Modernizr._q.push(function(){delete $.elem});var W={style:$.elem.style};Modernizr._q.unshift(function(){delete W.style});var H=T.testProp=function(e,t,r){return g([e],n,t,r)};Modernizr.addTest("textshadow",H("textShadow","1px 1px")),T.testAllProps=v,T.testAllProps=b,Modernizr.addTest("bgrepeatround",b("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",b("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",b("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",b("backgroundSize","cover")),Modernizr.addTest("borderimage",b("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",b("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",b("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",b("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=b("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=b("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||b(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return b("filter","blur(2px)");var e=a("a");return e.style.cssText=E.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("flexboxtweener",b("flexAlign","end",!0)),Modernizr.addTest("flexwrap",b("flexWrap","wrap",!0)),Modernizr.addAsyncTest(function(){function n(){function i(){try{var e=a("div"),n=a("span"),r=e.style,i=0,o=0,s=!1,d=t.body.firstElementChild||t.body.firstChild;return e.appendChild(n),n.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",t.body.insertBefore(e,d),r.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",i=n.offsetHeight,o=n.offsetWidth,r.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+E.join("hyphens:auto; "),s=n.offsetHeight!=i||n.offsetWidth!=o,t.body.removeChild(e),e.removeChild(n),s}catch(l){return!1}}function o(e,n){try{var r=a("div"),i=a("span"),o=r.style,s=0,d=!1,l=!1,u=!1,c=t.body.firstElementChild||t.body.firstChild;return o.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",r.appendChild(i),t.body.insertBefore(r,c),i.innerHTML="mm",s=i.offsetHeight,i.innerHTML="m"+e+"m",l=i.offsetHeight>s,n?(i.innerHTML="m<br />m",s=i.offsetWidth,i.innerHTML="m"+e+"m",u=i.offsetWidth>s):u=!0,l===!0&&u===!0&&(d=!0),t.body.removeChild(r),r.removeChild(i),d}catch(p){return!1}}function s(n){try{var r,i=a("input"),o=a("div"),s="lebowski",d=!1,l=t.body.firstElementChild||t.body.firstChild;o.innerHTML=s+n+s,t.body.insertBefore(o,l),t.body.insertBefore(i,o),i.setSelectionRange?(i.focus(),i.setSelectionRange(0,0)):i.createTextRange&&(r=i.createTextRange(),r.collapse(!0),r.moveEnd("character",0),r.moveStart("character",0),r.select());try{e.find?d=e.find(s+s):(r=e.self.document.body.createTextRange(),d=r.findText(s+s))}catch(u){d=!1}return t.body.removeChild(o),t.body.removeChild(i),d}catch(u){return!1}}return t.body||t.getElementsByTagName("body")[0]?(u("csshyphens",function(){if(!b("hyphens","auto",!0))return!1;try{return i()}catch(e){return!1}}),u("softhyphens",function(){try{return o("&#173;",!0)&&o("&#8203;",!1)}catch(e){return!1}}),void u("softhyphensfind",function(){try{return s("&#173;")&&s("&#8203;")}catch(e){return!1}})):void setTimeout(n,r)}var r=300;setTimeout(n,r)}),Modernizr.addTest("cssmask",b("maskRepeat","repeat-x",!0)),Modernizr.addTest("overflowscrolling",b("overflowScrolling","touch",!0)),Modernizr.addTest("cssreflections",b("boxReflect","above",!0)),Modernizr.addTest("cssresize",b("resize","both",!0)),Modernizr.addTest("shapes",b("shapeOutside","content-box",!0)),Modernizr.addTest("textalignlast",b("textAlignLast")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&b("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!b("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in k.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",z(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",b("transition","all",!0)),Modernizr.addTest("csspseudotransitions",function(){var t=!1;if(!Modernizr.csstransitions||!e.getComputedStyle)return t;var n='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(n,function(n){e.getComputedStyle(n,":before").getPropertyValue("font-size"),n.className+="trigger",t="5px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t}),Modernizr.addTest("cssanimations",b("animationName","a",!0)),Modernizr.addTest("csspseudoanimations",function(){var t=!1;if(!Modernizr.cssanimations||!e.getComputedStyle)return t;var n=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return Modernizr.testStyles(n,function(n){t="10px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t});var F=T.prefixed=function(e,t,n){return 0===e.indexOf("@")?q(e):(-1!=e.indexOf("-")&&(e=c(e)),t?v(e,t,n):v(e,"pfx"))};Modernizr.addTest("objectfit",!!F("objectFit"),{aliases:["object-fit"]}),Modernizr.addTest("requestautocomplete",!!F("requestAutocomplete",a("form"))),i(),o(y),delete T.addTest,delete T.addAsyncTest;for(var O=0;O<Modernizr._q.length;O++)Modernizr._q[O]();e.Modernizr=Modernizr}(window,document);