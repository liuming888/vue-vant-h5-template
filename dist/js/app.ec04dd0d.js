!function(e){function t(t){for(var o,c,i=t[0],u=t[1],s=t[2],d=0,p=[];d<i.length;d++)c=i[d],a[c]&&p.push(a[c][0]),a[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(l&&l(t);p.length;)p.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=a[e]=[t,o]});t.push(n[2]=o);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1b3f05e4":"f6ab6dcc","chunk-1d2a06ac":"77eaa59c","chunk-2593edbf":"fe147a3f","chunk-30a4caa4":"a0b081fb","chunk-3f182a88":"16bf3f2f","chunk-44dff81b":"fa0f7244","chunk-45696ca1":"00d91fe7","chunk-464e0bb0":"b9ab7e2e","chunk-4873e652":"f58aa81b","chunk-4cf0a22c":"14b4ee31","chunk-54e8a10f":"2bd97dc7","chunk-2d3318ff":"40d44c8d","chunk-6496ffee":"abcc68c0","chunk-7a68bfbd":"5b0443a2","chunk-7cb2b5fa":"561f37eb","chunk-80a8909e":"559cde60","chunk-81ecdbce":"b0882b30","chunk-a128aad0":"207bb188","chunk-fe329c76":"7c5c7340","chunk-43118fc9":"52286460","chunk-54eae88a":"4719f4d9","chunk-67b45a05":"0ce39f52","chunk-e5abdc10":"450cb87d","chunk-0a67259e":"476c848a","chunk-6ceef62d":"772eed5b","chunk-0a70394a":"b22320db","chunk-0aa76543":"b6062838","chunk-47470295":"bac492e7","chunk-c0393e18":"85f36f3e","chunk-e098ff84":"63032681","chunk-4e6d906e":"b63ba22b","chunk-de984c76":"750c6a1a"}[e]+".js"}(e),r=function(t){i.onerror=i.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");c.type=o,c.request=r,n[1](c)}a[e]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:i})},12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw e};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;r.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){n("9f45"),e.exports=n("56d7")},"007a":function(e,t,n){"use strict";var o=n("2717"),a=(n("d0f8"),n("7f43")),r=n.n(a),c={getUrl(e){let t="";switch(e){case"mock":t="";case"development":break;case"dev":t="https://dev-ht-zdd-api.istarbuy.com/";break;case"test":t="https://pubtest-ht-zdd-api.istarbuy.com";break;case"newProduction":case"production":t="https://api.istarbuy.com"}return t}};let i="",u="",s=localStorage.getItem("userInfo");if(s){let e=JSON.parse(s);i=e.user_id,u=e.access_token}r.a.defaults.headers.common["User-Id"]=i,r.a.defaults.headers.common["Access-Token"]=u;var l=r.a.create();let d=c.getUrl("production");l.defaults.baseURL=d,l.defaults.timeout=6e3,l.defaults.withCredentials=!0,Vue.prototype.$loaddingNum=0,l.interceptors.request.use(e=>(Vue.prototype.$loaddingNum++,Vue.prototype.$toast.loading({mask:!0,duration:0,forbidClick:!0}),Vue.prototype.$mainAppLoad||"none"==document.getElementById("mainApp").style.display||(document.getElementById("mainApp").style.display="none",Vue.prototype.$mainAppLoad=!0),e),e=>Promise.reject(e)),l.interceptors.response.use(e=>{Vue.prototype.$loaddingNum--,Vue.prototype.$loaddingNum<=0&&Vue.prototype.$toast.clear();try{if(0==e.data.code)return e.data;if(3!=e.data.code)throw e.data;Vue.prototype.$toast("please log in first !"),Vue.prototype.$curStore.commit("setUserInfo",{}),r.a.defaults.headers.common["User-Id"]="",r.a.defaults.headers.common["Access-Token"]="",localStorage.clear(),Vue.prototype.$curStore.commit("setLoginSelectShow",!0)}catch(e){if(e.code){if(Vue.prototype.$toast(e.msg),"-1"==e.code)return e.code}else Vue.prototype.$toast("The request failed. Please try again later!");return!1}},e=>(Vue.prototype.$loaddingNum--,Vue.prototype.$loaddingNum<=0&&Vue.prototype.$toast.clear(),!1));const p={post(e){let t=e.url,n=e.data,a=e.config,r=void 0===a?{}:a;return l(Object(o.a)({method:"post",url:t,data:n},r)).then(e=>e).catch(e=>!1).finally(()=>{})},get(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l.get(e.url,{params:e.data}).then(e=>e)},request(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,n=void 0===t?"get":t,a=e.url,r=e.data,c=void 0===r?{}:r,i=e.params,u=void 0===i?{}:i,s=e.config,d=void 0===s?{}:s;return n=n.toLowerCase(),l(Object(o.a)({method:n,url:a,data:c,params:u},d)).then(e=>e).catch(e=>!1)}};t.a=p},"0742":function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,"#app{width:100vw;overflow:hidden}",""])},"11d4":function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,".main-container[data-v-1b407b02]{width:100vw;height:100vh;box-sizing:border-box}",""])},"26bb":function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,'blockquote,body,button,dd,dl,dt,fieldset,h1,h2,h3,h4,h5,h6,hr,input,lengend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0;box-sizing:border-box}body,button,input,select,textarea{font-family:Helvetica,sans-serif,inherit;font-size:.12rem}h1{font-size:.24rem}h2{font-size:.21333rem}h3{font-size:.18667rem}h4,h5,h6{font-size:100%}address,cite,dfn,em,var{font-style:normal}code,kbd,pre,samp,tt{font-family:Courier New,Courier,monospace}small{font-size:.16rem}ol,ul{list-style:none}a{text-decoration:none}a:hover{text-decoration:underline}abbr[title],acronym[title]{border-bottom:1px dotted;cursor:help}q:after,q:before{content:""}legend{color:#000}fieldset,img{border:0}img{vertical-align:top}button,input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}hr{border:none;height:1px}html{overflow-y:scroll}.ellipsis{max-width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.clearfix{*zoom:1}.clearfix:after,.clearfix:before{display:table;line-height:0;content:""}.clearfix:after{clear:both}.left{float:left}.right{float:right}button,input,select,textarea{outline:none;border:0}textarea{resize:none}*{-webkit-overflow-scrolling:touch}',""])},3007:function(e,t,n){"use strict";n.d(t,"g",function(){return a}),n.d(t,"h",function(){return r}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return u}),n.d(t,"e",function(){return s}),n.d(t,"b",function(){return l}),n.d(t,"f",function(){return d}),n.d(t,"j",function(){return p}),n.d(t,"i",function(){return f});var o=n("007a");function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/login",data:e})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/refresh_token",data:e})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/addresses/deal_my_address ",data:e})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/addresses/get_my_address",data:e})}function u(){return o.a.post({url:"/api/v1/user/account/get_my_account"})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/account/get_my_friends",data:e})}function l(){return o.a.post({url:"/api/v1/tip/get_hero_list"})}function d(){return o.a.post({url:"/api/v1/user/get_my_new_rp"})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/telLogin",data:e})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/send",data:e})}},"42d6":function(e,t,n){var o=n("4999");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("85cb").default)("264060b3",o,!0,{sourceMap:!1,shadowMode:!1})},"43da":function(e,t,n){var o=n("11d4");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("85cb").default)("c9614472",o,!0,{sourceMap:!1,shadowMode:!1})},4999:function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,".content-container[data-v-70209f87]{width:100vw;height:100vh;overflow:hidden;overflow-y:scroll;box-sizing:border-box}",""])},"56d7":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"expiration",function(){return v}),n.d(o,"paymentCancellationPrompt",function(){return k}),n.d(o,"getQueryVariable",function(){return w}),n.d(o,"gaSend",function(){return x}),n.d(o,"deleteAllCookies",function(){return S}),n("7392");var a=n("e758"),r=(n("5d9b"),n("493a")),c=(n("a47e"),n("3d23")),i=n("cb06"),u=n("7f43"),s=n.n(u),l=n("f121"),d={},p=(n("bf1b"),n("17cc")),f={name:"zddMain",components:{"zdd-content":Object(p.a)(d,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content-container",attrs:{id:"contentContainer"}},[t("router-view")],1)},[],!1,null,"70209f87",null).exports,dialogBidPriceCompleted:e=>n.e("chunk-1b3f05e4").then(function(){var t=[n("aa07")];e.apply(null,t)}.bind(this)).catch(n.oe),dialogLoginSelect:e=>n.e("chunk-6496ffee").then(function(){var t=[n("c244")];e.apply(null,t)}.bind(this)).catch(n.oe),dialogNewGiftBag:e=>n.e("chunk-fe329c76").then(function(){var t=[n("3f73")];e.apply(null,t)}.bind(this)).catch(n.oe)},watch:{$route(e){localStorage.getItem("newUserInfo")&&"/"==this.$route.path&&this.$store.commit("setNewGiftBagShow",!0)}}},h=(n("90c5"),Object(p.a)(f,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main-container"},[t("zdd-content"),this.$store.state.dialogs.loginSelect.show?t("dialog-login-select"):this._e(),this.$store.state.dialogs.newGiftBag.show?t("dialog-new-gift-bag"):this._e()],1)},[],!1,null,"1b407b02",null).exports),m=n("3007"),b={name:"App",components:{"zdd-layout":h},created(){let e=localStorage.getItem("newUserInfo");if(e){this.$store.commit("setIsreFreshToken",!0);let t=JSON.parse(e);return this.$store.commit("setUserInfo",t),localStorage.setItem("userInfo",JSON.stringify(t)),s.a.defaults.headers.common["User-Id"]=t.user_id,void(s.a.defaults.headers.common["Access-Token"]=t.access_token)}this.initToken()},methods:{initFB(){n("e47c"),window.fbAsyncInit=Object(i.a)(function*(){FB.init(l.a),FB.AppEvents.logPageView()})},initToken(){var e=this;return Object(i.a)(function*(){let t=localStorage.getItem("userInfo");if(t){let n=JSON.parse(t);s.a.defaults.headers.common["User-Id"]=n.user_id,s.a.defaults.headers.common["Access-Token"]=n.access_token;let o=yield Object(m.h)(JSON.parse(t));if(e.$store.commit("setIsreFreshToken",!0),o&&o.data){let t=o.data;e.$store.commit("setUserInfo",t),localStorage.setItem("userInfo",JSON.stringify(t)),s.a.defaults.headers.common["User-Id"]=t.user_id,s.a.defaults.headers.common["Access-Token"]=t.access_token}}})()}}},g=(n("5c0b"),n("5754"),Object(p.a)(b,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("zdd-layout")],1)},[],!1,null,null,null).exports),y=n("2717");function v(e){if(isNaN(e)||e<0)return!1;let t=e,n=Math.floor(t/36e5);n=n<10?"0"+n:n;let o=Math.floor((t-36e5*n)/6e4),a=~~((t-36e5*n-6e4*(o=o<10?"0"+o:o))/1e3);return a=a<10?"0"+a:a,this.expirationDat={h:n,p:o,m:a},{h:n,p:o,m:a}}function k(){setTimeout(()=>{(0,n("7bdb").Toast)({message:'Payment has been cancelled, you can re-initiate payment in "My Order" !',duration:2e3})},500)}function w(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var o=t[n].split("=");if(o[0]==e)return o[1]}return!1}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};window.ga&&ga("send",Object(y.a)({},e,{hitType:e.hitType||"event"}))}function S(){for(var e=document.cookie.split(";"),t=0;t<e.length;t++){var n=e[t],o=n.indexOf("="),a=o>-1?n.substr(0,o):n;document.cookie=a+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}}n("ea65"),n("aaa4");const _=new VueRouter({mode:"history",base:"/",routes:[{path:"*",redirect:"/"},{path:"/",name:"首页",component:e=>n.e("chunk-464e0bb0").then(function(){var t=[n("77b8")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/bargain",name:"砍价详情页",component:e=>n.e("chunk-4873e652").then(function(){var t=[n("5b3c")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/isBargainingList",name:"更多砍价内页",component:e=>n.e("chunk-44dff81b").then(function(){var t=[n("17ef")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/forBargain",name:"帮砍页面",component:e=>n.e("chunk-30a4caa4").then(function(){var t=[n("db1b")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/purchase",name:"支付页面",component:e=>Promise.all([n.e("chunk-54e8a10f"),n.e("chunk-2d3318ff")]).then(function(){var t=[n("5918")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/shippingAddress",name:"（已有）收货地址页",component:e=>n.e("chunk-54e8a10f").then(function(){var t=[n("f390")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/purchase/paymentSuccess",name:"支付成功页面",component:e=>n.e("chunk-80a8909e").then(function(){var t=[n("f3c9")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my",name:"我的账户页面",component:e=>n.e("chunk-81ecdbce").then(function(){var t=[n("b31c")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/withdrawRelated",name:"提现页面",component:e=>n.e("chunk-4cf0a22c").then(function(){var t=[n("7a57")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myFriends",name:"我的好友",component:e=>n.e("chunk-1d2a06ac").then(function(){var t=[n("67e5")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myOrder",name:"我的订单",component:e=>n.e("chunk-3f182a88").then(function(){var t=[n("990b")];e.apply(null,t)}.bind(this)).catch(n.oe),redirect:"/my/myOrder/semua",children:[{path:"/my/myOrder/semua",name:"所有订单",component:e=>n.e("chunk-a128aad0").then(function(){var t=[n("a1a5")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myOrder/pendingPayment",name:"待完成订单",component:e=>n.e("chunk-2593edbf").then(function(){var t=[n("4e72")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myOrder/completed",name:"已完成订单",component:e=>n.e("chunk-7cb2b5fa").then(function(){var t=[n("6bab")];e.apply(null,t)}.bind(this)).catch(n.oe)}]},{path:"/my/revenueDetails",name:"收益明细",component:e=>n.e("chunk-7a68bfbd").then(function(){var t=[n("1066")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/Tutorial",name:"新手教程",component:e=>n.e("chunk-45696ca1").then(function(){var t=[n("e717")];e.apply(null,t)}.bind(this)).catch(n.oe)}]});_.beforeEach((e,t,n)=>{localStorage.getItem("userInfo")&&!Vue.prototype.$curStore.state.isreFreshToken?Vue.prototype.$curStore.watch(function(e){return e.isreFreshToken},function(){n()}):n()});const $=["/","/bargain","/purchase","/my","/purchase/paymentSuccess","/withdrawRelated","/isBargainingList"];_.afterEach(e=>{const t=e.path;$.includes(t)&&x({eventCategory:e.name,eventAction:"页面展示",hitType:"pageview",page:window.location.pathname})});var I=_,O={setUserInfo(e,t){e.userInfo=t},setIsreFreshToken(e,t){e.isreFreshToken=t},setLoginSelectShow(e,t){e.dialogs.loginSelect.show=t},setLoginJumpUrl(e,t){e.dialogs.loginSelect.jumpUrl=t},setGoodsList(e,t){e.goodsList=t},setNewGiftBagShow(e,t){e.dialogs.newGiftBag.show=t}},B=new Vuex.Store({state:{userInfo:{},isreFreshToken:!1,goodsList:[],dialogs:{loginSelect:{show:!1,jumpUrl:""},bidPriceCompleted:{show:!1},newGiftBag:{show:!1}}},mutations:O});Vue.use(c.a),Vue.use(r.a),Vue.use(a.a),Vue.prototype.$curStore=B,Vue.prototype.$curRouter=I,Vue.prototype.$util=o,Vue.prototype.$gaSend=x,Vue.config.productionTip=!1,new Vue({router:I,store:B,render:e=>e(g)}).$mount("#app")},5754:function(e,t,n){"use strict";var o=n("587c");n.n(o).a},"587c":function(e,t,n){var o=n("26bb");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("85cb").default)("44da1b77",o,!0,{sourceMap:!1,shadowMode:!1})},"5c0b":function(e,t,n){"use strict";var o=n("dfb6");n.n(o).a},"8bbf":function(e,t){e.exports=Vue},"90c5":function(e,t,n){"use strict";var o=n("43da");n.n(o).a},bf1b:function(e,t,n){"use strict";var o=n("42d6");n.n(o).a},dfb6:function(e,t,n){var o=n("0742");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("85cb").default)("3587c08c",o,!0,{sourceMap:!1,shadowMode:!1})},e47c:function(e,t,n){"use strict";n.r(t);var o=n("2717");!function(){function e(){try{e=document,t="script",n="facebook-jssdk",a=e.getElementsByTagName(t)[0],e.getElementById(n)||((o=e.createElement(t)).id=n,o.src="https://connect.facebook.net/en_US/sdk.js",a.parentNode.insertBefore(o,a))}catch(e){}var e,t,n,o,a}e.prototype.loginFB=function(){return new Promise(e=>{FB.login(function(t){"connected"===t.status?FB.api("/me",function(n){var a=Object(o.a)({},t,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(t){var n=t.data.url;a=Object(o.a)({},a,{pic_square:n}),e(a)})}):e(!1)})})},e.prototype.checkFBLoginState=function(){var e=this;return new Promise((t,n)=>{FB.getLoginStatus(function(o){e.statusChangeCallback(o).then(e=>{t(e)}).catch(e=>{n(!1)})})})},e.prototype.statusChangeCallback=function(e){return"connected"===e.status?this.getUserInfo(e):Promise.resolve(!1)},e.prototype.getUserInfo=function(e){return new Promise(t=>{FB.api("/me",function(n){var a=Object(o.a)({},e,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(e){var n=e.data.url;a=Object(o.a)({},a,{pic_square:n}),t(a)})})})},e.prototype.logoutFB=function(){return new Promise(function(e){FB.getLoginStatus(function(t){"connected"===t.status?FB.logout(function(t){e(!0)}):e(!1)})})},e.prototype.shareFB=function(e,t){return new Promise(n=>{FB.ui({method:"share",href:e,quote:t},function(e){e&&!e.error_message?n(e):n(!1)})})},window.$faceBookApi=new e}()},f121:function(e,t,n){"use strict";n.d(t,"a",function(){return a});let o="";const a={appId:o="2292102501067089",cookie:!0,xfbml:!0,version:"v3.2"}}});