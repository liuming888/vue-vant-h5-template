(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0393e18"],{"28fd":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogVisible.show,expression:"dialogVisible.show"}],staticClass:"dialogSharingFriends-container",on:{click:function(t){t.stopPropagation(),e.abc=1}}},[i("div",{staticClass:"share-box"},[i("div",{staticClass:"tip"},[e._v("\n      Tip: Share to friends and you can get freebies faster.\n    ")]),i("h5",{staticClass:"tit"}),i("div",{staticClass:"share-types"},[i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("fe82"),expression:"require('@/assets/images/line.png')"}],on:{click:function(t){return e.shareshare(e.mx_shareLine)}}}),i("p",[e._v("LINE")])]),i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("d253"),expression:"require('@/assets/images/whatsapp.png')"}],on:{click:function(t){return e.share(e.mx_shareWhatsapp)}}}),i("p",[e._v("WhatsApp")])]),i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("c64e"),expression:"require('@/assets/images/messenger.png')"}],on:{click:function(t){return e.share(e.mx_shareMessenger)}}}),i("p",[e._v("Messenger")])])]),i("button",{ref:"copy",staticClass:"copy-link",attrs:{"data-clipboard-action":"copy","data-clipboard-text":e.mx_copyTxt},on:{click:e.mx_copyLink}}),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("6eff"),expression:"require('@/assets/images/guanbi@2x.png')"}],staticClass:"close-img",on:{click:e.closeDialog}})])])},s=[],r=a("0f35"),o=a("59d0"),n={mixins:[r["a"],o["a"]],name:"dialogSharingFriends",props:{dialogVisible:{type:Object,default(){return{show:!1}}},shareInfo:{type:Object,default(){return{share_url:window.location.origin+"/forBargain",share_title:"分享标题",share_desp:"分享的描述",share_image:"https://s.pinimg.com/images/facebook_share_image.png"}}},itemData:{type:Object}},methods:{closeDialog(){this.$emit("update:dialogVisible",{show:!1})},share(e){e(),this.$gaSend({eventCategory:"分享好友帮砍浮窗_分享按钮",eventAction:"点击",eventLabel:this.itemData.title.substr(0,10)})}}},c=n,d=(a("7d1f"),a("17cc")),l=Object(d["a"])(c,i,s,!1,null,"57f2d316",null);t["default"]=l.exports},"7d1f":function(e,t,a){"use strict";var i=a("8324"),s=a.n(i);s.a},8324:function(e,t,a){var i=a("eeb5");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("85cb").default;s("24dc4f7c",i,!0,{sourceMap:!1,shadowMode:!1})},c797:function(e,t,a){e.exports=a.p+"img/share-background.33c1cd96.png"},eeb5:function(e,t,a){var i=a("5454");t=e.exports=a("690e")(!1),t.push([e.i,".dialogSharingFriends-container[data-v-57f2d316]{width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:100;background:rgba(0,0,0,.6);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:10vh;box-sizing:border-box}.share-box[data-v-57f2d316]{width:8.13333rem;height:9.98667rem;background:url("+i(a("c797"))+") no-repeat 0 0/100% 100%;padding-top:2.66667rem;box-sizing:border-box;position:relative}.share-box .tip[data-v-57f2d316]{width:6.17333rem;font-size:.4rem;color:#fff;line-height:.50667rem;margin:0 auto;margin-bottom:.88rem}.share-box .tip[data-v-57f2d316],.share-box .tit[data-v-57f2d316]{font-weight:700;text-align:center}.share-box .tit[data-v-57f2d316]{height:.41333rem;font-size:.53333rem;color:#d30c05;margin-bottom:.28rem}.share-box .share-types[data-v-57f2d316]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:.54667rem;position:relative;left:.13333rem}.share-box .share-types .share-item[data-v-57f2d316]{width:1.33333rem;margin-right:.26667rem;height:auto;text-align:center;font-size:.26667rem;color:#323232}.share-box .share-types .share-item img[data-v-57f2d316]{width:100%;height:auto}.share-box .copy-link[data-v-57f2d316]{width:5.72rem;height:1.08rem;bottom:.66667rem;background:url("+i(a("5587"))+") no-repeat 0 0/100% 100%}.share-box .close-img[data-v-57f2d316],.share-box .copy-link[data-v-57f2d316]{position:absolute;left:0;right:0;margin:0 auto}.share-box .close-img[data-v-57f2d316]{display:block;width:.93333rem;height:auto;bottom:-1.2rem}",""])}}]);