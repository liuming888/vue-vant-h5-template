(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f2aea94"],{"17ef":function(a,i,s){"use strict";s.r(i);var t=function(){var a=this,i=a.$createElement,t=a._self._c||i;return t("div",{staticClass:"isBargainingList-container"},[a.finishList.length>0?t("div",{staticClass:"finish-box"},[t("div",{staticClass:"banner"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s("6815"),expression:"require('./../assets/images/bargain-finish-banner.png')"}]})]),t("ul",{staticClass:"goods-list"},a._l(a.finishList,function(i,s){return t("li",{key:s,staticClass:"goods-item"},[t("div",{staticClass:"img-box"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.spu.spu_pics[0],expression:"item.spu.spu_pics[0]"}]})]),t("div",{staticClass:"detail"},[t("p",{staticClass:"title"},[a._v(a._s(i.spu.title))]),t("div",{staticClass:"price-box"},[t("div",{staticClass:"price-item"},[t("p",{staticClass:"now-price"},[t("span",[a._v("Rp")]),a._v(a._s(i.bargain_info.bargain_ater))]),t("p",{staticClass:"real-price"},[t("span",[a._v("Rp")]),a._v(a._s(i.bargain_info.price))])]),t("div",{staticClass:"price-item"},[t("div",{staticClass:"btn",on:{click:function(s){return a.jumpPurchasePage(i.spu.spu_id)}}},[a._v("To Buy")]),t("p",{staticClass:"completed"},[a._v("completed")])])])])])}),0)]):a._e(),a.ingList.length>0?t("div",{staticClass:"ing-box"},[t("div",{staticClass:"banner"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s("1b4e"),expression:"require('./../assets/images/bargin-active-banner.png')"}]})]),t("ul",{staticClass:"goods-list"},a._l(a.ingList,function(i,s){return t("li",{key:s,staticClass:"goods-item"},[t("div",{staticClass:"img-box"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.spu.spu_pics[0],expression:"item.spu.spu_pics[0]"}]})]),t("div",{staticClass:"detail"},[t("p",{staticClass:"title"},[a._v(a._s(i.spu.title))]),t("count-down",{attrs:{dateDiff:i.spu.expire_ttl}}),t("div",{staticClass:"price-box go-on-price-box"},[t("div",{staticClass:"price-item"},[t("div",{staticClass:"msg-box"},[a._v("cut Rp "+a._s(i.bargain_info.bargain_amount))]),t("p",{staticClass:"now-price"},[t("span",[a._v("Rp")]),a._v(a._s(i.bargain_info.bargain_ater))]),t("p",{staticClass:"real-price"},[t("span",[a._v("Rp")]),a._v(a._s(i.bargain_info.price))])]),t("div",{staticClass:"price-item go-on-item-btn"},[t("div",{staticClass:"btn go-on",staticStyle:{margin:"0"},on:{click:function(s){return a.jumpCurBargainPage(i.bargain_info.spu_id,i.bargain_info.bargain_id)}}},[a._v("Go On")]),t("div",{directives:[{name:"show",rawName:"v-show",value:1==i.bargain_info.can_buy,expression:"item.bargain_info.can_buy==1"}],staticClass:"btn",on:{click:function(s){return a.jumpPurchasePage(i.spu.spu_id)}}},[a._v("To Buy")])])]),t("div",{staticClass:"cut-schedule"},[t("span",{staticClass:"cut"},[a._v("cut "),t("span",[a._v(a._s(i.bargain_info.bargain_rate)+"%")])]),t("div",{staticClass:"schedule"},[t("div",{staticClass:"active",style:{width:i.bargain_info.bargain_rate+"%"}})])])],1)])}),0)]):a._e()])},n=[],e=s("0348"),r=s("3f9a"),p=s("cd26"),o=s("31e7"),g={components:{aCommodityThatIsBeingBargained:r["a"],countDown:p["a"]},data(){return{finishList:[],ingList:[]}},created(){this.getMyBargainInfo()},methods:{getMyBargainInfo(){var a=this;return Object(e["a"])(function*(){const i={page_size:10,page_num:1};try{const t=yield Object(o["d"])(i);a.finishList=t.data.filter(a=>{return 1===a.bargain_info.can_buy&&2===a.bargain_info.status}),a.ingList=t.data.filter(a=>1===a.bargain_info.status)}catch(s){}})()},jumpCurBargainPage(a,i){this.$router.push({path:"/bargain",query:{spuId:a,bargainId:i}})},jumpPurchasePage(a){this.$router.push({path:"/purchase",query:{spuId:a}})}}},c=g,u=(s("6bfa"),s("17cc")),m=Object(u["a"])(c,t,n,!1,null,"1ea0b635",null);i["default"]=m.exports},"1b4e":function(a,i,s){a.exports=s.p+"img/bargin-active-banner.598b7d3f.png"},"31e7":function(a,i,s){"use strict";s.d(i,"b",function(){return n}),s.d(i,"c",function(){return e}),s.d(i,"a",function(){return r}),s.d(i,"d",function(){return p});var t=s("007a");function n(a){let i=a.bargain_id;return t["a"].post({url:"/api/v1/bargain/get_bargain_info",data:{bargain_id:i}})}function e(a){let i=a.bargain_id,s=a.page_size,n=a.page_num;return t["a"].post({url:"/api/v1/bargain/get_help_bargain_list",data:{bargain_id:i,page_size:s,page_num:n}})}function r(a){let i=a.bargain_id,s=a.spu_id;return t["a"].post({url:"/api/v1/bargain/chop",data:{spu_id:s,bargain_id:i}})}function p(a){let i=a.page_size,s=void 0===i?10:i,n=a.page_num,e=void 0===n?1:n;return t["a"].post({url:"/api/v1/spu/get_mybargain_spus",data:{page_size:s,page_num:e}})}},"3f9a":function(a,i,s){"use strict";var t=function(){var a=this,i=a.$createElement,t=a._self._c||i;return t("div",[t("div",{staticClass:"freebing-container"},[t("div",{staticClass:"good-box"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.spuBargainItem.spu_pics[0],expression:"spuBargainItem.spu_pics[0]"}],staticClass:"good-img"}),t("div",{staticClass:"good-detail"},[t("p",{staticClass:"good-title"},[a._v(a._s(a.spuBargainItem.title))]),t("count-down",{attrs:{dateDiff:a.spuBargainItem.expire_ttl}}),t("div",{staticClass:"left-box"},[t("div",{staticClass:"num-box"},[t("span",{staticClass:"rp-box"},[a._v("Rp"+a._s(a.spuBargainItem.bargain_amount))]),t("span",{staticClass:"compeled"},[a._v("compeled")])]),t("div",{staticClass:"progress"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s("ae4a"),expression:"require('@/assets/images/progress-bar.png')"}],attrs:{width:a.spuBargainItem.bargain_rate+"%"}}),t("div",{staticClass:"progress-content"},[t("span",[a._v("has been cut "+a._s(a.spuBargainItem.bargain_amount))]),t("span",[a._v(a._s(a.spuBargainItem.bargain_rate)+"%")])])])]),t("div",{staticClass:"goods-control"},[1==a.spuBargainItem.status?t("a",{staticClass:"go-on-btn",class:{"r-b":2==a.spuBargainItem.can_buy},attrs:{href:"javascrip:;"},on:{click:a.jumpBargain}},[a._v("\n            Go On\n          ")]):a._e(),1==a.spuBargainItem.can_buy?t("a",{staticClass:"buy-btn r-b",attrs:{href:"javascrip:;"},on:{click:a.jumpPurchasePage}},[a._v("Buy")]):a._e()])],1)])])])},n=[],e=s("cd26"),r=(s("5616"),{name:"aCommodityThatIsBeingBargained",components:{countDown:e["a"]},props:{spuBargainItem:{type:Object,default(){return{spu_id:1,title:"mock",bargain_rate:1,bargain_coin:"mock",expire_time:"mock",bargain_id:"mock"}}}},data(){return{expirationDat:{h:"00",p:"00",m:"00"},dialogs:{sharingFriends:{show:!1}},shareInfo:{}}},created(){this.init()},methods:{init(){this.refreshTime()},jumpPurchasePage(){const a=this.spuBargainItem,i=a.spu_id,s=a.bargain_id,t=a.order_no;this.$router.push({path:"/purchase",query:{spuId:i,bargainId:s,orderNo:t}})},refreshTime(){let a=this.$util.expiration(this.spuBargainItem.expire_time);if(!a)return;this.expirationDat=a;const i=setInterval(()=>{this.expirationDat=this.$util.expiration(this.spuBargainItem.expire_time)},1e3);this.$once("hook:beforeDestroy",()=>{clearInterval(i)})},jumpBargain(){this.$router.push({path:"/bargain",query:{spuId:this.spuBargainItem.spu_id,bargainId:this.spuBargainItem.bargain_id}})}}}),p=r,o=(s("4d5d"),s("17cc")),g=Object(o["a"])(p,t,n,!1,null,"604b59b4",null);i["a"]=g.exports},"4d5d":function(a,i,s){"use strict";var t=s("e4ab"),n=s.n(t);n.a},6815:function(a,i,s){a.exports=s.p+"img/bargain-finish-banner.1fe62a88.png"},"6bfa":function(a,i,s){"use strict";var t=s("977a"),n=s.n(t);n.a},"977a":function(a,i,s){},ae4a:function(a,i){a.exports="data:image/png;base64,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"},e4ab:function(a,i,s){}}]);