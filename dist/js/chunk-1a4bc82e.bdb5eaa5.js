(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a4bc82e"],{"33b1":function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n}),a.d(e,"c",function(){return s});var r=a("007a");function i(t){var e=t.spu_spec_items,a=t.address_id,i=t.spu_id,n=t.bargain_id,s=t.pay_type,c=t.spu_name;return r["a"].post({url:"/api/v1/order/create_order",data:{spu_spec_items:e,address_id:a,spu_id:i,bargain_id:n,pay_type:s,spu_name:c}})}function n(t){var e=t.page_size,a=t.page_num,i=t.type;return r["a"].post({url:"/api/v1/order/get_order_list",data:{page_size:e,page_num:a,type:i}})}function s(t){var e=t.order_no,a=t.spu_name,i=t.pay_type;return r["a"].post({url:"/api/v1/order/repaid_order",data:{order_no:e,spu_name:a,pay_type:i}})}},"66f0":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"order-header"},[a("span",[t._v(t._s(t.curDat.create_time))]),a("label",[t._v("Pending payment")])]),a("div",{staticClass:"info-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.curDat.spu_url,expression:"curDat.spu_url"}],attrs:{alt:""}}),a("div",{staticClass:"info"},[a("div",{staticClass:"info-top"},[a("p",{staticClass:"title"},[t._v(t._s(t.curDat.spu_title))]),a("div",{staticClass:"price"},[t._v("Rp"+t._s(t.curDat.amount))])]),a("p",{staticClass:"info-description"},[t._v("\n        "+t._s(t.curDat.sku_attr)+"\n      ")]),a("p",{staticClass:"address"},[t._v("Order Number:"+t._s(t.curDat.order_no))])])]),a("div",{staticClass:"ctrl-box"},[a("div",{staticClass:"pay-time"},[t._v("\n      Please\n      "),a("span",[t._v(t._s(t.exitTime))]),t._v(" complete payment\n    ")]),a("div",{staticClass:"btn",on:{click:t.goRepaidPay}},[t._v("Go buy")])])])},i=[],n=(a("b5aa"),a("2c46")),s=a("33b1"),c={props:{curDat:{type:Object,default:function(){return{order_no:"mock",spu_title:"mock",sku_attr:"mock",amount:"mock"}}}},computed:{exitTime:function(){var t=this.$util.expiration(this.curDat.expire_time),e=t.h,a=t.p,r=t.m;return e||a||r?"".concat(e,":").concat(a,":").concat(r):"00:00:00"}},methods:{goRepaidPay:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["c"])({order_no:curDat.order_no,spu_name:curDat.spu_title,pay_type:1});case 2:e=t.sent,e&&e.data&&(a=e.data,r=a.pay_url,a.order_no,console.log("pay_url: ",r),window.location.href=r);case 4:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()}},o=c,u=(a("9002"),a("17cc")),d=Object(u["a"])(o,r,i,!1,null,"49429349",null);e["a"]=d.exports},"8c45":function(t,e,a){},9002:function(t,e,a){"use strict";var r=a("8c45"),i=a.n(r);i.a},a1a5:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.orderList.length>0?r("ul",{staticClass:"all-order"},[t._l(t.orderList,function(e){return[1==e.order_status?r("li",{key:e.order_no+"1",staticClass:"all-order-item"},[r("pending-payment-order-item",{key:e.order_no,attrs:{curDat:e}})],1):t._e(),2==e.order_status||3==e.order_status?r("li",{key:e.order_no+"2",staticClass:"all-order-item"},[r("order-completed-item",{key:e.order_no,attrs:{curDat:e}})],1):t._e()]})],2):t._e(),t.orderList.length<1?r("div",{staticClass:"without-order"},[r("img",{staticClass:"none-file-icon",attrs:{src:a("c7b0"),alt:""}}),r("p",[t._v("Tidak ada pesanan terkait")]),r("div",{staticClass:"btn"},[t._v("Buka halaman beranda dan lihat")])]):t._e()])},i=[],n=a("a98d"),s=(a("b5aa"),a("2c46")),c=a("66f0"),o=a("f191"),u=a("33b1"),d={components:{pendingPaymentOrderItem:c["a"],orderCompletedItem:o["a"]},data:function(){return{orderList:[{order_no:"mock",spu_title:"mock",sku_attr:"mock",amount:"mock",create_time:"mock",expire_time:1,order_status:"mock"}],orderPageDat:{page_num:1,page_size:10}}},created:function(){this.init()},methods:{init:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["b"])(Object(n["a"])({},this.orderPageDat,{type:0}));case 2:e=t.sent,e&&e.data&&(this.orderList=e.data);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},l=d,p=a("17cc"),m=Object(p["a"])(l,r,i,!1,null,null,null);e["default"]=m.exports},aad0:function(t,e,a){},c7b0:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAACMCAYAAACgRf0UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgzODBGQURFNDNGNDExRTk4RUE5OTBBOEVBNDkyQkU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgzODBGQURGNDNGNDExRTk4RUE5OTBBOEVBNDkyQkU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODM4MEZBREM0M0Y0MTFFOThFQTk5MEE4RUE0OTJCRTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODM4MEZBREQ0M0Y0MTFFOThFQTk5MEE4RUE0OTJCRTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6pv0yKAAAF7UlEQVR42uyd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"},cf65:function(t,e,a){"use strict";var r=a("aad0"),i=a.n(r);i.a},f191:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"order-header"},[a("span",[t._v(t._s(t.curDat.create_time))]),a("label",[t._v("Completed")])]),a("div",{staticClass:"info-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.curDat.spu_url,expression:"curDat.spu_url"}],attrs:{alt:""}}),a("div",{staticClass:"info"},[a("div",{staticClass:"info-top"},[a("p",{staticClass:"title"},[t._v(t._s(t.curDat.spu_title))]),a("div",{staticClass:"price"},[t._v("Rp"+t._s(t.curDat.amount))])]),a("p",{staticClass:"info-description"},[t._v("\n        "+t._s(t.curDat.sku_attr)+"\n      ")]),a("p",{staticClass:"address"},[t._v("Order Number:"+t._s(t.curDat.order_no))])])]),t._m(0)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ctrl-box"},[a("div",{staticClass:"pay-time"}),a("div",{staticClass:"btn"},[t._v("Customer Service")])])}],n=(a("33b1"),{props:{curDat:{type:Object,default:function(){return{order_no:"mock",spu_title:"mock",sku_attr:"mock",amount:"mock"}}}},methods:{}}),s=n,c=(a("cf65"),a("17cc")),o=Object(c["a"])(s,r,i,!1,null,"d979cc9c",null);e["a"]=o.exports}}]);