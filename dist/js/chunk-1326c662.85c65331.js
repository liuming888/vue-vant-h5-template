(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1326c662"],{"05d1":function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkUAAAASBAMAAACnRLeUAAAAElBMVEUAAAD///////////////////8+Uq06AAAABnRSTlMAGRMLBg+LSl/lAAABMklEQVRYw+2WTa6DMAyEDY+3r+G9PdyA3qAsum+k3v8sNSOlVpW2hi4ijdQskEM8Y2n40Sci3UWk1d4q1Vlk0YPID/aT2lGjf+tebZ90XPeDlce161d7VHx6XDpVOI2r/h/6U3Z2P6xpdiMYj7GHj7eKUL89WKwlJ2yaIRsFHj7eKkb9jmDNTTzhxd+yyMPHt4z6HcF2uFe+ZbGHj18Y9TuCbXu79+7znZ96PIxPjPoy2OFVsI1dUvkvv3voc4+HLmXUl8EeXgWbbD+V//LQw8dbxajfHixat4NCkz1cbhWjPqQvDxZHjARYjSDR+iXIIFi0ToQEWJEg0X/mI8CaBIlW4SPAmgSJI+EjwJoEiXnCR4A1CRLzAlAICY5Q/5aeSoLESh8S3Ck/DC79HoLsr1beAMNmBxXy9h5FAAAAAElFTkSuQmCC"},"1d61":function(e,a,t){e.exports=t.p+"img/bargain-bg-2.a1dcc382.png"},"26c3":function(e,a,t){(e.exports=t("2350")(!1)).push([e.i,".van-swipe{overflow:hidden;position:relative;-webkit-user-select:none;user-select:none}.van-swipe__track{height:100%}.van-swipe__indicators{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;left:50%;bottom:10px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.van-swipe__indicators--vertical{left:10px;top:50%;bottom:auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-swipe__indicators--vertical .van-swipe__indicator:not(:last-child){margin-bottom:6px}.van-swipe__indicator{opacity:.3;border-radius:100%;width:6px;height:6px;-webkit-transition:opacity .2s;transition:opacity .2s;background-color:#ebedf0}.van-swipe__indicator:not(:last-child){margin-right:6px}.van-swipe__indicator--active{opacity:1;background-color:#1989fa}",""])},"29ac":function(e,a,t){(e.exports=t("2350")(!1)).push([e.i,".van-dialog{position:fixed;top:50%;left:50%;width:85%;font-size:16px;overflow:hidden;-webkit-transition:.3s;transition:.3s;border-radius:4px;background-color:#fff;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.van-dialog__header{font-weight:500;padding-top:25px;text-align:center}.van-dialog__header--isolated{padding:25px 0}.van-dialog__message{padding:25px;font-size:14px;line-height:1.5;max-height:60vh;overflow-y:auto;text-align:center;-webkit-overflow-scrolling:touch;white-space:pre-wrap}.van-dialog__message--has-title{padding-top:12px;color:#7d7e80}.van-dialog__message--left{text-align:left}.van-dialog__message--right{text-align:right}.van-dialog__footer{overflow:hidden;-webkit-user-select:none;user-select:none}.van-dialog__footer--buttons{display:-webkit-box;display:-webkit-flex;display:flex}.van-dialog__footer--buttons .van-button{-webkit-box-flex:1;-webkit-flex:1;flex:1}.van-dialog .van-button{border:0}.van-dialog__confirm,.van-dialog__confirm:active{color:#1989fa}.van-dialog-bounce-enter{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7)}.van-dialog-bounce-leave-active{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9)}",""])},"2fcb":function(e,a,t){var i=t("29ac");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,t("499e").default)("273c6727",i,!0,{sourceMap:!1,shadowMode:!1})},"31e7":function(e,a,t){"use strict";t.d(a,"c",function(){return n}),t.d(a,"d",function(){return r}),t.d(a,"a",function(){return o}),t.d(a,"e",function(){return s}),t.d(a,"b",function(){return d});var i=t("007a");function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/bargain/get_bargain_info",data:e})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/bargain/get_help_bargain_list",data:e})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/bargain/chop",data:e})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/spu/get_mybargain_spus",data:e})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/bargain/chop_share",data:e})}},"4b0a":function(e,a,t){"use strict";t("68ef"),t("786d")},"4d36":function(e,a,t){"use strict";var i=t("b1d4");t.n(i).a},5616:function(e,a,t){"use strict";t.d(a,"c",function(){return n}),t.d(a,"a",function(){return r}),t.d(a,"b",function(){return o});var i=t("007a");function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.get({url:"/api/v1/share/share_spu",data:e})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.get({url:"/api/v1/share/share_bargain",data:e})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.get({url:"/api/v1/share/get_share_info",data:e})}},"5b3c":function(e,a,t){"use strict";t.r(a),t("386d"),t("ac6a"),t("e17f");var i=t("2241"),n=t("be94"),r=(t("a481"),t("1da1")),o=(t("4b0a"),t("2bb1")),s=(t("7844"),t("5596")),d=t("996b"),l=t("5616"),c=t("31e7"),g={components:{dialogSharingFriends:e=>Promise.all([t.e("chunk-4c850291"),t.e("chunk-3f7dbf21")]).then(function(){var a=[t("28fd")];e.apply(null,a)}.bind(this)).catch(t.oe),countDown:e=>t.e("chunk-7a713615").then(function(){var a=[t("cd26")];e.apply(null,a)}.bind(this)).catch(t.oe),dialogPotongSendiri:e=>t.e("chunk-6f2f3eae").then(function(){var a=[t("fd89")];e.apply(null,a)}.bind(this)).catch(t.oe),dialogShareEarningEntry:e=>t.e("chunk-63cb3041").then(function(){var a=[t("20c5")];e.apply(null,a)}.bind(this)).catch(t.oe),turnHome:e=>t.e("chunk-108c55c8").then(function(){var a=[t("b913")];e.apply(null,a)}.bind(this)).catch(t.oe),[s.a.name]:s.a,[o.a.name]:o.a},data:()=>({dialogs:{sharingFriends:{show:!1},potongSendiri:{show:!1},shareEarningEntry:{show:!1}},spuImgPlayTime:1e6,isLoad:!1,chop_info:{},shareInfo:{},spu:{spu_pics:[],spu_small_pics:[]},bargain_info:{},bargain_user_info:{},expirationDat:{h:"24",p:"00",m:"00"},help_bargain_list:[],helpBargainPageDat:{page_size:10,page_num:1},spu_list:[],isShareEarningEntry:!1}),computed:{floorPrice(){const e=this.bargain_info,a=this.spu;let t=e.must_buy_price||a.must_buy_price||.2*a.price;return t&&t.toFixed(2)},curRate(){return this.bargain_info.bargain_rate||parseInt(this.shareInfo.pre_bargain_amount/this.spu.price*100)||0},isLogin(){return this.$store.state.userInfo.user_id},timeType(){return this.bargain_info&&1==this.bargain_info.can_buy?"buy":"endIn"}},created(){this.init()},mounted(){this.$refs.bargainContainer.scrollTo&&this.$refs.bargainContainer.scroll(0,0),document.getElementById("contentContainer").scrollTop&&document.getElementById("contentContainer").scroll(0,0),document.title=this.$t("bargain.gettingFreebies"),setTimeout(()=>{this.bannerAutoPlayTime=8e3,this.isLoad=!0},1e3)},methods:{init(){var e=this;return Object(r.a)(function*(){const a=e.$route.query,t=a.relationId,i=a.showShareEarningEntry,n=a.bargainId,r=a.spuId;t?(e.isShareEarningEntry=!0,e.dialogs.shareEarningEntry.show="no"!=i,yield e.initShareInfo(t)):(!n&&e.isLogin&&(yield e.goBargainChop({spu_id:r})),e.isLogin&&(e.initBargainInfo(),e.initHelpBargainList())),e.initSpuInfo(),e.initSpuList()})()},initShareInfo(e){var a=this;return Object(r.a)(function*(){let t=yield Object(l.b)({relation_id:e});if(t&&t.data){a.shareInfo=t.data;const e=t.data,i=e.bargain_id,r=e.spu_id,o=e.type,s=e.invite_user_id;a.$router.replace({query:Object(n.a)({},a.$route.query,{bargainId:i,spuId:r,type:o,inviteUserId:s})})}})()},initSpuInfo(){var e=this;return Object(r.a)(function*(){let a=yield Object(d.b)({spu_id:e.$route.query.spuId});if(a&&a.data&&a.data.spu){let t=a.data.spu;for(let a in t)e.$set(e.spu,a,t[a]);e.$gaSend({eventCategory:"砍价详情页",eventAction:"页面展示",eventLabel:e.spu.title.substr(0,10)})}})()},initBargainInfo(){var e=this;return Object(r.a)(function*(){const a=e.$route.query.bargainId;if(!a)return;let t=yield Object(c.c)({bargain_id:a});t&&t.data&&(e.bargain_info=t.data.bargain_info||t.data,e.bargain_user_info=t.data.bargain_user_info)})()},initHelpBargainList(){var e=this;return Object(r.a)(function*(){const a=e.$route.query.bargainId;if(!a)return;let t=yield Object(c.d)(Object(n.a)({bargain_id:a},e.helpBargainPageDat));t&&t.data&&(e.help_bargain_list=t.data)})()},initSpuList(){var e=this;return Object(r.a)(function*(){let a=e.$store.state.goodsList.filter(e=>!e.isBargain);if(a.length>6)return void(e.spu_list=a);let t=yield Object(d.a)({page_size:16,page_num:1,is_all:0});t&&t.data&&(e.spu_list=t.data.spu_list)})()},goBargainChop(e){var a=this;return Object(r.a)(function*(){let t=e.bargain_id,n=e.spu_id;if(!a.isLogin)return a.$store.commit("setLoginJumpUrl",""),void a.$store.commit("setLoginSelectShow",!0);let r=yield Object(c.a)({bargain_id:t,spu_id:n});if(fbq("track","StartTrial",{value:a.spu.title,currency:"USD",predicted_ltv:n}),r&&r.data&&r.data.chop_info)return a.chopSucess(r.data.chop_info,n),0==r.code?(a.dialogs.potongSendiri.show=!0,gtag("event","conversion",{send_to:"AW-768708825/ELBKCLuq85gBENmhxu4C"})):r.code,Promise.resolve();-1==r.code&&Object(i.a)({message:a.$t("bargain.pleaseReturnToTheHomepage"),confirmButtonText:"ok"}).then(()=>{a.$router.replace("/")})})()},chopSucess(e,a){this.chop_info=e,this.$router.replace({query:Object(n.a)({},this.$route.query,{bargainId:e.bargain_id})});let t=JSON.parse(JSON.stringify(this.$store.state.goodsList));t.forEach(e=>{e.spu_id==a&&(e.isBargain=!0)}),this.$store.commit("setGoodsList",t)},goChopShare(){var e=this;return Object(r.a)(function*(){if(!e.isLogin){const a=window.location,t=a.pathname,i=a.search;return e.$store.commit("setLoginJumpUrl",t+i+"&showShareEarningEntry=no"),void e.$store.commit("setLoginSelectShow",!0)}let a=yield Object(c.b)({relation_id:e.$route.query.relationId});fbq("track","StartTrial",{value:e.spu.title,currency:"USD",predicted_ltv:e.$route.query.spuId}),a&&a.data&&(e.chop_info=a.data.chop_info,e.$router.replace({query:Object(n.a)({},e.$route.query,{bargainId:e.chop_info.bargain_id})}),e.dialogs.potongSendiri.show=!0,e.initBargainInfo(),e.initHelpBargainList(),e.isShareEarningEntry=!1,gtag("event","conversion",{send_to:"AW-768708825/ELBKCLuq85gBENmhxu4C"}))})()},openSharingFriendsDialog(){var e=this;return Object(r.a)(function*(){if(e.$gaSend({eventCategory:"砍价详情页_分享给好友",eventAction:"点击",eventLabel:e.spu.title.substr(0,10)}),!e.isLogin){const a=window.location;return a.pathname,a.search,e.$store.commit("setLoginJumpUrl",""),void e.$store.commit("setLoginSelectShow",!0)}let a=yield Object(l.a)({bargain_id:e.$route.query.bargainId});a&&a.data?(e.shareInfo=a.data,e.dialogs.sharingFriends.show=!0):e.$toast(e.$t("bargain.failedToGetSharingInformation"))})()},jumpCurBargainPage(e){this.$gaSend({eventCategory:"砍价详情页_底部商品列表",eventAction:"点击",eventLabel:e.title.substr(0,10)}),this.$router.replace({query:{spuId:e.spu_id}}),document.getElementsByClassName("content-container")[0].scroll(0,0),this.init()},jumpBuyPage(){if(!this.isLogin)return this.$store.commit("setLoginJumpUrl",""),void this.$store.commit("setLoginSelectShow",!0);1==this.bargain_info.can_buy&&(this.$gaSend({eventCategory:"砍价详情页_去购买",eventAction:"点击",eventLabel:this.spu.title.substr(0,10)}),this.$router.push({path:"/purchase",query:Object(n.a)({},this.$route.query)}))},refreshTime(){let e=this.$util.expiration(this.bargain_info.expire_ttl||this.spu.ttl);if(!e)return;this.expirationDat=e;const a=setInterval(()=>{this.expirationDat=this.$util.expiration(this.bargain_info.expire_ttl||this.spu.ttl)},1e3);this.$once("hook:beforeDestroy",()=>{clearInterval(a)})}},beforeRouteUpdate(e,a,t){const i=e.query,n=i.loginGoShare;i.bargainType,"ok"==n&&(this.$store.commit("setLoginSelectShow",!1),this.openSharingFriendsDialog()),t()},beforeRouteEnter(e,a,t){t(e=>{"/purchase"==a.path&&e.$util.paymentCancellationPrompt()})}},b=(t("4d36"),t("2877")),u=Object(b.a)(g,function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{ref:"bargainContainer",staticClass:"bargain-container",attrs:{id:"bargainContainer"}},[i("turn-home"),i("div",{staticClass:"bargain-header"},[i("div",{staticClass:"bargain-info-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("1d61"),expression:"require('./../assets/images/bargain-bg-2.png')"}],staticClass:"bg"}),i("div",{staticClass:"bargain-content"},[i("div",{staticClass:"bargain-info"},[i("div",{staticClass:"img-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.spu.spu_small_pics&&e.spu.spu_small_pics[0]||"",expression:"spu.spu_small_pics&&spu.spu_small_pics[0]||''"}]})]),i("div",{staticClass:"detail"},[i("p",{staticClass:"title"},[e._v(e._s(e.spu.title))]),i("div",{staticClass:"price-box"},[i("div",{staticClass:"price-box-item"},[i("p",{staticClass:"p-t-3"},[e._v(e._s(e.spu.deliver_count||1)+" "+e._s(e.$t("bargain.sent")))]),i("p",{staticClass:"p-t-1"},[e._v("\n                  "+e._s(e.$t("bargain.price"))+"\n                  "),i("span",[e._v("RP")]),i("span",[e._v(e._s(e.spu.original_price))])]),i("p",{staticClass:"p-t-2"},[e._v(e._s(e.$t("bargain.currentPrice")))])]),i("div",{staticClass:"price-box-item"},[i("p",{staticClass:"p-n-1"},[i("span",[e._v("Rp")]),e._v(e._s(e.spu.price))])])])])]),i("div",{staticClass:"bargain-schedule"},[i("p",{staticClass:"title"},[i("span",{staticClass:"n-1"},[i("span",{staticClass:"dollar"},[e._v("RP")]),e._v(e._s(e.bargain_info.bargain_amount||e.shareInfo.pre_bargain_amount||0))]),e._v("  "+e._s(e.$t("bargain.cheaperNowLeaving"))+"  "),i("span",{staticClass:"n-2"},[i("span",{staticClass:"dollar"},[e._v("RP")]),e._v(e._s(e.bargain_info.bargain_after||e.spu.price))])]),i("div",{staticClass:"schedule"},[i("div",{staticClass:"active",style:{width:e.curRate+"%"}}),i("div",{staticClass:"schedule-item"},[i("span",{staticClass:"description"},[i("span",{staticClass:"highlight"},[e._v(e._s(e.curRate)+"%")]),e._v(" "+e._s(e.$t("bargain.off")))])]),i("div",{staticClass:"schedule-item ball ball-center"},[i("span",{staticClass:"description"},[e._v(e._s(e.$t("bargain.availableForPurchase")))])]),i("div",{staticClass:"schedule-item ball ball-right"},[i("span",{staticClass:"description"},[e._v(e._s(e.$t("bargain.takeItFree"))+e._s(e.floorPrice))])])])]),i("count-down",{staticClass:"spu-count-down",attrs:{dateDiff:e.bargain_info.expire_ttl||e.spu.ttl,timeType:e.timeType}}),i("div",{staticClass:"ctrl-box"},[e.isShareEarningEntry?i("div",{staticClass:"share-btn",on:{click:e.goChopShare}},[e._v(e._s(e.$t("bargain.cutAKnife")))]):i("div",{staticClass:"share-btn",on:{click:e.openSharingFriendsDialog}},[e._v(e._s(e.$t("bargain.shareFriendsForFreebies")))]),e.bargain_info.can_buy&&1==e.bargain_info.can_buy?i("div",{staticClass:"buy-btn",on:{click:e.jumpBuyPage}},[e._v("Rp "+e._s(e.bargain_info.bargain_after)+" "+e._s(e.$t("bargain.buyNow")))]):i("div",{staticClass:"buy-btn cur"},[e._v("\n            "+e._s(e.$t("bargain.BuyNow"))+"\n          ")])])],1)])]),i("div",{staticClass:"bargain-content"},[e.$route.query.bargainId&&e.help_bargain_list.length>0?i("div",{staticClass:"team-box"},[i("p",{staticClass:"page-title"},[e._v("Bargaining team")]),i("ul",{staticClass:"team-list"},e._l(e.help_bargain_list,function(a,t){return i("li",{key:t,staticClass:"team-list-item"},[i("div",{staticClass:"column"},[i("div",{class:"team-img huangguan"+(t+1)},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.avatar||"",expression:"item.avatar||''"}]})]),i("div",{staticClass:"team-info"},[i("p",{staticClass:"team-name"},[e._v(e._s(a.username))]),i("p",{staticClass:"team-date"},[e._v(e._s(a.bargain_time))])])]),i("div",{staticClass:"column"},[i("p",{staticClass:"dollar"},[e._v("Rp"),i("span",[e._v(e._s(a.bargain_amount))])])])])}),0)]):e._e(),!e.$route.query.bargainId&&e.spu.desp_pics&&e.spu.desp_pics.length>0?i("div",{staticClass:"goods-detail"},[i("p",{staticClass:"page-title"},[e._v("Product details")]),i("ul",e._l(e.spu.desp_pics,function(e,a){return i("li",{key:a},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"item"}]})])}),0)]):e._e(),e.spu_list.length>0?i("div",{staticClass:"recommend-products"},[i("p",{staticClass:"page-title"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.$t("bargain.xingzhuang"),expression:"$t('bargain.xingzhuang')"}]})]),e._l(e.spu_list,function(a){return i("div",{key:a.spu_id,staticClass:"recommend-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.spu.spu_small_pics&&e.spu.spu_small_pics[0]||"",expression:"spu.spu_small_pics&&spu.spu_small_pics[0]||''"}],staticClass:"products-photo",on:{click:function(t){return e.jumpCurBargainPage(a)}}}),i("p",{staticClass:"products-title"},[e._v(e._s(a.title))]),i("div",{staticClass:"money"},[e._v(e._s(a.deliver_count)+" "+e._s(e.$t("bargain.sent")))]),i("div",{staticClass:"btn",on:{click:function(t){return e.jumpCurBargainPage(a)}}},[e._v(e._s(e.$t("bargain.getAFreebie")))])])})],2):e._e()]),e.dialogs.sharingFriends.show?i("dialog-sharing-friends",{attrs:{itemData:e.spu,dialogVisible:e.dialogs.sharingFriends,shareInfo:e.shareInfo},on:{"update:dialogVisible":function(a){return e.$set(e.dialogs,"sharingFriends",a)},"update:dialog-visible":function(a){return e.$set(e.dialogs,"sharingFriends",a)}}}):e._e(),e.dialogs.potongSendiri.show?i("dialog-potong-sendiri",{attrs:{chopInfo:e.chop_info,dialogVisible:e.dialogs.potongSendiri},on:{"update:dialogVisible":function(a){return e.$set(e.dialogs,"potongSendiri",a)},"update:dialog-visible":function(a){return e.$set(e.dialogs,"potongSendiri",a)}}}):e._e(),e.dialogs.shareEarningEntry.show?i("dialog-share-earning-entry",{attrs:{preAmount:e.shareInfo.pre_bargain_amount,dialogVisible:e.dialogs.shareEarningEntry},on:{"update:dialogVisible":function(a){return e.$set(e.dialogs,"shareEarningEntry",a)},"update:dialog-visible":function(a){return e.$set(e.dialogs,"shareEarningEntry",a)}}}):e._e()],1)},[],!1,null,"e491fa4e",null);a.default=u.exports},"637d":function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqCAMAAAD26OlUAAAC7lBMVEUAAAD9uj39v0T7yTHzdwD9vkD9qETybAD0fwL80jPzdAD+o0r//2n//WX+oUn0egD/+V7+o0vzdQDyZwDzegD+ukP1gQz+70v9rEL9rkH0fADyZgD9n0b0gAH+okrybgD9rkH9pEfycwD+pEz//2j8tz7ycQH6qzb+o0v/+V/ybgD+rUz9okj/o07ycAD8uED0fgD/+l//qVb0fwD8wDryaADzfAD9qkj8wDr8uz3+okr8wDr/+F396EH9qEn/qUf//2j5uB7/+WD9okj0mAv96lf9oEf5tzH//2b3sBf60ybzeAD+91371y3yawD9qUL3xxD/+mD//2j0hAj3wQ7yaQD72zD0ggDyawD+/1T//GT8tz72khL8tj/5zR3zewD3nB/yawD/pVP0hAD8tD/96FD4yRT8uzz73S///GT+81j0hAD//2j9l0r0gwD8tT/5yhz//GP9r0L9lUv/+F/75C//+mH72i7/+F79lUv0ggD76Sj+mU78xjjyeAD72jD9oEb71Sn83DP72S760yX83jX83TP82zH72C72ugTyaAD//3H//2L84jT71Sb60SP4wA33uQv3vgj9o0X83zb4xhb+70b96jz/4zr71yv3wg/2vAj2pAb2qwPzeAD//1///1r95T36wDj85Tf86zb7zTD5wiT50B/4wRT4yQ33wgf1mgb2swP/+mX/8lP98FH+9U397U37zUT98z397zr83zn85jj85Tj85TT00Sr5uiT3zyL5tB/4rBr3mhr5yhn3qRD1iA31kQn0gwbzcwDzbAD//2n+6lz/91n//lf83E376kr9rUD74j394Tf22jT5szT74DH5uTD83C/11Sz5syz72ir6yib6xyT4pSH5yx/4vh/5xB3zxxrvwhr3uRr5zxb0xRX2oxPvvQ/2rwz3xwrvuAjttAP/9V7941D94lD++E7+okn80kX7yD7z1DL70S/4qy/41Cf0zyT3vBLywA/2twP1oADzfgD0fACB5KgqAAAAf3RSTlMAEAwFCwn+xx8X8+bfuaNcRD06Ny4sJSQh8fHu29bT0czDt7OinZSRjIJ/fXpsa2NjW1tVS0tHRERCOjYyLCgX+Pj39vTz7+7p6eXj4tzb2dTKwsLBtrOxrqypp6eloqKenZuZl46Jg4GAfX14c29ua2hYVlRUT0c6OjY1NCYVcHFqRAAAA2dJREFUOMuN1GNwJEEYxvEnueBs27Zt27Ztq3uws3Y2u1nFztm2bdu2vt3k7upqJtm72t/X/Vf3vm91DfyUBf4J9jMMCPSzy+Zntwp+CWwR7N+8Tf28uGGhjDe0XLwwb5HMXVPI5K3Yc8OpDWuP96smb5vVgVSrXOsuf9r1keGE6A3tq0l+aDFFtsF6bd89esCwSsJFGJgta/v//fdFKxWVdWvuPuUcRK9XEaIkBmZtzsJ/FjiiGSRaHr371CGotl9P2BQntsoI/nin3+WoOZDKueOZQ6nS2++5d++O3yoeymyPHAnRxEqQmnfqmSCo9OThY8s3d2pCLMcJcQdDswA1ygbLD7zzwMERxX5Piin5SYr7/QWyaU+J1UCdYvJNL133SKkk+mtpT2ymmzfVabfDNiccKQg0OT0fMjPPfXEQEmZUm7cl3j7r3MfYibc2UOh0FchV3HHnrBjyLvXOa+Yt9s2x2w+OA9oUK4sMcu3YJRCiYFxOz37zwz07t94qAwT3CWmTKbxsZIlY2tJSLKY0j/tex6xAuZB8wPTKkBp+LjE9FNh9JpfFlHw/tTGQO6Qm0EoXUwAS087sSg851h4n2JyJB6sDVUMqiLd3D39eSva+1vHkl/idZ64m7ykP1LLmCAQGcxG6G42kL71rmEHMYq+npt6Ke9wjC+pbrSuBqYTwUW8HQWJSFM+Jw/CWZPP+QwWRz2qtBSzRc8Tw6mT2IEmYVbfeSMRNJqWYDudB6w7W3EC2duLjZMJfevNDYqx2m1iyF+4fqoyAHLQkgL6ehFgxfOFtAImgLtpoo4rdtDcUKE1pUWC02pWkIMz6k+IVUgXOa9dHbN5dIggVKF0AzN3mVCexSsOJjUcaQKbR3mPaeE1+jKe0KrDCFm9W28QTdVc0yyGXv/j5A7VRg9JyQEA3s9ulTtzCbNUd+DO1dPTe5VGf0s4BwECP2aJ2Cqwx8o1mCDIJQvPXlC4DJn+1WEz7WAVvP3rgcGP4kIPSWcAilZGxfY5W8Je0FzWl4EMTSnMDRVRsWDSfxIrdRs33gvChNK0JoBch6Z8LQ7h24xHvbPjQvGQ+AMOuMiJFuG7NB413BnxpHQigyprIqBNRkbpjMYc0xevi3/IMuHExJubK3h+a7BMK478KVB8aWiZ0TN2syOgnc1hqynBL8KYAAAAASUVORK5CYII="},7844:function(e,a,t){"use strict";t("68ef"),t("8270")},"786d":function(e,a,t){var i=t("d0e9");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,t("499e").default)("2547baa5",i,!0,{sourceMap:!1,shadowMode:!1})},8270:function(e,a,t){var i=t("26c3");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,t("499e").default)("7965b52b",i,!0,{sourceMap:!1,shadowMode:!1})},"921e":function(e,a,t){var i=t("b041");(e.exports=t("2350")(!1)).push([e.i,".bargain-container[data-v-e491fa4e]{background:-webkit-linear-gradient(45deg,#fd5448,#e82b23);background:linear-gradient(45deg,#fd5448,#e82b23)}.bargain-container>.bargain-header[data-v-e491fa4e]{position:relative;padding:.53333rem .13333rem .53333rem .13333rem}.bargain-container>.bargain-header>.bargain-info-box[data-v-e491fa4e]{position:relative;border-radius:.26667rem}.bargain-container>.bargain-header>.bargain-info-box>.bg[data-v-e491fa4e]{width:100%;height:auto}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content[data-v-e491fa4e]{position:absolute;top:.33333rem;left:.46667rem;text-align:center;margin-bottom:.26667rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info[data-v-e491fa4e]{width:8.8rem;background:#f9f9f9;border-radius:.13333rem;padding:.34667rem .34667rem .21333rem .34667rem;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;text-align:left}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.img-box[data-v-e491fa4e]{width:2.93333rem;height:2.93333rem;margin-right:.32rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.img-box>img[data-v-e491fa4e]{width:100%;height:2.82667rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail[data-v-e491fa4e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;max-width:5.33333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.title[data-v-e491fa4e]{width:100%;height:.93333rem;font-size:.34667rem;color:#323232;line-height:.49333rem;word-wrap:break-word;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;font-weight:600}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box[data-v-e491fa4e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item[data-v-e491fa4e]:nth-of-type(2){width:1.33333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item>.p-t-1[data-v-e491fa4e]{font-size:.16rem;color:#888}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item>.p-t-1>span[data-v-e491fa4e]:first-child{font-size:.13333rem;color:#f77e18}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item>.p-t-1>span[data-v-e491fa4e]:last-child{font-size:.21333rem;color:#f77e18;text-decoration:line-through}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item>.p-t-2[data-v-e491fa4e]{display:inline-block;padding:0 .10667rem;background-color:#d30c05;line-height:.32rem;color:#fff;font-size:.24rem;border-radius:.08rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item>.p-t-3[data-v-e491fa4e]{font-size:.32rem;color:#888;margin:.36rem 0}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item>.p-n-1[data-v-e491fa4e]{color:#d30c05;font-size:.54667rem;position:relative;left:-.66667rem;top:.13333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item>.p-n-1>span[data-v-e491fa4e]{font-size:.29333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content .bargain-info>.detail>.price-box>.price-box-item>.p-n-2[data-v-e491fa4e]{color:#888;font-size:.32rem;margin-bottom:.08rem;position:relative;top:.13333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule[data-v-e491fa4e]{margin:.46667rem 0 .86667rem 0}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule>.title[data-v-e491fa4e]{font-size:.33333rem;color:#323232;text-align:center;margin-bottom:.33333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule>.title .dollar[data-v-e491fa4e]{font-size:.28rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule>.title>.n-1[data-v-e491fa4e]{color:#f75e10}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule>.title>.n-2[data-v-e491fa4e]{color:#d30c05}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule[data-v-e491fa4e]{position:relative;margin:0 auto;width:7.73333rem;height:.26667rem;border-radius:.26667rem;background-color:#fececa;display:-webkit-box;display:-webkit-flex;display:flex}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.active[data-v-e491fa4e]{position:absolute;top:0;left:0;height:100%;background:url("+i(t("05d1"))+") no-repeat 0 0/100% 100%,-webkit-linear-gradient(135deg,#d51005,#f54b01);background:url("+i(t("05d1"))+') no-repeat 0 0/100% 100%,linear-gradient(-45deg,#d51005,#f54b01);border-radius:.26667rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.schedule-item[data-v-e491fa4e]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-top:.53333rem;text-align:center;font-size:.24rem;color:#323232}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.schedule-item .highlight[data-v-e491fa4e]{color:#d30c05;font-size:.26667rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.schedule-item[data-v-e491fa4e]:nth-of-type(2){text-align:left}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.schedule-item[data-v-e491fa4e]:last-of-type{text-align:right}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.ball[data-v-e491fa4e]:after{content:"";position:absolute;top:-.02667rem;width:.32rem;height:.32rem;border-radius:.16rem;background:-webkit-linear-gradient(135deg,#ee5d2f,#ff9b04);background:linear-gradient(-45deg,#ee5d2f,#ff9b04)}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.ball-center[data-v-e491fa4e]:after{left:calc(50% - .16rem)}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.ball-right[data-v-e491fa4e]:after{right:0}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.spu-count-down[data-v-e491fa4e]{display:inline-block}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.ctrl-box[data-v-e491fa4e]{font-weight:600;margin-top:.66667rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.ctrl-box>.share-btn[data-v-e491fa4e]{color:#a53a06;font-size:.42667rem;height:1.37333rem;line-height:1.37333rem;background:-webkit-linear-gradient(top,#f8e5a3,#f4cc6d);background:linear-gradient(180deg,#f8e5a3,#f4cc6d);box-shadow:0 .12rem .12rem 0 rgba(174,36,5,.66);border-radius:.69333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.ctrl-box>.buy-btn[data-v-e491fa4e]{margin-top:.24rem;color:#fce0dd;font-size:.48rem;height:1.37333rem;line-height:1.37333rem;background:-webkit-linear-gradient(top,#fba284,#f96645);background:linear-gradient(180deg,#fba284,#f96645);box-shadow:0 .12rem .12rem 0 rgba(174,36,5,.66);border-radius:.69333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.ctrl-box>.buy-btn.cur[data-v-e491fa4e]{color:#999;background:-webkit-linear-gradient(top,#efefef,#cdcece);background:linear-gradient(180deg,#efefef,#cdcece)}.bargain-container>.bargain-content>.team-box[data-v-e491fa4e]{background:-webkit-linear-gradient(top,#e53931,#e94840);background:linear-gradient(180deg,#e53931,#e94840);box-shadow:0 .02667rem .05333rem 0 rgba(152,19,0,.46);border-radius:.13333rem;margin:0 .4rem}.bargain-container>.bargain-content>.team-box>.page-title[data-v-e491fa4e]{position:relative;width:100%;display:block;height:1.33333rem;line-height:1.33333rem;font-size:.42667rem;text-align:center;color:#fff}.bargain-container>.bargain-content>.team-box>.team-list[data-v-e491fa4e]{margin-bottom:.50667rem;padding-bottom:.4rem;max-height:8rem;overflow-y:scroll}.bargain-container>.bargain-content>.team-box>.team-list>li[data-v-e491fa4e]{height:1.33333rem;margin:0 .66667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-top:1px dotted #ffb893;color:#fff}.bargain-container>.bargain-content>.team-box>.team-list>li>.column[data-v-e491fa4e]{-webkit-box-flex:2;-webkit-flex:2;flex:2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.bargain-container>.bargain-content>.team-box>.team-list>li>.column+.column[data-v-e491fa4e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item[data-v-e491fa4e]{background:url('+i(t("637d"))+") no-repeat 100%;background-size:.54667rem .54667rem}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item .team-img>img[data-v-e491fa4e]{width:.98667rem;height:.98667rem;border-radius:.49333rem;overflow:hidden;margin:0 .16rem 0 .08rem}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item .team-name[data-v-e491fa4e]{font-size:.33333rem;margin-bottom:.06667rem}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item .team-date[data-v-e491fa4e]{font-size:.25333rem}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item .dollar[data-v-e491fa4e]{font-size:.33333rem;margin-right:2rem}.bargain-container>.bargain-content>.recommend-products[data-v-e491fa4e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;background-color:#f5f5f5;padding:0 .46667rem}.bargain-container>.bargain-content>.recommend-products>.page-title[data-v-e491fa4e]{position:relative;width:100%;display:block;height:1.33333rem;line-height:2.13333rem;font-size:.45333rem;text-align:center;color:#e65137;background:-webkit-linear-gradient(top,#f44a02 .26855%,#d40e05);background:linear-gradient(180deg,#f44a02 .26855%,#d40e05);-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.bargain-container>.bargain-content>.recommend-products>.page-title>img[data-v-e491fa4e]{width:auto;height:.52rem;margin-right:.32rem}.bargain-container>.bargain-content>.recommend-products>.recommend-item[data-v-e491fa4e]{background:#fff;box-sizing:border-box;width:calc(50% - .13333rem);padding-bottom:.32rem;border:1px solid #f1ecec;border-radius:.13333rem;overflow:hidden;margin-bottom:.37333rem}.bargain-container>.bargain-content>.recommend-products>.recommend-item>.products-photo[data-v-e491fa4e]{width:100%;height:auto}.bargain-container>.bargain-content>.recommend-products>.recommend-item>.products-title[data-v-e491fa4e]{margin:.2rem .13333rem .13333rem .13333rem;color:#323232;font-size:.37333rem;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bargain-container>.bargain-content>.recommend-products>.recommend-item>.money[data-v-e491fa4e]{color:#888;font-size:.26667rem;padding:0 .26667rem;margin-bottom:.26667rem}.bargain-container>.bargain-content>.recommend-products>.recommend-item>.btn[data-v-e491fa4e]{display:block;font-size:.34667rem;color:#fff;text-align:center;width:2.93333rem;height:.8rem;line-height:.8rem;background:-webkit-linear-gradient(left,#f64e01,#d30c05);background:linear-gradient(90deg,#f64e01,#d30c05);border-radius:.8rem;text-decoration:none;padding:0 .26667rem;margin:0 auto}.bargain-container>.bargain-content>.recommend-products>.recommend-item[data-v-e491fa4e]:nth-of-type(2n){margin-left:.26667rem}.bargain-container>.bargain-content>.goods-detail[data-v-e491fa4e]{border-radius:.13333rem;margin:0 .4rem .8rem .4rem;overflow:hidden}.bargain-container>.bargain-content>.goods-detail[data-v-e491fa4e],.bargain-container>.bargain-content>.goods-detail>.page-title[data-v-e491fa4e]{background:-webkit-linear-gradient(top,#e53931,#e94840);background:linear-gradient(180deg,#e53931,#e94840);box-shadow:0 .02667rem .05333rem 0 rgba(152,19,0,.46)}.bargain-container>.bargain-content>.goods-detail>.page-title[data-v-e491fa4e]{position:relative;width:100%;display:block;height:1.33333rem;line-height:1.33333rem;font-size:.42667rem;text-align:center;color:#fff;font-weight:500}.bargain-container>.bargain-content>.goods-detail img[data-v-e491fa4e]{display:block;width:100%;height:auto}.down-box[data-v-e491fa4e]{width:100vw;height:1.30667rem;position:fixed;bottom:0;left:0;z-index:10}.down-box[data-v-e491fa4e],.down-box .home-btn[data-v-e491fa4e]{display:-webkit-box;display:-webkit-flex;display:flex}.down-box .home-btn[data-v-e491fa4e]{width:1.94667rem;height:100%;background:#fff;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;font-size:.24rem;font-weight:400;color:#c2c2c2}.down-box .home-btn img[data-v-e491fa4e]{width:.57333rem;height:auto}.down-box .buy-now[data-v-e491fa4e]{width:3.36rem;background:#f58b01;font-size:.32rem;font-weight:500}.down-box .buy-now[data-v-e491fa4e],.down-box .share-friends[data-v-e491fa4e]{height:1.30667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#fff}.down-box .share-friends[data-v-e491fa4e]{width:4.69333rem;background:-webkit-linear-gradient(left,#d30c05,#f64e01);background:linear-gradient(90deg,#d30c05,#f64e01);font-size:.42667rem;font-weight:400}",""])},"996b":function(e,a,t){"use strict";t.d(a,"d",function(){return n}),t.d(a,"b",function(){return r}),t.d(a,"a",function(){return o}),t.d(a,"e",function(){return s}),t.d(a,"c",function(){return d});var i=t("007a");function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/spu/get_mybargain_spus",data:e})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/spu/get_info",data:e})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/spu/get_bargain_spus",data:e})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.get({url:"/api/v1/spu/get_spu_specs",data:e})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.post({url:"/api/v1/spu/get_my_bargain_order_spus",data:e})}},b041:function(e,a){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},b1d4:function(e,a,t){var i=t("921e");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,t("499e").default)("39f431e5",i,!0,{sourceMap:!1,shadowMode:!1})},d0e9:function(e,a,t){(e.exports=t("2350")(!1)).push([e.i,".van-swipe-item{float:left;height:100%}",""])},e17f:function(e,a,t){"use strict";t("68ef"),t("4d75"),t("2fcb")}}]);