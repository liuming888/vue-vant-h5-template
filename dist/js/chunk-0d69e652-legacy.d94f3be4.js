(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d69e652"],{"09aa":function(t,e,a){"use strict";var s=a("117e"),i=a.n(s);i.a},"117e":function(t,e,a){},"226c":function(t,e,a){"use strict";var s=a("c1fc"),i=a.n(s);i.a},"2ef0":function(t,e,a){"use strict";a("36d9"),a("9cd2")},"3f9a":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"freebing-container"},[s("div",{staticClass:"good-box"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.spuBargainItem.spu_pics[0],expression:"spuBargainItem.spu_pics[0]"}],staticClass:"good-img"}),s("div",{staticClass:"good-detail"},[s("p",{staticClass:"good-title"},[t._v(t._s(t.spuBargainItem.title))]),s("count-down",{attrs:{dateDiff:t.spuBargainItem.expire_ttl}}),s("div",{staticClass:"left-box"},[s("div",{staticClass:"num-box"},[s("span",{staticClass:"rp-box"},[t._v("Rp"+t._s(t.spuBargainItem.bargain_amount))]),s("span",{staticClass:"compeled"},[t._v("completed")])]),s("div",{staticClass:"progress"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("ae4a"),expression:"require('@/assets/images/progress-bar.png')"}],attrs:{width:t.spuBargainItem.bargain_rate+"%"}}),s("div",{staticClass:"progress-content"},[s("span",[t._v("has been cut "+t._s(t.spuBargainItem.bargain_amount))]),s("span",[t._v(t._s(t.spuBargainItem.bargain_rate)+"%")])])])]),s("div",{staticClass:"goods-control"},[1==t.spuBargainItem.status?s("a",{staticClass:"go-on-btn",class:{"r-b":2==t.spuBargainItem.can_buy},attrs:{href:"javascrip:;"},on:{click:t.jumpBargain}},[t._v("\n            Go On\n          ")]):t._e(),1==t.spuBargainItem.can_buy?s("a",{staticClass:"buy-btn r-b",attrs:{href:"javascrip:;"},on:{click:t.jumpPurchasePage}},[t._v("Buy")]):t._e()])],1)])])])},i=[],n=a("cd26"),r=(a("5616"),{name:"aCommodityThatIsBeingBargained",components:{countDown:n["a"]},props:{spuBargainItem:{type:Object,default:function(){return{spu_id:1,title:"mock",bargain_rate:1,bargain_coin:"mock",expire_time:"mock",bargain_id:"mock"}}}},data:function(){return{expirationDat:{h:"00",p:"00",m:"00"},dialogs:{sharingFriends:{show:!1}},shareInfo:{}}},created:function(){this.init()},methods:{init:function(){this.refreshTime()},jumpPurchasePage:function(){var t=this.spuBargainItem,e=t.spu_id,a=t.bargain_id,s=t.order_no;this.$router.push({path:"/purchase",query:{spuId:e,bargainId:a,orderNo:s}})},refreshTime:function(){var t=this,e=this.$util.expiration(this.spuBargainItem.expire_time);if(e){this.expirationDat=e;var a=setInterval(function(){t.expirationDat=t.$util.expiration(t.spuBargainItem.expire_time)},1e3);this.$once("hook:beforeDestroy",function(){clearInterval(a)})}},jumpBargain:function(){this.$router.push({path:"/bargain",query:{spuId:this.spuBargainItem.spu_id,bargainId:this.spuBargainItem.bargain_id}})}}}),o=r,c=(a("ef10"),a("17cc")),g=Object(c["a"])(o,s,i,!1,null,"4ca8d06e",null);e["a"]=g.exports},"42fb":function(t,e,a){},"44fc":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAABYlBMVEUAAADUDgXZFwTdHQTVDgXXEwXYFQXWEAXlLQPXEgXdHwTZFwXYFAXjKQTqNwPoMgPvQALVEAXbGQTZFwTbGwThJQTWEQXuPgPYFQTZFgTeHwTmLwPkLAPaGQTiJwPvPwLcHATuPQLvPwLXEwXeIATuPgPqNgPrOAPgJQTuPQLvPwLtPAPeHwTWEQXfIQTaFwTpNQPYFQTUDgXcHATkKwPqNgPuPgPhJQTWEQXoMgPuPQPWEQXvPwLvPwLvQALZGATrOQPtPQLbGwTrOQPuPgPbHATrOgPvQAPvQQLUDgXfIgTuPwPUDgXWEgXvQQLdHwTgJQTjKwTcHQTeIQTtPgPvQALvQQLUDgXbGgTeIATWEQXfIgTdHgTgJATcHATXEwXhJgTiKATVDwXZFwTYFQXoNAPqNgPrOAPnMQPsOgPtPAPlLQPkLAPjKQTmMAPuPgPmLwPoMgPjKwTkKwTvQALZFgUqIsLLAAAAV3RSTlMAk2Rk8JO8k/C8HPDw8PDw49q8vBjx8O55OjYRC/DczJ6ahoSEfl0yKyL78/Ls7N3VzsLCvbGjkIWFcG1pYVQoFA/k5NbRycG2tLSxopuTimtnYFRORzvWgxI1AAACtklEQVRYw63XZ1sTQRSG4ZViCZZEo6mmIgQQEKlSBOy9lxAICiQQTDGJ8f+7Z2bPdTaT7M7OyPMD7mvmzeyHGG7FNt4l/SF/cml9wtBsO+PvdDq/oV9TaT3mIRHQ1KqGkekiTs0WtxUJ3wtmIAGdnNwbVzK++a1jEGF2fDymYKxP2m+CBPTAs5EWCTTK5fLilidi4rk4BhHlVsvTMF9DfcYgo1KpyIdZdboJEpVGQzJMfElONJrNhaCLkUv2vUmZG0hUq9VE1PmhT7qPUbGIWq3256ODccftJkRUTaJdry/3I7ZeSwg8BjcODhZ8Pcb4E+kYRJiGWSIiGBt4DMkYRPw0+yDM4W2MWrtNRLFYHLUbKmMQUdzdJeWL4hhAMMPsMz7TkPIYSOzs3I1xJKM4BhHQe2bEQqeQdIy6nUBjb48fZUxhDDSQgD4BktYYg4j9/RQgzxzGaErGYITZHCCPu4iWlzGQgPKPALmqexNG5PO3GfI/BCHyN947BhqIlCGNMXhHI4io3oSII45cE964NwINRNTHQAIqccThjUvHgP6WSpcZoj4GHaOEiP2DV7sJ9IMhF3XH4IaFOIxRlIzBCUR0xuAE6xZDdMdgFQocUXjjSJCBiPwm4hhEIHJFd4wCb4ghSmOIxuEhR3rHWB60NWBvmAhuICIeYyZqOBed7iYQEW8yaLg1QATrO0NuimMEXZEgjmEZFiK+jE1XZJMbSCAi/qwpV+StnSCk52WMxh2JeNZOEDLT+zJmr0M3oPPYJVaAxsCmAUl4+uDF34QKAPJK4Y0TQb0EJGw/hgKBhQHJef5MyLCXM6B5jTGo+9bnoDEGFTF4KeUxqDcG9lQgvBtztv/js0pjUAGfQQXnVW5CowoffHhE+rOKDYUNMV82oHaTFbqKvchadhi7YHWubytrEeOs+wf4IvSz5F9qHgAAAABJRU5ErkJggg=="},4674:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAmVBMVEUAAADY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2Nj////X19f7+/vV1dXk5OTe3t7b29v09PTt7e35+fn29vbr6+vv7+/m5ubg4ODo6OixkGbDAAAAInRSTlMA18dV6g3R7i/34pqSdR6tfig02m4IsbxcWCMVE3tps6mA9TsOuQAAA19JREFUWMPNmOl24jAMhScLBJJAwlKWUkpHcWI7e/L+DzdyUkoXmeVk5py57Y+2h35cCUmW8+sf6ukwsY7exjRc27Fdw9x4R2tyeHoIMbFmfmCu7Cn0mtorM/Bn1uRuzMvE8k0HfsoxfWvychdjsd4YNgNKzDY268VtxPPOG8M1jb3d83XEaBmOGVwXG4fL0TXG/s1lcEvMfbP0lPnrdgr3aLp9nesYMzIUOqTZnGaEBoO7ZYRz0ocBj8ggvIxeNQzGmIayHn1nWFt4EALb/TfK8s0BUlIIIYGUEyy/1mno0jaAl1ktgDbjhl9qd6cp9USWeVxxSDQf9O5zz3mMfFGSsDKKCp6gyFd4i0vvr8dkRkFKUUVRXgopJRnSeP3yYSSYUjYkL9M0j6I4TyuVGELTYPHx8RqUD1Ej4aw4zbikiuXcihPfplPa/Td+x3GEqigvtj/pB6plsp8+JC8izGlW5XFaZin+nMmEMGxa3dg9zBwqmAzfPq0xpjgTgldp1pCpdWaHPhoqI8pI3ALwAiEAohFAq49nH1AfTY1GiiZhHYQlDP9EQ4K9ghxNCtJGGE2TvDth+KWReVQQb0U66SHsDNFq5SnIxiZzkmOp1uw2xD4piDmlIE2qrPCmLuJS9q1Da2oqiAFkvZaqzIqqytGJBNCbMRTEBVLKCmIQha1Tcn1IroLYQIlJLLPorFy1jgZjK4gDtCTHUD51oG40OXonKgmCt1kRY0g9RYDeiQtX5rwoc9WFhUpNK/U5MUBP6Sq2EpKnykpDnh7GpU5odRA1A2pVezxhujo52bcg2ICNslJTEOek6x0U+wGJEKLrndCk86EG/B1OzLCbJxvSR1NziS3znpMWc1KQOdl082Tpk4wqT2vJZAeRtTJSCUZA/KVmxjLoRmxRlW2WRzioC1X6HOgZq5n2fZEp5fm5YvNSN+31545osf8uiotWAiPPHf0JyJhs2iwt8hgB3SyQDPQnoP4sBsF5m2IgGReSMf1ZfNkK6DVLYoJTLhP12/WtAPcTbQPilCQmCbGfDN+Ubu9srXZn+/3817bH4Xvs8I2a2O1X8IhWszl9y4ABt4xB953hNy/6Dhi4cFvkHXD4bXT4vXj4DX34s4LhTy1ua9Q9Pzl9PD85eUdreRj9+t/1B2O5vYq13ezQAAAAAElFTkSuQmCC"},5014:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabBar-container",on:{touchmove:function(t){t.preventDefault()}}},t._l(t.tabBarList,function(e,s){return a("span",{key:s,class:{"tabBar-item":!0,active:t.activeRouter===e.path},on:{click:function(a){return t.jumpPage(e.path)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.activeRouter===e.path?e.imgActiveUrl:e.imgUrl,expression:"activeRouter === item.path ? item.imgActiveUrl : item.imgUrl"}],staticClass:"tabBar-item-img"}),a("p",[t._v(t._s(e.title))])])}),0)},i=[],n={data:function(){return{tabBarList:[{path:"/",title:"Home",imgUrl:a("c122"),imgActiveUrl:a("44fc")},{path:"/my",title:"Me",imgUrl:a("4674"),imgActiveUrl:a("ec87")}]}},computed:{activeRouter:function(){return this.$route.path}},methods:{stopDefault:function(t){t.stopPropagation()},jumpPage:function(t){if("/my"==t&&!this.$store.state.userInfo.user_id)return this.$store.commit("setLoginJumpUrl","/my"),void this.$store.commit("setLoginSelectShow",!0);this.$router.push(t)}}},r=n,o=(a("b1f2"),a("17cc")),c=Object(o["a"])(r,s,i,!1,null,"741c17ba",null);e["a"]=c.exports},"552d":function(t,e,a){"use strict";var s=a("aa96"),i=a.n(s);i.a},"77b8":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"home-container"},[s("section",{staticClass:"home-top-container"},[t.messageList.length>0?s("user-picking-up-message",{attrs:{messageList:t.messageList}}):t._e(),s("van-swipe",{staticClass:"home-banner",attrs:{autoplay:5e3,"show-indicators":!1,"indicator-color":"white"}},[t.bannerList.length>0?t._l(t.bannerList,function(t){return s("van-swipe-item",{key:t.id},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.url,expression:"item.url"}]})])}):s("van-swipe-item",[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("89dc"),expression:"require('@/assets/images/home-banner.png')"}]})])],2),t.homeBargainList.length?s("div",{staticClass:"freebing-box"},[s("div",{staticClass:"freebing-title"},[t._v("Ongoing Freebies")]),t._l(t.homeBargainList,function(t,e){return[s("freebing-box",{key:e,attrs:{spuBargainItem:Object.assign({},t.bargain_info,t.spu)}})]}),s("a",{staticClass:"freebing-more",attrs:{href:"javascript:;"},on:{click:function(e){return t.$router.push({path:"/isBargainingList"})}}},[t._v("More About >")])],2):t._e()],1),t.goodsList.length>0?s("section",{staticClass:"home-goods"},[t.goodsList.length>0&&t.spuBargainList.length>0&&t.spuBargainList.some(function(t){return 1==t.bargain_info.status})?s("div",{staticClass:"home-goods-title"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("826b"),expression:"require('@/assets/images/gengduotop.png')"}]})]):t._e(),s("ul",{staticClass:"home-goods-list"},t._l(t.goodsList,function(t,e){return s("commodity-item",{key:e,attrs:{itemData:t}})}),1)]):t._e()]),s("tabBar")],1)},i=[],n=a("f46d"),r=a.n(n),o=(a("b5aa"),a("2c46")),c=a("a98d"),g=(a("3a23"),a("2ef0"),a("a9b5")),u=(a("cb38"),a("6ab6")),m=a("5014"),p=a("f6b6"),l=a("3f9a"),d=a("7e1f"),h=a("7f43"),A=a.n(h),f=a("007a");function v(){return f["a"].post({url:"/api/v1/tip/get_home_tip"})}function b(){return f["a"].get({url:"/api/v1/sys/get_banners "})}var T=a("3007"),w=a("996b"),P={Swipe:u["a"],SwipeItem:g["a"]},Q={};for(var k in P)Q[P[k].name]=P[k];var L={components:Object(c["a"])({tabBar:m["a"],userPickingUpMessage:p["a"],FreebingBox:l["a"],commodityItem:d["a"]},Q),data:function(){return{messageList:[],bannerList:[],bargainOrderSpusList:[],spuBargainList:[],goodsList:[],goodsListPageDat:{page_size:10,page_num:1}}},computed:{homeBargainList:function(){var t=this.bargainOrderSpusList,e=this.spuBargainList;if(console.log("bargainOrderSpusList, spuBargainList: ",t,e),t.length>=2)return t.slice(0,2);if(t.length>0&&t.length<2){var a=[t[0]];return e.length>0&&a.push(e[0]),a}return e.length>0?e:[]}},created:function(){this.init()},methods:{init:function(){this.initBanners(),this.initHomeTip(),localStorage.getItem("userInfo")&&(this.initBargainOrderSpusList(),this.initMybargainSpus()),this.initGoodsList(Object(c["a"])({},this.goodsListPageDat))},initBargainOrderSpusList:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(w["c"])({page_size:2,page_num:1});case 2:e=t.sent,e&&e.data&&(this.bargainOrderSpusList=e.data.filter(function(t){return t.bargain_info.order_expire_time>0&&1==t.bargain_info.order_status}));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initBanners:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:e=t.sent,e&&e.data&&(this.bannerList=e.data);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initHomeTip:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:e=t.sent,e&&e.data&&(this.messageList=e.data.home_tips,console.log("this.messageList: ",this.messageList));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initMybargainSpus:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(w["d"])({page_size:2,page_num:1});case 2:e=t.sent,console.log("result: ",e),e&&e.data&&(this.spuBargainList=e.data);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initGoodsList:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var a,s,i,n,o,c,g;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.page_size,s=e.page_num,i=e.is_all,n=void 0===i?0:i,o=this.$store.state.goodsList.filter(function(t){return!t.isBargain}),!(o.length>6)){t.next=5;break}return this.goodsList=o,t.abrupt("return");case 5:return t.next=7,Object(w["a"])({page_size:a,page_num:s,is_all:n});case 7:c=t.sent,c&&c.data&&(this.goodsList=c.data.spu_list,1==s?this.$store.commit("setGoodsList",this.goodsList):(g=JSON.parse(r()(this.$store.state.goodsList)),this.$store.commit("setGoodsList",g.push(c.data.spu_list))));case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),testLogin:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,a,s,i,n,o,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.$faceBookApi.loginFB();case 2:if(e=t.sent,console.warn("loginInfo: ",e),!e){t.next=19;break}return a=e.authResponse.accessToken,s=e.id,i=e.name,n=e.pic_square,t.next=8,Object(T["g"])({tp_id:s,tp_token:a,tp_type:1,tp_username:i,tp_avatar:n});case 8:if(o=t.sent,console.log("result: ",o),!o||!o.data){t.next=19;break}return c=o.data,this.$store.commit("setUserInfo",c),localStorage.setItem("userInfo",r()(c)),A.a.defaults.headers.common["User-Id"]=c.user_id,A.a.defaults.headers.common["Access-Token"]=c.access_token,this.$emit("update:dialogVisible",{show:!1}),this.jumpUrl&&this.$router.push({path:this.jumpUrl}),t.abrupt("return",!0);case 19:return t.abrupt("return",!1);case 20:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},I=L,E=(a("936e"),a("17cc")),j=Object(E["a"])(I,s,i,!1,null,"bbfa4940",null);e["default"]=j.exports},"7e1f":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"commodityItem-container"},[s("div",{staticClass:"home-goods-item"},[s("div",{staticClass:"goods-img"},[t.itemData.spu_pics&&t.itemData.spu_pics.length>0?s("van-swipe",{attrs:{autoplay:3e3,"show-indicators":!1,"indicator-color":"white"}},t._l(t.itemData.spu_pics,function(t,e){return s("van-swipe-item",{key:e},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t||a("595f"),expression:"swipeItem || require('@/assets/images/good-large.png')"}]})])}),1):s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.itemData.imgUrl||a("595f"),expression:"itemData.imgUrl || require('@/assets/images/good-large.png')"}]})],1),s("div",{staticClass:"goods-detail"},[s("a",{staticClass:"goods-title",attrs:{href:"javascript:;"},on:{click:t.jumpBargain}},[t._v(t._s(t.itemData.title||""))]),s("p",{staticClass:"goods-description"},[t._v(t._s(t.itemData.sub_title||"mock"))]),s("p",{staticClass:"goods-description"},[t._v(t._s(t.itemData.deliver_count)+" Sent")]),s("div",{staticClass:"goods-price"},[s("span",{staticClass:"discount"},[t._v("RP "+t._s(t.itemData.price||0))]),s("span",{staticClass:"real"},[t._v("RP"+t._s(t.itemData.original_price||0))])])]),s("div",{staticClass:"goods-control"},[s("a",{staticClass:"button-l",attrs:{href:"javascrip:;"},on:{click:t.cashBack}},[t._v("\n        Cash Back\n      ")]),s("a",{staticClass:"button-r",attrs:{href:"javascrip:;"},on:{click:t.jumpBargain}},[t._v("Get a freebie")])])]),t.dialogs.sharingFriends.show?s("dialog-sharing-makes",{attrs:{dialogVisible:t.dialogs.sharingFriends,shareInfo:t.shareInfo,itemData:t.itemData},on:{"update:dialogVisible":function(e){return t.$set(t.dialogs,"sharingFriends",e)},"update:dialog-visible":function(e){return t.$set(t.dialogs,"sharingFriends",e)}}}):t._e()],1)},i=[],n=(a("b5aa"),a("2c46")),r=a("a98d"),o=(a("3a23"),a("2ef0"),a("a9b5")),c=(a("cb38"),a("6ab6")),g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogVisible.show,expression:"dialogVisible.show"}],staticClass:"dialogSharingMakes-container",on:{click:function(e){e.stopPropagation(),t.abc=1}}},[s("div",{staticClass:"share-box"},[s("h5",{staticClass:"tit"},[t._v("Share to your friends.You will gain bonus if your friends buy it.")]),s("div",{staticClass:"content"},[s("div",{staticClass:"good-box"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.itemData.spu_pics&&t.itemData.spu_pics[0],expression:"itemData.spu_pics&&itemData.spu_pics[0]"}],staticClass:"good-img"}),s("div",{staticClass:"right-box"},[s("div",{staticClass:"good-tit"},[t._v("\n            "+t._s(t.itemData.title)+"\n          ")]),s("div",{staticClass:"old-m"},[t._v("Rp"+t._s(t.itemData.original_price))]),s("div",{staticClass:"cur-n"},[s("span",{staticClass:"rp"},[t._v("Rp")]),t._v(t._s(t.itemData.price)+"\n          ")])])]),s("div",{staticClass:"share-to"},[t._v("Share To")]),s("div",{staticClass:"share-types"},[s("div",{staticClass:"share-item"},[s("img",{attrs:{src:a("23b7")},on:{click:t.mx_shareFacebook}}),s("p",[t._v("Facebook")])]),s("div",{staticClass:"share-item"},[s("img",{attrs:{src:a("fe82")},on:{click:t.mx_shareLine}}),s("p",[t._v("LINE")])]),s("div",{staticClass:"share-item"},[s("img",{attrs:{src:a("d253")},on:{click:t.mx_shareWhatsapp}}),s("p",[t._v("WhatsApp")])]),s("div",{staticClass:"share-item"},[s("img",{attrs:{src:a("c64e")},on:{click:t.mx_shareMessenger}}),s("p",[t._v("Messenger")])])]),s("button",{ref:"copy",staticClass:"copy-link",attrs:{"data-clipboard-action":"copy","data-clipboard-text":t.shareInfo.share_url},on:{click:t.mx_copyLink}})]),s("img",{staticClass:"close-img",attrs:{src:a("6eff")},on:{click:t.closeDialog}})])])},u=[],m=a("0f35"),p=a("59d0"),l={mixins:[m["a"],p["a"]],name:"dialogSharingMakes",props:{dialogVisible:{type:Object,default:function(){return{show:!1}}},shareInfo:{type:Object,default:function(){return{share_url:window.location.origin+"/forBargain",share_title:"分享标题",share_desp:"分享的描述",share_image:"https://s.pinimg.com/images/facebook_share_image.png"}}},itemData:{type:Object}},methods:{closeDialog:function(){this.$emit("update:dialogVisible",{show:!1})}}},d=l,h=(a("09aa"),a("17cc")),A=Object(h["a"])(d,g,u,!1,null,"239e41af",null),f=A.exports,v=a("5616"),b={Swipe:c["a"],SwipeItem:o["a"]},T={};for(var w in b)T[b[w].name]=b[w];var P={name:"commodityItem",components:Object(r["a"])({dialogSharingMakes:f},T),props:{itemData:{type:Object,default:function(){return{spu_id:1,title:"mock",price:1,deliver_count:1,spu_pics:["http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg","https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"]}}}},data:function(){return{dialogs:{sharingFriends:{show:!1}},shareInfo:{}}},created:function(){},methods:{cashBack:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.$store.state.userInfo.user_id){t.next=4;break}return this.$store.commit("setLoginJumpUrl",""),this.$store.commit("setLoginSelectShow",!0),t.abrupt("return");case 4:return t.next=6,Object(v["c"])({spu_id:this.itemData.spu_id});case 6:e=t.sent,e&&e.data&&(this.shareInfo=e.data,console.log("this.shareInfo: ",this.shareInfo)),this.dialogs.sharingFriends.show=!0;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),jumpBargain:function(){if(!this.$store.state.userInfo.user_id)return this.$store.commit("setLoginJumpUrl",""),void this.$store.commit("setLoginSelectShow",!0);this.$router.push({path:"/bargain",query:{spuId:this.itemData.spu_id}})}}},Q=P,k=(a("552d"),Object(h["a"])(Q,s,i,!1,null,"ab4e359e",null));e["a"]=k.exports},"826b":function(t,e,a){t.exports=a.p+"img/gengduotop.f099fb02.png"},"89dc":function(t,e,a){t.exports=a.p+"img/home-banner.44e412d4.png"},"936e":function(t,e,a){"use strict";var s=a("bc38"),i=a.n(s);i.a},"9cd2":function(t,e,a){},aa96:function(t,e,a){},ae4a:function(t,e){t.exports="data:image/png;base64,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"},b1f2:function(t,e,a){"use strict";var s=a("d273"),i=a.n(s);i.a},ba31:function(t,e,a){},bc38:function(t,e,a){},c122:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAxlBMVEUAAADY2Nja2trY2NjY2Njb29vZ2dnb29vh4eHb29vZ2dna2tra2trY2NjZ2dna2trZ2dng4ODX19fe3t7d3d3m5ubY2Nja2trZ2dnb29vj4+Pa2trg4ODX19fW1tbX19fR0dHa2tra2trb29vW1tba2trb29vi4uLX19fj4+Pe3t7X19fY2Njd3d3d3d3t7e3f39/e3t7b29vh4eHX19fW1tbf39/p6enW1tba2trn5+fm5ubh4eHY2NjX19fW1tbV1dXU1NTH/HXeAAAAPXRSTlMA8JO8ZNrsGxA38eXfwrOdhoODOioVyn14X1EyIvjk1NHOvKKblJKRim1tbWhkYR0LwbatppeHWlVHKwwMGDi0CAAAAZ9JREFUWMPt1+duwjAUhmFDScKeZXYvRsvqnt/ncP83VUVAUUNiHLv9x3sBj6JjH0sRqrLTQavoFi4q42NhWLZWWEgsy1fMmN6plFhHntwZGEOEko/ZhIT3QITzz44SGY1TYjsuXhMYtyAik3Vt41kSMbHc1CKO730ocnQG8+5KqJLs7h4HCXXEi5r4eoJG/oGnMD4uJHSik4s13k4k9CLHMUbNh35yEEU0y8Q608EcnREJKzZCxhRE0uj/fh3aJEyqik0dmLZZyN7CGFn0VsanS2OE+dVzV/VhHociKJuHTctP6RJWdQOkArsqAdKyRFoBUrBECgGSskRSe2SP7JE98s8IiehIbYT9SSa6SZ+aiJsT8eVcPSQjVGV0EKKpRJqgDnKoRA5VyKZrJXKteTr1eSwxryMScbFV8fIgussitnIDxLG8bE6AlGFXOUA6tDLYWZ6ZVasbUbIySqt1sELWi3ZFY4JXYt25MXIufpo5NCLozMQmz2y4pdAvTztFmQiQTLVFOK/qwJe6gg+n6omoGqNa+ia9u5t0bdQQf903mKgTTsKit/EAAAAASUVORK5CYII="},c1fc:function(t,e,a){},cb38:function(t,e,a){"use strict";a("36d9"),a("ba31")},d273:function(t,e,a){},ec87:function(t,e){t.exports="data:image/png;base64,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"},ef10:function(t,e,a){"use strict";var s=a("42fb"),i=a.n(s);i.a},f6b6:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-top-msg"},[a("div",{staticClass:"info-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.curDat&&t.curDat.avatar,expression:"curDat&&curDat.avatar"}],staticClass:"home-top-msg-img"}),a("span",[t._v(t._s(t.curDat&&t.curDat.username)+" got a freebie just now")])])])},i=[],n={name:"userPickingUpMessage",props:{messageList:{type:Array,default:[]}},data:function(){return{curIdx:0}},computed:{curDat:function(){return this.messageList[this.curIdx]}},mounted:function(){var t=this,e=setInterval(function(){t.curIdx=~~(Math.random()*t.messageList.length)},6e3);this.$once("hook:beforeDestroy",function(){clearInterval(e)})}},r=n,o=(a("226c"),a("17cc")),c=Object(o["a"])(r,s,i,!1,null,"670d1bf8",null);e["a"]=c.exports}}]);