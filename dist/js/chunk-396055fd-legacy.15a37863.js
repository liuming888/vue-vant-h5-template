(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-396055fd"],{2729:function(e,t,i){var a=i("4340");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=i("85cb").default;r("0aa8abb6",a,!0,{sourceMap:!1,shadowMode:!1})},"33b1":function(e,t,i){"use strict";i.d(t,"a",function(){return r}),i.d(t,"b",function(){return o}),i.d(t,"c",function(){return n});var a=i("007a");function r(e){var t=e.spu_spec_items,i=e.address_id,r=e.spu_id,o=e.bargain_id,n=e.pay_type,l=e.spu_name;return a["a"].post({url:"/api/v1/order/create_order",data:{spu_spec_items:t,address_id:i,spu_id:r,bargain_id:o,pay_type:n,spu_name:l}})}function o(e){var t=e.page_size,i=e.page_num,r=e.type;return a["a"].post({url:"/api/v1/order/get_order_list",data:{page_size:t,page_num:i,type:r}})}function n(e){var t=e.order_no,i=e.spu_name,r=e.pay_type;return a["a"].post({url:"/api/v1/order/repaid_order",data:{order_no:t,spu_name:i,pay_type:r}})}},3598:function(e,t,i){"use strict";var a=i("2729"),r=i.n(a);r.a},"3ef8":function(e,t,i){"use strict";var a=i("e5e5"),r=i.n(a);r.a},4340:function(e,t,i){t=e.exports=i("690e")(!1),t.push([e.i,".order-header[data-v-1bee56df]{height:.93333rem;line-height:.53333rem;border-bottom:1px solid #f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex}.order-header span[data-v-1bee56df]{display:inline-block;width:4rem;font-size:.37333rem;color:#323232}.order-header label[data-v-1bee56df]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;color:#d4160f;font-size:.4rem;color:#35b20f}.info-box[data-v-1bee56df]{padding:.26667rem;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:.26667rem;border-bottom:1px solid #f2f2f2}.info-box>img[data-v-1bee56df]{width:2.66667rem;height:2.66667rem;margin-right:.26667rem}.info-box>.info[data-v-1bee56df]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.info-box>.info>.info-top[data-v-1bee56df]{display:-webkit-box;display:-webkit-flex;display:flex;color:#323232;font-size:.37333rem;font-weight:lighter}.info-box>.info>.info-top>.title[data-v-1bee56df]{-webkit-box-flex:3;-webkit-flex:3;flex:3;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.info-box>.info>.info-top>.price[data-v-1bee56df]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.info-box>.info>.address[data-v-1bee56df],.info-box>.info>.info-description[data-v-1bee56df]{font-size:.32rem;color:#888;margin-top:.13333rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:.53333rem}.ctrl-box[data-v-1bee56df]{text-align:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ctrl-box>.pay-time[data-v-1bee56df]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left}.ctrl-box>.pay-time span[data-v-1bee56df]{color:#d4160f}.ctrl-box>.btn[data-v-1bee56df]{display:inline-block;width:3.65333rem;height:.85333rem;line-height:.85333rem;font-size:.37333rem;text-align:center;font-size:.4rem;font-weight:400;color:#d30c05;border:1px solid #d30c05;border-radius:.42667rem}.ctrl-box>.active[data-v-1bee56df]{color:#fff;background-color:#d30c05}",""])},"66f0":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"order-header"},[i("span",[e._v(e._s(e.curDat.create_time))]),i("label",[e._v("Pending payment")])]),i("div",{staticClass:"info-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.curDat.spu_url,expression:"curDat.spu_url"}],attrs:{alt:""}}),i("div",{staticClass:"info"},[i("div",{staticClass:"info-top"},[i("p",{staticClass:"title"},[e._v(e._s(e.curDat.spu_title))]),i("div",{staticClass:"price"},[e._v("Rp"+e._s(e.curDat.amount))])]),i("p",{staticClass:"info-description"},[e._v("\n        "+e._s(e.curDat.sku_attr)+"\n      ")]),i("p",{staticClass:"address"},[e._v("Order Number:"+e._s(e.curDat.order_no))])])]),i("div",{staticClass:"ctrl-box"},[i("div",{staticClass:"pay-time"},[e._v("\n      Please\n      "),i("span",[e._v(e._s(e.exitTime))]),e._v(" complete payment\n    ")]),i("div",{staticClass:"btn",on:{click:e.goRepaidPay}},[e._v("Go buy")])])])},r=[],o=(i("b5aa"),i("2c46")),n=i("33b1"),l={props:{curDat:{type:Object,default:function(){return{order_no:"",spu_title:"",sku_attr:"",amount:""}}}},computed:{exitTime:function(){var e=this.$util.expiration(this.curDat.expire_time),t=e.h,i=e.p,a=e.m;return t||i||a?"".concat(t,":").concat(i,":").concat(a):"00:00:00"}},methods:{goRepaidPay:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,i,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["c"])({order_no:this.curDat.order_no,spu_name:this.curDat.spu_title,pay_type:1});case 2:t=e.sent,t&&t.data&&(i=t.data,a=i.pay_url,i.order_no,console.log("pay_url: ",a),window.location.href=a);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},s=l,d=(i("3ef8"),i("17cc")),c=Object(d["a"])(s,a,r,!1,null,"0d12e3f3",null);t["a"]=c.exports},a1a5:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.orderList.length>0?a("ul",{staticClass:"all-order"},[e._l(e.orderList,function(t){return[1==t.order_status?a("li",{key:t.order_no+"1",staticClass:"all-order-item"},[a("pending-payment-order-item",{key:t.order_no,attrs:{curDat:t}})],1):e._e(),2==t.order_status||3==t.order_status?a("li",{key:t.order_no+"2",staticClass:"all-order-item"},[a("order-completed-item",{key:t.order_no,attrs:{curDat:t}})],1):e._e()]})],2):e._e(),e.orderList.length<1?a("div",{staticClass:"without-order"},[a("img",{staticClass:"none-file-icon",attrs:{src:i("c7b0"),alt:""}}),a("p",[e._v("Tidak ada pesanan terkait")]),a("div",{staticClass:"btn"},[e._v("Buka halaman beranda dan lihat")])]):e._e()])},r=[],o=i("a98d"),n=(i("b5aa"),i("2c46")),l=i("66f0"),s=i("f191"),d=i("33b1"),c={components:{pendingPaymentOrderItem:l["a"],orderCompletedItem:s["a"]},data:function(){return{orderList:[{order_no:"",spu_title:"",sku_attr:"",amount:"",create_time:"",expire_time:1,order_status:""}],orderPageDat:{page_num:1,page_size:10}}},created:function(){this.init()},methods:{init:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["b"])(Object(o["a"])({},this.orderPageDat,{type:0}));case 2:t=e.sent,t&&t.data&&(this.orderList=t.data);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},f=c,b=i("17cc"),p=Object(b["a"])(f,a,r,!1,null,null,null);t["default"]=p.exports},c7b0:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAACMCAYAAACgRf0UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgzODBGQURFNDNGNDExRTk4RUE5OTBBOEVBNDkyQkU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgzODBGQURGNDNGNDExRTk4RUE5OTBBOEVBNDkyQkU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODM4MEZBREM0M0Y0MTFFOThFQTk5MEE4RUE0OTJCRTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODM4MEZBREQ0M0Y0MTFFOThFQTk5MEE4RUE0OTJCRTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6pv0yKAAAF7UlEQVR42uydT2wUVRzHf1221aBcbI1BwIOEEhNv0HipJEUPRGs1mgCNelATLZQYb2L8cxEPejExrUisXpQIXkiMhHChCX8OCpy82K2YIFVCLImGoAEt+Psxb3cRZpeZ2ffevN/M95N8b93dmd9n33Tmze/Nds3UZikDFc4AZ4izltPPWca5g3MbgSRc4lzk/MqpcU5wpjnHOVfSvllXSpHLOeOcZzkr4MIJZzi7OZOcuTQjKwm95o1PcbZDolNWmBqfMjXvtSVyI+dHzlZOD+rsjR5Tc6n9pk5EVjk7OXs5fahrbkjt9xgX1bQiF3P2ccZQx2AYM04WJxUp1r/iDKN2wTFs3FSTiJzgjKBmwTJiHLUVKf9UX0GtgkccjbYS2RtnGgSLuLo7TuQOnJ2q4i7OuzeKvI/zEmqjjheNu4bILZxu1EUd3cbdNZGS51ATtYi7Sv0uxnLUQy3ibkBErkct1DMkItegDupZKyJXow7qWS0il6IO6lkqIpd4+rCjFE0ryT9nmfTtKmiqZh9HzT77YImIdH2z+F+K2kMepui+mvSoLBR4dCyYfdxj9ln2/R/Hn9lT9bBjcsE6VeLD3secy5xPXX5IxfFOHCu5xDpTphZqRU7CYYMJzSIPwV+Dw5pFnoO/BvOaRd4Dfw36NIscgr8G6zSLHIc/P7VwLXIQMhsSBzWLFD6kqPW9rGw1NSDtIrvN9eQRzmbOvZxFBRa3yOzjZrPPk+ShjabqcQcHXR9eykwFJYBIAJEAIgFEQiSASACRACIhEkAkgEgAkcC/SCwZUC4SSwbcLxkgLBlwD5YMFAgsGSgQWDJQELBkoCBgyUBBwJKBgoAlAwUBSwYKIhFLBpSDJQNKwZIBEPaIBBAJIBIiAUQCiAQQCSASIgFEAu0iffW15tJXWgaRvvtac+krzZsy9LV66Sst+ogMpa/VeV9p0UWG1Nc6AZHZCamv9TBEZiekvtZ5iMxOSH2tfRCZnZD6WtdBZHZCaoUch8jshNLX6ryvtOgihbz7Wr30lZZBpO++1lz6SvMGfa0YkQAiAUSC/P9HFoUrnOOcac4JTo2i+58XOZcgMnzmzBnwbs4ZjEh9nOe8Q9E9zcs4tOrka4pmhYK/c4KTnXikz0haVDaRkttfGJE385cR+C3OWnWPxNE0Evt/ns11g2v3r4LIGLZxvgldXty24H9kk72cXZok4mQn/hJjm1aJOLQ2eavd2WnIAjEim/zC+Uz7TkAk0U5qszYkwWiUGg5TNPMjf/w356qHfIBDaxOZAP+yA4mPUtRG8mAOX77XMSKbyF2MuQyvk+V7b3IO5iDxC4qmDa9iRDY5lHE0vsd5I4ft3cd54UaJGJFEJzO85jHO9hy2VUa/NJQt4GTnZmZSjkY5gn1kDq0+kW7Ap6nNbbSyizyb8u9HOCs9b6N0ITxB0WQ+Lj9acCHl3z/jeft+MIfyP3Ed2Z60d/wf8rhtP3E2cH7HhIB9lnn6nDlzjfpb0hdAZDpu9/AZMgIf4ZxO8yKIDIs/jMRa2hdCZFgnXhvMCQ5BpE7k0uIpzndZ3wAiwzhzlmavjp6AApH5ItNtz5OFjj2IzA+Z+H6ZoiZogki9vMb53NabQWQ+vE3R5DtBpF6kRWOH7TeFSL9Ii4aTe5kVCnipWMGIbdGwKfICauycli0aNkWeRZ2d0rZFw6bIGdTaGbds0bAp8iTq7QRptbxli4ZNkdOouXXkDsbjlKBFw6bI7ylbky6IJ1WLhk2RbdvmQSpSt2jYnhCYxPVkx2Rq0bAtUr5JU3CRmcwtGrZFCvJQoPNwkpqOWjRciEy0/Br8j45bNFyIFOSHwXbBTyLknGIjBfIjNXF3P16lBI8oKTn1Fo39oWxQpcU3TR4adAC+YrHaouFSZP3Y/yQOs7FYbdFwLVKQBySMmdE5D3/XsN6i4UPk9SdAD3A+waSB/RYNnyLJjEh57KUs8nyfokc/F5b6g/o00TVTm836BRjgrOes4fRT9APVd5KuH0tpuYRcw9Ouruc/AQYAhvNLJ67fEWUAAAAASUVORK5CYII="},e5e5:function(e,t,i){var a=i("f9f0");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=i("85cb").default;r("50a1eb9f",a,!0,{sourceMap:!1,shadowMode:!1})},f191:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"order-header"},[i("span",[e._v(e._s(e.curDat.create_time))]),i("label",[e._v("Completed")])]),i("div",{staticClass:"info-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.curDat.spu_url,expression:"curDat.spu_url"}],attrs:{alt:""}}),i("div",{staticClass:"info"},[i("div",{staticClass:"info-top"},[i("p",{staticClass:"title"},[e._v(e._s(e.curDat.spu_title))]),i("div",{staticClass:"price"},[e._v("Rp"+e._s(e.curDat.amount))])]),i("p",{staticClass:"info-description"},[e._v("\n        "+e._s(e.curDat.sku_attr)+"\n      ")]),i("p",{staticClass:"address"},[e._v("Order Number:"+e._s(e.curDat.order_no))])])]),e._m(0)])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ctrl-box"},[i("div",{staticClass:"pay-time"}),i("div",{staticClass:"btn"},[e._v("Customer Service")])])}],o=(i("33b1"),{props:{curDat:{type:Object,default:function(){return{order_no:"",spu_title:"",sku_attr:"",amount:""}}}},methods:{}}),n=o,l=(i("3598"),i("17cc")),s=Object(l["a"])(n,a,r,!1,null,"1bee56df",null);t["a"]=s.exports},f9f0:function(e,t,i){t=e.exports=i("690e")(!1),t.push([e.i,".order-header[data-v-0d12e3f3]{height:.93333rem;line-height:.53333rem;border-bottom:1px solid #f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex}.order-header span[data-v-0d12e3f3]{display:inline-block;width:4rem;font-size:.37333rem;color:#323232}.order-header label[data-v-0d12e3f3]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;color:#d4160f;font-size:.4rem}.info-box[data-v-0d12e3f3]{padding:.26667rem;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:.26667rem;border-bottom:1px solid #f2f2f2}.info-box>img[data-v-0d12e3f3]{width:2.66667rem;height:2.66667rem;margin-right:.26667rem}.info-box>.info[data-v-0d12e3f3]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.info-box>.info>.info-top[data-v-0d12e3f3]{display:-webkit-box;display:-webkit-flex;display:flex;color:#323232;font-size:.37333rem;font-weight:lighter}.info-box>.info>.info-top>.title[data-v-0d12e3f3]{-webkit-box-flex:3;-webkit-flex:3;flex:3;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.info-box>.info>.info-top>.price[data-v-0d12e3f3]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.info-box>.info>.address[data-v-0d12e3f3],.info-box>.info>.info-description[data-v-0d12e3f3]{font-size:.32rem;color:#888;margin-top:.13333rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:.53333rem}.ctrl-box[data-v-0d12e3f3]{text-align:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ctrl-box>.pay-time[data-v-0d12e3f3]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left}.ctrl-box>.pay-time span[data-v-0d12e3f3]{color:#d4160f}.ctrl-box>.btn[data-v-0d12e3f3]{display:inline-block;width:2.53333rem;height:.85333rem;border-radius:.42667rem;color:#d30c05;line-height:.85333rem;font-size:.37333rem;text-align:center;background:-webkit-linear-gradient(120deg,#d30c05,#ff362f);background:linear-gradient(-30deg,#d30c05,#ff362f);font-size:.4rem;font-weight:400;color:#fff}.ctrl-box>.active[data-v-0d12e3f3]{color:#fff;background-color:#d30c05}",""])}}]);