(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-646f405a"],{5454:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},5616:function(e,t,a){"use strict";a.d(t,"c",function(){return o}),a.d(t,"a",function(){return r}),a.d(t,"b",function(){return s});var i=a("007a");function o(e){var t=e.spu_id;return i.a.get({url:"/api/v1/share/share_spu",data:{spu_id:t}})}function r(e){var t=e.bargain_id;return i.a.get({url:"/api/v1/share/share_bargain",data:{bargain_id:t}})}function s(e){var t=e.relation_id;return i.a.get({url:"/api/v1/share/get_share_info",data:{relation_id:t}})}},"595f":function(e,t,a){e.exports=a.p+"img/good-large.1709bded.png"},"67fa":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAMAAAANf8AYAAAAvVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////vPwH+8ez/+vfvQwbxUxvyXinwRgr83tP5uKD0d0vwThT81cf5spjyZTTxWSP94dj3n4D959/1h2D97Ob7yrn6vqj4rJD2i2b1gFjzcEHwSxD4pIbzbDz+9PH82cv70MH4qIz3mnr2kGz3l3X6w6+0txvHAAAAGXRSTlMA8AiA+FV4yrVC6+VoJRHRzq2ojFvqbigP9aGyyAAAAnxJREFUSMellul6qjAQhhG0am1tbWtPIWHfFxVQ3O39X9YhwTUTpY/Oz4SXGT6+yUSAIXalj/deQ2703j+krgj2IfDVacrn0ex83cb60rMM41nqX0deGjI/Gi9XiNe2fD3arzykxSRhU7Ug8iTXxROLfMr18VmTpT5TC2xjd+WOMLt69k3/moAZbZLdCgEhTupxRDZ1RUtNDCQ//kqI4KWuOInnAui7Qn4agDCtraMY+jSJxoip7oevGQ7XU0OhYWxNzNFOHLKMG+mGWjFqsqwYFC33hhV5OiPPJ1k0f16imwVdW6vKDJ/07gDJtiSBY0fp1vboyjIoV5z9dqcsDfwbzyZPZL8jhOirFzmpcm4emlAUukDnYkoqW++fwR4p1LFO+11BAkxEmbQSOdRJkuxccUkYAGZNarNHNElGCN+92B8Ib4D5zRVtUgk4K4lZyuy/CUPAhDsqMNo5JEk+Yvd7ArQ0psVblNAsTpcLMjfCeWUd24sx2CR5YIw1ZR/2BME8Qw5SELdVjtPyGH4P1M3VCGHvbKfEDN8dAd0GrEMPTomtOZE6mCyZJwasD05OweHGJ4y1Yhjp0m8mdUqCqozFnOZxGaZ79PXJKZ4b0qaJaR59HF4iTfGsf6y9U9bbjJxSaDwtF1Sfbe7OWZ9ilZRVihTZQR55VpFr5UqQxZxzUTyMKb2s49ALju5r1Ajgn9Lz4KjcYoWP/aMahkoQPUVANRJ95nybZEHlATWwU5M1Tp97joZW4gflt6h6As32zT+vMYrDcaEpWuECpH1jLqBxUPZODOfCrflj6jzmYqZKf5tzd8zT++b24/eD+nvI4/ed+nvVw/e3e+6J/wEl4NcwCPxwygAAAABJRU5ErkJggg=="},7311:function(e,t,a){"use strict";var i=a("9691");a.n(i).a},"7e1f":function(e,t,a){"use strict";a.r(t),a("b5aa");var i=a("2c46"),o=a("a98d"),r=(a("3a23"),a("2ef0"),a("a9b5")),s=(a("cb38"),a("6ab6")),n=a("5616"),d={Swipe:s.a,SwipeItem:r.a},c={};for(var l in d)c[d[l].name]=d[l];var m={name:"commodityItem",components:Object(o.a)({dialogSharingMakes:function(e){return Promise.all([a.e("chunk-32d107a6"),a.e("chunk-0722b7cd")]).then(function(){var t=[a("90da")];e.apply(null,t)}.bind(this)).catch(a.oe)}},c),props:{itemData:{type:Object,default:function(){return{spu_id:1,title:"mock",price:1,deliver_count:1,spu_pics:["http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg","https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"]}}},gaInfo:{type:Object}},data:function(){return{dialogs:{sharingFriends:{show:!1}},shareInfo:{},gaInfo:{}}},created:function(){},methods:{cashBack:function(){var e=Object(i.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$emit("cashBackGa",this.itemData),this.$store.state.userInfo.user_id){e.next=5;break}return this.$store.commit("setLoginJumpUrl",""),this.$store.commit("setLoginSelectShow",!0),e.abrupt("return");case 5:return e.next=7,Object(n.c)({spu_id:this.itemData.spu_id});case 7:(t=e.sent)&&t.data?(this.shareInfo=t.data,this.dialogs.sharingFriends.show=!0):this.$toast("Gagal mendapatkan informasi berbagi");case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),jumpBargain:function(){if(this.$emit("jumpBargainGa",this.itemData),!this.$store.state.userInfo.user_id)return this.$store.commit("setLoginJumpUrl",""),void this.$store.commit("setLoginSelectShow",!0);this.$router.push({path:"/bargain",query:{spuId:this.itemData.spu_id}})}}},g=(a("7311"),a("17cc")),u=Object(g.a)(m,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"commodityItem-container"},[i("div",{staticClass:"home-goods-item"},[i("div",{staticClass:"goods-img"},[e.itemData.spu_pics&&e.itemData.spu_pics.length>0?i("van-swipe",{attrs:{autoplay:3e3,"show-indicators":!1,"indicator-color":"white"}},e._l(e.itemData.spu_pics,function(e,t){return i("van-swipe-item",{key:t},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e||a("595f"),expression:"swipeItem || require('@/assets/images/good-large.png')"}]})])}),1):i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.itemData.imgUrl||a("595f"),expression:"itemData.imgUrl || require('@/assets/images/good-large.png')"}]})],1),i("div",{staticClass:"goods-detail"},[i("a",{staticClass:"goods-title",attrs:{href:"javascript:;"},on:{click:e.jumpBargain}},[e._v(e._s(e.itemData.title||""))]),i("p",{staticClass:"goods-description"},[e._v(e._s(e.itemData.sub_title||"mock"))]),i("p",{staticClass:"goods-description"},[e._v(e._s(e.itemData.deliver_count)+" Sent")]),i("div",{staticClass:"goods-price"},[i("span",{staticClass:"discount"},[e._v("RP "+e._s(e.itemData.price||0))]),i("span",{staticClass:"real"},[e._v("RP"+e._s(e.itemData.original_price||0))])])]),i("div",{staticClass:"goods-control"},[i("a",{staticClass:"button-l",attrs:{href:"javascrip:;"},on:{click:e.cashBack}},[e._v("\n        Cash Back\n      ")]),i("a",{staticClass:"button-r",attrs:{href:"javascrip:;"},on:{click:e.jumpBargain}},[e._v("Get a freebie")])])]),e.dialogs.sharingFriends.show?i("dialog-sharing-makes",{attrs:{dialogVisible:e.dialogs.sharingFriends,shareInfo:e.shareInfo,itemData:e.itemData},on:{"update:dialogVisible":function(t){return e.$set(e.dialogs,"sharingFriends",t)},"update:dialog-visible":function(t){return e.$set(e.dialogs,"sharingFriends",t)}}}):e._e()],1)},[],!1,null,"0da4c289",null);t.default=u.exports},9691:function(e,t,a){var i=a("9c26");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,a("85cb").default)("0d2abb05",i,!0,{sourceMap:!1,shadowMode:!1})},"9c26":function(e,t,a){var i=a("5454");(e.exports=a("690e")(!1)).push([e.i,'.home-goods-item[data-v-0da4c289]{border-radius:.26667rem;background-color:#fff;overflow:hidden}.home-goods-item+.home-goods-item[data-v-0da4c289]{margin-top:.8rem}.home-goods-item>.goods-img img[data-v-0da4c289]{width:100%;height:9.2rem}.home-goods-item>.goods-detail[data-v-0da4c289]{padding:.65333rem .41333rem 0 .41333rem;overflow:hidden}.home-goods-item>.goods-detail>.goods-title[data-v-0da4c289]{display:block;font-size:.48rem;color:#323232;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home-goods-item>.goods-detail>.goods-description[data-v-0da4c289]{line-height:.53333rem;font-size:.32rem;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home-goods-item>.goods-detail>.goods-price[data-v-0da4c289]{padding:.13333rem 0;line-height:.58667rem}.home-goods-item>.goods-detail>.goods-price>.discount[data-v-0da4c289]{font-size:.58667rem;color:#d30c05}.home-goods-item>.goods-detail>.goods-price>.real[data-v-0da4c289]{padding-left:.22667rem;font-size:.32rem;color:#888;text-decoration:line-through}.home-goods-item>.goods-control[data-v-0da4c289]{padding:0 .41333rem .52rem .41333rem;height:.93333rem}.home-goods-item>.goods-control>.button-l[data-v-0da4c289]{position:relative;display:inline-block;font-size:.37333rem;color:#fff;text-indent:1.12rem;line-height:.93333rem;width:3.46667rem;height:.93333rem;background:-webkit-linear-gradient(left,#f6ae01,#f64b01);background:linear-gradient(90deg,#f6ae01,#f64b01);border-radius:.46667rem;text-decoration:none}.home-goods-item>.goods-control>.button-l[data-v-0da4c289]:before{content:"";display:block;width:.45333rem;height:.45333rem;position:absolute;top:.24rem;left:.52rem;background:url('+i(a("dd20"))+') no-repeat;background-size:100% auto}.home-goods-item>.goods-control>.button-r[data-v-0da4c289]{position:relative;float:right;font-size:.37333rem;color:#fff;text-indent:.85333rem;line-height:.93333rem;width:3.46667rem;height:.93333rem;background:-webkit-linear-gradient(left,#f64e01,#d30c05);background:linear-gradient(90deg,#f64e01,#d30c05);border-radius:.46667rem;text-decoration:none}.home-goods-item>.goods-control>.button-r[data-v-0da4c289]:before{content:"";display:block;width:.45333rem;height:.45333rem;position:absolute;top:.24rem;left:.25333rem;background:url('+i(a("67fa"))+") no-repeat;background-size:100% auto}",""])},dd20:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAqFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////2pgD2ogD//Pf3rBD/+/P71YP3sBn96Lv2qQf6x1z4tyz4tCX++Oj6zXD+8tr+78/968b84qz+9uT84KT70Hf++e383Z372pT6y2b4uTX85LD72Iz4wEf5vD04lUmzAAAAGXRSTlMA+1YF68SbENbR49m3lX8xLBerZkDKZ0Ktzp3axgAAAfFJREFUOMudldl2okAQhptdXHGJCVVNs4MgEpfRvP+bTYeTGamW8czxv2w+y9qL9WU4i/Vs6o5Nc+xOZ+uFY7B/aKnb1sTU/E6aObFsfTkIOrrt+opcW3ceSW8+8gc0mnsKaGxWmj8obfVuEFK3CElYSzf65Jv/RG931thY5BMvCkEerM0f1ltRK7uyjOnL6ic2Z674GQO2DfV37nSormSJHwG/wlrwfs70rkY2NVqVOUAS5WnVN2svZUzUqFanAQIgYvBLI2YN5lCjRZpIMsoiDPacmHXYwiJ+xhFCkoWHMMsI6lsLtp70Hz7DADE/Co3XYUzQyZrNTPL/rUQvdfcrQTwzZ2xKXZVWIWjFQCtMmavkVKIQtfEj7LIxfaguCFKXsOYKOmYmfRDXHDv4a6+wpkQV9pSBFGKmsCZ1oIs8PueAkr3tFAdc/0G7QxoByMrSsO7JInAaACYnTpNFS6D9fD1kEr0KWgJaWFE1/C965P3CbpV2Ka7pd+81aQIYxLRdlCZsyuDSnk4yLITbjjah0tpFmSBEEUrle0FbWxmYz/AbA6k8FHRg1DHk9TkPEoDgRms10h+HmzdVfAY4V3xouJn34RMdEENamA+PLCK6XbiyiP5/vb2yNCX7/mwVv7Tgn5+N144RPXHb+4nbKifuNwr3iwuuvmWyAAAAAElFTkSuQmCC"}}]);