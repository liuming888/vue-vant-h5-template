(function(e){function t(t){for(var o,c,i=t[0],u=t[1],s=t[2],d=0,p=[];d<i.length;d++)c=i[d],r[c]&&p.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-019c902d":"4cdf954d","chunk-02f6e84a":"d074b653","chunk-061d8eea":"0f4503f4","chunk-06725994":"d34ba6a2","chunk-08a63cfc":"37df5582","chunk-18bfeae6":"b2d48b8c","chunk-216cc510":"fd590fa3","chunk-28563124":"c86c0fb4","chunk-2ca6c485":"a0df4b31","chunk-311a21ba":"b698ab67","chunk-32d107a6":"93b3f7ec","chunk-0d830d56":"5005ae2e","chunk-47869459":"64d99a05","chunk-6d15cdb7":"cbdf1881","chunk-8d9dc324":"824ee69e","chunk-784715fc":"c8dc6b91","chunk-7cb2b5fa":"d9f66916","chunk-ae38a9fc":"882ef872","chunk-b4506f6e":"d1609b17","chunk-e0b85222":"de45a211","chunk-51c30f8e":"00b1f85b","chunk-b37831ea":"c70453cd","chunk-b7db2592":"5110aede","chunk-9ec8e8a8":"4a9ae7e1","chunk-21b57136":"2691f0e2","chunk-6d0b26bb":"1dc8ebae","chunk-7daff0fe":"7524ccc1","chunk-e5abdc10":"4f8a80bd"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e),a=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");c.type=o,c.request=a,n[1](c)}r[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){n("9f45"),e.exports=n("56d7")},"007a":function(e,t,n){"use strict";var o=n("a98d"),r=n("2e73"),a=n.n(r),c=n("7f43"),i=n.n(c),u={getUrl:function(e){var t="";switch(e){case"mock":t="";case"development":break;case"dev":t="https://dev-ht-zdd-api.istarbuy.com/";break;case"test":t="https://pubtest-ht-zdd-api.istarbuy.com";break;case"production":t="https://api.istarbuy.com";break}return t}},s="",d="",l=localStorage.getItem("userInfo");if(l){var p=JSON.parse(l);s=p.user_id,d=p.access_token}console.log("666666666666","dev"),i.a.defaults.headers.common["User-Id"]=s,i.a.defaults.headers.common["Access-Token"]=d;var f=i.a.create(),h=u.getUrl("dev");console.log("url: ",h),f.defaults.baseURL=h,f.defaults.timeout=6e3,f.defaults.withCredentials=!0,Vue.prototype.$loaddingNum=0;var m=0;console.log("curCode: ",m),f.interceptors.request.use(function(e){return Vue.prototype.$loaddingNum++,Vue.prototype.$toast.loading({mask:!0,duration:0,forbidClick:!0}),Vue.prototype.$mainAppLoad||"none"==document.getElementById("mainApp").style.display||(document.getElementById("mainApp").style.display="none",Vue.prototype.$mainAppLoad=!0),e},function(e){return a.a.reject(e)}),f.interceptors.response.use(function(e){Vue.prototype.$loaddingNum--,Vue.prototype.$loaddingNum<=0&&Vue.prototype.$toast.clear();try{if(e.data.code==m)return e.data;if(3!=e.data.code)throw console.log("test11111111111111111111111111"),e.data;Vue.prototype.$toast("Anda belum login"),localStorage.clear()}catch(t){if(console.log("test22222222222222222222222222"),t.code){if(Vue.prototype.$toast(t.msg),"-1"==t.code)return t.code}else Vue.prototype.$toast("The request failed. Please try again later!");return console.error(t),!1}},function(e){return console.log("test33333333333333333333333333"),Vue.prototype.$loaddingNum--,Vue.prototype.$loaddingNum<=0&&Vue.prototype.$toast.clear(),!1});var b={post:function(e){var t=e.url,n=e.data,r=e.config,a=void 0===r?{}:r;return f(Object(o["a"])({method:"post",url:t,data:n},a)).then(function(e){return e}).catch(function(e){return console.error(e,"error"),!1}).finally(function(){})},get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return f.get(e.url,{params:e.data}).then(function(e){return e})},request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,n=void 0===t?"get":t,r=e.url,a=e.data,c=void 0===a?{}:a,i=e.params,u=void 0===i?{}:i,s=e.config,d=void 0===s?{}:s;return n=n.toLowerCase(),f(Object(o["a"])({method:n,url:r,data:c,params:u},d)).then(function(e){return e}).catch(function(e){return console.error(e,"error"),!1})}};t["a"]=b},"0742":function(e,t,n){t=e.exports=n("690e")(!1),t.push([e.i,"#app{width:100vw;overflow:hidden}",""])},"11d4":function(e,t,n){t=e.exports=n("690e")(!1),t.push([e.i,".main-container[data-v-1b407b02]{width:100vw;height:100vh;box-sizing:border-box}",""])},"26bb":function(e,t,n){t=e.exports=n("690e")(!1),t.push([e.i,'blockquote,body,button,dd,dl,dt,fieldset,h1,h2,h3,h4,h5,h6,hr,input,lengend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0;box-sizing:border-box}body,button,input,select,textarea{font-family:Helvetica,sans-serif,inherit;font-size:.12rem}h1{font-size:.24rem}h2{font-size:.21333rem}h3{font-size:.18667rem}h4,h5,h6{font-size:100%}address,cite,dfn,em,var{font-style:normal}code,kbd,pre,samp,tt{font-family:Courier New,Courier,monospace}small{font-size:.16rem}ol,ul{list-style:none}a{text-decoration:none}a:hover{text-decoration:underline}abbr[title],acronym[title]{border-bottom:1px dotted;cursor:help}q:after,q:before{content:""}legend{color:#000}fieldset,img{border:0}img{vertical-align:top}button,input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}hr{border:none;height:1px}html{overflow-y:scroll}.ellipsis{max-width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.clearfix{*zoom:1}.clearfix:after,.clearfix:before{display:table;line-height:0;content:""}.clearfix:after{clear:both}.left{float:left}.right{float:right}button,input,select,textarea{outline:none;border:0}textarea{resize:none}*{-webkit-overflow-scrolling:touch}',""])},3007:function(e,t,n){"use strict";n.d(t,"g",function(){return r}),n.d(t,"h",function(){return a}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return u}),n.d(t,"e",function(){return s}),n.d(t,"b",function(){return d}),n.d(t,"f",function(){return l});var o=n("007a");function r(e){var t=e.tp_id,n=e.tp_token,r=e.tp_type,a=e.invite_user_id,c=e.spu_id,i=e.bargain_id,u=e.tp_username,s=e.tp_avatar;return o["a"].post({url:"/api/v1/user/login",data:{tp_id:t,tp_token:n,tp_type:r,invite_user_id:a,spu_id:c,bargain_id:i,tp_username:u,tp_avatar:s}})}function a(e){var t=e.user_id,n=e.access_token;return o["a"].post({url:"/api/v1/user/refresh_token",data:{user_id:t,access_token:n}})}function c(e){var t=e.operation,n=e.user_address;return o["a"].post({url:"/api/v1/user/addresses/deal_my_address ",data:{operation:t,user_address:n}})}function i(e){var t=e.page_size,n=e.page_num,r=e.is_default;return o["a"].post({url:"/api/v1/user/addresses/get_my_address",data:{page_size:t,page_num:n,is_default:r}})}function u(){return o["a"].post({url:"/api/v1/user/account/get_my_account"})}function s(e){var t=e.page_size,n=e.page_num;return o["a"].post({url:"/api/v1/user/account/get_my_friends",data:{page_size:t,page_num:n}})}function d(){return o["a"].post({url:"/api/v1/tip/get_hero_list"})}function l(){return o["a"].post({url:"/api/v1/user/get_my_new_rp"})}},"42d6":function(e,t,n){var o=n("4999");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("85cb").default;r("264060b3",o,!0,{sourceMap:!1,shadowMode:!1})},"43da":function(e,t,n){var o=n("11d4");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("85cb").default;r("c9614472",o,!0,{sourceMap:!1,shadowMode:!1})},4999:function(e,t,n){t=e.exports=n("690e")(!1),t.push([e.i,".content-container[data-v-70209f87]{width:100vw;height:100vh;overflow:hidden;overflow-y:scroll;box-sizing:border-box}",""])},"56d7":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"expiration",function(){return V}),n.d(o,"paymentCancellationPrompt",function(){return C}),n.d(o,"getQueryVariable",function(){return A}),n.d(o,"gaSend",function(){return L});n("721c");var r=n("bf90"),a=(n("c3ca"),n("8bc3")),c=(n("bde1"),n("ea86")),i=(n("5c07"),n("53da"),n("2556"),n("d0f8"),n("fd9b")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("zdd-layout")],1)},s=[],d=(n("b5aa"),n("2c46")),l=n("f46d"),p=n.n(l),f=n("7f43"),h=n.n(f),m=(n("f121"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[n("zdd-content"),e.$store.state.dialogs.loginSelect.show?n("dialog-login-select"):e._e(),e.$store.state.dialogs.newGiftBag.show?n("dialog-new-gift-bag"):e._e()],1)}),b=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-container",attrs:{id:"contentContainer"}},[n("router-view")],1)},v=[],y={},k=y,w=(n("bf1b"),n("17cc")),_=Object(w["a"])(k,g,v,!1,null,"70209f87",null),x=_.exports,S={name:"zddMain",components:{"zdd-content":x,dialogBidPriceCompleted:function(e){return n.e("chunk-ae38a9fc").then(function(){var t=[n("aa07")];e.apply(null,t)}.bind(this)).catch(n.oe)},dialogLoginSelect:function(e){return n.e("chunk-2ca6c485").then(function(){var t=[n("c244")];e.apply(null,t)}.bind(this)).catch(n.oe)},dialogNewGiftBag:function(e){return n.e("chunk-08a63cfc").then(function(){var t=[n("3f73")];e.apply(null,t)}.bind(this)).catch(n.oe)}},watch:{$route:function(e){console.log("当前路径",e.path),localStorage.getItem("newUserInfo")&&"/"==this.$route.path&&this.$store.commit("setNewGiftBagShow",!0)}}},$=S,I=(n("90c5"),Object(w["a"])($,m,b,!1,null,"1b407b02",null)),O=I.exports,z=n("3007"),T={name:"App",components:{"zdd-layout":O},created:function(){var e=localStorage.getItem("newUserInfo");if(e){var t=JSON.parse(e);return this.$store.commit("setUserInfo",t),localStorage.setItem("userInfo",p()(t)),h.a.defaults.headers.common["User-Id"]=t.user_id,void(h.a.defaults.headers.common["Access-Token"]=t.access_token)}this.initToken()},methods:{initToken:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(){var t,n,o,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("userInfo"),!t){e.next=10;break}return n=JSON.parse(t),h.a.defaults.headers.common["User-Id"]=n.user_id,h.a.defaults.headers.common["Access-Token"]=n.access_token,e.next=7,Object(z["h"])(JSON.parse(t));case 7:o=e.sent,this.$store.commit("setIsreFreshToken",!0),o&&o.data&&(r=o.data,this.$store.commit("setUserInfo",r),localStorage.setItem("userInfo",p()(r)),h.a.defaults.headers.common["User-Id"]=r.user_id,h.a.defaults.headers.common["Access-Token"]=r.access_token,console.log("已经刷新token了"));case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},j=T,M=(n("5c0b"),n("5754"),Object(w["a"])(j,u,s,!1,null,null,null)),N=M.exports,P=(n("3a23"),n("e0c1"),n("081a")),U=n("a98d");n("ea65"),n("aaa4");function V(e){if(isNaN(e)||e<0)return!1;var t=e,n=Math.floor(t/36e5);n=n<10?"0"+n:n;var o=Math.floor((t-36e5*n)/6e4);o=o<10?"0"+o:o;var r=~~((t-36e5*n-6e4*o)/1e3);return r=r<10?"0"+r:r,this.expirationDat={h:n,p:o,m:r},{h:n,p:o,m:r}}function C(){setTimeout(function(){var e=n("7a3f").Toast;e({message:'Payment has been cancelled, you can re-initiate payment in "My Order" !',duration:2e3})},500)}function A(e){for(var t=window.location.search.substring(1),n=t.split("&"),o=0;o<n.length;o++){var r=n[o].split("=");if(r[0]==e)return r[1]}return!1}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};window.ga&&(console.log("ga"),ga("send",Object(U["a"])({},e,{hitType:e.hitType||"event"})))}i["a"].use(P["a"]);var B=new P["a"]({mode:"history",base:"/",routes:[{path:"*",redirect:"/"},{path:"/",name:"首页",component:function(e){return n.e("chunk-02f6e84a").then(function(){var t=[n("77b8")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/bargain",name:"砍价详情页",component:function(e){return n.e("chunk-28563124").then(function(){var t=[n("5b3c")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/isBargainingList",name:"更多砍价内页",component:function(e){return n.e("chunk-216cc510").then(function(){var t=[n("17ef")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/forBargain",name:"帮砍页面",component:function(e){return Promise.all([n.e("chunk-32d107a6"),n.e("chunk-0d830d56")]).then(function(){var t=[n("db1b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/purchase",name:"支付页面",component:function(e){return Promise.all([n.e("chunk-6d15cdb7"),n.e("chunk-8d9dc324")]).then(function(){var t=[n("5918")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/shippingAddress",name:"（已有）收货地址页",component:function(e){return n.e("chunk-6d15cdb7").then(function(){var t=[n("f390")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/purchase/paymentSuccess",name:"支付成功页面",component:function(e){return n.e("chunk-18bfeae6").then(function(){var t=[n("f3c9")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my",name:"我的账户页面",component:function(e){return n.e("chunk-b4506f6e").then(function(){var t=[n("b31c")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/withdrawRelated",name:"提现页面",component:function(e){return n.e("chunk-019c902d").then(function(){var t=[n("7a57")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myFriends",name:"我的好友",component:function(e){return n.e("chunk-061d8eea").then(function(){var t=[n("67e5")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder",name:"我的订单",component:function(e){return n.e("chunk-47869459").then(function(){var t=[n("990b")];e.apply(null,t)}.bind(this)).catch(n.oe)},redirect:"/my/myOrder/semua",children:[{path:"/my/myOrder/semua",name:"所有订单",component:function(e){return n.e("chunk-784715fc").then(function(){var t=[n("a1a5")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder/pendingPayment",name:"待完成订单",component:function(e){return n.e("chunk-311a21ba").then(function(){var t=[n("4e72")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder/completed",name:"已完成订单",component:function(e){return n.e("chunk-7cb2b5fa").then(function(){var t=[n("6bab")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/my/revenueDetails",name:"收益明细",component:function(e){return n.e("chunk-06725994").then(function(){var t=[n("1066")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/Tutorial",name:"新手教程",component:function(e){return n.e("chunk-e0b85222").then(function(){var t=[n("e717")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]});B.beforeEach(function(e,t,n){var o=localStorage.getItem("userInfo");o&&!i["a"].prototype.$curStore.state.isreFreshToken?i["a"].prototype.$curStore.watch(function(e){return e.isreFreshToken},function(){n()}):n()});var E=["/","/bargain","/purchase","/my","/purchase/paymentSuccess","/withdrawRelated","/isBargainingList"];B.afterEach(function(e){var t=e.path;E.includes(t)&&L({eventCategory:e.name,eventAction:"页面展示"})});var q=B,F=n("52c1"),G={userInfo:{},isreFreshToken:!1,goodsList:[],dialogs:{loginSelect:{show:!1,jumpUrl:""},bidPriceCompleted:{show:!1},newGiftBag:{show:!1}}},J={setUserInfo:function(e,t){e.userInfo=t},setIsreFreshToken:function(e,t){e.isreFreshToken=t},setLoginSelectShow:function(e,t){e.dialogs.loginSelect.show=t},setLoginJumpUrl:function(e,t){e.dialogs.loginSelect.jumpUrl=t},setGoodsList:function(e,t){e.goodsList=t},setNewGiftBagShow:function(e,t){e.dialogs.newGiftBag.show=t}};i["a"].use(F["a"]);var R=new F["a"].Store({state:G,mutations:J});i["a"].use(c["a"]),i["a"].use(a["a"]),i["a"].use(r["a"]),i["a"].prototype.$curStore=R,i["a"].prototype.$curRouter=q,i["a"].prototype.$util=o,i["a"].prototype.$gaSend=L,i["a"].config.productionTip=!1,new i["a"]({router:q,store:R,render:function(e){return e(N)}}).$mount("#app")},5754:function(e,t,n){"use strict";var o=n("587c"),r=n.n(o);r.a},"587c":function(e,t,n){var o=n("26bb");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("85cb").default;r("44da1b77",o,!0,{sourceMap:!1,shadowMode:!1})},"5c0b":function(e,t,n){"use strict";var o=n("dfb6"),r=n.n(o);r.a},"90c5":function(e,t,n){"use strict";var o=n("43da"),r=n.n(o);r.a},bf1b:function(e,t,n){"use strict";var o=n("42d6"),r=n.n(o);r.a},dfb6:function(e,t,n){var o=n("0742");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("85cb").default;r("3587c08c",o,!0,{sourceMap:!1,shadowMode:!1})},f121:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o="";o="2165389376885942";var r={appId:o,cookie:!0,xfbml:!0,version:"v3.2"}}});