(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c8168aa"],{"17ef":function(a,i,t){"use strict";t.r(i);var s=function(){var a=this,i=a.$createElement,t=a._self._c||i;return t("div",{staticClass:"isBargainingList-container"})},n=[],e=(t("5c07"),t("53da"),t("2556"),t("d0f8"),t("3f9a")),r={components:{aCommodityThatIsBeingBargained:e["a"]}},o=r,c=t("8c9c"),g=Object(c["a"])(o,s,n,!1,null,"988585a0",null);i["default"]=g.exports},2514:function(a,i,t){"use strict";var s=t("257b"),n=t.n(s);n.a},"257b":function(a,i,t){},"3f9a":function(a,i,t){"use strict";var s=function(){var a=this,i=a.$createElement,s=a._self._c||i;return s("div",{staticClass:"freebing-box"},[s("div",{staticClass:"freebing-title"},[a._v("Ongoing Freebies")]),s("div",{staticClass:"freebing-container"},[s("div",{staticClass:"good-box"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("8979"),expression:"require('./../../assets/images/good-mini.png')"}],staticClass:"good-img"}),s("div",{staticClass:"good-detail"},[s("p",{staticClass:"good-title"},[a._v(a._s(a.spuBargainItem.title))]),s("div",{staticClass:"progress"},[s("img",{attrs:{src:t("ae4a"),width:"65%"}}),s("div",{staticClass:"progress-content"},[s("span",[a._v("has been cut "+a._s(a.spuBargainItem.bargain_coin))]),s("span",[a._v("65%")])])]),s("div",{staticClass:"count-down"},[s("span",{staticClass:"time"},[a._v(a._s(a.expirationDat.h))]),a._v("\n          :\n          "),s("span",{staticClass:"time"},[a._v(a._s(a.expirationDat.p))]),a._v("\n          :\n          "),s("span",{staticClass:"time"},[a._v(a._s(a.expirationDat.m))]),s("span",{staticClass:"dec"},[a._v("overdued")])]),s("div",{staticClass:"goods-control"},[s("a",{staticClass:"button-l",attrs:{href:"javascrip:;"},on:{click:a.cashBack}},[a._v("\n            Cash Back\n          ")]),s("a",{staticClass:"button-r",attrs:{href:"javascrip:;"},on:{click:a.jumpBargain}},[a._v("Go On")])])])]),s("a",{staticClass:"freebing-more",attrs:{href:"javascript:;"},on:{click:function(i){return a.$router.push({path:"/isBargainingList"})}}},[a._v("More About >")])]),s("dialog-sharing-makes",{attrs:{dialogVisible:a.dialogs.sharingFriends,shareInfo:a.shareInfo},on:{"update:dialogVisible":function(i){return a.$set(a.dialogs,"sharingFriends",i)},"update:dialog-visible":function(i){return a.$set(a.dialogs,"sharingFriends",i)}}})],1)},n=[],e=(t("b5aa"),t("2c46")),r=t("90da"),o=t("5616"),c={name:"aCommodityThatIsBeingBargained",components:{dialogSharingMakes:r["a"]},props:{spuBargainItem:{type:Object,default:function(){return{spu_id:1,title:"mock",bargain_rate:1,bargain_coin:"mock",expire_time:"mock",bargain_id:"mock"}}}},data:function(){return{expirationDat:{h:"00",p:"00",m:"00"},dialogs:{sharingFriends:{show:!1}},shareInfo:{shareUrl:window.location.origin+"/forBargain",shareTitle:"分享标题",shareDescription:"分享的描述",shareImage:"https://s.pinimg.com/images/facebook_share_image.png",quote:"FB随分享的链接一同显示的引文可由用户自行高亮选择，也可由开发者预先定义（例如文章的醒目引文）"}}},created:function(){this.init()},methods:{init:function(){this.refreshTime()},refreshTime:function(){var a=this,i=this.$util.expiration(this.spuBargainItem.expire_time);if(i){this.expirationDat=i;var t=setInterval(function(){a.expirationDat=a.$util.expiration(a.spuBargainItem.expire_time)},1e3);this.$once("hook:beforeDestroy",function(){clearInterval(t)})}},cashBack:function(){var a=Object(e["a"])(regeneratorRuntime.mark(function a(){var i;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(o["a"])({bargain_id:this.spuBargainItem.bargain_id});case 2:i=a.sent,i&&(this.shareInfo=i.data.share_info,this.dialogs.sharingFriends.show=!0);case 4:case"end":return a.stop()}},a,this)}));function i(){return a.apply(this,arguments)}return i}(),jumpBargain:function(){this.$router.push({path:"/bargain",query:{spuId:this.spuBargainItem.spu_id,bargainId:this.spuBargainItem.bargain_id}})}}},g=c,m=(t("2514"),t("8c9c")),l=Object(m["a"])(g,s,n,!1,null,"283246c9",null);i["a"]=l.exports},"539b":function(a,i,t){},8979:function(a,i,t){a.exports=t.p+"img/good-mini.ab18644c.png"},"90da":function(a,i,t){"use strict";var s=function(){var a=this,i=a.$createElement,s=a._self._c||i;return s("div",{directives:[{name:"show",rawName:"v-show",value:a.dialogVisible.show,expression:"dialogVisible.show"}],staticClass:"dialogSharingMakes-container",on:{click:function(i){i.stopPropagation(),a.abc=1}}},[s("div",{staticClass:"share-box"},[s("h5",{staticClass:"tit"},[a._v("Share To")]),s("div",{staticClass:"share-types"},[s("img",{staticClass:"fb",attrs:{src:t("82db"),alt:"fb"},on:{click:a.mx_shareFacebook}})]),s("div",{staticClass:"tip"},[a._v("\n      Tip: Sharing to new friends will cut faster and more.\n    ")]),s("button",{ref:"copy",staticClass:"copy-link",attrs:{"data-clipboard-action":"copy","data-clipboard-target":"#success_form_input"},on:{click:a.mx_copyLink}},[a._v("Copy Link")]),s("div",{staticClass:"close-img"}),s("input",{directives:[{name:"model",rawName:"v-model",value:a.mx_copyUrl,expression:"mx_copyUrl"}],staticStyle:{"margin-left":"-99999px"},attrs:{type:"text",id:"success_form_input",readonly:"readonly"},domProps:{value:a.mx_copyUrl},on:{input:function(i){i.target.composing||(a.mx_copyUrl=i.target.value)}}})])])},n=[],e=(t("f121"),t("0f35")),r={mixins:[e["a"]],name:"dialogSharingMakes",props:{dialogVisible:{type:Object,default:function(){return{show:!1}}},shareInfo:{type:Object,default:function(){return{shareUrl:window.location.origin+"/forBargain",shareTitle:"分享标题",shareDescription:"分享的描述",shareImage:"https://s.pinimg.com/images/facebook_share_image.png",quote:"FB随分享的链接一同显示的引文可由用户自行高亮选择，也可由开发者预先定义（例如文章的醒目引文）"}}}}},o=r,c=(t("a6b2"),t("8c9c")),g=Object(c["a"])(o,s,n,!1,null,"08adfe94",null);i["a"]=g.exports},a6b2:function(a,i,t){"use strict";var s=t("539b"),n=t.n(s);n.a},ae4a:function(a,i){a.exports="data:image/png;base64,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"}}]);