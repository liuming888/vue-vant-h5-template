!function(e){function t(t){for(var o,c,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)c=i[l],r[c]&&f.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(d&&d(t);f.length;)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(e){return c.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-019c902d":"882db477","chunk-02f6e84a":"6937223f","chunk-061d8eea":"44e06e25","chunk-06725994":"04507723","chunk-08a63cfc":"f4da3199","chunk-18bfeae6":"8967b699","chunk-28563124":"6f9130dd","chunk-2ca6c485":"05803c07","chunk-311a21ba":"16673cd6","chunk-32d107a6":"c24c516d","chunk-0d830d56":"8c0fca2f","chunk-47869459":"0ae03e55","chunk-6d15cdb7":"32ce0273","chunk-8d9dc324":"dc24f4f8","chunk-784715fc":"1960a6c5","chunk-7cb2b5fa":"0366b003","chunk-85edebc6":"49333cab","chunk-ae38a9fc":"1442f66b","chunk-b4506f6e":"79d13411","chunk-e0b85222":"140e8c7a","chunk-01f85d8c":"84772f82","chunk-b37831ea":"772e7188","chunk-b7db2592":"9aaf4e25","chunk-9ec8e8a8":"586f361e","chunk-21b57136":"32dfb2c0","chunk-6d0b26bb":"6fcc06b2","chunk-7daff0fe":"bf7f9aef","chunk-e5abdc10":"2f3ec153"}[e]+".js"}(e),a=function(t){i.onerror=i.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");c.type=o,c.request=a,n[1](c)}r[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:i})},12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw e};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=u;a.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){n("9f45"),e.exports=n("56d7")},"007a":function(e,t,n){"use strict";var o=n("a98d"),r=n("2e73"),a=n.n(r),c=n("7f43"),i=n.n(c),u="",s="",d=localStorage.getItem("userInfo");if(d){var l=JSON.parse(d);u=l.user_id,s=l.access_token}i.a.defaults.headers.common["User-Id"]=u,i.a.defaults.headers.common["Access-Token"]=s;var f=i.a.create(),p=function(e){var t="";switch(e){case"mock":t="";case"development":break;case"dev":t="https://dev-ht-zdd-api.istarbuy.com/";break;case"test":t="https://pubtest-ht-zdd-api.istarbuy.com";break;case"production":t="https://api.istarbuy.com"}return t}("test");f.defaults.baseURL=p,f.defaults.timeout=6e3,f.defaults.withCredentials=!0,Vue.prototype.$loaddingNum=0,f.interceptors.request.use(function(e){return Vue.prototype.$loaddingNum++,Vue.prototype.$toast.loading({mask:!0,duration:0,forbidClick:!0}),Vue.prototype.$mainAppLoad||"none"==document.getElementById("mainApp").style.display||(document.getElementById("mainApp").style.display="none",Vue.prototype.$mainAppLoad=!0),e},function(e){return a.a.reject(e)}),f.interceptors.response.use(function(e){Vue.prototype.$loaddingNum--,Vue.prototype.$loaddingNum<=0&&Vue.prototype.$toast.clear();try{if(0==e.data.code)return e.data;if(3!=e.data.code)throw e.data;Vue.prototype.$toast("Anda belum login"),localStorage.clear()}catch(e){if(e.code){if(Vue.prototype.$toast(e.msg),"-1"==e.code)return e.code}else Vue.prototype.$toast("The request failed. Please try again later!");return!1}},function(e){return Vue.prototype.$loaddingNum--,Vue.prototype.$loaddingNum<=0&&Vue.prototype.$toast.clear(),!1});var h={post:function(e){var t=e.url,n=e.data,r=e.config,a=void 0===r?{}:r;return f(Object(o.a)({method:"post",url:t,data:n},a)).then(function(e){return e}).catch(function(e){return!1}).finally(function(){})},get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return f.get(e.url,{params:e.data}).then(function(e){return e})},request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,n=void 0===t?"get":t,r=e.url,a=e.data,c=void 0===a?{}:a,i=e.params,u=void 0===i?{}:i,s=e.config,d=void 0===s?{}:s;return n=n.toLowerCase(),f(Object(o.a)({method:n,url:r,data:c,params:u},d)).then(function(e){return e}).catch(function(e){return!1})}};t.a=h},"0742":function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,"#app{width:100vw;overflow:hidden}",""])},"11d4":function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,".main-container[data-v-1b407b02]{width:100vw;height:100vh;box-sizing:border-box}",""])},"26bb":function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,'blockquote,body,button,dd,dl,dt,fieldset,h1,h2,h3,h4,h5,h6,hr,input,lengend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0;box-sizing:border-box}body,button,input,select,textarea{font-family:Helvetica,sans-serif,inherit;font-size:.12rem}h1{font-size:.24rem}h2{font-size:.21333rem}h3{font-size:.18667rem}h4,h5,h6{font-size:100%}address,cite,dfn,em,var{font-style:normal}code,kbd,pre,samp,tt{font-family:Courier New,Courier,monospace}small{font-size:.16rem}ol,ul{list-style:none}a{text-decoration:none}a:hover{text-decoration:underline}abbr[title],acronym[title]{border-bottom:1px dotted;cursor:help}q:after,q:before{content:""}legend{color:#000}fieldset,img{border:0}img{vertical-align:top}button,input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}hr{border:none;height:1px}html{overflow-y:scroll}.ellipsis{max-width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.clearfix{*zoom:1}.clearfix:after,.clearfix:before{display:table;line-height:0;content:""}.clearfix:after{clear:both}.left{float:left}.right{float:right}button,input,select,textarea{outline:none;border:0}textarea{resize:none}*{-webkit-overflow-scrolling:touch}',""])},3007:function(e,t,n){"use strict";n.d(t,"g",function(){return r}),n.d(t,"h",function(){return a}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return u}),n.d(t,"e",function(){return s}),n.d(t,"b",function(){return d}),n.d(t,"f",function(){return l});var o=n("007a");function r(e){var t=e.tp_id,n=e.tp_token,r=e.tp_type,a=e.invite_user_id,c=e.spu_id,i=e.bargain_id,u=e.tp_username,s=e.tp_avatar;return o.a.post({url:"/api/v1/user/login",data:{tp_id:t,tp_token:n,tp_type:r,invite_user_id:a,spu_id:c,bargain_id:i,tp_username:u,tp_avatar:s}})}function a(e){var t=e.user_id,n=e.access_token;return o.a.post({url:"/api/v1/user/refresh_token",data:{user_id:t,access_token:n}})}function c(e){var t=e.operation,n=e.user_address;return o.a.post({url:"/api/v1/user/addresses/deal_my_address ",data:{operation:t,user_address:n}})}function i(e){var t=e.page_size,n=e.page_num,r=e.is_default;return o.a.post({url:"/api/v1/user/addresses/get_my_address",data:{page_size:t,page_num:n,is_default:r}})}function u(){return o.a.post({url:"/api/v1/user/account/get_my_account"})}function s(e){var t=e.page_size,n=e.page_num;return o.a.post({url:"/api/v1/user/account/get_my_friends",data:{page_size:t,page_num:n}})}function d(){return o.a.post({url:"/api/v1/tip/get_hero_list"})}function l(){return o.a.post({url:"/api/v1/user/get_my_new_rp"})}},"42d6":function(e,t,n){var o=n("4999");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("85cb").default)("264060b3",o,!0,{sourceMap:!1,shadowMode:!1})},"43da":function(e,t,n){var o=n("11d4");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("85cb").default)("c9614472",o,!0,{sourceMap:!1,shadowMode:!1})},4999:function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,".content-container[data-v-70209f87]{width:100vw;height:100vh;overflow:hidden;overflow-y:scroll;box-sizing:border-box}",""])},"56d7":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"expiration",function(){return k}),n.d(o,"paymentCancellationPrompt",function(){return w}),n.d(o,"getQueryVariable",function(){return _}),n.d(o,"gaSend",function(){return x}),n("721c");var r=n("bf90"),a=(n("c3ca"),n("8bc3")),c=(n("bde1"),n("ea86")),i=(n("5c07"),n("53da"),n("2556"),n("d0f8"),n("b5aa"),n("2c46")),u=n("f46d"),s=n.n(u),d=n("7f43"),l=n.n(d),f=(n("f121"),{}),p=(n("bf1b"),n("17cc")),h={name:"zddMain",components:{"zdd-content":Object(p.a)(f,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content-container",attrs:{id:"contentContainer"}},[t("router-view")],1)},[],!1,null,"70209f87",null).exports,dialogBidPriceCompleted:function(e){return n.e("chunk-ae38a9fc").then(function(){var t=[n("aa07")];e.apply(null,t)}.bind(this)).catch(n.oe)},dialogLoginSelect:function(e){return n.e("chunk-2ca6c485").then(function(){var t=[n("c244")];e.apply(null,t)}.bind(this)).catch(n.oe)},dialogNewGiftBag:function(e){return n.e("chunk-08a63cfc").then(function(){var t=[n("3f73")];e.apply(null,t)}.bind(this)).catch(n.oe)}},watch:{$route:function(e){localStorage.getItem("newUserInfo")&&"/"==this.$route.path&&this.$store.commit("setNewGiftBagShow",!0)}}},m=(n("90c5"),Object(p.a)(h,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main-container"},[t("zdd-content"),this.$store.state.dialogs.loginSelect.show?t("dialog-login-select"):this._e(),this.$store.state.dialogs.newGiftBag.show?t("dialog-new-gift-bag"):this._e()],1)},[],!1,null,"1b407b02",null).exports),b=n("3007"),g={name:"App",components:{"zdd-layout":m},created:function(){var e=localStorage.getItem("newUserInfo");if(e){var t=JSON.parse(e);return this.$store.commit("setUserInfo",t),localStorage.setItem("userInfo",s()(t)),l.a.defaults.headers.common["User-Id"]=t.user_id,void(l.a.defaults.headers.common["Access-Token"]=t.access_token)}this.initToken()},methods:{initToken:function(){var e=Object(i.a)(regeneratorRuntime.mark(function e(){var t,n,o,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("userInfo"))){e.next=10;break}return n=JSON.parse(t),l.a.defaults.headers.common["User-Id"]=n.user_id,l.a.defaults.headers.common["Access-Token"]=n.access_token,e.next=7,Object(b.h)(JSON.parse(t));case 7:o=e.sent,this.$store.commit("setIsreFreshToken",!0),o&&o.data&&(r=o.data,this.$store.commit("setUserInfo",r),localStorage.setItem("userInfo",s()(r)),l.a.defaults.headers.common["User-Id"]=r.user_id,l.a.defaults.headers.common["Access-Token"]=r.access_token);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},v=(n("5c0b"),n("5754"),Object(p.a)(g,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("zdd-layout")],1)},[],!1,null,null,null).exports),y=(n("3a23"),n("e0c1"),n("a98d"));function k(e){if(isNaN(e)||e<0)return!1;var t=e,n=Math.floor(t/36e5);n=n<10?"0"+n:n;var o=Math.floor((t-36e5*n)/6e4),r=~~((t-36e5*n-6e4*(o=o<10?"0"+o:o))/1e3);return r=r<10?"0"+r:r,this.expirationDat={h:n,p:o,m:r},{h:n,p:o,m:r}}function w(){setTimeout(function(){(0,n("7a3f").Toast)({message:'Payment has been cancelled, you can re-initiate payment in "My Order" !',duration:2e3})},500)}function _(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var o=t[n].split("=");if(o[0]==e)return o[1]}return!1}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};window.ga&&ga("send",Object(y.a)({},e,{hitType:e.hitType||"event"}))}n("ea65"),n("aaa4");var S=new VueRouter({mode:"history",base:"/",routes:[{path:"*",redirect:"/"},{path:"/",name:"首页",component:function(e){return n.e("chunk-02f6e84a").then(function(){var t=[n("77b8")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/bargain",name:"砍价详情页",component:function(e){return n.e("chunk-28563124").then(function(){var t=[n("5b3c")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/isBargainingList",name:"更多砍价内页",component:function(e){return n.e("chunk-85edebc6").then(function(){var t=[n("17ef")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/forBargain",name:"帮砍页面",component:function(e){return Promise.all([n.e("chunk-32d107a6"),n.e("chunk-0d830d56")]).then(function(){var t=[n("db1b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/purchase",name:"支付页面",component:function(e){return Promise.all([n.e("chunk-6d15cdb7"),n.e("chunk-8d9dc324")]).then(function(){var t=[n("5918")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/shippingAddress",name:"（已有）收货地址页",component:function(e){return n.e("chunk-6d15cdb7").then(function(){var t=[n("f390")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/purchase/paymentSuccess",name:"支付成功页面",component:function(e){return n.e("chunk-18bfeae6").then(function(){var t=[n("f3c9")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my",name:"我的账户页面",component:function(e){return n.e("chunk-b4506f6e").then(function(){var t=[n("b31c")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/withdrawRelated",name:"提现页面",component:function(e){return n.e("chunk-019c902d").then(function(){var t=[n("7a57")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myFriends",name:"我的好友",component:function(e){return n.e("chunk-061d8eea").then(function(){var t=[n("67e5")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder",name:"我的订单",component:function(e){return n.e("chunk-47869459").then(function(){var t=[n("990b")];e.apply(null,t)}.bind(this)).catch(n.oe)},redirect:"/my/myOrder/semua",children:[{path:"/my/myOrder/semua",name:"所有订单",component:function(e){return n.e("chunk-784715fc").then(function(){var t=[n("a1a5")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder/pendingPayment",name:"待完成订单",component:function(e){return n.e("chunk-311a21ba").then(function(){var t=[n("4e72")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder/completed",name:"已完成订单",component:function(e){return n.e("chunk-7cb2b5fa").then(function(){var t=[n("6bab")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/my/revenueDetails",name:"收益明细",component:function(e){return n.e("chunk-06725994").then(function(){var t=[n("1066")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/Tutorial",name:"新手教程",component:function(e){return n.e("chunk-e0b85222").then(function(){var t=[n("e717")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]});S.beforeEach(function(e,t,n){localStorage.getItem("userInfo")&&!Vue.prototype.$curStore.state.isreFreshToken?Vue.prototype.$curStore.watch(function(e){return e.isreFreshToken},function(){n()}):n()});var $=["/","/bargain","/purchase","/my","/purchase/paymentSuccess","/withdrawRelated","/isBargainingList"];S.afterEach(function(e){var t=e.path;$.includes(t)&&x({eventCategory:e.name,eventAction:"页面展示"})});var V=S,I=new Vuex.Store({state:{userInfo:{},isreFreshToken:!1,goodsList:[],dialogs:{loginSelect:{show:!1,jumpUrl:""},bidPriceCompleted:{show:!1},newGiftBag:{show:!1}}},mutations:{setUserInfo:function(e,t){e.userInfo=t},setIsreFreshToken:function(e,t){e.isreFreshToken=t},setLoginSelectShow:function(e,t){e.dialogs.loginSelect.show=t},setLoginJumpUrl:function(e,t){e.dialogs.loginSelect.jumpUrl=t},setGoodsList:function(e,t){e.goodsList=t},setNewGiftBagShow:function(e,t){e.dialogs.newGiftBag.show=t}}});Vue.use(c.a),Vue.use(a.a),Vue.use(r.a),Vue.prototype.$curStore=I,Vue.prototype.$curRouter=V,Vue.prototype.$util=o,Vue.prototype.$gaSend=x,Vue.config.productionTip=!1,new Vue({router:V,store:I,render:function(e){return e(v)}}).$mount("#app")},5754:function(e,t,n){"use strict";var o=n("587c");n.n(o).a},"587c":function(e,t,n){var o=n("26bb");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("85cb").default)("44da1b77",o,!0,{sourceMap:!1,shadowMode:!1})},"5c0b":function(e,t,n){"use strict";var o=n("dfb6");n.n(o).a},"8bbf":function(e,t){e.exports=Vue},"90c5":function(e,t,n){"use strict";var o=n("43da");n.n(o).a},bf1b:function(e,t,n){"use strict";var o=n("42d6");n.n(o).a},dfb6:function(e,t,n){var o=n("0742");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("85cb").default)("3587c08c",o,!0,{sourceMap:!1,shadowMode:!1})},f121:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={appId:"411009183037605",cookie:!0,xfbml:!0,version:"v3.2"}}});