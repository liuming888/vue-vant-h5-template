(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-475d9fc6"],{2049:function(e,t,i){"use strict";var a=i("5d80");i.n(a).a},"5d80":function(e,t,i){var a=i("7eb7");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),(0,i("499e").default)("78e523c3",a,!0,{sourceMap:!1,shadowMode:!1})},"66f0":function(e,t,i){"use strict";i.r(t);var a=i("1da1"),r=(i("33b1"),{props:{curDat:{type:Object,default:()=>({order_no:"",spu_title:"",sku_attr:"",amount:""})}},computed:{exitTime(){let e=this.$util.expiration(this.curDat.expire_time),t=e.h,i=e.p,a=e.m;return t||i||a?`${t}:${i}:${a}`:"00:00:00"}},methods:{goRepaidPay(){var e=this;return Object(a.a)(function*(){e.$router.push({path:"/purchase",query:{orderNo:e.curDat.order_no,bargainId:e.curDat.bargain_id,spuId:e.curDat.spu_id}})})()}}}),o=(i("2049"),i("2877")),l=Object(o.a)(r,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"order-header"},[i("span",[e._v(e._s(e.curDat.create_time))]),i("label",[e._v(e._s(e.$t("myOrder.pendingPayment")))])]),i("div",{staticClass:"info-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.curDat.spu_url,expression:"curDat.spu_url"}],attrs:{alt:""}}),i("div",{staticClass:"info"},[i("div",{staticClass:"info-top"},[i("p",{staticClass:"title"},[e._v(e._s(e.curDat.spu_title))]),i("div",{staticClass:"price"},[e._v("Rp"+e._s(e.curDat.amount))])]),i("p",{staticClass:"info-description"},[e._v("\n        "+e._s(e.curDat.sku_attr)+"\n      ")]),e.curDat.shipment_no?i("p",{staticClass:"address"},[e._v(e._s(e.$t("myOrder.shipmentNumber"))+":"+e._s(e.curDat.shipment_no))]):i("p",{staticClass:"address"},[e._v(e._s(e.$t("myOrder.orderNumber"))+":"+e._s(e.curDat.order_no))])])]),i("div",{staticClass:"ctrl-box"},[i("div",{staticClass:"pay-time"},[e._v("\n      "+e._s(e.$t("myOrder.please"))+"\n      "),i("span",[e._v(e._s(e.exitTime))]),e._v(" "+e._s(e.$t("myOrder.completePayment"))+"\n    ")]),i("div",{staticClass:"btn",on:{click:e.goRepaidPay}},[e._v(e._s(e.$t("myOrder.goBuy")))])])])},[],!1,null,"76d8c182",null);t.default=l.exports},"7eb7":function(e,t,i){(e.exports=i("2350")(!1)).push([e.i,".order-header[data-v-76d8c182]{height:.93333rem;line-height:.53333rem;border-bottom:1px solid #f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex}.order-header span[data-v-76d8c182]{display:inline-block;width:4rem;font-size:.37333rem;color:#323232}.order-header label[data-v-76d8c182]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;color:#d4160f;font-size:.4rem}.info-box[data-v-76d8c182]{padding:.26667rem;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:.26667rem;border-bottom:1px solid #f2f2f2}.info-box>img[data-v-76d8c182]{width:2.66667rem;height:2.66667rem;margin-right:.26667rem}.info-box>.info[data-v-76d8c182]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.info-box>.info>.info-top[data-v-76d8c182]{display:-webkit-box;display:-webkit-flex;display:flex;color:#323232;font-size:.37333rem;font-weight:lighter}.info-box>.info>.info-top>.title[data-v-76d8c182]{-webkit-box-flex:3;-webkit-flex:3;flex:3;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.info-box>.info>.info-top>.price[data-v-76d8c182]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.info-box>.info>.address[data-v-76d8c182],.info-box>.info>.info-description[data-v-76d8c182]{font-size:.32rem;color:#888;margin-top:.13333rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:.53333rem}.ctrl-box[data-v-76d8c182]{text-align:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ctrl-box>.pay-time[data-v-76d8c182]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left}.ctrl-box>.pay-time span[data-v-76d8c182]{color:#d4160f}.ctrl-box>.btn[data-v-76d8c182]{display:inline-block;width:2.53333rem;height:.85333rem;border-radius:.42667rem;color:#d30c05;line-height:.85333rem;font-size:.37333rem;text-align:center;background:-webkit-linear-gradient(120deg,#d30c05,#ff362f);background:linear-gradient(-30deg,#d30c05,#ff362f);font-size:.4rem;font-weight:400;color:#fff}.ctrl-box>.active[data-v-76d8c182]{color:#fff;background-color:#d30c05}",""])}}]);