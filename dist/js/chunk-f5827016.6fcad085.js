(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5827016"],{"263f":function(t,e,o){"use strict";var i=o("fb5a"),a=o.n(i);a.a},"352a":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,'.home-goods-item[data-v-127b9446]{border-radius:.26667rem;background-color:#fff;overflow:hidden}.home-goods-item+.home-goods-item[data-v-127b9446]{margin-top:.8rem}.home-goods-item>.goods-img[data-v-127b9446]{height:4.92rem}.home-goods-item>.goods-img img[data-v-127b9446]{width:100%;height:4.92rem}.home-goods-item>.goods-detail[data-v-127b9446]{padding:.42667rem .32rem .37333rem;overflow:hidden}.home-goods-item>.goods-detail>.goods-title[data-v-127b9446]{display:block;color:#323232;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.37333rem;font-family:Helvetica;font-weight:400;color:#333;line-height:.46667rem;margin-bottom:.4rem}.home-goods-item>.goods-detail>.goods-description[data-v-127b9446]{line-height:.53333rem;font-size:.32rem;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home-goods-item>.goods-detail>.goods-price[data-v-127b9446]{line-height:.46667rem}.home-goods-item>.goods-detail>.goods-price>.discount[data-v-127b9446]{font-size:.50667rem;font-family:DIN-Medium;font-weight:500;color:#d30c05}.home-goods-item>.goods-detail>.goods-price>.real[data-v-127b9446]{margin-left:.22667rem;text-decoration:line-through;font-size:.26667rem;font-family:Helvetica;font-weight:400;color:#888}.home-goods-item>.goods-control[data-v-127b9446]{padding:0 .41333rem .42667rem .41333rem;height:.93333rem;overflow:hidden}.home-goods-item>.goods-control>span[data-v-127b9446]{position:relative;font-size:.37333rem;display:inline-block;color:#fff;height:.8rem;line-height:.8rem;border-radius:.4rem;text-decoration:none;padding:0 .32rem}.home-goods-item>.goods-control>span[data-v-127b9446]:before{content:"";display:block;width:.45333rem;height:.45333rem;position:absolute;top:.24rem;left:.25333rem}.home-goods-item>.goods-control>span.button-l[data-v-127b9446]{color:#f64e01;border:1px solid #f64e01}.home-goods-item>.goods-control>span.button-r[data-v-127b9446]{float:right;color:#d30c05;border:1px solid #d30c05}',""])},5616:function(t,e,o){"use strict";o.d(e,"c",function(){return a}),o.d(e,"a",function(){return s}),o.d(e,"b",function(){return r});var i=o("007a");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["a"].get({url:"/api/v1/share/share_spu",data:t})}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["a"].get({url:"/api/v1/share/share_bargain",data:t})}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["a"].get({url:"/api/v1/share/get_share_info",data:t})}},"7e1f":function(t,e,o){"use strict";o.r(e);var i,a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"commodityItem-container"},[o("div",{staticClass:"home-goods-item"},[o("div",{staticClass:"goods-img",on:{click:t.jumpBargain}},[t.itemData.spu_pics&&t.itemData.spu_pics.length>0?o("van-swipe",{attrs:{autoplay:t.bannerAutoPlayTime,"show-indicators":!1,"indicator-color":"white"}},[t._l(t.itemData.spu_pics,function(e,i){return[!t.isLoad&&0==t.index||t.isLoad?o("van-swipe-item",{key:i},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e||"",expression:"swipeItem||''"}]})]):t._e()]})],2):o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.itemData.imgUrl||"",expression:"itemData.imgUrl||''"}]})],1),o("div",{staticClass:"goods-detail"},[o("a",{staticClass:"goods-title",attrs:{href:"javascript:;"},on:{click:t.jumpBargain}},[t._v(t._s(t.itemData.title||""))]),o("div",{staticClass:"goods-price"},[o("span",{staticClass:"discount"},[t._v("Rp"+t._s(t.itemData.price||0))]),o("span",{staticClass:"real"},[t._v(t._s(t.$t("commodityItem.platformPrice"))+":Rp"+t._s(t.itemData.original_price||0))])])]),o("div",{staticClass:"goods-control"},[o("span",{staticClass:"button-l",on:{click:t.cashBack}},[t._v("\n        "+t._s(t.$t("commodityItem.cashBack"))+"\n      ")]),o("span",{staticClass:"button-r",on:{click:t.jumpBargain}},[t._v(t._s(t.$t("commodityItem.getAFreebie")))])])]),t.dialogs.sharingFriends.show?o("dialog-sharing-makes",{attrs:{dialogVisible:t.dialogs.sharingFriends,shareInfo:t.shareInfo,itemData:t.itemData},on:{"update:dialogVisible":function(e){return t.$set(t.dialogs,"sharingFriends",e)},"update:dialog-visible":function(e){return t.$set(t.dialogs,"sharingFriends",e)}}}):t._e()],1)},s=[],r=(o("96cf"),o("3b8d")),n=o("bd86"),d=(o("4b0a"),o("2bb1")),c=(o("7f7f"),o("7844"),o("5596")),m=o("5616"),l={name:"commodityItem",components:(i={dialogSharingMakes:function(t){return Promise.all([o.e("chunk-4c850291"),o.e("chunk-b37cc144")]).then(function(){var e=[o("90da")];t.apply(null,e)}.bind(this)).catch(o.oe)}},Object(n["a"])(i,c["a"].name,c["a"]),Object(n["a"])(i,d["a"].name,d["a"]),i),props:{itemData:{type:Object,default:function(){return{spu_id:1,title:"mock",price:1,deliver_count:1,spu_pics:["http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg","https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"]}}},gaInfo:{type:Object}},data:function(){return{dialogs:{sharingFriends:{show:!1}},bannerAutoPlayTime:1e6,shareInfo:{},gaInfo:{},isLoad:!1}},mounted:function(){var t=this;setTimeout(function(){t.bannerAutoPlayTime=12e3,t.isLoad=!0},1e3)},methods:{cashBack:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.$emit("cashBackGa",this.itemData),fbq("track","Subscribe",{value:this.itemData.title,currency:"USD",predicted_ltv:this.itemData.spu_id}),this.$store.state.userInfo.user_id){t.next=6;break}return this.$store.commit("setLoginJumpUrl",""),this.$store.commit("setLoginSelectShow",!0),t.abrupt("return");case 6:return t.next=8,Object(m["c"])({spu_id:this.itemData.spu_id});case 8:e=t.sent,e&&e.data?(this.shareInfo=e.data,console.log("this.shareInfo: ",this.shareInfo),this.dialogs.sharingFriends.show=!0):this.$toast("Failed to get sharing information");case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),jumpBargain:function(){this.$emit("jumpBargainGa",this.itemData),this.$router.push({path:"/bargain",query:{spuId:this.itemData.spu_id}})}}},h=l,g=(o("263f"),o("2877")),u=Object(g["a"])(h,a,s,!1,null,"127b9446",null);e["default"]=u.exports},fb5a:function(t,e,o){var i=o("352a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=o("499e").default;a("f0088060",i,!0,{sourceMap:!1,shadowMode:!1})}}]);