(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0f9f5313"],{"3f9a":function(e,a,o){"use strict";o.r(a),o("5616");var i={name:"aCommodityThatIsBeingBargained",components:{countDown:e=>o.e("chunk-c6ead40a").then(function(){var a=[o("cd26")];e.apply(null,a)}.bind(this)).catch(o.oe)},props:{spuBargainItem:{type:Object,default:()=>({spu_id:1,title:"mock",bargain_rate:1,bargain_coin:"mock",expire_time:"mock",bargain_id:"mock"})}},data:()=>({expirationDat:{h:"00",p:"00",m:"00"},dialogs:{sharingFriends:{show:!1}},shareInfo:{}}),created(){this.init()},methods:{init(){this.refreshTime()},jumpPurchasePage(){const e=this.spuBargainItem,a=e.spu_id,o=e.bargain_id,i=e.order_no;this.$router.push({path:"/purchase",query:{spuId:a,bargainId:o,orderNo:i}})},refreshTime(){let e=this.$util.expiration(this.spuBargainItem.expire_time);if(!e)return;this.expirationDat=e;const a=setInterval(()=>{this.expirationDat=this.$util.expiration(this.spuBargainItem.expire_time)},1e3);this.$once("hook:beforeDestroy",()=>{clearInterval(a)})},jumpBargain(){this.$router.push({path:"/bargain",query:{spuId:this.spuBargainItem.spu_id,bargainId:this.spuBargainItem.bargain_id}})}}},t=(o("8683"),o("17cc")),r=Object(t.a)(i,function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",[i("div",{staticClass:"freebing-container"},[i("div",{staticClass:"good-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.spuBargainItem.spu_pics&&e.spuBargainItem.spu_pics.length>0&&e.spuBargainItem.spu_pics[0],expression:"spuBargainItem.spu_pics&&spuBargainItem.spu_pics.length>0&&spuBargainItem.spu_pics[0]"}],staticClass:"good-img"}),i("div",{staticClass:"good-detail"},[i("p",{staticClass:"good-title"},[e._v(e._s(e.spuBargainItem.title))]),e.spuBargainItem.expire_ttl?i("count-down",{attrs:{dateDiff:e.spuBargainItem.expire_ttl}}):e._e(),i("div",{staticClass:"left-box"},[i("div",{staticClass:"num-box"},[i("span",{staticClass:"rp-box"},[e._v("Rp"+e._s(e.spuBargainItem.bargain_amount))]),i("span",{staticClass:"compeled"},[e._v("completed")])]),i("div",{staticClass:"progress"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:o("ae4a"),expression:"require('@/assets/images/progress-bar.png')"}],attrs:{width:e.spuBargainItem.bargain_rate+"%"}}),i("div",{staticClass:"progress-content"},[i("span",[e._v("has been cut "+e._s(e.spuBargainItem.bargain_amount))]),i("span",[e._v(e._s(e.spuBargainItem.bargain_rate)+"%")])])])]),i("div",{staticClass:"goods-control"},[1==e.spuBargainItem.status?i("a",{staticClass:"go-on-btn",class:{"r-b":2==e.spuBargainItem.can_buy},attrs:{href:"javascrip:;"},on:{click:e.jumpBargain}},[e._v("\n            Go On\n          ")]):e._e(),1==e.spuBargainItem.can_buy?i("a",{staticClass:"buy-btn r-b",attrs:{href:"javascrip:;"},on:{click:e.jumpPurchasePage}},[e._v("Buy")]):e._e()])],1)])])])},[],!1,null,"30fe9f9d",null);a.default=r.exports},5616:function(e,a,o){"use strict";o.d(a,"c",function(){return t}),o.d(a,"a",function(){return r}),o.d(a,"b",function(){return n});var i=o("007a");function t(e){let a=e.spu_id;return i.a.get({url:"/api/v1/share/share_spu",data:{spu_id:a}})}function r(e){let a=e.bargain_id;return i.a.get({url:"/api/v1/share/share_bargain",data:{bargain_id:a}})}function n(e){let a=e.relation_id;return i.a.get({url:"/api/v1/share/get_share_info",data:{relation_id:a}})}},"56f9":function(e,a,o){var i=o("5e8e");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,o("85cb").default)("6ddc311d",i,!0,{sourceMap:!1,shadowMode:!1})},"5e8e":function(e,a,o){(e.exports=o("690e")(!1)).push([e.i,".freebing-container[data-v-30fe9f9d]{padding:.32rem}.freebing-container>.good-box[data-v-30fe9f9d]{position:relative;margin-top:.58667rem;display:-webkit-box;display:-webkit-flex;display:flex}.freebing-container>.good-box>.good-img[data-v-30fe9f9d]{width:2.69333rem;height:2.69333rem;margin-right:.4rem}.freebing-container>.good-box>.good-detail[data-v-30fe9f9d]{overflow:hidden}.freebing-container>.good-box>.good-detail>.good-title[data-v-30fe9f9d]{font-size:.4rem;color:#323232;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.freebing-container>.good-box>.good-detail .left-box[data-v-30fe9f9d]{width:3.13333rem}.freebing-container>.good-box>.good-detail .left-box .num-box[data-v-30fe9f9d]{max-width:100%}.freebing-container>.good-box>.good-detail .left-box .num-box .rp-box[data-v-30fe9f9d]{font-size:.32rem;font-weight:700;color:#d40d05;line-height:.44rem;margin-right:.21333rem}.freebing-container>.good-box>.good-detail .left-box .num-box .compeled[data-v-30fe9f9d]{font-size:.32rem;font-weight:400;color:#888;line-height:.44rem}.freebing-container>.good-box>.good-detail .left-box .progress[data-v-30fe9f9d]{margin:.25333rem 0;position:relative;width:100%;height:.37333rem;border-radius:.18667rem;background-color:#fececa;padding:0 .21333rem;line-height:.37333rem;color:#fff;font-size:.26667rem;overflow:hidden}.freebing-container>.good-box>.good-detail .left-box .progress>img[data-v-30fe9f9d]{position:absolute;top:0;left:0;height:100%}.freebing-container>.good-box>.good-detail .left-box .progress>.progress-content[data-v-30fe9f9d]{position:relative}.freebing-container>.good-box>.good-detail .left-box .progress>.progress-content>span[data-v-30fe9f9d]:last-child{float:right;color:#d30c05}.freebing-container>.good-box>.good-detail>.count-down[data-v-30fe9f9d]{font-size:.34667rem;color:#585858;line-height:.44rem}.freebing-container>.good-box>.good-detail>.count-down>.time[data-v-30fe9f9d]{display:inline-block;background-color:#585858;color:#fff;border-radius:.10667rem;padding:0 .08rem}.freebing-container>.good-box>.good-detail>.count-down>.dec[data-v-30fe9f9d]{padding-left:.16rem}.freebing-container>.good-box>.good-detail>.goods-control[data-v-30fe9f9d]{width:1.6rem;position:absolute;right:0;bottom:.08rem}.freebing-container>.good-box>.good-detail>.goods-control>a[data-v-30fe9f9d]{display:block;width:100%;height:.74667rem;line-height:.74667rem;text-align:center;box-sizing:border-box}.freebing-container>.good-box>.good-detail>.goods-control .go-on-btn[data-v-30fe9f9d]{background:#fff;border:1px solid #d30c05;border-radius:.37333rem;font-size:.34667rem;font-weight:700;color:#d30c05;margin-bottom:.26667rem}.freebing-container>.good-box>.good-detail>.goods-control .r-b[data-v-30fe9f9d]{background:-webkit-linear-gradient(135deg,#d30c05,#f64e01);background:linear-gradient(-45deg,#d30c05,#f64e01);border-radius:.37333rem;font-size:.34667rem;font-weight:700;color:#fff}",""])},8683:function(e,a,o){"use strict";var i=o("56f9");o.n(i).a},ae4a:function(e,a){e.exports="data:image/png;base64,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"}}]);