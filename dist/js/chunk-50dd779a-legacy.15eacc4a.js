(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-50dd779a"],{"33b1":function(t,e,i){"use strict";i.d(e,"c",function(){return a}),i.d(e,"d",function(){return o}),i.d(e,"e",function(){return n}),i.d(e,"b",function(){return s}),i.d(e,"a",function(){return l});var r=i("007a");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.a.post({url:"/api/v1/order/create_order",data:t})}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.a.post({url:"/api/v1/order/get_order_list",data:t})}function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.a.post({url:"/api/v1/order/repaid_order",data:t})}function s(){return r.a.post({url:"/api/v1/pay/get_pay_type"})}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.a.post({url:"/api/v1/order/get_order_by_bargainId",data:t})}},"6bab":function(t,e,i){"use strict";i.r(e);var r=i("cebc"),a=(i("96cf"),i("3b8d")),o=(i("cadf"),i("551c"),i("f751"),i("097d"),i("f191")),n=i("33b1"),s={components:{orderCompletedItem:o.a},data:function(){return{orderList:[],orderPageDat:{page_num:1,page_size:5},contactVisible:!1}},created:function(){this.init()},methods:{init:function(){var t=Object(a.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(n.d)(Object(r.a)({},this.orderPageDat,{type:2}));case 2:(e=t.sent)&&e.data&&(this.orderList=e.data);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleCustomerService:function(){this.contactVisible=!0}}},l=i("2877"),c=Object(l.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.orderList.length>0?i("ul",{staticClass:"all-order"},t._l(t.orderList,function(e){return i("li",{key:e.order_no,staticClass:"all-order-item"},[i("order-completed-item",{key:e.order_no,attrs:{curDat:e},on:{"on-customer-service":t.handleCustomerService}})],1)}),0):t._e(),t._e(),t.contactVisible?i("div",{staticClass:"alertBox"},[i("div",{staticClass:"alertWrap"},[i("h1",[t._v("Contact us by")]),t._m(0),i("div",{on:{click:function(e){t.contactVisible=!1}}},[t._v("I know")])])]):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",{staticClass:"alertWrap-item"},[this._v("facebook fanpage : @Lovingistarbuy")]),e("li",{staticClass:"alertWrap-item"},[this._v("Wechat : ISTARBUY")]),e("li",{staticClass:"alertWrap-item"},[this._v("Line : ISTARBUY")])])}],!1,null,null,null);e.default=c.exports},c382:function(t,e,i){"use strict";var r=i("d396");i.n(r).a},d396:function(t,e,i){var r=i("f813");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0,i("499e").default)("4f15a69a",r,!0,{sourceMap:!1,shadowMode:!1})},f191:function(t,e,i){"use strict";i("33b1");var r={props:{curDat:{type:Object,default:function(){return{order_no:"",spu_title:"",sku_attr:"",amount:""}}}},methods:{handleCustomerService:function(){this.$emit("on-customer-service")}}},a=(i("c382"),i("2877")),o=Object(a.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"order-header"},[i("span",[t._v(t._s(t.curDat.create_time))]),i("label",[t._v("Completed")])]),i("div",{staticClass:"info-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.curDat.spu_url,expression:"curDat.spu_url"}],attrs:{alt:""}}),i("div",{staticClass:"info"},[i("div",{staticClass:"info-top"},[i("p",{staticClass:"title"},[t._v(t._s(t.curDat.spu_title))]),i("div",{staticClass:"price"},[t._v("Rp"+t._s(t.curDat.amount))])]),i("p",{staticClass:"info-description"},[t._v("\n        "+t._s(t.curDat.sku_attr)+"\n      ")]),i("p",{staticClass:"address"},[t._v("Order Number:"+t._s(t.curDat.order_no))])])]),i("div",{staticClass:"ctrl-box"},[i("div",{staticClass:"pay-time"}),i("div",{staticClass:"btn",on:{click:t.handleCustomerService}},[t._v("Customer Service")])])])},[],!1,null,"09563dfc",null);e.a=o.exports},f813:function(t,e,i){(t.exports=i("2350")(!1)).push([t.i,".order-header[data-v-09563dfc]{height:.93333rem;line-height:.53333rem;border-bottom:1px solid #f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex}.order-header span[data-v-09563dfc]{display:inline-block;width:4rem;font-size:.37333rem;color:#323232}.order-header label[data-v-09563dfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;color:#d4160f;font-size:.4rem;color:#35b20f}.info-box[data-v-09563dfc]{padding:.26667rem;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:.26667rem;border-bottom:1px solid #f2f2f2}.info-box>img[data-v-09563dfc]{width:2.66667rem;height:2.66667rem;margin-right:.26667rem}.info-box>.info[data-v-09563dfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.info-box>.info>.info-top[data-v-09563dfc]{display:-webkit-box;display:-webkit-flex;display:flex;color:#323232;font-size:.37333rem;font-weight:lighter}.info-box>.info>.info-top>.title[data-v-09563dfc]{-webkit-box-flex:3;-webkit-flex:3;flex:3;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.info-box>.info>.info-top>.price[data-v-09563dfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.info-box>.info>.address[data-v-09563dfc],.info-box>.info>.info-description[data-v-09563dfc]{font-size:.32rem;color:#888;margin-top:.13333rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:.53333rem}.ctrl-box[data-v-09563dfc]{text-align:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ctrl-box>.pay-time[data-v-09563dfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left}.ctrl-box>.pay-time span[data-v-09563dfc]{color:#d4160f}.ctrl-box>.btn[data-v-09563dfc]{display:inline-block;width:3.65333rem;height:.85333rem;line-height:.85333rem;font-size:.37333rem;text-align:center;font-size:.4rem;font-weight:400;color:#d30c05;border:1px solid #d30c05;border-radius:.42667rem}.ctrl-box>.active[data-v-09563dfc]{color:#fff;background-color:#d30c05}",""])}}]);