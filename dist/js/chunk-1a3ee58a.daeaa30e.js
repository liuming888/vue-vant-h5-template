(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a3ee58a"],{1933:function(e,t,a){var n=a("7253");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("85cb4").default;o("a8d371ae",n,!0,{sourceMap:!1,shadowMode:!1})},2774:function(e,t,a){"use strict";var n=a("219f"),o=a("8bbf"),i=a.n(o),l=a("71f5"),r=a("cda8"),s=a("32e7"),c=a.n(s),d=a("3e12"),u=a("cf38"),f=a("8b15"),g=Object(l["h"])("button"),m=g[0],p=g[1];function h(e,t,a,n){var o=t.tag,i=t.type,l=t.disabled,r=t.loading,s=t.loadingText,g=function(e){r||l||(Object(d["a"])(n,"click",e),Object(u["a"])(n))};return e(o,c()([{attrs:{type:t.nativeType,disabled:l},class:p([i,t.size,{loading:r,disabled:l,block:t.block,plain:t.plain,round:t.round,square:t.square,"bottom-action":t.bottomAction}]),on:{click:g}},Object(d["b"])(n)]),[r?[e(f["a"],{attrs:{size:t.loadingSize,color:"default"===i?void 0:""}}),s&&e("span",{class:p("loading-text")},[s])]:e("span",{class:p("text")},[a.default?a.default():t.text])])}h.props=Object(n["a"])({},u["b"],{text:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,disabled:Boolean,nativeType:String,loadingText:String,bottomAction:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}});var b,v=m(h),z=Object(l["h"])("dialog"),M=z[0],w=z[1],x=z[2],k=M({mixins:[r["a"]],props:{title:String,message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,confirmButtonText:String,cancelButtonText:String,showCancelButton:Boolean,showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(e){var t=this;this.$emit(e),this.beforeClose?(this.loading[e]=!0,this.beforeClose(e,function(a){!1!==a&&t.onClose(e),t.loading[e]=!1})):this.onClose(e)},onClose:function(e){this.close(),this.callback&&this.callback(e)}},render:function(e){var t,a=this;if(this.shouldRender){var n=this.title,o=this.message,i=this.messageAlign,l=this.slots(),r=n&&e("div",{class:w("header",{isolated:!o&&!l})},[n]),s=(l||o)&&e("div",{class:w("content")},[l||e("div",{domProps:{innerHTML:o},class:w("message",(t={"has-title":n},t[i]=i,t))})]),c=this.showCancelButton&&this.showConfirmButton,d=e("div",{class:["van-hairline--top",w("footer",{buttons:c})]},[this.showCancelButton&&e(v,{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||x("cancel")},class:w("cancel"),on:{click:function(){a.handleAction("cancel")}}}),this.showConfirmButton&&e(v,{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||x("confirm")},class:[w("confirm"),{"van-hairline--left":c}],on:{click:function(){a.handleAction("confirm")}}})]);return e("transition",{attrs:{name:"van-dialog-bounce"}},[e("div",{directives:[{name:"show",value:this.value}],class:[w(),this.className]},[r,s,d])])}}}),A=function(){b=new(i.a.extend(k))({el:document.createElement("div"),propsData:{lazyRender:!1}}),b.$on("input",function(e){b.value=e}),document.body.appendChild(b.$el)},y=function e(t){return l["e"]?Promise.resolve():new Promise(function(a,o){b||A(),Object(n["a"])(b,e.currentOptions,t,{resolve:a,reject:o})})};y.defaultOptions={value:!0,title:"",message:"",overlay:!0,className:"",lockScroll:!0,beforeClose:null,messageAlign:"",confirmButtonText:"",cancelButtonText:"",showConfirmButton:!0,showCancelButton:!1,closeOnClickOverlay:!1,callback:function(e){b["confirm"===e?"resolve":"reject"](e)}},y.alert=y,y.confirm=function(e){return y(Object(n["a"])({showCancelButton:!0},e))},y.close=function(){b&&(b.value=!1)},y.setDefaultOptions=function(e){Object(n["a"])(y.currentOptions,e)},y.resetDefaultOptions=function(){y.currentOptions=Object(n["a"])({},y.defaultOptions)},y.install=function(){i.a.use(k)},i.a.prototype.$dialog=y,y.resetDefaultOptions();t["a"]=y},"3f73":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dialogLoginSelect-container"},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:a("e89a"),expression:"require('@/assets/images/xinrenlibao.png')",arg:"background-image"}],staticClass:"dialog-content"},[n("div",{staticClass:"tit"},[e._v("Newcomer Gift Bag")]),n("div",{staticClass:"num"},[n("span",{staticClass:"dw"},[e._v("Rp")]),e._v(e._s(e.reward_amount))]),n("div",{staticClass:"receive",on:{click:e.goReceive}},[e._v("Receive")]),n("img",{staticClass:"close-img",attrs:{src:a("6eff")},on:{click:e.close}})])])},o=[],i=(a("4e5b"),a("2774")),l=a("0348"),r=a("3007"),s={name:"dialogLoginSelect",data(){return{reward_amount:1}},created(){let e=window.localStorage.getItem("newUserInfo"),t=e?JSON.parse(e):{};this.reward_amount=t.reward_amount||8888,window.localStorage.removeItem("newUserInfo")},methods:{close(){this.$store.commit("setNewGiftBagShow",!1)},goReceive(){var e=this;return Object(l["a"])(function*(){let t=yield Object(r["f"])();t&&t.data&&(i["a"].alert({message:"Anda telah berhasil menerima paket hadiah baru",confirmButtonText:"Tentukan"}),e.$store.commit("setNewGiftBagShow",!1))})()}}},c=s,d=(a("45b4"),a("17cc")),u=Object(d["a"])(c,n,o,!1,null,"a27df078",null);t["default"]=u.exports},"45b4":function(e,t,a){"use strict";var n=a("a9f4"),o=a.n(n);o.a},"4e5b":function(e,t,a){"use strict";a("36d9"),a("2bf8"),a("1933")},"6eff":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAXVBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzQDM+LAAAAHnRSTlMAya/D3uvXZF2nPo/yGw34lBQJS+UmMrmHd2xVRDYH+mWiAAACHklEQVRYw62Y2ZqCMAyFTyt7AQFx177/Y04zg6NICVv+C/mkeEzTJqQBwzOptArCPA8DpavkieUUcdraL9o0LrCEQ5rbjrwNgvb/2z49YC6J+vuJMrfsWDdAUx+zm1F7S6hkniXqV0MnxWCiif5VUtMWFSk9GFyLkeFrQOPphI/uIYncwHAjofAOBmMdlwYszYWeMhhF08RPmORE7jvDT6kGf8KaHZVelcgNxZhJPKZDKg/M5kE6GHB2tzMsIPP5xzC2MPaYr63L+IX1z6HnXrfJKyymckFT9jdMhOXQsui+t45YwbG3LoGLAKzi8jGNuws1rMSF8v09wxgrif/NyXhjps3JXst0xWqu3WKVzts1VlN3eychuSHP3WA/pueTP0kl3cW/sxR6KM8efZsR+ueU2i8dRancP6sQONHTHpod6fRVlC9L08gJ8WhQqk+dl6g/QGMY+hjX2U2qkCEGmkl6O9KZUkFGPlYU3KxOd+HCXCGweQ1WR2tWBXVuA7febQNeh1dB07oVJykOTSoaDDQhIRmhSUm4eG8DoQUX2H4PZ7BQMAiFplCi2J62CkpbMkmUSenndFFKL/fbXzAyrzuhl69MKSBbmCDaVCYJFW0yJaRQQStTXksV+/JHDyIamMhCbojkjmX+Q2I1e42sKiWOrHrqAF1uOEBvOM5vaS7Itzr4xotV1WfjpXrdTYTbQPJNKb5FZt4tMsO2yH4Ard5PekYm0V4AAAAASUVORK5CYII="},7253:function(e,t,a){t=e.exports=a("690ed")(!1),t.push([e.i,".van-dialog{position:fixed;top:50%;left:50%;width:85%;font-size:16px;overflow:hidden;-webkit-transition:.3s;transition:.3s;border-radius:4px;background-color:#fff;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.van-dialog__header{font-weight:500;padding-top:25px;text-align:center}.van-dialog__header--isolated{padding:25px 0}.van-dialog__message{padding:25px;font-size:14px;line-height:1.5;max-height:60vh;overflow-y:auto;text-align:center;-webkit-overflow-scrolling:touch;white-space:pre-wrap}.van-dialog__message--has-title{padding-top:12px;color:#7d7e80}.van-dialog__message--left{text-align:left}.van-dialog__message--right{text-align:right}.van-dialog__footer{overflow:hidden;-webkit-user-select:none;user-select:none}.van-dialog__footer--buttons{display:-webkit-box;display:-webkit-flex;display:flex}.van-dialog__footer--buttons .van-button{-webkit-box-flex:1;-webkit-flex:1;flex:1}.van-dialog .van-button{border:0}.van-dialog__confirm,.van-dialog__confirm:active{color:#1989fa}.van-dialog-bounce-enter{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7)}.van-dialog-bounce-leave-active{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9)}",""])},a9f4:function(e,t,a){var n=a("b8c9");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("85cb").default;o("597982d3",n,!0,{sourceMap:!1,shadowMode:!1})},b8c9:function(e,t,a){t=e.exports=a("690e")(!1),t.push([e.i,".dialogLoginSelect-container[data-v-a27df078]{width:100vw;height:100vh;background:rgba(0,0,0,.5);position:fixed;top:0;left:0;z-index:100;padding-top:2.66667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.dialogLoginSelect-container .dialog-content[data-v-a27df078]{width:7.94667rem;height:6.96rem;background-size:100% 100%;position:relative;padding-top:3.73333rem;box-sizing:border-box;text-align:center}.dialogLoginSelect-container .dialog-content .close-img[data-v-a27df078]{display:block;width:.93333rem;height:auto;position:absolute;bottom:-3.04rem;left:0;right:0;margin:0 auto}.dialogLoginSelect-container .dialog-content .receive[data-v-a27df078]{width:6.05333rem;height:1.14667rem;background:#ffc21f;border-radius:.57333rem;position:absolute;bottom:-1.57333rem;left:0;right:0;margin:0 auto;font-size:.45333rem;font-weight:700;color:#ac2d20;text-align:center;line-height:1.14667rem}.dialogLoginSelect-container .dialog-content .tit[data-v-a27df078]{font-size:.32rem;color:#e5e8ee;margin-bottom:.26667rem}.dialogLoginSelect-container .dialog-content .num[data-v-a27df078]{font-size:1.06667rem;color:gold}.dialogLoginSelect-container .dialog-content .num .dw[data-v-a27df078]{font-size:.26667rem;position:relative;top:-.66667rem}",""])},cf38:function(e,t,a){"use strict";function n(e,t){var a=t.to,n=t.url,o=t.replace;a&&e?e[o?"replace":"push"](a):n&&(o?location.replace(n):location.href=n)}function o(e){n(e.parent&&e.parent.$router,e.props)}a.d(t,"a",function(){return o}),a.d(t,"b",function(){return i});var i={url:String,replace:Boolean,to:[String,Object]}},e89a:function(e,t,a){e.exports=a.p+"img/xinrenlibao.7580f8c7.png"}}]);