(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-afdb48da"],{"0197":function(t,e,i){var a=i("7ff6b");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,i("499e").default)("eab87bf6",a,!0,{sourceMap:!1,shadowMode:!1})},"33b1":function(t,e,i){"use strict";i.d(e,"c",function(){return r}),i.d(e,"d",function(){return o}),i.d(e,"e",function(){return l}),i.d(e,"b",function(){return s}),i.d(e,"a",function(){return n});var a=i("007a");function r(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/order/create_order",data:t})}function o(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/order/get_order_list",data:t})}function l(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/order/repaid_order",data:t})}function s(){return a.a.post({url:"/api/v1/pay/get_pay_type"})}function n(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/order/get_order_by_bargainId",data:t})}},"66f0":function(t,e,i){"use strict";var a=i("1da1"),r=(i("33b1"),{props:{curDat:{type:Object,default:()=>({order_no:"",spu_title:"",sku_attr:"",amount:""})}},computed:{exitTime(){let t=this.$util.expiration(this.curDat.expire_time),e=t.h,i=t.p,a=t.m;return e||i||a?`${e}:${i}:${a}`:"00:00:00"}},methods:{goRepaidPay(){var t=this;return Object(a.a)(function*(){t.$router.push({path:"/purchase",query:{orderNo:t.curDat.order_no,bargainId:t.curDat.bargain_id,spuId:t.curDat.spu_id}})})()}}}),o=(i("fc6b"),i("2877")),l=Object(o.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"order-header"},[i("span",[t._v(t._s(t.curDat.create_time))]),i("label",[t._v("Pending payment")])]),i("div",{staticClass:"info-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.curDat.spu_url,expression:"curDat.spu_url"}],attrs:{alt:""}}),i("div",{staticClass:"info"},[i("div",{staticClass:"info-top"},[i("p",{staticClass:"title"},[t._v(t._s(t.curDat.spu_title))]),i("div",{staticClass:"price"},[t._v("Rp"+t._s(t.curDat.amount))])]),i("p",{staticClass:"info-description"},[t._v("\n        "+t._s(t.curDat.sku_attr)+"\n      ")]),i("p",{staticClass:"address"},[t._v("Order Number:"+t._s(t.curDat.order_no))])])]),i("div",{staticClass:"ctrl-box"},[i("div",{staticClass:"pay-time"},[t._v("\n      Please\n      "),i("span",[t._v(t._s(t.exitTime))]),t._v(" complete payment\n    ")]),i("div",{staticClass:"btn",on:{click:t.goRepaidPay}},[t._v("Go buy")])])])},[],!1,null,"f8642f92",null);e.a=l.exports},"7ff6b":function(t,e,i){(t.exports=i("2350")(!1)).push([t.i,".order-header[data-v-f8642f92]{height:.93333rem;line-height:.53333rem;border-bottom:1px solid #f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex}.order-header span[data-v-f8642f92]{display:inline-block;width:4rem;font-size:.37333rem;color:#323232}.order-header label[data-v-f8642f92]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;color:#d4160f;font-size:.4rem}.info-box[data-v-f8642f92]{padding:.26667rem;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:.26667rem;border-bottom:1px solid #f2f2f2}.info-box>img[data-v-f8642f92]{width:2.66667rem;height:2.66667rem;margin-right:.26667rem}.info-box>.info[data-v-f8642f92]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.info-box>.info>.info-top[data-v-f8642f92]{display:-webkit-box;display:-webkit-flex;display:flex;color:#323232;font-size:.37333rem;font-weight:lighter}.info-box>.info>.info-top>.title[data-v-f8642f92]{-webkit-box-flex:3;-webkit-flex:3;flex:3;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.info-box>.info>.info-top>.price[data-v-f8642f92]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.info-box>.info>.address[data-v-f8642f92],.info-box>.info>.info-description[data-v-f8642f92]{font-size:.32rem;color:#888;margin-top:.13333rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:.53333rem}.ctrl-box[data-v-f8642f92]{text-align:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ctrl-box>.pay-time[data-v-f8642f92]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left}.ctrl-box>.pay-time span[data-v-f8642f92]{color:#d4160f}.ctrl-box>.btn[data-v-f8642f92]{display:inline-block;width:2.53333rem;height:.85333rem;border-radius:.42667rem;color:#d30c05;line-height:.85333rem;font-size:.37333rem;text-align:center;background:-webkit-linear-gradient(120deg,#d30c05,#ff362f);background:linear-gradient(-30deg,#d30c05,#ff362f);font-size:.4rem;font-weight:400;color:#fff}.ctrl-box>.active[data-v-f8642f92]{color:#fff;background-color:#d30c05}",""])},a1a5:function(t,e,i){"use strict";i.r(e);var a=i("be94"),r=i("1da1"),o=i("66f0"),l=i("f191"),s=i("33b1"),n={components:{pendingPaymentOrderItem:o.a,orderCompletedItem:l.a},data:()=>({orderList:[{order_no:"",spu_title:"",sku_attr:"",amount:"",create_time:"",expire_time:1,order_status:""}],orderPageDat:{page_num:1,page_size:10},contactVisible:!1}),created(){this.init()},methods:{init(){var t=this;return Object(r.a)(function*(){let e=yield Object(s.d)(Object(a.a)({},t.orderPageDat,{type:0}));e&&e.data&&(t.orderList=e.data)})()},handleCustomerService(){this.contactVisible=!0}}},d=i("2877"),f=Object(d.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.orderList.length>0?a("ul",{staticClass:"all-order"},[t._l(t.orderList,function(e){return[1==e.order_status?a("li",{key:e.order_no+"1",staticClass:"all-order-item"},[a("pending-payment-order-item",{key:e.order_no,attrs:{curDat:e}})],1):t._e(),2==e.order_status||3==e.order_status?a("li",{key:e.order_no+"2",staticClass:"all-order-item"},[a("order-completed-item",{key:e.order_no,attrs:{curDat:e},on:{"on-customer-service":t.handleCustomerService}})],1):t._e()]})],2):t._e(),t.orderList.length<1?a("div",{staticClass:"without-order"},[a("img",{staticClass:"none-file-icon",attrs:{src:i("c7b0"),alt:""}}),a("p",[t._v("Tidak ada pesanan terkait")]),a("div",{staticClass:"btn"},[t._v("Buka halaman beranda dan lihat")])]):t._e(),t.contactVisible?a("div",{staticClass:"alertBox"},[a("div",{staticClass:"alertWrap"},[a("h1",[t._v("Contact us by")]),t._m(0),a("div",{on:{click:function(e){t.contactVisible=!1}}},[t._v("I know")])])]):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",{staticClass:"alertWrap-item"},[this._v("facebook fanpage : @Lovingistarbuy")]),e("li",{staticClass:"alertWrap-item"},[this._v("Wechat : ISTARBUY")]),e("li",{staticClass:"alertWrap-item"},[this._v("Line : ISTARBUY")])])}],!1,null,null,null);e.default=f.exports},c382:function(t,e,i){"use strict";var a=i("d396");i.n(a).a},c7b0:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAACMCAMAAACXmw0mAAAApVBMVEUAAADZ2tvZ2tvZ2tvZ2tvf1dbg1NXZ2tvZ2tvZ2tvZ2tvi0tPZ2tvZ2tvZ2tvZ2tv/uLbZ2tvZ2tvZ2tvZ2tv/uLb/uLbpzc3/uLb/uLb/uLb/uLb/uLbZ2tvZ2tvZ2tv/uLb/uLb/uLb/uLb/uLbZ2tv/uLb/uLb/uLbZ2tv/uLb/uLb/uLb/uLb/uLbZ2tv/uLbZ2tv/uLbZ2tvZ2tvZ2tv/uLY949JTAAAANXRSTlMAWPrEagIF7BwamBYT44d497OsZDfc0ArxoUspHNPSlYhUQurjyMK4rqmWfG5iNywP9XtOTD4Xr98AAAKCSURBVGje7dvbctowFIXhJWFLxvgQCAmHlgBp0janpifx/o/WG2Z2mURWwNt7gNF/m4tvTByxdBHslI7r0Y3Vji1tb0b1OIWvrCpdJ5VVhvcqltp1ll4WeJOyrtOswm4md52XG4CaDJ1AwwmJpluRTHrO3AmVY5tyYqntX4d1YtmB6MdKH22mnWA6A1A50SogLZ1oZYqxE26M2glXY+SEG2HhhFvAOuEstPPVU1mKg0oz1XO+NLw/SdCqxPssXvISLbvcl+yhdb09SYXWqT3JAVrX35NE+8zxPyXH7/L431iXoGWJ83RMp49zPdU/9Izt0xnrJfmLZKhIRjKSgSJ5BmTbC8IpfEXHC0K8IMQLwtG9sfGCEC8IkYzkTpGMJNuOpZ0ain/HJpqdvAzv1FD8q6DHTCoEU8zkAMH6zCTCmdN/SoVg6vTf2PCOTc7h9NnuWO9OPZdvkm2RPALyvlKvhUEgPq+sM1ACpE0MIEo+FIAQSUeVLPnrL4RJ/QfSZAJp8gHSpC3EyQTSZGnEyRq7pfPZ1cXG14qDzLDT7fWmoUcwkPfY6femqRk4yAr/t2oUv6cspAKoeaP4zYCFfAVlrprErxPwkAWodZN4/RNMpAE1axIH4CIBquFzvfqMTkj/CXBHIi/pFb98gjA5JVGInP6AMHlxC2HyYg5pcg1p8gXS5DOkySdIkytIk494P90ZOYMny07S7PC04CZpdvgaMZM0O7zVvCTNDn9jXpJmh7+05CVpdvir2Mm7gIhMc5E0O0IteclpWERhmUiaHcEUE0mzI1zOQ9LsCGeGXOQaH20y5CFf8PFMzkE+Y6+UbU0+Yc+KXB9CtiurSmGS/uG8W/If2/lZWUj/EeoAAAAASUVORK5CYII="},d396:function(t,e,i){var a=i("f813");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,i("499e").default)("4f15a69a",a,!0,{sourceMap:!1,shadowMode:!1})},f191:function(t,e,i){"use strict";i("33b1");var a={props:{curDat:{type:Object,default:()=>({order_no:"",spu_title:"",sku_attr:"",amount:""})}},methods:{handleCustomerService(){this.$emit("on-customer-service")}}},r=(i("c382"),i("2877")),o=Object(r.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"order-header"},[i("span",[t._v(t._s(t.curDat.create_time))]),i("label",[t._v("Completed")])]),i("div",{staticClass:"info-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.curDat.spu_url,expression:"curDat.spu_url"}],attrs:{alt:""}}),i("div",{staticClass:"info"},[i("div",{staticClass:"info-top"},[i("p",{staticClass:"title"},[t._v(t._s(t.curDat.spu_title))]),i("div",{staticClass:"price"},[t._v("Rp"+t._s(t.curDat.amount))])]),i("p",{staticClass:"info-description"},[t._v("\n        "+t._s(t.curDat.sku_attr)+"\n      ")]),i("p",{staticClass:"address"},[t._v("Order Number:"+t._s(t.curDat.order_no))])])]),i("div",{staticClass:"ctrl-box"},[i("div",{staticClass:"pay-time"}),i("div",{staticClass:"btn",on:{click:t.handleCustomerService}},[t._v("Customer Service")])])])},[],!1,null,"09563dfc",null);e.a=o.exports},f813:function(t,e,i){(t.exports=i("2350")(!1)).push([t.i,".order-header[data-v-09563dfc]{height:.93333rem;line-height:.53333rem;border-bottom:1px solid #f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex}.order-header span[data-v-09563dfc]{display:inline-block;width:4rem;font-size:.37333rem;color:#323232}.order-header label[data-v-09563dfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;color:#d4160f;font-size:.4rem;color:#35b20f}.info-box[data-v-09563dfc]{padding:.26667rem;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:.26667rem;border-bottom:1px solid #f2f2f2}.info-box>img[data-v-09563dfc]{width:2.66667rem;height:2.66667rem;margin-right:.26667rem}.info-box>.info[data-v-09563dfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.info-box>.info>.info-top[data-v-09563dfc]{display:-webkit-box;display:-webkit-flex;display:flex;color:#323232;font-size:.37333rem;font-weight:lighter}.info-box>.info>.info-top>.title[data-v-09563dfc]{-webkit-box-flex:3;-webkit-flex:3;flex:3;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.info-box>.info>.info-top>.price[data-v-09563dfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.info-box>.info>.address[data-v-09563dfc],.info-box>.info>.info-description[data-v-09563dfc]{font-size:.32rem;color:#888;margin-top:.13333rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:.53333rem}.ctrl-box[data-v-09563dfc]{text-align:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ctrl-box>.pay-time[data-v-09563dfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left}.ctrl-box>.pay-time span[data-v-09563dfc]{color:#d4160f}.ctrl-box>.btn[data-v-09563dfc]{display:inline-block;width:3.65333rem;height:.85333rem;line-height:.85333rem;font-size:.37333rem;text-align:center;font-size:.4rem;font-weight:400;color:#d30c05;border:1px solid #d30c05;border-radius:.42667rem}.ctrl-box>.active[data-v-09563dfc]{color:#fff;background-color:#d30c05}",""])},fc6b:function(t,e,i){"use strict";var a=i("0197");i.n(a).a}}]);