(function(e){function t(t){for(var a,r,i=t[0],s=t[1],u=t[2],d=0,l=[];d<i.length;d++)r=i[d],o[r]&&l.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-194becb6":"9b8d5620","chunk-72a9846d":"555b7d6e","chunk-1a4bc82e":"fddce34f","chunk-26f8f8c2":"636d4115","chunk-2d0b39fb":"1bfd2cea","chunk-2d212f87":"17c46228","chunk-2d216bd3":"32bc5a28","chunk-2d22256b":"eedee754","chunk-2d2226a2":"30fc73e9","chunk-2d225f0e":"2f260705","chunk-32777d6a":"cdc02f68","chunk-3ff27d51":"91abf7ab","chunk-57c07011":"43382eac","chunk-5a24e296":"53eadb3f","chunk-5a7455c4":"254a47ea","chunk-5add0274":"42a011dc","chunk-72ceb342":"84f87bf6","chunk-344e533d":"9ce58569","chunk-1a541dec":"44e23411","chunk-57032769":"481a7167","chunk-8b204f46":"1f3e9fbb","chunk-bc50fb34":"46333c02","chunk-61ede1e8":"ffa15cf8","chunk-7f490e03":"73367495"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-194becb6":1,"chunk-72a9846d":1,"chunk-1a4bc82e":1,"chunk-26f8f8c2":1,"chunk-32777d6a":1,"chunk-3ff27d51":1,"chunk-57c07011":1,"chunk-5a24e296":1,"chunk-5a7455c4":1,"chunk-5add0274":1,"chunk-344e533d":1,"chunk-1a541dec":1,"chunk-57032769":1,"chunk-8b204f46":1,"chunk-bc50fb34":1,"chunk-61ede1e8":1,"chunk-7f490e03":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-194becb6":"0a61f6c6","chunk-72a9846d":"ba7ef91f","chunk-1a4bc82e":"1d50dda3","chunk-26f8f8c2":"08d73256","chunk-2d0b39fb":"31d6cfe0","chunk-2d212f87":"31d6cfe0","chunk-2d216bd3":"31d6cfe0","chunk-2d22256b":"31d6cfe0","chunk-2d2226a2":"31d6cfe0","chunk-2d225f0e":"31d6cfe0","chunk-32777d6a":"c3019ec4","chunk-3ff27d51":"a309d8c7","chunk-57c07011":"78c543f8","chunk-5a24e296":"6f8a3b04","chunk-5a7455c4":"b7a4fec5","chunk-5add0274":"4313fb8c","chunk-72ceb342":"31d6cfe0","chunk-344e533d":"8c416dd5","chunk-1a541dec":"1f32b30c","chunk-57032769":"ecdbd84d","chunk-8b204f46":"6d006631","chunk-bc50fb34":"48c87bcb","chunk-61ede1e8":"06dd552a","chunk-7f490e03":"e88d10e6"}[e]+".css",o=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===a||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e),u=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");c.type=a,c.request=r,n[1](c)}o[e]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"007a":function(e,t,n){"use strict";var a=n("a98d"),r=n("2e73"),o=n.n(r),c=n("fd9b"),i=n("7f43"),s=n.n(i),u={getUrl:function(e){var t="";switch(e){case"mock":t="";case"development":break;case"dev":t="https://dev-ht-zdd-api.batmobi.net";break;case"test":t="https://test-ht-zdd-api.batmobi.net";break;case"production":t="http://127.0.0.1:9078";break}return t}},d="",l="",f=localStorage.getItem("userInfo");if(f){var p=JSON.parse(f);d=p.user_id,l=p.access_token}d=1,l="d06ba9ad12724f458d6cdd615cab76ac",s.a.defaults.headers.common["User-Id"]=d,s.a.defaults.headers.common["Access-Token"]=l;var h=s.a.create(),m=u.getUrl("production");console.log("url: ",m),h.defaults.baseURL=m,h.defaults.timeout=6e3,h.defaults.withCredentials=!0,c["a"].prototype.$loaddingNum=0;var g=0;console.log("curCode: ",g),h.interceptors.request.use(function(e){return c["a"].prototype.$loaddingNum++,c["a"].prototype.$toast.loading({mask:!0,duration:0,forbidClick:0}),e},function(e){return o.a.reject(e)}),h.interceptors.response.use(function(e){c["a"].prototype.$loaddingNum--,c["a"].prototype.$loaddingNum<=0&&c["a"].prototype.$toast.clear();try{if(e.data.code==g)return e.data;if(3!=e.data.code)throw e.data}catch(t){if(t.code){if(c["a"].prototype.$toast(t.msg),"-1"==t.code)return t.code}else c["a"].prototype.$toast("The request failed. Please try again later!");return console.error(t),!1}},function(e){return c["a"].prototype.$loaddingNum--,c["a"].prototype.$loaddingNum<=0&&c["a"].prototype.$toast.clear(),!1});var b={post:function(e){var t=e.url,n=e.data,r=e.config,o=void 0===r?{}:r;return h(Object(a["a"])({method:"post",url:t,data:n},o)).then(function(e){return e}).catch(function(e){return console.error(e,"error"),!1}).finally(function(){})},get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return h.get(e.url,{params:e.data}).then(function(e){return e})},request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,n=void 0===t?"get":t,r=e.url,o=e.data,c=void 0===o?{}:o,i=e.params,s=void 0===i?{}:i,u=e.config,d=void 0===u?{}:u;return n=n.toLowerCase(),h(Object(a["a"])({method:n,url:r,data:c,params:s},d)).then(function(e){return e}).catch(function(e){return console.error(e,"error"),!1})}};t["a"]=b},"0096":function(e,t,n){e.exports=n.p+"img/fudai.0fe63d64.png"},"0fb5":function(e,t,n){"use strict";var a=n("e5e9"),r=n.n(a);r.a},"23b7":function(e,t,n){e.exports=n.p+"img/facbook.b93c5628.png"},3007:function(e,t,n){"use strict";n.d(t,"f",function(){return r}),n.d(t,"g",function(){return o}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return u}),n.d(t,"b",function(){return d});var a=n("007a");function r(e){var t=e.tp_id,n=e.tp_token,r=e.tp_type,o=e.invite_user_id,c=e.spu_id,i=e.bargain_id,s=e.tp_username,u=e.tp_avatar;return a["a"].post({url:"/api/v1/user/login",data:{tp_id:t,tp_token:n,tp_type:r,invite_user_id:o,spu_id:c,bargain_id:i,tp_username:s,tp_avatar:u}})}function o(e){var t=e.user_id,n=e.access_token;return a["a"].post({url:"/api/v1/user/refresh_token",data:{user_id:t,access_token:n}})}function c(e){var t=e.operation,n=e.user_address;return a["a"].post({url:"/api/v1/user/addresses/deal_my_address ",data:{operation:t,user_address:n}})}function i(e){var t=e.page_size,n=e.page_num,r=e.is_default;return a["a"].post({url:"/api/v1/user/addresses/get_my_address",data:{page_size:t,page_num:n,is_default:r}})}function s(){return a["a"].post({url:"/api/v1/user/account/get_my_account"})}function u(e){var t=e.page_size,n=e.page_num;return a["a"].post({url:"/api/v1/user/account/get_my_friends",data:{page_size:t,page_num:n}})}function d(){return a["a"].post({url:"/api/v1/tip/get_hero_list"})}},"35c3":function(e,t,n){"use strict";var a=n("653f"),r=n.n(a);r.a},"404a":function(e,t,n){},"4b6d":function(e,t,n){"use strict";var a=n("404a"),r=n.n(a);r.a},5596:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getCookie",function(){return pe}),n.d(a,"delCookie",function(){return he}),n.d(a,"formatDateTime",function(){return me}),n.d(a,"formatTimeDemonstration",function(){return ge}),n.d(a,"formatMoney",function(){return be}),n.d(a,"expiration",function(){return ve}),n.d(a,"paymentCancellationPrompt",function(){return ke});n("0c01");var r=n("83bf"),o=(n("1ec3"),n("7c4f")),c=(n("ff44"),n("c6f0")),i=(n("5c07"),n("53da"),n("2556"),n("d0f8"),n("fd9b")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("zdd-layout")],1)},u=[],d=n("f46d"),l=n.n(d),f=(n("b5aa"),n("2c46")),p=n("7f43"),h=n.n(p),m=n("f121"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[n("zdd-content"),e.$store.state.dialogs.loginSelect.show?n("dialog-login-select"):e._e()],1)},b=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-container"},[n("router-view"),n("income-window")],1)},k=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n("0096"),expression:"require('@/assets/images/fudai.png')",arg:"background-image"}],staticClass:"incomeWindow-container",class:{cur:e.showCur},on:{click:e.setShow}},[a("p",{staticClass:"income"},[e._v("Income")]),a("p",{staticClass:"num"},[e._v("$6.00")])])},_=[],w={name:"incomeWindow",data:function(){return{showCur:!1}},methods:{setShow:function(){this.showCur=!this.showCur}}},z=w,M=(n("35c3"),n("17cc")),C=Object(M["a"])(z,y,_,!1,null,"5de23dd5",null),A=C.exports,S={components:{incomeWindow:A},data:function(){return{}}},x=S,B=(n("6cb4"),Object(M["a"])(x,v,k,!1,null,"b7d9ec00",null)),I=B.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialogBidPriceCompleted-container"},[a("van-popup",{staticStyle:{"background-color":"transparent",width:"100%"},attrs:{"close-on-click-overlay":!1},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("div",{staticClass:"box"},[a("img",{staticClass:"bg",attrs:{src:n("b762"),alt:""}}),a("div",{staticClass:"info-container"},[a("p",{staticClass:"title"},[e._v("Congratulations on completing the bargain!")]),a("ul",{staticClass:"goods-list"},[a("li",[a("img",{staticClass:"photo",attrs:{src:n("595f"),alt:""}}),a("div",{staticClass:"content"},[a("p",{staticClass:"c-title"},[e._v("Casual Large Capacity Copartment Handbag")]),a("p",{staticClass:"p-1"},[e._v("Rp280.000")]),a("p",{staticClass:"p-2"},[a("span",[e._v("Rp")]),e._v("0.00")])])]),a("li",[a("img",{staticClass:"photo",attrs:{src:n("595f"),alt:""}}),a("div",{staticClass:"content"},[a("p",{staticClass:"c-title"},[e._v("Casual Large Capacity Copartment Handbag")]),a("p",{staticClass:"p-1"},[e._v("Rp280.000")]),a("p",{staticClass:"p-2"},[a("span",[e._v("Rp")]),e._v("0.00")])])]),a("li",[a("img",{staticClass:"photo",attrs:{src:n("595f"),alt:""}}),a("div",{staticClass:"content"},[a("p",{staticClass:"c-title"},[e._v("Casual Large Capacity Copartment Handbag")]),a("p",{staticClass:"p-1"},[e._v("Rp280.000")]),a("p",{staticClass:"p-2"},[a("span",[e._v("Rp")]),e._v("0.00")])])])]),a("div",{staticClass:"btn"},[e._v("Go buy")]),a("p",{staticClass:"description"},[e._v("After the purchase is completed, you can view the details in [My] - [My order].")])]),a("img",{staticClass:"close",attrs:{src:n("6eff"),alt:""}})])])],1)},T=[],O={name:"dialogBidPriceCompleted",data:function(){return{show:!0}}},E=O,F=(n("4b6d"),Object(M["a"])(E,j,T,!1,null,"5b9cbb92",null)),$=F.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialogLoginSelect-container"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n("d5d3"),expression:"require('@/assets/images/login-dialog.png')",arg:"background-image"}],staticClass:"dialog-content"},[a("div",{staticClass:"tips"},[e._v("\n      Tips: If you help cut, you will get the income.\n    ")]),a("div",{staticClass:"login-types"},[a("div",{staticClass:"login-item",on:{click:e.loginFB}},[a("img",{attrs:{src:n("23b7")}}),a("p",[e._v("Facebook login")])])]),a("img",{staticClass:"close-img",attrs:{src:n("6eff")},on:{click:e.close}})])])},P=[],R=(n("3a23"),n("3007")),L={name:"dialogLoginSelect",data:function(){return{}},methods:{close:function(){this.$store.commit("setLoginSelectShow",!1)},loginFB:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r,o,c,i,s,u,d,f,p;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.$faceBookApi.loginFB();case 2:if(t=e.sent,console.warn("loginInfo: ",t),!t){e.next=24;break}return n=t.authResponse.accessToken,a=t.id,r=t.name,o=t.pic_square,c={tp_id:a,tp_token:n,tp_type:1,tp_username:r,tp_avatar:o},i=this.$route.query,s=i.spuId,u=i.bargainId,d=i.inviteUserId,s&&(c.spu_id=s),u&&(c.bargain_id=u),d&&(c.invite_user_id=d),e.next=13,Object(R["f"])(c);case 13:if(f=e.sent,console.log("result: ",f),!f){e.next=24;break}return p=f.data,this.$store.commit("setUserInfo",p),localStorage.setItem("userInfo",l()(p)),h.a.defaults.headers.common["User-Id"]=p.user_id,h.a.defaults.headers.common["Access-Token"]=p.access_token,this.$store.commit("setLoginSelectShow",!1),this.$store.state.dialogs.loginSelect.jumpUrl&&(window.location.href=this.$store.state.dialogs.loginSelect.jumpUrl),e.abrupt("return",!0);case 24:return e.abrupt("return",!1);case 25:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},N=L,q=(n("0fb5"),Object(M["a"])(N,U,P,!1,null,"43fb1bae",null)),J=q.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialogLoginSelect-container"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n("e89a"),expression:"require('@/assets/images/xinrenlibao.png')",arg:"background-image"}],staticClass:"dialog-content"},[a("div",{staticClass:"tit"},[e._v("Newcomer Gift Bag")]),e._m(0),a("div",{staticClass:"receive"},[e._v("Receive")]),a("img",{staticClass:"close-img",attrs:{src:n("6eff")},on:{click:e.close}})])])},G=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"num"},[n("span",{staticClass:"dw"},[e._v("Rp")]),e._v("8.888")])}],W={name:"dialogLoginSelect",data:function(){return{}},methods:{close:function(){},loginFB:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r,o,c,i,s,u,d,f,p;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.$faceBookApi.loginFB();case 2:if(t=e.sent,console.warn("loginInfo: ",t),!t){e.next=24;break}return n=t.authResponse.accessToken,a=t.id,r=t.name,o=t.pic_square,c={tp_id:a,tp_token:n,tp_type:1,tp_username:r,tp_avatar:o},i=this.$route.query,s=i.spuId,u=i.bargainId,d=i.inviteUserId,s&&(c.spu_id=s),u&&(c.bargain_id=u),d&&(c.invite_user_id=d),e.next=13,Object(R["f"])(c);case 13:if(f=e.sent,console.log("result: ",f),!f){e.next=24;break}return p=f.data,this.$store.commit("setUserInfo",p),localStorage.setItem("userInfo",l()(p)),h.a.defaults.headers.common["User-Id"]=p.user_id,h.a.defaults.headers.common["Access-Token"]=p.access_token,this.$store.commit("setLoginSelectShow",!1),this.$store.state.dialogs.loginSelect.jumpUrl&&this.$router.push({path:this.$store.state.dialogs.loginSelect.jumpUrl}),e.abrupt("return",!0);case 24:return e.abrupt("return",!1);case 25:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},Q=W,Y=(n("ba76"),Object(M["a"])(Q,D,G,!1,null,"0facad28",null)),K=Y.exports,X={name:"zddMain",components:{"zdd-content":I,dialogBidPriceCompleted:$,dialogLoginSelect:J,dialogNewGiftBag:K}},H=X,Z=(n("b6dd"),Object(M["a"])(H,g,b,!1,null,"00b10424",null)),V=Z.exports,ee={name:"App",components:{"zdd-layout":V},created:function(){this.initToken(),this.initFB()},mounted:function(){document.getElementById("mainApp").classList.remove("pre-app")},methods:{initFB:function(){window.fbAsyncInit=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:FB.init(m["a"]),FB.AppEvents.logPageView(),console.warn("已经初始化FB了");case 3:case"end":return e.stop()}},e)}))},initToken:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("userInfo"),!t){e.next=10;break}return n=JSON.parse(t),h.a.defaults.headers.common["User-Id"]=n.user_id,h.a.defaults.headers.common["Access-Token"]=n.access_token,e.next=7,Object(R["g"])(JSON.parse(t));case 7:a=e.sent,this.$store.commit("setIsreFreshToken",!0),a&&(r=a.data,this.$store.commit("setUserInfo",r),localStorage.setItem("userInfo",l()(r)),h.a.defaults.headers.common["User-Id"]=r.user_id,h.a.defaults.headers.common["Access-Token"]=r.access_token,console.log("已经刷新token了"));case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},te=ee,ne=(n("5c0b"),n("5754"),Object(M["a"])(te,s,u,!1,null,null,null)),ae=ne.exports,re=n("081a");i["a"].use(re["a"]);var oe=new re["a"]({mode:"history",base:"/",routes:[{path:"*",redirect:"/"},{path:"/",name:"首页",component:function(e){return Promise.all([n.e("chunk-72ceb342"),n.e("chunk-344e533d"),n.e("chunk-1a541dec")]).then(function(){var t=[n("77b8")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/bargain",name:"砍价页",component:function(e){return Promise.all([n.e("chunk-72ceb342"),n.e("chunk-344e533d"),n.e("chunk-bc50fb34")]).then(function(){var t=[n("5b3c")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/isBargainingList",name:"正在砍价列表页",component:function(e){return Promise.all([n.e("chunk-72ceb342"),n.e("chunk-344e533d"),n.e("chunk-57032769")]).then(function(){var t=[n("17ef")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/forBargain",name:"好友帮砍页",component:function(e){return Promise.all([n.e("chunk-72ceb342"),n.e("chunk-344e533d"),n.e("chunk-8b204f46")]).then(function(){var t=[n("db1b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/purchase",name:"购买商品页",component:function(e){return Promise.all([n.e("chunk-194becb6"),n.e("chunk-72a9846d")]).then(function(){var t=[n("5918")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/shippingAddress",name:"（已有）收货地址页",component:function(e){return n.e("chunk-194becb6").then(function(){var t=[n("f390")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/purchase/paymentSuccess",name:"支付成功页",component:function(e){return Promise.all([n.e("chunk-72ceb342"),n.e("chunk-61ede1e8")]).then(function(){var t=[n("f3c9")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my",name:"我的",component:function(e){return n.e("chunk-5add0274").then(function(){var t=[n("b31c")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/withdrawRelated",name:"提现相关tab主页面",component:function(e){return n.e("chunk-5a24e296").then(function(){var t=[n("a9f2")];e.apply(null,t)}.bind(this)).catch(n.oe)},redirect:"/withdrawRelated/withdrawImmediately",children:[{path:"/withdrawRelated/withdrawImmediately",name:"立即提现",component:function(e){return n.e("chunk-57c07011").then(function(){var t=[n("789e")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/withdrawRelated/withdrawalsRecord",name:"提现记录",component:function(e){return n.e("chunk-2d2226a2").then(function(){var t=[n("cf09")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/withdrawRelated/toWithdraw",name:"我要提现",component:function(e){return n.e("chunk-2d0b39fb").then(function(){var t=[n("28ba")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myFriends",name:"我的好友",component:function(e){return n.e("chunk-32777d6a").then(function(){var t=[n("67e5")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder",name:"我的订单",component:function(e){return n.e("chunk-26f8f8c2").then(function(){var t=[n("990b")];e.apply(null,t)}.bind(this)).catch(n.oe)},redirect:"/my/myOrder/semua",children:[{path:"/my/myOrder/semua",name:"所有订单",component:function(e){return n.e("chunk-1a4bc82e").then(function(){var t=[n("a1a5")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder/pendingPayment",name:"待完成订单",component:function(e){return n.e("chunk-7f490e03").then(function(){var t=[n("4e72")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/myOrder/completed",name:"已完成订单",component:function(e){return n.e("chunk-5a7455c4").then(function(){var t=[n("6bab")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/my/inviteFriends",name:"邀请好友",component:function(e){return n.e("chunk-2d212f87").then(function(){var t=[n("ab4d")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/howToMakeMoney",name:"如何赚钱",component:function(e){return n.e("chunk-2d22256b").then(function(){var t=[n("cdd8")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/billboard",name:"排行榜1",component:function(e){return n.e("chunk-2d216bd3").then(function(){var t=[n("c46b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/Tutorial",name:"排行榜",component:function(e){return n.e("chunk-2d225f0e").then(function(){var t=[n("e717")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/my/revenueDetails",name:"收益明细2",component:function(e){return n.e("chunk-3ff27d51").then(function(){var t=[n("1066")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]});oe.beforeEach(function(e,t,n){var a=localStorage.getItem("userInfo");a&&!i["a"].prototype.$curStore.state.isreFreshToken?i["a"].prototype.$curStore.watch(function(e){return e.isreFreshToken},function(){n()}):n()}),oe.afterEach(function(){});var ce=oe,ie=n("52c1"),se={userInfo:{},isreFreshToken:!1,goodsList:[],dialogs:{loginSelect:{show:!1,jumpUrl:""},bidPriceCompleted:{show:!1}}},ue={setUserInfo:function(e,t){e.userInfo=t},setIsreFreshToken:function(e,t){e.isreFreshToken=t},setLoginSelectShow:function(e,t){e.dialogs.loginSelect.show=t},setLoginJumpUrl:function(e,t){e.dialogs.loginSelect.jumpUrl=t},setGoodsList:function(e,t){e.goodsList=t}},de={};i["a"].use(ie["a"]);var le=new ie["a"].Store({state:se,mutations:ue,actions:de}),fe=n("007a");n("f91a");function pe(e){if(document.cookie.length>0){var t=document.cookie.indexOf(e+"=");if(-1!=t)return!0}return!1}function he(e){var t=new Date;t.setTime(t.getTime()-1);var n=pe(e);n&&(document.cookie=e+"=;expires="+t.toGMTString())}function me(e){var t=new Date(e),n=t.getDate();n=n<10?"0"+n:n;var a=t.getHours();a=a<10?"0"+a:a;var r=t.getMinutes(),o=t.getSeconds();return r=r<10?"0"+r:r,o=o<10?"0"+o:o,a+":"+r+":"+o}function ge(e){var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1;a=a<10?"0"+a:a;var r=t.getDate();return r=r<10?"0"+r:r,"".concat(r,"/").concat(a,"/").concat(n)}function be(e){var t=""+e;if(/[^0-9\.]/.test(t))return"invalid value";t=t.replace(/^(\d*)$/,"$1."),t=t.replace(/(\d*\.\d\d)\d*/,"$1"),t=t.replace(".",",");var n=/(\d)(\d{3},)/;while(n.test(t))t=t.replace(n,"$1,$2");var a=t.replace(/^\./,"0.");return a.substring("0",a.length-1)}function ve(e){if(isNaN(e)||e<0)return!1;var t=e,n=Math.floor(t/36e5);n=n<10?"0"+n:n;var a=Math.floor((t-36e5*n)/6e4);a=a<10?"0"+a:a;var r=t-36e5*n-6e4*a;return r=r<10?"0"+r:r,this.expirationDat={h:n,p:a,m:r},{h:n,p:a,m:r}}function ke(){setTimeout(function(){var e=n("ec87").Toast;e({message:'Payment has been cancelled, you can re-initiate payment in "My Order" !',duration:2e3})},500)}var ye=n("a98d"),_e=n("2e73"),we=n.n(_e);(function(){function e(){try{console.warn("hello faceBookSdk!"),function(e,t,n){var a,r=e.getElementsByTagName(t)[0];e.getElementById(n)||(a=e.createElement(t),a.id=n,a.src="https://connect.facebook.net/en_US/sdk.js",r.parentNode.insertBefore(a,r))}(document,"script","facebook-jssdk")}catch(e){console.error("出错了",e)}}e.prototype.loginFB=function(){return new we.a(function(e){FB.login(function(t){"connected"===t.status?(console.warn("login_success!!!!!",t),FB.api("/me",function(n){var a=Object(ye["a"])({},t,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(t){var n=t.data.url;a=Object(ye["a"])({},a,{pic_square:n}),e(a)})})):(console.error("login_error!"),e(!1))})})},e.prototype.checkFBLoginState=function(){var e=this;return new we.a(function(t,n){FB.getLoginStatus(function(a){e.statusChangeCallback(a).then(function(e){t(e)}).catch(function(e){n(!1)})})})},e.prototype.statusChangeCallback=function(e){var t=this;return"connected"===e.status?t.getUserInfo(e):(console.error("没登录！"),we.a.resolve(!1))},e.prototype.getUserInfo=function(e){return new we.a(function(t){FB.api("/me",function(n){var a=Object(ye["a"])({},e,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(e){var n=e.data.url;a=Object(ye["a"])({},a,{pic_square:n}),t(a)})})})},e.prototype.logoutFB=function(){FB.logout(function(e){})},e.prototype.shareFB=function(e){return new we.a(function(t){FB.ui({method:"share",href:e},function(e){e&&!e.error_message?t(e):(t(!1),console.error("Error while posting."))})})},window.$faceBookApi=new e})(),i["a"].use(c["a"]),i["a"].use(o["a"]),i["a"].use(r["a"]),i["a"].prototype.$curStore=le,i["a"].prototype.$util=a,i["a"].prototype.$request=fe["a"],i["a"].config.productionTip=!1,new i["a"]({router:ce,store:le,render:function(e){return e(ae)}}).$mount("#app")},5754:function(e,t,n){"use strict";var a=n("d5cf"),r=n.n(a);r.a},"595f":function(e,t,n){e.exports=n.p+"img/good-large.47423e8c.png"},"5c0b":function(e,t,n){"use strict";var a=n("7508"),r=n.n(a);r.a},"653f":function(e,t,n){},"6cb4":function(e,t,n){"use strict";var a=n("fccf"),r=n.n(a);r.a},"6eff":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAeFBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyRUjlNAAAAJ3RSTlMABMjD3utkrV2nPvLYzLEN+BQJk+Umj0oyHrl3bFXTjkQYhzZNnIUvJLS2AAACWElEQVRYw5yU3XqiQBBEq0cGBggoiAT/Eo3Z1Pu/4c4QNisBRuFc6OeFx65qWkwjN7ONVKDTVAcq2pqbYDbXMK74iyoO95jDa5yyI62CoPr5tIlf8SxGfX9F1adkV5QiZbFLTnW2oUOZ5ybJWkdkBgH2JmpN2eOJrjEtwXGihP0xoCW+wstZO8lJMImcnEif4eGdlq8SXsovWmpMIblrsMFDGreDg2CUddb7ES81ybf1qOWFZIgnCUm+jHjkjeQFT3Nx8wxzHUgmmEHi+hkLe8EsLsMqPz29ePv57NW7IbeYzdYezX3Nka0dC7DLjfpt7bCAXW8vAfmBRXzcxTiTGgvR5Pl/whALCX/GSbphFo+T/FvTEYs5dstakyywmKJ7dgyZY8ht9UfQQ+JDgyE5ab4zmfEnS0nPouxJY4hpU4kezxTTefoWxuOptKAhM4xQrlpPz6JKjJCRDcKpoxR17+mkEwcaonYv057VQ4sb5B359J+erJznkQWJW7XyHXfr6d7Ec+YKAdMCXk+et7JJipQBNKsSfo/fgrKihlUJPES05PAgNtDfVswdB0AQCKKxtFgxkmhig5IY7n9D2WqtNiCPmvBndt5Aw0CbIo54rUcsyIUDz++qC4Y+A/Q1IaEYl61bZYsRUUfSz7lL0sMKFBik3EHFl7EC48ZkMmOiywFsEmDaAAs5bmgffTOcvbaW/pn9xKOHgdDRgeoGQjSWGSTGZugoEhxklRZk1QmXyQfoHPxBtqy9EoPzULjARx1+8FIkfoOXKMWCFzIG4kMpPyLbLSLb3YjsBTJAaAzXaiJUAAAAAElFTkSuQmCC"},7508:function(e,t,n){},b6dd:function(e,t,n){"use strict";var a=n("e6fa"),r=n.n(a);r.a},b762:function(e,t,n){e.exports=n.p+"img/bargain-success-bg.e2d15344.png"},ba76:function(e,t,n){"use strict";var a=n("5596"),r=n.n(a);r.a},d5cf:function(e,t,n){},d5d3:function(e,t,n){e.exports=n.p+"img/login-dialog.fe4afbdd.png"},e5e9:function(e,t,n){},e6fa:function(e,t,n){},e89a:function(e,t,n){e.exports=n.p+"img/xinrenlibao.7580f8c7.png"},f121:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a="";a="2292102501067089";var r={appId:a,cookie:!0,xfbml:!0,version:"v3.2"}},fccf:function(e,t,n){}});