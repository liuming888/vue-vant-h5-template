(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0a67259e"],{"3f9a":function(e,i,o){"use strict";o.r(i),o("5616");var t={name:"aCommodityThatIsBeingBargained",components:{countDown:function(e){return o.e("chunk-c5807252").then(function(){var i=[o("cd26")];e.apply(null,i)}.bind(this)).catch(o.oe)}},props:{spuBargainItem:{type:Object,default:function(){return{spu_id:1,title:"mock",bargain_rate:1,bargain_coin:"mock",expire_time:"mock",bargain_id:"mock"}}}},data:function(){return{expirationDat:{h:"00",p:"00",m:"00"},dialogs:{sharingFriends:{show:!1}},shareInfo:{}}},created:function(){this.init()},methods:{init:function(){this.refreshTime()},jumpPurchasePage:function(){var e=this.spuBargainItem,i=e.spu_id,o=e.bargain_id,t=e.order_no;this.$router.push({path:"/purchase",query:{spuId:i,bargainId:o,orderNo:t}})},refreshTime:function(){var e=this,i=this.$util.expiration(this.spuBargainItem.expire_time);if(i){this.expirationDat=i;var o=setInterval(function(){e.expirationDat=e.$util.expiration(e.spuBargainItem.expire_time)},1e3);this.$once("hook:beforeDestroy",function(){clearInterval(o)})}},jumpBargain:function(){this.$router.push({path:"/bargain",query:{spuId:this.spuBargainItem.spu_id,bargainId:this.spuBargainItem.bargain_id}})}}},a=(o("7b47"),o("17cc")),n=Object(a.a)(t,function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"freebing-big-box"},[t("div",{staticClass:"freebing-container"},[t("div",{staticClass:"good-box"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.spuBargainItem.spu_pics&&e.spuBargainItem.spu_pics.length>0&&e.spuBargainItem.spu_pics[0],expression:"spuBargainItem.spu_pics&&spuBargainItem.spu_pics.length>0&&spuBargainItem.spu_pics[0]"}],staticClass:"good-img"}),t("div",{staticClass:"good-detail"},[t("p",{staticClass:"good-title"},[e._v(e._s(e.spuBargainItem.title))]),e.spuBargainItem.expire_ttl?t("count-down",{attrs:{dateDiff:e.spuBargainItem.expire_ttl}}):e._e(),t("div",{staticClass:"left-box"},[t("div",{staticClass:"num-box"},[t("span",{staticClass:"rp-box"},[e._v("Rp"+e._s(e.spuBargainItem.bargain_amount||0))]),t("span",{staticClass:"compeled"},[e._v("completed")])]),t("div",{staticClass:"progress"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:o("ae4a"),expression:"require('@/assets/images/progress-bar.png')"}],attrs:{width:e.spuBargainItem.bargain_rate+"%"}}),t("div",{staticClass:"progress-content"},[t("span",[e._v(e._s(e.spuBargainItem.bargain_rate)+"%")])])])]),t("div",{staticClass:"goods-control"},[1==e.spuBargainItem.status?t("span",{staticClass:"go-on-btn",class:{"r-b":2==e.spuBargainItem.can_buy},on:{click:e.jumpBargain}},[e._v("\n            Go On\n          ")]):e._e(),1==e.spuBargainItem.can_buy?t("span",{staticClass:"buy-btn r-b",on:{click:e.jumpPurchasePage}},[e._v("Buy")]):e._e()])],1)])])])},[],!1,null,"71119fb6",null);i.default=n.exports},"504a":function(e,i,o){var t=o("d03b");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals),(0,o("85cb").default)("f6846ef8",t,!0,{sourceMap:!1,shadowMode:!1})},5616:function(e,i,o){"use strict";o.d(i,"c",function(){return a}),o.d(i,"a",function(){return n}),o.d(i,"b",function(){return r});var t=o("007a");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.a.get({url:"/api/v1/share/share_spu",data:e})}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.a.get({url:"/api/v1/share/share_bargain",data:e})}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.a.get({url:"/api/v1/share/get_share_info",data:e})}},"7b47":function(e,i,o){"use strict";var t=o("504a");o.n(t).a},ae4a:function(e,i){e.exports="data:image/png;base64,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"},d03b:function(e,i,o){(e.exports=o("690e")(!1)).push([e.i,".freebing-container[data-v-71119fb6]{padding:.32rem}.freebing-container>.good-box[data-v-71119fb6]{position:relative;margin-top:.58667rem;display:-webkit-box;display:-webkit-flex;display:flex}.freebing-container>.good-box>.good-img[data-v-71119fb6]{width:2.69333rem;height:2.69333rem;margin-right:.4rem}.freebing-container>.good-box>.good-detail[data-v-71119fb6]{overflow:hidden}.freebing-container>.good-box>.good-detail>.good-title[data-v-71119fb6]{font-size:.4rem;color:#323232;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.freebing-container>.good-box>.good-detail .left-box[data-v-71119fb6]{width:3.13333rem}.freebing-container>.good-box>.good-detail .left-box .num-box[data-v-71119fb6]{max-width:100%}.freebing-container>.good-box>.good-detail .left-box .num-box .rp-box[data-v-71119fb6]{font-size:.32rem;font-weight:700;color:#d40d05;line-height:.44rem;margin-right:.21333rem}.freebing-container>.good-box>.good-detail .left-box .num-box .compeled[data-v-71119fb6]{font-size:.32rem;font-weight:400;color:#888;line-height:.44rem}.freebing-container>.good-box>.good-detail .left-box .progress[data-v-71119fb6]{margin:.25333rem 0;position:relative;width:100%;height:.37333rem;border-radius:.18667rem;background-color:#fececa;padding:0 .21333rem;line-height:.37333rem;color:#fff;font-size:.32rem;overflow:hidden}.freebing-container>.good-box>.good-detail .left-box .progress>img[data-v-71119fb6]{position:absolute;top:0;left:0;height:100%}.freebing-container>.good-box>.good-detail .left-box .progress>.progress-content[data-v-71119fb6]{position:relative;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.freebing-container>.good-box>.good-detail .left-box .progress>.progress-content>span[data-v-71119fb6]:last-child{float:right;color:#fff}.freebing-container>.good-box>.good-detail>.count-down[data-v-71119fb6]{font-size:.34667rem;color:#585858;line-height:.44rem}.freebing-container>.good-box>.good-detail>.count-down>.time[data-v-71119fb6]{display:inline-block;background-color:#585858;color:#fff;border-radius:.10667rem;padding:0 .08rem}.freebing-container>.good-box>.good-detail>.goods-control[data-v-71119fb6]{width:1.6rem;position:absolute;right:0;bottom:.08rem}.freebing-container>.good-box>.good-detail>.goods-control>span[data-v-71119fb6]{display:block;width:100%;height:.74667rem;line-height:.74667rem;text-align:center;box-sizing:border-box}.freebing-container>.good-box>.good-detail>.goods-control .go-on-btn[data-v-71119fb6]{background:#fff;border:1px solid #d30c05;border-radius:.37333rem;font-size:.34667rem;font-weight:700;color:#d30c05;margin-bottom:.26667rem}.freebing-container>.good-box>.good-detail>.goods-control .r-b[data-v-71119fb6]{background:-webkit-linear-gradient(135deg,#d30c05,#f64e01);background:linear-gradient(-45deg,#d30c05,#f64e01);border-radius:.37333rem;font-size:.34667rem;font-weight:700;color:#fff;border:0}",""])}}]);