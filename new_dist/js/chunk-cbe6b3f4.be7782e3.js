(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-cbe6b3f4"],{"047e":function(e,t,i){var a=i("b041");(e.exports=i("2350")(!1)).push([e.i,".dialogSharingMakes-container[data-v-139336f2]{width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:1010;background:rgba(0,0,0,.6);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box}.share-box[data-v-139336f2]{width:8.13333rem;height:12.88rem;background:url("+a(i("bb27"))+") no-repeat 0 0/100% 100%;padding-top:2.93333rem;box-sizing:border-box;position:relative}.share-box .tit[data-v-139336f2]{padding:0 .46667rem;box-sizing:border-box;text-align:center;margin:0 auto;font-size:.37333rem;font-weight:700;color:#fff;line-height:.50667rem}.share-box .content[data-v-139336f2]{width:7.46667rem;height:6.4rem;margin:0 auto;margin-top:.4rem}.share-box .content .good-box[data-v-139336f2]{width:7.6rem;height:2.8rem;margin:0 auto;background:#fff6f5;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:.16rem;box-sizing:border-box;-webkit-transform:scale(.9);transform:scale(.9);position:relative;left:-.08rem}.share-box .content .good-box .good-img[data-v-139336f2]{width:2.4rem;height:2.4rem}.share-box .content .good-box .right-box[data-v-139336f2]{margin-left:.26667rem;height:2rem;width:5.6rem}.share-box .content .good-box .right-box .good-tit[data-v-139336f2]{width:100%;padding-right:.13333rem;box-sizing:border-box;height:.8rem;font-size:.32rem;font-weight:400;color:#323232;line-height:.42667rem;margin-bottom:.33333rem;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.share-box .content .good-box .right-box .old-m[data-v-139336f2]{font-size:.21333rem;font-weight:400;text-decoration:line-through;color:#888}.share-box .content .good-box .right-box .cur-n[data-v-139336f2]{font-size:.48rem;font-weight:600;color:#d30c05}.share-box .content .good-box .right-box .cur-n .rp[data-v-139336f2]{font-size:.26667rem;margin-right:.05333rem}.share-box .content .share-to[data-v-139336f2]{font-size:.45333rem;font-weight:700;color:#d30c05;text-align:center;margin-bottom:.18667rem}.share-box .content .share-types[data-v-139336f2]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:1.33333rem;margin-bottom:.54667rem;position:relative;padding-left:.13333rem}.share-box .content .share-types .share-item[data-v-139336f2]{width:1.33333rem;margin-right:.26667rem;height:auto;text-align:center;font-size:.26667rem;color:#323232}.share-box .content .share-types .share-item img[data-v-139336f2]{width:100%;height:auto}.share-box .copy-link[data-v-139336f2]{width:5.72rem;height:1.08rem;bottom:.56rem;background:url("+a(i("5587"))+") no-repeat 0 0/100% 100%}.share-box .close-img[data-v-139336f2],.share-box .copy-link[data-v-139336f2]{position:absolute;left:0;right:0;margin:0 auto}.share-box .close-img[data-v-139336f2]{display:block;width:.93333rem;height:auto;bottom:-1.2rem}",""])},"103c":function(e,t,i){var a=i("047e");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),(0,i("499e").default)("3b9986ec",a,!0,{sourceMap:!1,shadowMode:!1})},"90da":function(e,t,i){"use strict";i.r(t);var a=i("0f35"),o=i("59d0"),s={mixins:[a.a,o.a],name:"dialogSharingMakes",props:{dialogVisible:{type:Object,default:()=>({show:!1})},shareInfo:{type:Object,default:()=>({share_url:window.location.origin+"/forBargain",share_title:"分享标题",share_desp:"分享的描述",share_image:"https://s.pinimg.com/images/facebook_share_image.png"})},itemData:{type:Object}},methods:{closeDialog(){this.$emit("update:dialogVisible",{show:!1})},share(e){e(),this.$gaSend({eventCategory:"分享赚浮窗_分享按钮",eventAction:"点击",eventLabel:this.itemData.title.substr(0,10)})}}},r=(i("92d1"),i("2877")),n=Object(r.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogVisible.show,expression:"dialogVisible.show"}],staticClass:"dialogSharingMakes-container",on:{click:function(t){t.stopPropagation(),e.abc=1}}},[a("div",{staticClass:"share-box"},[e._m(0),a("div",{staticClass:"content"},[a("div",{staticClass:"good-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.itemData.spu_pics&&e.itemData.spu_pics[0],expression:"itemData.spu_pics&&itemData.spu_pics[0]"}],staticClass:"good-img"}),a("div",{staticClass:"right-box"},[a("div",{staticClass:"good-tit"},[e._v("\n            "+e._s(e.itemData.title)+"\n          ")]),a("div",{staticClass:"old-m"},[e._v("Rp"+e._s(e.itemData.original_price))]),a("div",{staticClass:"cur-n"},[a("span",{staticClass:"rp"},[e._v("Rp")]),e._v(e._s(e.itemData.price)+"\n          ")])])]),a("div",{staticClass:"share-types"},[a("div",{staticClass:"share-item"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i("fe82"),expression:"require('@/assets/images/line.png')"}],on:{click:function(t){return e.share(e.mx_shareLine)}}}),a("p",[e._v("LINE")])]),a("div",{staticClass:"share-item"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i("c64e"),expression:"require('@/assets/images/messenger.png')"}],on:{click:function(t){return e.share(e.mx_shareMessenger)}}}),a("p",[e._v("Messenger")])]),a("div",{staticClass:"share-item"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i("d253"),expression:"require('@/assets/images/whatsapp.png')"}],on:{click:function(t){return e.share(e.mx_shareWhatsapp)}}}),a("p",[e._v("WhatsApp")])])]),a("button",{ref:"copy",staticClass:"copy-link",attrs:{"data-clipboard-action":"copy","data-clipboard-text":e.mx_copyTxt},on:{click:e.mx_copyLink}})]),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i("6eff"),expression:"require('@/assets/images/guanbi@2x.png')"}],staticClass:"close-img",on:{click:e.closeDialog}})])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{staticClass:"tit"},[t("p",[this._v("Share to your friends.")]),t("p",[this._v(" You will gain bonus if your friends buy it.")])])}],!1,null,"139336f2",null);t.default=n.exports},"92d1":function(e,t,i){"use strict";var a=i("103c");i.n(a).a},bb27:function(e,t,i){e.exports=i.p+"img/fenxiangzhuanba.97a270d8.png"}}]);