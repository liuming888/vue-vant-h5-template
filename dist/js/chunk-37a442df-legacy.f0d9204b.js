(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-37a442df"],{"12e6":function(t,e,i){var a=i("e862");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,i("499e").default)("40b32677",a,!0,{sourceMap:!1,shadowMode:!1})},"5f2b":function(t,e,i){"use strict";var a=i("12e6");i.n(a).a},"66f0":function(t,e,i){"use strict";i.r(e),i("96cf");var a=i("3b8d"),r=(i("33b1"),{mixins:[i("6d77").a],props:{curDat:{type:Object,default:function(){return{order_no:"",spu_title:"",sku_attr:"",amount:""}}}},computed:{exitTime:function(){var t=this.$util.expiration(this.curDat.expire_time),e=t.h,i=t.p,a=t.m;return e||i||a?"".concat(e,":").concat(i,":").concat(a):"00:00:00"}},methods:{goRepaidPay:function(){var t=Object(a.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$router.push({path:"/purchase",query:{orderNo:this.curDat.order_no,bargainId:this.curDat.bargain_id,spuId:this.curDat.spu_id}});case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}),o=(i("5f2b"),i("2877")),n=Object(o.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"order-header"},[i("span",[t._v(t._s(t.curDat.create_time))]),i("label",[t._v(t._s(t.$t("myOrder.pendingPayment")))])]),i("div",{staticClass:"info-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.curDat.spu_url,expression:"curDat.spu_url"}],attrs:{alt:""}}),i("div",{staticClass:"info"},[i("div",{staticClass:"info-top"},[i("p",{staticClass:"title"},[t._v(t._s(t.curDat.spu_title))]),i("div",{staticClass:"price"},[t._v("Rp"+t._s(t.curDat.amount))])]),i("p",{staticClass:"info-description"},[t._v("\n        "+t._s(t.curDat.sku_attr)+"\n      ")]),t.curDat.order_no?i("button",{ref:"copy1",staticClass:"address",attrs:{"data-clipboard-action":"copy","data-clipboard-text":t.curDat.order_no},on:{click:t.mx_copyLink1}},[t._v(t._s(t.$t("myOrder.orderNumber"))+":"+t._s(t.curDat.order_no))]):t._e(),t.curDat.shipment_no?i("button",{ref:"copy2",staticClass:"address",attrs:{"data-clipboard-action":"copy","data-clipboard-text":t.curDat.shipment_no},on:{click:t.mx_copyLink2}},[t._v(t._s(t.$t("myOrder.shipmentNumber"))+": "),i("span",{staticClass:"c-num"},[t._v(t._s(t.curDat.shipment_no))])]):t._e()])]),i("div",{staticClass:"ctrl-box"},[i("div",{staticClass:"pay-time"},[t._v("\n      "+t._s(t.$t("myOrder.please"))+"\n      "),i("span",[t._v(t._s(t.exitTime))]),t._v(" "+t._s(t.$t("myOrder.completePayment"))+"\n    ")]),i("div",{staticClass:"btn",on:{click:t.goRepaidPay}},[t._v(t._s(t.$t("myOrder.goBuy")))])])])},[],!1,null,"71a11d2d",null);e.default=n.exports},e862:function(t,e,i){(t.exports=i("2350")(!1)).push([t.i,".order-header[data-v-71a11d2d]{height:.93333rem;line-height:.53333rem;border-bottom:1px solid #f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex}.order-header span[data-v-71a11d2d]{display:inline-block;width:4rem;font-size:.37333rem;color:#323232}.order-header label[data-v-71a11d2d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;color:#d4160f;font-size:.4rem}.info-box[data-v-71a11d2d]{padding:.26667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:.26667rem;border-bottom:1px solid #f2f2f2}.info-box>img[data-v-71a11d2d]{width:2.66667rem;height:2.66667rem;margin-right:.26667rem}.info-box>.info[data-v-71a11d2d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.info-box>.info>.info-top[data-v-71a11d2d]{display:-webkit-box;display:-webkit-flex;display:flex;color:#323232;font-size:.37333rem;font-weight:lighter}.info-box>.info>.info-top>.title[data-v-71a11d2d]{-webkit-box-flex:3;-webkit-flex:3;flex:3;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.info-box>.info>.info-top>.price[data-v-71a11d2d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.info-box>.info>.address[data-v-71a11d2d],.info-box>.info>.info-description[data-v-71a11d2d]{display:block;background:none;text-align:left;font-size:.32rem;line-height:.4rem;color:#888;margin-top:.13333rem;margin-bottom:.26667rem;word-break:break-all}.ctrl-box[data-v-71a11d2d]{text-align:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ctrl-box>.pay-time[data-v-71a11d2d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left}.ctrl-box>.pay-time span[data-v-71a11d2d]{color:#d4160f}.ctrl-box>.btn[data-v-71a11d2d]{display:inline-block;width:2.53333rem;height:.85333rem;border-radius:.42667rem;color:#d30c05;line-height:.85333rem;font-size:.37333rem;text-align:center;background:-webkit-linear-gradient(120deg,#d30c05,#ff362f);background:linear-gradient(-30deg,#d30c05,#ff362f);font-size:.4rem;font-weight:400;color:#fff}.ctrl-box>.active[data-v-71a11d2d]{color:#fff;background-color:#d30c05}",""])}}]);