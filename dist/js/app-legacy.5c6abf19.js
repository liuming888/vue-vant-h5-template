(function(e){function t(t){for(var a,r,i=t[0],s=t[1],u=t[2],d=0,l=[];d<i.length;d++)r=i[d],o[r]&&l.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-0ce067d4":"aac0205a","chunk-5d529899":"e179717e","chunk-03bb0058":"cf6dacf2","chunk-43d30024":"b7e54974","chunk-9c021cee":"e657f405","chunk-ecee016a":"b074501e","chunk-19411d50":"7b0d2831","chunk-2c4cce94":"17908592","chunk-2d0b39fb":"5073fc30","chunk-2d212f87":"dbc134f7","chunk-2d216bd3":"4e859e94","chunk-2d22256b":"808f9817","chunk-2d2226a2":"5954767d","chunk-2d225f0e":"1958ce05","chunk-2ffc49f2":"51545eb9","chunk-354576bd":"d4f27dc6","chunk-41a46fae":"2d3c821c","chunk-58a0327a":"7cddc373","chunk-5a24e296":"f0cfd41f","chunk-2560dd6b":"9b9545ea","chunk-7fcd95db":"6b7184b0","chunk-f64574ea":"835bf9b9","chunk-57c3ab31":"24c7e327","chunk-fbea59d6":"3c8cc9f2"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0ce067d4":1,"chunk-03bb0058":1,"chunk-43d30024":1,"chunk-9c021cee":1,"chunk-ecee016a":1,"chunk-19411d50":1,"chunk-2c4cce94":1,"chunk-2ffc49f2":1,"chunk-354576bd":1,"chunk-41a46fae":1,"chunk-58a0327a":1,"chunk-5a24e296":1,"chunk-2560dd6b":1,"chunk-7fcd95db":1,"chunk-f64574ea":1,"chunk-57c3ab31":1,"chunk-fbea59d6":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0ce067d4":"a7730ec7","chunk-5d529899":"31d6cfe0","chunk-03bb0058":"0cb2bc0a","chunk-43d30024":"a162f09a","chunk-9c021cee":"81d735f7","chunk-ecee016a":"794c5e7e","chunk-19411d50":"08d73256","chunk-2c4cce94":"66c709cd","chunk-2d0b39fb":"31d6cfe0","chunk-2d212f87":"31d6cfe0","chunk-2d216bd3":"31d6cfe0","chunk-2d22256b":"31d6cfe0","chunk-2d2226a2":"31d6cfe0","chunk-2d225f0e":"31d6cfe0","chunk-2ffc49f2":"aa506dca","chunk-354576bd":"485aae14","chunk-41a46fae":"2224f488","chunk-58a0327a":"1a706362","chunk-5a24e296":"6f8a3b04","chunk-2560dd6b":"52c475ee","chunk-7fcd95db":"9fb82e32","chunk-f64574ea":"5ee35d68","chunk-57c3ab31":"06445852","chunk-fbea59d6":"2d5d74e9"}[e]+".css",o=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===a||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e),u=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");c.type=a,c.request=r,n[1](c)}o[e]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"007a":function(e,t,n){"use strict";var a=n("a98d"),r=(n("f91a"),n("2e73")),o=n.n(r),c=n("2418"),i=n("7f43"),s=n.n(i),u={getUrl:function(e){var t="";switch(e){case"mock":t="";case"development":break;case"dev":t="https://dev-ht-zdd-api.istarbuy.com/";break;case"test":t="https://test-ht-zdd-api.istarbuy.com:8443";break;case"production":t="https://api.istarbuy.com";break}return t}},d="",l="",f=localStorage.getItem("userInfo");if(f){var p=JSON.parse(f);d=p.user_id,l=p.access_token}console.log("666666666666","dev"),s.a.defaults.headers.common["User-Id"]=d,s.a.defaults.headers.common["Access-Token"]=l;var h=s.a.create(),m=u.getUrl("dev");console.log("url: ",m),h.defaults.baseURL=m,h.defaults.timeout=6e3,h.defaults.withCredentials=!0,c["a"].prototype.$loaddingNum=0;var g=0;console.log("curCode: ",g),h.interceptors.request.use(function(e){return c["a"].prototype.$loaddingNum++,c["a"].prototype.$toast.loading({mask:!0,duration:0,forbidClick:!0}),e},function(e){return o.a.reject(e)}),h.interceptors.response.use(function(e){c["a"].prototype.$loaddingNum--,c["a"].prototype.$loaddingNum<=0&&c["a"].prototype.$toast.clear();try{if(e.data.code==g)return e.data;if(3!=e.data.code)throw e.data;c["a"].prototype.$toast("Anda belum login"),localStorage.clear(),c["a"].prototype.$curRouter.replace("/")}catch(t){if(t.code){if(c["a"].prototype.$toast(t.msg),"-1"==t.code)return t.code}else c["a"].prototype.$toast("The request failed. Please try again later!");return console.error(t),!1}},function(e){return c["a"].prototype.$loaddingNum--,c["a"].prototype.$loaddingNum<=0&&c["a"].prototype.$toast.clear(),!1});var b={post:function(e){var t=e.url,n=e.data,r=e.config,o=void 0===r?{}:r;return h(Object(a["a"])({method:"post",url:t,data:n},o)).then(function(e){return e}).catch(function(e){return console.error(e,"error"),!1}).finally(function(){})},get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return h.get(e.url,{params:e.data}).then(function(e){return e})},request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,n=void 0===t?"get":t,r=e.url,o=e.data,c=void 0===o?{}:o,i=e.params,s=void 0===i?{}:i,u=e.config,d=void 0===u?{}:u;return n=n.toLowerCase(),h(Object(a["a"])({method:n,url:r,data:c,params:s},d)).then(function(e){return e}).catch(function(e){return console.error(e,"error"),!1})}};t["a"]=b},"0096":function(e,t,n){e.exports=n.p+"img/fudai.0fe63d64.png"},"0d5d":function(e,t,n){"use strict";var a=n("1c35"),r=n.n(a);r.a},"1c35":function(e,t,n){},"23b7":function(e,t,n){e.exports=n.p+"img/facbook.b93c5628.png"},3007:function(e,t,n){"use strict";n.d(t,"f",function(){return r}),n.d(t,"g",function(){return o}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return u}),n.d(t,"b",function(){return d});var a=n("007a");function r(e){var t=e.tp_id,n=e.tp_token,r=e.tp_type,o=e.invite_user_id,c=e.spu_id,i=e.bargain_id,s=e.tp_username,u=e.tp_avatar;return a["a"].post({url:"/api/v1/user/login",data:{tp_id:t,tp_token:n,tp_type:r,invite_user_id:o,spu_id:c,bargain_id:i,tp_username:s,tp_avatar:u}})}function o(e){var t=e.user_id,n=e.access_token;return a["a"].post({url:"/api/v1/user/refresh_token",data:{user_id:t,access_token:n}})}function c(e){var t=e.operation,n=e.user_address;return a["a"].post({url:"/api/v1/user/addresses/deal_my_address ",data:{operation:t,user_address:n}})}function i(e){var t=e.page_size,n=e.page_num,r=e.is_default;return a["a"].post({url:"/api/v1/user/addresses/get_my_address",data:{page_size:t,page_num:n,is_default:r}})}function s(){return a["a"].post({url:"/api/v1/user/account/get_my_account"})}function u(e){var t=e.page_size,n=e.page_num;return a["a"].post({url:"/api/v1/user/account/get_my_friends",data:{page_size:t,page_num:n}})}function d(){return a["a"].post({url:"/api/v1/tip/get_hero_list"})}},"404a":function(e,t,n){},"45ef":function(e,t,n){"use strict";var a=n("5dfd"),r=n.n(a);r.a},"4a9f":function(e,t,n){"use strict";var a=n("bdb3"),r=n.n(a);r.a},"4b6d":function(e,t,n){"use strict";var a=n("404a"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"expiration",function(){return fe}),n.d(a,"paymentCancellationPrompt",function(){return pe}),n.d(a,"getQueryVariable",function(){return he});n("9074");var r=n("01f6"),o=(n("a5c3"),n("2011")),c=(n("bb6b"),n("b4b4")),i=n("2418"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("zdd-layout")],1)},u=[],d=n("f46d"),l=n.n(d),f=(n("b5aa"),n("2c46")),p=n("7f43"),h=n.n(p),m=(n("f121"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[n("zdd-content"),e.$store.state.dialogs.loginSelect.show?n("dialog-login-select"):e._e()],1)}),g=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-container"},[n("router-view"),n("income-window")],1)},v=[],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n("0096"),expression:"require('@/assets/images/fudai.png')",arg:"background-image"}],staticClass:"incomeWindow-container",class:{cur:e.showCur},on:{click:e.setShow}},[a("p",{staticClass:"income"},[e._v("Income")]),a("p",{staticClass:"num"},[e._v("RP6.00")])])},y=[],w={name:"incomeWindow",data:function(){return{showCur:!1}},methods:{setShow:function(){this.showCur=!this.showCur}}},_=w,z=(n("0d5d"),n("17cc")),M=Object(z["a"])(_,k,y,!1,null,"5c5fbd37",null),C=M.exports,A={components:{incomeWindow:C},data:function(){return{}}},S=A,B=(n("6cb4"),Object(z["a"])(S,b,v,!1,null,"b7d9ec00",null)),x=B.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialogBidPriceCompleted-container"},[a("van-popup",{staticStyle:{"background-color":"transparent",width:"100%"},attrs:{"close-on-click-overlay":!1},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("div",{staticClass:"box"},[a("img",{staticClass:"bg",attrs:{src:n("b762"),alt:""}}),a("div",{staticClass:"info-container"},[a("p",{staticClass:"title"},[e._v("Congratulations on completing the bargain!")]),a("ul",{staticClass:"goods-list"},[a("li",[a("img",{staticClass:"photo",attrs:{src:n("595f"),alt:""}}),a("div",{staticClass:"content"},[a("p",{staticClass:"c-title"},[e._v("Casual Large Capacity Copartment Handbag")]),a("p",{staticClass:"p-1"},[e._v("Rp280.000")]),a("p",{staticClass:"p-2"},[a("span",[e._v("Rp")]),e._v("0.00")])])]),a("li",[a("img",{staticClass:"photo",attrs:{src:n("595f"),alt:""}}),a("div",{staticClass:"content"},[a("p",{staticClass:"c-title"},[e._v("Casual Large Capacity Copartment Handbag")]),a("p",{staticClass:"p-1"},[e._v("Rp280.000")]),a("p",{staticClass:"p-2"},[a("span",[e._v("Rp")]),e._v("0.00")])])]),a("li",[a("img",{staticClass:"photo",attrs:{src:n("595f"),alt:""}}),a("div",{staticClass:"content"},[a("p",{staticClass:"c-title"},[e._v("Casual Large Capacity Copartment Handbag")]),a("p",{staticClass:"p-1"},[e._v("Rp280.000")]),a("p",{staticClass:"p-2"},[a("span",[e._v("Rp")]),e._v("0.00")])])])]),a("div",{staticClass:"btn"},[e._v("Go buy")]),a("p",{staticClass:"description"},[e._v("After the purchase is completed, you can view the details in [My] - [My order].")])]),a("img",{staticClass:"close",attrs:{src:n("6eff"),alt:""}})])])],1)},j=[],I={name:"dialogBidPriceCompleted",data:function(){return{show:!0}}},O=I,F=(n("4b6d"),Object(z["a"])(O,E,j,!1,null,"5b9cbb92",null)),T=F.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialogLoginSelect-container"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n("d5d3"),expression:"require('@/assets/images/login-dialog.png')",arg:"background-image"}],staticClass:"dialog-content"},[a("div",{staticClass:"tips"},[e._v("\n      Tips: If you help your friend cut down the price, you will get cash rewards.\n    ")]),a("div",{staticClass:"login-types"},[a("div",{staticClass:"login-item",on:{click:e.loginFB}},[a("img",{attrs:{src:n("23b7")}}),a("p",[e._v("Facebook login")])])]),a("img",{staticClass:"close-img",attrs:{src:n("6eff")},on:{click:e.close}})])])},P=[],$=(n("3a23"),n("3007")),N=n("59d0"),R={name:"dialogLoginSelect",mixins:[N["a"]],data:function(){return{}},methods:{close:function(){this.$store.commit("setLoginSelectShow",!1)},loginFB:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r,o,c,i,s,u,d,f,p;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.$faceBookApi.loginFB();case 2:if(t=e.sent,console.warn("loginInfo: ",t),!t){e.next=25;break}return n=t.authResponse.accessToken,a=t.id,r=t.name,o=t.pic_square,c={tp_id:a,tp_token:n,tp_type:1,tp_username:r,tp_avatar:o},i=this.$route.query,s=i.spuId,u=i.bargainId,d=i.inviteUserId,s&&(c.spu_id=s),u&&(c.bargain_id=u),d&&(c.invite_user_id=d),e.next=13,Object($["f"])(c);case 13:if(f=e.sent,console.log("result: ",f),!f||!f.data){e.next=25;break}return p=f.data,this.$store.commit("setUserInfo",p),localStorage.setItem("userInfo",l()(p)),h.a.defaults.headers.common["User-Id"]=p.user_id,h.a.defaults.headers.common["Access-Token"]=p.access_token,this.$store.commit("setLoginSelectShow",!1),1==p.is_new&&window.localStorage.setItem("newUser",1),this.$store.state.dialogs.loginSelect.jumpUrl?window.location.href=this.$store.state.dialogs.loginSelect.jumpUrl:window.location.reload(),e.abrupt("return",!0);case 25:return e.abrupt("return",!1);case 26:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},L=R,J=(n("5e37"),Object(z["a"])(L,U,P,!1,null,"61a362be",null)),G=J.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialogLoginSelect-container"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n("e89a"),expression:"require('@/assets/images/xinrenlibao.png')",arg:"background-image"}],staticClass:"dialog-content"},[a("div",{staticClass:"tit"},[e._v("Newcomer Gift Bag")]),e._m(0),a("div",{staticClass:"receive"},[e._v("Receive")]),a("img",{staticClass:"close-img",attrs:{src:n("6eff")},on:{click:e.close}})])])},Q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"num"},[n("span",{staticClass:"dw"},[e._v("Rp")]),e._v("8.888")])}],W={name:"dialogLoginSelect",data:function(){return{}},methods:{close:function(){}}},D=W,Y=(n("4a9f"),Object(z["a"])(D,q,Q,!1,null,"723f76c3",null)),K=Y.exports,X={name:"zddMain",components:{"zdd-content":x,dialogBidPriceCompleted:T,dialogLoginSelect:G,dialogNewGiftBag:K},created:function(){"1"==localStorage.getItem("newUser")&&this.$store.commit("setNewGiftBagShow",!0)}},H=X,V=(n("45ef"),Object(z["a"])(H,m,g,!1,null,"223baf50",null)),Z=V.exports,ee={name:"App",components:{"zdd-layout":Z},created:function(){this.initToken()},mounted:function(){document.getElementById("mainApp").classList.remove("pre-app")},methods:{initToken:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("userInfo"),!t){e.next=10;break}return n=JSON.parse(t),h.a.defaults.headers.common["User-Id"]=n.user_id,h.a.defaults.headers.common["Access-Token"]=n.access_token,e.next=7,Object($["g"])(JSON.parse(t));case 7:a=e.sent,this.$store.commit("setIsreFreshToken",!0),a&&(r=a.data,this.$store.commit("setUserInfo",r),localStorage.setItem("userInfo",l()(r)),h.a.defaults.headers.common["User-Id"]=r.user_id,h.a.defaults.headers.common["Access-Token"]=r.access_token,console.log("已经刷新token了"));case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},te=ee,ne=(n("5c0b"),n("5754"),Object(z["a"])(te,s,u,!1,null,null,null)),ae=ne.exports,re=n("081a");i["a"].use(re["a"]);var oe=new re["a"]({mode:"history",base:"/",routes:[{path:"*",redirect:"/"},{path:"/",name:"首页",component:function(e){return Promise.all([n.e("chunk-0ce067d4"),n.e("chunk-5d529899"),n.e("chunk-03bb0058")]).then(function(){var t=[n("77b8")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/bargain",name:"砍价页",component:function(e){return Promise.all([n.e("chunk-0ce067d4"),n.e("chunk-5d529899"),n.e("chunk-9c021cee")]).then(function(){var t=[n("5b3c")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/isBargainingList",name:"正在砍价列表页",component:function(e){return Promise.all([n.e("chunk-0ce067d4"),n.e("chunk-ecee016a")]).then(function(){var t=[n("17ef")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/forBargain",name:"好友帮砍页",component:function(e){return Promise.all([n.e("chunk-0ce067d4"),n.e("chunk-5d529899"),n.e("chunk-43d30024")]).then(function(){var t=[n("db1b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/purchase",name:"购买商品页",component:function(e){return Promise.all([n.e("chunk-f64574ea"),n.e("chunk-57c3ab31")]).then(function(){var t=[n("5918")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/shippingAddress",name:"（已有）收货地址页",component:function(e){return n.e("chunk-f64574ea").then(function(){var t=[n("f390")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/purchase/paymentSuccess",name:"支付成功页",component:function(e){return Promise.all([n.e("chunk-5d529899"),n.e("chunk-2560dd6b")]).then(function(){var t=[n("f3c9")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my",name:"我的",component:function(e){return n.e("chunk-354576bd").then(function(){var t=[n("b31c")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/withdrawRelated",name:"提现相关tab主页面",component:function(e){return n.e("chunk-5a24e296").then(function(){var t=[n("a9f2")];e.apply(null,t)}.bind(this)).catch(n.oe)},redirect:"/withdrawRelated/withdrawImmediately",children:[{path:"/withdrawRelated/withdrawImmediately",name:"立即提现",component:function(e){return n.e("chunk-58a0327a").then(function(){var t=[n("789e")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/withdrawRelated/withdrawalsRecord",name:"提现记录",component:function(e){return n.e("chunk-2d2226a2").then(function(){var t=[n("cf09")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/withdrawRelated/toWithdraw",name:"我要提现",component:function(e){return n.e("chunk-2d0b39fb").then(function(){var t=[n("28ba")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myFriends",name:"我的好友",component:function(e){return n.e("chunk-41a46fae").then(function(){var t=[n("67e5")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder",name:"我的订单",component:function(e){return n.e("chunk-19411d50").then(function(){var t=[n("990b")];e.apply(null,t)}.bind(this)).catch(n.oe)},redirect:"/my/myOrder/semua",children:[{path:"/my/myOrder/semua",name:"所有订单",component:function(e){return n.e("chunk-fbea59d6").then(function(){var t=[n("a1a5")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder/pendingPayment",name:"待完成订单",component:function(e){return n.e("chunk-2c4cce94").then(function(){var t=[n("4e72")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder/completed",name:"已完成订单",component:function(e){return n.e("chunk-7fcd95db").then(function(){var t=[n("6bab")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/my/inviteFriends",name:"邀请好友",component:function(e){return n.e("chunk-2d212f87").then(function(){var t=[n("ab4d")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/howToMakeMoney",name:"如何赚钱",component:function(e){return n.e("chunk-2d22256b").then(function(){var t=[n("cdd8")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/billboard",name:"排行榜1",component:function(e){return n.e("chunk-2d216bd3").then(function(){var t=[n("c46b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/Tutorial",name:"排行榜",component:function(e){return n.e("chunk-2d225f0e").then(function(){var t=[n("e717")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/revenueDetails",name:"收益明细2",component:function(e){return n.e("chunk-2ffc49f2").then(function(){var t=[n("1066")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]});oe.beforeEach(function(e,t,n){var a=localStorage.getItem("userInfo");a&&!i["a"].prototype.$curStore.state.isreFreshToken?i["a"].prototype.$curStore.watch(function(e){return e.isreFreshToken},function(){n()}):n()}),oe.afterEach(function(){});var ce=oe,ie=n("52c1"),se={userInfo:{},isreFreshToken:!1,goodsList:[],dialogs:{loginSelect:{show:!1,jumpUrl:""},bidPriceCompleted:{show:!1},newGiftBag:{show:!1}}},ue={setUserInfo:function(e,t){e.userInfo=t},setIsreFreshToken:function(e,t){e.isreFreshToken=t},setLoginSelectShow:function(e,t){e.dialogs.loginSelect.show=t},setLoginJumpUrl:function(e,t){e.dialogs.loginSelect.jumpUrl=t},setGoodsList:function(e,t){e.goodsList=t},setNewGiftBagShow:function(e,t){e.dialogs.newGiftBag.show=t}},de={};i["a"].use(ie["a"]);var le=new ie["a"].Store({state:se,mutations:ue,actions:de});n("ea65"),n("aaa4");function fe(e){if(isNaN(e)||e<0)return!1;var t=e,n=Math.floor(t/36e5);n=n<10?"0"+n:n;var a=Math.floor((t-36e5*n)/6e4);a=a<10?"0"+a:a;var r=~~((t-36e5*n-6e4*a)/1e3);return r=r<10?"0"+r:r,this.expirationDat={h:n,p:a,m:r},{h:n,p:a,m:r}}function pe(){setTimeout(function(){var e=n("03d8").Toast;e({message:'Payment has been cancelled, you can re-initiate payment in "My Order" !',duration:2e3})},500)}function he(e){for(var t=window.location.search.substring(1),n=t.split("&"),a=0;a<n.length;a++){var r=n[a].split("=");if(r[0]==e)return r[1]}return!1}i["a"].use(c["a"]),i["a"].use(o["a"]),i["a"].use(r["a"]),i["a"].prototype.$curStore=le,i["a"].prototype.$curRouter=ce,i["a"].prototype.$util=a,i["a"].config.productionTip=!1,new i["a"]({router:ce,store:le,render:function(e){return e(ae)}}).$mount("#app")},5754:function(e,t,n){"use strict";var a=n("d5cf"),r=n.n(a);r.a},"595f":function(e,t,n){e.exports=n.p+"img/good-large.47423e8c.png"},"59d0":function(e,t,n){"use strict";n("b5aa");var a=n("2c46"),r=n("f121");t["a"]={beforeCreate:function(){window.FB||(n("e47c"),window.fbAsyncInit=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:FB.init(r["a"]),FB.AppEvents.logPageView(),console.warn("已经初始化FB了");case 3:case"end":return e.stop()}},e)})))}}},"5c0b":function(e,t,n){"use strict";var a=n("7508"),r=n.n(a);r.a},"5dfd":function(e,t,n){},"5e37":function(e,t,n){"use strict";var a=n("dde7"),r=n.n(a);r.a},"6cb4":function(e,t,n){"use strict";var a=n("fccf"),r=n.n(a);r.a},"6eff":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAeFBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyRUjlNAAAAJ3RSTlMABMjD3utkrV2nPvLYzLEN+BQJk+Umj0oyHrl3bFXTjkQYhzZNnIUvJLS2AAACWElEQVRYw5yU3XqiQBBEq0cGBggoiAT/Eo3Z1Pu/4c4QNisBRuFc6OeFx65qWkwjN7ONVKDTVAcq2pqbYDbXMK74iyoO95jDa5yyI62CoPr5tIlf8SxGfX9F1adkV5QiZbFLTnW2oUOZ5ybJWkdkBgH2JmpN2eOJrjEtwXGihP0xoCW+wstZO8lJMImcnEif4eGdlq8SXsovWmpMIblrsMFDGreDg2CUddb7ES81ybf1qOWFZIgnCUm+jHjkjeQFT3Nx8wxzHUgmmEHi+hkLe8EsLsMqPz29ePv57NW7IbeYzdYezX3Nka0dC7DLjfpt7bCAXW8vAfmBRXzcxTiTGgvR5Pl/whALCX/GSbphFo+T/FvTEYs5dstakyywmKJ7dgyZY8ht9UfQQ+JDgyE5ab4zmfEnS0nPouxJY4hpU4kezxTTefoWxuOptKAhM4xQrlpPz6JKjJCRDcKpoxR17+mkEwcaonYv057VQ4sb5B359J+erJznkQWJW7XyHXfr6d7Ec+YKAdMCXk+et7JJipQBNKsSfo/fgrKihlUJPES05PAgNtDfVswdB0AQCKKxtFgxkmhig5IY7n9D2WqtNiCPmvBndt5Aw0CbIo54rUcsyIUDz++qC4Y+A/Q1IaEYl61bZYsRUUfSz7lL0sMKFBik3EHFl7EC48ZkMmOiywFsEmDaAAs5bmgffTOcvbaW/pn9xKOHgdDRgeoGQjSWGSTGZugoEhxklRZk1QmXyQfoHPxBtqy9EoPzULjARx1+8FIkfoOXKMWCFzIG4kMpPyLbLSLb3YjsBTJAaAzXaiJUAAAAAElFTkSuQmCC"},7508:function(e,t,n){},b762:function(e,t,n){e.exports=n.p+"img/bargain-success-bg.e2d15344.png"},bdb3:function(e,t,n){},d5cf:function(e,t,n){},d5d3:function(e,t,n){e.exports=n.p+"img/login-dialog.54a8ab3d.png"},dde7:function(e,t,n){},e47c:function(e,t,n){"use strict";n.r(t);var a=n("a98d"),r=n("2e73"),o=n.n(r);(function(){function e(){try{console.warn("hello faceBookSdk!"),function(e,t,n){var a,r=e.getElementsByTagName(t)[0];e.getElementById(n)||(a=e.createElement(t),a.id=n,a.src="https://connect.facebook.net/en_US/sdk.js",r.parentNode.insertBefore(a,r))}(document,"script","facebook-jssdk")}catch(e){console.error("出错了",e)}}e.prototype.loginFB=function(){return new o.a(function(e){FB.login(function(t){"connected"===t.status?(console.warn("login_success!!!!!",t),FB.api("/me",function(n){var r=Object(a["a"])({},t,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(t){var n=t.data.url;r=Object(a["a"])({},r,{pic_square:n}),e(r)})})):(console.error("login_error!"),e(!1))})})},e.prototype.checkFBLoginState=function(){var e=this;return new o.a(function(t,n){FB.getLoginStatus(function(a){e.statusChangeCallback(a).then(function(e){t(e)}).catch(function(e){n(!1)})})})},e.prototype.statusChangeCallback=function(e){var t=this;return"connected"===e.status?t.getUserInfo(e):(console.error("没登录！"),o.a.resolve(!1))},e.prototype.getUserInfo=function(e){return new o.a(function(t){FB.api("/me",function(n){var r=Object(a["a"])({},e,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(e){var n=e.data.url;r=Object(a["a"])({},r,{pic_square:n}),t(r)})})})},e.prototype.logoutFB=function(){FB.logout(function(e){})},e.prototype.shareFB=function(e){return new o.a(function(t){FB.ui({method:"share",href:e},function(e){e&&!e.error_message?t(e):(t(!1),console.error("Error while posting."))})})},window.$faceBookApi=new e})()},e89a:function(e,t,n){e.exports=n.p+"img/xinrenlibao.7580f8c7.png"},f121:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a="";a="2165389376885942";var r={appId:a,cookie:!0,xfbml:!0,version:"v3.2"}},fccf:function(e,t,n){}});