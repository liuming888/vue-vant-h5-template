(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5d1c3578"],{"22a5":function(e,t,i){"use strict";var a=i("9545");i.n(a).a},"3f9a":function(e,t,i){"use strict";i.r(t),i("5616");var a={name:"aCommodityThatIsBeingBargained",components:{countDown:e=>i.e("chunk-7a713615").then(function(){var t=[i("cd26")];e.apply(null,t)}.bind(this)).catch(i.oe)},props:{spuBargainItem:{type:Object,default:()=>({spu_id:1,title:"",bargain_rate:1,bargain_coin:"",expire_time:"",bargain_id:""})}},data:()=>({expirationDat:{h:"00",p:"00",m:"00"},dialogs:{sharingFriends:{show:!1}},shareInfo:{}}),computed:{timeType(){return 1==this.spuBargainItem.can_buy?"buy":"endIn"}},created(){this.init()},methods:{init(){this.refreshTime()},jumpPurchasePage(){const e=this.spuBargainItem,t=e.spu_id,i=e.bargain_id,a=e.order_no;this.$router.push({path:"/purchase",query:{spuId:t,bargainId:i,orderNo:a}})},refreshTime(){let e=this.$util.expiration(this.spuBargainItem.expire_time);if(!e)return;this.expirationDat=e;const t=setInterval(()=>{this.expirationDat=this.$util.expiration(this.spuBargainItem.expire_time)},1e3);this.$once("hook:beforeDestroy",()=>{clearInterval(t)})},jumpBargain(){this.$router.push({path:"/bargain",query:{spuId:this.spuBargainItem.spu_id,bargainId:this.spuBargainItem.bargain_id}})}}},r=(i("22a5"),i("2877")),n=Object(r.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"freebing-big-box"},[i("div",{staticClass:"t-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.spuBargainItem.spu_pics&&e.spuBargainItem.spu_pics.length>0&&e.spuBargainItem.spu_pics[0],expression:"spuBargainItem.spu_pics&&spuBargainItem.spu_pics.length>0&&spuBargainItem.spu_pics[0]"}],staticClass:"good-img"}),i("div",{staticClass:"c-content"},[i("p",{staticClass:"good-title"},[e._v(e._s(e.spuBargainItem.title))]),e.spuBargainItem.expire_ttl?i("count-down",{attrs:{dateDiff:e.spuBargainItem.order_expire_time||e.spuBargainItem.expire_ttl,timeType:e.timeType,page:"home"}}):e._e(),i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-content",style:{width:e.spuBargainItem.bargain_rate+"%"}}),i("span",[e._v(e._s(e.spuBargainItem.bargain_rate)+"%")])])],1),i("div",{staticClass:"price-box"},[i("div",{staticClass:"price-num"},[e._v("\n        Rp"+e._s(e.spuBargainItem.price)+"\n      ")]),1==e.spuBargainItem.status&&1!=e.spuBargainItem.can_buy?i("div",{staticClass:"original-price"},[e._v("\n        Rp"+e._s(e.spuBargainItem.original_price)+"\n      ")]):i("div",{staticClass:"complete-txt"},[e._v("\n        "+e._s(e.$t("home.complete"))+"\n      ")])])]),i("div",{staticClass:"d-box"},[1==e.spuBargainItem.status?i("div",{staticClass:"lanjutkan-btn",class:{hot:2==e.spuBargainItem.can_buy},on:{click:e.jumpBargain}},[e._v(e._s(e.$t("aCommodityThatIsBeingBargained.goOn")))]):e._e(),1==e.spuBargainItem.can_buy?i("div",{staticClass:"beli-btn hot",on:{click:e.jumpPurchasePage}},[e._v(e._s(e.$t("aCommodityThatIsBeingBargained.buy")))]):e._e()])])},[],!1,null,"54a4d5ec",null);t.default=n.exports},5616:function(e,t,i){"use strict";i.d(t,"c",function(){return r}),i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o});var a=i("007a");function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.get({url:"/api/v1/share/share_spu",data:e})}function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.get({url:"/api/v1/share/share_bargain",data:e})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.get({url:"/api/v1/share/get_share_info",data:e})}},9545:function(e,t,i){var a=i("c399");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),(0,i("499e").default)("1b7f4256",a,!0,{sourceMap:!1,shadowMode:!1})},c399:function(e,t,i){(e.exports=i("2350")(!1)).push([e.i,".freebing-big-box[data-v-54a4d5ec]{width:100%;height:3.49333rem;padding:.37333rem .41333rem .34667rem .32rem;box-sizing:border-box}.freebing-big-box .t-box[data-v-54a4d5ec]{width:100%;height:1.86667rem;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:.22667rem}.freebing-big-box .t-box .good-img[data-v-54a4d5ec]{width:1.86667rem;height:100%;margin-right:.36rem}.freebing-big-box .t-box .c-content[data-v-54a4d5ec]{width:3.81333rem;height:100%}.freebing-big-box .t-box .c-content .good-title[data-v-54a4d5ec]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.freebing-big-box .t-box .c-content .progress[data-v-54a4d5ec]{width:3.81333rem;height:.32rem;line-height:.32rem;background:#ffc2af;border-radius:.16rem;position:relative;font-size:.26667rem;font-family:DIN-Medium;font-weight:500;color:#fff;text-align:center}.freebing-big-box .t-box .c-content .progress .progress-content[data-v-54a4d5ec]{height:.32rem;background:#f57224;border-radius:.16rem;position:absolute;left:0;top:0}.freebing-big-box .t-box .price-box[data-v-54a4d5ec]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;overflow:hidden}.freebing-big-box .t-box .price-box>div[data-v-54a4d5ec]{max-width:2.66667rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.freebing-big-box .t-box .price-box>div.price-num[data-v-54a4d5ec]{font-size:.37333rem;font-family:DIN-Medium;font-weight:500;color:#d30c05;line-height:.4rem;margin-bottom:.09333rem}.freebing-big-box .t-box .price-box>div.original-price[data-v-54a4d5ec]{width:100%;font-size:.32rem;font-family:DIN-Medium;font-weight:500;text-decoration:line-through;color:#888;line-height:.4rem}.freebing-big-box .t-box .price-box>div.complete-txt[data-v-54a4d5ec]{width:100%;font-size:.32rem;font-family:Helvetica;font-weight:400;color:#888;line-height:.4rem;margin-top:.09333rem}.freebing-big-box .d-box[data-v-54a4d5ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.freebing-big-box .d-box .lanjutkan-btn[data-v-54a4d5ec]{width:2rem;height:.66667rem;line-height:.66667rem;text-align:center;border:1px solid #f64e01;border-radius:.33333rem;font-size:.32rem;font-family:Helvetica;font-weight:400;color:#f64e01}.freebing-big-box .d-box .beli-btn[data-v-54a4d5ec]{width:2rem;height:.66667rem;line-height:.66667rem;text-align:center;margin-left:.28rem;border-radius:.33333rem}.freebing-big-box .d-box .hot[data-v-54a4d5ec]{background:#d30c05;border:1px solid #d30c05;color:#fff}",""])}}]);