(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7aaba267"],{"3f9a":function(a,o,e){"use strict";e.r(o),e("5616");var t={name:"aCommodityThatIsBeingBargained",components:{countDown:function(a){return e.e("chunk-63bbd858").then(function(){var o=[e("cd26")];a.apply(null,o)}.bind(this)).catch(e.oe)}},props:{spuBargainItem:{type:Object,default:function(){return{spu_id:1,title:"mock",bargain_rate:1,bargain_coin:"mock",expire_time:"mock",bargain_id:"mock"}}}},data:function(){return{expirationDat:{h:"00",p:"00",m:"00"},dialogs:{sharingFriends:{show:!1}},shareInfo:{}}},created:function(){this.init()},methods:{init:function(){this.refreshTime()},jumpPurchasePage:function(){var a=this.spuBargainItem,o=a.spu_id,e=a.bargain_id,t=a.order_no;this.$router.push({path:"/purchase",query:{spuId:o,bargainId:e,orderNo:t}})},refreshTime:function(){var a=this,o=this.$util.expiration(this.spuBargainItem.expire_time);if(o){this.expirationDat=o;var e=setInterval(function(){a.expirationDat=a.$util.expiration(a.spuBargainItem.expire_time)},1e3);this.$once("hook:beforeDestroy",function(){clearInterval(e)})}},jumpBargain:function(){this.$router.push({path:"/bargain",query:{spuId:this.spuBargainItem.spu_id,bargainId:this.spuBargainItem.bargain_id}})}}},i=(e("4072"),e("17cc")),r=Object(i.a)(t,function(){var a=this,o=a.$createElement,t=a._self._c||o;return t("div",[t("div",{staticClass:"freebing-container"},[t("div",{staticClass:"good-box"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.spuBargainItem.spu_pics[0],expression:"spuBargainItem.spu_pics[0]"}],staticClass:"good-img"}),t("div",{staticClass:"good-detail"},[t("p",{staticClass:"good-title"},[a._v(a._s(a.spuBargainItem.title))]),a.spuBargainItem.expire_ttl?t("count-down",{attrs:{dateDiff:a.spuBargainItem.expire_ttl}}):a._e(),t("div",{staticClass:"left-box"},[t("div",{staticClass:"num-box"},[t("span",{staticClass:"rp-box"},[a._v("Rp"+a._s(a.spuBargainItem.bargain_amount))]),t("span",{staticClass:"compeled"},[a._v("completed")])]),t("div",{staticClass:"progress"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e("ae4a"),expression:"require('@/assets/images/progress-bar.png')"}],attrs:{width:a.spuBargainItem.bargain_rate+"%"}}),t("div",{staticClass:"progress-content"},[t("span",[a._v("has been cut "+a._s(a.spuBargainItem.bargain_amount))]),t("span",[a._v(a._s(a.spuBargainItem.bargain_rate)+"%")])])])]),t("div",{staticClass:"goods-control"},[1==a.spuBargainItem.status?t("a",{staticClass:"go-on-btn",class:{"r-b":2==a.spuBargainItem.can_buy},attrs:{href:"javascrip:;"},on:{click:a.jumpBargain}},[a._v("\n            Go On\n          ")]):a._e(),1==a.spuBargainItem.can_buy?t("a",{staticClass:"buy-btn r-b",attrs:{href:"javascrip:;"},on:{click:a.jumpPurchasePage}},[a._v("Buy")]):a._e()])],1)])])])},[],!1,null,"4fc622ab",null);o.default=r.exports},4072:function(a,o,e){"use strict";var t=e("9ba5");e.n(t).a},5616:function(a,o,e){"use strict";e.d(o,"c",function(){return i}),e.d(o,"a",function(){return r}),e.d(o,"b",function(){return n});var t=e("007a");function i(a){var o=a.spu_id;return t.a.get({url:"/api/v1/share/share_spu",data:{spu_id:o}})}function r(a){var o=a.bargain_id;return t.a.get({url:"/api/v1/share/share_bargain",data:{bargain_id:o}})}function n(a){var o=a.relation_id;return t.a.get({url:"/api/v1/share/get_share_info",data:{relation_id:o}})}},"9ba5":function(a,o,e){var t=e("c003");"string"==typeof t&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals),(0,e("85cb").default)("374c1fa2",t,!0,{sourceMap:!1,shadowMode:!1})},ae4a:function(a,o){a.exports="data:image/png;base64,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"},c003:function(a,o,e){(a.exports=e("690e")(!1)).push([a.i,".freebing-container[data-v-4fc622ab]{padding:.32rem}.freebing-container>.good-box[data-v-4fc622ab]{position:relative;margin-top:.58667rem;display:-webkit-box;display:-webkit-flex;display:flex}.freebing-container>.good-box>.good-img[data-v-4fc622ab]{width:2.69333rem;height:2.69333rem;margin-right:.4rem}.freebing-container>.good-box>.good-detail[data-v-4fc622ab]{overflow:hidden}.freebing-container>.good-box>.good-detail>.good-title[data-v-4fc622ab]{font-size:.4rem;color:#323232;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.freebing-container>.good-box>.good-detail .left-box[data-v-4fc622ab]{width:3.13333rem}.freebing-container>.good-box>.good-detail .left-box .num-box[data-v-4fc622ab]{max-width:100%}.freebing-container>.good-box>.good-detail .left-box .num-box .rp-box[data-v-4fc622ab]{font-size:.32rem;font-weight:700;color:#d40d05;line-height:.44rem;margin-right:.21333rem}.freebing-container>.good-box>.good-detail .left-box .num-box .compeled[data-v-4fc622ab]{font-size:.32rem;font-weight:400;color:#888;line-height:.44rem}.freebing-container>.good-box>.good-detail .left-box .progress[data-v-4fc622ab]{margin:.25333rem 0;position:relative;width:100%;height:.37333rem;border-radius:.18667rem;background-color:#fececa;padding:0 .21333rem;line-height:.37333rem;color:#fff;font-size:.26667rem;overflow:hidden}.freebing-container>.good-box>.good-detail .left-box .progress>img[data-v-4fc622ab]{position:absolute;top:0;left:0;height:100%}.freebing-container>.good-box>.good-detail .left-box .progress>.progress-content[data-v-4fc622ab]{position:relative}.freebing-container>.good-box>.good-detail .left-box .progress>.progress-content>span[data-v-4fc622ab]:last-child{float:right;color:#d30c05}.freebing-container>.good-box>.good-detail>.count-down[data-v-4fc622ab]{font-size:.34667rem;color:#585858;line-height:.44rem}.freebing-container>.good-box>.good-detail>.count-down>.time[data-v-4fc622ab]{display:inline-block;background-color:#585858;color:#fff;border-radius:.10667rem;padding:0 .08rem}.freebing-container>.good-box>.good-detail>.count-down>.dec[data-v-4fc622ab]{padding-left:.16rem}.freebing-container>.good-box>.good-detail>.goods-control[data-v-4fc622ab]{width:1.6rem;position:absolute;right:0;bottom:.08rem}.freebing-container>.good-box>.good-detail>.goods-control>a[data-v-4fc622ab]{display:block;width:100%;height:.74667rem;line-height:.74667rem;text-align:center;box-sizing:border-box}.freebing-container>.good-box>.good-detail>.goods-control .go-on-btn[data-v-4fc622ab]{background:#fff;border:1px solid #d30c05;border-radius:.37333rem;font-size:.34667rem;font-weight:700;color:#d30c05;margin-bottom:.26667rem}.freebing-container>.good-box>.good-detail>.goods-control .r-b[data-v-4fc622ab]{background:-webkit-linear-gradient(135deg,#d30c05,#f64e01);background:linear-gradient(-45deg,#d30c05,#f64e01);border-radius:.37333rem;font-size:.34667rem;font-weight:700;color:#fff}",""])}}]);