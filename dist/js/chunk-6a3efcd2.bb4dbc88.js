(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6a3efcd2"],{"05d1":function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkUAAAASBAMAAACnRLeUAAAAElBMVEUAAAD///////////////////8+Uq06AAAABnRSTlMAGRMLBg+LSl/lAAABMklEQVRYw+2WTa6DMAyEDY+3r+G9PdyA3qAsum+k3v8sNSOlVpW2hi4ijdQskEM8Y2n40Sci3UWk1d4q1Vlk0YPID/aT2lGjf+tebZ90XPeDlce161d7VHx6XDpVOI2r/h/6U3Z2P6xpdiMYj7GHj7eKUL89WKwlJ2yaIRsFHj7eKkb9jmDNTTzhxd+yyMPHt4z6HcF2uFe+ZbGHj18Y9TuCbXu79+7znZ96PIxPjPoy2OFVsI1dUvkvv3voc4+HLmXUl8EeXgWbbD+V//LQw8dbxajfHixat4NCkz1cbhWjPqQvDxZHjARYjSDR+iXIIFi0ToQEWJEg0X/mI8CaBIlW4SPAmgSJI+EjwJoEiXnCR4A1CRLzAlAICY5Q/5aeSoLESh8S3Ck/DC79HoLsr1beAMNmBxXy9h5FAAAAAElFTkSuQmCC"},"1d4a":function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAMAAACBKikvAAABNVBMVEUAAADmLwPqNQPqNQPlLQPlLAPtPALXEgTlLgPdHgTjKwPnMQPpNQPXEgTeIATYFgTrOALbGwTrOALeHwTeIQTaGQTmLgPcGgTiKAPhJQTYFQTpMwPXEQXoMgPVDwXXEwTfIQTuPQLYFQXpNAPaFwTrOAPlLQTYEwXhJgPVDgXlLQPYFQTZFgTvQQLkKwPyRALaGATzRwLrOALZFwTuQAL0SQLqNwPZGATVEAXrOQPvPwLrOQPZFgXnMwPxQwLYFATiJwPfIwTpNQPhJwPjKQPzSALiJgPuPgLZFwTsOwPbGwXWEgTsPAPtPAPtPAPtPAPWFAXyRQLXFAX0SgLXEwTqNQPaFwToMgPVDwTmMAPlKwPeIQTiJgPdHATrOQPuPgLzRgLxQwLwQALtPQLgIwPeHwTsOwKdwhlNAAAAVHRSTlMANviNFfpQLS0cCvHs68eKKSMgDgX19e3q39fKyMOomYGAbF9eWk9OSEFAKfv78vLl5OPe2dK8ureysaiimpeTkXl5cWJhVz89JvnOzMnFwK55cUQe8RMCAAAB6klEQVQ4y42T53biMBBGZZsYh0AoofeaAOm997q9ab1aY7Cp7/8IGTkKsZEP8P1AM3fuwWg4Ri6R/6D5cng4n/domo/zeL5d09z1zSGWTMiv2Z5nu2t2u9uemeJV18rVLC+02bOy+WmGeNbrGQcHhmGcTfeejb5hyDL9fJ4qfu33+z8Q+g7Ht2lepTMadQSEBDhHNXcnIpdO9zqQc9qd02rvtCRHHDetSUf+vyyiNYqI773/SKqFKLrLMMYiISuSA4q5OxTy//uImLlcYX/QZUa0DfywVmHpP81STqooUWRLVKlIOTZUKGjGab2KXLNKZ3HhrakvaJoWb7p5TTpaqCOWJ9puCbwnbFHP9rAHHUBSmfSUpKbr2oMd3euQVNjphZOU3jthcTAY6KlFO1pM6QCLaCI3g1ardWsnty3IDeKyDPjJDqoAlpGLOBwOHRd/AeAmJtrttsfxGwHs8N4K4Bgr2Vv9GZCPE72qqqZp4QkmEkXrq/cBrXPiGtBjeN51TIXEgrCpYyjqnFjGqlrwXmxQDUq8cbFegKPMiUGMcQA7QtsgJ/4cz/fLv3fGTZ4Tv7BJuhpFKFpNszbLiQGCMSHZtfHlsoQQTALcGgnk5MWOGieU+SbXSEjey+02T8jkIhvXYeSScKHBqlc5FIqqkRy9bwAAAABJRU5ErkJggg=="},"1d61":function(e,a,i){e.exports=i.p+"img/bargain-bg-2.a1dcc382.png"},"31e7":function(e,a,i){"use strict";i.d(a,"c",function(){return n}),i.d(a,"d",function(){return r}),i.d(a,"a",function(){return o}),i.d(a,"e",function(){return s}),i.d(a,"b",function(){return b});var t=i("007a");function n(e){let a=e.bargain_id;return t.a.post({url:"/api/v1/bargain/get_bargain_info",data:{bargain_id:a}})}function r(e){let a=e.bargain_id,i=e.page_size,n=e.page_num;return t.a.post({url:"/api/v1/bargain/get_help_bargain_list",data:{bargain_id:a,page_size:i,page_num:n}})}function o(e){let a=e.bargain_id,i=e.spu_id;return t.a.post({url:"/api/v1/bargain/chop",data:{spu_id:i,bargain_id:a}})}function s(e){let a=e.page_size,i=void 0===a?10:a,n=e.page_num,r=void 0===n?1:n;return t.a.post({url:"/api/v1/spu/get_mybargain_spus",data:{page_size:i,page_num:r}})}function b(e){let a=e.relation_id;return t.a.post({url:"/api/v1/bargain/chop_share",data:{relation_id:a}})}},"4f48":function(e,a,i){e.exports=i.p+"img/bargain-bg-1.9102cda9.png"},5454:function(e,a){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},5616:function(e,a,i){"use strict";i.d(a,"c",function(){return n}),i.d(a,"a",function(){return r}),i.d(a,"b",function(){return o});var t=i("007a");function n(e){let a=e.spu_id;return t.a.get({url:"/api/v1/share/share_spu",data:{spu_id:a}})}function r(e){let a=e.bargain_id;return t.a.get({url:"/api/v1/share/share_bargain",data:{bargain_id:a}})}function o(e){let a=e.relation_id;return t.a.get({url:"/api/v1/share/get_share_info",data:{relation_id:a}})}},"595f":function(e,a,i){e.exports=i.p+"img/good-large.1709bded.png"},"5b3c":function(e,a,i){"use strict";i.r(a),i("aaa4"),i("612f");var t=i("5fbf"),n=(i("f91a"),i("0348")),r=i("996b"),o=i("5616"),s=i("31e7"),b={components:{dialogSharingFriends:e=>Promise.all([i.e("chunk-32d107a6"),i.e("chunk-6d0b26bb")]).then(function(){var a=[i("28fd")];e.apply(null,a)}.bind(this)).catch(i.oe),countDown:e=>i.e("chunk-63bbd858").then(function(){var a=[i("cd26")];e.apply(null,a)}.bind(this)).catch(i.oe),dialogPotongSendiri:e=>i.e("chunk-21b57136").then(function(){var a=[i("fd89")];e.apply(null,a)}.bind(this)).catch(i.oe),dialogShareEarningEntry:e=>i.e("chunk-1933bebe").then(function(){var a=[i("20c5")];e.apply(null,a)}.bind(this)).catch(i.oe)},data:()=>({dialogs:{sharingFriends:{show:!1},potongSendiri:{show:!1},shareEarningEntry:{show:!1}},chop_info:{},shareInfo:{},spu:{spu_pics:[]},bargain_info:{},bargain_user_info:{},expirationDat:{h:"24",p:"00",m:"00"},help_bargain_list:[],helpBargainPageDat:{page_size:10,page_num:1},spu_list:[],isShareEarningEntry:!1}),created(){this.init()},mounted(){this.$refs.bargainContainer.scrollTo&&this.$refs.bargainContainer.scroll(0,0),document.title="Getting Freebies"},methods:{init(){var e=this;return Object(n.a)(function*(){const a=e.$route.query,i=a.relationId,t=a.showShareEarningEntry,n=a.bargainId,r=a.spuId;i?(e.isShareEarningEntry=!0,e.dialogs.shareEarningEntry.show="no"!=t,yield e.initShareInfo(i)):(n||(yield e.goBargainChop({spu_id:r})),e.initBargainInfo(),e.initHelpBargainList()),e.initSpuInfo(),e.initSpuList()})()},initShareInfo(e){var a=this;return Object(n.a)(function*(){let i=yield Object(o.b)({relation_id:e});if(i&&i.data){const e=i.data,n=e.bargain_id,r=e.spu_id,o=e.type,s=e.invite_user_id;a.$router.replace({query:Object(t.a)({},a.$route.query,{bargainId:n,spuId:r,type:o,inviteUserId:s})})}})()},goBargainChop(e){var a=this;return Object(n.a)(function*(){let i=e.bargain_id,n=e.spu_id;if(!a.$store.state.userInfo.user_id)return a.$store.commit("setLoginJumpUrl",""),void a.$store.commit("setLoginSelectShow",!0);let r=yield Object(s.a)({bargain_id:i,spu_id:n});if(r&&r.data&&r.data.chop_info){const e=r.data.chop_info;a.chop_info=e,a.$router.replace({query:Object(t.a)({},a.$route.query,{bargainId:e.bargain_id})});let i=JSON.parse(JSON.stringify(a.$store.state.goodsList));return i.forEach(e=>{e.spu_id==n&&(e.isBargain=!0)}),a.$store.commit("setGoodsList",i),a.dialogs.potongSendiri.show=!0,Promise.resolve()}})()},goChopShare(){var e=this;return Object(n.a)(function*(){if(!e.$store.state.userInfo.user_id)return e.$store.commit("setLoginJumpUrl",""),void e.$store.commit("setLoginSelectShow",!0);(yield Object(s.b)({relation_id:e.$route.query.relationId}))&&(e.isShareEarningEntry=!1)})()},initSpuInfo(){var e=this;return Object(n.a)(function*(){let a=yield Object(r.b)({spu_id:e.$route.query.spuId});if(a&&a.data&&a.data.spu){let i=a.data.spu;for(let a in i)e.spu[a]=i[a]}})()},initBargainInfo(){var e=this;return Object(n.a)(function*(){let a=yield Object(s.c)({bargain_id:e.$route.query.bargainId});a&&a.data&&(e.bargain_info=a.data.bargain_info||a.data,e.bargain_user_info=a.data.bargain_user_info)})()},initHelpBargainList(){var e=this;return Object(n.a)(function*(){let a=yield Object(s.d)(Object(t.a)({bargain_id:e.$route.query.bargainId},e.helpBargainPageDat));a&&a.data&&(e.help_bargain_list=a.data)})()},initSpuList(){var e=this;return Object(n.a)(function*(){let a=e.$store.state.goodsList.filter(e=>!e.isBargain);if(a.length>6)return void(e.spu_list=a);let i=yield Object(r.a)({page_size:16,page_num:1,is_all:0});i&&i.data&&(e.spu_list=i.data.spu_list,e.$store.commit("setGoodsList",e.spu_list))})()},openSharingFriendsDialog(){var e=this;return Object(n.a)(function*(){if(e.$gaSend({eventCategory:"砍价详情页_分享给好友",eventAction:"点击",eventLabel:e.spu.title.substr(0,10)}),!e.$store.state.userInfo.user_id){const a=window.location;return a.pathname,a.search,e.$store.commit("setLoginJumpUrl",""),void e.$store.commit("setLoginSelectShow",!0)}let a=yield Object(o.a)({bargain_id:e.$route.query.bargainId});a&&a.data&&(e.shareInfo=a.data),e.dialogs.sharingFriends.show=!0})()},jumpCurBargainPage(e){if(this.$gaSend({eventCategory:"砍价详情页_底部商品列表",eventAction:"点击",eventLabel:e.title.substr(0,10)}),!this.$store.state.userInfo.user_id)return this.$store.commit("setLoginJumpUrl",""),void this.$store.commit("setLoginSelectShow",!0);this.$router.replace({query:{spuId:e.spu_id}}),document.getElementsByClassName("content-container")[0].scroll(0,0),this.init()},jumpBuyPage(){if(this.$gaSend({eventCategory:"砍价详情页_去购买",eventAction:"点击",eventLabel:this.spu.title.substr(0,10)}),!this.$store.state.userInfo.user_id)return this.$store.commit("setLoginJumpUrl",""),void this.$store.commit("setLoginSelectShow",!0);1==this.bargain_info.can_buy&&this.$router.push({path:"/purchase",query:Object(t.a)({},this.$route.query)})},refreshTime(){let e=this.$util.expiration(this.spu.expire_ttl);if(!e)return;this.expirationDat=e;const a=setInterval(()=>{this.expirationDat=this.$util.expiration(this.spu.expire_ttl)},1e3);this.$once("hook:beforeDestroy",()=>{clearInterval(a)})}},beforeRouteUpdate(e,a,i){const t=e.query,n=t.loginGoShare;t.bargainType,"ok"==n&&(this.$store.commit("setLoginSelectShow",!1),this.openSharingFriendsDialog()),i()},beforeRouteEnter(e,a,i){i(e=>{"/purchase"==a.path&&e.$util.paymentCancellationPrompt()})},watch:{spu:{handler(){this.spu.hasOwnProperty("title")&&this.$gaSend({eventCategory:"砍价详情页",eventAction:"页面展示",eventLabel:this.spu.title.substr(0,10)})},immediate:!0,deep:!0}}},d=(i("d943"),i("17cc")),g=Object(d.a)(b,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{ref:"bargainContainer",staticClass:"bargain-container"},[t("div",{staticClass:"turn-home",on:{click:function(a){return e.$router.push("/")}}}),t("div",{staticClass:"bargain-header"},[t("div",{staticClass:"bargain-info-box"},[t("img",{staticClass:"bg",attrs:{src:i("1d61"),alt:""}}),t("div",{staticClass:"bargain-content"},[t("div",{staticClass:"bargain-info"},[t("div",{staticClass:"img-box"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.spu.spu_pics&&e.spu.spu_pics[0]||i("595f"),expression:"spu.spu_pics&&spu.spu_pics[0]||require('./../assets/images/good-large.png')"}]})]),t("div",{staticClass:"detail"},[t("p",{staticClass:"title"},[e._v(e._s(e.spu.title))]),t("div",{staticClass:"price-box"},[t("div",{staticClass:"price-box-item"},[t("p",{staticClass:"p-t-3"},[e._v("244d Sent")]),t("p",{staticClass:"p-t-1"},[e._v("\n                  Price\n                  "),t("span",[e._v("RP")]),t("span",[e._v(e._s(e.spu.original_price))])]),t("p",{staticClass:"p-t-2"},[e._v("current price")])]),t("div",{staticClass:"price-box-item"},[t("p",{staticClass:"p-n-1"},[t("span",[e._v("Rp")]),e._v(e._s(e.spu.price))])])])])]),t("div",{staticClass:"bargain-schedule"},[t("p",{staticClass:"title"},[t("span",{staticClass:"n-1"},[t("span",{staticClass:"dollar"},[e._v("RP")]),e._v(e._s(e.bargain_info.bargain_amount||0))]),e._v("cheaper now, leaving"),t("span",{staticClass:"n-2"},[t("span",{staticClass:"dollar"},[e._v("RP")]),e._v(e._s(e.bargain_info.bargain_after||e.spu.price))])]),t("div",{staticClass:"schedule"},[t("div",{staticClass:"active",style:{width:e.bargain_info.bargain_rate+"%"}}),t("div",{staticClass:"schedule-item"},[t("span",{staticClass:"description"},[e._v("cut "),t("span",{staticClass:"highlight"},[e._v(e._s(e.bargain_info.bargain_rate)+"%")])])]),e._m(0),e._m(1)])]),t("count-down",{staticClass:"spu-count-down",attrs:{dateDiff:e.spu.expire_ttl}}),t("div",{staticClass:"ctrl-box"},[e.isShareEarningEntry?t("div",{staticClass:"share-btn",on:{click:e.goChopShare}},[e._v("POTONG PISAU")]):t("div",{staticClass:"share-btn",on:{click:e.openSharingFriendsDialog}},[e._v("SHARE FRIEDNS FOR FREEBIES")]),e.bargain_info.can_buy&&1==e.bargain_info.can_buy?t("div",{staticClass:"buy-btn",on:{click:e.jumpBuyPage}},[e._v("Rp "+e._s(e.bargain_info.bargain_after)+" buy now")]):t("div",{staticClass:"buy-btn cur"},[e._v("\n            BUY NOW\n          ")])])],1)])]),t("div",{staticClass:"bargain-content"},[e.$route.query.bargainId&&e.help_bargain_list.length>0?t("div",{staticClass:"team-box"},[t("p",{staticClass:"page-title"},[e._v("Bargaining team")]),t("ul",{staticClass:"team-list"},e._l(e.help_bargain_list,function(a,n){return t("li",{key:n,staticClass:"team-list-item"},[t("div",{staticClass:"column"},[t("div",{class:"team-img huangguan"+(n+1)},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.avatar||i("595f"),expression:"item.avatar||require('./../assets/images/good-large.png')"}]})]),t("div",{staticClass:"team-info"},[t("p",{staticClass:"team-name"},[e._v(e._s(a.username))]),t("p",{staticClass:"team-date"},[e._v(e._s(a.bargain_time))])])]),t("div",{staticClass:"column"},[t("p",{staticClass:"dollar"},[e._v("Rp"),t("span",[e._v(e._s(a.bargain_amount))])])])])}),0)]):e._e(),e.$route.query.bargainId?e._e():t("div",{staticClass:"goods-detail"},[t("p",{staticClass:"page-title"},[e._v("Product Petails")]),t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.spu&&e.spu.spu_pics[0],expression:"spu&&spu.spu_pics[0]"}]})]),e.spu_list.length>0?t("div",{staticClass:"recommend-products"},[t("p",{staticClass:"page-title"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i("1d4a"),expression:"require('./../assets/images/start.png')"}]}),t("span",[e._v("You might like")])]),e._l(e.spu_list,function(a){return t("div",{key:a.spu_id,staticClass:"recommend-item"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.spu_pics&&a.spu_pics[0]||i("595f"),expression:"item.spu_pics&&item.spu_pics[0]||require('./../assets/images/good-large.png')"}],staticClass:"products-photo"}),t("p",{staticClass:"products-title"},[e._v(e._s(a.title))]),t("div",{staticClass:"products-ctrl"},[t("span",{staticClass:"money"},[e._v(e._s(a.deliver_count)+" Sent")]),t("a",{staticClass:"btn",attrs:{href:"javascrip:;"},on:{click:function(i){return e.jumpCurBargainPage(a)}}},[e._v("Get a freebie")])])])})],2):e._e()]),e.dialogs.sharingFriends.show?t("dialog-sharing-friends",{attrs:{itemData:e.spu,dialogVisible:e.dialogs.sharingFriends,shareInfo:e.shareInfo},on:{"update:dialogVisible":function(a){return e.$set(e.dialogs,"sharingFriends",a)},"update:dialog-visible":function(a){return e.$set(e.dialogs,"sharingFriends",a)}}}):e._e(),e.dialogs.potongSendiri.show?t("dialog-potong-sendiri",{attrs:{chopInfo:e.chop_info,dialogVisible:e.dialogs.potongSendiri},on:{"update:dialogVisible":function(a){return e.$set(e.dialogs,"potongSendiri",a)},"update:dialog-visible":function(a){return e.$set(e.dialogs,"potongSendiri",a)}}}):e._e(),e.dialogs.shareEarningEntry.show?t("dialog-share-earning-entry",{attrs:{preAmount:e.shareInfo.pre_bargain_amount,dialogVisible:e.dialogs.shareEarningEntry},on:{"update:dialogVisible":function(a){return e.$set(e.dialogs,"shareEarningEntry",a)},"update:dialog-visible":function(a){return e.$set(e.dialogs,"shareEarningEntry",a)}}}):e._e()],1)},[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"schedule-item ball ball-center"},[a("span",{staticClass:"description"},[this._v("Available for purchase")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"schedule-item ball ball-right"},[a("span",{staticClass:"description"},[this._v("Take it free")])])}],!1,null,"bedb4766",null);a.default=g.exports},"637d":function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAqCAMAAAAZKoJqAAACZ1BMVEUAAAD61VX68oD97Fj93kf87WP38qT47oz982X65WT2og32lg3yZgD38qb5rynzcAD386b38qT/+F7zawL39q3+9WD6wyj0hRH762X1hAjzdAL2lxf0gQX6tCnzcgD/9lzzdAD2lRX38qP38qb98lT48J3yZAD++F30eAD++V7zZwH/+mD0hQD475fyagH38qb48Z7386n56nv//mP386XzdQH56n3/+V/zbgTzbAD47pHzbQH0fwP4+a7496v39qf3+7X5qib3sxr2jQ/yZgD0hQb5riH71iv0eAHybgD1jg/ycQD1ggL/+l/0dgL6wSj47o738qXxZgD82Dr2oSr464LzcwD38Z/+6UH0hgD56Hb5sw349aX55mn464T4vgD94Sj3/Lj48JL89XPzdgD38JjzhAX475b/+F34thj0gwX++2L3xQ73xA/99Fn0jAj72jHzeQD+9Er47Yv50yj46n/4rSL6vzj0hQD5yyP+9130gQD3/bb56XfxZgD71SH71h31pUX1jxL6zBD83TL82zD82i771yv71Sj94DT71y/85Dv38qb94Tj60iT+6D73wAv3vAX84jb6zh/5wx35yxr4xRT4vRH/+1r82zb3uAT//Wn/91798VT+8Uz+7Uf85jP2rgX/+VP941D96Df32jL7zyr50CH2zh/4rxP4yg33uQ34xAz2qAnvvQj3tAj38Z7/92f//F/+7Fn96z77yT310SX5viL4nRz3yxr5uBn4pxn4wBL1oAT2tALzcgD+7VL67U/800X/5Dz53zr6xynzxxjywQ32xAf1mQHtsgD820v4uTQkcqxjAAAAhHRSTlMABAYTEAz6tTcg/vz87OvcvaaGcj8qJSEbDwn9/fz28PDr4tjUzsfExL6wmo+OjYZtZF1dWVRQT0k4NjEpIhkTDP79/erj3NnX08++uaulnZyZlouGgIB8dWhXV0xMQj84NCsjGPn16urq2NHDurm2s7CupJ6Tk4+GfHZycGtjUE9OPysISKpdAAADiklEQVQ4y43S5VcUURgG8PdusSKigoBid4IIIiKo2N3d3d3dd2buzOxsBxts0N2ddv9R3tEPzq57PPt8nPM7d97n3hdiDEKxQlWMUqWNESKNKkaoVscIxw6LEQ5LiZxao1artehfqI8YRf94/tzZ25Lyxmoj4LGwD5q8uSUfK3jRFCi5mJSiLDr2mHJIlLKtpPNzT5WREMJK/sk52r/wsF4J9VfExi+cJGGGYTlCxNYkDfyJOnsJKJIyu+J79QeeFQSMKeaMom/HuD9DZT9TQvX8j9+NJgFb7b1ubMUswxpN3vtIvo3D+5Qjo5x3jT0y/FQTio9fzVgFhg26N5+lcMm9M6DImbmdjR8YzHd9C5kHQwM1bsyWCxPmpVN45zgok/eusUpi+coGS63Z6fwasotBfvg8AHQ8LhvCklTxhWcwtnucNoeN81gcYnnfrEJAy+L2QXiuV/dILMY2j8tN+iVC+PKukUtluFMbIWd8rpZllaWuptf1yW1qJ+eTAU7HxZ2GSFldxbMMJmZLU0Ndw0BN5ertAMt3zjwK2jQULjuNmKHdbR5zvbne0hR/Ix1WZFzIAnQwsSBMzq6QJbXE4XSZa+s2F8DKjHMZgF7627amK+V88bcUsKndanPa1+VC0YHm0Svh5AZra+JzpczxE45KXNnXJwT7hyeDKqt55jJIvcmxpe+3KCfVT5YPxbz924Cdi98OqkXN0xYD2kPXKlB2OV+5xHuKWSKPWVtbN3xOGlqs0x0AdESk0vR2ajIo8npyqVFgMHZ8DdErPzpCtwvQiUuVVipLxmcq5bi9LQGjwOKgfUoyjJluGLUC3lz19PJYlrtBmcL13gDhgnhNJpyaaZg+BtR3zRaXwHPtb9eES8hPbCkulxdo+SjDiEWAHvGOwX4q/WUTMiE8S6eWtUyclVo02qBbSNvYulwWJ73k0o5J+yEiBRu7171S7TLoRtM265samsw2iYi+7rW5EJm0WXthoUFuk3pt0FMvH8mV/hiaMw6i5KlBbqPZYak3u2wYE5OvO2FBNHhq2u82BxnCOVxuq1H0diTMORsFoizDCNrmBYMliXMQTvS+H5pyKAqkF0Rfmy4QywoCx7IBb8fQpIcQLWPooqHU25K81aK/tW1VwpQFUaGqSH7XB22+Yhpf2c8JCRuVv45Meu7WqYkTJ64aP2ntyAVp8N+g/P1bNo3cdOtJIfyTX0VkUSTYT3DoAAAAAElFTkSuQmCC"},"7a30":function(e,a,i){var t=i("ea31");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals),(0,i("85cb").default)("527ba499",t,!0,{sourceMap:!1,shadowMode:!1})},"996b":function(e,a,i){"use strict";i.d(a,"d",function(){return n}),i.d(a,"b",function(){return r}),i.d(a,"a",function(){return o}),i.d(a,"e",function(){return s}),i.d(a,"c",function(){return b});var t=i("007a");function n(e){let a=e.page_size,i=e.page_num;return t.a.post({url:"/api/v1/spu/get_mybargain_spus",data:{page_size:a,page_num:i}})}function r(e){let a=e.spu_id;return t.a.post({url:"/api/v1/spu/get_info",data:{spu_id:a}})}function o(e){let a=e.page_size,i=e.page_num,n=e.is_all;return t.a.post({url:"/api/v1/spu/get_bargain_spus",data:{page_size:a,page_num:i,is_all:n}})}function s(e){let a=e.spu_id;return t.a.get({url:"/api/v1/spu/get_spu_specs",data:{spu_id:a}})}function b(e){let a=e.page_size,i=e.page_num;return t.a.post({url:"/api/v1/spu/get_my_bargain_order_spus",data:{page_size:a,page_num:i}})}},d6bd:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAA/1BMVEX///8AAAD////////fRTz86Ob////////////////////////////tgXT////////aGwv////////////////qfnX////YGAvqOgvlMgz////////////////////////WFw3////YGg/aHw3vTRf////////yaTr62NH87+3hLA3uQwz3nX74rJXwnZT////eLBfkTj3vbEnkX1fobWD1jWv0uLH6wbDaMiriPynwWyzePjTjRzPxkXztk4v6z8P////////lQCLqTSfVDgXgIwTXEgXiJwTaGATcGwTrNwPtOwPlLAPoMQPeIATjKgTdHgTYFQXmLwPpNAPuPgNMm0DoAAAARHRSTlOzAKql6rmZQhAKBItf1mUi/a1rHRXWh/38+52DW1ItKPyi+/v3dTjqvrf7+9TNzXD46eXg3trGxvDw7+3t1NDBk1Xz8HZgcnYAAANtSURBVFjDzdmHVhpBGIbh313dxgpSo9SgKE3FbixR01BixJb7v5aMy5ghON8MsHuI7wU8x/M7ulNoTp+XsP31mGUalDStq9i6bye8OX1aulLMJelNyVyxEo4up0yCmanytLRbskiTVXKnoJ24QWNkxJ0JadcXsA733Ulou0oTVLXHpjMFmrBCZjzaNmjiDHsM2kvRVKU8He3EaMpijppO52nq8mkVnTApRGYC02mNrMtIIzqTp5DlM3LasSh0liOjvRhFUMyT0HGKpPhbeoMiamOUzphR0WZmhC5QZBX+pW3StrBZr7Vr9cMG6bKHabdKujbbv1m3t7fLh6Sp6g7RPmlq1jnM+nm6QOp8QTsGqbusCZjVPiZlhsNp/ZLeEnDQ8/Nn3eLmtGuQskMGD+Lw893dHqkyXE6X1CujPvoj3730TblSSpy2SNFxbQQO5Kenp5UtwlkDuqxccwD+xVokXDmgU4Tb40OWwPf393tNQqUC2iRU41QyZA6zrq+/XhLIfKEreM214Sxe4KBtAlUYXYRj1sI/WGiFFxmdQ0tDyBBm9Y9IWm6OvCSga3jIQu73+zskLelRAg1aNQsBPzw8gHEnyAZ0XQ8P5N6uHLDJR/PQDZnDvR6YiE/rgF5WDVnArDWSxeAYovVD7gXdADpGFqL1Qw7gG0RbZCJaNWQBY9okA9EjMEsGY5rBkGawkCH8+LiGiCSiNUPmMGsVCHDWK8ohC7jbBbRBeUTrhxzAkDbpCtJM1sOYtiiHaP2Qu4M+oj+ZDqK1Q+Z9B3SHvqhoDp8virJBZ92/MqAZvIFoMQvZf835VxjRDE4DuiWGLPtEHXEY02n4AWuJIcu2MlkOQzrpwc9uS/z2li4WRrsQMqBzeLPQGl4WS6994AUwT76ui3iLcxLAaMEN94lkVfDG7CCQMSw6ABszuJ1sIJjLogbYTuJN8AGHWRhm7cNNMN66n/QQrJ+0pT5wNM/hkEVnTZJV0h2TsjsBjOXVLDomaQ93ze393XnY/vYCOtyBI2n4DAccpMPng+N/+EwXXFqEz57NVQsrY0Q2jswMrrVmcBkX8RVi9BefeenFp/4iWJ+ZRpfMiZC2kZj91Xj4C/1ZP0OIvM50cseb+ZNP+Ieq//+8NvGj4Ht5yhz/Afa9PRtH+ditf6Inw7TGfqL/AwjnuP7ZEnAWAAAAAElFTkSuQmCC"},d943:function(e,a,i){"use strict";var t=i("7a30");i.n(t).a},ea31:function(e,a,i){var t=i("5454");(e.exports=i("690e")(!1)).push([e.i,".bargain-container[data-v-bedb4766]{background:-webkit-linear-gradient(45deg,#fd5448,#e82b23);background:linear-gradient(45deg,#fd5448,#e82b23)}.bargain-container>.turn-home[data-v-bedb4766]{position:fixed;top:80%;right:.13333rem;width:1.2rem;height:1.2rem;background:url("+t(i("d6bd"))+") no-repeat;background-size:100%;z-index:9999}.bargain-container>.bargain-header[data-v-bedb4766]{position:relative;padding:.53333rem .13333rem .13333rem .13333rem;background:url("+t(i("4f48"))+") no-repeat;background-size:100%}.bargain-container>.bargain-header>.bargain-info-box[data-v-bedb4766]{position:relative;border-radius:.26667rem}.bargain-container>.bargain-header>.bargain-info-box>.bg[data-v-bedb4766]{width:100%;height:auto}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content[data-v-bedb4766]{position:absolute;top:.33333rem;left:.46667rem;text-align:center}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info[data-v-bedb4766]{width:8.8rem;background:#fff;border-radius:.13333rem;padding:.34667rem .34667rem 0 .34667rem;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;text-align:left}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.img-box[data-v-bedb4766]{width:2.93333rem;height:2.93333rem;margin-right:.32rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.img-box>img[data-v-bedb4766]{width:100%;height:2.82667rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail[data-v-bedb4766]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.title[data-v-bedb4766]{font-size:.34667rem;color:#323232;line-height:.49333rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box[data-v-bedb4766]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item[data-v-bedb4766]{width:1.33333rem;-webkit-box-flex:1;-webkit-flex:1;flex:1}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item[data-v-bedb4766]:nth-of-type(2){width:1.33333rem;margin-left:.13333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item>.p-t-1[data-v-bedb4766]{font-size:.24rem;color:#888}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item>.p-t-1>span[data-v-bedb4766]:first-child{font-size:.21333rem;color:#f77e18}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item>.p-t-1>span[data-v-bedb4766]:last-child{font-size:.32rem;color:#f77e18;text-decoration:line-through}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item>.p-t-2[data-v-bedb4766]{display:inline-block;padding:0 .22667rem;background-color:#d30c05;line-height:.32rem;color:#fff;font-size:.24rem;border-radius:.08rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item>.p-t-3[data-v-bedb4766]{font-size:.32rem;color:#888;margin:.36rem 0}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item>.p-n-1[data-v-bedb4766]{color:#d30c05;font-size:.54667rem;position:relative;top:.13333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item>.p-n-1>span[data-v-bedb4766]{font-size:.29333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item>.p-n-2[data-v-bedb4766]{color:#888;font-size:.32rem;margin-bottom:.08rem;position:relative;top:.13333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule[data-v-bedb4766]{margin:.46667rem 0 .86667rem 0}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule>.title[data-v-bedb4766]{font-size:.33333rem;color:#323232;text-align:center;margin-bottom:.33333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule>.title .dollar[data-v-bedb4766]{font-size:.28rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule>.title>.n-1[data-v-bedb4766]{font-size:.42667rem;color:#f75e10}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule>.title>.n-2[data-v-bedb4766]{font-size:.42667rem;color:#d30c05}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule[data-v-bedb4766]{position:relative;margin:0 auto;width:7.73333rem;height:.26667rem;border-radius:.13333rem;background-color:#fececa;display:-webkit-box;display:-webkit-flex;display:flex}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.active[data-v-bedb4766]{position:absolute;top:0;left:0;width:30%;height:100%;background:url("+t(i("05d1"))+') no-repeat;background-size:100%;background-color:#d30c05;border-radius:.13333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.schedule-item[data-v-bedb4766]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-top:.53333rem;text-align:center;font-size:.24rem;color:#323232}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.schedule-item .highlight[data-v-bedb4766]{color:#d30c05;font-size:.26667rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.schedule-item[data-v-bedb4766]:nth-of-type(2){text-align:left}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.schedule-item[data-v-bedb4766]:last-of-type{text-align:right}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.ball[data-v-bedb4766]:after{content:"";position:absolute;top:-.02667rem;width:.32rem;height:.32rem;border-radius:.16rem;background:-webkit-linear-gradient(135deg,#ee5d2f,#ff9b04);background:linear-gradient(-45deg,#ee5d2f,#ff9b04)}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.ball-center[data-v-bedb4766]:after{left:calc(50% - .16rem)}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.ball-right[data-v-bedb4766]:after{right:0}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.spu-count-down[data-v-bedb4766]{display:inline-block}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.ctrl-box[data-v-bedb4766]{margin-top:.8rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.ctrl-box>.share-btn[data-v-bedb4766]{color:#a53a06;font-size:.48rem;height:1.37333rem;line-height:1.37333rem;background:-webkit-linear-gradient(top,#f8e5a3,#f4cc6d);background:linear-gradient(180deg,#f8e5a3,#f4cc6d);box-shadow:0 .12rem .12rem 0 rgba(174,36,5,.66);border-radius:.69333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.ctrl-box>.buy-btn[data-v-bedb4766]{margin-top:.32rem;color:#fce0dd;font-size:.48rem;height:1.37333rem;line-height:1.37333rem;background:-webkit-linear-gradient(top,#fba284,#f96645);background:linear-gradient(180deg,#fba284,#f96645);box-shadow:0 .12rem .12rem 0 rgba(174,36,5,.66);border-radius:.69333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.ctrl-box>.buy-btn.cur[data-v-bedb4766]{color:#999;background:-webkit-linear-gradient(top,#efefef,#cdcece);background:linear-gradient(180deg,#efefef,#cdcece)}.bargain-container>.bargain-content>.team-box[data-v-bedb4766]{background:-webkit-linear-gradient(top,#e53931,#e94840);background:linear-gradient(180deg,#e53931,#e94840);box-shadow:0 .02667rem .05333rem 0 rgba(152,19,0,.46);border-radius:.13333rem;margin:0 .4rem}.bargain-container>.bargain-content>.team-box>.page-title[data-v-bedb4766]{position:relative;width:100%;display:block;height:1.33333rem;line-height:1.33333rem;font-size:.42667rem;text-align:center;color:#fff}.bargain-container>.bargain-content>.team-box>.team-list[data-v-bedb4766]{margin-bottom:.50667rem;padding-bottom:.4rem;max-height:8rem;overflow-y:scroll}.bargain-container>.bargain-content>.team-box>.team-list>li[data-v-bedb4766]{height:1.33333rem;margin:0 .66667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-top:1px dotted #ffb893;color:#fff}.bargain-container>.bargain-content>.team-box>.team-list>li>.column[data-v-bedb4766]{-webkit-box-flex:2;-webkit-flex:2;flex:2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.bargain-container>.bargain-content>.team-box>.team-list>li>.column+.column[data-v-bedb4766]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item[data-v-bedb4766]{background:url('+t(i("637d"))+") no-repeat 100%;background-size:.54667rem .54667rem}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item .team-img>img[data-v-bedb4766]{width:.98667rem;height:.98667rem;border-radius:.49333rem;overflow:hidden;margin:0 .16rem 0 .08rem}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item .team-name[data-v-bedb4766]{font-size:.33333rem;margin-bottom:.06667rem}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item .team-date[data-v-bedb4766]{font-size:.25333rem}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item .dollar[data-v-bedb4766]{font-size:.33333rem;margin-right:2rem}.bargain-container>.bargain-content>.recommend-products[data-v-bedb4766]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;background-color:#fff;padding:0 .46667rem}.bargain-container>.bargain-content>.recommend-products>.page-title[data-v-bedb4766]{position:relative;width:100%;display:block;height:1.33333rem;line-height:1.33333rem;font-size:.45333rem;text-align:center;color:#e65137;background:-webkit-linear-gradient(top,#f44a02 .26855%,#d40e05);background:linear-gradient(180deg,#f44a02 .26855%,#d40e05);-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.bargain-container>.bargain-content>.recommend-products>.page-title>img[data-v-bedb4766]{width:.53333rem;height:.53333rem;margin-right:.32rem}.bargain-container>.bargain-content>.recommend-products>.recommend-item[data-v-bedb4766]{background:#fff;box-sizing:border-box;width:calc(50% - .13333rem);height:6.66667rem;border-radius:.13333rem .13333rem 0 0;overflow:hidden;margin-bottom:.37333rem}.bargain-container>.bargain-content>.recommend-products>.recommend-item>.products-photo[data-v-bedb4766]{width:100%;height:4.45333rem}.bargain-container>.bargain-content>.recommend-products>.recommend-item>.products-title[data-v-bedb4766]{margin:.2rem .13333rem .36rem .13333rem;color:#323232;font-size:.37333rem;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bargain-container>.bargain-content>.recommend-products>.recommend-item>.products-ctrl[data-v-bedb4766]{line-height:.66667rem;color:#888;font-size:.32rem;padding:0 .18667rem;margin-bottom:.6rem}.bargain-container>.bargain-content>.recommend-products>.recommend-item>.products-ctrl>.btn[data-v-bedb4766]{display:block;float:right;font-size:.32rem;color:#fff;text-align:center;width:2.13333rem;height:.66667rem;background:-webkit-linear-gradient(left,#d30c05,#f64e01);background:linear-gradient(90deg,#d30c05,#f64e01);border-radius:.33333rem;text-decoration:none}.bargain-container>.bargain-content>.recommend-products>.recommend-item[data-v-bedb4766]:nth-of-type(2n){margin-left:.26667rem}.bargain-container>.bargain-content>.goods-detail[data-v-bedb4766]{background:-webkit-linear-gradient(top,#e53931,#e94840);background:linear-gradient(180deg,#e53931,#e94840);box-shadow:0 .02667rem .05333rem 0 rgba(152,19,0,.46);border-radius:.13333rem;margin:0 .4rem .4rem .4rem}.bargain-container>.bargain-content>.goods-detail>.page-title[data-v-bedb4766]{position:relative;width:100%;display:block;height:1.33333rem;line-height:1.33333rem;font-size:.42667rem;text-align:center;color:#fff}.bargain-container>.bargain-content>.goods-detail>img[data-v-bedb4766]{display:block;width:100%;height:auto}.down-box[data-v-bedb4766]{width:100vw;height:1.30667rem;position:fixed;bottom:0;left:0;z-index:10}.down-box[data-v-bedb4766],.down-box .home-btn[data-v-bedb4766]{display:-webkit-box;display:-webkit-flex;display:flex}.down-box .home-btn[data-v-bedb4766]{width:1.94667rem;height:100%;background:#fff;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;font-size:.24rem;font-weight:400;color:#c2c2c2}.down-box .home-btn img[data-v-bedb4766]{width:.57333rem;height:auto}.down-box .buy-now[data-v-bedb4766]{width:3.36rem;background:#f58b01;font-size:.32rem;font-weight:500}.down-box .buy-now[data-v-bedb4766],.down-box .share-friends[data-v-bedb4766]{height:1.30667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#fff}.down-box .share-friends[data-v-bedb4766]{width:4.69333rem;background:-webkit-linear-gradient(left,#d30c05,#f64e01);background:linear-gradient(90deg,#d30c05,#f64e01);font-size:.42667rem;font-weight:400}",""])}}]);