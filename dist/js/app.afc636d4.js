(function(e){function t(t){for(var o,c,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)c=i[l],r[c]&&f.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0f093585":"5521a26c","chunk-18649aac":"bba7f856","chunk-23183a38":"83682529","chunk-478ab7f6":"95e9341e","chunk-0a3384fa":"aa2ba47f","chunk-4ad23279":"29739b22","chunk-53a3efb6":"8e448b22","chunk-5d9821a6":"13c6f014","chunk-61c74112":"07abdeb6","chunk-74b04db6":"07149745","chunk-8356760a":"f2ce799e","chunk-901a5260":"d3b679b1","chunk-a55c20a2":"8b51824d","chunk-ac1b8768":"fdc78df1","chunk-aee3fad6":"85f6697a","chunk-d4ff6520":"3880dcb6","chunk-d6cac79c":"c67eb7ff","chunk-d78ac40e":"a2240efa","chunk-ded1ec86":"f0805012","chunk-108c55c8":"2c806f39","chunk-77804c87":"f39aa9da","chunk-7abf11a7":"86e56c2d","chunk-d70f099e":"03b00aa1","chunk-55b2d5b5":"026b7d57","chunk-e6619502":"cdbd6f1d","chunk-54ba2f5e":"f7d1daf3","chunk-cbe6b3f4":"254add3d","chunk-0e9b4f20":"eee67b80","chunk-bfe4a5ce":"9453e5d9","chunk-7ff0f61e":"bab56d85","chunk-58f06344":"8e549754","chunk-d8890d28":"1dc8c37f","chunk-e897a6ac":"208f89f1"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e),a=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");c.type=o,c.request=a,n[1](c)}r[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){n("db4d"),e.exports=n("56d7")},"007a":function(e,t,n){"use strict";var o=n("cebc"),r=n("795b"),a=n.n(r),c=(n("cadf"),n("551c"),n("f751"),n("097d"),n("bc3a")),i=n.n(c),u={getUrl:function(e){var t="";switch(e){case"mock":t="";case"development":break;case"dev":t="https://dev-ht-zdd-api.istarbuy.com/";break;case"test":t="https://pubtest-ht-zdd-api.istarbuy.com";break;case"newProduction":case"production":t="https://api.istarbuy.com";break}return t}},s=n("b970"),l=s.Toast,d="",f="",p=localStorage.getItem("userInfo");if(p){var h=JSON.parse(p);d=h.user_id,f=h.access_token}console.log("666666666666","dev"),i.a.defaults.headers.common["User-Id"]=d,i.a.defaults.headers.common["Access-Token"]=f;var m=i.a.create(),b=u.getUrl("dev");console.log("url: ",b),m.defaults.baseURL=b,m.defaults.timeout=6e3,m.defaults.withCredentials=!0;var g=0;console.log("curCode: ",g),m.interceptors.request.use(function(e){return Vue.prototype.$curStore.commit("setLoaddingNum",1),Vue.prototype.$mainAppLoad||"none"==document.getElementById("mainApp").style.display||(document.getElementById("mainApp").style.display="none",Vue.prototype.$mainAppLoad=!0),e},function(e){return a.a.reject(e)}),m.interceptors.response.use(function(e){Vue.prototype.$curStore.commit("setLoaddingNum",-1);try{if(e.data.code==g)return e.data;if(3!=e.data.code){if(1e3==e.data.code)return e.data;throw e.data}l({message:"please login again !",duration:1e3}),Vue.prototype.$curStore.commit("setUserInfo",{}),i.a.defaults.headers.common["User-Id"]="",i.a.defaults.headers.common["Access-Token"]="",localStorage.clear(),Vue.prototype.$curStore.commit("setLoginSelectShow",!0)}catch(t){if(t.code){if(l(t.msg),"-1"==t.code)return t}else l("The request failed. Please try again later!");return console.error("封装的接口异常处理,",t),!1}},function(e){return Vue.prototype.$curStore.commit("setLoaddingNum",-1),!1});var v={post:function(e){var t=e.url,n=e.data,r=e.config,a=void 0===r?{}:r;return m(Object(o["a"])({method:"post",url:t,data:n},a)).then(function(e){return e}).catch(function(e){return console.error(e,"error"),!1}).finally(function(){})},get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m.get(e.url,{params:e.data}).then(function(e){return e})},request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,n=void 0===t?"get":t,r=e.url,a=e.data,c=void 0===a?{}:a,i=e.params,u=void 0===i?{}:i,s=e.config,l=void 0===s?{}:s;return n=n.toLowerCase(),m(Object(o["a"])({method:n,url:r,data:c,params:u},l)).then(function(e){return e}).catch(function(e){return console.error(e,"error"),!1})}};t["a"]=v},1724:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".content-container[data-v-70209f87]{width:100vw;height:100vh;overflow:hidden;overflow-y:scroll;box-sizing:border-box}",""])},3007:function(e,t,n){"use strict";n.d(t,"g",function(){return r}),n.d(t,"h",function(){return a}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return u}),n.d(t,"e",function(){return s}),n.d(t,"b",function(){return l}),n.d(t,"f",function(){return d}),n.d(t,"j",function(){return f}),n.d(t,"i",function(){return p});var o=n("007a");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["a"].post({url:"/api/v1/user/login",data:e})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["a"].post({url:"/api/v1/user/refresh_token",data:e})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["a"].post({url:"/api/v1/user/addresses/deal_my_address ",data:e})}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["a"].post({url:"/api/v1/user/addresses/get_my_address",data:e})}function u(){return o["a"].post({url:"/api/v1/user/account/get_my_account"})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["a"].post({url:"/api/v1/user/account/get_my_friends",data:e})}function l(){return o["a"].post({url:"/api/v1/tip/get_hero_list"})}function d(){return o["a"].post({url:"/api/v1/user/get_my_new_rp"})}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["a"].post({url:"/api/v1/user/telLogin",data:e})}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["a"].post({url:"/api/v1/user/send",data:e})}},"56d7":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"expiration",function(){return P}),n.d(o,"paymentCancellationPrompt",function(){return A}),n.d(o,"getQueryVariable",function(){return M}),n.d(o,"gaSend",function(){return E}),n.d(o,"deleteAllCookies",function(){return q});n("66cf");var r,a=n("343b"),c=(n("8a58"),n("e41f")),i=(n("e7e5"),n("d399")),u=(n("cadf"),n("551c"),n("f751"),n("097d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.loaddingNum>0,expression:"loaddingNum>0"}],staticClass:"loading-box",on:{click:function(e){e.stopPropagation()}}},[n("van-loading",{attrs:{color:"#D30C05"}})],1),n("zdd-layout")],1)}),s=[],l=(n("96cf"),n("3b8d")),d=n("f499"),f=n.n(d),p=n("cebc"),h=n("bd86"),m=(n("7f7f"),n("ac1e"),n("543e")),b=n("bc3a"),g=n.n(b),v=n("5880"),y=n("f121"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[n("zdd-content"),e.$store.state.dialogs.loginSelect.show?n("dialog-login-select"):e._e(),e.$store.state.dialogs.newGiftBag.show?n("dialog-new-gift-bag"):e._e()],1)},w=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-container",attrs:{id:"contentContainer"}},[n("router-view")],1)},S=[],_={},O=_,I=(n("bf1b"),n("2877")),B=Object(I["a"])(O,x,S,!1,null,"70209f87",null),j=B.exports,T={name:"zddMain",components:{"zdd-content":j,dialogBidPriceCompleted:function(e){return n.e("chunk-18649aac").then(function(){var t=[n("aa07")];e.apply(null,t)}.bind(this)).catch(n.oe)},dialogLoginSelect:function(e){return n.e("chunk-ded1ec86").then(function(){var t=[n("c244")];e.apply(null,t)}.bind(this)).catch(n.oe)},dialogNewGiftBag:function(e){return n.e("chunk-74b04db6").then(function(){var t=[n("3f73")];e.apply(null,t)}.bind(this)).catch(n.oe)}},watch:{$route:function(e){console.log("当前路径",e.path),localStorage.getItem("newUserInfo")&&"/"==this.$route.path&&this.$store.commit("setNewGiftBagShow",!0)}}},$=T,V=(n("90c5"),Object(I["a"])($,k,w,!1,null,"1b407b02",null)),F=V.exports,N=n("3007"),L={name:"App",components:(r={},Object(h["a"])(r,m["a"].name,m["a"]),Object(h["a"])(r,"zdd-layout",F),r),computed:Object(p["a"])({},Object(v["mapState"])(["loaddingNum"])),created:function(){var e=localStorage.getItem("newUserInfo");if(e){this.$store.commit("setIsreFreshToken",!0);var t=JSON.parse(e);return this.$store.commit("setUserInfo",t),localStorage.setItem("userInfo",f()(t)),g.a.defaults.headers.common["User-Id"]=t.user_id,void(g.a.defaults.headers.common["Access-Token"]=t.access_token)}this.initToken(),this.initFB()},methods:{initFB:function(){n("e47c");window.fbAsyncInit=Object(l["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:FB.init(y["a"]),FB.AppEvents.logPageView(),console.warn("已经初始化FB了");case 3:case"end":return e.stop()}},e)}))},initToken:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,n,o,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("userInfo"),!t){e.next=10;break}return n=JSON.parse(t),g.a.defaults.headers.common["User-Id"]=n.user_id,g.a.defaults.headers.common["Access-Token"]=n.access_token,e.next=7,Object(N["h"])(JSON.parse(t));case 7:o=e.sent,this.$store.commit("setIsreFreshToken",!0),o&&o.data&&(r=o.data,this.$store.commit("setUserInfo",r),localStorage.setItem("userInfo",f()(r)),g.a.defaults.headers.common["User-Id"]=r.user_id,g.a.defaults.headers.common["Access-Token"]=r.access_token,console.log("已经刷新token了"));case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},z=L,C=(n("5c0b"),n("5754"),Object(I["a"])(z,u,s,!1,null,null,null)),U=C.exports;n("386d"),n("28a5");function P(e){if(isNaN(e)||e<0)return!1;var t=e,n=Math.floor(t/36e5);n=n<10?"0"+n:n;var o=Math.floor((t-36e5*n)/6e4);o=o<10?"0"+o:o;var r=~~((t-36e5*n-6e4*o)/1e3);return r=r<10?"0"+r:r,this.expirationDat={h:n,p:o,m:r},{h:n,p:o,m:r}}function A(){setTimeout(function(){var e=n("b970").Toast;e({message:'Payment has been cancelled, you can re-initiate payment in "My Order" !',duration:2e3})},500)}function M(e){for(var t=window.location.search.substring(1),n=t.split("&"),o=0;o<n.length;o++){var r=n[o].split("=");if(r[0]==e)return r[1]}return!1}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};window.ga&&(console.log("ga"),ga("send",Object(p["a"])({},e,{hitType:e.hitType||"event"})))}function q(){for(var e=document.cookie.split(";"),t=0;t<e.length;t++){var n=e[t],o=n.indexOf("="),r=o>-1?n.substr(0,o):n;document.cookie=r+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}console.log("已清除所有cookie!")}var G=new VueRouter({mode:"history",base:"/",routes:[{path:"*",redirect:"/"},{path:"/",name:"首页",component:function(e){return n.e("chunk-ac1b8768").then(function(){var t=[n("77b8")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/bargain",name:"砍价详情页",component:function(e){return n.e("chunk-23183a38").then(function(){var t=[n("5b3c")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/isBargainingList",name:"更多砍价内页",component:function(e){return n.e("chunk-a55c20a2").then(function(){var t=[n("17ef")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/forBargain",name:"帮砍页面",component:function(e){return n.e("chunk-53a3efb6").then(function(){var t=[n("db1b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/purchase",name:"支付页面",component:function(e){return Promise.all([n.e("chunk-478ab7f6"),n.e("chunk-0a3384fa")]).then(function(){var t=[n("5918")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/shippingAddress",name:"（已有）收货地址页",component:function(e){return n.e("chunk-478ab7f6").then(function(){var t=[n("f390")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/purchase/paymentSuccess",name:"支付成功页面",component:function(e){return n.e("chunk-4ad23279").then(function(){var t=[n("f3c9")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my",name:"我的账户页面",component:function(e){return n.e("chunk-5d9821a6").then(function(){var t=[n("b31c")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/withdrawRelated",name:"提现页面",component:function(e){return n.e("chunk-0f093585").then(function(){var t=[n("7a57")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myFriends",name:"我的好友",component:function(e){return n.e("chunk-aee3fad6").then(function(){var t=[n("67e5")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder",name:"我的订单",component:function(e){return n.e("chunk-d78ac40e").then(function(){var t=[n("990bf")];e.apply(null,t)}.bind(this)).catch(n.oe)},redirect:"/my/myOrder/semua",children:[{path:"/my/myOrder/semua",name:"所有订单",component:function(e){return n.e("chunk-61c74112").then(function(){var t=[n("a1a5")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder/pendingPayment",name:"待完成订单",component:function(e){return n.e("chunk-d4ff6520").then(function(){var t=[n("4e72")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder/completed",name:"已完成订单",component:function(e){return n.e("chunk-901a5260").then(function(){var t=[n("6bab")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/my/revenueDetails",name:"收益明细",component:function(e){return n.e("chunk-8356760a").then(function(){var t=[n("1066")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/Tutorial",name:"新手教程",component:function(e){return n.e("chunk-d6cac79c").then(function(){var t=[n("e717")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]});G.beforeEach(function(e,t,n){Vue.prototype.$curStore.commit("setLoaddingNum",1);var o=localStorage.getItem("userInfo");o&&!Vue.prototype.$curStore.state.isreFreshToken?Vue.prototype.$curStore.watch(function(e){return e.isreFreshToken},function(){n()}):n()}),G.afterEach(function(e){Vue.prototype.$curStore.commit("setLoaddingNum",-1);var t=window.location,n=t.pathname,o=t.search;E({eventCategory:e.name,eventAction:"页面展示",hitType:"pageview",page:n+o})});var J=G,R={loaddingNum:0,userInfo:{},isreFreshToken:!1,goodsList:[],dialogs:{loginSelect:{show:!1,jumpUrl:""},bidPriceCompleted:{show:!1},newGiftBag:{show:!1}}},D={setLoaddingNum:function(e,t){e.loaddingNum+=t},setUserInfo:function(e,t){e.userInfo=t},setIsreFreshToken:function(e,t){e.isreFreshToken=t},setLoginSelectShow:function(e,t){e.dialogs.loginSelect.show=t},setLoginJumpUrl:function(e,t){e.dialogs.loginSelect.jumpUrl=t},setGoodsList:function(e,t){e.goodsList=t},setNewGiftBagShow:function(e,t){e.dialogs.newGiftBag.show=t}},H=new Vuex.Store({state:R,mutations:D});Vue.use(i["a"]),Vue.use(c["a"]),Vue.use(a["a"]),Vue.prototype.$curStore=H,Vue.prototype.$curRouter=J,Vue.prototype.$util=o,Vue.prototype.$gaSend=E,Vue.config.productionTip=!1,Vue.mixin({methods:{mx_resizeWindow:function(){console.warn("表单blur"),document.body.scrollTop=0}}}),new Vue({router:J,store:H,render:function(e){return e(U)}}).$mount("#app")},5754:function(e,t,n){"use strict";var o=n("d552"),r=n.n(o);r.a},5880:function(e,t){e.exports=Vuex},"5c0b":function(e,t,n){"use strict";var o=n("e959"),r=n.n(o);r.a},"8bbf":function(e,t){e.exports=Vue},"90c5":function(e,t,n){"use strict";var o=n("ff75"),r=n.n(o);r.a},"938d":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'blockquote,body,button,dd,dl,dt,fieldset,h1,h2,h3,h4,h5,h6,hr,input,lengend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0;box-sizing:border-box}body,button,input,select,textarea{font-family:Helvetica,sans-serif,inherit;font-size:.12rem}h1{font-size:.24rem}h2{font-size:.21333rem}h3{font-size:.18667rem}h4,h5,h6{font-size:100%}address,cite,dfn,em,var{font-style:normal}code,kbd,pre,samp,tt{font-family:Courier New,Courier,monospace}small{font-size:.16rem}ol,ul{list-style:none}a{text-decoration:none}a:hover{text-decoration:underline}abbr[title],acronym[title]{border-bottom:1px dotted;cursor:help}q:after,q:before{content:""}legend{color:#000}fieldset,img{border:0}img{vertical-align:top}button,input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}hr{border:none;height:1px}html{overflow-y:scroll}.ellipsis{max-width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.clearfix{*zoom:1}.clearfix:after,.clearfix:before{display:table;line-height:0;content:""}.clearfix:after{clear:both}.left{float:left}.right{float:right}button,input,select,textarea{outline:none;border:0}textarea{resize:none}*{-webkit-overflow-scrolling:touch}[contenteditable=true],input,textarea{-webkit-user-select:auto!important;-o-user-select:auto!important;user-select:auto!important}',""])},a33e:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"#app{width:100vw;overflow:hidden}.loading-box{width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:12000;background:rgba(0,0,0,.5)}.loading-box .van-loading{position:absolute;left:0;right:0;top:0;bottom:0;margin:auto}",""])},ac1b:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".main-container[data-v-1b407b02]{width:100vw;height:100vh;box-sizing:border-box}",""])},bf1b:function(e,t,n){"use strict";var o=n("da39"),r=n.n(o);r.a},d552:function(e,t,n){var o=n("938d");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("16181e62",o,!0,{sourceMap:!1,shadowMode:!1})},da39:function(e,t,n){var o=n("1724");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("23aa2fe8",o,!0,{sourceMap:!1,shadowMode:!1})},e47c:function(e,t,n){"use strict";n.r(t);var o=n("cebc"),r=n("795b"),a=n.n(r);(function(){function e(){try{console.warn("hello faceBookSdk!"),function(e,t,n){var o,r=e.getElementsByTagName(t)[0];e.getElementById(n)||(o=e.createElement(t),o.id=n,o.src="https://connect.facebook.net/en_US/sdk.js",r.parentNode.insertBefore(o,r))}(document,"script","facebook-jssdk")}catch(e){console.error("出错了",e)}}e.prototype.loginFB=function(){return new a.a(function(e){FB.login(function(t){"connected"===t.status?(console.warn("login_success!!!!!",t),FB.api("/me",function(n){var r=Object(o["a"])({},t,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(t){var n=t.data.url;r=Object(o["a"])({},r,{pic_square:n}),e(r)})})):(console.error("login_error!"),e(!1))})})},e.prototype.checkFBLoginState=function(){var e=this;return new a.a(function(t,n){FB.getLoginStatus(function(o){e.statusChangeCallback(o).then(function(e){t(e)}).catch(function(e){n(!1)})})})},e.prototype.statusChangeCallback=function(e){var t=this;return"connected"===e.status?t.getUserInfo(e):(console.error("没登录！"),a.a.resolve(!1))},e.prototype.getUserInfo=function(e){return new a.a(function(t){FB.api("/me",function(n){var r=Object(o["a"])({},e,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(e){var n=e.data.url;r=Object(o["a"])({},r,{pic_square:n}),t(r)})})})},e.prototype.logoutFB=function(){return new a.a(function(e){FB.getLoginStatus(function(t){"connected"===t.status?FB.logout(function(t){console.log("已成功退出登录",t),e(!0)}):e(!1)})})},e.prototype.shareFB=function(e,t){return new a.a(function(n){FB.ui({method:"share",href:e,quote:t},function(e){e&&!e.error_message?n(e):(n(!1),console.error("Error while posting."))})})},window.$faceBookApi=new e})()},e959:function(e,t,n){var o=n("a33e");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("6f19147e",o,!0,{sourceMap:!1,shadowMode:!1})},f121:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o="";o="2165389376885942";var r={appId:o,cookie:!0,xfbml:!0,version:"v3.2"}},ff75:function(e,t,n){var o=n("ac1b");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("6ab23e64",o,!0,{sourceMap:!1,shadowMode:!1})}});