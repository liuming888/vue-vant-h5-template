(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2b3cf184"],{"05f3":function(e,t,a){var i=a("a392");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,a("499e").default)("7b5147a2",i,!0,{sourceMap:!1,shadowMode:!1})},"7f58":function(e,t,a){"use strict";var i=a("05f3");a.n(i).a},"90da":function(e,t,a){"use strict";a.r(t);var i=a("0f35"),o=a("59d0"),s={mixins:[i.a,o.a],name:"dialogSharingMakes",props:{dialogVisible:{type:Object,default:function(){return{show:!1}}},shareInfo:{type:Object,default:function(){return{share_url:window.location.origin+"/forBargain",share_title:"分享标题",share_desp:"分享的描述",share_image:"https://s.pinimg.com/images/facebook_share_image.png"}}},itemData:{type:Object}},methods:{closeDialog:function(){this.$emit("update:dialogVisible",{show:!1})}}},r=(a("7f58"),a("2877")),n=Object(r.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogVisible.show,expression:"dialogVisible.show"}],staticClass:"dialogSharingMakes-container",on:{click:function(t){t.stopPropagation(),e.abc=1}}},[i("div",{staticClass:"share-box"},[i("h5",{staticClass:"tit"},[e._v("Share to your friends.You will gain bonus if your friends buy it.")]),i("div",{staticClass:"content"},[i("div",{staticClass:"good-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.itemData.spu_pics&&e.itemData.spu_pics[0],expression:"itemData.spu_pics&&itemData.spu_pics[0]"}],staticClass:"good-img"}),i("div",{staticClass:"right-box"},[i("div",{staticClass:"good-tit"},[e._v("\n            "+e._s(e.itemData.title)+"\n          ")]),i("div",{staticClass:"old-m"},[e._v("Rp"+e._s(e.itemData.original_price))]),i("div",{staticClass:"cur-n"},[i("span",{staticClass:"rp"},[e._v("Rp")]),e._v(e._s(e.itemData.price)+"\n          ")])])]),i("div",{staticClass:"share-to"},[e._v("Share To")]),i("div",{staticClass:"share-types"},[i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("23b7"),expression:"require('@/assets/images/facbook.png')"}],on:{click:e.mx_shareFacebook}}),i("p",[e._v("Facebook")])]),i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("fe82"),expression:"require('@/assets/images/line.png')"}],on:{click:e.mx_shareLine}}),i("p",[e._v("LINE")])]),i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("d253"),expression:"require('@/assets/images/whatsapp.png')"}],on:{click:e.mx_shareWhatsapp}}),i("p",[e._v("WhatsApp")])]),i("div",{staticClass:"share-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("c64e"),expression:"require('@/assets/images/messenger.png')"}],on:{click:e.mx_shareMessenger}}),i("p",[e._v("Messenger")])])]),i("button",{ref:"copy",staticClass:"copy-link",attrs:{"data-clipboard-action":"copy","data-clipboard-text":e.shareInfo.share_url},on:{click:e.mx_copyLink}})]),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("6eff"),expression:"require('@/assets/images/guanbi@2x.png')"}],staticClass:"close-img",on:{click:e.closeDialog}})])])},[],!1,null,"74eb2f16",null);t.default=n.exports},a392:function(e,t,a){var i=a("b041");(e.exports=a("2350")(!1)).push([e.i,".dialogSharingMakes-container[data-v-74eb2f16]{width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:100;background:rgba(0,0,0,.6);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;padding-bottom:20vh;box-sizing:border-box}.share-box[data-v-74eb2f16]{width:8.13333rem;height:11.04rem;background:url("+i(a("bb27"))+") no-repeat 0 0/100% 100%;padding-top:2.4rem;box-sizing:border-box;position:relative}.share-box .tit[data-v-74eb2f16]{width:5.84rem;text-align:center;margin:0 auto;font-size:.4rem;font-weight:700;color:#fff;line-height:.50667rem}.share-box .content[data-v-74eb2f16]{width:7.46667rem;height:6.4rem;margin:0 auto}.share-box .content .good-box[data-v-74eb2f16]{width:6.85333rem;height:2.6rem;margin:.32rem auto 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:.16rem;box-sizing:border-box;-webkit-transform:scale(.9);transform:scale(.9)}.share-box .content .good-box .good-img[data-v-74eb2f16]{width:2rem;height:2rem}.share-box .content .good-box .right-box[data-v-74eb2f16]{margin-left:.26667rem;height:2rem;width:4.26667rem}.share-box .content .good-box .right-box .good-tit[data-v-74eb2f16]{width:3.76rem;height:.8rem;font-size:.32rem;font-weight:400;color:#323232;line-height:.42667rem;margin-bottom:.33333rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.share-box .content .good-box .right-box .old-m[data-v-74eb2f16]{font-size:.21333rem;font-weight:400;text-decoration:line-through;color:#888}.share-box .content .good-box .right-box .cur-n[data-v-74eb2f16]{font-size:.48rem;font-weight:600;color:#d30c05}.share-box .content .good-box .right-box .cur-n .rp[data-v-74eb2f16]{font-size:.26667rem;margin-right:.05333rem}.share-box .content .share-to[data-v-74eb2f16]{font-size:.45333rem;font-weight:700;color:#d30c05;text-align:center;margin-bottom:.18667rem}.share-box .content .share-types[data-v-74eb2f16]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:.54667rem;position:relative}.share-box .content .share-types .share-item[data-v-74eb2f16]{width:1.33333rem;margin-right:.26667rem;height:auto;text-align:center;font-size:.26667rem;color:#323232}.share-box .content .share-types .share-item img[data-v-74eb2f16]{width:100%;height:auto}.share-box .copy-link[data-v-74eb2f16]{width:5.72rem;height:1.08rem;bottom:.56rem;background:url("+i(a("5587"))+") no-repeat 0 0/100% 100%}.share-box .close-img[data-v-74eb2f16],.share-box .copy-link[data-v-74eb2f16]{position:absolute;left:0;right:0;margin:0 auto}.share-box .close-img[data-v-74eb2f16]{display:block;width:.93333rem;height:auto;bottom:-1.46667rem}",""])},bb27:function(e,t,a){e.exports=a.p+"img/fenxiangzhuanba.c4e2b96f.png"}}]);