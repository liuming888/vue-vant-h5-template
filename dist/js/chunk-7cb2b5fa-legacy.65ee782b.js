(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cb2b5fa"],{1889:function(e,t,r){t=e.exports=r("690e")(!1),t.push([e.i,".order-header[data-v-09563dfc]{height:.93333rem;line-height:.53333rem;border-bottom:1px solid #f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex}.order-header span[data-v-09563dfc]{display:inline-block;width:4rem;font-size:.37333rem;color:#323232}.order-header label[data-v-09563dfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;color:#d4160f;font-size:.4rem;color:#35b20f}.info-box[data-v-09563dfc]{padding:.26667rem;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:.26667rem;border-bottom:1px solid #f2f2f2}.info-box>img[data-v-09563dfc]{width:2.66667rem;height:2.66667rem;margin-right:.26667rem}.info-box>.info[data-v-09563dfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.info-box>.info>.info-top[data-v-09563dfc]{display:-webkit-box;display:-webkit-flex;display:flex;color:#323232;font-size:.37333rem;font-weight:lighter}.info-box>.info>.info-top>.title[data-v-09563dfc]{-webkit-box-flex:3;-webkit-flex:3;flex:3;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.info-box>.info>.info-top>.price[data-v-09563dfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.info-box>.info>.address[data-v-09563dfc],.info-box>.info>.info-description[data-v-09563dfc]{font-size:.32rem;color:#888;margin-top:.13333rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:.53333rem}.ctrl-box[data-v-09563dfc]{text-align:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ctrl-box>.pay-time[data-v-09563dfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left}.ctrl-box>.pay-time span[data-v-09563dfc]{color:#d4160f}.ctrl-box>.btn[data-v-09563dfc]{display:inline-block;width:3.65333rem;height:.85333rem;line-height:.85333rem;font-size:.37333rem;text-align:center;font-size:.4rem;font-weight:400;color:#d30c05;border:1px solid #d30c05;border-radius:.42667rem}.ctrl-box>.active[data-v-09563dfc]{color:#fff;background-color:#d30c05}",""])},"33b1":function(e,t,r){"use strict";r.d(t,"c",function(){return a}),r.d(t,"d",function(){return o}),r.d(t,"e",function(){return n}),r.d(t,"b",function(){return l}),r.d(t,"a",function(){return d});var i=r("007a");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["a"].post({url:"/api/v1/order/create_order",data:e})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["a"].post({url:"/api/v1/order/get_order_list",data:e})}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["a"].post({url:"/api/v1/order/repaid_order",data:e})}function l(){return i["a"].post({url:"/api/v1/pay/get_pay_type"})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["a"].post({url:"/api/v1/order/get_order_by_bargainId",data:e})}},"6bab":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.orderList.length>0?r("ul",{staticClass:"all-order"},e._l(e.orderList,function(e){return r("li",{key:e.order_no,staticClass:"all-order-item"},[r("order-completed-item",{attrs:{curDat:e}})],1)}),0):e._e(),e._e()])},a=[],o=r("8e61"),n=(r("4453"),r("fa8b")),l=r("f191"),d=r("33b1"),s={components:{orderCompletedItem:l["a"]},data:function(){return{orderList:[],orderPageDat:{page_num:1,page_size:5}}},created:function(){this.init()},methods:{init:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["d"])(Object(o["a"])({},this.orderPageDat,{type:2}));case 2:t=e.sent,t&&t.data&&(this.orderList=t.data);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},c=s,f=r("17cc"),u=Object(f["a"])(c,i,a,!1,null,null,null);t["default"]=u.exports},c382:function(e,t,r){"use strict";var i=r("dcca"),a=r.n(i);a.a},dcca:function(e,t,r){var i=r("1889");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=r("85cb").default;a("d435a17e",i,!0,{sourceMap:!1,shadowMode:!1})},f191:function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"order-header"},[r("span",[e._v(e._s(e.curDat.create_time))]),r("label",[e._v("Completed")])]),r("div",{staticClass:"info-box"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.curDat.spu_url,expression:"curDat.spu_url"}],attrs:{alt:""}}),r("div",{staticClass:"info"},[r("div",{staticClass:"info-top"},[r("p",{staticClass:"title"},[e._v(e._s(e.curDat.spu_title))]),r("div",{staticClass:"price"},[e._v("Rp"+e._s(e.curDat.amount))])]),r("p",{staticClass:"info-description"},[e._v("\n        "+e._s(e.curDat.sku_attr)+"\n      ")]),r("p",{staticClass:"address"},[e._v("Order Number:"+e._s(e.curDat.order_no))])])]),r("div",{staticClass:"ctrl-box"},[r("div",{staticClass:"pay-time"}),r("div",{staticClass:"btn",on:{click:e.handleCustomerService}},[e._v("Customer Service")])])])},a=[],o=(r("33b1"),{props:{curDat:{type:Object,default:function(){return{order_no:"",spu_title:"",sku_attr:"",amount:""}}}},methods:{handleCustomerService:function(){this.$emit("on-customer-service")}}}),n=o,l=(r("c382"),r("17cc")),d=Object(l["a"])(n,i,a,!1,null,"09563dfc",null);t["a"]=d.exports}}]);