!function(e){function t(t){for(var o,i,c=t[0],u=t[1],s=t[2],l=0,p=[];l<c.length;l++)i=c[l],a[i]&&p.push(a[i][0]),a[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(d&&d(t);p.length;)p.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=a[e]=[t,o]});t.push(n[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0bbc3337":"e4320a78","chunk-2a35bb79":"230e5b54","chunk-2d8a52f0":"daeb304d","chunk-2fa40be7":"5b0d73c7","chunk-383506b9":"8da25b4a","chunk-3c40ac6a":"894ec8b2","chunk-4a246c40":"e7c464ba","chunk-50dd779a":"f2d6dab5","chunk-5d9821a6":"68ac0fbd","chunk-5fe63e86":"da843050","chunk-64dd6dbc":"a24ebbe3","chunk-6c0f721d":"37fdab76","chunk-74b04db6":"21b73b36","chunk-784d4edd":"83c42118","chunk-7d45793f":"baa9f584","chunk-a43a85ec":"e7d9505b","chunk-afdb48da":"0457bb24","chunk-d61ed930":"ca308884","chunk-d78ac40e":"e6adc7a9","chunk-2a0fc25c":"8c79e5a6","chunk-4b3f41ec":"772a4f37","chunk-77804c87":"366c8ef5","chunk-d70f099e":"54f3e66a","chunk-55b2d5b5":"eb4b991d","chunk-e6619502":"1dc430b7","chunk-787ef948":"d2c41f47","chunk-cbe6b3f4":"be7782e3","chunk-7698295d":"dea97066","chunk-8aa8dcca":"50cd3457","chunk-d8890d28":"ea88e0d2","chunk-fbeb061e":"e250d94c","chunk-bfe4a5ce":"a33a0deb"}[e]+".js"}(e),r=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,n[1](i)}a[e]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw e};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=u;r.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){n("db4d"),e.exports=n("56d7")},"007a":function(e,t,n){"use strict";var o=n("be94"),a=(n("097d"),n("bc3a")),r=n.n(a),i={getUrl(e){let t="";switch(e){case"mock":t="";case"development":break;case"dev":t="https://dev-ht-zdd-api.istarbuy.com/";break;case"test":t="https://pubtest-ht-zdd-api.istarbuy.com";break;case"newProduction":case"production":t="https://api.istarbuy.com"}return t}};const c=n("b970").Toast;let u="",s="",d=localStorage.getItem("userInfo");if(d){let e=JSON.parse(d);u=e.user_id,s=e.access_token}r.a.defaults.headers.common["User-Id"]=u,r.a.defaults.headers.common["Access-Token"]=s;var l=r.a.create();let p=i.getUrl("newProduction");l.defaults.baseURL=p,l.defaults.timeout=6e3,l.defaults.withCredentials=!0,Vue.prototype.$loaddingNum=0,l.interceptors.request.use(e=>(Vue.prototype.$loaddingNum++,Vue.prototype.$toast.loading({mask:!0,duration:0,forbidClick:!0}),Vue.prototype.$mainAppLoad||"none"==document.getElementById("mainApp").style.display||(document.getElementById("mainApp").style.display="none",Vue.prototype.$mainAppLoad=!0),e),e=>Promise.reject(e)),l.interceptors.response.use(e=>{Vue.prototype.$loaddingNum--,Vue.prototype.$loaddingNum<=0&&Vue.prototype.$toast.clear();try{if(0==e.data.code)return e.data;if(3!=e.data.code){if(1e3==e.data.code)return e.data;throw e.data}c({message:"please login again !",duration:1e3}),Vue.prototype.$curStore.commit("setUserInfo",{}),r.a.defaults.headers.common["User-Id"]="",r.a.defaults.headers.common["Access-Token"]="",localStorage.clear(),Vue.prototype.$curStore.commit("setLoginSelectShow",!0)}catch(e){if(e.code){if(c(e.msg),"-1"==e.code)return e}else c("The request failed. Please try again later!");return!1}},e=>(Vue.prototype.$loaddingNum--,Vue.prototype.$loaddingNum<=0&&Vue.prototype.$toast.clear(),!1));const h={post(e){let t=e.url,n=e.data,a=e.config,r=void 0===a?{}:a;return l(Object(o.a)({method:"post",url:t,data:n},r)).then(e=>e).catch(e=>!1).finally(()=>{})},get(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l.get(e.url,{params:e.data}).then(e=>e)},request(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,n=void 0===t?"get":t,a=e.url,r=e.data,i=void 0===r?{}:r,c=e.params,u=void 0===c?{}:c,s=e.config,d=void 0===s?{}:s;return n=n.toLowerCase(),l(Object(o.a)({method:n,url:a,data:i,params:u},d)).then(e=>e).catch(e=>!1)}};t.a=h},1724:function(e,t,n){(e.exports=n("2350")(!1)).push([e.i,".content-container[data-v-70209f87]{width:100vw;height:100vh;overflow:hidden;overflow-y:scroll;box-sizing:border-box}",""])},3007:function(e,t,n){"use strict";n.d(t,"g",function(){return a}),n.d(t,"h",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return u}),n.d(t,"e",function(){return s}),n.d(t,"b",function(){return d}),n.d(t,"f",function(){return l}),n.d(t,"j",function(){return p}),n.d(t,"i",function(){return h});var o=n("007a");function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/login",data:e})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/refresh_token",data:e})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/addresses/deal_my_address ",data:e})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/addresses/get_my_address",data:e})}function u(){return o.a.post({url:"/api/v1/user/account/get_my_account"})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/account/get_my_friends",data:e})}function d(){return o.a.post({url:"/api/v1/tip/get_hero_list"})}function l(){return o.a.post({url:"/api/v1/user/get_my_new_rp"})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/telLogin",data:e})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/send",data:e})}},"56d7":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"expiration",function(){return y}),n.d(o,"paymentCancellationPrompt",function(){return k}),n.d(o,"getQueryVariable",function(){return w}),n.d(o,"gaSend",function(){return x}),n.d(o,"deleteAllCookies",function(){return S}),n("66cf");var a=n("343b"),r=(n("8a58"),n("e41f")),i=(n("e7e5"),n("d399")),c=n("1da1"),u=n("bc3a"),s=n.n(u),d=n("f121"),l={},p=(n("bf1b"),n("2877")),h={name:"zddMain",components:{"zdd-content":Object(p.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content-container",attrs:{id:"contentContainer"}},[t("router-view")],1)},[],!1,null,"70209f87",null).exports,dialogBidPriceCompleted:e=>n.e("chunk-383506b9").then(function(){var t=[n("aa07")];e.apply(null,t)}.bind(this)).catch(n.oe),dialogLoginSelect:e=>n.e("chunk-3c40ac6a").then(function(){var t=[n("c244")];e.apply(null,t)}.bind(this)).catch(n.oe),dialogNewGiftBag:e=>n.e("chunk-74b04db6").then(function(){var t=[n("3f73")];e.apply(null,t)}.bind(this)).catch(n.oe)},watch:{$route(e){localStorage.getItem("newUserInfo")&&"/"==this.$route.path&&this.$store.commit("setNewGiftBagShow",!0)}}},f=(n("90c5"),Object(p.a)(h,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main-container"},[t("zdd-content"),this.$store.state.dialogs.loginSelect.show?t("dialog-login-select"):this._e(),this.$store.state.dialogs.newGiftBag.show?t("dialog-new-gift-bag"):this._e()],1)},[],!1,null,"1b407b02",null).exports),m=n("3007"),b={name:"App",components:{"zdd-layout":f},created(){let e=localStorage.getItem("newUserInfo");if(e){this.$store.commit("setIsreFreshToken",!0);let t=JSON.parse(e);return this.$store.commit("setUserInfo",t),localStorage.setItem("userInfo",JSON.stringify(t)),s.a.defaults.headers.common["User-Id"]=t.user_id,void(s.a.defaults.headers.common["Access-Token"]=t.access_token)}this.initToken(),this.initFB()},methods:{initFB(){n("e47c"),window.fbAsyncInit=Object(c.a)(function*(){FB.init(d.a),FB.AppEvents.logPageView()})},initToken(){var e=this;return Object(c.a)(function*(){let t=localStorage.getItem("userInfo");if(t){let n=JSON.parse(t);s.a.defaults.headers.common["User-Id"]=n.user_id,s.a.defaults.headers.common["Access-Token"]=n.access_token;let o=yield Object(m.h)(JSON.parse(t));if(e.$store.commit("setIsreFreshToken",!0),o&&o.data){let t=o.data;e.$store.commit("setUserInfo",t),localStorage.setItem("userInfo",JSON.stringify(t)),s.a.defaults.headers.common["User-Id"]=t.user_id,s.a.defaults.headers.common["Access-Token"]=t.access_token}}})()}}},g=(n("5c0b"),n("5754"),Object(p.a)(b,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("zdd-layout")],1)},[],!1,null,null,null).exports),v=n("be94");function y(e){if(isNaN(e)||e<0)return!1;let t=e,n=Math.floor(t/36e5);n=n<10?"0"+n:n;let o=Math.floor((t-36e5*n)/6e4),a=~~((t-36e5*n-6e4*(o=o<10?"0"+o:o))/1e3);return a=a<10?"0"+a:a,this.expirationDat={h:n,p:o,m:a},{h:n,p:o,m:a}}function k(){setTimeout(()=>{(0,n("b970").Toast)({message:'Payment has been cancelled, you can re-initiate payment in "My Order" !',duration:2e3})},500)}function w(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var o=t[n].split("=");if(o[0]==e)return o[1]}return!1}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};window.ga&&ga("send",Object(v.a)({},e,{hitType:e.hitType||"event"}))}function S(){for(var e=document.cookie.split(";"),t=0;t<e.length;t++){var n=e[t],o=n.indexOf("="),a=o>-1?n.substr(0,o):n;document.cookie=a+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}}n("28a5"),n("386d");const _=new VueRouter({mode:"history",base:"/",routes:[{path:"*",redirect:"/"},{path:"/",name:"首页",component:e=>n.e("chunk-5fe63e86").then(function(){var t=[n("77b8")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/bargain",name:"砍价详情页",component:e=>n.e("chunk-0bbc3337").then(function(){var t=[n("5b3c")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/isBargainingList",name:"更多砍价内页",component:e=>n.e("chunk-d61ed930").then(function(){var t=[n("17ef")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/forBargain",name:"帮砍页面",component:e=>n.e("chunk-64dd6dbc").then(function(){var t=[n("db1b")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/purchase",name:"支付页面",component:e=>Promise.all([n.e("chunk-7d45793f"),n.e("chunk-a43a85ec")]).then(function(){var t=[n("5918")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/shippingAddress",name:"（已有）收货地址页",component:e=>n.e("chunk-7d45793f").then(function(){var t=[n("f390")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/purchase/paymentSuccess",name:"支付成功页面",component:e=>n.e("chunk-4a246c40").then(function(){var t=[n("f3c9")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my",name:"我的账户页面",component:e=>n.e("chunk-5d9821a6").then(function(){var t=[n("b31c")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/withdrawRelated",name:"提现页面",component:e=>n.e("chunk-784d4edd").then(function(){var t=[n("7a57")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myFriends",name:"我的好友",component:e=>n.e("chunk-2fa40be7").then(function(){var t=[n("67e5")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myOrder",name:"我的订单",component:e=>n.e("chunk-d78ac40e").then(function(){var t=[n("990bf")];e.apply(null,t)}.bind(this)).catch(n.oe),redirect:"/my/myOrder/semua",children:[{path:"/my/myOrder/semua",name:"所有订单",component:e=>n.e("chunk-afdb48da").then(function(){var t=[n("a1a5")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myOrder/pendingPayment",name:"待完成订单",component:e=>n.e("chunk-6c0f721d").then(function(){var t=[n("4e72")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myOrder/completed",name:"已完成订单",component:e=>n.e("chunk-50dd779a").then(function(){var t=[n("6bab")];e.apply(null,t)}.bind(this)).catch(n.oe)}]},{path:"/my/revenueDetails",name:"收益明细",component:e=>n.e("chunk-2a35bb79").then(function(){var t=[n("1066")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/Tutorial",name:"新手教程",component:e=>n.e("chunk-2d8a52f0").then(function(){var t=[n("e717")];e.apply(null,t)}.bind(this)).catch(n.oe)}]});_.beforeEach((e,t,n)=>{localStorage.getItem("userInfo")&&!Vue.prototype.$curStore.state.isreFreshToken?Vue.prototype.$curStore.watch(function(e){return e.isreFreshToken},function(){n()}):n()}),_.afterEach(e=>{x({eventCategory:e.name,eventAction:"页面展示",hitType:"pageview",page:window.location.pathname})});var I=_,O={setUserInfo(e,t){e.userInfo=t},setIsreFreshToken(e,t){e.isreFreshToken=t},setLoginSelectShow(e,t){e.dialogs.loginSelect.show=t},setLoginJumpUrl(e,t){e.dialogs.loginSelect.jumpUrl=t},setGoodsList(e,t){e.goodsList=t},setNewGiftBagShow(e,t){e.dialogs.newGiftBag.show=t}},$=new Vuex.Store({state:{userInfo:{},isreFreshToken:!1,goodsList:[],dialogs:{loginSelect:{show:!1,jumpUrl:""},bidPriceCompleted:{show:!1},newGiftBag:{show:!1}}},mutations:O});Vue.use(i.a),Vue.use(r.a),Vue.use(a.a),Vue.prototype.$curStore=$,Vue.prototype.$curRouter=I,Vue.prototype.$util=o,Vue.prototype.$gaSend=x,Vue.config.productionTip=!1,new Vue({router:I,store:$,render:e=>e(g)}).$mount("#app")},5754:function(e,t,n){"use strict";var o=n("d552");n.n(o).a},"5c0b":function(e,t,n){"use strict";var o=n("e959");n.n(o).a},"8bbf":function(e,t){e.exports=Vue},"90c5":function(e,t,n){"use strict";var o=n("ff75");n.n(o).a},"938d":function(e,t,n){(e.exports=n("2350")(!1)).push([e.i,'blockquote,body,button,dd,dl,dt,fieldset,h1,h2,h3,h4,h5,h6,hr,input,lengend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0;box-sizing:border-box}body,button,input,select,textarea{font-family:Helvetica,sans-serif,inherit;font-size:.12rem}h1{font-size:.24rem}h2{font-size:.21333rem}h3{font-size:.18667rem}h4,h5,h6{font-size:100%}address,cite,dfn,em,var{font-style:normal}code,kbd,pre,samp,tt{font-family:Courier New,Courier,monospace}small{font-size:.16rem}ol,ul{list-style:none}a{text-decoration:none}a:hover{text-decoration:underline}abbr[title],acronym[title]{border-bottom:1px dotted;cursor:help}q:after,q:before{content:""}legend{color:#000}fieldset,img{border:0}img{vertical-align:top}button,input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}hr{border:none;height:1px}html{overflow-y:scroll}.ellipsis{max-width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.clearfix{*zoom:1}.clearfix:after,.clearfix:before{display:table;line-height:0;content:""}.clearfix:after{clear:both}.left{float:left}.right{float:right}button,input,select,textarea{outline:none;border:0}textarea{resize:none}*{-webkit-overflow-scrolling:touch}',""])},a33e:function(e,t,n){(e.exports=n("2350")(!1)).push([e.i,"#app{width:100vw;overflow:hidden}",""])},ac1b:function(e,t,n){(e.exports=n("2350")(!1)).push([e.i,".main-container[data-v-1b407b02]{width:100vw;height:100vh;box-sizing:border-box}",""])},bf1b:function(e,t,n){"use strict";var o=n("da39");n.n(o).a},d552:function(e,t,n){var o=n("938d");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("499e").default)("16181e62",o,!0,{sourceMap:!1,shadowMode:!1})},da39:function(e,t,n){var o=n("1724");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("499e").default)("23aa2fe8",o,!0,{sourceMap:!1,shadowMode:!1})},e47c:function(e,t,n){"use strict";n.r(t);var o=n("be94");!function(){function e(){try{e=document,t="script",n="facebook-jssdk",a=e.getElementsByTagName(t)[0],e.getElementById(n)||((o=e.createElement(t)).id=n,o.src="https://connect.facebook.net/en_US/sdk.js",a.parentNode.insertBefore(o,a))}catch(e){}var e,t,n,o,a}e.prototype.loginFB=function(){return new Promise(e=>{FB.login(function(t){"connected"===t.status?FB.api("/me",function(n){var a=Object(o.a)({},t,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(t){var n=t.data.url;a=Object(o.a)({},a,{pic_square:n}),e(a)})}):e(!1)})})},e.prototype.checkFBLoginState=function(){var e=this;return new Promise((t,n)=>{FB.getLoginStatus(function(o){e.statusChangeCallback(o).then(e=>{t(e)}).catch(e=>{n(!1)})})})},e.prototype.statusChangeCallback=function(e){return"connected"===e.status?this.getUserInfo(e):Promise.resolve(!1)},e.prototype.getUserInfo=function(e){return new Promise(t=>{FB.api("/me",function(n){var a=Object(o.a)({},e,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(e){var n=e.data.url;a=Object(o.a)({},a,{pic_square:n}),t(a)})})})},e.prototype.logoutFB=function(){return new Promise(function(e){FB.getLoginStatus(function(t){"connected"===t.status?FB.logout(function(t){e(!0)}):e(!1)})})},e.prototype.shareFB=function(e,t){return new Promise(n=>{FB.ui({method:"share",href:e,quote:t},function(e){e&&!e.error_message?n(e):n(!1)})})},window.$faceBookApi=new e}()},e959:function(e,t,n){var o=n("a33e");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("499e").default)("6f19147e",o,!0,{sourceMap:!1,shadowMode:!1})},f121:function(e,t,n){"use strict";n.d(t,"a",function(){return a});let o="";const a={appId:o="856321351386952",cookie:!0,xfbml:!0,version:"v3.2"}},ff75:function(e,t,n){var o=n("ac1b");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("499e").default)("6ab23e64",o,!0,{sourceMap:!1,shadowMode:!1})}});