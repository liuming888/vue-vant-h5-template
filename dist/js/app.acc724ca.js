(function(e){function t(t){for(var a,o,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)o=i[l],r[o]&&d.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-059066dd":"c56ebb64","chunk-2199444e":"e17774f5","chunk-28012308":"6a4aac94","chunk-2b12f71a":"6e568237","chunk-5d529899":"11d4906a","chunk-0d0f3ffe":"584951b6","chunk-3b1d8396":"0d5de3a0","chunk-537a3bd4":"3d4a36d4","chunk-ecee016a":"38b9e1c0","chunk-2d0b39fb":"1bfd2cea","chunk-2d212f87":"17c46228","chunk-2d216bd3":"32bc5a28","chunk-2d22256b":"eedee754","chunk-2d2226a2":"30fc73e9","chunk-2d225f0e":"a74bf3b2","chunk-2ffc49f2":"aeb7613e","chunk-41a39eef":"821dae71","chunk-5a24e296":"53eadb3f","chunk-639674e7":"96ed99cb","chunk-757e98f0":"7fe41b83","chunk-85fa5660":"57f5178c","chunk-57c3ab31":"13f84363","chunk-fb578326":"2e8628c2","chunk-fbea59d6":"04242401"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-059066dd":1,"chunk-2199444e":1,"chunk-28012308":1,"chunk-2b12f71a":1,"chunk-0d0f3ffe":1,"chunk-3b1d8396":1,"chunk-537a3bd4":1,"chunk-ecee016a":1,"chunk-2ffc49f2":1,"chunk-41a39eef":1,"chunk-5a24e296":1,"chunk-639674e7":1,"chunk-757e98f0":1,"chunk-85fa5660":1,"chunk-57c3ab31":1,"chunk-fb578326":1,"chunk-fbea59d6":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-059066dd":"949c04ea","chunk-2199444e":"1a706362","chunk-28012308":"66c709cd","chunk-2b12f71a":"a7730ec7","chunk-5d529899":"31d6cfe0","chunk-0d0f3ffe":"e41841ff","chunk-3b1d8396":"bac5bcd9","chunk-537a3bd4":"4827a8df","chunk-ecee016a":"794c5e7e","chunk-2d0b39fb":"31d6cfe0","chunk-2d212f87":"31d6cfe0","chunk-2d216bd3":"31d6cfe0","chunk-2d22256b":"31d6cfe0","chunk-2d2226a2":"31d6cfe0","chunk-2d225f0e":"31d6cfe0","chunk-2ffc49f2":"aa506dca","chunk-41a39eef":"c3019ec4","chunk-5a24e296":"6f8a3b04","chunk-639674e7":"95499a50","chunk-757e98f0":"08d73256","chunk-85fa5660":"7a097c17","chunk-57c3ab31":"06445852","chunk-fb578326":"9fb82e32","chunk-fbea59d6":"2d5d74e9"}[e]+".css",r=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.request=a,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){o[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");c.type=a,c.request=o,n[1](c)}r[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"007a":function(e,t,n){"use strict";var a=n("5fbf"),o=(n("d0f8"),n("f91a"),n("fd9b")),r=n("7f43"),c=n.n(r),i={getUrl(e){let t="";switch(e){case"mock":t="";case"development":break;case"dev":t="https://dev-ht-zdd-api.istarbuy.com/";break;case"test":t="https://test-ht-zdd-api.istarbuy.com:8443";break;case"production":t="https://api.istarbuy.com";break}return t}};let s="",u="",l=localStorage.getItem("userInfo");if(l){let e=JSON.parse(l);s=e.user_id,u=e.access_token}console.log("666666666666","test"),c.a.defaults.headers.common["User-Id"]=s,c.a.defaults.headers.common["Access-Token"]=u;var d=c.a.create();let p=i.getUrl("test");console.log("url: ",p),d.defaults.baseURL=p,d.defaults.timeout=6e3,d.defaults.withCredentials=!0,o["a"].prototype.$loaddingNum=0;const f=0;console.log("curCode: ",f),d.interceptors.request.use(e=>{return o["a"].prototype.$loaddingNum++,o["a"].prototype.$toast.loading({mask:!0,duration:0,forbidClick:!0}),e},e=>{return Promise.reject(e)}),d.interceptors.response.use(e=>{o["a"].prototype.$loaddingNum--,o["a"].prototype.$loaddingNum<=0&&o["a"].prototype.$toast.clear();try{if(e.data.code==f)return e.data;if(3!=e.data.code)throw e.data;o["a"].prototype.$toast("Anda belum login"),localStorage.clear(),o["a"].prototype.$curRouter.replace("/")}catch(t){if(t.code){if(o["a"].prototype.$toast(t.msg),"-1"==t.code)return t.code}else o["a"].prototype.$toast("The request failed. Please try again later!");return console.error(t),!1}},e=>{return o["a"].prototype.$loaddingNum--,o["a"].prototype.$loaddingNum<=0&&o["a"].prototype.$toast.clear(),!1});const h={post(e){let t=e.url,n=e.data,o=e.config,r=void 0===o?{}:o;return d(Object(a["a"])({method:"post",url:t,data:n},r)).then(e=>{return e}).catch(e=>{return console.error(e,"error"),!1}).finally(()=>{})},get(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return d.get(e.url,{params:e.data}).then(e=>{return e})},request(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,n=void 0===t?"get":t,o=e.url,r=e.data,c=void 0===r?{}:r,i=e.params,s=void 0===i?{}:i,u=e.config,l=void 0===u?{}:u;return n=n.toLowerCase(),d(Object(a["a"])({method:n,url:o,data:c,params:s},l)).then(e=>{return e}).catch(e=>{return console.error(e,"error"),!1})}};t["a"]=h},"0096":function(e,t,n){e.exports=n.p+"img/fudai.0fe63d64.png"},"0d5d":function(e,t,n){"use strict";var a=n("1c35"),o=n.n(a);o.a},"1c35":function(e,t,n){},"23b7":function(e,t,n){e.exports=n.p+"img/facbook.b93c5628.png"},3007:function(e,t,n){"use strict";n.d(t,"f",function(){return o}),n.d(t,"g",function(){return r}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return u}),n.d(t,"b",function(){return l});var a=n("007a");function o(e){let t=e.tp_id,n=e.tp_token,o=e.tp_type,r=e.invite_user_id,c=e.spu_id,i=e.bargain_id,s=e.tp_username,u=e.tp_avatar;return a["a"].post({url:"/api/v1/user/login",data:{tp_id:t,tp_token:n,tp_type:o,invite_user_id:r,spu_id:c,bargain_id:i,tp_username:s,tp_avatar:u}})}function r(e){let t=e.user_id,n=e.access_token;return a["a"].post({url:"/api/v1/user/refresh_token",data:{user_id:t,access_token:n}})}function c(e){let t=e.operation,n=e.user_address;return a["a"].post({url:"/api/v1/user/addresses/deal_my_address ",data:{operation:t,user_address:n}})}function i(e){let t=e.page_size,n=e.page_num,o=e.is_default;return a["a"].post({url:"/api/v1/user/addresses/get_my_address",data:{page_size:t,page_num:n,is_default:o}})}function s(){return a["a"].post({url:"/api/v1/user/account/get_my_account"})}function u(e){let t=e.page_size,n=e.page_num;return a["a"].post({url:"/api/v1/user/account/get_my_friends",data:{page_size:t,page_num:n}})}function l(){return a["a"].post({url:"/api/v1/tip/get_hero_list"})}},"404a":function(e,t,n){},"45ef":function(e,t,n){"use strict";var a=n("5dfd"),o=n.n(a);o.a},"4a9f":function(e,t,n){"use strict";var a=n("bdb3"),o=n.n(a);o.a},"4b6d":function(e,t,n){"use strict";var a=n("404a"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"expiration",function(){return le}),n.d(a,"paymentCancellationPrompt",function(){return de}),n.d(a,"getQueryVariable",function(){return pe});n("721c");var o=n("bf90"),r=(n("c3ca"),n("8bc3")),c=(n("bde1"),n("ea86")),i=n("fd9b"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("zdd-layout")],1)},u=[],l=n("0348"),d=n("7f43"),p=n.n(d),f=(n("f121"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[n("zdd-content"),e.$store.state.dialogs.loginSelect.show?n("dialog-login-select"):e._e()],1)}),h=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-container"},[n("router-view"),n("income-window")],1)},g=[],b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n("0096"),expression:"require('@/assets/images/fudai.png')",arg:"background-image"}],staticClass:"incomeWindow-container",class:{cur:e.showCur},on:{click:e.setShow}},[a("p",{staticClass:"income"},[e._v("Income")]),a("p",{staticClass:"num"},[e._v("RP6.00")])])},v=[],k={name:"incomeWindow",data(){return{showCur:!1}},methods:{setShow(){this.showCur=!this.showCur}}},y=k,w=(n("0d5d"),n("17cc")),_=Object(w["a"])(y,b,v,!1,null,"5c5fbd37",null),z=_.exports,M={components:{incomeWindow:z},data(){return{}}},C=M,A=(n("6cb4"),Object(w["a"])(C,m,g,!1,null,"b7d9ec00",null)),S=A.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialogBidPriceCompleted-container"},[a("van-popup",{staticStyle:{"background-color":"transparent",width:"100%"},attrs:{"close-on-click-overlay":!1},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("div",{staticClass:"box"},[a("img",{staticClass:"bg",attrs:{src:n("b762"),alt:""}}),a("div",{staticClass:"info-container"},[a("p",{staticClass:"title"},[e._v("Congratulations on completing the bargain!")]),a("ul",{staticClass:"goods-list"},[a("li",[a("img",{staticClass:"photo",attrs:{src:n("595f"),alt:""}}),a("div",{staticClass:"content"},[a("p",{staticClass:"c-title"},[e._v("Casual Large Capacity Copartment Handbag")]),a("p",{staticClass:"p-1"},[e._v("Rp280.000")]),a("p",{staticClass:"p-2"},[a("span",[e._v("Rp")]),e._v("0.00")])])]),a("li",[a("img",{staticClass:"photo",attrs:{src:n("595f"),alt:""}}),a("div",{staticClass:"content"},[a("p",{staticClass:"c-title"},[e._v("Casual Large Capacity Copartment Handbag")]),a("p",{staticClass:"p-1"},[e._v("Rp280.000")]),a("p",{staticClass:"p-2"},[a("span",[e._v("Rp")]),e._v("0.00")])])]),a("li",[a("img",{staticClass:"photo",attrs:{src:n("595f"),alt:""}}),a("div",{staticClass:"content"},[a("p",{staticClass:"c-title"},[e._v("Casual Large Capacity Copartment Handbag")]),a("p",{staticClass:"p-1"},[e._v("Rp280.000")]),a("p",{staticClass:"p-2"},[a("span",[e._v("Rp")]),e._v("0.00")])])])]),a("div",{staticClass:"btn"},[e._v("Go buy")]),a("p",{staticClass:"description"},[e._v("After the purchase is completed, you can view the details in [My] - [My order].")])]),a("img",{staticClass:"close",attrs:{src:n("6eff"),alt:""}})])])],1)},E=[],O={name:"dialogBidPriceCompleted",data(){return{show:!0}}},j=O,I=(n("4b6d"),Object(w["a"])(j,B,E,!1,null,"5b9cbb92",null)),x=I.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialogLoginSelect-container"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n("d5d3"),expression:"require('@/assets/images/login-dialog.png')",arg:"background-image"}],staticClass:"dialog-content"},[a("div",{staticClass:"tips"},[e._v("\n      Tips: If you help your friend cut down the price, you will get cash rewards.\n    ")]),a("div",{staticClass:"login-types"},[a("div",{staticClass:"login-item",on:{click:e.loginFB}},[a("img",{attrs:{src:n("23b7")}}),a("p",[e._v("Facebook login")])])]),a("img",{staticClass:"close-img",attrs:{src:n("6eff")},on:{click:e.close}})])])},P=[],T=n("3007"),U=n("59d0"),N={name:"dialogLoginSelect",mixins:[U["a"]],data(){return{}},methods:{close(){this.$store.commit("setLoginSelectShow",!1)},loginFB(){var e=this;return Object(l["a"])(function*(){let t=yield window.$faceBookApi.loginFB();if(console.warn("loginInfo: ",t),t){let n=t.authResponse.accessToken,a=t.id,o=t.name,r=t.pic_square,c={tp_id:a,tp_token:n,tp_type:1,tp_username:o,tp_avatar:r};const i=e.$route.query,s=i.spuId,u=i.bargainId,l=i.inviteUserId;s&&(c.spu_id=s),u&&(c.bargain_id=u),l&&(c.invite_user_id=l);let d=yield Object(T["f"])(c);if(console.log("result: ",d),d&&d.data){let t=d.data;return e.$store.commit("setUserInfo",t),localStorage.setItem("userInfo",JSON.stringify(t)),p.a.defaults.headers.common["User-Id"]=t.user_id,p.a.defaults.headers.common["Access-Token"]=t.access_token,e.$store.commit("setLoginSelectShow",!1),1==t.is_new&&window.localStorage.setItem("newUser",1),e.$store.state.dialogs.loginSelect.jumpUrl?window.location.href=e.$store.state.dialogs.loginSelect.jumpUrl:window.location.reload(),!0}}return!1})()}}},$=N,L=(n("5e37"),Object(w["a"])($,F,P,!1,null,"61a362be",null)),R=L.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialogLoginSelect-container"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n("e89a"),expression:"require('@/assets/images/xinrenlibao.png')",arg:"background-image"}],staticClass:"dialog-content"},[a("div",{staticClass:"tit"},[e._v("Newcomer Gift Bag")]),e._m(0),a("div",{staticClass:"receive"},[e._v("Receive")]),a("img",{staticClass:"close-img",attrs:{src:n("6eff")},on:{click:e.close}})])])},G=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"num"},[n("span",{staticClass:"dw"},[e._v("Rp")]),e._v("8.888")])}],q={name:"dialogLoginSelect",data(){return{}},methods:{close(){}}},Q=q,W=(n("4a9f"),Object(w["a"])(Q,J,G,!1,null,"723f76c3",null)),D=W.exports,Y={name:"zddMain",components:{"zdd-content":S,dialogBidPriceCompleted:x,dialogLoginSelect:R,dialogNewGiftBag:D},created(){"1"==localStorage.getItem("newUser")&&this.$store.commit("setNewGiftBagShow",!0)}},K=Y,X=(n("45ef"),Object(w["a"])(K,f,h,!1,null,"223baf50",null)),H=X.exports,V={name:"App",components:{"zdd-layout":H},created(){this.initToken()},mounted(){document.getElementById("mainApp").classList.remove("pre-app")},methods:{initToken(){var e=this;return Object(l["a"])(function*(){let t=localStorage.getItem("userInfo");if(t){let n=JSON.parse(t);p.a.defaults.headers.common["User-Id"]=n.user_id,p.a.defaults.headers.common["Access-Token"]=n.access_token;let a=yield Object(T["g"])(JSON.parse(t));if(e.$store.commit("setIsreFreshToken",!0),a){let t=a.data;e.$store.commit("setUserInfo",t),localStorage.setItem("userInfo",JSON.stringify(t)),p.a.defaults.headers.common["User-Id"]=t.user_id,p.a.defaults.headers.common["Access-Token"]=t.access_token,console.log("已经刷新token了")}}})()}}},Z=V,ee=(n("5c0b"),n("5754"),Object(w["a"])(Z,s,u,!1,null,null,null)),te=ee.exports,ne=n("081a");i["a"].use(ne["a"]);const ae=new ne["a"]({mode:"history",base:"/",routes:[{path:"*",redirect:"/"},{path:"/",name:"首页",component:e=>Promise.all([n.e("chunk-2b12f71a"),n.e("chunk-5d529899"),n.e("chunk-3b1d8396")]).then(function(){var t=[n("77b8")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/bargain",name:"砍价页",component:e=>Promise.all([n.e("chunk-2b12f71a"),n.e("chunk-5d529899"),n.e("chunk-537a3bd4")]).then(function(){var t=[n("5b3c")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/isBargainingList",name:"正在砍价列表页",component:e=>Promise.all([n.e("chunk-2b12f71a"),n.e("chunk-ecee016a")]).then(function(){var t=[n("17ef")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/forBargain",name:"好友帮砍页",component:e=>Promise.all([n.e("chunk-2b12f71a"),n.e("chunk-5d529899"),n.e("chunk-0d0f3ffe")]).then(function(){var t=[n("db1b")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/purchase",name:"购买商品页",component:e=>Promise.all([n.e("chunk-85fa5660"),n.e("chunk-57c3ab31")]).then(function(){var t=[n("5918")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/shippingAddress",name:"（已有）收货地址页",component:e=>n.e("chunk-85fa5660").then(function(){var t=[n("f390")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/purchase/paymentSuccess",name:"支付成功页",component:e=>Promise.all([n.e("chunk-5d529899"),n.e("chunk-639674e7")]).then(function(){var t=[n("f3c9")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my",name:"我的",component:e=>n.e("chunk-059066dd").then(function(){var t=[n("b31c")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/withdrawRelated",name:"提现相关tab主页面",component:e=>n.e("chunk-5a24e296").then(function(){var t=[n("a9f2")];e.apply(null,t)}.bind(this)).catch(n.oe),redirect:"/withdrawRelated/withdrawImmediately",children:[{path:"/withdrawRelated/withdrawImmediately",name:"立即提现",component:e=>n.e("chunk-2199444e").then(function(){var t=[n("789e")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/withdrawRelated/withdrawalsRecord",name:"提现记录",component:e=>n.e("chunk-2d2226a2").then(function(){var t=[n("cf09")];e.apply(null,t)}.bind(this)).catch(n.oe)}]},{path:"/withdrawRelated/toWithdraw",name:"我要提现",component:e=>n.e("chunk-2d0b39fb").then(function(){var t=[n("28ba")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myFriends",name:"我的好友",component:e=>n.e("chunk-41a39eef").then(function(){var t=[n("67e5")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myOrder",name:"我的订单",component:e=>n.e("chunk-757e98f0").then(function(){var t=[n("990b")];e.apply(null,t)}.bind(this)).catch(n.oe),redirect:"/my/myOrder/semua",children:[{path:"/my/myOrder/semua",name:"所有订单",component:e=>n.e("chunk-fbea59d6").then(function(){var t=[n("a1a5")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myOrder/pendingPayment",name:"待完成订单",component:e=>n.e("chunk-28012308").then(function(){var t=[n("4e72")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/myOrder/completed",name:"已完成订单",component:e=>n.e("chunk-fb578326").then(function(){var t=[n("6bab")];e.apply(null,t)}.bind(this)).catch(n.oe)}]},{path:"/my/inviteFriends",name:"邀请好友",component:e=>n.e("chunk-2d212f87").then(function(){var t=[n("ab4d")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/howToMakeMoney",name:"如何赚钱",component:e=>n.e("chunk-2d22256b").then(function(){var t=[n("cdd8")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/billboard",name:"排行榜1",component:e=>n.e("chunk-2d216bd3").then(function(){var t=[n("c46b")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/Tutorial",name:"排行榜",component:e=>n.e("chunk-2d225f0e").then(function(){var t=[n("e717")];e.apply(null,t)}.bind(this)).catch(n.oe)},{path:"/my/revenueDetails",name:"收益明细2",component:e=>n.e("chunk-2ffc49f2").then(function(){var t=[n("1066")];e.apply(null,t)}.bind(this)).catch(n.oe)}]});ae.beforeEach((e,t,n)=>{let a=localStorage.getItem("userInfo");a&&!i["a"].prototype.$curStore.state.isreFreshToken?i["a"].prototype.$curStore.watch(function(e){return e.isreFreshToken},function(){n()}):n()}),ae.afterEach(()=>{});var oe=ae,re=n("52c1"),ce={userInfo:{},isreFreshToken:!1,goodsList:[],dialogs:{loginSelect:{show:!1,jumpUrl:""},bidPriceCompleted:{show:!1},newGiftBag:{show:!1}}},ie={setUserInfo(e,t){e.userInfo=t},setIsreFreshToken(e,t){e.isreFreshToken=t},setLoginSelectShow(e,t){e.dialogs.loginSelect.show=t},setLoginJumpUrl(e,t){e.dialogs.loginSelect.jumpUrl=t},setGoodsList(e,t){e.goodsList=t},setNewGiftBagShow(e,t){e.dialogs.newGiftBag.show=t}},se={};i["a"].use(re["a"]);var ue=new re["a"].Store({state:ce,mutations:ie,actions:se});n("ea65"),n("aaa4");function le(e){if(isNaN(e)||e<0)return!1;let t=e,n=Math.floor(t/36e5);n=n<10?"0"+n:n;let a=Math.floor((t-36e5*n)/6e4);a=a<10?"0"+a:a;let o=~~((t-36e5*n-6e4*a)/1e3);return o=o<10?"0"+o:o,this.expirationDat={h:n,p:a,m:o},{h:n,p:a,m:o}}function de(){setTimeout(()=>{const e=n("7a3f").Toast;e({message:'Payment has been cancelled, you can re-initiate payment in "My Order" !',duration:2e3})},500)}function pe(e){for(var t=window.location.search.substring(1),n=t.split("&"),a=0;a<n.length;a++){var o=n[a].split("=");if(o[0]==e)return o[1]}return!1}i["a"].use(c["a"]),i["a"].use(r["a"]),i["a"].use(o["a"]),i["a"].prototype.$curStore=ue,i["a"].prototype.$curRouter=oe,i["a"].prototype.$util=a,i["a"].config.productionTip=!1,new i["a"]({router:oe,store:ue,render:e=>e(te)}).$mount("#app")},5754:function(e,t,n){"use strict";var a=n("d5cf"),o=n.n(a);o.a},"595f":function(e,t,n){e.exports=n.p+"img/good-large.47423e8c.png"},"59d0":function(e,t,n){"use strict";var a=n("0348"),o=n("f121");t["a"]={beforeCreate(){window.FB||(n("e47c"),window.fbAsyncInit=Object(a["a"])(function*(){FB.init(o["a"]),FB.AppEvents.logPageView(),console.warn("已经初始化FB了")}))}}},"5c0b":function(e,t,n){"use strict";var a=n("7508"),o=n.n(a);o.a},"5dfd":function(e,t,n){},"5e37":function(e,t,n){"use strict";var a=n("dde7"),o=n.n(a);o.a},"6cb4":function(e,t,n){"use strict";var a=n("fccf"),o=n.n(a);o.a},"6eff":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAeFBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyRUjlNAAAAJ3RSTlMABMjD3utkrV2nPvLYzLEN+BQJk+Umj0oyHrl3bFXTjkQYhzZNnIUvJLS2AAACWElEQVRYw5yU3XqiQBBEq0cGBggoiAT/Eo3Z1Pu/4c4QNisBRuFc6OeFx65qWkwjN7ONVKDTVAcq2pqbYDbXMK74iyoO95jDa5yyI62CoPr5tIlf8SxGfX9F1adkV5QiZbFLTnW2oUOZ5ybJWkdkBgH2JmpN2eOJrjEtwXGihP0xoCW+wstZO8lJMImcnEif4eGdlq8SXsovWmpMIblrsMFDGreDg2CUddb7ES81ybf1qOWFZIgnCUm+jHjkjeQFT3Nx8wxzHUgmmEHi+hkLe8EsLsMqPz29ePv57NW7IbeYzdYezX3Nka0dC7DLjfpt7bCAXW8vAfmBRXzcxTiTGgvR5Pl/whALCX/GSbphFo+T/FvTEYs5dstakyywmKJ7dgyZY8ht9UfQQ+JDgyE5ab4zmfEnS0nPouxJY4hpU4kezxTTefoWxuOptKAhM4xQrlpPz6JKjJCRDcKpoxR17+mkEwcaonYv057VQ4sb5B359J+erJznkQWJW7XyHXfr6d7Ec+YKAdMCXk+et7JJipQBNKsSfo/fgrKihlUJPES05PAgNtDfVswdB0AQCKKxtFgxkmhig5IY7n9D2WqtNiCPmvBndt5Aw0CbIo54rUcsyIUDz++qC4Y+A/Q1IaEYl61bZYsRUUfSz7lL0sMKFBik3EHFl7EC48ZkMmOiywFsEmDaAAs5bmgffTOcvbaW/pn9xKOHgdDRgeoGQjSWGSTGZugoEhxklRZk1QmXyQfoHPxBtqy9EoPzULjARx1+8FIkfoOXKMWCFzIG4kMpPyLbLSLb3YjsBTJAaAzXaiJUAAAAAElFTkSuQmCC"},7508:function(e,t,n){},b762:function(e,t,n){e.exports=n.p+"img/bargain-success-bg.e2d15344.png"},bdb3:function(e,t,n){},d5cf:function(e,t,n){},d5d3:function(e,t,n){e.exports=n.p+"img/login-dialog.54a8ab3d.png"},dde7:function(e,t,n){},e47c:function(e,t,n){"use strict";n.r(t);var a=n("5fbf");(function(){function e(){try{console.warn("hello faceBookSdk!"),function(e,t,n){var a,o=e.getElementsByTagName(t)[0];e.getElementById(n)||(a=e.createElement(t),a.id=n,a.src="https://connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(a,o))}(document,"script","facebook-jssdk")}catch(e){console.error("出错了",e)}}e.prototype.loginFB=function(){return new Promise(e=>{FB.login(function(t){"connected"===t.status?(console.warn("login_success!!!!!",t),FB.api("/me",function(n){var o=Object(a["a"])({},t,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(t){var n=t.data.url;o=Object(a["a"])({},o,{pic_square:n}),e(o)})})):(console.error("login_error!"),e(!1))})})},e.prototype.checkFBLoginState=function(){var e=this;return new Promise((t,n)=>{FB.getLoginStatus(function(a){e.statusChangeCallback(a).then(e=>{t(e)}).catch(e=>{n(!1)})})})},e.prototype.statusChangeCallback=function(e){var t=this;return"connected"===e.status?t.getUserInfo(e):(console.error("没登录！"),Promise.resolve(!1))},e.prototype.getUserInfo=function(e){return new Promise(t=>{FB.api("/me",function(n){var o=Object(a["a"])({},e,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(e){var n=e.data.url;o=Object(a["a"])({},o,{pic_square:n}),t(o)})})})},e.prototype.logoutFB=function(){FB.logout(function(e){})},e.prototype.shareFB=function(e){return new Promise(t=>{FB.ui({method:"share",href:e},function(e){e&&!e.error_message?t(e):(t(!1),console.error("Error while posting."))})})},window.$faceBookApi=new e})()},e89a:function(e,t,n){e.exports=n.p+"img/xinrenlibao.7580f8c7.png"},f121:function(e,t,n){"use strict";n.d(t,"a",function(){return o});let a="";a="411009183037605";const o={appId:a,cookie:!0,xfbml:!0,version:"v3.2"}},fccf:function(e,t,n){}});