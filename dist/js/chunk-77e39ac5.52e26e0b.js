(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77e39ac5"],{"23b7":function(e,t,o){e.exports=o.p+"img/facbook.b93c5628.png"},"46f6":function(e,t,o){},"59d0":function(e,t,o){"use strict";var n=o("0348"),i=o("f121");t["a"]={beforeCreate(){window.FB||(o("e47c"),window.fbAsyncInit=Object(n["a"])(function*(){FB.init(i["a"]),FB.AppEvents.logPageView(),console.warn("已经初始化FB了")}))}}},"6eff":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAeFBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyRUjlNAAAAJ3RSTlMABMjD3utkrV2nPvLYzLEN+BQJk+Umj0oyHrl3bFXTjkQYhzZNnIUvJLS2AAACWElEQVRYw5yU3XqiQBBEq0cGBggoiAT/Eo3Z1Pu/4c4QNisBRuFc6OeFx65qWkwjN7ONVKDTVAcq2pqbYDbXMK74iyoO95jDa5yyI62CoPr5tIlf8SxGfX9F1adkV5QiZbFLTnW2oUOZ5ybJWkdkBgH2JmpN2eOJrjEtwXGihP0xoCW+wstZO8lJMImcnEif4eGdlq8SXsovWmpMIblrsMFDGreDg2CUddb7ES81ybf1qOWFZIgnCUm+jHjkjeQFT3Nx8wxzHUgmmEHi+hkLe8EsLsMqPz29ePv57NW7IbeYzdYezX3Nka0dC7DLjfpt7bCAXW8vAfmBRXzcxTiTGgvR5Pl/whALCX/GSbphFo+T/FvTEYs5dstakyywmKJ7dgyZY8ht9UfQQ+JDgyE5ab4zmfEnS0nPouxJY4hpU4kezxTTefoWxuOptKAhM4xQrlpPz6JKjJCRDcKpoxR17+mkEwcaonYv057VQ4sb5B359J+erJznkQWJW7XyHXfr6d7Ec+YKAdMCXk+et7JJipQBNKsSfo/fgrKihlUJPES05PAgNtDfVswdB0AQCKKxtFgxkmhig5IY7n9D2WqtNiCPmvBndt5Aw0CbIo54rUcsyIUDz++qC4Y+A/Q1IaEYl61bZYsRUUfSz7lL0sMKFBik3EHFl7EC48ZkMmOiywFsEmDaAAs5bmgffTOcvbaW/pn9xKOHgdDRgeoGQjSWGSTGZugoEhxklRZk1QmXyQfoHPxBtqy9EoPzULjARx1+8FIkfoOXKMWCFzIG4kMpPyLbLSLb3YjsBTJAaAzXaiJUAAAAAElFTkSuQmCC"},"956d":function(e,t,o){"use strict";var n=o("46f6"),i=o.n(n);i.a},c244:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dialogLoginSelect-container"},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:o("d5d3"),expression:"require('@/assets/images/login-dialog.png')",arg:"background-image"}],staticClass:"dialog-content"},[n("div",{staticClass:"tips"},[e._v("\n      Tips: If you help your friend cut down the price, you will get cash rewards.\n    ")]),n("div",{staticClass:"login-types"},[n("div",{staticClass:"login-item",on:{click:e.loginFB}},[n("img",{attrs:{src:o("23b7")}}),n("p",[e._v("Facebook login")])])]),n("img",{staticClass:"close-img",attrs:{src:o("6eff")},on:{click:e.close}})])])},i=[],s=o("0348"),a=o("7f43"),r=o.n(a),c=o("3007"),l=o("59d0"),z={name:"dialogLoginSelect",mixins:[l["a"]],data(){return{}},methods:{close(){this.$store.commit("setLoginSelectShow",!1)},loginFB(){var e=this;return Object(s["a"])(function*(){let t=yield window.$faceBookApi.loginFB();if(console.warn("loginInfo: ",t),t){let o=t.authResponse.accessToken,n=t.id,i=t.name,s=t.pic_square,a={tp_id:n,tp_token:o,tp_type:1,tp_username:i,tp_avatar:s};const l=e.$route.query,z=l.spuId,u=l.bargainId,M=l.inviteUserId;z&&(a.spu_id=z),u&&(a.bargain_id=u),M&&(a.invite_user_id=M);let d=yield Object(c["g"])(a);if(console.log("result: ",d),d&&d.data){let t=d.data;return e.$store.commit("setUserInfo",t),localStorage.setItem("userInfo",JSON.stringify(t)),r.a.defaults.headers.common["User-Id"]=t.user_id,r.a.defaults.headers.common["Access-Token"]=t.access_token,e.$store.commit("setLoginSelectShow",!1),1==t.is_new&&window.localStorage.setItem("newUserInfo",JSON.stringify(t)),e.$store.state.dialogs.loginSelect.jumpUrl?window.location.href=e.$store.state.dialogs.loginSelect.jumpUrl:window.location.reload(),!0}}return!1})()}}},u=z,M=(o("956d"),o("17cc")),d=Object(M["a"])(u,n,i,!1,null,"56218c64",null);t["default"]=d.exports},d5d3:function(e,t,o){e.exports=o.p+"img/login-dialog.54a8ab3d.png"},e47c:function(e,t,o){"use strict";o.r(t);var n=o("5fbf");(function(){function e(){try{console.warn("hello faceBookSdk!"),function(e,t,o){var n,i=e.getElementsByTagName(t)[0];e.getElementById(o)||(n=e.createElement(t),n.id=o,n.src="https://connect.facebook.net/en_US/sdk.js",i.parentNode.insertBefore(n,i))}(document,"script","facebook-jssdk")}catch(e){console.error("出错了",e)}}e.prototype.loginFB=function(){return new Promise(e=>{FB.login(function(t){"connected"===t.status?(console.warn("login_success!!!!!",t),FB.api("/me",function(o){var i=Object(n["a"])({},t,o);FB.api("/"+o.id+"/picture","GET",{redirect:"false"},function(t){var o=t.data.url;i=Object(n["a"])({},i,{pic_square:o}),e(i)})})):(console.error("login_error!"),e(!1))})})},e.prototype.checkFBLoginState=function(){var e=this;return new Promise((t,o)=>{FB.getLoginStatus(function(n){e.statusChangeCallback(n).then(e=>{t(e)}).catch(e=>{o(!1)})})})},e.prototype.statusChangeCallback=function(e){var t=this;return"connected"===e.status?t.getUserInfo(e):(console.error("没登录！"),Promise.resolve(!1))},e.prototype.getUserInfo=function(e){return new Promise(t=>{FB.api("/me",function(o){var i=Object(n["a"])({},e,o);FB.api("/"+o.id+"/picture","GET",{redirect:"false"},function(e){var o=e.data.url;i=Object(n["a"])({},i,{pic_square:o}),t(i)})})})},e.prototype.logoutFB=function(){FB.logout(function(e){})},e.prototype.shareFB=function(e){return new Promise(t=>{FB.ui({method:"share",href:e},function(e){e&&!e.error_message?t(e):(t(!1),console.error("Error while posting."))})})},window.$faceBookApi=new e})()}}]);