(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0712c4f0"],{"371e":function(t,e,a){var o=a("f14f");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("499e").default;i("20c9a016",o,!0,{sourceMap:!1,shadowMode:!1})},5616:function(t,e,a){"use strict";a.d(e,"c",function(){return i}),a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n});var o=a("007a");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["a"].get({url:"/api/v1/share/share_spu",data:t})}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["a"].get({url:"/api/v1/share/share_bargain",data:t})}function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["a"].get({url:"/api/v1/share/get_share_info",data:t})}},"67fa":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAMAAAANf8AYAAAAvVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////vPwH+8ez/+vfvQwbxUxvyXinwRgr83tP5uKD0d0vwThT81cf5spjyZTTxWSP94dj3n4D959/1h2D97Ob7yrn6vqj4rJD2i2b1gFjzcEHwSxD4pIbzbDz+9PH82cv70MH4qIz3mnr2kGz3l3X6w6+0txvHAAAAGXRSTlMA8AiA+FV4yrVC6+VoJRHRzq2ojFvqbigP9aGyyAAAAnxJREFUSMellul6qjAQhhG0am1tbWtPIWHfFxVQ3O39X9YhwTUTpY/Oz4SXGT6+yUSAIXalj/deQ2703j+krgj2IfDVacrn0ex83cb60rMM41nqX0deGjI/Gi9XiNe2fD3arzykxSRhU7Ug8iTXxROLfMr18VmTpT5TC2xjd+WOMLt69k3/moAZbZLdCgEhTupxRDZ1RUtNDCQ//kqI4KWuOInnAui7Qn4agDCtraMY+jSJxoip7oevGQ7XU0OhYWxNzNFOHLKMG+mGWjFqsqwYFC33hhV5OiPPJ1k0f16imwVdW6vKDJ/07gDJtiSBY0fp1vboyjIoV5z9dqcsDfwbzyZPZL8jhOirFzmpcm4emlAUukDnYkoqW++fwR4p1LFO+11BAkxEmbQSOdRJkuxccUkYAGZNarNHNElGCN+92B8Ib4D5zRVtUgk4K4lZyuy/CUPAhDsqMNo5JEk+Yvd7ArQ0psVblNAsTpcLMjfCeWUd24sx2CR5YIw1ZR/2BME8Qw5SELdVjtPyGH4P1M3VCGHvbKfEDN8dAd0GrEMPTomtOZE6mCyZJwasD05OweHGJ4y1Yhjp0m8mdUqCqozFnOZxGaZ79PXJKZ4b0qaJaR59HF4iTfGsf6y9U9bbjJxSaDwtF1Sfbe7OWZ9ilZRVihTZQR55VpFr5UqQxZxzUTyMKb2s49ALju5r1Ajgn9Lz4KjcYoWP/aMahkoQPUVANRJ95nybZEHlATWwU5M1Tp97joZW4gflt6h6As32zT+vMYrDcaEpWuECpH1jLqBxUPZODOfCrflj6jzmYqZKf5tzd8zT++b24/eD+nvI4/ed+nvVw/e3e+6J/wEl4NcwCPxwygAAAABJRU5ErkJggg=="},"70c8":function(t,e,a){"use strict";var o=a("371e"),i=a.n(o);i.a},"7e1f":function(t,e,a){"use strict";a.r(e);var o,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"commodityItem-container"},[a("div",{staticClass:"home-goods-item"},[a("div",{staticClass:"goods-img",on:{click:t.jumpBargain}},[t.itemData.spu_pics&&t.itemData.spu_pics.length>0?a("van-swipe",{attrs:{autoplay:t.bannerAutoPlayTime,"show-indicators":!1,"indicator-color":"white"}},[t._l(t.itemData.spu_pics,function(e,o){return[!t.isLoad&&0==t.index||t.isLoad?a("van-swipe-item",{key:o},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e||"",expression:"swipeItem||''"}]})]):t._e()]})],2):a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.itemData.imgUrl||"",expression:"itemData.imgUrl||''"}]})],1),a("div",{staticClass:"goods-detail"},[a("a",{staticClass:"goods-title",attrs:{href:"javascript:;"},on:{click:t.jumpBargain}},[t._v(t._s(t.itemData.title||""))]),a("p",{staticClass:"goods-description"},[t._v(t._s(t.itemData.sub_title||""))]),a("p",{staticClass:"goods-description"},[t._v(t._s(t.itemData.deliver_count)+" Sent")]),a("div",{staticClass:"goods-price"},[a("span",{staticClass:"discount"},[t._v("RP "+t._s(t.itemData.price||0))]),a("span",{staticClass:"real"},[t._v("RP"+t._s(t.itemData.original_price||0))])])]),a("div",{staticClass:"goods-control"},[a("span",{staticClass:"button-l",on:{click:t.cashBack}},[t._v("\n        "+t._s(t.$t("commodityItem.cashBack"))+"\n      ")]),a("span",{staticClass:"button-r",on:{click:t.jumpBargain}},[t._v(t._s(t.$t("commodityItem.getAFreebie")))])])]),t.dialogs.sharingFriends.show?a("dialog-sharing-makes",{attrs:{dialogVisible:t.dialogs.sharingFriends,shareInfo:t.shareInfo,itemData:t.itemData},on:{"update:dialogVisible":function(e){return t.$set(t.dialogs,"sharingFriends",e)},"update:dialog-visible":function(e){return t.$set(t.dialogs,"sharingFriends",e)}}}):t._e()],1)},s=[],n=(a("96cf"),a("3b8d")),r=a("bd86"),d=(a("4b0a"),a("2bb1")),c=(a("7f7f"),a("7844"),a("5596")),l=a("5616"),m={name:"commodityItem",components:(o={dialogSharingMakes:function(t){return Promise.all([a.e("chunk-4c850291"),a.e("chunk-b37cc144")]).then(function(){var e=[a("90da")];t.apply(null,e)}.bind(this)).catch(a.oe)}},Object(r["a"])(o,c["a"].name,c["a"]),Object(r["a"])(o,d["a"].name,d["a"]),o),props:{itemData:{type:Object,default:function(){return{spu_id:1,title:"mock",price:1,deliver_count:1,spu_pics:["http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg","https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"]}}},gaInfo:{type:Object}},data:function(){return{dialogs:{sharingFriends:{show:!1}},bannerAutoPlayTime:1e6,shareInfo:{},gaInfo:{},isLoad:!1}},mounted:function(){var t=this;setTimeout(function(){t.bannerAutoPlayTime=12e3,t.isLoad=!0},1e3)},methods:{cashBack:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.$emit("cashBackGa",this.itemData),fbq("track","Subscribe",{value:this.itemData.title,currency:"USD",predicted_ltv:this.itemData.spu_id}),this.$store.state.userInfo.user_id){t.next=6;break}return this.$store.commit("setLoginJumpUrl",""),this.$store.commit("setLoginSelectShow",!0),t.abrupt("return");case 6:return t.next=8,Object(l["c"])({spu_id:this.itemData.spu_id});case 8:e=t.sent,e&&e.data?(this.shareInfo=e.data,console.log("this.shareInfo: ",this.shareInfo),this.dialogs.sharingFriends.show=!0):this.$toast("Failed to get sharing information");case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),jumpBargain:function(){this.$emit("jumpBargainGa",this.itemData),this.$router.push({path:"/bargain",query:{spuId:this.itemData.spu_id}})}}},g=m,u=(a("70c8"),a("2877")),f=Object(u["a"])(g,i,s,!1,null,"14f0c1a5",null);e["default"]=f.exports},b041:function(t,e){t.exports=function(t){return"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},dd20:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAqFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////2pgD2ogD//Pf3rBD/+/P71YP3sBn96Lv2qQf6x1z4tyz4tCX++Oj6zXD+8tr+78/968b84qz+9uT84KT70Hf++e383Z372pT6y2b4uTX85LD72Iz4wEf5vD04lUmzAAAAGXRSTlMA+1YF68SbENbR49m3lX8xLBerZkDKZ0Ktzp3axgAAAfFJREFUOMudldl2okAQhptdXHGJCVVNs4MgEpfRvP+bTYeTGamW8czxv2w+y9qL9WU4i/Vs6o5Nc+xOZ+uFY7B/aKnb1sTU/E6aObFsfTkIOrrt+opcW3ceSW8+8gc0mnsKaGxWmj8obfVuEFK3CElYSzf65Jv/RG931thY5BMvCkEerM0f1ltRK7uyjOnL6ic2Z674GQO2DfV37nSormSJHwG/wlrwfs70rkY2NVqVOUAS5WnVN2svZUzUqFanAQIgYvBLI2YN5lCjRZpIMsoiDPacmHXYwiJ+xhFCkoWHMMsI6lsLtp70Hz7DADE/Co3XYUzQyZrNTPL/rUQvdfcrQTwzZ2xKXZVWIWjFQCtMmavkVKIQtfEj7LIxfaguCFKXsOYKOmYmfRDXHDv4a6+wpkQV9pSBFGKmsCZ1oIs8PueAkr3tFAdc/0G7QxoByMrSsO7JInAaACYnTpNFS6D9fD1kEr0KWgJaWFE1/C965P3CbpV2Ka7pd+81aQIYxLRdlCZsyuDSnk4yLITbjjah0tpFmSBEEUrle0FbWxmYz/AbA6k8FHRg1DHk9TkPEoDgRms10h+HmzdVfAY4V3xouJn34RMdEENamA+PLCK6XbiyiP5/vb2yNCX7/mwVv7Tgn5+N144RPXHb+4nbKifuNwr3iwuuvmWyAAAAAElFTkSuQmCC"},f14f:function(t,e,a){var o=a("b041");e=t.exports=a("2350")(!1),e.push([t.i,'.home-goods-item[data-v-14f0c1a5]{border-radius:.26667rem;background-color:#fff;overflow:hidden}.home-goods-item+.home-goods-item[data-v-14f0c1a5]{margin-top:.8rem}.home-goods-item>.goods-img[data-v-14f0c1a5]{min-height:9.2rem}.home-goods-item>.goods-img img[data-v-14f0c1a5]{width:100%;height:9.2rem}.home-goods-item>.goods-detail[data-v-14f0c1a5]{padding:.65333rem .41333rem 0 .41333rem;overflow:hidden}.home-goods-item>.goods-detail>.goods-title[data-v-14f0c1a5]{display:block;font-size:.48rem;color:#323232;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home-goods-item>.goods-detail>.goods-description[data-v-14f0c1a5]{line-height:.53333rem;font-size:.32rem;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home-goods-item>.goods-detail>.goods-price[data-v-14f0c1a5]{padding:.13333rem 0;line-height:.58667rem}.home-goods-item>.goods-detail>.goods-price>.discount[data-v-14f0c1a5]{font-size:.58667rem;color:#d30c05}.home-goods-item>.goods-detail>.goods-price>.real[data-v-14f0c1a5]{padding-left:.22667rem;font-size:.32rem;color:#888;text-decoration:line-through}.home-goods-item>.goods-control[data-v-14f0c1a5]{padding:0 .41333rem .52rem .41333rem;height:.93333rem}.home-goods-item>.goods-control>span[data-v-14f0c1a5]{position:relative;font-size:.37333rem;display:inline-block;color:#fff;text-indent:.85333rem;height:.93333rem;line-height:.93333rem;border-radius:.46667rem;text-decoration:none;padding-right:.32rem}.home-goods-item>.goods-control>span[data-v-14f0c1a5]:before{content:"";display:block;width:.45333rem;height:.45333rem;position:absolute;top:.24rem;left:.25333rem}.home-goods-item>.goods-control>span.button-l[data-v-14f0c1a5]{background:-webkit-linear-gradient(left,#f6ae01,#f64b01);background:linear-gradient(90deg,#f6ae01,#f64b01)}.home-goods-item>.goods-control>span.button-l[data-v-14f0c1a5]:before{background:url('+o(a("dd20"))+") no-repeat 0 0/auto 100%}.home-goods-item>.goods-control>span.button-r[data-v-14f0c1a5]{float:right;background:-webkit-linear-gradient(left,#f64e01,#d30c05);background:linear-gradient(90deg,#f64e01,#d30c05)}.home-goods-item>.goods-control>span.button-r[data-v-14f0c1a5]:before{background:url("+o(a("67fa"))+") no-repeat 0 0/100% auto}",""])}}]);