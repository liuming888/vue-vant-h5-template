(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-aff09772"],{"5a3a":function(e,t,i){"use strict";var a=i("eb9c");i.n(a).a},d7ef:function(e,t,i){(e.exports=i("2350")(!1)).push([e.i,".order-header[data-v-5e29e81d]{height:.93333rem;line-height:.53333rem;border-bottom:1px solid #f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex}.order-header span[data-v-5e29e81d]{display:inline-block;width:4rem;font-size:.37333rem;color:#323232}.order-header label[data-v-5e29e81d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;color:#d4160f;font-size:.4rem;color:#35b20f}.info-box[data-v-5e29e81d]{padding:.26667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:.26667rem;border-bottom:1px solid #f2f2f2}.info-box>img[data-v-5e29e81d]{width:2.66667rem;height:2.66667rem;margin-right:.26667rem}.info-box>.info[data-v-5e29e81d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.info-box>.info>.info-top[data-v-5e29e81d]{display:-webkit-box;display:-webkit-flex;display:flex;color:#323232;font-size:.37333rem;font-weight:lighter}.info-box>.info>.info-top>.title[data-v-5e29e81d]{-webkit-box-flex:3;-webkit-flex:3;flex:3;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.info-box>.info>.info-top>.price[data-v-5e29e81d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.info-box>.info>.address[data-v-5e29e81d],.info-box>.info>.info-description[data-v-5e29e81d]{display:block;background:none;text-align:left;font-size:.32rem;line-height:.4rem;color:#888;margin-top:.13333rem;margin-bottom:.26667rem;word-break:break-all}.ctrl-box[data-v-5e29e81d]{text-align:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ctrl-box>.pay-time[data-v-5e29e81d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left}.ctrl-box>.pay-time span[data-v-5e29e81d]{color:#d4160f}.ctrl-box>.btn[data-v-5e29e81d]{display:inline-block;width:4rem;height:.85333rem;line-height:.85333rem;font-size:.37333rem;text-align:center;font-size:.4rem;font-weight:400;color:#d30c05;border:1px solid #d30c05;border-radius:.42667rem}.ctrl-box>.active[data-v-5e29e81d]{color:#fff;background-color:#d30c05}",""])},eb9c:function(e,t,i){var a=i("d7ef");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),(0,i("499e").default)("408e2d15",a,!0,{sourceMap:!1,shadowMode:!1})},f191:function(e,t,i){"use strict";i.r(t),i("33b1");var a={mixins:[i("6d77").a],props:{curDat:{type:Object,default:()=>({order_no:"",spu_title:"",sku_attr:"",amount:""})}},methods:{handleCustomerService(){this.$emit("on-customer-service")}}},o=(i("5a3a"),i("2877")),r=Object(o.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"order-header"},[i("span",[e._v(e._s(e.curDat.create_time))]),i("label",[e._v(e._s(e.$t("myOrder.completedTit")))])]),i("div",{staticClass:"info-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.curDat.spu_url,expression:"curDat.spu_url"}],attrs:{alt:""}}),i("div",{staticClass:"info"},[i("div",{staticClass:"info-top"},[i("p",{staticClass:"title"},[e._v(e._s(e.curDat.spu_title))]),i("div",{staticClass:"price"},[e._v("Rp"+e._s(e.curDat.amount))])]),i("p",{staticClass:"info-description"},[e._v("\n        "+e._s(e.curDat.sku_attr)+"\n      ")]),e.curDat.order_no?i("button",{ref:"copy1",staticClass:"address",attrs:{"data-clipboard-action":"copy","data-clipboard-text":e.curDat.order_no},on:{click:e.mx_copyLink1}},[e._v(e._s(e.$t("myOrder.orderNumber"))+": "+e._s(e.curDat.order_no))]):e._e(),e.curDat.shipment_no?i("button",{ref:"copy2",staticClass:"address",attrs:{"data-clipboard-action":"copy","data-clipboard-text":e.curDat.shipment_no},on:{click:e.mx_copyLink2}},[e._v(e._s(e.$t("myOrder.shipmentNumber"))+": "),i("span",{staticClass:"c-num"},[e._v(e._s(e.curDat.shipment_no))])]):e._e()])]),i("div",{staticClass:"ctrl-box"},[i("div",{staticClass:"pay-time"}),i("div",{staticClass:"btn",on:{click:e.handleCustomerService}},[e._v(e._s(e.$t("myOrder.customerService")))])])])},[],!1,null,"5e29e81d",null);t.default=r.exports}}]);