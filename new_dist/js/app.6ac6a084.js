!function(e){function t(t){for(var o,c,i=t[0],s=t[1],u=t[2],l=0,f=[];l<i.length;l++)c=i[l],a[c]&&f.push(a[c][0]),a[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(d&&d(t);f.length;)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=a[e]=[t,o]});t.push(n[2]=o);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1b3f05e4":"f6ab6dcc","chunk-1d2a06ac":"77eaa59c","chunk-2593edbf":"fe147a3f","chunk-2c4b4bc0":"21031612","chunk-30a4caa4":"93aad835","chunk-422e7557":"4d8d724a","chunk-4cf0a22c":"14b4ee31","chunk-54e8a10f":"2bd97dc7","chunk-8eb96fcc":"dad424e9","chunk-648de34c":"6b50adc7","chunk-6496ffee":"a71053e0","chunk-67bffac6":"a1252a2e","chunk-7a68bfbd":"5b0443a2","chunk-7cb2b5fa":"561f37eb","chunk-81ecdbce":"25ae5b69","chunk-a128aad0":"207bb188","chunk-a7a1e29a":"5af30ae2","chunk-b41c6f58":"b58530ec","chunk-fe329c76":"7c5c7340","chunk-43118fc9":"52286460","chunk-53694866":"365d6a3c","chunk-54eae88a":"4719f4d9","chunk-e5abdc10":"450cb87d","chunk-0a67259e":"b1301f62","chunk-d6b1dc74":"85fbe486","chunk-b124237a":"43a4cf51","chunk-0a70394a":"b22320db","chunk-0aa76543":"b6062838","chunk-47470295":"cd9ddefe","chunk-3fd2c48e":"f841c1ef","chunk-4e6d906e":"b63ba22b","chunk-e098ff84":"63032681","chunk-de984c76":"750c6a1a"}[e]+".js"}(e),r=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");c.type=o,c.request=r,n[1](c)}a[e]=void 0}};var s=setTimeout(function(){r({type:"timeout",target:i})},12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw e};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=s;r.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){n("9f45"),e.exports=n("56d7")},"007a":function(e,t,n){"use strict";var o=n("2717"),a=(n("d0f8"),n("7f43")),r=n.n(a),c={getUrl(e){let t="";switch(e){case"mock":t="";case"development":break;case"dev":t="https://dev-ht-zdd-api.istarbuy.com/";break;case"test":t="https://pubtest-ht-zdd-api.istarbuy.com";break;case"newProduction":case"production":t="https://api.istarbuy.com"}return t}};const i=n("7bdb").Toast;let s="",u="",d=localStorage.getItem("userInfo");if(d){let e=JSON.parse(d);s=e.user_id,u=e.access_token}r.a.defaults.headers.common["User-Id"]=s,r.a.defaults.headers.common["Access-Token"]=u;var l=r.a.create();let f=c.getUrl("newProduction");l.defaults.baseURL=f,l.defaults.timeout=6e3,l.defaults.withCredentials=!0,l.interceptors.request.use(e=>(Vue.prototype.$curStore.commit("setLoaddingNum",1),Vue.prototype.$mainAppLoad||"none"==document.getElementById("mainApp").style.display||(document.getElementById("mainApp").style.display="none",Vue.prototype.$mainAppLoad=!0),e),e=>Promise.reject(e)),l.interceptors.response.use(e=>{Vue.prototype.$curStore.commit("setLoaddingNum",-1);try{if(0==e.data.code)return e.data;if(3!=e.data.code){if(1e3==e.data.code)return e.data;throw e.data}i({message:"please login again !",duration:1e3}),Vue.prototype.$curStore.commit("setUserInfo",{}),r.a.defaults.headers.common["User-Id"]="",r.a.defaults.headers.common["Access-Token"]="",localStorage.clear(),Vue.prototype.$curStore.commit("setLoginSelectShow",!0)}catch(e){if(e.code){if(i(e.msg),"-1"==e.code)return e}else i("The request failed. Please try again later!");return!1}},e=>(Vue.prototype.$curStore.commit("setLoaddingNum",-1),!1));const p={post(e){let t=e.url,n=e.data,a=e.config,r=void 0===a?{}:a;return l(Object(o.a)({method:"post",url:t,data:n},r)).then(e=>e).catch(e=>!1).finally(()=>{})},get(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l.get(e.url,{params:e.data}).then(e=>e)},request(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,n=void 0===t?"get":t,a=e.url,r=e.data,c=void 0===r?{}:r,i=e.params,s=void 0===i?{}:i,u=e.config,d=void 0===u?{}:u;return n=n.toLowerCase(),l(Object(o.a)({method:n,url:a,data:c,params:s},d)).then(e=>e).catch(e=>!1)}};t.a=p},"0742":function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,"#app{width:100vw;overflow:hidden}.loading-box{width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:12000;background:rgba(0,0,0,.5)}.loading-box .van-loading{position:absolute;left:0;right:0;top:0;bottom:0;margin:auto}",""])},"11d4":function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,".main-container[data-v-1b407b02]{width:100vw;height:100vh;box-sizing:border-box}",""])},"26bb":function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,'blockquote,body,button,dd,dl,dt,fieldset,h1,h2,h3,h4,h5,h6,hr,input,lengend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0;box-sizing:border-box}body,button,input,select,textarea{font-family:Helvetica,sans-serif,inherit;font-size:.12rem}h1{font-size:.24rem}h2{font-size:.21333rem}h3{font-size:.18667rem}h4,h5,h6{font-size:100%}address,cite,dfn,em,var{font-style:normal}code,kbd,pre,samp,tt{font-family:Courier New,Courier,monospace}small{font-size:.16rem}ol,ul{list-style:none}a{text-decoration:none}a:hover{text-decoration:underline}abbr[title],acronym[title]{border-bottom:1px dotted;cursor:help}q:after,q:before{content:""}legend{color:#000}fieldset,img{border:0}img{vertical-align:top}button,input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}hr{border:none;height:1px}html{overflow-y:scroll}.ellipsis{max-width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.clearfix{*zoom:1}.clearfix:after,.clearfix:before{display:table;line-height:0;content:""}.clearfix:after{clear:both}.left{float:left}.right{float:right}button,input,select,textarea{outline:none;border:0}textarea{resize:none}*{-webkit-overflow-scrolling:touch}',""])},3007:function(e,t,n){"use strict";n.d(t,"g",function(){return a}),n.d(t,"h",function(){return r}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return u}),n.d(t,"b",function(){return d}),n.d(t,"f",function(){return l}),n.d(t,"j",function(){return f}),n.d(t,"i",function(){return p});var o=n("007a");function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/login",data:e})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/refresh_token",data:e})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/addresses/deal_my_address ",data:e})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/addresses/get_my_address",data:e})}function s(){return o.a.post({url:"/api/v1/user/account/get_my_account"})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/account/get_my_friends",data:e})}function d(){return o.a.post({url:"/api/v1/tip/get_hero_list"})}function l(){return o.a.post({url:"/api/v1/user/get_my_new_rp"})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/telLogin",data:e})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/send",data:e})}},"42d6":function(e,t,n){var o=n("4999");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("85cb").default)("264060b3",o,!0,{sourceMap:!1,shadowMode:!1})},"43da":function(e,t,n){var o=n("11d4");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("85cb").default)("c9614472",o,!0,{sourceMap:!1,shadowMode:!1})},4999:function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,".content-container[data-v-70209f87]{width:100vw;height:100vh;overflow:hidden;overflow-y:scroll;box-sizing:border-box}",""])},"56d7":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"expiration",function(){return w}),n.d(o,"paymentCancellationPrompt",function(){return x}),n.d(o,"getQueryVariable",function(){return S}),n.d(o,"gaSend",function(){return _}),n.d(o,"deleteAllCookies",function(){return O}),n("7392");var a=n("e758"),r=(n("5d9b"),n("493a")),c=(n("a47e"),n("3d23")),i=n("cb06"),s=n("2717"),u=(n("6fdf"),n("cab9")),d=n("7f43"),l=n.n(d),f=n("5880"),p=n("f121"),h={},m=(n("bf1b"),n("17cc")),b={name:"zddMain",components:{"zdd-content":Object(m.a)(h,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content-container",attrs:{id:"contentContainer"}},[t("router-view")],1)},[],!1,null,"70209f87",null).exports,dialogBidPriceCompleted:e=>n.e("chunk-1b3f05e4").then(function(){var t=[n("aa07")];e.apply(null,t)}.bind(this)).catch(n.oe),dialogLoginSelect:e=>n.e("chunk-6496ffee").then(function(){var t=[n("c244")];e.apply(null,t)}.bind(this)).catch(n.oe),dialogNewGiftBag:e=>n.e("chunk-fe329c76").then(function(){var t=[n("3f73")];e.apply(null,t)}.bind(this)).catch(n.oe)},watch:{$route(e){localStorage.getItem("newUserInfo")&&"/"==this.$route.path&&this.$store.commit("setNewGiftBagShow",!0)}}},g=(n("90c5"),Object(m.a)(b,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main-container"},[t("zdd-content"),this.$store.state.dialogs.loginSelect.show?t("dialog-login-select"):this._e(),this.$store.state.dialogs.newGiftBag.show?t("dialog-new-gift-bag"):this._e()],1)},[],!1,null,"1b407b02",null).exports),v=n("3007"),y={name:"App",components:{[u.a.name]:u.a,"zdd-layout":g},computed:Object(s.a)({},Object(f.mapState)(["loaddingNum"])),created(){let e=localStorage.getItem("newUserInfo");if(e){this.$store.commit("setIsreFreshToken",!0);let t=JSON.parse(e);return this.$store.commit("setUserInfo",t),localStorage.setItem("userInfo",JSON.stringify(t)),l.a.defaults.headers.common["User-Id"]=t.user_id,void(l.a.defaults.headers.common["Access-Token"]=t.access_token)}this.initToken(),this.initFB()},methods:{initFB(){n("e47c"),window.fbAsyncInit=Object(i.a)(function*(){FB.init(p.a),FB.AppEvents.logPageView()})},initToken(){var e=this;return Object(i.a)(function*(){let t=localStorage.getItem("userInfo");if(t){let n=JSON.parse(t);l.a.defaults.headers.common["User-Id"]=n.user_id,l.a.defaults.headers.common["Access-Token"]=n.access_token;let o=yield Object(v.h)(JSON.parse(t));if(e.$store.commit("setIsreFreshToken",!0),o&&o.data){let t=o.data;e.$store.commit("setUserInfo",t),localStorage.setItem("userInfo",JSON.stringify(t)),l.a.defaults.headers.common["User-Id"]=t.user_id,l.a.defaults.headers.common["Access-Token"]=t.access_token}}})()}}},k=(n("5c0b"),n("5754"),Object(m.a)(y,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.loaddingNum>0,expression:"loaddingNum>0"}],staticClass:"loading-box",on:{click:function(e){e.stopPropagation()}}},[t("van-loading",{attrs:{color:"#D30C05"}})],1),t("zdd-layout")],1)},[],!1,null,null,null).exports);function w(e){if(isNaN(e)||e<0)return!1;let t=e,n=Math.floor(t/36e5);n=n<10?"0"+n:n;let o=Math.floor((t-36e5*n)/6e4),a=~~((t-36e5*n-6e4*(o=o<10?"0"+o:o))/1e3);return a=a<10?"0"+a:a,this.expirationDat={h:n,p:o,m:a},{h:n,p:o,m:a}}function x(){setTimeout(()=>{(0,n("7bdb").Toast)({message:'Payment has been cancelled, you can re-initiate payment in "My Order" !',duration:2e3})},500)}function S(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var o=t[n].split("=");if(o[0]==e)return o[1]}return!1}function _(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};window.ga&&ga("send",Object(s.a)({},e,{hitType:e.hitType||"event"}))}function O(){for(var e=document.cookie.split(";"),t=0;t<e.length;t++){var n=e[t],o=n.indexOf("="),a=o>-1?n.substr(0,o):n;document.cookie=a+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}}n("aaa4"),n("ea65");const I=new VueRouter({mode:"history",base:"/",routes:[{path:"*",redirect:"/"},{path:"/",name:"首页",component:e=>n.e("chunk-422e7557").then(function(){var t=[n("77b8")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/bargain",name:"砍价详情页",component:e=>n.e("chunk-648de34c").then(function(){var t=[n("5b3c")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/isBargainingList",name:"更多砍价内页",component:e=>n.e("chunk-a7a1e29a").then(function(){var t=[n("17ef")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/forBargain",name:"帮砍页面",component:e=>n.e("chunk-30a4caa4").then(function(){var t=[n("db1b")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/purchase",name:"支付页面",component:e=>Promise.all([n.e("chunk-54e8a10f"),n.e("chunk-8eb96fcc")]).then(function(){var t=[n("5918")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/shippingAddress",name:"（已有）收货地址页",component:e=>n.e("chunk-54e8a10f").then(function(){var t=[n("f390")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/purchase/paymentSuccess",name:"支付成功页面",component:e=>n.e("chunk-67bffac6").then(function(){var t=[n("f3c9")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my",name:"我的账户页面",component:e=>n.e("chunk-81ecdbce").then(function(){var t=[n("b31c")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/withdrawRelated",name:"提现页面",component:e=>n.e("chunk-4cf0a22c").then(function(){var t=[n("7a57")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myFriends",name:"我的好友",component:e=>n.e("chunk-1d2a06ac").then(function(){var t=[n("67e5")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myOrder",name:"我的订单",component:e=>n.e("chunk-b41c6f58").then(function(){var t=[n("990b")];e.apply(null,t)}.bind(this)).catch(n.oe),redirect:"/my/myOrder/semua",children:[{path:"/my/myOrder/semua",name:"所有订单",component:e=>n.e("chunk-a128aad0").then(function(){var t=[n("a1a5")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myOrder/pendingPayment",name:"待完成订单",component:e=>n.e("chunk-2593edbf").then(function(){var t=[n("4e72")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myOrder/completed",name:"已完成订单",component:e=>n.e("chunk-7cb2b5fa").then(function(){var t=[n("6bab")];e.apply(null,t)}.bind(this)).catch(n.oe)}]},{path:"/my/revenueDetails",name:"收益明细",component:e=>n.e("chunk-7a68bfbd").then(function(){var t=[n("1066")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/Tutorial",name:"新手教程",component:e=>n.e("chunk-2c4b4bc0").then(function(){var t=[n("e717")];e.apply(null,t)}.bind(this)).catch(n.oe)}]});I.beforeEach((e,t,n)=>{Vue.prototype.$curStore.commit("setLoaddingNum",1),localStorage.getItem("userInfo")&&!Vue.prototype.$curStore.state.isreFreshToken?Vue.prototype.$curStore.watch(function(e){return e.isreFreshToken},function(){n()}):n()}),I.afterEach(e=>{Vue.prototype.$curStore.commit("setLoaddingNum",-1);const t=window.location,n=t.pathname,o=t.search;_({eventCategory:e.name,eventAction:"页面展示",hitType:"pageview",page:n+o})});var B=I,T={setLoaddingNum(e,t){e.loaddingNum+=t},setUserInfo(e,t){e.userInfo=t},setIsreFreshToken(e,t){e.isreFreshToken=t},setLoginSelectShow(e,t){e.dialogs.loginSelect.show=t},setLoginJumpUrl(e,t){e.dialogs.loginSelect.jumpUrl=t},setGoodsList(e,t){e.goodsList=t},setNewGiftBagShow(e,t){e.dialogs.newGiftBag.show=t}},j=new Vuex.Store({state:{loaddingNum:0,userInfo:{},isreFreshToken:!1,goodsList:[],dialogs:{loginSelect:{show:!1,jumpUrl:""},bidPriceCompleted:{show:!1},newGiftBag:{show:!1}}},mutations:T});Vue.use(c.a),Vue.use(r.a),Vue.use(a.a),Vue.prototype.$curStore=j,Vue.prototype.$curRouter=B,Vue.prototype.$util=o,Vue.prototype.$gaSend=_,Vue.config.productionTip=!1,new Vue({router:B,store:j,render:e=>e(k)}).$mount("#app")},5754:function(e,t,n){"use strict";var o=n("587c");n.n(o).a},"587c":function(e,t,n){var o=n("26bb");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("85cb").default)("44da1b77",o,!0,{sourceMap:!1,shadowMode:!1})},5880:function(e,t){e.exports=Vuex},"5c0b":function(e,t,n){"use strict";var o=n("dfb6");n.n(o).a},"8bbf":function(e,t){e.exports=Vue},"90c5":function(e,t,n){"use strict";var o=n("43da");n.n(o).a},bf1b:function(e,t,n){"use strict";var o=n("42d6");n.n(o).a},dfb6:function(e,t,n){var o=n("0742");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("85cb").default)("3587c08c",o,!0,{sourceMap:!1,shadowMode:!1})},e47c:function(e,t,n){"use strict";n.r(t);var o=n("2717");!function(){function e(){try{e=document,t="script",n="facebook-jssdk",a=e.getElementsByTagName(t)[0],e.getElementById(n)||((o=e.createElement(t)).id=n,o.src="https://connect.facebook.net/en_US/sdk.js",a.parentNode.insertBefore(o,a))}catch(e){}var e,t,n,o,a}e.prototype.loginFB=function(){return new Promise(e=>{FB.login(function(t){"connected"===t.status?FB.api("/me",function(n){var a=Object(o.a)({},t,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(t){var n=t.data.url;a=Object(o.a)({},a,{pic_square:n}),e(a)})}):e(!1)})})},e.prototype.checkFBLoginState=function(){var e=this;return new Promise((t,n)=>{FB.getLoginStatus(function(o){e.statusChangeCallback(o).then(e=>{t(e)}).catch(e=>{n(!1)})})})},e.prototype.statusChangeCallback=function(e){return"connected"===e.status?this.getUserInfo(e):Promise.resolve(!1)},e.prototype.getUserInfo=function(e){return new Promise(t=>{FB.api("/me",function(n){var a=Object(o.a)({},e,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(e){var n=e.data.url;a=Object(o.a)({},a,{pic_square:n}),t(a)})})})},e.prototype.logoutFB=function(){return new Promise(function(e){FB.getLoginStatus(function(t){"connected"===t.status?FB.logout(function(t){e(!0)}):e(!1)})})},e.prototype.shareFB=function(e,t){return new Promise(n=>{FB.ui({method:"share",href:e,quote:t},function(e){e&&!e.error_message?n(e):n(!1)})})},window.$faceBookApi=new e}()},f121:function(e,t,n){"use strict";n.d(t,"a",function(){return a});let o="";const a={appId:o="856321351386952",cookie:!0,xfbml:!0,version:"v3.2"}}});