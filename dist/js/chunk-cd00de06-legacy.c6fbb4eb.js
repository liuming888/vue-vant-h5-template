(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd00de06"],{"3f9a":function(a,t,i){"use strict";i.r(t);var s=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("div",{staticClass:"freebing-container"},[s("div",{staticClass:"good-box"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.spuBargainItem.spu_pics[0],expression:"spuBargainItem.spu_pics[0]"}],staticClass:"good-img"}),s("div",{staticClass:"good-detail"},[s("p",{staticClass:"good-title"},[a._v(a._s(a.spuBargainItem.title))]),s("count-down",{attrs:{dateDiff:a.spuBargainItem.expire_ttl}}),s("div",{staticClass:"left-box"},[s("div",{staticClass:"num-box"},[s("span",{staticClass:"rp-box"},[a._v("Rp"+a._s(a.spuBargainItem.bargain_amount))]),s("span",{staticClass:"compeled"},[a._v("completed")])]),s("div",{staticClass:"progress"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i("ae4a"),expression:"require('@/assets/images/progress-bar.png')"}],attrs:{width:a.spuBargainItem.bargain_rate+"%"}}),s("div",{staticClass:"progress-content"},[s("span",[a._v("has been cut "+a._s(a.spuBargainItem.bargain_amount))]),s("span",[a._v(a._s(a.spuBargainItem.bargain_rate)+"%")])])])]),s("div",{staticClass:"goods-control"},[1==a.spuBargainItem.status?s("a",{staticClass:"go-on-btn",class:{"r-b":2==a.spuBargainItem.can_buy},attrs:{href:"javascrip:;"},on:{click:a.jumpBargain}},[a._v("\n            Go On\n          ")]):a._e(),1==a.spuBargainItem.can_buy?s("a",{staticClass:"buy-btn r-b",attrs:{href:"javascrip:;"},on:{click:a.jumpPurchasePage}},[a._v("Buy")]):a._e()])],1)])])])},n=[],r=i("cd26"),e=(i("5616"),{name:"aCommodityThatIsBeingBargained",components:{countDown:r["default"]},props:{spuBargainItem:{type:Object,default:function(){return{spu_id:1,title:"mock",bargain_rate:1,bargain_coin:"mock",expire_time:"mock",bargain_id:"mock"}}}},data:function(){return{expirationDat:{h:"00",p:"00",m:"00"},dialogs:{sharingFriends:{show:!1}},shareInfo:{}}},created:function(){this.init()},methods:{init:function(){this.refreshTime()},jumpPurchasePage:function(){var a=this.spuBargainItem,t=a.spu_id,i=a.bargain_id,s=a.order_no;this.$router.push({path:"/purchase",query:{spuId:t,bargainId:i,orderNo:s}})},refreshTime:function(){var a=this,t=this.$util.expiration(this.spuBargainItem.expire_time);if(t){this.expirationDat=t;var i=setInterval(function(){a.expirationDat=a.$util.expiration(a.spuBargainItem.expire_time)},1e3);this.$once("hook:beforeDestroy",function(){clearInterval(i)})}},jumpBargain:function(){this.$router.push({path:"/bargain",query:{spuId:this.spuBargainItem.spu_id,bargainId:this.spuBargainItem.bargain_id}})}}}),o=e,g=(i("ef10"),i("17cc")),m=Object(g["a"])(o,s,n,!1,null,"4ca8d06e",null);t["default"]=m.exports},"42fb":function(a,t,i){},5616:function(a,t,i){"use strict";i.d(t,"c",function(){return n}),i.d(t,"a",function(){return r}),i.d(t,"b",function(){return e});var s=i("007a");function n(a){var t=a.spu_id;return s["a"].get({url:"/api/v1/share/share_spu",data:{spu_id:t}})}function r(a){var t=a.bargain_id;return s["a"].get({url:"/api/v1/share/share_bargain",data:{bargain_id:t}})}function e(a){var t=a.relation_id;return s["a"].get({url:"/api/v1/share/get_share_info",data:{relation_id:t}})}},ae4a:function(a,t){a.exports="data:image/png;base64,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"},ef10:function(a,t,i){"use strict";var s=i("42fb"),n=i.n(s);n.a}}]);