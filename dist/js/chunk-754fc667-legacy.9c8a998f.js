(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-754fc667","chunk-9ee58c06"],{"26c3":function(t,e,i){(t.exports=i("2350")(!1)).push([t.i,".van-swipe{overflow:hidden;position:relative;-webkit-user-select:none;user-select:none}.van-swipe__track{height:100%}.van-swipe__indicators{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;left:50%;bottom:10px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.van-swipe__indicators--vertical{left:10px;top:50%;bottom:auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-swipe__indicators--vertical .van-swipe__indicator:not(:last-child){margin-bottom:6px}.van-swipe__indicator{opacity:.3;border-radius:100%;width:6px;height:6px;-webkit-transition:opacity .2s;transition:opacity .2s;background-color:#ebedf0}.van-swipe__indicator:not(:last-child){margin-right:6px}.van-swipe__indicator--active{opacity:1;background-color:#1989fa}",""])},"4b0a":function(t,e,i){"use strict";i("68ef"),i("786d")},5616:function(t,e,i){"use strict";i.d(e,"c",function(){return a}),i.d(e,"a",function(){return s}),i.d(e,"b",function(){return n});var o=i("007a");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.get({url:"/api/v1/share/share_spu",data:t})}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.get({url:"/api/v1/share/share_bargain",data:t})}function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.get({url:"/api/v1/share/get_share_info",data:t})}},5868:function(t,e,i){"use strict";var o=i("877c");i.n(o).a},7844:function(t,e,i){"use strict";i("68ef"),i("8270")},"786d":function(t,e,i){var o=i("d0e9");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),(0,i("499e").default)("2547baa5",o,!0,{sourceMap:!1,shadowMode:!1})},"7e1f":function(t,e,i){"use strict";i.r(e),i("96cf");var o,a=i("3b8d"),s=i("bd86"),n=(i("4b0a"),i("2bb1")),r=(i("7f7f"),i("7844"),i("5596")),c=i("5616"),d={name:"commodityItem",components:(o={dialogSharingMakes:function(t){return Promise.all([i.e("chunk-4c850291"),i.e("chunk-b37cc144")]).then(function(){var e=[i("90da")];t.apply(null,e)}.bind(this)).catch(i.oe)}},Object(s.a)(o,r.a.name,r.a),Object(s.a)(o,n.a.name,n.a),o),props:{itemData:{type:Object,default:function(){return{spu_id:1,title:"mock",price:1,deliver_count:1,spu_pics:["http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg","https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"]}}},gaInfo:{type:Object}},data:function(){return{dialogs:{sharingFriends:{show:!1}},bannerAutoPlayTime:1e6,shareInfo:{},gaInfo:{},isLoad:!1}},mounted:function(){var t=this;setTimeout(function(){t.bannerAutoPlayTime=12e3,t.isLoad=!0},1e3)},methods:{cashBack:function(){var t=Object(a.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.$emit("cashBackGa",this.itemData),fbq("track","Subscribe",{value:this.itemData.title,currency:"USD",predicted_ltv:this.itemData.spu_id}),this.$store.state.userInfo.user_id){t.next=6;break}return this.$store.commit("setLoginJumpUrl",""),this.$store.commit("setLoginSelectShow",!0),t.abrupt("return");case 6:return t.next=8,Object(c.c)({spu_id:this.itemData.spu_id});case 8:(e=t.sent)&&e.data?(this.shareInfo=e.data,this.dialogs.sharingFriends.show=!0):this.$toast("Failed to get sharing information");case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),jumpBargain:function(){this.$emit("jumpBargainGa",this.itemData),this.$router.push({path:"/bargain",query:{spuId:this.itemData.spu_id}})}}},l=(i("5868"),i("2877")),m=Object(l.a)(d,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"commodityItem-container"},[i("div",{staticClass:"home-goods-item"},[i("div",{staticClass:"goods-img",on:{click:t.jumpBargain}},[t.itemData.spu_pics&&t.itemData.spu_pics.length>0?i("van-swipe",{attrs:{autoplay:t.bannerAutoPlayTime,"show-indicators":!1,"indicator-color":"white"}},[t._l(t.itemData.spu_pics,function(e,o){return[!t.isLoad&&0==t.index||t.isLoad?i("van-swipe-item",{key:o},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e||"",expression:"swipeItem||''"}]})]):t._e()]})],2):i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.itemData.imgUrl||"",expression:"itemData.imgUrl||''"}]})],1),i("div",{staticClass:"goods-detail"},[i("a",{staticClass:"goods-title",attrs:{href:"javascript:;"},on:{click:t.jumpBargain}},[t._v(t._s(t.itemData.title||""))]),i("div",{staticClass:"goods-price"},[i("span",{staticClass:"discount"},[t._v("Rp"+t._s(t.itemData.price||0))]),i("span",{staticClass:"real"},[t._v(t._s(t.$t("commodityItem.platformPrice"))+":Rp"+t._s(t.itemData.original_price||0))])])]),i("div",{staticClass:"goods-control"},[i("span",{staticClass:"button-l",on:{click:t.cashBack}},[t._v("\n        "+t._s(t.$t("commodityItem.cashBack"))+"\n      ")]),i("span",{staticClass:"button-r",on:{click:t.jumpBargain}},[t._v(t._s(t.$t("commodityItem.getAFreebie")))])])]),t.dialogs.sharingFriends.show?i("dialog-sharing-makes",{attrs:{dialogVisible:t.dialogs.sharingFriends,shareInfo:t.shareInfo,itemData:t.itemData},on:{"update:dialogVisible":function(e){return t.$set(t.dialogs,"sharingFriends",e)},"update:dialog-visible":function(e){return t.$set(t.dialogs,"sharingFriends",e)}}}):t._e()],1)},[],!1,null,"53561fe3",null);e.default=m.exports},8270:function(t,e,i){var o=i("26c3");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),(0,i("499e").default)("7965b52b",o,!0,{sourceMap:!1,shadowMode:!1})},"877c":function(t,e,i){var o=i("d5d7");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),(0,i("499e").default)("7338c0c9",o,!0,{sourceMap:!1,shadowMode:!1})},d0e9:function(t,e,i){(t.exports=i("2350")(!1)).push([t.i,".van-swipe-item{float:left;height:100%}",""])},d5d7:function(t,e,i){(t.exports=i("2350")(!1)).push([t.i,'.home-goods-item[data-v-53561fe3]{border-radius:.26667rem;background-color:#fff;overflow:hidden}.home-goods-item+.home-goods-item[data-v-53561fe3]{margin-top:.8rem}.home-goods-item>.goods-img[data-v-53561fe3]{min-height:4.92rem}.home-goods-item>.goods-img img[data-v-53561fe3]{width:100%;height:auto;max-height:4.92rem}.home-goods-item>.goods-detail[data-v-53561fe3]{padding:.42667rem .32rem .37333rem;overflow:hidden}.home-goods-item>.goods-detail>.goods-title[data-v-53561fe3]{display:block;color:#323232;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.37333rem;font-family:Helvetica;font-weight:400;color:#333;line-height:.46667rem;margin-bottom:.4rem}.home-goods-item>.goods-detail>.goods-description[data-v-53561fe3]{line-height:.53333rem;font-size:.32rem;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home-goods-item>.goods-detail>.goods-price[data-v-53561fe3]{line-height:.46667rem}.home-goods-item>.goods-detail>.goods-price>.discount[data-v-53561fe3]{font-size:.50667rem;font-family:DIN-Medium;font-weight:500;color:#d30c05}.home-goods-item>.goods-detail>.goods-price>.real[data-v-53561fe3]{margin-left:.22667rem;text-decoration:line-through;font-size:.26667rem;font-family:Helvetica;font-weight:400;color:#888}.home-goods-item>.goods-control[data-v-53561fe3]{padding:0 .41333rem .42667rem .41333rem;height:.93333rem;overflow:hidden}.home-goods-item>.goods-control>span[data-v-53561fe3]{position:relative;font-size:.37333rem;display:inline-block;color:#fff;height:.8rem;line-height:.8rem;border-radius:.4rem;text-decoration:none;padding:0 .32rem}.home-goods-item>.goods-control>span[data-v-53561fe3]:before{content:"";display:block;width:.45333rem;height:.45333rem;position:absolute;top:.24rem;left:.25333rem}.home-goods-item>.goods-control>span.button-l[data-v-53561fe3]{color:#f64e01;border:1px solid #f64e01}.home-goods-item>.goods-control>span.button-r[data-v-53561fe3]{float:right;color:#d30c05;border:1px solid #d30c05}',""])}}]);