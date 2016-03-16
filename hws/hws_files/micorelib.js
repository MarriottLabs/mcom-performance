/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/*!
 * jQuery UI 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a,b){var d=a.nodeName.toLowerCase();if("area"===d){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&l(a)}return(/input|select|textarea|button|object/.test(d)?!a.disabled:"a"==d?a.href||b:b)&&l(a)}function l(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.16",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({propAttr:c.fn.prop||c.fn.attr,_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=
this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,
"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":
"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,m,n){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(m)g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;if(n)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,
outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){return k(a,!isNaN(c.attr(a,"tabindex")))},tabbable:function(a){var b=c.attr(a,
"tabindex"),d=isNaN(b);return(d||b>=0)&&k(a,!d)}});c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&
a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&
c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)try{b(d).triggerHandler("remove")}catch(e){}k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){try{b(this).triggerHandler("remove")}catch(d){}});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=
function(h){return!!b.data(h,a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):
d;if(e&&d.charAt(0)==="_")return h;e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=
b.extend(true,{},this.options,this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+
"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",
c);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b){var d=false;b(document).mouseup(function(){d=false});b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(c){return a._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(true===b.data(c.target,a.widgetName+".preventClickEvent")){b.removeData(c.target,a.widgetName+".preventClickEvent");c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+
this.widgetName)},_mouseDown:function(a){if(!d){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,f=a.which==1,g=typeof this.options.cancel=="string"&&a.target.nodeName?b(a.target).closest(this.options.cancel).length:false;if(!f||g||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=
this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}true===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(e){return c._mouseMove(e)};this._mouseUpDelegate=function(e){return c._mouseUp(e)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return d=true}},_mouseMove:function(a){if(b.browser.msie&&
!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=
false;a.target==this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Position 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var n=/left|center|right/,o=/top|center|bottom/,t=c.fn.position,u=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return t.apply(this,arguments);b=c.extend({},b);var a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),e=b.offset?b.offset.split(" "):[0,0],h,k,j;if(d.nodeType===9){h=a.width();k=a.height();j={top:0,left:0}}else if(d.setTimeout){h=a.width();k=a.height();j={top:a.scrollTop(),left:a.scrollLeft()}}else if(d.preventDefault){b.at="left top";h=k=0;j={top:b.of.pageY,
left:b.of.pageX}}else{h=a.outerWidth();k=a.outerHeight();j=a.offset()}c.each(["my","at"],function(){var f=(b[this]||"").split(" ");if(f.length===1)f=n.test(f[0])?f.concat(["center"]):o.test(f[0])?["center"].concat(f):["center","center"];f[0]=n.test(f[0])?f[0]:"center";f[1]=o.test(f[1])?f[1]:"center";b[this]=f});if(g.length===1)g[1]=g[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(b.at[0]==="right")j.left+=h;else if(b.at[0]==="center")j.left+=h/2;if(b.at[1]==="bottom")j.top+=
k;else if(b.at[1]==="center")j.top+=k/2;j.left+=e[0];j.top+=e[1];return this.each(function(){var f=c(this),l=f.outerWidth(),m=f.outerHeight(),p=parseInt(c.curCSS(this,"marginLeft",true))||0,q=parseInt(c.curCSS(this,"marginTop",true))||0,v=l+p+(parseInt(c.curCSS(this,"marginRight",true))||0),w=m+q+(parseInt(c.curCSS(this,"marginBottom",true))||0),i=c.extend({},j),r;if(b.my[0]==="right")i.left-=l;else if(b.my[0]==="center")i.left-=l/2;if(b.my[1]==="bottom")i.top-=m;else if(b.my[1]==="center")i.top-=
m/2;i.left=Math.round(i.left);i.top=Math.round(i.top);r={left:i.left-p,top:i.top-q};c.each(["left","top"],function(s,x){c.ui.position[g[s]]&&c.ui.position[g[s]][x](i,{targetWidth:h,targetHeight:k,elemWidth:l,elemHeight:m,collisionPosition:r,collisionWidth:v,collisionHeight:w,offset:e,my:b.my,at:b.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=
d>0?b.left-d:Math.max(b.left-a.collisionPosition.left,b.left)},top:function(b,a){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=d>0?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if(a.at[0]!=="center"){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();var g=a.my[0]==="left"?-a.elemWidth:a.my[0]==="right"?a.elemWidth:0,e=a.at[0]==="left"?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=
a.collisionPosition.left<0?g+e+h:d>0?g+e+h:0}},top:function(b,a){if(a.at[1]!=="center"){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();var g=a.my[1]==="top"?-a.elemHeight:a.my[1]==="bottom"?a.elemHeight:0,e=a.at[1]==="top"?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=a.collisionPosition.top<0?g+e+h:d>0?g+e+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(b,a){if(/static/.test(c.curCSS(b,"position")))b.style.position="relative";var d=c(b),
g=d.offset(),e=parseInt(c.curCSS(b,"top",true),10)||0,h=parseInt(c.curCSS(b,"left",true),10)||0;g={top:a.top-g.top+e,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)};c.fn.offset=function(b){var a=this[0];if(!a||!a.ownerDocument)return null;if(b)return this.each(function(){c.offset.setOffset(this,b)});return u.call(this)}}})(jQuery);
;/*
 * jQuery UI Draggable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;if(b.iframeFix)d(b.iframeFix===true?"iframe":b.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")});return true},_mouseStart:function(a){var b=this.options;
this.helper=this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);d.ui.ddmanager&&d.ui.ddmanager.dragStart(this,a);return true},
_mouseDrag:function(a,b){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=
false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,
10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",a)!==false&&this._clear();return false},_mouseUp:function(a){this.options.iframeFix===true&&d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});d.ui.ddmanager&&d.ui.ddmanager.dragStop(this,a);return d.ui.mouse.prototype._mouseUp.call(this,a)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||
!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone().removeAttr("id"):this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&
a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=
this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),
10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),
10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[a.containment=="document"?0:d(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a.containment=="document"?0:d(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,
(a.containment=="document"?0:d(window).scrollLeft())+d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){a=d(a.containment);var b=a[0];if(b){a.offset();var c=d(b).css("overflow")!=
"hidden";this.containment=[(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0),(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0),(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),
10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=a}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+
this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&
!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,h=a.pageY;if(this.originalPosition){var g;if(this.containment){if(this.relative_container){g=this.relative_container.offset();g=[this.containment[0]+g.left,this.containment[1]+g.top,this.containment[2]+g.left,this.containment[3]+g.top]}else g=this.containment;if(a.pageX-this.offset.click.left<g[0])e=g[0]+this.offset.click.left;
if(a.pageY-this.offset.click.top<g[1])h=g[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>g[2])e=g[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>g[3])h=g[3]+this.offset.click.top}if(b.grid){h=b.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/b.grid[1])*b.grid[1]:this.originalPageY;h=g?!(h-this.offset.click.top<g[1]||h-this.offset.click.top>g[3])?h:!(h-this.offset.click.top<g[1])?h-b.grid[1]:h+b.grid[1]:h;e=b.grid[0]?this.originalPageX+Math.round((e-this.originalPageX)/
b.grid[0])*b.grid[0]:this.originalPageX;e=g?!(e-this.offset.click.left<g[0]||e-this.offset.click.left>g[2])?e:!(e-this.offset.click.left<g[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<
526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,
c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.16"});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var h=d.data(this,"sortable");if(h&&!h.options.disabled){c.sortables.push({instance:h,shouldRevert:h.options.revert});
h.refreshPositions();h._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=
false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;
c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&
this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=
a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!=
"x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<
c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-
c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,
width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),f=c.options,e=f.snapTolerance,h=b.offset.left,g=h+c.helperProportions.width,n=b.offset.top,o=n+c.helperProportions.height,i=c.snapElements.length-1;i>=0;i--){var j=c.snapElements[i].left,l=j+c.snapElements[i].width,k=c.snapElements[i].top,m=k+c.snapElements[i].height;if(j-e<h&&h<l+e&&k-e<n&&n<m+e||j-e<h&&h<l+e&&k-e<o&&o<m+e||j-e<g&&g<l+e&&k-e<n&&n<m+e||j-e<g&&g<l+e&&k-e<o&&
o<m+e){if(f.snapMode!="inner"){var p=Math.abs(k-o)<=e,q=Math.abs(m-n)<=e,r=Math.abs(j-g)<=e,s=Math.abs(l-h)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k-c.helperProportions.height,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:m,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l}).left-c.margins.left}var t=
p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(k-n)<=e;q=Math.abs(m-o)<=e;r=Math.abs(j-h)<=e;s=Math.abs(l-g)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:m-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[i].snapping&&
(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=p||q||r||s||t}else{c.snapElements[i].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),
10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;/*
 * jQuery UI Droppable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function(d){d.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var a=this.options,b=a.accept;this.isover=0;this.isout=1;this.accept=d.isFunction(b)?b:function(c){return c.is(b)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[];d.ui.ddmanager.droppables[a.scope].push(this);
a.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var a=d.ui.ddmanager.droppables[this.options.scope],b=0;b<a.length;b++)a[b]==this&&a.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(a,b){if(a=="accept")this.accept=d.isFunction(b)?b:function(c){return c.is(b)};d.Widget.prototype._setOption.apply(this,arguments)},_activate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);b&&this._trigger("activate",a,this.ui(b))},_deactivate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);b&&this._trigger("deactivate",a,this.ui(b))},_over:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",a,this.ui(b))}},_out:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",a,this.ui(b))}},_drop:function(a,b){var c=b||d.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return false;var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=
d.data(this,"droppable");if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],c.currentItem||c.element)&&d.ui.intersect(c,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){e=true;return false}});if(e)return false;if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
a,this.ui(c));return this.element}return false},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}});d.extend(d.ui.droppable,{version:"1.8.16"});d.ui.intersect=function(a,b,c){if(!b.offset)return false;var e=(a.positionAbs||a.position.absolute).left,g=e+a.helperProportions.width,f=(a.positionAbs||a.position.absolute).top,h=f+a.helperProportions.height,i=b.offset.left,k=i+b.proportions.width,j=b.offset.top,l=j+b.proportions.height;
switch(c){case "fit":return i<=e&&g<=k&&j<=f&&h<=l;case "intersect":return i<e+a.helperProportions.width/2&&g-a.helperProportions.width/2<k&&j<f+a.helperProportions.height/2&&h-a.helperProportions.height/2<l;case "pointer":return d.ui.isOver((a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,j,i,b.proportions.height,b.proportions.width);case "touch":return(f>=j&&f<=l||h>=j&&h<=l||f<j&&h>l)&&(e>=
i&&e<=k||g>=i&&g<=k||e<i&&g>k);default:return false}};d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(a,b){var c=d.ui.ddmanager.droppables[a.options.scope]||[],e=b?b.type:null,g=(a.currentItem||a.element).find(":data(droppable)").andSelf(),f=0;a:for(;f<c.length;f++)if(!(c[f].options.disabled||a&&!c[f].accept.call(c[f].element[0],a.currentItem||a.element))){for(var h=0;h<g.length;h++)if(g[h]==c[f].element[0]){c[f].proportions.height=0;continue a}c[f].visible=c[f].element.css("display")!=
"none";if(c[f].visible){e=="mousedown"&&c[f]._activate.call(c[f],b);c[f].offset=c[f].element.offset();c[f].proportions={width:c[f].element[0].offsetWidth,height:c[f].element[0].offsetHeight}}}},drop:function(a,b){var c=false;d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&d.ui.intersect(a,this,this.options.tolerance))c=c||this._drop.call(this,b);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],a.currentItem||
a.element)){this.isout=1;this.isover=0;this._deactivate.call(this,b)}}});return c},dragStart:function(a,b){a.element.parents(":not(body,html)").bind("scroll.droppable",function(){a.options.refreshPositions||d.ui.ddmanager.prepareOffsets(a,b)})},drag:function(a,b){a.options.refreshPositions&&d.ui.ddmanager.prepareOffsets(a,b);d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var c=d.ui.intersect(a,this,this.options.tolerance);
if(c=!c&&this.isover==1?"isout":c&&this.isover==0?"isover":null){var e;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");if(g.length){e=d.data(g[0],"droppable");e.greedyChild=c=="isover"?1:0}}if(e&&c=="isover"){e.isover=0;e.isout=1;e._out.call(e,b)}this[c]=1;this[c=="isout"?"isover":"isout"]=0;this[c=="isover"?"_over":"_out"].call(this,b);if(e&&c=="isout"){e.isout=0;e.isover=1;e._over.call(e,b)}}}})},dragStop:function(a,b){a.element.parents(":not(body,html)").unbind("scroll.droppable");
a.options.refreshPositions||d.ui.ddmanager.prepareOffsets(a,b)}}})(jQuery);
;/*
 * jQuery UI Resizable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.resizable",e.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var b=this,a=this.options;this.element.addClass("ui-resizable");e.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&e.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=a.handles||(!e(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var c=this.handles.split(",");this.handles={};for(var d=0;d<c.length;d++){var f=e.trim(c[d]),g=e('<div class="ui-resizable-handle '+("ui-resizable-"+f)+'"></div>');/sw|se|ne|nw/.test(f)&&g.css({zIndex:++a.zIndex});"se"==f&&g.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[f]=".ui-resizable-"+f;this.element.append(g)}}this._renderAxis=function(h){h=h||this.element;for(var i in this.handles){if(this.handles[i].constructor==
String)this.handles[i]=e(this.handles[i],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var j=e(this.handles[i],this.element),l=0;l=/sw|ne|nw|se|n|s/.test(i)?j.outerHeight():j.outerWidth();j=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");h.css(j,l);this._proportionallyResize()}e(this.handles[i])}};this._renderAxis(this.element);this._handles=e(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!b.resizing){if(this.className)var h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=h&&h[1]?h[1]:"se"}});if(a.autoHide){this._handles.hide();e(this.element).addClass("ui-resizable-autohide").hover(function(){if(!a.disabled){e(this).removeClass("ui-resizable-autohide");b._handles.show()}},function(){if(!a.disabled)if(!b.resizing){e(this).addClass("ui-resizable-autohide");b._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();
var b=function(c){e(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){b(this.element);var a=this.element;a.after(this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);b(this.originalElement);return this},_mouseCapture:function(b){var a=
false;for(var c in this.handles)if(e(this.handles[c])[0]==b.target)a=true;return!this.options.disabled&&a},_mouseStart:function(b){var a=this.options,c=this.element.position(),d=this.element;this.resizing=true;this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()};if(d.is(".ui-draggable")||/absolute/.test(d.css("position")))d.css({position:"absolute",top:c.top,left:c.left});e.browser.opera&&/relative/.test(d.css("position"))&&d.css({position:"relative",top:"auto",left:"auto"});
this._renderProxy();c=m(this.helper.css("left"));var f=m(this.helper.css("top"));if(a.containment){c+=e(a.containment).scrollLeft()||0;f+=e(a.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:c,top:f};this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalPosition={left:c,top:f};this.sizeDiff=
{width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};this.originalMousePosition={left:b.pageX,top:b.pageY};this.aspectRatio=typeof a.aspectRatio=="number"?a.aspectRatio:this.originalSize.width/this.originalSize.height||1;a=e(".ui-resizable-"+this.axis).css("cursor");e("body").css("cursor",a=="auto"?this.axis+"-resize":a);d.addClass("ui-resizable-resizing");this._propagate("start",b);return true},_mouseDrag:function(b){var a=this.helper,c=this.originalMousePosition,d=this._change[this.axis];
if(!d)return false;c=d.apply(this,[b,b.pageX-c.left||0,b.pageY-c.top||0]);this._updateVirtualBoundaries(b.shiftKey);if(this._aspectRatio||b.shiftKey)c=this._updateRatio(c,b);c=this._respectSize(c,b);this._propagate("resize",b);a.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(c);this._trigger("resize",b,this.ui());return false},
_mouseStop:function(b){this.resizing=false;var a=this.options,c=this;if(this._helper){var d=this._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName);d=f&&e.ui.hasScroll(d[0],"left")?0:c.sizeDiff.height;f=f?0:c.sizeDiff.width;f={width:c.helper.width()-f,height:c.helper.height()-d};d=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null;var g=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;a.animate||this.element.css(e.extend(f,
{top:g,left:d}));c.helper.height(c.size.height);c.helper.width(c.size.width);this._helper&&!a.animate&&this._proportionallyResize()}e("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",b);this._helper&&this.helper.remove();return false},_updateVirtualBoundaries:function(b){var a=this.options,c,d,f;a={minWidth:k(a.minWidth)?a.minWidth:0,maxWidth:k(a.maxWidth)?a.maxWidth:Infinity,minHeight:k(a.minHeight)?a.minHeight:0,maxHeight:k(a.maxHeight)?a.maxHeight:
Infinity};if(this._aspectRatio||b){b=a.minHeight*this.aspectRatio;d=a.minWidth/this.aspectRatio;c=a.maxHeight*this.aspectRatio;f=a.maxWidth/this.aspectRatio;if(b>a.minWidth)a.minWidth=b;if(d>a.minHeight)a.minHeight=d;if(c<a.maxWidth)a.maxWidth=c;if(f<a.maxHeight)a.maxHeight=f}this._vBoundaries=a},_updateCache:function(b){this.offset=this.helper.offset();if(k(b.left))this.position.left=b.left;if(k(b.top))this.position.top=b.top;if(k(b.height))this.size.height=b.height;if(k(b.width))this.size.width=
b.width},_updateRatio:function(b){var a=this.position,c=this.size,d=this.axis;if(k(b.height))b.width=b.height*this.aspectRatio;else if(k(b.width))b.height=b.width/this.aspectRatio;if(d=="sw"){b.left=a.left+(c.width-b.width);b.top=null}if(d=="nw"){b.top=a.top+(c.height-b.height);b.left=a.left+(c.width-b.width)}return b},_respectSize:function(b){var a=this._vBoundaries,c=this.axis,d=k(b.width)&&a.maxWidth&&a.maxWidth<b.width,f=k(b.height)&&a.maxHeight&&a.maxHeight<b.height,g=k(b.width)&&a.minWidth&&
a.minWidth>b.width,h=k(b.height)&&a.minHeight&&a.minHeight>b.height;if(g)b.width=a.minWidth;if(h)b.height=a.minHeight;if(d)b.width=a.maxWidth;if(f)b.height=a.maxHeight;var i=this.originalPosition.left+this.originalSize.width,j=this.position.top+this.size.height,l=/sw|nw|w/.test(c);c=/nw|ne|n/.test(c);if(g&&l)b.left=i-a.minWidth;if(d&&l)b.left=i-a.maxWidth;if(h&&c)b.top=j-a.minHeight;if(f&&c)b.top=j-a.maxHeight;if((a=!b.width&&!b.height)&&!b.left&&b.top)b.top=null;else if(a&&!b.top&&b.left)b.left=
null;return b},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var b=this.helper||this.element,a=0;a<this._proportionallyResizeElements.length;a++){var c=this._proportionallyResizeElements[a];if(!this.borderDif){var d=[c.css("borderTopWidth"),c.css("borderRightWidth"),c.css("borderBottomWidth"),c.css("borderLeftWidth")],f=[c.css("paddingTop"),c.css("paddingRight"),c.css("paddingBottom"),c.css("paddingLeft")];this.borderDif=e.map(d,function(g,h){g=parseInt(g,10)||
0;h=parseInt(f[h],10)||0;return g+h})}e.browser.msie&&(e(b).is(":hidden")||e(b).parents(":hidden").length)||c.css({height:b.height()-this.borderDif[0]-this.borderDif[2]||0,width:b.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var b=this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||e('<div style="overflow:hidden;"></div>');var a=e.browser.msie&&e.browser.version<7,c=a?1:0;a=a?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+
a,height:this.element.outerHeight()+a,position:"absolute",left:this.elementOffset.left-c+"px",top:this.elementOffset.top-c+"px",zIndex:++b.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(b,a){return{width:this.originalSize.width+a}},w:function(b,a){return{left:this.originalPosition.left+a,width:this.originalSize.width-a}},n:function(b,a,c){return{top:this.originalPosition.top+c,height:this.originalSize.height-c}},s:function(b,a,c){return{height:this.originalSize.height+
c}},se:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},sw:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,a,c]))},ne:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},nw:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,a,c]))}},_propagate:function(b,a){e.ui.plugin.call(this,b,[a,this.ui()]);
b!="resize"&&this._trigger(b,a,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});e.extend(e.ui.resizable,{version:"1.8.16"});e.ui.plugin.add("resizable","alsoResize",{start:function(){var b=e(this).data("resizable").options,a=function(c){e(c).each(function(){var d=e(this);d.data("resizable-alsoresize",{width:parseInt(d.width(),
10),height:parseInt(d.height(),10),left:parseInt(d.css("left"),10),top:parseInt(d.css("top"),10),position:d.css("position")})})};if(typeof b.alsoResize=="object"&&!b.alsoResize.parentNode)if(b.alsoResize.length){b.alsoResize=b.alsoResize[0];a(b.alsoResize)}else e.each(b.alsoResize,function(c){a(c)});else a(b.alsoResize)},resize:function(b,a){var c=e(this).data("resizable");b=c.options;var d=c.originalSize,f=c.originalPosition,g={height:c.size.height-d.height||0,width:c.size.width-d.width||0,top:c.position.top-
f.top||0,left:c.position.left-f.left||0},h=function(i,j){e(i).each(function(){var l=e(this),q=e(this).data("resizable-alsoresize"),p={},r=j&&j.length?j:l.parents(a.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(r,function(n,o){if((n=(q[o]||0)+(g[o]||0))&&n>=0)p[o]=n||null});if(e.browser.opera&&/relative/.test(l.css("position"))){c._revertToRelativePosition=true;l.css({position:"absolute",top:"auto",left:"auto"})}l.css(p)})};typeof b.alsoResize=="object"&&!b.alsoResize.nodeType?
e.each(b.alsoResize,function(i,j){h(i,j)}):h(b.alsoResize)},stop:function(){var b=e(this).data("resizable"),a=b.options,c=function(d){e(d).each(function(){var f=e(this);f.css({position:f.data("resizable-alsoresize").position})})};if(b._revertToRelativePosition){b._revertToRelativePosition=false;typeof a.alsoResize=="object"&&!a.alsoResize.nodeType?e.each(a.alsoResize,function(d){c(d)}):c(a.alsoResize)}e(this).removeData("resizable-alsoresize")}});e.ui.plugin.add("resizable","animate",{stop:function(b){var a=
e(this).data("resizable"),c=a.options,d=a._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName),g=f&&e.ui.hasScroll(d[0],"left")?0:a.sizeDiff.height;f={width:a.size.width-(f?0:a.sizeDiff.width),height:a.size.height-g};g=parseInt(a.element.css("left"),10)+(a.position.left-a.originalPosition.left)||null;var h=parseInt(a.element.css("top"),10)+(a.position.top-a.originalPosition.top)||null;a.element.animate(e.extend(f,h&&g?{top:h,left:g}:{}),{duration:c.animateDuration,easing:c.animateEasing,
step:function(){var i={width:parseInt(a.element.css("width"),10),height:parseInt(a.element.css("height"),10),top:parseInt(a.element.css("top"),10),left:parseInt(a.element.css("left"),10)};d&&d.length&&e(d[0]).css({width:i.width,height:i.height});a._updateCache(i);a._propagate("resize",b)}})}});e.ui.plugin.add("resizable","containment",{start:function(){var b=e(this).data("resizable"),a=b.element,c=b.options.containment;if(a=c instanceof e?c.get(0):/parent/.test(c)?a.parent().get(0):c){b.containerElement=
e(a);if(/document/.test(c)||c==document){b.containerOffset={left:0,top:0};b.containerPosition={left:0,top:0};b.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}}else{var d=e(a),f=[];e(["Top","Right","Left","Bottom"]).each(function(i,j){f[i]=m(d.css("padding"+j))});b.containerOffset=d.offset();b.containerPosition=d.position();b.containerSize={height:d.innerHeight()-f[3],width:d.innerWidth()-f[1]};c=b.containerOffset;
var g=b.containerSize.height,h=b.containerSize.width;h=e.ui.hasScroll(a,"left")?a.scrollWidth:h;g=e.ui.hasScroll(a)?a.scrollHeight:g;b.parentData={element:a,left:c.left,top:c.top,width:h,height:g}}}},resize:function(b){var a=e(this).data("resizable"),c=a.options,d=a.containerOffset,f=a.position;b=a._aspectRatio||b.shiftKey;var g={top:0,left:0},h=a.containerElement;if(h[0]!=document&&/static/.test(h.css("position")))g=d;if(f.left<(a._helper?d.left:0)){a.size.width+=a._helper?a.position.left-d.left:
a.position.left-g.left;if(b)a.size.height=a.size.width/c.aspectRatio;a.position.left=c.helper?d.left:0}if(f.top<(a._helper?d.top:0)){a.size.height+=a._helper?a.position.top-d.top:a.position.top;if(b)a.size.width=a.size.height*c.aspectRatio;a.position.top=a._helper?d.top:0}a.offset.left=a.parentData.left+a.position.left;a.offset.top=a.parentData.top+a.position.top;c=Math.abs((a._helper?a.offset.left-g.left:a.offset.left-g.left)+a.sizeDiff.width);d=Math.abs((a._helper?a.offset.top-g.top:a.offset.top-
d.top)+a.sizeDiff.height);f=a.containerElement.get(0)==a.element.parent().get(0);g=/relative|absolute/.test(a.containerElement.css("position"));if(f&&g)c-=a.parentData.left;if(c+a.size.width>=a.parentData.width){a.size.width=a.parentData.width-c;if(b)a.size.height=a.size.width/a.aspectRatio}if(d+a.size.height>=a.parentData.height){a.size.height=a.parentData.height-d;if(b)a.size.width=a.size.height*a.aspectRatio}},stop:function(){var b=e(this).data("resizable"),a=b.options,c=b.containerOffset,d=b.containerPosition,
f=b.containerElement,g=e(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width;g=g.outerHeight()-b.sizeDiff.height;b._helper&&!a.animate&&/relative/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g});b._helper&&!a.animate&&/static/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g})}});e.ui.plugin.add("resizable","ghost",{start:function(){var b=e(this).data("resizable"),a=b.options,c=b.size;b.ghost=b.originalElement.clone();b.ghost.css({opacity:0.25,
display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof a.ghost=="string"?a.ghost:"");b.ghost.appendTo(b.helper)},resize:function(){var b=e(this).data("resizable");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=e(this).data("resizable");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}});e.ui.plugin.add("resizable","grid",{resize:function(){var b=
e(this).data("resizable"),a=b.options,c=b.size,d=b.originalSize,f=b.originalPosition,g=b.axis;a.grid=typeof a.grid=="number"?[a.grid,a.grid]:a.grid;var h=Math.round((c.width-d.width)/(a.grid[0]||1))*(a.grid[0]||1);a=Math.round((c.height-d.height)/(a.grid[1]||1))*(a.grid[1]||1);if(/^(se|s|e)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else if(/^(ne)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}else{if(/^(sw)$/.test(g)){b.size.width=d.width+h;b.size.height=
d.height+a}else{b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}b.position.left=f.left-h}}});var m=function(b){return parseInt(b,10)||0},k=function(b){return!isNaN(parseInt(b,10))}})(jQuery);
;/*
 * jQuery UI Selectable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.selectable",e.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var c=this;this.element.addClass("ui-selectable");this.dragged=false;var f;this.refresh=function(){f=e(c.options.filter,c.element[0]);f.each(function(){var d=e(this),b=d.offset();e.data(this,"selectable-item",{element:this,$element:d,left:b.left,top:b.top,right:b.left+d.outerWidth(),bottom:b.top+d.outerHeight(),startselected:false,selected:d.hasClass("ui-selected"),
selecting:d.hasClass("ui-selecting"),unselecting:d.hasClass("ui-unselecting")})})};this.refresh();this.selectees=f.addClass("ui-selectee");this._mouseInit();this.helper=e("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(c){var f=this;this.opos=[c.pageX,
c.pageY];if(!this.options.disabled){var d=this.options;this.selectees=e(d.filter,this.element[0]);this._trigger("start",c);e(d.appendTo).append(this.helper);this.helper.css({left:c.clientX,top:c.clientY,width:0,height:0});d.autoRefresh&&this.refresh();this.selectees.filter(".ui-selected").each(function(){var b=e.data(this,"selectable-item");b.startselected=true;if(!c.metaKey){b.$element.removeClass("ui-selected");b.selected=false;b.$element.addClass("ui-unselecting");b.unselecting=true;f._trigger("unselecting",
c,{unselecting:b.element})}});e(c.target).parents().andSelf().each(function(){var b=e.data(this,"selectable-item");if(b){var g=!c.metaKey||!b.$element.hasClass("ui-selected");b.$element.removeClass(g?"ui-unselecting":"ui-selected").addClass(g?"ui-selecting":"ui-unselecting");b.unselecting=!g;b.selecting=g;(b.selected=g)?f._trigger("selecting",c,{selecting:b.element}):f._trigger("unselecting",c,{unselecting:b.element});return false}})}},_mouseDrag:function(c){var f=this;this.dragged=true;if(!this.options.disabled){var d=
this.options,b=this.opos[0],g=this.opos[1],h=c.pageX,i=c.pageY;if(b>h){var j=h;h=b;b=j}if(g>i){j=i;i=g;g=j}this.helper.css({left:b,top:g,width:h-b,height:i-g});this.selectees.each(function(){var a=e.data(this,"selectable-item");if(!(!a||a.element==f.element[0])){var k=false;if(d.tolerance=="touch")k=!(a.left>h||a.right<b||a.top>i||a.bottom<g);else if(d.tolerance=="fit")k=a.left>b&&a.right<h&&a.top>g&&a.bottom<i;if(k){if(a.selected){a.$element.removeClass("ui-selected");a.selected=false}if(a.unselecting){a.$element.removeClass("ui-unselecting");
a.unselecting=false}if(!a.selecting){a.$element.addClass("ui-selecting");a.selecting=true;f._trigger("selecting",c,{selecting:a.element})}}else{if(a.selecting)if(c.metaKey&&a.startselected){a.$element.removeClass("ui-selecting");a.selecting=false;a.$element.addClass("ui-selected");a.selected=true}else{a.$element.removeClass("ui-selecting");a.selecting=false;if(a.startselected){a.$element.addClass("ui-unselecting");a.unselecting=true}f._trigger("unselecting",c,{unselecting:a.element})}if(a.selected)if(!c.metaKey&&
!a.startselected){a.$element.removeClass("ui-selected");a.selected=false;a.$element.addClass("ui-unselecting");a.unselecting=true;f._trigger("unselecting",c,{unselecting:a.element})}}}});return false}},_mouseStop:function(c){var f=this;this.dragged=false;e(".ui-unselecting",this.element[0]).each(function(){var d=e.data(this,"selectable-item");d.$element.removeClass("ui-unselecting");d.unselecting=false;d.startselected=false;f._trigger("unselected",c,{unselected:d.element})});e(".ui-selecting",this.element[0]).each(function(){var d=
e.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected");d.selecting=false;d.selected=true;d.startselected=true;f._trigger("selected",c,{selected:d.element})});this._trigger("stop",c);this.helper.remove();return false}});e.extend(e.ui.selectable,{version:"1.8.16"})})(jQuery);
;/*
 * jQuery UI Sortable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.sortable",d.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){var a=this.options;this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?a.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData("sortable-item");return this},_setOption:function(a,b){if(a===
"disabled"){this.options[a]=b;this.widget()[b?"addClass":"removeClass"]("ui-sortable-disabled")}else d.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(a,b){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(a);var c=null,e=this;d(a.target).parents().each(function(){if(d.data(this,"sortable-item")==e){c=d(this);return false}});if(d.data(a.target,"sortable-item")==e)c=d(a.target);if(!c)return false;if(this.options.handle&&
!b){var f=false;d(this.options.handle,c).find("*").andSelf().each(function(){if(this==a.target)f=true});if(!f)return false}this.currentItem=c;this._removeCurrentsFromItems();return true},_mouseStart:function(a,b,c){b=this.options;var e=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(a);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();b.containment&&this._setContainment();if(b.cursor){if(d("body").css("cursor"))this._storedCursor=d("body").css("cursor");d("body").css("cursor",b.cursor)}if(b.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",b.opacity)}if(b.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",b.zIndex)}if(this.scrollParent[0]!=
document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",a,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!c)for(c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("activate",a,e._uiHash(this));if(d.ui.ddmanager)d.ui.ddmanager.current=this;d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(a);
return true},_mouseDrag:function(a){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var b=this.options,c=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-a.pageY<b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+b.scrollSpeed;else if(a.pageY-this.overflowOffset.top<
b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-b.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-a.pageX<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+b.scrollSpeed;else if(a.pageX-this.overflowOffset.left<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-b.scrollSpeed}else{if(a.pageY-d(document).scrollTop()<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()-
b.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()+b.scrollSpeed);if(a.pageX-d(document).scrollLeft()<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()-b.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()+b.scrollSpeed)}c!==false&&d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,
a)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(b=this.items.length-1;b>=0;b--){c=this.items[b];var e=c.item[0],f=this._intersectsWithPointer(c);if(f)if(e!=this.currentItem[0]&&this.placeholder[f==1?"next":"prev"]()[0]!=e&&!d.ui.contains(this.placeholder[0],e)&&(this.options.type=="semi-dynamic"?!d.ui.contains(this.element[0],
e):true)){this.direction=f==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(c))this._rearrange(a,c);else break;this._trigger("change",a,this._uiHash());break}}this._contactContainers(a);d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);this._trigger("sort",a,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(a,b){if(a){d.ui.ddmanager&&!this.options.dropBehaviour&&d.ui.ddmanager.drop(this,a);if(this.options.revert){var c=this;b=c.placeholder.offset();
c.reverting=true;d(this.helper).animate({left:b.left-this.offset.parent.left-c.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:b.top-this.offset.parent.top-c.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(a)})}else this._clear(a,b);return false}},cancel:function(){var a=this;if(this.dragging){this._mouseUp({target:null});this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):
this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--){this.containers[b]._trigger("deactivate",null,a._uiHash(this));if(this.containers[b].containerCache.over){this.containers[b]._trigger("out",null,a._uiHash(this));this.containers[b].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();d.extend(this,{helper:null,
dragging:false,reverting:false,_noFinalSort:null});this.domPosition.prev?d(this.domPosition.prev).after(this.currentItem):d(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};d(b).each(function(){var e=(d(a.item||this).attr(a.attribute||"id")||"").match(a.expression||/(.+)[-=_](.+)/);if(e)c.push((a.key||e[1]+"[]")+"="+(a.key&&a.expression?e[1]:e[2]))});!c.length&&a.key&&c.push(a.key+"=");return c.join("&")},
toArray:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};b.each(function(){c.push(d(a.item||this).attr(a.attribute||"id")||"")});return c},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,e=this.positionAbs.top,f=e+this.helperProportions.height,g=a.left,h=g+a.width,i=a.top,k=i+a.height,j=this.offset.click.top,l=this.offset.click.left;j=e+j>i&&e+j<k&&b+l>g&&b+l<h;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||
this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?j:g<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<h&&i<e+this.helperProportions.height/2&&f-this.helperProportions.height/2<k},_intersectsWithPointer:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width);b=b&&a;a=this._getDragVerticalDirection();
var c=this._getDragHorizontalDirection();if(!b)return false;return this.floating?c&&c=="right"||a=="down"?2:1:a&&(a=="down"?2:1)},_intersectsWithSides:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width);var c=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?e=="right"&&a||e=="left"&&!a:c&&(c=="down"&&b||c=="up"&&!b)},
_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){this._refreshItems(a);this.refreshPositions();return this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(a){var b=[],c=[],e=this._connectWith();
if(e&&a)for(a=e.length-1;a>=0;a--)for(var f=d(e[a]),g=f.length-1;g>=0;g--){var h=d.data(f[g],"sortable");if(h&&h!=this&&!h.options.disabled)c.push([d.isFunction(h.options.items)?h.options.items.call(h.element):d(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}c.push([d.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):d(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
this]);for(a=c.length-1;a>=0;a--)c[a][0].each(function(){b.push(this)});return d(b)},_removeCurrentsFromItems:function(){for(var a=this.currentItem.find(":data(sortable-item)"),b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(a){this.items=[];this.containers=[this];var b=this.items,c=[[d.isFunction(this.options.items)?this.options.items.call(this.element[0],a,{item:this.currentItem}):d(this.options.items,this.element),
this]],e=this._connectWith();if(e)for(var f=e.length-1;f>=0;f--)for(var g=d(e[f]),h=g.length-1;h>=0;h--){var i=d.data(g[h],"sortable");if(i&&i!=this&&!i.options.disabled){c.push([d.isFunction(i.options.items)?i.options.items.call(i.element[0],a,{item:this.currentItem}):d(i.options.items,i.element),i]);this.containers.push(i)}}for(f=c.length-1;f>=0;f--){a=c[f][1];e=c[f][0];h=0;for(g=e.length;h<g;h++){i=d(e[h]);i.data("sortable-item",a);b.push({item:i,instance:a,width:0,height:0,left:0,top:0})}}},refreshPositions:function(a){if(this.offsetParent&&
this.helper)this.offset.parent=this._getParentOffset();for(var b=this.items.length-1;b>=0;b--){var c=this.items[b];if(!(c.instance!=this.currentContainer&&this.currentContainer&&c.item[0]!=this.currentItem[0])){var e=this.options.toleranceElement?d(this.options.toleranceElement,c.item):c.item;if(!a){c.width=e.outerWidth();c.height=e.outerHeight()}e=e.offset();c.left=e.left;c.top=e.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(b=
this.containers.length-1;b>=0;b--){e=this.containers[b].element.offset();this.containers[b].containerCache.left=e.left;this.containers[b].containerCache.top=e.top;this.containers[b].containerCache.width=this.containers[b].element.outerWidth();this.containers[b].containerCache.height=this.containers[b].element.outerHeight()}return this},_createPlaceholder:function(a){var b=a||this,c=b.options;if(!c.placeholder||c.placeholder.constructor==String){var e=c.placeholder;c.placeholder={element:function(){var f=
d(document.createElement(b.currentItem[0].nodeName)).addClass(e||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!e)f.style.visibility="hidden";return f},update:function(f,g){if(!(e&&!c.forcePlaceholderSize)){g.height()||g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10));g.width()||g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||
0,10))}}}}b.placeholder=d(c.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);c.placeholder.update(b,b.placeholder)},_contactContainers:function(a){for(var b=null,c=null,e=this.containers.length-1;e>=0;e--)if(!d.ui.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(!(b&&d.ui.contains(this.containers[e].element[0],b.element[0]))){b=this.containers[e];c=e}}else if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",
a,this._uiHash(this));this.containers[e].containerCache.over=0}if(b)if(this.containers.length===1){this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}else if(this.currentContainer!=this.containers[c]){b=1E4;e=null;for(var f=this.positionAbs[this.containers[c].floating?"left":"top"],g=this.items.length-1;g>=0;g--)if(d.ui.contains(this.containers[c].element[0],this.items[g].item[0])){var h=this.items[g][this.containers[c].floating?"left":"top"];if(Math.abs(h-
f)<b){b=Math.abs(h-f);e=this.items[g]}}if(e||this.options.dropOnEmpty){this.currentContainer=this.containers[c];e?this._rearrange(a,e,null,true):this._rearrange(a,null,this.containers[c].element,true);this._trigger("change",a,this._uiHash());this.containers[c]._trigger("change",a,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}}},_createHelper:function(a){var b=
this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a,this.currentItem])):b.helper=="clone"?this.currentItem.clone():this.currentItem;a.parents("body").length||d(b.appendTo!="parent"?b.appendTo:this.currentItem[0].parentNode)[0].appendChild(a[0]);if(a[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(a[0].style.width==
""||b.forceHelperSize)a.width(this.currentItem.width());if(a[0].style.height==""||b.forceHelperSize)a.height(this.currentItem.height());return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=
this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a=
{top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),
10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,d(a.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)){var b=d(a.containment)[0];a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(d(b).css("borderTopWidth"),
10)||0)+(parseInt(d(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(a,b){if(!b)b=
this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&
this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();
var f=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0])f=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])f=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-
this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;f=this.originalPageX+Math.round((f-this.originalPageX)/b.grid[0])*b.grid[0];f=this.containment?!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:!(f-this.offset.click.left<this.containment[0])?f-b.grid[0]:f+b.grid[0]:f}}return{top:g-
this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())}},_rearrange:function(a,b,c,e){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],
this.direction=="down"?b.item[0]:b.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var f=this,g=this.counter;window.setTimeout(function(){g==f.counter&&f.refreshPositions(!e)},0)},_clear:function(a,b){this.reverting=false;var c=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var e in this._storedCSS)if(this._storedCSS[e]=="auto"||this._storedCSS[e]=="static")this._storedCSS[e]=
"";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!b&&c.push(function(f){this._trigger("receive",f,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!b)c.push(function(f){this._trigger("update",f,this._uiHash())});if(!d.ui.contains(this.element[0],this.currentItem[0])){b||c.push(function(f){this._trigger("remove",
f,this._uiHash())});for(e=this.containers.length-1;e>=0;e--)if(d.ui.contains(this.containers[e].element[0],this.currentItem[0])&&!b){c.push(function(f){return function(g){f._trigger("receive",g,this._uiHash(this))}}.call(this,this.containers[e]));c.push(function(f){return function(g){f._trigger("update",g,this._uiHash(this))}}.call(this,this.containers[e]))}}for(e=this.containers.length-1;e>=0;e--){b||c.push(function(f){return function(g){f._trigger("deactivate",g,this._uiHash(this))}}.call(this,
this.containers[e]));if(this.containers[e].containerCache.over){c.push(function(f){return function(g){f._trigger("out",g,this._uiHash(this))}}.call(this,this.containers[e]));this.containers[e].containerCache.over=0}}this._storedCursor&&d("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!b){this._trigger("beforeStop",
a,this._uiHash());for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}return false}b||this._trigger("beforeStop",a,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!b){for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){d.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},
_uiHash:function(a){var b=a||this;return{helper:b.helper,placeholder:b.placeholder||d([]),position:b.position,originalPosition:b.originalPosition,offset:b.positionAbs,item:b.currentItem,sender:a?a.element:null}}});d.extend(d.ui.sortable,{version:"1.8.16"})})(jQuery);
;/*
 * jQuery UI Accordion 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(c){c.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var a=this,b=a.options;a.running=0;a.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
a.headers=a.element.find(b.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){b.disabled||c(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){b.disabled||c(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){b.disabled||c(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){b.disabled||c(this).removeClass("ui-state-focus")});a.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(b.navigation){var d=a.element.find("a").filter(b.navigationFilter).eq(0);if(d.length){var h=d.closest(".ui-accordion-header");a.active=h.length?h:d.closest(".ui-accordion-content").prev()}}a.active=a._findActive(a.active||b.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");a.active.next().addClass("ui-accordion-content-active");a._createIcons();a.resize();a.element.attr("role","tablist");a.headers.attr("role","tab").bind("keydown.accordion",
function(f){return a._keydown(f)}).next().attr("role","tabpanel");a.headers.not(a.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();a.active.length?a.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):a.headers.eq(0).attr("tabIndex",0);c.browser.safari||a.headers.find("a").attr("tabIndex",-1);b.event&&a.headers.bind(b.event.split(" ").join(".accordion ")+".accordion",function(f){a._clickHandler.call(a,f,this);f.preventDefault()})},_createIcons:function(){var a=
this.options;if(a.icons){c("<span></span>").addClass("ui-icon "+a.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(a.icons.header).toggleClass(a.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var a=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(a.autoHeight||a.fillHeight)b.css("height","");return c.Widget.prototype.destroy.call(this)},_setOption:function(a,b){c.Widget.prototype._setOption.apply(this,arguments);a=="active"&&this.activate(b);if(a=="icons"){this._destroyIcons();
b&&this._createIcons()}if(a=="disabled")this.headers.add(this.headers.next())[b?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(a){if(!(this.options.disabled||a.altKey||a.ctrlKey)){var b=c.ui.keyCode,d=this.headers.length,h=this.headers.index(a.target),f=false;switch(a.keyCode){case b.RIGHT:case b.DOWN:f=this.headers[(h+1)%d];break;case b.LEFT:case b.UP:f=this.headers[(h-1+d)%d];break;case b.SPACE:case b.ENTER:this._clickHandler({target:a.target},a.target);
a.preventDefault()}if(f){c(a.target).attr("tabIndex",-1);c(f).attr("tabIndex",0);f.focus();return false}return true}},resize:function(){var a=this.options,b;if(a.fillSpace){if(c.browser.msie){var d=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}b=this.element.parent().height();c.browser.msie&&this.element.parent().css("overflow",d);this.headers.each(function(){b-=c(this).outerHeight(true)});this.headers.next().each(function(){c(this).height(Math.max(0,b-c(this).innerHeight()+
c(this).height()))}).css("overflow","auto")}else if(a.autoHeight){b=0;this.headers.next().each(function(){b=Math.max(b,c(this).height("").height())}).height(b)}return this},activate:function(a){this.options.active=a;a=this._findActive(a)[0];this._clickHandler({target:a},a);return this},_findActive:function(a){return a?typeof a==="number"?this.headers.filter(":eq("+a+")"):this.headers.not(this.headers.not(a)):a===false?c([]):this.headers.filter(":eq(0)")},_clickHandler:function(a,b){var d=this.options;
if(!d.disabled)if(a.target){a=c(a.currentTarget||b);b=a[0]===this.active[0];d.active=d.collapsible&&b?false:this.headers.index(a);if(!(this.running||!d.collapsible&&b)){var h=this.active;j=a.next();g=this.active.next();e={options:d,newHeader:b&&d.collapsible?c([]):a,oldHeader:this.active,newContent:b&&d.collapsible?c([]):j,oldContent:g};var f=this.headers.index(this.active[0])>this.headers.index(a[0]);this.active=b?c([]):a;this._toggle(j,g,e,b,f);h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
if(!b){a.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);a.next().addClass("ui-accordion-content-active")}}}else if(d.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");var g=this.active.next(),
e={options:d,newHeader:c([]),oldHeader:d.active,newContent:c([]),oldContent:g},j=this.active=c([]);this._toggle(j,g,e)}},_toggle:function(a,b,d,h,f){var g=this,e=g.options;g.toShow=a;g.toHide=b;g.data=d;var j=function(){if(g)return g._completed.apply(g,arguments)};g._trigger("changestart",null,g.data);g.running=b.size()===0?a.size():b.size();if(e.animated){d={};d=e.collapsible&&h?{toShow:c([]),toHide:b,complete:j,down:f,autoHeight:e.autoHeight||e.fillSpace}:{toShow:a,toHide:b,complete:j,down:f,autoHeight:e.autoHeight||
e.fillSpace};if(!e.proxied)e.proxied=e.animated;if(!e.proxiedDuration)e.proxiedDuration=e.duration;e.animated=c.isFunction(e.proxied)?e.proxied(d):e.proxied;e.duration=c.isFunction(e.proxiedDuration)?e.proxiedDuration(d):e.proxiedDuration;h=c.ui.accordion.animations;var i=e.duration,k=e.animated;if(k&&!h[k]&&!c.easing[k])k="slide";h[k]||(h[k]=function(l){this.slide(l,{easing:k,duration:i||700})});h[k](d)}else{if(e.collapsible&&h)a.toggle();else{b.hide();a.show()}j(true)}b.prev().attr({"aria-expanded":"false",
"aria-selected":"false",tabIndex:-1}).blur();a.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(a){this.running=a?0:--this.running;if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length)this.toHide.parent()[0].className=this.toHide.parent()[0].className;this._trigger("change",null,this.data)}}});c.extend(c.ui.accordion,{version:"1.8.16",
animations:{slide:function(a,b){a=c.extend({easing:"swing",duration:300},a,b);if(a.toHide.size())if(a.toShow.size()){var d=a.toShow.css("overflow"),h=0,f={},g={},e;b=a.toShow;e=b[0].style.width;b.width(parseInt(b.parent().width(),10)-parseInt(b.css("paddingLeft"),10)-parseInt(b.css("paddingRight"),10)-(parseInt(b.css("borderLeftWidth"),10)||0)-(parseInt(b.css("borderRightWidth"),10)||0));c.each(["height","paddingTop","paddingBottom"],function(j,i){g[i]="hide";j=(""+c.css(a.toShow[0],i)).match(/^([\d+-.]+)(.*)$/);
f[i]={value:j[1],unit:j[2]||"px"}});a.toShow.css({height:0,overflow:"hidden"}).show();a.toHide.filter(":hidden").each(a.complete).end().filter(":visible").animate(g,{step:function(j,i){if(i.prop=="height")h=i.end-i.start===0?0:(i.now-i.start)/(i.end-i.start);a.toShow[0].style[i.prop]=h*f[i.prop].value+f[i.prop].unit},duration:a.duration,easing:a.easing,complete:function(){a.autoHeight||a.toShow.css("height","");a.toShow.css({width:e,overflow:d});a.complete()}})}else a.toHide.animate({height:"hide",
paddingTop:"hide",paddingBottom:"hide"},a);else a.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},a)},bounceslide:function(a){this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1E3:200})}}})})(jQuery);
;/*
 * jQuery UI Autocomplete 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(d){var e=0;d.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var a=this,b=this.element[0].ownerDocument,g;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(!(a.options.disabled||a.element.propAttr("readOnly"))){g=
false;var f=d.ui.keyCode;switch(c.keyCode){case f.PAGE_UP:a._move("previousPage",c);break;case f.PAGE_DOWN:a._move("nextPage",c);break;case f.UP:a._move("previous",c);c.preventDefault();break;case f.DOWN:a._move("next",c);c.preventDefault();break;case f.ENTER:case f.NUMPAD_ENTER:if(a.menu.active){g=true;c.preventDefault()}case f.TAB:if(!a.menu.active)return;a.menu.select(c);break;case f.ESCAPE:a.element.val(a.term);a.close(c);break;default:clearTimeout(a.searching);a.searching=setTimeout(function(){if(a.term!=
a.element.val()){a.selectedItem=null;a.search(null,c)}},a.options.delay);break}}}).bind("keypress.autocomplete",function(c){if(g){g=false;c.preventDefault()}}).bind("focus.autocomplete",function(){if(!a.options.disabled){a.selectedItem=null;a.previous=a.element.val()}}).bind("blur.autocomplete",function(c){if(!a.options.disabled){clearTimeout(a.searching);a.closing=setTimeout(function(){a.close(c);a._change(c)},150)}});this._initSource();this.response=function(){return a._response.apply(a,arguments)};
this.menu=d("<ul></ul>").addClass("ui-autocomplete").appendTo(d(this.options.appendTo||"body",b)[0]).mousedown(function(c){var f=a.menu.element[0];d(c.target).closest(".ui-menu-item").length||setTimeout(function(){d(document).one("mousedown",function(h){h.target!==a.element[0]&&h.target!==f&&!d.ui.contains(f,h.target)&&a.close()})},1);setTimeout(function(){clearTimeout(a.closing)},13)}).menu({focus:function(c,f){f=f.item.data("item.autocomplete");false!==a._trigger("focus",c,{item:f})&&/^key/.test(c.originalEvent.type)&&
a.element.val(f.value)},selected:function(c,f){var h=f.item.data("item.autocomplete"),i=a.previous;if(a.element[0]!==b.activeElement){a.element.focus();a.previous=i;setTimeout(function(){a.previous=i;a.selectedItem=h},1)}false!==a._trigger("select",c,{item:h})&&a.element.val(h.value);a.term=a.element.val();a.close(c);a.selectedItem=h},blur:function(){a.menu.element.is(":visible")&&a.element.val()!==a.term&&a.element.val(a.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
d.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();d.Widget.prototype.destroy.call(this)},_setOption:function(a,b){d.Widget.prototype._setOption.apply(this,arguments);a==="source"&&this._initSource();if(a==="appendTo")this.menu.element.appendTo(d(b||"body",this.element[0].ownerDocument)[0]);a==="disabled"&&
b&&this.xhr&&this.xhr.abort()},_initSource:function(){var a=this,b,g;if(d.isArray(this.options.source)){b=this.options.source;this.source=function(c,f){f(d.ui.autocomplete.filter(b,c.term))}}else if(typeof this.options.source==="string"){g=this.options.source;this.source=function(c,f){a.xhr&&a.xhr.abort();a.xhr=d.ajax({url:g,data:c,dataType:"json",autocompleteRequest:++e,success:function(h){this.autocompleteRequest===e&&f(h)},error:function(){this.autocompleteRequest===e&&f([])}})}}else this.source=
this.options.source},search:function(a,b){a=a!=null?a:this.element.val();this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)!==false)return this._search(a)},_search:function(a){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:a},this.response)},_response:function(a){if(!this.options.disabled&&a&&a.length){a=this._normalize(a);this._suggest(a);this._trigger("open")}else this.close();
this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")},close:function(a){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",a)}},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(a){if(a.length&&a[0].label&&a[0].value)return a;return d.map(a,function(b){if(typeof b==="string")return{label:b,value:b};return d.extend({label:b.label||
b.value,value:b.value||b.label},b)})},_suggest:function(a){var b=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(b,a);this.menu.deactivate();this.menu.refresh();b.show();this._resizeMenu();b.position(d.extend({of:this.element},this.options.position));this.options.autoFocus&&this.menu.next(new d.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(a,b){var g=this;
d.each(b,function(c,f){g._renderItem(a,f)})},_renderItem:function(a,b){return d("<li></li>").data("item.autocomplete",b).append(d("<a></a>").text(b.label)).appendTo(a)},_move:function(a,b){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term);this.menu.deactivate()}else this.menu[a](b);else this.search(null,b)},widget:function(){return this.menu.element}});d.extend(d.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
"\\$&")},filter:function(a,b){var g=new RegExp(d.ui.autocomplete.escapeRegex(b),"i");return d.grep(a,function(c){return g.test(c.label||c.value||c)})}})})(jQuery);
(function(d){d.widget("ui.menu",{_create:function(){var e=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(a){if(d(a.target).closest(".ui-menu-item a").length){a.preventDefault();e.select(a)}});this.refresh()},refresh:function(){var e=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(a){e.activate(a,d(this).parent())}).mouseleave(function(){e.deactivate()})},activate:function(e,a){this.deactivate();if(this.hasScroll()){var b=a.offset().top-this.element.offset().top,g=this.element.scrollTop(),c=this.element.height();if(b<0)this.element.scrollTop(g+b);else b>=c&&this.element.scrollTop(g+b-c+a.height())}this.active=a.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",e,{item:a})},deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
this._trigger("blur");this.active=null}},next:function(e){this.move("next",".ui-menu-item:first",e)},previous:function(e){this.move("prev",".ui-menu-item:last",e)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(e,a,b){if(this.active){e=this.active[e+"All"](".ui-menu-item").eq(0);e.length?this.activate(b,e):this.activate(b,this.element.children(a))}else this.activate(b,
this.element.children(a))},nextPage:function(e){if(this.hasScroll())if(!this.active||this.last())this.activate(e,this.element.children(".ui-menu-item:first"));else{var a=this.active.offset().top,b=this.element.height(),g=this.element.children(".ui-menu-item").filter(function(){var c=d(this).offset().top-a-b+d(this).height();return c<10&&c>-10});g.length||(g=this.element.children(".ui-menu-item:last"));this.activate(e,g)}else this.activate(e,this.element.children(".ui-menu-item").filter(!this.active||
this.last()?":first":":last"))},previousPage:function(e){if(this.hasScroll())if(!this.active||this.first())this.activate(e,this.element.children(".ui-menu-item:last"));else{var a=this.active.offset().top,b=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var g=d(this).offset().top-a+b-d(this).height();return g<10&&g>-10});result.length||(result=this.element.children(".ui-menu-item:first"));this.activate(e,result)}else this.activate(e,this.element.children(".ui-menu-item").filter(!this.active||
this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[d.fn.prop?"prop":"attr"]("scrollHeight")},select:function(e){this._trigger("selected",e,{item:this.active})}})})(jQuery);
;/*
 * jQuery UI Button 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(b){var h,i,j,g,l=function(){var a=b(this).find(":ui-button");setTimeout(function(){a.button("refresh")},1)},k=function(a){var c=a.name,e=a.form,f=b([]);if(c)f=e?b(e).find("[name='"+c+"']"):b("[name='"+c+"']",a.ownerDocument).filter(function(){return!this.form});return f};b.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",l);if(typeof this.options.disabled!==
"boolean")this.options.disabled=this.element.propAttr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var a=this,c=this.options,e=this.type==="checkbox"||this.type==="radio",f="ui-state-hover"+(!e?" ui-state-active":"");if(c.label===null)c.label=this.buttonElement.html();if(this.element.is(":disabled"))c.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",function(){if(!c.disabled){b(this).addClass("ui-state-hover");
this===h&&b(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){c.disabled||b(this).removeClass(f)}).bind("click.button",function(d){if(c.disabled){d.preventDefault();d.stopImmediatePropagation()}});this.element.bind("focus.button",function(){a.buttonElement.addClass("ui-state-focus")}).bind("blur.button",function(){a.buttonElement.removeClass("ui-state-focus")});if(e){this.element.bind("change.button",function(){g||a.refresh()});this.buttonElement.bind("mousedown.button",function(d){if(!c.disabled){g=
false;i=d.pageX;j=d.pageY}}).bind("mouseup.button",function(d){if(!c.disabled)if(i!==d.pageX||j!==d.pageY)g=true})}if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(c.disabled||g)return false;b(this).toggleClass("ui-state-active");a.buttonElement.attr("aria-pressed",a.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(c.disabled||g)return false;b(this).addClass("ui-state-active");a.buttonElement.attr("aria-pressed","true");
var d=a.element[0];k(d).not(d).map(function(){return b(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")});else{this.buttonElement.bind("mousedown.button",function(){if(c.disabled)return false;b(this).addClass("ui-state-active");h=this;b(document).one("mouseup",function(){h=null})}).bind("mouseup.button",function(){if(c.disabled)return false;b(this).removeClass("ui-state-active")}).bind("keydown.button",function(d){if(c.disabled)return false;if(d.keyCode==b.ui.keyCode.SPACE||
d.keyCode==b.ui.keyCode.ENTER)b(this).addClass("ui-state-active")}).bind("keyup.button",function(){b(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(d){d.keyCode===b.ui.keyCode.SPACE&&b(this).click()})}this._setOption("disabled",c.disabled);this._resetButton()},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type===
"radio"){var a=this.element.parents().filter(":last"),c="label[for='"+this.element.attr("id")+"']";this.buttonElement=a.find(c);if(!this.buttonElement.length){a=a.length?a.siblings():this.element.siblings();this.buttonElement=a.filter(c);if(!this.buttonElement.length)this.buttonElement=a.find(c)}this.element.addClass("ui-helper-hidden-accessible");(a=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",a)}else this.buttonElement=this.element},
widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());this.hasTitle||this.buttonElement.removeAttr("title");
b.Widget.prototype.destroy.call(this)},_setOption:function(a,c){b.Widget.prototype._setOption.apply(this,arguments);if(a==="disabled")c?this.element.propAttr("disabled",true):this.element.propAttr("disabled",false);else this._resetButton()},refresh:function(){var a=this.element.is(":disabled");a!==this.options.disabled&&this._setOption("disabled",a);if(this.type==="radio")k(this.element[0]).each(function(){b(this).is(":checked")?b(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
"true"):b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var a=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
c=b("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(),e=this.options.icons,f=e.primary&&e.secondary,d=[];if(e.primary||e.secondary){if(this.options.text)d.push("ui-button-text-icon"+(f?"s":e.primary?"-primary":"-secondary"));e.primary&&a.prepend("<span class='ui-button-icon-primary ui-icon "+e.primary+"'></span>");e.secondary&&a.append("<span class='ui-button-icon-secondary ui-icon "+e.secondary+"'></span>");if(!this.options.text){d.push(f?"ui-button-icons-only":
"ui-button-icon-only");this.hasTitle||a.attr("title",c)}}else d.push("ui-button-text-only");a.addClass(d.join(" "))}}});b.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(a,c){a==="disabled"&&this.buttons.button("option",a,c);b.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var a=this.element.css("direction")===
"ltr";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a?"ui-corner-left":"ui-corner-right").end().filter(":last").addClass(a?"ui-corner-right":"ui-corner-left").end().end()},destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
b.Widget.prototype.destroy.call(this)}})})(jQuery);
;/*
 * jQuery UI Dialog 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function(c,l){var m={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},n={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},o=c.attrFn||{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true,click:true};c.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,
position:{my:"center",at:"center",collision:"fit",using:function(a){var b=c(this).css(a).offset().top;b<0&&c(this).css("top",a.top-b)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var a=this,b=a.options,d=b.title||"&#160;",e=c.ui.dialog.getTitleId(a.element),g=(a.uiDialog=c("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+
b.dialogClass).css({zIndex:b.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(i){if(b.closeOnEscape&&!i.isDefaultPrevented()&&i.keyCode&&i.keyCode===c.ui.keyCode.ESCAPE){a.close(i);i.preventDefault()}}).attr({role:"dialog","aria-labelledby":e}).mousedown(function(i){a.moveToTop(false,i)});a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g);var f=(a.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),
h=c('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){h.addClass("ui-state-hover")},function(){h.removeClass("ui-state-hover")}).focus(function(){h.addClass("ui-state-focus")}).blur(function(){h.removeClass("ui-state-focus")}).click(function(i){a.close(i);return false}).appendTo(f);(a.uiDialogTitlebarCloseText=c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(h);c("<span></span>").addClass("ui-dialog-title").attr("id",
e).html(d).prependTo(f);if(c.isFunction(b.beforeclose)&&!c.isFunction(b.beforeClose))b.beforeClose=b.beforeclose;f.find("*").add(f).disableSelection();b.draggable&&c.fn.draggable&&a._makeDraggable();b.resizable&&c.fn.resizable&&a._makeResizable();a._createButtons(b.buttons);a._isOpen=false;c.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;a.overlay&&a.overlay.destroy();a.uiDialog.hide();a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
a.uiDialog.remove();a.originalTitle&&a.element.attr("title",a.originalTitle);return a},widget:function(){return this.uiDialog},close:function(a){var b=this,d,e;if(false!==b._trigger("beforeClose",a)){b.overlay&&b.overlay.destroy();b.uiDialog.unbind("keypress.ui-dialog");b._isOpen=false;if(b.options.hide)b.uiDialog.hide(b.options.hide,function(){b._trigger("close",a)});else{b.uiDialog.hide();b._trigger("close",a)}c.ui.dialog.overlay.resize();if(b.options.modal){d=0;c(".ui-dialog").each(function(){if(this!==
b.uiDialog[0]){e=c(this).css("z-index");isNaN(e)||(d=Math.max(d,e))}});c.ui.dialog.maxZ=d}return b}},isOpen:function(){return this._isOpen},moveToTop:function(a,b){var d=this,e=d.options;if(e.modal&&!a||!e.stack&&!e.modal)return d._trigger("focus",b);if(e.zIndex>c.ui.dialog.maxZ)c.ui.dialog.maxZ=e.zIndex;if(d.overlay){c.ui.dialog.maxZ+=1;d.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=c.ui.dialog.maxZ)}a={scrollTop:d.element.scrollTop(),scrollLeft:d.element.scrollLeft()};c.ui.dialog.maxZ+=1;
d.uiDialog.css("z-index",c.ui.dialog.maxZ);d.element.attr(a);d._trigger("focus",b);return d},open:function(){if(!this._isOpen){var a=this,b=a.options,d=a.uiDialog;a.overlay=b.modal?new c.ui.dialog.overlay(a):null;a._size();a._position(b.position);d.show(b.show);a.moveToTop(true);b.modal&&d.bind("keypress.ui-dialog",function(e){if(e.keyCode===c.ui.keyCode.TAB){var g=c(":tabbable",this),f=g.filter(":first");g=g.filter(":last");if(e.target===g[0]&&!e.shiftKey){f.focus(1);return false}else if(e.target===
f[0]&&e.shiftKey){g.focus(1);return false}}});c(a.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus();a._isOpen=true;a._trigger("open");return a}},_createButtons:function(a){var b=this,d=false,e=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),g=c("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);b.uiDialog.find(".ui-dialog-buttonpane").remove();typeof a==="object"&&a!==null&&c.each(a,
function(){return!(d=true)});if(d){c.each(a,function(f,h){h=c.isFunction(h)?{click:h,text:f}:h;var i=c('<button type="button"></button>').click(function(){h.click.apply(b.element[0],arguments)}).appendTo(g);c.each(h,function(j,k){if(j!=="click")j in o?i[j](k):i.attr(j,k)});c.fn.button&&i.button()});e.appendTo(b.uiDialog)}},_makeDraggable:function(){function a(f){return{position:f.position,offset:f.offset}}var b=this,d=b.options,e=c(document),g;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",
handle:".ui-dialog-titlebar",containment:"document",start:function(f,h){g=d.height==="auto"?"auto":c(this).height();c(this).height(c(this).height()).addClass("ui-dialog-dragging");b._trigger("dragStart",f,a(h))},drag:function(f,h){b._trigger("drag",f,a(h))},stop:function(f,h){d.position=[h.position.left-e.scrollLeft(),h.position.top-e.scrollTop()];c(this).removeClass("ui-dialog-dragging").height(g);b._trigger("dragStop",f,a(h));c.ui.dialog.overlay.resize()}})},_makeResizable:function(a){function b(f){return{originalPosition:f.originalPosition,
originalSize:f.originalSize,position:f.position,size:f.size}}a=a===l?this.options.resizable:a;var d=this,e=d.options,g=d.uiDialog.css("position");a=typeof a==="string"?a:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:a,start:function(f,h){c(this).addClass("ui-dialog-resizing");d._trigger("resizeStart",f,b(h))},resize:function(f,h){d._trigger("resize",
f,b(h))},stop:function(f,h){c(this).removeClass("ui-dialog-resizing");e.height=c(this).height();e.width=c(this).width();d._trigger("resizeStop",f,b(h));c.ui.dialog.overlay.resize()}}).css("position",g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(a){var b=[],d=[0,0],e;if(a){if(typeof a==="string"||typeof a==="object"&&"0"in a){b=a.split?a.split(" "):
[a[0],a[1]];if(b.length===1)b[1]=b[0];c.each(["left","top"],function(g,f){if(+b[g]===b[g]){d[g]=b[g];b[g]=f}});a={my:b.join(" "),at:b.join(" "),offset:d.join(" ")}}a=c.extend({},c.ui.dialog.prototype.options.position,a)}else a=c.ui.dialog.prototype.options.position;(e=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(c.extend({of:window},a));e||this.uiDialog.hide()},_setOptions:function(a){var b=this,d={},e=false;c.each(a,function(g,f){b._setOption(g,f);
if(g in m)e=true;if(g in n)d[g]=f});e&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",d)},_setOption:function(a,b){var d=this,e=d.uiDialog;switch(a){case "beforeclose":a="beforeClose";break;case "buttons":d._createButtons(b);break;case "closeText":d.uiDialogTitlebarCloseText.text(""+b);break;case "dialogClass":e.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b);break;case "disabled":b?e.addClass("ui-dialog-disabled"):
e.removeClass("ui-dialog-disabled");break;case "draggable":var g=e.is(":data(draggable)");g&&!b&&e.draggable("destroy");!g&&b&&d._makeDraggable();break;case "position":d._position(b);break;case "resizable":(g=e.is(":data(resizable)"))&&!b&&e.resizable("destroy");g&&typeof b==="string"&&e.resizable("option","handles",b);!g&&b!==false&&d._makeResizable(b);break;case "title":c(".ui-dialog-title",d.uiDialogTitlebar).html(""+(b||"&#160;"));break}c.Widget.prototype._setOption.apply(d,arguments)},_size:function(){var a=
this.options,b,d,e=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(a.minWidth>a.width)a.width=a.minWidth;b=this.uiDialog.css({height:"auto",width:a.width}).height();d=Math.max(0,a.minHeight-b);if(a.height==="auto")if(c.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();a=this.element.css("height","auto").height();e||this.uiDialog.hide();this.element.height(Math.max(a,d))}else this.element.height(Math.max(a.height-
b,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}});c.extend(c.ui.dialog,{version:"1.8.16",uuid:0,maxZ:0,getTitleId:function(a){a=a.attr("id");if(!a){this.uuid+=1;a=this.uuid}return"ui-dialog-title-"+a},overlay:function(a){this.$el=c.ui.dialog.overlay.create(a)}});c.extend(c.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),
create:function(a){if(this.instances.length===0){setTimeout(function(){c.ui.dialog.overlay.instances.length&&c(document).bind(c.ui.dialog.overlay.events,function(d){if(c(d.target).zIndex()<c.ui.dialog.overlay.maxZ)return false})},1);c(document).bind("keydown.dialog-overlay",function(d){if(a.options.closeOnEscape&&!d.isDefaultPrevented()&&d.keyCode&&d.keyCode===c.ui.keyCode.ESCAPE){a.close(d);d.preventDefault()}});c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize)}var b=(this.oldInstances.pop()||
c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});c.fn.bgiframe&&b.bgiframe();this.instances.push(b);return b},destroy:function(a){var b=c.inArray(a,this.instances);b!=-1&&this.oldInstances.push(this.instances.splice(b,1)[0]);this.instances.length===0&&c([document,window]).unbind(".dialog-overlay");a.remove();var d=0;c.each(this.instances,function(){d=Math.max(d,this.css("z-index"))});this.maxZ=d},height:function(){var a,b;if(c.browser.msie&&
c.browser.version<7){a=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);b=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return a<b?c(window).height()+"px":a+"px"}else return c(document).height()+"px"},width:function(){var a,b;if(c.browser.msie){a=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);b=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return a<b?c(window).width()+"px":a+"px"}else return c(document).width()+
"px"},resize:function(){var a=c([]);c.each(c.ui.dialog.overlay.instances,function(){a=a.add(this)});a.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()})}});c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){c.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
;/*
 * jQuery UI Slider 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.slider",d.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var a=this,b=this.options,c=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f=b.values&&b.values.length||1,e=[];this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+
this.orientation+" ui-widget ui-widget-content ui-corner-all"+(b.disabled?" ui-slider-disabled ui-disabled":""));this.range=d([]);if(b.range){if(b.range===true){if(!b.values)b.values=[this._valueMin(),this._valueMin()];if(b.values.length&&b.values.length!==2)b.values=[b.values[0],b.values[0]]}this.range=d("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(b.range==="min"||b.range==="max"?" ui-slider-range-"+b.range:""))}for(var j=c.length;j<f;j+=1)e.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
this.handles=c.add(d(e.join("")).appendTo(a.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(g){g.preventDefault()}).hover(function(){b.disabled||d(this).addClass("ui-state-hover")},function(){d(this).removeClass("ui-state-hover")}).focus(function(){if(b.disabled)d(this).blur();else{d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");d(this).addClass("ui-state-focus")}}).blur(function(){d(this).removeClass("ui-state-focus")});this.handles.each(function(g){d(this).data("index.ui-slider-handle",
g)});this.handles.keydown(function(g){var k=true,l=d(this).data("index.ui-slider-handle"),i,h,m;if(!a.options.disabled){switch(g.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:k=false;if(!a._keySliding){a._keySliding=true;d(this).addClass("ui-state-active");i=a._start(g,l);if(i===false)return}break}m=a.options.step;i=a.options.values&&a.options.values.length?
(h=a.values(l)):(h=a.value());switch(g.keyCode){case d.ui.keyCode.HOME:h=a._valueMin();break;case d.ui.keyCode.END:h=a._valueMax();break;case d.ui.keyCode.PAGE_UP:h=a._trimAlignValue(i+(a._valueMax()-a._valueMin())/5);break;case d.ui.keyCode.PAGE_DOWN:h=a._trimAlignValue(i-(a._valueMax()-a._valueMin())/5);break;case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(i===a._valueMax())return;h=a._trimAlignValue(i+m);break;case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(i===a._valueMin())return;h=a._trimAlignValue(i-
m);break}a._slide(g,l,h);return k}}).keyup(function(g){var k=d(this).data("index.ui-slider-handle");if(a._keySliding){a._keySliding=false;a._stop(g,k);a._change(g,k);d(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();
return this},_mouseCapture:function(a){var b=this.options,c,f,e,j,g;if(b.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();c=this._normValueFromMouse({x:a.pageX,y:a.pageY});f=this._valueMax()-this._valueMin()+1;j=this;this.handles.each(function(k){var l=Math.abs(c-j.values(k));if(f>l){f=l;e=d(this);g=k}});if(b.range===true&&this.values(1)===b.min){g+=1;e=d(this.handles[g])}if(this._start(a,g)===false)return false;
this._mouseSliding=true;j._handleIndex=g;e.addClass("ui-state-active").focus();b=e.offset();this._clickOffset=!d(a.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:a.pageX-b.left-e.width()/2,top:a.pageY-b.top-e.height()/2-(parseInt(e.css("borderTopWidth"),10)||0)-(parseInt(e.css("borderBottomWidth"),10)||0)+(parseInt(e.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(a,g,c);return this._animateOff=true},_mouseStart:function(){return true},_mouseDrag:function(a){var b=
this._normValueFromMouse({x:a.pageX,y:a.pageY});this._slide(a,this._handleIndex,b);return false},_mouseStop:function(a){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(a,this._handleIndex);this._change(a,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b;if(this.orientation==="horizontal"){b=
this.elementSize.width;a=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{b=this.elementSize.height;a=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}b=a/b;if(b>1)b=1;if(b<0)b=0;if(this.orientation==="vertical")b=1-b;a=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+b*a)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(b);
c.values=this.values()}return this._trigger("start",a,c)},_slide:function(a,b,c){var f;if(this.options.values&&this.options.values.length){f=this.values(b?0:1);if(this.options.values.length===2&&this.options.range===true&&(b===0&&c>f||b===1&&c<f))c=f;if(c!==this.values(b)){f=this.values();f[b]=c;a=this._trigger("slide",a,{handle:this.handles[b],value:c,values:f});this.values(b?0:1);a!==false&&this.values(b,c,true)}}else if(c!==this.value()){a=this._trigger("slide",a,{handle:this.handles[b],value:c});
a!==false&&this.value(c)}},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(b);c.values=this.values()}this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(b);c.values=this.values()}this._trigger("change",a,c)}},value:function(a){if(arguments.length){this.options.value=
this._trimAlignValue(a);this._refreshValue();this._change(null,0)}else return this._value()},values:function(a,b){var c,f,e;if(arguments.length>1){this.options.values[a]=this._trimAlignValue(b);this._refreshValue();this._change(null,a)}else if(arguments.length)if(d.isArray(arguments[0])){c=this.options.values;f=arguments[0];for(e=0;e<c.length;e+=1){c[e]=this._trimAlignValue(f[e]);this._change(null,e)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(a):
this.value();else return this._values()},_setOption:function(a,b){var c,f=0;if(d.isArray(this.options.values))f=this.options.values.length;d.Widget.prototype._setOption.apply(this,arguments);switch(a){case "disabled":if(b){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.propAttr("disabled",true);this.element.addClass("ui-disabled")}else{this.handles.propAttr("disabled",false);this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(c=0;c<f;c+=1)this._change(null,c);this._animateOff=false;break}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a)},_values:function(a){var b,c;if(arguments.length){b=this.options.values[a];
return b=this._trimAlignValue(b)}else{b=this.options.values.slice();for(c=0;c<b.length;c+=1)b[c]=this._trimAlignValue(b[c]);return b}},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b;a=a-c;if(Math.abs(c)*2>=b)a+=c>0?b:-b;return parseFloat(a.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var a=
this.options.range,b=this.options,c=this,f=!this._animateOff?b.animate:false,e,j={},g,k,l,i;if(this.options.values&&this.options.values.length)this.handles.each(function(h){e=(c.values(h)-c._valueMin())/(c._valueMax()-c._valueMin())*100;j[c.orientation==="horizontal"?"left":"bottom"]=e+"%";d(this).stop(1,1)[f?"animate":"css"](j,b.animate);if(c.options.range===true)if(c.orientation==="horizontal"){if(h===0)c.range.stop(1,1)[f?"animate":"css"]({left:e+"%"},b.animate);if(h===1)c.range[f?"animate":"css"]({width:e-
g+"%"},{queue:false,duration:b.animate})}else{if(h===0)c.range.stop(1,1)[f?"animate":"css"]({bottom:e+"%"},b.animate);if(h===1)c.range[f?"animate":"css"]({height:e-g+"%"},{queue:false,duration:b.animate})}g=e});else{k=this.value();l=this._valueMin();i=this._valueMax();e=i!==l?(k-l)/(i-l)*100:0;j[c.orientation==="horizontal"?"left":"bottom"]=e+"%";this.handle.stop(1,1)[f?"animate":"css"](j,b.animate);if(a==="min"&&this.orientation==="horizontal")this.range.stop(1,1)[f?"animate":"css"]({width:e+"%"},
b.animate);if(a==="max"&&this.orientation==="horizontal")this.range[f?"animate":"css"]({width:100-e+"%"},{queue:false,duration:b.animate});if(a==="min"&&this.orientation==="vertical")this.range.stop(1,1)[f?"animate":"css"]({height:e+"%"},b.animate);if(a==="max"&&this.orientation==="vertical")this.range[f?"animate":"css"]({height:100-e+"%"},{queue:false,duration:b.animate})}}});d.extend(d.ui.slider,{version:"1.8.16"})})(jQuery);
;/*
 * jQuery UI Tabs 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(d,p){function u(){return++v}function w(){return++x}var v=0,x=0;d.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(b,e){if(b=="selected")this.options.collapsible&&
e==this.options.selected||this.select(e);else{this.options[b]=e;this._tabify()}},_tabId:function(b){return b.title&&b.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+u()},_sanitizeSelector:function(b){return b.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+w());return d.cookie.apply(null,[b].concat(d.makeArray(arguments)))},_ui:function(b,e){return{tab:b,panel:e,index:this.anchors.index(b)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=
d(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(b){function e(g,f){g.css("display","");!d.support.opacity&&f.opacity&&g[0].style.removeAttribute("filter")}var a=this,c=this.options,h=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=d(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return d("a",this)[0]});this.panels=d([]);this.anchors.each(function(g,f){var i=d(f).attr("href"),l=i.split("#")[0],q;if(l&&(l===location.toString().split("#")[0]||
(q=d("base")[0])&&l===q.href)){i=f.hash;f.href=i}if(h.test(i))a.panels=a.panels.add(a.element.find(a._sanitizeSelector(i)));else if(i&&i!=="#"){d.data(f,"href.tabs",i);d.data(f,"load.tabs",i.replace(/#.*$/,""));i=a._tabId(f);f.href="#"+i;f=a.element.find("#"+i);if(!f.length){f=d(c.panelTemplate).attr("id",i).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[g-1]||a.list);f.data("destroy.tabs",true)}a.panels=a.panels.add(f)}else c.disabled.push(g)});if(b){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(c.selected===p){location.hash&&this.anchors.each(function(g,f){if(f.hash==location.hash){c.selected=g;return false}});if(typeof c.selected!=="number"&&c.cookie)c.selected=parseInt(a._cookie(),10);if(typeof c.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length)c.selected=
this.lis.index(this.lis.filter(".ui-tabs-selected"));c.selected=c.selected||(this.lis.length?0:-1)}else if(c.selected===null)c.selected=-1;c.selected=c.selected>=0&&this.anchors[c.selected]||c.selected<0?c.selected:0;c.disabled=d.unique(c.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"),function(g){return a.lis.index(g)}))).sort();d.inArray(c.selected,c.disabled)!=-1&&c.disabled.splice(d.inArray(c.selected,c.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
if(c.selected>=0&&this.anchors.length){a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(c.selected).addClass("ui-tabs-selected ui-state-active");a.element.queue("tabs",function(){a._trigger("show",null,a._ui(a.anchors[c.selected],a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash))[0]))});this.load(c.selected)}d(window).bind("unload",function(){a.lis.add(a.anchors).unbind(".tabs");a.lis=a.anchors=a.panels=null})}else c.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
this.element[c.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");c.cookie&&this._cookie(c.selected,c.cookie);b=0;for(var j;j=this.lis[b];b++)d(j)[d.inArray(b,c.disabled)!=-1&&!d(j).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");c.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(c.event!=="mouseover"){var k=function(g,f){f.is(":not(.ui-state-disabled)")&&f.addClass("ui-state-"+g)},n=function(g,f){f.removeClass("ui-state-"+
g)};this.lis.bind("mouseover.tabs",function(){k("hover",d(this))});this.lis.bind("mouseout.tabs",function(){n("hover",d(this))});this.anchors.bind("focus.tabs",function(){k("focus",d(this).closest("li"))});this.anchors.bind("blur.tabs",function(){n("focus",d(this).closest("li"))})}var m,o;if(c.fx)if(d.isArray(c.fx)){m=c.fx[0];o=c.fx[1]}else m=o=c.fx;var r=o?function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.hide().removeClass("ui-tabs-hide").animate(o,o.duration||"normal",
function(){e(f,o);a._trigger("show",null,a._ui(g,f[0]))})}:function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.removeClass("ui-tabs-hide");a._trigger("show",null,a._ui(g,f[0]))},s=m?function(g,f){f.animate(m,m.duration||"normal",function(){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");e(f,m);a.element.dequeue("tabs")})}:function(g,f){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");a.element.dequeue("tabs")};
this.anchors.bind(c.event+".tabs",function(){var g=this,f=d(g).closest("li"),i=a.panels.filter(":not(.ui-tabs-hide)"),l=a.element.find(a._sanitizeSelector(g.hash));if(f.hasClass("ui-tabs-selected")&&!c.collapsible||f.hasClass("ui-state-disabled")||f.hasClass("ui-state-processing")||a.panels.filter(":animated").length||a._trigger("select",null,a._ui(this,l[0]))===false){this.blur();return false}c.selected=a.anchors.index(this);a.abort();if(c.collapsible)if(f.hasClass("ui-tabs-selected")){c.selected=
-1;c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){s(g,i)}).dequeue("tabs");this.blur();return false}else if(!i.length){c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this));this.blur();return false}c.cookie&&a._cookie(c.selected,c.cookie);if(l.length){i.length&&a.element.queue("tabs",function(){s(g,i)});a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";
d.browser.msie&&this.blur()});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(b){if(typeof b=="string")b=this.anchors.index(this.anchors.filter("[href$="+b+"]"));return b},destroy:function(){var b=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var e=
d.data(this,"href.tabs");if(e)this.href=e;var a=d(this).unbind(".tabs");d.each(["href","load","cache"],function(c,h){a.removeData(h+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){d.data(this,"destroy.tabs")?d(this).remove():d(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});b.cookie&&this._cookie(null,b.cookie);return this},add:function(b,
e,a){if(a===p)a=this.anchors.length;var c=this,h=this.options;e=d(h.tabTemplate.replace(/#\{href\}/g,b).replace(/#\{label\}/g,e));b=!b.indexOf("#")?b.replace("#",""):this._tabId(d("a",e)[0]);e.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var j=c.element.find("#"+b);j.length||(j=d(h.panelTemplate).attr("id",b).data("destroy.tabs",true));j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(a>=this.lis.length){e.appendTo(this.list);j.appendTo(this.list[0].parentNode)}else{e.insertBefore(this.lis[a]);
j.insertBefore(this.panels[a])}h.disabled=d.map(h.disabled,function(k){return k>=a?++k:k});this._tabify();if(this.anchors.length==1){h.selected=0;e.addClass("ui-tabs-selected ui-state-active");j.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){c._trigger("show",null,c._ui(c.anchors[0],c.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[a],this.panels[a]));return this},remove:function(b){b=this._getIndex(b);var e=this.options,a=this.lis.eq(b).remove(),c=this.panels.eq(b).remove();
if(a.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(b+(b+1<this.anchors.length?1:-1));e.disabled=d.map(d.grep(e.disabled,function(h){return h!=b}),function(h){return h>=b?--h:h});this._tabify();this._trigger("remove",null,this._ui(a.find("a")[0],c[0]));return this},enable:function(b){b=this._getIndex(b);var e=this.options;if(d.inArray(b,e.disabled)!=-1){this.lis.eq(b).removeClass("ui-state-disabled");e.disabled=d.grep(e.disabled,function(a){return a!=b});this._trigger("enable",null,
this._ui(this.anchors[b],this.panels[b]));return this}},disable:function(b){b=this._getIndex(b);var e=this.options;if(b!=e.selected){this.lis.eq(b).addClass("ui-state-disabled");e.disabled.push(b);e.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[b],this.panels[b]))}return this},select:function(b){b=this._getIndex(b);if(b==-1)if(this.options.collapsible&&this.options.selected!=-1)b=this.options.selected;else return this;this.anchors.eq(b).trigger(this.options.event+".tabs");return this},
load:function(b){b=this._getIndex(b);var e=this,a=this.options,c=this.anchors.eq(b)[0],h=d.data(c,"load.tabs");this.abort();if(!h||this.element.queue("tabs").length!==0&&d.data(c,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(b).addClass("ui-state-processing");if(a.spinner){var j=d("span",c);j.data("label.tabs",j.html()).html(a.spinner)}this.xhr=d.ajax(d.extend({},a.ajaxOptions,{url:h,success:function(k,n){e.element.find(e._sanitizeSelector(c.hash)).html(k);e._cleanup();a.cache&&d.data(c,
"cache.tabs",true);e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.success(k,n)}catch(m){}},error:function(k,n){e._cleanup();e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.error(k,n,b,c)}catch(m){}}}));e.element.dequeue("tabs");return this}},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},
url:function(b,e){this.anchors.eq(b).removeData("cache.tabs").data("load.tabs",e);return this},length:function(){return this.anchors.length}});d.extend(d.ui.tabs,{version:"1.8.16"});d.extend(d.ui.tabs.prototype,{rotation:null,rotate:function(b,e){var a=this,c=this.options,h=a._rotate||(a._rotate=function(j){clearTimeout(a.rotation);a.rotation=setTimeout(function(){var k=c.selected;a.select(++k<a.anchors.length?k:0)},b);j&&j.stopPropagation()});e=a._unrotate||(a._unrotate=!e?function(j){j.clientX&&
a.rotate(null)}:function(){t=c.selected;h()});if(b){this.element.bind("tabsshow",h);this.anchors.bind(c.event+".tabs",e);h()}else{clearTimeout(a.rotation);this.element.unbind("tabsshow",h);this.anchors.unbind(c.event+".tabs",e);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
;/*
 * jQuery UI Datepicker 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function(d,C){function M(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
"ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su",
"Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};d.extend(this._defaults,this.regional[""]);this.dpDiv=N(d('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function N(a){return a.bind("mouseout",
function(b){b=d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");b.length&&b.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(b){b=d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");if(!(d.datepicker._isDisabledDatepicker(J.inline?a.parent()[0]:J.input[0])||!b.length)){b.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
b.addClass("ui-state-hover");b.hasClass("ui-datepicker-prev")&&b.addClass("ui-datepicker-prev-hover");b.hasClass("ui-datepicker-next")&&b.addClass("ui-datepicker-next-hover")}})}function H(a,b){d.extend(a,b);for(var c in b)if(b[c]==null||b[c]==C)a[c]=b[c];return a}d.extend(d.ui,{datepicker:{version:"1.8.16"}});var B=(new Date).getTime(),J;d.extend(M.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},
setDefaults:function(a){H(this._defaults,a||{});return this},_attachDatepicker:function(a,b){var c=null;for(var e in this._defaults){var f=a.getAttribute("date:"+e);if(f){c=c||{};try{c[e]=eval(f)}catch(h){c[e]=f}}}e=a.nodeName.toLowerCase();f=e=="div"||e=="span";if(!a.id){this.uuid+=1;a.id="dp"+this.uuid}var i=this._newInst(d(a),f);i.settings=d.extend({},b||{},c||{});if(e=="input")this._connectDatepicker(a,i);else f&&this._inlineDatepicker(a,i)},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,
"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:N(d('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(a,b){var c=d(a);b.append=d([]);b.trigger=d([]);if(!c.hasClass(this.markerClassName)){this._attachments(c,b);c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",
function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});this._autoSize(b);d.data(a,"datepicker",b);b.settings.disabled&&this._disableDatepicker(a)}},_attachments:function(a,b){var c=this._get(b,"appendText"),e=this._get(b,"isRTL");b.append&&b.append.remove();if(c){b.append=d('<span class="'+this._appendClass+'">'+c+"</span>");a[e?"before":"after"](b.append)}a.unbind("focus",this._showDatepicker);b.trigger&&b.trigger.remove();c=this._get(b,"showOn");if(c==
"focus"||c=="both")a.focus(this._showDatepicker);if(c=="button"||c=="both"){c=this._get(b,"buttonText");var f=this._get(b,"buttonImage");b.trigger=d(this._get(b,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d('<button type="button"></button>').addClass(this._triggerClass).html(f==""?c:d("<img/>").attr({src:f,alt:c,title:c})));a[e?"before":"after"](b.trigger);b.trigger.click(function(){d.datepicker._datepickerShowing&&d.datepicker._lastInput==a[0]?d.datepicker._hideDatepicker():
d.datepicker._showDatepicker(a[0]);return false})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var e=function(f){for(var h=0,i=0,g=0;g<f.length;g++)if(f[g].length>h){h=f[g].length;i=g}return i};b.setMonth(e(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort")));b.setDate(e(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,
b){var c=d(a);if(!c.hasClass(this.markerClassName)){c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});d.data(a,"datepicker",b);this._setDate(b,this._getDefaultDate(b),true);this._updateDatepicker(b);this._updateAlternate(b);b.settings.disabled&&this._disableDatepicker(a);b.dpDiv.css("display","block")}},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;if(!a){this.uuid+=
1;this._dialogInput=d('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);d("body").append(this._dialogInput);a=this._dialogInst=this._newInst(this._dialogInput,false);a.settings={};d.data(this._dialogInput[0],"datepicker",a)}H(a.settings,e||{});b=b&&b.constructor==Date?this._formatDate(a,b):b;this._dialogInput.val(b);this._pos=f?f.length?f:[f.pageX,f.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/
2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=c;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);d.blockUI&&d.blockUI(this.dpDiv);d.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var b=
d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();d.removeData(a,"datepicker");if(e=="input"){c.append.remove();c.trigger.remove();b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else if(e=="div"||e=="span")b.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=
a.nodeName.toLowerCase();if(e=="input"){a.disabled=false;c.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(e=="div"||e=="span"){b=b.children("."+this._inlineClass);b.children().removeClass("ui-state-disabled");b.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:f})}},_disableDatepicker:function(a){var b=d(a),c=d.data(a,
"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=true;c.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(e=="div"||e=="span"){b=b.children("."+this._inlineClass);b.children().addClass("ui-state-disabled");b.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=d.map(this._disabledInputs,function(f){return f==
a?null:f});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return false;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return true;return false},_getInst:function(a){try{return d.data(a,"datepicker")}catch(b){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?d.extend({},d.datepicker._defaults):e?b=="all"?
d.extend({},e.settings):this._get(e,b):null;var f=b||{};if(typeof b=="string"){f={};f[b]=c}if(e){this._curInst==e&&this._hideDatepicker();var h=this._getDateDatepicker(a,true),i=this._getMinMaxDate(e,"min"),g=this._getMinMaxDate(e,"max");H(e.settings,f);if(i!==null&&f.dateFormat!==C&&f.minDate===C)e.settings.minDate=this._formatDate(e,i);if(g!==null&&f.dateFormat!==C&&f.maxDate===C)e.settings.maxDate=this._formatDate(e,g);this._attachments(d(a),e);this._autoSize(e);this._setDate(e,h);this._updateAlternate(e);
this._updateDatepicker(e)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,b){if(a=this._getInst(a)){this._setDate(a,b);this._updateDatepicker(a);this._updateAlternate(a)}},_getDateDatepicker:function(a,b){(a=this._getInst(a))&&!a.inline&&this._setDateFromField(a,b);return a?this._getDate(a):null},_doKeyDown:function(a){var b=d.datepicker._getInst(a.target),c=true,e=b.dpDiv.is(".ui-datepicker-rtl");
b._keyEvent=true;if(d.datepicker._datepickerShowing)switch(a.keyCode){case 9:d.datepicker._hideDatepicker();c=false;break;case 13:c=d("td."+d.datepicker._dayOverClass+":not(."+d.datepicker._currentClass+")",b.dpDiv);c[0]&&d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]);if(a=d.datepicker._get(b,"onSelect")){c=d.datepicker._formatDate(b);a.apply(b.input?b.input[0]:null,[c,b])}else d.datepicker._hideDatepicker();return false;case 27:d.datepicker._hideDatepicker();break;case 33:d.datepicker._adjustDate(a.target,
a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 35:if(a.ctrlKey||a.metaKey)d.datepicker._clearDate(a.target);c=a.ctrlKey||a.metaKey;break;case 36:if(a.ctrlKey||a.metaKey)d.datepicker._gotoToday(a.target);c=a.ctrlKey||a.metaKey;break;case 37:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?+1:-1,"D");c=
a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 38:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,-7,"D");c=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?-1:+1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,
"stepMonths"),"M");break;case 40:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,+7,"D");c=a.ctrlKey||a.metaKey;break;default:c=false}else if(a.keyCode==36&&a.ctrlKey)d.datepicker._showDatepicker(this);else c=false;if(c){a.preventDefault();a.stopPropagation()}},_doKeyPress:function(a){var b=d.datepicker._getInst(a.target);if(d.datepicker._get(b,"constrainInput")){b=d.datepicker._possibleChars(d.datepicker._get(b,"dateFormat"));var c=String.fromCharCode(a.charCode==C?a.keyCode:a.charCode);
return a.ctrlKey||a.metaKey||c<" "||!b||b.indexOf(c)>-1}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);if(a.input.val()!=a.lastVal)try{if(d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,d.datepicker._getFormatConfig(a))){d.datepicker._setDateFromField(a);d.datepicker._updateAlternate(a);d.datepicker._updateDatepicker(a)}}catch(b){d.datepicker.log(b)}return true},_showDatepicker:function(a){a=a.target||a;if(a.nodeName.toLowerCase()!="input")a=d("input",
a.parentNode)[0];if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);if(d.datepicker._curInst&&d.datepicker._curInst!=b){d.datepicker._datepickerShowing&&d.datepicker._triggerOnClose(d.datepicker._curInst);d.datepicker._curInst.dpDiv.stop(true,true)}var c=d.datepicker._get(b,"beforeShow");c=c?c.apply(a,[a,b]):{};if(c!==false){H(b.settings,c);b.lastVal=null;d.datepicker._lastInput=a;d.datepicker._setDateFromField(b);if(d.datepicker._inDialog)a.value=
"";if(!d.datepicker._pos){d.datepicker._pos=d.datepicker._findPos(a);d.datepicker._pos[1]+=a.offsetHeight}var e=false;d(a).parents().each(function(){e|=d(this).css("position")=="fixed";return!e});if(e&&d.browser.opera){d.datepicker._pos[0]-=document.documentElement.scrollLeft;d.datepicker._pos[1]-=document.documentElement.scrollTop}c={left:d.datepicker._pos[0],top:d.datepicker._pos[1]};d.datepicker._pos=null;b.dpDiv.empty();b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});d.datepicker._updateDatepicker(b);
c=d.datepicker._checkOffset(b,c,e);b.dpDiv.css({position:d.datepicker._inDialog&&d.blockUI?"static":e?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"});if(!b.inline){c=d.datepicker._get(b,"showAnim");var f=d.datepicker._get(b,"duration"),h=function(){var i=b.dpDiv.find("iframe.ui-datepicker-cover");if(i.length){var g=d.datepicker._getBorders(b.dpDiv);i.css({left:-g[0],top:-g[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex(d(a).zIndex()+1);d.datepicker._datepickerShowing=
true;d.effects&&d.effects[c]?b.dpDiv.show(c,d.datepicker._get(b,"showOptions"),f,h):b.dpDiv[c||"show"](c?f:null,h);if(!c||!f)h();b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus();d.datepicker._curInst=b}}}},_updateDatepicker:function(a){this.maxRows=4;var b=d.datepicker._getBorders(a.dpDiv);J=a;a.dpDiv.empty().append(this._generateHTML(a));var c=a.dpDiv.find("iframe.ui-datepicker-cover");c.length&&c.css({left:-b[0],top:-b[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()});
b=this._getNumberOfMonths(a);c=b[1];a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");c>1&&a.dpDiv.addClass("ui-datepicker-multi-"+c).css("width",17*c+"em");a.dpDiv[(b[0]!=1||b[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==d.datepicker._curInst&&d.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&
!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var e=a.yearshtml;setTimeout(function(){e===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);e=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(c){return{thin:1,medium:2,thick:3}[c]||c};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var e=a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),
h=a.input?a.input.outerWidth():0,i=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+d(document).scrollLeft(),j=document.documentElement.clientHeight+d(document).scrollTop();b.left-=this._get(a,"isRTL")?e-h:0;b.left-=c&&b.left==a.input.offset().left?d(document).scrollLeft():0;b.top-=c&&b.top==a.input.offset().top+i?d(document).scrollTop():0;b.left-=Math.min(b.left,b.left+e>g&&g>e?Math.abs(b.left+e-g):0);b.top-=Math.min(b.top,b.top+f>j&&j>f?Math.abs(f+i):0);return b},_findPos:function(a){for(var b=
this._get(this._getInst(a),"isRTL");a&&(a.type=="hidden"||a.nodeType!=1||d.expr.filters.hidden(a));)a=a[b?"previousSibling":"nextSibling"];a=d(a).offset();return[a.left,a.top]},_triggerOnClose:function(a){var b=this._get(a,"onClose");if(b)b.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a])},_hideDatepicker:function(a){var b=this._curInst;if(!(!b||a&&b!=d.data(a,"datepicker")))if(this._datepickerShowing){a=this._get(b,"showAnim");var c=this._get(b,"duration"),e=function(){d.datepicker._tidyDialog(b);
this._curInst=null};d.effects&&d.effects[a]?b.dpDiv.hide(a,d.datepicker._get(b,"showOptions"),c,e):b.dpDiv[a=="slideDown"?"slideUp":a=="fadeIn"?"fadeOut":"hide"](a?c:null,e);a||e();d.datepicker._triggerOnClose(b);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(d.blockUI){d.unblockUI();d("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},
_checkExternalClick:function(a){if(d.datepicker._curInst){a=d(a.target);a[0].id!=d.datepicker._mainDivId&&a.parents("#"+d.datepicker._mainDivId).length==0&&!a.hasClass(d.datepicker.markerClassName)&&!a.hasClass(d.datepicker._triggerClass)&&d.datepicker._datepickerShowing&&!(d.datepicker._inDialog&&d.blockUI)&&d.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){a=d(a);var e=this._getInst(a[0]);if(!this._isDisabledDatepicker(a[0])){this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):
0),c);this._updateDatepicker(e)}},_gotoToday:function(a){a=d(a);var b=this._getInst(a[0]);if(this._get(b,"gotoCurrent")&&b.currentDay){b.selectedDay=b.currentDay;b.drawMonth=b.selectedMonth=b.currentMonth;b.drawYear=b.selectedYear=b.currentYear}else{var c=new Date;b.selectedDay=c.getDate();b.drawMonth=b.selectedMonth=c.getMonth();b.drawYear=b.selectedYear=c.getFullYear()}this._notifyChange(b);this._adjustDate(a)},_selectMonthYear:function(a,b,c){a=d(a);var e=this._getInst(a[0]);e["selected"+(c=="M"?
"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10);this._notifyChange(e);this._adjustDate(a)},_selectDay:function(a,b,c,e){var f=d(a);if(!(d(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(f[0]))){f=this._getInst(f[0]);f.selectedDay=f.currentDay=d("a",e).html();f.selectedMonth=f.currentMonth=b;f.selectedYear=f.currentYear=c;this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))}},_clearDate:function(a){a=d(a);
this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,b){a=this._getInst(d(a)[0]);b=b!=null?b:this._formatDate(a);a.input&&a.input.val(b);this._updateAlternate(a);var c=this._get(a,"onSelect");if(c)c.apply(a.input?a.input[0]:null,[b,a]);else a.input&&a.input.trigger("change");if(a.inline)this._updateDatepicker(a);else{this._hideDatepicker();this._lastInput=a.input[0];typeof a.input[0]!="object"&&a.input.focus();this._lastInput=null}},_updateAlternate:function(a){var b=this._get(a,"altField");
if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));d(b).each(function(){d(this).val(f)})}},noWeekends:function(a){a=a.getDay();return[a>0&&a<6,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var b=a.getTime();a.setMonth(0);a.setDate(1);return Math.floor(Math.round((b-a)/864E5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?
b.toString():b+"";if(b=="")return null;var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;e=typeof e!="string"?e:(new Date).getFullYear()%100+parseInt(e,10);for(var f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,i=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,j=c=-1,l=-1,u=-1,k=false,o=function(p){(p=A+1<a.length&&a.charAt(A+1)==p)&&A++;return p},m=function(p){var D=
o(p);p=new RegExp("^\\d{1,"+(p=="@"?14:p=="!"?20:p=="y"&&D?4:p=="o"?3:2)+"}");p=b.substring(q).match(p);if(!p)throw"Missing number at position "+q;q+=p[0].length;return parseInt(p[0],10)},n=function(p,D,K){p=d.map(o(p)?K:D,function(w,x){return[[x,w]]}).sort(function(w,x){return-(w[1].length-x[1].length)});var E=-1;d.each(p,function(w,x){w=x[1];if(b.substr(q,w.length).toLowerCase()==w.toLowerCase()){E=x[0];q+=w.length;return false}});if(E!=-1)return E+1;else throw"Unknown name at position "+q;},s=
function(){if(b.charAt(q)!=a.charAt(A))throw"Unexpected literal at position "+q;q++},q=0,A=0;A<a.length;A++)if(k)if(a.charAt(A)=="'"&&!o("'"))k=false;else s();else switch(a.charAt(A)){case "d":l=m("d");break;case "D":n("D",f,h);break;case "o":u=m("o");break;case "m":j=m("m");break;case "M":j=n("M",i,g);break;case "y":c=m("y");break;case "@":var v=new Date(m("@"));c=v.getFullYear();j=v.getMonth()+1;l=v.getDate();break;case "!":v=new Date((m("!")-this._ticksTo1970)/1E4);c=v.getFullYear();j=v.getMonth()+
1;l=v.getDate();break;case "'":if(o("'"))s();else k=true;break;default:s()}if(q<b.length)throw"Extra/unparsed characters found in date: "+b.substring(q);if(c==-1)c=(new Date).getFullYear();else if(c<100)c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c<=e?0:-100);if(u>-1){j=1;l=u;do{e=this._getDaysInMonth(c,j-1);if(l<=e)break;j++;l-=e}while(1)}v=this._daylightSavingAdjust(new Date(c,j-1,l));if(v.getFullYear()!=c||v.getMonth()+1!=j||v.getDate()!=l)throw"Invalid date";return v},ATOM:"yy-mm-dd",
COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(a,b,c){if(!b)return"";var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort;c=(c?c.monthNames:
null)||this._defaults.monthNames;var i=function(o){(o=k+1<a.length&&a.charAt(k+1)==o)&&k++;return o},g=function(o,m,n){m=""+m;if(i(o))for(;m.length<n;)m="0"+m;return m},j=function(o,m,n,s){return i(o)?s[m]:n[m]},l="",u=false;if(b)for(var k=0;k<a.length;k++)if(u)if(a.charAt(k)=="'"&&!i("'"))u=false;else l+=a.charAt(k);else switch(a.charAt(k)){case "d":l+=g("d",b.getDate(),2);break;case "D":l+=j("D",b.getDay(),e,f);break;case "o":l+=g("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-
(new Date(b.getFullYear(),0,0)).getTime())/864E5),3);break;case "m":l+=g("m",b.getMonth()+1,2);break;case "M":l+=j("M",b.getMonth(),h,c);break;case "y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case "@":l+=b.getTime();break;case "!":l+=b.getTime()*1E4+this._ticksTo1970;break;case "'":if(i("'"))l+="'";else u=true;break;default:l+=a.charAt(k)}return l},_possibleChars:function(a){for(var b="",c=false,e=function(h){(h=f+1<a.length&&a.charAt(f+1)==h)&&f++;return h},f=
0;f<a.length;f++)if(c)if(a.charAt(f)=="'"&&!e("'"))c=false;else b+=a.charAt(f);else switch(a.charAt(f)){case "d":case "m":case "y":case "@":b+="0123456789";break;case "D":case "M":return null;case "'":if(e("'"))b+="'";else c=true;break;default:b+=a.charAt(f)}return b},_get:function(a,b){return a.settings[b]!==C?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),e=a.lastVal=a.input?a.input.val():null,f,h;f=h=this._getDefaultDate(a);
var i=this._getFormatConfig(a);try{f=this.parseDate(c,e,i)||h}catch(g){this.log(g);e=b?"":e}a.selectedDay=f.getDate();a.drawMonth=a.selectedMonth=f.getMonth();a.drawYear=a.selectedYear=f.getFullYear();a.currentDay=e?f.getDate():0;a.currentMonth=e?f.getMonth():0;a.currentYear=e?f.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var e=function(h){var i=new Date;
i.setDate(i.getDate()+h);return i},f=function(h){try{return d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),h,d.datepicker._getFormatConfig(a))}catch(i){}var g=(h.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,j=g.getFullYear(),l=g.getMonth();g=g.getDate();for(var u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,k=u.exec(h);k;){switch(k[2]||"d"){case "d":case "D":g+=parseInt(k[1],10);break;case "w":case "W":g+=parseInt(k[1],10)*7;break;case "m":case "M":l+=parseInt(k[1],10);g=
Math.min(g,d.datepicker._getDaysInMonth(j,l));break;case "y":case "Y":j+=parseInt(k[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(j,l));break}k=u.exec(h)}return new Date(j,l,g)};if(b=(b=b==null||b===""?c:typeof b=="string"?f(b):typeof b=="number"?isNaN(b)?c:e(b):new Date(b.getTime()))&&b.toString()=="Invalid Date"?c:b){b.setHours(0);b.setMinutes(0);b.setSeconds(0);b.setMilliseconds(0)}return this._daylightSavingAdjust(b)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()>
12?a.getHours()+2:0);return a},_setDate:function(a,b,c){var e=!b,f=a.selectedMonth,h=a.selectedYear;b=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=b.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();if((f!=a.selectedMonth||h!=a.selectedYear)&&!c)this._notifyChange(a);this._adjustInstDate(a);if(a.input)a.input.val(e?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&
a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),e=this._get(a,"showButtonPanel"),f=this._get(a,"hideIfNoPrevNext"),h=this._get(a,"navigationAsDateFormat"),i=this._getNumberOfMonths(a),g=this._get(a,"showCurrentAtPos"),j=this._get(a,"stepMonths"),l=i[0]!=1||i[1]!=1,u=this._daylightSavingAdjust(!a.currentDay?
new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),k=this._getMinMaxDate(a,"min"),o=this._getMinMaxDate(a,"max");g=a.drawMonth-g;var m=a.drawYear;if(g<0){g+=12;m--}if(o){var n=this._daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth()-i[0]*i[1]+1,o.getDate()));for(n=k&&n<k?k:n;this._daylightSavingAdjust(new Date(m,g,1))>n;){g--;if(g<0){g=11;m--}}}a.drawMonth=g;a.drawYear=m;n=this._get(a,"prevText");n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(m,g-j,1)),this._getFormatConfig(a));
n=this._canAdjustMonth(a,-1,m,g)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+B+".datepicker._adjustDate('#"+a.id+"', -"+j+", 'M');\" title=\""+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>":f?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>";var s=this._get(a,"nextText");s=!h?s:this.formatDate(s,this._daylightSavingAdjust(new Date(m,
g+j,1)),this._getFormatConfig(a));f=this._canAdjustMonth(a,+1,m,g)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+B+".datepicker._adjustDate('#"+a.id+"', +"+j+", 'M');\" title=\""+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":f?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>";j=this._get(a,"currentText");s=this._get(a,"gotoCurrent")&&
a.currentDay?u:b;j=!h?j:this.formatDate(j,s,this._getFormatConfig(a));h=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+B+'.datepicker._hideDatepicker();">'+this._get(a,"closeText")+"</button>":"";e=e?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?h:"")+(this._isInRange(a,s)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+
B+".datepicker._gotoToday('#"+a.id+"');\">"+j+"</button>":"")+(c?"":h)+"</div>":"";h=parseInt(this._get(a,"firstDay"),10);h=isNaN(h)?0:h;j=this._get(a,"showWeek");s=this._get(a,"dayNames");this._get(a,"dayNamesShort");var q=this._get(a,"dayNamesMin"),A=this._get(a,"monthNames"),v=this._get(a,"monthNamesShort"),p=this._get(a,"beforeShowDay"),D=this._get(a,"showOtherMonths"),K=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var E=this._getDefaultDate(a),w="",x=0;x<i[0];x++){var O=
"";this.maxRows=4;for(var G=0;G<i[1];G++){var P=this._daylightSavingAdjust(new Date(m,g,a.selectedDay)),t=" ui-corner-all",y="";if(l){y+='<div class="ui-datepicker-group';if(i[1]>1)switch(G){case 0:y+=" ui-datepicker-group-first";t=" ui-corner-"+(c?"right":"left");break;case i[1]-1:y+=" ui-datepicker-group-last";t=" ui-corner-"+(c?"left":"right");break;default:y+=" ui-datepicker-group-middle";t="";break}y+='">'}y+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+t+'">'+(/all|left/.test(t)&&
x==0?c?f:n:"")+(/all|right/.test(t)&&x==0?c?n:f:"")+this._generateMonthYearHeader(a,g,m,k,o,x>0||G>0,A,v)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var z=j?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(t=0;t<7;t++){var r=(t+h)%7;z+="<th"+((t+h+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+s[r]+'">'+q[r]+"</span></th>"}y+=z+"</tr></thead><tbody>";z=this._getDaysInMonth(m,g);if(m==a.selectedYear&&g==a.selectedMonth)a.selectedDay=Math.min(a.selectedDay,
z);t=(this._getFirstDayOfMonth(m,g)-h+7)%7;z=Math.ceil((t+z)/7);this.maxRows=z=l?this.maxRows>z?this.maxRows:z:z;r=this._daylightSavingAdjust(new Date(m,g,1-t));for(var Q=0;Q<z;Q++){y+="<tr>";var R=!j?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(r)+"</td>";for(t=0;t<7;t++){var I=p?p.apply(a.input?a.input[0]:null,[r]):[true,""],F=r.getMonth()!=g,L=F&&!K||!I[0]||k&&r<k||o&&r>o;R+='<td class="'+((t+h+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(r.getTime()==
P.getTime()&&g==a.selectedMonth&&a._keyEvent||E.getTime()==r.getTime()&&E.getTime()==P.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!D?"":" "+I[1]+(r.getTime()==u.getTime()?" "+this._currentClass:"")+(r.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!F||D)&&I[2]?' title="'+I[2]+'"':"")+(L?"":' onclick="DP_jQuery_'+B+".datepicker._selectDay('#"+a.id+"',"+r.getMonth()+","+r.getFullYear()+', this);return false;"')+">"+(F&&!D?"&#xa0;":L?'<span class="ui-state-default">'+
r.getDate()+"</span>":'<a class="ui-state-default'+(r.getTime()==b.getTime()?" ui-state-highlight":"")+(r.getTime()==u.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+'" href="#">'+r.getDate()+"</a>")+"</td>";r.setDate(r.getDate()+1);r=this._daylightSavingAdjust(r)}y+=R+"</tr>"}g++;if(g>11){g=0;m++}y+="</tbody></table>"+(l?"</div>"+(i[0]>0&&G==i[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");O+=y}w+=O}w+=e+(d.browser.msie&&parseInt(d.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':
"");a._keyEvent=false;return w},_generateMonthYearHeader:function(a,b,c,e,f,h,i,g){var j=this._get(a,"changeMonth"),l=this._get(a,"changeYear"),u=this._get(a,"showMonthAfterYear"),k='<div class="ui-datepicker-title">',o="";if(h||!j)o+='<span class="ui-datepicker-month">'+i[b]+"</span>";else{i=e&&e.getFullYear()==c;var m=f&&f.getFullYear()==c;o+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+B+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" >";for(var n=0;n<12;n++)if((!i||n>=e.getMonth())&&
(!m||n<=f.getMonth()))o+='<option value="'+n+'"'+(n==b?' selected="selected"':"")+">"+g[n]+"</option>";o+="</select>"}u||(k+=o+(h||!(j&&l)?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(h||!l)k+='<span class="ui-datepicker-year">'+c+"</span>";else{g=this._get(a,"yearRange").split(":");var s=(new Date).getFullYear();i=function(q){q=q.match(/c[+-].*/)?c+parseInt(q.substring(1),10):q.match(/[+-].*/)?s+parseInt(q,10):parseInt(q,10);return isNaN(q)?s:q};b=i(g[0]);g=Math.max(b,i(g[1]||""));b=e?Math.max(b,
e.getFullYear()):b;g=f?Math.min(g,f.getFullYear()):g;for(a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+B+".datepicker._selectMonthYear('#"+a.id+"', this, 'Y');\" >";b<=g;b++)a.yearshtml+='<option value="'+b+'"'+(b==c?' selected="selected"':"")+">"+b+"</option>";a.yearshtml+="</select>";k+=a.yearshtml;a.yearshtml=null}}k+=this._get(a,"yearSuffix");if(u)k+=(h||!(j&&l)?"&#xa0;":"")+o;k+="</div>";return k},_adjustInstDate:function(a,b,c){var e=a.drawYear+(c=="Y"?b:0),f=a.drawMonth+
(c=="M"?b:0);b=Math.min(a.selectedDay,this._getDaysInMonth(e,f))+(c=="D"?b:0);e=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(e,f,b)));a.selectedDay=e.getDate();a.drawMonth=a.selectedMonth=e.getMonth();a.drawYear=a.selectedYear=e.getFullYear();if(c=="M"||c=="Y")this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");b=c&&b<c?c:b;return b=a&&b>a?a:b},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");if(b)b.apply(a.input?
a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,"numberOfMonths");return a==null?[1,1]:typeof a=="number"?[1,a]:a},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,e){var f=this._getNumberOfMonths(a);c=this._daylightSavingAdjust(new Date(c,
e+(b<0?b:f[0]*f[1]),1));b<0&&c.setDate(this._getDaysInMonth(c.getFullYear(),c.getMonth()));return this._isInRange(a,c)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!a||b.getTime()<=a.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,
"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,e){if(!b){a.currentDay=a.selectedDay;a.currentMonth=a.selectedMonth;a.currentYear=a.selectedYear}b=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(e,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),b,this._getFormatConfig(a))}});d.fn.datepicker=function(a){if(!this.length)return this;
if(!d.datepicker.initialized){d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv);d.datepicker.initialized=true}var b=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b));return this.each(function(){typeof a==
"string"?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)})};d.datepicker=new M;d.datepicker.initialized=false;d.datepicker.uuid=(new Date).getTime();d.datepicker.version="1.8.16";window["DP_jQuery_"+B]=d})(jQuery);
;/*
 * jQuery UI Progressbar 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function(b,d){b.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();b.Widget.prototype.destroy.apply(this,arguments)},value:function(a){if(a===d)return this._value();this._setOption("value",a);return this},_setOption:function(a,c){if(a==="value"){this.options.value=c;this._refreshValue();this._value()===this.options.max&&this._trigger("complete")}b.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var a=this.options.value;if(typeof a!=="number")a=0;return Math.min(this.options.max,Math.max(this.min,a))},_percentage:function(){return 100*
this._value()/this.options.max},_refreshValue:function(){var a=this.value(),c=this._percentage();if(this.oldValue!==a){this.oldValue=a;this._trigger("change")}this.valueDiv.toggle(a>this.min).toggleClass("ui-corner-right",a===this.options.max).width(c.toFixed(0)+"%");this.element.attr("aria-valuenow",a)}});b.extend(b.ui.progressbar,{version:"1.8.16"})})(jQuery);
;/*
 * jQuery UI Effects 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||function(f,j){function m(c){var a;if(c&&c.constructor==Array&&c.length==3)return c;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return[parseInt(a[1],
16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(c))return n.transparent;return n[f.trim(c).toLowerCase()]}function s(c,a){var b;do{b=f.curCSS(c,a);if(b!=""&&b!="transparent"||f.nodeName(c,"body"))break;a="backgroundColor"}while(c=c.parentNode);return m(b)}function o(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;){b=c[e];if(typeof c[b]=="string"){d=b.replace(/\-(\w)/g,function(g,h){return h.toUpperCase()});a[d]=c[b]}}else for(b in c)if(typeof c[b]==="string")a[b]=c[b];return a}function p(c){var a,b;for(a in c){b=c[a];if(b==null||f.isFunction(b)||a in t||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))delete c[a]}return c}function u(c,a){var b={_:0},d;for(d in a)if(c[d]!=a[d])b[d]=a[d];return b}function k(c,a,b,d){if(typeof c=="object"){d=
a;b=null;a=c;c=a.effect}if(f.isFunction(a)){d=a;b=null;a={}}if(typeof a=="number"||f.fx.speeds[a]){d=b;b=a;a={}}if(f.isFunction(b)){d=b;b=null}a=a||{};b=b||a.duration;b=f.fx.off?0:typeof b=="number"?b:b in f.fx.speeds?f.fx.speeds[b]:f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}function l(c){if(!c||typeof c==="number"||f.fx.speeds[c])return true;if(typeof c==="string"&&!f.effects[c])return true;return false}f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){b.start=s(b.elem,a);b.end=m(b.end);b.colorInit=true}b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var n={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},q=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,
d){if(f.isFunction(b)){d=b;b=null}return this.queue(function(){var e=f(this),g=e.attr("style")||" ",h=p(o.call(this)),r,v=e.attr("class");f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});r=p(o.call(this));e.attr("class",v);e.animate(u(h,r),{queue:false,duration:a,easing:b,complete:function(){f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});if(typeof e.attr("style")=="object"){e.attr("style").cssText="";e.attr("style").cssText=g}else e.attr("style",g);d&&d.apply(this,arguments);f.dequeue(this)}})})};
f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return typeof a=="boolean"||a===j?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,a):f.effects.animateClass.apply(this,
[{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e])}});f.extend(f.effects,{version:"1.8.16",save:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){if(a=="toggle")a=c.is(":hidden")?"show":"hide";return a},getBaseline:function(c,a){var b;switch(c[0]){case "top":b=
0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=c[0]/a.height}switch(c[1]){case "left":c=0;break;case "center":c=0.5;break;case "right":c=1;break;default:c=c[1]/a.width}return{x:c,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),
d=document.activeElement;c.wrap(b);if(c[0]===d||f.contains(c[0],d))f(d).focus();b=c.parent();if(c.css("position")=="static"){b.css({position:"relative"});c.css({position:"relative"})}else{f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});f.each(["top","left","bottom","right"],function(e,g){a[g]=c.css(g);if(isNaN(parseInt(a[g],10)))a[g]="auto"});c.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return b.css(a).show()},removeWrapper:function(c){var a,b=document.activeElement;
if(c.parent().is(".ui-effects-wrapper")){a=c.parent().replaceWith(c);if(c[0]===b||f.contains(c[0],b))f(b).focus();return a}return c},setTransition:function(c,a,b,d){d=d||{};f.each(a,function(e,g){unit=c.cssUnit(g);if(unit[0]>0)d[g]=unit[0]*b+unit[1]});return d}});f.fn.extend({effect:function(c){var a=k.apply(this,arguments),b={options:a[1],duration:a[2],callback:a[3]};a=b.options.mode;var d=f.effects[c];if(f.fx.off||!d)return a?this[a](b.duration,b.callback):this.each(function(){b.callback&&b.callback.call(this)});
return d.call(this,b)},_show:f.fn.show,show:function(c){if(l(c))return this._show.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="show";return this.effect.apply(this,a)}},_hide:f.fn.hide,hide:function(c){if(l(c))return this._hide.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:f.fn.toggle,toggle:function(c){if(l(c)||typeof c==="boolean"||f.isFunction(c))return this.__toggle.apply(this,arguments);else{var a=k.apply(this,
arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(c){var a=this.css(c),b=[];f.each(["em","px","%","pt"],function(d,e){if(a.indexOf(e)>0)b=[parseFloat(a),e]});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){if((a/=e/2)<1)return d/
2*a*a+b;return-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,a,b,d,e){return d*((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a+b;return d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a+b;return-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,
d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a*a+b;return d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,
a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){if(a==0)return b;if(a==e)return b+d;if((a/=e/2)<1)return d/2*Math.pow(2,10*(a-1))+b;return d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){if((a/=e/2)<1)return-d/2*(Math.sqrt(1-a*a)-1)+b;return d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,
d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b},easeOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b},easeInOutElastic:function(c,a,b,d,e){c=1.70158;var g=
0,h=d;if(a==0)return b;if((a/=e/2)==2)return b+d;g||(g=e*0.3*1.5);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);if(a<1)return-0.5*h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b},easeInBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*(a/=e)*a*((g+1)*a-g)+b},easeOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b},easeInOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;
if((a/=e/2)<1)return d/2*a*a*(((g*=1.525)+1)*a-g)+b;return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b},easeInBounce:function(c,a,b,d,e){return d-f.easing.easeOutBounce(c,e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+b;return f.easing.easeOutBounce(c,
a*2-e,0,d,e)*0.5+d*0.5+b}})}(jQuery);
;/*
 * jQuery UI Effects Blind 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.blind=function(c){return this.queue(function(){var a=b(this),g=["position","top","bottom","left","right"],f=b.effects.setMode(a,c.options.mode||"hide"),d=c.options.direction||"vertical";b.effects.save(a,g);a.show();var e=b.effects.createWrapper(a).css({overflow:"hidden"}),h=d=="vertical"?"height":"width";d=d=="vertical"?e.height():e.width();f=="show"&&e.css(h,0);var i={};i[h]=f=="show"?d:0;e.animate(i,c.duration,c.options.easing,function(){f=="hide"&&a.hide();b.effects.restore(a,
g);b.effects.removeWrapper(a);c.callback&&c.callback.apply(a[0],arguments);a.dequeue()})})}})(jQuery);
;/*
 * jQuery UI Effects Bounce 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.bounce=function(b){return this.queue(function(){var a=e(this),l=["position","top","bottom","left","right"],h=e.effects.setMode(a,b.options.mode||"effect"),d=b.options.direction||"up",c=b.options.distance||20,m=b.options.times||5,i=b.duration||250;/show|hide/.test(h)&&l.push("opacity");e.effects.save(a,l);a.show();e.effects.createWrapper(a);var f=d=="up"||d=="down"?"top":"left";d=d=="up"||d=="left"?"pos":"neg";c=b.options.distance||(f=="top"?a.outerHeight({margin:true})/3:a.outerWidth({margin:true})/
3);if(h=="show")a.css("opacity",0).css(f,d=="pos"?-c:c);if(h=="hide")c/=m*2;h!="hide"&&m--;if(h=="show"){var g={opacity:1};g[f]=(d=="pos"?"+=":"-=")+c;a.animate(g,i/2,b.options.easing);c/=2;m--}for(g=0;g<m;g++){var j={},k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing);c=h=="hide"?c*2:c/2}if(h=="hide"){g={opacity:0};g[f]=(d=="pos"?"-=":"+=")+c;a.animate(g,i/2,b.options.easing,function(){a.hide();e.effects.restore(a,l);e.effects.removeWrapper(a);
b.callback&&b.callback.apply(this,arguments)})}else{j={};k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing,function(){e.effects.restore(a,l);e.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments)})}a.queue("fx",function(){a.dequeue()});a.dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Clip 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.clip=function(e){return this.queue(function(){var a=b(this),i=["position","top","bottom","left","right","height","width"],f=b.effects.setMode(a,e.options.mode||"hide"),c=e.options.direction||"vertical";b.effects.save(a,i);a.show();var d=b.effects.createWrapper(a).css({overflow:"hidden"});d=a[0].tagName=="IMG"?d:a;var g={size:c=="vertical"?"height":"width",position:c=="vertical"?"top":"left"};c=c=="vertical"?d.height():d.width();if(f=="show"){d.css(g.size,0);d.css(g.position,
c/2)}var h={};h[g.size]=f=="show"?c:0;h[g.position]=f=="show"?0:c/2;d.animate(h,{queue:false,duration:e.duration,easing:e.options.easing,complete:function(){f=="hide"&&a.hide();b.effects.restore(a,i);b.effects.removeWrapper(a);e.callback&&e.callback.apply(a[0],arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Drop 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.drop=function(d){return this.queue(function(){var a=c(this),h=["position","top","bottom","left","right","opacity"],e=c.effects.setMode(a,d.options.mode||"hide"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a);var f=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var g=d.options.distance||(f=="top"?a.outerHeight({margin:true})/2:a.outerWidth({margin:true})/2);if(e=="show")a.css("opacity",0).css(f,b=="pos"?-g:g);var i={opacity:e==
"show"?1:0};i[f]=(e=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+g;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){e=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Explode 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(j){j.effects.explode=function(a){return this.queue(function(){var c=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3,d=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3;a.options.mode=a.options.mode=="toggle"?j(this).is(":visible")?"hide":"show":a.options.mode;var b=j(this).show().css("visibility","hidden"),g=b.offset();g.top-=parseInt(b.css("marginTop"),10)||0;g.left-=parseInt(b.css("marginLeft"),10)||0;for(var h=b.outerWidth(true),i=b.outerHeight(true),e=0;e<c;e++)for(var f=
0;f<d;f++)b.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-f*(h/d),top:-e*(i/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:h/d,height:i/c,left:g.left+f*(h/d)+(a.options.mode=="show"?(f-Math.floor(d/2))*(h/d):0),top:g.top+e*(i/c)+(a.options.mode=="show"?(e-Math.floor(c/2))*(i/c):0),opacity:a.options.mode=="show"?0:1}).animate({left:g.left+f*(h/d)+(a.options.mode=="show"?0:(f-Math.floor(d/2))*(h/d)),top:g.top+
e*(i/c)+(a.options.mode=="show"?0:(e-Math.floor(c/2))*(i/c)),opacity:a.options.mode=="show"?1:0},a.duration||500);setTimeout(function(){a.options.mode=="show"?b.css({visibility:"visible"}):b.css({visibility:"visible"}).hide();a.callback&&a.callback.apply(b[0]);b.dequeue();j("div.ui-effects-explode").remove()},a.duration||500)})}})(jQuery);
;/*
 * jQuery UI Effects Fade 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.fade=function(a){return this.queue(function(){var c=b(this),d=b.effects.setMode(c,a.options.mode||"hide");c.animate({opacity:d},{queue:false,duration:a.duration,easing:a.options.easing,complete:function(){a.callback&&a.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Fold 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.fold=function(a){return this.queue(function(){var b=c(this),j=["position","top","bottom","left","right"],d=c.effects.setMode(b,a.options.mode||"hide"),g=a.options.size||15,h=!!a.options.horizFirst,k=a.duration?a.duration/2:c.fx.speeds._default/2;c.effects.save(b,j);b.show();var e=c.effects.createWrapper(b).css({overflow:"hidden"}),f=d=="show"!=h,l=f?["width","height"]:["height","width"];f=f?[e.width(),e.height()]:[e.height(),e.width()];var i=/([0-9]+)%/.exec(g);if(i)g=parseInt(i[1],
10)/100*f[d=="hide"?0:1];if(d=="show")e.css(h?{height:0,width:g}:{height:g,width:0});h={};i={};h[l[0]]=d=="show"?f[0]:g;i[l[1]]=d=="show"?f[1]:0;e.animate(h,k,a.options.easing).animate(i,k,a.options.easing,function(){d=="hide"&&b.hide();c.effects.restore(b,j);c.effects.removeWrapper(b);a.callback&&a.callback.apply(b[0],arguments);b.dequeue()})})}})(jQuery);
;/*
 * jQuery UI Effects Highlight 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.highlight=function(c){return this.queue(function(){var a=b(this),e=["backgroundImage","backgroundColor","opacity"],d=b.effects.setMode(a,c.options.mode||"show"),f={backgroundColor:a.css("backgroundColor")};if(d=="hide")f.opacity=0;b.effects.save(a,e);a.show().css({backgroundImage:"none",backgroundColor:c.options.color||"#ffff99"}).animate(f,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){d=="hide"&&a.hide();b.effects.restore(a,e);d=="show"&&!b.support.opacity&&
this.style.removeAttribute("filter");c.callback&&c.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Pulsate 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d){d.effects.pulsate=function(a){return this.queue(function(){var b=d(this),c=d.effects.setMode(b,a.options.mode||"show");times=(a.options.times||5)*2-1;duration=a.duration?a.duration/2:d.fx.speeds._default/2;isVisible=b.is(":visible");animateTo=0;if(!isVisible){b.css("opacity",0).show();animateTo=1}if(c=="hide"&&isVisible||c=="show"&&!isVisible)times--;for(c=0;c<times;c++){b.animate({opacity:animateTo},duration,a.options.easing);animateTo=(animateTo+1)%2}b.animate({opacity:animateTo},duration,
a.options.easing,function(){animateTo==0&&b.hide();a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()}).dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Scale 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.puff=function(b){return this.queue(function(){var a=c(this),e=c.effects.setMode(a,b.options.mode||"hide"),g=parseInt(b.options.percent,10)||150,h=g/100,i={height:a.height(),width:a.width()};c.extend(b.options,{fade:true,mode:e,percent:e=="hide"?g:100,from:e=="hide"?i:{height:i.height*h,width:i.width*h}});a.effect("scale",b.options,b.duration,b.callback);a.dequeue()})};c.effects.scale=function(b){return this.queue(function(){var a=c(this),e=c.extend(true,{},b.options),g=c.effects.setMode(a,
b.options.mode||"effect"),h=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:g=="hide"?0:100),i=b.options.direction||"both",f=b.options.origin;if(g!="effect"){e.origin=f||["middle","center"];e.restore=true}f={height:a.height(),width:a.width()};a.from=b.options.from||(g=="show"?{height:0,width:0}:f);h={y:i!="horizontal"?h/100:1,x:i!="vertical"?h/100:1};a.to={height:f.height*h.y,width:f.width*h.x};if(b.options.fade){if(g=="show"){a.from.opacity=0;a.to.opacity=1}if(g=="hide"){a.from.opacity=
1;a.to.opacity=0}}e.from=a.from;e.to=a.to;e.mode=g;a.effect("size",e,b.duration,b.callback);a.dequeue()})};c.effects.size=function(b){return this.queue(function(){var a=c(this),e=["position","top","bottom","left","right","width","height","overflow","opacity"],g=["position","top","bottom","left","right","overflow","opacity"],h=["width","height","overflow"],i=["fontSize"],f=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],k=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
p=c.effects.setMode(a,b.options.mode||"effect"),n=b.options.restore||false,m=b.options.scale||"both",l=b.options.origin,j={height:a.height(),width:a.width()};a.from=b.options.from||j;a.to=b.options.to||j;if(l){l=c.effects.getBaseline(l,j);a.from.top=(j.height-a.from.height)*l.y;a.from.left=(j.width-a.from.width)*l.x;a.to.top=(j.height-a.to.height)*l.y;a.to.left=(j.width-a.to.width)*l.x}var d={from:{y:a.from.height/j.height,x:a.from.width/j.width},to:{y:a.to.height/j.height,x:a.to.width/j.width}};
if(m=="box"||m=="both"){if(d.from.y!=d.to.y){e=e.concat(f);a.from=c.effects.setTransition(a,f,d.from.y,a.from);a.to=c.effects.setTransition(a,f,d.to.y,a.to)}if(d.from.x!=d.to.x){e=e.concat(k);a.from=c.effects.setTransition(a,k,d.from.x,a.from);a.to=c.effects.setTransition(a,k,d.to.x,a.to)}}if(m=="content"||m=="both")if(d.from.y!=d.to.y){e=e.concat(i);a.from=c.effects.setTransition(a,i,d.from.y,a.from);a.to=c.effects.setTransition(a,i,d.to.y,a.to)}c.effects.save(a,n?e:g);a.show();c.effects.createWrapper(a);
a.css("overflow","hidden").css(a.from);if(m=="content"||m=="both"){f=f.concat(["marginTop","marginBottom"]).concat(i);k=k.concat(["marginLeft","marginRight"]);h=e.concat(f).concat(k);a.find("*[width]").each(function(){child=c(this);n&&c.effects.save(child,h);var o={height:child.height(),width:child.width()};child.from={height:o.height*d.from.y,width:o.width*d.from.x};child.to={height:o.height*d.to.y,width:o.width*d.to.x};if(d.from.y!=d.to.y){child.from=c.effects.setTransition(child,f,d.from.y,child.from);
child.to=c.effects.setTransition(child,f,d.to.y,child.to)}if(d.from.x!=d.to.x){child.from=c.effects.setTransition(child,k,d.from.x,child.from);child.to=c.effects.setTransition(child,k,d.to.x,child.to)}child.css(child.from);child.animate(child.to,b.duration,b.options.easing,function(){n&&c.effects.restore(child,h)})})}a.animate(a.to,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){a.to.opacity===0&&a.css("opacity",a.from.opacity);p=="hide"&&a.hide();c.effects.restore(a,
n?e:g);c.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Shake 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d){d.effects.shake=function(a){return this.queue(function(){var b=d(this),j=["position","top","bottom","left","right"];d.effects.setMode(b,a.options.mode||"effect");var c=a.options.direction||"left",e=a.options.distance||20,l=a.options.times||3,f=a.duration||a.options.duration||140;d.effects.save(b,j);b.show();d.effects.createWrapper(b);var g=c=="up"||c=="down"?"top":"left",h=c=="up"||c=="left"?"pos":"neg";c={};var i={},k={};c[g]=(h=="pos"?"-=":"+=")+e;i[g]=(h=="pos"?"+=":"-=")+e*2;k[g]=
(h=="pos"?"-=":"+=")+e*2;b.animate(c,f,a.options.easing);for(e=1;e<l;e++)b.animate(i,f,a.options.easing).animate(k,f,a.options.easing);b.animate(i,f,a.options.easing).animate(c,f/2,a.options.easing,function(){d.effects.restore(b,j);d.effects.removeWrapper(b);a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()});b.dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Slide 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.slide=function(d){return this.queue(function(){var a=c(this),h=["position","top","bottom","left","right"],f=c.effects.setMode(a,d.options.mode||"show"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a).css({overflow:"hidden"});var g=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var e=d.options.distance||(g=="top"?a.outerHeight({margin:true}):a.outerWidth({margin:true}));if(f=="show")a.css(g,b=="pos"?isNaN(e)?"-"+e:-e:e);
var i={};i[g]=(f=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+e;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){f=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Transfer 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.transfer=function(a){return this.queue(function(){var b=e(this),c=e(a.options.to),d=c.offset();c={top:d.top,left:d.left,height:c.innerHeight(),width:c.innerWidth()};d=b.offset();var f=e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(a.options.className).css({top:d.top,left:d.left,height:b.innerHeight(),width:b.innerWidth(),position:"absolute"}).animate(c,a.duration,a.options.easing,function(){f.remove();a.callback&&a.callback.apply(b[0],arguments);
b.dequeue()})})}})(jQuery);
;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);
/*!
 * jQuery blockUI plugin
 * Version 2.39 (23-MAY-2011)
 * @requires jQuery v1.2.3 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2010 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function($) {

if (/1\.(0|1|2)\.(0|1|2)/.test($.fn.jquery) || /^1.1/.test($.fn.jquery)) {
	alert('blockUI requires jQuery v1.2.3 or later!  You are using v' + $.fn.jquery);
	return;
}

$.fn._fadeIn = $.fn.fadeIn;

var noOp = function() {};

// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
// retarded userAgent strings on Vista)
var mode = document.documentMode || 0;
var setExpr = $.browser.msie && (($.browser.version < 8 && !mode) || mode < 8);
var ie6 = $.browser.msie && /MSIE 6.0/.test(navigator.userAgent) && !mode;

// global $ methods for blocking/unblocking the entire page
$.blockUI   = function(opts) { install(window, opts); };
$.unblockUI = function(opts) { remove(window, opts); };

// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
$.growlUI = function(title, message, timeout, onClose) {
	var $m = $('<div class="growlUI"></div>');
	if (title) $m.append('<h1>'+title+'</h1>');
	if (message) $m.append('<h2>'+message+'</h2>');
	if (timeout == undefined) timeout = 3000;
	$.blockUI({
		message: $m, fadeIn: 700, fadeOut: 1000, centerY: false,
		timeout: timeout, showOverlay: false,
		onUnblock: onClose, 
		css: $.blockUI.defaults.growlCSS
	});
};

// plugin method for blocking element content
$.fn.block = function(opts) {
	return this.unblock({ fadeOut: 0 }).each(function() {
		if ($.css(this,'position') == 'static')
			this.style.position = 'relative';
		if ($.browser.msie)
			this.style.zoom = 1; // force 'hasLayout'
		install(this, opts);
	});
};

// plugin method for unblocking element content
$.fn.unblock = function(opts) {
	return this.each(function() {
		remove(this, opts);
	});
};

$.blockUI.version = 2.39; // 2nd generation blocking at no extra cost!

// override these in your code to change the default behavior and style
$.blockUI.defaults = {
	// message displayed when blocking (use null for no message)
	message:  '<h1>Please wait...</h1>',

	title: null,	  // title string; only used when theme == true
	draggable: true,  // only used when theme == true (requires jquery-ui.js to be loaded)
	
	theme: false, // set to true to use with jQuery UI themes
	
	// styles for the message when blocking; if you wish to disable
	// these and use an external stylesheet then do this in your code:
	// $.blockUI.defaults.css = {};
	css: {
		padding:	0,
		margin:		0,
		width:		'30%',
		top:		'40%',
		left:		'35%',
		textAlign:	'center',
		color:		'#000',
		border:		'3px solid #aaa',
		backgroundColor:'#fff',
		cursor:		'wait'
	},
	
	// minimal style set used when themes are used
	themedCSS: {
		width:	'30%',
		top:	'40%',
		left:	'35%'
	},

	// styles for the overlay
	overlayCSS:  {
		backgroundColor: '#000',
		opacity:	  	 0.6,
		cursor:		  	 'wait'
	},

	// styles applied when using $.growlUI
	growlCSS: {
		width:  	'350px',
		top:		'10px',
		left:   	'',
		right:  	'10px',
		border: 	'none',
		padding:	'5px',
		opacity:	0.6,
		cursor: 	'default',
		color:		'#fff',
		backgroundColor: '#000',
		'-webkit-border-radius': '10px',
		'-moz-border-radius':	 '10px',
		'border-radius': 		 '10px'
	},
	
	// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
	// (hat tip to Jorge H. N. de Vasconcelos)
	iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

	// force usage of iframe in non-IE browsers (handy for blocking applets)
	forceIframe: false,

	// z-index for the blocking overlay
	baseZ: 1000,

	// set these to true to have the message automatically centered
	centerX: true, // <-- only effects element blocking (page block controlled via css above)
	centerY: true,

	// allow body element to be stetched in ie6; this makes blocking look better
	// on "short" pages.  disable if you wish to prevent changes to the body height
	allowBodyStretch: true,

	// enable if you want key and mouse events to be disabled for content that is blocked
	bindEvents: true,

	// be default blockUI will supress tab navigation from leaving blocking content
	// (if bindEvents is true)
	constrainTabKey: true,

	// fadeIn time in millis; set to 0 to disable fadeIn on block
	fadeIn:  200,

	// fadeOut time in millis; set to 0 to disable fadeOut on unblock
	fadeOut:  400,

	// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
	timeout: 0,

	// disable if you don't want to show the overlay
	showOverlay: true,

	// if true, focus will be placed in the first available input field when
	// page blocking
	focusInput: true,

	// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
	applyPlatformOpacityRules: true,
	
	// callback method invoked when fadeIn has completed and blocking message is visible
	onBlock: null,

	// callback method invoked when unblocking has completed; the callback is
	// passed the element that has been unblocked (which is the window object for page
	// blocks) and the options that were passed to the unblock call:
	//	 onUnblock(element, options)
	onUnblock: null,

	// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
	quirksmodeOffsetHack: 4,

	// class name of the message block
	blockMsgClass: 'blockMsg'
};

// private data and functions follow...

var pageBlock = null;
var pageBlockEls = [];

function install(el, opts) {
	var full = (el == window);
	var msg = opts && opts.message !== undefined ? opts.message : undefined;
	opts = $.extend({}, $.blockUI.defaults, opts || {});
	opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
	var css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
	var themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
	msg = msg === undefined ? opts.message : msg;

	// remove the current block (if there is one)
	if (full && pageBlock)
		remove(window, {fadeOut:0});

	// if an existing element is being used as the blocking content then we capture
	// its current place in the DOM (and current display style) so we can restore
	// it when we unblock
	if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
		var node = msg.jquery ? msg[0] : msg;
		var data = {};
		$(el).data('blockUI.history', data);
		data.el = node;
		data.parent = node.parentNode;
		data.display = node.style.display;
		data.position = node.style.position;
		if (data.parent)
			data.parent.removeChild(node);
	}

	$(el).data('blockUI.onUnblock', opts.onUnblock);
	var z = opts.baseZ;

	// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
	// layer1 is the iframe layer which is used to supress bleed through of underlying content
	// layer2 is the overlay layer which has opacity and a wait cursor (by default)
	// layer3 is the message content that is displayed while blocking

	var lyr1 = ($.browser.msie || opts.forceIframe) 
		? $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>')
		: $('<div class="blockUI" style="display:none"></div>');
	
	var lyr2 = opts.theme 
	 	? $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+ (z++) +';display:none"></div>')
	 	: $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');

	var lyr3, s;
	if (opts.theme && full) {
		s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:fixed">' +
				'<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>' +
				'<div class="ui-widget-content ui-dialog-content"></div>' +
			'</div>';
	}
	else if (opts.theme) {
		s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:absolute">' +
				'<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>' +
				'<div class="ui-widget-content ui-dialog-content"></div>' +
			'</div>';
	}
	else if (full) {
		s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:'+(z+10)+';display:none;position:fixed"></div>';
	}			 
	else {
		s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:'+(z+10)+';display:none;position:absolute"></div>';
	}
	lyr3 = $(s);

	// if we have a message, style it
	if (msg) {
		if (opts.theme) {
			lyr3.css(themedCSS);
			lyr3.addClass('ui-widget-content');
		}
		else 
			lyr3.css(css);
	}

	// style the overlay
	if (!opts.theme && (!opts.applyPlatformOpacityRules || !($.browser.mozilla && /Linux/.test(navigator.platform))))
		lyr2.css(opts.overlayCSS);
	lyr2.css('position', full ? 'fixed' : 'absolute');

	// make iframe layer transparent in IE
	if ($.browser.msie || opts.forceIframe)
		lyr1.css('opacity',0.0);

	//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
	var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
	$.each(layers, function() {
		this.appendTo($par);
	});
	
	if (opts.theme && opts.draggable && $.fn.draggable) {
		lyr3.draggable({
			handle: '.ui-dialog-titlebar',
			cancel: 'li'
		});
	}

	// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
	var expr = setExpr && (!$.boxModel || $('object,embed', full ? null : el).length > 0);
	if (ie6 || expr) {
		// give body 100% height
		if (full && opts.allowBodyStretch && $.boxModel)
			$('html,body').css('height','100%');

		// fix ie6 issue when blocked element has a border width
		if ((ie6 || !$.boxModel) && !full) {
			var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
			var fixT = t ? '(0 - '+t+')' : 0;
			var fixL = l ? '(0 - '+l+')' : 0;
		}

		// simulate fixed position
		$.each([lyr1,lyr2,lyr3], function(i,o) {
			var s = o[0].style;
			s.position = 'absolute';
			if (i < 2) {
				full ? s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"')
					 : s.setExpression('height','this.parentNode.offsetHeight + "px"');
				full ? s.setExpression('width','jQuery.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"')
					 : s.setExpression('width','this.parentNode.offsetWidth + "px"');
				if (fixL) s.setExpression('left', fixL);
				if (fixT) s.setExpression('top', fixT);
			}
			else if (opts.centerY) {
				if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
				s.marginTop = 0;
			}
			else if (!opts.centerY && full) {
				var top = (opts.css && opts.css.top) ? parseInt(opts.css.top) : 0;
				var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
				s.setExpression('top',expression);
			}
		});
	}

	// show the message
	if (msg) {
		if (opts.theme)
			lyr3.find('.ui-widget-content').append(msg);
		else
			lyr3.append(msg);
		if (msg.jquery || msg.nodeType)
			$(msg).show();
	}

	if (($.browser.msie || opts.forceIframe) && opts.showOverlay)
		lyr1.show(); // opacity is zero
	if (opts.fadeIn) {
		var cb = opts.onBlock ? opts.onBlock : noOp;
		var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
		var cb2 = msg ? cb : noOp;
		if (opts.showOverlay)
			lyr2._fadeIn(opts.fadeIn, cb1);
		if (msg)
			lyr3._fadeIn(opts.fadeIn, cb2);
	}
	else {
		if (opts.showOverlay)
			lyr2.show();
		if (msg)
			lyr3.show();
		if (opts.onBlock)
			opts.onBlock();
	}

	// bind key and mouse events
	bind(1, el, opts);

	if (full) {
		pageBlock = lyr3[0];
		pageBlockEls = $(':input:enabled:visible',pageBlock);
		if (opts.focusInput)
			setTimeout(focus, 20);
	}
	else
		center(lyr3[0], opts.centerX, opts.centerY);

	if (opts.timeout) {
		// auto-unblock
		var to = setTimeout(function() {
			full ? $.unblockUI(opts) : $(el).unblock(opts);
		}, opts.timeout);
		$(el).data('blockUI.timeout', to);
	}
};

// remove the block
function remove(el, opts) {
	var full = (el == window);
	var $el = $(el);
	var data = $el.data('blockUI.history');
	var to = $el.data('blockUI.timeout');
	if (to) {
		clearTimeout(to);
		$el.removeData('blockUI.timeout');
	}
	opts = $.extend({}, $.blockUI.defaults, opts || {});
	bind(0, el, opts); // unbind events

	if (opts.onUnblock === null) {
		opts.onUnblock = $el.data('blockUI.onUnblock');
		$el.removeData('blockUI.onUnblock');
	}

	var els;
	if (full) // crazy selector to handle odd field errors in ie6/7
		els = $('body').children().filter('.blockUI').add('body > .blockUI');
	else
		els = $('.blockUI', el);

	if (full)
		pageBlock = pageBlockEls = null;

	if (opts.fadeOut) {
		els.fadeOut(opts.fadeOut);
		setTimeout(function() { reset(els,data,opts,el); }, opts.fadeOut);
	}
	else
		reset(els, data, opts, el);
};

// move blocking element back into the DOM where it started
function reset(els,data,opts,el) {
	els.each(function(i,o) {
		// remove via DOM calls so we don't lose event handlers
		if (this.parentNode)
			this.parentNode.removeChild(this);
	});

	if (data && data.el) {
		data.el.style.display = data.display;
		data.el.style.position = data.position;
		if (data.parent)
			data.parent.appendChild(data.el);
		$(el).removeData('blockUI.history');
	}

	if (typeof opts.onUnblock == 'function')
		opts.onUnblock(el,opts);
};

// bind/unbind the handler
function bind(b, el, opts) {
	var full = el == window, $el = $(el);

	// don't bother unbinding if there is nothing to unbind
	if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
		return;
	if (!full)
		$el.data('blockUI.isBlocked', b);

	// don't bind events when overlay is not in use or if bindEvents is false
	if (!opts.bindEvents || (b && !opts.showOverlay)) 
		return;

	// bind anchors and inputs for mouse and key events
	var events = 'mousedown mouseup keydown keypress';
	b ? $(document).bind(events, opts, handler) : $(document).unbind(events, handler);

// former impl...
//	   var $e = $('a,:input');
//	   b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
};

// event handler to suppress keyboard/mouse events when blocking
function handler(e) {
	// allow tab navigation (conditionally)
	if (e.keyCode && e.keyCode == 9) {
		if (pageBlock && e.data.constrainTabKey) {
			var els = pageBlockEls;
			var fwd = !e.shiftKey && e.target === els[els.length-1];
			var back = e.shiftKey && e.target === els[0];
			if (fwd || back) {
				setTimeout(function(){focus(back)},10);
				return false;
			}
		}
	}
	var opts = e.data;
	// allow events within the message content
	if ($(e.target).parents('div.' + opts.blockMsgClass).length > 0)
		return true;

	// allow events for content that is not being blocked
	return $(e.target).parents().children().filter('div.blockUI').length == 0;
};

function focus(back) {
	if (!pageBlockEls)
		return;
	var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
	if (e)
		e.focus();
};

function center(el, x, y) {
	var p = el.parentNode, s = el.style;
	var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
	var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
	if (x) s.left = l > 0 ? (l+'px') : '0';
	if (y) s.top  = t > 0 ? (t+'px') : '0';
};

function sz(el, p) {
	return parseInt($.css(el,p))||0;
};

})(jQuery);
(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);
/*! Response 0.7.5 | @link responsejs.com | @author ryanve | @license MIT */
(function(e,n,p){var j=e.jQuery||e.Zepto||e.ender||e.elo;"undefined"!=typeof module&&module.exports?module.exports=p(j):e[n]=p(j)})(this,"Response",function(e){function n(a){throw new TypeError(a?q+"."+a:q);}function p(a){return"string"==typeof a?u(a.split(" ")):P(a)?u(a):[]}function j(a,b,c){if(null==a)return a;for(var d=0,g=a.length;d<g;)b.call(c||a[d],a[d],d++,a);return a}function Q(a,b,c){var d=[],g=a.length,r=0,f;b=b||"";for(c=c||"";r<g;)f=a[r++],null==f||d.push(b+f+c);return d}function u(a,
b,c){var d,g=0,r=0,f,e=[],j,h="function"==typeof b;if(!a)return e;c=(j=!0===c)?null:c;for(d=a.length;r<d;r++)f=a[r],j===!(h?b.call(c,f,r,a):b?typeof f===b:f)&&(e[g++]=f);return e}function R(a,b){if(!a||!b)return a;var c,d=b.length;if("function"!=typeof b&&"number"==typeof d&&d===d){for(c=0;c<d;c++)void 0===b[c]||(a[c]=b[c]);a.length>c||(a.length=c)}else for(c in b)ua.call(b,c)&&void 0!==b[c]&&(a[c]=b[c]);return a}function v(a,b,c){if(null==a)return a;"object"==typeof a&&!a.nodeType&&"number"==typeof a.length&&
a.length===a.length?j(a,b,c):b.call(c||a,a);return a}function E(a){return function(b,c){var d,g=a();d=g>=(b||0);return!c?d:d&&g<=c}}function w(a){var b=k.devicePixelRatio;if(null==a)return b||(w(2)?2:w(1.5)?1.5:w(1)?1:0);if(!isFinite(a))return!1;if(b&&0<b)return b>=a;a="only all and (min--moz-device-pixel-ratio:"+a+")";return S(a).matches?!0:!!S(a.replace("-moz-","")).matches}function aa(a){return a.replace(T,"$1").replace(va,function(a,c){return c.toUpperCase()})}function F(a){return"data-"+(a?a.replace(T,
"$1").replace(wa,"$1-$2").toLowerCase():a)}function ba(a){var b;return!a||"string"!=typeof a?a:"true"===a?!0:"false"===a?!1:"undefined"===a?b:"null"===a?null:(b=parseFloat(a))===+b?b:a}function G(a){return!a?!1:1===a.nodeType?a:a[0]&&1===a[0].nodeType?a[0]:!1}function H(a,b){var c=arguments.length,d=G(this),g={},e=!1,f;if(c){P(a)&&(e=!0,a=a[0]);if("string"===typeof a){a=F(a);if(1===c)return g=d.getAttribute(a),e?ba(g):g;if(this===d||2>(f=this.length||1))d.setAttribute(a,b);else for(;f--;)f in this&&
H.apply(this[f],arguments)}else if(a instanceof Object)for(f in a)a.hasOwnProperty(f)&&H.call(this,f,a[f]);return this}if(d.dataset&&DOMStringMap)return d.dataset;j(d.attributes,function(a){if(a&&(f=String(a.name).match(T)))g[aa(f[1])]=a.value});return g}function ca(a){this&&"string"===typeof a&&(a=p(a),v(this,function(b){j(a,function(a){a&&b.removeAttribute(F(a))})}));return this}function I(a,b,c){return H.apply(a,xa.call(arguments,1))}function da(a,b){return ca.call(a,b)}function ea(a){for(var b,
c=[],d=0,g=a.length;d<g;)(b=a[d++])&&c.push("["+F(b.replace(U,"").replace(".","\\."))+"]");return c.join()}function V(a,b){var c=a.getBoundingClientRect?a.getBoundingClientRect():{};b="number"==typeof b?b||0:0;return{top:(c.top||0)-b,left:(c.left||0)-b,bottom:(c.bottom||0)+b,right:(c.right||0)+b}}function W(a,b){var c=V(G(a),b);return!!c&&0<=c.bottom&&c.top<=x()&&0<=c.right&&c.left<=y()}function fa(a){var b={img:1,input:1,source:3,embed:3,track:3,iframe:5,audio:5,video:5,script:5}[a.tagName.toLowerCase()]||
-1;return 4>b?b:"string"===typeof a.getAttribute("src")?5:-5}function ga(a,b,c){var d;(!a||null==b)&&n("store");c="string"==typeof c&&c;v(a,function(a){d=c?a.getAttribute(c):0<fa(a)?a.getAttribute("src"):a.innerHTML;null==d?da(a,b):I(a,b,d)});return h}function X(a,b){var c=[];a&&b&&j(p(b),function(b){c.push(I(a,b))},a);return c}function Y(a){z.on("resize",a);return h}function ha(a){v(a,function(a){"object"==typeof a||n("create @args");var c=Z(ia).configure(a),d,g=c.verge;a=c.breakpoints;var e=J("scroll"),
f=J("resize");a.length&&(d=a[0]||a[1]||!1,K(function(){function a(){c.reset();j(c.$e,function(a,b){c[b].decideValue().updateDOM()}).trigger(h)}function b(){j(c.$e,function(a,b){W(c[b].$e,g)&&c[b].updateDOM()})}var h=$.allLoaded,k=!!c.lazy;j(c.target().$e,function(a,b){c[b]=Z(c).prepareData(a);(!k||W(c[b].$e,g))&&c[b].updateDOM()});c.dynamic&&(c.custom||d<A)&&Y(a,f);k&&(z.on(e,b),c.$e.one(h,function(){z.off(e,b)}))}))});return h}function ja(a,b){if("function"==typeof a&&a.fn){if(b||void 0===a.fn.dataset)a.fn.dataset=
H;if(b||void 0===a.fn.deletes)a.fn.deletes=ca;var c=a.fn;j(["inX","inY","inViewport"],function(d){(b||!c[d])&&(c[d]=function(b,c){return a(u(this,function(a){return!!a&&!c===h[d](a,b)}))})})}return h}if("function"!=typeof e)try{console.log("Response was unable to run due to missing dependency.")}catch(Fa){}var L=this,h,q="Response",ya=L[q],ka="init"+q,k=window,la=document,l=la.documentElement,K=e.domReady||e,z=e(k),B=k.screen,P=Array.isArray||function(a){return a instanceof Array},ua={}.hasOwnProperty,
xa=[].slice,za=[].concat,ma=[].map,na=ma?function(a,b,c){return ma.call(a,b,c)}:function(a,b,c){var d,g=a.length,e=[];for(d=0;d<g;d++)d in a&&(e[d]=b.call(c,a[d],d,a));return e},oa={width:[0,320,481,641,961,1025,1281],height:[0,481],ratio:[1,1.5,2]},ia,m,s,C={},t={},pa={},M={all:[]},Aa=1,N=B.width,O=B.height,A=N>O?N:O,Ba=N+O-A,B=function(){return N},qa=function(){return O},Ca=/[^a-z0-9_\-\.]/gi,U=/^[\W\s]+|[\W\s]+$|/g,wa=/([a-z])([A-Z])/g,va=/-(.)/g,T=/^data-(.+)$/,Z=Object.create||function(a){function b(){}
b.prototype=a;return new b},J=function(a,b){b=b||q;return a.replace(U,"")+"."+b.replace(U,"")},$={allLoaded:J("allLoaded"),crossover:J("crossover")},S=(m=k.matchMedia||k.msMatchMedia)||function(){return{}},y,ra=k;s=l.clientWidth;var D=ra.innerWidth;y=m&&s<D&&!0===m("(min-width:"+D+"px)").matches?function(){return ra.innerWidth}:function(){return l.clientWidth};var x,sa=k;s=l.clientHeight;D=sa.innerHeight;x=m&&s<D&&!0===m("(min-height:"+D+"px)").matches?function(){return sa.innerHeight}:function(){return l.clientHeight};
m=E(y);s=E(x);C.band=E(B);C.wave=E(qa);var Da=function(a){return"string"==typeof a?a.toLowerCase().replace(Ca,""):""},ta=$.crossover,Ea=Math.min;ia={$e:0,mode:0,breakpoints:null,prefix:null,prop:"width",keys:[],dynamic:null,custom:0,values:[],fn:0,verge:null,newValue:0,currValue:1,aka:null,lazy:null,i:0,uid:null,reset:function(){for(var a=this.breakpoints,b=a.length,c=0;!c&&b--;)this.fn(a[b])&&(c=b);c!==this.i&&(z.trigger(ta).trigger(this.prop+ta),this.i=c||0);return this},configure:function(a){R(this,
a);var b,c,d=!0;b=this.prop;this.uid=Aa++;this.verge=isFinite(this.verge)?this.verge:Ea(A,500);this.fn=t[b]||n("create @fn");"boolean"!=typeof this.dynamic&&(this.dynamic="device"!==b.substring(0,6));this.custom=pa[b];c=this.prefix?u(na(p(this.prefix),Da)):["min-"+b+"-"];a=1<c.length?c.slice(1):0;this.prefix=c[0];c=this.breakpoints;P(c)?(j(c,function(a){if(!a&&0!==a)throw"invalid breakpoint";d=d&&isFinite(a)}),c=d?c.sort(function(a,b){return a-b}):c,c.length||n("create @breakpoints")):c=oa[b]||oa[b.split("-").pop()]||
n("create @prop");this.breakpoints=d?u(c,function(a){return a<=A}):c;this.keys=Q(this.breakpoints,this.prefix);this.aka=null;if(a){c=[];for(b=a.length;b--;)c.push(Q(this.breakpoints,a[b]));this.aka=c;this.keys=za.apply(this.keys,c)}M.all=M.all.concat(M[this.uid]=this.keys);return this},target:function(){this.$e=e(ea(M[this.uid]));ga(this.$e,ka);this.keys.push(ka);return this},decideValue:function(){for(var a=null,b=this.breakpoints,c=b.length,d=c;null==a&&d--;)this.fn(b[d])&&(a=this.values[d]);this.newValue=
"string"===typeof a?a:this.values[c];return this},prepareData:function(a){this.$e=e(a);this.mode=fa(a);this.values=X(this.$e,this.keys);if(this.aka)for(a=this.aka.length;a--;)this.values=R(this.values,X(this.$e,this.aka[a]));return this.decideValue()},updateDOM:function(){if(this.currValue===this.newValue)return this;this.currValue=this.newValue;0<this.mode?this.$e[0].setAttribute("src",this.newValue):null==this.newValue?this.$e.empty&&this.$e.empty():this.$e.html?this.$e.html(this.newValue):(this.$e.empty&&
this.$e.empty(),this.$e[0].innerHTML=this.newValue);return this}};t.width=m;t.height=s;t["device-width"]=C.band;t["device-height"]=C.wave;t["device-pixel-ratio"]=w;h={deviceMin:function(){return Ba},deviceMax:function(){return A},noConflict:function(a){L[q]===h&&(L[q]=ya);"function"==typeof a&&a.call(L,h);return h},chain:function(a,b){a=arguments.length?a:e;return ja(a,b)},bridge:ja,create:ha,addTest:function(a,b){"string"==typeof a&&"function"==typeof b&&(t[a]=b,pa[a]=1);return h},datatize:F,camelize:aa,
render:ba,store:ga,access:X,target:function(a){return e(ea(p(a)))},object:Z,crossover:function(a,b){var c,d=$.crossover;"function"==typeof a&&(c=b,b=a,a=c);z.on(a?""+a+d:d,b);return h},action:function(a){v(a,function(a){K(a);Y(a)});return h},resize:Y,ready:K,affix:Q,sift:u,dpr:w,deletes:da,scrollX:function(){return window.pageXOffset||l.scrollLeft},scrollY:function(){return window.pageYOffset||l.scrollTop},deviceW:B,deviceH:qa,device:C,inX:function(a,b){var c=V(G(a),b);return!!c&&0<=c.right&&c.left<=
y()},inY:function(a,b){var c=V(G(a),b);return!!c&&0<=c.bottom&&c.top<=x()},route:v,merge:R,media:S,wave:s,band:m,map:na,each:j,inViewport:W,dataset:I,viewportH:x,viewportW:y};K(function(){var a,b=I(la.body,"responsejs");b&&((a=!!k.JSON&&JSON.parse)?b=a(b):e.parseJSON&&(b=e.parseJSON(b)),b&&b.create&&ha(b.create));l.className=l.className.replace(/(^|\s)(no-)?responsejs(\s|$)/,"$1$3")+" responsejs "});return h});
/*
 *	jQuery carouFredSel 6.2.1
 *	Demo's and documentation:
 *	caroufredsel.dev7studios.com
 *
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


(function($){function sc_setScroll(a,b,c){return"transition"==c.transition&&"swing"==b&&(b="ease"),{anims:[],duration:a,orgDuration:a,easing:b,startTime:getTime()}}function sc_startScroll(a,b){for(var c=0,d=a.anims.length;d>c;c++){var e=a.anims[c];e&&e[0][b.transition](e[1],a.duration,a.easing,e[2])}}function sc_stopScroll(a,b){is_boolean(b)||(b=!0),is_object(a.pre)&&sc_stopScroll(a.pre,b);for(var c=0,d=a.anims.length;d>c;c++){var e=a.anims[c];e[0].stop(!0),b&&(e[0].css(e[1]),is_function(e[2])&&e[2]())}is_object(a.post)&&sc_stopScroll(a.post,b)}function sc_afterScroll(a,b,c){switch(b&&b.remove(),c.fx){case"fade":case"crossfade":case"cover-fade":case"uncover-fade":a.css("opacity",1),a.css("filter","")}}function sc_fireCallbacks(a,b,c,d,e){if(b[c]&&b[c].call(a,d),e[c].length)for(var f=0,g=e[c].length;g>f;f++)e[c][f].call(a,d);return[]}function sc_fireQueue(a,b,c){return b.length&&(a.trigger(cf_e(b[0][0],c),b[0][1]),b.shift()),b}function sc_hideHiddenItems(a){a.each(function(){var a=$(this);a.data("_cfs_isHidden",a.is(":hidden")).hide()})}function sc_showHiddenItems(a){a&&a.each(function(){var a=$(this);a.data("_cfs_isHidden")||a.show()})}function sc_clearTimers(a){return a.auto&&clearTimeout(a.auto),a.progress&&clearInterval(a.progress),a}function sc_mapCallbackArguments(a,b,c,d,e,f,g){return{width:g.width,height:g.height,items:{old:a,skipped:b,visible:c},scroll:{items:d,direction:e,duration:f}}}function sc_getDuration(a,b,c,d){var e=a.duration;return"none"==a.fx?0:("auto"==e?e=b.scroll.duration/b.scroll.items*c:10>e&&(e=d/e),1>e?0:("fade"==a.fx&&(e/=2),Math.round(e)))}function nv_showNavi(a,b,c){var d=is_number(a.items.minimum)?a.items.minimum:a.items.visible+1;if("show"==b||"hide"==b)var e=b;else if(d>b){debug(c,"Not enough items ("+b+" total, "+d+" needed): Hiding navigation.");var e="hide"}else var e="show";var f="show"==e?"removeClass":"addClass",g=cf_c("hidden",c);a.auto.button&&a.auto.button[e]()[f](g),a.prev.button&&a.prev.button[e]()[f](g),a.next.button&&a.next.button[e]()[f](g),a.pagination.container&&a.pagination.container[e]()[f](g)}function nv_enableNavi(a,b,c){if(!a.circular&&!a.infinite){var d="removeClass"==b||"addClass"==b?b:!1,e=cf_c("disabled",c);if(a.auto.button&&d&&a.auto.button[d](e),a.prev.button){var f=d||0==b?"addClass":"removeClass";a.prev.button[f](e)}if(a.next.button){var f=d||b==a.items.visible?"addClass":"removeClass";a.next.button[f](e)}}}function go_getObject(a,b){return is_function(b)?b=b.call(a):is_undefined(b)&&(b={}),b}function go_getItemsObject(a,b){return b=go_getObject(a,b),is_number(b)?b={visible:b}:"variable"==b?b={visible:b,width:b,height:b}:is_object(b)||(b={}),b}function go_getScrollObject(a,b){return b=go_getObject(a,b),is_number(b)?b=50>=b?{items:b}:{duration:b}:is_string(b)?b={easing:b}:is_object(b)||(b={}),b}function go_getNaviObject(a,b){if(b=go_getObject(a,b),is_string(b)){var c=cf_getKeyCode(b);b=-1==c?$(b):c}return b}function go_getAutoObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={button:b}:is_boolean(b)?b={play:b}:is_number(b)&&(b={timeoutDuration:b}),b.progress&&(is_string(b.progress)||is_jquery(b.progress))&&(b.progress={bar:b.progress}),b}function go_complementAutoObject(a,b){return is_function(b.button)&&(b.button=b.button.call(a)),is_string(b.button)&&(b.button=$(b.button)),is_boolean(b.play)||(b.play=!0),is_number(b.delay)||(b.delay=0),is_undefined(b.pauseOnEvent)&&(b.pauseOnEvent=!0),is_boolean(b.pauseOnResize)||(b.pauseOnResize=!0),is_number(b.timeoutDuration)||(b.timeoutDuration=10>b.duration?2500:5*b.duration),b.progress&&(is_function(b.progress.bar)&&(b.progress.bar=b.progress.bar.call(a)),is_string(b.progress.bar)&&(b.progress.bar=$(b.progress.bar)),b.progress.bar?(is_function(b.progress.updater)||(b.progress.updater=$.fn.carouFredSel.progressbarUpdater),is_number(b.progress.interval)||(b.progress.interval=50)):b.progress=!1),b}function go_getPrevNextObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={button:b}:is_number(b)&&(b={key:b}),b}function go_complementPrevNextObject(a,b){return is_function(b.button)&&(b.button=b.button.call(a)),is_string(b.button)&&(b.button=$(b.button)),is_string(b.key)&&(b.key=cf_getKeyCode(b.key)),b}function go_getPaginationObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={container:b}:is_boolean(b)&&(b={keys:b}),b}function go_complementPaginationObject(a,b){return is_function(b.container)&&(b.container=b.container.call(a)),is_string(b.container)&&(b.container=$(b.container)),is_number(b.items)||(b.items=!1),is_boolean(b.keys)||(b.keys=!1),is_function(b.anchorBuilder)||is_false(b.anchorBuilder)||(b.anchorBuilder=$.fn.carouFredSel.pageAnchorBuilder),is_number(b.deviation)||(b.deviation=0),b}function go_getSwipeObject(a,b){return is_function(b)&&(b=b.call(a)),is_undefined(b)&&(b={onTouch:!1}),is_true(b)?b={onTouch:b}:is_number(b)&&(b={items:b}),b}function go_complementSwipeObject(a,b){return is_boolean(b.onTouch)||(b.onTouch=!0),is_boolean(b.onMouse)||(b.onMouse=!1),is_object(b.options)||(b.options={}),is_boolean(b.options.triggerOnTouchEnd)||(b.options.triggerOnTouchEnd=!1),b}function go_getMousewheelObject(a,b){return is_function(b)&&(b=b.call(a)),is_true(b)?b={}:is_number(b)?b={items:b}:is_undefined(b)&&(b=!1),b}function go_complementMousewheelObject(a,b){return b}function gn_getItemIndex(a,b,c,d,e){if(is_string(a)&&(a=$(a,e)),is_object(a)&&(a=$(a,e)),is_jquery(a)?(a=e.children().index(a),is_boolean(c)||(c=!1)):is_boolean(c)||(c=!0),is_number(a)||(a=0),is_number(b)||(b=0),c&&(a+=d.first),a+=b,d.total>0){for(;a>=d.total;)a-=d.total;for(;0>a;)a+=d.total}return a}function gn_getVisibleItemsPrev(a,b,c){for(var d=0,e=0,f=c;f>=0;f--){var g=a.eq(f);if(d+=g.is(":visible")?g[b.d.outerWidth](!0):0,d>b.maxDimension)return e;0==f&&(f=a.length),e++}}function gn_getVisibleItemsPrevFilter(a,b,c){return gn_getItemsPrevFilter(a,b.items.filter,b.items.visibleConf.org,c)}function gn_getScrollItemsPrevFilter(a,b,c,d){return gn_getItemsPrevFilter(a,b.items.filter,d,c)}function gn_getItemsPrevFilter(a,b,c,d){for(var e=0,f=0,g=d,h=a.length;g>=0;g--){if(f++,f==h)return f;var i=a.eq(g);if(i.is(b)&&(e++,e==c))return f;0==g&&(g=h)}}function gn_getVisibleOrg(a,b){return b.items.visibleConf.org||a.children().slice(0,b.items.visible).filter(b.items.filter).length}function gn_getVisibleItemsNext(a,b,c){for(var d=0,e=0,f=c,g=a.length-1;g>=f;f++){var h=a.eq(f);if(d+=h.is(":visible")?h[b.d.outerWidth](!0):0,d>b.maxDimension)return e;if(e++,e==g+1)return e;f==g&&(f=-1)}}function gn_getVisibleItemsNextTestCircular(a,b,c,d){var e=gn_getVisibleItemsNext(a,b,c);return b.circular||c+e>d&&(e=d-c),e}function gn_getVisibleItemsNextFilter(a,b,c){return gn_getItemsNextFilter(a,b.items.filter,b.items.visibleConf.org,c,b.circular)}function gn_getScrollItemsNextFilter(a,b,c,d){return gn_getItemsNextFilter(a,b.items.filter,d+1,c,b.circular)-1}function gn_getItemsNextFilter(a,b,c,d){for(var f=0,g=0,h=d,i=a.length-1;i>=h;h++){if(g++,g>=i)return g;var j=a.eq(h);if(j.is(b)&&(f++,f==c))return g;h==i&&(h=-1)}}function gi_getCurrentItems(a,b){return a.slice(0,b.items.visible)}function gi_getOldItemsPrev(a,b,c){return a.slice(c,b.items.visibleConf.old+c)}function gi_getNewItemsPrev(a,b){return a.slice(0,b.items.visible)}function gi_getOldItemsNext(a,b){return a.slice(0,b.items.visibleConf.old)}function gi_getNewItemsNext(a,b,c){return a.slice(c,b.items.visible+c)}function sz_storeMargin(a,b,c){b.usePadding&&(is_string(c)||(c="_cfs_origCssMargin"),a.each(function(){var a=$(this),d=parseInt(a.css(b.d.marginRight),10);is_number(d)||(d=0),a.data(c,d)}))}function sz_resetMargin(a,b,c){if(b.usePadding){var d=is_boolean(c)?c:!1;is_number(c)||(c=0),sz_storeMargin(a,b,"_cfs_tempCssMargin"),a.each(function(){var a=$(this);a.css(b.d.marginRight,d?a.data("_cfs_tempCssMargin"):c+a.data("_cfs_origCssMargin"))})}}function sz_storeOrigCss(a){a.each(function(){var a=$(this);a.data("_cfs_origCss",a.attr("style")||"")})}function sz_restoreOrigCss(a){a.each(function(){var a=$(this);a.attr("style",a.data("_cfs_origCss")||"")})}function sz_setResponsiveSizes(a,b){var d=(a.items.visible,a.items[a.d.width]),e=a[a.d.height],f=is_percentage(e);b.each(function(){var b=$(this),c=d-ms_getPaddingBorderMargin(b,a,"Width");b[a.d.width](c),f&&b[a.d.height](ms_getPercentage(c,e))})}function sz_setSizes(a,b){var c=a.parent(),d=a.children(),e=gi_getCurrentItems(d,b),f=cf_mapWrapperSizes(ms_getSizes(e,b,!0),b,!1);if(c.css(f),b.usePadding){var g=b.padding,h=g[b.d[1]];b.align&&0>h&&(h=0);var i=e.last();i.css(b.d.marginRight,i.data("_cfs_origCssMargin")+h),a.css(b.d.top,g[b.d[0]]),a.css(b.d.left,g[b.d[3]])}return a.css(b.d.width,f[b.d.width]+2*ms_getTotalSize(d,b,"width")),a.css(b.d.height,ms_getLargestSize(d,b,"height")),f}function ms_getSizes(a,b,c){return[ms_getTotalSize(a,b,"width",c),ms_getLargestSize(a,b,"height",c)]}function ms_getLargestSize(a,b,c,d){return is_boolean(d)||(d=!1),is_number(b[b.d[c]])&&d?b[b.d[c]]:is_number(b.items[b.d[c]])?b.items[b.d[c]]:(c=c.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",ms_getTrueLargestSize(a,b,c))}function ms_getTrueLargestSize(a,b,c){for(var d=0,e=0,f=a.length;f>e;e++){var g=a.eq(e),h=g.is(":visible")?g[b.d[c]](!0):0;h>d&&(d=h)}return d}function ms_getTotalSize(a,b,c,d){if(is_boolean(d)||(d=!1),is_number(b[b.d[c]])&&d)return b[b.d[c]];if(is_number(b.items[b.d[c]]))return b.items[b.d[c]]*a.length;for(var e=c.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",f=0,g=0,h=a.length;h>g;g++){var i=a.eq(g);f+=i.is(":visible")?i[b.d[e]](!0):0}return f}function ms_getParentSize(a,b,c){var d=a.is(":visible");d&&a.hide();var e=a.parent()[b.d[c]]();return d&&a.show(),e}function ms_getMaxDimension(a,b){return is_number(a[a.d.width])?a[a.d.width]:b}function ms_hasVariableSizes(a,b,c){for(var d=!1,e=!1,f=0,g=a.length;g>f;f++){var h=a.eq(f),i=h.is(":visible")?h[b.d[c]](!0):0;d===!1?d=i:d!=i&&(e=!0),0==d&&(e=!0)}return e}function ms_getPaddingBorderMargin(a,b,c){return a[b.d["outer"+c]](!0)-a[b.d[c.toLowerCase()]]()}function ms_getPercentage(a,b){if(is_percentage(b)){if(b=parseInt(b.slice(0,-1),10),!is_number(b))return a;a*=b/100}return a}function cf_e(a,b,c,d,e){return is_boolean(c)||(c=!0),is_boolean(d)||(d=!0),is_boolean(e)||(e=!1),c&&(a=b.events.prefix+a),d&&(a=a+"."+b.events.namespace),d&&e&&(a+=b.serialNumber),a}function cf_c(a,b){return is_string(b.classnames[a])?b.classnames[a]:a}function cf_mapWrapperSizes(a,b,c){is_boolean(c)||(c=!0);var d=b.usePadding&&c?b.padding:[0,0,0,0],e={};return e[b.d.width]=a[0]+d[1]+d[3],e[b.d.height]=a[1]+d[0]+d[2],e}function cf_sortParams(a,b){for(var c=[],d=0,e=a.length;e>d;d++)for(var f=0,g=b.length;g>f;f++)if(b[f].indexOf(typeof a[d])>-1&&is_undefined(c[f])){c[f]=a[d];break}return c}function cf_getPadding(a){if(is_undefined(a))return[0,0,0,0];if(is_number(a))return[a,a,a,a];if(is_string(a)&&(a=a.split("px").join("").split("em").join("").split(" ")),!is_array(a))return[0,0,0,0];for(var b=0;4>b;b++)a[b]=parseInt(a[b],10);switch(a.length){case 0:return[0,0,0,0];case 1:return[a[0],a[0],a[0],a[0]];case 2:return[a[0],a[1],a[0],a[1]];case 3:return[a[0],a[1],a[2],a[1]];default:return[a[0],a[1],a[2],a[3]]}}function cf_getAlignPadding(a,b){var c=is_number(b[b.d.width])?Math.ceil(b[b.d.width]-ms_getTotalSize(a,b,"width")):0;switch(b.align){case"left":return[0,c];case"right":return[c,0];case"center":default:return[Math.ceil(c/2),Math.floor(c/2)]}}function cf_getDimensions(a){for(var b=[["width","innerWidth","outerWidth","height","innerHeight","outerHeight","left","top","marginRight",0,1,2,3],["height","innerHeight","outerHeight","width","innerWidth","outerWidth","top","left","marginBottom",3,2,1,0]],c=b[0].length,d="right"==a.direction||"left"==a.direction?0:1,e={},f=0;c>f;f++)e[b[0][f]]=b[d][f];return e}function cf_getAdjust(a,b,c,d){var e=a;if(is_function(c))e=c.call(d,e);else if(is_string(c)){var f=c.split("+"),g=c.split("-");if(g.length>f.length)var h=!0,i=g[0],j=g[1];else var h=!1,i=f[0],j=f[1];switch(i){case"even":e=1==a%2?a-1:a;break;case"odd":e=0==a%2?a-1:a;break;default:e=a}j=parseInt(j,10),is_number(j)&&(h&&(j=-j),e+=j)}return(!is_number(e)||1>e)&&(e=1),e}function cf_getItemsAdjust(a,b,c,d){return cf_getItemAdjustMinMax(cf_getAdjust(a,b,c,d),b.items.visibleConf)}function cf_getItemAdjustMinMax(a,b){return is_number(b.min)&&b.min>a&&(a=b.min),is_number(b.max)&&a>b.max&&(a=b.max),1>a&&(a=1),a}function cf_getSynchArr(a){is_array(a)||(a=[[a]]),is_array(a[0])||(a=[a]);for(var b=0,c=a.length;c>b;b++)is_string(a[b][0])&&(a[b][0]=$(a[b][0])),is_boolean(a[b][1])||(a[b][1]=!0),is_boolean(a[b][2])||(a[b][2]=!0),is_number(a[b][3])||(a[b][3]=0);return a}function cf_getKeyCode(a){return"right"==a?39:"left"==a?37:"up"==a?38:"down"==a?40:-1}function cf_setCookie(a,b,c){if(a){var d=b.triggerHandler(cf_e("currentPosition",c));$.fn.carouFredSel.cookie.set(a,d)}}function cf_getCookie(a){var b=$.fn.carouFredSel.cookie.get(a);return""==b?0:b}function in_mapCss(a,b){for(var c={},d=0,e=b.length;e>d;d++)c[b[d]]=a.css(b[d]);return c}function in_complementItems(a,b,c,d){return is_object(a.visibleConf)||(a.visibleConf={}),is_object(a.sizesConf)||(a.sizesConf={}),0==a.start&&is_number(d)&&(a.start=d),is_object(a.visible)?(a.visibleConf.min=a.visible.min,a.visibleConf.max=a.visible.max,a.visible=!1):is_string(a.visible)?("variable"==a.visible?a.visibleConf.variable=!0:a.visibleConf.adjust=a.visible,a.visible=!1):is_function(a.visible)&&(a.visibleConf.adjust=a.visible,a.visible=!1),is_string(a.filter)||(a.filter=c.filter(":hidden").length>0?":visible":"*"),a[b.d.width]||(b.responsive?(debug(!0,"Set a "+b.d.width+" for the items!"),a[b.d.width]=ms_getTrueLargestSize(c,b,"outerWidth")):a[b.d.width]=ms_hasVariableSizes(c,b,"outerWidth")?"variable":c[b.d.outerWidth](!0)),a[b.d.height]||(a[b.d.height]=ms_hasVariableSizes(c,b,"outerHeight")?"variable":c[b.d.outerHeight](!0)),a.sizesConf.width=a.width,a.sizesConf.height=a.height,a}function in_complementVisibleItems(a,b){return"variable"==a.items[a.d.width]&&(a.items.visibleConf.variable=!0),a.items.visibleConf.variable||(is_number(a[a.d.width])?a.items.visible=Math.floor(a[a.d.width]/a.items[a.d.width]):(a.items.visible=Math.floor(b/a.items[a.d.width]),a[a.d.width]=a.items.visible*a.items[a.d.width],a.items.visibleConf.adjust||(a.align=!1)),("Infinity"==a.items.visible||1>a.items.visible)&&(debug(!0,'Not a valid number of visible items: Set to "variable".'),a.items.visibleConf.variable=!0)),a}function in_complementPrimarySize(a,b,c){return"auto"==a&&(a=ms_getTrueLargestSize(c,b,"outerWidth")),a}function in_complementSecondarySize(a,b,c){return"auto"==a&&(a=ms_getTrueLargestSize(c,b,"outerHeight")),a||(a=b.items[b.d.height]),a}function in_getAlignPadding(a,b){var c=cf_getAlignPadding(gi_getCurrentItems(b,a),a);return a.padding[a.d[1]]=c[1],a.padding[a.d[3]]=c[0],a}function in_getResponsiveValues(a,b){var d=cf_getItemAdjustMinMax(Math.ceil(a[a.d.width]/a.items[a.d.width]),a.items.visibleConf);d>b.length&&(d=b.length);var e=Math.floor(a[a.d.width]/d);return a.items.visible=d,a.items[a.d.width]=e,a[a.d.width]=d*e,a}function bt_pauseOnHoverConfig(a){if(is_string(a))var b=a.indexOf("immediate")>-1?!0:!1,c=a.indexOf("resume")>-1?!0:!1;else var b=c=!1;return[b,c]}function bt_mousesheelNumber(a){return is_number(a)?a:null}function is_null(a){return null===a}function is_undefined(a){return is_null(a)||a===void 0||""===a||"undefined"===a}function is_array(a){return a instanceof Array}function is_jquery(a){return a instanceof jQuery}function is_object(a){return(a instanceof Object||"object"==typeof a)&&!is_null(a)&&!is_jquery(a)&&!is_array(a)&&!is_function(a)}function is_number(a){return(a instanceof Number||"number"==typeof a)&&!isNaN(a)}function is_string(a){return(a instanceof String||"string"==typeof a)&&!is_undefined(a)&&!is_true(a)&&!is_false(a)}function is_function(a){return a instanceof Function||"function"==typeof a}function is_boolean(a){return a instanceof Boolean||"boolean"==typeof a||is_true(a)||is_false(a)}function is_true(a){return a===!0||"true"===a}function is_false(a){return a===!1||"false"===a}function is_percentage(a){return is_string(a)&&"%"==a.slice(-1)}function getTime(){return(new Date).getTime()}function deprecated(a,b){debug(!0,a+" is DEPRECATED, support for it will be removed. Use "+b+" instead.")}function debug(a,b){if(!is_undefined(window.console)&&!is_undefined(window.console.log)){if(is_object(a)){var c=" ("+a.selector+")";a=a.debug}else var c="";if(!a)return!1;b=is_string(b)?"carouFredSel"+c+": "+b:["carouFredSel"+c+":",b],window.console.log(b)}return!1}$.fn.carouFredSel||($.fn.caroufredsel=$.fn.carouFredSel=function(options,configs){if(0==this.length)return debug(!0,'No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){$(this).carouFredSel(options,configs)});var $cfs=this,$tt0=this[0],starting_position=!1;$cfs.data("_cfs_isCarousel")&&(starting_position=$cfs.triggerHandler("_cfs_triggerEvent","currentPosition"),$cfs.trigger("_cfs_triggerEvent",["destroy",!0]));var FN={};FN._init=function(a,b,c){a=go_getObject($tt0,a),a.items=go_getItemsObject($tt0,a.items),a.scroll=go_getScrollObject($tt0,a.scroll),a.auto=go_getAutoObject($tt0,a.auto),a.prev=go_getPrevNextObject($tt0,a.prev),a.next=go_getPrevNextObject($tt0,a.next),a.pagination=go_getPaginationObject($tt0,a.pagination),a.swipe=go_getSwipeObject($tt0,a.swipe),a.mousewheel=go_getMousewheelObject($tt0,a.mousewheel),b&&(opts_orig=$.extend(!0,{},$.fn.carouFredSel.defaults,a)),opts=$.extend(!0,{},$.fn.carouFredSel.defaults,a),opts.d=cf_getDimensions(opts),crsl.direction="up"==opts.direction||"left"==opts.direction?"next":"prev";var d=$cfs.children(),e=ms_getParentSize($wrp,opts,"width");if(is_true(opts.cookie)&&(opts.cookie="caroufredsel_cookie_"+conf.serialNumber),opts.maxDimension=ms_getMaxDimension(opts,e),opts.items=in_complementItems(opts.items,opts,d,c),opts[opts.d.width]=in_complementPrimarySize(opts[opts.d.width],opts,d),opts[opts.d.height]=in_complementSecondarySize(opts[opts.d.height],opts,d),opts.responsive&&(is_percentage(opts[opts.d.width])||(opts[opts.d.width]="100%")),is_percentage(opts[opts.d.width])&&(crsl.upDateOnWindowResize=!0,crsl.primarySizePercentage=opts[opts.d.width],opts[opts.d.width]=ms_getPercentage(e,crsl.primarySizePercentage),opts.items.visible||(opts.items.visibleConf.variable=!0)),opts.responsive?(opts.usePadding=!1,opts.padding=[0,0,0,0],opts.align=!1,opts.items.visibleConf.variable=!1):(opts.items.visible||(opts=in_complementVisibleItems(opts,e)),opts[opts.d.width]||(!opts.items.visibleConf.variable&&is_number(opts.items[opts.d.width])&&"*"==opts.items.filter?(opts[opts.d.width]=opts.items.visible*opts.items[opts.d.width],opts.align=!1):opts[opts.d.width]="variable"),is_undefined(opts.align)&&(opts.align=is_number(opts[opts.d.width])?"center":!1),opts.items.visibleConf.variable&&(opts.items.visible=gn_getVisibleItemsNext(d,opts,0))),"*"==opts.items.filter||opts.items.visibleConf.variable||(opts.items.visibleConf.org=opts.items.visible,opts.items.visible=gn_getVisibleItemsNextFilter(d,opts,0)),opts.items.visible=cf_getItemsAdjust(opts.items.visible,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts.responsive)opts.items.visibleConf.min||(opts.items.visibleConf.min=opts.items.visible),opts.items.visibleConf.max||(opts.items.visibleConf.max=opts.items.visible),opts=in_getResponsiveValues(opts,d,e);else switch(opts.padding=cf_getPadding(opts.padding),"top"==opts.align?opts.align="left":"bottom"==opts.align&&(opts.align="right"),opts.align){case"center":case"left":case"right":"variable"!=opts[opts.d.width]&&(opts=in_getAlignPadding(opts,d),opts.usePadding=!0);break;default:opts.align=!1,opts.usePadding=0==opts.padding[0]&&0==opts.padding[1]&&0==opts.padding[2]&&0==opts.padding[3]?!1:!0}is_number(opts.scroll.duration)||(opts.scroll.duration=500),is_undefined(opts.scroll.items)&&(opts.scroll.items=opts.responsive||opts.items.visibleConf.variable||"*"!=opts.items.filter?"visible":opts.items.visible),opts.auto=$.extend(!0,{},opts.scroll,opts.auto),opts.prev=$.extend(!0,{},opts.scroll,opts.prev),opts.next=$.extend(!0,{},opts.scroll,opts.next),opts.pagination=$.extend(!0,{},opts.scroll,opts.pagination),opts.auto=go_complementAutoObject($tt0,opts.auto),opts.prev=go_complementPrevNextObject($tt0,opts.prev),opts.next=go_complementPrevNextObject($tt0,opts.next),opts.pagination=go_complementPaginationObject($tt0,opts.pagination),opts.swipe=go_complementSwipeObject($tt0,opts.swipe),opts.mousewheel=go_complementMousewheelObject($tt0,opts.mousewheel),opts.synchronise&&(opts.synchronise=cf_getSynchArr(opts.synchronise)),opts.auto.onPauseStart&&(opts.auto.onTimeoutStart=opts.auto.onPauseStart,deprecated("auto.onPauseStart","auto.onTimeoutStart")),opts.auto.onPausePause&&(opts.auto.onTimeoutPause=opts.auto.onPausePause,deprecated("auto.onPausePause","auto.onTimeoutPause")),opts.auto.onPauseEnd&&(opts.auto.onTimeoutEnd=opts.auto.onPauseEnd,deprecated("auto.onPauseEnd","auto.onTimeoutEnd")),opts.auto.pauseDuration&&(opts.auto.timeoutDuration=opts.auto.pauseDuration,deprecated("auto.pauseDuration","auto.timeoutDuration"))},FN._build=function(){$cfs.data("_cfs_isCarousel",!0);var a=$cfs.children(),b=in_mapCss($cfs,["textAlign","float","position","top","right","bottom","left","zIndex","width","height","marginTop","marginRight","marginBottom","marginLeft"]),c="relative";switch(b.position){case"absolute":case"fixed":c=b.position}"parent"==conf.wrapper?sz_storeOrigCss($wrp):$wrp.css(b),$wrp.css({overflow:"hidden",position:c}),sz_storeOrigCss($cfs),$cfs.data("_cfs_origCssZindex",b.zIndex),$cfs.css({textAlign:"left","float":"none",position:"absolute",top:0,right:"auto",bottom:"auto",left:0,marginTop:0,marginRight:0,marginBottom:0,marginLeft:0}),sz_storeMargin(a,opts),sz_storeOrigCss(a),opts.responsive&&sz_setResponsiveSizes(opts,a)},FN._bind_events=function(){FN._unbind_events(),$cfs.bind(cf_e("stop",conf),function(a,b){return a.stopPropagation(),crsl.isStopped||opts.auto.button&&opts.auto.button.addClass(cf_c("stopped",conf)),crsl.isStopped=!0,opts.auto.play&&(opts.auto.play=!1,$cfs.trigger(cf_e("pause",conf),b)),!0}),$cfs.bind(cf_e("finish",conf),function(a){return a.stopPropagation(),crsl.isScrolling&&sc_stopScroll(scrl),!0}),$cfs.bind(cf_e("pause",conf),function(a,b,c){if(a.stopPropagation(),tmrs=sc_clearTimers(tmrs),b&&crsl.isScrolling){scrl.isStopped=!0;var d=getTime()-scrl.startTime;scrl.duration-=d,scrl.pre&&(scrl.pre.duration-=d),scrl.post&&(scrl.post.duration-=d),sc_stopScroll(scrl,!1)}if(crsl.isPaused||crsl.isScrolling||c&&(tmrs.timePassed+=getTime()-tmrs.startTime),crsl.isPaused||opts.auto.button&&opts.auto.button.addClass(cf_c("paused",conf)),crsl.isPaused=!0,opts.auto.onTimeoutPause){var e=opts.auto.timeoutDuration-tmrs.timePassed,f=100-Math.ceil(100*e/opts.auto.timeoutDuration);opts.auto.onTimeoutPause.call($tt0,f,e)}return!0}),$cfs.bind(cf_e("play",conf),function(a,b,c,d){a.stopPropagation(),tmrs=sc_clearTimers(tmrs);var e=[b,c,d],f=["string","number","boolean"],g=cf_sortParams(e,f);if(b=g[0],c=g[1],d=g[2],"prev"!=b&&"next"!=b&&(b=crsl.direction),is_number(c)||(c=0),is_boolean(d)||(d=!1),d&&(crsl.isStopped=!1,opts.auto.play=!0),!opts.auto.play)return a.stopImmediatePropagation(),debug(conf,"Carousel stopped: Not scrolling.");crsl.isPaused&&opts.auto.button&&(opts.auto.button.removeClass(cf_c("stopped",conf)),opts.auto.button.removeClass(cf_c("paused",conf))),crsl.isPaused=!1,tmrs.startTime=getTime();var h=opts.auto.timeoutDuration+c;return dur2=h-tmrs.timePassed,perc=100-Math.ceil(100*dur2/h),opts.auto.progress&&(tmrs.progress=setInterval(function(){var a=getTime()-tmrs.startTime+tmrs.timePassed,b=Math.ceil(100*a/h);opts.auto.progress.updater.call(opts.auto.progress.bar[0],b)},opts.auto.progress.interval)),tmrs.auto=setTimeout(function(){opts.auto.progress&&opts.auto.progress.updater.call(opts.auto.progress.bar[0],100),opts.auto.onTimeoutEnd&&opts.auto.onTimeoutEnd.call($tt0,perc,dur2),crsl.isScrolling?$cfs.trigger(cf_e("play",conf),b):$cfs.trigger(cf_e(b,conf),opts.auto)},dur2),opts.auto.onTimeoutStart&&opts.auto.onTimeoutStart.call($tt0,perc,dur2),!0}),$cfs.bind(cf_e("resume",conf),function(a){return a.stopPropagation(),scrl.isStopped?(scrl.isStopped=!1,crsl.isPaused=!1,crsl.isScrolling=!0,scrl.startTime=getTime(),sc_startScroll(scrl,conf)):$cfs.trigger(cf_e("play",conf)),!0}),$cfs.bind(cf_e("prev",conf)+" "+cf_e("next",conf),function(a,b,c,d,e){if(a.stopPropagation(),crsl.isStopped||$cfs.is(":hidden"))return a.stopImmediatePropagation(),debug(conf,"Carousel stopped or hidden: Not scrolling.");var f=is_number(opts.items.minimum)?opts.items.minimum:opts.items.visible+1;if(f>itms.total)return a.stopImmediatePropagation(),debug(conf,"Not enough items ("+itms.total+" total, "+f+" needed): Not scrolling.");var g=[b,c,d,e],h=["object","number/string","function","boolean"],i=cf_sortParams(g,h);b=i[0],c=i[1],d=i[2],e=i[3];var j=a.type.slice(conf.events.prefix.length);if(is_object(b)||(b={}),is_function(d)&&(b.onAfter=d),is_boolean(e)&&(b.queue=e),b=$.extend(!0,{},opts[j],b),b.conditions&&!b.conditions.call($tt0,j))return a.stopImmediatePropagation(),debug(conf,'Callback "conditions" returned false.');if(!is_number(c)){if("*"!=opts.items.filter)c="visible";else for(var k=[c,b.items,opts[j].items],i=0,l=k.length;l>i;i++)if(is_number(k[i])||"page"==k[i]||"visible"==k[i]){c=k[i];break}switch(c){case"page":return a.stopImmediatePropagation(),$cfs.triggerHandler(cf_e(j+"Page",conf),[b,d]);case"visible":opts.items.visibleConf.variable||"*"!=opts.items.filter||(c=opts.items.visible)}}if(scrl.isStopped)return $cfs.trigger(cf_e("resume",conf)),$cfs.trigger(cf_e("queue",conf),[j,[b,c,d]]),a.stopImmediatePropagation(),debug(conf,"Carousel resumed scrolling.");if(b.duration>0&&crsl.isScrolling)return b.queue&&("last"==b.queue&&(queu=[]),("first"!=b.queue||0==queu.length)&&$cfs.trigger(cf_e("queue",conf),[j,[b,c,d]])),a.stopImmediatePropagation(),debug(conf,"Carousel currently scrolling.");if(tmrs.timePassed=0,$cfs.trigger(cf_e("slide_"+j,conf),[b,c]),opts.synchronise)for(var m=opts.synchronise,n=[b,c],o=0,l=m.length;l>o;o++){var p=j;m[o][2]||(p="prev"==p?"next":"prev"),m[o][1]||(n[0]=m[o][0].triggerHandler("_cfs_triggerEvent",["configuration",p])),n[1]=c+m[o][3],m[o][0].trigger("_cfs_triggerEvent",["slide_"+p,n])}return!0}),$cfs.bind(cf_e("slide_prev",conf),function(a,b,c){a.stopPropagation();var d=$cfs.children();if(!opts.circular&&0==itms.first)return opts.infinite&&$cfs.trigger(cf_e("next",conf),itms.total-1),a.stopImmediatePropagation();if(sz_resetMargin(d,opts),!is_number(c)){if(opts.items.visibleConf.variable)c=gn_getVisibleItemsPrev(d,opts,itms.total-1);else if("*"!=opts.items.filter){var e=is_number(b.items)?b.items:gn_getVisibleOrg($cfs,opts);c=gn_getScrollItemsPrevFilter(d,opts,itms.total-1,e)}else c=opts.items.visible;c=cf_getAdjust(c,opts,b.items,$tt0)}if(opts.circular||itms.total-c<itms.first&&(c=itms.total-itms.first),opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){var f=cf_getItemsAdjust(gn_getVisibleItemsNext(d,opts,itms.total-c),opts,opts.items.visibleConf.adjust,$tt0);f>=opts.items.visible+c&&itms.total>c&&(c++,f=cf_getItemsAdjust(gn_getVisibleItemsNext(d,opts,itms.total-c),opts,opts.items.visibleConf.adjust,$tt0)),opts.items.visible=f}else if("*"!=opts.items.filter){var f=gn_getVisibleItemsNextFilter(d,opts,itms.total-c);opts.items.visible=cf_getItemsAdjust(f,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(d,opts,!0),0==c)return a.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+c+" items backward."),itms.first+=c;itms.first>=itms.total;)itms.first-=itms.total;opts.circular||(0==itms.first&&b.onEnd&&b.onEnd.call($tt0,"prev"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),$cfs.children().slice(itms.total-c,itms.total).prependTo($cfs),itms.total<opts.items.visible+c&&$cfs.children().slice(0,opts.items.visible+c-itms.total).clone(!0).appendTo($cfs);var d=$cfs.children(),g=gi_getOldItemsPrev(d,opts,c),h=gi_getNewItemsPrev(d,opts),i=d.eq(c-1),j=g.last(),k=h.last();sz_resetMargin(d,opts);var l=0,m=0;if(opts.align){var n=cf_getAlignPadding(h,opts);l=n[0],m=n[1]}var o=0>l?opts.padding[opts.d[3]]:0,p=!1,q=$();if(c>opts.items.visible&&(q=d.slice(opts.items.visibleConf.old,c),"directscroll"==b.fx)){var r=opts.items[opts.d.width];p=q,i=k,sc_hideHiddenItems(p),opts.items[opts.d.width]="variable"}var s=!1,t=ms_getTotalSize(d.slice(0,c),opts,"width"),u=cf_mapWrapperSizes(ms_getSizes(h,opts,!0),opts,!opts.usePadding),v=0,w={},x={},y={},z={},A={},B={},C={},D=sc_getDuration(b,opts,c,t);switch(b.fx){case"cover":case"cover-fade":v=ms_getTotalSize(d.slice(0,opts.items.visible),opts,"width")}p&&(opts.items[opts.d.width]=r),sz_resetMargin(d,opts,!0),m>=0&&sz_resetMargin(j,opts,opts.padding[opts.d[1]]),l>=0&&sz_resetMargin(i,opts,opts.padding[opts.d[3]]),opts.align&&(opts.padding[opts.d[1]]=m,opts.padding[opts.d[3]]=l),B[opts.d.left]=-(t-o),C[opts.d.left]=-(v-o),x[opts.d.left]=u[opts.d.width];var E=function(){},F=function(){},G=function(){},H=function(){},I=function(){},J=function(){},K=function(){},L=function(){},M=function(){},N=function(){},O=function(){};switch(b.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":s=$cfs.clone(!0).appendTo($wrp)}switch(b.fx){case"crossfade":case"uncover":case"uncover-fade":s.children().slice(0,c).remove(),s.children().slice(opts.items.visibleConf.old).remove();break;case"cover":case"cover-fade":s.children().slice(opts.items.visible).remove(),s.css(C)}if($cfs.css(B),scrl=sc_setScroll(D,b.easing,conf),w[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0,("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(E=function(){$wrp.css(u)},F=function(){scrl.anims.push([$wrp,u])}),opts.usePadding){switch(k.not(i).length&&(y[opts.d.marginRight]=i.data("_cfs_origCssMargin"),0>l?i.css(y):(K=function(){i.css(y)},L=function(){scrl.anims.push([i,y])})),b.fx){case"cover":case"cover-fade":s.children().eq(c-1).css(y)}k.not(j).length&&(z[opts.d.marginRight]=j.data("_cfs_origCssMargin"),G=function(){j.css(z)},H=function(){scrl.anims.push([j,z])}),m>=0&&(A[opts.d.marginRight]=k.data("_cfs_origCssMargin")+opts.padding[opts.d[1]],I=function(){k.css(A)},J=function(){scrl.anims.push([k,A])})}O=function(){$cfs.css(w)};var P=opts.items.visible+c-itms.total;N=function(){if(P>0&&($cfs.children().slice(itms.total).remove(),g=$($cfs.children().slice(itms.total-(opts.items.visible-P)).get().concat($cfs.children().slice(0,P).get()))),sc_showHiddenItems(p),opts.usePadding){var a=$cfs.children().eq(opts.items.visible+c-1);a.css(opts.d.marginRight,a.data("_cfs_origCssMargin"))}};var Q=sc_mapCallbackArguments(g,q,h,c,"prev",D,u);switch(M=function(){sc_afterScroll($cfs,s,b),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,b,"onAfter",Q,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,b,"onBefore",Q,clbk),b.fx){case"none":$cfs.css(w),E(),G(),I(),K(),O(),N(),M();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){E(),G(),I(),K(),O(),N(),scrl=sc_setScroll(D,b.easing,conf),scrl.anims.push([$cfs,{opacity:1},M]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},M]),F(),G(),I(),K(),O(),N();break;case"cover":scrl.anims.push([s,w,function(){G(),I(),K(),O(),N(),M()}]),F();break;case"cover-fade":scrl.anims.push([$cfs,{opacity:0}]),scrl.anims.push([s,w,function(){G(),I(),K(),O(),N(),M()}]),F();break;case"uncover":scrl.anims.push([s,x,M]),F(),G(),I(),K(),O(),N();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([s,x,M]),F(),G(),I(),K(),O(),N();break;default:scrl.anims.push([$cfs,w,function(){N(),M()}]),F(),H(),J(),L()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,u]),!0
}),$cfs.bind(cf_e("slide_next",conf),function(a,b,c){a.stopPropagation();var d=$cfs.children();if(!opts.circular&&itms.first==opts.items.visible)return opts.infinite&&$cfs.trigger(cf_e("prev",conf),itms.total-1),a.stopImmediatePropagation();if(sz_resetMargin(d,opts),!is_number(c)){if("*"!=opts.items.filter){var e=is_number(b.items)?b.items:gn_getVisibleOrg($cfs,opts);c=gn_getScrollItemsNextFilter(d,opts,0,e)}else c=opts.items.visible;c=cf_getAdjust(c,opts,b.items,$tt0)}var f=0==itms.first?itms.total:itms.first;if(!opts.circular){if(opts.items.visibleConf.variable)var g=gn_getVisibleItemsNext(d,opts,c),e=gn_getVisibleItemsPrev(d,opts,f-1);else var g=opts.items.visible,e=opts.items.visible;c+g>f&&(c=f-e)}if(opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){for(var g=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d,opts,c,f),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible-c>=g&&itms.total>c;)c++,g=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d,opts,c,f),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible=g}else if("*"!=opts.items.filter){var g=gn_getVisibleItemsNextFilter(d,opts,c);opts.items.visible=cf_getItemsAdjust(g,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(d,opts,!0),0==c)return a.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+c+" items forward."),itms.first-=c;0>itms.first;)itms.first+=itms.total;opts.circular||(itms.first==opts.items.visible&&b.onEnd&&b.onEnd.call($tt0,"next"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),itms.total<opts.items.visible+c&&$cfs.children().slice(0,opts.items.visible+c-itms.total).clone(!0).appendTo($cfs);var d=$cfs.children(),h=gi_getOldItemsNext(d,opts),i=gi_getNewItemsNext(d,opts,c),j=d.eq(c-1),k=h.last(),l=i.last();sz_resetMargin(d,opts);var m=0,n=0;if(opts.align){var o=cf_getAlignPadding(i,opts);m=o[0],n=o[1]}var p=!1,q=$();if(c>opts.items.visibleConf.old&&(q=d.slice(opts.items.visibleConf.old,c),"directscroll"==b.fx)){var r=opts.items[opts.d.width];p=q,j=k,sc_hideHiddenItems(p),opts.items[opts.d.width]="variable"}var s=!1,t=ms_getTotalSize(d.slice(0,c),opts,"width"),u=cf_mapWrapperSizes(ms_getSizes(i,opts,!0),opts,!opts.usePadding),v=0,w={},x={},y={},z={},A={},B=sc_getDuration(b,opts,c,t);switch(b.fx){case"uncover":case"uncover-fade":v=ms_getTotalSize(d.slice(0,opts.items.visibleConf.old),opts,"width")}p&&(opts.items[opts.d.width]=r),opts.align&&0>opts.padding[opts.d[1]]&&(opts.padding[opts.d[1]]=0),sz_resetMargin(d,opts,!0),sz_resetMargin(k,opts,opts.padding[opts.d[1]]),opts.align&&(opts.padding[opts.d[1]]=n,opts.padding[opts.d[3]]=m),A[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0;var C=function(){},D=function(){},E=function(){},F=function(){},G=function(){},H=function(){},I=function(){},J=function(){},K=function(){};switch(b.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":s=$cfs.clone(!0).appendTo($wrp),s.children().slice(opts.items.visibleConf.old).remove()}switch(b.fx){case"crossfade":case"cover":case"cover-fade":$cfs.css("zIndex",1),s.css("zIndex",0)}if(scrl=sc_setScroll(B,b.easing,conf),w[opts.d.left]=-t,x[opts.d.left]=-v,0>m&&(w[opts.d.left]+=m),("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(C=function(){$wrp.css(u)},D=function(){scrl.anims.push([$wrp,u])}),opts.usePadding){var L=l.data("_cfs_origCssMargin");n>=0&&(L+=opts.padding[opts.d[1]]),l.css(opts.d.marginRight,L),j.not(k).length&&(z[opts.d.marginRight]=k.data("_cfs_origCssMargin")),E=function(){k.css(z)},F=function(){scrl.anims.push([k,z])};var M=j.data("_cfs_origCssMargin");m>0&&(M+=opts.padding[opts.d[3]]),y[opts.d.marginRight]=M,G=function(){j.css(y)},H=function(){scrl.anims.push([j,y])}}K=function(){$cfs.css(A)};var N=opts.items.visible+c-itms.total;J=function(){N>0&&$cfs.children().slice(itms.total).remove();var a=$cfs.children().slice(0,c).appendTo($cfs).last();if(N>0&&(i=gi_getCurrentItems(d,opts)),sc_showHiddenItems(p),opts.usePadding){if(itms.total<opts.items.visible+c){var b=$cfs.children().eq(opts.items.visible-1);b.css(opts.d.marginRight,b.data("_cfs_origCssMargin")+opts.padding[opts.d[1]])}a.css(opts.d.marginRight,a.data("_cfs_origCssMargin"))}};var O=sc_mapCallbackArguments(h,q,i,c,"next",B,u);switch(I=function(){$cfs.css("zIndex",$cfs.data("_cfs_origCssZindex")),sc_afterScroll($cfs,s,b),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,b,"onAfter",O,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,b,"onBefore",O,clbk),b.fx){case"none":$cfs.css(w),C(),E(),G(),K(),J(),I();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){C(),E(),G(),K(),J(),scrl=sc_setScroll(B,b.easing,conf),scrl.anims.push([$cfs,{opacity:1},I]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},I]),D(),E(),G(),K(),J();break;case"cover":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([$cfs,A,I]),D(),E(),G(),J();break;case"cover-fade":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,A,I]),D(),E(),G(),J();break;case"uncover":scrl.anims.push([s,x,I]),D(),E(),G(),K(),J();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([s,x,I]),D(),E(),G(),K(),J();break;default:scrl.anims.push([$cfs,w,function(){K(),J(),I()}]),D(),F(),H()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,u]),!0}),$cfs.bind(cf_e("slideTo",conf),function(a,b,c,d,e,f,g){a.stopPropagation();var h=[b,c,d,e,f,g],i=["string/number/object","number","boolean","object","string","function"],j=cf_sortParams(h,i);return e=j[3],f=j[4],g=j[5],b=gn_getItemIndex(j[0],j[1],j[2],itms,$cfs),0==b?!1:(is_object(e)||(e=!1),"prev"!=f&&"next"!=f&&(f=opts.circular?itms.total/2>=b?"next":"prev":0==itms.first||itms.first>b?"next":"prev"),"prev"==f&&(b=itms.total-b),$cfs.trigger(cf_e(f,conf),[e,b,g]),!0)}),$cfs.bind(cf_e("prevPage",conf),function(a,b,c){a.stopPropagation();var d=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[d-1,b,"prev",c])}),$cfs.bind(cf_e("nextPage",conf),function(a,b,c){a.stopPropagation();var d=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[d+1,b,"next",c])}),$cfs.bind(cf_e("slideToPage",conf),function(a,b,c,d,e){a.stopPropagation(),is_number(b)||(b=$cfs.triggerHandler(cf_e("currentPage",conf)));var f=opts.pagination.items||opts.items.visible,g=Math.ceil(itms.total/f)-1;return 0>b&&(b=g),b>g&&(b=0),$cfs.triggerHandler(cf_e("slideTo",conf),[b*f,0,!0,c,d,e])}),$cfs.bind(cf_e("jumpToStart",conf),function(a,b){if(a.stopPropagation(),b=b?gn_getItemIndex(b,0,!0,itms,$cfs):0,b+=itms.first,0!=b){if(itms.total>0)for(;b>itms.total;)b-=itms.total;$cfs.prepend($cfs.children().slice(b,itms.total))}return!0}),$cfs.bind(cf_e("synchronise",conf),function(a,b){if(a.stopPropagation(),b)b=cf_getSynchArr(b);else{if(!opts.synchronise)return debug(conf,"No carousel to synchronise.");b=opts.synchronise}for(var c=$cfs.triggerHandler(cf_e("currentPosition",conf)),d=!0,e=0,f=b.length;f>e;e++)b[e][0].triggerHandler(cf_e("slideTo",conf),[c,b[e][3],!0])||(d=!1);return d}),$cfs.bind(cf_e("queue",conf),function(a,b,c){return a.stopPropagation(),is_function(b)?b.call($tt0,queu):is_array(b)?queu=b:is_undefined(b)||queu.push([b,c]),queu}),$cfs.bind(cf_e("insertItem",conf),function(a,b,c,d,e){a.stopPropagation();var f=[b,c,d,e],g=["string/object","string/number/object","boolean","number"],h=cf_sortParams(f,g);if(b=h[0],c=h[1],d=h[2],e=h[3],is_object(b)&&!is_jquery(b)?b=$(b):is_string(b)&&(b=$(b)),!is_jquery(b)||0==b.length)return debug(conf,"Not a valid object.");is_undefined(c)&&(c="end"),sz_storeMargin(b,opts),sz_storeOrigCss(b);var i=c,j="before";"end"==c?d?(0==itms.first?(c=itms.total-1,j="after"):(c=itms.first,itms.first+=b.length),0>c&&(c=0)):(c=itms.total-1,j="after"):c=gn_getItemIndex(c,e,d,itms,$cfs);var k=$cfs.children().eq(c);return k.length?k[j](b):(debug(conf,"Correct insert-position not found! Appending item to the end."),$cfs.append(b)),"end"==i||d||itms.first>c&&(itms.first+=b.length),itms.total=$cfs.children().length,itms.first>=itms.total&&(itms.first-=itms.total),$cfs.trigger(cf_e("updateSizes",conf)),$cfs.trigger(cf_e("linkAnchors",conf)),!0}),$cfs.bind(cf_e("removeItem",conf),function(a,b,c,d){a.stopPropagation();var e=[b,c,d],f=["string/number/object","boolean","number"],g=cf_sortParams(e,f);if(b=g[0],c=g[1],d=g[2],b instanceof $&&b.length>1)return i=$(),b.each(function(){var e=$cfs.trigger(cf_e("removeItem",conf),[$(this),c,d]);e&&(i=i.add(e))}),i;if(is_undefined(b)||"end"==b)i=$cfs.children().last();else{b=gn_getItemIndex(b,d,c,itms,$cfs);var i=$cfs.children().eq(b);i.length&&itms.first>b&&(itms.first-=i.length)}return i&&i.length&&(i.detach(),itms.total=$cfs.children().length,$cfs.trigger(cf_e("updateSizes",conf))),i}),$cfs.bind(cf_e("onBefore",conf)+" "+cf_e("onAfter",conf),function(a,b){a.stopPropagation();var c=a.type.slice(conf.events.prefix.length);return is_array(b)&&(clbk[c]=b),is_function(b)&&clbk[c].push(b),clbk[c]}),$cfs.bind(cf_e("currentPosition",conf),function(a,b){if(a.stopPropagation(),0==itms.first)var c=0;else var c=itms.total-itms.first;return is_function(b)&&b.call($tt0,c),c}),$cfs.bind(cf_e("currentPage",conf),function(a,b){a.stopPropagation();var e,c=opts.pagination.items||opts.items.visible,d=Math.ceil(itms.total/c-1);return e=0==itms.first?0:itms.first<itms.total%c?0:itms.first!=c||opts.circular?Math.round((itms.total-itms.first)/c):d,0>e&&(e=0),e>d&&(e=d),is_function(b)&&b.call($tt0,e),e}),$cfs.bind(cf_e("currentVisible",conf),function(a,b){a.stopPropagation();var c=gi_getCurrentItems($cfs.children(),opts);return is_function(b)&&b.call($tt0,c),c}),$cfs.bind(cf_e("slice",conf),function(a,b,c,d){if(a.stopPropagation(),0==itms.total)return!1;var e=[b,c,d],f=["number","number","function"],g=cf_sortParams(e,f);if(b=is_number(g[0])?g[0]:0,c=is_number(g[1])?g[1]:itms.total,d=g[2],b+=itms.first,c+=itms.first,items.total>0){for(;b>itms.total;)b-=itms.total;for(;c>itms.total;)c-=itms.total;for(;0>b;)b+=itms.total;for(;0>c;)c+=itms.total}var i,h=$cfs.children();return i=c>b?h.slice(b,c):$(h.slice(b,itms.total).get().concat(h.slice(0,c).get())),is_function(d)&&d.call($tt0,i),i}),$cfs.bind(cf_e("isPaused",conf)+" "+cf_e("isStopped",conf)+" "+cf_e("isScrolling",conf),function(a,b){a.stopPropagation();var c=a.type.slice(conf.events.prefix.length),d=crsl[c];return is_function(b)&&b.call($tt0,d),d}),$cfs.bind(cf_e("configuration",conf),function(e,a,b,c){e.stopPropagation();var reInit=!1;if(is_function(a))a.call($tt0,opts);else if(is_object(a))opts_orig=$.extend(!0,{},opts_orig,a),b!==!1?reInit=!0:opts=$.extend(!0,{},opts,a);else if(!is_undefined(a))if(is_function(b)){var val=eval("opts."+a);is_undefined(val)&&(val=""),b.call($tt0,val)}else{if(is_undefined(b))return eval("opts."+a);"boolean"!=typeof c&&(c=!0),eval("opts_orig."+a+" = b"),c!==!1?reInit=!0:eval("opts."+a+" = b")}if(reInit){sz_resetMargin($cfs.children(),opts),FN._init(opts_orig),FN._bind_buttons();var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e("updatePageStatus",conf),[!0,sz])}return opts}),$cfs.bind(cf_e("linkAnchors",conf),function(a,b,c){return a.stopPropagation(),is_undefined(b)?b=$("body"):is_string(b)&&(b=$(b)),is_jquery(b)&&0!=b.length?(is_string(c)||(c="a.caroufredsel"),b.find(c).each(function(){var a=this.hash||"";a.length>0&&-1!=$cfs.children().index($(a))&&$(this).unbind("click").click(function(b){b.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),a)})}),!0):debug(conf,"Not a valid object.")}),$cfs.bind(cf_e("updatePageStatus",conf),function(a,b){if(a.stopPropagation(),opts.pagination.container){var d=opts.pagination.items||opts.items.visible,e=Math.ceil(itms.total/d);b&&(opts.pagination.anchorBuilder&&(opts.pagination.container.children().remove(),opts.pagination.container.each(function(){for(var a=0;e>a;a++){var b=$cfs.children().eq(gn_getItemIndex(a*d,0,!0,itms,$cfs));$(this).append(opts.pagination.anchorBuilder.call(b[0],a+1))}})),opts.pagination.container.each(function(){$(this).children().unbind(opts.pagination.event).each(function(a){$(this).bind(opts.pagination.event,function(b){b.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[a*d,-opts.pagination.deviation,!0,opts.pagination])})})}));var f=$cfs.triggerHandler(cf_e("currentPage",conf))+opts.pagination.deviation;return f>=e&&(f=0),0>f&&(f=e-1),opts.pagination.container.each(function(){$(this).children().removeClass(cf_c("selected",conf)).eq(f).addClass(cf_c("selected",conf))}),!0}}),$cfs.bind(cf_e("updateSizes",conf),function(){var b=opts.items.visible,c=$cfs.children(),d=ms_getParentSize($wrp,opts,"width");if(itms.total=c.length,crsl.primarySizePercentage?(opts.maxDimension=d,opts[opts.d.width]=ms_getPercentage(d,crsl.primarySizePercentage)):opts.maxDimension=ms_getMaxDimension(opts,d),opts.responsive?(opts.items.width=opts.items.sizesConf.width,opts.items.height=opts.items.sizesConf.height,opts=in_getResponsiveValues(opts,c,d),b=opts.items.visible,sz_setResponsiveSizes(opts,c)):opts.items.visibleConf.variable?b=gn_getVisibleItemsNext(c,opts,0):"*"!=opts.items.filter&&(b=gn_getVisibleItemsNextFilter(c,opts,0)),!opts.circular&&0!=itms.first&&b>itms.first){if(opts.items.visibleConf.variable)var e=gn_getVisibleItemsPrev(c,opts,itms.first)-itms.first;else if("*"!=opts.items.filter)var e=gn_getVisibleItemsPrevFilter(c,opts,itms.first)-itms.first;else var e=opts.items.visible-itms.first;debug(conf,"Preventing non-circular: sliding "+e+" items backward."),$cfs.trigger(cf_e("prev",conf),e)}opts.items.visible=cf_getItemsAdjust(b,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts=in_getAlignPadding(opts,c);var f=sz_setSizes($cfs,opts);return $cfs.trigger(cf_e("updatePageStatus",conf),[!0,f]),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),f}),$cfs.bind(cf_e("destroy",conf),function(a,b){return a.stopPropagation(),tmrs=sc_clearTimers(tmrs),$cfs.data("_cfs_isCarousel",!1),$cfs.trigger(cf_e("finish",conf)),b&&$cfs.trigger(cf_e("jumpToStart",conf)),sz_restoreOrigCss($cfs.children()),sz_restoreOrigCss($cfs),FN._unbind_events(),FN._unbind_buttons(),"parent"==conf.wrapper?sz_restoreOrigCss($wrp):$wrp.replaceWith($cfs),!0}),$cfs.bind(cf_e("debug",conf),function(){return debug(conf,"Carousel width: "+opts.width),debug(conf,"Carousel height: "+opts.height),debug(conf,"Item widths: "+opts.items.width),debug(conf,"Item heights: "+opts.items.height),debug(conf,"Number of items visible: "+opts.items.visible),opts.auto.play&&debug(conf,"Number of items scrolled automatically: "+opts.auto.items),opts.prev.button&&debug(conf,"Number of items scrolled backward: "+opts.prev.items),opts.next.button&&debug(conf,"Number of items scrolled forward: "+opts.next.items),conf.debug}),$cfs.bind("_cfs_triggerEvent",function(a,b,c){return a.stopPropagation(),$cfs.triggerHandler(cf_e(b,conf),c)})},FN._unbind_events=function(){$cfs.unbind(cf_e("",conf)),$cfs.unbind(cf_e("",conf,!1)),$cfs.unbind("_cfs_triggerEvent")},FN._bind_buttons=function(){if(FN._unbind_buttons(),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),opts.auto.pauseOnHover){var a=bt_pauseOnHoverConfig(opts.auto.pauseOnHover);$wrp.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.auto.button&&opts.auto.button.bind(cf_e(opts.auto.event,conf,!1),function(a){a.preventDefault();var b=!1,c=null;crsl.isPaused?b="play":opts.auto.pauseOnEvent&&(b="pause",c=bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)),b&&$cfs.trigger(cf_e(b,conf),c)}),opts.prev.button&&(opts.prev.button.bind(cf_e(opts.prev.event,conf,!1),function(a){a.preventDefault(),$cfs.trigger(cf_e("prev",conf))}),opts.prev.pauseOnHover)){var a=bt_pauseOnHoverConfig(opts.prev.pauseOnHover);opts.prev.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.next.button&&(opts.next.button.bind(cf_e(opts.next.event,conf,!1),function(a){a.preventDefault(),$cfs.trigger(cf_e("next",conf))}),opts.next.pauseOnHover)){var a=bt_pauseOnHoverConfig(opts.next.pauseOnHover);opts.next.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.pagination.container&&opts.pagination.pauseOnHover){var a=bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);opts.pagination.container.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if((opts.prev.key||opts.next.key)&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(a){var b=a.keyCode;b==opts.next.key&&(a.preventDefault(),$cfs.trigger(cf_e("next",conf))),b==opts.prev.key&&(a.preventDefault(),$cfs.trigger(cf_e("prev",conf)))}),opts.pagination.keys&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(a){var b=a.keyCode;b>=49&&58>b&&(b=(b-49)*opts.items.visible,itms.total>=b&&(a.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[b,0,!0,opts.pagination])))}),$.fn.swipe){var b="ontouchstart"in window;if(b&&opts.swipe.onTouch||!b&&opts.swipe.onMouse){var c=$.extend(!0,{},opts.prev,opts.swipe),d=$.extend(!0,{},opts.next,opts.swipe),e=function(){$cfs.trigger(cf_e("prev",conf),[c])},f=function(){$cfs.trigger(cf_e("next",conf),[d])};switch(opts.direction){case"up":case"down":opts.swipe.options.swipeUp=f,opts.swipe.options.swipeDown=e;break;default:opts.swipe.options.swipeLeft=f,opts.swipe.options.swipeRight=e}crsl.swipe&&$cfs.swipe("destroy"),$wrp.swipe(opts.swipe.options),$wrp.css("cursor","move"),crsl.swipe=!0}}if($.fn.mousewheel&&opts.mousewheel){var g=$.extend(!0,{},opts.prev,opts.mousewheel),h=$.extend(!0,{},opts.next,opts.mousewheel);crsl.mousewheel&&$wrp.unbind(cf_e("mousewheel",conf,!1)),$wrp.bind(cf_e("mousewheel",conf,!1),function(a,b){a.preventDefault(),b>0?$cfs.trigger(cf_e("prev",conf),[g]):$cfs.trigger(cf_e("next",conf),[h])}),crsl.mousewheel=!0}if(opts.auto.play&&$cfs.trigger(cf_e("play",conf),opts.auto.delay),crsl.upDateOnWindowResize){var i=function(){$cfs.trigger(cf_e("finish",conf)),opts.auto.pauseOnResize&&!crsl.isPaused&&$cfs.trigger(cf_e("play",conf)),sz_resetMargin($cfs.children(),opts),$cfs.trigger(cf_e("updateSizes",conf))},j=$(window),k=null;if($.debounce&&"debounce"==conf.onWindowResize)k=$.debounce(200,i);else if($.throttle&&"throttle"==conf.onWindowResize)k=$.throttle(300,i);else{var l=0,m=0;k=function(){var a=j.width(),b=j.height();(a!=l||b!=m)&&(i(),l=a,m=b)}}j.bind(cf_e("resize",conf,!1,!0,!0),k)}},FN._unbind_buttons=function(){var b=(cf_e("",conf),cf_e("",conf,!1));ns3=cf_e("",conf,!1,!0,!0),$(document).unbind(ns3),$(window).unbind(ns3),$wrp.unbind(b),opts.auto.button&&opts.auto.button.unbind(b),opts.prev.button&&opts.prev.button.unbind(b),opts.next.button&&opts.next.button.unbind(b),opts.pagination.container&&(opts.pagination.container.unbind(b),opts.pagination.anchorBuilder&&opts.pagination.container.children().remove()),crsl.swipe&&($cfs.swipe("destroy"),$wrp.css("cursor","default"),crsl.swipe=!1),crsl.mousewheel&&(crsl.mousewheel=!1),nv_showNavi(opts,"hide",conf),nv_enableNavi(opts,"removeClass",conf)},is_boolean(configs)&&(configs={debug:configs});var crsl={direction:"next",isPaused:!0,isScrolling:!1,isStopped:!1,mousewheel:!1,swipe:!1},itms={total:$cfs.children().length,first:0},tmrs={auto:null,progress:null,startTime:getTime(),timePassed:0},scrl={isStopped:!1,duration:0,startTime:0,easing:"",anims:[]},clbk={onBefore:[],onAfter:[]},queu=[],conf=$.extend(!0,{},$.fn.carouFredSel.configs,configs),opts={},opts_orig=$.extend(!0,{},options),$wrp="parent"==conf.wrapper?$cfs.parent():$cfs.wrap("<"+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();if(conf.selector=$cfs.selector,conf.serialNumber=$.fn.carouFredSel.serialNumber++,conf.transition=conf.transition&&$.fn.transition?"transition":"animate",FN._init(opts_orig,!0,starting_position),FN._build(),FN._bind_events(),FN._bind_buttons(),is_array(opts.items.start))var start_arr=opts.items.start;else{var start_arr=[];0!=opts.items.start&&start_arr.push(opts.items.start)}if(opts.cookie&&start_arr.unshift(parseInt(cf_getCookie(opts.cookie),10)),start_arr.length>0)for(var a=0,l=start_arr.length;l>a;a++){var s=start_arr[a];if(0!=s){if(s===!0){if(s=window.location.hash,1>s.length)continue}else"random"===s&&(s=Math.floor(Math.random()*itms.total));if($cfs.triggerHandler(cf_e("slideTo",conf),[s,0,!0,{fx:"none"}]))break}}var siz=sz_setSizes($cfs,opts),itm=gi_getCurrentItems($cfs.children(),opts);return opts.onCreate&&opts.onCreate.call($tt0,{width:siz.width,height:siz.height,items:itm}),$cfs.trigger(cf_e("updatePageStatus",conf),[!0,siz]),$cfs.trigger(cf_e("linkAnchors",conf)),conf.debug&&$cfs.trigger(cf_e("debug",conf)),$cfs},$.fn.carouFredSel.serialNumber=1,$.fn.carouFredSel.defaults={synchronise:!1,infinite:!0,circular:!0,responsive:!1,direction:"left",items:{start:0},scroll:{easing:"swing",duration:500,pauseOnHover:!1,event:"click",queue:!1}},$.fn.carouFredSel.configs={debug:!1,transition:!1,onWindowResize:"throttle",events:{prefix:"",namespace:"cfs"},wrapper:{element:"div",classname:"caroufredsel_wrapper"},classnames:{}},$.fn.carouFredSel.pageAnchorBuilder=function(a){return'<a href="#"><span>'+a+"</span></a>"},$.fn.carouFredSel.progressbarUpdater=function(a){$(this).css("width",a+"%")},$.fn.carouFredSel.cookie={get:function(a){a+="=";for(var b=document.cookie.split(";"),c=0,d=b.length;d>c;c++){for(var e=b[c];" "==e.charAt(0);)e=e.slice(1);if(0==e.indexOf(a))return e.slice(a.length)}return 0},set:function(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+1e3*60*60*24*c),d="; expires="+e.toGMTString()}document.cookie=a+"="+b+d+"; path=/"},remove:function(a){$.fn.carouFredSel.cookie.set(a,"",-1)}},$.extend($.easing,{quadratic:function(a){var b=a*a;return a*(-b*a+4*b-6*a+4)},cubic:function(a){return a*(4*a*a-9*a+6)},elastic:function(a){var b=a*a;return a*(33*b*b-106*b*a+126*b-67*a+15)}}))})(jQuery); 
/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version 2.1.2
 */

(function($){

$.fn.bgiframe = ($.browser.msie && /msie 6\.0/i.test(navigator.userAgent) ? function(s) {
    s = $.extend({
        top     : 'auto', // auto == .currentStyle.borderTopWidth
        left    : 'auto', // auto == .currentStyle.borderLeftWidth
        width   : 'auto', // auto == offsetWidth
        height  : 'auto', // auto == offsetHeight
        opacity : true,
        src     : 'javascript:false;'
    }, s);
    var html = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+
                   'style="display:block;position:absolute;z-index:-1;'+
                       (s.opacity !== false?'filter:Alpha(Opacity=\'0\');':'')+
                       'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+
                       'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+
                       'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+
                       'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+
                '"/>';
    return this.each(function() {
        if ( $(this).children('iframe.bgiframe').length === 0 )
            this.insertBefore( document.createElement(html), this.firstChild );
    });
} : function() { return this; });

// old alias
$.fn.bgIframe = $.fn.bgiframe;

function prop(n) {
    return n && n.constructor === Number ? n + 'px' : n;
}

})(jQuery);
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}return null};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}return null}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false);return null}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){if(J[a7]){return J[a7].distance}return undefined}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}}));
/*! Magnific Popup - v0.9.7 - 2013-10-10
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
;(function($) {

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_body,
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_setFocus = function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose = function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1; 
		mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
		mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_body = $(document.body);
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(_checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.paddingRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');


		// remove scrollbar, add padding e.t.c
		$('html').css(windowStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( document.body );



		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				_setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, function (e) {
				if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
					_setFocus();
					return false;
				}
			});

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {paddingRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;	

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });
		
		mfp.currItem = item;

		

		

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}
		
		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;
		
		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;
		
		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},



	
	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type = item.type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		} 

		var eName = 'click.magnificPopup';
		options.mainEl = el;
		
		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}
		
		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}
			

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( '<img src="'+value+'" class="' + el.attr('class') + '" />' );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.id = "mfp-sbm";
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();	

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}
			

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);			
		this.modules.push(name);
	},

	defaults: {   

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options
		
		disableOn: 0,	

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened
		
		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true, 

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,
	
		removalDelay: 0,
		
		fixedContentPos: 'auto', 
	
		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...'

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);
		
		/*
		 * As Zepto doesn't support .data() method for objects 
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};


//Quick benchmark
/*
var start = performance.now(),
	i,
	rounds = 1000;

for(i = 0; i < rounds; i++) {

}
console.log('Test #1:', performance.now() - start);

start = performance.now();
for(i = 0; i < rounds; i++) {

}
console.log('Test #2:', performance.now() - start);
*/


/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder, 
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			_body.removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur)
				_body.addClass(_ajaxCur);

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					_setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});





	

/*>>ajax*/



/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;		
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;
				
			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it
					
					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image); 
					
					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images 

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}
					
					
					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');
					
					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}	
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*
			
			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',
	
	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) { 
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com', 
				id: 'v=', 
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					} 
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;
				
			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});
			
			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/






})(window.jQuery || window.Zepto);


MI={};MI.Util=MI.Util||{};MI.Anita=MI.Anita||{};MI.Anita.Components=MI.Anita.Components||{};
$.widget("mi.adara",{options:{datakey:"adara",targets:null,containerCss:{},originalCopy:[],iframe:$("<iframe>",{"width":300,"height":300,"FRAMEBORDER":0,"MARGINWIDTH":0,"MARGINHEIGHT":0,"SCROLLING":"no","class":"ad-placement-iframe"}),MCOM00031421:{"allowTransparency":true}},_log:function(object){},addTracking:function(tracking){var self=this;self.options.tracking=$.extend(self.options.tracking,tracking);if(self.options.tracking&&self.options.tracking.requests&&self.options.tracking.requests.length!=0&&self.options.tracking.target&&self.options.tracking.target.length==0){self._log("#bt-audience-tracking-script added");$("<script>",{"type":"text/javascript","src":self.options.tracking.requests.val(),"id":"bt-audience-tracking-script"}).appendTo($("body"));}},_create:function(){var self=this,tracking={"requests":$("input:hidden.bt-ad-placement-src-url"),"target":$("#bt-audience-tracking-script")};if(self.options.targets.length>0){var data=self.element.data(self.options.datakey);if(data){if(data.iframeAttr&&data.iframeAttr.src){self.options.iframe.attr(self.options.MCOM00031421);self.options.iframe.attr(data.iframeAttr);}else{self.options.iframe=null;}}
if(self.options.iframe){self.options.targets.each(function(index,element){self.options.originalCopy.push($(this).clone(true,true));if(data&&data.containerCss){$.extend(data.containerCss,self.options.containerCss);$(this).css(data.containerCss);}
$(this).children().fadeOut("slow").end().empty().append(self.options.iframe.clone());});}}
$("iframe",self.options.targets).load(function(event){var anchor=document.createElement("a");anchor.href=$(this).attr("src");if(anchor.hash&&anchor.hash.length>0){var iframeAttr=$.parseJSON(decodeURI(anchor.hash.slice(1)));$(this).attr(iframeAttr);}
$(this).trigger("resized");});self.options.targets.on({"resized":$.proxy(self.resized,self)},null,null);},resized:function(event){},_destroy:function(){this._super();this.options.tracking.target.remove();self.options.targets.each(function(index,element){if(self.options.originalCopy[index]){$(this.replaceWith(self.options.originalCopy[index]));}});}});$.widget("mi.miButton",$.ui.button,{options:{},_create:function(){var self=this;$.ui.button.prototype._create.call(self);self.element.addClass("mi-button");}});$(function(){var $offers=$("a.chase-cc-saml, area.chase-cc-saml","body"),loginPath="/login-dialog/chase.mi",rememembered="remembered";if($offers.length>0){$("body").chaseAjaxManager({"chaseOffers":$offers});};});$.widget("mi.chaseAjaxManager",{options:{"chaseOffers":null},_$widget:null,_$clonable:null,_deferred:null,_profileState:null,_promptRemembered:null,_ritzPreferredProgram:null,_create:function(){var self=this;var einterfaceSignIn=$('[data-einterface]').data('einterface');self._$widget=$("#theme-safe-widget",self.element);if(self._$widget.length==0){self._$widget=$("<div id='theme-safe-widget' class='ui-helper-hidden is-hidden'>");self.element.append(self._$widget);}
self._$clonable=$("#master-chase-cc-login-container",self._$widget);if(einterfaceSignIn!='einterface3'&&self._$clonable.length==0){self._$clonable=$("<div id='master-chase-cc-login-container' class='chase-cc-login-container ui-helper-hidden is-hidden l-padding'>");self._$widget.append(self._$clonable);}
self._deferred=$.get("/login-dialog/chase.mi");self._deferred.success(function(data){self._$clonable.append(data);self._profileState=$(".profile-state",self._$clonable).data("profilestate");self._promptRemembered=$(".profile-state",self._$clonable).data("promptremembered");self._ritzPreferredProgram=$(".profile-state",self._$clonable).data("ritzpreferredprogram");if(self.options.chaseOffers){self.options.chaseOffers.each(function(index,elem){$(this).chaseOffer({"userState":self._profileState,"promptRemembered":self._promptRemembered,"dialog":{"html":(self._profileState==="remembered"&&self._promptRemembered)?self.getInstance():null,"options":{"ritzPreferredProgram":self._ritzPreferredProgram}},"hash":{"index":index}});});}
self._trigger("created");});},getDeferred:function(){return this._deferred;},getProfileState:function(){return this._profileState;},getPromptRemembered:function(){return this._promptRemembered;},getInstance:function(){var self=this,output=self._$clonable.clone(),date=new Date();output.attr("id",date.getTime());self._$widget.append(output);return output;}});$.widget("mi.chaseOffer",{options:{"userState":null,"promptRemembered":null,"dialog":{"html":null,"options":{"ritzPreferredProgram":null,"reloadPath":"/login-dialog/chase.mi"}},"hash":{"prefix":"#chase-cc-offer","index":0},"ssoPath":"/rewards/offers/chase-cc.mi","queryStringKey":"?forwardTo=","returnTo":window.location.pathname},_create:function(){var self=this;self.options.originalUrl=document.createElement("a");self.options.originalUrl.href=self.element.attr("href");if(window.location.search){self.options.returnTo+=window.location.search;}
if(self.options.userState==="authenticated"){var anchor=document.createElement("a");anchor.href=self.options.ssoPath+self.options.queryStringKey+encodeURIComponent(self.options.originalUrl);self.element.attr({"href":anchor.href});if(window.location.hash===self.getHash()){window.open(self.element.attr("href"),"chase");window.location.hash="";}}
if(self.options.userState==="remembered"){var $dialog=$(self.options.dialog.html);if(self.options.dialog.options.ritzPreferredProgram){self.options.dialog.options.reloadPath+="?ritz=true";}
$dialog.chaseLoginDialog(self.options.dialog.options);var $widget=$dialog.chaseLoginDialog("widget");$widget.on({"chaselogindialogrefreshed":function(event){$dialog.chaseLoginDialog("setReturnTo",self.options.returnTo);self.options.dirty=true;},"chaselogindialogclose":function(event){if(self.options.closeContinue){window.open(self.element.attr("href"),"chase");if(self.options.dirty){window.location.reload();}}}},null,null).on({"click":function(event){event.preventDefault();window.location.hash="";self.options.closeContinue=true;$dialog.chaseLoginDialog("close");}},"a.chase-close-continue",null).on({"click":function(event){event.preventDefault();window.location.hash="";$dialog.chaseLoginDialog("close");}},"a.chase-close-btn",null);self.element.on({"click":function(event){event.preventDefault();if(self.options.promptRemembered===true){if(self.options.returnTo&&self.options.returnTo.indexOf(self.getHash())<0){self.options.returnTo=self.options.returnTo+self.getHash();}
$dialog.chaseLoginDialog("setReturnTo",self.options.returnTo);$dialog.chaseLoginDialog("open");self.options.closeContinue=false;}else{window.open(self.element.attr("href"),"chase");}}},null,null);}
this._trigger("created");},getHash:function(){var self=this;return self.options.hash.prefix+"-"+self.options.hash.index;}});$.widget("mi.miDialog",$.ui.dialog,{options:{autoOpen:false,modal:true,resizable:false},_create:function(){var self=this;$.ui.dialog.prototype._create.call(self);self.element.closest(".ui-dialog").addClass("mi-dialog").on({"click":$.proxy(self.close,self)},".dialog-close",null);}});jQuery(function($){$.datepicker.regional['de']={closeText:'schließen',prevText:'&#x3c;zurück',nextText:'Vor&#x3e;',currentText:'heute',monthNames:['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],monthNamesShort:['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'],dayNames:['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],dayNamesShort:['So','Mo','Di','Mi','Do','Fr','Sa'],dayNamesMin:['So','Mo','Di','Mi','Do','Fr','Sa'],weekHeader:'Wo',dateFormat:'dd.mm.y',firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:''};$.datepicker.setDefaults($.datepicker.regional['de']);});jQuery(function($){$.datepicker.regional['en-AU']={closeText:'Done',prevText:'Prev',nextText:'Next',currentText:'Today',monthNames:['January','February','March','April','May','June','July','August','September','October','November','December'],monthNamesShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],dayNames:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],dayNamesShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],dayNamesMin:['Su','Mo','Tu','We','Th','Fr','Sa'],weekHeader:'Wk',dateFormat:'dd/mm/y',firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:''};$.datepicker.setDefaults($.datepicker.regional['en-AU']);});jQuery(function($){$.datepicker.regional['en-GB']={closeText:'Done',prevText:'Prev',nextText:'Next',currentText:'Today',monthNames:['January','February','March','April','May','June','July','August','September','October','November','December'],monthNamesShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],dayNames:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],dayNamesShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],dayNamesMin:['Su','Mo','Tu','We','Th','Fr','Sa'],weekHeader:'Wk',dateFormat:'dd/mm/y',firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:''};$.datepicker.setDefaults($.datepicker.regional['en-GB']);});jQuery(function($){$.datepicker.regional['es']={closeText:'Cerrar',prevText:'&#x3c;Ant',nextText:'Sig&#x3e;',currentText:'Hoy',monthNames:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],monthNamesShort:['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],dayNames:['Domingo','Lunes','Martes','Mi&eacute;rcoles','Jueves','Viernes','S&aacute;bado'],dayNamesShort:['Dom','Lun','Mar','Mi&eacute;','Juv','Vie','S&aacute;b'],dayNamesMin:['Do','Lu','Ma','Mi','Ju','Vi','S&aacute;'],weekHeader:'Sm',dateFormat:'dd/mm/y',firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:''};$.datepicker.setDefaults($.datepicker.regional['es']);});jQuery(function($){$.datepicker.regional['fr']={closeText:'Fermer',prevText:'Précédent',nextText:'Suivant',currentText:'Aujourd\'hui',monthNames:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],monthNamesShort:['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],dayNames:['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],dayNamesShort:['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],dayNamesMin:['D','L','M','M','J','V','S'],weekHeader:'Sem.',dateFormat:'dd/mm/y',firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:''};$.datepicker.setDefaults($.datepicker.regional['fr']);});jQuery(function($){$.datepicker.regional['ja']={closeText:'閉じる',prevText:'&#x3c;前',nextText:'次&#x3e;',currentText:'今日',monthNames:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],monthNamesShort:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],dayNames:['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],dayNamesShort:['日','月','火','水','木','金','土'],dayNamesMin:['日','月','火','水','木','金','土'],weekHeader:'週',dateFormat:'y/mm/dd',firstDay:0,isRTL:false,showMonthAfterYear:true,yearSuffix:'年'};$.datepicker.setDefaults($.datepicker.regional['ja']);});jQuery(function($){$.datepicker.regional['ko']={closeText:'닫기',prevText:'이전달',nextText:'다음달',currentText:'오늘',monthNames:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],monthNamesShort:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],dayNames:['일','월','화','수','목','금','토'],dayNamesShort:['일','월','화','수','목','금','토'],dayNamesMin:['일','월','화','수','목','금','토'],weekHeader:'Wk',dateFormat:'y.mm.dd',firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:'년'};$.datepicker.setDefaults($.datepicker.regional['ko']);});jQuery(function($){$.datepicker.regional['pt-BR']={closeText:'Fechar',prevText:'&#x3c;Anterior',nextText:'Pr&oacute;ximo&#x3e;',currentText:'Hoje',monthNames:['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],monthNamesShort:['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],dayNames:['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','S&aacute;bado'],dayNamesShort:['Do','Se','Te','Qu','Qu','Se','S&aacute;'],dayNamesMin:['Do','Se','Te','Qu','Qu','Se','S&aacute;'],weekHeader:'Sm',dateFormat:'dd/mm/y',firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:''};$.datepicker.setDefaults($.datepicker.regional['pt-BR']);});jQuery(function($){$.datepicker.regional['zh-CN']={closeText:'关闭',prevText:'&#x3c;上月',nextText:'下月&#x3e;',currentText:'今天',monthNames:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],monthNamesShort:['一','二','三','四','五','六','七','八','九','十','十一','十二'],dayNames:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],dayNamesShort:['周日','周一','周二','周三','周四','周五','周六'],dayNamesMin:['日','一','二','三','四','五','六'],weekHeader:'周',dateFormat:'y-mm-dd',firstDay:0,isRTL:false,showMonthAfterYear:true,yearSuffix:'年'};$.datepicker.setDefaults($.datepicker.regional['zh-CN']);});;(function($){"use strict";var DISPLAY_NONE_CLASS='l-display-none',ICON_CLASS='icon',ICON_OPEN_CLASS='icon-drawer-open',ICON_CLOSE_CLASS='icon-drawer-close',OPAQUE_CLASS='t-opaque';$.widget('mi.inPageNavigation',{options:{$scrollContainer:$(window),namespace:'inPageNav',sectionTopOffset:-10,cssClasses:{navBarPlaceholder:'l-nav-bar-placeholder',collapsibleWrapper:'t-collapsible-wrapper',isCollapsed:'is-collapsed',isExpanded:'is-expanded',drawerToggle:'t-drawer-toggle',hasLinkCaret:'has-link-caret',caret:'t-caret',navigationLink:'t-navigation-link',highlightedLink:'t-highlighted-link',highlightedPageLink:'t-highlighted-page-link',stickyNav:'t-sticky-nav'},highlightLinks:{page:true,section:true},stickyNavigation:true,smoothScroll:true,beforeWindowResize:null,afterWindowResize:null,beforeClickLink:null,afterClickLink:null,beforeScroll:null,afterScroll:null},_init:function(){var widget=this,o=widget.options;widget.$navBar=widget.element;widget.$ul=widget.$navBar.find('ul');widget.$navLinks=widget.$navBar.find('.'+o.cssClasses.navigationLink);widget.navBar={offset:(widget.$navLinks.outerHeight(true)-o.sectionTopOffset),"static":{top:widget.$navBar.offset().top,height:widget.$navBar.outerHeight(true)}}
widget._initCollapsible();if(o.highlightLinks.page){widget._initHighlightCurrentPageLink();}
if(o.highlightLinks.section){widget._initHighlightCurrentSectionLink();}
if(o.stickyNavigation){widget._initStickiness();}
widget.$navBar.smoothScroll({beforeScroll:function(event,options){if(o.highlightLinks.section){widget._highlightLink(options.$scrollTrigger);}
widget.listeningUserScroll=false;},afterScroll:function(){if(o.stickyNavigation){widget._swapToStickyNav(widget);}
widget.listeningUserScroll=true;}});widget.listeningUserScroll=true;widget._bindEvents();},_initCollapsible:function(){var widget=this,o=widget.options;widget.$ul.wrap('<div class="'+o.cssClasses.collapsibleWrapper+'"></div>');widget.$collapsible=widget.$navBar.find('.'+o.cssClasses.collapsibleWrapper);widget._prepareCollapsedBar()._bindDrawerClickEvent();return widget;},_initHighlightCurrentPageLink:function(){this._highlightCurrentPageLink();return this;},_initHighlightCurrentSectionLink:function(){var widget=this,o=widget.options;widget.isLinkHighlighted=false;widget.anchorsArray=[];widget.$navBar.append('<span class="'+o.cssClasses.caret+'"></span>');widget.$caret=widget.$navBar.find('.'+o.cssClasses.caret);for(var i=0;i<widget.$navLinks.length;i++){var linkEl=widget.$navLinks[i],href=linkEl.getAttribute('href'),pos=href.lastIndexOf('#');if(pos>-1){href=href.substr(pos+1);if(href.length>0){widget.anchorsArray.push('#'+href);}}}
widget._highlightLink();return widget;},_initStickiness:function(){var widget=this,o=widget.options;widget.$navBar.before('<div class="'+o.cssClasses.navBarPlaceholder+' '+DISPLAY_NONE_CLASS+'" '+'style="height: '+widget.navBar.static.height+'px"></div>');widget.$navBarPlaceholder=widget.$navBar.prev('.'+o.cssClasses.navBarPlaceholder);widget._swapToStickyNav();return widget;},_bindEvents:function(){var widget=this,o=widget.options;$(window).on('resize.'+o.namespace,$.proxy(widget._handleWindowResizeEvent,widget));widget.$navLinks.on('click.'+o.namespace,$.proxy(widget._handleNavLinksClickEvent,widget));o.$scrollContainer.on('scroll.'+o.namespace,$.proxy(widget._handleScrollEvent,o.$scrollContainer,widget));return widget;},_handleWindowResizeEvent:function(event){var widget=this,o=widget.options;widget._trigger('beforeWindowResize',null,{"$el":widget.element});widget._toggleCaret()._prepareCollapsedBar();widget._trigger('afterWindowResize',null,{"$el":widget.element});return widget;},_handleNavLinksClickEvent:function(event){var widget=this,$target=$(event.target),smoothScrollOpts={offset:{top:widget.navBar.offset}};if(!$target.is('a')){$target=$target.parents('a:first');}
widget._trigger('beforeClickLink',null,{"$el":widget.element});if(false===widget.options.smoothScroll){smoothScrollOpts.speed=0;}
widget.$navBar.smoothScroll(smoothScrollOpts);widget.$navBar.smoothScroll('scroll',[event,$target[0]]);widget._trigger('afterClickLink',null,{"$el":widget.element});return widget;},_handleScrollEvent:function(widget,event){var o=widget.options;if(true===widget.listeningUserScroll){widget._trigger('beforeScroll',null,{"$el":widget.element});if(o.stickyNavigation){widget._swapToStickyNav.call(widget,this);}
if(o.highlightLinks.section){widget._highlightLink.call(widget);}
widget._trigger('afterScroll',null,{"$el":widget.element});}
return widget;},_highlightCurrentPageLink:function(){this.$navBar.find('[href*="'+window.location.pathname+'"],[href="#"]').addClass(this.options.cssClasses.highlightedPageLink);return this;},_highlightLink:function($link){var widget=this,o=widget.options;widget.isLinkHighlighted=false;if(typeof $link!=='undefined'){widget.isLinkHighlighted=true;widget.$navLinks.removeClass(o.cssClasses.highlightedLink);$link.addClass(o.cssClasses.highlightedLink);}else{var scrollTop=widget._getScrollTop(o.$scrollContainer);for(var i=0;i<widget.anchorsArray.length;i++){var linkAnchor=widget.anchorsArray[i],$section=$(linkAnchor);if($section.length>0){var sectionTop=$section.offset().top-widget.navBar.offset;if(sectionTop<widget.navBar.static.top){sectionTop=widget.navBar.static.top;}
if(scrollTop>=sectionTop){widget.isLinkHighlighted=true;widget.$navLinks.removeClass(o.cssClasses.highlightedLink);widget.$navBar.find('[href='+linkAnchor+']').addClass(o.cssClasses.highlightedLink);}}}}
if(false===widget.isLinkHighlighted){widget.$navLinks.removeClass(o.cssClasses.highlightedLink);}
widget._toggleCaret();return widget;},_toggleCaret:function(){var widget=this,o=widget.options,$link=widget.$navLinks.filter('.'+o.cssClasses.highlightedLink);if($link.length>0){if($link.position().top===0){widget.$caret.addClass(OPAQUE_CLASS);}else{widget.$caret.removeClass(OPAQUE_CLASS);}
var left=$link.offset().left+($link.outerWidth(false)-widget.$caret.width())/2;widget.$caret.css('left',left);}else{widget.$caret.removeClass(OPAQUE_CLASS);}
return widget;},_swapToStickyNav:function(){var widget=this,o=widget.options,scrollTop=widget._getScrollTop(o.$scrollContainer);if(scrollTop>=widget.navBar.static.top){widget.$navBar.addClass(o.cssClasses.stickyNav);widget.$navBarPlaceholder.removeClass(DISPLAY_NONE_CLASS);}else{widget.$navBarPlaceholder.addClass(DISPLAY_NONE_CLASS)
widget.$navBar.removeClass(o.cssClasses.stickyNav)}
return widget;},_prepareCollapsedBar:function(){var widget=this,o=widget.options;if(typeof widget.$drawerToggle==='undefined'){widget.$collapsible.append('<span class="'+o.cssClasses.drawerToggle+' '+ICON_CLASS+' '+ICON_OPEN_CLASS+' '+DISPLAY_NONE_CLASS+'">'+'</span>');widget.$drawerToggle=widget.$collapsible.find('.'+o.cssClasses.drawerToggle);}
widget.$collapsible.css('padding','0');if(widget.$ul.height()>widget.$navLinks.outerHeight(true)){widget.$collapsible.addClass(o.cssClasses.isCollapsed);widget.$drawerToggle.removeClass(DISPLAY_NONE_CLASS);}else{widget.$collapsible.removeClass(o.cssClasses.isCollapsed+' '+o.cssClasses.isExpanded);widget.$drawerToggle.addClass(DISPLAY_NONE_CLASS);}
widget.$collapsible.css('padding','');return widget;},_bindDrawerClickEvent:function(){var widget=this,o=widget.options;widget.$drawerToggle.on('click.'+o.namespace,function(){var $this=$(this);if($this.hasClass(ICON_OPEN_CLASS)){widget.navBar.offset=widget.$ul.outerHeight(true)-o.sectionTopOffset;$this.removeClass(ICON_OPEN_CLASS).addClass(ICON_CLOSE_CLASS);widget.$navBar.removeClass(o.cssClasses.hasLinkCaret);widget.$collapsible.removeClass(o.cssClasses.isCollapsed).addClass(o.cssClasses.isExpanded).css('max-height',widget.$ul.height()+'px');}else{widget.navBar.offset=widget.$navLinks.outerHeight(true)-o.sectionTopOffset;widget.$collapsible.css('max-height','').removeClass(o.cssClasses.isExpanded).addClass(o.cssClasses.isCollapsed);widget.$navBar.addClass(o.cssClasses.hasLinkCaret);$this.removeClass(ICON_CLOSE_CLASS).addClass(ICON_OPEN_CLASS);}});return widget;},_getScrollTop:function($el){var scrollTop=$el.scrollTop();if($el[0]===window&&scrollTop===0){scrollTop=document.documentElement.scrollTop||0;}
return scrollTop;}});}(jQuery));;(function(window,document,$,R,undefined){var breakPoints={};jQuery.BreakPoint=function(id){var callbacks,topic=id&&breakPoints[id];if(!topic){callbacks=jQuery.Callbacks();topic={publish:callbacks.fire,subscribe:callbacks.add,unsubscribe:callbacks.remove};if(id){breakPoints[id]=topic;}}
return topic;};var BreakPointUtils={breakPointSet:[{"name":"XS","lower":0,"upper":319},{"name":"S","lower":320,"upper":479},{"name":"SM","lower":480,"upper":559},{"name":"M","lower":560,"upper":671},{"name":"MML","lower":672,"upper":767},{"name":"ML","lower":768,"upper":863},{"name":"MLL","lower":864,"upper":959},{"name":"L","lower":960,"upper":1023},{"name":"XL","lower":1024,"upper":1199},{"name":"XXL","lower":1200,"upper":1440}],matchedBreakPoints:[],unMatchedBreakPoints:[],publishBreakPoints:function(){BreakPointUtils.matchedBreakPoints.length=0;BreakPointUtils.unMatchedBreakPoints.length=0;$.each(BreakPointUtils.breakPointSet,function(index,point){BreakPointUtils.handleBreakPointOnlyEvents(point);BreakPointUtils.handleBreakPointAboveEvents(point);BreakPointUtils.handleBreakPointBelowEvents(point);});$.BreakPoint("publishComplete").publish({"matched":BreakPointUtils.matchedBreakPoints,"unMatched":BreakPointUtils.unMatchedBreakPoints});},handleBreakPointOnlyEvents:function(breakPoint){if(R.band(breakPoint.lower,breakPoint.upper)){BreakPointUtils.matchedBreakPoints.push(breakPoint.name+"-only");$.BreakPoint(breakPoint.name+"-only").publish();}else{BreakPointUtils.unMatchedBreakPoints.push(breakPoint.name+"-only");$.BreakPoint("off-"+breakPoint.name+"-only").publish();}},handleBreakPointAboveEvents:function(breakPoint){if(R.band(breakPoint.lower)){BreakPointUtils.matchedBreakPoints.push(breakPoint.name+"-and-above");$.BreakPoint(breakPoint.name+"-and-above").publish();}else{BreakPointUtils.unMatchedBreakPoints.push(breakPoint.name+"-and-above");$.BreakPoint("off-"+breakPoint.name+"-and-above").publish();}},handleBreakPointBelowEvents:function(breakPoint){if(R.band(0,breakPoint.upper)){BreakPointUtils.matchedBreakPoints.push(breakPoint.name+"-and-below");$.BreakPoint(breakPoint.name+"-and-below").publish();}else{BreakPointUtils.unMatchedBreakPoints.push(breakPoint.name+"-and-below");$.BreakPoint("off-"+breakPoint.name+"-and-below").publish();}}};R.ready(function(){Response.create({prop:"width",prefix:"r",breakpoints:[0,320,480,560,672,768,864,960,1024,1200,1400],lazy:false});});$(window).load(BreakPointUtils.publishBreakPoints);R.crossover(BreakPointUtils.publishBreakPoints,'width');}(this,this.document,this.jQuery,this.Response));;(function($,undefined){$.widget('mi.baseResponsiveWidget',{options:{breakpoints:[],widgetStyle:''},_create:function(){var isResponsive=$('body').data('responsive'),isOverride=$('body').data('override-widget');if(typeof isResponsive==='undefined'){isResponsive=$('#page-container').data('responsive')||"";}
if(typeof isOverride==='undefined'){isOverride=$('#page-container').data('override-widget')||"";}
if(isResponsive||isOverride){this._buildWidget();this._subscribeToBreakpoints();}},_subscribeToBreakpoints:function(){var widget=this;$.BreakPoint("publishComplete").subscribe($.proxy(widget._handleBreakPoints,widget));},_handleBreakPoints:function(breakPoints){if(this._isWithinBreakpoint(breakPoints.matched)){this.activate();}else{this.deactivate();}},_isWithinBreakpoint:function(matchedBreakPoints){return $.grep(this.options.breakpoints,function(i)
{return $.inArray(i,matchedBreakPoints)>-1;}).length>0;}})}(jQuery));;(function($){'use strict';$.widget('mi.smoothScroll',{options:{namespace:"smoothscrollwindow",container:window,speed:500,updateURL:true,cssClasses:{},offset:{top:0,bottom:0},beforeScroll:null,afterScroll:null},_updateURLHash:function(anchor){if(this.options.updateURL){location.hash=anchor;}
return this;},_scroll:function(args){var widget=this,event=args[0],$target=$(args[1]),anchor=$target.attr('href'),$section=$(anchor);if($section.length>0){widget._trigger('beforeScroll',null,{"$el":widget.element,"$scrollTrigger":$target});event.preventDefault();var id=$section.attr('id'),sectionTop=$section.offset().top,scrollTop=sectionTop-widget.options.offset.top;$section.attr('id','');$('html, body').animate({scrollTop:scrollTop},widget.options.speed).promise().done(function(){widget._updateURLHash(anchor)._trigger('afterScroll',null,{"$el":widget.element,"$scrollTrigger":$target});$section.attr('id',id);});}
return widget;},scroll:function(event){this._scroll(event);}});}(jQuery));$.widget("mi.miAjax",{options:{requests:{},$appendTo:$("body")},getInstance:function(requestKey){var self=this,requestKey=(requestKey)?requestKey:"default",request=self.options.requests[requestKey],obj={clone:null,deferred:request.deferred};if(obj.deferred){obj.deferred.complete(function(){var date=new Date();obj.clone=request.$container.clone();obj.clone.attr("id",date.getTime()).appendTo(self.options.$appendTo);});}else if(request.$container){var date=new Date();obj.clone=request.$container.clone();obj.clone.attr("id",date.getTime()).appendTo(self.options.$appendTo);}
return obj;},newRequest:function(requestKey,requestObj){var self=this;if(!self.options.requests[requestKey]){self.options.requests[requestKey]={};}
self.options.requests[requestKey].$container=$("#"+requestObj.containerId);if(self.options.requests[requestKey].$container.length==0&&requestObj.getUrl){self.options.requests[requestKey].$container=$("<div>",{"id":requestObj.containerId,"class":"ui-helper-hidden"});self.options.requests[requestKey].$container.appendTo(self.options.$appendTo);self.options.requests[requestKey].deferred=$.get(requestObj.getUrl);self.options.requests[requestKey].deferred.success(function(data){self.options.requests[requestKey].$container.append(data);self._trigger("created",self.options.requests[requestKey]);});}}});$.widget("mi.miSlider",$.ui.slider,{options:{},_create:function(){var self=this;$.ui.slider.prototype._create.call(self);self.element.addClass("mi-slider");}});$.widget("mi.miTabs",$.ui.tabs,{options:{},_create:function(){var self=this;$.ui.tabs.prototype._create.call(self);self.element.addClass("mi-tabs");}});$.widget("mi.adaraGuidedNav",$.mi.adara,{options:{datakey:"adara",targets:$("#guided-nav ~div[class|='msg']").has('img[src*=Book_Right]'),tracking:{"requests":$("input:hidden.bt-ad-placement-src-url"),"target":$("#bt-audience-tracking-script")},containerCss:{"margin":"0 0 0 0","width":184,"height":249},originalCopy:[],iframe:$("<iframe>",{"width":184,"height":249,"FRAMEBORDER":0,"MARGINWIDTH":0,"MARGINHEIGHT":0,"SCROLLING":"no","class":"ad-placement-iframe"})}});$.widget("mi.adaraSearch",$.mi.adara,{options:{datakey:"adara",targets:$("#search-book-right .book-right-holder"),tracking:{"requests":$("input:hidden.bt-ad-placement-src-url"),"target":$("#bt-audience-tracking-script")},containerCss:{"padding":"0 0 10px 0","margin":"0 0 0 0","width":450,"height":52},originalCopy:[],iframe:$("<iframe>",{"width":450,"height":52,"FRAMEBORDER":0,"MARGINWIDTH":0,"MARGINHEIGHT":0,"SCROLLING":"no","class":"ad-placement-iframe"})}});$.widget("mi.adaraHws",$.mi.adara,{options:{datakey:"adara",targets:$("#hws-reservation-module .book-right-holder"),tracking:{"requests":$("input:hidden.bt-ad-placement-src-url"),"target":$("#bt-audience-tracking-script")},originalCopy:[],iframe:$("<iframe>",{"width":180,"height":100,"FRAMEBORDER":0,"MARGINWIDTH":0,"MARGINHEIGHT":0,"SCROLLING":"no","class":"ad-placement-iframe"})}});$.widget("mi.adaraModifyRes",$.mi.adara,{options:{datakey:"adara",targets:$("#layout-nav >div[class|='msg']").has('img[src*=Book_Right]'),tracking:{"requests":$("input:hidden.bt-ad-placement-src-url"),"target":$("#bt-audience-tracking-script")},containerCss:{"margin":"0 0 0 0","width":180,"height":259},originalCopy:[],iframe:$("<iframe>",{"width":180,"height":259,"FRAMEBORDER":0,"MARGINWIDTH":0,"MARGINHEIGHT":0,"SCROLLING":"no","class":"ad-placement-iframe"})}});$.widget("mi.dreamTrackerButton",$.mi.miButton,{options:{},_create:function(){var self=this;$.mi.miButton.prototype._create.call(self);self.element.addClass("dream-tracker-button");}});$.widget("mi.loginDialog",$.mi.miDialog,{options:{reloadPath:"/login-dialog/default.mi",returnToField:"returnUrl",returnTo:$("a",{"href":window.location.pathname+window.location.search+window.location.hash}),$form:null},_create:function(){var self=this;this._appendReturnTo();$.mi.miDialog.prototype._create.call(self);self.element.on({"click":$.proxy(self,"clearRememberMe")},"a[href='/clearRememberMe.mi']",null);self.element.closest(".ui-dialog").addClass("login-dialog").on({"logindialogdirty":$.proxy(self,"reload"),"logindialogrefreshed":$.proxy(self,"_setReturnTo")},null,null);},getReturnTo:function(){return $("input[name='"+self.options.returnToField+"']",self.options.$form).val();},_setReturnTo:function(event){this.setReturnTo(this.options.returnTo);},setReturnTo:function(anchor){var self=this;if(anchor){var value=anchor
if(anchor.href){value=anchor.pathname;if(anchor.search){value+=anchor.search;}
if(anchor.hash){value+=anchor.hash;}}
$("input[name='"+self.options.returnToField+"']",self.options.$form).val(value);this._trigger("returnto");}},clearRememberMe:function(event){var self=this,$anchor=$(event.target);event.preventDefault();$.post($anchor.attr("href")).complete($.proxy(self,"_triggerDirty"));},reload:function(event){var self=this;if(self.options.reloadPath){self.element.load(self.options.reloadPath,$.proxy(self,"_triggerRefreshed"));}else{self._trigger("refresh");}},_appendReturnTo:function(){var self=this;self.options.$form=$("form",self.element);if($("input[name='"+self.options.returnToField+"']",self.options.$form).length===0){self.options.$form.append("<input type='hidden' name='"+self.options.returnToField+"' value='"+window.location.pathname+window.location.search+window.location.hash+"'/>");}},_triggerDirty:function(){this._trigger("dirty");},_triggerRefreshed:function(){this._appendReturnTo();this._trigger("refreshed");}});$.widget("mi.dreamTracker",{options:{ajax:null,$button:null,$dialog:null},_create:function(){var self=this;if(!self.options.$button){self.options.$button=$(".award-dream-tracker-button",self.element);}
self.options.$button.dreamTrackerButton();if(!self.options.$dialog){self.options.$dialog=$(".dream-tracker-dialog",self.element);}
self.options.$dialog.miDialog({"close":$.proxy(self._dialogclose,self)});if(self.options.ajax){self.element.on({"click":$.proxy(self._post,self)},".dream-tracker-button",null);}
self.element.addClass("dream-tracker");self._trigger("created");},_post:function(event){var self=this,spinner=$("<div>").css({"background":"url(/Images/CSS_Backgrounds/loading.gif) 50% 50% no-repeat","height":"100px"});self.element.empty().append(spinner);$.post(self.options.ajax).success(function(data){self.element.empty().append(data);}).error(function(data){self.element.empty().append(data);}).complete(function(){self._trigger("posted");});}});﻿
var $locale={};jQuery(function($){$.widget("mi.locale",{options:{'es':$.datepicker.regional["es"],'en-AU':$.datepicker.regional["en-AU"],'pt-BR':$.datepicker.regional["pt-BR"],'fr':$.datepicker.regional["fr"],'zh-CN':$.datepicker.regional["zh-CN"],'de':$.datepicker.regional["de"],'ko':$.datepicker.regional["ko"],'ja':$.datepicker.regional["ja"],'en-GB':$.datepicker.regional["en-GB"],desiredLocale:$("html").attr("xml:lang")},_activeLocale:null,_create:function(){this.options['en-US']=$.datepicker.regional[""];this.options['en-US'].closeText="Close";this.options['en-US'].dateFormat="mm/dd/y";this.options['fr-FR']=this.options['fr'];this.options['de-DE']=this.options['de'];this.options['ko-KR']=this.options['ko'];this.options['ja-JP']=this.options['ja'];for(var i in this.options){$.datepicker.regional[i]=this.options[i];}
if(!this.options.desiredLocale){this.options.desiredLocale=$("html").attr("lang");if(!this.options.desiredLocale){}}
this._activeLocale=this.setActiveLocale(this.options.desiredLocale);this._trigger("created");},getActiveLocale:function(){return this._activeLocale;},setActiveLocale:function(locale){var previous=this._activeLocale;this._activeLocale=this.options[locale];if(this._activeLocale){$.datepicker.setDefaults(this._activeLocale);this._trigger("changed");}else{this._activeLocale=previous;}
return this._activeLocale;},getLocale:function(locale){return locale?this.options[locale]:null;},getDateFormat:function(){return this._activeLocale?this._activeLocale.dateFormat:null;},parseDate:function(text){var date=null;try{date=$.datepicker.parseDate(this.getDateFormat(),text,this._activeLocale);}catch(err){$.datepicker.log(err);}
return date;},formatDate:function(date){return $.datepicker.formatDate(this.getDateFormat(),date,this._activeLocale);},dayDifference:function(one,two){var difference=0;if(one&&one.getTime&&two&&two.getTime){difference=Math.abs(one.getTime()-two.getTime());difference=Math.round(difference/1000/60/60/24);}
return difference;},_setOption:function(key,value){$.Widget.prototype._setOption.apply(this,arguments);switch(key){case"desiredLocale":this.setActiveLocale(value);break;}}});$locale=$("body").locale();});$.widget("mi.buyPointsDialog",$.mi.miDialog,{options:{minWidth:500,minHeight:231},_create:function(){var self=this;$.mi.miDialog.prototype._create.call(self);self.element.closest(".ui-dialog").addClass("buy-link");}});$.widget("mi.awardOrderSlider",$.mi.miSlider,{options:{container:$("<div>",{"class":"slider-award-order-container"}),minus:$("<div>",{"class":"slider-award-order-minus"}),plus:$("<div>",{"class":"slider-award-order-plus"}),max:10,min:1,value:1},_create:function(){var self=this;if(self.options.container){self.options.container=self.options.container.clone();}else{self.options.container=$("<div>",{"class":"slider-award-order-container"});}
if(self.options.minus){self.options.minus=self.options.minus.clone();}else{self.options.minus=$("<div>",{"class":"slider-award-order-minus"});}
if(self.options.plus){self.options.plus=self.options.plus.clone();}else{self.options.plus=$("<div>",{"class":"slider-award-order-plus"});}
self.element.wrap(self.options.container.clone()).before(self.options.minus).after(self.options.plus);self.options.minus.miButton({icons:{primary:'ui-icon-minus'}});self.options.minus.addClass("ui-state-disabled");self.options.plus.miButton({icons:{primary:'ui-icon-plus'}});$.mi.miSlider.prototype._create.call(self);self.element.addClass("slider-award-order");self.options.minus.on({"click":$.proxy(self.minus,self)},null,null);self.options.plus.on({"click":$.proxy(self.plus,self)},null,null);self.element.on({"awardordersliderchange":$.proxy(self._checkUiState,self)},null,null);self._trigger("created");},_checkUiState:function(event,ui){var self=this;if(ui.value===self.options.min){self.options.minus.addClass("ui-state-disabled");}else if(ui.value>self.options.min&&self.options.minus.is(".ui-state-disabled")){self.options.minus.removeClass("ui-state-disabled");}
if(ui.value===self.options.max){self.options.plus.addClass("ui-state-error");}else if(ui.value<self.options.max&&self.options.plus.is(".ui-state-error")){self.options.plus.removeClass("ui-state-error");}},minus:function(){var self=this,e=$.Event("minus");self.value(self.value()-self.options.step);self._trigger("minus",e,self._ui());},plus:function(){var self=this,e=$.Event("plus");self.value(self.value()+self.options.step);self._trigger("plus",e,self._ui());},_ui:function(){var self=this,options=self.options;options.slider=self.element;return options;}});$.widget("mi.awardDescriptionTabs",$.mi.miTabs,{options:{cache:true,collapsible:true,owner:null},_create:function(){var self=this;if(self.options.owner&&self.options.owner.search){$(".award-description-tabs-1,.award-description-tabs-2,.award-description-tabs-3,.award-description-tabs-4",self.element).each(function(index,elem){$(this).attr("href",$(this).attr("href")+self.options.owner.search);})}
$.mi.miTabs.prototype._create.call(self);self.element.addClass("mi-award-description-tabs");}});$.widget("mi.awardOrderTabs",$.mi.miTabs,{options:{selected:-1,disabled:[1,2],cache:true,owner:null},_create:function(){var self=this;if(self.options.owner&&self.options.owner.search){$(".award-process-tabs-step-1,.award-process-tabs-step-2,.award-process-tabs-step-3",self.element).each(function(index,elem){$(this).attr("href",$(this).attr("href")+self.options.owner.search);});}
$.mi.miTabs.prototype._create.call(self);self.element.addClass("mi-award-order-tabs");self.element.on({"awardordertabsload":$.proxy(self.loadManager,self),"validate":$.proxy(self.validate,self)},null,null).on({"change":$.proxy(self.update,self)},".slider :input",null).on({"change":$.proxy(self.countryChange,self)},"select[name='country']",null).on({"keypress":$.proxy(self.validateStep1,self)},"input[name='frequentFlyerNumber']",null).on({"click":$.proxy(self.validateStep1,self)},".order-continue",null).on({"click":$.proxy(self.editAddress,self)},".edit-address a",null).on({"click":$.proxy(self.submit,self)},".order-submit",null).on({"click":function(event){var panel=$(event.target).closest(".ui-tabs-panel");$(".review-shipping-information",panel).toggle();$(".review-edit-address-container",panel).toggle();$(".review-edit-address-container :input",panel).each(function(index,elem){var listener=$("."+$(this).attr("name")+"-listener",panel),data=listener.data("original"),text=$(this).val();if(data&&data.code&&data.description){var option=$("option:selected",$(this));data.code=option.val();data.description=option.text();text=data.description;}else{data=text;}
listener.data("original",data);listener.text(text);});}},".edit-address-update",null).on({"click":function(event){$(".review-shipping-information",self.element).toggle();$(".review-edit-address-container",self.element).toggle();$(".review-edit-address-container :input",self.element).each(function(index,elem){var listener=$("."+$(this).attr("name")+"-listener"),data=listener.data("original"),text=data;if(data&&data.code){text=data.code;}
$(this).val(text);});}},".edit-address-cancel",null);},countryChange:function(event){var self=this,value=$(event.target).val(),$form=$(event.target.form),stateZip=$(":input[name='stateProvince'],:input[name='postalCode']",$form);$stateField=$form.find(':input[name=stateProvince]');if($stateField.val().length>0){$stateField.val("");}
if(value=="US"||value=="CA"){$stateField.attr('maxLength',2);stateZip.prop("disabled",false);stateZip.parent().show();}else{$stateField.attr('maxLength',4);stateZip.prop("disabled",true);stateZip.parent().hide();}},editAddress:function(event){var self=this;if(event){event.preventDefault();}
$(".review-shipping-information",self.element).toggle();$(".review-edit-address-container",self.element).toggle();},loadManager:function(event,ui){var self=this,panel=$(ui.panel);if(ui.index===0){if(!(self.options.descriptionTabs&&self.options.descriptionTabs.is(".mi-award-order-tabs"))){self.options.descriptionTabs=$(".award-description-tabs-container",panel);self.options.descriptionTabs.awardDescriptionTabs({"owner":self.options.owner,"spinner":self.options.descriptionTabs.data("loading")});if(self.options.descriptionTabs.awardDescriptionTabs("option","selected")<0){self.options.descriptionTabs.awardDescriptionTabs("select",0);}
if(self.options.owner&&!((self.options.includesText)||self.options.awardText)){var include=$(self.options.owner).closest("tr").find("td:first").text();if(include){self.options.includesText=include;}
self.options.awardText=$(".summary-reward-description",panel).find("p:first *:first-child").text();}
$(".from-parent-page-includes",panel).text(self.options.includesText);$(".from-parent-page-awards",panel).text(self.options.awardText);if(self.options.subCatagoryName){$("h2:first",panel).text(self.options.subCatagoryName);}
self._trigger("created");}}else if(ui.index===1){var firstPanel=self.element.children(".ui-tabs-panel").eq(0),orderContainer=$(".order-container",firstPanel).clone(),profileReviewContainer=$(".review-profile-information",panel).clone(),reviewContainer=$('.order-review-container',panel);$(".airlineProgram-listener",orderContainer).text($(".order-description-line-3 select option:selected",$(".order-container",firstPanel)).text());$(".frequentFlyerNumber-listener",orderContainer).text($(".order-description-line-4 input",$(".order-container",firstPanel)).val());$(".order-description-line-3-text-only,.order-description-line-4-text-only",orderContainer).show();$(".order-description-line-3 label,.order-description-line-4 label",orderContainer).remove();$(".slider",orderContainer).remove();if(reviewContainer.length===0){reviewContainer=$('<div class="order-review-container"/>');reviewContainer.appendTo($('.review-shipping-information',panel));}else{reviewContainer.empty();}
reviewContainer.append(orderContainer).find(".slider-award-order-container,.order-continue").hide().end().find(".order-submit").show();$(".review-edit-address-container :input",panel).each(function(index,elem){var listener=$("."+$(this).attr("name")+"-listener");if($(this).is("select")){listener.data("original",{"code":$("option:selected",$(this)).attr("value"),"description":$.trim($("option:selected",$(this)).text())});}else{listener.data("original",$(this).val());}});$(".review-shipping-information",panel).trigger("validate");}else if(ui.index===2){var secondPanel=self.element.children(".ui-tabs-panel").eq(1),orderContainer=$(".order-container",secondPanel).clone(),tfoot=$("<tr class='confirmation-points-summary'><th class='order-first-column c1a'>"+$(".confirmation-points-after-label",panel).text()+"</th><th class='order-total-points'>"+$(".confirmation-points-after-text",panel).text()+"</th></tr>");$("tfoot",orderContainer).append(tfoot);$(".confirmation-order-container",panel).append(orderContainer).find(".continue-container").hide();var confOrderContainer=$(".confirmation-order-container",panel);confOrderContainer.append(orderContainer).find(".continue-container").hide();if(confOrderContainer.length>0){$('.dialog-award-order-print',self.option.owner).css('visibility','visible').find('button').click(function(){window.print();});self.options.delayedDestroy=true;self.disable(0);self.disable(1);}}},submit:function(event){var self=this,deferred=null;if(!$(event.target).is(".ui-state-disabled")){$(event.target).addClass("ui-state-disabled");deferred=self.validate(event);deferred.always(function(data,status,jqXhr){var panel=$(event.target).closest(".ui-tabs-panel");if($(".error",self.element).length==0){event.url="/redemption/ajax/submit.mi";var submit=self.validate(event);submit.always(function(data,status,jqXhr){$(event.target).removeClass("ui-state-disabled");if($(".error",self.element).length==0){self.enable(2);self.select(2);}else{self.editAddress(event);}});}else{self.editAddress(event);}});}else{$(event.target).effect("highlight");}},validate:function(event){var self=this,panel=$(event.target).closest(".ui-tabs-panel"),$form=self.element.closest("form"),url=(event.url)?event.url:"/redemption/ajax/validate.mi";$(".ui-state-error",$form).removeClass("ui-state-error");panel.find(".error").remove();var deferred=$.post(url,$form.serialize());deferred.done(function(data,status,jqXhr){var errors=$.parseJSON(data),hasErrors=false;$.each(errors,function(index,elem){hasErrors=true;$.each(elem,function(key,value){var input=$(":input[name='"+value.field+"']",self.element),message=$("<p>",{"class":"error ui-state-error"}).text(value.message);if(input.length===0){panel.prepend(message);}else{input.closest("label").prepend(message);}});});if(hasErrors&&$(event.target).is(".review-shipping-information")){self.editAddress(event);}});return deferred;},validateStep1:function(event){if(event.type=="keypress"){if(event.keyCode==13){event.preventDefault()}else{return;}}
var self=this,input=$("select[name='airlineProgram'],input[name='frequentFlyerNumber']",self.element),deferred=null;if(input.length>0){deferred=self.validate(event);}
if(deferred){deferred.complete(function(){var panel=$(".ui-tabs-panel",self.element).eq(0);$("> .error",panel).remove();if($(".error",panel).length==0){self.enable(1);self.select(1);}});}else{self.enable(1);self.select(1);}},totalCostIssue:function(event){var self=this;if(!self.quantityErrorDialog){self.quantityErrorDialog=$(event.data.container,self.element).miDialog();}
self.quantityErrorDialog.miDialog("open");},multiplyText:function(str,multiplier){var points=parseInt(str,10),regex=/\D/,delimiter=regex.exec(str),orderOfMagnitude=(delimiter)?str.split(delimiter).slice(1):1,result=multiplier*points;while(Math.floor(result/1000)!=0){var remainder=(new Number(result%1000)).toString();result=Math.floor(result/1000);while(remainder.length<3){remainder="0".concat(remainder);}
orderOfMagnitude.unshift(remainder);}
result=result+delimiter+orderOfMagnitude.join(delimiter);return result;},update:function(event){var self=this,costtext=$(".slider",self.element).attr("data-costtext"),cost=self.multiplyText(costtext,$(event.target).val());$(".quantity-listener",self.element).not("input").text($(event.target).val()).end().filter("input").each(function(index,elem){$(this).val($(event.target).val());});$(".points-listener",self.element).text(cost);}});$.widget("mi.adaraModRezGuestInfo",$.mi.adaraModifyRes,{});$.widget("mi.adaraModRezRoomPrefs",$.mi.adaraModifyRes,{});$.widget("mi.adaraModRezRemoveRoom",$.mi.adaraModifyRes,{});$.widget("mi.adaraModRezRoomType",$.mi.adaraModifyRes,{});$.widget("mi.adaraUpcomingRes",$.mi.adaraModifyRes,{});$.widget("mi.awardOrderDialog",$.mi.miDialog,{options:{minWidth:700,minHeight:550,owner:null,processTabs:null,descriptionTabs:null,dreamTracker:null},_create:function(){var self=this;$.mi.miDialog.prototype._create.call(self);self.element.closest(".ui-dialog").addClass("dialog-award-order");if(self.options.owner&&self.options.owner.search){self.options.dreamTracker=$(".award-dream-tracker",self.element);self.options.dreamTracker.dreamTracker({"ajax":"/rewards/dreamRewardsTracker/addNonHotelReward.mi"+self.options.owner.search});self.options.processTabs=$(".award-process-tabs-container",self.element);self.options.processTabs.awardOrderTabs({"owner":self.options.owner,"spinner":self.options.processTabs.data("loading"),"subCatagoryName":$(self.options.owner).closest(".article-content").find("h2").text()});self.element.on({"click":function(event){self.close();}},".order-cancel",null);}},open:function(event,ui){var self=this;if(self.options.processTabs.awardOrderTabs("option","selected")<0){self.options.processTabs.awardOrderTabs("select",0);}
$.mi.miDialog.prototype.open.call(self);},close:function(event,ui){var self=this,processTabs=self.options.processTabs,reload=(processTabs)?processTabs.awardOrderTabs("option","delayedDestroy"):false;$.mi.miDialog.prototype.close.apply(self);if(reload===true){window.location.hash="";window.location.reload();}}});$.widget("mi.awardOrderLoginDialog",$.mi.loginDialog,{_create:function(){var self=this;$.mi.loginDialog.prototype._create.call(self);self.element.closest(".ui-dialog").addClass("award-order-login-dialog").off("logindialogdirty").on({"awardorderlogindialogdirty":$.proxy(self,"reload"),"awardorderlogindialogrefreshed":$.proxy(self,"_setReturnTo")},null,null);}});$.widget("mi.chaseLoginDialog",$.mi.loginDialog,{options:{width:450},_create:function(){var self=this;$.mi.loginDialog.prototype._create.call(self);var dialogClassName="chase-login-dialog t-bg-wht";if(self.options.ritzPreferredProgram){dialogClassName="chase-login-dialog ritz-login-dialog t-bg-wht";}
self.element.closest(".ui-dialog").addClass(dialogClassName).off("logindialogdirty").on({"chaselogindialogdirty":$.proxy(self,"reload")},null,null);}});﻿
$(function(){$.widget("mi.miDatePicker",{options:{datepicker:{showButtonPanel:true,showOn:"both",buttonImage:"/Images/Icons/Calendar/icon-calendar-white.png",buttonImageOnly:true,buttonText:"",changeMonth:true,changeYear:true,constrainInput:true,numberOfMonths:2,beforeShow:function(input,inst){var calendar=$(input).data("calendar");var options=calendar.options;return options;},onSelect:function(selectedDate,instance){var $linked=$(this).miDatePicker("getLinked",this);var arrivalDate=$("input[name='fromDate']",$(this.form)).val();var tpDefaultRange=$("input[name='defaultToDateDays']",$(this.form)).val();var trigEvent=$.Event("refresh");if($(this).is(".calendar-module-fromdate")){trigEvent.range=parseInt(tpDefaultRange,10);}
trigEvent.date=$locale.locale("parseDate",selectedDate);$linked.trigger(trigEvent);}}},_create:function(){var self=this;self.widgetEventPrefix="calendar_";$.extend(self.options.datepicker,$locale.locale("getActiveLocale"));self.element.datepicker(self.options.datepicker);self.element.each(function(index,elem){var startDate=$("input[name='minDate'][type='hidden']",elem.form).val(),endDate=$("input[name='maxDate'][type='hidden']",elem.form).val();if(startDate&&startDate!==""){startDate=new Date(startDate);}
if(endDate&&endDate!==""){endDate=new Date(endDate);}
if(startDate&&endDate){if($(this).is(".calendar-module-todate")){startDate.setDate(startDate.getDate()+1);}else{endDate.setDate(endDate.getDate()-1);}
$(elem).data("calendar",{"options":{"minDate":startDate,"maxDate":endDate}});}}).on({"refresh":function(event){var currentDate=$(this).datepicker("getDate");if(event.date&&(event.range||event.range===0)){if(!currentDate||(event.range<=0&&currentDate>=event.date)||(event.range>=0&&currentDate<=event.date)){event.date.setDate(event.date.getDate()+event.range);$(this).datepicker("setDate",event.date);}}}},null,null);if(self.element.size()>0){var df=$locale.locale("getDateFormat"),localeDateSeperator=(df)?df.match("\\W")[0]:"/",localeDateSeperatorCode=localeDateSeperator.charCodeAt(0);dfSections=(df)?df.split(localeDateSeperator):[],dfRegExes={};for(var i=0,totalLength=0;i<dfSections.length-1;i++,totalLength++){if(dfSections[i]=="y"){dfRegExes[i]=/\d{4}/;}else if(dfSections[i]=="yy"){dfRegExes[i]=/\d{4}/;}else if(dfSections[i]=="dd"){dfRegExes[i]=/([012]\d|3[01])/;}else if(dfSections[i]=="mm"){dfRegExes[i]=/(0\d|1[012])/;}}
self.element.next(".ui-datepicker-trigger").css({"visibility":"hidden"}).wrap("<div class='ui-datepicker-trigger'>").end().on({"keyup":function(event){if(event.which&&event.which!=8){var value=$(this).val(),entryArray=value.split(localeDateSeperator),testIndex=entryArray.length-1;if(testIndex>-1&&dfRegExes[testIndex]&&dfRegExes[testIndex].test(entryArray[testIndex])){$(this).val(value+localeDateSeperator);}}},"keypress":function(event){var value=$(this).val();if(event.which==localeDateSeperatorCode&&value&&value.lastIndexOf(localeDateSeperator)==value.length-1){event.preventDefault();}},"focusout":function(event){var $linked=self.getLinked(this);var e=$.Event("refresh");e.date=$locale.locale("parseDate",$(this).val());$linked.trigger(e);}},null,null).closest('form').on({"click":function(event){$(this).prev(self.element.selector).datepicker("show");}},".ui-datepicker-trigger",null);}
self._trigger("created");},getLinked:function(elem){var $form=$(elem.form);var $linked=$(".calendar-module-todate",$form);if($form.is("#groupSalesForm")&&$(elem).is(".calendar-module-fromdate")){var dateFields=$(elem).parents("#groupSalesForm").find(".hasDatepicker");var isFoundClickedDateField=false;$(dateFields).each(function(){if(isFoundClickedDateField&&$(this).is(".calendar-module-todate")){$linked=$(this);return false;}
if($(this).attr("id")==$(elem).attr("id")){isFoundClickedDateField=true;}});}
if($(elem).is(".calendar-module-todate")){$linked=$(".calendar-module-fromdate",$form);}
return $linked;},alterDateRange:function(json){var self=this,options=self.element.data("calendar");if(options){$.extend(options.options,json);self.element.data("calendar",options);}
return options;}});var $datepickers=$('input.calendar-module-fromdate, input.calendar-module-todate');$datepickers.miDatePicker();});$.widget("mi.inputPlaceholder",{options:{className:"l-ie-placeholder",hideClassName:"t-ie-placeholder-hidden"},_create:function(){if(typeof(window.Modernizr)!=="undefined"&&!Modernizr.input.placeholder){this.text=this.element.attr('placeholder');this.id=this.element.attr('id');this.placeholder=$('<span>').insertBefore(this.element).addClass(this.options.className).attr("id",this.id+"-placeholder").text(this.text);this.titleNeeded=(this.placeholder.width()>this.element.width());if(this.titleNeeded){this.placeholder.attr('title',this.text);}
this._positionPlaceHolder(this.placeholder,this.element);this.element.data('placeholder',this.placeholder);this.placeholder.data('input',this.element);this.placeholder.on('click',function(){$(this).data('input').focus();});this.element.on({focusin:$.proxy(this._elementFocusin,this),focusout:$.proxy(this._elementFocusout,this)});this._showPlaceHolder(this.element,this.options);if(this.element.is(":focus")){this._hidePlaceHolder(this.element,this.options);}}},_elementFocusin:function(e){this._hidePlaceHolder(this.element,this.options);},_elementFocusout:function(e){this._showPlaceHolder(this.element,this.options);},_showPlaceHolder:function(input,options){if(input.val()===''){input.data('placeholder').removeClass(options.hideClassName);}else{input.data('placeholder').addClass(options.hideClassName);}},_hidePlaceHolder:function(input,options){input.data('placeholder').addClass(options.hideClassName);},_positionPlaceHolder:function(placeholder,input){var pt=parseFloat(input.css('padding-top'));var pl=parseFloat(input.css('padding-left'));var offset=input.offset();if(pt){offset.top+=pt;}
if(pl){offset.left+=pl;}
placeholder.css({width:input.innerWidth()-4,height:input.innerHeight()-6,lineHeight:input.css('line-height'),whiteSpace:'nowrap',overflow:'hidden'}).offset(offset);}});;(function($,undefined){$.widget('mi.carousel',$.mi.baseResponsiveWidget,{options:{auto:{play:false},items:{start:0},width:"variable",height:"variable",responsive:false,pagination:"",prev:{},next:{},scroll:{fx:"none"},swipe:{onMouse:true,onTouch:true},css:{"width":"100%"}},_buildWidget:function(){this._initializeWidget();},_initializeWidget:function(){var widget=this;$.fn.swipe.defaults.excludedElements="label, button, input, select, textarea, .noSwipe";widget.element.data('is-active',false);this.carouselElement=widget.element.find('.is-carousel').addClass('t-widget-carousel');},activate:function(){var widget=this;if(!widget.element.data('is-active')){widget.carouselElement.addClass("is-carousel-active");var carouselPlacement=widget.carouselElement.data("placement");widget.element.children(".is-carousel-pagination:first").show();widget.carouselElement.carouFredSel(widget.options).css(widget.options.css);widget.element.data('is-active',true);}},deactivate:function(){var widget=this;if(widget.element.data('is-active')){widget.carouselElement.trigger("destroy",true).removeClass("is-carousel-active");widget.carouselElement.removeClass('t-widget-carousel');widget.element.data('is-active',false);}}})}(jQuery));;(function($,undefined){$.widget('mi.drawer',$.mi.baseResponsiveWidget,{options:{drawerHeaderClass:'t-drawer-handle',drawerContentClass:'t-drawer-content',drawerContentId:'t-drawer-content-id',drawerOpenIconClass:'icon-drawer-open',drawerCloseIconClass:'icon-drawer-close',isOpen:false,beforeActivate:null,afterActivate:null,beforeDeactivate:null,afterDeactivate:null,preventOpenOnClick:false,preventCloseOnClick:false,jsTransitions:true},_buildWidget:function(){this._initializeWidget();this._bindEvents();return this;},_initializeWidget:function(){var el=$('<div/>').addClass("t-widget-drawer").addClass(this.options.widgetStyle);var widget=this;this.header=widget.element.find('[data-drawer-heading]');this.content=this.header.next('[data-drawer-content]');$(this.header).add(this.content).wrapAll(el.clone());this.widgetContainer=this.element.find('.t-widget-drawer');this.widgetContainer.data('is-active',false);return this;},_bindEvents:function(){var widget=this;widget.element.on('click.drawer','.is-drawer-active [data-drawer-heading]',$.proxy(widget._handleClickEvent,widget));return this;},_handleClickEvent:function(e){e.preventDefault();if(this.options.isOpen&&!this.options.preventCloseOnClick){this._close();}else if(!this.options.isOpen&&!this.options.preventOpenOnClick){this._open();}
return this;},_prepareIconStyleClasses:function(){var iconOpenClass=this.options.drawerOpenIconClass,iconCloseClass=this.options.drawerCloseIconClass,iconOpenOverride=(this.header.data("drawer-icon-open")||""),iconCloseOverride=(this.header.data("drawer-icon-close")||"");if(typeof iconOpenOverride!=="undefined"&&iconOpenOverride!=""){iconOpenClass=iconOpenOverride;}
if(typeof iconCloseOverride!=="undefined"&&iconCloseOverride!=""){iconCloseClass=iconCloseOverride;}
return{icon:{open:iconOpenClass,close:iconCloseClass}}},_setOpenedDrawerAttrs:function(){var styleClasses=this._prepareIconStyleClasses();this.element.attr('data-drawer-state','open');this.header.addClass("is-opened");this.header.find(".js-icon-drawer:first").removeClass(styleClasses.icon.open).addClass(styleClasses.icon.close);this.header.attr("aria-expanded","true");this.content.attr("aria-expanded","true");return this;},_open:function(){var widget=this;this.options.isOpen=true;this._trigger("beforeOpen",null,{"widgetContainer":widget.widgetContainer,"$el":widget.element});this._setOpenedDrawerAttrs();if(!!this.options.jsTransitions){switch(this.options.jsTransitions){case'slide':this.content.slideDown();break;default:this.content.show();}}
this._trigger("afterOpen",null,{"widgetContainer":widget.widgetContainer,"$el":widget.element});return this;},_setClosedDrawerAttrs:function(){var styleClasses=this._prepareIconStyleClasses();this.element.attr('data-drawer-state','closed');this.header.removeClass("is-opened");this.header.find(".js-icon-drawer:first").removeClass(styleClasses.icon.close).addClass(styleClasses.icon.open);this.header.attr("aria-expanded","false");this.content.attr("aria-expanded","false");return this;},_close:function(){var widget=this;this.options.isOpen=false;this._trigger("beforeClose",null,{"widgetContainer":widget.widgetContainer,"$el":widget.element});this._setClosedDrawerAttrs();if(!!this.options.jsTransitions){switch(this.options.jsTransitions){case'slide':this.content.slideUp();break;default:this.content.hide();}}
this._trigger("afterClose",null,{"widgetContainer":widget.widgetContainer,"$el":widget.element});return this;},open:function(){this._open();return this;},close:function(){this._close();return this;},activate:function(){var widget=this;if(!widget.widgetContainer.data('is-active')){this._trigger("beforeActivate",null,{"widgetContainer":widget.widgetContainer,"$el":widget.element});var iconPosition=(widget.header.data("drawer-icon-position")||""),iconAdditionalClass=(widget.header.data("drawer-icon-class")||""),contentId=widget.content.attr("id");if(typeof contentId==="undefined"){widget.content.attr("id",widget.options.drawerContentId);contentId=widget.options.drawerContentId;}
if(typeof iconPosition!=="undefined"&&iconPosition==="right"){iconPosition="l-float-right"}
else{iconPosition="l-float-left";}
widget.header.addClass(this.options.drawerHeaderClass).prepend('<span class="js-icon-drawer icon t-icon '+iconPosition+' '+iconAdditionalClass+'" />');widget.header.attr("role","button").attr("aria-controls",contentId);widget.content.addClass(this.options.drawerContentClass);var drawerState=widget.element.data('drawerState');if(typeof drawerState!=='undefined'){widget.options.isOpen=widget.element.data('drawerState')==='open'?true:false;}
if(widget.options.isOpen){this._setOpenedDrawerAttrs();}else{this._setClosedDrawerAttrs();if(!!widget.options.jsTransitions){widget.content.hide();}}
widget.widgetContainer.addClass('is-drawer-active');widget.widgetContainer.data('is-active',true);if(widget.element.hasClass("l-margin-bottom")){widget.element.addClass("js-edit-margin").removeClass("l-margin-bottom");}
this._trigger("afterActivate",null,{"widgetContainer":widget.widgetContainer,"$el":widget.element});}
return this;},deactivate:function(){var widget=this;if(widget.widgetContainer.data('is-active')){this._trigger("beforeDeactivate",null,{"widgetContainer":widget.widgetContainer,"$el":widget.element});widget.header.removeClass(this.options.drawerHeaderClass).removeClass('is-opened');widget.content.removeClass(this.options.drawerContentClass);widget.header.find('.js-icon-drawer').remove();widget.header.removeAttr("aria-expanded").removeAttr("aria-controls").removeAttr("role");widget.content.removeAttr("aria-expanded");if(!!widget.options.jsTransitions){widget.content.show();}
widget.widgetContainer.removeClass('is-drawer-active');widget.widgetContainer.data('is-active',false);if(widget.element.hasClass("js-edit-margin")){widget.element.removeClass("js-edit-margin").addClass("l-margin-bottom");}
this._trigger("afterDeactivate",null,{"widgetContainer":widget.widgetContainer,"$el":widget.element});}
return this;}});}(jQuery));;(function(window,$,undefined){var $window=null,$menuList=null,$menuButton=null,CONTENT_TAIL_CLASS='t-content-tail',contentWrapperTailHtml='<div class="'+CONTENT_TAIL_CLASS+'"></div>';$.widget('mi.siteMenu',{options:{namespace:'siteMenu',siteMenuClass:'nav-container',menuButtonClass:'m-menu',menuListWrapperClass:'t-primary-nav-wrapper',menuListClass:'m-primary-nav',menuLinkItemClass:'t-primary-nav-link',actionTrigger:'click',transitionDelay:450,$bodyWrapperEl:$('body'),$pageWrapperEl:$('#page-container, #page'),$siteHeaderEl:$('header'),stateMenuActiveClass:'is-menu-active',stateSelectedClass:'is-selected',isOpen:false,bleedMenu:true,beforeCreate:null,afterCreate:null,beforeDestroy:null,afterDestroy:null},_create:function(){this._setVars();this._trigger('beforeCreate',null,{});this._initializeWidget();this._bindEvents();this._trigger('afterCreate',null,{});},_setVars:function(){$window=$(window);$menuList=this.element.find('.'+this.options.menuListClass);$menuButton=this.element.find('.'+this.options.menuButtonClass);if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var ieVersion=new Number(RegExp.$1);if(ieVersion<=9){this.options.transitionDelay=0;}}},_initializeWidget:function(){this._prepareView();},_bindEvents:function(){var that=this;$menuButton.on(this.options.actionTrigger+'.'+this.options.namespace,function(event){event.preventDefault();that._toggleMenuVisibility();});$window.on('resize.'+this.options.namespace,$.proxy(function(event){if(this.options.isOpen){this._adjustMenuHeight(false);}},this));},open:function(){this._openMenu();},_openMenu:function(){this._trigger('beforeOpen',null,{});this.options.isOpen=true;$menuButton.addClass(this.options.stateSelectedClass);this._prepareView();},close:function(){this._closeMenu();},_closeMenu:function(){this._trigger('beforeClose',null,{});this.options.isOpen=false;$menuButton.removeClass(this.options.stateSelectedClass);$('.'+CONTENT_TAIL_CLASS).remove();this._prepareView();},_toggleMenuVisibility:function(){if(!this.options.isOpen){this._openMenu();}else{this._closeMenu();}},_prepareView:function(){this._setMenuStateClasses();this._setMenuItemsAccessibility();this._bleedMenu(true);},_setMenuStateClasses:function(){this.options.$bodyWrapperEl.toggleClass(this.options.stateMenuActiveClass,this.options.isOpen);this.element.toggleClass(this.options.stateSelectedClass,this.options.isOpen);},_setMenuItemsAccessibility:function(){var tabIndex=this.options.isOpen?'0':'-1';this.element.find('.'+this.options.menuLinkItemClass).attr('tabindex',tabIndex);$menuList.attr('aria-hidden',(this.options.isOpen?'false':'true'));},_bleedMenu:function(){if(this.options.isOpen){this._setPageOverflow('hidden');this._adjustMenuHeight(true);}else{this._bleedMenuDelayed();}},_bleedMenuDelayed:function(minHeight,overflow){var widget=this;setTimeout(function(){if(typeof minHeight!=='undefined'&&minHeight!==null){widget._setMenuMinHeight(minHeight);}
if(typeof overflow!=='undefined'&&overflow!==null){widget._setPageOverflow(overflow);}},widget.options.transitionDelay);},adjustMenuHeight:function(){if(this.options.isOpen){this._adjustMenuHeight(false);}},_adjustMenuHeight:function(isOpeningMenu){$('.'+CONTENT_TAIL_CLASS).remove();var windowHeight=$window.height(),pageHeight=this.options.$pageWrapperEl.height(),menuTop=$menuList.offset().top,menuHeight=$menuList.height()+menuTop,menuWrapperHeight=menuHeight;if(menuHeight<pageHeight){menuWrapperHeight=pageHeight;}
menuWrapperHeight=Math.max(menuWrapperHeight,windowHeight);if(menuHeight>pageHeight){$('footer').after(contentWrapperTailHtml);$('.'+CONTENT_TAIL_CLASS).css('height',menuWrapperHeight-pageHeight);}
this._setMenuMinHeight(menuWrapperHeight);if(isOpeningMenu&&this.options.transitionDelay>0){this._bleedMenuDelayed(menuWrapperHeight);}},_setMenuMinHeight:function(minHeight){$('.'+this.options.menuListWrapperClass).css('min-height',minHeight);},_setPageOverflow:function(overflow){this.options.$pageWrapperEl.css('overflow',overflow);},_destroy:function(){this._trigger('beforeDestroy',null,{});this._unbindEvents();this._trigger('afterDestroy',null,{});},_unbindEvents:function(){$menuButton.off('.'+this.options.namespace);$window.off('.'+this.options.namespace);}});}(this,this.jQuery));var miSetEqualHeight=function(options){var maxHeights={},maxHeightGroup,o={dataObjectName:"maxheight-group",heightType:"height"};o=$.extend(o,options||{});o.$o=$('[data-'+o.dataObjectName+']');o.$h=o.heightType;var setHeight;if(o.$o.length!=0){o.$o.each(function(i,el){maxHeightGroup=$(el).data(o.dataObjectName);if(!maxHeights.hasOwnProperty(maxHeightGroup)){maxHeights[maxHeightGroup]=0;}
if(o.$h=="outerHeight"){setHeight=$(this).outerHeight();}else if(o.$h=="innerHeight"){setHeight=$(this).innerHeight();}else{setHeight=$(this).height();}
maxHeights[maxHeightGroup]=Math.max(maxHeights[maxHeightGroup],setHeight);});for(var maxHeightGroup in maxHeights){$('[data-'+o.dataObjectName+'='+maxHeightGroup+']').css("min-height",maxHeights[maxHeightGroup]);}}
return false;}
$(function(){miSetEqualHeight();});$(function(){$("#search-forms,#edit-search-form,#find-meeting-form,#global-header-saved-hotel-search-form,#flash-card-form-saved-hotel-search-form,#find-a-hotel-form, #gs_edit-search-form, #search-meeting-space,#meeting-near-address-form,.booking-availability-form,#quick-group-form").placeholder();});$.widget("mi.placeholder",{options:{"$label":null,"placeholder":null,"IEoptions":{"isIE":(navigator.appName=='Microsoft Internet Explorer'),"colors":{"placeholder":"#333333","focused":"#333333"}}},_create:function(){$('form .search-forms-date-format').hide();var self=this;if(!self.options.$label){self.options.$label=$("label[for='"+self.element.attr("id")+"']",self.element.closest("form"));if(!self.options.$label||self.options.$label.length===0){self.options.$label=self.element.closest("label");}}
if(!self.options.placeholder){self.options.placeholder=self.options.$label.text();}
self.element.addClass("mi-placeholder");if(self.options.IEoptions.isIE===true){if(self.element.val()==""){self.element.css("color",self.options.IEoptions.colors.placeholder);self.element.val(self.options.placeholder);}
self.element.on({"focus":function(event){if(self.element.val()==self.options.placeholder){$("#search-forms,#edit-search-form,#find-meeting-form,#global-header-saved-hotel-search-form,#flash-card-form-saved-hotel-search-form,#find-a-hotel-form, #gs_edit-search-form, #search-meeting-space,#meeting-near-address-form,.booking-availability-form").removeClass('mi-placeholder');$("#search-forms,#edit-search-form,#find-meeting-form,#global-header-saved-hotel-search-form,#flash-card-form-saved-hotel-search-form,#find-a-hotel-form, #gs_edit-search-form, #search-meeting-space,#meeting-near-address-form,.booking-availability-form").find('input.hasDatepicker').val('');}}},null,null).closest("form").on({"submit":function(){if(self.element.val()==self.options.placeholder){self.element.val("");}}},null,null);}else{self.element.attr("placeholder",self.options.placeholder);}
$('input.hasDatepicker','#search-forms,#edit-search-form,#find-meeting-form,#global-header-saved-hotel-search-form,#flash-card-form-saved-hotel-search-form,#find-a-hotel-form, #gs_edit-search-form, #search-meeting-space,#meeting-near-address-form,.booking-availability-form,#quick-group-form').each(function(index,elem){if($(this).val()==""){var singleSearchDateFormat="("+$('input#single-search-date-format').val()+")";$(this).placeholder({"placeholder":singleSearchDateFormat});$(this).css('color','#333333');}});$('input.hasDatepicker').focusin(function(){var form=this.form;var placeholderText=$(this).attr('placeholder');if($(this).val()==""||$(this).val()==placeholderText){$(form).find('input.hasDatepicker').css('color','#000');$(form).find('input.hasDatepicker').attr({'placeholder':''});$(form).find('input.hasDatepicker').removeClass('mi-placeholder');}});}});
function addLoadEvent(func){var oldonload=window.onload;if(typeof window.onload!='function'){window.onload=func;}else{window.onload=function(){oldonload();func();}}}
function setDivElementHeight(id,id2){var heightContent=45;if(document.getElementById(id)!=null&&document.getElementById(id2)!=null){if(document.getElementById(id)){heightContent=document.getElementById(id).offsetHeight>heightContent?document.getElementById(id).offsetHeight:heightContent;}
if(document.getElementById(id2)){heightContent=document.getElementById(id2).offsetHeight>heightContent?document.getElementById(id2).offsetHeight:heightContent;}
document.getElementById(id).style.height=heightContent+"px";document.getElementById(id2).style.height=heightContent+"px";}}
function getWindowHeight(){var windowHeight=0;if(typeof(window.innerHeight)=='number'){windowHeight=window.innerHeight;}
else{if(document.documentElement&&document.documentElement.clientHeight){windowHeight=document.documentElement.clientHeight;}
else{if(document.body&&document.body.clientHeight){windowHeight=document.body.clientHeight;}}}
return windowHeight;}
function setWrapperHeight(){if(document.getElementById){var windowHeight=getWindowHeight();if(windowHeight>0){var pageWrapper=document.getElementById('pageWrapper');var bodyContainer=document.getElementById('body-container');if(pageWrapper&&bodyContainer){windowHeight=bodyContainer.offsetHeight>windowHeight?bodyContainer.offsetHeight:windowHeight;}
pageWrapper.style.height=windowHeight+'px';}}}
function fixMacIE(classname){var divs=document.getElementsByTagName("DIV");for(var d=0;d<divs.length;d++){if(divs[d].className.indexOf(classname)==0){divs[d].innerHTML+="<div class='mac-clearfix'> </div>";}}}
function init(){if(navigator.appVersion.indexOf('Mac')!=-1&&document.all){fixMacIE("clearfix");}}
function registerButtonEvents()
{if(!document.getElementsByTagName){return;}
var buttons=document.getElementsByTagName('button');if(!buttons){return;}
for(i=0;i<buttons.length;i++)
{buttons[i].onmouseover=changeButtonClass;buttons[i].onmouseout=changeButtonClass;}}
function changeButtonClass()
{var newButtonClass;var buttonClass=this.className;var buttonPattern=/-hover/;if(buttonPattern.test(buttonClass))
{newButtonClass=buttonClass.replace('-hover','');}
else
{newButtonClass=buttonClass.replace(buttonClass,buttonClass+'-hover');}
this.className=newButtonClass;}
function video(uri){var content=document.getElementById("content");var frame=document.createElement("IFRAME");frame.setAttribute("id","frame");frame.setAttribute("src",uri);frame.setAttribute("name","video-frame");frame.setAttribute("scrolling","no");frame.frameBorder="no";var photo=document.getElementById("photo");photo.style.display="none";photo.style.height="0px";if(!document.getElementById("frame"))
{content.appendChild(frame);}
frame.style.height="247px";frame.style.width="356px";frame.style.margin="15px 0 0 15px";var description=document.getElementById("description");description.style.height="180px";}
function WinOpen(sURL,sName,intTop,intLeft,intWidth,intHeight)
{var windowprops;if(null==sURL){alert("ERROR: WinOpen() requires a URL");return;}
if(null==sName)
sName='';if(null==intTop)
intTop=200;if(null==intLeft)
intLeft=200;if(null==intWidth)
intWidth=200;if(null==intHeight)
intHeight=200;windowprops="location=no,scrollbars=yes,menubar=no,toolbar=no,locationbar=no,resizable=yes,alwaysRaised=yes,height="+intHeight+",width="+intWidth+",left="+intLeft+",top="+intTop;return window.open(sURL,sName,windowprops);}
addLoadEvent(registerButtonEvents);var TAB_PARENT_SELECTED_STYLE_CLASS="topNavRollover";var TAB_PARENT_UNSELECTED_STYLE_CLASS="topNavRollout";var TAB_UNSELECTED_STYLE_CLASS="LeftNavItems";var TAB_SELECTED_STYLE_CLASS="LeftNavItemsHighLight";function selectTab(tab)
{var parentObject=(tab.parentElement)?tab.parentElement:tab.parentNode;changeObjectClass(tab,TAB_SELECTED_STYLE_CLASS);changeObjectClass(parentObject,TAB_PARENT_SELECTED_STYLE_CLASS);}
function selectTopNavTab(tab)
{var parentObject=(tab.parentElement)?tab.parentElement:tab.parentNode;changeObjectClass(tab,TAB_PARENT_SELECTED_STYLE_CLASS);changeObjectClass(parentObject,TAB_PARENT_SELECTED_STYLE_CLASS);}
function unselectTab(tab)
{var parentObject=(tab.parentElement)?tab.parentElement:tab.parentNode;changeObjectClass(tab,TAB_UNSELECTED_STYLE_CLASS);changeObjectClass(parentObject,TAB_PARENT_UNSELECTED_STYLE_CLASS);}
function unselectTopNavTab(tab)
{var parentObject=(tab.parentElement)?tab.parentElement:tab.parentNode;changeObjectClass(tab,TAB_PARENT_UNSELECTED_STYLE_CLASS);changeObjectClass(parentObject,TAB_PARENT_UNSELECTED_STYLE_CLASS);}
function changeObjectClass(object,styleClass)
{object.className=styleClass;}
function setWindowStatus(status)
{window.status=status;return true;}
function clearWindowStatus()
{return setWindowStatus("");}
function comboBoxNav(brandSelect)
{var theIndex=brandSelect.selectedIndex;if(brandSelect.options[brandSelect.selectedIndex].value!="null")
{top.location=(brandSelect.options[theIndex].value);}}
function sendto(country,brand,uri,popupCode)
{var brandName=new String(brand);var protocol=window.location.protocol;var forwardUrl=new String("");var usDomain=new String(".com");var protectedServ="/ProtectedServlet?returnTo=";if(brand==null||brand==""||brand=="no_brand"||brand=="default_domain"||brand.toLowerCase()=="marriott")
{brandName=window.location.host;if(brand=="default_domain"||brand.toLowerCase()=="marriott")
{var temp=new Array();temp=brandName.split(".",2);if(temp[0]=="www")
{if(temp[1]=="marriotthotels")
{brandName="www.marriott";}
else if(temp[1]=="espanol")
{tempLaca=brandName.split(".",3);brandName="www."+tempLaca[2];}
else
{brandName="www."+temp[1];}}
else if(temp[0]=="espanol")
{brandName=temp[1];}
else
{brandName=temp[0];}
brandName=brandName.concat(usDomain);}}
else
{brandName=brandName.toLowerCase();if(country==null||country=="")
{country=="us";}
country=country.toLowerCase();switch(country)
{case"br":brandName=brandName+".br";break;case"pt":brandName=brandName+".pt";break;case"fr":brandName=brandName+".fr";break;case"au":brandName=brandName+".com.au";break;case"kr":brandName=brandName+".co.kr";break;case"cn":brandName=brandName+".com.cn";break;case"nz":brandName=brandName+".co.nz";break;case"de":brandName=brandName+".de";break;case"jp":brandName=brandName+".co.jp";break;case"uk":brandName=brandName+".co.uk";break;case"mx":brandName=brandName+".com.mx";break;case"ar":brandName=brandName+".com.ar";break;case"cl":brandName=brandName+".cl";break;case"cr":brandName=brandName+".co.cr";break;case"do":brandName=brandName+".com.do";break;case"pe":brandName=brandName+".com.pe";break;case"ve":brandName=brandName+".co.ve";break;case"la1":case"la2":case"gt":case"ec":case"ni":case"uy":brandName="espanol.marriott.com";break;default:brandName=brandName+".com";break;}}
forwardUrl=protocol+"//"+brandName;var uriName=uri;if(uriName.indexOf(protectedServ)!=-1)
{var returnToUrl=escape(uriName.substring(uriName.indexOf("=")+1));uri=protectedServ+returnToUrl;}
if(uri!=null)
{if(uri.indexOf(forwardUrl)===-1)
{forwardUrl=forwardUrl+uri;}
else
{forwardUrl=uri;}}
var querystring=new String();querystring=window.location.search;queryArray=querystring.split("&");for(var i=0;i<queryArray.length;i++)
{var valuePair=queryArray[i];valuePair=valuePair.replace("/?","");var nameValArray=queryArray[i].split("=");if(nameValArray[0]=="JSESSIONID")
{if(forwardUrl.indexOf("?")==-1)
{forwardUrl=forwardUrl+"?"+nameValArray[0]+"="+nameValArray[1];}
else
{forwardUrl=forwardUrl+"&"+nameValArray[0]+"="+nameValArray[1];}}}
switch(popupCode)
{case"2":var protocol="http";if(uri.substr(0,protocol.length)==protocol)
{window.open(uri,"_blank");}
else
{window.open(forwardUrl,"_blank");}
break;case"3":window.open(forwardUrl,"_blank");break;case"4":window.open(forwardUrl,"_blank","width=235,height=206,scrollbars=no,menubar=no,toolbar=no,status=no,resizable=yes");break;case"5":window.open(forwardUrl,"_blank","width=383,height=585,scrollbars=yes,menubar=no,toolbar=no,status=no,resizable=yes");break;case"6":window.open(forwardUrl,"_blank","width=350,height=475,scrollbars=no,menubar=no,toolbar=no,status=no,resizable=yes");break;case"7":window.open(forwardUrl,"_blank","width=352,height=306,scrollbars=no,menubar=no,toolbar=no,status=no,resizable=yes");break;case"8":window.open(forwardUrl,"_blank","width=575,height=385,scrollbars=yes,menubar=no,toolbar=no,status=no,resizable=yes");break;case"9":window.open(forwardUrl,"_blank","width=570,height=560,scrollbars=yes,menubar=no,toolbar=no,status=no,resizable=yes");break;case"10":window.opener.location(forwardUrl);window.close();break;case"11":window.open(forwardUrl,"_blank","");window.close();break;case"12":window.open(forwardUrl,"imagePopUp","width=590,height=413,scrollbars=yes,menubar=no,toolbar=no,status=no,resizable=yes");break;case"13":window.open(forwardUrl,"_blank","width=630,height=500,scrollbars=yes,menubar=no,toolbar=no,status=no,resizable=yes");break;case"14":window.open(uri,"imagePopUp","width=572,height=410,scrollbars=yes,menubar=no,toolbar=no,status=no,resizable=yes");break;case"15":window.open(forwardUrl,"_blank","width=575,height=385,scrollbars=yes,menubar=yes,toolbar=yes,status=yes,resizable=yes");break;case"16":window.open(forwardUrl,"_blank","width=610,height=535,scrollbars=yes,menubar=no,toolbar=no,status=no,resizable=yes");break;case"17":window.open(forwardUrl,"_blank","width=500,height=480,scrollbars=no,menubar=no,toolbar=no,status=no,resizable=no");break;case"18":window.open(forwardUrl,"imagePopUp","width=590,height=472,scrollbars=yes,menubar=no,toolbar=no,status=no,resizable=yes");break;case"19":window.open(uri,"popUp","scrollbars=yes,menubar=yes,toolbar=yes,status=yes,resizable=yes");break;case"20":window.open(uri,"imagePopUp","width=552,height=480,scrollbars=no,menubar=no,toolbar=no,status=no,resizable=no");break;case"21":window.open(forwardUrl,"_blank","width=900,height=600,scrollbars=yes,menubar=no,toolbar=no,status=no,resizable=yes");break;case"22":window.open(forwardUrl,"_blank","width=400,height=250,scrollbars=yes,menubar=no,toolbar=no,status=no,resizable=yes");break;case"23":window.open(forwardUrl,"imagePopUp","width=753,height=660,scrollbars=yes,menubar=no,toolbar=no,status=no,resizable=yes");break;case"24":window.open(forwardUrl,"_blank","width=695,height=560,scrollbars=yes,menubar=no,toolbar=no,status=no,resizable=yes");break;case"25":window.open(uri,"_blank","width=570,height=560,scrollbars=yes,menubar=no,toolbar=no,status=no,resizable=yes");break;case"26":window.open(forwardUrl,"_blank","width=570,height=600,scrollbars=yes,menubar=no,toolbar=no,status=no,resizable=yes");break;case"27":window.open(forwardUrl,"_blank","width=570,height=220,scrollbars=yes,menubar=no,toolbar=no,status=no,resizable=yes");break;default:window.location.href=forwardUrl;break;}}
function getServerName()
{var url=(new String(document.URL)).toLowerCase();var colonSlashSlashLocation=url.indexOf("://");if(colonSlashSlashLocation<0)
return new String("marriott.com");var slashLocation=url.indexOf("/",colonSlashSlashLocation+3);if(slashLocation<0)
return new String("marriott.com");return url.substring(colonSlashSlashLocation+3,slashLocation);}
function buildLoginUrl(url)
{var returnUrl=new String(escape(document.URL));var loginUrl=new String(url+"?returnTo="+returnUrl);var serverName=new String(getServerName());var urlForServerNameCheck=(new String(url)).toLowerCase();if((urlForServerNameCheck.indexOf("http://"+serverName)==0)||(urlForServerNameCheck.indexOf("https://"+serverName)==0))
window.location.href=loginUrl;else
{serverName="https://"+serverName;if(loginUrl.charAt(0)!='/')
serverName=serverName+"/";window.location.href=serverName+loginUrl;}}
function addParameterToQuerystring(url,paramName,paramValue,returnOrForward)
{var host=window.location.host;if(paramName!=null&&paramName!=""){if(url.indexOf("?")==-1)
{url=url+"?"+paramName+"="+paramValue;}
else
{if(url.charAt(url.length-1)=='?')
{url=url+paramName+"="+paramValue;}
else
{url=url+"&"+paramName+"="+paramValue;}}}
if(url.indexOf("http://")!=-1||url.indexOf("https://")!=-1)
{url=url;}
else
{if((url.indexOf("/myAccount/missingStayRequest.mi")>=0)||(url.indexOf("/myAccount/activity.mi")>=0)||(url.indexOf("/promotionRegistration.mi")>=0)||(url.indexOf("/promotionProgress.mi")>=0)||(url.indexOf("/myAccount/default.mi")>=0)||(url.indexOf("/myAccount/orderReplacementCard.mi")>=0)||(url.indexOf("/myAccount/deactivateAccount.mi")>=0)||(url.indexOf("/reservation/confirmCancelRedemptionRes.mi")>=0)||(url.indexOf("/reservation/cancelRedemptionRes.mi")>=0)||(url.indexOf("/travelagents")>=0))
{url="https://"+host+url;}
else
{url="http://"+host+url;}}
if(returnOrForward==null||returnOrForward==""||returnOrForward=="forward")
{window.location.href=url;}
else
{return url;}}
function changeSignOut(signOutURL,signInURL)
{if(signInURL==null||signInURL==""){signInURL="/ProtectedServlet";}
var returnTo="?returnTo="+escape(document.URL);signInURL=signInURL+returnTo;changeSignOutURL=signOutURL+signInURL;window.location.href=changeSignOutURL;}
function getCookie(sName)
{var aCookie=document.cookie.split("; ");for(var i=0;i<aCookie.length;i++)
{var aCrumb=aCookie[i].split("=");if(sName==aCrumb[0])
return unescape(aCrumb[1]);}
return"";}
function createCookie(name,value,days){if(days)
{var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}
else var expires="";document.cookie=name+"="+value+expires+"; path=/";}
function OpenInOpener(url)
{if(window.opener&&!window.opener.closed)
{window.opener.location.href=url;}
else
{window.open(url);}
window.close();}
function eventMeetings(path)
{OpenInOpener(path);}
var euCookieCheck=function(){$('#cookie-alert, #cookie-alert .cookie-accept').css('display','none');if(getCookie("EUCookie")!="true"&&getCookie("EUCookieShowOnce")!="true"){setCookie("EUCookieShowOnce","true");$('#cookie-alert').delay(1000).slideDown(300,function(){$('#cookie-alert button').fadeIn('fast');});};function getCookie(sName){var aCookie=document.cookie.split("; ");for(var i=0;i<aCookie.length;i++){var aCrumb=aCookie[i].split("=");if(sName==aCrumb[0])return unescape(aCrumb[1]);}
return"";}
function setCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}else var expires="";document.cookie=name+"="+value+expires+"; path=/";}
$('.cookie-accept').click(function(){setCookie("EUCookie","true",9999);$('#cookie-alert button').fadeOut('fast',function(){$('#cookie-alert').slideUp();});$('#cookie-alert').attr({'aria-live':'off','aria-atomic':'false'});})};function formatDate(date,dateFormatPattern){var date=new Date(date);if($locale&&$locale.locale){return $locale.locale("formatDate",date);}
var day='';var counter=countChar('d',dateFormatPattern);if(counter>1){day=prefixWithZero(date.getDate());}else{day=date.getDate();}
var month='';counter=countChar('m',dateFormatPattern);if(counter>1){month=prefixWithZero(date.getMonth()+1);}else{month=date.getMonth()+1;}
var yearLong=date.getFullYear();var yearShort=date.getFullYear().toString().substring(2);var year=(dateFormatPattern.indexOf("yyyy")>-1?yearLong:yearShort);return dateFormatPattern.replace(/d{1,2}/g,day).replace(/m{1,2}/g,month).replace(/y{1,4}/g,year)}
function countChar(characterToCount,value){var counter=0;var charArray=value.toLowerCase().split('');for(i=0;i<charArray.length;i++)
{if(charArray[i]==characterToCount)
{counter++;}}
return counter;}
function prefixWithZero(number){return((number<10)?"0":"")+number;}
function isDateValid(date,dateFormatPattern){if(!isDateInFormat(date,dateFormatPattern)){return false;}
var commaDelimitedDate=getCommaDelimitedDate(date,dateFormatPattern);var dateArr=commaDelimitedDate.split(",");var dd=dateArr[2];var mm=dateArr[1];var yy=dateArr[0]
var newDate=new Date(yy,mm-1,dd);if(dd!=newDate.getDate()){return false;}
if(mm-1!=newDate.getMonth()){return false;}
return true;}
function dateInMMDDYYFormat(date,dateFormatPattern){var commaDelimitedDate=getCommaDelimitedDate(date,dateFormatPattern);var dateArr=commaDelimitedDate.split(",");return dateArr[1]+"/"+dateArr[2]+"/"+dateArr[0];}
function getCommaDelimitedDate(date,dateFormatPattern){var parts=date.split(getDateSeperator(dateFormatPattern));var format=getFormatForValidation(dateFormatPattern);var mm;var dd;var yy;if(format.substring(0,1)=="m"){mm=parts[0];}else if(format.substring(1,2)=="m"){mm=parts[1];}else{mm=parts[2];}
if(format.substring(0,1)=="d"){dd=parts[0];}else if(format.substring(1,2)=="d"){dd=parts[1];}else{dd=parts[2];}
if(format.substring(0,1)=="y"){yy=parts[0];}else if(format.substring(1,2)=="y"){yy=parts[1];}else{yy=parts[2];}
if(yy.length==2){var year=new Date().getFullYear().toString();yy=year.substring(0,2)+yy;}
return yy+","+mm+","+dd;}
function isDateInFormat(date,dateFormatPattern){if((date==null||date=="")||(dateFormatPattern==null||dateFormatPattern=="")){return null;}
var seperator=getDateSeperator(dateFormatPattern);if(date.indexOf(seperator)==-1){return false;}
var format=getFormatForValidation(dateFormatPattern);if(format.substring(0,1)=="y"){var reg1=/^\d{2}(\-|\/|\.)\d{1,2}\1\d{1,2}$/;var reg2=/^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/;}else if(format.substring(1,2)=="y"){var reg1=/^\d{1,2}(\-|\/|\.)\d{2}\1\d{1,2}$/;var reg2=/^\d{1,2}(\-|\/|\.)\d{4}\1\d{1,2}$/;}else{var reg1=/^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{2}$/;var reg2=/^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$/;}
if((reg1.test(date)==false)&&(reg2.test(date)==false)){return false;}
return true;}
function getFormatForValidation(dateFormatPattern){if(dateFormatPattern.substring(0,1)=="d"){dateFormatPattern="dmy";}else if(dateFormatPattern.substring(0,1)=="m"){dateFormatPattern="mdy";}else{dateFormatPattern="ymd";}
return dateFormatPattern;}
function isDateLessThanCurrentDate(date,dateFormatPattern){var commaDelimitedDate=getCommaDelimitedDate(date,dateFormatPattern);var dateArr=commaDelimitedDate.split(",");var dd=dateArr[2];var mm=dateArr[1];var yy=dateArr[0]
date=new Date(yy,mm-1,dd);if(date<new Date()){return true;}
return false;}
function isDateEqualsCurrentDate(date,dateFormatPattern){var selectedDate=getDate(date,dateFormatPattern);var currentDate=new Date();var yy=currentDate.getFullYear();var mm=currentDate.getMonth()+1;var dd=currentDate.getDate();var finalDate=mm+"/"+dd+"/"+yy;currentDate=getDate(finalDate,"mm/dd/yy");if(selectedDate&&currentDate&&selectedDate.toString()==currentDate.toString()){return true;}
return false;}
function isDateLessThanDate1(date,date1,dateFormatPattern){var commaDelimitedDate=getCommaDelimitedDate(date,dateFormatPattern);var dateArr=commaDelimitedDate.split(",");var dd=dateArr[2];var mm=dateArr[1];var yy=dateArr[0]
date=new Date(yy,mm-1,dd);commaDelimitedDate=getCommaDelimitedDate(date1,dateFormatPattern);dateArr=commaDelimitedDate.split(",");dd=dateArr[2];mm=dateArr[1];yy=dateArr[0]
date1=new Date(yy,mm-1,dd);if(date<date1){return true;}
return false;}
function isDateLessThanOrEqualToDate1(date,date1,dateFormatPattern){var commaDelimitedDate=getCommaDelimitedDate(date,dateFormatPattern);var dateArr=commaDelimitedDate.split(",");var dd=dateArr[2];var mm=dateArr[1];var yy=dateArr[0]
date=new Date(yy,mm-1,dd);commaDelimitedDate=getCommaDelimitedDate(date1,dateFormatPattern);dateArr=commaDelimitedDate.split(",");dd=dateArr[2];mm=dateArr[1];yy=dateArr[0]
date1=new Date(yy,mm-1,dd);if(date<=date1){return true;}
return false;}
function isDateGreaterThanDate1(date,date1,dateFormatPattern){var commaDelimitedDate=getCommaDelimitedDate(date,dateFormatPattern);var dateArr=commaDelimitedDate.split(",");var dd=dateArr[2];var mm=dateArr[1];var yy=dateArr[0]
date=new Date(yy,mm-1,dd);commaDelimitedDate=getCommaDelimitedDate(date1,dateFormatPattern);dateArr=commaDelimitedDate.split(",");dd=dateArr[2];mm=dateArr[1];yy=dateArr[0]
date1=new Date(yy,mm-1,dd);if(date>date1){return true;}
return false;}
function isDateEqualsDate1(date,date1,dateFormatPattern){var commaDelimitedDate=getCommaDelimitedDate(date,dateFormatPattern);var dateArr=commaDelimitedDate.split(",");var dd=dateArr[2];var mm=dateArr[1];var yy=dateArr[0];date=new Date(yy,mm-1,dd);commaDelimitedDate=getCommaDelimitedDate(date1,dateFormatPattern);dateArr=commaDelimitedDate.split(",");dd=dateArr[2];mm=dateArr[1];yy=dateArr[0];date1=new Date(yy,mm-1,dd);if(date.toString()==date1.toString()){return true;}
return false;}
function getDateSeperator(dateFormatPattern){var seperator="";if(dateFormatPattern.indexOf("/")!=-1){seperator="/";}else if(dateFormatPattern.indexOf("-")!=-1){seperator="-";}else if(dateFormatPattern.indexOf(".")!=-1){seperator=".";}
return seperator;}
function getDateDay(date){var dateArr=date.split("/");var dd=dateArr[1];if(dd.substring(0,1)=="0")
{dd=dd.substring(1);}
return dd;}
function getDateMonth(date){var dateArr=date.split("/");var date=new Date(date);var month=date.getMonth()+1;var yearLong=prefixWithZero(date.getFullYear());return month+"/"+yearLong;}
function datePlusOne(date,dateFormatPattern){var dateObj=new Date(date);dateObj.setDate(dateObj.getDate()+1);var datePlusOne=(dateObj.getMonth()+1)+'/'+dateObj.getDate()+'/'+dateObj.getFullYear();return formatDate(datePlusOne,dateFormatPattern);}
function getDate(date,dateFormatPattern){var date1=null;try{date1=$.datepicker.parseDate(dateFormatPattern,date);}catch(err){$.datepicker.log(err);}
return date1;}
function getLengthOfStay(fromDate1,toDate1,dateFormatPattern){var fromCalDate=getDate(fromDate1,dateFormatPattern);fromDate=fromCalDate;var toCalDate=getDate(toDate1,dateFormatPattern);toDate=toCalDate;los=0;if(fromDate&&toDate){difference=Math.abs(toCalDate.getTime()-fromCalDate.getTime());los=Math.round(difference/1000/60/60/24);}
return(los,fromDate,toDate);}
function getDayOfWeek(checkInDate,dateFormatPattern){var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];var checkIndateString=dateInMMDDYYFormat(checkInDate,dateFormatPattern);var checkInDay=new Date(checkIndateString);var day=checkInDay.getDay();return days[day];}
﻿
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);(function(t,e){if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,s){t.Backbone=e(t,s,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore");e(t,exports,i)}else{t.Backbone=e(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)}})(this,function(t,e,i,r){var s=t.Backbone;var n=[];var a=n.push;var o=n.slice;var h=n.splice;e.VERSION="1.1.2";e.$=r;e.noConflict=function(){t.Backbone=s;return this};e.emulateHTTP=false;e.emulateJSON=false;var u=e.Events={on:function(t,e,i){if(!c(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,r){if(!c(this,"once",t,[e,r])||!e)return this;var s=this;var n=i.once(function(){s.off(t,n);e.apply(this,arguments)});n._callback=e;return this.on(t,n,r)},off:function(t,e,r){var s,n,a,o,h,u,l,f;if(!this._events||!c(this,"off",t,[e,r]))return this;if(!t&&!e&&!r){this._events=void 0;return this}o=t?[t]:i.keys(this._events);for(h=0,u=o.length;h<u;h++){t=o[h];if(a=this._events[t]){this._events[t]=s=[];if(e||r){for(l=0,f=a.length;l<f;l++){n=a[l];if(e&&e!==n.callback&&e!==n.callback._callback||r&&r!==n.context){s.push(n)}}}if(!s.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=o.call(arguments,1);if(!c(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)f(i,e);if(r)f(r,arguments);return this},stopListening:function(t,e,r){var s=this._listeningTo;if(!s)return this;var n=!e&&!r;if(!r&&typeof e==="object")r=this;if(t)(s={})[t._listenId]=t;for(var a in s){t=s[a];t.off(e,r,this);if(n||i.isEmpty(t._events))delete this._listeningTo[a]}return this}};var l=/\s+/;var c=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(l.test(i)){var n=i.split(l);for(var a=0,o=n.length;a<o;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var f=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,o);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e);return}};var d={listenTo:"on",listenToOnce:"once"};i.each(d,function(t,e){u[e]=function(e,r,s){var n=this._listeningTo||(this._listeningTo={});var a=e._listenId||(e._listenId=i.uniqueId("l"));n[a]=e;if(!s&&typeof r==="object")s=this;e[t](r,s,this);return this}});u.bind=u.on;u.unbind=u.off;i.extend(e,u);var p=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId("c");this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(p.prototype,u,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,r){var s,n,a,o,h,u,l,c;if(t==null)return this;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;a=r.unset;h=r.silent;o=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=i.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in n)this.id=n[this.idAttribute];for(s in n){e=n[s];if(!i.isEqual(c[s],e))o.push(s);if(!i.isEqual(l[s],e)){this.changed[s]=e}else{delete this.changed[s]}a?delete c[s]:c[s]=e}if(!h){if(o.length)this._pending=r;for(var f=0,d=o.length;f<d;f++){this.trigger("change:"+o[f],this,c[o[f]],r)}}if(u)return this;if(!h){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e,r=false;var s=this._changing?this._previousAttributes:this.attributes;for(var n in t){if(i.isEqual(s[n],e=t[n]))continue;(r||(r={}))[n]=e}return r},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=t?i.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var r=t.success;t.success=function(i){if(!e.set(e.parse(i,t),t))return false;if(r)r(e,i,t);e.trigger("sync",e,i,t)};q(this,t);return this.sync("read",this,t)},save:function(t,e,r){var s,n,a,o=this.attributes;if(t==null||typeof t==="object"){s=t;r=e}else{(s={})[t]=e}r=i.extend({validate:true},r);if(s&&!r.wait){if(!this.set(s,r))return false}else{if(!this._validate(s,r))return false}if(s&&r.wait){this.attributes=i.extend({},o,s)}if(r.parse===void 0)r.parse=true;var h=this;var u=r.success;r.success=function(t){h.attributes=o;var e=h.parse(t,r);if(r.wait)e=i.extend(s||{},e);if(i.isObject(e)&&!h.set(e,r)){return false}if(u)u(h,t,r);h.trigger("sync",h,t,r)};q(this,r);n=this.isNew()?"create":r.patch?"patch":"update";if(n==="patch")r.attrs=s;a=this.sync(n,this,r);if(s&&r.wait)this.attributes=o;return a},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var s=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(t.wait||e.isNew())s();if(r)r(e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};if(this.isNew()){t.success();return false}q(this,t);var n=this.sync("delete",this,t);if(!t.wait)s();return n},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||M();if(this.isNew())return t;return t.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var v=["keys","values","pairs","invert","pick","omit"];i.each(v,function(t){p.prototype[t]=function(){var e=o.call(arguments);e.unshift(this.attributes);return i[t].apply(i,e)}});var g=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,remove:false};i.extend(g.prototype,u,{model:p,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,y))},remove:function(t,e){var r=!i.isArray(t);t=r?[t]:i.clone(t);e||(e={});var s,n,a,o;for(s=0,n=t.length;s<n;s++){o=t[s]=this.get(t[s]);if(!o)continue;delete this._byId[o.id];delete this._byId[o.cid];a=this.indexOf(o);this.models.splice(a,1);this.length--;if(!e.silent){e.index=a;o.trigger("remove",o,this,e)}this._removeReference(o,e)}return r?t[0]:t},set:function(t,e){e=i.defaults({},e,m);if(e.parse)t=this.parse(t,e);var r=!i.isArray(t);t=r?t?[t]:[]:i.clone(t);var s,n,a,o,h,u,l;var c=e.at;var f=this.model;var d=this.comparator&&c==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g=[],y=[],_={};var b=e.add,w=e.merge,x=e.remove;var E=!d&&b&&x?[]:false;for(s=0,n=t.length;s<n;s++){h=t[s]||{};if(h instanceof p){a=o=h}else{a=h[f.prototype.idAttribute||"id"]}if(u=this.get(a)){if(x)_[u.cid]=true;if(w){h=h===o?o.attributes:h;if(e.parse)h=u.parse(h,e);u.set(h,e);if(d&&!l&&u.hasChanged(v))l=true}t[s]=u}else if(b){o=t[s]=this._prepareModel(h,e);if(!o)continue;g.push(o);this._addReference(o,e)}o=u||o;if(E&&(o.isNew()||!_[o.id]))E.push(o);_[o.id]=true}if(x){for(s=0,n=this.length;s<n;++s){if(!_[(o=this.models[s]).cid])y.push(o)}if(y.length)this.remove(y,e)}if(g.length||E&&E.length){if(d)l=true;this.length+=g.length;if(c!=null){for(s=0,n=g.length;s<n;s++){this.models.splice(c+s,0,g[s])}}else{if(E)this.models.length=0;var k=E||g;for(s=0,n=k.length;s<n;s++){this.models.push(k[s])}}}if(l)this.sort({silent:true});if(!e.silent){for(s=0,n=g.length;s<n;s++){(o=g[s]).trigger("add",o,this,e)}if(l||E&&E.length)this.trigger("sort",this,e)}return r?t[0]:t},reset:function(t,e){e||(e={});for(var r=0,s=this.models.length;r<s;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(){return o.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[t.id]||this._byId[t.cid]},at:function(t){return this.models[t]},where:function(t,e){if(i.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(i.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(i.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=t?i.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var r=this;t.success=function(i){var s=t.reset?"reset":"set";r[s](i,t);if(e)e(r,i,t);r.trigger("sync",r,i,t)};q(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var r=this;var s=e.success;e.success=function(t,i){if(e.wait)r.add(t,e);if(s)s(t,i,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof p)return t;e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_addReference:function(t,e){this._byId[t.cid]=t;if(t.id!=null)this._byId[t.id]=t;if(!t.collection)t.collection=this;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];i.each(_,function(t){g.prototype[t]=function(){var e=o.call(arguments);e.unshift(this.models);return i[t].apply(i,e)}});var b=["groupBy","countBy","sortBy","indexBy"];i.each(b,function(t){g.prototype[t]=function(e,r){var s=i.isFunction(e)?e:function(t){return t.get(e)};return i[t](this.models,s,r)}});var w=e.View=function(t){this.cid=i.uniqueId("view");t||(t={});i.extend(this,i.pick(t,E));this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];i.extend(w.prototype,u,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,i){if(this.$el)this.undelegateEvents();this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0];if(i!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=i.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[t[e]];if(!r)continue;var s=e.match(x);var n=s[1],a=s[2];r=i.bind(r,this);n+=".delegateEvents"+this.cid;if(a===""){this.$el.on(n,r)}else{this.$el.on(n,a,r)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");var r=e.$("<"+i.result(this,"tagName")+">").attr(t);this.setElement(r,false)}else{this.setElement(i.result(this,"el"),false)}}});e.sync=function(t,r,s){var n=T[t];i.defaults(s||(s={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:n,dataType:"json"};if(!s.url){a.url=i.result(r,"url")||M()}if(s.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(s.attrs||r.toJSON(s))}if(s.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(s.emulateHTTP&&(n==="PUT"||n==="DELETE"||n==="PATCH")){a.type="POST";if(s.emulateJSON)a.data._method=n;var o=s.beforeSend;s.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",n);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!s.emulateJSON){a.processData=false}if(a.type==="PATCH"&&k){a.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var h=s.xhr=e.ajax(i.extend(a,s));r.trigger("request",r,h,s);return h};var k=typeof window!=="undefined"&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var S=/\((.*?)\)/g;var H=/(\(\?)?:\w+/g;var A=/\*\w+/g;var I=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,u,{initialize:function(){},route:function(t,r,s){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){s=r;r=""}if(!s)s=this[r];var n=this;e.history.route(t,function(i){var a=n._extractParameters(t,i);n.execute(s,a);n.trigger.apply(n,["route:"+r].concat(a));n.trigger("route",r,a);e.history.trigger("route",n,r,a)});return this},execute:function(t,e){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(I,"\\$&").replace(S,"(?:$1)?").replace(H,function(t,e){return e?t:"([^/?]+)"}).replace(A,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[];i.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var R=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var P=/msie [\w.]+/;var C=/\/$/;var j=/#.*$/;N.started=false;i.extend(N.prototype,u,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=decodeURI(this.location.pathname+this.location.search);var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.slice(i.length)}else{t=this.getHash()}}return t.replace(R,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");N.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var r=this.getFragment();var s=document.documentMode;var n=P.exec(navigator.userAgent.toLowerCase())&&(!s||s<=7);this.root=("/"+this.root+"/").replace(O,"/");if(n&&this._wantsHashChange){var a=e.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=a.hide().appendTo("body")[0].contentWindow;this.navigate(r)}if(this._hasPushState){e.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!n){e.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=r;var o=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){this.fragment=this.getFragment(null,true);this.location.replace(this.root+"#"+this.fragment);return true}else if(this._hasPushState&&this.atRoot()&&o.hash){this.fragment=this.getHash().replace(R,"");this.history.replaceState({},document.title,this.root+this.fragment)}}if(!this.options.silent)return this.loadUrl()},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){t=this.fragment=this.getFragment(t);return i.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!N.started)return false;if(!e||e===true)e={trigger:!!e};var i=this.root+(t=this.getFragment(t||""));t=t.replace(j,"");if(this.fragment===t)return;this.fragment=t;if(t===""&&i!=="/")i=i.slice(0,-1);if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new N;var U=function(t,e){var r=this;var s;if(t&&i.has(t,"constructor")){s=t.constructor}else{s=function(){return r.apply(this,arguments)}}i.extend(s,r,e);var n=function(){this.constructor=s};n.prototype=r.prototype;s.prototype=new n;if(t)i.extend(s.prototype,t);s.__super__=r.prototype;return s};p.extend=g.extend=$.extend=w.extend=N.extend=U;var M=function(){throw new Error('A "url" property or function must be specified')};var q=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}};return e});(function(exports,Backbone){if(exports.Aries){return;}
var Aries=exports.Aries={};Aries.Components={};Aries.Listeners=Backbone.View.extend({listeners:{},constructor:function(config){Backbone.View.apply(this,arguments);_.forEach(this.listeners,function(callback,listener){if(this[callback]){Backbone.on(listener,this[callback],this);}},this);},listen:function(name,fn,context){var fn=((typeof(fn)==='function'&&fn)||this[callback]);if(name&&fn){Backbone.on(name,fn,(context||this));}},notify:function(name){Backbone.trigger(name,Array.prototype.splice(arguments,1));}});Aries.Component=Aries.Listeners.extend({constructor:function(config){Aries.Listeners.apply(this,arguments);var features=config.features||{},dataFeatures=this.$el.attr('data-features');this.model=this.model||new Backbone.Model();this.features={};this.options=$.extend(this.options,config.options);if(dataFeatures){$.extend(features,JSON.parse(dataFeatures));}
_.forEach(features,function(featureOpions,name){var node=this.$el.find(this.selectors[name]);if(node.length===1){this.features[name]=new this[name]({options:featureOpions,$parent:this,el:node,model:this.model})}},this);}});Aries.Feature=Aries.Listeners.extend({constructor:function(config){this.$parent=config.$parent;this.options=$.extend(this.options,config.options);Aries.Listeners.apply(this,arguments);if(this.$parent&&this.$parent.el&&this.parent){if(this.parent.events){_.forEach(this.parent.events,function(callback,selector){var eventRegArgs=selector.split(' ');if(this[callback]){eventRegArgs.push(_.bind(this[callback],this));this.$parent.$el.on.apply(this.$parent.$el,eventRegArgs);}},this);}}}});})(this,Backbone);Aries.Components.SearchForm=Aries.Component.extend({selectors:{brands:'.js-brands',dates:'.js-datepick-container',singleFieldDates:'.js-datepick-container',userRewards:'.js-use-rewards',specialRates:'.js-special-awards',geoLocation:'.js-location',autoComplete:'.js-auto-complete',collapse:'.js-collapse-container',validate:'.js-validate',clearInput:'.js-clearinput',roomsGuests:'.js-rooms-guests'}});$(function(){$('[x-aries]').each(function(){var component_name=this.getAttribute('x-aries'),Component=Aries.Components[component_name.replace(' ','')];if(_.isFunction(Component)){$(this).data('$aries',new Component({el:this}));}});});MI.Util.Viewport=(function($,Response,undefined){var _isResponsive=typeof Response!=='undefined';if(typeof Modernizr!=='undefined'){_isResponsive=_isResponsive&&Modernizr.mq('only all');}
return{isBelowBreakpoint:function(size){return this.isBelowOrEqualTo(size-1);},isBelowOrEqualToBreakpoint:function(size){return _isResponsive&&Response.band(0,size);},isAboveBreakpoint:function(size){return this.isAboveOrEqualTo(size+1);},isAboveOrEqualToBreakpoint:function(size){return _isResponsive&&Response.band(size);},breakpoints:{XS:0,S:320,SM:480,M:560,MML:672,ML:768,MLL:864,L:960,XL:1024,XXL:1200,XXXL:1440},onResize:function(callback){if(_isResponsive&&typeof callback=='function'){Response.resize(callback);}}}}(jQuery,Response));(function(factory){if(typeof define=='function'&&define.amd)
define('picker',['jquery'],factory)
else if(typeof exports=='object')
module.exports=factory(require('jquery'))
else this.Picker=factory(jQuery)}(function($){var $window=$(window)
var $document=$(document)
var $html=$(document.documentElement)
var supportsTransitions=(document.body)?document.body.style.transition!=null:false
function PickerConstructor(ELEMENT,NAME,COMPONENT,OPTIONS){if(!ELEMENT)return PickerConstructor
var
IS_DEFAULT_THEME=false,STATE={id:ELEMENT.id||'P'+Math.abs(~~(Math.random()*new Date()))},SETTINGS=COMPONENT?$.extend(true,{},COMPONENT.defaults,OPTIONS):OPTIONS||{},CLASSES=$.extend({},PickerConstructor.klasses(),SETTINGS.klass),$ELEMENT=$(ELEMENT),PickerInstance=function(){return this.start()},P=PickerInstance.prototype={constructor:PickerInstance,$node:$ELEMENT,start:function(){if(STATE&&STATE.start)return P
STATE.methods={}
STATE.start=true
STATE.open=false
STATE.type=ELEMENT.type
ELEMENT.autofocus=ELEMENT==getActiveElement()
ELEMENT.readOnly=!SETTINGS.editable
ELEMENT.id=ELEMENT.id||STATE.id
if(ELEMENT.type!='text'){ELEMENT.type='text'}
P.component=new COMPONENT(P,SETTINGS)
P.$root=$('<div class="'+CLASSES.picker+'" id="'+ELEMENT.id+'_root" />')
prepareElementRoot()
P.$holder=$(createWrappedComponent()).appendTo(P.$root)
prepareElementHolder()
if(SETTINGS.formatSubmit){prepareElementHidden()}
prepareElement()
if(SETTINGS.containerHidden)$(SETTINGS.containerHidden).append(P._hidden)
else $ELEMENT.after(P._hidden)
if(SETTINGS.container)$(SETTINGS.container).append(P.$root)
else $ELEMENT.after(P.$root)
P.on({start:P.component.onStart,render:P.component.onRender,stop:P.component.onStop,open:P.component.onOpen,close:P.component.onClose,set:P.component.onSet}).on({start:SETTINGS.onStart,render:SETTINGS.onRender,stop:SETTINGS.onStop,open:SETTINGS.onOpen,close:SETTINGS.onClose,set:SETTINGS.onSet})
IS_DEFAULT_THEME=isUsingDefaultTheme(P.$holder[0])
if(ELEMENT.autofocus){P.open()}
return P.trigger('start').trigger('render')},render:function(entireComponent){if(entireComponent){P.$holder=createWrappedComponent()
P.$root.html(P.$holder)}
else P.$root.find('.'+CLASSES.box).html(P.component.nodes(STATE.open))
return P.trigger('render')},stop:function(){if(!STATE.start)return P
P.close()
if(P._hidden){P._hidden.parentNode.removeChild(P._hidden)}
P.$root.remove()
$ELEMENT.removeClass(CLASSES.input).removeData(NAME)
setTimeout(function(){$ELEMENT.off('.'+STATE.id)},0)
ELEMENT.type=STATE.type
ELEMENT.readOnly=false
P.trigger('stop')
STATE.methods={}
STATE.start=false
return P},open:function(dontGiveFocus){if(STATE.open)return P
$ELEMENT.addClass(CLASSES.active)
aria(ELEMENT,'expanded',true)
setTimeout(function(){P.$root.addClass(CLASSES.opened)
aria(P.$root[0],'hidden',false)},0)
if(dontGiveFocus!==false){STATE.open=true
if(IS_DEFAULT_THEME){$html.css('overflow','hidden').css('padding-right','+='+getScrollbarWidth())}
focusPickerOnceOpened()
$document.on('click.'+STATE.id+' focusin.'+STATE.id,function(event){var target=event.target
if(target!=ELEMENT&&target!=document&&event.which!=3){P.close(target===P.$holder[0])}}).on('keydown.'+STATE.id,function(event){var
keycode=event.keyCode,keycodeToMove=P.component.key[keycode],target=event.target
if(keycode==27){P.close(true)}
else if(target==P.$holder[0]&&(keycodeToMove||keycode==13)){event.preventDefault()
if(keycodeToMove){PickerConstructor._.trigger(P.component.key.go,P,[PickerConstructor._.trigger(keycodeToMove)])}
else if(!P.$root.find('.'+CLASSES.highlighted).hasClass(CLASSES.disabled)){P.set('select',P.component.item.highlight)
if(SETTINGS.closeOnSelect){P.close(true)}}}
else if($.contains(P.$root[0],target)&&keycode==13){event.preventDefault()
target.click()}})}
return P.trigger('open')},close:function(giveFocus){if(giveFocus){if(SETTINGS.editable){ELEMENT.focus()}
else{P.$holder.off('focus.toOpen').focus()
setTimeout(function(){P.$holder.on('focus.toOpen',handleFocusToOpenEvent)},0)}}
$ELEMENT.removeClass(CLASSES.active)
aria(ELEMENT,'expanded',false)
setTimeout(function(){P.$root.removeClass(CLASSES.opened+' '+CLASSES.focused)
aria(P.$root[0],'hidden',true)},0)
if(!STATE.open)return P
STATE.open=false
if(IS_DEFAULT_THEME){$html.css('overflow','').css('padding-right','-='+getScrollbarWidth())}
$document.off('.'+STATE.id)
return P.trigger('close')},clear:function(options){return P.set('clear',null,options)},set:function(thing,value,options){var thingItem,thingValue,thingIsObject=$.isPlainObject(thing),thingObject=thingIsObject?thing:{}
options=thingIsObject&&$.isPlainObject(value)?value:options||{}
if(thing){if(!thingIsObject){thingObject[thing]=value}
for(thingItem in thingObject){thingValue=thingObject[thingItem]
if(thingItem in P.component.item){if(thingValue===undefined)thingValue=null
P.component.set(thingItem,thingValue,options)}
if(thingItem=='select'||thingItem=='clear'){$ELEMENT.val(thingItem=='clear'?'':P.get(thingItem,SETTINGS.format)).trigger('change')}}
P.render()}
return options.muted?P:P.trigger('set',thingObject)},get:function(thing,format){thing=thing||'value'
if(STATE[thing]!=null){return STATE[thing]}
if(thing=='valueSubmit'){if(P._hidden){return P._hidden.value}
thing='value'}
if(thing=='value'){return ELEMENT.value}
if(thing in P.component.item){if(typeof format=='string'){var thingValue=P.component.get(thing)
return thingValue?PickerConstructor._.trigger(P.component.formats.toString,P.component,[format,thingValue]):''}
return P.component.get(thing)}},on:function(thing,method,internal){var thingName,thingMethod,thingIsObject=$.isPlainObject(thing),thingObject=thingIsObject?thing:{}
if(thing){if(!thingIsObject){thingObject[thing]=method}
for(thingName in thingObject){thingMethod=thingObject[thingName]
if(internal){thingName='_'+thingName}
STATE.methods[thingName]=STATE.methods[thingName]||[]
STATE.methods[thingName].push(thingMethod)}}
return P},off:function(){var i,thingName,names=arguments;for(i=0,namesCount=names.length;i<namesCount;i+=1){thingName=names[i]
if(thingName in STATE.methods){delete STATE.methods[thingName]}}
return P},trigger:function(name,data){var _trigger=function(name){var methodList=STATE.methods[name]
if(methodList){methodList.map(function(method){PickerConstructor._.trigger(method,P,[data])})}}
_trigger('_'+name)
_trigger(name)
return P}}
function createWrappedComponent(){return PickerConstructor._.node('div',PickerConstructor._.node('div',PickerConstructor._.node('div',PickerConstructor._.node('div',P.component.nodes(STATE.open),CLASSES.box),CLASSES.wrap),CLASSES.frame),CLASSES.holder,'tabindex="-1"')}
function prepareElement(){$ELEMENT.data(NAME,P).addClass(CLASSES.input).val($ELEMENT.data('value')?P.get('select',SETTINGS.format):ELEMENT.value)
if(!SETTINGS.editable){$ELEMENT.on('focus.'+STATE.id+' click.'+STATE.id,function(event){event.preventDefault()
P.open()}).on('keydown.'+STATE.id,handleKeydownEvent)}
aria(ELEMENT,{haspopup:true,expanded:false,readonly:false,owns:ELEMENT.id+'_root'})}
function prepareElementRoot(){aria(P.$root[0],'hidden',true)}
function prepareElementHolder(){P.$holder.on({keydown:handleKeydownEvent,'focus.toOpen':handleFocusToOpenEvent,blur:function(){$ELEMENT.removeClass(CLASSES.target)},focusin:function(event){P.$root.removeClass(CLASSES.focused)
event.stopPropagation()},'mousedown click':function(event){var target=event.target
if(target!=P.$holder[0]){event.stopPropagation()
if(event.type=='mousedown'&&!$(target).is('input, select, textarea, button, option')){event.preventDefault()
P.$holder[0].focus()}}}}).on('click','[data-pick], [data-nav], [data-clear], [data-close]',function(){var $target=$(this),targetData=$target.data(),targetDisabled=$target.hasClass(CLASSES.navDisabled)||$target.hasClass(CLASSES.disabled),activeElement=getActiveElement()
activeElement===activeElement&&(activeElement.type||activeElement.href)
if(targetDisabled||activeElement&&!$.contains(P.$root[0],activeElement)){P.$holder[0].focus()}
if(!targetDisabled&&targetData.nav){P.set('highlight',P.component.item.highlight,{nav:targetData.nav})}
else if(!targetDisabled&&'pick'in targetData){P.set('select',targetData.pick)
if(SETTINGS.closeOnSelect){P.close(true)}}
else if(targetData.clear){P.clear()
if(SETTINGS.closeOnClear){P.close(true)}}
else if(targetData.close){P.close(true)}})}
function prepareElementHidden(){var name
if(SETTINGS.hiddenName===true){name=ELEMENT.name
ELEMENT.name=''}
else{name=[typeof SETTINGS.hiddenPrefix=='string'?SETTINGS.hiddenPrefix:'',typeof SETTINGS.hiddenSuffix=='string'?SETTINGS.hiddenSuffix:'_submit']
name=name[0]+ELEMENT.name+name[1]}
P._hidden=$('<input '+'type=hidden '+'name="'+name+'"'+
($ELEMENT.data('value')||ELEMENT.value?' value="'+P.get('select',SETTINGS.formatSubmit)+'"':'')+'>')[0]
$ELEMENT.on('change.'+STATE.id,function(){P._hidden.value=ELEMENT.value?P.get('select',SETTINGS.formatSubmit):''})}
function focusPickerOnceOpened(){if(IS_DEFAULT_THEME&&supportsTransitions){P.$holder.find('.'+CLASSES.frame).one('transitionend',function(){P.$holder[0].focus()})}
else{P.$holder[0].focus()}}
function handleFocusToOpenEvent(event){event.stopPropagation()
$ELEMENT.addClass(CLASSES.target)
P.$root.addClass(CLASSES.focused)
P.open()}
function handleKeydownEvent(event){var keycode=event.keyCode,isKeycodeDelete=/^(8|46)$/.test(keycode)
if(keycode==27){P.close(true)
return false}
if(keycode==32||isKeycodeDelete||!STATE.open&&P.component.key[keycode]){event.preventDefault()
event.stopPropagation()
if(isKeycodeDelete){P.clear().close()}
else{P.open()}}}
return new PickerInstance()}
PickerConstructor.klasses=function(prefix){prefix=prefix||'picker'
return{picker:prefix,opened:prefix+'--opened',focused:prefix+'--focused',input:prefix+'__input',active:prefix+'__input--active',target:prefix+'__input--target',holder:prefix+'__holder',frame:prefix+'__frame',wrap:prefix+'__wrap',box:prefix+'__box'}}
function isUsingDefaultTheme(element){var theme,prop='position'
if(element.currentStyle){theme=element.currentStyle[prop]}
else if(window.getComputedStyle){theme=getComputedStyle(element)[prop]}
return theme=='fixed'}
function getScrollbarWidth(){if($html.height()<=$window.height()){return 0}
var $outer=$('<div style="visibility:hidden;width:100px" />').appendTo('body')
var widthWithoutScroll=$outer[0].offsetWidth
$outer.css('overflow','scroll')
var $inner=$('<div style="width:100%" />').appendTo($outer)
var widthWithScroll=$inner[0].offsetWidth
$outer.remove()
return widthWithoutScroll-widthWithScroll}
PickerConstructor._={group:function(groupObject){var
loopObjectScope,nodesList='',counter=PickerConstructor._.trigger(groupObject.min,groupObject)
for(;counter<=PickerConstructor._.trigger(groupObject.max,groupObject,[counter]);counter+=groupObject.i){loopObjectScope=PickerConstructor._.trigger(groupObject.item,groupObject,[counter])
nodesList+=PickerConstructor._.node(groupObject.node,loopObjectScope[0],loopObjectScope[1],loopObjectScope[2])}
return nodesList},node:function(wrapper,item,klass,attribute){if(!item)return''
item=$.isArray(item)?item.join(''):item
klass=klass?' class="'+klass+'"':''
attribute=attribute?' '+attribute:''
return'<'+wrapper+klass+attribute+'>'+item+'</'+wrapper+'>'},lead:function(number){return(number<10?'0':'')+number},trigger:function(callback,scope,args){return typeof callback=='function'?callback.apply(scope,args||[]):callback},digits:function(string){return(/\d/).test(string[1])?2:1},isDate:function(value){return{}.toString.call(value).indexOf('Date')>-1&&this.isInteger(value.getDate())},isInteger:function(value){return{}.toString.call(value).indexOf('Number')>-1&&value%1===0},ariaAttr:ariaAttr}
PickerConstructor.extend=function(name,Component){$.fn[name]=function(options,action){var componentData=this.data(name)
if(options=='picker'){return componentData}
if(componentData&&typeof options=='string'){return PickerConstructor._.trigger(componentData[options],componentData,[action])}
return this.each(function(){var $this=$(this)
if(!$this.data(name)){new PickerConstructor(this,name,Component,options)}})}
$.fn[name].defaults=Component.defaults}
function aria(element,attribute,value){if($.isPlainObject(attribute)){for(var key in attribute){ariaSet(element,key,attribute[key])}}
else{ariaSet(element,attribute,value)}}
function ariaSet(element,attribute,value){element.setAttribute((attribute=='role'?'':'aria-')+attribute,value)}
function ariaAttr(attribute,data){if(!$.isPlainObject(attribute)){attribute={attribute:data}}
data=''
for(var key in attribute){var attr=(key=='role'?'':'aria-')+key,attrVal=attribute[key]
data+=attrVal==null?'':attr+'="'+attribute[key]+'"'}
return data}
function getActiveElement(){try{return document.activeElement}catch(err){}}
return PickerConstructor}));(function(factory){if(typeof define=='function'&&define.amd)
define(['picker','jquery'],factory)
else if(typeof exports=='object')
module.exports=factory(require('./picker.js'),require('jquery'))
else factory(Picker,jQuery)}(function(Picker,$){var DAYS_IN_WEEK=7,WEEKS_IN_CALENDAR=6,_=Picker._
function DatePicker(picker,settings){var calendar=this,element=picker.$node[0],elementValue=element.value,elementDataValue=picker.$node.data('value'),valueString=elementDataValue||elementValue,formatString=elementDataValue?settings.formatSubmit:settings.format,isRTL=function(){return element.currentStyle?element.currentStyle.direction=='rtl':getComputedStyle(picker.$root[0]).direction=='rtl'}
calendar.settings=settings
calendar.$node=picker.$node
calendar.queue={min:'measure create',max:'measure create',now:'now create',select:'parse create validate',highlight:'parse navigate create validate',view:'parse create validate viewset',disable:'deactivate',enable:'activate'}
calendar.item={}
calendar.item.clear=null
calendar.item.disable=(settings.disable||[]).slice(0)
calendar.item.enable=-(function(collectionDisabled){return collectionDisabled[0]===true?collectionDisabled.shift():-1})(calendar.item.disable)
calendar.set('min',settings.min).set('max',settings.max).set('now')
if(valueString){calendar.set('select',valueString,{format:formatString,defaultValue:true})}
else{calendar.set('select',null).set('highlight',calendar.item.now)}
calendar.key={40:7,38:-7,39:function(){return isRTL()?-1:1},37:function(){return isRTL()?1:-1},go:function(timeChange){var highlightedObject=calendar.item.highlight,targetDate=new Date(highlightedObject.year,highlightedObject.month,highlightedObject.date+timeChange)
calendar.set('highlight',targetDate,{interval:timeChange})
this.render()}}
picker.on('render',function(){picker.$root.find('.'+settings.klass.selectMonth).on('change',function(){var value=this.value
if(value){picker.set('highlight',[picker.get('view').year,value,picker.get('highlight').date])
picker.$root.find('.'+settings.klass.selectMonth).trigger('focus')}})
picker.$root.find('.'+settings.klass.selectYear).on('change',function(){var value=this.value
if(value){picker.set('highlight',[value,picker.get('view').month,picker.get('highlight').date])
picker.$root.find('.'+settings.klass.selectYear).trigger('focus')}})},1).on('open',function(){var includeToday=''
if(calendar.disabled(calendar.get('now'))){includeToday=':not(.'+settings.klass.buttonToday+')'}
picker.$root.find('button'+includeToday+', select').attr('disabled',false)},1).on('close',function(){picker.$root.find('button, select').attr('disabled',true)},1)}
DatePicker.prototype.set=function(type,value,options){var calendar=this,calendarItem=calendar.item
if(value===null){if(type=='clear')type='select'
calendarItem[type]=value
return calendar}
calendarItem[(type=='enable'?'disable':type=='flip'?'enable':type)]=calendar.queue[type].split(' ').map(function(method){value=calendar[method](type,value,options)
return value}).pop()
if(type=='select'){calendar.set('highlight',calendarItem.select,options)}
else if(type=='highlight'){calendar.set('view',calendarItem.highlight,options)}
else if(type.match(/^(flip|min|max|disable|enable)$/)){if(calendarItem.select&&calendar.disabled(calendarItem.select)){calendar.set('select',calendarItem.select,options)}
if(calendarItem.highlight&&calendar.disabled(calendarItem.highlight)){calendar.set('highlight',calendarItem.highlight,options)}}
return calendar}
DatePicker.prototype.get=function(type){return this.item[type]}
DatePicker.prototype.create=function(type,value,options){var isInfiniteValue,calendar=this
value=value===undefined?type:value
if(value==-Infinity||value==Infinity){isInfiniteValue=value}
else if($.isPlainObject(value)&&_.isInteger(value.pick)){value=value.obj}
else if($.isArray(value)){value=new Date(value[0],value[1],value[2])
value=_.isDate(value)?value:calendar.create().obj}
else if(_.isInteger(value)||_.isDate(value)){value=calendar.normalize(new Date(value),options)}
else{value=calendar.now(type,value,options)}
return{year:isInfiniteValue||value.getFullYear(),month:isInfiniteValue||value.getMonth(),date:isInfiniteValue||value.getDate(),day:isInfiniteValue||value.getDay(),obj:isInfiniteValue||value,pick:isInfiniteValue||value.getTime()}}
DatePicker.prototype.createRange=function(from,to){var calendar=this,createDate=function(date){if(date===true||$.isArray(date)||_.isDate(date)){return calendar.create(date)}
return date}
if(!_.isInteger(from)){from=createDate(from)}
if(!_.isInteger(to)){to=createDate(to)}
if(_.isInteger(from)&&$.isPlainObject(to)){from=[to.year,to.month,to.date+from];}
else if(_.isInteger(to)&&$.isPlainObject(from)){to=[from.year,from.month,from.date+to];}
return{from:createDate(from),to:createDate(to)}}
DatePicker.prototype.withinRange=function(range,dateUnit){range=this.createRange(range.from,range.to)
return dateUnit.pick>=range.from.pick&&dateUnit.pick<=range.to.pick}
DatePicker.prototype.overlapRanges=function(one,two){var calendar=this
one=calendar.createRange(one.from,one.to)
two=calendar.createRange(two.from,two.to)
return calendar.withinRange(one,two.from)||calendar.withinRange(one,two.to)||calendar.withinRange(two,one.from)||calendar.withinRange(two,one.to)}
DatePicker.prototype.now=function(type,value,options){value=new Date()
if(options&&options.rel){value.setDate(value.getDate()+options.rel)}
return this.normalize(value,options)}
DatePicker.prototype.navigate=function(type,value,options){var targetDateObject,targetYear,targetMonth,targetDate,isTargetArray=$.isArray(value),isTargetObject=$.isPlainObject(value),viewsetObject=this.item.view
if(isTargetArray||isTargetObject){if(isTargetObject){targetYear=value.year
targetMonth=value.month
targetDate=value.date}
else{targetYear=+value[0]
targetMonth=+value[1]
targetDate=+value[2]}
if(options&&options.nav&&viewsetObject&&viewsetObject.month!==targetMonth){targetYear=viewsetObject.year
targetMonth=viewsetObject.month}
targetDateObject=new Date(targetYear,targetMonth+(options&&options.nav?options.nav:0),1)
targetYear=targetDateObject.getFullYear()
targetMonth=targetDateObject.getMonth()
while(new Date(targetYear,targetMonth,targetDate).getMonth()!==targetMonth){targetDate-=1}
value=[targetYear,targetMonth,targetDate]}
return value}
DatePicker.prototype.normalize=function(value){value.setHours(0,0,0,0)
return value}
DatePicker.prototype.measure=function(type,value){var calendar=this
if(!value){value=type=='min'?-Infinity:Infinity}
else if(typeof value=='string'){value=calendar.parse(type,value)}
else if(_.isInteger(value)){value=calendar.now(type,value,{rel:value})}
return value}
DatePicker.prototype.viewset=function(type,dateObject){return this.create([dateObject.year,dateObject.month,1])}
DatePicker.prototype.validate=function(type,dateObject,options){var calendar=this,originalDateObject=dateObject,interval=options&&options.interval?options.interval:1,isFlippedBase=calendar.item.enable===-1,hasEnabledBeforeTarget,hasEnabledAfterTarget,minLimitObject=calendar.item.min,maxLimitObject=calendar.item.max,reachedMin,reachedMax,hasEnabledWeekdays=isFlippedBase&&calendar.item.disable.filter(function(value){if($.isArray(value)){var dateTime=calendar.create(value).pick
if(dateTime<dateObject.pick)hasEnabledBeforeTarget=true
else if(dateTime>dateObject.pick)hasEnabledAfterTarget=true}
return _.isInteger(value)}).length
if(!options||(!options.nav&&!options.defaultValue))if((!isFlippedBase&&calendar.disabled(dateObject))||(isFlippedBase&&calendar.disabled(dateObject)&&(hasEnabledWeekdays||hasEnabledBeforeTarget||hasEnabledAfterTarget))||(!isFlippedBase&&(dateObject.pick<=minLimitObject.pick||dateObject.pick>=maxLimitObject.pick))){if(isFlippedBase&&!hasEnabledWeekdays&&((!hasEnabledAfterTarget&&interval>0)||(!hasEnabledBeforeTarget&&interval<0))){interval*=-1}
while(calendar.disabled(dateObject)){if(Math.abs(interval)>1&&(dateObject.month<originalDateObject.month||dateObject.month>originalDateObject.month)){dateObject=originalDateObject
interval=interval>0?1:-1}
if(dateObject.pick<=minLimitObject.pick){reachedMin=true
interval=1
dateObject=calendar.create([minLimitObject.year,minLimitObject.month,minLimitObject.date+(dateObject.pick===minLimitObject.pick?0:-1)])}
else if(dateObject.pick>=maxLimitObject.pick){reachedMax=true
interval=-1
dateObject=calendar.create([maxLimitObject.year,maxLimitObject.month,maxLimitObject.date+(dateObject.pick===maxLimitObject.pick?0:1)])}
if(reachedMin&&reachedMax){break}
dateObject=calendar.create([dateObject.year,dateObject.month,dateObject.date+interval])}}
return dateObject}
DatePicker.prototype.disabled=function(dateToVerify){var
calendar=this,isDisabledMatch=calendar.item.disable.filter(function(dateToDisable){if(_.isInteger(dateToDisable)){return dateToVerify.day===(calendar.settings.firstDay?dateToDisable:dateToDisable-1)%7}
if($.isArray(dateToDisable)||_.isDate(dateToDisable)){return dateToVerify.pick===calendar.create(dateToDisable).pick}
if($.isPlainObject(dateToDisable)){return calendar.withinRange(dateToDisable,dateToVerify)}})
isDisabledMatch=isDisabledMatch.length&&!isDisabledMatch.filter(function(dateToDisable){return $.isArray(dateToDisable)&&dateToDisable[3]=='inverted'||$.isPlainObject(dateToDisable)&&dateToDisable.inverted}).length
return calendar.item.enable===-1?!isDisabledMatch:isDisabledMatch||dateToVerify.pick<calendar.item.min.pick||dateToVerify.pick>calendar.item.max.pick}
DatePicker.prototype.parse=function(type,value,options){var calendar=this,parsingObject={}
if(!value||typeof value!='string'){return value}
if(!(options&&options.format)){options=options||{}
options.format=calendar.settings.format}
calendar.formats.toArray(options.format).map(function(label){var
formattingLabel=calendar.formats[label],formatLength=formattingLabel?_.trigger(formattingLabel,calendar,[value,parsingObject]):label.replace(/^!/,'').length
if(formattingLabel){parsingObject[label]=value.substr(0,formatLength)}
value=value.substr(formatLength)})
return[parsingObject.yyyy||parsingObject.yy,+(parsingObject.mm||parsingObject.m)-1,parsingObject.dd||parsingObject.d]}
DatePicker.prototype.formats=(function(){function getWordLengthFromCollection(string,collection,dateObject){var word=string.match(/[^\x00-\x7F]+|\w+/)[0]
if(!dateObject.mm&&!dateObject.m){dateObject.m=collection.indexOf(word)+1}
return word.length}
function getFirstWordLength(string){return string.match(/\w+/)[0].length}
return{d:function(string,dateObject){return string?_.digits(string):dateObject.date},dd:function(string,dateObject){return string?2:_.lead(dateObject.date)},ddd:function(string,dateObject){return string?getFirstWordLength(string):this.settings.weekdaysShort[dateObject.day]},dddd:function(string,dateObject){return string?getFirstWordLength(string):this.settings.weekdaysFull[dateObject.day]},m:function(string,dateObject){return string?_.digits(string):dateObject.month+1},mm:function(string,dateObject){return string?2:_.lead(dateObject.month+1)},mmm:function(string,dateObject){var collection=this.settings.monthsShort
return string?getWordLengthFromCollection(string,collection,dateObject):collection[dateObject.month]},mmmm:function(string,dateObject){var collection=this.settings.monthsFull
return string?getWordLengthFromCollection(string,collection,dateObject):collection[dateObject.month]},yy:function(string,dateObject){return string?2:('20'+dateObject.year).slice(2)},yyyy:function(string,dateObject){return string?4:dateObject.year},toArray:function(formatString){return formatString.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(formatString,itemObject){var calendar=this
return calendar.formats.toArray(formatString).map(function(label){return _.trigger(calendar.formats[label],calendar,[0,itemObject])||label.replace(/^!/,'')}).join('')}}})()
DatePicker.prototype.isDateExact=function(one,two){var calendar=this
if((_.isInteger(one)&&_.isInteger(two))||(typeof one=='boolean'&&typeof two=='boolean')){return one===two}
if((_.isDate(one)||$.isArray(one))&&(_.isDate(two)||$.isArray(two))){return calendar.create(one).pick===calendar.create(two).pick}
if($.isPlainObject(one)&&$.isPlainObject(two)){return calendar.isDateExact(one.from,two.from)&&calendar.isDateExact(one.to,two.to)}
return false}
DatePicker.prototype.isDateOverlap=function(one,two){var calendar=this,firstDay=calendar.settings.firstDay?1:0
if(_.isInteger(one)&&(_.isDate(two)||$.isArray(two))){one=one%7+firstDay
return one===calendar.create(two).day+1}
if(_.isInteger(two)&&(_.isDate(one)||$.isArray(one))){two=two%7+firstDay
return two===calendar.create(one).day+1}
if($.isPlainObject(one)&&$.isPlainObject(two)){return calendar.overlapRanges(one,two)}
return false}
DatePicker.prototype.flipEnable=function(val){var itemObject=this.item
itemObject.enable=val||(itemObject.enable==-1?1:-1)}
DatePicker.prototype.deactivate=function(type,datesToDisable){var calendar=this,disabledItems=calendar.item.disable.slice(0)
if(datesToDisable=='flip'){calendar.flipEnable()}
else if(datesToDisable===false){calendar.flipEnable(1)
disabledItems=[]}
else if(datesToDisable===true){calendar.flipEnable(-1)
disabledItems=[]}
else{datesToDisable.map(function(unitToDisable){var matchFound
for(var index=0;index<disabledItems.length;index+=1){if(calendar.isDateExact(unitToDisable,disabledItems[index])){matchFound=true
break}}
if(!matchFound){if(_.isInteger(unitToDisable)||_.isDate(unitToDisable)||$.isArray(unitToDisable)||($.isPlainObject(unitToDisable)&&unitToDisable.from&&unitToDisable.to)){disabledItems.push(unitToDisable)}}})}
return disabledItems}
DatePicker.prototype.activate=function(type,datesToEnable){var calendar=this,disabledItems=calendar.item.disable,disabledItemsCount=disabledItems.length
if(datesToEnable=='flip'){calendar.flipEnable()}
else if(datesToEnable===true){calendar.flipEnable(1)
disabledItems=[]}
else if(datesToEnable===false){calendar.flipEnable(-1)
disabledItems=[]}
else{datesToEnable.map(function(unitToEnable){var matchFound,disabledUnit,index,isExactRange
for(index=0;index<disabledItemsCount;index+=1){disabledUnit=disabledItems[index]
if(calendar.isDateExact(disabledUnit,unitToEnable)){matchFound=disabledItems[index]=null
isExactRange=true
break}
else if(calendar.isDateOverlap(disabledUnit,unitToEnable)){if($.isPlainObject(unitToEnable)){unitToEnable.inverted=true
matchFound=unitToEnable}
else if($.isArray(unitToEnable)){matchFound=unitToEnable
if(!matchFound[3])matchFound.push('inverted')}
else if(_.isDate(unitToEnable)){matchFound=[unitToEnable.getFullYear(),unitToEnable.getMonth(),unitToEnable.getDate(),'inverted']}
break}}
if(matchFound)for(index=0;index<disabledItemsCount;index+=1){if(calendar.isDateExact(disabledItems[index],unitToEnable)){disabledItems[index]=null
break}}
if(isExactRange)for(index=0;index<disabledItemsCount;index+=1){if(calendar.isDateOverlap(disabledItems[index],unitToEnable)){disabledItems[index]=null
break}}
if(matchFound){disabledItems.push(matchFound)}})}
return disabledItems.filter(function(val){return val!=null})}
DatePicker.prototype.nodes=function(isOpen){var
calendar=this,settings=calendar.settings,calendarItem=calendar.item,nowObject=calendarItem.now,selectedObject=calendarItem.select,highlightedObject=calendarItem.highlight,viewsetObject=calendarItem.view,disabledCollection=calendarItem.disable,minLimitObject=calendarItem.min,maxLimitObject=calendarItem.max,tableHead=(function(collection,fullCollection){if(settings.firstDay){collection.push(collection.shift())
fullCollection.push(fullCollection.shift())}
return _.node('thead',_.node('tr',_.group({min:0,max:DAYS_IN_WEEK-1,i:1,node:'th',item:function(counter){return[collection[counter],settings.klass.weekdays,'scope=col title="'+fullCollection[counter]+'"']}})))})((settings.showWeekdaysFull?settings.weekdaysFull:settings.weekdaysShort).slice(0),settings.weekdaysFull.slice(0)),createMonthNav=function(next){return _.node('div',' ',settings.klass['nav'+(next?'Next':'Prev')]+((next&&viewsetObject.year>=maxLimitObject.year&&viewsetObject.month>=maxLimitObject.month)||(!next&&viewsetObject.year<=minLimitObject.year&&viewsetObject.month<=minLimitObject.month)?' '+settings.klass.navDisabled:''),'data-nav='+(next||-1)+' '+
_.ariaAttr({role:'button',controls:calendar.$node[0].id+'_table'})+' '+'title="'+(next?settings.labelMonthNext:settings.labelMonthPrev)+'"')},createMonthLabel=function(){var monthsCollection=settings.showMonthsShort?settings.monthsShort:settings.monthsFull
if(settings.selectMonths){return _.node('select',_.group({min:0,max:11,i:1,node:'option',item:function(loopedMonth){return[monthsCollection[loopedMonth],0,'value='+loopedMonth+
(viewsetObject.month==loopedMonth?' selected':'')+
(((viewsetObject.year==minLimitObject.year&&loopedMonth<minLimitObject.month)||(viewsetObject.year==maxLimitObject.year&&loopedMonth>maxLimitObject.month))?' disabled':'')]}}),settings.klass.selectMonth,(isOpen?'':'disabled')+' '+
_.ariaAttr({controls:calendar.$node[0].id+'_table'})+' '+'title="'+settings.labelMonthSelect+'"')}
return _.node('div',monthsCollection[viewsetObject.month],settings.klass.month)},createYearLabel=function(){var focusedYear=viewsetObject.year,numberYears=settings.selectYears===true?5:~~(settings.selectYears/2)
if(numberYears){var
minYear=minLimitObject.year,maxYear=maxLimitObject.year,lowestYear=focusedYear-numberYears,highestYear=focusedYear+numberYears
if(minYear>lowestYear){highestYear+=minYear-lowestYear
lowestYear=minYear}
if(maxYear<highestYear){var availableYears=lowestYear-minYear,neededYears=highestYear-maxYear
lowestYear-=availableYears>neededYears?neededYears:availableYears
highestYear=maxYear}
return _.node('select',_.group({min:lowestYear,max:highestYear,i:1,node:'option',item:function(loopedYear){return[loopedYear,0,'value='+loopedYear+(focusedYear==loopedYear?' selected':'')]}}),settings.klass.selectYear,(isOpen?'':'disabled')+' '+_.ariaAttr({controls:calendar.$node[0].id+'_table'})+' '+'title="'+settings.labelYearSelect+'"')}
return _.node('div',focusedYear,settings.klass.year)}
return _.node('div',(settings.selectYears?createYearLabel()+createMonthLabel():createMonthLabel()+createYearLabel())+
createMonthNav()+createMonthNav(1),settings.klass.header)+_.node('table',tableHead+
_.node('tbody',_.group({min:0,max:WEEKS_IN_CALENDAR-1,i:1,node:'tr',item:function(rowCounter){var shiftDateBy=settings.firstDay&&calendar.create([viewsetObject.year,viewsetObject.month,1]).day===0?-7:0
return[_.group({min:DAYS_IN_WEEK*rowCounter-viewsetObject.day+shiftDateBy+1,max:function(){return this.min+DAYS_IN_WEEK-1},i:1,node:'td',item:function(targetDate){targetDate=calendar.create([viewsetObject.year,viewsetObject.month,targetDate+(settings.firstDay?1:0)])
var isSelected=selectedObject&&selectedObject.pick==targetDate.pick,isHighlighted=highlightedObject&&highlightedObject.pick==targetDate.pick,isDisabled=disabledCollection&&calendar.disabled(targetDate)||targetDate.pick<minLimitObject.pick||targetDate.pick>maxLimitObject.pick,formattedDate=_.trigger(calendar.formats.toString,calendar,[settings.format,targetDate])
return[_.node('div',targetDate.date,(function(klasses){klasses.push(viewsetObject.month==targetDate.month?settings.klass.infocus:settings.klass.outfocus)
if(nowObject.pick==targetDate.pick){klasses.push(settings.klass.now)}
if(isSelected){klasses.push(settings.klass.selected)}
if(isHighlighted){klasses.push(settings.klass.highlighted)}
if(isDisabled){klasses.push(settings.klass.disabled)}
return klasses.join(' ')})([settings.klass.day]),'data-pick='+targetDate.pick+' '+_.ariaAttr({role:'gridcell',label:formattedDate,selected:isSelected&&calendar.$node.val()===formattedDate?true:null,activedescendant:isHighlighted?true:null,disabled:isDisabled?true:null})),'',_.ariaAttr({role:'presentation'})]}})]}})),settings.klass.table,'id="'+calendar.$node[0].id+'_table'+'" '+_.ariaAttr({role:'grid',controls:calendar.$node[0].id,readonly:true}))+
_.node('div',_.node('button',settings.today,settings.klass.buttonToday,'type=button data-pick='+nowObject.pick+
(isOpen&&!calendar.disabled(nowObject)?'':' disabled')+' '+
_.ariaAttr({controls:calendar.$node[0].id}))+
_.node('button',settings.clear,settings.klass.buttonClear,'type=button data-clear=1'+
(isOpen?'':' disabled')+' '+
_.ariaAttr({controls:calendar.$node[0].id}))+
_.node('button',settings.close,settings.klass.buttonClose,'type=button data-close=true '+
(isOpen?'':' disabled')+' '+
_.ariaAttr({controls:calendar.$node[0].id})),settings.klass.footer)}
DatePicker.defaults=(function(prefix){return{labelMonthNext:'Next month',labelMonthPrev:'Previous month',labelMonthSelect:'Select a month',labelYearSelect:'Select a year',monthsFull:['January','February','March','April','May','June','July','August','September','October','November','December'],monthsShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],weekdaysFull:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],weekdaysShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],today:'Today',clear:'Clear',close:'Close',closeOnSelect:true,closeOnClear:true,format:'d mmmm, yyyy',klass:{table:prefix+'table',header:prefix+'header',navPrev:prefix+'nav--prev',navNext:prefix+'nav--next',navDisabled:prefix+'nav--disabled',month:prefix+'month',year:prefix+'year',selectMonth:prefix+'select--month',selectYear:prefix+'select--year',weekdays:prefix+'weekday',day:prefix+'day',disabled:prefix+'day--disabled',selected:prefix+'day--selected',highlighted:prefix+'day--highlighted',now:prefix+'day--today',infocus:prefix+'day--infocus',outfocus:prefix+'day--outfocus',footer:prefix+'footer',buttonClear:prefix+'button--clear',buttonToday:prefix+'button--today',buttonClose:prefix+'button--close'}}})(Picker.klasses().picker+'__')
Picker.extend('pickadate',DatePicker)}));Picker.lang={"de-DE":{labelMonthPrev:'zurück',labelMonthNext:'Vor',firstDay:1,format:'ddd, d mmm, yyyy',formatShort:'ddd, d mmm',formatSubmit:'dd.mm.yyyy'},"en-AU":{labelMonthPrev:'Previous month',labelMonthNext:'Next month',firstDay:1,format:'ddd, d mmm, yyyy',formatShort:'ddd, d mmm',formatSubmit:'dd/mm/yyyy'},"en-GB":{labelMonthPrev:'Previous month',labelMonthNext:'Next month',firstDay:1,format:'ddd, d mmm, yyyy',formatShort:'ddd, d mmm',formatSubmit:'dd/mm/yyyy'},"en-US":{labelMonthPrev:'Previous month',labelMonthNext:'Next month',format:'ddd, mmm d, yyyy',formatShort:'ddd, mmm d',formatSubmit:'mm/dd/yyyy'},"fr-FR":{labelMonthPrev:'Précédent',labelMonthNext:'Suivant',firstDay:1,format:'ddd. d mmm yyyy',formatShort:'ddd. d mmm',formatSubmit:'dd/mm/yyyy'},"es":{labelMonthPrev:'Ant',labelMonthNext:'Sig',firstDay:1,format:'ddd, d mmm, yyyy',formatShort:'ddd, d mmm',formatSubmit:'dd/mm/yyyy'},"ja-JP":{labelMonthPrev:'前',labelMonthNext:'次',firstDay:0,format:'yyyy年 mmm d日 (ddd)',formatShort:'mmm d日 (ddd)',formatSubmit:'yyyy/mm/dd'},"zh-CN":{labelMonthPrev:'上月',labelMonthNext:'下月',firstDay:0,format:'yyyy年 mmm d日, ddd',formatShort:'mmm d日, ddd',formatSubmit:'yyyy-mm-dd'},"pt-BR":{labelMonthPrev:'Anterior',labelMonthNext:'Pr&oacute;ximo',firstDay:0,format:'yyyy, mmm d, ddd',formatShort:'mmm d, ddd',formatSubmit:'dd/mm/yyyy'}}
if(![].map){Array.prototype.map=function(callback,self){var array=this,len=array.length,newArray=new Array(len)
for(var i=0;i<len;i++){if(i in array){newArray[i]=callback.call(self,array[i],i,array)}}
return newArray}}
if(![].filter){Array.prototype.filter=function(callback){if(this==null)throw new TypeError()
var t=Object(this),len=t.length>>>0
if(typeof callback!='function')throw new TypeError()
var newArray=[],thisp=arguments[1]
for(var i=0;i<len;i++){if(i in t){var val=t[i]
if(callback.call(thisp,val,i,t))newArray.push(val)}}
return newArray}}
if(![].indexOf){Array.prototype.indexOf=function(searchElement){if(this==null)throw new TypeError()
var t=Object(this),len=t.length>>>0
if(len===0)return-1
var n=0
if(arguments.length>1){n=Number(arguments[1])
if(n!=n){n=0}
else if(n!==0&&n!=Infinity&&n!=-Infinity){n=(n>0||-1)*Math.floor(Math.abs(n))}}
if(n>=len)return-1
var k=n>=0?n:Math.max(len-Math.abs(n),0)
for(;k<len;k++){if(k in t&&t[k]===searchElement)return k}
return-1}}
var nativeSplit=String.prototype.split,compliantExecNpcg=/()??/.exec('')[1]===undefined
String.prototype.split=function(separator,limit){var str=this
if(Object.prototype.toString.call(separator)!=='[object RegExp]'){return nativeSplit.call(str,separator,limit)}
var output=[],flags=(separator.ignoreCase?'i':'')+
(separator.multiline?'m':'')+
(separator.extended?'x':'')+
(separator.sticky?'y':''),lastLastIndex=0,separator2,match,lastIndex,lastLength
separator=new RegExp(separator.source,flags+'g')
str+=''
if(!compliantExecNpcg){separator2=new RegExp('^'+separator.source+'$(?!\\s)',flags)}
limit=limit===undefined?-1>>>0:limit>>>0
while(match=separator.exec(str)){lastIndex=match.index+match[0].length
if(lastIndex>lastLastIndex){output.push(str.slice(lastLastIndex,match.index))
if(!compliantExecNpcg&&match.length>1){match[0].replace(separator2,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===undefined){match[i]=undefined}}})}
if(match.length>1&&match.index<str.length){Array.prototype.push.apply(output,match.slice(1))}
lastLength=match[0].length
lastLastIndex=lastIndex
if(output.length>=limit){break}}
if(separator.lastIndex===match.index){separator.lastIndex++}}
if(lastLastIndex===str.length){if(lastLength||!separator.test('')){output.push('')}}else{output.push(str.slice(lastLastIndex))}
return output.length>limit?output.slice(0,limit):output};
(function($,undefined){if($.ui&&$.ui.dialog){$.ui.dialog.overlay.events=$.map('focus,keydown,keypress'.split(','),function(event){return event+'.dialog-overlay';}).join(' ');}}(jQuery));(function($){$.fn.miLightboxes=function(options){var s=$.extend({sizeWidth:300,sizeHeight:200,headerFormat:1,lightBoxClass:'default-lightbox',hOverride:'',tOverride:'',buttonsArray:[],modal:true,position:'center',draggable:false,resizable:false,external:false,content:''},options||{});var modalBox=$(this);var mHeaders=modalBox.data('options');var headers=function(h){var headerBlock='<p id="modal-header"><a href="#" title="Close" class="close-window">Close-default</a></p>';;var print,close;var alertImageSrc,alertImageAlt,alertTitle='';if(s.hOverride.length!=''){headerBlock=s.hOverride;}else{switch(h){case 1:if(mHeaders.close.length>0)
{close=mHeaders.close;}
if(mHeaders.print.length>0)
{print=mHeaders.print;}
headerBlock='<p id="modal-header" class="popup">'
+'<a href="#" title="'+close+'" class="close-window">'+close+'</a></p>';break;case 2:if(mHeaders.alertimage.length>0)
alertImageSrc=mHeaders.alertimage;if(mHeaders.alertimagealt.length>0)
alertImageAlt=mHeaders.alertimagealt;if(s.tOverride==''){if(mHeaders.alerttitle.length>0)
alertTitle=mHeaders.alerttitle;}else{alertTitle=s.tOverride;}
headerBlock='<img src="'+alertImageSrc+'"/>'+alertTitle;break;case 3:if(mHeaders.close.length>0)
{close=mHeaders.close;}
if(mHeaders.print.length>0)
{print=mHeaders.print;}
headerBlock='<p id="modal-header" class="popup">'
+'<a href="#" title="'+print+'" class="print-window">'+print+'</a>'
+'<a href="#" title="'+close+'" class="close-window">'+close+'</a></p>';break;}}
return headerBlock;};var lightBoxButtons=function(buttons){var buttonOpt={};if(typeof buttons!="undefined")
{for(i=0;i<buttons.length;i++)
{buttonOpt[buttons[i].label]=buttons[i].callback;}}
return buttonOpt;}
modalBox.dialog({width:s.sizeWidth,height:s.sizeHeight,modal:s.modal,resizable:s.resizable,position:s.position,buttons:lightBoxButtons(s.buttonsArray),dialogClass:s.lightBoxClass,title:headers(s.headerFormat),draggable:s.draggable,bgiframe:true,open:function(){if(s.external==true){$(modalBox).load(s.content);}else{$(modalBox).html(s.content);}
$(this).parent().find('.ui-dialog-buttonpane button').addClass('submit widget-button');$('.print-window').bind('click',function(){var thePopup=window.open('',"PrintWindow",'height=400,width=730,location=yes,left=300,top=300,scrollbars=yes,menubars=no,toolbars=no,resizable=no');var tmp=thePopup.document;tmp.write($('#modal-box').html());tmp.close();thePopup.print();thePopup.close();return false;});$('.close-window').bind('click',function(){modalBox.dialog('close');return false;});},close:function(){modalBox.dialog('destroy').html('');}});}})(jQuery);(function($){var methods={init:function(options){var $this=$(this),settings;settings={contentItems:'ul.content li',sliderItems:'ol.slider li',prev:'.prev',next:'.next',timeBetweenAutoSwitch:7000,speed:500};return this.each(function(){var $contentItems,$sliderItems,$prev,$next,sliderItemSelectors=[],timeBetweenAutoSwitch=null;if(options){$.extend(settings,options);}
$contentItems=$($this.selector+' '+settings.contentItems);$sliderItems=$($this.selector+' '+settings.sliderItems);$prev=$($this.selector+' '+settings.prev);$next=$($this.selector+' '+settings.next);$().add($sliderItems).add($prev).add($next).addClass('ui-state-default').hover(function(event){$(this).addClass('ui-state-hover');},function(event){$(this).removeClass('ui-state-hover');}).bind('focusin',function(event){$(this).addClass('ui-state-focus');}).bind('focusout',function(event){$(this).removeClass('ui-state-focus');}).mousedown(function(event){$(this).addClass('ui-state-active');}).mouseup(function(event){$(this).removeClass('ui-state-active');});$sliderItems.addClass('ui-slider-handle').each(function(index){sliderItemSelectors.push($sliderItems.selector+' :eq('+index+')');});$sliderItems.eq(0).addClass('ui-slider-handle-current');$contentItems.eq(0).addClass('visible-item');if($this.hasClass('billboard-autoplay')){timeBetweenAutoSwitch=settings.timeBetweenAutoSwitch;}
$(this).jCarouselLite({btnNext:$this.selector+' .next',btnPrev:$this.selector+' .prev',btnGo:sliderItemSelectors,circular:true,visible:1,scroll:1,start:0,auto:timeBetweenAutoSwitch,speed:settings.speed,beforeStart:function($contentItem){$this.addClass('billboard-state-sliding');},afterEnd:function($contentItem){var index,$sliderItem,$expandedContentItems;$this.removeClass('billboard-state-sliding');index=$contentItems.index($contentItem);if(index==-1){$expandedContentItems=$($contentItems.selector);index=$expandedContentItems.index($contentItem);if(index>0){index=0;}
else{index=$contentItems.size()-1;}}
$sliderItem=$sliderItems.eq(index);$contentItems.removeClass('visible-item');$contentItem.addClass('visible-item');$sliderItems.removeClass('ui-slider-handle-current');$sliderItem.addClass('ui-slider-handle-current');$this.trigger('itemSwitched.carousel',[index,$contentItem,$sliderItem]);}}).addClass('billboard-component');if(settings.itemSwitched){$this.bind('itemSwitched.carousel',settings.itemSwitched);}});}};$.fn.miCarousel=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}
else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}
else{$.error('Method '+method+' does not exist on miCarousel');}};})(jQuery);var $pageNavigation=$('.nav-container'),$subheader=$('#t-subheader');$pageNavigation.siteMenu({beforeOpen:function(){if(!$subheader.hasClass('t-white-label-site')){$subheader.find('.l-panel > a').removeClass('is-selected');$subheader.find('.l-panel > .action-panel').addClass('is-hidden');}}});$(function(){var $datePickerTrigger=$('body.lt-ie9').find('.hasDatepicker,.ui-datepicker-trigger');if($datePickerTrigger.length){$datePickerTrigger.click(function(event){setTimeout(function(){var $trigger=$(event.target),$datePicker=$('#ui-datepicker-div'),datePickerHeight=$datePicker.height(),doc=document.documentElement,top=doc.scrollTop+$trigger.offset().top;if(top+datePickerHeight>doc.scrollTop+doc.clientHeight){top-=datePickerHeight;}else{top+=$trigger.outerHeight();}
$datePicker.css('top',top);},50);});}});function showFullSearchForm(){$('#find-panel').find('#is-hidden-search-options, #is-saved-hotels').fadeIn('slow');$('#find-panel').find('.t-search-links').addClass('is-shown');$('#find-panel').find('.removed-l-split-6of9').removeClass('removed-l-split-6of9').addClass('l-split-6of9');$('#find-panel').find('.is-saved-hotels').hide();if($('#find-panel').find('#global-header-find-a-hotel').length){$('#global-header-find-a-hotel').find('.standard-search-fields, .two-column').fadeIn('slow');}}
$(function(){var imgPath=function(){var path;if($.data){path=$("body").data('imgpath');if(typeof path==='undefined'){path=$("#page-container").data('imgpath')||"";}}
else{path="";}
return path;}();var $inPageNav=$('body:not(.lt-ie9) .l-in-page-navigation');if($inPageNav.length>0){$inPageNav.inPageNavigation();}
$("#site-tools > li > ul > li:first-child, #nav > li > ul > li:first-child, #sub-nav ul > li > ul > li:first-child").css("padding-top","10px");$("#footer ul > li > ul > li:last-child").css("padding-bottom","10px");$("#site-tools > li:has(ul) > a").css("text-decoration",'none');$("#sub-nav ul > li:has(ul) > a, #footer-links > li:has(ul) > a").css("text-decoration",'none').click(function(event){event.preventDefault();});$("#site-tools > li, #nav > li, #sub-nav ul > li, #footer-links > li").hoverIntent({interval:50,timeout:10,over:function(){emailSignupContainer=$(".email-signup-control").hasClass('widget-expanded');if(emailSignupContainer!=true){$(this).addClass("active");var ul=$(this).children("ul");var maxLeft=10000;if(!($("#header").length>0)&&($("#footer").length>0)){maxLeft=$("#footer").width()-ul.width();}else{maxLeft=$("#header").width()-ul.width();}
var liLeft=$(this).position().left;var ulLeft=liLeft>maxLeft?maxLeft:liLeft;ul.css("left",ulLeft);if($(this).parent().hasClass("drop-up")){ul.css("bottom",$("#footer").height()-$(this).position().top-1);}else{ul.css("top",$(this).position().top+$(this).height());}
ul.slideDown("fast");}},out:function(){$(this).removeClass("active");$(this).children("ul").fadeOut(200);}});$("#site-tools > li a, #site-tools > li:has(ul) > a, #nav > li:has(ul) > a, #footer-links >li a, #footer-links > li:has(ul) > a").focus(function(){$("ul#submenu-links").fadeOut(200);var ul=$(this).siblings("ul");var maxLeft=$("#header").width()-ul.width();var liLeft=$(this).position().left;var ulLeft=liLeft>maxLeft?maxLeft:liLeft;ul.css('left',ulLeft);ul.fadeIn(200);});$("#nav li:last-child ul li:last-child a").blur(function(){$(this).parents('ul#submenu-links').fadeOut(200);});$("#deals-results-nav select#pagingOptions").attr('aria-labelledby','collapse');$(".results-page-container select#pagingOptions").attr('aria-labelledby','collapse');$("#reservations-summary-container ul li input[type=radio]").click(function()
{$("#reservations-summary-container ul li input[type=radio]").attr('aria-labelledby','Unchecked');$(this).attr('aria-labelledby','Checked');});$('#header-find-panel-trigger').click(function(event){if($(this).hasClass("is-selected")){$(this).find('.js-find-hidden-text').html("Collapsed");}
else{$(this).find('.js-find-hidden-text').html("Expanded");}});$('#header-reservation-panel-trigger').click(function(event){if($(this).hasClass("is-selected")){$(this).find('.js-find-hidden-text').html("Collapsed");}
else{$(this).find('.js-find-hidden-text').html("Expanded");}});$("form table.lightTan input[type=radio]").attr('aria-labelledby','radiobutton');$("form table.lightTan input[type=text]").attr('aria-labelledby','TextInputRequired');$("form table.lightTan select").attr('aria-labelledby','dropdown');$("form table.lightTan textarea").attr('aria-labelledby','textArea');var $footerLinksTitle=$(".footer-links-title"),$footerLinks=$("#footer-links");function useFooterLinksDrawer(){var useDrawer=false;if(typeof Response!=='undefined'){useDrawer=Response.band(0,559);}
return useDrawer;}
function initFooterLinks(){if(useFooterLinksDrawer()){$footerLinksTitle.attr('tabindex','0');}else{$footerLinksTitle.addClass('widget-expanded').attr('tabindex','-1');$footerLinks.css('display','block');}}
initFooterLinks();if(typeof Response!=='undefined'){Response.resize(function(){initFooterLinks();});}
$footerLinksTitle.click(function(event){event.preventDefault();if(useFooterLinksDrawer()){$footerLinksTitle.toggleClass('widget-expanded');$footerLinks.slideToggle('slow',function(){$(this).css('overflow','');});}});var newPadding=3;var toggleComponents=[{control:$("#find-a-hotel-control"),selectorKeys:{control:"#find-a-hotel-control",widget:"#find-a-hotel-container"},widget:$("#find-a-hotel-container"),swapImg:function(control){var findIcon=$(control).find("span").attr("class");var findButton=$(control).attr("class");var newSpanClass=($(control).hasClass("widget-expanded")?findIcon.replace("plus-icon",'minus-icon'):findIcon.replace("minus-icon",'plus-icon'));var newButtonClass=($(control).hasClass("widget-expanded")?findButton.replace("button-collapsed",'button-expanded'):findButton.replace("button-expanded",'button-collapsed'));$("span",$(control)).attr("class",newSpanClass);$(control).attr("class",newButtonClass);},widgetLeftPos:function(){return'0';},widgetTopPos:function(){return $("#header").position().top+$("#header").height();}},{control:$("#my-account-control"),selectorKeys:{control:"#my-account-control",widget:"#my-account-container"},widget:$("#my-account-container"),swapImg:function(control){var newBGPos=$(control).hasClass("widget-expanded")?"0 -87px":"0 -51px";var widgetStateOpened=$(control).hasClass("widget-expanded")?"block":"none";var widgetStateClosed=$(control).hasClass("widget-expanded")?"none":"block";$(".my-account-control-title",".my-account-control-container").css("backgroundPosition",newBGPos);$("#widget-opened").css("display",widgetStateOpened);$("#widget-closed").css("display",widgetStateClosed);},widgetLeftPos:function(){return $(".my-account-control-container").position().left;},widgetTopPos:function(){return $(".my-account-control-container").position().top+$(".my-account-control-container").height()+newPadding}},{control:$("#seo-links-control"),selectorKeys:{control:"#seo-links-control",widget:"#seo-links"},widget:$("#seo-links"),swapImg:function(){var newBGPos2=this.control.hasClass("widget-expanded")?"7px -652px":"7px -1089px";$("#seo-links-control").css("backgroundPosition",newBGPos2);},widgetLeftPos:function(){return this.control.position().left;},widgetTopPos:function(){return this.control.position().top+this.control.height();}},{control:$(".email-signup-control"),selectorKeys:{control:".email-signup-control",widget:"#email-signup-container"},widget:$("#email-signup-container"),controlClass:"email-signup-control",swapImg:function(control){var newBGPosE=$(control).hasClass("widget-expanded")?"0 -377px":"0 -341px";$(control).css("backgroundPosition",newBGPosE);},widgetLeftPos:function(){return this.control.is('a')?this.control.parent().position().left:this.control.position().left;},widgetTopPos:function(){return 17;},openEventName:"isWidgetLoaded",openEventArgs:{params:{action:"/profile/ajax/signUp",uniqueId:"global-header-",returnTo:window.location.href}},openEventFunction:function(event)
{var component=event.data;var control=$(component.selectorKeys.control);var ajaxAction="#";if(control[0]){var requestUri=control[0].pathname;var actionSuffixRegex=/\W{1,}\w+\W{1,}mi$/i;if(requestUri.indexOf("Channels")<0){ajaxAction=component.openEventArgs.params.action+".mi";}else{ajaxAction="/Channels"+component.openEventArgs.params.action+actionSuffixRegex.exec(requestUri);}}
var widget=$(component.selectorKeys.widget);if(widget.is(".isEmailSignUpAjaxShownAlready")){ajaxAction=ajaxAction+"?isEmailSignUpAjaxShownAlready=true";widget.removeClass("isEmailSignUpAjaxShownAlready");}
$.get(ajaxAction,component.openEventArgs.params,function(data,textStatus,XMLHttpRequest)
{widget.empty();widget.append(data);$('.close-widget',widget).click(function(event){control.click();});$("#cancel-link a",widget).click(function(event){event.preventDefault();control.click();});});}}];$.each(toggleComponents,function(){var component=this;var widget=$(component.selectorKeys.widget);var control=$(component.selectorKeys.control);$('.close-widget',widget).click(function(event){control.click();});if(component.openEventName){widget.bind(component.openEventName,component,component.openEventFunction);control.click(function(event){event.preventDefault();var isWidgetOpen=widget.data(component.openEventName);if(!isWidgetOpen)
{widget.data(component.openEventName,true);widget.triggerHandler(component.openEventName);}else
{widget.data(component.openEventName,false);}
control.toggleClass("widget-expanded");widget.css("visibility",'visible');widget.css("top",component.widgetTopPos());widget.css("left",component.widgetLeftPos());widget.slideToggle("slow");component.swapImg(this);});if(widget.is(".isEmailSignUpAjaxShownAlready")){control.click();}}else{control.bind('keypress click',(function(event){var code=(event.keyCode?event.keyCode:event.which);if(code===13||event.type==="click"){event.preventDefault();control.toggleClass("widget-expanded");widget.css("visibility",'visible');widget.css("top",component.widgetTopPos());widget.css("left",component.widgetLeftPos());widget.slideToggle("slow");widget.triggerHandler("widgetOpened");component.swapImg(this);}}));}});$("#hws p.bookdirect-offer-details.t-icon-s a").attr('rel','external');$("#header-container li:not(:has(ul)) > a[rel$='external'], #footer li:not(:has(ul)) > a[rel$='external'], #layout-body-container a[rel$='external'], #site-section-nav a[rel$='external'], #primary-nav a[rel$='external'], #hws p.bookdirect-offer-details.t-icon-s a[rel$='external']").externalLinks({imgPath:imgPath});$('a.sendto-link').makeSendtoLink();$('#win-util-print').on('click',function(e){window.print();e.preventDefault();});$('#win-util-close').click(function(e){window.close();e.preventDefault();});$('#win-util-self-open').click(function(){self.opener.location=$(this).attr('href');self.close();return false;});var myAccountContainer=$("#my-account-container");$('#my-account-accordion').accordion({header:'dt',autoHeight:false,clearStyle:true,active:false,collapsible:true,icons:{'header':'accordion-closed-icon','headerSelected':'accordion-open-icon'},change:function(event,ui){var $this=$(this),$uiContent=$(ui.newContent);if($uiContent.length>0)
{if($uiContent.val().toLowerCase()==='h3'||$uiContent.val().toLowerCase()==='div'){$uiContent.closest('dd').css('padding-top','5px');}
else if($uiContent.val().toLowerCase()==='p'){$uiContent.closest('dd').css('padding-top','0');}}}});$('.ui-accordion-header').attr('tabindex','');var isOpenAccountWidget="false";if($(myAccountContainer).length>0)
{isOpenAccountWidget=$(myAccountContainer).data('openaccountwidget');if(isOpenAccountWidget===true)
{$("#widget-closed").css("display","none");$('#my-account-control').click();}
else{$("#widget-opened").css("display","none");}}
var $myAccntContainerForm=$('#my-account-container form');$myAccntContainerForm.keypress(function(e){var code=(e.keyCode?e.keyCode:e.which);if(code===13){$('#my-account-signin-button, .my-account-signin-button',$myAccntContainerForm).focus();}});var myAccountRememberMe=$(':input[name="rememberMe"]');if($(myAccountRememberMe).length&&$(myAccountRememberMe).length>0)
{var rememberMe=true;var siteId="";var siteIdField=$("input#siteId");if(siteIdField.length>0&&siteIdField.val()!==undefined){siteId=siteIdField.val();}
if(document.cookie!==null){var cookies=document.cookie.split("; ");for(i=0;i<cookies.length;i++){var nameAndValue=cookies[i].split("=");if((nameAndValue.length===2)&&(nameAndValue[0]==="RememberMe")&&(nameAndValue[1]==="false")){rememberMe=false;}}}
$(myAccountRememberMe).attr('checked',rememberMe);}
ClickToSearch.init();$(".search-saved-hotels-tabs, .single-search-tabs").tabs();var singleSearchAutoSuggest=$('#single-search-autosuggest').val();var $hotelDirectoryFlag=$('input[name="hotelDirectoryPageType"]');if(singleSearchAutoSuggest=='false'&&$hotelDirectoryFlag.length>0&&$hotelDirectoryFlag.val()!='MiniStores'){$('#find-a-hotel-form input.search-city, #edit-search-form input.search-city, #in-a-city-form input.search-city').val('');$('#find-a-hotel-form .search-state, #edit-search-form .search-state, #in-a-city-form .search-state').val('');$('#find-a-hotel-form .search-country, #edit-search-form .search-country, #in-a-city-form .search-country').val('');}
$('form input.search-city').focusin(function(){var form=this.form;$(form).find('input.search-lat').val('');$(form).find('input.search-long').val('');$(form).find('input.city-pop').val('');$(form).find('input.city-pop-density').val('');$(this).enableAutoComplete();});$('form input.single-search-destination').focusin(function(){if(SearchForm.hasFeature($(this.form),'autocomplete')){return;}
$(this).enableAutoComplete();});$('form input.single-search-location').focusin(function(){$(this).enableAutoComplete();$(this.form).find('input.search-lat-near-address, input.search-long-near-address').val('');$('#you-searched input[name="destinationAddress.addressLine1"], #you-searched input[name="destinationAddress.city"],#you-searched input[name="destinationAddress.stateProvince"],#you-searched input[name="destinationAddress.country"],#you-searched input[name="destinationAddress.postalCode"]').val('');$('input.ss-tracking-var-city,input.ss-tracking-var-state,input.ss-tracking-var-country').val('');});if($('input[name="siteId"]').val()==''||$('input[name="siteId"]').val()=='US'){$('form input.largestMeetingSpace').on("keydown keyup input paste",function(){findMeetingSpaceComponent.calculateMeetingSpaceSize($(this));});}
var singleSearchDateFormat=$('input#single-search-date-format').val();$('#find-a-hotel-form input.calendar-module-fromdate, #find-a-hotel-form input.calendar-module-todate, #flash-card-form-saved-hotel-search-form input.calendar-module-fromdate, #flash-card-form-saved-hotel-search-form input.calendar-module-todate, #global-header-saved-hotel-search-form input.calendar-module-fromdate, #global-header-saved-hotel-search-form input.calendar-module-todate, #find-meeting-form input.calendar-module-fromdate, #find-meeting-form input.calendar-module-todate, #edit-search-form input.calendar-module-fromdate, #edit-search-form input.calendar-module-todate, #search-forms input.calendar-module-fromdate, #search-forms input.calendar-module-todate').focus(function(){var form=this.form;if($(this).val()==singleSearchDateFormat){$(form).find('input.calendar-module-fromdate, input.calendar-module-todate').val('');$(form).find('input.calendar-module-fromdate, input.calendar-module-todate').css('color','#333');if(form.id=='find-a-hotel-form'){$('#flash-card-form-saved-hotel-search-form, #global-header-saved-hotel-search-form').find('input.calendar-module-fromdate, input.calendar-module-todate').css('color','#333');$('#flash-card-form-saved-hotel-search-form, #global-header-saved-hotel-search-form').find('input.calendar-module-fromdate, input.calendar-module-todate').val('');}
if(form.id=='flash-card-form-saved-hotel-search-form'){$('#find-a-hotel-form, #find-meeting-form').find('input.calendar-module-fromdate, input.calendar-module-todate').css('color','#333');$('#find-a-hotel-form, #find-meeting-form').find('input.calendar-module-fromdate, input.calendar-module-todate').val('');}
if(form.id=='global-header-saved-hotel-search-form'){$('#find-a-hotel-form, #find-meeting-form').find('input.calendar-module-fromdate, input.calendar-module-todate').css('color','#333');$('#find-a-hotel-form, #find-meeting-form').find('input.calendar-module-fromdate, input.calendar-module-todate').val('');}}});$('#flash-card-form-find-a-hotel-tab a, #global-header-find-a-hotel-tab a').click(function(){if($(this).parent().attr('class')=='first ui-state-default ui-corner-top ui-state-hover ui-state-focus'){$('#find-a-hotel-form .search-city, #find-a-hotel-form .search-state, #find-a-hotel-form .search-country').val('');}});$('form#find-a-hotel-form, form#edit-search-form, form#in-a-city-form, form#near-address-form, #search-meeting-space').submit(function(){searchType=$(this).find('input[name="searchType"]').val();if(searchType=='InCity'){var hnmVal=$(this).find('.single-search-destination').val();if(hnmVal!=null&&hnmVal.indexOf('Near ')>=0){$(this).find('input.autosuggest-item-type').val('hotelsnearme');}
if($(this).find('.is-location-nearme-active').length>0){$(this).find('.single-search-location').val('');}else{$(this).find('input.searchRadius, input.search-lat-near-address, input.search-long-near-address, .single-search-location').val('');}}else if(searchType=='NearAddress'){$(this).find('input.search-lat, input.search-long, .single-search-destination, input.search-city, input.search-state, input.search-country, select.search-state, select.search-country').val('');}});if($('#single-search-type').val()=='true'){$(".search-saved-hotels-tabs").tabs({selected:1});$(".single-search-tabs").tabs({selected:1});$(".m-search-tabs").tabs({selected:1});$('#find-a-hotel-form input[name="searchType"], #edit-search-form input[name="searchType"]').attr({'value':'NearAddress'});$('#find-a-hotel-form .single-search-location, #near-address-form .single-search-location, #edit-search-form .single-search-location').css('display','block');$('#find-a-hotel-form #single-search-destination, #near-address-form .single-search-destination, #edit-search-form .single-search-destination, #edit-search-form #single-search-destination').css('display','none');$('#find-a-hotel-form .city-pop, #edit-search-form .city-pop, #search-forms .city-pop, #find-a-hotel-form .city-pop-density, #edit-search-form .city-pop-density, #search-forms .city-pop-density, #find-a-hotel-form .search-lat, #edit-search-form .search-lat, #search-forms .search-lat, #find-a-hotel-form .search-long, #edit-search-form .search-long, #search-forms .search-long').attr({'name':''});$('#find-a-hotel-form .search-lat-near-address, #edit-search-form .search-lat-near-address, #search-forms .search-lat-near-address').attr({'name':'destinationAddress.latitude'});$('#find-a-hotel-form .search-long-near-address, #edit-search-form .search-long-near-address, #search-forms .search-long-near-address').attr({'name':'destinationAddress.longitude'});$('#edit-search-form .single-search-location-title label').attr('for','editsingle-location');var searchLat=$('input.search-lat').val();var searchLong=$('input.search-long').val();$('input.search-lat-near-address').val(searchLat);$('input.search-long-near-address').val(searchLong);$('#find-a-hotel-form input.search-lat, #find-a-hotel-form input.search-long, #find-a-hotel-form input.city-pop, #find-a-hotel-form input.city-pop-density, #search-forms input.search-lat, #search-forms input.search-long, #search-forms input.city-pop, #search-forms input.city-pop-density, #edit-search-form input.search-lat, #edit-search-form input.search-long,#edit-search-form input.city-pop,#edit-search-form input.city-pop-density').val('');}
else{$('#search-form-component .single-search-location, #in-a-city-form .single-search-location, #edit-search-form .single-search-location').css('display','none');$('#search-form-component .single-search-destination, #in-a-city-form .single-search-destination, #edit-search-form .single-search-destination, #edit-search-form #single-search-destination').css('display','block');$('#edit-search-form .single-search-location-title label').attr('for','editsearch-location');}
$('ul#search-saved li:eq(0) a').click(function(){$('#find-a-hotel-form input[name="searchType"]').attr({'value':'InCity'});$('#find-a-hotel-form .single-search-location').css('display','none');$('#find-a-hotel-form #single-search-destination').css('display','block');$('#find-a-hotel-form .search-lat-near-address, #find-a-hotel-form .search-long-near-address').attr({'name':''});$('#find-a-hotel-form .search-lat').attr({'name':'destinationAddress.latitude'});$('#find-a-hotel-form .search-long').attr({'name':'destinationAddress.longitude'});$('#find-a-hotel-form .single-search-location-title label').attr('for','search-location');});$('ul#search-saved li:eq(1) a').click(function(){$('#find-a-hotel-form input[name="searchType"]').attr({'value':'NearAddress'});$('#find-a-hotel-form .single-search-location').css('display','block');$('#find-a-hotel-form #single-search-destination').css('display','none');$('#find-a-hotel-form .search-lat, #find-a-hotel-form .search-long').attr({'name':''});$('#find-a-hotel-form .city-pop, #find-a-hotel-form .city-pop-density').attr({'name':''});$('#find-a-hotel-form .search-lat-near-address').attr({'name':'destinationAddress.latitude'});$('#find-a-hotel-form .search-long-near-address').attr({'name':'destinationAddress.longitude'});$('#find-a-hotel-form .single-search-location-title label').attr('for','single-location');});$('.m-search-form .js-single-search-incity').click(function(e){$('#find-a-hotel-form .city-pop, #edit-search-form .city-pop, #search-forms .city-pop, #find-a-hotel-form .city-pop-density, #edit-search-form .city-pop-density, #search-forms .city-pop-density, #find-a-hotel-form .search-lat, #edit-search-form .search-lat, #search-forms .search-lat, #find-a-hotel-form .search-long, #edit-search-form .search-long, #search-forms .search-long').attr({'name':''});$('#find-a-hotel-form input.search-lat, #find-a-hotel-form input.search-long, #find-a-hotel-form input.city-pop, #find-a-hotel-form input.city-pop-density, #search-forms input.search-lat, #search-forms input.search-long, #search-forms input.city-pop, #search-forms input.city-pop-density, #edit-search-form input.search-lat, #edit-search-form input.search-long,#edit-search-form input.city-pop,#edit-search-form input.city-pop-density').val('');$('#find-a-hotel-form .city-pop, #find-a-hotel-form .city-pop-density').attr({'name':''});$('.m-search-form input[name="destinationAddress.addressLine1"], .m-search-form input[name="destinationAddress.city"], .m-search-form input[name="destinationAddress.stateProvince"], .m-search-form input[name="destinationAddress.country"], .m-search-form input[name="destinationAddress.postalCode"]').val('');$('.m-search-form input[name="searchType"]').attr({'value':'InCity'});$('.m-search-form .single-search-location').css('display','none');$('.m-search-form .single-search-location-title label').attr('for','editsearch-location');$('.m-search-form .meetings-near-address-search').css('display','block');$('.m-search-form .single-search-destination,.m-search-form #single-search-destination').css('display','block');if($('.m-search-tabs #meetingevent-city-airport #editsearch-location').hasClass('hidden')){$('.m-search-tabs #meetingevent-city-airport .single-search-destination').css('display','none');}
$('.location-trigger').css('display','block');$('.m-search-form .search-lat-near-address, .m-search-form .search-long-near-address').attr({'name':''});$('.m-search-form .search-lat').attr({'name':'destinationAddress.latitude'});$('.m-search-form .search-long').attr({'name':'destinationAddress.longitude'});$('.m-search-form input#city-airport').attr({'name':'destinationAddress.city'});$('.m-search-form input#destinationAddress.stateProvince').attr({'name':'destinationAddress.stateProvince'});$('.m-search-form input#destinationAddress.country').attr({'name':'destinationAddress.country'});$('.m-search-form .search-locality').attr({'name':''});$('.m-search-form .search-adminDistrict').attr({'name':''});$('.m-search-form .search-countryRegion').attr({'name':''});});$('.m-search-form .js-single-search-nearaddress').click(function(e){$('.m-search-form input[name="searchType"]').attr({'value':'NearAddress'});$('.m-search-form .single-search-location').css('display','block');$('.m-search-form .single-search-location-title label').attr('for','editsingle-location');$('.m-search-form .single-search-destination,.m-search-form #single-search-destination').css('display','none');if(!$('.m-search-tabs #meetingevent-city-airport #editsearch-location').hasClass('hidden')){$('.m-search-tabs #meetingevent-city-airport .single-search-destination').css('display','block');}
$('.location-trigger').css('display','none');$('.m-search-form .search-lat, .m-search-form .search-long').attr({'name':''});$('.m-search-form .search-lat-near-address').attr({'name':'destinationAddress.latitude'});$('.m-search-form .search-long-near-address').attr({'name':'destinationAddress.longitude'});$('.m-search-form input#city-airport').attr({'name':''});$('.m-search-form input#destinationAddress.stateProvince').attr({'name':''});$('.m-search-form input#destinationAddress.country').attr({'name':''});$('.m-search-form .search-locality').attr({'name':'destinationAddress.city'});$('.m-search-form .search-adminDistrict').attr({'name':'destinationAddress.stateProvince'});$('.m-search-form .search-countryRegion').attr({'name':'destinationAddress.country'});});$('#search-forms #tabs li a').click(function(){if($(this).attr('id')=='city-tab-link')
{$('#in-a-city-form .single-search-location').css('display','none');$('#in-a-city-form .single-search-destination').css('display','block');$('#search-forms .search-lat-near-address, #search-forms .search-long-near-address').attr({'name':''});$('#search-forms .search-lat').attr({'name':'destinationAddress.latitude'});$('#search-forms .search-long').attr({'name':'destinationAddress.longitude'});$('#search-forms input#city-airport').attr({'name':'destinationAddress.city'});$('#search-forms input#destinationAddress.stateProvince').attr({'name':'destinationAddress.stateProvince'});$('#search-forms input#destinationAddress.country').attr({'name':'destinationAddress.country'});$('#search-forms .search-locality').attr({'name':''});$('#search-forms .search-adminDistrict').attr({'name':''});$('#search-forms .search-countryRegion').attr({'name':''});}
else if($(this).attr('id')=='nearaddress-tab-panel')
{$('#near-address-form .single-search-location').css('display','block');$('#near-address-form .single-search-destination').css('display','none');$('#search-forms .search-lat, #search-forms .search-long').attr({'name':''});$('#search-forms .search-lat-near-address').attr({'name':'destinationAddress.latitude'});$('#search-forms .search-long-near-address').attr({'name':'destinationAddress.longitude'});$('#search-forms input#city-airport').attr({'name':''});$('#search-forms input#destinationAddress.stateProvince').attr({'name':''});$('#search-forms input#destinationAddress.country').attr({'name':''});$('#search-forms .search-locality').attr({'name':'destinationAddress.city'});$('#search-forms .search-adminDistrict').attr({'name':'destinationAddress.stateProvince'});$('#search-forms .search-countryRegion').attr({'name':'destinationAddress.country'});}});var $singleFieldMeetingCitySearchForm=$('.m-search-form #meeting-city-search-form');var $meetingEventAirportDiv=$('.m-search-tabs #meetingevent-city-airport .single-search-destination');$('#meeting-nearaddress-tab-panel #meeting-nearaddress-tab-link').click(function(e){$meetingEventAirportDiv.addClass('hidden');$meetingEventAirportDiv.css('display','none');$('.m-search-tabs #meetingevent-city-airport .single-search-location-title').addClass('hidden');$('#search-meeting-space input[name="searchType"]').attr({'value':'MeetingSpaceNearAddress'});$singleFieldMeetingCitySearchForm.find('.search-lat').attr({'name':''});$singleFieldMeetingCitySearchForm.find('.search-long').attr({'name':''});$singleFieldMeetingCitySearchForm.find('.search-lat-near-address').attr({'name':'searchCriteriaVO.latitude'});$singleFieldMeetingCitySearchForm.find('.search-long-near-address').attr({'name':'searchCriteriaVO.longitude'});$singleFieldMeetingCitySearchForm.find('.search-city').attr({'name':''});$singleFieldMeetingCitySearchForm.find('.search-state').attr({'name':''});$singleFieldMeetingCitySearchForm.find('.search-country').attr({'name':''});$singleFieldMeetingCitySearchForm.find('.search-locality').attr({'name':'searchCriteriaVO.city'});$singleFieldMeetingCitySearchForm.find('.search-adminDistrict').attr({'name':'searchCriteriaVO.stateProvince'});$singleFieldMeetingCitySearchForm.find('.search-countryRegion').attr({'name':'searchCriteriaVO.country'});});$('#meeting-city-tab-panel #meeting-city-tab-link').click(function(e){$meetingEventAirportDiv.removeClass('hidden');$meetingEventAirportDiv.css('display','block');$('.m-search-tabs #meetingevent-city-airport .single-search-location-title').removeClass('hidden');$('#search-meeting-space input[name="searchType"]').attr({'value':'MeetingSpaceInCity'});$singleFieldMeetingCitySearchForm.find('.search-lat').attr({'name':'searchCriteriaVO.latitude'});$singleFieldMeetingCitySearchForm.find('.search-long').attr({'name':'searchCriteriaVO.longitude'});$singleFieldMeetingCitySearchForm.find('.search-lat-near-address').attr({'name':''});$singleFieldMeetingCitySearchForm.find('.search-long-near-address').attr({'name':''});$singleFieldMeetingCitySearchForm.find('.search-city').attr({'name':'searchCriteriaVO.city'});$singleFieldMeetingCitySearchForm.find('.search-state').attr({'name':'searchCriteriaVO.stateProvince'});$singleFieldMeetingCitySearchForm.find('.search-country').attr({'name':'searchCriteriaVO.country'});$singleFieldMeetingCitySearchForm.find('.search-locality').attr({'name':''});$singleFieldMeetingCitySearchForm.find('.search-adminDistrict').attr({'name':''});$singleFieldMeetingCitySearchForm.find('.search-countryRegion').attr({'name':''});});var isOpenSearchWidget="false";var findAHotelContainer=$("#find-a-hotel-container");if($(findAHotelContainer).length>0)
{isOpenSearchWidget=$("#find-a-hotel-container").data('opensearchwidget');}
if(isOpenSearchWidget==true){SearchComponent.openSearchCard();}
var weddingMeetingSpace=$('div.wedding-meetings-space');if(weddingMeetingSpace.length>0){weddingMeetingSpace.resetSearchForm();}
var searchFormComponent=$('#search-form-component,#find-panel');$(".toggle-container",searchFormComponent).hide();searchFormComponent.on({"click":function(event){event.preventDefault();var $h3Toggle=$(this);if(!($h3Toggle).siblings('h3').hasClass('active')||$h3Toggle.hasClass('active')){if(!($.browser.msie&&$.browser.version=='8.0'&&document.documentMode&&document.documentMode=='8')){$('#flash-card-container').css('zIndex',3);}
$('.button-container').css('marginTop','0');}else{$('.button-container').css('marginTop','-17px');}
$h3Toggle.toggleClass('active').next('.toggle-container').slideToggle('normal',function(){if($h3Toggle.siblings('h3').hasClass('active')){$('#flash-card-container').css('zIndex',1);}
SearchComponent.handleCollapseExpand($(this));if($h3Toggle.hasClass('active')&&!$h3Toggle.next('.toggle-container').is(':visible')){$h3Toggle.next('.toggle-container').show();}});}},"h3.toggle",null);var swappableTabsContainer=$('div.search-swappable-tabs');var isContentSearchPopulated=false;var selectedSearchTabIndex;if($(swappableTabsContainer).length>0){isContentSearchPopulated=$(swappableTabsContainer).data('populatecontent');selectedSearchTabIndex=$(swappableTabsContainer).data('selectedtab');}
if(isContentSearchPopulated==true){$('#search-form-component form').resetSearchForm();$('#search-form-component form :input.meetings-eventType').each(function(){$(this).val($('div.search-swappable-tabs').find(':hidden[name="contentEventType"]').val());});$('#search-form-component form :input.search-city').each(function(){$(this).val($('div.search-swappable-tabs').find(':hidden[name="contentSearchCity"]').val());});$('#search-form-component form :input.search-state').each(function(){$(this).val($('div.search-swappable-tabs').find(':hidden[name="contentSearchState"]').val());});$('#search-form-component form :input.search-country').each(function(){$(this).val($('div.search-swappable-tabs').find(':hidden[name="contentSearchCountry"]').val());});$('#search-form-component form :input.search-fromDate').each(function(){$(this).val($('div.search-swappable-tabs').find(':hidden[name="contentFromDate"]').val());});$('#search-form-component form :input.search-toDate').each(function(){$(this).val($('div.search-swappable-tabs').find(':hidden[name="contentToDate"]').val());});$('#search-form-component form :input.search-roomCount').each(function(){$(this).val($('div.search-swappable-tabs').find(':hidden[name="contentRoomCount"]').val());});$('#search-form-component form :input.search-guestCount').each(function(){$(this).val($('div.search-swappable-tabs').find(':hidden[name="contentGuestCount"]').val());});var isUseRewardsPoint=$('div.search-swappable-tabs').find(':hidden[name="contentIsUseRewardPoint"]').val();if(isUseRewardsPoint==='true')
{$('#search-form-component form :input.search-useRewardsPoint').each(function(){$(this).attr('checked',true);});}
else{$('#search-form-component form :input.search-useRewardsPoint').each(function(){$(this).attr('checked',false);});}
var rewardsExclusiveRatesValue=$('div.search-swappable-tabs :hidden[name="contentRewardsExclusiveRates"]').val();var rewardsBonusPointsValue=$('div.search-swappable-tabs :hidden[name="contentRewardsBonusPoints"]').val();var rewardsPartnerOffersValue=$('div.search-swappable-tabs :hidden[name="contentRewardsPartnerOffers"]').val();var nonRewardsExclusiveOffersValue=$('div.search-swappable-tabs :hidden[name="contentNonRewardsOffers"]').val();if(rewardsExclusiveRatesValue==='true')
{$('#search-form-component form :input[name="rewardsExclusiveRates"]').each(function(){$(this).attr('checked',true);});}
else{$('#search-form-component form :input[name="rewardsExclusiveRates"]').each(function(){$(this).attr('checked',false);});}
if(rewardsBonusPointsValue==='true')
{$('#search-form-component form :input[name="rewardsBonusPoints"]').each(function(){$(this).attr('checked',true);});}
else{$('#search-form-component form :input[name="rewardsBonusPoints"]').each(function(){$(this).attr('checked',false);});}
if(rewardsPartnerOffersValue==='true')
{$('#search-form-component form :input[name="rewardsPartnerOffers"]').each(function(){$(this).attr('checked',true);});}
else{$('#search-form-component form :input[name="rewardsPartnerOffers"]').each(function(){$(this).attr('checked',false);});}
if(nonRewardsExclusiveOffersValue==='true')
{$('#search-form-component form :input[name="showNonMarriottRewardsExclusiveOffers"]').each(function(){$(this).attr('checked',true);});}
else{$('#search-form-component form :input[name="showNonMarriottRewardsExclusiveOffers"]').each(function(){$(this).attr('checked',false);});}}
if($("#search-form-component form :input[name='clusterCode']").length>0){$("#search-form-component form :input[name='clusterCode']:checked").each(function(){var searchForm=this.form;if($(this).val()!=='none'){$(searchForm).find('div.special-rates-section').prev('h3.toggle').click();}});}
if(searchFormComponent.find('form :input[name="marriottBrands"]').length>0){searchFormComponent.each(function(index,thisForm){if($(thisForm).find(':input[name="marriottBrands"][value="all"]:checked').length==0){$(thisForm).find('div.marriott-brands-section').prev('h3.toggle').trigger('click');}});}
var descriptionLinks=$(".description-link:not(#cash-points-results .description-link)");if(descriptionLinks.length>0){descriptionLinks.on("mouseover.descriptionModal",function(){var descriptionModal=$("#description-modal");var description=$(this).data("description");if(description!=undefined){descriptionModal.detach();var thisParent=$(this).parent();thisParent.append(descriptionModal);var maxRight=920;descriptionModal.find("span").hide();descriptionModal.find("span#"+description+"-description").show();descriptionModal.show();var thisParentPosition=thisParent.position();var modalLeft=thisParentPosition.left;if(maxRight<descriptionModal.offset().left+descriptionModal.outerWidth()){modalLeft=thisParentPosition.left-descriptionModal.outerWidth()+thisParent.outerWidth();}
var modalTop=thisParentPosition.top-descriptionModal.outerHeight();descriptionModal.css({left:modalLeft+"px",top:modalTop+"px"});}}).on("mouseout.descriptionModal",function(){$("#description-modal").hide();});}
var searchSavedHotelTabs=$("div.search-saved-hotels-tabs");if($(searchSavedHotelTabs).length&&$(searchSavedHotelTabs).length>0){$(searchSavedHotelTabs).tabs();}
var singlesearchTabs=$("div.single-search-tabs");if($(singlesearchTabs).length&&$(singlesearchTabs).length>0){$(singlesearchTabs).tabs();}
var searchFormComponentTabs=$("#search-form-component");var searchSwappableTabs=$("#search-form-component");if($(searchFormComponentTabs).length&&$(searchFormComponentTabs).length>0){$(searchSwappableTabs).tabs({selected:selectedSearchTabIndex});}
var countryFields=$('select.search-country');if(countryFields.length&&countryFields.length>0)
{countryFields.change(SearchComponent.countryChanged);}
var stateFields=$('select.search-state');if(stateFields.length&&stateFields.length>0)
{stateFields.change(SearchComponent.stateChanged);}
var marriottBrandsFields=$('input:checkbox[name="marriottBrands"]');if(marriottBrandsFields.length&&marriottBrandsFields.length>0)
{marriottBrandsFields.click(SearchComponent.brandsSelectionChanged);}
var clusterCodeElements=$('input[name="clusterCode"], input[name="useRewardsPoints"], input[name="corporateCode"], input[name="displayableIncentiveType_Number"], input[name="groupCode"]');if(clusterCodeElements.length&&clusterCodeElements.length>0)
{clusterCodeElements.bind("click change focus clusterCodePopulationEvent",SearchComponent.clusterCodeChanged);var editSearchForm=$('#edit-search-form');if(editSearchForm.length&&editSearchForm.length>0){var windowURL=window.location.href;if(windowURL.match('/search/default')||windowURL.match('/hotel-search')){var corpCodeValue=$(editSearchForm).find('.search-corp').val();var corpCodeRadio=$(editSearchForm).find('.search-clusterCode-other');if(corpCodeValue.length&&corpCodeValue.length>0){$(corpCodeRadio).attr('checked',true);}}}}
if($('.init-dim').length>0){$('p.init-dim input').attr('checked',true);}
$('a.use-rewards-label').click(function(e){e.preventDefault();var searchForm=$(this).closest('form');var noRatesButton=$(searchForm).find(':radio.search-clusterCode-none').get(0);var corporateCodeBox=$(searchForm).find(':text.search-corp').get(0);var incentivesBox=$(searchForm).find(':text.search-awards').get(0);var groupCodeBox=$(searchForm).find(':text.search-group').get(0);$(noRatesButton).attr('checked',true);if(corporateCodeBox){corporateCodeBox.value='';}
if(incentivesBox)
{incentivesBox.value='';}
if($(groupCodeBox).length&&$(groupCodeBox).length>0)
{$(groupCodeBox).val('');}
sendto("","",$(this).attr('href'),'5');});$('input[name="flexibleDateSearch"]').click(function(e){var searchForm=$(this).closest('form');var noRatesButton=$(searchForm).find(':radio.search-clusterCode-none').get(0);var incentivesBox=$(searchForm).find(':text.search-awards').get(0);var groupCodeBox=$(searchForm).find(':text.search-group').get(0);var incentivesActive=$(searchForm).find(':radio.search-clusterCode-INT:checked').val();var groupActive=$(searchForm).find(':radio.search-clusterCode-group:checked').val();if(incentivesActive==="INT"||groupActive==="group"){$(incentivesBox).val('');$(groupCodeBox).val('');$(noRatesButton).attr('checked',true);}});$('a.use-checkbox-popup').click(function(e){e.preventDefault();if($(e.target).hasClass('find-by-p'))
{$(this).parents('p').find('input:radio').attr('checked',true);$('#rateREW').parents('p').find('input:checkbox').attr('checked',false);}else if($(e.target).hasClass('find-by-div')){$(this).parents('div.special-rates').find('input:radio').attr('checked',true);$('#use-rewards-points').parents('div').find('input:checkbox').attr('checked',false);}else{$(this).parents('li').find('input:radio').attr('checked',true);$(this).parents('li').find('input#INT').attr('checked',true);$('.search-useRewardsPoint').parents('p').find('input:checkbox').attr('checked',false);$('#use-rewards-points').parents('label').find('input:checkbox').attr('checked',false);}
sendto("","",$(this).attr('href'),'5');});$('form.validate-search-form').submit(SearchComponent.validateSearchForm);if($(searchSwappableTabs).length>0)
{var selectedTabIndex=$(searchSwappableTabs).tabs('option','selected');var searchComponentForms=$('#search-form-component form');var currentForm=$('#search-form-component > div.ui-tabs-panel').eq(selectedTabIndex).find('form:first');$(searchComponentForms).each(function(){$(this).populateValuesFrom(currentForm,"search-",false);});}
$(searchComponentForms).find(':input').bind('change',function(e){var formElementName=$(e.target).attr('name');var isClusterCodePopulation=(typeof formElementName!=='undefined'&&(formElementName==='clusterCode'||formElementName==='useRewardsPoints'||formElementName==='corporateCode'||formElementName==='displayableIncentiveType_Number'));var isDateChange=formElementName.indexOf("fromDate")!=-1||formElementName.indexOf("toDate")!=-1?true:false;var calImgSrc='<img src="'+imgPath+'/Images/Home/Tablet/Icon_Calendar.jpg" />';var isEmptyFieldAllowed=false;if($(e.target).val()==''){isEmptyFieldAllowed=true;}
currentForm=this.form;$(searchComponentForms).each(function(){$(this).populateValuesFrom(currentForm,"search-",isEmptyFieldAllowed);if(isClusterCodePopulation&&$(this).find('div.special-rates-section').length>0)
{$(this).find('input[class="'+$(e.target).attr('class')+'"]').trigger("clusterCodePopulationEvent");}});});$(searchComponentForms).find(':input.search-fromDate, :input.search-toDate').bind('calendarDateSelectEvent',function(){currentForm=this.form;$(this).change();});$(searchComponentForms).find(':input.search-city').bind('autoCompleteSelectEvent',function(){currentForm=this.form;$(this).change();});$('div.search-saved-hotels-tabs, #search-form-component div.search-swappable-tabs').bind('tabsselect',function(event,ui){if($(this).parents('.flash-card').length>0){$(this).parents('.flash-card').trigger('click');}
$(searchComponentForms).each(function(){$(this).populateValuesFrom(currentForm,"search-",false);});currentForm=$(ui.panel).find('form:first');SearchComponent.tabChanged(event,ui);});$(searchSwappableTabs).bind('tabsshow',function(event,ui){SearchComponent.focusOnFirstElement($(ui.panel).find('form:first'));});$(searchSavedHotelTabs).bind('tabsshow',function(event,ui){var nextTabForm=$(ui.panel).find('form:first');SearchComponent.focusOnFirstElement(nextTabForm);var clusterCodeOption=$(nextTabForm).find(':radio[name="clusterCode"]:checked');var specialRateSection=$(nextTabForm).find('div.special-rates-section');if($(clusterCodeOption).val()!=='none'){specialRateSection.prev('h3.toggle').addClass('active').next('.toggle-container').show('normal',function(){SearchComponent.handleCollapseExpand(specialRateSection)});}
else{specialRateSection.prev('h3.toggle').removeClass('active');specialRateSection.hide('normal',function(){SearchComponent.handleCollapseExpand(specialRateSection)});}
SearchComponent.tabChanged(event,ui);});$('.narrow-deals-options').click(function(){$('.narrow-deals').attr('checked',true);});$('.show-all-deals').click(function(){$('.narrow-deals-options').attr('checked',false);});$('.narrow-deals-options').each(function(){if($(this).is(':checked')){$('.narrow-deals').attr('checked',true);}});var searchMeetingsSpaceForm=$('form.search-meeting-space');if($(searchMeetingsSpaceForm).length&&$(searchMeetingsSpaceForm).length>0){$("#find-a-hotel-container").bind('widgetOpened',SearchComponent.initializeMeetingsForm);$("#find-a-hotel-container").trigger('widgetOpened');$(searchSwappableTabs).bind('tabsshow',function(event,ui){SearchComponent.tabChanged(event,ui);});$(searchMeetingsSpaceForm).on({'click':findMeetingSpaceComponent.meetingsPrefRadioButtonEventHandler,'change':findMeetingSpaceComponent.meetingsPrefRadioButtonEventHandler},':radio[name="eventOptionsRadio"]',null);$(searchMeetingsSpaceForm).on({'click change':findMeetingSpaceComponent.meetingsPrefCheckButtonEventHandler});$(searchMeetingsSpaceForm).on({'change':findMeetingSpaceComponent.meetingsEventTypeChangeEventHandler},'select.meetings-eventType',null);$(searchMeetingsSpaceForm).on({'submit':findMeetingSpaceComponent.meetingsSubmitEventHandler},null,null);}
var nonResSearchForm=$('#search-form-component #non-res-search');if($(nonResSearchForm).length&&$(nonResSearchForm).length>0){$(nonResSearchForm).find('form select#country-hotels').change(function(){var elementId=$(this).attr("id");var url=$('#'+elementId+' option:selected').val();if(url!=''){window.top.location.href=url;}});$(nonResSearchForm).find('form select#regional-hotels').change(function(){var elementId=$(this).attr("id");var url=$('#'+elementId+' option:selected').val();var regex=/\.mi/;if(url!=''&&regex.test(url)){window.top.location.href=url;}});$(nonResSearchForm).find('form select#world-hotels').change(function(){var elementId=$(this).attr("id");var url=$('#'+elementId+' option:selected').val();if(url!=''){var protocol="http://";var type='3';if(url.substr(0,protocol.length)==protocol){type='2';}
sendto('US','marriott',url,type);}});$(nonResSearchForm).find('form :radio[name="brochureSiteFindRadio"]').bind('click change',nonResSearchComponent.findRadioEventHandler);nonResSearchComponent.clearForm(nonResSearchForm);}
var $findAHotelTrigger=$(".find-a-hotel-module-trigger");if($findAHotelTrigger.length>0)
{$findAHotelTrigger.click(function(event){event.preventDefault();if($(document).scrollTop()>0){$('html,body').stop().animate({scrollTop:0},'slow');}
var $target=$("#header-find-panel-trigger");if($target.length==0){$target=$("#find-a-hotel-control");}
$target.click();});}
var myAccountTrigger=$(".my-account-trigger");if($(myAccountTrigger).length>0)
{$('.my-account-trigger').click(function(event){event.preventDefault();$("#my-account-control,.l-panel>a").click();});}
var emailSignUpTrigger=$(".email-sign-up-module-trigger");if($(emailSignUpTrigger).length>0)
{$('.email-sign-up-module-trigger').click(function(event){event.preventDefault();$(".email-signup-control").click();});}});var guestsRooms={$rooms:$(".l-room-count a"),$guests:$(".l-guest-count a"),$roomCount:$('.search-roomCount'),$guestCount:$('.search-guestCount'),init:function(){guestsRooms.roomsOrGuests(guestsRooms.$roomCount,guestsRooms.$rooms,'room');guestsRooms.roomsOrGuests(guestsRooms.$guestCount,guestsRooms.$guests,'guest');},roomsOrGuests:function(oRoomsGuestsField,oRoomsGuests,guestRoom){$(oRoomsGuestsField.children('option')).each(function(){var rgNum=oRoomsGuestsField.children('option:selected').val();if(rgNum=='1'||rgNum=='2'||rgNum=='3'){oRoomsGuests.parents('ul.l-'+guestRoom+'-count').find('li').removeClass('is-active');oRoomsGuests.parents('li.'+guestRoom+'-'+rgNum).addClass('is-active');}
else{oRoomsGuestsField.removeClass('is-hidden');oRoomsGuests.parents('ul.l-'+guestRoom+'-count').addClass('is-hidden');}});oRoomsGuests.on('click',function(event){var grNum=$(this).html();if(grNum=='1'||grNum=='2'||grNum=='3'){oRoomsGuests.parents('ul.l-'+guestRoom+'-count').find('li').removeClass('is-active');oRoomsGuests.parents('li.'+guestRoom+'-'+grNum).addClass('is-active');oRoomsGuestsField.children('option').removeAttr('selected');oRoomsGuestsField.children('option[value="'+grNum+'"]').attr('selected','true');}
else if(grNum=='4+'){oRoomsGuestsField.removeClass('is-hidden');oRoomsGuests.parents('ul.l-'+guestRoom+'-count').addClass('is-hidden');oRoomsGuestsField.children('option').removeAttr('selected');oRoomsGuestsField.children('option[value="4"]').attr('selected','true');}
$("#meetingSpace .guestRoomCount").val('');});}}
guestsRooms.init();var locationNearMe={$form:$(".js-location-nearme"),$input:$(".js-location-nearme .single-search-destination"),$dataValues:$('.js-location-nearme-values'),autoCompleteItem:[],init:function(){if($('body.lt-ie9').length==0&&locationNearMe.$input.length>0&&locationNearMe.$input.find('.js-location-trigger').length<1&&navigator.geolocation){var sLoc=$(".js-location-trigger");if($(sLoc).length>0){$(sLoc).click(function(event){event.preventDefault();locationNearMe.trigger();});}
if(locationNearMe.$input.length>0){locationNearMe.autoCompleteItem=[{icon:'icon-current-location',analytics:locationNearMe.$dataValues.data('analytics'),value:'',type:'near',onSelect:locationNearMe.trigger,label:locationNearMe.$dataValues.data('title')}];}
var siteID=$('input[name="siteId"]').val();if(siteID=='UK'||siteID=='AU'||siteID=='US'||siteID==''){var windowWidth=$(window).width();if($('#propertyedit-search-panel').length>0&&windowWidth<='480'&&$('#error-messages').length<=0&&(locationNearMe.$form.find('.search-lat').val().length==0&&locationNearMe.$form.find('.search-long').val().length==0&&locationNearMe.$form.find('.search-state').val().length==0&&locationNearMe.$form.find('.search-country').val().length==0)){locationNearMe.$form.find('input.autosuggest-item-type').val('hotelsnearme');navigator.geolocation.getCurrentPosition(locationNearMe.callback,locationNearMe.error);}}}},getAutocompleteItem:function($input){if(locationNearMe.autoCompleteItem.length>0&&$input.closest('form').hasClass('js-location-nearme')){return locationNearMe.autoCompleteItem;}else{return null;}},trigger:function(){locationNearMe.$form.find('input.autosuggest-item-type').val('hotelsnearme');navigator.geolocation.getCurrentPosition(locationNearMe.callback,locationNearMe.error);},callback:function(position){$.getJSON(location.protocol+'//'+locationNearMe.$dataValues.data('binglocation')+position.coords.latitude+","+position.coords.longitude+'?key='+locationNearMe.$dataValues.data('bingkey')+'&include=ciso2&jsonp=?',function(result){if(result.resourceSets[0].estimatedTotal>0){var city=result.resourceSets[0].resources[0].address.locality,state=result.resourceSets[0].resources[0].address.adminDistrict,country=result.resourceSets[0].resources[0].address.countryRegionIso2;var nearTxt=$('.for-hotels-nearme').val();if(state!=null){singleFieldLabel=nearTxt+" "+city+', '+state+', '+country;}
else{singleFieldLabel=nearTxt+" "+city+', '+country;}
var $thisform=locationNearMe.$form;$thisform.find('input.search-lat').val(position.coords.latitude);$thisform.find('input.search-long').val(position.coords.longitude);$thisform.find('input.search-city, input.search-state, input.search-country').val('');$thisform.find('input.search-city').val(city);$thisform.find('input.search-poiname').val('');$thisform.find('input.search-state').val(state);$thisform.find('input.search-country').val(country);$thisform.find('input.single-search-destination').val(singleFieldLabel).addClass('is-location-nearme-active');$thisform.find('input.searchRadius').val(locationNearMe.$dataValues.data('radius'));locationNearMe.$input.focus();showFullSearchForm();}});},error:function(){var errorMsg='<div class="l-padding-left l-padding-right"><p class="l-center-align t-font-bold">'+locationNearMe.$dataValues.data('errhead')+'</p><p class="l-center-align">'+locationNearMe.$dataValues.data('errmessage')+'</p></div>';$.magnificPopup.open({mainClass:'m-modal t-modal-small ',items:{src:errorMsg},closeMarkup:'<div class="l-padding-left l-padding-right "><button class="js-mfp-close l-width-max m-button-lightestGray">Ok</button></div>',closeOnContentClick:true});}}
locationNearMe.init();var searchToggles={init:function(){if(typeof fnSearchToggle!='undefined')fnSearchToggle.init();searchToggles.specialRatesIsChecked('.mi-special-rates-drawer');},specialRatesIsChecked:function(oSpecialRatesContainer,onlyReturnBool){if($(oSpecialRatesContainer)!='undefined'&&$(oSpecialRatesContainer).length>0){if(!onlyReturnBool)searchToggles.toggleInput(oSpecialRatesContainer);if($(oSpecialRatesContainer).find('.search-clusterCode-none').prop('checked')){return false;}else{if(!onlyReturnBool)$(oSpecialRatesContainer).find('.js-special-rates-header').find('a').trigger('click');return true;}}},toggleInput:function(oSpecialRatesContainer){var oSpecialRatesContainer=$(oSpecialRatesContainer);oSpecialRatesContainer.find(':input[name="clusterCode"]').each(function(){var oInputText=$(this).parent().find('input:text');if($(this).prop('checked')){oInputText.show('fast').removeClass('is-hidden');}else{oInputText.addClass('is-hidden').hide("fast");}}).click(function(){$(this).parent().parent().find('input:text').addClass('is-hidden').hide("fast");if($(this).prop("checked")){$(this).parent().find('input:text').show('fast').removeClass('is-hidden').focus();}});oSpecialRatesContainer.find('.search-useRewardsPoint').bind('click',function(){$(this).closest(oSpecialRatesContainer.selector).find(':input[name="clusterCode"]').parent().find('input:text').addClass('is-hidden').hide();});}}
var conf,ClickToSearch={settings:{$searchModule:$('.m-homepage-hotelsearch'),$locationField:$('#search-location'),$clickToSearchModule:$('#m-click-to-search'),$destinationLink:$('#m-click-to-search .item a'),$ctsTrigger:$("#js-cts"),$ctsTriggerInt:$("#js-cts-int")},init:function(){conf=this.settings;conf.$cityField=conf.$searchModule.find('.search-city');conf.$stateField=conf.$searchModule.find('.search-state');conf.$countryField=conf.$searchModule.find('.search-country');conf.$latField=conf.$searchModule.find('.js-search-lat');conf.$longField=conf.$searchModule.find('.js-search-long');conf.$ctsField=conf.$searchModule.find('.click-to-search');conf.$autoSuggestItemField=conf.$searchModule.find('.autosuggest-item-type');this.bindModActions();},bindModActions:function(){conf.$ctsTrigger.parent('.is-hidden').removeClass('is-hidden');conf.$ctsTriggerInt.parent('.is-hidden').removeClass('is-hidden');conf.$ctsTrigger.click(function(e){e.preventDefault();;ClickToSearch.openCTS();ClickToSearch.toggleInternationalDomestic($(this));})
conf.$ctsTriggerInt.click(function(e){e.preventDefault();ClickToSearch.openCTS();ClickToSearch.toggleInternationalDomestic($(this));});conf.$clickToSearchModule.find(".js-close").click(function(e){e.preventDefault();ClickToSearch.closeCTS();});conf.$destinationLink.on("click",function(e){ClickToSearch.populateLocation($(this));});},clearFields:function($formFields){$.each($formFields,function(){this.val('');});},closeCTS:function(){if(!conf.$clickToSearchModule.hasClass("is-hidden")){conf.$clickToSearchModule.addClass("is-hidden");conf.$clickToSearchModule.removeClass("clearfix");}},openCTS:function(e){if(conf.$clickToSearchModule.hasClass("is-hidden")){conf.$clickToSearchModule.removeClass("is-hidden");conf.$clickToSearchModule.addClass("clearfix");}
conf.$clickToSearchModule.focus();},toggleInternationalDomestic:function($theToggleId){var $this=$theToggleId;if($this.attr('id')=='js-cts'){$("#top-destinations").css('display','block');$("#top-destinations-int").css('display','none');}
else if($this.attr('id')=='js-cts-int'){$("#top-destinations-int").css('display','block');$("#top-destinations").css('display','none');}},populateLocation:function($destLink){var fieldsArr=[conf.$locationField,conf.$cityField,conf.$stateField,conf.$countryField,conf.$latField,conf.$longField];ClickToSearch.clearFields(fieldsArr);var $this=$destLink,destinationData=$this.data('destdata'),geocodes=destinationData.coordinates.split('|'),stateCountry=destinationData.statecountry.split('|'),destinationType=destinationData.desttype,cityDisplay=$this.html();countryDisplay=stateCountry[2]!='0'?stateCountry[2]:'';var lat=typeof geocodes[0]!=="undefined"?geocodes[0]:'',long=typeof geocodes[1]!=="undefined"?geocodes[1]:'',state=stateCountry[0]!='0'?stateCountry[0]:'',country=stateCountry[1]!='0'?stateCountry[1]:'';conf.$searchModule.find(".l-ie-placeholder").addClass("t-ie-placeholder-hidden");var singleSearchDisplay=ClickToSearch.buildLocationDisplay(destinationType,cityDisplay,state,countryDisplay);conf.$locationField.val(singleSearchDisplay);conf.$latField.val(lat);conf.$longField.val(long);if(destinationType=='city')
conf.$cityField.val(cityDisplay);conf.$stateField.val(state);conf.$countryField.val(country);ClickToSearch.setTracking();ClickToSearch.closeCTS();},buildLocationDisplay:function(type,city,state,country){var locationDisplay="";if(type=='city'&&city!=="undefined")
{locationDisplay=city;}
if((type=='city'||type=='state')&&state!=''&&state!='0')
{locationDisplay=type=='state'?locationDisplay:locationDisplay+", ";locationDisplay+=state;}
if(country!='')
{if(type=='country')
locationDisplay=city;else
locationDisplay+=", "+country;}
return locationDisplay;},setTracking:function(){conf.$ctsField.val('true');conf.$autoSuggestItemField.val('Unmatched');}};jQuery.fn.externalLinks=function(options){var NewWindowIcon=(typeof msgResources==='undefined')?'Open in a different browser tab':(typeof msgResources.NewWindowAltText==='undefined')?'Open in a different browser tab':msgResources.NewWindowAltText;var settings=$.extend({imgPath:"",imgSrc:'/Images/Arrows/icon_newwindow_9x8.gif'},options||{});this.filter("a[rel$='external']").append('<img class="external-link" src="'+settings.imgPath+settings.imgSrc+'" alt="'+NewWindowIcon+'" />');this.not("a[href^='javascript']").each(function(){jQuery(this).click(function(){window.open(jQuery(this).attr('href'),'_blank');return false;});});return this.end();};(function($){$.fn.makeSendtoLink=function(options){var p=$.extend({country:'',domain:'',popupsize:'2'},options||{});$(this).click(function(){var metadataValues=$(this).data('options');if(metadataValues){if(metadataValues.country)
{p.country=metadataValues.country;}
if(metadataValues.domain)
{p.domain=metadataValues.domain;}
if(metadataValues.popupsize)
{p.popupsize=metadataValues.popupsize;}}
url=$(this).attr('href');sendto(p.country,p.domain,url,p.popupsize);return false;});};})(jQuery);jQuery.fn.resetSearchForm=function(){$(this).find(':text:not(.special-rates-section :text, :text[name="marriottRewardsNumber"], :text[name="searchCriteriaVO.guestRoomCount"], :text[name="searchCriteriaVO.sizeLargestMeetingRoom"]), :password, textarea').attr('value','').end().find(':radio[value="showAllDeals"]').attr('checked',true).end().find(':radio[value="SF-MI"]').attr('checked',true).end().find(':checkbox:not(.marriott-brands-section :checkbox), :radio:not(.special-rates-section :radio, :radio[value="showAllDeals"], :radio[value="SF-MI"])').attr('checked',false).end().find('select').prop('selectedIndex',0);};jQuery.fn.populateValuesFrom=function(currentForm,classMatchingPattern,isEmptyFieldAllowed)
{var $toFrom=$(this);return $(this).find(':input[class*='+classMatchingPattern+']').each(function(){var totalClasses=$(this).attr("class").split(" ");var classNameToMatch;if(totalClasses.length>1)
{for(i=0;i<totalClasses.length;i++)
{if(totalClasses[i].match(classMatchingPattern))
{classNameToMatch=totalClasses[i];}}}
else
{classNameToMatch=totalClasses[0];}
var type=$(this).prop("type");if(type=="text")
{var currentFieldValue=$(currentForm).find(':text[class*='+classNameToMatch+']').val();var poiValue=$(currentForm).find(':hidden[class="search-poiname"]').val();var isPoi=(typeof poiValue!=='undefined')&&(poiValue!=='');if(classNameToMatch=='search-city'&&isPoi&&($toFrom.attr('id')=='near-address-form'||$toFrom.attr('id')=='deals-search')){var poiCityValue=$(currentForm).find(':hidden[class="search-citydisplay"]').val();$(this).val(poiCityValue);}
else if(isEmptyFieldAllowed){$(this).val(currentFieldValue);}
else if(currentFieldValue!=""){$(this).val(currentFieldValue);}}
else if(type=="select-one")
{var currentFieldValue=$(currentForm).find('select[class*='+classNameToMatch+']').val()
if(isEmptyFieldAllowed){$(this).val(currentFieldValue);}
else if(currentFieldValue!=""){$(this).val(currentFieldValue);}}
else if(type=="radio")
{$(this).attr('checked',$(currentForm).find('input:radio[class*='+classNameToMatch+']').attr('checked'));}
else if(type=="checkbox")
{$(this).attr('checked',$(currentForm).find('input:checkbox[class*='+classNameToMatch+']').attr('checked'));}});};var autoSuggestSelected='false';jQuery.fn.enableAutoComplete=function()
{var autoCompleteStatus="up";var endecaStatus="up";var singleSearch='false';var singleSearchInputStyle='';var searchType=$(this).closest('form').find('input[name="searchType"]').val();var formNameDeals=$(this).closest('form').attr('id');var enablePoi='false';var isWebRequest='false';var applyGrouping='false';var delayValue;var $this=$(this);if($('input[name="singleSearch"]').val()=='true'){if(formNameDeals=='find-a-hotel-form'||formNameDeals=='edit-search-form'||formNameDeals=='in-a-city-form'||formNameDeals=='near-address-form'||formNameDeals=='find-meeting-form'||formNameDeals=='search-meeting-space'){singleSearch='true';singleSearchInputStyle='single-search-ui-autocomplete-width';}
else
{singleSearch='false';singleSearchInputStyle='';}}
if(formNameDeals=='find-a-hotel-form'||formNameDeals=='edit-search-form'||formNameDeals=='in-a-city-form'||formNameDeals=='near-address-form'||(formNameDeals=='find-meeting-form'&&$('input[name="singleSearch"]').val()=='true')||(formNameDeals=='search-meeting-space'&&$('input[name="singleSearch"]').val()=='true')){enablePoi='true'
isWebRequest='true';applyGrouping='true';}
else if(formNameDeals=='deals-search'||formNameDeals=='gs_edit-search-form'||formNameDeals=='find-meeting-form'||formNameDeals=='search-meeting-space'){applyGrouping='true';}
if(autoCompleteStatus=="up"&&$(this).length>0)
{var autoCompleteURL=null;var scriptQueryParam="searchTerm";var useList=$(this).data("list");var toOrFrom=$(this).data("field");if(useList!=undefined&&useList=="travelPackage"&&toOrFrom!=undefined)
{autoCompleteURL="/search/autoCompleteXpath.mi";scriptQueryParam="toOrFrom="+toOrFrom+"&searchTerm";delayValue=150;}
else if(endecaStatus=="up"){autoCompleteURL="/search/autoComplete.mi";delayValue=250;}
if(autoCompleteURL!=null)
{$(this).autocomplete({source:function(request,response){if(searchType=='NearAddress'||searchType=='MeetingSpaceNearAddress')
{autoCompleteURL=location.protocol+'//'+"dev.virtualearth.net/REST/v1/Locations";$.ajax({url:autoCompleteURL,dataType:"jsonp",data:{key:"AtiQIdR6T0kGOCP2ZVCZXXGTaTgVLLvfGBnUUkd1jQhHse_G6NIh8zjvASLdjAgm",q:request.term},jsonp:"jsonp",success:function(data){var result=data.resourceSets[0];$('ul.ui-autocomplete').removeClass('ui-autocomplete-scroll, ui-autocomplete-edit-search');$('ul.ui-autocomplete').addClass("ui-autocomplete-near-address");if(result){if(result.estimatedTotal>0){$('ul.ui-autocomplete').click(function(){return false;});response($.map(result.resources,function(item){var countryRegion='';var itemType=item.entityType.toLowerCase();if(item.address.countryRegion=='United States'){countryRegion=', USA';}
if(item.address.addressLine!=undefined){return{data:item,label:item.name+countryRegion,value:item.name+countryRegion,city:item.address.locality,state:item.address.adminDistrict,country:item.address.countryRegion,geocode:item.point.coordinates,type:itemType}}}));}}
showFullSearchForm();}});}
else if(searchType!='NearAddress')
{$.ajax({url:autoCompleteURL,dataType:"xml",data:{searchType:searchType,toOrFrom:toOrFrom,searchTerm:request.term,isWebRequest:isWebRequest,applyGrouping:applyGrouping},success:function(xmlResponse){var totalCount=$("Suggestion",xmlResponse).length;$('ul.ui-autocomplete').removeClass('ui-autocomplete-near-address');if(formNameDeals=='edit-search-form'||searchType=='AirCar'){$('ul.ui-autocomplete').addClass("ui-autocomplete-edit-search");}else{$('ul.ui-autocomplete').removeClass("ui-autocomplete-edit-search");}
if(searchType=='NearAddress'&&applyGrouping=='false')
{if(totalCount>8){$('ul.ui-autocomplete').addClass("ui-autocomplete-scroll "+singleSearchInputStyle);}else{$('ul.ui-autocomplete').removeClass('ui-autocomplete-scroll');}}
$('ul.ui-autocomplete').click(function(){return false;});xmlResponse=$("Suggestion",xmlResponse).map(function(){var item={};item.Type=$(this).attr('type');if(enablePoi=='true'){item.PoiName=$("PoiName",this).text();}
item.City=$("City",this).text();item.AirportCode=$("AirportCode",this).text();item.AirportName=$("AirportName",this).text();item.StateCode=$("StateCode",this).text();item.CountryCode=$("CountryCode",this).text();item.Country=$("Country",this).text();item.geocode=$("GeoCode",this).text();item.CityPopulation=$("CityPopulation",this).text();item.CityPopulationDensity=$("CityPopulationDensity",this).text();var usStateCode='';if(item.CountryCode=='US')
{usStateCode=", "+item.StateCode;}
if(singleSearch=='true'){if(enablePoi=='true'&&item.PoiName!=''&&item.StateCode!=''){xmlLabel=item.PoiName+usStateCode+", "+item.Country;}else if(enablePoi=='true'&&item.PoiName!=''&&item.StateCode==''){xmlLabel=item.PoiName+", "+item.Country;}else if(item.City!=''){xmlLabel=item.City+usStateCode+", "+item.Country;}else if(item.City==''&&item.StateCode!=''){xmlLabel=item.StateCode+", "+item.Country;}else if(item.City==''&&item.StateCode==''){xmlLabel=item.Country;}
xmlValue=xmlLabel;}else{if(item.City==''&&item.StateCode==''){xmlLabel=item.Country;}else if(item.City==''&&item.StateCode!=''){xmlLabel=item.StateCode+", "+item.Country;}else if(enablePoi=='true'&&item.PoiName!=''&&item.StateCode!=''){xmlLabel=item.PoiName+usStateCode+", "+item.Country;}else if(enablePoi=='true'&&item.PoiName!=''&&item.StateCode==''){xmlLabel=item.PoiName+", "+item.Country;}else{xmlLabel=item.City+usStateCode+", "+item.Country;}
xmlValue=item.City;}
if(item.Type=='airport'){xmlLabel=item.AirportName+" ("+item.AirportCode+") "+item.City+usStateCode+", "+item.Country;if(formNameDeals!='deals-search'){xmlValue=item.AirportCode;item.City=xmlValue;}}
return{label:xmlLabel,value:xmlValue,poi:item.PoiName,city:item.City,state:item.StateCode,country:item.CountryCode,geocode:item.geocode,cityPopulation:item.CityPopulation,cityPopulationDensity:item.CityPopulationDensity,type:item.Type,airportcode:item.AirportCode}}).toArray();var autoCompleteItems=[];if(xmlResponse.length==0){autoCompleteItems.push.apply(autoCompleteItems,(locationNearMe.getAutocompleteItem($this)||[]));}
autoCompleteItems.push.apply(autoCompleteItems,(recentSearch.getAutocompleteItem(request.term,$this)||[]));autoCompleteItems.push.apply(autoCompleteItems,(xmlResponse||[]));response(autoCompleteItems);showFullSearchForm();}});}},minLength:0,delay:delayValue,selectFirst:true,focus:function(event,ui){var form=this.form;if(singleSearch=='true'){if(searchType=='NearAddress'){$(form).find('input.search-poiname').val("");$(form).find('input.search-citydisplay').val("");$(form).find('input.searchRadius').val('');$(form).find('input.search-lat-near-address, input.search-long-near-address').val('');$(form).find('input.search-adminDistrict').val('');$(form).find('input.search-countryRegion').val('');$(form).find('input.search-locality').val('');}else{$(form).find('input.search-lat, input.search-long').val('');$(form).find('input.city-pop, input.city-pop-density').val('');$('#find-a-hotel-form, #edit-search-form, #city-search-form').find('input.searchRadius').val('');$('#find-a-hotel-form, #edit-search-form, #city-search-form').find('input.search-city').val('');$('#find-a-hotel-form, #edit-search-form, #city-search-form').find('select.search-state,input.search-state').val('');$('#find-a-hotel-form, #edit-search-form, #city-search-form').find('select.search-country,input.search-country').val('');}
$(form).find('input.single-search-autosuggest').val('false');$(form).find('input.autosuggest-item-type').val('Unmatched');}},select:function(event,ui){autoSuggestSelected='true';var form=this.form;if(ui.item.analytics!=undefined&&typeof analytics!="undefined"){$(event.target).data('analytics',ui.item.analytics);analytics.dynamicAnalytics($(event.target),event);}
var geocodes=(ui.item.geocode&&ui.item.geocode.toString().split(','))||[];if($(this).hasClass('travel-package-location')){$(this).val(ui.item.city);}else if(ui.item.onSelect){ui.item.onSelect();return;}else{if(searchType=='NearAddress'||searchType=='MeetingSpaceNearAddress'){$(form).find('input.search-lat-near-address').val(geocodes[0]);$(form).find('input.search-long-near-address').val(geocodes[1]);$(form).find('input.search-adminDistrict,#you-searched input[name="destinationAddress.stateProvince"]').val(ui.item.state);$(form).find('input.search-countryRegion,#you-searched input[name="destinationAddress.country"]').val(ui.item.country);$(form).find('input.search-locality,#you-searched input[name="destinationAddress.city"]').val(ui.item.city);$(form).find('input.single-search-location').val(ui.item.label);}else{$(form).find('input.search-lat').val(geocodes[0]);$(form).find('input.search-long').val(geocodes[1]);$(form).find('input.city-pop').val(ui.item.cityPopulation);$(form).find('input.city-pop-density').val(ui.item.cityPopulationDensity);if(enablePoi=='true'&&(ui.item.type=='poi'||(ui.item.type=='recent'&&ui.item.poi))){$(form).find('input.search-city').val(ui.item.poi);$(form).find('input.search-poiname').val(ui.item.poi);$(form).find('input.search-citydisplay').val(ui.item.city);}else{if(ui.item.type=='airport'||(ui.item.type=='recent'&&ui.item.airportcode)){$(form).find('input.search-airport').val(ui.item.airportcode);}
$(form).find('input.search-poiname').val('');$(form).find('input.search-citydisplay').val('');$(form).find('#hotel-city-airport').val(ui.item.city);$(form).find('input.search-city').val(ui.item.city);}
$(form).find('.search-state').val(ui.item.state);$(form).find('.search-country').val(ui.item.country);$(form).find('input.single-search-destination').val(ui.item.label);}
$(form).find('input.single-search-autosuggest').val('true');$(form).find('input.autosuggest-item-type').val(ui.item.type);$(form).find('input.click-to-search').val('false');}
if(ui.item.country=="United States"){ui.item.country='US';}
if(ui.item.country!="US"){ui.item.state='';}
return false;}});}}
$.ui.autocomplete.prototype._renderMenu=function(ul,items){var that=this,currentType="",catHdrArray={},itemIndex=0,catIndex=0,showCategories=false;ClickToSearch.closeCTS();catHdrArray=$('#autosuggest-cat-headers').data("categoryParams");if(searchType!='NearAddress'&&searchType!='MeetingSpaceNearAddress'&&applyGrouping=='true'){showCategories=true;}
$.each(items,function(index,item){var category=item.type;if(category!=currentType&&showCategories&&catHdrArray.length!=0&&catHdrArray[category.toLowerCase()]){var firstClass='',categorySubHeader='';if(catIndex==0){firstClass=' first';}
if(category=='recent'){categorySubHeader='<span class="t-pointer l-float-right js-recent-clear l-margin-right-half t-font-normal t-lowercase ">'+catHdrArray.clear+"</span>"}
ul.append("<li class='t-category-header t-font-semi-bold "+firstClass+"'><span class='icon-"+category.toLowerCase()+"'></span> "+catHdrArray[category.toLowerCase()]+categorySubHeader+"</li>");currentType=category;itemIndex=0;catIndex++;}
if(showCategories&&itemIndex<10||!showCategories){that._renderItem(ul,item);}
itemIndex++;});if(showCategories&&catHdrArray['label']){ul.addClass("t-category-headers").append("<li class='t-autosuggest-msg t-font-semi-bold'>"+catHdrArray['label']+"</li>");}
ul.find('.js-recent-clear').on('click',function(){recentSearch.clear();$(this).closest('.ui-autocomplete').hide();});}
$.ui.autocomplete.prototype._renderItem=function(ul,item){var i=(item.icon)?'<span class="'+item.icon+'"></span>':'',t=item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+$.ui.autocomplete.escapeRegex(this.term)+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>")
return $("<li class='"+item.type+"'></li>").data("item.autocomplete",item).append("<a>"+i+t+"</a>").appendTo(ul);};};var locFieldChanged='false';$('form input.single-search-destination, form input.search-city').on("propertychange keyup input paste",function(event){locFieldChanged='true';});(function($){$(".ui-autocomplete-input").live("autocompleteopen",function(){var autocomplete=$(this).data("autocomplete"),menu=autocomplete.menu;if(!autocomplete.options.selectFirst){return;}
if(autocomplete.term!=$(this).val()){return;}
menu.options.blur=function(event,ui){return}
menu.activate($.Event({type:"mouseenter"}),menu.element.children('.ui-menu-item').first());}).live("blur",function(){if(autoSuggestSelected=='false'&&locFieldChanged=='true')
{var form=this.form;$(form).find('input.search-lat').val("");$(form).find('input.search-long').val("");$(form).find('input.city-pop').val("");$(form).find('input.city-pop-density').val("");$(form).find('input.search-poiname').val("");$(form).find('input.search-citydisplay').val("");$(form).find('input.search-airport').val("");if($('input[name="singleSearch"]').val()=='true')
{$(form).find('input.search-city').val("");$(form).find('input.search-state').val("");$(form).find('input.search-country').val("");}}
autoSuggestSelected,locFieldChanged='false';var allowOutsideValue=$(this).data("allow_outside_value");if(allowOutsideValue!=undefined&&allowOutsideValue==false){var inputValue=$.trim($(this).val()),isValueAcceptable=false,emptyValue="";var autocomplete=$(this).data("autocomplete"),menu=autocomplete.menu;if(menu!=undefined&&menu.element!=undefined){var menuItems=autocomplete.menu.element.children();$.each(menuItems,function(iterator,value){var menuItem=$(value).data("item.autocomplete");if(menuItem!=undefined&&menuItem.city.toUpperCase()===inputValue.toUpperCase()){isValueAcceptable=true;return false;}});if(!isValueAcceptable){$(this).val(emptyValue);}}}});}(jQuery));jQuery().ready(function($){$('#search-form-component input.search-corp, #city-search-form input.search-corp, .search-module input.search-corp').on('focus',function(){$(this).blur(function(){if($(this).val().length>0){$(this).closest('form').find('.submit ').focus();};});});});jQuery.fn.replaceElement=function(id,sValue)
{$("#"+id).replaceWith(sValue);};jQuery.fn.enableLazyLoad=function(id,sValue)
{$(window).load(function(){$(this).replaceElement(id,sValue);});};var SearchComponent={openSearchCard:function(){$('p.sleeping-rooms, div.meetings-space').hide();$('p.wedding-sleeping-rooms, div.wedding-meetings-space').show();$('#find-a-hotel-control,#header-find-panel-trigger').click();return false;},initializeMeetingsForm:function(){var searchMeetingsSpaceForm=$('form.search-meeting-space');$(searchMeetingsSpaceForm).find('p.sleeping-rooms :input:text, div.meetings-space :input:text, p.meetings-space :input:text').each(function(){if($(this).val()==0){$(this).val('');}});var meetingSearchOption=$(searchMeetingsSpaceForm).find(':radio[name="eventOptionsRadio"]:checked').val();if(typeof meetingSearchOption==='undefined')
{findMeetingSpaceComponent.showOrHideElementByCheckbox(searchMeetingsSpaceForm,':checkbox[name=roomsOnlySelected]','p.sleeping-rooms');findMeetingSpaceComponent.showOrHideElementByCheckbox(searchMeetingsSpaceForm,':checkbox[name=roomsAndEventSelected]','div.meetings-space');return;}
switch(meetingSearchOption){case'roomsOnly':$(searchMeetingsSpaceForm).find('div.meetings-space').hide('fast');$(searchMeetingsSpaceForm).find('p.sleeping-rooms').show('slow',function(){SearchComponent.handleCollapseExpand($(searchMeetingsSpaceForm))});break;case'roomsAndSpace':$(searchMeetingsSpaceForm).find('div.meetings-space, p.sleeping-rooms').show('slow',function(){SearchComponent.handleCollapseExpand($(searchMeetingsSpaceForm))});break;case'spaceOnly':$(searchMeetingsSpaceForm).find('p.sleeping-rooms').hide('fast');$(searchMeetingsSpaceForm).find('div.meetings-space').show('slow',function(){SearchComponent.handleCollapseExpand($(searchMeetingsSpaceForm))});break;default:$(searchMeetingsSpaceForm).find('p.sleeping-rooms :input:text, div.meetings-space :input:text').each(function(){$(this).val("")});$(searchMeetingsSpaceForm).find('div.meetings-space, p.sleeping-rooms').hide('fast',function(){SearchComponent.handleCollapseExpand($(searchMeetingsSpaceForm))});}},clusterCodeChanged:function(){var searchForm=this.form;if(SearchForm.hasFeature($(searchForm),'special-rates')){return;}
var noRatesButton=$(searchForm).find(':radio.search-clusterCode-none').get(0);var corporateCodeButton=$(searchForm).find(':radio.search-clusterCode-other').get(0);var corporateCodeBox=$(searchForm).find(':text.search-corp').get(0);var incentivesButton=$(searchForm).find(':radio.search-clusterCode-INT').get(0);var incentivesBox=$(searchForm).find(':text.search-awards').get(0);var groupCodeButton=$(searchForm).find(':radio.search-clusterCode-group').get(0);var groupCodeBox=$(searchForm).find(':text.search-group').get(0);var useRewardPointCheckbox=$(searchForm).find(':checkbox[name="useRewardsPoints"]').get(0);var flexibleDateSearchCheckbox=$(searchForm).find(':input[name="flexibleDateSearch"]').get(0);var incentivesActive=$(searchForm).find(':radio.search-clusterCode-INT:checked').val();var groupActive=$(searchForm).find(':radio.search-clusterCode-group:checked').val();var adfActive=$(searchForm).find('input.flexible-date-search:checked').val();var adfActiveFL=$(searchForm).find('input.flexible-date-search-flash-card:checked').val();if(this.name=="useRewardsPoints"){$(noRatesButton).attr('checked',true);if($(incentivesBox).length&&$(incentivesBox).length>0){$(incentivesBox).val('');}
if($(groupCodeBox).length&&$(groupCodeBox).length>0){$(groupCodeBox).val('');}
if($(corporateCodeBox).length&&$(corporateCodeBox).length>0)
{$(corporateCodeBox).val('');}}
else{if($(useRewardPointCheckbox).length&&$(useRewardPointCheckbox).length>0)
{$(useRewardPointCheckbox).attr('checked',false);}
if(this.type=="text"){if(this==corporateCodeBox){$(corporateCodeButton).attr('checked',true);if($(incentivesBox).length&&$(incentivesBox).length>0)
{$(incentivesBox).val('');}
if($(groupCodeBox).length&&$(groupCodeBox).length>0)
{$(groupCodeBox).val('');}}
else if(this==incentivesBox){$(incentivesButton).attr('checked',true);if($(corporateCodeBox).length&&$(corporateCodeBox).length>0)
{$(corporateCodeBox).val('');}
if($(groupCodeBox).length&&$(groupCodeBox).length>0)
{$(groupCodeBox).val('');}}
else if(this==groupCodeBox){$(groupCodeButton).attr('checked',true);if($(corporateCodeBox).length&&$(corporateCodeBox).length>0)
{$(corporateCodeBox).val('');}
if($(incentivesButton).length&&$(incentivesButton).length>0)
{$(incentivesBox).val('');}}}
else if(this.type=="radio"){if(this==corporateCodeButton){$(corporateCodeBox).focus();}
else{$(corporateCodeBox).val('');}
if(this==incentivesButton){$(incentivesBox).focus();}
else{if($(incentivesBox).length&&$(incentivesBox).length>0)
{$(incentivesBox).val('');}}
if(this==groupCodeButton){$(groupCodeBox).focus();}
else{if($(groupCodeBox).length&&$(groupCodeBox).length>0)
{$(groupCodeBox).val('');}}}}
if(this.className.match("flexible-date-search")){$(noRatesButton).attr('checked',true);if($(incentivesBox).length&&$(incentivesBox).length>0){$(incentivesBox).val('');}
if($(groupCodeBox).length&&$(groupCodeBox).length>0){$(groupCodeBox).val('');}}
else{if(this==incentivesButton&&adfActive=="true"||this==incentivesBox&&adfActive=="true"||this==groupCodeButton&&adfActive=="true"||this==groupCodeBox&&adfActive=="true")
{$(flexibleDateSearchCheckbox).attr('checked',false);}
if(this.type=="text"){if(this==incentivesBox&&adfActive=="true"||this==groupCodeBox&&adfActive=="true"){$(".target").toggleClass("hidden");}}}
if(this.className.match("flexible-date-search-flash-card")){$(noRatesButton).attr('checked',true);if($(incentivesBox).length&&$(incentivesBox).length>0){$(incentivesBox).val('');}
if($(groupCodeBox).length&&$(groupCodeBox).length>0){$(groupCodeBox).val('');}}
else{if(this==incentivesButton&&adfActiveFL=="true"||this==incentivesBox&&adfActiveFL=="true")
{$(flexibleDateSearchCheckbox).attr('checked',false);}
if(this.type=="text"){if(this==incentivesBox&&adfActiveFL=="true"){$(".target-flash-card").toggleClass("hidden");}}}},stateChanged:function(){if(this.className.match("search-state"))
{var searchForm=this.form;var index=$(searchForm).find('select.search-state').index(this);var country=$(searchForm).find('select.search-country').get(index);if(this.selectedIndex==0){$(country).prop("selectedIndex",0);}
else{$(country).val('US');}}
else if(this.name.match("destination")){if(this.selectedIndex==0){this.form.elements["destinationAddress.country"].selectedIndex=0;}
else{this.form.elements["destinationAddress.country"].value="US";}}
else if(this.name.match("origin")){if(this.selectedIndex==0){this.form.elements["originAddress.country"].selectedIndex=0;}
else{this.form.elements["originAddress.country"].value="US";}}},countryChanged:function(){if(this.className.match("search-country"))
{var searchForm=this.form;var index=$(searchForm).find('select.search-country').index(this);var state=$(searchForm).find('select.search-state').get(index);if(this.value!="US"){$(state).prop('selectedIndex',0);}}
else if(this.name.match("destination")){if(this.value!="US"){this.form.elements["destinationAddress.stateProvince"].selectedIndex=0;}}
else if(this.name.match("origin")){if(this.value!="US"){this.form.elements["originAddress.stateProvince"].selectedIndex=0;}}},brandsSelectionChanged:function(){var searchForm=this.form;if(SearchForm.hasFeature($(searchForm),'brands')){return;}
var otherCheckbox=$(searchForm).find('input:checkbox[name="marriottBrands"]:not(.search-brand-all)');var allCheckbox=$(searchForm).find('input:checkbox[class*="search-brand-all"]');if(this==allCheckbox[0]){allCheckbox.attr('checked',true);otherCheckbox.attr('checked',false);}
else{var isAnySelected=otherCheckbox.is(':checked');if(isAnySelected){allCheckbox.attr('checked',false);}
else{allCheckbox.attr('checked',true);}}},validateSearchForm:function(){var form=this;var selectedPriceRange=false;var selectedRate=false;var selectedCorp=false;var selectedAward=false;var selectedUseRewards=false;var groupRatesMessage=document.getElementById("groupMessage");var useRewardsPoints=form.elements["useRewardsPoints"];var useRewardsPtsMessage=document.getElementById("useRewardsPtsMessage");var roomCount;var searchDateFormat="("+$('input#single-search-date-format').val()+")";if(this.id!='keyword-search-form'){var isSavedHotelForm=$(form).hasClass('saved-hotel-search-form');if(isSavedHotelForm)
{roomCount=form.elements["numberOfRooms"].value;}
else{roomCount=form.elements["roomCount"].value;}
if(isSavedHotelForm)
{if($(form).find('select[name="propertyCode"]').val()=="")
{alert(form.elements["noSelectedHotel"].value);return false;}}
if($(form).hasClass('validate-search-form')){var $flexibleDateSearch=$(this).find(':input[name="flexibleDateSearch"]');if($flexibleDateSearch.prop("checked")){if(roomCount>=4){alert("Flexible date searches cannot be completed requesting more than 3 rooms. Please revise your search.");return false;}
var $flexForm=$flexibleDateSearch.closest("form");if(!$(".calendar-module-fromdate",$flexForm).datepicker("getDate")&&$(".calendar-module-todate",$flexForm).datepicker("getDate")){$(".calendar-module-todate",$flexForm).datepicker("setDate",null);}}}
var clusterCodeGroup=form.elements["clusterCode"];if(form.elements["clusterCode"]){for(i=0;i<form.elements["clusterCode"].length;i++){if(clusterCodeGroup[i].checked==true){if((clusterCodeGroup[i].value!="")&&(clusterCodeGroup[i].value!="none")&&(clusterCodeGroup[i].value!="INT")){selectedRate=true;if(clusterCodeGroup[i].value=="other"){selectedCorp=true;}}else if(clusterCodeGroup[i].value=="INT"){selectedAward=true;}}}}
if(useRewardsPoints&&((isSavedHotelForm&&useRewardsPoints.length==2&&useRewardsPoints[0].checked==true)||useRewardsPoints.checked==true))
{selectedUseRewards=true;}
if(roomCount>=4)
{if(selectedRate)
{return confirm(groupRatesMessage.value);}
else if(selectedUseRewards)
{return confirm(useRewardsPtsMessage.value);}}
if(form.displayableIncentiveType_Number!=null)
{if(form.displayableIncentiveType_Number.value!=''){if(form.elements['fromDate'].value==''||form.elements["fromDate"].value==searchDateFormat||form.elements['toDate'].value==''||form.elements["toDate"].value==searchDateFormat){alert('Please enter check-in and check-out dates when searching by award number or type');return false;}
if(roomCount>1){alert('You may only reserve one room at a time when redeeming an award.  To book more than one room, please call Marriott Individual Incentives Reservations at 1-800-899-7235.');return false;}}
if(selectedAward==true&&($(form).parent().get(0).id!='propertyedit-search-panel')&&(form.displayableIncentiveType_Number.value==null||form.displayableIncentiveType_Number.value=="")){alert($('#awardTypeBlankMessage').val().replace(/\s+/g," "));return false;}}}
if(selectedRate==true){if((form.elements["corporateCode"].value.toUpperCase()!="REW")&&(form.elements["corporateCode"].value.toUpperCase()!="P17")&&(form.elements["corporateCode"].value.toUpperCase()!="MRW")&&(form.elements["corporateCode"].value.toUpperCase()!="MXR")&&(form.elements["corporateCode"].value.toUpperCase()!="MW1")){if(selectedCorp==true&&($(form).parent().get(0).id!='propertyedit-search-panel')&&(form.elements["corporateCode"].value==null||form.elements["corporateCode"].value=="")){alert($('#corpCodeBlankMessage').val().replace(/\s+/g," "));return false;}
if((form.elements["fromDate"].value==null||form.elements["fromDate"].value==''||form.elements["fromDate"].value==searchDateFormat)&&(form.elements["toDate"].value==null||form.elements["toDate"].value==''||form.elements["toDate"].value==searchDateFormat)){var choice=confirm("You have requested a special rate without specifying dates. We can store this information for your convenience, but cannot check rates and availability unless dates are specified.\n"+"Click 'OK' to continue without dates, or 'Cancel' to go back and change your search options.");return choice;}}}
return true;},handleCollapseExpand:function(triggerElement){var searchFlashCard=$('.search-flash-card');var vers=$.browser.version.substring(0,1);if($.browser.msie&&$(searchFlashCard).length>0){var availableHeight=$('#layout-body').height()-$(searchFlashCard).position().top+parseInt($('#footer').css('marginTop'));if($('.search-card').height()>availableHeight){if(vers==9){$('#footer').css('zIndex',0);}
else{$('#footer').css('zIndex',-1);}}
else{$('#footer').css('zIndex',1);}}},tabChanged:function(e,ui){if($(ui.panel).hasClass('meetings-search-form')){SearchComponent.initializeMeetingsForm();}else if($(ui.panel).hasClass('deals-search-form')||$(ui.panel).attr('id')=='flash-card-form-find-a-hotel-panel'||$(ui.panel).attr('id')=='flash-card-form-find-a-hotel'){SearchComponent.handleCollapseExpand($(ui.panel));}
if($('.search-flash-card').length>0){var availableHeight=$('#layout-body').height()-$('.search-flash-card').position().top-$('#carousel-container').height()+parseInt($('#carousel-container').css('marginTop'));if($('.search-card').height()>availableHeight){$('#flash-card-container').css('zIndex',3);}else{$('#flash-card-container').css('zIndex',1);}}},focusOnFirstElement:function(form){form.find(':input:visible:enabled:first').focus();},defaultDate:function(form){form.each(function(){var $fromDate=form.find('input[name="fromDate"]'),dtFromDate=$fromDate.datepicker("getDate"),todaysDate=new Date,dateFormat=form.find('#single-search-date-format');todaysDate.setHours(0,0,0,0);if($fromDate.hasClass('is-error')==false&&(!dtFromDate||dtFromDate<todaysDate||($fromDate.val()&&$fromDate.val().indexOf($('#single-search-date-format').val())>0))){$fromDate.datepicker("setDate",todaysDate);todaysDate.setDate(todaysDate.getDate()+1);form.find('input[name="toDate"]').datepicker("setDate",todaysDate);}});}}
var nonResSearchComponent={showhideRegionCountry:function(findOption,findForm)
{switch(findOption){case'brochureRegion':$(findForm).find('div.brochure-country').hide('fast',function(){SearchComponent.handleCollapseExpand($(findForm))});$(findForm).find('div.brochure-region').show('slow',function(){SearchComponent.handleCollapseExpand($(findForm))});break;case'brochureCountry':$(findForm).find('div.brochure-region').hide('fast',function(){SearchComponent.handleCollapseExpand($(findForm))});$(findForm).find('div.brochure-country').show('slow',function(){SearchComponent.handleCollapseExpand($(findForm))});break;default:$(findForm).find('div.brochure-region, div.brochure-country').hide();}},findRadioEventHandler:function()
{var findForm=this.form;var findOption=$(this).val();nonResSearchComponent.showhideRegionCountry(findOption,findForm);},clearForm:function(findForm)
{$(':input',findForm).each(function(){var type=this.type;var tag=this.tagName.toLowerCase();if(type=='radio')
this.checked=false;else if(tag=='select')
this.selectedIndex=0;});nonResSearchComponent.showhideRegionCountry("",findForm);}};$(function(){var d=new Date();var offset=-d.getTimezoneOffset()/60;document.cookie='dayTimeOffset='+offset+"; path=/";});function activateFlexibleDateSearch(){var toggleTarget="true";var flexibleDateSearchCheckbox="false";if($(':input[name="flexibleDateSearch"]:checked').length>0){flexibleDateSearchCheckbox=$(':input[name="flexibleDateSearch"]:checked').val();}
var flexibleDateFlagOnError=$('#isDatesFlexibleOnErrorFlag');if(flexibleDateFlagOnError.length>0&&flexibleDateFlagOnError.val().match('true')){var container=$('.flexible-date-searchP');if(container.length>0){toggleTarget="false";$(".target").toggleClass("hidden");container.find('#flexible-date-search').attr('checked',true);}}
if(flexibleDateSearchCheckbox=="true"){if(toggleTarget.match('true')){$(".target").toggleClass("hidden");}
$(".target-flash-card").toggleClass("hidden");$(':input[name="flexibleDateSearch"]:checked').attr('checked',true);}}
$(document).ready(function(){activateFlexibleDateSearch();$('input.flexible-date-search, input.flexible-date-search-flash-card').click(function(event){var form=this.form;$(form).find(".target, .target-flash-card").toggleClass("hidden");synchToDateToLos(this.form);});});$('select[name="lengthOfStay"]').change(function(event){synchToDateToLos(this.form,this.className);});$(".calendar-module-todate").on({"refresh":function(event){var currentDate=$(this).datepicker("getDate");var defaultToDateDays=0;var adfSearch=$(this.form).find('input[name="flexibleDateSearch"]:checked').val();var adfLengthOfStay=$(this.form).find('select[name="lengthOfStay"]').val();if(adfSearch=='true'){defaultToDateDays=adfLengthOfStay-1;}
if(event.date&&adfSearch=='true'){event.date.setDate(event.date.getDate()+defaultToDateDays);if(!currentDate||currentDate<=event.date){$(this).datepicker("setDate",event.date);}}}},null,null);function synchToDateToLos(form,classname){if(SearchForm.hasFeature($(form),'flexdate')){return;}
var dateFormatPattern=$(':hidden[name="dateFormatPattern"]').val().toLowerCase();var $form=$(form);$fromDate=$('input.hasDatepicker.calendar-module-fromdate',$form);date=$fromDate.datepicker("getDate");$toDate=$('input.hasDatepicker.calendar-module-todate',$form);toDate=$toDate.datepicker("getDate");if(date&&toDate){var difference=Math.abs(toDate.getTime()-date.getTime());var lengthOfStay=Math.round(difference/1000/60/60/24);}
if(classname=='search-length-of-stay'){lengthOfStay=$('select[name="lengthOfStay"]',$form).val();}
if((lengthOfStay<1||lengthOfStay>9)){lengthOfStay=1;}
if(date&&$locale.locale("parseDate",$fromDate.val())){if(date&&$.isNumeric(lengthOfStay)){date.setDate(date.getDate()+parseInt(lengthOfStay,10));}
$toDate.datepicker("setDate",date);$('select[name="lengthOfStay"]',$form).val(lengthOfStay);}else if(!date){$('select[name="lengthOfStay"]',$form).val(1);$('input.hasDatepicker.calendar-module-todate',$form).val('');}};if($('html').attr('lang')==='pt-BR')
{$("#site-tools a[href$='change-cancel-reservation.mi']").addClass('mi-popover');};var jsNew=$('.js-new-window');if(jsNew.length){jsNew.click(function(e){e.preventDefault();window.open(jsNew.attr('href'));});}
var miPopover=$('.mi-popover');var windowURL=window.location.href;if(windowURL.match('/ritz')||windowURL.match('execustay')||windowURL.match('mvci')||windowURL.match('bulgari')){$(".mi-popover").click(function(){var pageURL=$(this).attr('href').replace(/ /g,'%20')+" #page-container";var wdt='';var hgt='';pageURL=$(this).attr('href').replace(/ /g,'%20');if(pageURL.match(/RateRules/)){wdt=740;hgt=548;}else if(pageURL.match(/redeemRewardsPoints/)){wdt=920;hgt=500;}else{wdt=760;hgt=400;}
var winprops="location=no,scrollbars=yes,menubar=no,toolbar=no,locationbar=no,resizable=yes,alwaysRaised=yes,height="+hgt+",width="+wdt+",left=100,top=100";window.open(pageURL,'',winprops);return false;});}
else if(miPopover.length&&typeof $.magnificPopup!='undefined'){miPopover.each(function(i,el){var $el=$(el);var closeText=(typeof msgResources.closeText!='undefined')?msgResources.closeText:'Close';var loadingText=(typeof msgResources.loadingText!='undefined')?msgResources.loadingText:'Loading...';var printText=(typeof msgResources.printText!='undefined')?msgResources.printText:'Print';var mainClassStyles='m-modal t-modal-med';var pageURL=$el.attr('href').replace(/ /g,'%20')+" #page-container";if(pageURL.match(/internationalmodal/)){mainClassStyles='m-modal t-modal-lang';}else if(pageURL.match(/viewRoomPool/)){mainClassStyles='m-modal t-modal-room-info';}else if(pageURL.match(/meetingRoomsSetupModal/)){mainClassStyles='m-modal t-modal-small';}
var options=$.extend({},$el.data('mfpOptions'),{mainClass:mainClassStyles,type:'ajax',ajax:{settings:{dataType:'html'}},closeMarkup:'<div class="m-modal-utilities">'
+'<button id="win-util-print" class="m-modal-print"><i class="icon icon-print"></i> '+printText+'</button>'
+'<button class="m-modal-close mfp-close is-hover-fix">%title% <i class="icon mfp-close icon-close"></i></button>'
+'</div>',tClose:closeText,tLoading:loadingText,callbacks:{beforeOpen:function(){this.container.attr('aria-live','assertive');$('#page-container').attr('aria-hidden','true');},parseAjax:function(mfpResponse){var frag=$(mfpResponse.data).find('#layout-body-container, .js-popover,.l-body');if(frag.find('form[name=viewRoomDetailsForm]').length){frag.addClass('room-details-panel');}
mfpResponse.data=frag;},ajaxContentAdded:function(){var $mfpContainer=this.container,mfpCustomOptions=this.ev.data('mfpOptions')||{};var printActive=$('.js-popover',$mfpContainer).data('print');if(printActive){var closeBtn=$('.mfp-close.m-modal-close',$mfpContainer);var printBtn=$('.m-modal-print',$mfpContainer);var closeIcon=$('.icon-close',closeBtn);closeIcon.prependTo(closeBtn);if(mfpCustomOptions.showPrintButton===false){printBtn.hide();}
else{printBtn.show();}
printBtn.click(function(e){e.preventDefault();window.print();});$('#page-container').addClass('is-modal-print');}
var modalTabs=$('.js-tabs',$mfpContainer);if(modalTabs.length){var modalTabsData=modalTabs.data('options'),selectedTab=(typeof modalTabsData.selectedTab!='undefined')?modalTabsData.selectedTab:0;modalTabs.tabs().tabs('select',parseInt(selectedTab));}
var analyticsTrigger=$mfpContainer.find('.analytics-click');if(typeof analytics!='undefined'){analyticsTrigger.each(function(){analytics.utilities.elementClickAnalytics($(this));});}
mfpFormHandlers={emailToFrndForm:{actionSelector:'form[id=emailToAFriendForm]',$form:$mfpContainer.find('form[id=emailToAFriendForm]'),event:'submit',eventCallback:function(e){e.preventDefault();var $form=$(this);var $formValues=$form.serialize();var url=$form.attr('action');$.post(url,$formValues,function(data){var content=$(data).find('#emailToFrndpanel');$mfpContainer.find('#emailToFrndpanel > :not(.m-modal-utilities)').remove();$('#emailToFrndpanel',$mfpContainer).append(content);});}},roomPreferenceForm:{actionSelector:'#roomPreferenceForm',$form:$mfpContainer.find('#roomPreferenceForm'),event:'submit',eventCallback:function(e){e.preventDefault();var $form=$(this);var urlAction=$form.attr('action');var usableUrl=urlAction.substr(0,urlAction.indexOf('?'));var url=usableUrl;$.ajax({type:"POST",beforeStrart:$form.addClass('is-loading-ajax-guestinfo'),url:url,data:$form.serialize(),dataType:"html",cache:false,timeout:15000,success:function(data){var errorContent=$(data).find('#form-action-messages');var fetherFreeError=$(data).find('#feather-free-msg');if(errorContent.length>0||fetherFreeError.length>0){var errorMsg=$(data).find('.l-message-box.t-error-msg').clone();$mfpContainer.find("#preference-view-panel .l-message-box.t-error-msg").remove();$mfpContainer.find("#preference-view-panel").prepend(errorMsg);$form.removeClass('is-loading-ajax-guestinfo');}else{var dataPrefTables="#review-preference-tables";var content=$(data).find(dataPrefTables).html();if($(content).length){$(dataPrefTables).empty().append(content).find('.is-hidden-js-disable').removeClass('is-hidden');$(dataPrefTables).find(".mi-popover").magnificPopup(options);preferenceLightBox.init();}else{var newPrefs=$(data).find('#changable-room-prefs').html();$('#changable-room-prefs').html(newPrefs);myStayRoomPrefereces.toggle(true);}
var prefAnalytics=$(dataPrefTables).find('.analytics-click');if(typeof analytics!='undefined'){analytics.utilities.elementClickAnalytics(prefAnalytics);}
$form.removeClass('is-loading-ajax-guestinfo');$.magnificPopup.close();}},error:function(xhr,ajaxOptions,thrownError){$form.removeClass('is-loading-ajax-guestinfo');}});}},currencyCalculatorForm:{actionSelector:'form[id=currencyCalculatorForm]',$form:$mfpContainer.find('[id=currencyCalculatorForm]'),event:'submit',eventCallback:function(e){e.preventDefault();var $form=$(this);var $formValues=$form.serialize();var url=$form.prop('action');$.post(url,$formValues,function(data){var content=$(data).find('#currency-container');$('#currency-container',$mfpContainer).empty().append(content);});}},viewRoomDetailsForm:{actionSelector:'form[name=viewRoomDetailsForm] .update-link',$form:$mfpContainer.find('form[name=viewRoomDetailsForm]'),event:'click',eventCallback:function(e){e.preventDefault();var $form=$(this).parents('form:first');var roomPoolCode=$form.find("#selected-room-type").val();var url=$form.find("#context-display").val()
+"/reservation/viewRoomPool.mi?"
+"marshaCode="+$("#marsha-code").val()
+"&roomPoolCode="+roomPoolCode
+"&displayRoomPoolList=Y&src=ratelist";url=url.replace(/ /g,'%20');$.get(url,function(data){data=$(data).find('.l-body-container');$mfpContainer.find('.room-details-panel > :not(.m-modal-utilities)').remove();$('.room-details-panel',$mfpContainer).prepend(data.find('.js-popover').html());});}},hotelCategorySearchForm:{actionSelector:'form[id=points-grid-form]',$form:$mfpContainer.find('form[id=points-grid-form]'),event:'submit',eventCallback:function(e){e.preventDefault();var $form=$(this);var url=MI.forms.convertToURLQuery($form);$.get(url,function(data){var content=$(data).find('.l-body-container').html();$mfpContainer.find('.js-popover > :not(.m-modal-utilities)').remove();$('.js-popover ',$mfpContainer).append(content);var backButton=$('.js-back-button',$mfpContainer);backButton.on('click',function(e){e.preventDefault();$.get($(this).prop('href'),function(data){var content=$(data).find('.l-body-container').html();$mfpContainer.find('.js-popover > :not(.m-modal-utilities)').remove();$('.js-popover ',$mfpContainer).append(content);var modalTabs=$('.js-tabs',$mfpContainer);if(modalTabs.length){var modalTabsData=modalTabs.data('options'),selectedTab=(typeof modalTabsData.selectedTab!='undefined')?modalTabsData.selectedTab:0;modalTabs.tabs().tabs('select',parseInt(selectedTab));}});});});}},sendToConcurForm:{actionSelector:'#js-cancelBtn, #js-okBtn, .mfp-close',$form:$mfpContainer.find('#js-cancelBtn, #js-okBtn, .mfp-close'),event:'click',eventCallback:function(e){e.preventDefault();var btnId=$(this).attr('id'),isCloseBtn=$(this).hasClass('mfp-close'),URL=(window.location.hostname+window.location.pathname),linkDescription,isSendToPanel=($(this).parent().prev().is('#m-sendToConcur-panel'))||($(this).hasClass('analytics-click'));if(isSendToPanel&&typeof swa!=="undefined"){if(isCloseBtn){linkDescription="X Concur Button"};if(btnId=='js-cancelBtn'){linkDescription="Cancel Concur Button"};swa.linkTrackVars="eVar1,events";swa.linkTrackEvents="event2";swa.eVar1="uri="+URL+":loc=SendConcurLightbox:linkDescription="+linkDescription;swa.events="event2";void(swa.tl(true,"o",linkDescription));}
$.magnificPopup.close();}},sendToConcurSubmit:{actionSelector:'form[id=sendToConcurForm]',$form:$mfpContainer.find('form[id=sendToConcurForm]'),event:'submit',eventCallback:function(e){var URL=(window.location.hostname+window.location.pathname)
if(typeof swa!=="undefined"){swa.linkTrackVars="eVar1,events";swa.linkTrackEvents="event2";swa.eVar1="uri="+URL+":loc=SendConcurLightbox:linkDescription=Send Concur Button";swa.events="event2";void(swa.tl(true,"o","Send Concur Button"));}}}};for(var handlerName in mfpFormHandlers){var handler=mfpFormHandlers[handlerName];if(handler.$form.length){$mfpContainer.delegate(handler.actionSelector,handler.event,handler.eventCallback);}}
if($('#preferencescontainer').length>0){var allPossiblePreferencePanelContainers=".edit-preferences-panel";$(allPossiblePreferencePanelContainers).preferenceForm();}},close:function(){$('#page-container').removeClass('is-modal-print').removeAttr('aria-hidden');if($('html').attr('lang')==='pt-BR'||$('html').attr('lang')==='ko-KR'){$('.is-level-1 .m-header-buttons.is-selected').removeClass('is-selected');}
this.container.undelegate();}}});$el.magnificPopup(options);});}else{$("a.mi-popover, a.redemption-rules-link").on("click.popover",function(event){var link=$(event.target)
if($(link).attr('class')=='pop-over'){return false;}
event.preventDefault();var pageURL=$(this).attr('href').replace(/ /g,'%20')+" #page-container";var wdt;var hgt;if(pageURL.match(/pointsGridPopUp/)){wdt=740;hgt=600;}else if(pageURL.match(/printReservation/)){wdt=800;hgt=600;}else if(pageURL.match(/online-booking-details/)){wdt=740;hgt=468;}else if(pageURL.match(/space-calc/)){wdt=388;hgt=365;}else if(pageURL.match(/special-rates/)){wdt=388;hgt=600;}else if(pageURL.match(/use-points/)){wdt=390;hgt=535;}else if(pageURL.match(/redeemRewardsPoints/)){wdt=388;hgt=600;}else if(pageURL.match(/hotel-prices/)){wdt=500;hgt=365;}else if(pageURL.match(/eu-cookie-compliance/)){wdt=660;hgt=468;}else if(pageURL.match(/displayCalculator/)){wdt=400;hgt=468;}else if(pageURL.match(/internationalmodal/)){wdt=780;hgt=530;}else{wdt=388;hgt=296;}
var dialogClassName="mipopover";if(pageURL.match(/space-calc/)){dialogClassName="mipopover-space-calc";}else if(pageURL.match(/special-rates/)){dialogClassName="mipopover-special-rates";}else if(pageURL.match(/online-booking-details/)){dialogClassName="mipopover-book-right";}else if(pageURL.match(/use-points/)){dialogClassName="mipopover-use-points";}else if(pageURL.match(/displayCalculator/)){dialogClassName="mipopover-calculator";}
$('body').append("<div id='wrapper_div'></div>");$("#wrapper_div",parent.document.body).dialog({resizable:false,modal:true,width:wdt,height:hgt,bgiframe:true,dialogClass:dialogClassName,open:function(){$('body').find('#wrapper_div').prepend("<div id='load-img'></div>");$(this).load(pageURL,{},function(){$('#load-img').remove();$("#modal-utils").show();if($("#printer-friendly").val()!="true"){var url=pageURL.replace(" #page-container","");if(url=="/eu-cookie-compliance.mi"){$("#modal-util-print").bind('click',function(){window.open(url,'PrintWindow','height=400,width=940,location=yes,left=100,top=100,scrollbars=yes,menubars=no,toolbars=no,resizable=no');return false;});}
else if(url=="/change-cancel-reservation.mi"){$("#modal-util-print").bind('click',function(){window.open(url,'PrintWindow','height=400,width=940,location=yes,left=300,top=300,scrollbars=yes,menubars=no,toolbars=no,resizable=no');return false;});}else{$("#modal-util-print").bind('click',function(){window.open(url,'PrintWindow','height=400,width=730,location=yes,left=300,top=300,scrollbars=yes,menubars=no,toolbars=no,resizable=no');return false;});}}
if($("#wrapper_div").val()!="true"){$("#wrapper_div #layout-body a, #wrapper_div #layout-body a.sendto-link").bind('click',function(){if($(this).attr('href')=="#howToDelete"){$('.ui-dialog-content').scrollTop(300);}
if($(this).attr('target')=="_blank"||$(this).hasClass('sendto-link')){var urlLink=$(this).attr('href');window.open(urlLink,'_blank');}
if($(this).hasClass('self-window-link')){var urlLink2=$(this).attr('href');window.open(urlLink2,'_self');}
return false;});}
if(pageURL.match(/printReservation/)){$.getScript("/common/js/reservations/reviewConfirm.js")}
if(pageURL.match(/pointsGridPopUp/)){$.getScript("/common/js/rewardSearch.js")
$('#wrapper_div .submit').click(function(event){event.preventDefault();var catTier=$('[name="hotelCategoryOrTierValue"] option:selected').val();var url="/rewards/pointsGridPopUpPropertyList.mi";$.post(url,{hotelCategoryOrTierValue:catTier},function(data){var content=$(data);var content=$(data).find('#mr-category-popup-grid');$("#wrapper_div").find("#layout-body").empty().append(content);$("#wrapper_div").find("#mr-category-popup-grid").css({'zIndex':'9999','position':'relative'});});});}
if(pageURL.match(/displayCalculator/)&&$(".mipopover-calculator #header #logo").length==0){var displayCalcHeader=$('.mipopover-calculator #wrapper_div').find('#header');$(displayCalcHeader).append("<div id='logo-us'></div>");}
if(pageURL.match(/space-calc/)){$.getScript("/common/js/meetings.js")
$('#wrapper_div #space-calc-add').removeClass('popup-space-calc-add');$('#wrapper_div #space-calc-add').addClass('modal-space-calc');$("#wrapper_div").find("#space-calculator").css({'zIndex':'9999','position':'relative'});$('#wrapper_div input[name="sqfoot"]').click(function(event){SizeCalc();});$('#wrapper_div a.modal-space-calc').click(function(e){e.preventDefault();var resultVal=$('#space-calculator form').find('input[name="result"]').val();var spaceMeasurement=$('#space-calculator form').find('input[name="sqfoot"]:checked').val();var siteID=$('input[name="siteId"]').val();if(siteID==''){if(spaceMeasurement=='sqfoot'){spaceMeasurement='Square Feet';}else{spaceMeasurement='Square Meters';}
$('select[name="searchCriteriaVO.spcunits"], select[name="meetingSpaceUnits"]').val(spaceMeasurement);}
else if(siteID=='UK'||siteID=='DE'){if(spaceMeasurement=='sqfoot'){spaceMeasurement='SF-MI';}else{spaceMeasurement='SM-KM';}
$(':radio[value="'+spaceMeasurement+'"]').attr('checked',true);}
$('input.largestMeetingSpace, input#largestMeetingSpace-InCity-2').val(resultVal);$("#wrapper_div",parent.document.body).dialog('destroy');$("#wrapper_div",parent.document.body).remove();});}
var wrapper=$('#wrapper_div');wrapper.find('#page-container').css({'width':(wdt-20)+'px','height':(hgt-20)+'px'});wrapper.find('#header').css('width',(wdt-40)+'px');wrapper.find('#layout-body-container').css('width',(wdt-40)+'px');wrapper.find('#layout-body').css('width',(wdt-46)+'px');if(pageURL.match(/use-points/)){wrapper.find('#page-container').css({'width':(371)+'px','height':(486)+'px'});wrapper.find('#layout-body table td.pageHeader').css('font','bold 14px/17px arial,helvetica,sans-serif');wrapper.find('#layout-body p').css({'width':343+'px','font':'11px/14px verdana,sans-serif'});wrapper.find('#page-container').css({'overflow-y':'auto'});wrapper.find('.one-column .column').css({'width':(343)+'px'});}
if(pageURL.match(/redeemRewardsPoints/)){wrapper.find('#layout-body table').css('margin-left','10px');wrapper.find('#page-container').css('height',(hgt-48)+'px');}
if(pageURL.match(/online-booking-details/)){wrapper.find('#layout-body').css('margin-left','10px');wrapper.find('#layout-body').css('width',695+'px');$('.mipopover-book-right #wrapper_div').find('#header').css('background','url("/Images/Book_Right/logo-bookRight-rgb.png") no-repeat scroll 512px 6px');wrapper.find('#page-container').css('width',720+'px');$('#wrapper_div .first-column .layout-12').css('width',695+'px');}
if(pageURL.match(/special-rates/)){wrapper.find('#layout-body').css('margin-left','10px');wrapper.find('#layout-body div').css('width',344+'px');wrapper.find('#layout-body h2').css('margin-left','0px');}
if(pageURL.match(/space-calc/)){wrapper.find('#layout-body').css('width',(wdt-56)+'px');}
if(pageURL.match(/internationalmodal/)){$('#page-container,#header,#layout-body-container',wrapper).css({width:'auto'});$('#layout-body',wrapper).css('width','auto');$('#page-container,#header,wrapper',wrapper).css({margin:'0'});$('#header',wrapper).css({marginBottom:'1em',paddingRight:'10px'});}
return false;});},focus:function(){$('.mipopover #modal-util-close, .mipopover a.popup-win-close, .mipopover-space-calc #modal-util-close, .mipopover-special-rates #modal-util-close, .mipopover-book-right #modal-util-close, .mipopover-use-points #modal-util-close, .mipopover-space-calc a.popup-win-close, .mipopover-calculator #modal-util-close').click(function(e){e.preventDefault();$("#wrapper_div",parent.document.body).dialog('destroy');$("#wrapper_div",parent.document.body).remove();});if(pageURL.match(/displayCalculator/)){$('#currency-container button').click(function(event){event.preventDefault();var amountVar=$('[name="amount"]').val();var currency1Var=$('[name="currency1"] option:selected').val();var currency2Var=$('[name="currency2"] option:selected').val();var url="/reservation/calculateCurrency.mi";$.post(url,{amount:amountVar,currency1:currency1Var,currency2:currency2Var},function(data){var content=$(data);var content=$(data).find('#currency-container');$("#wrapper_div").find("#layout-body").empty().append(content);});});}}});return false;});}
$('.single-search-fields .single-search-tool-tip').on('click hover',function(){var form=this.form;$(this).css('cursor','pointer');$(this).closest('form').find('.single-search-tool-tip-container').addClass('show');$(this).parents('#layout-nav').css("overflow","visible");});$('.single-search-fields .single-search-tool-tip').mouseleave(function(){$('.single-search-tool-tip-container').removeClass('show');$(this).parents('#layout-nav').css("overflow","hidden");});$('.single-search-fields .single-search-tool-tip-container span').click(function(){$('.single-search-tool-tip-container').removeClass('show');$(this).parents('#layout-nav').css("overflow","hidden");$('.single-search-tool-tip').focus();$('#single-search-tool-tip-id').focus();});var tooltipAnchorHover=$(".tooltip-anchor-hover");var tooltipAnchorClick=$(".tooltip-anchor-click");tooltipAnchorHover.show().hover(function(){var tooltip=$(this).data("tooltip");$("#"+tooltip).toggleClass('show');}).click(function(){return false;});tooltipAnchorClick.show().click(function(){var tooltip=$(this).data("tooltip");$("#"+tooltip).toggleClass('show');return false;});var closeAnchor=$(".close-parent-window-anchor");closeAnchor.click(function(){$(this).parent().toggleClass('show');return false;});function applyApplicationLoadScenario(loadCallBackFunction,applicationId){var applicationLoadCommand=$("#"+applicationId).val();applicationLoadCommand=applicationLoadCommand===undefined?"":applicationLoadCommand.toUpperCase();var windowSearch=window.location.search;if(windowSearch.length>0){var applicationIndex=windowSearch.indexOf(applicationId);if(applicationIndex>-1){applicationLoadCommand=windowSearch.substring(applicationIndex+applicationId.length+1).toUpperCase();}}
switch(applicationLoadCommand){case"OFF":break;case"DOCUMENT":$(document).ready(function(){eval(loadCallBackFunction);});break;default:$(window).load(function(){eval(loadCallBackFunction);});}}
function popoverLightBox(url){var pageURL=url.replace(/ /g,'%20')+" #page-container";var wdt=740;var hgt=600;$('body').append("<div id='wrapper_div'></div>");$("#wrapper_div",parent.document.body).dialog({resizable:false,modal:true,width:wdt,height:hgt,bgiframe:true,dialogClass:"mipopover",open:function(){$('body').find('#wrapper_div').prepend("<div id='load-img'></div>");$(this).load(pageURL,{},function(){$('#load-img').remove();$("#modal-utils").show();if($("#printer-friendly").val()!="true"){var url=pageURL.replace(" #page-container","");$("#modal-util-print").bind('click',function(){window.open(url,'PrintWindow','height=400,width=730,location=yes,left=300,top=300,scrollbars=yes,menubars=no,toolbars=no,resizable=no');return false;});}
if($("#wrapper_div").val()!="true"){$("#wrapper_div #layout-body a, #wrapper_div #layout-body a.sendto-link").bind('click',function(){if($(this).attr('target')=="_blank"||$(this).hasClass('sendto-link')){window.open(url,'_blank');}
return false;});}
$.getScript("/common/js/rewardSearch.js")
$('#wrapper_div .submit').click(function(event){event.preventDefault();var catTier=$('[name="hotelCategoryOrTierValue"] option:selected').val();var url="/rewards/pointsGridPopUpPropertyList.mi";$.post(url,{hotelCategoryOrTierValue:catTier},function(data){var content=$(data);var content=$(data).find('#mr-category-popup-grid');$("#wrapper_div").find("#layout-body").empty().append(content);$("#wrapper_div").find("#mr-category-popup-grid").css({'zIndex':'9999','position':'relative'});});});$('#wrapper_div').find('#page-container').css({'width':(wdt-20)+'px','height':(hgt-20)+'px'});$('#wrapper_div').find('#header').css('width',(wdt-40)+'px');$('#wrapper_div').find('#layout-body-container').css('width',(wdt-40)+'px');$('#wrapper_div').find('#layout-body').css('width',(wdt-46)+'px');return false;});},focus:function(){$('#modal-util-close, .mipopover a.ui-dialog-titlebar-close').click(function(e){e.preventDefault();$("#wrapper_div",parent.document.body).dialog('destroy');$("#wrapper_div",parent.document.body).remove();});}});}
var MI=MI||{};MI.breakpoints={screenSizes:[0,240,320,480,560,672,768,864,960,1024,1200,1440],tshirts:['base','xs','s','sm','m','mml','ml','mll','l','xl','xxl','xxxl'],imgQString:[],responseActive:false,translateTshirtScreen:function(input,product){if(product=="screen"){return MI.breakpoints.screenSizes[$.inArray(input,MI.breakpoints.tshirts)];}else if(product=="tshirt"){return MI.breakpoints.tshirts[$.inArray(input,MI.breakpoints.screenSizes)];}},getBreakpoint:function(product){var width=$(window).width(),sizes=MI.breakpoints.screenSizes,breakpoint=0;while(sizes.length>0){var length=sizes.length,high=sizes[length-1];if(width>=high){breakpoint=high;break;}else{var half=Math.floor(length/2),mid=sizes[half];if(width<mid){sizes=sizes.slice(0,half);}
else if(width>mid){sizes=sizes.slice(half);}
else{breakpoint=mid;break;}}}
if(product=="tshirt"){breakpoint=MI.breakpoints.translateTshirtScreen(breakpoint,"tshirt");}
return breakpoint;}}
MI.forms={convertToURLQuery:function(formObj){var formAction=formObj.prop('action');var r='?'+formObj.serialize();var completedFormURL=formAction+r;completedFormURL.replace(/ /g,'%20');return completedFormURL;}}
var guidedSearch={maps:new Array(),imageMapaMundi:new Image(),upArrowEnabled:new Image(),upArrowDisabled:new Image(),downArrowEnabled:new Image(),downArrowDisabled:new Image(),segmentCount:0,currentSegment:0,currentCountry:0,segmentHeight:140,currentCountryListName:"",loadImages:function(){var imagePath=$("#image-path").val();guidedSearch.imageMapaMundi.src=imagePath+"/Images/Search_Card_Brochure/Maps/map-World.jpg";guidedSearch.upArrowEnabled.src=imagePath+"/Images/Arrows/scroll-up-arrow-active.png";guidedSearch.upArrowDisabled.src=imagePath+"/Images/Arrows/scroll-up-arrow-disabled.png";guidedSearch.downArrowEnabled.src=imagePath+"/Images/Arrows/scroll-down-arrow-active.png";guidedSearch.downArrowDisabled.src=imagePath+"/Images/Arrows/scroll-down-arrow-disabled.png";var totalRegions=$("#regions-total").val();var tempImage;for(i=0;i<totalRegions;i++){tempImage=new Image();guidedSearch.maps[i]=tempImage;tempImage.src=$("#image-path-"+i).val();}},nextPage:function(){guidedSearch.currentSegment++;if(guidedSearch.currentSegment<guidedSearch.segmentCount){$("#country-list-"+guidedSearch.currentCountry).animate({"top":"-="+guidedSearch.segmentHeight+"px"},"slow");guidedSearch.setEnabledPreviousButton(true);}else{guidedSearch.currentSegment=guidedSearch.segmentCount-1;}
guidedSearch.setEnabledNextButton(guidedSearch.currentSegment<guidedSearch.segmentCount-1);},previousPage:function(){guidedSearch.currentSegment--;if(guidedSearch.currentSegment>-1){$("#country-list-"+guidedSearch.currentCountry).animate({"top":"+="+guidedSearch.segmentHeight+"px"},"slow");}else{guidedSearch.currentSegment=0;}
guidedSearch.setEnabledNextButton(guidedSearch.currentSegment<guidedSearch.segmentCount-1);guidedSearch.setEnabledPreviousButton(guidedSearch.currentSegment>0);},setEnabledPreviousButton:function(enableIt){if(enableIt){$('#up-arrow').attr("src",guidedSearch.upArrowEnabled.src);}else{$('#up-arrow').attr("src",guidedSearch.upArrowDisabled.src);}},setEnabledNextButton:function(enableIt){if(enableIt){$('#down-arrow').attr("src",guidedSearch.downArrowEnabled.src);}else{$('#down-arrow').attr("src",guidedSearch.downArrowDisabled.src);}},goTo:function(countryCode){if(countryCode=="none"){return;}
var site=$("#"+countryCode).text();if(countryCode.toLowerCase()=="us.hi"){sendto('US','marriott','/search/submitSearch.mi?destinationAddress.stateProvince=HI&destinationAddress.country=US','3');}else if(site=="MCOM"){sendto('US','marriott','/search/submitSearch.mi?destinationAddress.country='+countryCode,'3');}else{document.location="/hotel/"+site;}},updateHotelStats:function(total){$('#hotels-count').fadeOut('fast',function(){$("#hotels-count").text(total+" "+$("#hotel-stats-text").val());$('#hotels-count').fadeIn('fast',function(){});});},resetHotelStats:function(){guidedSearch.updateHotelStats($("#hotel-stats-total").val());},displayRegions:function(){$('#map').attr("src",guidedSearch.imageMapaMundi.src);guidedSearch.resetHotelStats();$('#country-wrapper').fadeOut('slow',function(){guidedSearch.currentSegment=0;guidedSearch.segmentCount=0;guidedSearch.setEnabledPreviousButton(false);guidedSearch.setEnabledNextButton(true);$("#countries-carousel div.country-list").remove();$('#region-wrapper').fadeIn('fast',function(){});});},displayCountries:function(index,regionName,hotelCount){$("#region-name").text(regionName);guidedSearch.updateHotelStats(hotelCount);guidedSearch.currentCountry=index;guidedSearch.currentCountryListName="#country-list-"+guidedSearch.currentCountry;if($(guidedSearch.currentCountryListName+" .full-segment").length==0){return;}else if($(guidedSearch.currentCountryListName+" a").length==1){try{var countryCode=$(guidedSearch.currentCountryListName+" a").attr("href").split('#')[1];if(countryCode.length==2){guidedSearch.goTo(countryCode);return;}}catch(e){}}
guidedSearch.segmentCount=$(guidedSearch.currentCountryListName+" .full-segment").length;$('#map').attr("src",guidedSearch.maps[index].src);$('#region-wrapper').fadeOut('fast',function(){$("#country-list-"+index).clone(true).appendTo("#countries-carousel");$('#country-wrapper').fadeIn('fast',function(){if($("#full-segment-0").outerHeight(true)>0){guidedSearch.segmentHeight=$("#full-segment-0").outerHeight(true);}
guidedSearch.setEnabledPreviousButton(false);guidedSearch.setEnabledNextButton(guidedSearch.segmentCount>1);$('#countries-carousel div.full-segment a').click(function(){var countryCode=this.href.split('#')[1];guidedSearch.goTo(countryCode);return false;});});});},layoutLists:function(){var layoutLeft=true;var tempHeight=0;var tempText="";var totalLeftHeight=0;var totalRightHeight=0;var totalFullSegments=0;var maxHeight=120;var supportsDynamicLayout=true;var maxNonDynamicSpans=6;var totalNonDynamicSpans=0;var minimumTempHeight=16;var listCount=$("div.raw-country-list").length;var spanCount=0;for(currentList=0;currentList<listCount;currentList++){spanCount=$("#raw-country-list-"+currentList+" span").length;var i=0;while(i<spanCount){totalLeftHeight=0;totalRightHeight=0;totalNonDynamicSpans=0;if($("#full-segment-"+totalFullSegments).length==0){$("<div id=\"full-segment-"+totalFullSegments+"\" class=\"full-segment\"></div>").appendTo("#country-list-"+currentList);$("<div id=\"left-half-segment-"+totalFullSegments+"\" class=\"left half-segment-country\"></div>").appendTo("#full-segment-"+totalFullSegments);$("<div class=\"left half-segment-vertical-spacer\"></div>").appendTo("#full-segment-"+totalFullSegments);$("<div id=\"right-half-segment-"+totalFullSegments+"\" class=\"right half-segment-country\"></div>").appendTo("#full-segment-"+totalFullSegments);}
for(;i<spanCount;i++){tempHeight=$("#list"+currentList+"span"+i).outerHeight(true);tempText=$("#list"+currentList+"span"+i).text();if(tempHeight<minimumTempHeight){supportsDynamicLayout=false;}
if((!supportsDynamicLayout&&totalNonDynamicSpans>=maxNonDynamicSpans)||(totalLeftHeight+tempHeight)>=maxHeight){break;}else{totalNonDynamicSpans++;totalLeftHeight+=tempHeight;$("#list"+currentList+"span"+i).appendTo("#left-half-segment-"+totalFullSegments);}}
totalNonDynamicSpans=0;for(;i<spanCount;i++){tempHeight=$("#list"+currentList+"span"+i).outerHeight(true);tempText=$("#list"+currentList+"span"+i).text();if(tempHeight<minimumTempHeight){supportsDynamicLayout=false;}
if((!supportsDynamicLayout&&totalNonDynamicSpans>=maxNonDynamicSpans)||(totalRightHeight+tempHeight)>=maxHeight){break;}else{totalNonDynamicSpans++;totalRightHeight+=tempHeight;$("#list"+currentList+"span"+i).appendTo("#right-half-segment-"+totalFullSegments);}}
totalFullSegments++;}}
$("div.raw-country-list").remove();}};$(".reservations #hotel-title-area #photo-gallery a.hotel-photo-detail, #compare-hotels a.photo-gallery-link, #property-results a.photo-gallery-link, #merch-property-results a.photo-gallery-link").click(function(e){e.preventDefault();var url=$(this).attr('rel');openGlLightbox(url);});$("a#email-to-friend").click(function(e){e.preventDefault();var url=$(this).attr('href');openGlLightbox(url);});$("#sms-privacy-link").click(function(e){e.preventDefault();var url=$(this).attr('href');window.open(url,'_blank');});$("#sms-termsofuse-link").click(function(e){e.preventDefault();var url=$(this).attr('href');window.open(url,'_blank');});var searchModalApp=(function(){openGlLightbox=function(url,w,h){var pageURL=url.replace(/ /g,'%20');if(w>0&&h>0){sizeW=w;sizeH=h;}
else{sizeW=400;sizeH=400;}
liClass='default-lightbox reservations-modal-app';if(pageURL.match(/hotels/)){url=url+'&isLightbox=true';sizeW=800;sizeH=640;liClass='default-lightbox reservations-photo-gallery-modal';}
$iframe.attr('src',url);$(".ui-icon-closethick").remove();$(".reservations-modal-app .ui-dialog-titlebar").append("<img alt='Marriott Hotels' id='logo' src='/Images/TNG/marriott_logo_gray.png'>");$('#res-modal-box').miLightboxes({content:$iframe,sizeWidth:sizeW,sizeHeight:sizeH,headerFormat:1,lightBoxClass:liClass,resizable:true});$("a.close-window").bind('click',function(){$(".reservations-modal-app, .reservations-photo-gallery-modal",parent.document.body).dialog('destroy');$(".reservations-modal-app, .reservations-photo-gallery-modal",parent.document.body).remove();});$iframe.load(function(){$iframeContents=$iframe.contents();$iframeContents.find('body').addClass('hws-gallery-lightbox-content respath-gallery-lightbox-content');var resPathLink=$iframeContents.find('.check-rate').data('url');$iframeContents.find('.check-rate').attr('href',"javascript:OpenInOpener('"+resPathLink+"');");$internalLinks=$iframeContents.find('a');$internalLinks.filter('.view-all').addClass('in-lightbox').bind('click.res-modal-app',loadInParent);$internalLinks.filter('a[href*="OpenInOpener"]').bind('click.res-modal-app',loadInParentHrefFromJS);$internalLinks.not('a[href*="OpenInOpener"], .view-all').bind('click.res-modal-app',loadInIframe);});},loadInIframe=function(e){e.preventDefault();var target=e.target;$iframe.attr('src',(target.href||target.parentNode.href)+'&isLightbox=true');return false;},loadInParent=function(e){e.preventDefault();var url=e.target.href;window.location.href=url;return false;},loadInParentHrefFromJS=function(e){e.preventDefault();e.stopImmediatePropagation();var target=e.target;var el=$(target);if(target.nodeName=='SPAN')var el=$(target).parent();var url=el.attr('href').match(/OpenInOpener\(\'([^\'\);]*)/);if(url&&url.length>0){window.location.href=url[1];}
return false;},init=function(){return $iframe=$('<iframe />').attr({id:'res-modal-app',width:'100%',height:'100%',frameBorder:'0'});};return init();}());$().ready(function(){euCookieCheck()});var wfp=window.webFontsPreloaded||false;if(false===wfp){var path=window.location.pathname;if(path.indexOf('/ritz')===0||path.indexOf('/mvci')===0||path.indexOf('/bulgari')===0){webfontloads=false;}
if(typeof webfontloads!='undefined'&&webfontloads===true){var familySet='Source+Sans+Pro:300,400,600:latin'+(location.hostname.match(/\.fr|\.de/)?',latin-ext':'');WebFontConfig={google:{families:[familySet]},context:window.parent};(function(){var wf=document.createElement('script');wf.src=('https:'==document.location.protocol?'https':'http')+'://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js';wf.type='text/javascript';wf.async='true';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(wf,s);})();}}
$(function(){$('.is-drawer-control').each(function(i){var hiddenText=$('.hidden-label[data-state]',this);if(hiddenText.length>0){$(this).click(function(e){if(hiddenText.data('state')=='closed'){hiddenText.html(hiddenText.data('c'));hiddenText.data('state','open');}else{hiddenText.html(hiddenText.data('o'));hiddenText.data('state','closed');}
e.preventDefault();});}});var footerDrawer=$('.js-footer-drawer');if(footerDrawer.length){footerDrawer.drawer({breakpoints:['SM-and-below'],drawerHeaderClass:'t-icon-drawer',drawerContentClass:'t-drawer'});}
var siteSectionDrawer=$('body:not(.lt-ie9) .js-site-section-drawer');if(siteSectionDrawer.length){siteSectionDrawer.drawer({breakpoints:['SM-and-below'],beforeActivate:function(){var data=$(this).data('siteSection'),overviewLink=$($('[data-drawer-heading]',$(this)).html());overviewLink.html(data.overviewText);$('[data-drawer-content]',$(this)).prepend('<li class="t-site-section-overview t-border-top-lghtGry">'+overviewLink[0].outerHTML+'</li>');},beforeDeactivate:function(){$('[data-drawer-content]',$(this)).find('.t-site-section-overview').remove();},afterActivate:function(){$('[data-drawer-heading]',$(this)).on('click.siteSectionDrawerClick',function(e){e.preventDefault();});},afterDeactivate:function(){$('[data-drawer-heading]',$(this)).off('.siteSectionDrawerClick');}});}
var headerContainer=$('#header-container'),headerMenuButton=$('.m-menu'),headerButtonContainer=$('#t-subheader'),brandCrumbs=$('.t-header-breadcrumb');if(brandCrumbs.length){function resetBrandcrumbsMaxWidth(){var maxWidth=headerContainer.width()
-headerMenuButton.outerWidth()
-headerButtonContainer.width()
-parseInt(brandCrumbs.css('margin-left'),10)
-2;brandCrumbs.css('max-width',maxWidth);}
var counter=0,MAX_COUNTER=20,INTERVAL=500,recalcMaxWidthInterval=setInterval(function(){if(headerButtonContainer.offset().top>0){resetBrandcrumbsMaxWidth();if(counter>=MAX_COUNTER){clearInterval(recalcMaxWidthInterval);}
counter++;}},INTERVAL);$(window).resize(function(){brandCrumbs.css('max-width','');if(headerButtonContainer.offset().top>0){resetBrandcrumbsMaxWidth();}});}
if(headerButtonContainer.length){$('.js-close-panel').click(function(e){$(this).parents('.l-panel').find('.js-find-hidden-text').html(($(this).parents('.l-panel').find('.js-find-hidden-text').html()=='Expanded')?'Collapsed':'Expanded');$(this).closest('.action-panel').addClass('is-hidden');$('.is-selected').removeClass('is-selected');e.preventDefault();});headerButtonContainer.find('.l-panel:last > .action-panel').addClass('l-margin-right-none');var findPanel=headerButtonContainer.find('.action-panel.show-on-load');if(!!findPanel.length){findPanel.css('visibility','hidden').removeClass('is-hidden');if(findPanel.position().left>=findPanel.parent('.l-panel').position().left){findPanel.addClass('is-position-auto');}
findPanel.css('visibility','');}
var $pageContainer=$('#page-container,#page');function overridePageOverflowForHeaderPanels($panelTrigger){if($panelTrigger.hasClass('is-selected')){if($pageContainer.height()<1095){$pageContainer.css('overflow','visible');}}else{$pageContainer.css('overflow','');}}
var $panelShownOnLoad=headerButtonContainer.find('.l-panel > .action-panel.show-on-load');if($panelShownOnLoad.length){overridePageOverflowForHeaderPanels($panelShownOnLoad.prev('a'));}
$('.l-panel>a',headerButtonContainer).click(function(event){if(!$subheader.hasClass('t-white-label-site')){$pageNavigation.siteMenu('close');}
var $this=$(this),panel=$this.next('.action-panel');if($this.hasClass('is-selected')){$this.removeClass('is-selected');panel.addClass('is-hidden');$this.parent().hide().show().css('display','');}else{var allPanels=headerButtonContainer.find('.l-panel');allPanels.children('a').removeClass('is-selected');allPanels.children('.action-panel').addClass('is-hidden');$this.addClass('is-selected');if(panel.length){panel.css('visibility','hidden');panel.removeClass('is-hidden');if(panel.position().left>=panel.parent('.l-panel').position().left){panel.addClass('is-position-auto');}}
panel.css('visibility','');if(panel.attr('id')=="find-panel"){var findPanelLoc1=panel.find('#hotel-city-airport'),findPanelLoc2=panel.find('.single-search');if(findPanelLoc1.val()!=''||findPanelLoc2.val()!=''){showFullSearchForm();}}}
overridePageOverflowForHeaderPanels($this);event.preventDefault();});if($('#find-a-hotel-control').length===0&&!!$('.flash-wrapper').length){var anchor=document.createElement('a');anchor.setAttribute('id','find-a-hotel-control');anchor.setAttribute('style','display:none');anchor.onclick=function(){$('#header-find-panel-trigger').trigger('click');return false;};$('body').append(anchor);}
$globalSites=$('html[lang|=de], html[lang|=es], html[lang|=fr], html[lang|=pt]');$meetingsAndEventsButton=$('body.lt-ie9 .m-subheader > .t-meetings-and-events-link',$globalSites);if($meetingsAndEventsButton.length&&typeof Response!=='undefined'){var XXL=1152;function displayMeetingsAndEventsButton(){if(Response.band(0,XXL-1)){$meetingsAndEventsButton.removeClass('is-visible');}else if(Response.band(XXL)){$meetingsAndEventsButton.addClass('is-visible');}}
displayMeetingsAndEventsButton();Response.resize(displayMeetingsAndEventsButton);}}
var $bookingComSearchForm=$('.l-bookingcom');if($bookingComSearchForm.length){var $findPanelTrigger=$('#header-find-panel-trigger');if($findPanelTrigger.hasClass('is-selected')){$('#find-a-hotel-container.l-bookingcom').addClass('is-visible');}
$findPanelTrigger.click(function(){$('#find-a-hotel-container.l-bookingcom').toggleClass('is-visible');});$bookingComSearchForm.find('#search-component-header > button').click(function(){$findPanelTrigger.removeClass('is-selected');});}
var toggleSubmenu=function(e){var $target=$(e.target);if($target.is('span.navitem-wrapper')||$target.is('span.icon')||$target.hasClass('submenu-drawer-trigger')||($target.is('a')&&$target.parents().eq(1).hasClass('t-map-icon'))){if($('span.icon',this).hasClass('icon-drawer-close')){e.preventDefault();$('span.icon',this).toggleClass('icon-drawer-close');$('span.icon',this).toggleClass('icon-drawer-open');$('>ul',this).attr('aria-hidden','true').slideToggle({complete:function(){$pageNavigation.siteMenu('adjustMenuHeight');}});return false;}
else{e.preventDefault();$('span.icon-drawer-close','#primary-nav').addClass('icon-drawer-open').removeClass('icon-drawer-close').parent().next('ul').slideToggle();$('span.icon',this).toggleClass('icon-drawer-close');$('span.icon',this).toggleClass('icon-drawer-open');$('>ul',this).attr('aria-hidden','false').slideToggle({complete:function(){$pageNavigation.siteMenu('adjustMenuHeight');}});var $analyticsTarget=$target;if(!$analyticsTarget.is('a.analytics-click')){$analyticsTarget=$target.parent().find('a.analytics-click:first');if($analyticsTarget.length){$analyticsTarget.trigger('click.sendAnalytics');}}
return false;}}
if($target.hasClass('t-menu-label')){$target=$target.parents('a:first');}
if($target.is('a')&&$target.attr('href')!="/marriott-international-accommodations.mi"){window.location.href=$target[0].href;}
e.preventDefault();};var $submenu=$('#primary-nav>li.is-submenu');$submenu.click(toggleSubmenu);var findPanel=$('#find-panel');if(findPanel.length){if($('#find-meeting-form').length){SearchComponent.initializeMeetingsForm();}}
var upcomingReservations=$("#reservations-results");if(upcomingReservations.length){$('.t-reservation-info').on('click',function(event){event.stopImmediatePropagation();$(event.delegateTarget).find('p.t-hotel-name > a').trigger('click.sendAnalytics');window.location.href=$(event.delegateTarget).find('p.t-hotel-name > a').attr('href');return false;});}
var newHeader=$('header');if(!newHeader.length){$('.toggle').find('.icon-drawer-open,.icon-drawer-close').hide();}
var newHeaderMyAccount=$('.m-header-myaccount');if(newHeaderMyAccount.length){if(!newHeaderMyAccount.placeholder){newHeaderMyAccount.find("input[placeholder]").inputPlaceholder();}
$(newHeaderMyAccount).on({mouseenter:function(){var $elem=$(this);$elem.addClass('is-focused');$elem.data('hasFocus',true);$elem.data('hasMouseOver',true);var hover='',$button=$elem.find('button.m-button-darkGray');if(!$button.length){hover='-hover';$button=$elem.find('button.m-button-darkGray-hover');}
$button.removeClass('m-button-darkGray'+hover).addClass('m-button-default'+hover);},mouseleave:function(){var $elem=$(this);if(!$elem.find(':input').is(':focus')){$elem.removeClass('is-focused');$elem.data('hasFocus',false);$elem.find('button.m-button-default').removeClass('m-button-default').addClass('m-button-darkGray');}
$elem.data('hasMouseOver',false);},focusin:function(){var $elem=$(this);if(!$elem.data('hasFocus')){$elem.addClass('is-focused');$elem.data('hasFocus',true);$elem.find('button.m-button-darkGray').removeClass('m-button-darkGray').addClass('m-button-default');}},focusout:function(){var $elem=$(this);if(!$elem.data('hasMouseOver')){setTimeout(function(){if(!$elem.find(':input,a').is(':focus')){$elem.removeClass('is-focused');$elem.data('hasFocus',false);$elem.find('button.m-button-default').removeClass('m-button-default').addClass('m-button-darkGray');}},1);}}});}
var newHeaderTour=$('#js-new-header-tour');if(newHeaderTour.length){headerTour.init($('.js-tour-content',newHeaderTour));}
$('.m-brand-bar .phone-number').click(function(e){e.preventDefault();$(this).next('.phone-numbers').toggleClass('is-hidden');});});$(function(){var $findPanel=$('#find-panel');if($findPanel.length){var findPanelInput=$(this).find('#hotel-city-airport, #editsingle-location');var stateCountryInput=$(this).find('select.search-country, select.search-state');var rewardPoints=$(this).find('#global-header-useRewardsPoints');if(rewardPoints.is(':checked')){rewardPoints.trigger('click');rewardPoints.prop("checked","checked");}
findPanelInput.on("propertychange keyup input paste",function(){hideAdditionalSearchOptions();});stateCountryInput.change(function(){hideAdditionalSearchOptions();});var corporateCode=$('#global-header-corporateCode',$findPanel).val()||'';function hideAdditionalSearchOptions(){var singleSearchFields=$('#single-search-destination',$findPanel),globalFields=$('#global-header-find-a-hotel',$findPanel);if(corporateCode.length){showFullSearchForm();var specialRatesToggleHeader=$('.js-special-rates-header',$findPanel),specialRatesToggleContainer=specialRatesToggleHeader.next('.toggle-container');$("input[name=clusterCode][value=other]",specialRatesToggleContainer).attr('checked','checked');}
else if(singleSearchFields.length){if($('input.single-search-destination:first',singleSearchFields).is(":visible")){var singleSearchVal1=$findPanel.find('input.single-search-destination').val();if(typeof singleSearchVal1!=='undefined'&&singleSearchVal1.length===0){$findPanel.find('.l-split-6of9').removeClass('l-split-6of9').addClass('removed-l-split-6of9');$findPanel.find('.t-search-links').removeClass('is-shown');$findPanel.find('#is-hidden-search-options').hide();}else{showFullSearchForm();}}else{var singleSearchVal2=$('#single-search-location').find('input.single-search-location').val();if(typeof singleSearchVal2!=='undefined'&&singleSearchVal2.length===0){$findPanel.find('.l-split-6of9').removeClass('l-split-6of9').addClass('removed-l-split-6of9');$findPanel.find('.t-search-links').removeClass('is-shown');$findPanel.find('#is-hidden-search-options').hide();}else{showFullSearchForm();}}}
else if(globalFields.length){var singleSearchVal3=$findPanel.find('#hotel-city-airport').val().length,globalState=$('[name="destinationAddress.stateProvince"]').val().length,globalCountry=$('[name="destinationAddress.country"]').val().length;if(singleSearchVal3===0&&globalState===0&&globalCountry===0){$findPanel.find('.l-split-6of9').removeClass('l-split-6of9').addClass('removed-l-split-6of9');$findPanel.find('#is-hidden-search-options').hide();$findPanel.find('.t-search-links').removeClass('is-shown');}else{showFullSearchForm();}}}
hideAdditionalSearchOptions();$findPanel.find('ul#search-saved a').on('click',function(){hideAdditionalSearchOptions();});}
searchToggles.init();SearchComponent.defaultDate($(".js-defaultdate"));});var modalConfig={closeText:(typeof msgResources==='undefined')?'Close':(typeof msgResources.closeText==='undefined')?'Close':msgResources.closeText,loadingText:(typeof msgResources==='undefined')?'Loading...':(typeof msgResources.loadingText==='undefined')?'Loading...':msgResources.loadingText,printText:(typeof msgResources==='undefined')?'Print':(typeof msgResources.printText==='undefined')?'Print':msgResources.printText,mainClassStyles:'m-modal t-modal-med'};MI.Util.Modal=MI.Util.Modal||{};MI.Util.Modal.options={mainClass:modalConfig.mainClassStyles,type:'ajax',ajax:{settings:{dataType:'html'}},closeMarkup:'<div class="m-modal-utilities">'
+'<button id="win-util-print" class="m-modal-print"><i class="icon icon-print"></i> '+modalConfig.printText+'</button>'
+'<button class="m-modal-close mfp-close is-hover-fix"> %title%<i class="icon mfp-close icon-close"></i></button>'
+'</div>',tClose:modalConfig.closeText,tLoading:modalConfig.loadingText,callbacks:{beforeOpen:function(){this.container.attr('aria-live','assertive');$('#page-container').attr('aria-hidden','true');},parseAjax:function(mfpResponse){var frag=$(mfpResponse.data).find('#layout-body-container, .js-popover,.l-body');mfpResponse.data=frag;},ajaxContentAdded:function(){var $mfpContainer=this.container;var printActive=$('.js-popover',$mfpContainer).data('print');if(printActive){var closeBtn=$('.mfp-close.m-modal-close',$mfpContainer);var printBtn=$('.m-modal-print',$mfpContainer);var closeIcon=$('.icon-close',closeBtn);closeIcon.prependTo(closeBtn);printBtn.show();printBtn.click(function(e){e.preventDefault();window.print();});$('#page-container').addClass('is-modal-print');}},close:function(){$('#page-container').removeClass('is-modal-print').removeAttr('aria-hidden');this.container.undelegate();}}}
MI.Util.Popup=MI.Util.Popup||{};MI.Util.Popup.options={height:400,width:760,pageURL:function(e){var url=$(e).attr('href').replace(/ /g,'%20')+" #page-container";url=$(e).attr('href').replace(/ /g,'%20');return url;},winprops:function(){var winProperties="location=no,scrollbars=yes,menubar=no,toolbar=no,locationbar=no,resizable=yes,alwaysRaised=yes,"
+"height="+this.height
+",width="+this.width
+",left=100,top=100";return winProperties;},displayPopup:function(opener){var $this=this;$(opener).on('click',function(e){e.preventDefault();window.open($this.pageURL(this),'',$this.winprops());});}}
MI.Util.DialogBox=MI.Util.Dialog||{};MI.Util.DialogBox=function(dialogOpener){if(windowURL.match('ritz')||windowURL.match('mvci')||windowURL.match('bulgari')){MI.Util.Popup.options.displayPopup(dialogOpener);}else{$(dialogOpener).magnificPopup(MI.Util.Modal.options);}}
var globalConsentInfoByContry={config:{$countryId:$("#country"),$globalConsentContainer:$("#submission-agreement"),$editCountryCode:$("#editCountryCode"),$siteId:$("#siteId")},init:function(settings){$.extend(globalConsentInfoByContry.config,settings);var me=this,countryId=me.config.$countryId,gcContainer=me.config.$globalConsentContainer,editCountryCode=me.config.$editCountryCode,siteId=me.config.$siteId;var isEdit=editCountryCode.length!==0,isCountry=countryId.length!==0,noCountryId=siteId.length!==0,isCountryCombo=countryId.is("select"),countryVal;if(isCountry){countryVal=isCountryCombo?$("#country option:selected").val():countryId.val();if(isCountryCombo){countryId.on("change",function(){me.callGC(me.config.$globalConsentContainer,this.value);});if(countryVal===""){isCountry=false};}};if(!isCountry&&isEdit){countryVal=editCountryCode.val()};if(!isCountry&&!isEdit&&noCountryId){countryVal=siteId.val()!==""?siteId.val():"US"};if(countryVal!==""&&countryVal!==null&&countryVal!==undefined&&gcContainer.length>0){me.callGC(gcContainer,countryVal);}},callGC:function(c,country){CountrySelectedService.getCountryDetails(country,{callback:function(result){var splitResult=result.split(",");var promoOptionVal=splitResult[0]=="true"?true:false,thirdPartyOptinVal=splitResult[1]=="true"?true:false,dataClauseVal=splitResult[2]=="true"?true:false;globalConsentInfoByContry.updateConsent(c,[promoOptionVal,thirdPartyOptinVal,dataClauseVal],"call was success ...")},errorHandler:function(message){globalConsentInfoByContry.updateConsent(c,[false,false,true],"call is failure ...")}})},updateConsent:function(container,result,msg){var promoOptin=container.find("#field-email-promotional-opt-in"),thirdPartyOptin=container.find("#field-email-third-party-opt-in");promoOptin.prop("checked",result[0]);thirdPartyOptin.prop("checked",result[1]);globalConsentInfoByContry.config.$linkOne.toggle(!result[2]);globalConsentInfoByContry.config.$linkTwo.toggle(result[2]);}}
var SearchForm={};SearchForm.hasFeature=function($formObj,featureName){return $formObj.hasClass('has-'+featureName);}
$(function(){var headerSearchForm=new Aries.Components.SearchForm({el:$('#global-header-find-a-hotel #find-a-hotel-form'),features:{dates:null}});var headerSavedSearchForm=new Aries.Components.SearchForm({el:$('#global-header-saved-hotel-search-form'),features:{dates:null}});});var findMeetingSpaceComponent={showOrHideElementByCheckbox:function(form,checkBoxName,elementName){var selector=$(checkBoxName,form).val();if(selector!=undefined&&selector.length>0)
{selector=$(checkBoxName+":checked",form);if(selector.val()=="on")
{$(elementName,selector.closest("form")).show('slow',function(){SearchComponent.handleCollapseExpand($(form))});}else{if(!$(elementName).is(':visible')||!$(form).is(':visible')){$(elementName).css('display','none');}
$(elementName+' :input:text',form).each(function(){$(this).val('');});$(elementName,form).hide('fast',function(){SearchComponent.handleCollapseExpand($(form))});}}},meetingsPrefCheckButtonEventHandler:function(event){var form=$(this).closest("form");findMeetingSpaceComponent.showOrHideElementByCheckbox(form,':checkbox[name=roomsOnlySelected]','p.sleeping-rooms');findMeetingSpaceComponent.showOrHideElementByCheckbox(form,':checkbox[name=roomsAndEventSelected]','div.meetings-space');},meetingsPrefRadioButtonEventHandler:function(event){var meetingsForm=$(this).closest("form");var meetingSearchOption=$(this).val();switch(meetingSearchOption){case'roomsOnly':$(meetingsForm).find('p.sleeping-rooms :input:text, div.meetings-space :input:text').each(function(){if($(this).val()==""||$(this).val()==0){$(this).val('');}});$(meetingsForm).find('div.meetings-space').hide('fast',function(){SearchComponent.handleCollapseExpand($(meetingsForm))});$(meetingsForm).find('p.sleeping-rooms').show('slow',function(){SearchComponent.handleCollapseExpand($(meetingsForm))});$('#flash-card-container').css('zIndex',1);break;case'roomsAndSpace':$(meetingsForm).find('p.sleeping-rooms :input:text, div.meetings-space :input:text').each(function(){if($(this).val()==""||$(this).val()==0){$(this).val('');}});$(meetingsForm).find('div.meetings-space, p.sleeping-rooms').show('slow',function(){SearchComponent.handleCollapseExpand($(meetingsForm))});$('#flash-card-container').css('zIndex',3);break;case'spaceOnly':$(meetingsForm).find('p.sleeping-rooms :input:text, div.meetings-space :input:text').each(function(){if($(this).val()==""||$(this).val()==0){$(this).val('');}});$(meetingsForm).find('p.sleeping-rooms').hide('fast',function(){SearchComponent.handleCollapseExpand($(meetingsForm))});$(meetingsForm).find('div.meetings-space').show('slow',function(){SearchComponent.handleCollapseExpand($(meetingsForm))});$('#flash-card-container').css('zIndex',3);break;default:$(meetingsForm).find('p.sleeping-rooms :input:text, div.meetings-space :input:text').each(function(){if($(this).val()==""||$(this).val()==0){$(this).val('');}});$(meetingsForm).find('div.meetings-space, p.sleeping-rooms').hide('fast',function(){SearchComponent.handleCollapseExpand($(meetingsForm))});$('#flash-card-container').css('zIndex',1);}},meetingsEventTypeChangeEventHandler:function(event){var $meetingsForm=$(this).closest("form"),$meetingsFormSGO=$meetingsForm.find('input[name="sgoSupported"]').val(),$eventType=$meetingsForm.find('select[name="eventType"]').prop('selectedIndex');if($meetingsFormSGO!=='true'){$eventType=$meetingsForm.find('select[name="searchCriteriaVO.searchType"]').prop('value');if($eventType!=='Meeting'){$meetingsForm.find('fieldset a').hide();}
else{$meetingsForm.find('fieldset a').show();}}},meetingsSubmitEventHandler:function(event){var $meetingsForm=$(this).closest("form"),$largestMeetingSpace=$meetingsForm.find('input.largestMeetingSpace'),$eventType=$meetingsForm.find('select[name="eventType"],select.meetings-eventType"').val(),$maxRooms=$meetingsForm.find('input[name="roomCount"][value!=""],input[id$="guestRoomCount"][value!=""]'),$isHWSQuickGroupForm=$meetingsForm.find('input[name="isHwsQGForm"]'),$isSGO=$meetingsForm.find('input[name="sgoSupported"]'),$sgoGovernmentTypeMsg=$("#sgoGovernmentTypeMsg").val(),invalidMaxRoomMessage=$('#numberRoomInvalidCharError',$meetingsForm).val(),invalidLargestMeetingSpaceMessage=$('#numberSpaceInvalidCharError',$meetingsForm).val();if($eventType!==null&&$eventType==='Government')
{alert($sgoGovernmentTypeMsg);}
if($isHWSQuickGroupForm.length>0)
{var noCheckBoxSearch=$meetingsForm.find(':hidden[name="noCheckBoxSearch"]').val()=='true';if(noCheckBoxSearch){if(!formUtilities.isBlank($maxRooms)&&!formUtilities.isBlank($largestMeetingSpace)){$('input:hidden[name="roomsOnlySelected"]').val(true);$('input:hidden[name="roomsAndEventSelected"]').val(true);}
else if(!formUtilities.isBlank($maxRooms)&&formUtilities.isBlank($largestMeetingSpace)){$('input:hidden[name="roomsOnlySelected"]').val(true);$('input:hidden[name="roomsAndEventSelected"]').val(false);}
else if(formUtilities.isBlank($maxRooms)&&!formUtilities.isBlank($largestMeetingSpace)){$('input:hidden[name="roomsAndEventSelected"]').val(true);$('input:hidden[name="roomsOnlySelected"]').val(false);}}
return true;}
if(!findMeetingSpaceComponent.validateCityCountryAndState($meetingsForm)){return false;}
var meetingSearchOption=$(':radio[name="eventOptionsRadio"]:checked',$meetingsForm).val()!=undefined;if(($isSGO.length>0&&$isSGO.val()!="false")||!meetingSearchOption){return findMeetingSpaceComponent.validateSGOFields($meetingsForm);}else{var isMaxRoomBlank=formUtilities.isBlank($maxRooms);var isLMSBlank=formUtilities.isBlank($largestMeetingSpace);var isRoomChecked=$('input[name=roomsOnlySelected]:checked',$meetingsForm).val()!=undefined;var isSpaceChecked=$('input[name=roomsAndEventSelected]:checked',$meetingsForm).val()!=undefined;var isRoomAndSpaceError=!((isRoomChecked&&!isSpaceChecked)||(!isRoomChecked&&isSpaceChecked)||(isRoomChecked&&isSpaceChecked));var fromDate=$('input.search-fromDate',$meetingsForm).val()!=undefined;var toDate=$('input.search-toDate',$meetingsForm).val()!=undefined;if(fromDate&&toDate&&!findMeetingSpaceComponent.validateEandMDates($meetingsForm)){return false;}
if((meetingSearchOption&&isMaxRoomBlank&&isLMSBlank)||isRoomAndSpaceError)
{alert($('#noEventOptionsMsg').val());return false;}
if((meetingSearchOption&&!isMaxRoomBlank)||isRoomChecked){if(!formUtilities.isNumberValid($maxRooms)){alert(invalidMaxRoomMessage);return false;}
$maxRooms.val(formUtilities.formatNumber($maxRooms));}
if((meetingSearchOption&&!isLMSBlank)||isSpaceChecked){if(!formUtilities.isNumberValid($largestMeetingSpace)){alert(invalidLargestMeetingSpaceMessage);return false;}
$largestMeetingSpace.val(formUtilities.formatNumber($largestMeetingSpace));}}
return true;},validateCityCountryAndState:function(form){var siteId=$('#search-form-component input[name="siteId"]').val();if(siteId==undefined){siteId=$('input[name="siteId"]').val();}
var cityInputField=$(form).find('input[type="text"].search-city').val();var destinationInputField=$(form).find('input[type="text"].single-search-destination').val();var countryIndex=$(form).find('select.search-country').prop('selectedIndex');var stateIndex=$(form).find('select.search-state').prop('selectedIndex');if($(form).find('input[name="singleSearch"]').val()!='true')
{if(countryIndex==0&&stateIndex==0)
{alert($("#stateCountryError").val());return false;}
if($(form).find('select.search-country option:selected').val()==='US'&&stateIndex===0)
{alert($("#eventsStateCountryError").val());return false;}}
else{var destinationField=$(form).find('input[type="text"].single-search-destination');var addressField=$(form).find('input[type="text"].meetings-near-address-search');if($(destinationField).is(':visible')){if(destinationInputField.trim()===""){alert($("#eventsDestinationError").val());return false;}}
else if($(addressField).is(':visible')){if(addressField.val().trim()===""){alert($("#eventsAddressError").val());return false;}}
else{if(cityInputField===""&&countryIndex===0&&stateIndex===0){if($('#search-form-component input[name="cityStateError"]').val()!=undefined){alert($('#search-form-component input[name="cityStateError"]').val());}else{alert($("#stateCountryError").val());}
return false;}
else if(countryIndex===0&&stateIndex===0){alert($("#stateCountryError").val());return false;}
else if(countryIndex==='US'&&stateIndex===0){alert($("#eventsStateCountryError").val());return false;}}}
return true;},getSelectedNameByOptionVal:function(form,optElemVal){var checkedEventOptionVal=$(optElemVal,form).val();if(checkedEventOptionVal==undefined||checkedEventOptionVal.length==0)
{var roomOnlySelected=$('input[name=roomsOnlySelected]:checked',form).val();var roomsAndEventSelected=$('input[name=roomsAndEventSelected]:checked',form).val();if(roomOnlySelected=='on'&&roomsAndEventSelected==undefined)
{checkedEventOptionVal='roomsOnly';}
else if(roomOnlySelected==undefined&&roomsAndEventSelected=='on')
{checkedEventOptionVal='spaceOnly';}
else if(roomOnlySelected=='on'&&roomsAndEventSelected=='on')
{checkedEventOptionVal='roomsAndSpace';}}
return checkedEventOptionVal;},validateSGOFields:function(form){var siteId=$('#m-find-panel-meetings input[name="siteId"]').val();if(siteId==undefined){siteId=$('input[name="siteId"]').val();}
var $meetingsForm=$(form),$sgoGovernmentTypeMsg=$("#sgoGovernmentTypeMsg"),$noEventOptionsMsg=$("#noEventOptionsMsg"),$roomsOnlyErrorMsg=$("#roomsOnlyError"),$roomsAndSpaceErrorMsg=$("#roomsAndSpaceError"),$spaceOnlyErrorMsg=$("#spaceOnlyError"),$invalidRoomsAndSpaceErrorMsg=$("#invalidRoomsAndSpaceError"),$maxRooms=$('input.guestRoomCount',$meetingsForm),$largestMeetingSpace=$('input.largestMeetingSpace',$meetingsForm),$eventType=$('select.meetings-eventType',$meetingsForm).prop('selectedIndex'),invalidMaxRoomMessage=$('#numberRoomInvalidCharError').val(),invalidLargestMeetingSpaceMessage=$('#numberSpaceInvalidCharError').val();if($(form).hasClass('store-front-search-form')){invalidMaxRoomMessage=$('#numberRoomInvalidCharErrorStoreFront').val();invalidLargestMeetingSpaceMessage=$('#numberSpaceInvalidCharErrorStoreFront').val();}
var checkedEventOptionVal=findMeetingSpaceComponent.getSelectedNameByOptionVal($meetingsForm,'input[name="eventOptionsRadio"]:checked');if(checkedEventOptionVal==='roomsOnly'&&!formUtilities.isBlank($largestMeetingSpace)){$largestMeetingSpace.val('');}
else if(checkedEventOptionVal==='spaceOnly'&&!formUtilities.isBlank($maxRooms)){$maxRooms.val('');}
var fromDate=$('input.search-fromDate',$meetingsForm).val()!=undefined;var toDate=$('input.search-toDate',$meetingsForm).val()!=undefined;if(fromDate&&toDate&&!findMeetingSpaceComponent.validateEandMDates($meetingsForm)){return false;}
var noCheckBoxSearch=$meetingsForm.find(':hidden[name="noCheckBoxSearch"]').val()=='true';if(noCheckBoxSearch){var $roomCount=$maxRooms.clone();var $eventSpaceVal=$largestMeetingSpace.clone();if($.trim($maxRooms.val())=="0"){$roomCount.val('');}
if($.trim($largestMeetingSpace.val())=="0"){$eventSpaceVal.val('');}
if(formUtilities.isBlank($roomCount)&&formUtilities.isBlank($eventSpaceVal)&&($roomsAndSpaceErrorMsg.val()!=undefined)){alert($noEventOptionsMsg.val());return false;}
else{var isMaxRoomInvalid=!formUtilities.isBlank($roomCount)&&!formUtilities.isNumberValid($roomCount)||(formUtilities.isNumberValid($roomCount)&&$roomCount.val().indexOf(".")!=-1);var isMeetingSpaceInvalid=!formUtilities.isBlank($eventSpaceVal)&&!formUtilities.isNumberValid($eventSpaceVal)||(formUtilities.isNumberValid($eventSpaceVal)&&$eventSpaceVal.val().indexOf(".")!=-1);if(isMaxRoomInvalid&&isMeetingSpaceInvalid&&$invalidRoomsAndSpaceErrorMsg.val()!=undefined)
{alert($invalidRoomsAndSpaceErrorMsg.val());return false;}
if((!formUtilities.isBlank($roomCount)&&!formUtilities.isNumberValid($roomCount)||(formUtilities.isNumberValid($roomCount)&&$roomCount.val().indexOf(".")!=-1))&&invalidMaxRoomMessage!=undefined)
{alert(invalidMaxRoomMessage);return false;}
if((!formUtilities.isBlank($eventSpaceVal)&&!formUtilities.isNumberValid($eventSpaceVal)||(formUtilities.isNumberValid($eventSpaceVal)&&$eventSpaceVal.val().indexOf(".")!=-1))&&invalidLargestMeetingSpaceMessage!=undefined)
{alert(invalidLargestMeetingSpaceMessage);return false;}}
if(!formUtilities.isBlank($roomCount)&&!formUtilities.isBlank($eventSpaceVal)){$('input:hidden[name="roomsOnlySelected"]').val(true);$('input:hidden[name="roomsAndEventSelected"]').val(true);}
else if(!formUtilities.isBlank($roomCount)&&formUtilities.isBlank($eventSpaceVal)){$('input:hidden[name="roomsOnlySelected"]').val(true);$('input:hidden[name="roomsAndEventSelected"]').val(false);}
else if(formUtilities.isBlank($roomCount)&&!formUtilities.isBlank($eventSpaceVal)){$('input:hidden[name="roomsAndEventSelected"]').val(true);$('input:hidden[name="roomsOnlySelected"]').val(false);}}
else{if(checkedEventOptionVal==undefined&&$noEventOptionsMsg){alert($noEventOptionsMsg.val());return false;}
else{if(checkedEventOptionVal==='roomsOnly'){if(formUtilities.isBlank($maxRooms)&&($roomsOnlyErrorMsg)){alert($roomsOnlyErrorMsg.val());return false;}
if((!formUtilities.isNumberValid($maxRooms)||(formUtilities.isNumberValid($maxRooms)&&$maxRooms.val().indexOf(".")!=-1))&&invalidMaxRoomMessage!=undefined)
{alert(invalidMaxRoomMessage);return false;}}
else if(checkedEventOptionVal==='roomsAndSpace'){if((formUtilities.isBlank($maxRooms)&&formUtilities.isBlank($largestMeetingSpace))&&($roomsAndSpaceErrorMsg.val()!=undefined)){alert($roomsAndSpaceErrorMsg.val());return false;}
else if(formUtilities.isBlank($maxRooms)&&$roomsAndSpaceErrorMsg.val()!=undefined)
{alert($roomsOnlyErrorMsg.val());return false;}
else if(formUtilities.isBlank($largestMeetingSpace)&&$roomsAndSpaceErrorMsg.val()!=undefined)
{alert($spaceOnlyErrorMsg.val());return false;}
var isMaxRoomInvalid=!formUtilities.isNumberValid($maxRooms)||(formUtilities.isNumberValid($maxRooms)&&$maxRooms.val().indexOf(".")!=-1);var isMeetingSpaceInvalid=!formUtilities.isNumberValid($largestMeetingSpace)||(formUtilities.isNumberValid($largestMeetingSpace)&&$largestMeetingSpace.val().indexOf(".")!=-1);if(isMaxRoomInvalid&&isMeetingSpaceInvalid&&$invalidRoomsAndSpaceErrorMsg.val()!=undefined)
{alert($invalidRoomsAndSpaceErrorMsg.val());return false;}
else if(isMaxRoomInvalid&&invalidMaxRoomMessage!=undefined)
{alert(invalidMaxRoomMessage);return false;}
else if(isMeetingSpaceInvalid&&invalidLargestMeetingSpaceMessage!=undefined)
{alert(invalidLargestMeetingSpaceMessage);return false;}}
else if(checkedEventOptionVal==='spaceOnly'){if(formUtilities.isBlank($largestMeetingSpace)&&($spaceOnlyErrorMsg.val()!=undefined))
{alert($spaceOnlyErrorMsg.val());return false;}
if((!formUtilities.isNumberValid($largestMeetingSpace)||(formUtilities.isNumberValid($largestMeetingSpace)&&$largestMeetingSpace.val().indexOf(".")!=-1))&&invalidLargestMeetingSpaceMessage!=undefined)
{alert(invalidLargestMeetingSpaceMessage);return false;}}
if(!formUtilities.isBlank($maxRooms)){if(checkedEventOptionVal==='roomsOnly'){if($maxRooms>=4&&$maxRooms<=9){alert("For reservations of 4-9 rooms, you may reserve online. Make multiple reservations of up to 3 rooms each.");return false;}
if($maxRooms>=1&&$maxRooms<=3){alert("For reservations of 1-3 rooms, you may reserve online from the Marriott.com home page.");return false;}}
if(!formUtilities.isNumberValid($maxRooms)){alert(invalidMaxRoomMessage);return false;}}
if(checkedEventOptionVal=='spaceOnly'&&!formUtilities.isNumberValid($largestMeetingSpace))
{alert(invalidLargestMeetingSpaceMessage)
return false;}}}
if($eventType!=null&&$eventType=='Government')
{alert($sgoGovernmentTypeMsg.val());return true;}
return true;},validateEandMDates:function(form){var fromDate=$(form).find('input.search-fromDate').val();var toDate=$(form).find('input.search-toDate').val();var minDate=$(form).find('input:hidden[name="minDate"]').val();var maxDate=$(form).find('input:hidden[name="maxDate"]').val();var dateFormatPattern=$('input:hidden[name="dateFormatPattern"]').val().toLowerCase();var checkedEventOptionVal=findMeetingSpaceComponent.getSelectedNameByOptionVal($(form),'input[name="eventOptionsRadio"]:checked');var siteDateFormat=$('input#single-search-date-format').val();siteDateFormat="("+siteDateFormat+")";var eventSpaceVal=$(form).find('p.meetings-space :input:text, div.meetings-space :input:text').val();var guestRoomVal=$(form).find('p.sleeping-rooms :input:text,div.sleeping-rooms :input:text').val();if(fromDate!==null&&fromDate!==""&&fromDate!==siteDateFormat){if(!isDateValid(fromDate,dateFormatPattern)){alert($('#invalidArrivalDate').val());return false;}
if(isDateEqualsCurrentDate(fromDate,dateFormatPattern)){alert($("#currentDateError").val());return false;}
if(isDateLessThanDate1(fromDate,formatDate(minDate,dateFormatPattern),dateFormatPattern)){alert($('#startDateInPastError').val());return false;}
if(isDateGreaterThanDate1(fromDate,formatDate(maxDate,dateFormatPattern),dateFormatPattern)){alert($('#futureArrivalDateError').val()+maxDate);return false;}
if(toDate===null||toDate===""){alert($('#departureAfterArrival').val());return false;}}
if(toDate!==null&&toDate!==""&&fromDate!==siteDateFormat){if(!isDateValid(toDate,dateFormatPattern)){alert($('#invalidDepartureDate').val());return false;}
if(isDateLessThanDate1(toDate,datePlusOne(minDate,dateFormatPattern),dateFormatPattern)){alert($('#endDateInPastError').val());return false;}
if(isDateGreaterThanDate1(toDate,formatDate(maxDate,dateFormatPattern),dateFormatPattern)){alert($('#futureDepartureDateError').val());return false;}
if(fromDate===null||fromDate==="")
{alert($('#noStartDateError').val());return false;}}
if((fromDate!=null&&fromDate!='')&&(toDate!=null&&toDate!='')&&fromDate!==siteDateFormat)
{if((isDateEqualsDate1(fromDate,toDate,dateFormatPattern)&&(eventSpaceVal=='')))
{alert($("#sameDateError").val());return false;}
if((isDateEqualsDate1(fromDate,toDate,dateFormatPattern)&&!(eventSpaceVal=='')&&!(guestRoomVal=='0')&&!(guestRoomVal=='')))
{alert($("#sameDateError").val());return false;}
else if(isDateGreaterThanDate1(fromDate,toDate,dateFormatPattern))
{alert($('#departureAfterArrival').val());return false;}
var daysDiff=formUtilities.calculateNoOfNights(getDate(fromDate,dateFormatPattern),getDate(toDate,dateFormatPattern));}
return true;},calculateMeetingSpaceSize:function(sizeElement){var form=$(sizeElement).closest("form");var calclabel=$('input:hidden[name="sqfootcalclabel"]').val();var calcSpace=$(form).find('span.visual-calculation');if(formUtilities.isNumberValid(sizeElement.val())&&sizeElement.val().indexOf('.')==-1){var sqFeetSize=(sizeElement.val()*10).toString();$(calcSpace).html(calclabel+' '+sqFeetSize);}else{$(calcSpace).html('');}}}
var formUtilities={formatNumber:function(aNum){if(aNum.jquery){aNum=aNum.val();}
aNum=aNum.replace(/,/g,"");if($.isNumeric(aNum)){aNum=parseInt(aNum,10);}
return aNum;},calculateNoOfNights:function(checkInDate,checkOutDate)
{if(checkInDate.jquery){checkInDate=checkInDate.val();}
if(checkOutDate.jquery){checkOutDate=checkOutDate.val();}
var daysDifference=0;if(checkInDate!=null&&checkOutDate!=null)
{var difference=checkOutDate.getTime()-checkInDate.getTime();daysDifference=Math.round(difference/1000/60/60/24);}
return daysDifference;},isBlank:function(str){if(str.jquery){str=str.val();}
var string=$.trim(str);var value=false;if(string===null||string.length===0){value=true;}
return value;},isNumberValid:function(str){if(str.jquery){str=str.val();}
if($.isNumeric(str)&&parseInt(str,10)>0){return true;}
return false;}}
function createCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}else var expires="";document.cookie=name+"="+value+expires+"; path=/";}
function readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}return null;}
function eraseCookie(name){createCookie(name,"",-1);}
function readCookieValues(cookieName,key){if(cookieName!=null){var ca=cookieName.split('|');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(key)>=0){return(c.substring(c.indexOf('#')+1,c.lastIndexOf('#')));}}return null;}}
$(document).ready(function(){var popunderClose="";var popunderPrevented="";var HDPopupOpen="";var rememberMe="";var success;var mboxCookie=readCookie('mbox');var mbox_Session="";var mbox_PC="";var mboxCustomData;if(typeof hdVars!=="undefined"){var isHDQualified=function(){HDPopupOpen=readCookie('HDPopupOpen');if(mboxCookie!=""){mbox_Session=readCookieValues(mboxCookie,'session');mbox_PC=readCookieValues(mboxCookie,'PC');}
mboxCustomData=mbox_Session+'|'+mbox_PC;var userAgentStrings=hdVars.cList["browser.useragent"];if(userAgentStrings!=='undefined'&&userAgentStrings!=''){var userAgents=userAgentStrings.split(",");for(var i=0;i<userAgents.length;i++){if(userAgents!=='undefined'&&userAgents[i]!=''&&navigator.userAgent.indexOf(userAgents[i])>-1){return false;}else if(userAgents!=='undefined'&&userAgents[i]!=''&&userAgents[i].indexOf("*")>-1){var subUserAgent=userAgents[i].split("*");var matchCount=0;var navUserAgent=navigator.userAgent;for(var j=0;j<subUserAgent.length;j++){var navSubIndex=navUserAgent.indexOf(subUserAgent[j]);if(subUserAgent!=='undefined'&&subUserAgent[j]!=''&&navSubIndex>-1){navUserAgent=navUserAgent.substr(navSubIndex);matchCount++;}else{break;}}
if(matchCount==subUserAgent.length){return false;}}}}
if(hdVars.hd_city==''&&hdVars.hd_stateProvince==''&&hdVars.hd_country==''&&hdVars.hd_errorMessage!='true')return
var dmNames=['US','GB','DE','FR','AU','CN','JP','ES','BR','KR'];if(hdVars.cList["enable.hd.solution"]=='true'){for(var i=0;i<dmNames.length;i++){if(hdVars.cList["enable.domains."+dmNames[i]]=='false'){if(hdVars.hd_domain==dmNames[i]||(dmNames[i]=='ES'&&location.host.indexOf('espanol')>-1)){trackingVals("ineligible Domain: "+hdVars.hd_domain);return false;}}}
var rewardLevel="";switch(hdVars.hd_rewardLevel.toUpperCase()){case'R':rewardLevel="basic";break;case'S':rewardLevel="silver";break;case'G':rewardLevel="gold";break;case'P':rewardLevel="platinum";break;default:"";}
if(hdVars.cList["enable.rewards.members"]=='false'){if(rewardLevel!=""){if(hdVars.cList["enable.rewards."+rewardLevel]!='true')
{trackingVals("Rewards Member remembered or signed in");return false;}}}
if(hdVars.cList["enable.associate.users"]=='false'){if(hdVars.hd_isAssociate=="y"){return false;}}
if(hdVars.cList["enable.remember.me"]=='false'){rememberMe=readCookie('RememberMe');if(rememberMe!=null&&rememberMe=='true'&&hdVars.cList["enable.rewards."+rewardLevel]!='true'){trackingVals("Remembered User");return false;}}
if(readCookie('Affiliate')!=null||(readCookie('marketingCampaignTrackingData')!=null&&readCookie('marketingCampaignTrackingData')!="")){trackingVals("Affiliate & Marketing Campaign");return false;}
if(readCookie('RoomKeyBlock')!=null&&readCookie('RoomKeyBlock')!=readCookie('JSESSIONID')){trackingVals("Vignette flag "+hdVars.cList["user.prevent.roomkey.pop"]+" days");return false;}
if(hdVars.cList["enable.successfully.booked"]=='false'){if(location.href.indexOf("/reservation/confirmation.mi")>-1||location.href.indexOf("/reservation/confirmDetails.mi")>-1){trackingVals("Booking");return false;}}
if(hdVars.cList["enable.redemption.points"]=='false'){if(hdVars.hd_rewardsRedemption=='true'&&hdVars.cList["enable.rewards."+rewardLevel]!='true'){trackingVals("Redemption Search");return false;}}
if(hdVars.cList["enable.session.timeout"]=='false'){if(location.href.indexOf('/sessionTimedOut.mi')>-1||location.href.indexOf('/expiredSession.mi')>-1){trackingVals("Session timeout");return false;}}
if(hdVars.hd_clusterCode==null){var clusterCode='';}
else{var clusterCode=hdVars.hd_clusterCode.toUpperCase();}
if(hdVars.cList["enable.special.rates.aaa"]=='false'&&clusterCode=='AAA'){trackingVals("Special Rates AAA search");return false;}
if(hdVars.cList["enable.special.rates.senior"]=='false'&&clusterCode=='S9R'){trackingVals("Special Rates senior citizen search");return false;}
if(hdVars.cList["enable.special.rates.gov"]=='false'&&(clusterCode=='GOV'||clusterCode=='B41')){trackingVals("Special Rates govt search");return false;}
if(hdVars.cList["enable.users.sgo"]=='false'){if(hdVars.hd_sgoSearch=='true'){trackingVals("SGO Search");return false;}}
var corpCodeValue=hdVars.hd_corporateCode.toUpperCase();if(hdVars.cList["enable.users.corpcode"]=='false'){if(corpCodeValue!=''&&hdVars.cList["enable.special.rates.corpcode"].toUpperCase().indexOf(corpCodeValue)==-1){trackingVals("corp code not in White list");return false;}}
if(corpCodeValue!=''&&hdVars.cList["exclude.special.rates.corpcode"].toUpperCase().indexOf(corpCodeValue)!=-1)return false;if(hdVars.cList["enable.users.groupcode"]=='false'){if($('#group-code').length>0&&$('#group-code').val()!=''){trackingVals("group code search");return false;}}
if(hdVars.hd_incentivesType_Number!=''){trackingVals("award incentive search");return false;}
if(hdVars.cList["enable.hotel_rewards filter"]=='false'){if(hdVars.hd_vsDimGrp=='reward.category.dimension.text'){trackingVals("Hotel Rewards Filtering");return false;}}
if(hdVars.cList["enable.to.brand"]=='false'){if((hdVars.hd_brandCodes!='false'&&hdVars.hd_brandCodes!=''&&hdVars.hd_brandCodes!='[all]')||hdVars.hd_vsDimGrp=='brands.dimension.text'){trackingVals("Brand specific search");return false;}}
if(hdVars.cList["enable.presented.hd.solution"]=='false'){if(readCookie('HDShown')=='true'&&HDPopupOpen!='true'){trackingVals("the Roomkey popup being shown previously to the user");return false;}}
if(parseInt(hdVars.cList["number.of.pages"])>0){if(readCookie('HDpagecount')==null){createCookie('HDpagecount',encodeURI(location.href));}else{var pArr=readCookie('HDpagecount').split(',');if(pArr[pArr.length-1]!=encodeURI(location.href)){pArr.push(encodeURI(location.href));createCookie('HDpagecount',pArr.join());}
if(pArr.length-1>=parseInt(hdVars.cList["number.of.pages"])){trackingVals("Maximuum number of pages reached");return false;}}}
return true;}else{return false;}};var CopterConnect={_connectorVersion:"1.45",_baseUrl:"//www.roomkey.com/referrals",_apiVersion:"1.5.1",_datePattern:/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,_pu:null,schema:{type:"object",properties:{location:{type:"string",maxLength:"64"},state:{type:"string",minLength:"2",maxLength:"2",description:"State must be a 2-character code."},country:{type:"string",maxLength:"2",description:"Country must be a 2-character code (ISO 3166-1 alpha-2)"},lat:{type:"number",minimum:"-90",maximum:"90",dependencies:"lng"},lng:{type:"number",minimum:"-180",maximum:"180",dependencies:"lat"},property_id:{type:"string",maxLength:"64"},property_url:{type:"string",description:"A url back to the desired property booking page on the hotel brand's website. This should include dates and other search criteria as required.",dependencies:["property_id"]},displayed_lowest_nightly_rate:{type:"integer",minimum:"0",dependencies:["property_id","displayed_lowest_nightly_rate_room_type","currency"]},displayed_lowest_nightly_rate_room_type:{type:"string","enum":["suite","king","queen","standard","single/twin","double","other"],dependencies:["property_id","displayed_lowest_nightly_rate"]},check_in:{type:"string",format:"date",description:"Check-in must be in format yyyy-mm-dd",dependencies:["check_out","rooms","guests"]},check_out:{type:"string",format:"date",description:"Check-out must be in format yyyy-mm-dd",dependencies:["check_in","rooms","guests"]},rooms:{type:"integer",minimum:"1",maximum:"4"},guests:{type:"integer",minimum:"1",maximum:"16"},price_from:{type:"integer",minimum:"0",dependencies:["price_to","currency"]},price_to:{type:"integer",minimum:"0",dependencies:["price_from","currency"]},star_from:{type:"integer",minimum:"1",maximum:"5",dependencies:"star_from"},star_to:{type:"integer",minimum:"1",maximum:"5",dependencies:"star_to"},brand:{type:"array",items:{type:"string"},description:"An array of brand IDs indicating the brands in which the user is interested. For single brands a string can be provided instead of an array. A pipe-delimited string is also acceptable instead of an array."},amenities:{type:"array",items:{type:"string","enum":["INT","PETS","PKG","FIT","POOL","BUSIN","REST"]},description:"An array of amenity IDs. For single amenities a string can be provided instead of an array. A pipe-delimited string is also acceptable instead of an array."},currency:{type:"string",minLength:"3",maxLength:"3",description:"Currency must be a 3-character code (ISO 4217). If invalid or not supplied, currency is determined by the default currency of the Room Key TLD (see tld)."},language:{type:"string",minLength:"2",maxLength:"2",description:"Language must be a 2-character code (ISO 639-1)."},source_page:{type:"string",maxLength:"256"},visitor_type:{type:"string",maxLength:"128"},custom_data:{type:"string",maxLength:"128"},logo_url:{type:"string",description:"A URL to the hotel brand's logo."},domain:{type:"string",description:"The root domain of the page that is opening the pop-under. Used for setting cookie. Acceptable values 'hotelbrand.com', 'hotelbrand.co.uk'. Bad values: 'www.hotelbrand.com', 'www.hotelbrand.co.uk'. If omitted, assumes that domain is top-level and second-level elements. Therefore by default .com domains will set the cookie correctly but .co.uk domains will not and must be specified using this option."},window_name:{type:"string",description:"A name given to the pop-under window. The name should only contain alphanumeric characters. If omitted, this name is allocated automatically. This should only be used where windows are being opened and closed across different domains."},tld:{type:"string",description:"The desired top level domain of the Room Key pop-under. Must match one of those enumerated. Defaults to 'com' if not supplied. [Deprecated as of version 1.0.20. Use 'locale' instead].","enum":["com","uk","au","nz","ca"]},locale:{type:"string",description:"A locale string. This will determine the country-version of the Room Key site and the currency displayed in the interstitial experience. If the 'currency' option is set, this will override the currency associated with the locale. Examples: en-US, en-GB, en_US, en_GB. Unrecognised locale strings will default to 'en-US'.",maxLength:"10"},window_url:{type:"string",format:"url",description:"By default, the URL loaded into the pop-under window is that of the Room Key interstitial. However it may be desirable to open a different URL in the window which then subsequently redirects to the Room Key interstitial URL. This URL could be used to more reliably record metrics. If a window_url value is provided, it will have a querystring parameter of redirect_url appended to it."},allow_tab_under:{type:"string",description:"If set to 'true', browsers that do not support a pop-under but do support a tab-under e.g. Chrome v30+, will open a tab-under. Note that unlike pop-unders, tab-unders cannot be closed using CopterConnect.unload."}}},load:function(a,b){b||(b={});var c,d=!1,e=this._getCookieImpressionId()||this._uuid(),f=b.domain,g=b.allow_tab_under&&"true"===b.allow_tab_under,h=(b.window_name&&b.window_name.length>0?b.window_name:e).replace(/[\W_]/g,""),i=this._buildUrl(a,b,e);return this._apiKey=a,this._isSupportedBrowser()&&(this._setCookie(e,a,h,f),c=this._pu=this._open(i,h,g),c&&(d=!0)),d},_buildUrl:function(a,b,c){var d="redirect_url",e=this._baseUrl,f=b.window_url,g=this._buildQueryString(a,b,c),h=e+"?"+g;return f&&(0===h.indexOf("//")&&(h=location.protocol+h),f+=f.indexOf("?")>=0?"&":"?",f+=d+"="+encodeURIComponent(h),h=f),h},_buildQueryString:function(a,b,c){var d,e="api_version="+this._apiVersion;if(this._validateApiKey(a),e+="&api_key="+encodeURI(a),e+="&impression_id="+encodeURI(c),e+="&referrer_hostname="+encodeURI(window.location.hostname),b){delete b.domain,delete b.window_name,delete b.window_url,delete b.allow_tab_under,b=this._removeEmptyOptions(b),this._options=b;for(d in b){if(!this.schema.properties[d])throw new this._connectorException(d+" is not a permitted option");this._validateOption(d,b[d],this.schema.properties[d]),this.schema.properties[d]&&"array"===this.schema.properties[d].type&&this._isArray(b[d])&&(b[d]=b[d].join("|")),e+="&"+d+"="+encodeURI(b[d].toString())}this._validateRanges()}return e},_removeEmptyOptions:function(a){var b;for(b in a)a[b]&&0!==a[b].length||delete a[b];return a},_windowOptions:function(){var a=this._dimensions();return"width="+a.width+",height="+a.height+",toolbar=1,menubar=1,resizable=1,scrollbars=1"},_open:function(a,b,c,d){var e=this._windowOptions(),f=!d&&this._useSafariTechnique()?this._openSafariSpecial(a,b,e):this._openStandard(a,b,e,c,d);return f},_openSafariSpecial:function(a,b,c){var d,e,f;return this._partnerSupportsChromeFix()?(this._windowOpen("javascript:void window.focus()","_self",""),d=this._windowOpen(a,b,c)):(d=this._windowOpen(a,b,c),e=this._documentCreateElement("iframe"),f='javascript:void window.open("javascript:void window.focus()", "_self", "");',e.src=f,document.body.appendChild(e),e&&e.parentNode&&e.parentNode.removeChild(e),d)},_openStandard:function(a,b,c,d,e){var f=this._isTabUnderBrowser(),g=d&&this._canDoTabUnder();return g?this._openTabUnder(a):f?void 0:this._openPopUnder(a,b,c,e)},_openTabUnder:function(a){return this._openTab(a),this._cookie("CopterConnectTab","true"),!0},_openPopUnder:function(a,b,c,d){var e=this,f=this._browserSimpleDetect(),g=this._parent(),h=g.window.open(a,b,c);if(h)try{this._switchFocus(h),!d&&f.firefox&&this._openCloseWindow(),!d&&f.webkit&&this._openTab(),f.msie&&setTimeout(function(){e._switchFocus(h)},1e3)}catch(i){}return h},_switchFocus:function(a){this._isIE11()?document.focus():(a.blur(),a.opener.window.focus(),window.self.window.focus(),window.focus())},_openCloseWindow:function(){var a=this._windowOpen("about:blank");a.focus(),a.close()},_openTab:function(a){var b,c="",d=a||"data:text/html,<scr"+c+"ipt>window.close();</scr"+c+"ipt>",e=!a,f=this._documentCreateElement("a");f.href=d,this._documentGetElementsByTagName("body")[0].appendChild(f),e=a?!e:e,b=this._documentCreateEvent("MouseEvents"),b.initMouseEvent.apply(b,this._tabUnderMouseEventArgs({type:"click",canBubble:!0,cancelable:!0,view:window,detail:0,screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:e,altKey:!1,shiftKey:!e,metaKey:e,button:0,relatedTarget:null})),f.dispatchEvent(b),f.parentNode.removeChild(f)},_tabUnderOverrideArgs:function(a){return a},_tabUnderMouseEventArgs:function(a){return a=this._tabUnderOverrideArgs(a),[a.type,a.canBubble,a.cancelable,a.view,a.detail,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,a.relatedTarget]},_windowOpen:function(){return window.open.apply(window,arguments)},_documentCreateElement:function(){return document.createElement.apply(document,arguments)},_documentCreateEvent:function(){return document.createEvent.apply(document,arguments)},_documentGetElementsByTagName:function(){return document.getElementsByTagName.apply(document,arguments)},_parent:function(){return top!==self&&"string"==typeof top.document.location.toString()?top:self},_canDoTabUnder:function(){return this._cookiesEnabled()&&!this._cookie("CopterConnectTab")&&this._isTabUnderBrowser()},unload:function(a){var b,c,d=!1,e=this._getCookieImpressionId(),f=this._getCookieApiKey();if(a&&a.closeReason&&a.closeReason.length>15)throw new this._connectorException("The closeReason option must be 15 characters or fewer");return b=a&&"string"==typeof a?a:a&&a.windowName?a.windowName:this._getCookieWindowName(),b&&(c=this._pu||this._open("about:blank",b,!1,!0),c&&c.close&&(c&&c.close(),this._pu=null,this._removeCookie(),this._trackClose(e,f,a),d=!0)),d},_trackClose:function(a,b,c){var d;a&&(d=this._baseUrl.concat("/close/",a,"?api_key=",b,"&api_version=",this._apiVersion),c&&"object"==typeof c&&(d+="&count_impression="+!!c.countImpression,c.closeReason&&(d+="&close_reason="+encodeURIComponent(c.closeReason))),this._createTrackingPixel(d))},_createTrackingPixel:function(a){var b=new Image;b.src=a},_validateApiKey:function(a){if(!a)throw new this._connectorException("Missing API key");if(0===a.length)throw new this._connectorException("API key is an empty string")},_validateOption:function(a,b,c){this._validateDependencies(a,c),this._validateTypes(a,b,c),this._validateEnums(a,b,c),this._validatePatternAndFormat(a,b,c)},_validateDependencies:function(a,b){var c;if(b.dependencies)for("string"==typeof b.dependencies&&(b.dependencies=[b.dependencies]),c=0;c<b.dependencies.length;c++)if(!this._options[b.dependencies[c]])throw new this._connectorException(a+" depends on missing option "+b.dependencies[c])},_validateTypes:function(a,b,c){switch(c.type){case"string":this._validateString(a,b,c);break;case"number":this._validateNumber(a,b,c);break;case"integer":this._validateInteger(a,b,c);break;case"array":this._validateArray(a,b,c)}},_validateString:function(a,b,c){if(b.length<c.minLength)throw new this._connectorException(c.description||a+" must not contain fewer than "+c.minLength+" characters");if(b.length>c.maxLength)throw new this._connectorException(c.description||a+" must not exceed "+c.maxLength+" characters")},_validateNumber:function(a,b,c){if(isNaN(b))throw new this._connectorException(c.description||a+" must be a numeric value");if(c.minimum&&parseFloat(b)<parseFloat(c.minimum))throw new this._connectorException(c.description||a+" cannot be less than "+c.minimum);if(c.maximum&&parseFloat(b)>parseFloat(c.maximum))throw new this._connectorException(c.description||a+" cannot be greater than "+c.maximum)},_validateInteger:function(a,b,c){if(this._validateNumber(a,b,c),Math.ceil(b)!==Math.floor(b))throw new this._connectorException(c.description||a+" must be an integer")},_validateArray:function(a,b,c){var d;for(this._isArray(b)||(b=b.toString().split("|")),d=0;d<b.length;d++)this._validateOption(a,b[d],c.items)},_validateEnums:function(a,b,c){if(c["enum"]&&!this._inArray(c["enum"],b))throw new this._connectorException(c.description||'"'+b+'" is an invalid '+a+" value. Accepted values: "+c["enum"].join(", "))},_validatePatternAndFormat:function(a,b,c){var d=c.pattern||null;if("date"===c.format&&(d=this._datePattern),d&&!d.test(b))throw new this._connectorException(c.description||a+" failed regexp test")},_validateRanges:function(){var a,b=this._options;if(b.check_in&&b.check_out){var c=new Date(b.check_in.replace(/-/g,"/")),d=new Date(b.check_out.replace(/-/g,"/"));if(c>=d)throw new this._connectorException("Invalid check_out date. Must occur after check_in date.")}var e,f,g=["price","star"];for(a=0;a<g.length;a++)if(e=b[g[a]+"_from"],f=b[g[a]+"_to"],e&&f&&parseFloat(f)<parseFloat(e))throw new this._connectorException(g[a]+"_to cannot be less than "+g[a]+"_from")},_connectorException:function(a){this.message=a,this.name="ConnectorException"},_dimensions:function(){var a=990,b=600,c=this._viewport();return screen.availWidth<a+10&&(a=screen.availWidth-10),screen.availHeight<b&&(a=screen.availHeight),c.width<a&&(a=c.width-50),c.height<b&&(b=c.height-50),{width:a,height:b}},_viewport:function(){var a=window,b="inner";return"innerWidth"in window||(b="client",a=document.documentElement||document.body),{width:a[b+"Width"],height:a[b+"Height"]}},_uuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"==a?b:3&b|8;return c.toString(16)}).toUpperCase()},_cookie:function(a,b,c){var d,e=this;if("undefined"==typeof b){var f=null;if(document.cookie&&""!==document.cookie){var g=document.cookie.split(";");for(d=0;d<g.length;d++){var h=e._trim(g[d]);if(h.substring(0,a.length+1)===a+"="){f=decodeURIComponent(h.substring(a.length+1));break}}}return f}c=c||{},null===b&&(b="",c.expires=-1);var i="";if(c.expires&&("number"==typeof c.expires||c.expires.toUTCString)){var j;"number"==typeof c.expires?(j=new Date,j.setTime(j.getTime()+24*c.expires*60*60*1e3)):j=c.expires,i="; expires="+j.toUTCString()}var k=c.path?"; path="+c.path:"",l=c.domain&&".localhost"!==c.domain?"; domain="+c.domain:"",m=c.secure?"; secure":"";document.cookie=[a,"=",encodeURIComponent(b),i,k,l,m].join("")},_setCookie:function(a,b,c,d){d&&0!==d.length||(d=document.domain.split(".").slice(-2).join(".")),this._cookie("CopterConnect",[a,b,c].join("|"),{domain:"."+d,path:"/"})},_removeCookie:function(){this._cookie("CopterConnect","",{expires:-1})},_getCookie:function(){return this._cookie("CopterConnect")},_getCookieImpressionId:function(){var a=this._getCookie(),b=a?a=a.split("|")[0]:null;return b},_getCookieApiKey:function(){var a=this._getCookie(),b=a?a=a.split("|")[1]:null;return b},_getCookieWindowName:function(){var a=this._getCookie(),b=a?a=a.split("|")[2]:null;return b},_cookiesEnabled:function(){var a;return this._cookie("rk-cookies-enabled","1"),a=!!this._cookie("rk-cookies-enabled"),this._cookie("rk-cookies-enabled",null),a},_trim:function(a){a=a.replace(/^\s\s*/,"");for(var b=/\s/,c=a.length;b.test(a.charAt(--c)););return a.slice(0,c+1)},_inArray:function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},_isArray:function(a){return a.constructor.toString().indexOf("Array")>=0},_browserSimpleDetect:function(){var a=navigator.userAgent.toLowerCase(),b={webkit:/webkit/.test(a),firefox:/firefox/.test(a),msie:/msie/.test(a)&&!/opera/.test(a)};return b},_browserVersion:function(){var a,b=navigator.appName,c=navigator.userAgent,d=c.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return d&&null!=(a=c.match(/version\/([\.\d]+)/i))&&(d[2]=a[1]),d=d?[d[1],d[2]]:[b,navigator.appVersion,"-?"]},_isMobile:function(){var a=/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|Silk/i;return!!navigator.userAgent.match(a)},_isIE7:function(){var a=this._browserVersion();return"msie"===a[0].toLowerCase()&&7===parseInt(a[1].split(".")[0])?!0:!1},_isIE8:function(){var a=this._browserVersion();return"msie"===a[0].toLowerCase()&&8===parseInt(a[1].split(".")[0])?!0:!1},_isIE11:function(){return/Trident\/7\./.test(navigator.userAgent)},_isTabUnderBrowser:function(){var a,b,c=this._browserVersion(),d=!1;return"chrome"===c[0].toLowerCase()&&(a=c[1].split("."),b=parseInt(a[0],10),b>=30&&41>b&&(d=!0)),d},_isBot:function(){return!!navigator.userAgent.match(/GomezAgent/i)},_useSafariTechnique:function(){var a=this._browserVersion();return"safari"===a[0].toLowerCase()&&-1===this._compareVersionNumbers(a[1],"6.1.1")&&this._compareVersionNumbers(a[1],"6")>=0?!0:!1},_isPositiveInteger:function(a){return/^\d+$/.test(a)},_isFullScreen:function(){return window.outerWidth===screen.width&&window.outerHeight===screen.height},_macOSXVersion:function(){var a=navigator.userAgent.toLowerCase(),b=a.match(/mac os x (\d+)_(\d+)+/);return b||(b=a.match(/mac os x (\d+)[.](\d+)+/)),b?parseInt(b[2]):void 0},_compareVersionNumbers:function(a,b){function c(a){for(var b=0;b<a.length;++b)if(!d._isPositiveInteger(a[b]))return!1;return!0}var d=this,e=a.split("."),f=b.split(".");if(!c(e)||!c(f))return 0/0;for(var g=0;g<e.length;++g){if(f.length===g)return 1;if(e[g]!==f[g])return e[g]>f[g]?1:-1}return e.length!==f.length?-1:0},_isSupportedBrowser:function(){var a,b=this._browserVersion(),c=this._macOSXVersion();if(this._isMobile())return!1;if(this._isBot())return!1;if("chrome"===b[0].toLowerCase()){if(a=b[1].split("."),parseInt(a[0])>=24&&!this._partnerSupportsChromeFix())return!1;if(parseInt(a[0])>=41)return!1}return this._isIE7()?!1:this._isIE8()&&this._partnerBlocksIE8()?!1:c&&c>=10&&this._isFullScreen()&&!this._isTabUnderBrowser()?!1:!0},_partnerSupportsChromeFix:function(){return this._partnerRules[this._apiKey]&&this._partnerRules[this._apiKey].supportsChrome},_partnerBlocksIE8:function(){return this._partnerRules[this._apiKey]&&this._partnerRules[this._apiKey].blocksIE8},_partnerRules:{"923d46d047dc66664318927765f773c1":{supportsChrome:!0},bde55309bfcd7ccb36d735188ed6fb9e:{supportsChrome:!0},"2d0cb78cba042d130a8e9977818b1cc6":{supportsChrome:!0,blocksIE8:!0},"43497e1b7c60a50b9791d05425246358":{supportsChrome:!0},e346ac8dbd7fc8d18378f2c5c702491a:{supportsChrome:!0},"26f0dd8e8b398a133988a806575f6420":{supportsChrome:!0},"4d972cea051901cb586e4de5944b3057":{supportsChrome:!0},"726f719414ef29ed5b7959703fa3c418":{supportsChrome:!0},f48ca87d1305ed1f3ce50b8d6e4c531f:{supportsChrome:!0},"33f80fc6cea8dbd17780082ff2acce2b":{supportsChrome:!0},"55495659e32f55b4ec5a444acdde7c03":{supportsChrome:!0},c915f68db71fd913c1ebfebf1433dc0d:{supportsChrome:!0},"762d414af1aafb5ecbb154d2c7febdd8":{supportsChrome:!0},f1aa04b351fc112f36c4fb0d5150db1f:{supportsChrome:!0,blocksIE8:!0},"3444f228f7d1325e1a42dfa29839a82e":{supportsChrome:!0},c6ca4f6f1f35cac8ac3bec151699bc2b:{supportsChrome:!0},"6b6106e61b684ca64dbbae4e6f90e545":{supportsChrome:!0},"66b436cfeff30c6bc078bc65ef136326":{supportsChrome:!0},"790649c7ce41f12ca07b7d25bee43e40":{supportsChrome:!0},a9bc92520c8acea6eadbc930b2ce2874:{supportsChrome:!0},dd0b87c75555ae0ace4b20391279affd:{supportsChrome:!0},d55e087e6631acd89f4c673c04e3b5fe:{supportsChrome:!0,blocksIE8:!0},ae020d407073c7e711f5649ef9844ec4:{supportsChrome:!0},c8fb3636c239e34248d19fc92fbe6d6e:{supportsChrome:!0},"8c31177ca48577cba23904f2001df240":{supportsChrome:!0},"96c1ea5dc8252931b470695b6f0ca3c7":{supportsChrome:!0},a02a2ffa357d4a08299cf0c6eab1aef5:{supportsChrome:!0}}};var showHD=function(){var in_date=new Date(parseInt(hdVars.hd_indate));var out_date=new Date(parseInt(hdVars.hd_outdate));var indate=in_date.getFullYear()+'-'+((in_date.getMonth()+1<10)?'0'+(in_date.getMonth()+1):in_date.getMonth()+1)+'-'+((in_date.getDate()<10)?'0'+in_date.getDate():in_date.getDate());var outdate=out_date.getFullYear()+'-'+((out_date.getMonth()+1<10)?'0'+(out_date.getMonth()+1):out_date.getMonth()+1)+'-'+((out_date.getDate()<10)?'0'+out_date.getDate():out_date.getDate());var root_domain=location.href.match(/:\/\/(www\.)?(.[^/:]+)/)[2];var tld_domain="com";if(root_domain.match("\.([a-z,A-Z]{2,6})$")==null||typeof root_domain.match("\.([a-z,A-Z]{2,6})$")=="undefined")
{if(root_domain.lastIndexOf('.')>-1)
tld_domain=root_domain.substring(root_domain.lastIndexOf(".")+1,root_domain.length);}
else
{if(root_domain.indexOf('.')>-1)
tld_domain=root_domain.match("\.([a-z,A-Z]{2,6})$")[1];}
var selectedCurrency='USD';if(hdVars.hd_country){selectedCurrency=hdVars.hd_currency[hdVars.hd_country];}
else if($('input:hidden[name=hwsCurrency]').length>0){selectedCurrency=$('input:hidden[name=hwsCurrency]').val();}
var roomKeyAPIKey=hdVars.hd_roomKeyAPIKey;CopterConnect._baseUrl=hdVars.hd_roomKeyBaseURL;try{success=CopterConnect.load(roomKeyAPIKey,{location:hdVars.hd_city,state:hdVars.hd_stateProvince,country:hdVars.hd_country,property_id:hdVars.hd_marshaCode,brand:hdVars.hd_brand_Codes,displayed_lowest_nightly_rate:'',displayed_lowest_nightly_rate_room_type:'',check_in:((indate.length!=10)?'':indate),check_out:((outdate.length!=10)?'':outdate),rooms:hdVars.hd_numRooms,guests:hdVars.hd_numGuestsPerRoom,currency:selectedCurrency,tld:tld_domain,language:'EN',source_page:root_domain,visitor_type:'new',domain:root_domain,custom_data:mboxCustomData,window_url:'http://'+window.location.hostname+'/roomKeyRedirect.mi',allow_tab_under:'true'});var cookieExpiryDays=hdVars.cList["user.prevent.roomkey.pop"];if(parseInt(cookieExpiryDays)>0&&readCookie('RoomKeyBlock')==null)
createCookie('RoomKeyBlock',readCookie('JSESSIONID'),parseInt(cookieExpiryDays));createCookie('HDShown','true');createCookie('HDPopupOpen','true');}catch(err){success=false;}};var swapDates=function(array){var ar=array;var temp=ar[0];ar[0]=array[1];ar[1]=temp;return ar;};var trackingVals=function(closeTrigger){if(HDPopupOpen!=null&&HDPopupOpen=='true'){popunderClose="Closed due to "+closeTrigger;}else{popunderPrevented="Pop-under prevented due to "+closeTrigger;}};var trackingpopup=function(variables,events,message){if(typeof swa!=="undefined"){if(variables.indexOf("eVar57")>-1){swa.eVar57=popunderClose;}
if(variables.indexOf("eVar58")>-1){swa.eVar58="Eligible";}
if(variables.indexOf("eVar60")>-1){swa.eVar60=popunderPrevented;}
swa.linkTrackVars=variables;swa.linkTrackEvents=events;if(swa.events!=""){swa.events+=","+events;}else{swa.events=events;}
swa.m_i=function(param){return"";};void(swa.tl(true,"o",message));}};var setSCData=function(scEvents,scVarsValues){var HDSCEvents="";var HDSCVars="";if(scEvents!=""){HDSCEvents+="HDEvents"+scEvents+"*";}
if(scVarsValues!=""){HDSCVars+="HDVarsValues"+scVarsValues+"*";}
if(typeof swa!=="undefined"){var trackingHDData="";if(scVarsValues!=""){trackingHDData+=scVarsValues;}
if(scEvents!=""){if(trackingHDData!=""){trackingHDData+="^";}
trackingHDData+="events="+scEvents;}
var analyticCookie=readCookie("mAnalytics");var analyticCookieExists=(analyticCookie!=null&&analyticCookie!=undefined&&analyticCookie!="");if(!analyticCookieExists){analyticCookie="";}
if(analyticCookie!=""){if(trackingHDData!=""){trackingHDData+="^";}
trackingHDData+=analyticCookie;}
document.cookie="mAnalytics="+trackingHDData+";path=/";}};var synchVals=function(searchForm){var fromDate=$(searchForm).find('input[name="fromDate"]:visible').val();var dA=(fromDate)?fromDate.split('/'):$(searchForm).find('input[name="fromDate"]').val().split('/');if(hdVars.hd_domain!='US')dA=swapDates(dA);var d=new Date(parseInt(dA[2])+((parseInt(dA[2])<1000)?2000:0),parseInt(dA[0],10)-1,parseInt(dA[1],10));hdVars.hd_indate=d.getTime();var toDate=$(searchForm).find('input[name="toDate"]:visible').val();dA=(toDate)?toDate.split('/'):$(searchForm).find('input[name="toDate"]').val().split('/');if(hdVars.hd_domain!='US')dA=swapDates(dA);d=new Date(parseInt(dA[2])+((parseInt(dA[2])<1000)?2000:0),parseInt(dA[0],10)-1,parseInt(dA[1],10));hdVars.hd_outdate=d.getTime();if($('form input[name="destinationAddress.city"]:visible').length>0){hdVars.hd_city=$('form input[name="destinationAddress.city"]:visible').val();}
if(hdVars.hd_city==''&&$('form input[name="destinationAddress.destination"]:visible').length>0){hdVars.hd_city=$('form input[name="destinationAddress.destination"]:visible').val();}
if($('form select[name="destinationAddress.stateProvince"]:visible option:selected').length>0){hdVars.hd_stateProvince=$('form select[name="destinationAddress.stateProvince"]:visible option:selected').val();}
if($('form select[name="destinationAddress.country"]:visible option:selected').length>0){hdVars.hd_country=$('form select[name="destinationAddress.country"]:visible option:selected').val();}
if($('input[name="singleSearch"]').val()=='true')
{var searchType=$(searchForm).find('input[name="searchType"]').val();hdVars.hd_stateProvince='';hdVars.hd_country='';if(searchType=='NearAddress'){hdVars.hd_city=$(searchForm).find('input.search-locality').val();hdVars.hd_stateProvince=$(searchForm).find('input.search-adminDistrict').val();hdVars.hd_country=$(searchForm).find('input.search-countryRegion').val();}else{hdVars.hd_city=$(searchForm).find('input.search-city').val();hdVars.hd_stateProvince=$(searchForm).find('input.search-state').val();hdVars.hd_country=$(searchForm).find('input.search-country').val();}
if(hdVars.hd_country=="United States")
{hdVars.hd_country='US';}
if(hdVars.hd_country!="US")
{hdVars.hd_stateProvince='';}
if(hdVars.hd_city=='')
{if(hdVars.hd_stateProvince!='')
{hdVars.hd_city=hdVars.hd_stateProvince+", "+hdVars.hd_country;}else{hdVars.hd_city=hdVars.hd_country;}}}
hdVars.hd_numRooms=$('form select[name="roomCount"]:last, form select[name="numberOfRooms"]:visible').val();hdVars.hd_numGuestsPerRoom=$('form select[name="guestCount"]:last, form select[name="numberOfGuests"]:visible').val();var marriottRewardsNumber=$('form input[name="marriottRewardsNumber"]:visible');if((marriottRewardsNumber.val()!=undefined&&marriottRewardsNumber.val().length>0)||$('form input[name="useRewardsPoints"]').is(':checked')){hdVars.hd_rewardsRedemption='true';}
var checkboxBrand=$('[name="marriottBrands"]');var checkboxBrandSize=checkboxBrand.length;var brandString="All";if(!$('#flash-card-form-brand-all').prop("checked")){var numberOfSelected=0;brandString="";for(var counter=0;counter<checkboxBrandSize;counter++){if(checkboxBrand[counter].checked){numberOfSelected++;if(numberOfSelected>1){brandString+="|";}
brandString+=checkboxBrand[counter].value;}}}
if(typeof hdVars.hd_country!=="undefined")
{if(hdVars.hd_country=='US')
{if(hdVars.hd_city!=""&&hdVars.hd_stateProvince!=""&&hdVars.hd_country!="")
{hdVars.hd_marshaCode="";}}
else
{if(hdVars.hd_city!=""&&hdVars.hd_country!="")
{hdVars.hd_marshaCode="";}}}
hdVars.hd_brand_Codes=brandString;var clusterCode=$('form input[name="clusterCode"]:checked:visible').val();if(clusterCode=='other'||clusterCode=='corp'){hdVars.hd_corporateCode=$('form input[name="corporateCode"]:visible').val();}
else if(clusterCode=='INT'){hdVars.hd_incentivesType_Number=$('form input[name="displayableIncentiveType_Number"]:visible').val();}
else{hdVars.hd_clusterCode=clusterCode;}};var isSingleSearchSuggestion="false";var isEditSearchForm="";$("button[type='submit']","#find-a-hotel-form , #search-forms, #edit-search-form, #my-stay-search-form, form.hws-reservations-form").on({"click":function(event){isSingleSearchSuggestion=$("input.single-search-autosuggest",$(this).closest("form")).val();isEditSearchForm=$(this.form).is("#edit-search-form");}},null,null);var isFormSubmitted=false;var submitFormName='';$('#find-a-hotel-form button.submit, #search-forms button.submit, #edit-search-form button.submit,#my-stay-search-form button.submit, form.hws-reservations-form button.submit, button.js-is-roomkey-enabled').click(function(e){if(typeof $(this.form).attr("id")!=="undefined"){submitFormName='#'+$(this.form).attr("id");}else{submitFormName='form.'+$(this.form).attr("class");}
if(!isFormSubmitted){e.preventDefault();synchVals(this.form);var hdQualify=isHDQualified();var scEvents="";var scVarsValues="";if(popunderPrevented!=""){scVarsValues+="eVar60="+popunderPrevented;}
if(hdQualify&&hdVars.HDEnabled!='true'){if(scVarsValues!=""){scVarsValues+="^";}
scVarsValues+="eVar58=Eligible";scEvents+="event85";}
if(hdQualify&&hdVars.HDEnabled=='true'){showHD();if(success){if(scEvents!=""){scEvents+=",";}
scEvents+="event78";}else{if(scVarsValues!=""){scVarsValues+="^";}
scVarsValues+="eVar60=Pop-under prevented due to failure to open";}}
setSCData(scEvents,scVarsValues);isFormSubmitted=true;window.setTimeout(function(){$(submitFormName).submit();},0);}});if((!isHDQualified()||hdVars.HDEnabled!='true')&&HDPopupOpen=='true'){try{CopterConnect.unload();createCookie('HDPopupOpen','false')
trackingpopup('events,eVar57','event79',"HD popup closed:");}catch(err){}}}});var _templateSettings={interpolate:/{{([\s\S]+?)}}/g,variable:'_data',imports:{any:function(one,two){return one||two;},airportFormat:function(name,code,city){return(name&&(name+((code&&(' ('+code+')'))||'')+' '+city)||undefined);},mergeItem:function(seperator){var result='',idx=0;for(idx=1;idx<arguments.length;idx++){result=result+((arguments[idx]&&(((result&&seperator)||'')+arguments[idx]))||'')}
return result;}}};Aries.Components.SearchForm.prototype.autoComplete=Aries.Feature.extend({events:{'keyup .js-auto-complete-input':'getChoiseList','keydown .js-auto-complete-input':'navigateList','blur .js-auto-complete-input':'hideSuggestions'},options:{searchType:'.js-searchtype',inputs:{radius:'.js-search-radius',latitude:'.js-search-lat',longitude:'.js-search-long',cityPop:'.js-search-city-pop',cityPopDensity:'.js-search-city-pop-density',cityDisplay:'.js-search-city-display',city:'.js-search-city',state:'.js-search-state',country:'.js-search-country',poiname:'.js-search-poiname',airport:'.js-search-airport',autoSuggestOmni:'.js-autosuggest-item-type',singleSearchAuto:'.single-search-autosuggest'},categoryParams:{},geoLocationTrigger:'.js-geoloc-trigger-large',autoCompleteList:'.js-auto-complete-list',autoCompleteURL:'/search/autoComplete.mi',autoCompleteOutReqURL:'dev.virtualearth.net/REST/v1/Locations',maxCategory:10,isWebRequest:true,applyGrouping:true},templates:{autoComplete:_.template('<li class="ui-menu-item" role="menuitem">'+'<a class="ui-corner-all <% if(_data.index == 0 ) { %> ui-state-hover <% } %>" data-index="{{_data.index}}" data-type="{{_data.type}}" data-city="{{_data.city}}" data-state="{{_data.statecode}}"'+' data-countrycode="{{_data.countrycode}}" data-country="{{_data.country}}" data-country="{{_data.country}}"<% if(_data.airportname) { %> data-airport-name="{{_data.airportname}}" data-airport-code="{{_data.airportcode}}"<% } %>'+' <% if(_data.poiname) { %> data-poi-name="{{_data.poiname}}"<%}%> data-geo="{{_data.geocode}}"'+' <% if(_data.citypopulation) { %> data-city-population="{{_data.citypopulation}}" <%}%>'+' <% if(_data.citypopulationdensity) {%> data-city-population-density="{{_data.citypopulationdensity}}"<%}%>>'+'{{_data.mergeItem(", ", _data.any(_data.airportFormat(_data.airportname,_data.airportcode,_data.city), _data.any(_data.poiname,_data.city)), _data.statecode, _data.country) }}</a>'+'</li>',_templateSettings),autoOutComplete:_.template('<li class="ui-menu-item" role="menuitem">'+'<a class="ui-corner-all" data-index="{{_data.index}}" data-type="NA" data-city="{{_data.City}}" data-state="{{_data.StateCode}}"'+' data-country="{{_data.Country}}" data-geo="{{_data.GeoCode}}">'+'{{_data.label}}</a>'+'</li>',_templateSettings),autoListHeader:_.template('<li class="t-category-header t-font-semi-bold {{_data.firstClass}}">'+'<span class="icon-{{_data.name}}"></span>{{_data.category}}'+'</li>',_templateSettings),autoListMsg:_.template('<li class="t-autosuggest-msg t-font-semi-bold">{{_data}}</li>',_templateSettings)},initialize:function(config){var options=this.options=$.extend(config.options,this.options);this.options.searchTypeVal=this.$parent.$el.find(options.searchType).val();this.$geoLocationTrigger=this.$parent.$el.find(options.geoLocationTrigger);this.options.categoryParams=this.$parent.$el.find('#autosuggest-cat-headers').data('category-params');this.$autoCompleteList=$('<ul></ul>');this.$autoCompleteList.addClass('ui-autocomplete ui-menu ui-widget ui-widget-content ui-corner-all t-category-headers').css({'z-index':101,'top':'0px','left':'0px','display':'none'}).on('mousedown','.ui-menu-item a',_.bind(this.listItemSelect,this)).on('mouseover','.ui-menu-item a',_.bind(this.highLightListItem,this));$(document.body).append(this.$autoCompleteList);this.$input=this.$el.find('.js-auto-complete-input');this.recentSearchTerm=this.$input.val();},getChoiseList:function(evt){var searchTerm=evt.target.value,parseCall=_.bind(this.parseResult,this,searchTerm,$(evt.target)),searchRequest={success:parseCall};if(this.recentSearchTerm!==searchTerm){this.resetInputs();}
if(this.recentSearchTerm===searchTerm||!searchTerm.length){return;}
this.recentSearchTerm=searchTerm;if(this.options.searchTypeVal!=='NearAddress'){searchRequest.url=this.options.autoCompleteURL;searchRequest.dataType='xml';searchRequest.data={searchType:this.options.searchTypeVal,toOrFrom:null,searchTerm:searchTerm,isWebRequest:this.options.isWebRequest,applyGrouping:this.options.applyGrouping};}else{searchRequest.url=location.protocol+"//"+this.options.autoCompleteOutReqURL;searchRequest.data={key:"AtiQIdR6T0kGOCP2ZVCZXXGTaTgVLLvfGBnUUkd1jQhHse_G6NIh8zjvASLdjAgm",q:searchTerm};searchRequest.jsonp="jsonp";}
$.ajax(searchRequest);},parseResult:function(searchTerm,inputTarget,data){var $view=this,count=0,categoryItems=0,listHtml='';if(this.options.searchTypeVal==='NearAddress'){if(data.resourceSets&&data.resourceSets.length&&data.resourceSets[0].estimatedTotal){_.forEach(data.resourceSets[0].resources,function(suggestion){var countryRegion='';if(suggestion.address.countryRegion=='United States'){countryRegion=', USA';}
if($view.options.maxCategory>count){var data={type:'NA',label:suggestion.name+countryRegion,City:suggestion.address.locality,StateCode:suggestion.address.adminDistrict,Country:suggestion.address.countryRegion,GeoCode:(((suggestion.point.coordinates)&&(suggestion.point.coordinates[0]+','+suggestion.point.coordinates[1]))||''),index:count};listHtml+=$view.markSearchTerm(searchTerm,$view.templates.autoOutComplete(data));count++;}});}}else{var resultType;$(data).children('CityAirportSuggestions').children('Suggestion').each(function(index,suggestion){var data=_.extend({index:count},_templateSettings.imports),$suggestion=$(suggestion);data.type=$suggestion.attr('type');if(resultType!==data.type){resultType=data.type;listHtml+=$view.templates.autoListHeader({firstClass:index==0?'first':'',name:resultType.toLowerCase(),category:$view.options.categoryParams[resultType.toLowerCase()]});categoryItems=0;}
if($view.options.maxCategory>categoryItems){$suggestion.children().each(function(index,dataNode){if(dataNode.nodeName){data[dataNode.nodeName.toLowerCase()]=(dataNode.childNodes.length&&dataNode.childNodes[0].nodeValue)||'';}});listHtml+=$view.markSearchTerm(searchTerm,$view.templates.autoComplete(data))
count++;}
categoryItems++;});}
if(count){listHtml+=$view.templates.autoListMsg(this.options.categoryParams['label']);$view.$autoCompleteList.html(listHtml);var listOffset=inputTarget.offset();listOffset.top+=inputTarget.outerHeight();$view.$autoCompleteList.show().css({top:listOffset.top+'px',left:listOffset.left+'px',width:inputTarget.outerWidth()+'px'});this.$geoLocationTrigger.addClass('is-hidden');}else{$view.$autoCompleteList.hide();}
this.$input.attr('data-count',count);this.suggestionListShow=count>0;},navigateList:function(evt){if(this.suggestionListShow){var keyCode=evt.keyCode||evt.which,dataCount=parseInt(evt.target.getAttribute('data-count'));if(keyCode===38||keyCode===40){var $selectedItem=this.$autoCompleteList.find('.ui-state-hover'),dataIndex=$selectedItem.length&&$selectedItem.attr('data-index')||-1;if(isFinite(dataIndex=parseInt(dataIndex))){$selectedItem.removeClass('ui-state-hover');dataIndex=dataIndex+(keyCode-39);if(dataIndex>=dataCount){dataIndex-=dataCount;}else if(dataIndex<0){dataIndex=Math.max(-1,dataIndex)+dataCount;}
$selectedItem=this.$autoCompleteList.find('[data-index="'+dataIndex+'"]');$selectedItem.addClass('ui-state-hover');evt.preventDefault();}
var airportCode=$selectedItem.attr('data-airport-code'),city=$selectedItem.attr('data-city'),state=$selectedItem.attr('data-state'),country=$selectedItem.attr('data-country'),poiName=$selectedItem.attr('data-poi-name');this.$input.val(this.recentSearchTerm=(airportCode||_templateSettings.imports.mergeItem(', ',poiName||city,state,country)));}else if(keyCode===13){evt.preventDefault();this.listItemSelect(evt);}else if(keyCode===27){this.hideSuggestions(evt);evt.preventDefault();}}},hideSuggestions:function(){this.$autoCompleteList.hide();this.suggestionListShow=false;},listItemSelect:function(evt){var $selectedItem=this.$autoCompleteList.find('.ui-state-hover'),geoCode=$selectedItem.attr('data-geo');geoCode=(geoCode&&geoCode.split(','))||['',''];var inputMap={latitude:geoCode[0],longitude:geoCode[1],cityPop:$selectedItem.attr('data-city-population'),cityPopDensity:$selectedItem.attr('data-city-population-density'),city:$selectedItem.attr('data-city'),state:$selectedItem.attr('data-state'),countryname:$selectedItem.attr('data-country'),country:$selectedItem.attr('data-countrycode'),poiname:$selectedItem.attr('data-poi-name'),airport:$selectedItem.attr('data-airport-code'),airportName:$selectedItem.attr('data-airport-name'),singleSearchAuto:null,autoSuggestOmni:$selectedItem.attr('data-type')};if(inputMap.poiname){inputMap.cityDisplay=inputMap.city;inputMap.city=inputMap.poiname;}
if(inputMap.autoSuggestOmni){inputMap.singleSearchAuto='true';}
else{inputMap.singleSearchAuto='false';inputMap.singleSearchAuto='Unmatched';}
this.$input.val(this.recentSearchTerm=(_templateSettings.imports.mergeItem(', ',_templateSettings.imports.airportFormat(inputMap.airportName,inputMap.airport,inputMap.city)||inputMap.poiname||inputMap.city,inputMap.state,inputMap.countryname)));inputMap.city=(inputMap.airport||inputMap.city);_.forEach(inputMap,function(value,name){this.$parent.$el.find(this.options.inputs[name]).val(value||'');},this);this.hideSuggestions();},resetInputs:function(){_.forEach(this.options.inputs,function(selectors){this.$parent.$el.find(selectors).val('');},this);},highLightListItem:function(evt){if(evt.target){evt.stopImmediatePropagation();this.$autoCompleteList.find('.ui-state-hover').removeClass('ui-state-hover');var $thisTarget=(evt.target.nodeName=="A")?$(evt.target):$(evt.target).parent();$thisTarget.addClass('ui-state-hover');}},merge:function(list,seperator){var result='',idx=0;for(idx=0;idx<list.length;idx++){result+(list[idx]&&(list[idx]+seperator))||''}},markSearchTerm:function(searchTerm,nodeText){searchTermRegx=new RegExp(searchTerm,'ig');return nodeText.replace(/>([^><]+)<\//i,function(label){return label.replace(searchTermRegx,function(match){return'<strong>'+match+'</strong>';})});}});Aries.Components.SearchForm.prototype.clearInput=Aries.Feature.extend({events:{'mousedown .js-clear-trigger':'clearInput','focusin .js-clear-input':'hideShowIcon','keyup .js-clear-input':'hideShowIcon','blur .js-clear-input':'hideIcon'},options:{input:'.js-clear-input',trigger:'.js-clear-trigger',classSupressIE:'l-no-ie-clear',classIconActive:'is-icon-active',inputs:{radius:'.js-search-radius',latitude:'.js-search-lat',longitude:'.js-search-long',cityPop:'.js-search-city-pop',cityPopDensity:'.js-search-city-pop-density',cityDisplay:'.js-search-city-display',city:'.js-search-city',state:'.js-search-state',country:'.js-search-country',poiname:'.js-search-poiname',airport:'.js-search-airport',autoSuggestOmni:'.js-autosuggest-item-type',singleSearchAuto:'.single-search-autosuggest'}},initialize:function(config){var options=this.options=$.extend(config.options,this.options);this.$input=this.$el.find(this.options.input);this.$trigger=this.$el.find(this.options.trigger);if(this.$trigger.length==0){this.$input.after('<span class="l-icon-inline icon icon-close t-medGray js-clear-trigger" title="'+msgResources.clearText+'"></span>');this.$trigger=this.$el.find(this.options.trigger);}
this.$input.addClass(this.options.classSupressIE);},hideIcon:function(evt){this.$input.removeClass(this.options.classIconActive);},hideShowIcon:function(evt){if(this.$input.val()){this.$input.addClass(this.options.classIconActive);}else{this.$input.removeClass(this.options.classIconActive);}},clearInput:function(evt){this.$input.val('');_.forEach(this.options.inputs,function(selectors){this.$parent.$el.find(selectors).val('');},this);}});var recentSearch={max:3,list:[],inputClass:'js-recent-search',display:function(){recentSearch.getAutocompleteItem();var renderList='';for(var i=0;i<recentSearch.list.length;i++){renderList+='<li class="is-recent recent ui-menu-item" role="menuitem"><a class="ui-corner-all" tabindex="-1">';renderList+=recentSearch.list[i].label+'</a></li>';}},loadList:function(){if(localStorage.recentSearch){recentSearch.list=$.parseJSON(localStorage.recentSearch);}},getAutocompleteItem:function(filterChars,$formField){if($formField.hasClass(recentSearch.inputClass)){recentSearch.loadList();if(recentSearch.list.length>0){if(filterChars){return $.grep(recentSearch.list,function(o,i){return RegExp("\\b"+filterChars.toLowerCase(),"gi").test(o.label);});}else{return recentSearch.list;}}}},indexOf:function(key,value){for(var i=0;i<recentSearch.list.length;i++){if(recentSearch.list[i][key]==value){return i;}}
return-1;},addRecent:function(){if(localStorage){var newItem={},editSearchForm=$('.js-recent-search-inputs'),nearText=$('.for-hotels-nearme').val()+' ';newItem.label=editSearchForm.find('.js-search-location').val(),newItem.city=editSearchForm.find('.search-citydisplay').val()||editSearchForm.find('.search-city').val(),newItem.poi=editSearchForm.find('.search-poiname').val(),newItem.state=editSearchForm.find('.search-state').val(),newItem.country=editSearchForm.find('.search-country').val(),newItem.airportcode=editSearchForm.find('.search-airport').val(),newItem.value=newItem.airportcode||newItem.label,newItem.geocode=editSearchForm.find('.search-lat').val()+','+editSearchForm.find('.search-long').val(),newItem.type='recent';newItem.analytics='{"location":"searchForm","sendNow":"true","description":"Recent Search"}';recentSearch.loadList();if(newItem.label&&newItem.label.indexOf(nearText)<0){var indexOfExistingValue=recentSearch.indexOf('label',newItem.label);if(indexOfExistingValue!=-1){recentSearch.list.splice(indexOfExistingValue,1);}
recentSearch.list.unshift(newItem);recentSearch.list.splice(recentSearch.max);localStorage.setItem('recentSearch',JSON.stringify(recentSearch.list));}}},clear:function(){localStorage.removeItem('recentSearch');recentSearch.list=[];}}
Aries.Components.SearchForm.prototype.brands=Aries.Feature.extend({events:{'change input[type="checkbox"]':'onBrandSelectionChg'},options:{containerHeader:'.js-brands-header'},initialize:function(){this.boxes=this.$el.find('input[type="checkbox"]');this.boxes.all=this.boxes.filter('[value="all"]');if(this.boxes.all.filter(':checked').length==0){this.$parent.$el.find(this.options.containerHeader).trigger('click');}},onBrandSelectionChg:function(evt){if(evt.target.value==='all'){if(evt.target.checked){this.boxes.not(evt.target).prop('checked',false);}else{$(evt.target).prop('checked',true);}}else{if($(evt.target).prop('checked')){this.boxes.all.prop('checked',false);}else if(this.boxes.filter(":checked").length==0){this.boxes.all.prop('checked',true);}}}});Aries.Components.SearchForm.prototype.Rooms=Aries.Feature.extend({events:{'click .js-opt-touchable-switch':'onTouchableOptions'},options:{select:'.js-opt-touchable-select',touchableClass:'l-opt-touchable'},initialize:function(config){this.options=$.extend(config.options,this.options);},onTouchableOptions:function(evt){console.log(this);this.$el.find(this.options.select).removeClass(this.options.touchableClass).removeAttr("multiple");$(evt.target).addClass('is-hidden');}});Aries.Components.SearchForm.prototype.collapse=Aries.Feature.extend({parent:{events:{'click .js-collapse-open':'onCollapseTrigger','focus .js-collapse-open-focus':'onCollapseTrigger'}},options:{collapse:'.js-collapse',container:'.js-collapse-container',close:'.js-collapse-close',openOverride:'.js-collapse-override'},initialize:function(config){this.options=$.extend(config.options,this.options);this.options.$collapse=this.$parent.$el.closest(this.options.collapse);this.options.$container=this.$parent.$el.find(this.options.container);this.options.$close=this.options.$collapse.find(this.options.close);this.options.$override=this.$parent.$el.find(this.options.openOverride);this.options.$close.on('click',this,_.bind(this.onCollapseClose,this))},onCollapseTrigger:function(evt){if(evt.type=='click'){evt.preventDefault();}else if(evt.type=='focusin'&&this.options.$override.is(':visible')){return;}
this.options.$container.slideDown('fast').removeClass('is-hidden');this.options.$collapse.addClass('is-opened');this.options.$close.removeClass('is-hidden');},onCollapseClose:function(evt){evt.preventDefault();this.options.$container.slideUp('fast').addClass('is-hidden');this.options.$collapse.removeClass('is-opened');this.options.$close.addClass('is-hidden');}});Aries.Components.SearchForm.prototype.dates=Aries.Feature.extend({parent:{events:{'change .js-flex-trigger':'onFlexDateSelectChg','change .js-flex-input':'onFlexDaysChg'}},SEC_IN_DAY:86400000,options:{iconNode:'<span class="l-icon-calendar icon icon-calendar t-medGray js-icon-calendar"></span>',maxDays:355,inRangeClass:'t-date-inrange',startDayClass:'t-date-start',endDayClass:'t-date-end',nightsDisplay:'.js-no-ofnights',defaultDate:'js-defaultdate',iserror:'is-error',styleClass:'t-box-shadow',pickerFrame:'.picker__holder',alwaysOnTop:false,alwaysOnTopClass:'l-pos-flex',container:{fromDate:'.js-date-from-pick-container',toDate:'.js-date-to-pick-container'},inputs:{fromDate:'.js-date-from',toDate:'.js-date-to',flexibleDate:'.js-flex-input'},lang:Picker.lang,locale:{},txtNight:'',txtNights:''},initialize:function(config){this.options=$.extend(config.options,this.options);this.inputNames={from:this.$el.find(this.options.inputs.fromDate).prop('name'),to:this.$el.find(this.options.inputs.toDate).prop('name'),flexi:this.$el.find(this.options.inputs.flexibleDate).prop('name')};this.$dateInputs=this.$el.find(this.options.inputs.fromDate+', '+this.options.inputs.toDate);this.$nightsDisplay=this.$el.find(this.options.nightsDisplay);this.$dateFrom=this.$dateInputs.filter(this.options.inputs.fromDate);this.$dateTo=this.$dateInputs.filter(this.options.inputs.toDate);this.$flexInput=this.$el.find(this.options.inputs.flexibleDate);this.initPickaDatePlugin(config);this.checkFlexDate(this.$parent.$el.find('.js-flex-trigger').attr('checked'));},initPickaDatePlugin:function(){var model=this.model,$self=this,timeZone=((new Date().getTimezoneOffset())*60000),options=this.options,datesValues={},checkInName=this.inputNames.from,checkOutName=this.inputNames.to,todaysDate=(new Date()).setHours(0,0,0,0);var lang=($('html').attr('lang')||$('html').attr('xml:lang')),localeDefaults=((lang&&options.lang[lang])||options.lang["en-US"]);if(typeof msgResources!='undefined'){options.locale={labelMonthPrev:msgResources.prevMonthText,labelMonthNext:msgResources.nextMonthText,monthsFull:$.parseJSON(msgResources.monthFullList),monthsShort:$.parseJSON(msgResources.monthShortList),weekdaysFull:$.parseJSON(msgResources.weekdayFullList),weekdaysShort:$.parseJSON(msgResources.weekdayShortList)},options.txtNight=msgResources.nightText,options.txtNights=msgResources.nightsText,options.txtClear=msgResources.clearText,options.txtDone=msgResources.doneText;}
$.extend($.fn.pickadate.defaults,localeDefaults);$.extend($.fn.pickadate.defaults,options.locale);this.$dateInputs.each(function(_,inputNode){var $inputNode=$(inputNode),inputName=inputNode.name,isToDate=$self.$dateTo[0]===$inputNode[0];datesValues[inputName]=$inputNode.attr('value');function rangeRender(){if(!(model.has(checkInName)||model.has(checkOutName))){return;}
var fromDate=$self.strDateToLong(model.get(checkInName)&&model.get(checkInName).obj)||null,toDate=$self.strDateToLong(model.get(checkOutName)&&model.get(checkOutName).obj)||null;this.$root.find('.'+options.inRangeClass).removeClass(options.inRangeClass);this.$root.find('.'+options.startDayClass).removeClass(options.startDayClass);this.$root.find('.'+options.endDayClass).removeClass(options.endDayClass);var $lastRow=this.$root.find('.picker__table tr:last');if($lastRow.find('.picker__day--outfocus').length==7){$lastRow.addClass('is-hidden');}
if(fromDate){this.$root.find('[data-pick="'+fromDate+'"]').addClass(options.startDayClass);}
if(fromDate&&toDate&&fromDate!==toDate){var days=this.$root.find('.picker__day'),idx=0,node;while(node=days[idx++]){var dataPick;if((dataPick=node.getAttribute('data-pick'))&&dataPick>=fromDate&&dataPick<=toDate){node.parentElement.className+=' '+options.inRangeClass;}else if(dataPick&&dataPick>toDate){break;}}}
if(toDate){this.$root.find('[data-pick="'+toDate+'"]').addClass(options.endDayClass);}
if(this.$root.find('.picker__button--clear+.icon-dot').length==0){this.$root.find('.picker__button--clear').after('<span class="icon icon-dot t-font-xs t-medGray"></span>');}
positionPicker(this);highlightNights();}
function highlightNights(){if($self.$dateFrom.hasClass('picker__input--active')||$self.$dateTo.hasClass('picker__input--active')){$self.$nightsDisplay.addClass('is-active')}else{$self.$nightsDisplay.removeClass('is-active')}}
function positionPicker($picker){if(options.alwaysOnTop==true){var pickerLeft=$picker.$node.offset().left;if(($picker.$node.offset().left+$picker.$root.outerWidth())>$(window).width()){pickerLeft=$picker.$node.offset().left+$picker.$node.outerWidth()-$picker.$root.outerWidth();}
$picker.$root.css({'top':$picker.$node.offset().top+$picker.$node.outerHeight(),'left':pickerLeft});}};$self.options.dates={min:new Date($self.$dateFrom.data('min')),max:new Date($self.$dateFrom.data('max'))};$inputNode.pickadate({min:$self.options.dates.min,max:(!isToDate&&new Date($self.options.dates.max.getTime()-$self.SEC_IN_DAY))||$self.options.dates.max,hiddenName:true,today:'',clear:options.txtClear,close:options.txtDone,onSet:function(value){var selected=this.get('select');model.set(inputName,(selected)||0);},onRender:rangeRender,onOpen:rangeRender,onClose:highlightNights}).after($self.options.iconNode).next().on('click',function(event){event.stopPropagation();var $input=$(event.target).prev();setTimeout(function(){$input.focus();});});if(options.alwaysOnTop==true){var $picker=$inputNode.pickadate('picker');$('body').append($picker.$root.addClass(options.alwaysOnTopClass));}else{$self.$el.find(options.container[inputName]).append($inputNode.pickadate('picker').$root)}
$inputNode.pickadate('picker').$root.find($self.options.pickerFrame).addClass($self.options.styleClass);});this.pickers={from:this.$dateInputs.filter(this.options.inputs.fromDate).pickadate('picker'),to:this.$dateInputs.filter(this.options.inputs.toDate).pickadate('picker')};model.set('pickers',this.pickers);model.set(checkInName,this.pickers.from.get('select'));model.set(checkOutName,this.pickers.to.get('select'));model.set($self.inputNames.flexi,$self.$flexInput.val());this.pickers.from.on({'set':function(event){if(event.select){var fromDate=this.get('select').obj,toDate=model.get(checkOutName)&&model.get(checkOutName).obj;if(fromDate&&fromDate>todaysDate){$self.pickers.to.set('min',fromDate);}else{$self.pickers.to.set('min',1);}
if($self.isFlexDatesChecked){$self.pickers.to.set('select',$self.datePlusDays(fromDate,model.get($self.inputNames.flexi)));}else if(toDate<=fromDate){$self.pickers.to.set('select',$self.datePlusDays(fromDate,1));}}
if(event.hasOwnProperty('clear')){if($self.isFlexDatesChecked){$self.pickers.to.clear();$self.pickers.to.set('min',1);}else{$self.pickers.to.set('min',$self.options.dates.min);}}
$self.updateNights();}});if(this.$parent.$el.hasClass(this.options.defaultDate)&&(!this.pickers.from.$node.hasClass(this.options.iserror)&&!this.pickers.to.$node.hasClass(this.options.iserror))&&(!this.pickers.from.get('value')||this.pickers.from.get('select').obj<todaysDate)){this.pickers.from.set('select',todaysDate);this.pickers.to.set('select',(todaysDate+$self.SEC_IN_DAY));}else{this.pickers.to.set('min',(this.pickers.from.get('select')&&this.pickers.from.get('select').obj)||1);}
this.pickers.from.on('set',function(event){if(event.select&&!$self.isFlexDatesChecked){if($self.pickers.to&&$self.pickers.to.$node.is(':visible')){setTimeout(function(){$self.pickers.to.$node.triggerHandler('focus');});}}});this.pickers.to.on({"set":function(event){$self.updateNights();}});var lastFlexDates=$self.$flexInput.find('option').last().val();model.on('change:'+this.inputNames.flexi,function(model,days){var flexDayCt;$self.$flexInput.val(flexDayCt=(days>lastFlexDates?1:days));});$self.updateNights();},strDateToLong:function(strDate){return(strDate&&(new Date(strDate)).getTime())||0;},updateNights:function(){if(this.model.get(this.inputNames.from)&&this.model.get(this.inputNames.to)){var toDate=this.strDateToLong(this.model.get(this.inputNames.to).obj),fromDate=this.strDateToLong(this.model.get(this.inputNames.from).obj);if(toDate&&fromDate){var days=Math.round((toDate-fromDate)/this.SEC_IN_DAY);this.$nightsDisplay.html(days+' '+((days==1)?this.options.txtNight:this.options.txtNights)).removeClass('is-hidden');}else{this.$nightsDisplay.html('').addClass('is-hidden');}}else{this.$nightsDisplay.html('').addClass('is-hidden');}
if(!this.isFlexDatesChecked){this.model.set(this.inputNames.flexi,(days||1));}},checkFlexDate:function(value){this.isFlexDatesChecked=value;this.$flexInput.prop('disabled',!this.isFlexDatesChecked).parent()
[this.isFlexDatesChecked?'removeClass':'addClass']('is-hidden');this.$dateTo.parent()[this.isFlexDatesChecked?'addClass':'removeClass']('is-hidden');},onFlexDateSelectChg:function(evt){this.checkFlexDate(evt.target.checked);this.isFlexDatesChecked=evt.target.checked;this.$flexInput.trigger('change');},datePlusDays:function(dt,days){days=Number(days);var newDate=new Date(dt);return newDate.setDate(newDate.getDate()+days);},onFlexDaysChg:function(evt){var days=evt.target.value,fromDate=this.model.get(this.inputNames.from).obj;if(!fromDate||fromDate==0){evt.target.value=1;this.model.get('pickers').to.clear();}else if(days){this.model.get('pickers').to.set('select',this.datePlusDays(fromDate,days));this.model.set(this.inputNames.flexi,days);}}});Aries.Components.SearchForm.prototype.geoLocation=Aries.Feature.extend({parent:{events:{'mousedown .js-geoloc':'doLocalDetails'}},options:{klass:{turnedon:'is-location-nearme',active:'is-location-nearme-active'},inputs:{location:'.js-geoloc-target',lat:'.js-search-lat',long:'.js-search-long',states:'.js-search-state',countries:'.js-search-country'},inputMap:{'.js-geoloc-target':'location','.js-search-radius':'radius','.js-search-lat':'latitude','.js-search-long':'longitude','.js-search-city':'city','.js-search-state':'state','.js-search-country':'country','.autosuggest-item-type':'itemtype'}},initialize:function(config){if($('body.lt-ie9').length==0&&navigator.geolocation){var lang=($('html').attr('lang')||$('html').attr('xml:lang'));if(lang=='en-US'||lang=='en-GB'||lang=='en-AU'){var windowWidth=$(window).width();if(windowWidth<='480'&&($(this.options.inputs.lat).val().length==0&&$(this.options.inputs.long).val().length==0&&$(this.options.inputs.states).val().length==0&&$(this.options.inputs.countries).val().length==0)){this.doLocalDetails(this);}}
this.$inputLocation=this.$parent.$el.find(this.options.inputs.location);this.$inputLocation.addClass(this.options.klass.turnedon).on('focus',this,_.bind(this.showGeoTrigger,this)).on('blur',this,_.bind(this.hideGeoTrigger,this)).parent().find('.js-geoloc-trigger-small').removeClass('is-hidden');}},showGeoTrigger:function(evt){if(this.$inputLocation.val()==''&&this.$parent.$el.find('.js-geoloc-trigger-small:visible').length==0){this.$parent.$el.find('.js-geoloc-trigger-large').removeClass('is-hidden');}},hideGeoTrigger:function(evt){this.$parent.$el.find('.js-geoloc-trigger-large').addClass('is-hidden');},doLocalDetails:function(evt){navigator.geolocation.getCurrentPosition(_.bind(this.onLocationFound,this,this.$parent.$el.find('.js-geoloc-target')[0]),_.bind(this.onError,this,evt.target));this.hideGeoTrigger();},onError:function(target,errMsg){if(typeof $.magnificPopup!='undefined'){var errorMsg='<div class="l-padding-left l-padding-right"><p class="l-center-align t-font-bold">'
+this.$inputLocation.data('errhead')+'</p><p class="l-center-align">'
+this.$inputLocation.data('errmessage')+'</p></div>';$.magnificPopup.open({mainClass:'m-modal t-modal-small ',items:{src:errorMsg},closeMarkup:'<div class="l-padding-left l-padding-right "><button class="js-mfp-close l-width-max m-button-lightestGray">Ok</button></div>',closeOnContentClick:true});}else{alert(this.$inputLocation.data('errhead')+' - '+this.$inputLocation.data('errmessage'));}},onLocationFound:function(target,position){var endPoint=location.protocol+'//'+target.getAttribute('data-binglocation')+
position.coords.latitude+','+position.coords.longitude
+'?key='+target.getAttribute('data-bingkey')+'&include=ciso2&jsonp=?',populateCallBack=_.bind(this.populateGeoLoc,this,position,target);$.ajax({url:endPoint,dataType:"json",success:function(data){if(data.resourceSets&&data.resourceSets.length){populateCallBack(data.resourceSets[0].resources[0]);}},error:(function(){})})},onFormSubmit:function(evt){},populateGeoLoc:function(position,target,geoResource){var $parentEl=this.$parent.$el,locationMap={city:geoResource.address.locality,state:geoResource.address.adminDistrict,country:geoResource.address.countryRegionIso2,radius:target.getAttribute('data-radius'),latitude:position.coords.latitude,longitude:position.coords.longitude,itemtype:'hotelsnearme'};locationMap.location=target.getAttribute('data-nearmetxt')+' '+locationMap.city+', '+
((locationMap.state&&(locationMap.state+', '))||'')+locationMap.country;_.forEach(this.options.inputMap,function(name,selector){$parentEl.find(selector).val(locationMap[name]);});this.$inputLocation.addClass(this.options.activeClass);}});Aries.Components.SearchForm.prototype.roomsGuests=Aries.Feature.extend({events:{'click .js-rooms-guests-trigger':'onRoomsGuestsClicked','click .js-plus':'onPlusClicked','click .js-minus':'onMinusClicked','blur .js-rooms-num':'onRoomsBlur','blur .js-guests-num':'onGuestsBlur','click .l-rooms-guests-clear':'onClearClicked'},options:{dropdownPanel:'.js-rooms-guests-panel',inactive:'is-inactive'},guests:{$minus:$('.l-guests .js-minus'),$plus:$('.l-guests .js-plus')},rooms:{$minus:$('.l-rooms .js-minus'),$plus:$('.l-rooms .js-plus')},initialize:function(config){var $self=this;var guestsSelectedValue,roomsSelectedValue;this.options=$.extend(config.options,this.options);this.options.$dropdownPanel=this.$parent.$el.find(this.options.dropdownPanel);this.optionMaxValue=this.$parent.$el.find('.roomCount option:last-child').val();guestsSelectedValue=$("select.guestCount option:selected").val();roomsSelectedValue=$("select.roomCount option:selected").val();$('.js-guests-num').val(guestsSelectedValue);$('.js-rooms-num').val(roomsSelectedValue);this.displayText();if(guestsSelectedValue==1){this.guests.$minus.addClass(this.options.inactive);this.guests.$plus.removeClass(this.options.inactive);}else if(guestsSelectedValue==6){this.guests.$plus.addClass(this.options.inactive);this.guests.$minus.removeClass(this.options.inactive);}else{this.guests.$minus.removeClass(this.options.inactive);this.guests.$plus.removeClass(this.options.inactive);}
if(roomsSelectedValue==1){this.rooms.$minus.addClass(this.options.inactive);this.rooms.$plus.removeClass(this.options.inactive);}else if(roomsSelectedValue==26||this.optionMaxValue==3&&roomsSelectedValue==3){this.rooms.$plus.addClass(this.options.inactive);this.rooms.$minus.removeClass(this.options.inactive);}else{this.rooms.$minus.removeClass(this.options.inactive);this.rooms.$plus.removeClass(this.options.inactive);}
$(document).on('click',function(evt){$self.onClose(evt,$self);});this.$parent.$el.find("input[type!='hidden'], a, div[tabindex = '0']").on('focusin',function(evt){$self.onClose(evt,$self);});},displayText:function(evt){var guestCount,roomCount,gst,rm,gsts,rms,trgr,gstabbr,gstsabbr;guestCount=$('.js-guests-num').val();roomCount=$('.js-rooms-num').val();trgr=$('.js-rooms-guests-trigger');gst=trgr.data('options').guest;rm=trgr.data('options').room;gsts=trgr.data('options').guests;rms=trgr.data('options').rooms;gstabbr=trgr.data('options').guestabbr;gstsabbr=trgr.data('options').guestsabbr;$('.js-number-of-guests').html(guestCount);$('.js-number-of-rooms').html(roomCount);if(guestCount==1){$('.js-guests-text-abbr').html(gstabbr);$('.js-guests-text').html(gst);}
else{$('.js-guests-text-abbr').html(gstsabbr);$('.js-guests-text').html(gsts);}
if(roomCount==1){$('.js-rooms-text').html(rm);}
else{$('.js-rooms-text').html(rms);}
if(roomCount==1||roomCount==2||roomCount==3){$('.js-gsts').removeClass('is-hidden-label');}else{$('.js-gsts').addClass('is-hidden-label');}},onRoomsGuestsClicked:function(evt){evt.preventDefault();this.options.$dropdownPanel.slideToggle("fast").toggleClass('is-hidden').parents("div.l-rooms-guests").find('.m-dropdown-trigger').toggleClass('dropdown-is-active');if(this.options.$dropdownPanel.attr('aria-expanded')=='false'){this.options.$dropdownPanel.attr('aria-expanded','true');}
else{this.options.$dropdownPanel.attr('aria-expanded','false');}
$('.t-more-search-options').css('overflow','visible');$('.l-rooms-guests').toggleClass('is-active');},onPlusClicked:function(evt){var numberRoomsOrGuests=$(evt.target).siblings('input').val(),$self=this;$(evt.target).siblings('select').find('option').each(function(i){if($(this).text()==numberRoomsOrGuests&&i<5&&!$(evt.target).hasClass($self.options.inactive)){var isRoomCount=$(evt.target).siblings('#roomCountBox').length;if(i==4||isRoomCount&&i+2==$self.optionMaxValue){$(evt.target).addClass($self.options.inactive);}else{$(evt.target).siblings('.js-minus').removeClass($self.options.inactive);$(evt.target).removeClass($self.options.inactive);}
i++;$(evt.target).siblings('select').prop('selectedIndex',i);var grCount=$(evt.target).siblings('select').find('option:selected').text();$(evt.target).siblings('input').val(grCount);$self.displayText(evt);}});evt.preventDefault();},onMinusClicked:function(evt){var numberRoomsOrGuests=$(evt.target).siblings('input').val(),$self=this;$(evt.target).siblings('select').find('option').each(function(i){if($(this).text()==numberRoomsOrGuests&&i>0){if(i==1){$(evt.target).addClass($self.options.inactive);}
else{$(evt.target).siblings('.js-plus').removeClass($self.options.inactive);$(evt.target).removeClass($self.options.inactive);}
i--;$(evt.target).siblings('select').prop('selectedIndex',i);var grCount=$(evt.target).siblings('select').find('option:selected').text();$(evt.target).siblings('input').val(grCount);$self.displayText(evt);}});evt.preventDefault();},onGuestsBlur:function(evt){var numberOfGuests=$(evt.target).val();var gstIndex=0;$self=this;if(numberOfGuests>=6){$(evt.target).val('6');$(evt.target).siblings('.js-plus').addClass(this.options.inactive);$(evt.target).siblings('.js-minus').removeClass(this.options.inactive);gstIndex=5;}else if(numberOfGuests>1&&numberOfGuests<6){$(evt.target).val(numberOfGuests);$(evt.target).siblings('.js-minus, .js-plus').removeClass(this.options.inactive);gstIndex=numberOfGuests-1;}else{$(evt.target).val('1');$(evt.target).siblings('.js-minus').addClass(this.options.inactive);$(evt.target).siblings('.js-plus').removeClass(this.options.inactive);gstIndex=0;}
$self.displayText(evt);$(evt.target).siblings('select').prop('selectedIndex',gstIndex);},onRoomsBlur:function(evt){var numberOfRooms=$(evt.target).val();$self=this;var greaterThanThreeOptions=$self.optionMaxValue>3;var rmsIndex=0;if(numberOfRooms>3&&numberOfRooms<10&&greaterThanThreeOptions){$(evt.target).val('4-9');$(evt.target).siblings('.js-minus, .js-plus').removeClass(this.options.inactive);rmsIndex=3;}else if(numberOfRooms>9&&numberOfRooms<26&&greaterThanThreeOptions){$(evt.target).val('10-25');$(evt.target).siblings('.js-minus, .js-plus').removeClass(this.options.inactive);rmsIndex=4;}else if(numberOfRooms>25&&greaterThanThreeOptions){$(evt.target).val('26+');$(evt.target).siblings('.js-minus').removeClass(this.options.inactive);$(evt.target).siblings('.js-plus').addClass(this.options.inactive);rmsIndex=5;}else if(numberOfRooms==1){$(evt.target).val('1');$(evt.target).siblings('.js-minus').addClass(this.options.inactive);$(evt.target).siblings('.js-plus').removeClass(this.options.inactive);rmsIndex=0;}else if(numberOfRooms==2){$(evt.target).val('2');$(evt.target).siblings('.js-minus, .js-plus').removeClass(this.options.inactive);rmsIndex=1;}else if(numberOfRooms==3){$(evt.target).val('3');rmsIndex=2;if(greaterThanThreeOptions){$(evt.target).siblings('.js-minus, .js-plus').removeClass(this.options.inactive);}else{$(evt.target).siblings('.js-minus').removeClass(this.options.inactive);$(evt.target).siblings('.js-plus').addClass(this.options.inactive);}}else if(!greaterThanThreeOptions&&numberOfRooms>3){$(evt.target).val('3');$(evt.target).siblings('.js-minus').removeClass(this.options.inactive);$(evt.target).siblings('.js-plus').addClass(this.options.inactive);rmsIndex=2;}else{$(evt.target).val('1');$(evt.target).siblings('.js-minus').addClass(this.options.inactive);$(evt.target).siblings('.js-plus').removeClass(this.options.inactive);rmsIndex=0;}
$self.displayText(evt);$(evt.target).siblings('select').prop('selectedIndex',rmsIndex);},onClearClicked:function(evt){$self=this;$('.js-rooms-guests-panel input, .js-rooms-guests-panel select').val(1);$('.js-minus').addClass(this.options.inactive);$('.js-plus').removeClass(this.options.inactive);$self.displayText(evt);evt.preventDefault();},onClose:function(evt,$self){if($self.$el.find(evt.target).length==0&&$self.$el.hasClass('is-active')){$self.$el.removeClass('is-active');$self.options.$dropdownPanel.slideUp();$self.$el.find('.m-dropdown-trigger').removeClass('dropdown-is-active');}}});Aries.Components.SearchForm.prototype.specialRates=Aries.Feature.extend({events:{'change .js-specials':'onSpecialsChg'},options:{inputs:'.js-specials',textInputs:'.js-specials-input',containerHeader:'.js-specials-header',points:'.js-points'},initialize:function(config){var $inputs,selectedValue,inputName;this.options=$.extend(config.options,this.options);this.$specialInputs=this.$el.find(this.options.textInputs);$inputs=this.$el.find(this.options.inputs);selectedValue=$inputs.filter(':checked').val()
if(selectedValue!='none'){this.$parent.$el.find(this.options.containerHeader).trigger('click');var selected;if(selected=this.options.map[selectedValue]){this.$specialInputs.filter(selected).removeClass('is-hidden').find('input').prop('disabled',false);}}
if(inputName=$inputs.prop('name')){this.model.on('change:'+inputName,function(model,value){var selected;if(selected=this.options.map[value]){this.$specialInputs.filter(selected).removeClass('is-hidden').find('input').prop('disabled',false).focus();}},this);}},onSpecialsChg:function(evt){this.$specialInputs.addClass('is-hidden').find('input').prop('disabled',true).val('');this.model.set(evt.target.name,evt.target.value);if(evt.target.value!='none'){this.$parent.$el.find(this.options.points).prop('checked',false);}}});Aries.Components.SearchForm.prototype.singleFieldDates=Aries.Feature.extend({events:{'focus .js-date-from':'openFrom','focus .js-date-to':'openTo','keydown .js-date-from':'keyEvents','keydown .js-date-to':'keyEvents','change .js-date-from':'updateDate','change .js-date-to':'updateDate','mousedown .js-toggle-picker':'toggleBarTrigger','keydown .js-toggle-picker':'toggleBarTrigger'},SEC_IN_DAY:86400000,options:{maxDays:355,pickerActive:'picker__input--active',inRangeClass:'t-date-inrange',startDayClass:'t-date-start',endDayClass:'t-date-end',nightsDisplay:'.js-no-ofnights',defaultDate:'js-defaultdate',iserror:'is-error',styleClass:'t-box-border',pickerFrame:'.picker__frame',alwaysOnTop:false,alwaysOnTopClass:'l-pos-flex',container:'.js-date-pick-container',contActive:'is-active',flexdateTrigger:'.js-toggle-flexdate',dropdownTrigger:'.m-dropdown-trigger',dropdownActive:'dropdown-is-active',inputs:{submitFrom:'.js-submit-from',submitTo:'.js-submit-to',flexCheck:'.js-flex-check',flexLength:'.js-flex-input',fromToDate:'.js-date-from-to',fromDate:'.js-date-from',toDate:'.js-date-to'},lang:Picker.lang,locale:{},txtNight:'',txtNights:'',txtFlexDate:'',txtSpecificDate:''},fromTo:['from','to'],pickerState:'from',flexdateState:'date',footer:{},flex:{},initialize:function(config){var $self=this;this.options=$.extend(config.options,this.options);this.inputNames={flexi:this.$el.find(this.options.inputs.flexibleDate).prop('name')};this.$dateFromTo=this.$el.find(this.options.inputs.fromToDate);this.options.invalidDateMsg=this.$dateFromTo.data().invalidmsg;this.$flexInput=this.$el.find(this.options.inputs.flexibleDate);this.from={$input:this.$el.find(this.options.inputs.fromDate),$submit:this.$el.find(this.options.inputs.submitFrom)};this.to={$input:this.$el.find(this.options.inputs.toDate),$submit:this.$el.find(this.options.inputs.submitTo)};this.from.$label=this.$el.find("label[for="+this.from.$input.attr('id')+"]");this.to.$label=this.$el.find("label[for="+this.to.$input.attr('id')+"]");this.$dropdownIcon=this.$el.find(this.options.dropdownTrigger);this.initPickaDatePlugin(config);this.initFlexDate();this.initPickerFooter();this.toggleFlexDate($self,($self.flex.$check.attr('checked'))?'flex':'date');$(document).on('click',function(evt){$self.close($self,evt);});this.$parent.$el.find("input[type!='hidden'], a, div[tabindex = '0']").on('focusin',function(evt){$self.close($self,evt);});},toggleFlexDate:function($self,newFlexState,open){var isPickerHidden='is-picker-hidden',isFlexHidden="is-flex-hidden";$self.flexdateState=newFlexState||($self.flexdateState==='date'?'flex':'date');if($self.flexdateState==='flex'){$self.flex.$check.attr('checked',true);$self.$el.addClass(isPickerHidden).removeClass(isFlexHidden).find('.js-toggle-picker');$self.$dateFromToPicker.$frame.hide();$self.flex.$root.show();$self.footer.$root.find($self.options.flexdateTrigger).html($('.js-date-pick-container').data('options').specificdates);if(!$self.from.date){$self.pickerState="from";$self.$dateFromToPicker.set('select',$self.options.dates.todaysDate);}
$self.displayFlex();$self.checkFlexStepper();if(open){$self.pickerState='to';$self.$dateFromToPicker.set('select',$self.datePlusDays($self.from.date,$self.flex.$length.val()),{muted:true});}
$self.flex.$monthTrigger.filter('.is-selected').focus();}else{$self.flex.$check.attr('checked',false);$self.$el.addClass(isFlexHidden).removeClass(isPickerHidden).find('.js-toggle-picker');$self.flex.$root.hide();$self.$dateFromToPicker.$frame.show();$self.footer.$root.find($self.options.flexdateTrigger).html($('.js-date-pick-container').data('options').flexdates);if(open){$self.pickerState='to';$self.$dateFromToPicker.set('select',$self.datePlusDays($self.from.date,$self.flex.$length.val()),{muted:true});$self.openFrom(null,$self);}}},toggleBarTrigger:function(evt){var $self=this;if(!$self.readonly&&($(evt.target).hasClass('js-date-to')||$(evt.target).hasClass('js-date-from'))||$(evt.target).filter('label.l-date').length>0){return;}
var keycode=evt.keyCode||evt.which;if(keycode===13||evt.type==='mousedown'){$self.toggleBar(evt,$self);}},toggleBar:function(evt,$self){evt.stopPropagation();if($self.$el.hasClass('is-flex-hidden')){if($self.$el.hasClass($self.options.contActive)){if(!($self.pickerState==='from'&&$(evt.target).hasClass('js-date-to'))&&!($self.pickerState==='to'&&$(evt.target).hasClass('js-date-from'))){$self.toggleLabel(null,$self);$self.close($self);}}else{setTimeout(function(){$self.from.$input.focus();$self.$dateFromToPicker.$holder.slideDown('medium');});}}else{if($self.$el.hasClass($self.options.contActive)){$self.close($self);}else{$self.$el.addClass($self.options.contActive);$self.$dropdownIcon.addClass($self.options.dropdownActive);$self.$dateFromToPicker.$holder.slideDown('medium');$self.flex.$monthTrigger.filter('.is-selected').focus();$self.$dateFromToPicker.$root.addClass('picker--opened').attr("aria-hidden","false");}}},toggleLabel:function(showInput,$self){$self=$self||this;if(!($self.from.$label.length&&$self.to.$label.length)){return;}
var isHidden='is-hidden-label',isVisible='l-h-field-input';$($self.fromTo).each(function(i,o){if($self[o].$submit.val()||$self[o].$input.is(":focus")||showInput===o){$self[o].$input.removeClass(isHidden).addClass(isVisible);$self[o].$label.removeClass(isVisible).addClass(isHidden);}else{$self[o].$input.removeClass(isVisible).addClass(isHidden);$self[o].$label.removeClass(isHidden).addClass(isVisible);$self[o].$input.val('');}});},openCalendar:function(evt,$self){$self=$self||this;var min,max;if($self.pickerState==='to'){if($self.from.date&&$self.from.date>$self.options.dates.todaysDate){min=$self.from.date;}else{min=1;}
max=$self.options.dates.toMax;}else{min=$self.options.dates.fromMin;max=$self.options.dates.fromMax;}
$self.$dateFromToPicker.set({'min':min,'max':max,'select':($self.pickerState==='to')?$self.to.date:$self.from.date},{muted:true});$self.$el.addClass($self.options.contActive);if(!$self.$dateFromToPicker.$holder.is(':visible')){$self.$dateFromToPicker.$holder.slideDown('medium');}
$self.$dateFromToPicker.open(false);},openFrom:function(evt,$self){if(evt){evt.stopPropagation;}
$self=$self||this;$self.pickerState='from';$self.openCalendar(evt,$self);},openTo:function(evt,$self){if(evt){evt.stopPropagation;}
$self=$self||this;$self.pickerState='to';$self.openCalendar(evt,$self);},close:function($self,evt){if(evt==null||(evt!=null&&$self.$el.hasClass('is-active')&&$self.$el.find(evt.target).length==0)){$self.$dateFromToPicker.$root.addClass('picker--opened').removeClass('picker--focused');$self.$dropdownIcon.removeClass($self.options.dropdownActive);$self.$dateFromToPicker.$holder.slideUp(300,function(){$self.from.$input.removeClass($self.options.pickerActive);$self.to.$input.removeClass($self.options.pickerActive);$self.$el.removeClass($self.options.contActive);});}},parseDate:function(str){var parsedDate,year;parsedDate=$locale.locale("parseDate",str);parsedDate=parsedDate||Date.parse(str);if(parsedDate){parsedDate=new Date(parsedDate);year=parsedDate.getFullYear();if(year<2000){parsedDate.setYear(year+100);}}
return parsedDate;},updateDate:function(evt){if(this.preventChangePropagation===true){return;}
var parsedDate=this.parseDate(evt.target.value);if(parsedDate){this.$dateFromToPicker.set('select',parsedDate);}else if(!parsedDate&&!evt.target.value){this[this.pickerState].$submit.val('');this[this.pickerState].$input.val('');this[this.pickerState].date=null;}else{alert(this.options.invalidDateMsg);this[this.pickerState].$submit.val('');this[this.pickerState].date=null;$(evt.target).select();}},keyEvents:function(evt){if(evt.keyCode===27||evt.which===27){this.close(this);}},initPickaDatePlugin:function(){var model=this.model,$self=this,timeZone=((new Date().getTimezoneOffset())*60000),options=this.options,datesValues={},todaysDate=(new Date()).setHours(0,0,0,0),lang=($('html').attr('lang')||$('html').attr('xml:lang')),localeDefaults=((lang&&options.lang[lang])||options.lang["en-US"]);$self.readonly=($(document).width()<=760&&$('html').hasClass('touch'))?true:false;localeDefaults.format=($(document).width()<=360)?localeDefaults.formatShort:localeDefaults.format;if(typeof msgResources!=='undefined'){options.locale={labelMonthPrev:msgResources.prevMonthText,labelMonthNext:msgResources.nextMonthText,monthsFull:$.parseJSON(msgResources.monthFullList),monthsShort:$.parseJSON(msgResources.monthShortList),weekdaysFull:$.parseJSON(msgResources.weekdayFullList),weekdaysShort:$.parseJSON(msgResources.weekdayShortList)};options.txtNight=msgResources.nightText;options.txtNights=msgResources.nightsText;options.txtClear=msgResources.clearText;options.txtDone=msgResources.doneText;}
$.extend($.fn.pickadate.defaults,localeDefaults);$.extend($.fn.pickadate.defaults,options.locale);$self.from.$input.add($self.to.$input).attr('size',localeDefaults.format.length).prop('readonly',$self.readonly);function renderThis(){if(!$self.$dateFromTo.hasClass(options.pickerActive)||(!$self.from.$input&&!$self.to.$input)){return;}
if($self.pickerState==='from'){$self.from.$input.addClass(options.pickerActive);$self.to.$input.removeClass(options.pickerActive);}else{$self.from.$input.removeClass(options.pickerActive);$self.to.$input.addClass(options.pickerActive);}
var fromDate=$self.strDateToLong($self.from.date)||null,toDate=$self.strDateToLong($self.to.date)||null,$root=$self.$dateFromToPicker.$root,$lastRow=$root.find('.picker__table tr:last');$root.find('.'+options.inRangeClass).removeClass(options.inRangeClass);$root.find('.'+options.startDayClass).removeClass(options.startDayClass);$root.find('.'+options.endDayClass).removeClass(options.endDayClass);if($lastRow.find('.picker__day--outfocus').length===7){$lastRow.addClass('is-hidden');}
if(fromDate){$root.find('[data-pick="'+fromDate+'"]').addClass(options.startDayClass);}
if(fromDate&&toDate&&fromDate!==toDate){var days=$root.find('.picker__day'),idx=0,node=null,dataPick=null;while(node=days[idx++]){if((dataPick=node.getAttribute('data-pick'))&&dataPick>=fromDate&&dataPick<=toDate){node.parentElement.className+=' '+options.inRangeClass;}else if(dataPick&&dataPick>toDate){break;}}}
if(toDate){$root.find('[data-pick="'+toDate+'"]').addClass(options.endDayClass);}
$self.toggleLabel($self.pickerState,$self);}
function openThis(){$self.$el.addClass($self.options.contActive);$self.$dropdownIcon.addClass($self.options.dropdownActive);$self.toggleLabel();renderThis();}
function setDateFromPicker(dateVal,fromTo){$self.preventChangePropagation=true;$self.pickerState=fromTo||$self.pickerState;if(dateVal&&dateVal!==-1){if(typeof dateVal==='string'){$self.$dateFromToPicker.set('select',dateVal,{muted:true,format:localeDefaults.formatSubmit});}else{$self.$dateFromToPicker.set('select',dateVal,{muted:true});}}
$self[$self.pickerState].date=$self.$dateFromToPicker.get('select')&&$self.$dateFromToPicker.get('select').obj;$self[$self.pickerState].$submit.val($self.$dateFromToPicker._hidden.value);$self[$self.pickerState].$input.val($self.$dateFromToPicker.$node.val());$self.preventChangePropagation=false;}
$self.options.dates={fromMin:new Date($self.$dateFromTo.data('min')),toMax:new Date($self.$dateFromTo.data('max')),todaysDate:(new Date()).setHours(0,0,0,0)};$self.options.dates.toMin=$self.options.dates.fromMin;$self.options.dates.fromMax=new Date($self.options.dates.toMax.getTime()-$self.SEC_IN_DAY);this.$dateFromTo.pickadate({min:$self.options.dates.fromMin,max:$self.options.dates.fromMax,today:'',clear:'',close:'',onRender:renderThis,onOpen:openThis,container:$self.options.container,editable:'true'});this.$dateFromToPicker=this.$dateFromTo.pickadate('picker');if(options.alwaysOnTop==true){$('body').append(this.$dateFromToPicker.$root.addClass(options.alwaysOnTopClass));}
this.$dateFromToPicker.$holder.addClass($self.options.styleClass).hide();this.$dateFromToPicker.$frame=this.$dateFromToPicker.$holder.find($self.options.pickerFrame);this.pickerState='from';this.$dateFromToPicker.on({'set':function(event){if(event.select){if($self.pickerState==='from'){setDateFromPicker();if($self.flexdateState==='flex'){setDateFromPicker($self.datePlusDays($self.from.date,$self.flex.$length.val()),'to');}else if(!$self.to.date||$self.to.date<=$self.from.date){setDateFromPicker($self.datePlusDays($self.from.date,1),'to');}
if($self.to.$input&&$self.to.$input.is(':visible')){setTimeout(function(){$self.to.$input.focus();});}}else{setDateFromPicker();$self.close($self);}
$self.toggleLabel(null,$self);if($self.flexdateState!=='flex'&&$self.from.date&&$self.to.date){var days=Math.round(($self.to.date-$self.from.date)/$self.SEC_IN_DAY);$self.flex.$length.val(days||1);}}}});setDateFromPicker(this.to.$submit.val(),'to');setDateFromPicker(this.from.$submit.val(),'from');if(this.$parent.$el.hasClass(this.options.defaultDate)&&(!this.from.$input.hasClass(this.options.iserror)&&!this.to.$input.hasClass(this.options.iserror))&&(!this.from.$input.val()||this.from.date<$self.options.dates.todaysDate)){setDateFromPicker($self.options.dates.todaysDate,'from');setDateFromPicker($self.datePlusDays($self.options.dates.todaysDate,1),'to');}},strDateToLong:function(strDate){return(strDate&&(new Date(strDate)).getTime())||0;},datePlusDays:function(dt,days){days=Number(days);var newDate=new Date(dt);return newDate.setDate(newDate.getDate()+days);},initFlexDate:function(){var $self=this,monthHtml='',m=$self.options.dates.fromMin.getMonth(),y=$self.options.dates.fromMin.getFullYear(),strY=' '+y,i,yearDiff=$self.options.dates.fromMin.getYear()-$self.options.dates.toMax.getYear(),noOfMonths;$self.flex.$root=$self.$el.find('.m-flex-frame').appendTo($self.$dateFromToPicker.$holder);noOfMonths=1-(yearDiff*12)-m+$self.options.dates.toMax.getMonth();for(i=0;i<noOfMonths;i++){monthHtml+='<a href="#" data-month="'+m+'" data-year ="'+y+'"';monthHtml+=' title="'+$self.options.locale.monthsFull[m]+strY+'"';monthHtml+=' class="js-flex-month l-h-option t-blk t-no-decor">';monthHtml+=$self.options.locale.monthsShort[m]+strY+'</a>';m++;if(m===12){y++;strY=' '+y;m=0;}else{strY='';}}
$self.flex.$root.find('.js-flex-months-holder').html(monthHtml);$self.flex.$check=$self.$el.find($self.options.inputs.flexCheck);$self.flex.$length=$self.$el.find($self.options.inputs.flexLength);$self.flex.$display=$self.$el.find('.js-flex-display');$self.flex.displayLabel=$self.flex.$display.data('label');$self.flex.$monthTrigger=$self.flex.$root.find('.js-flex-month').on('click',function(evt){$self.onMonthChg(evt,$self);});$self.flex.$plus=$self.flex.$root.find('.js-plus').on('click',function(evt){$self.onFlexStepperChg(evt,$self,true);});$self.flex.$minus=$self.flex.$root.find('.js-minus').on('click',function(evt){$self.onFlexStepperChg(evt,$self);});$self.flex.$stepperInput=$self.flex.$root.find('.js-stepper-input').on('change',function(evt){$self.setStepperVal($(evt.target).val(),$self);}).on('keydown',function(evt){evt.stopPropagation();});if($self.pickerState==='flex'){$self.displayFlex();}
if($('html').hasClass('touch')){$self.flex.$root.addClass('has-slider');}},displayFlex:function(){var $self=this,days=$self.flex.$length.val(),selectedM=$self.from.date&&$self.from.date.getMonth(),selectedY=$self.from.date&&$self.from.date.getFullYear();$self.flex.$monthTrigger.filter('.is-selected').removeClass('is-selected').removeAttr('aria-selected');$self.flex.$monthTrigger.filter('[data-month="'+selectedM+'"]').filter('[data-year="'+selectedY+'"]').addClass('is-selected').attr('aria-selected',"true");$self.flex.$display.html($self.flex.displayLabel+' '+$self.options.locale.monthsFull[selectedM]+' - '+days+' '+((days==1)?$self.options.txtNight:$self.options.txtNights));$self.flex.$stepperInput.val(days);},onMonthChg:function(evt,$self){var $evt=$(evt.target),m=$evt.data().month,y=$evt.data().year;evt.preventDefault();$evt.parent().find('.is-selected').removeClass('is-selected');$evt.addClass('is-selected');$self.pickerState='from';$self.$dateFromToPicker.set('select',new Date(y,m,1));$self.displayFlex();$self.flex.$stepperInput.focus();},onFlexStepperChg:function(evt,$self,add){evt.preventDefault();if($(evt.target).hasClass('is-inactive')){return;}
var stepVal=$self.flex.$length.val();stepVal=(add)?++stepVal:--stepVal;$self.setStepperVal(stepVal,$self);$(evt.target).focus();},checkFlexStepper:function(stepVal,$self){$self=$self||this;var firstVal=$self.flex.$length.find(':first-child').val(),lastVal=$self.flex.$length.find(':last-child').val(),inActive='is-inactive';firstVal=parseInt(firstVal,10);lastVal=parseInt(lastVal,10);stepVal=stepVal||$self.flex.$stepperInput.val();stepVal=(isNaN(parseInt(stepVal,10)))?1:parseInt(stepVal,10);$self.flex.$plus.add($self.flex.$minus).removeClass(inActive);if(stepVal>=lastVal){stepVal=lastVal;$self.flex.$plus.addClass(inActive);}else if(stepVal<=firstVal){stepVal=firstVal;$self.flex.$minus.addClass(inActive);}
return stepVal;},setStepperVal:function(stepVal,$self){var fromDate=$self.from.date;stepVal=$self.checkFlexStepper(stepVal,$self);if(stepVal){$self.pickerState='to';$self.$dateFromToPicker.set('select',$self.datePlusDays(fromDate,stepVal),{muted:'true'});$self.to.$submit.val($self.$dateFromToPicker._hidden.value);}
$self.flex.$stepperInput.val(stepVal);$self.flex.$length.val(stepVal);$self.displayFlex();},initPickerFooter:function(){var $self=this,footerHtml='<div class="l-picker-footer">'
+'<a href="#" class="js-toggle-flexdate l-float-left m-button-secondary">'
+$('.js-date-pick-container').data('options').flexdates+'</a>'
+'<a href="#" class="l-float-right l-h-small-button l-flex js-flex-done">'
+$self.options.txtDone+'</a>'+'<a href="#" class="l-float-right l-h-small-button l-date js-date-clear">'
+$self.options.txtClear+'</a>'+'</div>';$self.footer.$root=$(footerHtml).appendTo($self.$dateFromToPicker.$holder);$self.$dateFromToPicker.$root.find('.js-date-clear').on('click',function(evt){evt.preventDefault();$($self.fromTo).each(function(i,o){$self[o].$submit.val('');$self[o].$input.val('');$self[o].date=null;});$self.openFrom(null,$self);});$self.$dateFromToPicker.$root.find('.js-flex-done').on('click',function(evt){evt.preventDefault();$self.close($self);setTimeout(function(){$self.$dateFromToPicker.close(true);},300);});$self.$toggleFlex=$self.$el.find($self.options.flexdateTrigger).on('click',function(evt){evt.preventDefault();$self.toggleFlexDate($self,null,true);});}});Aries.Components.SearchForm.prototype.userRewards=Aries.Feature.extend({events:{'change .js-points':'onUseRewardsChg'},options:{target:'.js-points-override'},initialize:function(config){this.options=$.extend(config.options,this.options);},onUseRewardsChg:function(evt){this.isRewardUsed=(evt.target.value==='true'&&evt.target.checked);this.$parent.$el.find(this.options.target).attr('checked',true).trigger('change');}});Aries.Components.SearchForm.prototype.validate=Aries.Feature.extend({parent:{events:{'submit':'onSubmitValidation'}},options:{notClusterCodes:['none'],clusterCorp:'other',corpCodeArray:['REW','P17','MRW','MXR','MW1'],inputs:{roomsCount:'.js-rooms',flexiDatesTgr:'.js-flex-trigger',savedHotels:'.js-val-saved',clusterCodes:'.js-specials',dateFrom:'.js-date-from',dateTo:'.js-date-to',useRewards:'.js-points',corpCode:'.js-corp input'},messaging:{}},initialize:function(config){var options=this.options=$.extend(this.options,config.options);options.messaging={noSelectedHotel:$("#noSelectedHotel").val(),flexibleDatesMaxRooms:'Flexible date searches cannot be completed requesting more than 3 rooms. Please revise your search.',corpCodeBlankMessage:$('#corpCodeBlankMessage').val().replace(/\s+/g," "),groupRatesMessage:$("#groupMessage").val(),useRewardsPntsMessage:$("#useRewardsPtsMessage").val(),corpCodeNoDates:"You have requested a special rate without specifying dates. We can store this information for your convenience, but cannot check rates and availability unless dates are specified.\n"+"Click 'OK' to continue without dates, or 'Cancel' to go back and change your search options."}},onSubmitValidation:function(evt){var values={},options=this.options;_.forEach(this.options.inputs,function(selector,name){var $node=this.$parent.$el.find(selector);values[name]=$node.is(':checkbox')?$node.prop('checked'):($node.is(':radio')?$node.filter(':checked').val():$node.val());},this);if(typeof(values.savedHotelsForm)!=='undefined'&&!values.savedHotelsForm){alert(options.messaging.noSelectedHotel);return false;}
options.selectedRate=!~options.notClusterCodes.indexOf(values.clusterCodes);options.selectedCorp=(values.clusterCodes===options.clusterCorp);if(options.selectedRate){if(options.selectedCorp&&!values.corpCode){alert(options.messaging.corpCodeBlankMessage);return false;}
if(!~this.options.corpCodeArray.indexOf(values.corpCode.toUpperCase())&&(!values.dateFrom&&!values.dateTo)){return confirm(options.messaging.corpCodeNoDates);}}
if(values.roomsCount>3){if(options.selectedRate){return confirm(options.messaging.groupRatesMessage);}
if(values.useRewards){return confirm(options.messaging.useRewardsPntsMessage);}
if(values.flexiDatesTgr){alert(options.messaging.flexibleDatesMaxRooms);return false;}}}});