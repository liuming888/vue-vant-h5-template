(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6d0b26bb"],{"28fd":function(e,t,i){"use strict";i.r(t);var a=i("0f35"),s=i("59d0"),o={mixins:[a.a,s.a],name:"dialogSharingFriends",props:{dialogVisible:{type:Object,default:()=>({show:!1})},shareInfo:{type:Object,default:()=>({share_url:window.location.origin+"/forBargain",share_title:"分享标题",share_desp:"分享的描述",share_image:"https://s.pinimg.com/images/facebook_share_image.png"})},itemData:{type:Object}},methods:{closeDialog(){this.$emit("update:dialogVisible",{show:!1})},share(e){e(),this.$gaSend({eventCategory:"分享好友帮砍浮窗_分享按钮",eventAction:"点击",eventLabel:this.itemData.title.substr(0,10)})}}},r=(i("8a23"),i("17cc")),n=Object(r.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogVisible.show,expression:"dialogVisible.show"}],staticClass:"dialogSharingFriends-container",on:{click:function(t){t.stopPropagation(),e.abc=1}}},[a("div",{staticClass:"share-box"},[a("div",{staticClass:"tip"},[e._v("\n      Tip: Share to friends and you can get freebies faster.\n    ")]),a("h5",{staticClass:"tit"},[e._v("Share on")]),a("div",{staticClass:"share-types"},[a("div",{staticClass:"share-item"},[a("img",{attrs:{src:i("23b7")},on:{click:function(t){return e.share(e.mx_shareFacebook)}}}),a("p",[e._v("Facebook")])]),a("div",{staticClass:"share-item"},[a("img",{attrs:{src:i("fe82")},on:{click:function(t){return e.shareshare(e.mx_shareLine)}}}),a("p",[e._v("LINE")])]),a("div",{staticClass:"share-item"},[a("img",{attrs:{src:i("d253")},on:{click:function(t){return e.share(e.mx_shareWhatsapp)}}}),a("p",[e._v("WhatsApp")])]),a("div",{staticClass:"share-item"},[a("img",{attrs:{src:i("c64e")},on:{click:function(t){return e.share(e.mx_shareMessenger)}}}),a("p",[e._v("Messenger")])])]),a("button",{ref:"copy",staticClass:"copy-link",attrs:{"data-clipboard-action":"copy","data-clipboard-text":e.shareInfo.share_url},on:{click:e.mx_copyLink}}),a("img",{staticClass:"close-img",attrs:{src:i("6eff")},on:{click:e.closeDialog}})])])},[],!1,null,"e3f70cf6",null);t.default=n.exports},6150:function(e,t,i){var a=i("5454");(e.exports=i("690e")(!1)).push([e.i,".dialogSharingFriends-container[data-v-e3f70cf6]{width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:100;background:rgba(0,0,0,.6);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;padding-bottom:20vh;box-sizing:border-box}.share-box[data-v-e3f70cf6]{width:7.61333rem;height:11.14667rem;background:url("+a(i("c797"))+") no-repeat 0 0/100% 100%;padding-top:2.93333rem;box-sizing:border-box;position:relative}.share-box .tip[data-v-e3f70cf6]{width:6.17333rem;font-size:.4rem;font-weight:700;color:#fff;line-height:.50667rem;margin:0 auto;margin-bottom:.88rem}.share-box .tit[data-v-e3f70cf6]{height:.41333rem;font-size:.53333rem;font-weight:700;color:#d30c05;text-align:center;margin-bottom:.54667rem}.share-box .share-types[data-v-e3f70cf6]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:.54667rem;position:relative}.share-box .share-types .share-item[data-v-e3f70cf6]{width:1.33333rem;margin-right:.26667rem;height:auto;text-align:center;font-size:.26667rem;color:#323232}.share-box .share-types .share-item img[data-v-e3f70cf6]{width:100%;height:auto}.share-box .copy-link[data-v-e3f70cf6]{width:5.72rem;height:1.08rem;bottom:.66667rem;background:url("+a(i("5587"))+") no-repeat 0 0/100% 100%}.share-box .close-img[data-v-e3f70cf6],.share-box .copy-link[data-v-e3f70cf6]{position:absolute;left:0;right:0;margin:0 auto}.share-box .close-img[data-v-e3f70cf6]{display:block;width:.93333rem;height:auto;bottom:-1.2rem}",""])},6885:function(e,t,i){var a=i("6150");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),(0,i("85cb").default)("29c22c48",a,!0,{sourceMap:!1,shadowMode:!1})},"8a23":function(e,t,i){"use strict";var a=i("6885");i.n(a).a},c797:function(e,t,i){e.exports=i.p+"img/share-background.7d9bcbde.png"}}]);