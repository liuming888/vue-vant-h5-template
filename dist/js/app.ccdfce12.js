(function(e){function t(t){for(var o,c,i=t[0],s=t[1],u=t[2],l=0,p=[];l<i.length;l++)c=i[l],r[c]&&p.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-01a40125":"5d709cec","chunk-07cecc93":"fac3dc4d","chunk-101c037e":"7953dc42","chunk-121f2cd7":"ebf3c95f","chunk-3c18907e":"fa69ade3","chunk-4a7773a9":"bb1249f8","chunk-50dd779a":"f8d3266d","chunk-65c7386a":"6e11fb4e","chunk-6c0f721d":"bf656d83","chunk-6efaa45c":"82d27a17","chunk-72145170":"a40fa30c","chunk-74b04db6":"3bcbe16e","chunk-7d45793f":"fec63546","chunk-5fc0cfcc":"639da98e","chunk-afdb48da":"9da838b6","chunk-c41cd3ce":"ec1f0304","chunk-ccc96896":"e6f3ba77","chunk-dd2092f0":"608127be","chunk-fda6ccb4":"4f13d6de","chunk-603c60ac":"38509657","chunk-62dbff9c":"a82d03f6","chunk-8aa8dcca":"cc302842","chunk-5d28f18c":"ec7941d0","chunk-0af43d20":"e107962e","chunk-2a0fc25c":"985fba94","chunk-75eaccb7":"f9cac858","chunk-a6ffb4f0":"77e49013","chunk-755cb1f4":"b1ecf652","chunk-87e95404":"3c74aacb","chunk-5919915a":"50868931"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e),a=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");c.type=o,c.request=a,n[1](c)}r[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){n("db4d"),e.exports=n("56d7")},"007a":function(e,t,n){"use strict";var o=n("be94"),r=(n("097d"),n("bc3a")),a=n.n(r),c={getUrl(e){let t="";switch(e){case"mock":t="";case"development":break;case"dev":t="https://dev-ht-zdd-api.istarbuy.com/";break;case"test":t="https://pubtest-ht-zdd-api.istarbuy.com";break;case"production":t="https://api.istarbuy.com";break}return t}};let i="",s="",u=localStorage.getItem("userInfo");if(u){let e=JSON.parse(u);i=e.user_id,s=e.access_token}console.log("666666666666","dev"),a.a.defaults.headers.common["User-Id"]=i,a.a.defaults.headers.common["Access-Token"]=s;var l=a.a.create();let d=c.getUrl("dev");console.log("url: ",d),l.defaults.baseURL=d,l.defaults.timeout=6e3,l.defaults.withCredentials=!0,Vue.prototype.$loaddingNum=0;const p=0;console.log("curCode: ",p),l.interceptors.request.use(e=>{return Vue.prototype.$loaddingNum++,Vue.prototype.$toast.loading({mask:!0,duration:0,forbidClick:!0}),Vue.prototype.$mainAppLoad||"none"==document.getElementById("mainApp").style.display||(document.getElementById("mainApp").style.display="none",Vue.prototype.$mainAppLoad=!0),e},e=>{return Promise.reject(e)}),l.interceptors.response.use(e=>{Vue.prototype.$loaddingNum--,Vue.prototype.$loaddingNum<=0&&Vue.prototype.$toast.clear();try{if(e.data.code==p)return e.data;if(3!=e.data.code)throw console.log("test11111111111111111111111111"),e.data;localStorage.clear()}catch(t){if(console.log("test22222222222222222222222222"),t.code){if(Vue.prototype.$toast(t.msg),"-1"==t.code)return t.code}else Vue.prototype.$toast("The request failed. Please try again later!");return console.error(t),!1}},e=>{return console.log("test33333333333333333333333333"),Vue.prototype.$loaddingNum--,Vue.prototype.$loaddingNum<=0&&Vue.prototype.$toast.clear(),!1});const f={post(e){let t=e.url,n=e.data,r=e.config,a=void 0===r?{}:r;return l(Object(o["a"])({method:"post",url:t,data:n},a)).then(e=>{return e}).catch(e=>{return console.error(e,"error"),!1}).finally(()=>{})},get(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l.get(e.url,{params:e.data}).then(e=>{return e})},request(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,n=void 0===t?"get":t,r=e.url,a=e.data,c=void 0===a?{}:a,i=e.params,s=void 0===i?{}:i,u=e.config,d=void 0===u?{}:u;return n=n.toLowerCase(),l(Object(o["a"])({method:n,url:r,data:c,params:s},d)).then(e=>{return e}).catch(e=>{return console.error(e,"error"),!1})}};t["a"]=f},1724:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".content-container[data-v-70209f87]{width:100vw;height:100vh;overflow:hidden;overflow-y:scroll;box-sizing:border-box}",""])},3007:function(e,t,n){"use strict";n.d(t,"g",function(){return r}),n.d(t,"h",function(){return a}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return u}),n.d(t,"b",function(){return l}),n.d(t,"f",function(){return d});var o=n("007a");function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["a"].post({url:"/api/v1/user/login",data:e})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["a"].post({url:"/api/v1/user/refresh_token",data:e})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["a"].post({url:"/api/v1/user/addresses/deal_my_address ",data:e})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["a"].post({url:"/api/v1/user/addresses/get_my_address",data:e})}function s(){return o["a"].post({url:"/api/v1/user/account/get_my_account"})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["a"].post({url:"/api/v1/user/account/get_my_friends",data:e})}function l(){return o["a"].post({url:"/api/v1/tip/get_hero_list"})}function d(){return o["a"].post({url:"/api/v1/user/get_my_new_rp"})}},"56d7":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"expiration",function(){return F}),n.d(o,"paymentCancellationPrompt",function(){return P}),n.d(o,"getQueryVariable",function(){return N}),n.d(o,"gaSend",function(){return z});n("66cf");var r=n("343b"),a=(n("8a58"),n("e41f")),c=(n("e7e5"),n("d399")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("zdd-layout")],1)},s=[],u=n("1da1"),l=n("bc3a"),d=n.n(l),p=n("f121"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[n("zdd-content"),e.$store.state.dialogs.loginSelect.show?n("dialog-login-select"):e._e(),e.$store.state.dialogs.newGiftBag.show?n("dialog-new-gift-bag"):e._e()],1)},h=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-container",attrs:{id:"contentContainer"}},[n("router-view")],1)},b=[],g={},y=g,v=(n("bf1b"),n("2877")),k=Object(v["a"])(y,m,b,!1,null,"70209f87",null),w=k.exports,x={name:"zddMain",components:{"zdd-content":w,dialogBidPriceCompleted:e=>n.e("chunk-ccc96896").then(function(){var t=[n("aa07")];e.apply(null,t)}.bind(this)).catch(n.oe),dialogLoginSelect:e=>n.e("chunk-fda6ccb4").then(function(){var t=[n("c244")];e.apply(null,t)}.bind(this)).catch(n.oe),dialogNewGiftBag:e=>n.e("chunk-74b04db6").then(function(){var t=[n("3f73")];e.apply(null,t)}.bind(this)).catch(n.oe)},watch:{$route(e){console.log("当前路径",e.path),localStorage.getItem("newUserInfo")&&"/"==this.$route.path&&this.$store.commit("setNewGiftBagShow",!0)}}},_=x,S=(n("90c5"),Object(v["a"])(_,f,h,!1,null,"1b407b02",null)),B=S.exports,O=n("3007"),I={name:"App",components:{"zdd-layout":B},created(){let e=localStorage.getItem("newUserInfo");if(e){this.$store.commit("setIsreFreshToken",!0);let t=JSON.parse(e);return this.$store.commit("setUserInfo",t),localStorage.setItem("userInfo",JSON.stringify(t)),d.a.defaults.headers.common["User-Id"]=t.user_id,void(d.a.defaults.headers.common["Access-Token"]=t.access_token)}this.initToken(),this.initFB()},methods:{initFB(){n("e47c");window.fbAsyncInit=Object(u["a"])(function*(){FB.init(p["a"]),FB.AppEvents.logPageView(),console.warn("已经初始化FB了")})},initToken(){var e=this;return Object(u["a"])(function*(){let t=localStorage.getItem("userInfo");if(t){let n=JSON.parse(t);d.a.defaults.headers.common["User-Id"]=n.user_id,d.a.defaults.headers.common["Access-Token"]=n.access_token;let o=yield Object(O["h"])(JSON.parse(t));if(e.$store.commit("setIsreFreshToken",!0),o&&o.data){let t=o.data;e.$store.commit("setUserInfo",t),localStorage.setItem("userInfo",JSON.stringify(t)),d.a.defaults.headers.common["User-Id"]=t.user_id,d.a.defaults.headers.common["Access-Token"]=t.access_token,console.log("已经刷新token了")}}})()}}},$=I,V=(n("5c0b"),n("5754"),Object(v["a"])($,i,s,!1,null,null,null)),j=V.exports,T=n("be94");n("28a5"),n("386d");function F(e){if(isNaN(e)||e<0)return!1;let t=e,n=Math.floor(t/36e5);n=n<10?"0"+n:n;let o=Math.floor((t-36e5*n)/6e4);o=o<10?"0"+o:o;let r=~~((t-36e5*n-6e4*o)/1e3);return r=r<10?"0"+r:r,this.expirationDat={h:n,p:o,m:r},{h:n,p:o,m:r}}function P(){setTimeout(()=>{const e=n("b970").Toast;e({message:'Payment has been cancelled, you can re-initiate payment in "My Order" !',duration:2e3})},500)}function N(e){for(var t=window.location.search.substring(1),n=t.split("&"),o=0;o<n.length;o++){var r=n[o].split("=");if(r[0]==e)return r[1]}return!1}function z(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};window.ga&&(console.log("ga"),ga("send",Object(T["a"])({},e,{hitType:e.hitType||"event"})))}const C=new VueRouter({mode:"history",base:"/",routes:[{path:"*",redirect:"/"},{path:"/",name:"首页",component:e=>n.e("chunk-07cecc93").then(function(){var t=[n("77b8")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/bargain",name:"砍价详情页",component:e=>n.e("chunk-65c7386a").then(function(){var t=[n("5b3c")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/isBargainingList",name:"更多砍价内页",component:e=>n.e("chunk-4a7773a9").then(function(){var t=[n("17ef")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/forBargain",name:"帮砍页面",component:e=>n.e("chunk-6efaa45c").then(function(){var t=[n("db1b")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/purchase",name:"支付页面",component:e=>Promise.all([n.e("chunk-7d45793f"),n.e("chunk-5fc0cfcc")]).then(function(){var t=[n("5918")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/shippingAddress",name:"（已有）收货地址页",component:e=>n.e("chunk-7d45793f").then(function(){var t=[n("f390")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/purchase/paymentSuccess",name:"支付成功页面",component:e=>n.e("chunk-dd2092f0").then(function(){var t=[n("f3c9")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my",name:"我的账户页面",component:e=>n.e("chunk-121f2cd7").then(function(){var t=[n("b31c")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/withdrawRelated",name:"提现页面",component:e=>n.e("chunk-72145170").then(function(){var t=[n("7a57")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myFriends",name:"我的好友",component:e=>n.e("chunk-3c18907e").then(function(){var t=[n("67e5")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myOrder",name:"我的订单",component:e=>n.e("chunk-01a40125").then(function(){var t=[n("990bf")];e.apply(null,t)}.bind(this)).catch(n.oe),redirect:"/my/myOrder/semua",children:[{path:"/my/myOrder/semua",name:"所有订单",component:e=>n.e("chunk-afdb48da").then(function(){var t=[n("a1a5")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myOrder/pendingPayment",name:"待完成订单",component:e=>n.e("chunk-6c0f721d").then(function(){var t=[n("4e72")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myOrder/completed",name:"已完成订单",component:e=>n.e("chunk-50dd779a").then(function(){var t=[n("6bab")];e.apply(null,t)}.bind(this)).catch(n.oe)}]},{path:"/my/revenueDetails",name:"收益明细",component:e=>n.e("chunk-101c037e").then(function(){var t=[n("1066")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/Tutorial",name:"新手教程",component:e=>n.e("chunk-c41cd3ce").then(function(){var t=[n("e717")];e.apply(null,t)}.bind(this)).catch(n.oe)}]});C.beforeEach((e,t,n)=>{let o=localStorage.getItem("userInfo");o&&!Vue.prototype.$curStore.state.isreFreshToken?Vue.prototype.$curStore.watch(function(e){return e.isreFreshToken},function(){n()}):n()});const U=["/","/bargain","/purchase","/my","/purchase/paymentSuccess","/withdrawRelated","/isBargainingList"];C.afterEach(e=>{const t=e.path;U.includes(t)&&z({eventCategory:e.name,eventAction:"页面展示"})});var E=C,M={userInfo:{},isreFreshToken:!1,goodsList:[],dialogs:{loginSelect:{show:!1,jumpUrl:""},bidPriceCompleted:{show:!1},newGiftBag:{show:!1}}},A={setUserInfo(e,t){e.userInfo=t},setIsreFreshToken(e,t){e.isreFreshToken=t},setLoginSelectShow(e,t){e.dialogs.loginSelect.show=t},setLoginJumpUrl(e,t){e.dialogs.loginSelect.jumpUrl=t},setGoodsList(e,t){e.goodsList=t},setNewGiftBagShow(e,t){e.dialogs.newGiftBag.show=t}},L=new Vuex.Store({state:M,mutations:A});Vue.use(c["a"]),Vue.use(a["a"]),Vue.use(r["a"]),Vue.prototype.$curStore=L,Vue.prototype.$curRouter=E,Vue.prototype.$util=o,Vue.prototype.$gaSend=z,Vue.config.productionTip=!1,new Vue({router:E,store:L,render:e=>e(j)}).$mount("#app")},5754:function(e,t,n){"use strict";var o=n("d552"),r=n.n(o);r.a},"5c0b":function(e,t,n){"use strict";var o=n("e959"),r=n.n(o);r.a},"8bbf":function(e,t){e.exports=Vue},"90c5":function(e,t,n){"use strict";var o=n("ff75"),r=n.n(o);r.a},"938d":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'blockquote,body,button,dd,dl,dt,fieldset,h1,h2,h3,h4,h5,h6,hr,input,lengend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0;box-sizing:border-box}body,button,input,select,textarea{font-family:Helvetica,sans-serif,inherit;font-size:.12rem}h1{font-size:.24rem}h2{font-size:.21333rem}h3{font-size:.18667rem}h4,h5,h6{font-size:100%}address,cite,dfn,em,var{font-style:normal}code,kbd,pre,samp,tt{font-family:Courier New,Courier,monospace}small{font-size:.16rem}ol,ul{list-style:none}a{text-decoration:none}a:hover{text-decoration:underline}abbr[title],acronym[title]{border-bottom:1px dotted;cursor:help}q:after,q:before{content:""}legend{color:#000}fieldset,img{border:0}img{vertical-align:top}button,input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}hr{border:none;height:1px}html{overflow-y:scroll}.ellipsis{max-width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.clearfix{*zoom:1}.clearfix:after,.clearfix:before{display:table;line-height:0;content:""}.clearfix:after{clear:both}.left{float:left}.right{float:right}button,input,select,textarea{outline:none;border:0}textarea{resize:none}*{-webkit-overflow-scrolling:touch}',""])},a33e:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"#app{width:100vw;overflow:hidden}",""])},ac1b:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".main-container[data-v-1b407b02]{width:100vw;height:100vh;box-sizing:border-box}",""])},bf1b:function(e,t,n){"use strict";var o=n("da39"),r=n.n(o);r.a},d552:function(e,t,n){var o=n("938d");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("16181e62",o,!0,{sourceMap:!1,shadowMode:!1})},da39:function(e,t,n){var o=n("1724");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("23aa2fe8",o,!0,{sourceMap:!1,shadowMode:!1})},e47c:function(e,t,n){"use strict";n.r(t);var o=n("be94");(function(){function e(){try{console.warn("hello faceBookSdk!"),function(e,t,n){var o,r=e.getElementsByTagName(t)[0];e.getElementById(n)||(o=e.createElement(t),o.id=n,o.src="https://connect.facebook.net/en_US/sdk.js",r.parentNode.insertBefore(o,r))}(document,"script","facebook-jssdk")}catch(e){console.error("出错了",e)}}e.prototype.loginFB=function(){return new Promise(e=>{FB.login(function(t){"connected"===t.status?(console.warn("login_success!!!!!",t),FB.api("/me",function(n){var r=Object(o["a"])({},t,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(t){var n=t.data.url;r=Object(o["a"])({},r,{pic_square:n}),e(r)})})):(console.error("login_error!"),e(!1))})})},e.prototype.checkFBLoginState=function(){var e=this;return new Promise((t,n)=>{FB.getLoginStatus(function(o){e.statusChangeCallback(o).then(e=>{t(e)}).catch(e=>{n(!1)})})})},e.prototype.statusChangeCallback=function(e){var t=this;return"connected"===e.status?t.getUserInfo(e):(console.error("没登录！"),Promise.resolve(!1))},e.prototype.getUserInfo=function(e){return new Promise(t=>{FB.api("/me",function(n){var r=Object(o["a"])({},e,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(e){var n=e.data.url;r=Object(o["a"])({},r,{pic_square:n}),t(r)})})})},e.prototype.logoutFB=function(){FB.logout(function(e){})},e.prototype.shareFB=function(e,t){return new Promise(n=>{FB.ui({method:"share",href:e,quote:t},function(e){e&&!e.error_message?n(e):(n(!1),console.error("Error while posting."))})})},window.$faceBookApi=new e})()},e959:function(e,t,n){var o=n("a33e");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("6f19147e",o,!0,{sourceMap:!1,shadowMode:!1})},f121:function(e,t,n){"use strict";n.d(t,"a",function(){return r});let o="";o="2165389376885942";const r={appId:o,cookie:!0,xfbml:!0,version:"v3.2"}},ff75:function(e,t,n){var o=n("ac1b");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("6ab23e64",o,!0,{sourceMap:!1,shadowMode:!1})}});