(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9ee58c06"],{5616:function(e,t,i){"use strict";i.d(t,"c",function(){return a}),i.d(t,"a",function(){return s}),i.d(t,"b",function(){return r});var o=i("007a");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.get({url:"/api/v1/share/share_spu",data:e})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.get({url:"/api/v1/share/share_bargain",data:e})}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.get({url:"/api/v1/share/get_share_info",data:e})}},5868:function(e,t,i){"use strict";var o=i("877c");i.n(o).a},"7e1f":function(e,t,i){"use strict";i.r(t),i("96cf");var o,a=i("3b8d"),s=i("bd86"),r=(i("4b0a"),i("2bb1")),n=(i("7f7f"),i("7844"),i("5596")),d=i("5616"),c={name:"commodityItem",components:(o={dialogSharingMakes:function(e){return Promise.all([i.e("chunk-4c850291"),i.e("chunk-b37cc144")]).then(function(){var t=[i("90da")];e.apply(null,t)}.bind(this)).catch(i.oe)}},Object(s.a)(o,n.a.name,n.a),Object(s.a)(o,r.a.name,r.a),o),props:{itemData:{type:Object,default:function(){return{spu_id:1,title:"mock",price:1,deliver_count:1,spu_pics:["http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg","https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"]}}},gaInfo:{type:Object}},data:function(){return{dialogs:{sharingFriends:{show:!1}},bannerAutoPlayTime:1e6,shareInfo:{},gaInfo:{},isLoad:!1}},mounted:function(){var e=this;setTimeout(function(){e.bannerAutoPlayTime=12e3,e.isLoad=!0},1e3)},methods:{cashBack:function(){var e=Object(a.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$emit("cashBackGa",this.itemData),fbq("track","Subscribe",{value:this.itemData.title,currency:"USD",predicted_ltv:this.itemData.spu_id}),this.$store.state.userInfo.user_id){e.next=6;break}return this.$store.commit("setLoginJumpUrl",""),this.$store.commit("setLoginSelectShow",!0),e.abrupt("return");case 6:return e.next=8,Object(d.c)({spu_id:this.itemData.spu_id});case 8:(t=e.sent)&&t.data?(this.shareInfo=t.data,this.dialogs.sharingFriends.show=!0):this.$toast("Failed to get sharing information");case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),jumpBargain:function(){this.$emit("jumpBargainGa",this.itemData),this.$router.push({path:"/bargain",query:{spuId:this.itemData.spu_id}})}}},m=(i("5868"),i("2877")),l=Object(m.a)(c,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"commodityItem-container"},[i("div",{staticClass:"home-goods-item"},[i("div",{staticClass:"goods-img",on:{click:e.jumpBargain}},[e.itemData.spu_pics&&e.itemData.spu_pics.length>0?i("van-swipe",{attrs:{autoplay:e.bannerAutoPlayTime,"show-indicators":!1,"indicator-color":"white"}},[e._l(e.itemData.spu_pics,function(t,o){return[!e.isLoad&&0==e.index||e.isLoad?i("van-swipe-item",{key:o},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t||"",expression:"swipeItem||''"}]})]):e._e()]})],2):i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.itemData.imgUrl||"",expression:"itemData.imgUrl||''"}]})],1),i("div",{staticClass:"goods-detail"},[i("a",{staticClass:"goods-title",attrs:{href:"javascript:;"},on:{click:e.jumpBargain}},[e._v(e._s(e.itemData.title||""))]),i("div",{staticClass:"goods-price"},[i("span",{staticClass:"discount"},[e._v("Rp"+e._s(e.itemData.price||0))]),i("span",{staticClass:"real"},[e._v(e._s(e.$t("commodityItem.platformPrice"))+":Rp"+e._s(e.itemData.original_price||0))])])]),i("div",{staticClass:"goods-control"},[i("span",{staticClass:"button-l",on:{click:e.cashBack}},[e._v("\n        "+e._s(e.$t("commodityItem.cashBack"))+"\n      ")]),i("span",{staticClass:"button-r",on:{click:e.jumpBargain}},[e._v(e._s(e.$t("commodityItem.getAFreebie")))])])]),e.dialogs.sharingFriends.show?i("dialog-sharing-makes",{attrs:{dialogVisible:e.dialogs.sharingFriends,shareInfo:e.shareInfo,itemData:e.itemData},on:{"update:dialogVisible":function(t){return e.$set(e.dialogs,"sharingFriends",t)},"update:dialog-visible":function(t){return e.$set(e.dialogs,"sharingFriends",t)}}}):e._e()],1)},[],!1,null,"53561fe3",null);t.default=l.exports},"877c":function(e,t,i){var o=i("d5d7");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,i("499e").default)("7338c0c9",o,!0,{sourceMap:!1,shadowMode:!1})},d5d7:function(e,t,i){(e.exports=i("2350")(!1)).push([e.i,'.home-goods-item[data-v-53561fe3]{border-radius:.26667rem;background-color:#fff;overflow:hidden}.home-goods-item+.home-goods-item[data-v-53561fe3]{margin-top:.8rem}.home-goods-item>.goods-img[data-v-53561fe3]{min-height:4.92rem}.home-goods-item>.goods-img img[data-v-53561fe3]{width:100%;height:auto;max-height:4.92rem}.home-goods-item>.goods-detail[data-v-53561fe3]{padding:.42667rem .32rem .37333rem;overflow:hidden}.home-goods-item>.goods-detail>.goods-title[data-v-53561fe3]{display:block;color:#323232;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.37333rem;font-family:Helvetica;font-weight:400;color:#333;line-height:.46667rem;margin-bottom:.4rem}.home-goods-item>.goods-detail>.goods-description[data-v-53561fe3]{line-height:.53333rem;font-size:.32rem;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home-goods-item>.goods-detail>.goods-price[data-v-53561fe3]{line-height:.46667rem}.home-goods-item>.goods-detail>.goods-price>.discount[data-v-53561fe3]{font-size:.50667rem;font-family:DIN-Medium;font-weight:500;color:#d30c05}.home-goods-item>.goods-detail>.goods-price>.real[data-v-53561fe3]{margin-left:.22667rem;text-decoration:line-through;font-size:.26667rem;font-family:Helvetica;font-weight:400;color:#888}.home-goods-item>.goods-control[data-v-53561fe3]{padding:0 .41333rem .42667rem .41333rem;height:.93333rem;overflow:hidden}.home-goods-item>.goods-control>span[data-v-53561fe3]{position:relative;font-size:.37333rem;display:inline-block;color:#fff;height:.8rem;line-height:.8rem;border-radius:.4rem;text-decoration:none;padding:0 .32rem}.home-goods-item>.goods-control>span[data-v-53561fe3]:before{content:"";display:block;width:.45333rem;height:.45333rem;position:absolute;top:.24rem;left:.25333rem}.home-goods-item>.goods-control>span.button-l[data-v-53561fe3]{color:#f64e01;border:1px solid #f64e01}.home-goods-item>.goods-control>span.button-r[data-v-53561fe3]{float:right;color:#d30c05;border:1px solid #d30c05}',""])}}]);