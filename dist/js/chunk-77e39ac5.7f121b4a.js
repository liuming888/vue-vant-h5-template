(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-77e39ac5"],{"23b7":function(e,t,o){e.exports=o.p+"img/facbook.b93c5628.png"},"46f6":function(e,t,o){},"59d0":function(e,t,o){"use strict";var i=o("0348"),n=o("f121");t.a={beforeCreate(){window.FB||(o("e47c"),window.fbAsyncInit=Object(i.a)(function*(){FB.init(n.a),FB.AppEvents.logPageView()}))}}},"6eff":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAeFBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyRUjlNAAAAJ3RSTlMABMjD3utkrV2nPvLYzLEN+BQJk+Umj0oyHrl3bFXTjkQYhzZNnIUvJLS2AAACWElEQVRYw5yU3XqiQBBEq0cGBggoiAT/Eo3Z1Pu/4c4QNisBRuFc6OeFx65qWkwjN7ONVKDTVAcq2pqbYDbXMK74iyoO95jDa5yyI62CoPr5tIlf8SxGfX9F1adkV5QiZbFLTnW2oUOZ5ybJWkdkBgH2JmpN2eOJrjEtwXGihP0xoCW+wstZO8lJMImcnEif4eGdlq8SXsovWmpMIblrsMFDGreDg2CUddb7ES81ybf1qOWFZIgnCUm+jHjkjeQFT3Nx8wxzHUgmmEHi+hkLe8EsLsMqPz29ePv57NW7IbeYzdYezX3Nka0dC7DLjfpt7bCAXW8vAfmBRXzcxTiTGgvR5Pl/whALCX/GSbphFo+T/FvTEYs5dstakyywmKJ7dgyZY8ht9UfQQ+JDgyE5ab4zmfEnS0nPouxJY4hpU4kezxTTefoWxuOptKAhM4xQrlpPz6JKjJCRDcKpoxR17+mkEwcaonYv057VQ4sb5B359J+erJznkQWJW7XyHXfr6d7Ec+YKAdMCXk+et7JJipQBNKsSfo/fgrKihlUJPES05PAgNtDfVswdB0AQCKKxtFgxkmhig5IY7n9D2WqtNiCPmvBndt5Aw0CbIo54rUcsyIUDz++qC4Y+A/Q1IaEYl61bZYsRUUfSz7lL0sMKFBik3EHFl7EC48ZkMmOiywFsEmDaAAs5bmgffTOcvbaW/pn9xKOHgdDRgeoGQjSWGSTGZugoEhxklRZk1QmXyQfoHPxBtqy9EoPzULjARx1+8FIkfoOXKMWCFzIG4kMpPyLbLSLb3YjsBTJAaAzXaiJUAAAAAElFTkSuQmCC"},"956d":function(e,t,o){"use strict";var i=o("46f6");o.n(i).a},c244:function(e,t,o){"use strict";o.r(t);var i=o("0348"),n=o("7f43"),s=o.n(n),a=o("3007"),c={name:"dialogLoginSelect",mixins:[o("59d0").a],data:()=>({}),methods:{close(){this.$store.commit("setLoginSelectShow",!1)},loginFB(){var e=this;return Object(i.a)(function*(){let t=yield window.$faceBookApi.loginFB();if(t){let o=t.authResponse.accessToken,i={tp_id:t.id,tp_token:o,tp_type:1,tp_username:t.name,tp_avatar:t.pic_square};const n=e.$route.query,c=n.spuId,r=n.bargainId,l=n.inviteUserId;c&&(i.spu_id=c),r&&(i.bargain_id=r),l&&(i.invite_user_id=l);let z=yield Object(a.g)(i);if(z&&z.data){let t=z.data;return e.$store.commit("setUserInfo",t),localStorage.setItem("userInfo",JSON.stringify(t)),s.a.defaults.headers.common["User-Id"]=t.user_id,s.a.defaults.headers.common["Access-Token"]=t.access_token,e.$store.commit("setLoginSelectShow",!1),1==t.is_new&&window.localStorage.setItem("newUserInfo",JSON.stringify(t)),e.$store.state.dialogs.loginSelect.jumpUrl?window.location.href=e.$store.state.dialogs.loginSelect.jumpUrl:window.location.reload(),!0}}return!1})()}}},r=(o("956d"),o("17cc")),l=Object(r.a)(c,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dialogLoginSelect-container"},[t("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:o("d5d3"),expression:"require('@/assets/images/login-dialog.png')",arg:"background-image"}],staticClass:"dialog-content"},[t("div",{staticClass:"tips"},[this._v("\n      Tips: If you help your friend cut down the price, you will get cash rewards.\n    ")]),t("div",{staticClass:"login-types"},[t("div",{staticClass:"login-item",on:{click:this.loginFB}},[t("img",{attrs:{src:o("23b7")}}),t("p",[this._v("Facebook login")])])]),t("img",{staticClass:"close-img",attrs:{src:o("6eff")},on:{click:this.close}})])])},[],!1,null,"56218c64",null);t.default=l.exports},d5d3:function(e,t,o){e.exports=o.p+"img/login-dialog.54a8ab3d.png"},e47c:function(e,t,o){"use strict";o.r(t);var i=o("5fbf");!function(){function e(){try{e=document,t="script",o="facebook-jssdk",n=e.getElementsByTagName(t)[0],e.getElementById(o)||((i=e.createElement(t)).id=o,i.src="https://connect.facebook.net/en_US/sdk.js",n.parentNode.insertBefore(i,n))}catch(e){}var e,t,o,i,n}e.prototype.loginFB=function(){return new Promise(e=>{FB.login(function(t){"connected"===t.status?FB.api("/me",function(o){var n=Object(i.a)({},t,o);FB.api("/"+o.id+"/picture","GET",{redirect:"false"},function(t){var o=t.data.url;n=Object(i.a)({},n,{pic_square:o}),e(n)})}):e(!1)})})},e.prototype.checkFBLoginState=function(){var e=this;return new Promise((t,o)=>{FB.getLoginStatus(function(i){e.statusChangeCallback(i).then(e=>{t(e)}).catch(e=>{o(!1)})})})},e.prototype.statusChangeCallback=function(e){return"connected"===e.status?this.getUserInfo(e):Promise.resolve(!1)},e.prototype.getUserInfo=function(e){return new Promise(t=>{FB.api("/me",function(o){var n=Object(i.a)({},e,o);FB.api("/"+o.id+"/picture","GET",{redirect:"false"},function(e){var o=e.data.url;n=Object(i.a)({},n,{pic_square:o}),t(n)})})})},e.prototype.logoutFB=function(){FB.logout(function(e){})},e.prototype.shareFB=function(e){return new Promise(t=>{FB.ui({method:"share",href:e},function(e){e&&!e.error_message?t(e):t(!1)})})},window.$faceBookApi=new e}()}}]);