(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0d66c106"],{"14ea":function(e,t,a){"use strict";var i=a("25c9e");a.n(i).a},"25c9e":function(e,t,a){var i=a("99d3");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,a("499e").default)("a88788d6",i,!0,{sourceMap:!1,shadowMode:!1})},5616:function(e,t,a){"use strict";a.d(t,"c",function(){return o}),a.d(t,"a",function(){return r}),a.d(t,"b",function(){return s});var i=a("007a");function o(e){var t=e.spu_id;return i.a.get({url:"/api/v1/share/share_spu",data:{spu_id:t}})}function r(e){var t=e.bargain_id;return i.a.get({url:"/api/v1/share/share_bargain",data:{bargain_id:t}})}function s(e){var t=e.relation_id;return i.a.get({url:"/api/v1/share/get_share_info",data:{relation_id:t}})}},"595f":function(e,t,a){e.exports=a.p+"img/good-large.47423e8c.png"},"67fa":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAMAAAANf8AYAAABAlBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vPwHvQwb//fz/+vj+8u3xUhr+7+r81cfyZTT94dj3n4DyXSj959/5sZjwRwz/+PX97Ob83tT7yrn5t5/4rJD2i2b0eU7zcEHwSxD4pIb1iGHzbDzwTRTwRQn+9PH83ND82cv70MH5uaL4qIz3mnr1gVn0dUjyYS3xWiXxWCHxVR/wTxb5vKb3l3X6v6r6w6/5s5r2kG32j2r1hV30flX2kW4Erz7oAAAAH3RSTlMACID48VV47sq1QgLr5WglEdHOraiM6vXyblxbVygPwAxtEAAAArZJREFUSMedlmd/2jAQxm1DQiALQkLbpI1tvBcbs/eeWe33/yqVZKbOQH48Ly39fdKj050YKDbCPT7cBvng7cMjF2HBOARewgF+V4Hwy3Esyt3wUDdc9CBxfRfi/RW6u/ZH7q/4w7q690MugvwxBS8gcsmf0iWNPPGn9XQiyulIv8FwWutoGYn+urOnPz8Ak+lXFx0VGLFx7xqanMxawrTQSidpy9fndMcDSW1LqH85Wpoe+OUhryGwmVb3cyY0rFLVzKn7oUKv/p6ljV4pJRClPrKSj3dsgmY0c5QSPUastj1GNdurhGVxztCI7Og4iqLXrJTYbxJLeqJQlrZ+h2mm9YkD1Idm4WPokN20J+hLfbWxMFpagGbeXTyj+JZRVfLr5l8BqZZdX0KWiQCfKyW8st5qjuSk8C/y2/EIwwHGxMy04CWBMcJBivLOOMfEAdMbolluhrhexISu7Y3HmRhg3gaCsiQGvpcRUS5QCRRjEoAxFsRgeTHDQQYZevyWCcBcI4vPE0Lp8kA/Gd5XRs1LnaFjS2AQx4HKKcJK7lKGcRKQSFZEnAmEUQY23A/0TZtiwl0MZwhr6BptQgycj7zOFLtbw1ZPlm1qRpzKg6TTQPNmeWyf0dcx0+1QDLefb6gKIFW9tFErNczMNYqJbPJ6mymOZjSTKKRN4lg5Yx8JsDv3J7/KlN6/Iq5Saq6EPoh6izqg8M49lbC5X8gk0x0PTCdfGSjoy7ho+9RF9ma1fQutY30X6iOdHGvDnVNnSurBxrlmR+LXjNhIiRgZFeQk7RpWlKpv8+LEywFx7BZadMeL+tZRo1vVx2gvolWdy6CO+tdrSbaNXEURlIomw3p9uC/IubEwzduwLxzrP9mRH7PXU7nv9bnz+un5ffv898Hpd8h5753z31VQ7DN4vz2D99sZ78T/xuoPq5C6zhwAAAAASUVORK5CYII="},"7e1f":function(e,t,a){"use strict";a.r(t),a("96cf");var i=a("3b8d"),o=a("cebc"),r=(a("7f7f"),a("4b0a"),a("2bb1")),s=(a("7844"),a("5596")),n=a("5616"),d={Swipe:s.a,SwipeItem:r.a},c={};for(var l in d)c[d[l].name]=d[l];var g={name:"commodityItem",components:Object(o.a)({dialogSharingMakes:function(e){return Promise.all([a.e("chunk-d3ab3e20"),a.e("chunk-2b3cf184")]).then(function(){var t=[a("90da")];e.apply(null,t)}.bind(this)).catch(a.oe)}},c),props:{itemData:{type:Object,default:function(){return{spu_id:1,title:"mock",price:1,deliver_count:1,spu_pics:["http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg","https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"]}}}},data:function(){return{dialogs:{sharingFriends:{show:!1}},shareInfo:{}}},created:function(){},methods:{cashBack:function(){var e=Object(i.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$store.state.userInfo.user_id){e.next=4;break}return this.$store.commit("setLoginJumpUrl",""),this.$store.commit("setLoginSelectShow",!0),e.abrupt("return");case 4:return e.next=6,Object(n.c)({spu_id:this.itemData.spu_id});case 6:(t=e.sent)&&t.data&&(this.shareInfo=t.data),this.dialogs.sharingFriends.show=!0;case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),jumpBargain:function(){if(!this.$store.state.userInfo.user_id)return this.$store.commit("setLoginJumpUrl",""),void this.$store.commit("setLoginSelectShow",!0);this.$router.push({path:"/bargain",query:{spuId:this.itemData.spu_id}})}}},u=(a("14ea"),a("2877")),m=Object(u.a)(g,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"commodityItem-container"},[i("div",{staticClass:"home-goods-item"},[i("div",{staticClass:"goods-img"},[e.itemData.spu_pics&&e.itemData.spu_pics.length>0?i("van-swipe",{attrs:{autoplay:3e3,"show-indicators":!1,"indicator-color":"white"}},e._l(e.itemData.spu_pics,function(e,t){return i("van-swipe-item",{key:t},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e||a("595f"),expression:"swipeItem || require('@/assets/images/good-large.png')"}]})])}),1):i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.itemData.imgUrl||a("595f"),expression:"itemData.imgUrl || require('@/assets/images/good-large.png')"}]})],1),i("div",{staticClass:"goods-detail"},[i("a",{staticClass:"goods-title",attrs:{href:"javascript:;"},on:{click:e.jumpBargain}},[e._v(e._s(e.itemData.title||""))]),i("p",{staticClass:"goods-description"},[e._v(e._s(e.itemData.sub_title||"mock"))]),i("p",{staticClass:"goods-description"},[e._v(e._s(e.itemData.deliver_count)+" Sent")]),i("div",{staticClass:"goods-price"},[i("span",{staticClass:"discount"},[e._v("RP "+e._s(e.itemData.price||0))]),i("span",{staticClass:"real"},[e._v("RP"+e._s(e.itemData.original_price||0))])])]),i("div",{staticClass:"goods-control"},[i("a",{staticClass:"button-l",attrs:{href:"javascrip:;"},on:{click:e.cashBack}},[e._v("\n        Cash Back\n      ")]),i("a",{staticClass:"button-r",attrs:{href:"javascrip:;"},on:{click:e.jumpBargain}},[e._v("Get a freebie")])])]),e.dialogs.sharingFriends.show?i("dialog-sharing-makes",{attrs:{dialogVisible:e.dialogs.sharingFriends,shareInfo:e.shareInfo,itemData:e.itemData},on:{"update:dialogVisible":function(t){return e.$set(e.dialogs,"sharingFriends",t)},"update:dialog-visible":function(t){return e.$set(e.dialogs,"sharingFriends",t)}}}):e._e()],1)},[],!1,null,"d4a013c0",null);t.default=m.exports},"99d3":function(e,t,a){var i=a("b041");(e.exports=a("2350")(!1)).push([e.i,'.home-goods-item[data-v-d4a013c0]{border-radius:.26667rem;background-color:#fff;overflow:hidden}.home-goods-item+.home-goods-item[data-v-d4a013c0]{margin-top:.8rem}.home-goods-item>.goods-img img[data-v-d4a013c0]{width:100%;height:9.2rem}.home-goods-item>.goods-detail[data-v-d4a013c0]{padding:.65333rem .41333rem 0 .41333rem;overflow:hidden}.home-goods-item>.goods-detail>.goods-title[data-v-d4a013c0]{display:block;font-size:.48rem;color:#323232;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home-goods-item>.goods-detail>.goods-description[data-v-d4a013c0]{line-height:.53333rem;font-size:.32rem;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home-goods-item>.goods-detail>.goods-price[data-v-d4a013c0]{padding:.13333rem 0;line-height:.58667rem}.home-goods-item>.goods-detail>.goods-price>.discount[data-v-d4a013c0]{font-size:.58667rem;color:#d30c05}.home-goods-item>.goods-detail>.goods-price>.real[data-v-d4a013c0]{padding-left:.22667rem;font-size:.32rem;color:#888;text-decoration:line-through}.home-goods-item>.goods-control[data-v-d4a013c0]{padding:0 .41333rem .52rem .41333rem;height:.93333rem}.home-goods-item>.goods-control>.button-l[data-v-d4a013c0]{position:relative;display:inline-block;font-size:.37333rem;color:#fff;text-indent:1.12rem;line-height:.93333rem;width:3.46667rem;height:.93333rem;background:-webkit-linear-gradient(left,#f6ae01,#f64b01);background:linear-gradient(90deg,#f6ae01,#f64b01);border-radius:.46667rem;text-decoration:none}.home-goods-item>.goods-control>.button-l[data-v-d4a013c0]:before{content:"";display:block;width:.45333rem;height:.45333rem;position:absolute;top:.24rem;left:.52rem;background:url('+i(a("dd20"))+') no-repeat;background-size:100% auto}.home-goods-item>.goods-control>.button-r[data-v-d4a013c0]{position:relative;float:right;font-size:.37333rem;color:#fff;text-indent:.85333rem;line-height:.93333rem;width:3.46667rem;height:.93333rem;background:-webkit-linear-gradient(left,#f64e01,#d30c05);background:linear-gradient(90deg,#f64e01,#d30c05);border-radius:.46667rem;text-decoration:none}.home-goods-item>.goods-control>.button-r[data-v-d4a013c0]:before{content:"";display:block;width:.45333rem;height:.45333rem;position:absolute;top:.24rem;left:.25333rem;background:url('+i(a("67fa"))+") no-repeat;background-size:100% auto}",""])},b041:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},dd20:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAA3lBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2pgD2ogD/+/P//Pf//vr3rxj2qQf4tyz3qw/++Oj957n71YX6zXD+8tr968b84qz6x1z4tCX3rhP+9uT+7s784KT70Hf2ngD++e383Z372pT6zGn4uTX85LD72Iz703/96b/5yWH4wEj5vD33siD+8NL4v0YOtHfzAAAAInRSTlMA+psQ1tFXVQcE/erj2cXCMSwXt+yrlWZAypaAf2dCrX640XBFbgAAAiVJREFUOMuVled2qkAQgBEEFOw9GpNcd+mComAhlmjazfu/UFYO5uyM5hwzP4eP2ekj8FKQat1OUy7pekludro1qSD8Ig1FrJb13CiVnF6uikrjKiipojxCIouqdEnWn/KjK5J/qiOw0GtnD2PJtR+Ax0WlAkjAVpQiZ1O9wwAvd2rhx2avAj6Z47EBFJXe2W69Da1MJ5NXqGlnsUn3yE+f0PUC+nsvpaiKsmRuCP0IQsPic6amNRI1QC4nESGOHc2XnFITGywmaFQL5x4lhNIkftGA2aIgicDT8dxhpO3aSTyzeG9FSahVedLybUoc97g6ui5AR9Wa0C3ziufAozTaGJoVBr7Jfyl3hU4LvL9m6D5M/zJAuK2O0ISuHllQ8dq40gpNQUY5jU9Rrf1LWBZKULHcU8JkH4QmQkuCDhXGIaIp/DFDrM5QxG7dE0mpi1gdO8Ai93efhDL2a4ockC+Dna7mNrPrvcCwsmRh+M0j1NmafLL+oRJoWTFXLkMPBl+CPiqs8X9h/aAbiy/sELXL+PB26r3F3CE09mG7oCZcTOL9ertlYVHyPkVNWFTyvNWJkxDbpkyiGe9qXimigXkOThhhEgUGHBg8hla4+/QcQrx3WKu8cjnc5mL5uiNkt7RABw6kbGU8wgKskiSAU/xYB4sIbBffRIvo9vX216WZ2X24aRVnsQ2uL/hB/dazoUi/H6PW+Ri18DHCJ27YP5+4/hCduG9Dmryy2iRYUwAAAABJRU5ErkJggg=="}}]);