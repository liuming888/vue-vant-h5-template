(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5fc0cfcc"],{"196a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAOCAMAAABHGGlTAAAA0lBMVEX///9vyv//b29yy/+C0f91zP/9/v//+Pj/cnL//Pz/dXV90P/1/P//8fGH0/95zv/5/f/y+v+M1f///v7u+f/r+P/n9///6+v/5OT/g4Pg9P//gIDb8v//9fX/7u7/eXnV8P/C6f+05P+U2P//1NT/t7f/h4e75/+j3f//v7//sLD/lJT/ior/fX3k9f//4OD/mZnM7f/I6/+n3/+Z2v//6Oj/zs7/ysr/xcX/oqL/jY2t4f+e2///2tr/pqb/fHyQ1v//np7/kJDQ7v//3d3/qqoIpUXXAAAB8ElEQVRo3u3ax3ICMQyAYYd0NpCQEHrvvfde3/+VUpgJSDPS2LSFrHX2fAf/R0lsxuW8AWN4BDGOjA1M2SeYcSP3jnQjyA22WfcOuZ+k60eul3M/pV0vcv2s60Gu0029bAehm4mwriHtlpHr4NwKct9d1Esfcku8+yrtTqE7YN0Adl+UKrulK0cuorJLV+YrV6PIDau4M9JdIXfBuqF76CZJd2yHbvFRyX0zo3JAunJVVz5ZZXU3htwW6aaQWzPFXd5Cd/SgK19O5ZG0Oz9S5c4Tcp85t47cnLTbZ92GtNtF7kTJbZJuT1e2QmUlN34DZyhI1wZn/XEcN4/cAutmkZtgXJXKXV35Siufxk0jNy24SSA3e273o2Cz6cpWqAwmz7pD5MaP5DYhe0u7a8g+9Tj2AbsN6uXz5BsTurIFKu+6XdbNIbdOuv0zuR3WHSF3SbrzH03oyhaoLOu+taB7H6NePtaga0+Z4iaRGyLd4i8ndGULVN66Y859OZU7g+5rgHoZXkA3WmXdd2l3sPGErnxI5dV1VJZzXcg1KuRqvQTdqY9E1Vb2JaWVvfopgNj5NenKUV35Kir/78MMhVOAv5W9MLNyRlc+vLKTqax08GGYevChfphh7HGYIXTlvSs7rqbyxr3ww4zqiVb2K/vW/AI1Ynd0p3ORiwAAAABJRU5ErkJggg=="},"19f4":function(t,e,i){"use strict";var a=i("b25f");i.n(a).a},"31e7":function(t,e,i){"use strict";i.d(e,"c",function(){return o}),i.d(e,"d",function(){return n}),i.d(e,"a",function(){return r}),i.d(e,"e",function(){return s}),i.d(e,"b",function(){return d});var a=i("007a");function o(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/bargain/get_bargain_info",data:t})}function n(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/bargain/get_help_bargain_list",data:t})}function r(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/bargain/chop",data:t})}function s(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/spu/get_mybargain_spus",data:t})}function d(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/bargain/chop_share",data:t})}},"33b1":function(t,e,i){"use strict";i.d(e,"c",function(){return o}),i.d(e,"d",function(){return n}),i.d(e,"e",function(){return r}),i.d(e,"b",function(){return s}),i.d(e,"a",function(){return d});var a=i("007a");function o(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/order/create_order",data:t})}function n(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/order/get_order_list",data:t})}function r(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/order/repaid_order",data:t})}function s(){return a.a.post({url:"/api/v1/pay/get_pay_type"})}function d(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/order/get_order_by_bargainId",data:t})}},"4bd0":function(t,e,i){(t.exports=i("2350")(!1)).push([t.i,".dialogWaitPayment-container[data-v-7fc74c93]{position:fixed;display:-webkit-box;display:-webkit-flex;display:flex;top:0;left:0;width:100%;height:100%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:99999}.dialogWaitPayment-container>.bg[data-v-7fc74c93]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.4)}.dialogWaitPayment-container>.dialog-container[data-v-7fc74c93]{position:relative;width:100%;margin:0 1.06667rem;background:#fff;border-radius:.26667rem;text-align:center}.dialogWaitPayment-container>.dialog-container>.content[data-v-7fc74c93]{padding:.53333rem;height:2.88rem;box-sizing:border-box;padding-top:1.28rem;color:#323232;font-size:.42667rem}.dialogWaitPayment-container>.dialog-container>.content>span[data-v-7fc74c93]{font-weight:700}.dialogWaitPayment-container>.dialog-container>.footer[data-v-7fc74c93]{height:1.33333rem;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:.42667rem}.dialogWaitPayment-container>.dialog-container>.footer>div[data-v-7fc74c93]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.dialogWaitPayment-container>.dialog-container>.footer>.cancel[data-v-7fc74c93]{color:#888}.dialogWaitPayment-container>.dialog-container>.footer>.ok[data-v-7fc74c93]{color:#d30c05}.dialogWaitPayment-container>.dialog-container .close-icon[data-v-7fc74c93]{width:.82667rem;height:.82667rem;border-radius:50%;position:absolute;right:-.26667rem;top:-.26667rem}",""])},5918:function(t,e,i){"use strict";i.r(e),i("ac6a"),i("e17f");var a=i("2241"),o=i("be94"),n=(i("a481"),i("1da1")),r=(i("c3a6"),i("ad06")),s=i("f390"),d=i("01cb"),c=i("4107"),l={name:"dialogWaitPayment",props:{dialogVisible:{type:Object,default:()=>({show:!1})}},methods:{completeOk(){this.$emit("playfail"),this.$emit("update:dialogVisible",{show:!1})},goContinue(){this.$emit("continuePlay"),this.$emit("update:dialogVisible",{show:!1})}}},p=(i("84f7"),i("2877")),u=Object(p.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogVisible.show,expression:"dialogVisible.show"}],staticClass:"dialogWaitPayment-container"},[a("div",{staticClass:"bg"}),a("div",{staticClass:"dialog-container"},[a("img",{staticClass:"close-icon",attrs:{src:i("033c")},on:{click:function(e){return t.$emit("update:dialogVisible",{show:!1})}}}),t._m(0),a("div",{staticClass:"footer"},[a("div",{staticClass:"cancel",on:{click:t.goContinue}},[t._v("Continue")]),a("div",{staticClass:"ok",on:{click:t.completeOk}},[t._v("Complete")])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("span",[this._v("Waiting for buyer payment~")])])}],!1,null,"7fc74c93",null).exports,g=i("ad63"),m=i("996b"),f=i("33b1"),b=i("3007"),y=i("5de4"),h=i("31e7"),v={mixins:[g.a],components:{DialogDefault:c.a,shippingAddress:s.default,dialogPostAddAddress:d.a,dialogWaitPayment:u,[r.a.name]:r.a},data:()=>({spu:{},specs:[],bargain_info:{},bargain_user_info:{},paly_id:1,showShippingAddressPage:!1,showAddressDialog:{show:!1},showWaitPaymentDialog:{show:!1},myAddress:{},info:{content:"Konfirmasikan untuk melunasi?",cancleText:"Menyerah",okText:"Terus bayar"},dialogVisible:!1,exchangeRateDat:{currency_code:"IDR",exchange_rate:1},payTypes:[],currentType:""}),created(){this.init(),this.getMyAddressInfo(),this.curSpuSpecs(),this.initExchangeRate(),"failed"===this.$route.query.payment&&(this.dialogVisible=!0)},mounted(){document.title="Check out",fbq("track","AddToCart")},methods:{init(){var t=this;return Object(n.a)(function*(){t.initSpuInfo(),t.initBargainInfo(),t.getMyAddressInfo(),t.curSpuSpecs(),t.initExchangeRate(),t.getPayType(),t.initOrderByBargainIdDat(t.$route.query.bargainId)})()},initOrderByBargainIdDat(t){var e=this;return Object(n.a)(function*(){let i=yield Object(f.a)({bargain_id:t});i&&i.data&&i.data.can_pay&&e.$router.replace({query:Object(o.a)({},e.$route.query,{orderNo:i.data.order_no})})})()},getPayType(){var t=this;return Object(n.a)(function*(){const e=yield Object(f.b)();t.payTypes=e.data.pay_types,t.currentType=t.payTypes[0],t.$gaSend({eventCategory:"支付_选择支付方式",eventAction:"点击"})})()},handlePayType(t){this.currentType=t},initSpuInfo(){var t=this;return Object(n.a)(function*(){let e=yield Object(m.b)({spu_id:t.$route.query.spuId});e&&e.data&&(t.spu=e.data.spu)})()},initBargainInfo(){var t=this;return Object(n.a)(function*(){let e=yield Object(h.c)({bargain_id:t.$route.query.bargainId});if(e&&e.data){const i=e.data,a=i.bargain_info,o=i.bargain_user_info;t.bargain_info=a,t.bargain_user_info=o}})()},initExchangeRate(){var t=this;return Object(n.a)(function*(){let e=yield Object(y.b)({currency_code:"IDR"});e&&e.data&&(t.exchangeRateDat=e.data)})()},getMyAddressInfo(){var t=this;return Object(n.a)(function*(){const e=yield Object(b.d)({page_size:10,page_num:1,is_default:1});e&&e.data&&(t.myAddress=e.data.filter(t=>1===t.is_default)[0])})()},curSpuSpecs(){var t=this;return Object(n.a)(function*(){let e=yield Object(m.e)({spu_id:t.$route.query.spuId});e&&e.data&&(t.specs=e.data.map(t=>(t.id=t.spu_spec_items[0].id,t)))})()},goPaly(){var t=this;return Object(n.a)(function*(){if(t.dialogVisible=!1,t.bargain_info.bargain_after<t.currentType.min_amount)return void t.$toast("The payment amount is too small, please try again by alternative payment method.");if(fbq("track","InitiateCheckout"),!t.myAddress.id)return void a.a.alert({message:"Please choose a shipping address",confirmButtonText:"ok"});let e={address_id:t.myAddress.id,spu_id:t.spu.spu_id,pay_type:t.currentType.type,pay_product:t.currentType.product,spu_name:t.spu.title},i="";if(t.specs.forEach(t=>{i=i+t.spec_name+":"+t.spu_spec_items.find(e=>e.id==t.id).item_name+" "}),i&&(e.spu_spec_items=i),t.$route.query.bargainId&&(e.bargain_id=t.$route.query.bargainId),t.$route.query.orderNo)t.goRepaidPay();else{let i=yield Object(f.c)(e);if(i&&i.data){fbq("track","Purchase",{value:0,currency:"USD"});let e=i.data,a=e.pay_url;e.order_no,t.showWaitPaymentDialog.show=!0,t.mx_showLoad(),window.location.href=a}}})()},goRepaidPay(){var t=this;return Object(n.a)(function*(){if(t.bargain_info.bargain_after<t.currentType.min_amount)return void t.$toast("The payment amount is too small, please try again by alternative payment method.");let e=yield Object(f.e)({order_no:t.$route.query.orderNo,spu_name:t.spu.title,pay_type:t.currentType.type,pay_product:t.currentType.product});if(e&&e.data){let i=e.data,a=i.pay_url;i.order_no,t.showWaitPaymentDialog.show=!0,t.mx_showLoad(),window.location.href=a}})()},goShippingAddressList(){this.showShippingAddressPage=!0}},watch:{showShippingAddressPage(t){t||this.getMyAddressInfo()},"showAddressDialog.show"(t){t||this.getMyAddressInfo()},dialogVisible(t){t&&this.$gaSend({eventCategory:"支付失败页面",eventAction:"页面展示"})}}},A=(i("19f4"),Object(p.a)(v,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"purchase-container"},[a("div",{staticClass:"top-info"},[a("div",{staticClass:"info-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i("dd20"),expression:"require('@/assets/images/btn-1.png')"}],staticClass:"head-portrait"}),a("span",{staticClass:"info-txt"},[t._v("Michelle got a freebie just now")])])]),t.myAddress&&t.myAddress.id?a("div",{staticClass:"y-shipping-address",on:{click:t.goShippingAddressList}},[a("img",{staticClass:"position",attrs:{src:i("edde")}}),a("div",{staticClass:"shipping-address-content"},[a("div",{staticClass:"top-box"},[a("span",{staticClass:"Receiver"},[t._v("\n          Receiver: "+t._s(t.myAddress.username)+"\n        ")]),a("span",{staticClass:"phone"},[t._v(t._s(t.myAddress.telephone))])]),a("div",{staticClass:"receiving-address"},[t._v("\n        Receiving address:\n        "),t._v(t._s(t.myAddress.address_one)+","+t._s(t.myAddress.city)+","+t._s(t.myAddress.region)+","+t._s(t.myAddress.country)+"\n      ")])]),a("van-icon",{staticStyle:{"font-size":"22px",color:"#888888"},attrs:{name:"arrow"}})],1):a("div",{staticClass:"no-shipping-address",on:{click:function(e){t.showAddressDialog.show=!0}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i("fbc1"),expression:"require('@/assets/images/add.png')"}],staticClass:"add-icon"}),a("div",{staticClass:"txt"},[t._v("Add shipping address")]),a("van-icon",{attrs:{name:"arrow"}})],1),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i("196a"),expression:"require('@/assets/images/Addressmodification.png')"}],staticStyle:{width:"100vw",height:"auto","margin-bottom":"50px"}}),a("div",{staticClass:"commodity-info"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.spu.spu_pics&&t.spu.spu_pics[0]||i("fbc1"),expression:"spu.spu_pics&&spu.spu_pics[0]||require('@/assets/images/add.png')"}],staticClass:"commodity-img"}),a("div",{staticClass:"commodity-content"},[a("div",{staticClass:"commodity-tit"},[t._v("\n        "+t._s(t.spu.title)+"\n      ")]),a("div",{staticClass:"type-num"}),a("div",{staticClass:"price-quantity"},[a("span",{staticClass:"current-price"},[a("b",{staticStyle:{"font-size":"1px"}},[t._v("Rp")]),t._v("\n          "+t._s(t.bargain_info.bargain_after)+"\n        ")]),a("span",{staticClass:"original-price"},[t._v("\n          Rp"+t._s(t.spu.original_price)+"\n        ")]),a("span",{staticClass:"commodity-num"},[t._v("\n          x1\n        ")])])])]),a("ul",{staticClass:"commodity-type"},t._l(t.specs,function(e,i){return a("li",{key:i,staticClass:"commodity-item"},[a("p",{staticClass:"tit"},[t._v(t._s(e.spec_name))]),a("div",{staticClass:"type-box"},t._l(e.spu_spec_items,function(i,o){return a("div",{key:o,staticClass:"type-item-box",class:{cur:i.id==e.id},on:{click:function(t){e.id=i.id}}},[t._v("\n          "+t._s(i.item_name)+"\n        ")])}),0)])}),0),a("ul",{staticClass:"paly-type-list"},t._l(t.payTypes,function(e){return a("li",{key:e.id,staticClass:"paly-item",on:{click:function(i){return t.handlePayType(e)}}},[a("span",{staticClass:"paly-txt"},[t._v(t._s(e.name))]),a("img",{staticClass:"paly-select-icon",attrs:{src:t.currentType.id===e.id?i("cf9d"):i("0eb9")}})])}),0),a("div",{staticClass:"down-box"},[a("div",{staticClass:"left-box"},[a("div",{staticClass:"l-t-box"},[t._v("\n        Actual payment:\n        "),a("div",{staticClass:"num-box"},[a("b",[t._v("Rp")]),t._v(t._s(t.bargain_info.bargain_after)+"\n        ")])]),a("div",{staticClass:"l-d-box"},[t._v("About $"+t._s((t.bargain_info.bargain_after/t.exchangeRateDat.exchange_rate).toFixed(2)))])]),a("div",{staticClass:"pay-immediately",on:{click:t.goPaly}},[t._v("\n      Place Oder\n    ")])]),t.showShippingAddressPage?a("div",{staticClass:"dialog-box",on:{click:function(e){e.stopPropagation(),t.abc=1}}},[a("shipping-address",{attrs:{showAddressPage:t.showShippingAddressPage},on:{"update:showAddressPage":function(e){t.showShippingAddressPage=e},"update:show-address-page":function(e){t.showShippingAddressPage=e}}})],1):t._e(),a("dialog-post-add-address",{attrs:{dialogVisible:t.showAddressDialog,showType:"add"},on:{"update:dialogVisible":function(e){t.showAddressDialog=e},"update:dialog-visible":function(e){t.showAddressDialog=e}}}),a("dialog-default",{attrs:{info:t.info,dialogVisible:t.dialogVisible},on:{"update:dialogVisible":function(e){t.dialogVisible=e},"update:dialog-visible":function(e){t.dialogVisible=e},ok:t.goRepaidPay}},[a("div",{staticClass:"pay-error",attrs:{slot:"content"},slot:"content"},[a("p",[t._v("Pesanan pembayaran akan kedaluwarsa dalam waktu dekat, harap membayar sesegera mungkin")])])])],1)},[],!1,null,"b381433a",null));e.default=A.exports},"5de4":function(t,e,i){"use strict";i.d(e,"e",function(){return o}),i.d(e,"a",function(){return n}),i.d(e,"c",function(){return r}),i.d(e,"b",function(){return s}),i.d(e,"d",function(){return d});var a=i("007a");function o(){return a.a.post({url:"/api/v1/withdraw/get_withdraw_info"})}function n(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/withdraw/apply_withdraw",data:t})}function r(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/fund/get_fund_record_list",data:t})}function s(t){let e=t.currency_code,i=void 0===e?"IDR":e;return a.a.post({url:"/api/v1/currency/get_exchange_rate",data:{currency_code:i}})}function d(){return a.a.get({url:"/api/v1/withdraw/get_operator_list"})}},"84f7":function(t,e,i){"use strict";var a=i("a5df");i.n(a).a},"996b":function(t,e,i){"use strict";i.d(e,"d",function(){return o}),i.d(e,"b",function(){return n}),i.d(e,"a",function(){return r}),i.d(e,"e",function(){return s}),i.d(e,"c",function(){return d});var a=i("007a");function o(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/spu/get_mybargain_spus",data:t})}function n(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/spu/get_info",data:t})}function r(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/spu/get_bargain_spus",data:t})}function s(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.get({url:"/api/v1/spu/get_spu_specs",data:t})}function d(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.post({url:"/api/v1/spu/get_my_bargain_order_spus",data:t})}},a5df:function(t,e,i){var a=i("4bd0");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,i("499e").default)("d9a5a11e",a,!0,{sourceMap:!1,shadowMode:!1})},ad63:function(t,e,i){"use strict";e.a={methods:{mx_showLoad(){this.$loaddingNum++,this.$toast.loading({mask:!0,duration:0,forbidClick:!0})},mx_closeLoad(){this.$loaddingNum--,this.$loaddingNum<=0&&this.$toast.clear()}}}},b25f:function(t,e,i){var a=i("fb8d");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,i("499e").default)("03a4f15e",a,!0,{sourceMap:!1,shadowMode:!1})},dd20:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAqFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////2pgD2ogD//Pf3rBD/+/P71YP3sBn96Lv2qQf6x1z4tyz4tCX++Oj6zXD+8tr+78/968b84qz+9uT84KT70Hf++e383Z372pT6y2b4uTX85LD72Iz4wEf5vD04lUmzAAAAGXRSTlMA+1YF68SbENbR49m3lX8xLBerZkDKZ0Ktzp3axgAAAfFJREFUOMudldl2okAQhptdXHGJCVVNs4MgEpfRvP+bTYeTGamW8czxv2w+y9qL9WU4i/Vs6o5Nc+xOZ+uFY7B/aKnb1sTU/E6aObFsfTkIOrrt+opcW3ceSW8+8gc0mnsKaGxWmj8obfVuEFK3CElYSzf65Jv/RG931thY5BMvCkEerM0f1ltRK7uyjOnL6ic2Z674GQO2DfV37nSormSJHwG/wlrwfs70rkY2NVqVOUAS5WnVN2svZUzUqFanAQIgYvBLI2YN5lCjRZpIMsoiDPacmHXYwiJ+xhFCkoWHMMsI6lsLtp70Hz7DADE/Co3XYUzQyZrNTPL/rUQvdfcrQTwzZ2xKXZVWIWjFQCtMmavkVKIQtfEj7LIxfaguCFKXsOYKOmYmfRDXHDv4a6+wpkQV9pSBFGKmsCZ1oIs8PueAkr3tFAdc/0G7QxoByMrSsO7JInAaACYnTpNFS6D9fD1kEr0KWgJaWFE1/C965P3CbpV2Ka7pd+81aQIYxLRdlCZsyuDSnk4yLITbjjah0tpFmSBEEUrle0FbWxmYz/AbA6k8FHRg1DHk9TkPEoDgRms10h+HmzdVfAY4V3xouJn34RMdEENamA+PLCK6XbiyiP5/vb2yNCX7/mwVv7Tgn5+N144RPXHb+4nbKifuNwr3iwuuvmWyAAAAAElFTkSuQmCC"},edde:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAMAAACo9wirAAAAnFBMVEUAAAAyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjJcZyEUAAAAM3RSTlMA7+rOljK0S9bKxYgTD/muo1E6KRwYCgb007txJePf28CpoHpqQAL1mo5kXlpVIBeDRY2WI5zJAAABuUlEQVQ4y32U2WLiMAxFlX1hTSkEyt4ylK2lnfP//zaOHRMypj0PRAIhX10Z5I7iuM3TNBuEp4m4dOcpN/zOSP6j8FF4aZbNdMRcWgyB/jDRrcvo6AHBWBoyoHP3Ru9UndMc86KyRFqMcvB6dXJU8dhRvYHARBFMn8VlVivdr8D2/37Ng3hXmuQZqL5YwKC2IkazOpt8p5SrxwA+jXS/kr5EUYimj1dKF9a3WdZJuV9UnkRSEcJFzvCms0R9bnbwBlsrP5TQlr/Ckxh8lnsdeAxU477yw2jpNcabuVM2kuGXtqArhhiuOggIJGc6sYo+xKpPpS7IqnaRVeQtdLSF0IqJ5WLcUBxUxS5aFLF6GglPVeXkHU80+xxLdNPyR52tX2sZmtmitl6Fuo9dq4rn4fDrw2Yd2NWLT+QBnzDVzowgFQet4HTbUigOCVa9TICRUzA1u7HrW0mD3V3cZAF0nAP8siW4PcmV2h1LAe/3NztzWh5g1hLgTL6CrY3PgPNLGvfN5TTmcxGHb+obs1ClX/KAuVF+XcJBHvJXjdKtPMnF4q5n/QJL+ZEc7F/BY3oBTEfyC91NEEmLf+inQKtP7pjbAAAAAElFTkSuQmCC"},fb8d:function(t,e,i){(t.exports=i("2350")(!1)).push([t.i,".purchase-container[data-v-b381433a]{width:100vw;background:#f9f9f9;min-height:calc(100vh - 1.24rem);box-sizing:border-box;padding-bottom:1.90667rem;overflow:hidden}.top-info[data-v-b381433a]{height:.64rem;padding:0 .4rem;box-align:border-box;background:#e7d4d4}.top-info[data-v-b381433a],.top-info .info-box[data-v-b381433a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.top-info .info-box[data-v-b381433a]{font-size:.26667rem;font-weight:400;color:#33201f}.top-info .info-box .head-portrait[data-v-b381433a]{width:.50667rem;height:.50667rem;margin-right:.13333rem}.no-shipping-address[data-v-b381433a]{width:100%;height:1.24rem;padding:0 .4rem;box-align:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;background:#fff}.no-shipping-address .add-icon[data-v-b381433a]{width:.58667rem;height:.58667rem;margin-right:.26667rem}.no-shipping-address .txt[data-v-b381433a]{font-size:.37333rem;font-weight:400;color:#323232;margin-right:2.6rem}.no-shipping-address .van-icon[data-v-b381433a]{position:absolute;right:1.33333rem;top:.48rem}.y-shipping-address[data-v-b381433a]{width:100%;height:2.25333rem;background:#fff;padding:.4rem;box-align:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.y-shipping-address .position[data-v-b381433a]{width:.42667rem;height:.53333rem}.y-shipping-address .shipping-address-content[data-v-b381433a]{width:7.86667rem;height:100%;padding:.66667rem .4rem 0 .26667rem;box-align:border-box;font-size:.37333rem;font-weight:400;color:#323232}.y-shipping-address .shipping-address-content .top-box[data-v-b381433a]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:.26667rem}.y-shipping-address .shipping-address-content .top-box .phone[data-v-b381433a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.commodity-info[data-v-b381433a]{background:#f9f9f9;width:100%;height:3.17333rem;padding:.17333rem .4rem;box-align:border-box;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:.41333rem}.commodity-info .commodity-img[data-v-b381433a]{width:2.93333rem;height:auto;margin-right:.32rem}.commodity-info .commodity-content[data-v-b381433a]{position:relative}.commodity-info .commodity-content .commodity-tit[data-v-b381433a]{padding-top:.2rem;width:6rem;font-size:.37333rem;font-weight:400;color:#323232;line-height:.49333rem;margin-bottom:.13333rem}.commodity-info .commodity-content .type-num[data-v-b381433a]{height:.25333rem;font-size:.32rem;font-weight:400;color:#888;margin-bottom:.72rem}.commodity-info .commodity-content .price-quantity[data-v-b381433a]{width:100%;position:absolute;bottom:.13333rem;left:0;display:-webkit-box;display:-webkit-flex;display:flex}.commodity-info .commodity-content .price-quantity .current-price[data-v-b381433a]{font-size:.56rem;font-weight:500;color:#d30c05;line-height:.49333rem;margin-right:.28rem}.commodity-info .commodity-content .price-quantity .original-price[data-v-b381433a]{font-size:.32rem;font-weight:500;text-decoration:line-through;color:#888}.commodity-info .commodity-content .price-quantity .commodity-num[data-v-b381433a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.commodity-type[data-v-b381433a]{width:100%;padding:0 .4rem;box-sizing:border-box;background:#fff;margin-bottom:.26667rem}.commodity-type .commodity-item[data-v-b381433a]{width:100%;padding-top:.41333rem;margin-bottom:.6rem}.commodity-type .commodity-item .tit[data-v-b381433a]{font-size:.37333rem;font-weight:400;color:#323232}.commodity-type .commodity-item .type-box[data-v-b381433a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.commodity-type .commodity-item .type-box .type-item-box[data-v-b381433a]{margin:.26667rem .26667rem 0 0;height:.85333rem;text-align:center;line-height:.85333rem;background:#f5f5f5;border-radius:.42667rem;font-size:.32rem;font-weight:400;color:#323232;border:1px solid #f5f5f5;padding:0 .13333rem}.commodity-type .commodity-item .type-box .type-item-box.cur[data-v-b381433a]{background:#fffbfb;border:1px solid #d30c05;color:#d30c05}.paly-type-list[data-v-b381433a]{width:100%;padding:0 .4rem;box-align:border-box;font-size:.37333rem;font-weight:400;color:#323232;background:#fff}.paly-type-list .paly-item[data-v-b381433a]{width:100%;height:1.22667rem;line-height:1.22667rem;overflow:hidden}.paly-type-list .paly-item[data-v-b381433a]:last-of-type{margin-bottom:0;margin-bottom:.82667rem}.paly-type-list .paly-item .paly-select-icon[data-v-b381433a]{float:right;width:.4rem;height:.4rem;position:relative;top:.48rem;left:-.08rem}.down-box[data-v-b381433a]{width:100vw;height:1.30667rem;position:fixed;bottom:0;left:0;z-index:10;background:pink;display:-webkit-box;display:-webkit-flex;display:flex}.down-box .left-box[data-v-b381433a]{width:6.2rem;background:#fff;padding-left:.4rem;box-sizing:border-box;font-size:.32rem}.down-box .left-box .l-t-box[data-v-b381433a]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;line-height:.66667rem;margin-bottom:.13333rem}.down-box .left-box .l-t-box .num-box[data-v-b381433a]{margin-left:.13333rem;font-size:.32rem;color:#d30c05;vertical-align:top;font-weight:500}.down-box .left-box .l-t-box .num-box b[data-v-b381433a]{font-size:.26667rem;font-weight:400}.down-box .left-box .l-d-box[data-v-b381433a]{font-size:.29333rem;font-weight:400;color:#888}.down-box .pay-immediately[data-v-b381433a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:1.30667rem;line-height:1.30667rem;text-align:center;background:-webkit-linear-gradient(left,#d30c05,#f64e01);background:linear-gradient(90deg,#d30c05,#f64e01);font-size:.42667rem;font-weight:400;color:#fff}.dialog-box[data-v-b381433a]{width:100vw;height:100vh;background:#fff;position:fixed;z-index:99;left:0;top:0}.pay-error[data-v-b381433a]{margin-top:.46667rem;font-size:.32rem;color:#888;line-height:.4rem}.receiving-address[data-v-b381433a]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}",""])},fbc1:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAALVBMVEXTDAXTDAXTDAXTDAX////31NP53972zs375eX1xcPeRkHdRUD++fn99vb0wsBN90Q9AAAAA3RSTlPmSklSjzZ3AAAAW0lEQVQoz2NQMMYCmBiYsQkbMBhjBcNAeEc3VuEpnliFQ1wHr7DV8/Ly8iu+QKJuMZKwhQscNBMWtpqWlpZ2xAdIZC4elL6ECpMSaTu6B0tio7owruwqgE2YEQB8583/JBAWWgAAAABJRU5ErkJggg=="}}]);