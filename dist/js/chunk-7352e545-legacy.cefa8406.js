(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7352e545"],{"196a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAOCAMAAABHGGlTAAAA0lBMVEX///9vyv//b29yy/+C0f91zP/9/v//+Pj/cnL//Pz/dXV90P/1/P//8fGH0/95zv/5/f/y+v+M1f///v7u+f/r+P/n9///6+v/5OT/g4Pg9P//gIDb8v//9fX/7u7/eXnV8P/C6f+05P+U2P//1NT/t7f/h4e75/+j3f//v7//sLD/lJT/ior/fX3k9f//4OD/mZnM7f/I6/+n3/+Z2v//6Oj/zs7/ysr/xcX/oqL/jY2t4f+e2///2tr/pqb/fHyQ1v//np7/kJDQ7v//3d3/qqoIpUXXAAAB8ElEQVRo3u3ax3ICMQyAYYd0NpCQEHrvvfde3/+VUpgJSDPS2LSFrHX2fAf/R0lsxuW8AWN4BDGOjA1M2SeYcSP3jnQjyA22WfcOuZ+k60eul3M/pV0vcv2s60Gu0029bAehm4mwriHtlpHr4NwKct9d1Esfcku8+yrtTqE7YN0Adl+UKrulK0cuorJLV+YrV6PIDau4M9JdIXfBuqF76CZJd2yHbvFRyX0zo3JAunJVVz5ZZXU3htwW6aaQWzPFXd5Cd/SgK19O5ZG0Oz9S5c4Tcp85t47cnLTbZ92GtNtF7kTJbZJuT1e2QmUlN34DZyhI1wZn/XEcN4/cAutmkZtgXJXKXV35Siufxk0jNy24SSA3e273o2Cz6cpWqAwmz7pD5MaP5DYhe0u7a8g+9Tj2AbsN6uXz5BsTurIFKu+6XdbNIbdOuv0zuR3WHSF3SbrzH03oyhaoLOu+taB7H6NePtaga0+Z4iaRGyLd4i8ndGULVN66Y859OZU7g+5rgHoZXkA3WmXdd2l3sPGErnxI5dV1VJZzXcg1KuRqvQTdqY9E1Vb2JaWVvfopgNj5NenKUV35Kir/78MMhVOAv5W9MLNyRlc+vLKTqax08GGYevChfphh7HGYIXTlvSs7rqbyxr3ww4zqiVb2K/vW/AI1Ynd0p3ORiwAAAABJRU5ErkJggg=="},"31e7":function(e,t,i){"use strict";i.d(t,"c",function(){return n}),i.d(t,"d",function(){return r}),i.d(t,"a",function(){return o}),i.d(t,"e",function(){return s}),i.d(t,"b",function(){return d});var a=i("007a");function n(e){var t=e.bargain_id;return a["a"].post({url:"/api/v1/bargain/get_bargain_info",data:{bargain_id:t}})}function r(e){var t=e.bargain_id,i=e.page_size,n=e.page_num;return a["a"].post({url:"/api/v1/bargain/get_help_bargain_list",data:{bargain_id:t,page_size:i,page_num:n}})}function o(e){var t=e.bargain_id,i=e.spu_id;return a["a"].post({url:"/api/v1/bargain/chop",data:{spu_id:i,bargain_id:t}})}function s(e){var t=e.page_size,i=void 0===t?10:t,n=e.page_num,r=void 0===n?1:n;return a["a"].post({url:"/api/v1/spu/get_mybargain_spus",data:{page_size:i,page_num:r}})}function d(e){var t=e.relation_id;return a["a"].post({url:"/api/v1/bargain/chop_share",data:{relation_id:t}})}},"33b1":function(e,t,i){"use strict";i.d(t,"b",function(){return n}),i.d(t,"c",function(){return r}),i.d(t,"d",function(){return o}),i.d(t,"a",function(){return s});var a=i("007a");function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].post({url:"/api/v1/order/create_order",data:e})}function r(e){var t=e.page_size,i=e.page_num,n=e.type;return a["a"].post({url:"/api/v1/order/get_order_list",data:{page_size:t,page_num:i,type:n}})}function o(e){var t=e.order_no,i=e.spu_name,n=e.pay_type;return a["a"].post({url:"/api/v1/order/repaid_order",data:{order_no:t,spu_name:i,pay_type:n}})}function s(){return a["a"].post({url:"/api/v1/pay/get_pay_type"})}},"4bd0":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".dialogWaitPayment-container[data-v-7fc74c93]{position:fixed;display:-webkit-box;display:-webkit-flex;display:flex;top:0;left:0;width:100%;height:100%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:99999}.dialogWaitPayment-container>.bg[data-v-7fc74c93]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.4)}.dialogWaitPayment-container>.dialog-container[data-v-7fc74c93]{position:relative;width:100%;margin:0 1.06667rem;background:#fff;border-radius:.26667rem;text-align:center}.dialogWaitPayment-container>.dialog-container>.content[data-v-7fc74c93]{padding:.53333rem;height:2.88rem;box-sizing:border-box;padding-top:1.28rem;color:#323232;font-size:.42667rem}.dialogWaitPayment-container>.dialog-container>.content>span[data-v-7fc74c93]{font-weight:700}.dialogWaitPayment-container>.dialog-container>.footer[data-v-7fc74c93]{height:1.33333rem;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:.42667rem}.dialogWaitPayment-container>.dialog-container>.footer>div[data-v-7fc74c93]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.dialogWaitPayment-container>.dialog-container>.footer>.cancel[data-v-7fc74c93]{color:#888}.dialogWaitPayment-container>.dialog-container>.footer>.ok[data-v-7fc74c93]{color:#d30c05}.dialogWaitPayment-container>.dialog-container .close-icon[data-v-7fc74c93]{width:.82667rem;height:.82667rem;border-radius:50%;position:absolute;right:-.26667rem;top:-.26667rem}",""])},5918:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"purchase-container"},[a("div",{staticClass:"top-info"},[a("div",{staticClass:"info-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i("dd20"),expression:"require('@/assets/images/btn-1.png')"}],staticClass:"head-portrait"}),a("span",{staticClass:"info-txt"},[e._v("Michelle got a freebie just now")])])]),e.myAddress&&e.myAddress.id?a("div",{staticClass:"y-shipping-address",on:{click:e.goShippingAddressList}},[a("img",{staticClass:"position",attrs:{src:i("edde")}}),a("div",{staticClass:"shipping-address-content"},[a("div",{staticClass:"top-box"},[a("span",{staticClass:"Receiver"},[e._v("\n          Receiver: "+e._s(e.myAddress.username)+"\n        ")]),a("span",{staticClass:"phone"},[e._v(e._s(e.myAddress.telephone))])]),a("div",{staticClass:"receiving-address"},[e._v("\n        Receiving address:\n        "),e._v(e._s(e.myAddress.address_one)+","+e._s(e.myAddress.city)+","+e._s(e.myAddress.region)+","+e._s(e.myAddress.country)+"\n      ")])]),a("van-icon",{staticStyle:{"font-size":"22px",color:"#888888"},attrs:{name:"arrow"}})],1):a("div",{staticClass:"no-shipping-address",on:{click:function(t){e.showAddressDialog.show=!0}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i("fbc1"),expression:"require('@/assets/images/add.png')"}],staticClass:"add-icon"}),a("div",{staticClass:"txt"},[e._v("Add shipping address")]),a("van-icon",{attrs:{name:"arrow"}})],1),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i("196a"),expression:"require('@/assets/images/Addressmodification.png')"}],staticStyle:{width:"100vw",height:"auto","margin-bottom":"50px"}}),a("div",{staticClass:"commodity-info"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.spu.spu_pics&&e.spu.spu_pics[0]||i("fbc1"),expression:"spu.spu_pics&&spu.spu_pics[0]||require('@/assets/images/add.png')"}],staticClass:"commodity-img"}),a("div",{staticClass:"commodity-content"},[a("div",{staticClass:"commodity-tit"},[e._v("\n        "+e._s(e.spu.title)+"\n      ")]),a("div",{staticClass:"type-num"}),a("div",{staticClass:"price-quantity"},[a("span",{staticClass:"current-price"},[a("b",{staticStyle:{"font-size":"1px"}},[e._v("Rp")]),e._v("\n          "+e._s(e.bargain_info.bargain_after)+"\n        ")]),a("span",{staticClass:"original-price"},[e._v("\n          Rp"+e._s(e.spu.original_price)+"\n        ")]),a("span",{staticClass:"commodity-num"},[e._v("\n          x1\n        ")])])])]),a("ul",{staticClass:"commodity-type"},e._l(e.specs,function(t,i){return a("li",{key:i,staticClass:"commodity-item"},[a("p",{staticClass:"tit"},[e._v(e._s(t.spec_name))]),a("div",{staticClass:"type-box"},e._l(t.spu_spec_items,function(i,n){return a("div",{key:n,staticClass:"type-item-box",class:{cur:i.id==t.id},on:{click:function(e){t.id=i.id}}},[e._v("\n          "+e._s(i.item_name)+"\n        ")])}),0)])}),0),a("ul",{staticClass:"paly-type-list"},e._l(e.payTypes,function(t){return a("li",{key:t.id,staticClass:"paly-item",on:{click:function(i){return e.handlePayType(t)}}},[a("span",{staticClass:"paly-txt"},[e._v(e._s(t.name))]),a("img",{staticClass:"paly-select-icon",attrs:{src:e.currentType.id===t.id?i("cf9d"):i("0eb9")}})])}),0),a("div",{staticClass:"down-box"},[a("div",{staticClass:"left-box"},[a("div",{staticClass:"l-t-box"},[e._v("\n        Actual payment:\n        "),a("div",{staticClass:"num-box"},[a("b",[e._v("Rp")]),e._v(e._s(e.bargain_info.bargain_after)+"\n        ")])]),a("div",{staticClass:"l-d-box"},[e._v("About $"+e._s((e.bargain_info.bargain_after/e.exchangeRateDat.exchange_rate).toFixed(2)))])]),a("div",{staticClass:"pay-immediately",on:{click:e.goPaly}},[e._v("\n      Place Oder\n    ")])]),e.showShippingAddressPage?a("div",{staticClass:"dialog-box",on:{click:function(t){t.stopPropagation(),e.abc=1}}},[a("shipping-address",{attrs:{showAddressPage:e.showShippingAddressPage},on:{"update:showAddressPage":function(t){e.showShippingAddressPage=t},"update:show-address-page":function(t){e.showShippingAddressPage=t}}})],1):e._e(),a("dialog-post-add-address",{attrs:{dialogVisible:e.showAddressDialog,showType:"add"},on:{"update:dialogVisible":function(t){e.showAddressDialog=t},"update:dialog-visible":function(t){e.showAddressDialog=t}}}),a("dialog-default",{attrs:{info:e.info,dialogVisible:e.dialogVisible},on:{"update:dialogVisible":function(t){e.dialogVisible=t},"update:dialog-visible":function(t){e.dialogVisible=t},ok:e.goRepaidPay}},[a("div",{staticClass:"pay-error",attrs:{slot:"content"},slot:"content"},[a("p",[e._v("Pesanan pembayaran akan kedaluwarsa dalam waktu dekat, harap membayar sesegera mungkin")])])])],1)},n=[],r=(i("7514"),i("ac6a"),i("96cf"),i("3b8d")),o=i("bd86"),s=(i("7f7f"),i("c3a6"),i("ad06")),d=(i("cadf"),i("551c"),i("f751"),i("097d"),i("f390")),c=i("01cb"),p=i("4107"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogVisible.show,expression:"dialogVisible.show"}],staticClass:"dialogWaitPayment-container"},[a("div",{staticClass:"bg"}),a("div",{staticClass:"dialog-container"},[a("img",{staticClass:"close-icon",attrs:{src:i("033c")},on:{click:function(t){return e.$emit("update:dialogVisible",{show:!1})}}}),e._m(0),a("div",{staticClass:"footer"},[a("div",{staticClass:"cancel",on:{click:e.goContinue}},[e._v("Continue")]),a("div",{staticClass:"ok",on:{click:e.completeOk}},[e._v("Complete")])])])])},l=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("span",[e._v("Waiting for buyer payment~")])])}],g={name:"dialogWaitPayment",props:{dialogVisible:{type:Object,default:function(){return{show:!1}}}},methods:{completeOk:function(){this.$emit("playfail"),this.$emit("update:dialogVisible",{show:!1})},goContinue:function(){this.$emit("continuePlay"),this.$emit("update:dialogVisible",{show:!1})}}},m=g,f=(i("84f7"),i("2877")),y=Object(f["a"])(m,u,l,!1,null,"7fc74c93",null),h=y.exports,b=i("996b"),v=i("33b1"),w=i("3007"),A=i("5de4"),x=i("31e7"),_={components:Object(o["a"])({DialogDefault:p["a"],shippingAddress:d["default"],dialogPostAddAddress:c["a"],dialogWaitPayment:h},s["a"].name,s["a"]),data:function(){return{spu:{},specs:[],bargain_info:{},bargain_user_info:{},paly_id:1,showShippingAddressPage:!1,showAddressDialog:{show:!1},showWaitPaymentDialog:{show:!1},myAddress:{},info:{content:"Konfirmasikan untuk melunasi?",cancleText:"Menyerah",okText:"Terus bayar"},dialogVisible:!1,exchangeRateDat:{currency_code:"IDR",exchange_rate:1},payTypes:[],currentType:""}},created:function(){this.init(),this.getMyAddressInfo(),this.curSpuSpecs(),this.initExchangeRate(),"failed"===this.$route.query.payment&&(this.dialogVisible=!0)},mounted:function(){document.title="Check out"},methods:{init:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.initSpuInfo(),this.initBargainInfo(),this.getMyAddressInfo(),this.curSpuSpecs(),this.initExchangeRate(),this.getPayType();case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getPayType:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["a"])();case 2:t=e.sent,this.payTypes=t.data.pay_types,this.currentType=this.payTypes[0],this.$gaSend({eventCategory:"支付_选择支付方式",eventAction:"点击"});case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handlePayType:function(e){this.currentType=e},initSpuInfo:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(b["b"])({spu_id:this.$route.query.spuId});case 2:t=e.sent,t&&t.data&&(this.spu=t.data.spu);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),initBargainInfo:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,i,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(x["c"])({bargain_id:this.$route.query.bargainId});case 2:t=e.sent,t&&t.data&&(i=t.data,a=i.bargain_info,n=i.bargain_user_info,this.bargain_info=a,this.bargain_user_info=n);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),initExchangeRate:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(A["b"])({currency_code:"IDR"});case 2:t=e.sent,t&&t.data&&(this.exchangeRateDat=t.data);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getMyAddressInfo:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(w["d"])({page_size:10,page_num:1,is_default:1});case 2:t=e.sent,t&&t.data&&(this.myAddress=t.data.filter(function(e){return 1===e.is_default})[0]);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),curSpuSpecs:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(b["e"])({spu_id:this.$route.query.spuId});case 2:t=e.sent,t&&t.data&&(this.specs=t.data.map(function(e){return e.id=e.spu_spec_items[0].id,e}));case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),goPaly:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,i,a,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.dialogVisible=!1,t={address_id:this.myAddress.id,spu_id:this.spu.spu_id,pay_type:this.currentType.type,pay_product:this.currentType.product,spu_name:this.spu.title},i="",this.specs.forEach(function(e){i=i+e.spec_name+":"+e.spu_spec_items.find(function(t){return t.id==e.id}).item_name+" "}),console.log("spu_spec_items----------",i),i&&(t.spu_spec_items=i),this.$route.query.bargainId&&(t.bargain_id=this.$route.query.bargainId),console.log("param--------------",t),!this.$route.query.orderNo){e.next=12;break}this.goRepaidPay(),e.next=16;break;case 12:return e.next=14,Object(v["b"])(t);case 14:a=e.sent,a&&a.data&&(n=a.data,r=n.pay_url,n.order_no,console.log("pay_url: ",r),this.showWaitPaymentDialog.show=!0,window.location.href=r);case 16:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),goRepaidPay:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,i,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["d"])({order_no:this.$route.query.orderNo,spu_name:this.spu.title,pay_type:1});case 2:t=e.sent,t&&t.data&&(i=t.data,a=i.pay_url,i.order_no,console.log("pay_url: ",a),this.showWaitPaymentDialog.show=!0,window.location.href=a);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),goShippingAddressList:function(){this.showShippingAddressPage=!0}},watch:{showShippingAddressPage:function(e){e||this.getMyAddressInfo()},"showAddressDialog.show":function(e){e||this.getMyAddressInfo()},dialogVisible:function(e){e&&this.$gaSend({eventCategory:"支付失败页面",eventAction:"页面展示"})}}},k=_,M=(i("5ec3"),Object(f["a"])(k,a,n,!1,null,"06e52138",null));t["default"]=M.exports},"5de4":function(e,t,i){"use strict";i.d(t,"d",function(){return n}),i.d(t,"a",function(){return r}),i.d(t,"c",function(){return o}),i.d(t,"b",function(){return s});var a=i("007a");function n(){return a["a"].post({url:"/api/v1/withdraw/get_withdraw_info"})}function r(e){var t=e.pay_type,i=e.account_name,n=e.account_no,r=e.amount;return a["a"].post({url:"/api/v1/withdraw/apply_withdraw",data:{pay_type:t,account_name:i,account_no:n,amount:r}})}function o(e){var t=e.page_size,i=e.page_num;return a["a"].post({url:"/api/v1/fund/get_fund_record_list",data:{page_size:t,page_num:i}})}function s(e){var t=e.currency_code,i=void 0===t?"IDR":t;return a["a"].post({url:"/api/v1/currency/get_exchange_rate",data:{currency_code:i}})}},"5ec3":function(e,t,i){"use strict";var a=i("e6af"),n=i.n(a);n.a},"67f4":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".purchase-container[data-v-06e52138]{width:100vw;background:#f9f9f9;min-height:calc(100vh - 1.24rem);box-sizing:border-box;padding-bottom:1.90667rem;overflow:hidden}.border .top-info[data-v-06e52138]{height:.64rem;padding:0 .4rem;box-align:border-box;background:#e7d4d4}.border .top-info[data-v-06e52138],.border .top-info .info-box[data-v-06e52138]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.border .top-info .info-box[data-v-06e52138]{font-size:.26667rem;font-weight:400;color:#33201f}.border .top-info .info-box .head-portrait[data-v-06e52138]{width:.50667rem;height:.50667rem;margin-right:.13333rem}.no-shipping-address[data-v-06e52138]{width:100%;height:1.24rem;padding:0 .4rem;box-align:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;background:#fff}.no-shipping-address .add-icon[data-v-06e52138]{width:.58667rem;height:.58667rem;margin-right:.26667rem}.no-shipping-address .txt[data-v-06e52138]{font-size:.37333rem;font-weight:400;color:#323232;margin-right:2.6rem}.y-shipping-address[data-v-06e52138]{width:100%;height:2.25333rem;background:#fff;padding:.4rem;box-align:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.y-shipping-address .position[data-v-06e52138]{width:.42667rem;height:.53333rem}.y-shipping-address .shipping-address-content[data-v-06e52138]{width:7.86667rem;height:100%;padding:.66667rem .4rem 0 .26667rem;box-align:border-box;font-size:.37333rem;font-weight:400;color:#323232}.y-shipping-address .shipping-address-content .top-box[data-v-06e52138]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:.26667rem}.y-shipping-address .shipping-address-content .top-box .phone[data-v-06e52138]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.commodity-info[data-v-06e52138]{background:#f9f9f9;width:100%;height:3.17333rem;padding:.17333rem .4rem;box-align:border-box;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:.41333rem}.commodity-info .commodity-img[data-v-06e52138]{width:2.93333rem;height:auto;margin-right:.32rem}.commodity-info .commodity-content[data-v-06e52138]{position:relative}.commodity-info .commodity-content .commodity-tit[data-v-06e52138]{padding-top:.2rem;width:6rem;font-size:.37333rem;font-weight:400;color:#323232;line-height:.49333rem;margin-bottom:.13333rem}.commodity-info .commodity-content .type-num[data-v-06e52138]{height:.25333rem;font-size:.32rem;font-weight:400;color:#888;margin-bottom:.72rem}.commodity-info .commodity-content .price-quantity[data-v-06e52138]{width:100%;position:absolute;bottom:.13333rem;left:0;display:-webkit-box;display:-webkit-flex;display:flex}.commodity-info .commodity-content .price-quantity .current-price[data-v-06e52138]{font-size:.56rem;font-weight:500;color:#d30c05;line-height:.49333rem;margin-right:.28rem}.commodity-info .commodity-content .price-quantity .original-price[data-v-06e52138]{font-size:.32rem;font-weight:500;text-decoration:line-through;color:#888}.commodity-info .commodity-content .price-quantity .commodity-num[data-v-06e52138]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.commodity-type[data-v-06e52138]{width:100%;padding:0 .4rem;box-sizing:border-box;background:#fff;margin-bottom:.26667rem}.commodity-type .commodity-item[data-v-06e52138]{width:100%;padding-top:.41333rem;margin-bottom:.6rem}.commodity-type .commodity-item .tit[data-v-06e52138]{font-size:.37333rem;font-weight:400;color:#323232}.commodity-type .commodity-item .type-box[data-v-06e52138]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.commodity-type .commodity-item .type-box .type-item-box[data-v-06e52138]{margin:.26667rem .26667rem 0 0;height:.85333rem;text-align:center;line-height:.85333rem;background:#f5f5f5;border-radius:.42667rem;font-size:.32rem;font-weight:400;color:#323232;border:1px solid #f5f5f5;padding:0 .13333rem}.commodity-type .commodity-item .type-box .type-item-box.cur[data-v-06e52138]{background:#fffbfb;border:1px solid #d30c05;color:#d30c05}.paly-type-list[data-v-06e52138]{width:100%;padding:0 .4rem;box-align:border-box;font-size:.37333rem;font-weight:400;color:#323232;background:#fff}.paly-type-list .paly-item[data-v-06e52138]{width:100%;height:1.22667rem;line-height:1.22667rem;overflow:hidden}.paly-type-list .paly-item[data-v-06e52138]:last-of-type{margin-bottom:0;margin-bottom:.82667rem}.paly-type-list .paly-item .paly-select-icon[data-v-06e52138]{float:right;width:.4rem;height:.4rem;position:relative;top:.48rem;left:-.08rem}.down-box[data-v-06e52138]{width:100vw;height:1.30667rem;position:fixed;bottom:0;left:0;z-index:10;background:pink;display:-webkit-box;display:-webkit-flex;display:flex}.down-box .left-box[data-v-06e52138]{width:6.2rem;background:#fff;padding-left:.4rem;box-sizing:border-box;font-size:.32rem}.down-box .left-box .l-t-box[data-v-06e52138]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;line-height:.66667rem;margin-bottom:.13333rem}.down-box .left-box .l-t-box .num-box[data-v-06e52138]{margin-left:.13333rem;font-size:.32rem;color:#d30c05;vertical-align:top;font-weight:500}.down-box .left-box .l-t-box .num-box b[data-v-06e52138]{font-size:.26667rem;font-weight:400}.down-box .left-box .l-d-box[data-v-06e52138]{font-size:.29333rem;font-weight:400;color:#888}.down-box .pay-immediately[data-v-06e52138]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:1.30667rem;line-height:1.30667rem;text-align:center;background:-webkit-linear-gradient(left,#d30c05,#f64e01);background:linear-gradient(90deg,#d30c05,#f64e01);font-size:.42667rem;font-weight:400;color:#fff}.dialog-box[data-v-06e52138]{width:100vw;height:100vh;background:#fff;position:fixed;z-index:99;left:0;top:0}.pay-error[data-v-06e52138]{margin-top:.46667rem;font-size:.32rem;color:#888;line-height:.4rem}",""])},"84f7":function(e,t,i){"use strict";var a=i("a5df"),n=i.n(a);n.a},"996b":function(e,t,i){"use strict";i.d(t,"d",function(){return n}),i.d(t,"b",function(){return r}),i.d(t,"a",function(){return o}),i.d(t,"e",function(){return s}),i.d(t,"c",function(){return d});var a=i("007a");function n(e){var t=e.page_size,i=e.page_num;return a["a"].post({url:"/api/v1/spu/get_mybargain_spus",data:{page_size:t,page_num:i}})}function r(e){var t=e.spu_id;return a["a"].post({url:"/api/v1/spu/get_info",data:{spu_id:t}})}function o(e){var t=e.page_size,i=e.page_num,n=e.is_all;return a["a"].post({url:"/api/v1/spu/get_bargain_spus",data:{page_size:t,page_num:i,is_all:n}})}function s(e){var t=e.spu_id;return a["a"].get({url:"/api/v1/spu/get_spu_specs",data:{spu_id:t}})}function d(e){var t=e.page_size,i=e.page_num;return a["a"].post({url:"/api/v1/spu/get_my_bargain_order_spus",data:{page_size:t,page_num:i}})}},a5df:function(e,t,i){var a=i("4bd0");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("499e").default;n("d9a5a11e",a,!0,{sourceMap:!1,shadowMode:!1})},dd20:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAqFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////2pgD2ogD//Pf3rBD/+/P71YP3sBn96Lv2qQf6x1z4tyz4tCX++Oj6zXD+8tr+78/968b84qz+9uT84KT70Hf++e383Z372pT6y2b4uTX85LD72Iz4wEf5vD04lUmzAAAAGXRSTlMA+1YF68SbENbR49m3lX8xLBerZkDKZ0Ktzp3axgAAAfFJREFUOMudldl2okAQhptdXHGJCVVNs4MgEpfRvP+bTYeTGamW8czxv2w+y9qL9WU4i/Vs6o5Nc+xOZ+uFY7B/aKnb1sTU/E6aObFsfTkIOrrt+opcW3ceSW8+8gc0mnsKaGxWmj8obfVuEFK3CElYSzf65Jv/RG931thY5BMvCkEerM0f1ltRK7uyjOnL6ic2Z674GQO2DfV37nSormSJHwG/wlrwfs70rkY2NVqVOUAS5WnVN2svZUzUqFanAQIgYvBLI2YN5lCjRZpIMsoiDPacmHXYwiJ+xhFCkoWHMMsI6lsLtp70Hz7DADE/Co3XYUzQyZrNTPL/rUQvdfcrQTwzZ2xKXZVWIWjFQCtMmavkVKIQtfEj7LIxfaguCFKXsOYKOmYmfRDXHDv4a6+wpkQV9pSBFGKmsCZ1oIs8PueAkr3tFAdc/0G7QxoByMrSsO7JInAaACYnTpNFS6D9fD1kEr0KWgJaWFE1/C965P3CbpV2Ka7pd+81aQIYxLRdlCZsyuDSnk4yLITbjjah0tpFmSBEEUrle0FbWxmYz/AbA6k8FHRg1DHk9TkPEoDgRms10h+HmzdVfAY4V3xouJn34RMdEENamA+PLCK6XbiyiP5/vb2yNCX7/mwVv7Tgn5+N144RPXHb+4nbKifuNwr3iwuuvmWyAAAAAElFTkSuQmCC"},e6af:function(e,t,i){var a=i("67f4");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("499e").default;n("1743e88a",a,!0,{sourceMap:!1,shadowMode:!1})},edde:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAMAAACo9wirAAAAnFBMVEUAAAAyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjJcZyEUAAAAM3RSTlMA7+rOljK0S9bKxYgTD/muo1E6KRwYCgb007txJePf28CpoHpqQAL1mo5kXlpVIBeDRY2WI5zJAAABuUlEQVQ4y32U2WLiMAxFlX1hTSkEyt4ylK2lnfP//zaOHRMypj0PRAIhX10Z5I7iuM3TNBuEp4m4dOcpN/zOSP6j8FF4aZbNdMRcWgyB/jDRrcvo6AHBWBoyoHP3Ru9UndMc86KyRFqMcvB6dXJU8dhRvYHARBFMn8VlVivdr8D2/37Ng3hXmuQZqL5YwKC2IkazOpt8p5SrxwA+jXS/kr5EUYimj1dKF9a3WdZJuV9UnkRSEcJFzvCms0R9bnbwBlsrP5TQlr/Ckxh8lnsdeAxU477yw2jpNcabuVM2kuGXtqArhhiuOggIJGc6sYo+xKpPpS7IqnaRVeQtdLSF0IqJ5WLcUBxUxS5aFLF6GglPVeXkHU80+xxLdNPyR52tX2sZmtmitl6Fuo9dq4rn4fDrw2Yd2NWLT+QBnzDVzowgFQet4HTbUigOCVa9TICRUzA1u7HrW0mD3V3cZAF0nAP8siW4PcmV2h1LAe/3NztzWh5g1hLgTL6CrY3PgPNLGvfN5TTmcxGHb+obs1ClX/KAuVF+XcJBHvJXjdKtPMnF4q5n/QJL+ZEc7F/BY3oBTEfyC91NEEmLf+inQKtP7pjbAAAAAElFTkSuQmCC"},fbc1:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAALVBMVEXTDAXTDAXTDAXTDAX////31NP53972zs375eX1xcPeRkHdRUD++fn99vb0wsBN90Q9AAAAA3RSTlPmSklSjzZ3AAAAW0lEQVQoz2NQMMYCmBiYsQkbMBhjBcNAeEc3VuEpnliFQ1wHr7DV8/Ly8iu+QKJuMZKwhQscNBMWtpqWlpZ2xAdIZC4elL6ECpMSaTu6B0tio7owruwqgE2YEQB8583/JBAWWgAAAABJRU5ErkJggg=="}}]);