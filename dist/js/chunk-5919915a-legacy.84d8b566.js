(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5919915a"],{"90da":function(e,t,a){"use strict";a.r(t),a("cadf"),a("551c"),a("f751"),a("097d");var i=a("0f35"),o=a("59d0"),s={mixins:[i.a,o.a],name:"dialogSharingMakes",props:{dialogVisible:{type:Object,default:function(){return{show:!1}}},shareInfo:{type:Object,default:function(){return{share_url:window.location.origin+"/forBargain",share_title:"分享标题",share_desp:"分享的描述",share_image:"https://s.pinimg.com/images/facebook_share_image.png"}}},itemData:{type:Object}},methods:{closeDialog:function(){this.$emit("update:dialogVisible",{show:!1})},share:function(e){e(),this.$gaSend({eventCategory:"分享赚浮窗_分享按钮",eventAction:"点击",eventLabel:this.itemData.title.substr(0,10)})}}},r=(a("eeba"),a("2877")),n=Object(r.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogVisible.show,expression:"dialogVisible.show"}],staticClass:"dialogSharingMakes-container",on:{click:function(t){t.stopPropagation(),e.abc=1}}},[i("div",{staticClass:"share-box"},[e._m(0),i("div",{staticClass:"content"},[i("div",{staticClass:"good-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.itemData.spu_pics&&e.itemData.spu_pics[0],expression:"itemData.spu_pics&&itemData.spu_pics[0]"}],staticClass:"good-img"}),i("div",{staticClass:"right-box"},[i("div",{staticClass:"good-tit"},[e._v("\n            "+e._s(e.itemData.title)+"\n          ")]),i("div",{staticClass:"old-m"},[e._v("Rp"+e._s(e.itemData.original_price))]),i("div",{staticClass:"cur-n"},[i("span",{staticClass:"rp"},[e._v("Rp")]),e._v(e._s(e.itemData.price)+"\n          ")])])]),i("div",{staticClass:"share-types"},[i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("23b7"),expression:"require('@/assets/images/facbook.png')"}],on:{click:function(t){return e.share(e.mx_shareFacebook)}}}),i("p",[e._v("Facebook")])]),i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("fe82"),expression:"require('@/assets/images/line.png')"}],on:{click:function(t){return e.share(e.mx_shareLine)}}}),i("p",[e._v("LINE")])]),i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("c64e"),expression:"require('@/assets/images/messenger.png')"}],on:{click:function(t){return e.share(e.mx_shareMessenger)}}}),i("p",[e._v("Messenger")])]),i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("d253"),expression:"require('@/assets/images/whatsapp.png')"}],on:{click:function(t){return e.share(e.mx_shareWhatsapp)}}}),i("p",[e._v("WhatsApp")])])]),i("button",{ref:"copy",staticClass:"copy-link",attrs:{"data-clipboard-action":"copy","data-clipboard-text":e.shareInfo.share_url},on:{click:e.mx_copyLink}})]),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("6eff"),expression:"require('@/assets/images/guanbi@2x.png')"}],staticClass:"close-img",on:{click:e.closeDialog}})])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{staticClass:"tit"},[t("p",[this._v("Share to your friends.")]),t("p",[this._v(" You will gain bonus if your friends buy it.")])])}],!1,null,"63fad23e",null);t.default=n.exports},"9b1e":function(e,t,a){var i=a("b041");(e.exports=a("2350")(!1)).push([e.i,".dialogSharingMakes-container[data-v-63fad23e]{width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:1010;background:rgba(0,0,0,.6);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:2vh;box-sizing:border-box}.share-box[data-v-63fad23e]{width:8.13333rem;height:12.88rem;background:url("+i(a("bb27"))+") no-repeat 0 0/100% 100%;padding-top:2.93333rem;box-sizing:border-box;position:relative}.share-box .tit[data-v-63fad23e]{padding:0 .46667rem;box-sizing:border-box;text-align:center;margin:0 auto;font-size:.37333rem;font-weight:700;color:#fff;line-height:.50667rem}.share-box .content[data-v-63fad23e]{width:7.46667rem;height:6.4rem;margin:0 auto;margin-top:.4rem}.share-box .content .good-box[data-v-63fad23e]{width:7.6rem;height:2.8rem;margin:0 auto;background:#fff6f5;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:.16rem;box-sizing:border-box;-webkit-transform:scale(.9);transform:scale(.9);position:relative;left:-.08rem}.share-box .content .good-box .good-img[data-v-63fad23e]{width:2.4rem;height:2.4rem}.share-box .content .good-box .right-box[data-v-63fad23e]{margin-left:.26667rem;height:2rem;width:5.6rem}.share-box .content .good-box .right-box .good-tit[data-v-63fad23e]{width:100%;padding-right:.13333rem;box-sizing:border-box;height:.8rem;font-size:.32rem;font-weight:400;color:#323232;line-height:.42667rem;margin-bottom:.33333rem;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.share-box .content .good-box .right-box .old-m[data-v-63fad23e]{font-size:.21333rem;font-weight:400;text-decoration:line-through;color:#888}.share-box .content .good-box .right-box .cur-n[data-v-63fad23e]{font-size:.48rem;font-weight:600;color:#d30c05}.share-box .content .good-box .right-box .cur-n .rp[data-v-63fad23e]{font-size:.26667rem;margin-right:.05333rem}.share-box .content .share-to[data-v-63fad23e]{font-size:.45333rem;font-weight:700;color:#d30c05;text-align:center;margin-bottom:.18667rem}.share-box .content .share-types[data-v-63fad23e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:1.33333rem;margin-bottom:.54667rem;position:relative;padding-left:.13333rem}.share-box .content .share-types .share-item[data-v-63fad23e]{width:1.33333rem;margin-right:.26667rem;height:auto;text-align:center;font-size:.26667rem;color:#323232}.share-box .content .share-types .share-item img[data-v-63fad23e]{width:100%;height:auto}.share-box .copy-link[data-v-63fad23e]{width:5.72rem;height:1.08rem;bottom:.56rem;background:url("+i(a("5587"))+") no-repeat 0 0/100% 100%}.share-box .close-img[data-v-63fad23e],.share-box .copy-link[data-v-63fad23e]{position:absolute;left:0;right:0;margin:0 auto}.share-box .close-img[data-v-63fad23e]{display:block;width:.93333rem;height:auto;bottom:-1.46667rem}",""])},bb27:function(e,t,a){e.exports=a.p+"img/fenxiangzhuanba.97a270d8.png"},eeba:function(e,t,a){"use strict";var i=a("ff29");a.n(i).a},ff29:function(e,t,a){var i=a("9b1e");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,a("499e").default)("5c01c6fd",i,!0,{sourceMap:!1,shadowMode:!1})}}]);