(function(e){function t(t){for(var r,a,i=t[0],u=t[1],d=t[2],s=0,f=[];s<i.length;s++)a=i[s],o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-2d0b39fb":"5073fc30","chunk-2d0c0682":"86a361b3","chunk-2d0d07e7":"ceaf935c","chunk-2d0d3895":"838250f3","chunk-2d212f87":"dbc134f7","chunk-2d216bd3":"4e859e94","chunk-2d22256b":"808f9817","chunk-2d2226a2":"5954767d","chunk-2d22c55a":"1e389e48","chunk-44e1e640":"de5061b5","chunk-5197b61a":"c08d2172","chunk-57a2b209":"eeb89b60","chunk-2d22ca79":"f4d581b2","chunk-4ce5eef1":"0df1c49c","chunk-66bdfc40":"0b12fe7e","chunk-6a912f28":"74240410","chunk-6f247e75":"cdd722f4","chunk-8ffe137e":"1622a76b","chunk-aaebd14c":"4c74802f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-44e1e640":1,"chunk-5197b61a":1,"chunk-57a2b209":1,"chunk-4ce5eef1":1,"chunk-66bdfc40":1,"chunk-6a912f28":1,"chunk-6f247e75":1,"chunk-8ffe137e":1,"chunk-aaebd14c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0b39fb":"31d6cfe0","chunk-2d0c0682":"31d6cfe0","chunk-2d0d07e7":"31d6cfe0","chunk-2d0d3895":"31d6cfe0","chunk-2d212f87":"31d6cfe0","chunk-2d216bd3":"31d6cfe0","chunk-2d22256b":"31d6cfe0","chunk-2d2226a2":"31d6cfe0","chunk-2d22c55a":"31d6cfe0","chunk-44e1e640":"1f777181","chunk-5197b61a":"09066f70","chunk-57a2b209":"d55cc429","chunk-2d22ca79":"31d6cfe0","chunk-4ce5eef1":"cb1faad0","chunk-66bdfc40":"dff6385e","chunk-6a912f28":"e40fcbd8","chunk-6f247e75":"798595a7","chunk-8ffe137e":"17db6acc","chunk-aaebd14c":"ad06f932"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var d=c[i],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){d=f[i],s=d.getAttribute("data-href");if(s===r||s===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.request=r,delete a[e],l.parentNode.removeChild(l),n(c)},l.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(l)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=c);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e),d=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var f=setTimeout(function(){d({type:"timeout",target:s})},12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var f=0;f<d.length;f++)t(d[f]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"007a":function(e,t,n){"use strict";var r=n("a98d"),a=n("2e73"),o=n.n(a),c=n("2418"),i=n("7f43"),u=n.n(i),d={getUrl:function(e){var t="";switch(e){case"mock":t="";case"development":t="";break;case"test":break;case"production":t="http://127.0.0.1:9078";break}return t}};u.a.defaults.headers.common["user_id"]="",u.a.defaults.headers.common["access_token"]="";var s=u.a.create(),f=d.getUrl("production");s.defaults.baseURL=f,s.defaults.timeout=6e3,s.defaults.withCredentials=!0,c["a"].prototype.$loaddingNum=0;var l=0;console.log("curCode: ",l),s.interceptors.request.use(function(e){return c["a"].prototype.$loaddingNum++,c["a"].prototype.$toast.loading({mask:!0,duration:0,forbidClick:0}),e},function(e){return o.a.reject(e)}),s.interceptors.response.use(function(e){c["a"].prototype.$loaddingNum--,c["a"].prototype.$loaddingNum<=0&&c["a"].prototype.$toast.clear();try{if(e.data.code==l)return e.data;throw e.data}catch(t){if(t.code){if(c["a"].prototype.$toast(t.msg),"-1"==t.code)return t.code}else c["a"].prototype.$toast("The request failed. Please try again later!");return console.error(t),!1}},function(e){return c["a"].prototype.$loaddingNum--,c["a"].prototype.$loaddingNum<=0&&c["a"].prototype.$toast.clear(),!1});var h={post:function(e){var t=e.url,n=e.data,a=void 0===n?{}:n,o=e.config,c=void 0===o?{}:o,i=a;return s(Object(r["a"])({method:"post",url:t,data:i},c)).then(function(e){return e}).catch(function(e){return console.error(e,"error"),!1}).finally(function(){})},get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s.get(e.url,{params:e.data}).then(function(e){return e})},request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,n=void 0===t?"get":t,a=e.url,o=e.data,c=void 0===o?{}:o,i=e.params,u=void 0===i?{}:i,d=e.config,f=void 0===d?{}:d;return n=n.toLowerCase(),s(Object(r["a"])({method:n,url:a,data:c,params:u},f)).then(function(e){return e}).catch(function(e){return console.error(e,"error"),!1})}};t["a"]=h},"05eb":function(e,t,n){"use strict";var r=n("d78f"),a=n.n(r);a.a},"2eb9":function(e,t,n){},"2f3e":function(e,t,n){},3007:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o});var r=n("007a");function a(e){var t=e.tp_id,n=e.tp_token,a=e.tp_type,o=e.invite_user_id,c=e.spu_id,i=e.bargain_id;return r["a"].post({url:"/api/v1/user/login",data:{tp_id:t,tp_token:n,tp_type:a,invite_user_id:o,spu_id:c,bargain_id:i}})}function o(e){var t=e.tp_id,n=e.tp_token,a=e.tp_type,o=e.invite_user_id,c=e.spu_id,i=e.bargain_id;return r["a"].post({url:"/api/v1/user/check_login",data:{tp_id:t,tp_token:n,tp_type:a,invite_user_id:o,spu_id:c,bargain_id:i}})}},"432d":function(e,t,n){},"44fc":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAABYlBMVEUAAADUDgXZFwTdHQTVDgXXEwXYFQXWEAXlLQPXEgXdHwTZFwXYFAXjKQTqNwPoMgPvQALVEAXbGQTZFwTbGwThJQTWEQXuPgPYFQTZFgTeHwTmLwPkLAPaGQTiJwPvPwLcHATuPQLvPwLXEwXeIATuPgPqNgPrOAPgJQTuPQLvPwLtPAPeHwTWEQXfIQTaFwTpNQPYFQTUDgXcHATkKwPqNgPuPgPhJQTWEQXoMgPuPQPWEQXvPwLvPwLvQALZGATrOQPtPQLbGwTrOQPuPgPbHATrOgPvQAPvQQLUDgXfIgTuPwPUDgXWEgXvQQLdHwTgJQTjKwTcHQTeIQTtPgPvQALvQQLUDgXbGgTeIATWEQXfIgTdHgTgJATcHATXEwXhJgTiKATVDwXZFwTYFQXoNAPqNgPrOAPnMQPsOgPtPAPlLQPkLAPjKQTmMAPuPgPmLwPoMgPjKwTkKwTvQALZFgUqIsLLAAAAV3RSTlMAk2Rk8JO8k/C8HPDw8PDw49q8vBjx8O55OjYRC/DczJ6ahoSEfl0yKyL78/Ls7N3VzsLCvbGjkIWFcG1pYVQoFA/k5NbRycG2tLSxopuTimtnYFRORzvWgxI1AAACtklEQVRYw63XZ1sTQRSG4ZViCZZEo6mmIgQQEKlSBOy9lxAICiQQTDGJ8f+7Z2bPdTaT7M7OyPMD7mvmzeyHGG7FNt4l/SF/cml9wtBsO+PvdDq/oV9TaT3mIRHQ1KqGkekiTs0WtxUJ3wtmIAGdnNwbVzK++a1jEGF2fDymYKxP2m+CBPTAs5EWCTTK5fLilidi4rk4BhHlVsvTMF9DfcYgo1KpyIdZdboJEpVGQzJMfElONJrNhaCLkUv2vUmZG0hUq9VE1PmhT7qPUbGIWq3256ODccftJkRUTaJdry/3I7ZeSwg8BjcODhZ8Pcb4E+kYRJiGWSIiGBt4DMkYRPw0+yDM4W2MWrtNRLFYHLUbKmMQUdzdJeWL4hhAMMPsMz7TkPIYSOzs3I1xJKM4BhHQe2bEQqeQdIy6nUBjb48fZUxhDDSQgD4BktYYg4j9/RQgzxzGaErGYITZHCCPu4iWlzGQgPKPALmqexNG5PO3GfI/BCHyN947BhqIlCGNMXhHI4io3oSII45cE964NwINRNTHQAIqccThjUvHgP6WSpcZoj4GHaOEiP2DV7sJ9IMhF3XH4IaFOIxRlIzBCUR0xuAE6xZDdMdgFQocUXjjSJCBiPwm4hhEIHJFd4wCb4ghSmOIxuEhR3rHWB60NWBvmAhuICIeYyZqOBed7iYQEW8yaLg1QATrO0NuimMEXZEgjmEZFiK+jE1XZJMbSCAi/qwpV+StnSCk52WMxh2JeNZOEDLT+zJmr0M3oPPYJVaAxsCmAUl4+uDF34QKAPJK4Y0TQb0EJGw/hgKBhQHJef5MyLCXM6B5jTGo+9bnoDEGFTF4KeUxqDcG9lQgvBtztv/js0pjUAGfQQXnVW5CowoffHhE+rOKDYUNMV82oHaTFbqKvchadhi7YHWubytrEeOs+wf4IvSz5F9qHgAAAABJRU5ErkJggg=="},4674:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAmVBMVEUAAADY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2Nj////X19f7+/vV1dXk5OTe3t7b29v09PTt7e35+fn29vbr6+vv7+/m5ubg4ODo6OixkGbDAAAAInRSTlMA18dV6g3R7i/34pqSdR6tfig02m4IsbxcWCMVE3tps6mA9TsOuQAAA19JREFUWMPNmOl24jAMhScLBJJAwlKWUkpHcWI7e/L+DzdyUkoXmeVk5py57Y+2h35cCUmW8+sf6ukwsY7exjRc27Fdw9x4R2tyeHoIMbFmfmCu7Cn0mtorM/Bn1uRuzMvE8k0HfsoxfWvychdjsd4YNgNKzDY268VtxPPOG8M1jb3d83XEaBmOGVwXG4fL0TXG/s1lcEvMfbP0lPnrdgr3aLp9nesYMzIUOqTZnGaEBoO7ZYRz0ocBj8ggvIxeNQzGmIayHn1nWFt4EALb/TfK8s0BUlIIIYGUEyy/1mno0jaAl1ktgDbjhl9qd6cp9USWeVxxSDQf9O5zz3mMfFGSsDKKCp6gyFd4i0vvr8dkRkFKUUVRXgopJRnSeP3yYSSYUjYkL9M0j6I4TyuVGELTYPHx8RqUD1Ej4aw4zbikiuXcihPfplPa/Td+x3GEqigvtj/pB6plsp8+JC8izGlW5XFaZin+nMmEMGxa3dg9zBwqmAzfPq0xpjgTgldp1pCpdWaHPhoqI8pI3ALwAiEAohFAq49nH1AfTY1GiiZhHYQlDP9EQ4K9ghxNCtJGGE2TvDth+KWReVQQb0U66SHsDNFq5SnIxiZzkmOp1uw2xD4piDmlIE2qrPCmLuJS9q1Da2oqiAFkvZaqzIqqytGJBNCbMRTEBVLKCmIQha1Tcn1IroLYQIlJLLPorFy1jgZjK4gDtCTHUD51oG40OXonKgmCt1kRY0g9RYDeiQtX5rwoc9WFhUpNK/U5MUBP6Sq2EpKnykpDnh7GpU5odRA1A2pVezxhujo52bcg2ICNslJTEOek6x0U+wGJEKLrndCk86EG/B1OzLCbJxvSR1NziS3znpMWc1KQOdl082Tpk4wqT2vJZAeRtTJSCUZA/KVmxjLoRmxRlW2WRzioC1X6HOgZq5n2fZEp5fm5YvNSN+31545osf8uiotWAiPPHf0JyJhs2iwt8hgB3SyQDPQnoP4sBsF5m2IgGReSMf1ZfNkK6DVLYoJTLhP12/WtAPcTbQPilCQmCbGfDN+Ubu9srXZn+/3817bH4Xvs8I2a2O1X8IhWszl9y4ABt4xB953hNy/6Dhi4cFvkHXD4bXT4vXj4DX34s4LhTy1ua9Q9Pzl9PD85eUdreRj9+t/1B2O5vYq13ezQAAAAAElFTkSuQmCC"},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getCookie",function(){return ie}),n.d(r,"delCookie",function(){return ue}),n.d(r,"formatDateTime",function(){return de}),n.d(r,"formatTimeDemonstration",function(){return se}),n.d(r,"formatMoney",function(){return fe});n("9074");var a=n("01f6"),o=(n("a5c3"),n("2011")),c=(n("bb6b"),n("b4b4")),i=n("2418"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("zdd-layout")],1)},d=[],s=n("f46d"),f=n.n(s),l=(n("3a23"),n("b5aa"),n("2c46")),h=n("7f43"),g=n.n(h),p=n("f121"),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[n("zdd-content"),n("zdd-tab-bar")],1)},m=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-container"},[n("router-view")],1)},v=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"incomeWindow-container"},[e._v("\n  收益浮窗\n")])},P=[],k={name:"incomeWindow"},T=k,Q=n("17cc"),E=Object(Q["a"])(T,w,P,!1,null,"3632e65c",null),X=E.exports,y={components:{incomeWindow:X},data:function(){return{}}},j=y,L=(n("05eb"),Object(Q["a"])(j,b,v,!1,null,"2e3f0854",null)),N=L.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tabBar-container"},e._l(e.tabBarList,function(t,r){return n("router-link",{key:r,class:{"tabBar-item":!0,active:e.activeRouter===t.path},attrs:{to:t.path}},[n("img",{staticClass:"tabBar-item-img",attrs:{src:e.activeRouter===t.path?t.imgActiveUrl:t.imgUrl,alt:""}}),n("p",[e._v(e._s(t.title))])])}),1)},Y=[],O={data:function(){return{tabBarList:[{path:"/",title:"Home",imgUrl:n("c122"),imgActiveUrl:n("44fc")},{path:"/my",title:"Me",imgUrl:n("4674"),imgActiveUrl:n("ec87")}]}},computed:{activeRouter:function(){return this.$route.path}}},B=O,U=(n("d677"),Object(Q["a"])(B,I,Y,!1,null,"61a6fd08",null)),M=U.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dialogBidPriceCompleted-container"},[e._v("\n  砍价完成弹窗\n  "),n("van-popup",{attrs:{"close-on-click-overlay":!1},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[e._v("内容")])],1)},J=[],C={name:"dialogBidPriceCompleted",data:function(){return{show:!1}}},R=C,W=Object(Q["a"])(R,D,J,!1,null,"3ca29bd8",null),V=W.exports,G={name:"zddMain",components:{"zdd-content":N,"zdd-tab-bar":M,dialogBidPriceCompleted:V}},x=G,S=(n("9c11"),Object(Q["a"])(x,A,m,!1,null,"561d0bfd",null)),F=S.exports,K=n("3007"),H={name:"App",components:{"zdd-layout":F},created:function(){this.initFB()},methods:{initFB:function(){var e=this;window.fbAsyncInit=Object(l["a"])(regeneratorRuntime.mark(function t(){var n,r,a,o,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return FB.init(p["a"]),FB.AppEvents.logPageView(),console.warn("已经初始化FB了"),t.next=5,window.$faceBookApi.checkFBLoginState();case 5:if(n=t.sent,console.log("是否已经登录了checkResInfo: ",n),!n){t.next=15;break}return r=n.authResponse.accessToken,a=n.id,n.name,n.pic_square,t.next=11,Object(K["b"])({tp_id:a,tp_token:r,tp_type:1});case 11:o=t.sent,o&&(c=o.data,e.$store.commit("setUserInfo",c),localStorage.setItem("userInfo",f()(c)),g.a.defaults.headers.common["user_id"]=c.user_id,g.a.defaults.headers.common["access_token"]=c.access_token,console.log("1111111111111",e.$store.state.userInfo),console.log("222222222222",localStorage.getItem("userInfo"))),t.next=15;break;case 15:case"end":return t.stop()}},t)}))}}},q=H,z=(n("78e1"),Object(Q["a"])(q,u,d,!1,null,null,null)),Z=z.exports,_=n("081a"),$=n("9ab8");i["a"].use(_["a"]);var ee=new _["a"]({mode:"history",base:"/",routes:[{path:"*",redirect:"/"},{path:"/",name:"首页",component:function(){return Promise.all([n.e("chunk-57a2b209"),n.e("chunk-4ce5eef1")]).then(n.bind(null,"77b8"))}},{path:"/bargain",name:"砍价页",component:function(){return Promise.all([n.e("chunk-57a2b209"),n.e("chunk-66bdfc40")]).then(n.bind(null,"5b3c"))}},{path:"/isBargainingList",name:"正在砍价列表页",component:function(){return n.e("chunk-44e1e640").then(n.bind(null,"17ef"))}},{path:"/forBargain",name:"好友帮砍页",component:function(){return Promise.all([n.e("chunk-57a2b209"),n.e("chunk-6a912f28")]).then(n.bind(null,"db1b"))}},{path:"/purchase",name:"购买商品页",component:function(){return n.e("chunk-8ffe137e").then(n.bind(null,"5918"))}},{path:"/shippingAddress",name:"（已有）收货地址页",component:function(){return n.e("chunk-2d22c55a").then(n.bind(null,"f390"))}},{path:"/purchase/paymentSuccess",name:"支付成功页",component:function(){return Promise.all([n.e("chunk-57a2b209"),n.e("chunk-2d22ca79")]).then(n.bind(null,"f3c9"))}},{path:"/my",name:"我的",component:function(){return n.e("chunk-aaebd14c").then(n.bind(null,"b31c"))}},{path:"/withdrawRelated",name:"提现相关tab主页面",component:function(){return n.e("chunk-6f247e75").then(n.bind(null,"a9f2"))},redirect:"/withdrawRelated/withdrawImmediately",children:[{path:"/withdrawRelated/withdrawImmediately",name:"立即提现",component:function(){return n.e("chunk-5197b61a").then(n.bind(null,"789e"))}},{path:"/withdrawRelated/withdrawalsRecord",name:"提现记录",component:function(){return n.e("chunk-2d2226a2").then(n.bind(null,"cf09"))}},{path:"/withdrawRelated/incomeBreakdown",name:"收益明细",component:function(){return n.e("chunk-2d0d3895").then(n.bind(null,"5cd5"))}}]},{path:"/withdrawRelated/toWithdraw",name:"我要提现",component:function(){return n.e("chunk-2d0b39fb").then(n.bind(null,"28ba"))}},{path:"/my/myFriends",name:"我的好友",component:function(){return n.e("chunk-2d0d07e7").then(n.bind(null,"67e5"))}},{path:"/my/myOrder",name:"我的订单",component:function(){return n.e("chunk-2d0c0682").then(n.bind(null,"423a"))}},{path:"/my/inviteFriends",name:"邀请好友",component:function(){return n.e("chunk-2d212f87").then(n.bind(null,"ab4d"))}},{path:"/my/howToMakeMoney",name:"如何赚钱",component:function(){return n.e("chunk-2d22256b").then(n.bind(null,"cdd8"))}},{path:"/my/billboard",name:"排行榜",component:function(){return n.e("chunk-2d216bd3").then(n.bind(null,"c46b"))}}]});ee.beforeEach(function(e,t,n){n()}),ee.afterEach(function(){Object($["a"])({})});var te=ee,ne=n("52c1"),re={userInfo:{}},ae={setUserInfo:function(e,t){e.userInfo=t}},oe={};i["a"].use(ne["a"]);var ce=new ne["a"].Store({state:re,mutations:ae,actions:oe});n("f91a");function ie(e){if(document.cookie.length>0){var t=document.cookie.indexOf(e+"=");if(-1!=t)return!0}return!1}function ue(e){var t=new Date;t.setTime(t.getTime()-1);var n=ie(e);n&&(document.cookie=e+"=;expires="+t.toGMTString())}function de(e){var t=new Date(e),n=t.getDate();n=n<10?"0"+n:n;var r=t.getHours();r=r<10?"0"+r:r;var a=t.getMinutes(),o=t.getSeconds();return a=a<10?"0"+a:a,o=o<10?"0"+o:o,r+":"+a+":"+o}function se(e){var t=new Date(e),n=t.getFullYear(),r=t.getMonth()+1;r=r<10?"0"+r:r;var a=t.getDate();return a=a<10?"0"+a:a,"".concat(a,"/").concat(r,"/").concat(n)}function fe(e){var t=""+e;if(/[^0-9\.]/.test(t))return"invalid value";t=t.replace(/^(\d*)$/,"$1."),t=t.replace(/(\d*\.\d\d)\d*/,"$1"),t=t.replace(".",",");var n=/(\d)(\d{3},)/;while(n.test(t))t=t.replace(n,"$1,$2");var r=t.replace(/^\./,"0.");return r.substring("0",r.length-1)}var le=n("a98d"),he=n("2e73"),ge=n.n(he);(function(){function e(){try{console.warn("hello faceBookSdk!"),function(e,t,n){var r,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="https://connect.facebook.net/en_US/sdk.js",a.parentNode.insertBefore(r,a))}(document,"script","facebook-jssdk")}catch(e){console.error("出错了",e)}}e.prototype.loginFB=function(){return new ge.a(function(e){FB.login(function(t){"connected"===t.status?(console.warn("login_success!!!!!",t),FB.api("/me",function(n){var r=Object(le["a"])({},t,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(t){var n=t.data.url;r=Object(le["a"])({},r,{pic_square:n}),e(r)})})):(console.error("login_error!"),e(!1))})})},e.prototype.checkFBLoginState=function(){var e=this;return new ge.a(function(t,n){FB.getLoginStatus(function(r){e.statusChangeCallback(r).then(function(e){t(e)}).catch(function(e){n(!1)})})})},e.prototype.statusChangeCallback=function(e){var t=this;return"connected"===e.status?t.getUserInfo(e):(console.error("没登录！"),ge.a.resolve(!1))},e.prototype.getUserInfo=function(e){return new ge.a(function(t){FB.api("/me",function(n){var r=Object(le["a"])({},e,n);FB.api("/"+n.id+"/picture","GET",{redirect:"false"},function(e){var n=e.data.url;r=Object(le["a"])({},r,{pic_square:n}),t(r)})})})},e.prototype.logoutFB=function(){FB.logout(function(e){})},e.prototype.shareFB=function(e,t,n){return new ge.a(function(r){FB.ui({method:"share",href:e,quote:t,hashtag:"#"+(n||document.title)},function(e){e&&!e.error_message?r(e):(r(!1),console.error("Error while posting."))})})},window.$faceBookApi=new e})(),i["a"].use(c["a"]),i["a"].use(o["a"]),i["a"].use(a["a"]),i["a"].prototype.$util=r,i["a"].config.productionTip=!1,new i["a"]({router:te,store:ce,render:function(e){return e(Z)}}).$mount("#app")},"78e1":function(e,t,n){"use strict";var r=n("2f3e"),a=n.n(r);a.a},"9c11":function(e,t,n){"use strict";var r=n("2eb9"),a=n.n(r);a.a},c122:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAxlBMVEUAAADY2Nja2trY2NjY2Njb29vZ2dnb29vh4eHb29vZ2dna2tra2trY2NjZ2dna2trZ2dng4ODX19fe3t7d3d3m5ubY2Nja2trZ2dnb29vj4+Pa2trg4ODX19fW1tbX19fR0dHa2tra2trb29vW1tba2trb29vi4uLX19fj4+Pe3t7X19fY2Njd3d3d3d3t7e3f39/e3t7b29vh4eHX19fW1tbf39/p6enW1tba2trn5+fm5ubh4eHY2NjX19fW1tbV1dXU1NTH/HXeAAAAPXRSTlMA8JO8ZNrsGxA38eXfwrOdhoODOioVyn14X1EyIvjk1NHOvKKblJKRim1tbWhkYR0LwbatppeHWlVHKwwMGDi0CAAAAZ9JREFUWMPt1+duwjAUhmFDScKeZXYvRsvqnt/ncP83VUVAUUNiHLv9x3sBj6JjH0sRqrLTQavoFi4q42NhWLZWWEgsy1fMmN6plFhHntwZGEOEko/ZhIT3QITzz44SGY1TYjsuXhMYtyAik3Vt41kSMbHc1CKO730ocnQG8+5KqJLs7h4HCXXEi5r4eoJG/oGnMD4uJHSik4s13k4k9CLHMUbNh35yEEU0y8Q608EcnREJKzZCxhRE0uj/fh3aJEyqik0dmLZZyN7CGFn0VsanS2OE+dVzV/VhHociKJuHTctP6RJWdQOkArsqAdKyRFoBUrBECgGSskRSe2SP7JE98s8IiehIbYT9SSa6SZ+aiJsT8eVcPSQjVGV0EKKpRJqgDnKoRA5VyKZrJXKteTr1eSwxryMScbFV8fIgussitnIDxLG8bE6AlGFXOUA6tDLYWZ6ZVasbUbIySqt1sELWi3ZFY4JXYt25MXIufpo5NCLozMQmz2y4pdAvTztFmQiQTLVFOK/qwJe6gg+n6omoGqNa+ia9u5t0bdQQf903mKgTTsKit/EAAAAASUVORK5CYII="},d677:function(e,t,n){"use strict";var r=n("432d"),a=n.n(r);a.a},d78f:function(e,t,n){},ec87:function(e,t){e.exports="data:image/png;base64,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"},f121:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={appId:"844618395883361",cookie:!0,xfbml:!0,version:"v3.2"}}});