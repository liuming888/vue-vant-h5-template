(function(e){function n(n){for(var a,r,i=n[0],u=n[1],d=n[2],l=0,s=[];l<i.length;l++)r=i[l],c[r]&&s.push(c[r][0]),c[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(n);while(s.length)s.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,r=1;r<t.length;r++){var i=t[r];0!==c[i]&&(a=!1)}a&&(o.splice(n--,1),e=u(u.s=t[0]))}return e}var a={},r={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-04e4b296":"bed63194","chunk-0fc4dd16":"9e44a7ec","chunk-2d0b39fb":"55ea640d","chunk-2d0c94c1":"5d8735f9","chunk-2d0d3895":"db4d0387","chunk-2d0d7ae3":"829ecda7","chunk-2d209b7a":"2115e0da","chunk-2d20f319":"ea9f446a","chunk-2d2226a2":"128d1ae6","chunk-2d22c55a":"f2271855","chunk-482c9f29":"e9eaed1f","chunk-772b6bd4":"75ca5490","chunk-7740c906":"b5675e22"}[e]+".js"}function u(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-0fc4dd16":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-04e4b296":"31d6cfe0","chunk-0fc4dd16":"7681f052","chunk-2d0b39fb":"31d6cfe0","chunk-2d0c94c1":"31d6cfe0","chunk-2d0d3895":"31d6cfe0","chunk-2d0d7ae3":"31d6cfe0","chunk-2d209b7a":"31d6cfe0","chunk-2d20f319":"31d6cfe0","chunk-2d2226a2":"31d6cfe0","chunk-2d22c55a":"31d6cfe0","chunk-482c9f29":"31d6cfe0","chunk-772b6bd4":"31d6cfe0","chunk-7740c906":"31d6cfe0"}[e]+".css",c=u.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var d=o[i],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===a||l===c))return n()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){d=s[i],l=d.getAttribute("data-href");if(l===a||l===c)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,delete r[e],f.parentNode.removeChild(f),t(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){r[e]=0}));var a=c[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise(function(n,t){a=c[e]=[n,t]});n.push(a[2]=o);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e),d=function(n){l.onerror=l.onload=null,clearTimeout(s);var t=c[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,t[1](o)}c[e]=void 0}};var s=setTimeout(function(){d({type:"timeout",target:l})},12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},u.m=e,u.c=a,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)u.d(t,a,function(n){return e[n]}.bind(null,a));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var s=0;s<d.length;s++)n(d[s]);var f=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"060b":function(e,n,t){},"129a":function(e,n,t){},"40a6":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);var a={};t.r(a),t.d(a,"getCookie",function(){return Z}),t.d(a,"delCookie",function(){return ee}),t.d(a,"formatDateTime",function(){return ne}),t.d(a,"formatTimeDemonstration",function(){return te}),t.d(a,"formatMoney",function(){return ae});t("7581");var r=t("cfb3"),c=(t("2cbb"),t("4d2f")),o=t("e8c7"),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("zdd-layout")],1)},u=[],d=t("0348"),l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"main-container"},[t("zdd-content"),t("zdd-tab-bar")],1)},s=[],f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content-container"},[e._v("\n    内容\n    "),t("router-view")],1)},h=[],p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"incomeWindow-container"},[e._v("\n  收益浮窗\n")])},m=[],b={name:"incomeWindow"},v=b,k=t("8c9c"),g=Object(k["a"])(v,p,m,!1,null,"3632e65c",null),w=g.exports,y={components:{incomeWindow:w},data(){return{}}},_=y,O=(t("ed97"),Object(k["a"])(_,f,h,!1,null,"7cf697bd",null)),$=O.exports,j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"tabBar-container"},[t("router-link",{attrs:{to:"/"}},[e._v("首页")]),t("router-link",{attrs:{to:"/my"}},[e._v("我的")])],1)},x=[],B=(t("ef38"),{}),E=Object(k["a"])(B,j,x,!1,null,"26810ea1",null),T=E.exports,S=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"dialogBidPriceCompleted-container"},[e._v("\n  砍价完成弹窗\n  "),t("van-popup",{attrs:{"close-on-click-overlay":!1},model:{value:e.show,callback:function(n){e.show=n},expression:"show"}},[e._v("内容")])],1)},C=[],I={name:"dialogBidPriceCompleted",data(){return{show:!1}}},P=I,A=Object(k["a"])(P,S,C,!1,null,"3ca29bd8",null),M=A.exports,R={name:"zddMain",components:{"zdd-content":$,"zdd-tab-bar":T,dialogBidPriceCompleted:M}},z=R,D=(t("9c11"),Object(k["a"])(z,l,s,!1,null,"561d0bfd",null)),F=D.exports,q={name:"App",components:{"zdd-layout":F},created(){this.initFB()},methods:{initFB(){const e=this;window.fbAsyncInit=Object(d["a"])(function*(){FB.init({appId:"844618395883361",cookie:!0,xfbml:!0,version:"v3.2"}),FB.AppEvents.logPageView(),console.warn("已经初始化FB了");let n=yield window.$faceBookApi.checkFBLoginState();if(console.log("是否已经登录了checkResInfo: ",n),n){let t=n.authResponse.accessToken,a=n.id,r=n.name,c=n.pic_square;e.$store.commit("setUserInfo",{accessToken:t,id:a,name:r,pic_square:c}),localStorage.setItem("userInfo",JSON.stringify({accessToken:t,id:a,name:r,pic_square:c})),console.log("1111111111111",e.$store.state.userInfo),console.log("222222222222",localStorage.getItem("userInfo"))}})}}},N=q,L=(t("78e1"),Object(k["a"])(N,i,u,!1,null,null,null)),W=L.exports,J=t("081a"),U=t("9ab8");o["a"].use(J["a"]);const G=new J["a"]({mode:"history",base:"/",routes:[{path:"*",redirect:"/"},{path:"/",name:"首页",component:()=>t.e("chunk-0fc4dd16").then(t.bind(null,"77b8"))},{path:"/bargain",name:"砍价页",component:()=>t.e("chunk-772b6bd4").then(t.bind(null,"5b3c"))},{path:"/isBargainingList",name:"正在砍价列表页",component:()=>t.e("chunk-04e4b296").then(t.bind(null,"17ef"))},{path:"/forBargain",name:"好友帮砍页",component:()=>t.e("chunk-7740c906").then(t.bind(null,"db1b"))},{path:"/purchase",name:"购买商品页",component:()=>t.e("chunk-2d0c94c1").then(t.bind(null,"5918"))},{path:"/shippingAddress",name:"（已有）收货地址页",component:()=>t.e("chunk-2d22c55a").then(t.bind(null,"f390"))},{path:"/purchase/paymentSuccess",name:"支付成功页",component:()=>t.e("chunk-482c9f29").then(t.bind(null,"f3c9"))},{path:"/my",name:"我的",component:()=>t.e("chunk-2d20f319").then(t.bind(null,"b31c"))},{path:"/withdrawRelated",name:"提现相关tab主页面",component:()=>t.e("chunk-2d209b7a").then(t.bind(null,"a9f2"))},{path:"/withdrawRelated/withdrawImmediately",name:"立即提现",component:()=>t.e("chunk-2d0d7ae3").then(t.bind(null,"789e"))},{path:"/withdrawRelated/toWithdraw",name:"我要提现",component:()=>t.e("chunk-2d0b39fb").then(t.bind(null,"28ba"))},{path:"/withdrawRelated/withdrawalsRecord",name:"提现记录",component:()=>t.e("chunk-2d2226a2").then(t.bind(null,"cf09"))},{path:"/withdrawRelated/incomeBreakdown",name:"收益明细",component:()=>t.e("chunk-2d0d3895").then(t.bind(null,"5cd5"))}]});G.beforeEach((e,n,t)=>{t()}),G.afterEach(()=>{Object(U["a"])({})});var H=G,V=t("52c1"),Y={userInfo:{}},K={setUserInfo(e,n){e.userInfo=n}},Q={};o["a"].use(V["a"]);var X=new V["a"].Store({state:Y,mutations:K,actions:Q});t("f91a");function Z(e){if(document.cookie.length>0){let n=document.cookie.indexOf(e+"=");if(-1!=n)return!0}return!1}function ee(e){var n=new Date;n.setTime(n.getTime()-1);var t=Z(e);t&&(document.cookie=e+"=;expires="+n.toGMTString())}function ne(e){var n=new Date(e),t=n.getDate();t=t<10?"0"+t:t;var a=n.getHours();a=a<10?"0"+a:a;var r=n.getMinutes(),c=n.getSeconds();return r=r<10?"0"+r:r,c=c<10?"0"+c:c,a+":"+r+":"+c}function te(e){var n=new Date(e),t=n.getFullYear(),a=n.getMonth()+1;a=a<10?"0"+a:a;var r=n.getDate();return r=r<10?"0"+r:r,`${r}/${a}/${t}`}function ae(e){var n=""+e;if(/[^0-9\.]/.test(n))return"invalid value";n=n.replace(/^(\d*)$/,"$1."),n=n.replace(/(\d*\.\d\d)\d*/,"$1"),n=n.replace(".",",");var t=/(\d)(\d{3},)/;while(t.test(n))n=n.replace(t,"$1,$2");var a=n.replace(/^\./,"0.");return a.substring("0",a.length-1)}o["a"].use(c["a"]),o["a"].use(r["a"]),o["a"].prototype.$util=a,o["a"].config.productionTip=!1,new o["a"]({router:H,store:X,render:e=>e(W)}).$mount("#app")},"78e1":function(e,n,t){"use strict";var a=t("060b"),r=t.n(a);r.a},"9c11":function(e,n,t){"use strict";var a=t("40a6"),r=t.n(a);r.a},d450:function(e,n,t){},ed97:function(e,n,t){"use strict";var a=t("129a"),r=t.n(a);r.a},ef38:function(e,n,t){"use strict";var a=t("d450"),r=t.n(a);r.a}});