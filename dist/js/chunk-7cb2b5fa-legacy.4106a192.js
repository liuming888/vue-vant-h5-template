(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cb2b5fa"],{1889:function(e,t,i){t=e.exports=i("690e")(!1),t.push([e.i,".order-header[data-v-09563dfc]{height:.93333rem;line-height:.53333rem;border-bottom:1px solid #f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex}.order-header span[data-v-09563dfc]{display:inline-block;width:4rem;font-size:.37333rem;color:#323232}.order-header label[data-v-09563dfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;color:#d4160f;font-size:.4rem;color:#35b20f}.info-box[data-v-09563dfc]{padding:.26667rem;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:.26667rem;border-bottom:1px solid #f2f2f2}.info-box>img[data-v-09563dfc]{width:2.66667rem;height:2.66667rem;margin-right:.26667rem}.info-box>.info[data-v-09563dfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.info-box>.info>.info-top[data-v-09563dfc]{display:-webkit-box;display:-webkit-flex;display:flex;color:#323232;font-size:.37333rem;font-weight:lighter}.info-box>.info>.info-top>.title[data-v-09563dfc]{-webkit-box-flex:3;-webkit-flex:3;flex:3;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.info-box>.info>.info-top>.price[data-v-09563dfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.info-box>.info>.address[data-v-09563dfc],.info-box>.info>.info-description[data-v-09563dfc]{font-size:.32rem;color:#888;margin-top:.13333rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:.53333rem}.ctrl-box[data-v-09563dfc]{text-align:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ctrl-box>.pay-time[data-v-09563dfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left}.ctrl-box>.pay-time span[data-v-09563dfc]{color:#d4160f}.ctrl-box>.btn[data-v-09563dfc]{display:inline-block;width:3.65333rem;height:.85333rem;line-height:.85333rem;font-size:.37333rem;text-align:center;font-size:.4rem;font-weight:400;color:#d30c05;border:1px solid #d30c05;border-radius:.42667rem}.ctrl-box>.active[data-v-09563dfc]{color:#fff;background-color:#d30c05}",""])},"33b1":function(e,t,i){"use strict";i.d(t,"b",function(){return a}),i.d(t,"c",function(){return o}),i.d(t,"d",function(){return n}),i.d(t,"a",function(){return l});var r=i("007a");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r["a"].post({url:"/api/v1/order/create_order",data:e})}function o(e){var t=e.page_size,i=e.page_num,a=e.type;return r["a"].post({url:"/api/v1/order/get_order_list",data:{page_size:t,page_num:i,type:a}})}function n(e){var t=e.order_no,i=e.spu_name,a=e.pay_type;return r["a"].post({url:"/api/v1/order/repaid_order",data:{order_no:t,spu_name:i,pay_type:a}})}function l(){return r["a"].post({url:"/api/v1/pay/get_pay_type"})}},"6bab":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.orderList.length>0?i("ul",{staticClass:"all-order"},e._l(e.orderList,function(e){return i("li",{key:e.order_no,staticClass:"all-order-item"},[i("order-completed-item",{attrs:{curDat:e}})],1)}),0):e._e(),e._e()])},a=[],o=i("a98d"),n=(i("b5aa"),i("2c46")),l=i("f191"),s=i("33b1"),d={components:{orderCompletedItem:l["a"]},data:function(){return{orderList:[],orderPageDat:{page_num:1,page_size:5}}},created:function(){this.init()},methods:{init:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["c"])(Object(o["a"])({},this.orderPageDat,{type:2}));case 2:t=e.sent,t&&t.data&&(this.orderList=t.data);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},c=d,f=i("17cc"),p=Object(f["a"])(c,r,a,!1,null,null,null);t["default"]=p.exports},c382:function(e,t,i){"use strict";var r=i("dcca"),a=i.n(r);a.a},dcca:function(e,t,i){var r=i("1889");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=i("85cb").default;a("d435a17e",r,!0,{sourceMap:!1,shadowMode:!1})},f191:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"order-header"},[i("span",[e._v(e._s(e.curDat.create_time))]),i("label",[e._v("Completed")])]),i("div",{staticClass:"info-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.curDat.spu_url,expression:"curDat.spu_url"}],attrs:{alt:""}}),i("div",{staticClass:"info"},[i("div",{staticClass:"info-top"},[i("p",{staticClass:"title"},[e._v(e._s(e.curDat.spu_title))]),i("div",{staticClass:"price"},[e._v("Rp"+e._s(e.curDat.amount))])]),i("p",{staticClass:"info-description"},[e._v("\n        "+e._s(e.curDat.sku_attr)+"\n      ")]),i("p",{staticClass:"address"},[e._v("Order Number:"+e._s(e.curDat.order_no))])])]),i("div",{staticClass:"ctrl-box"},[i("div",{staticClass:"pay-time"}),i("div",{staticClass:"btn",on:{click:e.handleCustomerService}},[e._v("Customer Service")])])])},a=[],o=(i("33b1"),{props:{curDat:{type:Object,default:function(){return{order_no:"",spu_title:"",sku_attr:"",amount:""}}}},methods:{handleCustomerService:function(){this.$emit("on-customer-service")}}}),n=o,l=(i("c382"),i("17cc")),s=Object(l["a"])(n,r,a,!1,null,"09563dfc",null);t["a"]=s.exports}}]);