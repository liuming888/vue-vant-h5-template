(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-184d12f8"],{1933:function(e,t,n){var a=n("7253");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),(0,n("85cb4").default)("a8d371ae",a,!0,{sourceMap:!1,shadowMode:!1})},2774:function(e,t,n){"use strict";var a=n("219f"),o=n("8bbf"),i=n.n(o),l=n("71f5"),r=n("cda8"),s=n("32e7"),c=n.n(s),d=n("3e12"),u=n("cf38"),f=n("8b15"),g=Object(l.h)("button"),b=g[0],p=g[1];function m(e,t,n,a){var o=t.tag,i=t.type,l=t.disabled,r=t.loading,s=t.loadingText;return e(o,c()([{attrs:{type:t.nativeType,disabled:l},class:p([i,t.size,{loading:r,disabled:l,block:t.block,plain:t.plain,round:t.round,square:t.square,"bottom-action":t.bottomAction}]),on:{click:function(e){r||l||(Object(d.a)(a,"click",e),Object(u.a)(a))}}},Object(d.b)(a)]),[r?[e(f.a,{attrs:{size:t.loadingSize,color:"default"===i?void 0:""}}),s&&e("span",{class:p("loading-text")},[s])]:e("span",{class:p("text")},[n.default?n.default():t.text])])}m.props=Object(a.a)({},u.b,{text:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,disabled:Boolean,nativeType:String,loadingText:String,bottomAction:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}});var h,z=b(m),v=Object(l.h)("dialog"),M=v[0],w=v[1],x=v[2],k=M({mixins:[r.a],props:{title:String,message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,confirmButtonText:String,cancelButtonText:String,showCancelButton:Boolean,showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(e){var t=this;this.$emit(e),this.beforeClose?(this.loading[e]=!0,this.beforeClose(e,function(n){!1!==n&&t.onClose(e),t.loading[e]=!1})):this.onClose(e)},onClose:function(e){this.close(),this.callback&&this.callback(e)}},render:function(e){var t,n=this;if(this.shouldRender){var a=this.title,o=this.message,i=this.messageAlign,l=this.slots(),r=a&&e("div",{class:w("header",{isolated:!o&&!l})},[a]),s=(l||o)&&e("div",{class:w("content")},[l||e("div",{domProps:{innerHTML:o},class:w("message",(t={"has-title":a},t[i]=i,t))})]),c=this.showCancelButton&&this.showConfirmButton,d=e("div",{class:["van-hairline--top",w("footer",{buttons:c})]},[this.showCancelButton&&e(z,{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||x("cancel")},class:w("cancel"),on:{click:function(){n.handleAction("cancel")}}}),this.showConfirmButton&&e(z,{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||x("confirm")},class:[w("confirm"),{"van-hairline--left":c}],on:{click:function(){n.handleAction("confirm")}}})]);return e("transition",{attrs:{name:"van-dialog-bounce"}},[e("div",{directives:[{name:"show",value:this.value}],class:[w(),this.className]},[r,s,d])])}}}),A=function e(t){return l.e?Promise.resolve():new Promise(function(n,o){h||((h=new(i.a.extend(k))({el:document.createElement("div"),propsData:{lazyRender:!1}})).$on("input",function(e){h.value=e}),document.body.appendChild(h.$el)),Object(a.a)(h,e.currentOptions,t,{resolve:n,reject:o})})};A.defaultOptions={value:!0,title:"",message:"",overlay:!0,className:"",lockScroll:!0,beforeClose:null,messageAlign:"",confirmButtonText:"",cancelButtonText:"",showConfirmButton:!0,showCancelButton:!1,closeOnClickOverlay:!1,callback:function(e){h["confirm"===e?"resolve":"reject"](e)}},A.alert=A,A.confirm=function(e){return A(Object(a.a)({showCancelButton:!0},e))},A.close=function(){h&&(h.value=!1)},A.setDefaultOptions=function(e){Object(a.a)(A.currentOptions,e)},A.resetDefaultOptions=function(){A.currentOptions=Object(a.a)({},A.defaultOptions)},A.install=function(){i.a.use(k)},i.a.prototype.$dialog=A,A.resetDefaultOptions(),t.a=A},"3f73":function(e,t,n){"use strict";n.r(t),n("4e5b");var a=n("2774"),o=(n("b5aa"),n("2c46")),i=n("3007"),l={name:"dialogLoginSelect",data:function(){return{reward_amount:1}},created:function(){var e=window.localStorage.getItem("newUserInfo"),t=e?JSON.parse(e):{};this.reward_amount=t.reward_amount||8888},methods:{close:function(){this.$store.commit("setNewGiftBagShow",!1)},goReceive:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.f)();case 2:(t=e.sent)&&t.data&&(a.a.alert({message:"Anda telah berhasil menerima paket hadiah baru",confirmButtonText:"Tentukan"}),window.localStorage.removeItem("newUserInfo"),this.$store.commit("setNewGiftBagShow",!1));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},r=(n("f752"),n("17cc")),s=Object(r.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialogLoginSelect-container"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n("e89a"),expression:"require('@/assets/images/xinrenlibao.png')",arg:"background-image"}],staticClass:"dialog-content"},[a("div",{staticClass:"tit"},[e._v("Newcomer Gift Bag")]),a("div",{staticClass:"num"},[a("span",{staticClass:"dw"},[e._v("Rp")]),e._v(e._s(e.reward_amount))]),a("div",{staticClass:"receive",on:{click:e.goReceive}},[e._v("Receive")]),a("img",{staticClass:"close-img",attrs:{src:n("6eff")},on:{click:e.close}})])])},[],!1,null,"317d8b4a",null);t.default=s.exports},"4e5b":function(e,t,n){"use strict";n("36d9"),n("2bf8"),n("1933")},"6eff":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAeFBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyRUjlNAAAAJ3RSTlMABMjD3utkrV2nPvLYzLEN+BQJk+Umj0oyHrl3bFXTjkQYhzZNnIUvJLS2AAACWElEQVRYw5yU3XqiQBBEq0cGBggoiAT/Eo3Z1Pu/4c4QNisBRuFc6OeFx65qWkwjN7ONVKDTVAcq2pqbYDbXMK74iyoO95jDa5yyI62CoPr5tIlf8SxGfX9F1adkV5QiZbFLTnW2oUOZ5ybJWkdkBgH2JmpN2eOJrjEtwXGihP0xoCW+wstZO8lJMImcnEif4eGdlq8SXsovWmpMIblrsMFDGreDg2CUddb7ES81ybf1qOWFZIgnCUm+jHjkjeQFT3Nx8wxzHUgmmEHi+hkLe8EsLsMqPz29ePv57NW7IbeYzdYezX3Nka0dC7DLjfpt7bCAXW8vAfmBRXzcxTiTGgvR5Pl/whALCX/GSbphFo+T/FvTEYs5dstakyywmKJ7dgyZY8ht9UfQQ+JDgyE5ab4zmfEnS0nPouxJY4hpU4kezxTTefoWxuOptKAhM4xQrlpPz6JKjJCRDcKpoxR17+mkEwcaonYv057VQ4sb5B359J+erJznkQWJW7XyHXfr6d7Ec+YKAdMCXk+et7JJipQBNKsSfo/fgrKihlUJPES05PAgNtDfVswdB0AQCKKxtFgxkmhig5IY7n9D2WqtNiCPmvBndt5Aw0CbIo54rUcsyIUDz++qC4Y+A/Q1IaEYl61bZYsRUUfSz7lL0sMKFBik3EHFl7EC48ZkMmOiywFsEmDaAAs5bmgffTOcvbaW/pn9xKOHgdDRgeoGQjSWGSTGZugoEhxklRZk1QmXyQfoHPxBtqy9EoPzULjARx1+8FIkfoOXKMWCFzIG4kMpPyLbLSLb3YjsBTJAaAzXaiJUAAAAAElFTkSuQmCC"},7253:function(e,t,n){(e.exports=n("690ed")(!1)).push([e.i,".van-dialog{position:fixed;top:50%;left:50%;width:85%;font-size:16px;overflow:hidden;-webkit-transition:.3s;transition:.3s;border-radius:4px;background-color:#fff;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.van-dialog__header{font-weight:500;padding-top:25px;text-align:center}.van-dialog__header--isolated{padding:25px 0}.van-dialog__message{padding:25px;font-size:14px;line-height:1.5;max-height:60vh;overflow-y:auto;text-align:center;-webkit-overflow-scrolling:touch;white-space:pre-wrap}.van-dialog__message--has-title{padding-top:12px;color:#7d7e80}.van-dialog__message--left{text-align:left}.van-dialog__message--right{text-align:right}.van-dialog__footer{overflow:hidden;-webkit-user-select:none;user-select:none}.van-dialog__footer--buttons{display:-webkit-box;display:-webkit-flex;display:flex}.van-dialog__footer--buttons .van-button{-webkit-box-flex:1;-webkit-flex:1;flex:1}.van-dialog .van-button{border:0}.van-dialog__confirm,.van-dialog__confirm:active{color:#1989fa}.van-dialog-bounce-enter{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7)}.van-dialog-bounce-leave-active{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9)}",""])},ba46:function(e,t,n){var a=n("e2bd");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),(0,n("85cb").default)("eb9ba04c",a,!0,{sourceMap:!1,shadowMode:!1})},cf38:function(e,t,n){"use strict";function a(e){var t,n,a,o,i;t=e.parent&&e.parent.$router,n=e.props,a=n.to,o=n.url,i=n.replace,a&&t?t[i?"replace":"push"](a):o&&(i?location.replace(o):location.href=o)}n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o});var o={url:String,replace:Boolean,to:[String,Object]}},e2bd:function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,".dialogLoginSelect-container[data-v-317d8b4a]{width:100vw;height:100vh;background:rgba(0,0,0,.5);position:fixed;top:0;left:0;z-index:100;padding-top:2.66667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.dialogLoginSelect-container .dialog-content[data-v-317d8b4a]{width:7.94667rem;height:6.96rem;background-size:100% 100%;position:relative;padding-top:3.73333rem;box-sizing:border-box;text-align:center}.dialogLoginSelect-container .dialog-content .close-img[data-v-317d8b4a]{display:block;width:.93333rem;height:auto;position:absolute;bottom:-3.04rem;left:0;right:0;margin:0 auto}.dialogLoginSelect-container .dialog-content .receive[data-v-317d8b4a]{width:6.05333rem;height:1.14667rem;background:#ffc21f;border-radius:.57333rem;position:absolute;bottom:-1.57333rem;left:0;right:0;margin:0 auto;font-size:.45333rem;font-weight:700;color:#ac2d20;text-align:center;line-height:1.14667rem}.dialogLoginSelect-container .dialog-content .tit[data-v-317d8b4a]{font-size:.32rem;color:#e5e8ee;margin-bottom:.26667rem}.dialogLoginSelect-container .dialog-content .num[data-v-317d8b4a]{font-size:1.06667rem;color:gold}.dialogLoginSelect-container .dialog-content .num .dw[data-v-317d8b4a]{font-size:.26667rem;position:relative;top:-.66667rem}",""])},e89a:function(e,t,n){e.exports=n.p+"img/xinrenlibao.7580f8c7.png"},f752:function(e,t,n){"use strict";var a=n("ba46");n.n(a).a}}]);