(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9a689ac6"],{"28fd":function(e,a,t){"use strict";t.r(a);var i=t("0f35"),s=t("59d0"),r={mixins:[i.a,s.a],name:"dialogSharingFriends",props:{dialogVisible:{type:Object,default:()=>({show:!1})},shareInfo:{type:Object,default:()=>({share_url:window.location.origin+"/forBargain",share_title:"分享标题",share_desp:"分享的描述",share_image:"https://s.pinimg.com/images/facebook_share_image.png"})},itemData:{type:Object}},methods:{closeDialog(){this.$emit("update:dialogVisible",{show:!1})},share(e){e(),this.$gaSend({eventCategory:"分享好友帮砍浮窗_分享按钮",eventAction:"点击",eventLabel:this.itemData.title.substr(0,10)})}}},o=(t("ff44"),t("17cc")),n=Object(o.a)(r,function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogVisible.show,expression:"dialogVisible.show"}],staticClass:"dialogSharingFriends-container",on:{click:function(a){a.stopPropagation(),e.abc=1}}},[i("div",{staticClass:"share-box"},[i("div",{staticClass:"tip"},[e._v("\n      Tip: Share to friends and you can get freebies faster.\n    ")]),i("h5",{staticClass:"tit"},[e._v("Share on")]),i("div",{staticClass:"share-types"},[i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("23b7"),expression:"require('@/assets/images/facbook.png')"}],on:{click:function(a){return e.share(e.mx_shareFacebook)}}}),i("p",[e._v("Facebook")])]),i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("fe82"),expression:"require('@/assets/images/line.png')"}],on:{click:function(a){return e.shareshare(e.mx_shareLine)}}}),i("p",[e._v("LINE")])]),i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("d253"),expression:"require('@/assets/images/whatsapp.png')"}],on:{click:function(a){return e.share(e.mx_shareWhatsapp)}}}),i("p",[e._v("WhatsApp")])]),i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("c64e"),expression:"require('@/assets/images/messenger.png')"}],on:{click:function(a){return e.share(e.mx_shareMessenger)}}}),i("p",[e._v("Messenger")])])]),i("button",{ref:"copy",staticClass:"copy-link",attrs:{"data-clipboard-action":"copy","data-clipboard-text":e.shareInfo.share_url},on:{click:e.mx_copyLink}}),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("6eff"),expression:"require('@/assets/images/guanbi@2x.png')"}],staticClass:"close-img",on:{click:e.closeDialog}})])])},[],!1,null,"7b95bebb",null);a.default=n.exports},b6fe:function(e,a,t){var i=t("bb53");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,t("85cb").default)("0b8d8b34",i,!0,{sourceMap:!1,shadowMode:!1})},bb53:function(e,a,t){var i=t("5454");(e.exports=t("690e")(!1)).push([e.i,".dialogSharingFriends-container[data-v-7b95bebb]{width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:100;background:rgba(0,0,0,.6);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;padding-bottom:20vh;box-sizing:border-box}.share-box[data-v-7b95bebb]{width:7.61333rem;height:11.14667rem;background:url("+i(t("c797"))+") no-repeat 0 0/100% 100%;padding-top:2.93333rem;box-sizing:border-box;position:relative}.share-box .tip[data-v-7b95bebb]{width:6.17333rem;font-size:.4rem;font-weight:700;color:#fff;line-height:.50667rem;margin:0 auto;margin-bottom:.88rem}.share-box .tit[data-v-7b95bebb]{height:.41333rem;font-size:.53333rem;font-weight:700;color:#d30c05;text-align:center;margin-bottom:.54667rem}.share-box .share-types[data-v-7b95bebb]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:.54667rem;position:relative}.share-box .share-types .share-item[data-v-7b95bebb]{width:1.33333rem;margin-right:.26667rem;height:auto;text-align:center;font-size:.26667rem;color:#323232}.share-box .share-types .share-item img[data-v-7b95bebb]{width:100%;height:auto}.share-box .copy-link[data-v-7b95bebb]{width:5.72rem;height:1.08rem;bottom:.66667rem;background:url("+i(t("5587"))+") no-repeat 0 0/100% 100%}.share-box .close-img[data-v-7b95bebb],.share-box .copy-link[data-v-7b95bebb]{position:absolute;left:0;right:0;margin:0 auto}.share-box .close-img[data-v-7b95bebb]{display:block;width:.93333rem;height:auto;bottom:-1.2rem}",""])},c797:function(e,a,t){e.exports=t.p+"img/share-background.7d9bcbde.png"},ff44:function(e,a,t){"use strict";var i=t("b6fe");t.n(i).a}}]);