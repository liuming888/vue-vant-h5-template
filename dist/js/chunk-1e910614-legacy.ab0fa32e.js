(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e910614"],{"0f35":function(t,e,n){"use strict";n("b5aa");var o=n("2c46"),r=n("7cbd7"),i=n.n(r);e["a"]={data:function(){return{mx_copyBtn:null,mx_copyUrl:"bbb"}},mounted:function(){this.mx_copyBtn=new i.a(this.$refs.copy)},methods:{mx_copyLink:function(){this.mx_copyUrl="ceshi";var t=this,e=t.mx_copyBtn;e.on("success",function(){console.log("chenggongfuzhi"),t.$toast("Copy success !")}),e.on("error",function(){t.$toast("Copy the failure !")})},mx_shareMessenger:function(){var t=FBConfig.appId;console.log("appId: ",t);var e="https://liuming.mynatapp.cc/forBargain";window.location.href="fb-messenger://share/?link=".concat(e,"/&app_id=").concat(t)},mx_shareWhatsapp:function(){var t=this.shareInfo.shareTitle,e=encodeURIComponent("\n\n"+this.shareInfo.shareUrl);window.location.href="whatsapp://send?text="+encodeURIComponent(t)+e+"&via=lopscoop"},mx_shareLine:function(){var t=encodeURIComponent("https://liuming.mynatapp.cc/forBargain");window.location.href="line://msg/text/".concat(t)},mx_shareFacebook:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e="https://liuming.mynatapp.cc/forBargain?a=1",n=this.shareInfo.quote,t.next=4,window.$faceBookApi.shareFB(e,n);case 4:t.sent;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}}},5616:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return i});var o=n("007a");function r(t){var e=t.spu_id;return o["a"].post({url:"/api/v1/share/shareSpu",data:{spu_id:e}})}function i(t){var e=t.bargain_id;return o["a"].post({url:"/api/v1/share/shareBargain",data:{bargain_id:e}})}},"7cbd7":function(t,e,n){
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(1),a=f(i),c=n(3),u=f(c),l=n(4),s=f(l);function f(t){return t&&t.__esModule?t:{default:t}}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function d(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var y=function(t){function e(t,n){h(this,e);var o=p(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return d(e,t),r(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===o(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,s.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new a.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return m("action",t)}},{key:"defaultTarget",value:function(t){var e=m("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return m("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(u.default);function m(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=y},function(t,e,n){"use strict";var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(2),a=c(i);function c(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var l=function(){function t(e){u(this,t),this.resolveOptions(e),this.initSelection()}return r(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,a.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,a.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"===typeof t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=l},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}t.exports=n},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;for(o;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var o=n(5),r=n(6);function i(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return a(t,e,n);if(o.nodeList(t))return c(t,e,n);if(o.string(t))return u(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function c(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function u(t,e,n){return r(document.body,t,e,n)}t.exports=i},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},function(t,e,n){var o=n(7);function r(t,e,n,o,r){var i=a.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}function i(t,e,n,o,i){return"function"===typeof t.addEventListener?r.apply(null,arguments):"function"===typeof n?r.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return r(t,e,n,o,i)}))}function a(t,e,n,r){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&r.call(t,n)}}t.exports=i},function(t,e){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}function r(t,e){while(t&&t.nodeType!==n){if("function"===typeof t.matches&&t.matches(e))return t;t=t.parentNode}}t.exports=r}])})},"82db":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3NjEwRDRBNDMxRDExRTk5MTQ4RDhCMDA0MDI5QjMyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3NjEwRDRCNDMxRDExRTk5MTQ4RDhCMDA0MDI5QjMyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDc2MTBENDg0MzFEMTFFOTkxNDhEOEIwMDQwMjlCMzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDc2MTBENDk0MzFEMTFFOTkxNDhEOEIwMDQwMjlCMzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7TdPhqAAAHyElEQVR42uyd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"}}]);