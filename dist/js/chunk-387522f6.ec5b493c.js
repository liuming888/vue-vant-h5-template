(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-387522f6"],{2206:function(e,t,i){var a=i("7fca");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),(0,i("499e").default)("9847bd04",a,!0,{sourceMap:!1,shadowMode:!1})},"33b1":function(e,t,i){"use strict";i.d(t,"a",function(){return r}),i.d(t,"b",function(){return o}),i.d(t,"c",function(){return s});var a=i("007a");function r(e){let t=e.spu_spec_items,i=e.address_id,r=e.spu_id,o=e.bargain_id,s=e.pay_type,l=e.spu_name;return a.a.post({url:"/api/v1/order/create_order",data:{spu_spec_items:t,address_id:i,spu_id:r,bargain_id:o,pay_type:s,spu_name:l}})}function o(e){let t=e.page_size,i=e.page_num,r=e.type;return a.a.post({url:"/api/v1/order/get_order_list",data:{page_size:t,page_num:i,type:r}})}function s(e){let t=e.order_no,i=e.spu_name,r=e.pay_type;return a.a.post({url:"/api/v1/order/repaid_order",data:{order_no:t,spu_name:i,pay_type:r}})}},3598:function(e,t,i){"use strict";var a=i("2206");i.n(a).a},"6bab":function(e,t,i){"use strict";i.r(t);var a=i("be94"),r=i("1da1"),o=i("f191"),s=i("33b1"),l={components:{orderCompletedItem:o.a},data:()=>({orderList:[],orderPageDat:{page_num:1,page_size:5}}),created(){this.init()},methods:{init(){var e=this;return Object(r.a)(function*(){let t=yield Object(s.b)(Object(a.a)({},e.orderPageDat,{type:2}));t&&t.data&&(e.orderList=t.data)})()}}},d=i("2877"),n=Object(d.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this.orderList.length>0?t("ul",{staticClass:"all-order"},this._l(this.orderList,function(e){return t("li",{key:e.order_no,staticClass:"all-order-item"},[t("order-completed-item",{attrs:{curDat:e}})],1)}),0):this._e(),this._e()])},[],!1,null,null,null);t.default=n.exports},"7fca":function(e,t,i){(e.exports=i("2350")(!1)).push([e.i,".order-header[data-v-1bee56df]{height:.93333rem;line-height:.53333rem;border-bottom:1px solid #f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex}.order-header span[data-v-1bee56df]{display:inline-block;width:4rem;font-size:.37333rem;color:#323232}.order-header label[data-v-1bee56df]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;color:#d4160f;font-size:.4rem;color:#35b20f}.info-box[data-v-1bee56df]{padding:.26667rem;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:.26667rem;border-bottom:1px solid #f2f2f2}.info-box>img[data-v-1bee56df]{width:2.66667rem;height:2.66667rem;margin-right:.26667rem}.info-box>.info[data-v-1bee56df]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.info-box>.info>.info-top[data-v-1bee56df]{display:-webkit-box;display:-webkit-flex;display:flex;color:#323232;font-size:.37333rem;font-weight:lighter}.info-box>.info>.info-top>.title[data-v-1bee56df]{-webkit-box-flex:3;-webkit-flex:3;flex:3;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.info-box>.info>.info-top>.price[data-v-1bee56df]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.info-box>.info>.address[data-v-1bee56df],.info-box>.info>.info-description[data-v-1bee56df]{font-size:.32rem;color:#888;margin-top:.13333rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:.53333rem}.ctrl-box[data-v-1bee56df]{text-align:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ctrl-box>.pay-time[data-v-1bee56df]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left}.ctrl-box>.pay-time span[data-v-1bee56df]{color:#d4160f}.ctrl-box>.btn[data-v-1bee56df]{display:inline-block;width:3.65333rem;height:.85333rem;line-height:.85333rem;font-size:.37333rem;text-align:center;font-size:.4rem;font-weight:400;color:#d30c05;border:1px solid #d30c05;border-radius:.42667rem}.ctrl-box>.active[data-v-1bee56df]{color:#fff;background-color:#d30c05}",""])},f191:function(e,t,i){"use strict";i("33b1");var a={props:{curDat:{type:Object,default:()=>({order_no:"",spu_title:"",sku_attr:"",amount:""})}},methods:{}},r=(i("3598"),i("2877")),o=Object(r.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"order-header"},[i("span",[e._v(e._s(e.curDat.create_time))]),i("label",[e._v("Completed")])]),i("div",{staticClass:"info-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.curDat.spu_url,expression:"curDat.spu_url"}],attrs:{alt:""}}),i("div",{staticClass:"info"},[i("div",{staticClass:"info-top"},[i("p",{staticClass:"title"},[e._v(e._s(e.curDat.spu_title))]),i("div",{staticClass:"price"},[e._v("Rp"+e._s(e.curDat.amount))])]),i("p",{staticClass:"info-description"},[e._v("\n        "+e._s(e.curDat.sku_attr)+"\n      ")]),i("p",{staticClass:"address"},[e._v("Order Number:"+e._s(e.curDat.order_no))])])]),e._m(0)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ctrl-box"},[t("div",{staticClass:"pay-time"}),t("div",{staticClass:"btn"},[this._v("Customer Service")])])}],!1,null,"1bee56df",null);t.a=o.exports}}]);