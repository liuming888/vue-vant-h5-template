!function(e){function t(t){for(var o,c,i=t[0],u=t[1],s=t[2],d=0,l=[];d<i.length;d++)c=i[d],r[c]&&l.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(f&&f(t);l.length;)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(e){return c.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-078767fd":"599c0d08","chunk-1b3f05e4":"4eadd4ed","chunk-1eb816a6":"925f3117","chunk-2593edbf":"82c3caaa","chunk-2a990732":"44338100","chunk-3bae1884":"00277bb0","chunk-3c419fc5":"97ac8298","chunk-45696ca1":"ae46a5e6","chunk-54e8a10f":"9689606a","chunk-2d3318ff":"a573f087","chunk-5b398de0":"49261386","chunk-5ea1cfdf":"a0e767c5","chunk-7088d297":"13aaf6f7","chunk-7a68bfbd":"f0d8b3f4","chunk-7cb2b5fa":"7702f10d","chunk-a128aad0":"0b944cbb","chunk-b41c6f58":"b7f33af3","chunk-e9e24c74":"b7608470","chunk-fe329c76":"a174f0c1","chunk-51c30f8e":"f891f158","chunk-67b45a05":"8c26c0e9","chunk-ffebdf4e":"58a489ea","chunk-43118fc9":"a43748b6","chunk-47470295":"f514ebf6","chunk-491b4d84":"0afd68f5","chunk-54eae88a":"1c04be68","chunk-e5abdc10":"3c01b862","chunk-0a70394a":"9e90b7dd","chunk-0aa76543":"952bd1a4","chunk-c0393e18":"09289501","chunk-e098ff84":"bf6c26d4","chunk-de984c76":"1578f626"}[e]+".js"}(e),a=function(t){i.onerror=i.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");c.type=o,c.request=a,n[1](c)}r[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:i})},12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw e};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=u;a.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){n("9f45"),e.exports=n("56d7")},"007a":function(e,t,n){"use strict";var o=n("8e61"),r=n("a59e"),a=n.n(r),c=n("7f43"),i=n.n(c),u="",s="",f=localStorage.getItem("userInfo");if(f){var d=JSON.parse(f);u=d.user_id,s=d.access_token}i.a.defaults.headers.common["User-Id"]=u,i.a.defaults.headers.common["Access-Token"]=s;var l=i.a.create(),p=function(e){var t="";switch(e){case"mock":t="";case"development":break;case"dev":t="https://dev-ht-zdd-api.istarbuy.com/";break;case"test":t="https://pubtest-ht-zdd-api.istarbuy.com";break;case"newProduction":case"production":t="https://api.istarbuy.com"}return t}("test");l.defaults.baseURL=p,l.defaults.timeout=6e3,l.defaults.withCredentials=!0,Vue.prototype.$loaddingNum=0,l.interceptors.request.use(function(e){return Vue.prototype.$loaddingNum++,Vue.prototype.$toast.loading({mask:!0,duration:0,forbidClick:!0}),Vue.prototype.$mainAppLoad||"none"==document.getElementById("mainApp").style.display||(document.getElementById("mainApp").style.display="none",Vue.prototype.$mainAppLoad=!0),e},function(e){return a.a.reject(e)}),l.interceptors.response.use(function(e){Vue.prototype.$loaddingNum--,Vue.prototype.$loaddingNum<=0&&Vue.prototype.$toast.clear();try{if(0==e.data.code)return e.data;if(3!=e.data.code)throw e.data;Vue.prototype.$toast("please log in first !"),Vue.prototype.$curStore.commit("setUserInfo",{}),i.a.defaults.headers.common["User-Id"]="",i.a.defaults.headers.common["Access-Token"]="",localStorage.clear(),Vue.prototype.$curStore.commit("setLoginSelectShow",!0)}catch(e){if(e.code){if(Vue.prototype.$toast(e.msg),"-1"==e.code)return e.code}else Vue.prototype.$toast("The request failed. Please try again later!");return!1}},function(e){return Vue.prototype.$loaddingNum--,Vue.prototype.$loaddingNum<=0&&Vue.prototype.$toast.clear(),!1});var h={post:function(e){var t=e.url,n=e.data,r=e.config,a=void 0===r?{}:r;return l(Object(o.a)({method:"post",url:t,data:n},a)).then(function(e){return e}).catch(function(e){return!1}).finally(function(){})},get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l.get(e.url,{params:e.data}).then(function(e){return e})},request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,n=void 0===t?"get":t,r=e.url,a=e.data,c=void 0===a?{}:a,i=e.params,u=void 0===i?{}:i,s=e.config,f=void 0===s?{}:s;return n=n.toLowerCase(),l(Object(o.a)({method:n,url:r,data:c,params:u},f)).then(function(e){return e}).catch(function(e){return!1})}};t.a=h},"0742":function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,"#app{width:100vw;overflow:hidden}",""])},"11d4":function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,".main-container[data-v-1b407b02]{width:100vw;height:100vh;box-sizing:border-box}",""])},"26bb":function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,'blockquote,body,button,dd,dl,dt,fieldset,h1,h2,h3,h4,h5,h6,hr,input,lengend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0;box-sizing:border-box}body,button,input,select,textarea{font-family:Helvetica,sans-serif,inherit;font-size:.12rem}h1{font-size:.24rem}h2{font-size:.21333rem}h3{font-size:.18667rem}h4,h5,h6{font-size:100%}address,cite,dfn,em,var{font-style:normal}code,kbd,pre,samp,tt{font-family:Courier New,Courier,monospace}small{font-size:.16rem}ol,ul{list-style:none}a{text-decoration:none}a:hover{text-decoration:underline}abbr[title],acronym[title]{border-bottom:1px dotted;cursor:help}q:after,q:before{content:""}legend{color:#000}fieldset,img{border:0}img{vertical-align:top}button,input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}hr{border:none;height:1px}html{overflow-y:scroll}.ellipsis{max-width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.clearfix{*zoom:1}.clearfix:after,.clearfix:before{display:table;line-height:0;content:""}.clearfix:after{clear:both}.left{float:left}.right{float:right}button,input,select,textarea{outline:none;border:0}textarea{resize:none}*{-webkit-overflow-scrolling:touch}',""])},3007:function(e,t,n){"use strict";n.d(t,"g",function(){return r}),n.d(t,"h",function(){return a}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return u}),n.d(t,"e",function(){return s}),n.d(t,"b",function(){return f}),n.d(t,"f",function(){return d}),n.d(t,"j",function(){return l}),n.d(t,"i",function(){return p});var o=n("007a");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/login",data:e})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/refresh_token",data:e})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/addresses/deal_my_address ",data:e})}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/addresses/get_my_address",data:e})}function u(){return o.a.post({url:"/api/v1/user/account/get_my_account"})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/account/get_my_friends",data:e})}function f(){return o.a.post({url:"/api/v1/tip/get_hero_list"})}function d(){return o.a.post({url:"/api/v1/user/get_my_new_rp"})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/telLogin",data:e})}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.post({url:"/api/v1/user/send",data:e})}},"42d6":function(e,t,n){var o=n("4999");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("85cb").default)("264060b3",o,!0,{sourceMap:!1,shadowMode:!1})},"43da":function(e,t,n){var o=n("11d4");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("85cb").default)("c9614472",o,!0,{sourceMap:!1,shadowMode:!1})},4999:function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,".content-container[data-v-70209f87]{width:100vw;height:100vh;overflow:hidden;overflow-y:scroll;box-sizing:border-box}",""])},"56d7":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"expiration",function(){return w}),n.d(o,"paymentCancellationPrompt",function(){return x}),n.d(o,"getQueryVariable",function(){return S}),n.d(o,"gaSend",function(){return _}),n("7392");var r=n("e758"),a=(n("5d9b"),n("493a")),c=(n("a47e"),n("3d23")),i=(n("5c07"),n("53da"),n("2556"),n("d0f8"),n("4453"),n("fa8b")),u=n("1f09"),s=n.n(u),f=n("7f43"),d=n.n(f),l=n("f121"),p={},h=(n("bf1b"),n("17cc")),m={name:"zddMain",components:{"zdd-content":Object(h.a)(p,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content-container",attrs:{id:"contentContainer"}},[t("router-view")],1)},[],!1,null,"70209f87",null).exports,dialogBidPriceCompleted:function(e){return n.e("chunk-1b3f05e4").then(function(){var t=[n("aa07")];e.apply(null,t)}.bind(this)).catch(n.oe)},dialogLoginSelect:function(e){return n.e("chunk-5ea1cfdf").then(function(){var t=[n("c244")];e.apply(null,t)}.bind(this)).catch(n.oe)},dialogNewGiftBag:function(e){return n.e("chunk-fe329c76").then(function(){var t=[n("3f73")];e.apply(null,t)}.bind(this)).catch(n.oe)}},watch:{$route:function(e){localStorage.getItem("newUserInfo")&&"/"==this.$route.path&&this.$store.commit("setNewGiftBagShow",!0)}}},b=(n("90c5"),Object(h.a)(m,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main-container"},[t("zdd-content"),this.$store.state.dialogs.loginSelect.show?t("dialog-login-select"):this._e(),this.$store.state.dialogs.newGiftBag.show?t("dialog-new-gift-bag"):this._e()],1)},[],!1,null,"1b407b02",null).exports),g=n("3007"),v={name:"App",components:{"zdd-layout":b},created:function(){var e=localStorage.getItem("newUserInfo");if(e){this.$store.commit("setIsreFreshToken",!0);var t=JSON.parse(e);return this.$store.commit("setUserInfo",t),localStorage.setItem("userInfo",s()(t)),d.a.defaults.headers.common["User-Id"]=t.user_id,void(d.a.defaults.headers.common["Access-Token"]=t.access_token)}this.initToken(),this.initFB()},methods:{initFB:function(){n("e47c"),window.fbAsyncInit=Object(i.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:FB.init(l.a),FB.AppEvents.logPageView();case 3:case"end":return e.stop()}},e)}))},initToken:function(){var e=Object(i.a)(regeneratorRuntime.mark(function e(){var t,n,o,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("userInfo"))){e.next=10;break}return n=JSON.parse(t),d.a.defaults.headers.common["User-Id"]=n.user_id,d.a.defaults.headers.common["Access-Token"]=n.access_token,e.next=7,Object(g.h)(JSON.parse(t));case 7:o=e.sent,this.$store.commit("setIsreFreshToken",!0),o&&o.data&&(r=o.data,this.$store.commit("setUserInfo",r),localStorage.setItem("userInfo",s()(r)),d.a.defaults.headers.common["User-Id"]=r.user_id,d.a.defaults.headers.common["Access-Token"]=r.access_token);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},y=(n("5c0b"),n("5754"),Object(h.a)(v,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("zdd-layout")],1)},[],!1,null,null,null).exports),k=(n("3a23"),n("e0c1"),n("8e61"));function w(e){if(isNaN(e)||e<0)return!1;var t=e,n=Math.floor(t/36e5);n=n<10?"0"+n:n;var o=Math.floor((t-36e5*n)/6e4),r=~~((t-36e5*n-6e4*(o=o<10?"0"+o:o))/1e3);return r=r<10?"0"+r:r,this.expirationDat={h:n,p:o,m:r},{h:n,p:o,m:r}}function x(){setTimeout(function(){(0,n("7bdb").Toast)({message:'Payment has been cancelled, you can re-initiate payment in "My Order" !',duration:2e3})},500)}function S(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var o=t[n].split("=");if(o[0]==e)return o[1]}return!1}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};window.ga&&ga("send",Object(k.a)({},e,{hitType:e.hitType||"event"}))}n("ea65"),n("aaa4");var $=new VueRouter({mode:"history",base:"/",routes:[{path:"*",redirect:"/"},{path:"/",name:"首页",component:function(e){return n.e("chunk-078767fd").then(function(){var t=[n("77b8")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/bargain",name:"砍价详情页",component:function(e){return n.e("chunk-7088d297").then(function(){var t=[n("5b3c")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/isBargainingList",name:"更多砍价内页",component:function(e){return n.e("chunk-2a990732").then(function(){var t=[n("17ef")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/forBargain",name:"帮砍页面",component:function(e){return n.e("chunk-3c419fc5").then(function(){var t=[n("db1b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/purchase",name:"支付页面",component:function(e){return Promise.all([n.e("chunk-54e8a10f"),n.e("chunk-2d3318ff")]).then(function(){var t=[n("5918")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/shippingAddress",name:"（已有）收货地址页",component:function(e){return n.e("chunk-54e8a10f").then(function(){var t=[n("f390")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/purchase/paymentSuccess",name:"支付成功页面",component:function(e){return n.e("chunk-1eb816a6").then(function(){var t=[n("f3c9")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my",name:"我的账户页面",component:function(e){return n.e("chunk-e9e24c74").then(function(){var t=[n("b31c")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/withdrawRelated",name:"提现页面",component:function(e){return n.e("chunk-3bae1884").then(function(){var t=[n("7a57")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myFriends",name:"我的好友",component:function(e){return n.e("chunk-5b398de0").then(function(){var t=[n("67e5")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder",name:"我的订单",component:function(e){return n.e("chunk-b41c6f58").then(function(){var t=[n("990b")];e.apply(null,t)}.bind(this)).catch(n.oe)},redirect:"/my/myOrder/semua",children:[{path:"/my/myOrder/semua",name:"所有订单",component:function(e){return n.e("chunk-a128aad0").then(function(){var t=[n("a1a5")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder/pendingPayment",name:"待完成订单",component:function(e){return n.e("chunk-2593edbf").then(function(){var t=[n("4e72")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder/completed",name:"已完成订单",component:function(e){return n.e("chunk-7cb2b5fa").then(function(){var t=[n("6bab")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/my/revenueDetails",name:"收益明细",component:function(e){return n.e("chunk-7a68bfbd").then(function(){var t=[n("1066")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/Tutorial",name:"新手教程",component:function(e){return n.e("chunk-45696ca1").then(function(){var t=[n("e717")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]});$.beforeEach(function(e,t,n){localStorage.getItem("userInfo")&&!Vue.prototype.$curStore.state.isreFreshToken?Vue.prototype.$curStore.watch(function(e){return e.isreFreshToken},function(){n()}):n()});var I=["/","/bargain","/purchase","/my","/purchase/paymentSuccess","/withdrawRelated","/isBargainingList"];$.afterEach(function(e){var t=e.path;I.includes(t)&&_({eventCategory:e.name,eventAction:"页面展示"})});var B=$,O=new Vuex.Store({state:{userInfo:{},isreFreshToken:!1,goodsList:[],dialogs:{loginSelect:{show:!1,jumpUrl:""},bidPriceCompleted:{show:!1},newGiftBag:{show:!1}}},mutations:{setUserInfo:function(e,t){e.userInfo=t},setIsreFreshToken:function(e,t){e.isreFreshToken=t},setLoginSelectShow:function(e,t){e.dialogs.loginSelect.show=t},setLoginJumpUrl:function(e,t){e.dialogs.loginSelect.jumpUrl=t},setGoodsList:function(e,t){e.goodsList=t},setNewGiftBagShow:function(e,t){e.dialogs.newGiftBag.show=t}}});Vue.use(c.a),Vue.use(a.a),Vue.use(r.a),Vue.prototype.$curStore=O,Vue.prototype.$curRouter=B,Vue.prototype.$util=o,Vue.prototype.$gaSend=_,Vue.config.productionTip=!1,new Vue({router:B,store:O,render:function(e){return e(y)}}).$mount("#app")},5754:function(e,t,n){"use strict";var o=n("587c");n.n(o).a},"587c":function(e,t,n){var o=n("26bb");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("85cb").default)("44da1b77",o,!0,{sourceMap:!1,shadowMode:!1})},"5c0b":function(e,t,n){"use strict";var o=n("dfb6");n.n(o).a},"8bbf":function(e,t){e.exports=Vue},"90c5":function(e,t,n){"use strict";var o=n("43da");n.n(o).a},bf1b:function(e,t,n){"use strict";var o=n("42d6");n.n(o).a},dfb6:function(e,t,n){var o=n("0742");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("85cb").default)("3587c08c",o,!0,{sourceMap:!1,shadowMode:!1})},e47c:function(e,t,n){"use strict";n.r(t);var o=n("8e61"),r=n("a59e"),a=n.n(r);!function(){function e(){try{e=document,t="script",n="facebook-jssdk",r=e.getElementsByTagName(t)[0],e.getElementById(n)||((o=e.createElement(t)).id=n,o.src="https://connect.facebook.net/en_US/sdk.js",r.parentNode.insertBefore(o,r))}catch(e){}var e,t,n,o,r}e.prototype.loginFB=function(){return new a.a(function(e){FB.login(function(t){"connected"===t.status?FB.api("/me",function(n){var r=Object(o.a)({},t,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(t){var n=t.data.url;r=Object(o.a)({},r,{pic_square:n}),e(r)})}):e(!1)})})},e.prototype.checkFBLoginState=function(){var e=this;return new a.a(function(t,n){FB.getLoginStatus(function(o){e.statusChangeCallback(o).then(function(e){t(e)}).catch(function(e){n(!1)})})})},e.prototype.statusChangeCallback=function(e){return"connected"===e.status?this.getUserInfo(e):a.a.resolve(!1)},e.prototype.getUserInfo=function(e){return new a.a(function(t){FB.api("/me",function(n){var r=Object(o.a)({},e,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(e){var n=e.data.url;r=Object(o.a)({},r,{pic_square:n}),t(r)})})})},e.prototype.logoutFB=function(){FB.logout(function(e){})},e.prototype.shareFB=function(e,t){return new a.a(function(n){FB.ui({method:"share",href:e,quote:t},function(e){e&&!e.error_message?n(e):n(!1)})})},window.$faceBookApi=new e}()},f121:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={appId:"411009183037605",cookie:!0,xfbml:!0,version:"v3.2"}}});