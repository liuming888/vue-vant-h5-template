(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4449392a"],{"196a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAOCAMAAABHGGlTAAAA0lBMVEX///9vyv//b29yy/+C0f91zP/9/v//+Pj/cnL//Pz/dXV90P/1/P//8fGH0/95zv/5/f/y+v+M1f///v7u+f/r+P/n9///6+v/5OT/g4Pg9P//gIDb8v//9fX/7u7/eXnV8P/C6f+05P+U2P//1NT/t7f/h4e75/+j3f//v7//sLD/lJT/ior/fX3k9f//4OD/mZnM7f/I6/+n3/+Z2v//6Oj/zs7/ysr/xcX/oqL/jY2t4f+e2///2tr/pqb/fHyQ1v//np7/kJDQ7v//3d3/qqoIpUXXAAAB8ElEQVRo3u3ax3ICMQyAYYd0NpCQEHrvvfde3/+VUpgJSDPS2LSFrHX2fAf/R0lsxuW8AWN4BDGOjA1M2SeYcSP3jnQjyA22WfcOuZ+k60eul3M/pV0vcv2s60Gu0029bAehm4mwriHtlpHr4NwKct9d1Esfcku8+yrtTqE7YN0Adl+UKrulK0cuorJLV+YrV6PIDau4M9JdIXfBuqF76CZJd2yHbvFRyX0zo3JAunJVVz5ZZXU3htwW6aaQWzPFXd5Cd/SgK19O5ZG0Oz9S5c4Tcp85t47cnLTbZ92GtNtF7kTJbZJuT1e2QmUlN34DZyhI1wZn/XEcN4/cAutmkZtgXJXKXV35Siufxk0jNy24SSA3e273o2Cz6cpWqAwmz7pD5MaP5DYhe0u7a8g+9Tj2AbsN6uXz5BsTurIFKu+6XdbNIbdOuv0zuR3WHSF3SbrzH03oyhaoLOu+taB7H6NePtaga0+Z4iaRGyLd4i8ndGULVN66Y859OZU7g+5rgHoZXkA3WmXdd2l3sPGErnxI5dV1VJZzXcg1KuRqvQTdqY9E1Vb2JaWVvfopgNj5NenKUV35Kir/78MMhVOAv5W9MLNyRlc+vLKTqax08GGYevChfphh7HGYIXTlvSs7rqbyxr3ww4zqiVb2K/vW/AI1Ynd0p3ORiwAAAABJRU5ErkJggg=="},"31e7":function(t,e,i){"use strict";i.d(e,"c",function(){return n}),i.d(e,"d",function(){return r}),i.d(e,"a",function(){return o}),i.d(e,"e",function(){return s}),i.d(e,"b",function(){return d});var a=i("007a");function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].post({url:"/api/v1/bargain/get_bargain_info",data:t})}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].post({url:"/api/v1/bargain/get_help_bargain_list",data:t})}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].post({url:"/api/v1/bargain/chop",data:t})}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].post({url:"/api/v1/spu/get_mybargain_spus",data:t})}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].post({url:"/api/v1/bargain/chop_share",data:t})}},"33b1":function(t,e,i){"use strict";i.d(e,"c",function(){return n}),i.d(e,"d",function(){return r}),i.d(e,"e",function(){return o}),i.d(e,"b",function(){return s}),i.d(e,"a",function(){return d});var a=i("007a");function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].post({url:"/api/v1/order/create_order",data:t})}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].post({url:"/api/v1/order/get_order_list",data:t})}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].post({url:"/api/v1/order/repaid_order",data:t})}function s(){return a["a"].post({url:"/api/v1/pay/get_pay_type"})}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].post({url:"/api/v1/order/get_order_by_bargainId",data:t})}},"4aa4":function(t,e,i){var a=i("c3b0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("85cb").default;n("4c068fd0",a,!0,{sourceMap:!1,shadowMode:!1})},5918:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"purchase-container"},[a("div",{staticClass:"top-info"},[t.messageList.length>0?a("user-order-message",{attrs:{messageList:t.messageList}}):t._e()],1),t.myAddress&&t.myAddress.id?a("div",{staticClass:"y-shipping-address",on:{click:t.goShippingAddressList}},[a("img",{staticClass:"position",attrs:{src:i("edde")}}),a("div",{staticClass:"shipping-address-content"},[a("div",{staticClass:"top-box"},[a("span",{staticClass:"Receiver"},[t._v("\n          Receiver: "+t._s(t.myAddress.username)+"\n        ")]),a("span",{staticClass:"phone"},[t._v(t._s(t.myAddress.telephone))])]),a("div",{staticClass:"receiving-address"},[t._v("\n        Receiving address:\n        "),t._v(t._s(t.myAddress.address_one)+","+t._s(t.myAddress.city)+","+t._s(t.myAddress.region)+","+t._s(t.myAddress.country)+"\n      ")])]),a("van-icon",{staticStyle:{"font-size":"22px",color:"#888888"},attrs:{name:"arrow"}})],1):a("div",{staticClass:"no-shipping-address",on:{click:function(e){t.showAddressDialog.show=!0}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i("fbc1"),expression:"require('@/assets/images/add.png')"}],staticClass:"add-icon"}),a("div",{staticClass:"txt"},[t._v("Add shipping address")]),a("van-icon",{attrs:{name:"arrow"}})],1),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i("196a"),expression:"require('@/assets/images/Addressmodification.png')"}],staticStyle:{width:"100vw",height:"auto","margin-bottom":"50px"}}),a("div",{staticClass:"commodity-info"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.spu.spu_pics&&t.spu.spu_pics[0]||i("fbc1"),expression:"spu.spu_pics&&spu.spu_pics[0]||require('@/assets/images/add.png')"}],staticClass:"commodity-img"}),a("div",{staticClass:"commodity-content"},[a("div",{staticClass:"commodity-tit"},[t._v("\n        "+t._s(t.spu.title)+"\n      ")]),a("div",{staticClass:"type-num"}),a("div",{staticClass:"price-quantity"},[a("span",{staticClass:"current-price"},[a("b",{staticStyle:{"font-size":"1px"}},[t._v("Rp")]),t._v("\n          "+t._s(t.bargain_info.bargain_after)+"\n        ")]),a("span",{staticClass:"original-price"},[t._v("\n          Rp"+t._s(t.spu.original_price)+"\n        ")]),a("span",{staticClass:"commodity-num"},[t._v("\n          x1\n        ")])])])]),a("ul",{staticClass:"commodity-type"},t._l(t.specs,function(e,i){return a("li",{key:i,staticClass:"commodity-item"},[a("p",{staticClass:"tit"},[t._v(t._s(e.spec_name))]),a("div",{staticClass:"type-box"},t._l(e.spu_spec_items,function(i,n){return a("div",{key:n,staticClass:"type-item-box",class:{cur:i.id==e.id},on:{click:function(t){e.id=i.id}}},[t._v("\n          "+t._s(i.item_name)+"\n        ")])}),0)])}),0),a("ul",{staticClass:"paly-type-list"},t._l(t.payTypes,function(e){return a("li",{key:e.id,staticClass:"paly-item",on:{click:function(i){return t.handlePayType(e)}}},[a("span",{staticClass:"paly-txt"},[t._v(t._s(e.name))]),a("img",{staticClass:"paly-select-icon",attrs:{src:t.currentType.id===e.id?i("cf9d"):i("0eb9")}})])}),0),a("div",{staticClass:"down-box"},[a("div",{staticClass:"left-box"},[a("div",{staticClass:"l-t-box"},[t._v("\n        Actual payment:\n        "),a("div",{staticClass:"num-box"},[a("b",[t._v("Rp")]),t._v(t._s(t.bargain_info.bargain_after)+"\n        ")])]),a("div",{staticClass:"l-d-box"},[t._v("About $"+t._s((t.bargain_info.bargain_after/t.exchangeRateDat.exchange_rate).toFixed(2)))])]),a("div",{staticClass:"pay-immediately",on:{click:t.goPaly}},[t._v("\n      Place Oder\n    ")])]),t.showShippingAddressPage?a("div",{staticClass:"dialog-box",on:{click:function(e){e.stopPropagation(),t.abc=1}}},[a("shipping-address",{attrs:{showAddressPage:t.showShippingAddressPage},on:{"update:showAddressPage":function(e){t.showShippingAddressPage=e},"update:show-address-page":function(e){t.showShippingAddressPage=e}}})],1):t._e(),a("dialog-post-add-address",{attrs:{dialogVisible:t.showAddressDialog,showType:"add"},on:{"update:dialogVisible":function(e){t.showAddressDialog=e},"update:dialog-visible":function(e){t.showAddressDialog=e}}}),a("dialog-default",{attrs:{info:t.info,dialogVisible:t.dialogVisible},on:{"update:dialogVisible":function(e){t.dialogVisible=e},"update:dialog-visible":function(e){t.dialogVisible=e},ok:t.goRepaidPay}},[a("div",{staticClass:"pay-error",attrs:{slot:"content"},slot:"content"},[a("p",[t._v("Pesanan pembayaran akan kedaluwarsa dalam waktu dekat, harap membayar sesegera mungkin")])])])],1)},n=[],r=(i("7415"),i("612f"),i("98a6"),i("ca34")),o=i("8e61"),s=(i("f91a"),i("4453"),i("fa8b")),d=i("44f7"),c=(i("3a23"),i("b325"),i("4549")),u=i("f390"),p=i("01cb"),l=i("4107"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogVisible.show,expression:"dialogVisible.show"}],staticClass:"dialogWaitPayment-container"},[a("div",{staticClass:"bg"}),a("div",{staticClass:"dialog-container"},[a("img",{staticClass:"close-icon",attrs:{src:i("033c")},on:{click:function(e){return t.$emit("update:dialogVisible",{show:!1})}}}),t._m(0),a("div",{staticClass:"footer"},[a("div",{staticClass:"cancel",on:{click:t.goContinue}},[t._v("Continue")]),a("div",{staticClass:"ok",on:{click:t.completeOk}},[t._v("Complete")])])])])},g=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("span",[t._v("Waiting for buyer payment~")])])}],m={name:"dialogWaitPayment",props:{dialogVisible:{type:Object,default:function(){return{show:!1}}}},methods:{completeOk:function(){this.$emit("playfail"),this.$emit("update:dialogVisible",{show:!1})},goContinue:function(){this.$emit("continuePlay"),this.$emit("update:dialogVisible",{show:!1})}}},h=m,y=(i("84f7a"),i("17cc")),b=Object(y["a"])(h,f,g,!1,null,"7fc74c93",null),v=b.exports,w=i("ad63"),x=i("996b"),A=i("a83d"),_=i("33b1"),k=i("3007"),j=i("5de4"),M=i("31e7"),I={mixins:[w["a"]],components:Object(d["a"])({userOrderMessage:function(t){return i.e("chunk-b124237a").then(function(){var e=[i("dd75")];t.apply(null,e)}.bind(this)).catch(i.oe)},DialogDefault:l["a"],shippingAddress:u["default"],dialogPostAddAddress:p["a"],dialogWaitPayment:v},c["a"].name,c["a"]),data:function(){return{messageList:[],spu:{},specs:[],bargain_info:{},bargain_user_info:{},paly_id:1,showShippingAddressPage:!1,showAddressDialog:{show:!1},showWaitPaymentDialog:{show:!1},myAddress:{},info:{content:"Konfirmasikan untuk melunasi?",cancleText:"Menyerah",okText:"Terus bayar"},dialogVisible:!1,exchangeRateDat:{currency_code:"IDR",exchange_rate:1},payTypes:[],currentType:""}},created:function(){this.init(),this.getMyAddressInfo(),this.curSpuSpecs(),this.initExchangeRate(),"failed"===this.$route.query.payment&&(this.dialogVisible=!0)},mounted:function(){document.title="Check out",fbq("track","AddToCart")},methods:{init:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.initHomeTip(),this.initSpuInfo(),this.initBargainInfo(),this.getMyAddressInfo(),this.curSpuSpecs(),this.initExchangeRate(),this.getPayType(),this.initOrderByBargainIdDat(this.$route.query.bargainId);case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initHomeTip:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(A["b"])();case 2:e=t.sent,e&&e.data&&(this.messageList=e.data.home_tips,console.log("this.messageList: ",this.messageList));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initOrderByBargainIdDat:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(_["a"])({bargain_id:e});case 2:i=t.sent,i&&i.data&&i.data.can_pay&&this.$router.replace({query:Object(o["a"])({},this.$route.query,{orderNo:i.data.order_no})});case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getPayType:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(_["b"])();case 2:e=t.sent,this.payTypes=e.data.pay_types,this.currentType=this.payTypes[0],this.$gaSend({eventCategory:"支付_选择支付方式",eventAction:"点击"});case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),handlePayType:function(t){this.currentType=t},initSpuInfo:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(x["b"])({spu_id:this.$route.query.spuId});case 2:e=t.sent,e&&e.data&&(this.spu=e.data.spu);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initBargainInfo:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i,a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(M["c"])({bargain_id:this.$route.query.bargainId});case 2:e=t.sent,e&&e.data&&(i=e.data,a=i.bargain_info,n=i.bargain_user_info,this.bargain_info=a,this.bargain_user_info=n);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initExchangeRate:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(j["b"])({currency_code:"IDR"});case 2:e=t.sent,e&&e.data&&(this.exchangeRateDat=e.data);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getMyAddressInfo:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(k["d"])({page_size:10,page_num:1,is_default:1});case 2:e=t.sent,e&&e.data&&(this.myAddress=e.data.filter(function(t){return 1===t.is_default})[0]);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),curSpuSpecs:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(x["e"])({spu_id:this.$route.query.spuId});case 2:e=t.sent,e&&e.data&&(this.specs=e.data.map(function(t){return t.id=t.spu_spec_items[0].id,t}));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),goPaly:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i,a,n,o,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.dialogVisible=!1,e=this.bargain_info.bargain_after,!(e<this.currentType.min_amount)){t.next=5;break}return this.$toast("The payment amount is too small, please try again by alternative payment method."),t.abrupt("return");case 5:if(fbq("track","InitiateCheckout"),this.myAddress.id){t.next=9;break}return r["a"].alert({message:"Please choose a shipping address",confirmButtonText:"ok"}),t.abrupt("return");case 9:if(i={address_id:this.myAddress.id,spu_id:this.spu.spu_id,pay_type:this.currentType.type,pay_product:this.currentType.product,spu_name:this.spu.title},a="",this.specs.forEach(function(t){a=a+t.spec_name+":"+t.spu_spec_items.find(function(e){return e.id==t.id}).item_name+" "}),console.log("spu_spec_items----------",a),a&&(i.spu_spec_items=a),this.$route.query.bargainId&&(i.bargain_id=this.$route.query.bargainId),console.log("param--------------",i),!this.$route.query.orderNo){t.next=20;break}this.goRepaidPay(),t.next=24;break;case 20:return t.next=22,Object(_["c"])(i);case 22:n=t.sent,n&&n.data&&(fbq("track","Purchase",{value:0,currency:"USD"}),o=n.data,s=o.pay_url,o.order_no,console.log("pay_url: ",s),this.showWaitPaymentDialog.show=!0,this.mx_showLoad(),window.location.href=s);case 24:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),goRepaidPay:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i,a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.bargain_info.bargain_after,!(e<this.currentType.min_amount)){t.next=4;break}return this.$toast("The payment amount is too small, please try again by alternative payment method."),t.abrupt("return");case 4:return t.next=6,Object(_["e"])({order_no:this.$route.query.orderNo,spu_name:this.spu.title,pay_type:this.currentType.type,pay_product:this.currentType.product});case 6:i=t.sent,i&&i.data&&(a=i.data,n=a.pay_url,a.order_no,console.log("pay_url: ",n),this.showWaitPaymentDialog.show=!0,this.mx_showLoad(),window.location.href=n);case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),goShippingAddressList:function(){this.showShippingAddressPage=!0}},watch:{showShippingAddressPage:function(t){t||this.getMyAddressInfo()},"showAddressDialog.show":function(t){t||this.getMyAddressInfo()},dialogVisible:function(t){t&&this.$gaSend({eventCategory:"支付失败页面",eventAction:"页面展示"})}}},C=I,P=(i("75b7"),Object(y["a"])(C,a,n,!1,null,"246d5fe0",null));e["default"]=P.exports},"5de4":function(t,e,i){"use strict";i.d(e,"e",function(){return n}),i.d(e,"a",function(){return r}),i.d(e,"c",function(){return o}),i.d(e,"b",function(){return s}),i.d(e,"d",function(){return d});var a=i("007a");function n(){return a["a"].post({url:"/api/v1/withdraw/get_withdraw_info"})}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].post({url:"/api/v1/withdraw/apply_withdraw",data:t})}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].post({url:"/api/v1/fund/get_fund_record_list",data:t})}function s(t){var e=t.currency_code,i=void 0===e?"IDR":e;return a["a"].post({url:"/api/v1/currency/get_exchange_rate",data:{currency_code:i}})}function d(){return a["a"].get({url:"/api/v1/withdraw/get_operator_list"})}},"6e48":function(t,e,i){var a=i("756b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("85cb").default;n("10ba1c04",a,!0,{sourceMap:!1,shadowMode:!1})},"756b":function(t,e,i){e=t.exports=i("690e")(!1),e.push([t.i,".purchase-container[data-v-246d5fe0]{width:100vw;background:#f9f9f9;min-height:calc(100vh - 1.24rem);box-sizing:border-box;padding-bottom:1.90667rem;overflow:hidden}.no-shipping-address[data-v-246d5fe0]{width:100%;height:1.24rem;padding:0 .4rem;box-align:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;background:#fff}.no-shipping-address .add-icon[data-v-246d5fe0]{width:.58667rem;height:.58667rem;margin-right:.26667rem}.no-shipping-address .txt[data-v-246d5fe0]{font-size:.37333rem;font-weight:400;color:#323232;margin-right:2.6rem}.no-shipping-address .van-icon[data-v-246d5fe0]{position:absolute;right:1.33333rem;top:.48rem}.y-shipping-address[data-v-246d5fe0]{width:100%;height:2.25333rem;background:#fff;padding:.4rem;box-align:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.y-shipping-address .position[data-v-246d5fe0]{width:.42667rem;height:.53333rem}.y-shipping-address .shipping-address-content[data-v-246d5fe0]{width:7.86667rem;height:100%;padding:.66667rem .4rem 0 .26667rem;box-align:border-box;font-size:.37333rem;font-weight:400;color:#323232}.y-shipping-address .shipping-address-content .top-box[data-v-246d5fe0]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:.26667rem}.y-shipping-address .shipping-address-content .top-box .phone[data-v-246d5fe0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.commodity-info[data-v-246d5fe0]{background:#f9f9f9;width:100%;height:3.17333rem;padding:.17333rem .4rem;box-align:border-box;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:.41333rem}.commodity-info .commodity-img[data-v-246d5fe0]{width:2.93333rem;height:auto;margin-right:.32rem}.commodity-info .commodity-content[data-v-246d5fe0]{position:relative}.commodity-info .commodity-content .commodity-tit[data-v-246d5fe0]{padding-top:.2rem;width:6rem;font-size:.37333rem;font-weight:400;color:#323232;line-height:.49333rem;margin-bottom:.13333rem}.commodity-info .commodity-content .type-num[data-v-246d5fe0]{height:.25333rem;font-size:.32rem;font-weight:400;color:#888;margin-bottom:.72rem}.commodity-info .commodity-content .price-quantity[data-v-246d5fe0]{width:100%;position:absolute;bottom:.13333rem;left:0;display:-webkit-box;display:-webkit-flex;display:flex}.commodity-info .commodity-content .price-quantity .current-price[data-v-246d5fe0]{font-size:.56rem;font-weight:500;color:#d30c05;line-height:.49333rem;margin-right:.28rem}.commodity-info .commodity-content .price-quantity .original-price[data-v-246d5fe0]{font-size:.32rem;font-weight:500;text-decoration:line-through;color:#888}.commodity-info .commodity-content .price-quantity .commodity-num[data-v-246d5fe0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.commodity-type[data-v-246d5fe0]{width:100%;padding:0 .4rem;box-sizing:border-box;background:#fff;margin-bottom:.26667rem}.commodity-type .commodity-item[data-v-246d5fe0]{width:100%;padding-top:.41333rem;margin-bottom:.6rem}.commodity-type .commodity-item .tit[data-v-246d5fe0]{font-size:.37333rem;font-weight:400;color:#323232}.commodity-type .commodity-item .type-box[data-v-246d5fe0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.commodity-type .commodity-item .type-box .type-item-box[data-v-246d5fe0]{margin:.26667rem .26667rem 0 0;height:.85333rem;text-align:center;line-height:.85333rem;background:#f5f5f5;border-radius:.42667rem;font-size:.32rem;font-weight:400;color:#323232;border:1px solid #f5f5f5;padding:0 .13333rem}.commodity-type .commodity-item .type-box .type-item-box.cur[data-v-246d5fe0]{background:#fffbfb;border:1px solid #d30c05;color:#d30c05}.paly-type-list[data-v-246d5fe0]{width:100%;padding:0 .4rem;box-align:border-box;font-size:.37333rem;font-weight:400;color:#323232;background:#fff}.paly-type-list .paly-item[data-v-246d5fe0]{width:100%;height:1.22667rem;line-height:1.22667rem;overflow:hidden}.paly-type-list .paly-item[data-v-246d5fe0]:last-of-type{margin-bottom:0;margin-bottom:.82667rem}.paly-type-list .paly-item .paly-select-icon[data-v-246d5fe0]{float:right;width:.4rem;height:.4rem;position:relative;top:.48rem;left:-.08rem}.down-box[data-v-246d5fe0]{width:100vw;height:1.30667rem;position:fixed;bottom:0;left:0;z-index:10;background:pink;display:-webkit-box;display:-webkit-flex;display:flex}.down-box .left-box[data-v-246d5fe0]{width:6.2rem;background:#fff;padding-left:.4rem;box-sizing:border-box;font-size:.32rem}.down-box .left-box .l-t-box[data-v-246d5fe0]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;line-height:.66667rem;margin-bottom:.13333rem}.down-box .left-box .l-t-box .num-box[data-v-246d5fe0]{margin-left:.13333rem;font-size:.32rem;color:#d30c05;vertical-align:top;font-weight:500}.down-box .left-box .l-t-box .num-box b[data-v-246d5fe0]{font-size:.26667rem;font-weight:400}.down-box .left-box .l-d-box[data-v-246d5fe0]{font-size:.29333rem;font-weight:400;color:#888}.down-box .pay-immediately[data-v-246d5fe0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:1.30667rem;line-height:1.30667rem;text-align:center;background:-webkit-linear-gradient(left,#d30c05,#f64e01);background:linear-gradient(90deg,#d30c05,#f64e01);font-size:.42667rem;font-weight:400;color:#fff}.dialog-box[data-v-246d5fe0]{width:100vw;height:100vh;background:#fff;position:fixed;z-index:99;left:0;top:0}.pay-error[data-v-246d5fe0]{margin-top:.46667rem;font-size:.32rem;color:#888;line-height:.4rem}.receiving-address[data-v-246d5fe0]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}",""])},"75b7":function(t,e,i){"use strict";var a=i("6e48"),n=i.n(a);n.a},"84f7a":function(t,e,i){"use strict";var a=i("4aa4"),n=i.n(a);n.a},"996b":function(t,e,i){"use strict";i.d(e,"d",function(){return n}),i.d(e,"b",function(){return r}),i.d(e,"a",function(){return o}),i.d(e,"e",function(){return s}),i.d(e,"c",function(){return d});var a=i("007a");function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].post({url:"/api/v1/spu/get_mybargain_spus",data:t})}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].post({url:"/api/v1/spu/get_info",data:t})}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].post({url:"/api/v1/spu/get_bargain_spus",data:t})}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].get({url:"/api/v1/spu/get_spu_specs",data:t})}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].post({url:"/api/v1/spu/get_my_bargain_order_spus",data:t})}},a83d:function(t,e,i){"use strict";i.d(e,"b",function(){return n}),i.d(e,"a",function(){return r}),i.d(e,"c",function(){return o});var a=i("007a");function n(){return a["a"].post({url:"/api/v1/tip/get_home_tip"})}function r(){return a["a"].get({url:"/api/v1/sys/get_banners "})}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].post({url:"/api/v1/tip/get_world_tip",data:t})}},ad63:function(t,e,i){"use strict";e["a"]={methods:{mx_showLoad:function(){this.$store.commit("setLoaddingNum",1)},mx_closeLoad:function(){this.$store.commit("setLoaddingNum",-1)}}}},c3b0:function(t,e,i){e=t.exports=i("690e")(!1),e.push([t.i,".dialogWaitPayment-container[data-v-7fc74c93]{position:fixed;display:-webkit-box;display:-webkit-flex;display:flex;top:0;left:0;width:100%;height:100%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:99999}.dialogWaitPayment-container>.bg[data-v-7fc74c93]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.4)}.dialogWaitPayment-container>.dialog-container[data-v-7fc74c93]{position:relative;width:100%;margin:0 1.06667rem;background:#fff;border-radius:.26667rem;text-align:center}.dialogWaitPayment-container>.dialog-container>.content[data-v-7fc74c93]{padding:.53333rem;height:2.88rem;box-sizing:border-box;padding-top:1.28rem;color:#323232;font-size:.42667rem}.dialogWaitPayment-container>.dialog-container>.content>span[data-v-7fc74c93]{font-weight:700}.dialogWaitPayment-container>.dialog-container>.footer[data-v-7fc74c93]{height:1.33333rem;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:.42667rem}.dialogWaitPayment-container>.dialog-container>.footer>div[data-v-7fc74c93]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.dialogWaitPayment-container>.dialog-container>.footer>.cancel[data-v-7fc74c93]{color:#888}.dialogWaitPayment-container>.dialog-container>.footer>.ok[data-v-7fc74c93]{color:#d30c05}.dialogWaitPayment-container>.dialog-container .close-icon[data-v-7fc74c93]{width:.82667rem;height:.82667rem;border-radius:50%;position:absolute;right:-.26667rem;top:-.26667rem}",""])},edde:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAMAAACo9wirAAAAnFBMVEUAAAAyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjJcZyEUAAAAM3RSTlMA7+rOljK0S9bKxYgTD/muo1E6KRwYCgb007txJePf28CpoHpqQAL1mo5kXlpVIBeDRY2WI5zJAAABuUlEQVQ4y32U2WLiMAxFlX1hTSkEyt4ylK2lnfP//zaOHRMypj0PRAIhX10Z5I7iuM3TNBuEp4m4dOcpN/zOSP6j8FF4aZbNdMRcWgyB/jDRrcvo6AHBWBoyoHP3Ru9UndMc86KyRFqMcvB6dXJU8dhRvYHARBFMn8VlVivdr8D2/37Ng3hXmuQZqL5YwKC2IkazOpt8p5SrxwA+jXS/kr5EUYimj1dKF9a3WdZJuV9UnkRSEcJFzvCms0R9bnbwBlsrP5TQlr/Ckxh8lnsdeAxU477yw2jpNcabuVM2kuGXtqArhhiuOggIJGc6sYo+xKpPpS7IqnaRVeQtdLSF0IqJ5WLcUBxUxS5aFLF6GglPVeXkHU80+xxLdNPyR52tX2sZmtmitl6Fuo9dq4rn4fDrw2Yd2NWLT+QBnzDVzowgFQet4HTbUigOCVa9TICRUzA1u7HrW0mD3V3cZAF0nAP8siW4PcmV2h1LAe/3NztzWh5g1hLgTL6CrY3PgPNLGvfN5TTmcxGHb+obs1ClX/KAuVF+XcJBHvJXjdKtPMnF4q5n/QJL+ZEc7F/BY3oBTEfyC91NEEmLf+inQKtP7pjbAAAAAElFTkSuQmCC"},fbc1:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAALVBMVEXTDAXTDAXTDAXTDAX////31NP53972zs375eX1xcPeRkHdRUD++fn99vb0wsBN90Q9AAAAA3RSTlPmSklSjzZ3AAAAW0lEQVQoz2NQMMYCmBiYsQkbMBhjBcNAeEc3VuEpnliFQ1wHr7DV8/Ly8iu+QKJuMZKwhQscNBMWtpqWlpZ2xAdIZC4elL6ECpMSaTu6B0tio7owruwqgE2YEQB8583/JBAWWgAAAABJRU5ErkJggg=="}}]);