(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4eb503f6"],{"33b1":function(t,e,a){"use strict";a.d(e,"a",function(){return r}),a.d(e,"b",function(){return s}),a.d(e,"c",function(){return n});var i=a("007a");function r(t){let e=t.spu_spec_items,a=t.address_id,r=t.spu_id,s=t.bargain_id,n=t.pay_type,c=t.spu_name;return i["a"].post({url:"/api/v1/order/create_order",data:{spu_spec_items:e,address_id:a,spu_id:r,bargain_id:s,pay_type:n,spu_name:c}})}function s(t){let e=t.page_size,a=t.page_num,r=t.type;return i["a"].post({url:"/api/v1/order/get_order_list",data:{page_size:e,page_num:a,type:r}})}function n(t){let e=t.order_no,a=t.spu_name,r=t.pay_type;return i["a"].post({url:"/api/v1/order/repaid_order",data:{order_no:e,spu_name:a,pay_type:r}})}},3598:function(t,e,a){"use strict";var i=a("9ef5"),r=a.n(i);r.a},"3ef8":function(t,e,a){"use strict";var i=a("c34d"),r=a.n(i);r.a},"66f0":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"order-header"},[a("span",[t._v(t._s(t.curDat.create_time))]),a("label",[t._v("Pending payment")])]),a("div",{staticClass:"info-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.curDat.spu_url,expression:"curDat.spu_url"}],attrs:{alt:""}}),a("div",{staticClass:"info"},[a("div",{staticClass:"info-top"},[a("p",{staticClass:"title"},[t._v(t._s(t.curDat.spu_title))]),a("div",{staticClass:"price"},[t._v("Rp"+t._s(t.curDat.amount))])]),a("p",{staticClass:"info-description"},[t._v("\n        "+t._s(t.curDat.sku_attr)+"\n      ")]),a("p",{staticClass:"address"},[t._v("Order Number:"+t._s(t.curDat.order_no))])])]),a("div",{staticClass:"ctrl-box"},[a("div",{staticClass:"pay-time"},[t._v("\n      Please\n      "),a("span",[t._v(t._s(t.exitTime))]),t._v(" complete payment\n    ")]),a("div",{staticClass:"btn",on:{click:t.goRepaidPay}},[t._v("Go buy")])])])},r=[],s=a("0348"),n=a("33b1"),c={props:{curDat:{type:Object,default(){return{order_no:"",spu_title:"",sku_attr:"",amount:""}}}},computed:{exitTime(){let t=this.$util.expiration(this.curDat.expire_time),e=t.h,a=t.p,i=t.m;return e||a||i?`${e}:${a}:${i}`:"00:00:00"}},methods:{goRepaidPay(){var t=this;return Object(s["a"])(function*(){let e=yield Object(n["c"])({order_no:t.curDat.order_no,spu_name:t.curDat.spu_title,pay_type:1});if(e&&e.data){let t=e.data,a=t.pay_url;t.order_no;console.log("pay_url: ",a),window.location.href=a}})()}}},d=c,l=(a("3ef8"),a("17cc")),o=Object(l["a"])(d,i,r,!1,null,"0d12e3f3",null);e["a"]=o.exports},"9ef5":function(t,e,a){},a1a5:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.orderList.length>0?i("ul",{staticClass:"all-order"},[t._l(t.orderList,function(e){return[1==e.order_status?i("li",{key:e.order_no+"1",staticClass:"all-order-item"},[i("pending-payment-order-item",{key:e.order_no,attrs:{curDat:e}})],1):t._e(),2==e.order_status||3==e.order_status?i("li",{key:e.order_no+"2",staticClass:"all-order-item"},[i("order-completed-item",{key:e.order_no,attrs:{curDat:e}})],1):t._e()]})],2):t._e(),t.orderList.length<1?i("div",{staticClass:"without-order"},[i("img",{staticClass:"none-file-icon",attrs:{src:a("c7b0"),alt:""}}),i("p",[t._v("Tidak ada pesanan terkait")]),i("div",{staticClass:"btn"},[t._v("Buka halaman beranda dan lihat")])]):t._e()])},r=[],s=a("5fbf"),n=a("0348"),c=a("66f0"),d=a("f191"),l=a("33b1"),o={components:{pendingPaymentOrderItem:c["a"],orderCompletedItem:d["a"]},data(){return{orderList:[{order_no:"",spu_title:"",sku_attr:"",amount:"",create_time:"",expire_time:1,order_status:""}],orderPageDat:{page_num:1,page_size:10}}},created(){this.init()},methods:{init(){var t=this;return Object(n["a"])(function*(){let e=yield Object(l["b"])(Object(s["a"])({},t.orderPageDat,{type:0}));e&&e.data&&(t.orderList=e.data)})()}}},u=o,p=a("17cc"),m=Object(p["a"])(u,i,r,!1,null,null,null);e["default"]=m.exports},c34d:function(t,e,a){},c7b0:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAACMCAYAAACgRf0UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgzODBGQURFNDNGNDExRTk4RUE5OTBBOEVBNDkyQkU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgzODBGQURGNDNGNDExRTk4RUE5OTBBOEVBNDkyQkU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODM4MEZBREM0M0Y0MTFFOThFQTk5MEE4RUE0OTJCRTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODM4MEZBREQ0M0Y0MTFFOThFQTk5MEE4RUE0OTJCRTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6pv0yKAAAF7UlEQVR42uyd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"},f191:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"order-header"},[a("span",[t._v(t._s(t.curDat.create_time))]),a("label",[t._v("Completed")])]),a("div",{staticClass:"info-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.curDat.spu_url,expression:"curDat.spu_url"}],attrs:{alt:""}}),a("div",{staticClass:"info"},[a("div",{staticClass:"info-top"},[a("p",{staticClass:"title"},[t._v(t._s(t.curDat.spu_title))]),a("div",{staticClass:"price"},[t._v("Rp"+t._s(t.curDat.amount))])]),a("p",{staticClass:"info-description"},[t._v("\n        "+t._s(t.curDat.sku_attr)+"\n      ")]),a("p",{staticClass:"address"},[t._v("Order Number:"+t._s(t.curDat.order_no))])])]),t._m(0)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ctrl-box"},[a("div",{staticClass:"pay-time"}),a("div",{staticClass:"btn"},[t._v("Customer Service")])])}],s=(a("33b1"),{props:{curDat:{type:Object,default(){return{order_no:"",spu_title:"",sku_attr:"",amount:""}}}},methods:{}}),n=s,c=(a("3598"),a("17cc")),d=Object(c["a"])(n,i,r,!1,null,"1bee56df",null);e["a"]=d.exports}}]);