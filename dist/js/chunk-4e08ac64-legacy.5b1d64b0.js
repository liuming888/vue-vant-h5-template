(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e08ac64"],{"1ea7":function(e,a,t){var i=t("5454");a=e.exports=t("690e")(!1),a.push([e.i,".dialogSharingFriends-container[data-v-ab575f4e]{width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:100;background:rgba(0,0,0,.6);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:10vh;box-sizing:border-box}.share-box[data-v-ab575f4e]{width:8.13333rem;height:9.98667rem;background:url("+i(t("c797"))+") no-repeat 0 0/100% 100%;padding-top:2.66667rem;box-sizing:border-box;position:relative}.share-box .tip[data-v-ab575f4e]{width:6.17333rem;font-size:.4rem;color:#fff;line-height:.50667rem;margin:0 auto;margin-bottom:.88rem}.share-box .tip[data-v-ab575f4e],.share-box .tit[data-v-ab575f4e]{font-weight:700;text-align:center}.share-box .tit[data-v-ab575f4e]{height:.41333rem;font-size:.53333rem;color:#d30c05;margin-bottom:.28rem}.share-box .share-types[data-v-ab575f4e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:.54667rem;position:relative;left:.13333rem}.share-box .share-types .share-item[data-v-ab575f4e]{width:1.33333rem;margin-right:.26667rem;height:auto;text-align:center;font-size:.26667rem;color:#323232}.share-box .share-types .share-item img[data-v-ab575f4e]{width:100%;height:auto}.share-box .copy-link[data-v-ab575f4e]{width:5.72rem;height:1.08rem;bottom:.66667rem;background:url("+i(t("5587"))+") no-repeat 0 0/100% 100%}.share-box .close-img[data-v-ab575f4e],.share-box .copy-link[data-v-ab575f4e]{position:absolute;left:0;right:0;margin:0 auto}.share-box .close-img[data-v-ab575f4e]{display:block;width:.93333rem;height:auto;bottom:-1.2rem}",""])},"28fd":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogVisible.show,expression:"dialogVisible.show"}],staticClass:"dialogSharingFriends-container",on:{click:function(a){a.stopPropagation(),e.abc=1}}},[i("div",{staticClass:"share-box"},[i("div",{staticClass:"tip"},[e._v("\n      Tip: Share to friends and you can get freebies faster.\n    ")]),i("h5",{staticClass:"tit"}),i("div",{staticClass:"share-types"},[i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("fe82"),expression:"require('@/assets/images/line.png')"}],on:{click:function(a){return e.shareshare(e.mx_shareLine)}}}),i("p",[e._v("LINE")])]),i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("d253"),expression:"require('@/assets/images/whatsapp.png')"}],on:{click:function(a){return e.share(e.mx_shareWhatsapp)}}}),i("p",[e._v("WhatsApp")])]),i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("c64e"),expression:"require('@/assets/images/messenger.png')"}],on:{click:function(a){return e.share(e.mx_shareMessenger)}}}),i("p",[e._v("Messenger")])])]),i("button",{ref:"copy",staticClass:"copy-link",attrs:{"data-clipboard-action":"copy","data-clipboard-text":e.shareInfo.share_url},on:{click:e.mx_copyLink}}),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("6eff"),expression:"require('@/assets/images/guanbi@2x.png')"}],staticClass:"close-img",on:{click:e.closeDialog}})])])},s=[],r=t("0f35"),o=t("59d0"),n={mixins:[r["a"],o["a"]],name:"dialogSharingFriends",props:{dialogVisible:{type:Object,default:function(){return{show:!1}}},shareInfo:{type:Object,default:function(){return{share_url:window.location.origin+"/forBargain",share_title:"分享标题",share_desp:"分享的描述",share_image:"https://s.pinimg.com/images/facebook_share_image.png"}}},itemData:{type:Object}},methods:{closeDialog:function(){this.$emit("update:dialogVisible",{show:!1})},share:function(e){e(),this.$gaSend({eventCategory:"分享好友帮砍浮窗_分享按钮",eventAction:"点击",eventLabel:this.itemData.title.substr(0,10)})}}},c=n,l=(t("47ef"),t("17cc")),h=Object(l["a"])(c,i,s,!1,null,"ab575f4e",null);a["default"]=h.exports},"47ef":function(e,a,t){"use strict";var i=t("cf65"),s=t.n(i);s.a},c797:function(e,a,t){e.exports=t.p+"img/share-background.33c1cd96.png"},cf65:function(e,a,t){var i=t("1ea7");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=t("85cb").default;s("62158479",i,!0,{sourceMap:!1,shadowMode:!1})}}]);