(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fef3292"],{"0479":function(t,e,r){var i=r("0825");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=r("85cb").default;a("1ba0cede",i,!0,{sourceMap:!1,shadowMode:!1})},"0825":function(t,e,r){e=t.exports=r("690e")(!1),e.push([t.i,".order-header[data-v-4d454927]{height:.93333rem;line-height:.53333rem;border-bottom:1px solid #f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex}.order-header span[data-v-4d454927]{display:inline-block;width:4rem;font-size:.37333rem;color:#323232}.order-header label[data-v-4d454927]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;color:#d4160f;font-size:.4rem;color:#35b20f}.info-box[data-v-4d454927]{padding:.26667rem;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:.26667rem;border-bottom:1px solid #f2f2f2}.info-box>img[data-v-4d454927]{width:2.66667rem;height:2.66667rem;margin-right:.26667rem}.info-box>.info[data-v-4d454927]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.info-box>.info>.info-top[data-v-4d454927]{display:-webkit-box;display:-webkit-flex;display:flex;color:#323232;font-size:.37333rem;font-weight:lighter}.info-box>.info>.info-top>.title[data-v-4d454927]{-webkit-box-flex:3;-webkit-flex:3;flex:3;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.info-box>.info>.info-top>.price[data-v-4d454927]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.info-box>.info>.address[data-v-4d454927],.info-box>.info>.info-description[data-v-4d454927]{font-size:.32rem;color:#888;margin-top:.13333rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:.53333rem}.ctrl-box[data-v-4d454927]{text-align:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ctrl-box>.pay-time[data-v-4d454927]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left}.ctrl-box>.pay-time span[data-v-4d454927]{color:#d4160f}.ctrl-box>.btn[data-v-4d454927]{display:inline-block;width:4rem;height:.85333rem;line-height:.85333rem;font-size:.37333rem;text-align:center;font-size:.4rem;font-weight:400;color:#d30c05;border:1px solid #d30c05;border-radius:.42667rem}.ctrl-box>.active[data-v-4d454927]{color:#fff;background-color:#d30c05}",""])},"33b1":function(t,e,r){"use strict";r.d(e,"c",function(){return a}),r.d(e,"d",function(){return o}),r.d(e,"e",function(){return n}),r.d(e,"b",function(){return s}),r.d(e,"a",function(){return l});var i=r("007a");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["a"].post({url:"/api/v1/order/create_order",data:t})}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["a"].post({url:"/api/v1/order/get_order_list",data:t})}function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["a"].post({url:"/api/v1/order/repaid_order",data:t})}function s(){return i["a"].post({url:"/api/v1/pay/get_pay_type"})}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["a"].post({url:"/api/v1/order/get_order_by_bargainId",data:t})}},"6bab":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.orderList.length>0?i("ul",{staticClass:"all-order"},t._l(t.orderList,function(e){return i("li",{key:e.order_no,staticClass:"all-order-item"},[i("order-completed-item",{key:e.order_no,attrs:{curDat:e},on:{"on-customer-service":t.handleCustomerService}})],1)}),0):i("div",{staticClass:"without-order"},[i("img",{staticClass:"none-file-icon",attrs:{src:r("c7b0"),alt:""}}),i("p",[t._v(t._s(t.$t("myOrder.tidakAdaPesananTerkait")))]),i("div",{staticClass:"btn",on:{click:function(e){return t.$router.push("/")}}},[t._v(t._s(t.$t("myOrder.bukaHalamanBerandaDanLihat")))])]),t.contactVisible?i("div",{staticClass:"alertBox"},[i("div",{staticClass:"alertWrap"},[i("h1",[t._v(t._s(t.$t("myOrder.contactUsBy")))]),t._m(0),i("div",{on:{click:function(e){t.contactVisible=!1}}},[t._v(t._s(t.$t("myOrder.iKnow")))])])]):t._e()])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",{staticClass:"alertWrap-item"},[t._v("facebook fanpage : @Lovingistarbuy")]),r("li",{staticClass:"alertWrap-item"},[t._v("Wechat : ISTARBUY")]),r("li",{staticClass:"alertWrap-item"},[t._v("Line : ISTARBUY")])])}],o=r("8e61"),n=(r("4453"),r("fa8b")),s=r("f191"),l=r("33b1"),d={components:{orderCompletedItem:s["a"]},data:function(){return{orderList:[],orderPageDat:{page_num:1,page_size:5},contactVisible:!1}},created:function(){this.init()},methods:{init:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["d"])(Object(o["a"])({},this.orderPageDat,{type:2}));case 2:e=t.sent,e&&e.data&&(this.orderList=e.data);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),handleCustomerService:function(){this.contactVisible=!0}}},c=d,u=r("17cc"),f=Object(u["a"])(c,i,a,!1,null,null,null);e["default"]=f.exports},c7b0:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAACMCAMAAACXmw0mAAAApVBMVEUAAADZ2tvZ2tvZ2tvZ2tvf1dbg1NXZ2tvZ2tvZ2tvZ2tvi0tPZ2tvZ2tvZ2tvZ2tv/uLbZ2tvZ2tvZ2tvZ2tv/uLb/uLbpzc3/uLb/uLb/uLb/uLb/uLbZ2tvZ2tvZ2tv/uLb/uLb/uLb/uLb/uLbZ2tv/uLb/uLb/uLbZ2tv/uLb/uLb/uLb/uLb/uLbZ2tv/uLbZ2tv/uLbZ2tvZ2tvZ2tv/uLY949JTAAAANXRSTlMAWPrEagIF7BwamBYT44d497OsZDfc0ArxoUspHNPSlYhUQurjyMK4rqmWfG5iNywP9XtOTD4Xr98AAAKCSURBVGje7dvbctowFIXhJWFLxvgQCAmHlgBp0janpifx/o/WG2Z2mURWwNt7gNF/m4tvTByxdBHslI7r0Y3Vji1tb0b1OIWvrCpdJ5VVhvcqltp1ll4WeJOyrtOswm4md52XG4CaDJ1AwwmJpluRTHrO3AmVY5tyYqntX4d1YtmB6MdKH22mnWA6A1A50SogLZ1oZYqxE26M2glXY+SEG2HhhFvAOuEstPPVU1mKg0oz1XO+NLw/SdCqxPssXvISLbvcl+yhdb09SYXWqT3JAVrX35NE+8zxPyXH7/L431iXoGWJ83RMp49zPdU/9Izt0xnrJfmLZKhIRjKSgSJ5BmTbC8IpfEXHC0K8IMQLwtG9sfGCEC8IkYzkTpGMJNuOpZ0ain/HJpqdvAzv1FD8q6DHTCoEU8zkAMH6zCTCmdN/SoVg6vTf2PCOTc7h9NnuWO9OPZdvkm2RPALyvlKvhUEgPq+sM1ACpE0MIEo+FIAQSUeVLPnrL4RJ/QfSZAJp8gHSpC3EyQTSZGnEyRq7pfPZ1cXG14qDzLDT7fWmoUcwkPfY6femqRk4yAr/t2oUv6cspAKoeaP4zYCFfAVlrprErxPwkAWodZN4/RNMpAE1axIH4CIBquFzvfqMTkj/CXBHIi/pFb98gjA5JVGInP6AMHlxC2HyYg5pcg1p8gXS5DOkySdIkytIk494P90ZOYMny07S7PC04CZpdvgaMZM0O7zVvCTNDn9jXpJmh7+05CVpdvir2Mm7gIhMc5E0O0IteclpWERhmUiaHcEUE0mzI1zOQ9LsCGeGXOQaH20y5CFf8PFMzkE+Y6+UbU0+Yc+KXB9CtiurSmGS/uG8W/If2/lZWUj/EeoAAAAASUVORK5CYII="},ec22:function(t,e,r){"use strict";var i=r("0479"),a=r.n(i);a.a},f191:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"order-header"},[r("span",[t._v(t._s(t.curDat.create_time))]),r("label",[t._v(t._s(t.$t("myOrder.completedTit")))])]),r("div",{staticClass:"info-box"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.curDat.spu_url,expression:"curDat.spu_url"}],attrs:{alt:""}}),r("div",{staticClass:"info"},[r("div",{staticClass:"info-top"},[r("p",{staticClass:"title"},[t._v(t._s(t.curDat.spu_title))]),r("div",{staticClass:"price"},[t._v("Rp"+t._s(t.curDat.amount))])]),r("p",{staticClass:"info-description"},[t._v("\n        "+t._s(t.curDat.sku_attr)+"\n      ")]),r("p",{staticClass:"address"},[t._v(t._s(t.$t("myOrder.orderNumber"))+":"+t._s(t.curDat.order_no))])])]),r("div",{staticClass:"ctrl-box"},[r("div",{staticClass:"pay-time"}),r("div",{staticClass:"btn",on:{click:t.handleCustomerService}},[t._v(t._s(t.$t("myOrder.customerService")))])])])},a=[],o=(r("33b1"),{props:{curDat:{type:Object,default:function(){return{order_no:"",spu_title:"",sku_attr:"",amount:""}}}},methods:{handleCustomerService:function(){this.$emit("on-customer-service")}}}),n=o,s=(r("ec22"),r("17cc")),l=Object(s["a"])(n,i,a,!1,null,"4d454927",null);e["a"]=l.exports}}]);