(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-cf5a0c3a"],{"05d1":function(a,e){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkUAAAASBAMAAACnRLeUAAAAElBMVEUAAAD///////////////////8+Uq06AAAABnRSTlMAGRMLBg+LSl/lAAABMklEQVRYw+2WTa6DMAyEDY+3r+G9PdyA3qAsum+k3v8sNSOlVpW2hi4ijdQskEM8Y2n40Sci3UWk1d4q1Vlk0YPID/aT2lGjf+tebZ90XPeDlce161d7VHx6XDpVOI2r/h/6U3Z2P6xpdiMYj7GHj7eKUL89WKwlJ2yaIRsFHj7eKkb9jmDNTTzhxd+yyMPHt4z6HcF2uFe+ZbGHj18Y9TuCbXu79+7znZ96PIxPjPoy2OFVsI1dUvkvv3voc4+HLmXUl8EeXgWbbD+V//LQw8dbxajfHixat4NCkz1cbhWjPqQvDxZHjARYjSDR+iXIIFi0ToQEWJEg0X/mI8CaBIlW4SPAmgSJI+EjwJoEiXnCR4A1CRLzAlAICY5Q/5aeSoLESh8S3Ck/DC79HoLsr1beAMNmBxXy9h5FAAAAAElFTkSuQmCC"},"14bf":function(a,e,t){"use strict";var i=t("792c");t.n(i).a},"1d61":function(a,e,t){a.exports=t.p+"img/bargain-bg-2.a1dcc382.png"},"26c3":function(a,e,t){(a.exports=t("2350")(!1)).push([a.i,".van-swipe{overflow:hidden;position:relative;-webkit-user-select:none;user-select:none}.van-swipe__track{height:100%}.van-swipe__indicators{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;left:50%;bottom:10px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.van-swipe__indicators--vertical{left:10px;top:50%;bottom:auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-swipe__indicators--vertical .van-swipe__indicator:not(:last-child){margin-bottom:6px}.van-swipe__indicator{opacity:.3;border-radius:100%;width:6px;height:6px;-webkit-transition:opacity .2s;transition:opacity .2s;background-color:#ebedf0}.van-swipe__indicator:not(:last-child){margin-right:6px}.van-swipe__indicator--active{opacity:1;background-color:#1989fa}",""])},"29ac":function(a,e,t){(a.exports=t("2350")(!1)).push([a.i,".van-dialog{position:fixed;top:50%;left:50%;width:85%;font-size:16px;overflow:hidden;-webkit-transition:.3s;transition:.3s;border-radius:4px;background-color:#fff;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.van-dialog__header{font-weight:500;padding-top:25px;text-align:center}.van-dialog__header--isolated{padding:25px 0}.van-dialog__message{padding:25px;font-size:14px;line-height:1.5;max-height:60vh;overflow-y:auto;text-align:center;-webkit-overflow-scrolling:touch;white-space:pre-wrap}.van-dialog__message--has-title{padding-top:12px;color:#7d7e80}.van-dialog__message--left{text-align:left}.van-dialog__message--right{text-align:right}.van-dialog__footer{overflow:hidden;-webkit-user-select:none;user-select:none}.van-dialog__footer--buttons{display:-webkit-box;display:-webkit-flex;display:flex}.van-dialog__footer--buttons .van-button{-webkit-box-flex:1;-webkit-flex:1;flex:1}.van-dialog .van-button{border:0}.van-dialog__confirm,.van-dialog__confirm:active{color:#1989fa}.van-dialog-bounce-enter{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7)}.van-dialog-bounce-leave-active{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9)}",""])},"2fcb":function(a,e,t){var i=t("29ac");"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals),(0,t("499e").default)("273c6727",i,!0,{sourceMap:!1,shadowMode:!1})},"31e7":function(a,e,t){"use strict";t.d(e,"c",function(){return n}),t.d(e,"d",function(){return r}),t.d(e,"a",function(){return o}),t.d(e,"e",function(){return s}),t.d(e,"b",function(){return c});var i=t("007a");function n(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/bargain/get_bargain_info",data:a})}function r(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/bargain/get_help_bargain_list",data:a})}function o(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/bargain/chop",data:a})}function s(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/spu/get_mybargain_spus",data:a})}function c(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/bargain/chop_share",data:a})}},"4b0a":function(a,e,t){"use strict";t("68ef"),t("786d")},5616:function(a,e,t){"use strict";t.d(e,"c",function(){return n}),t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var i=t("007a");function n(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.get({url:"/api/v1/share/share_spu",data:a})}function r(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.get({url:"/api/v1/share/share_bargain",data:a})}function o(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.get({url:"/api/v1/share/get_share_info",data:a})}},"5b3c":function(a,e,t){"use strict";t.r(e),t("386d"),t("ac6a"),t("e17f");var i=t("2241"),n=t("be94"),r=(t("a481"),t("1da1")),o=(t("4b0a"),t("2bb1")),s=(t("7844"),t("5596")),c=t("996b"),d=t("5616"),l=t("31e7"),g={components:{dialogSharingFriends:a=>Promise.all([t.e("chunk-4c850291"),t.e("chunk-3f7dbf21")]).then(function(){var e=[t("28fd")];a.apply(null,e)}.bind(this)).catch(t.oe),countDown:a=>t.e("chunk-7a713615").then(function(){var e=[t("cd26")];a.apply(null,e)}.bind(this)).catch(t.oe),dialogPotongSendiri:a=>t.e("chunk-6f2f3eae").then(function(){var e=[t("fd89")];a.apply(null,e)}.bind(this)).catch(t.oe),dialogShareEarningEntry:a=>t.e("chunk-63cb3041").then(function(){var e=[t("20c5")];a.apply(null,e)}.bind(this)).catch(t.oe),turnHome:a=>t.e("chunk-108c55c8").then(function(){var e=[t("b913")];a.apply(null,e)}.bind(this)).catch(t.oe),[s.a.name]:s.a,[o.a.name]:o.a},data:()=>({dialogs:{sharingFriends:{show:!1},potongSendiri:{show:!1},shareEarningEntry:{show:!1}},spuImgPlayTime:1e6,isLoad:!1,chop_info:{},shareInfo:{},spu:{spu_pics:[]},bargain_info:{},bargain_user_info:{},expirationDat:{h:"24",p:"00",m:"00"},help_bargain_list:[],helpBargainPageDat:{page_size:10,page_num:1},spu_list:[],isShareEarningEntry:!1}),computed:{floorPrice(){const a=this.bargain_info,e=this.spu;return a.must_buy_price||e.must_buy_price||.2*e.price},curRate(){return this.bargain_info.bargain_rate||parseInt(this.shareInfo.pre_bargain_amount/this.spu.price*100)||0},isLogin(){return this.$store.state.userInfo.user_id},timeType(){return this.bargain_info&&1==this.bargain_info.can_buy?"buy":"endIn"}},created(){this.init()},mounted(){this.$refs.bargainContainer.scrollTo&&this.$refs.bargainContainer.scroll(0,0),document.getElementById("contentContainer").scrollTop&&document.getElementById("contentContainer").scroll(0,0),document.title=this.$t("bargain.gettingFreebies"),setTimeout(()=>{this.bannerAutoPlayTime=8e3,this.isLoad=!0},1e3)},methods:{init(){var a=this;return Object(r.a)(function*(){const e=a.$route.query,t=e.relationId,i=e.showShareEarningEntry,n=e.bargainId,r=e.spuId;t?(a.isShareEarningEntry=!0,a.dialogs.shareEarningEntry.show="no"!=i,yield a.initShareInfo(t)):(!n&&a.isLogin&&(yield a.goBargainChop({spu_id:r})),a.isLogin&&(a.initBargainInfo(),a.initHelpBargainList())),a.initSpuInfo(),a.initSpuList()})()},initShareInfo(a){var e=this;return Object(r.a)(function*(){let t=yield Object(d.b)({relation_id:a});if(t&&t.data){e.shareInfo=t.data;const a=t.data,i=a.bargain_id,r=a.spu_id,o=a.type,s=a.invite_user_id;e.$router.replace({query:Object(n.a)({},e.$route.query,{bargainId:i,spuId:r,type:o,inviteUserId:s})})}})()},initSpuInfo(){var a=this;return Object(r.a)(function*(){let e=yield Object(c.b)({spu_id:a.$route.query.spuId});if(e&&e.data&&e.data.spu){let t=e.data.spu;for(let e in t)a.$set(a.spu,e,t[e]);a.$gaSend({eventCategory:"砍价详情页",eventAction:"页面展示",eventLabel:a.spu.title.substr(0,10)})}})()},initBargainInfo(){var a=this;return Object(r.a)(function*(){const e=a.$route.query.bargainId;if(!e)return;let t=yield Object(l.c)({bargain_id:e});t&&t.data&&(a.bargain_info=t.data.bargain_info||t.data,a.bargain_user_info=t.data.bargain_user_info)})()},initHelpBargainList(){var a=this;return Object(r.a)(function*(){const e=a.$route.query.bargainId;if(!e)return;let t=yield Object(l.d)(Object(n.a)({bargain_id:e},a.helpBargainPageDat));t&&t.data&&(a.help_bargain_list=t.data)})()},initSpuList(){var a=this;return Object(r.a)(function*(){let e=a.$store.state.goodsList.filter(a=>!a.isBargain);if(e.length>6)return void(a.spu_list=e);let t=yield Object(c.a)({page_size:16,page_num:1,is_all:0});t&&t.data&&(a.spu_list=t.data.spu_list)})()},goBargainChop(a){var e=this;return Object(r.a)(function*(){let t=a.bargain_id,n=a.spu_id;if(!e.isLogin)return e.$store.commit("setLoginJumpUrl",""),void e.$store.commit("setLoginSelectShow",!0);let r=yield Object(l.a)({bargain_id:t,spu_id:n});if(fbq("track","StartTrial",{value:e.spu.title,currency:"USD",predicted_ltv:n}),r&&r.data&&r.data.chop_info)return e.chopSucess(r.data.chop_info,n),0==r.code?(e.dialogs.potongSendiri.show=!0,gtag("event","conversion",{send_to:"AW-768708825/ELBKCLuq85gBENmhxu4C"})):r.code,Promise.resolve();-1==r.code&&Object(i.a)({message:e.$t("bargain.pleaseReturnToTheHomepage"),confirmButtonText:"ok"}).then(()=>{e.$router.replace("/")})})()},chopSucess(a,e){this.chop_info=a,this.$router.replace({query:Object(n.a)({},this.$route.query,{bargainId:a.bargain_id})});let t=JSON.parse(JSON.stringify(this.$store.state.goodsList));t.forEach(a=>{a.spu_id==e&&(a.isBargain=!0)}),this.$store.commit("setGoodsList",t)},goChopShare(){var a=this;return Object(r.a)(function*(){if(!a.isLogin){const e=window.location,t=e.pathname,i=e.search;return a.$store.commit("setLoginJumpUrl",t+i+"&showShareEarningEntry=no"),void a.$store.commit("setLoginSelectShow",!0)}let e=yield Object(l.b)({relation_id:a.$route.query.relationId});fbq("track","StartTrial",{value:a.spu.title,currency:"USD",predicted_ltv:a.$route.query.spuId}),e&&e.data&&(a.chop_info=e.data.chop_info,a.$router.replace({query:Object(n.a)({},a.$route.query,{bargainId:a.chop_info.bargain_id})}),a.dialogs.potongSendiri.show=!0,a.initBargainInfo(),a.initHelpBargainList(),a.isShareEarningEntry=!1,gtag("event","conversion",{send_to:"AW-768708825/ELBKCLuq85gBENmhxu4C"}))})()},openSharingFriendsDialog(){var a=this;return Object(r.a)(function*(){if(a.$gaSend({eventCategory:"砍价详情页_分享给好友",eventAction:"点击",eventLabel:a.spu.title.substr(0,10)}),!a.isLogin){const e=window.location;return e.pathname,e.search,a.$store.commit("setLoginJumpUrl",""),void a.$store.commit("setLoginSelectShow",!0)}let e=yield Object(d.a)({bargain_id:a.$route.query.bargainId});e&&e.data?(a.shareInfo=e.data,a.dialogs.sharingFriends.show=!0):a.$toast(a.$t("bargain.failedToGetSharingInformation"))})()},jumpCurBargainPage(a){this.$gaSend({eventCategory:"砍价详情页_底部商品列表",eventAction:"点击",eventLabel:a.title.substr(0,10)}),this.$router.replace({query:{spuId:a.spu_id}}),document.getElementsByClassName("content-container")[0].scroll(0,0),this.init()},jumpBuyPage(){if(!this.isLogin)return this.$store.commit("setLoginJumpUrl",""),void this.$store.commit("setLoginSelectShow",!0);1==this.bargain_info.can_buy&&(this.$gaSend({eventCategory:"砍价详情页_去购买",eventAction:"点击",eventLabel:this.spu.title.substr(0,10)}),this.$router.push({path:"/purchase",query:Object(n.a)({},this.$route.query)}))},refreshTime(){let a=this.$util.expiration(this.bargain_info.expire_ttl||this.spu.ttl);if(!a)return;this.expirationDat=a;const e=setInterval(()=>{this.expirationDat=this.$util.expiration(this.bargain_info.expire_ttl||this.spu.ttl)},1e3);this.$once("hook:beforeDestroy",()=>{clearInterval(e)})}},beforeRouteUpdate(a,e,t){const i=a.query,n=i.loginGoShare;i.bargainType,"ok"==n&&(this.$store.commit("setLoginSelectShow",!1),this.openSharingFriendsDialog()),t()},beforeRouteEnter(a,e,t){t(a=>{"/purchase"==e.path&&a.$util.paymentCancellationPrompt()})}},b=(t("14bf"),t("2877")),u=Object(b.a)(g,function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{ref:"bargainContainer",staticClass:"bargain-container",attrs:{id:"bargainContainer"}},[i("turn-home"),i("div",{staticClass:"bargain-header"},[i("div",{staticClass:"bargain-info-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("1d61"),expression:"require('./../assets/images/bargain-bg-2.png')"}],staticClass:"bg"}),i("div",{staticClass:"bargain-content"},[i("div",{staticClass:"bargain-info"},[i("div",{staticClass:"img-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.spu.spu_pics&&a.spu.spu_pics[0]||"",expression:"spu.spu_pics&&spu.spu_pics[0]||''"}]})]),i("div",{staticClass:"detail"},[i("p",{staticClass:"title"},[a._v(a._s(a.spu.title))]),i("div",{staticClass:"price-box"},[i("div",{staticClass:"price-box-item"},[i("p",{staticClass:"p-t-3"},[a._v(a._s(a.spu.deliver_count||1)+" "+a._s(a.$t("bargain.sent")))]),i("p",{staticClass:"p-t-1"},[a._v("\n                  "+a._s(a.$t("bargain.price"))+"\n                  "),i("span",[a._v("RP")]),i("span",[a._v(a._s(a.spu.original_price))])]),i("p",{staticClass:"p-t-2"},[a._v(a._s(a.$t("bargain.currentPrice")))])]),i("div",{staticClass:"price-box-item"},[i("p",{staticClass:"p-n-1"},[i("span",[a._v("Rp")]),a._v(a._s(a.spu.price))])])])])]),i("div",{staticClass:"bargain-schedule"},[i("p",{staticClass:"title"},[i("span",{staticClass:"n-1"},[i("span",{staticClass:"dollar"},[a._v("RP")]),a._v(a._s(a.bargain_info.bargain_amount||a.shareInfo.pre_bargain_amount||0))]),a._v("  "+a._s(a.$t("bargain.cheaperNowLeaving"))+"  "),i("span",{staticClass:"n-2"},[i("span",{staticClass:"dollar"},[a._v("RP")]),a._v(a._s(a.bargain_info.bargain_after||a.spu.price))])]),i("div",{staticClass:"schedule"},[i("div",{staticClass:"active",style:{width:a.curRate+"%"}}),i("div",{staticClass:"schedule-item"},[i("span",{staticClass:"description"},[i("span",{staticClass:"highlight"},[a._v(a._s(a.curRate)+"%")]),a._v(" "+a._s(a.$t("bargain.off")))])]),i("div",{staticClass:"schedule-item ball ball-center"},[i("span",{staticClass:"description"},[a._v(a._s(a.$t("bargain.availableForPurchase")))])]),i("div",{staticClass:"schedule-item ball ball-right"},[i("span",{staticClass:"description"},[a._v(a._s(a.$t("bargain.takeItFree"))+a._s(a.floorPrice))])])])]),i("count-down",{staticClass:"spu-count-down",attrs:{dateDiff:a.bargain_info.expire_ttl||a.spu.ttl,timeType:a.timeType}}),i("div",{staticClass:"ctrl-box"},[a.isShareEarningEntry?i("div",{staticClass:"share-btn",on:{click:a.goChopShare}},[a._v(a._s(a.$t("bargain.cutAKnife")))]):i("div",{staticClass:"share-btn",on:{click:a.openSharingFriendsDialog}},[a._v(a._s(a.$t("bargain.shareFriendsForFreebies")))]),a.bargain_info.can_buy&&1==a.bargain_info.can_buy?i("div",{staticClass:"buy-btn",on:{click:a.jumpBuyPage}},[a._v("Rp "+a._s(a.bargain_info.bargain_after)+" "+a._s(a.$t("bargain.buyNow")))]):i("div",{staticClass:"buy-btn cur"},[a._v("\n            "+a._s(a.$t("bargain.BuyNow"))+"\n          ")])])],1)])]),i("div",{staticClass:"bargain-content"},[a.$route.query.bargainId&&a.help_bargain_list.length>0?i("div",{staticClass:"team-box"},[i("p",{staticClass:"page-title"},[a._v("Bargaining team")]),i("ul",{staticClass:"team-list"},a._l(a.help_bargain_list,function(e,t){return i("li",{key:t,staticClass:"team-list-item"},[i("div",{staticClass:"column"},[i("div",{class:"team-img huangguan"+(t+1)},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar||"",expression:"item.avatar||''"}]})]),i("div",{staticClass:"team-info"},[i("p",{staticClass:"team-name"},[a._v(a._s(e.username))]),i("p",{staticClass:"team-date"},[a._v(a._s(e.bargain_time))])])]),i("div",{staticClass:"column"},[i("p",{staticClass:"dollar"},[a._v("Rp"),i("span",[a._v(a._s(e.bargain_amount))])])])])}),0)]):a._e(),!a.$route.query.bargainId&&a.spu.desp_pics&&a.spu.desp_pics.length>0?i("div",{staticClass:"goods-detail"},[i("p",{staticClass:"page-title"},[a._v("Product details")]),i("ul",a._l(a.spu.desp_pics,function(a,e){return i("li",{key:e},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a,expression:"item"}]})])}),0)]):a._e(),a.spu_list.length>0?i("div",{staticClass:"recommend-products"},[i("p",{staticClass:"page-title"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.$t("bargain.xingzhuang"),expression:"$t('bargain.xingzhuang')"}]})]),a._l(a.spu_list,function(e){return i("div",{key:e.spu_id,staticClass:"recommend-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.spu_pics&&e.spu_pics[0]||"",expression:"item.spu_pics&&item.spu_pics[0]||''"}],staticClass:"products-photo",on:{click:function(t){return a.jumpCurBargainPage(e)}}}),i("p",{staticClass:"products-title"},[a._v(a._s(e.title))]),i("div",{staticClass:"money"},[a._v(a._s(e.deliver_count)+" "+a._s(a.$t("bargain.sent")))]),i("div",{staticClass:"btn",on:{click:function(t){return a.jumpCurBargainPage(e)}}},[a._v(a._s(a.$t("bargain.getAFreebie")))])])})],2):a._e()]),a.dialogs.sharingFriends.show?i("dialog-sharing-friends",{attrs:{itemData:a.spu,dialogVisible:a.dialogs.sharingFriends,shareInfo:a.shareInfo},on:{"update:dialogVisible":function(e){return a.$set(a.dialogs,"sharingFriends",e)},"update:dialog-visible":function(e){return a.$set(a.dialogs,"sharingFriends",e)}}}):a._e(),a.dialogs.potongSendiri.show?i("dialog-potong-sendiri",{attrs:{chopInfo:a.chop_info,dialogVisible:a.dialogs.potongSendiri},on:{"update:dialogVisible":function(e){return a.$set(a.dialogs,"potongSendiri",e)},"update:dialog-visible":function(e){return a.$set(a.dialogs,"potongSendiri",e)}}}):a._e(),a.dialogs.shareEarningEntry.show?i("dialog-share-earning-entry",{attrs:{preAmount:a.shareInfo.pre_bargain_amount,dialogVisible:a.dialogs.shareEarningEntry},on:{"update:dialogVisible":function(e){return a.$set(a.dialogs,"shareEarningEntry",e)},"update:dialog-visible":function(e){return a.$set(a.dialogs,"shareEarningEntry",e)}}}):a._e()],1)},[],!1,null,"71dc73c2",null);e.default=u.exports},"637d":function(a,e){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqCAMAAAD26OlUAAAC7lBMVEUAAAD9uj39v0T7yTHzdwD9vkD9qETybAD0fwL80jPzdAD+o0r//2n//WX+oUn0egD/+V7+o0vzdQDyZwDzegD+ukP1gQz+70v9rEL9rkH0fADyZgD9n0b0gAH+okrybgD9rkH9pEfycwD+pEz//2j8tz7ycQH6qzb+o0v/+V/ybgD+rUz9okj/o07ycAD8uED0fgD/+l//qVb0fwD8wDryaADzfAD9qkj8wDr8uz3+okr8wDr/+F396EH9qEn/qUf//2j5uB7/+WD9okj0mAv96lf9oEf5tzH//2b3sBf60ybzeAD+91371y3yawD9qUL3xxD/+mD//2j0hAj3wQ7yaQD72zD0ggDyawD+/1T//GT8tz72khL8tj/5zR3zewD3nB/yawD/pVP0hAD8tD/96FD4yRT8uzz73S///GT+81j0hAD//2j9l0r0gwD8tT/5yhz//GP9r0L9lUv/+F/75C//+mH72i7/+F79lUv0ggD76Sj+mU78xjjyeAD72jD9oEb71Sn83DP72S760yX83jX83TP82zH72C72ugTyaAD//3H//2L84jT71Sb60SP4wA33uQv3vgj9o0X83zb4xhb+70b96jz/4zr71yv3wg/2vAj2pAb2qwPzeAD//1///1r95T36wDj85Tf86zb7zTD5wiT50B/4wRT4yQ33wgf1mgb2swP/+mX/8lP98FH+9U397U37zUT98z397zr83zn85jj85Tj85TT00Sr5uiT3zyL5tB/4rBr3mhr5yhn3qRD1iA31kQn0gwbzcwDzbAD//2n+6lz/91n//lf83E376kr9rUD74j394Tf22jT5szT74DH5uTD83C/11Sz5syz72ir6yib6xyT4pSH5yx/4vh/5xB3zxxrvwhr3uRr5zxb0xRX2oxPvvQ/2rwz3xwrvuAjttAP/9V7941D94lD++E7+okn80kX7yD7z1DL70S/4qy/41Cf0zyT3vBLywA/2twP1oADzfgD0fACB5KgqAAAAf3RSTlMAEAwFCwn+xx8X8+bfuaNcRD06Ny4sJSQh8fHu29bT0czDt7OinZSRjIJ/fXpsa2NjW1tVS0tHRERCOjYyLCgX+Pj39vTz7+7p6eXj4tzb2dTKwsLBtrOxrqypp6eloqKenZuZl46Jg4GAfX14c29ua2hYVlRUT0c6OjY1NCYVcHFqRAAAA2dJREFUOMuN1GNwJEEYxvEnueBs27Zt27Ztq3uws3Y2u1nFztm2bdu2vt3k7upqJtm72t/X/Vf3vm91DfyUBf4J9jMMCPSzy+Zntwp+CWwR7N+8Tf28uGGhjDe0XLwwb5HMXVPI5K3Yc8OpDWuP96smb5vVgVSrXOsuf9r1keGE6A3tq0l+aDFFtsF6bd89esCwSsJFGJgta/v//fdFKxWVdWvuPuUcRK9XEaIkBmZtzsJ/FjiiGSRaHr371CGotl9P2BQntsoI/nin3+WoOZDKueOZQ6nS2++5d++O3yoeymyPHAnRxEqQmnfqmSCo9OThY8s3d2pCLMcJcQdDswA1ygbLD7zzwMERxX5Piin5SYr7/QWyaU+J1UCdYvJNL133SKkk+mtpT2ymmzfVabfDNiccKQg0OT0fMjPPfXEQEmZUm7cl3j7r3MfYibc2UOh0FchV3HHnrBjyLvXOa+Yt9s2x2w+OA9oUK4sMcu3YJRCiYFxOz37zwz07t94qAwT3CWmTKbxsZIlY2tJSLKY0j/tex6xAuZB8wPTKkBp+LjE9FNh9JpfFlHw/tTGQO6Qm0EoXUwAS087sSg851h4n2JyJB6sDVUMqiLd3D39eSva+1vHkl/idZ64m7ykP1LLmCAQGcxG6G42kL71rmEHMYq+npt6Ke9wjC+pbrSuBqYTwUW8HQWJSFM+Jw/CWZPP+QwWRz2qtBSzRc8Tw6mT2IEmYVbfeSMRNJqWYDudB6w7W3EC2duLjZMJfevNDYqx2m1iyF+4fqoyAHLQkgL6ehFgxfOFtAImgLtpoo4rdtDcUKE1pUWC02pWkIMz6k+IVUgXOa9dHbN5dIggVKF0AzN3mVCexSsOJjUcaQKbR3mPaeE1+jKe0KrDCFm9W28QTdVc0yyGXv/j5A7VRg9JyQEA3s9ulTtzCbNUd+DO1dPTe5VGf0s4BwECP2aJ2Cqwx8o1mCDIJQvPXlC4DJn+1WEz7WAVvP3rgcGP4kIPSWcAilZGxfY5W8Je0FzWl4EMTSnMDRVRsWDSfxIrdRs33gvChNK0JoBch6Z8LQ7h24xHvbPjQvGQ+AMOuMiJFuG7NB413BnxpHQigyprIqBNRkbpjMYc0xevi3/IMuHExJubK3h+a7BMK478KVB8aWiZ0TN2syOgnc1hqynBL8KYAAAAASUVORK5CYII="},7844:function(a,e,t){"use strict";t("68ef"),t("8270")},"786d":function(a,e,t){var i=t("d0e9");"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals),(0,t("499e").default)("2547baa5",i,!0,{sourceMap:!1,shadowMode:!1})},"792c":function(a,e,t){var i=t("8d9f");"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals),(0,t("499e").default)("0fc98254",i,!0,{sourceMap:!1,shadowMode:!1})},8270:function(a,e,t){var i=t("26c3");"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals),(0,t("499e").default)("7965b52b",i,!0,{sourceMap:!1,shadowMode:!1})},"8d9f":function(a,e,t){var i=t("b041");(a.exports=t("2350")(!1)).push([a.i,".bargain-container[data-v-71dc73c2]{background:-webkit-linear-gradient(45deg,#fd5448,#e82b23);background:linear-gradient(45deg,#fd5448,#e82b23)}.bargain-container>.bargain-header[data-v-71dc73c2]{position:relative;padding:.53333rem .13333rem .53333rem .13333rem}.bargain-container>.bargain-header>.bargain-info-box[data-v-71dc73c2]{position:relative;border-radius:.26667rem}.bargain-container>.bargain-header>.bargain-info-box>.bg[data-v-71dc73c2]{width:100%;height:auto}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content[data-v-71dc73c2]{position:absolute;top:.33333rem;left:.46667rem;text-align:center;margin-bottom:.26667rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info[data-v-71dc73c2]{width:8.8rem;background:#f9f9f9;border-radius:.13333rem;padding:.34667rem .34667rem .21333rem .34667rem;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;text-align:left}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.img-box[data-v-71dc73c2]{width:2.93333rem;height:2.93333rem;margin-right:.32rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.img-box>img[data-v-71dc73c2]{width:100%;height:2.82667rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail[data-v-71dc73c2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;max-width:5.33333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.title[data-v-71dc73c2]{width:100%;height:.93333rem;font-size:.34667rem;color:#323232;line-height:.49333rem;word-wrap:break-word;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;font-weight:600}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box[data-v-71dc73c2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item[data-v-71dc73c2]:nth-of-type(2){width:1.33333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item>.p-t-1[data-v-71dc73c2]{font-size:.16rem;color:#888}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item>.p-t-1>span[data-v-71dc73c2]:first-child{font-size:.13333rem;color:#f77e18}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item>.p-t-1>span[data-v-71dc73c2]:last-child{font-size:.21333rem;color:#f77e18;text-decoration:line-through}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item>.p-t-2[data-v-71dc73c2]{display:inline-block;padding:0 .10667rem;background-color:#d30c05;line-height:.32rem;color:#fff;font-size:.24rem;border-radius:.08rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item>.p-t-3[data-v-71dc73c2]{font-size:.32rem;color:#888;margin:.36rem 0}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item>.p-n-1[data-v-71dc73c2]{color:#d30c05;font-size:.54667rem;position:relative;left:-.66667rem;top:.13333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item>.p-n-1>span[data-v-71dc73c2]{font-size:.29333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item>.p-n-2[data-v-71dc73c2]{color:#888;font-size:.32rem;margin-bottom:.08rem;position:relative;top:.13333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule[data-v-71dc73c2]{margin:.46667rem 0 .86667rem 0}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule>.title[data-v-71dc73c2]{font-size:.33333rem;color:#323232;text-align:center;margin-bottom:.33333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule>.title .dollar[data-v-71dc73c2]{font-size:.28rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule>.title>.n-1[data-v-71dc73c2]{color:#f75e10}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule>.title>.n-2[data-v-71dc73c2]{color:#d30c05}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule[data-v-71dc73c2]{position:relative;margin:0 auto;width:7.73333rem;height:.26667rem;border-radius:.26667rem;background-color:#fececa;display:-webkit-box;display:-webkit-flex;display:flex}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.active[data-v-71dc73c2]{position:absolute;top:0;left:0;height:100%;background:url("+i(t("05d1"))+") no-repeat 0 0/100% 100%,-webkit-linear-gradient(135deg,#d51005,#f54b01);background:url("+i(t("05d1"))+') no-repeat 0 0/100% 100%,linear-gradient(-45deg,#d51005,#f54b01);border-radius:.26667rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.schedule-item[data-v-71dc73c2]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-top:.53333rem;text-align:center;font-size:.24rem;color:#323232}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.schedule-item .highlight[data-v-71dc73c2]{color:#d30c05;font-size:.26667rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.schedule-item[data-v-71dc73c2]:nth-of-type(2){text-align:left}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.schedule-item[data-v-71dc73c2]:last-of-type{text-align:right}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.ball[data-v-71dc73c2]:after{content:"";position:absolute;top:-.02667rem;width:.32rem;height:.32rem;border-radius:.16rem;background:-webkit-linear-gradient(135deg,#ee5d2f,#ff9b04);background:linear-gradient(-45deg,#ee5d2f,#ff9b04)}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.ball-center[data-v-71dc73c2]:after{left:calc(50% - .16rem)}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.ball-right[data-v-71dc73c2]:after{right:0}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.spu-count-down[data-v-71dc73c2]{display:inline-block}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.ctrl-box[data-v-71dc73c2]{font-weight:600;margin-top:.66667rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.ctrl-box>.share-btn[data-v-71dc73c2]{color:#a53a06;font-size:.42667rem;height:1.37333rem;line-height:1.37333rem;background:-webkit-linear-gradient(top,#f8e5a3,#f4cc6d);background:linear-gradient(180deg,#f8e5a3,#f4cc6d);box-shadow:0 .12rem .12rem 0 rgba(174,36,5,.66);border-radius:.69333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.ctrl-box>.buy-btn[data-v-71dc73c2]{margin-top:.24rem;color:#fce0dd;font-size:.48rem;height:1.37333rem;line-height:1.37333rem;background:-webkit-linear-gradient(top,#fba284,#f96645);background:linear-gradient(180deg,#fba284,#f96645);box-shadow:0 .12rem .12rem 0 rgba(174,36,5,.66);border-radius:.69333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.ctrl-box>.buy-btn.cur[data-v-71dc73c2]{color:#999;background:-webkit-linear-gradient(top,#efefef,#cdcece);background:linear-gradient(180deg,#efefef,#cdcece)}.bargain-container>.bargain-content>.team-box[data-v-71dc73c2]{background:-webkit-linear-gradient(top,#e53931,#e94840);background:linear-gradient(180deg,#e53931,#e94840);box-shadow:0 .02667rem .05333rem 0 rgba(152,19,0,.46);border-radius:.13333rem;margin:0 .4rem}.bargain-container>.bargain-content>.team-box>.page-title[data-v-71dc73c2]{position:relative;width:100%;display:block;height:1.33333rem;line-height:1.33333rem;font-size:.42667rem;text-align:center;color:#fff}.bargain-container>.bargain-content>.team-box>.team-list[data-v-71dc73c2]{margin-bottom:.50667rem;padding-bottom:.4rem;max-height:8rem;overflow-y:scroll}.bargain-container>.bargain-content>.team-box>.team-list>li[data-v-71dc73c2]{height:1.33333rem;margin:0 .66667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-top:1px dotted #ffb893;color:#fff}.bargain-container>.bargain-content>.team-box>.team-list>li>.column[data-v-71dc73c2]{-webkit-box-flex:2;-webkit-flex:2;flex:2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.bargain-container>.bargain-content>.team-box>.team-list>li>.column+.column[data-v-71dc73c2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item[data-v-71dc73c2]{background:url('+i(t("637d"))+") no-repeat 100%;background-size:.54667rem .54667rem}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item .team-img>img[data-v-71dc73c2]{width:.98667rem;height:.98667rem;border-radius:.49333rem;overflow:hidden;margin:0 .16rem 0 .08rem}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item .team-name[data-v-71dc73c2]{font-size:.33333rem;margin-bottom:.06667rem}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item .team-date[data-v-71dc73c2]{font-size:.25333rem}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item .dollar[data-v-71dc73c2]{font-size:.33333rem;margin-right:2rem}.bargain-container>.bargain-content>.recommend-products[data-v-71dc73c2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;background-color:#f5f5f5;padding:0 .46667rem}.bargain-container>.bargain-content>.recommend-products>.page-title[data-v-71dc73c2]{position:relative;width:100%;display:block;height:1.33333rem;line-height:2.13333rem;font-size:.45333rem;text-align:center;color:#e65137;background:-webkit-linear-gradient(top,#f44a02 .26855%,#d40e05);background:linear-gradient(180deg,#f44a02 .26855%,#d40e05);-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.bargain-container>.bargain-content>.recommend-products>.page-title>img[data-v-71dc73c2]{width:auto;height:.52rem;margin-right:.32rem}.bargain-container>.bargain-content>.recommend-products>.recommend-item[data-v-71dc73c2]{background:#fff;box-sizing:border-box;width:calc(50% - .13333rem);padding-bottom:.32rem;border:1px solid #f1ecec;border-radius:.13333rem;overflow:hidden;margin-bottom:.37333rem}.bargain-container>.bargain-content>.recommend-products>.recommend-item>.products-photo[data-v-71dc73c2]{width:100%;height:auto}.bargain-container>.bargain-content>.recommend-products>.recommend-item>.products-title[data-v-71dc73c2]{margin:.2rem .13333rem .13333rem .13333rem;color:#323232;font-size:.37333rem;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bargain-container>.bargain-content>.recommend-products>.recommend-item>.money[data-v-71dc73c2]{color:#888;font-size:.26667rem;padding:0 .26667rem;margin-bottom:.26667rem}.bargain-container>.bargain-content>.recommend-products>.recommend-item>.btn[data-v-71dc73c2]{display:block;font-size:.34667rem;color:#fff;text-align:center;width:2.93333rem;height:.8rem;line-height:.8rem;background:-webkit-linear-gradient(left,#f64e01,#d30c05);background:linear-gradient(90deg,#f64e01,#d30c05);border-radius:.8rem;text-decoration:none;padding:0 .26667rem;margin:0 auto}.bargain-container>.bargain-content>.recommend-products>.recommend-item[data-v-71dc73c2]:nth-of-type(2n){margin-left:.26667rem}.bargain-container>.bargain-content>.goods-detail[data-v-71dc73c2]{border-radius:.13333rem;margin:0 .4rem .8rem .4rem;overflow:hidden}.bargain-container>.bargain-content>.goods-detail[data-v-71dc73c2],.bargain-container>.bargain-content>.goods-detail>.page-title[data-v-71dc73c2]{background:-webkit-linear-gradient(top,#e53931,#e94840);background:linear-gradient(180deg,#e53931,#e94840);box-shadow:0 .02667rem .05333rem 0 rgba(152,19,0,.46)}.bargain-container>.bargain-content>.goods-detail>.page-title[data-v-71dc73c2]{position:relative;width:100%;display:block;height:1.33333rem;line-height:1.33333rem;font-size:.42667rem;text-align:center;color:#fff;font-weight:500}.bargain-container>.bargain-content>.goods-detail img[data-v-71dc73c2]{display:block;width:100%;height:auto}.down-box[data-v-71dc73c2]{width:100vw;height:1.30667rem;position:fixed;bottom:0;left:0;z-index:10}.down-box[data-v-71dc73c2],.down-box .home-btn[data-v-71dc73c2]{display:-webkit-box;display:-webkit-flex;display:flex}.down-box .home-btn[data-v-71dc73c2]{width:1.94667rem;height:100%;background:#fff;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;font-size:.24rem;font-weight:400;color:#c2c2c2}.down-box .home-btn img[data-v-71dc73c2]{width:.57333rem;height:auto}.down-box .buy-now[data-v-71dc73c2]{width:3.36rem;background:#f58b01;font-size:.32rem;font-weight:500}.down-box .buy-now[data-v-71dc73c2],.down-box .share-friends[data-v-71dc73c2]{height:1.30667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#fff}.down-box .share-friends[data-v-71dc73c2]{width:4.69333rem;background:-webkit-linear-gradient(left,#d30c05,#f64e01);background:linear-gradient(90deg,#d30c05,#f64e01);font-size:.42667rem;font-weight:400}",""])},"996b":function(a,e,t){"use strict";t.d(e,"d",function(){return n}),t.d(e,"b",function(){return r}),t.d(e,"a",function(){return o}),t.d(e,"e",function(){return s}),t.d(e,"c",function(){return c});var i=t("007a");function n(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/spu/get_mybargain_spus",data:a})}function r(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/spu/get_info",data:a})}function o(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/spu/get_bargain_spus",data:a})}function s(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.get({url:"/api/v1/spu/get_spu_specs",data:a})}function c(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/spu/get_my_bargain_order_spus",data:a})}},b041:function(a,e){a.exports=function(a){return"string"!=typeof a?a:(/^['"].*['"]$/.test(a)&&(a=a.slice(1,-1)),/["'() \t\n]/.test(a)?'"'+a.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':a)}},d0e9:function(a,e,t){(a.exports=t("2350")(!1)).push([a.i,".van-swipe-item{float:left;height:100%}",""])},e17f:function(a,e,t){"use strict";t("68ef"),t("4d75"),t("2fcb")}}]);