(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4ed64957"],{"05d1":function(a,e){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkUAAAASBAMAAACnRLeUAAAAElBMVEUAAAD///////////////////8+Uq06AAAABnRSTlMAGRMLBg+LSl/lAAABMklEQVRYw+2WTa6DMAyEDY+3r+G9PdyA3qAsum+k3v8sNSOlVpW2hi4ijdQskEM8Y2n40Sci3UWk1d4q1Vlk0YPID/aT2lGjf+tebZ90XPeDlce161d7VHx6XDpVOI2r/h/6U3Z2P6xpdiMYj7GHj7eKUL89WKwlJ2yaIRsFHj7eKkb9jmDNTTzhxd+yyMPHt4z6HcF2uFe+ZbGHj18Y9TuCbXu79+7znZ96PIxPjPoy2OFVsI1dUvkvv3voc4+HLmXUl8EeXgWbbD+V//LQw8dbxajfHixat4NCkz1cbhWjPqQvDxZHjARYjSDR+iXIIFi0ToQEWJEg0X/mI8CaBIlW4SPAmgSJI+EjwJoEiXnCR4A1CRLzAlAICY5Q/5aeSoLESh8S3Ck/DC79HoLsr1beAMNmBxXy9h5FAAAAAElFTkSuQmCC"},"1d4a":function(a,e){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAMAAACBKikvAAABNVBMVEUAAADmLwPqNQPqNQPlLQPlLAPtPALXEgTlLgPdHgTjKwPnMQPpNQPXEgTeIATYFgTrOALbGwTrOALeHwTeIQTaGQTmLgPcGgTiKAPhJQTYFQTpMwPXEQXoMgPVDwXXEwTfIQTuPQLYFQXpNAPaFwTrOAPlLQTYEwXhJgPVDgXlLQPYFQTZFgTvQQLkKwPyRALaGATzRwLrOALZFwTuQAL0SQLqNwPZGATVEAXrOQPvPwLrOQPZFgXnMwPxQwLYFATiJwPfIwTpNQPhJwPjKQPzSALiJgPuPgLZFwTsOwPbGwXWEgTsPAPtPAPtPAPtPAPWFAXyRQLXFAX0SgLXEwTqNQPaFwToMgPVDwTmMAPlKwPeIQTiJgPdHATrOQPuPgLzRgLxQwLwQALtPQLgIwPeHwTsOwKdwhlNAAAAVHRSTlMANviNFfpQLS0cCvHs68eKKSMgDgX19e3q39fKyMOomYGAbF9eWk9OSEFAKfv78vLl5OPe2dK8ureysaiimpeTkXl5cWJhVz89JvnOzMnFwK55cUQe8RMCAAAB6klEQVQ4y42T53biMBBGZZsYh0AoofeaAOm997q9ab1aY7Cp7/8IGTkKsZEP8P1AM3fuwWg4Ri6R/6D5cng4n/domo/zeL5d09z1zSGWTMiv2Z5nu2t2u9uemeJV18rVLC+02bOy+WmGeNbrGQcHhmGcTfeejb5hyDL9fJ4qfu33+z8Q+g7Ht2lepTMadQSEBDhHNXcnIpdO9zqQc9qd02rvtCRHHDetSUf+vyyiNYqI773/SKqFKLrLMMYiISuSA4q5OxTy//uImLlcYX/QZUa0DfywVmHpP81STqooUWRLVKlIOTZUKGjGab2KXLNKZ3HhrakvaJoWb7p5TTpaqCOWJ9puCbwnbFHP9rAHHUBSmfSUpKbr2oMd3euQVNjphZOU3jthcTAY6KlFO1pM6QCLaCI3g1ardWsnty3IDeKyDPjJDqoAlpGLOBwOHRd/AeAmJtrttsfxGwHs8N4K4Bgr2Vv9GZCPE72qqqZp4QkmEkXrq/cBrXPiGtBjeN51TIXEgrCpYyjqnFjGqlrwXmxQDUq8cbFegKPMiUGMcQA7QtsgJ/4cz/fLv3fGTZ4Tv7BJuhpFKFpNszbLiQGCMSHZtfHlsoQQTALcGgnk5MWOGieU+SbXSEjey+02T8jkIhvXYeSScKHBqlc5FIqqkRy9bwAAAABJRU5ErkJggg=="},"1d61":function(a,e,i){a.exports=i.p+"img/bargain-bg-2.a1dcc382.png"},2553:function(a,e,i){var t=i("9ccd");"string"==typeof t&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals),(0,i("85cb").default)("ead94d1e",t,!0,{sourceMap:!1,shadowMode:!1})},"31e7":function(a,e,i){"use strict";i.d(e,"c",function(){return n}),i.d(e,"d",function(){return r}),i.d(e,"a",function(){return o}),i.d(e,"e",function(){return s}),i.d(e,"b",function(){return b});var t=i("007a");function n(a){let e=a.bargain_id;return t.a.post({url:"/api/v1/bargain/get_bargain_info",data:{bargain_id:e}})}function r(a){let e=a.bargain_id,i=a.page_size,n=a.page_num;return t.a.post({url:"/api/v1/bargain/get_help_bargain_list",data:{bargain_id:e,page_size:i,page_num:n}})}function o(a){let e=a.bargain_id,i=a.spu_id;return t.a.post({url:"/api/v1/bargain/chop",data:{spu_id:i,bargain_id:e}})}function s(a){let e=a.page_size,i=void 0===e?10:e,n=a.page_num,r=void 0===n?1:n;return t.a.post({url:"/api/v1/spu/get_mybargain_spus",data:{page_size:i,page_num:r}})}function b(a){let e=a.relation_id;return t.a.post({url:"/api/v1/bargain/chop_share",data:{relation_id:e}})}},"4f48":function(a,e,i){a.exports=i.p+"img/bargain-bg-1.9102cda9.png"},5454:function(a,e){a.exports=function(a){return"string"!=typeof a?a:(/^['"].*['"]$/.test(a)&&(a=a.slice(1,-1)),/["'() \t\n]/.test(a)?'"'+a.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':a)}},5616:function(a,e,i){"use strict";i.d(e,"c",function(){return n}),i.d(e,"a",function(){return r}),i.d(e,"b",function(){return o});var t=i("007a");function n(a){let e=a.spu_id;return t.a.get({url:"/api/v1/share/share_spu",data:{spu_id:e}})}function r(a){let e=a.bargain_id;return t.a.get({url:"/api/v1/share/share_bargain",data:{bargain_id:e}})}function o(a){let e=a.relation_id;return t.a.get({url:"/api/v1/share/get_share_info",data:{relation_id:e}})}},"5b3c":function(a,e,i){"use strict";i.r(e),i("aaa4"),i("612f");var t=i("5fbf"),n=(i("f91a"),i("0348")),r=i("996b"),o=i("5616"),s=i("31e7"),b={components:{dialogSharingFriends:a=>Promise.all([i.e("chunk-32d107a6"),i.e("chunk-6d0b26bb")]).then(function(){var e=[i("28fd")];a.apply(null,e)}.bind(this)).catch(i.oe),countDown:a=>i.e("chunk-c6ead40a").then(function(){var e=[i("cd26")];a.apply(null,e)}.bind(this)).catch(i.oe),dialogPotongSendiri:a=>i.e("chunk-21b57136").then(function(){var e=[i("fd89")];a.apply(null,e)}.bind(this)).catch(i.oe),dialogShareEarningEntry:a=>i.e("chunk-7daff0fe").then(function(){var e=[i("20c5")];a.apply(null,e)}.bind(this)).catch(i.oe)},data:()=>({dialogs:{sharingFriends:{show:!1},potongSendiri:{show:!1},shareEarningEntry:{show:!1}},chop_info:{},shareInfo:{},spu:{spu_pics:[]},bargain_info:{},bargain_user_info:{},expirationDat:{h:"24",p:"00",m:"00"},help_bargain_list:[],helpBargainPageDat:{page_size:10,page_num:1},spu_list:[],isShareEarningEntry:!1}),created(){this.init()},mounted(){this.$refs.bargainContainer.scrollTo&&this.$refs.bargainContainer.scroll(0,0),document.title="Getting Freebies"},methods:{init(){var a=this;return Object(n.a)(function*(){const e=a.$route.query,i=e.relationId,t=e.showShareEarningEntry,n=e.bargainId,r=e.spuId;i?(a.isShareEarningEntry=!0,a.dialogs.shareEarningEntry.show="no"!=t,yield a.initShareInfo(i)):(n||(yield a.goBargainChop({spu_id:r})),a.initBargainInfo(),a.initHelpBargainList()),a.initSpuInfo(),a.initSpuList()})()},initShareInfo(a){var e=this;return Object(n.a)(function*(){let i=yield Object(o.b)({relation_id:a});if(i&&i.data){e.shareInfo=i.data;const a=i.data,n=a.bargain_id,r=a.spu_id,o=a.type,s=a.invite_user_id;e.$router.replace({query:Object(t.a)({},e.$route.query,{bargainId:n,spuId:r,type:o,inviteUserId:s})})}})()},goBargainChop(a){var e=this;return Object(n.a)(function*(){let i=a.bargain_id,n=a.spu_id;if(!e.$store.state.userInfo.user_id)return e.$store.commit("setLoginJumpUrl",""),void e.$store.commit("setLoginSelectShow",!0);let r=yield Object(s.a)({bargain_id:i,spu_id:n});if(r&&r.data&&r.data.chop_info){const a=r.data.chop_info;e.chop_info=a,e.$router.replace({query:Object(t.a)({},e.$route.query,{bargainId:a.bargain_id})});let i=JSON.parse(JSON.stringify(e.$store.state.goodsList));return i.forEach(a=>{a.spu_id==n&&(a.isBargain=!0)}),e.$store.commit("setGoodsList",i),e.dialogs.potongSendiri.show=!0,Promise.resolve()}})()},goChopShare(){var a=this;return Object(n.a)(function*(){if(!a.$store.state.userInfo.user_id)return a.$store.commit("setLoginJumpUrl",""),void a.$store.commit("setLoginSelectShow",!0);let e=yield Object(s.b)({relation_id:a.$route.query.relationId});e&&e.data&&(a.chop_info=e.data.chop_info,a.dialogs.potongSendiri.show=!0),a.isShareEarningEntry=!1})()},initSpuInfo(){var a=this;return Object(n.a)(function*(){let e=yield Object(r.b)({spu_id:a.$route.query.spuId});if(e&&e.data&&e.data.spu){let i=e.data.spu;for(let e in i)a.spu[e]=i[e]}})()},initBargainInfo(){var a=this;return Object(n.a)(function*(){let e=yield Object(s.c)({bargain_id:a.$route.query.bargainId});e&&e.data&&(a.bargain_info=e.data.bargain_info||e.data,a.bargain_user_info=e.data.bargain_user_info)})()},initHelpBargainList(){var a=this;return Object(n.a)(function*(){let e=yield Object(s.d)(Object(t.a)({bargain_id:a.$route.query.bargainId},a.helpBargainPageDat));e&&e.data&&(a.help_bargain_list=e.data)})()},initSpuList(){var a=this;return Object(n.a)(function*(){let e=a.$store.state.goodsList.filter(a=>!a.isBargain);if(e.length>6)return void(a.spu_list=e);let i=yield Object(r.a)({page_size:16,page_num:1,is_all:0});i&&i.data&&(a.spu_list=i.data.spu_list,a.$store.commit("setGoodsList",a.spu_list))})()},openSharingFriendsDialog(){var a=this;return Object(n.a)(function*(){if(a.$gaSend({eventCategory:"砍价详情页_分享给好友",eventAction:"点击",eventLabel:a.spu.title.substr(0,10)}),!a.$store.state.userInfo.user_id){const e=window.location;return e.pathname,e.search,a.$store.commit("setLoginJumpUrl",""),void a.$store.commit("setLoginSelectShow",!0)}let e=yield Object(o.a)({bargain_id:a.$route.query.bargainId});e&&e.data&&(a.shareInfo=e.data),a.dialogs.sharingFriends.show=!0})()},jumpCurBargainPage(a){if(this.$gaSend({eventCategory:"砍价详情页_底部商品列表",eventAction:"点击",eventLabel:a.title.substr(0,10)}),!this.$store.state.userInfo.user_id)return this.$store.commit("setLoginJumpUrl",""),void this.$store.commit("setLoginSelectShow",!0);this.$router.replace({query:{spuId:a.spu_id}}),document.getElementsByClassName("content-container")[0].scroll(0,0),this.init()},jumpBuyPage(){if(this.$gaSend({eventCategory:"砍价详情页_去购买",eventAction:"点击",eventLabel:this.spu.title.substr(0,10)}),!this.$store.state.userInfo.user_id)return this.$store.commit("setLoginJumpUrl",""),void this.$store.commit("setLoginSelectShow",!0);1==this.bargain_info.can_buy&&this.$router.push({path:"/purchase",query:Object(t.a)({},this.$route.query)})},refreshTime(){let a=this.$util.expiration(this.spu.expire_ttl);if(!a)return;this.expirationDat=a;const e=setInterval(()=>{this.expirationDat=this.$util.expiration(this.spu.expire_ttl)},1e3);this.$once("hook:beforeDestroy",()=>{clearInterval(e)})}},beforeRouteUpdate(a,e,i){const t=a.query,n=t.loginGoShare;t.bargainType,"ok"==n&&(this.$store.commit("setLoginSelectShow",!1),this.openSharingFriendsDialog()),i()},beforeRouteEnter(a,e,i){i(a=>{"/purchase"==e.path&&a.$util.paymentCancellationPrompt()})},watch:{spu:{handler(){this.spu.hasOwnProperty("title")&&this.$gaSend({eventCategory:"砍价详情页",eventAction:"页面展示",eventLabel:this.spu.title.substr(0,10)})},immediate:!0,deep:!0}}},g=(i("abbb"),i("17cc")),d=Object(g.a)(b,function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{ref:"bargainContainer",staticClass:"bargain-container"},[t("div",{staticClass:"turn-home",on:{click:function(e){return a.$router.push("/")}}}),t("div",{staticClass:"bargain-header"},[t("div",{staticClass:"bargain-info-box"},[t("img",{staticClass:"bg",attrs:{src:i("1d61"),alt:""}}),t("div",{staticClass:"bargain-content"},[t("div",{staticClass:"bargain-info"},[t("div",{staticClass:"img-box"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.spu.spu_pics&&a.spu.spu_pics[0]||"",expression:"spu.spu_pics&&spu.spu_pics[0]||''"}]})]),t("div",{staticClass:"detail"},[t("p",{staticClass:"title"},[a._v(a._s(a.spu.title))]),t("div",{staticClass:"price-box"},[t("div",{staticClass:"price-box-item"},[t("p",{staticClass:"p-t-3"},[a._v("244d Sent")]),t("p",{staticClass:"p-t-1"},[a._v("\n                  Price\n                  "),t("span",[a._v("RP")]),t("span",[a._v(a._s(a.spu.original_price))])]),t("p",{staticClass:"p-t-2"},[a._v("current price")])]),t("div",{staticClass:"price-box-item"},[t("p",{staticClass:"p-n-1"},[t("span",[a._v("Rp")]),a._v(a._s(a.spu.price))])])])])]),t("div",{staticClass:"bargain-schedule"},[t("p",{staticClass:"title"},[t("span",{staticClass:"n-1"},[t("span",{staticClass:"dollar"},[a._v("RP")]),a._v(a._s(a.bargain_info.bargain_amount||0))]),a._v("cheaper now, leaving"),t("span",{staticClass:"n-2"},[t("span",{staticClass:"dollar"},[a._v("RP")]),a._v(a._s(a.bargain_info.bargain_after||a.spu.price))])]),t("div",{staticClass:"schedule"},[t("div",{staticClass:"active",style:{width:a.bargain_info.bargain_rate+"%"}}),t("div",{staticClass:"schedule-item"},[t("span",{staticClass:"description"},[a._v("cut "),t("span",{staticClass:"highlight"},[a._v(a._s(a.bargain_info.bargain_rate)+"%")])])]),a._m(0),a._m(1)])]),t("count-down",{staticClass:"spu-count-down",attrs:{dateDiff:a.spu.expire_ttl}}),t("div",{staticClass:"ctrl-box"},[a.isShareEarningEntry?t("div",{staticClass:"share-btn",on:{click:a.goChopShare}},[a._v("POTONG PISAU")]):t("div",{staticClass:"share-btn",on:{click:a.openSharingFriendsDialog}},[a._v("SHARE FRIEDNS FOR FREEBIES")]),a.bargain_info.can_buy&&1==a.bargain_info.can_buy?t("div",{staticClass:"buy-btn",on:{click:a.jumpBuyPage}},[a._v("Rp "+a._s(a.bargain_info.bargain_after)+" buy now")]):t("div",{staticClass:"buy-btn cur"},[a._v("\n            BUY NOW\n          ")])])],1)])]),t("div",{staticClass:"bargain-content"},[a.$route.query.bargainId&&a.help_bargain_list.length>0?t("div",{staticClass:"team-box"},[t("p",{staticClass:"page-title"},[a._v("Bargaining team")]),t("ul",{staticClass:"team-list"},a._l(a.help_bargain_list,function(e,i){return t("li",{key:i,staticClass:"team-list-item"},[t("div",{staticClass:"column"},[t("div",{class:"team-img huangguan"+(i+1)},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar||"",expression:"item.avatar||''"}]})]),t("div",{staticClass:"team-info"},[t("p",{staticClass:"team-name"},[a._v(a._s(e.username))]),t("p",{staticClass:"team-date"},[a._v(a._s(e.bargain_time))])])]),t("div",{staticClass:"column"},[t("p",{staticClass:"dollar"},[a._v("Rp"),t("span",[a._v(a._s(e.bargain_amount))])])])])}),0)]):a._e(),a.$route.query.bargainId?a._e():t("div",{staticClass:"goods-detail"},[t("p",{staticClass:"page-title"},[a._v("Product Petails")]),t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.spu&&a.spu.spu_pics[0],expression:"spu&&spu.spu_pics[0]"}]})]),a.spu_list.length>0?t("div",{staticClass:"recommend-products"},[t("p",{staticClass:"page-title"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i("1d4a"),expression:"require('./../assets/images/start.png')"}]}),t("span",[a._v("You might like")])]),a._l(a.spu_list,function(e){return t("div",{key:e.spu_id,staticClass:"recommend-item"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.spu_pics&&e.spu_pics[0]||"",expression:"item.spu_pics&&item.spu_pics[0]||''"}],staticClass:"products-photo"}),t("p",{staticClass:"products-title"},[a._v(a._s(e.title))]),t("div",{staticClass:"products-ctrl"},[t("span",{staticClass:"money"},[a._v(a._s(e.deliver_count)+" Sent")]),t("a",{staticClass:"btn",attrs:{href:"javascrip:;"},on:{click:function(i){return a.jumpCurBargainPage(e)}}},[a._v("Get a freebie")])])])})],2):a._e()]),a.dialogs.sharingFriends.show?t("dialog-sharing-friends",{attrs:{itemData:a.spu,dialogVisible:a.dialogs.sharingFriends,shareInfo:a.shareInfo},on:{"update:dialogVisible":function(e){return a.$set(a.dialogs,"sharingFriends",e)},"update:dialog-visible":function(e){return a.$set(a.dialogs,"sharingFriends",e)}}}):a._e(),a.dialogs.potongSendiri.show?t("dialog-potong-sendiri",{attrs:{chopInfo:a.chop_info,dialogVisible:a.dialogs.potongSendiri},on:{"update:dialogVisible":function(e){return a.$set(a.dialogs,"potongSendiri",e)},"update:dialog-visible":function(e){return a.$set(a.dialogs,"potongSendiri",e)}}}):a._e(),a.dialogs.shareEarningEntry.show?t("dialog-share-earning-entry",{attrs:{preAmount:a.shareInfo.pre_bargain_amount,dialogVisible:a.dialogs.shareEarningEntry},on:{"update:dialogVisible":function(e){return a.$set(a.dialogs,"shareEarningEntry",e)},"update:dialog-visible":function(e){return a.$set(a.dialogs,"shareEarningEntry",e)}}}):a._e()],1)},[function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"schedule-item ball ball-center"},[e("span",{staticClass:"description"},[this._v("Available for purchase")])])},function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"schedule-item ball ball-right"},[e("span",{staticClass:"description"},[this._v("Take it free")])])}],!1,null,"15206b3a",null);e.default=d.exports},"637d":function(a,e){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAqCAMAAAAZKoJqAAACZ1BMVEUAAAD61VX68oD97Fj93kf87WP38qT47oz982X65WT2og32lg3yZgD38qb5rynzcAD386b38qT/+F7zawL39q3+9WD6wyj0hRH762X1hAjzdAL2lxf0gQX6tCnzcgD/9lzzdAD2lRX38qP38qb98lT48J3yZAD++F30eAD++V7zZwH/+mD0hQD475fyagH38qb48Z7386n56nv//mP386XzdQH56n3/+V/zbgTzbAD47pHzbQH0fwP4+a7496v39qf3+7X5qib3sxr2jQ/yZgD0hQb5riH71iv0eAHybgD1jg/ycQD1ggL/+l/0dgL6wSj47o738qXxZgD82Dr2oSr464LzcwD38Z/+6UH0hgD56Hb5sw349aX55mn464T4vgD94Sj3/Lj48JL89XPzdgD38JjzhAX475b/+F34thj0gwX++2L3xQ73xA/99Fn0jAj72jHzeQD+9Er47Yv50yj46n/4rSL6vzj0hQD5yyP+9130gQD3/bb56XfxZgD71SH71h31pUX1jxL6zBD83TL82zD82i771yv71Sj94DT71y/85Dv38qb94Tj60iT+6D73wAv3vAX84jb6zh/5wx35yxr4xRT4vRH/+1r82zb3uAT//Wn/91798VT+8Uz+7Uf85jP2rgX/+VP941D96Df32jL7zyr50CH2zh/4rxP4yg33uQ34xAz2qAnvvQj3tAj38Z7/92f//F/+7Fn96z77yT310SX5viL4nRz3yxr5uBn4pxn4wBL1oAT2tALzcgD+7VL67U/800X/5Dz53zr6xynzxxjywQ32xAf1mQHtsgD820v4uTQkcqxjAAAAhHRSTlMABAYTEAz6tTcg/vz87OvcvaaGcj8qJSEbDwn9/fz28PDr4tjUzsfExL6wmo+OjYZtZF1dWVRQT0k4NjEpIhkTDP79/erj3NnX08++uaulnZyZlouGgIB8dWhXV0xMQj84NCsjGPn16urq2NHDurm2s7CupJ6Tk4+GfHZycGtjUE9OPysISKpdAAADiklEQVQ4y43S5VcUURgG8PdusSKigoBid4IIIiKo2N3d3d3dd2buzOxsBxts0N2ddv9R3tEPzq57PPt8nPM7d97n3hdiDEKxQlWMUqWNESKNKkaoVscIxw6LEQ5LiZxao1artehfqI8YRf94/tzZ25Lyxmoj4LGwD5q8uSUfK3jRFCi5mJSiLDr2mHJIlLKtpPNzT5WREMJK/sk52r/wsF4J9VfExi+cJGGGYTlCxNYkDfyJOnsJKJIyu+J79QeeFQSMKeaMom/HuD9DZT9TQvX8j9+NJgFb7b1ubMUswxpN3vtIvo3D+5Qjo5x3jT0y/FQTio9fzVgFhg26N5+lcMm9M6DImbmdjR8YzHd9C5kHQwM1bsyWCxPmpVN45zgok/eusUpi+coGS63Z6fwasotBfvg8AHQ8LhvCklTxhWcwtnucNoeN81gcYnnfrEJAy+L2QXiuV/dILMY2j8tN+iVC+PKukUtluFMbIWd8rpZllaWuptf1yW1qJ+eTAU7HxZ2GSFldxbMMJmZLU0Ndw0BN5ertAMt3zjwK2jQULjuNmKHdbR5zvbne0hR/Ix1WZFzIAnQwsSBMzq6QJbXE4XSZa+s2F8DKjHMZgF7627amK+V88bcUsKndanPa1+VC0YHm0Svh5AZra+JzpczxE45KXNnXJwT7hyeDKqt55jJIvcmxpe+3KCfVT5YPxbz924Cdi98OqkXN0xYD2kPXKlB2OV+5xHuKWSKPWVtbN3xOGlqs0x0AdESk0vR2ajIo8npyqVFgMHZ8DdErPzpCtwvQiUuVVipLxmcq5bi9LQGjwOKgfUoyjJluGLUC3lz19PJYlrtBmcL13gDhgnhNJpyaaZg+BtR3zRaXwHPtb9eES8hPbCkulxdo+SjDiEWAHvGOwX4q/WUTMiE8S6eWtUyclVo02qBbSNvYulwWJ73k0o5J+yEiBRu7171S7TLoRtM265samsw2iYi+7rW5EJm0WXthoUFuk3pt0FMvH8mV/hiaMw6i5KlBbqPZYak3u2wYE5OvO2FBNHhq2u82BxnCOVxuq1H0diTMORsFoizDCNrmBYMliXMQTvS+H5pyKAqkF0Rfmy4QywoCx7IBb8fQpIcQLWPooqHU25K81aK/tW1VwpQFUaGqSH7XB22+Yhpf2c8JCRuVv45Meu7WqYkTJ64aP2ntyAVp8N+g/P1bNo3cdOtJIfyTX0VkUSTYT3DoAAAAAElFTkSuQmCC"},"996b":function(a,e,i){"use strict";i.d(e,"d",function(){return n}),i.d(e,"b",function(){return r}),i.d(e,"a",function(){return o}),i.d(e,"e",function(){return s}),i.d(e,"c",function(){return b});var t=i("007a");function n(a){let e=a.page_size,i=a.page_num;return t.a.post({url:"/api/v1/spu/get_mybargain_spus",data:{page_size:e,page_num:i}})}function r(a){let e=a.spu_id;return t.a.post({url:"/api/v1/spu/get_info",data:{spu_id:e}})}function o(a){let e=a.page_size,i=a.page_num,n=a.is_all;return t.a.post({url:"/api/v1/spu/get_bargain_spus",data:{page_size:e,page_num:i,is_all:n}})}function s(a){let e=a.spu_id;return t.a.get({url:"/api/v1/spu/get_spu_specs",data:{spu_id:e}})}function b(a){let e=a.page_size,i=a.page_num;return t.a.post({url:"/api/v1/spu/get_my_bargain_order_spus",data:{page_size:e,page_num:i}})}},"9ccd":function(a,e,i){var t=i("5454");(a.exports=i("690e")(!1)).push([a.i,".bargain-container[data-v-15206b3a]{background:-webkit-linear-gradient(45deg,#fd5448,#e82b23);background:linear-gradient(45deg,#fd5448,#e82b23)}.bargain-container>.turn-home[data-v-15206b3a]{position:fixed;top:80%;right:.13333rem;width:1.2rem;height:1.2rem;background:url("+t(i("d6bd"))+") no-repeat;background-size:100%;z-index:9999}.bargain-container>.bargain-header[data-v-15206b3a]{position:relative;padding:.53333rem .13333rem .13333rem .13333rem;background:url("+t(i("4f48"))+") no-repeat;background-size:100%}.bargain-container>.bargain-header>.bargain-info-box[data-v-15206b3a]{position:relative;border-radius:.26667rem}.bargain-container>.bargain-header>.bargain-info-box>.bg[data-v-15206b3a]{width:100%;height:auto}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content[data-v-15206b3a]{position:absolute;top:.33333rem;left:.46667rem;text-align:center}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info[data-v-15206b3a]{width:8.8rem;background:#fff;border-radius:.13333rem;padding:.34667rem .34667rem 0 .34667rem;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;text-align:left}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.img-box[data-v-15206b3a]{width:2.93333rem;height:2.93333rem;margin-right:.32rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.img-box>img[data-v-15206b3a]{width:100%;height:2.82667rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail[data-v-15206b3a]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.title[data-v-15206b3a]{font-size:.34667rem;color:#323232;line-height:.49333rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box[data-v-15206b3a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item[data-v-15206b3a]{width:1.33333rem;-webkit-box-flex:1;-webkit-flex:1;flex:1}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item[data-v-15206b3a]:nth-of-type(2){width:1.33333rem;margin-left:.13333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item>.p-t-1[data-v-15206b3a]{font-size:.24rem;color:#888}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item>.p-t-1>span[data-v-15206b3a]:first-child{font-size:.21333rem;color:#f77e18}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item>.p-t-1>span[data-v-15206b3a]:last-child{font-size:.32rem;color:#f77e18;text-decoration:line-through}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item>.p-t-2[data-v-15206b3a]{display:inline-block;padding:0 .22667rem;background-color:#d30c05;line-height:.32rem;color:#fff;font-size:.24rem;border-radius:.08rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item>.p-t-3[data-v-15206b3a]{font-size:.32rem;color:#888;margin:.36rem 0}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item>.p-n-1[data-v-15206b3a]{color:#d30c05;font-size:.54667rem;position:relative;top:.13333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item>.p-n-1>span[data-v-15206b3a]{font-size:.29333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-info>.detail>.price-box>.price-box-item>.p-n-2[data-v-15206b3a]{color:#888;font-size:.32rem;margin-bottom:.08rem;position:relative;top:.13333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule[data-v-15206b3a]{margin:.46667rem 0 .86667rem 0}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule>.title[data-v-15206b3a]{font-size:.33333rem;color:#323232;text-align:center;margin-bottom:.33333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule>.title .dollar[data-v-15206b3a]{font-size:.28rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule>.title>.n-1[data-v-15206b3a]{font-size:.42667rem;color:#f75e10}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule>.title>.n-2[data-v-15206b3a]{font-size:.42667rem;color:#d30c05}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule[data-v-15206b3a]{position:relative;margin:0 auto;width:7.73333rem;height:.26667rem;border-radius:.13333rem;background-color:#fececa;display:-webkit-box;display:-webkit-flex;display:flex}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.active[data-v-15206b3a]{position:absolute;top:0;left:0;width:30%;height:100%;background:url("+t(i("05d1"))+') no-repeat;background-size:100%;background-color:#d30c05;border-radius:.13333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.schedule-item[data-v-15206b3a]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-top:.53333rem;text-align:center;font-size:.24rem;color:#323232}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.schedule-item .highlight[data-v-15206b3a]{color:#d30c05;font-size:.26667rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.schedule-item[data-v-15206b3a]:nth-of-type(2){text-align:left}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.schedule-item[data-v-15206b3a]:last-of-type{text-align:right}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.ball[data-v-15206b3a]:after{content:"";position:absolute;top:-.02667rem;width:.32rem;height:.32rem;border-radius:.16rem;background:-webkit-linear-gradient(135deg,#ee5d2f,#ff9b04);background:linear-gradient(-45deg,#ee5d2f,#ff9b04)}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.ball-center[data-v-15206b3a]:after{left:calc(50% - .16rem)}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.bargain-schedule .schedule>.ball-right[data-v-15206b3a]:after{right:0}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.spu-count-down[data-v-15206b3a]{display:inline-block}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.ctrl-box[data-v-15206b3a]{margin-top:.8rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.ctrl-box>.share-btn[data-v-15206b3a]{color:#a53a06;font-size:.48rem;height:1.37333rem;line-height:1.37333rem;background:-webkit-linear-gradient(top,#f8e5a3,#f4cc6d);background:linear-gradient(180deg,#f8e5a3,#f4cc6d);box-shadow:0 .12rem .12rem 0 rgba(174,36,5,.66);border-radius:.69333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.ctrl-box>.buy-btn[data-v-15206b3a]{margin-top:.32rem;color:#fce0dd;font-size:.48rem;height:1.37333rem;line-height:1.37333rem;background:-webkit-linear-gradient(top,#fba284,#f96645);background:linear-gradient(180deg,#fba284,#f96645);box-shadow:0 .12rem .12rem 0 rgba(174,36,5,.66);border-radius:.69333rem}.bargain-container>.bargain-header>.bargain-info-box>.bargain-content>.ctrl-box>.buy-btn.cur[data-v-15206b3a]{color:#999;background:-webkit-linear-gradient(top,#efefef,#cdcece);background:linear-gradient(180deg,#efefef,#cdcece)}.bargain-container>.bargain-content>.team-box[data-v-15206b3a]{background:-webkit-linear-gradient(top,#e53931,#e94840);background:linear-gradient(180deg,#e53931,#e94840);box-shadow:0 .02667rem .05333rem 0 rgba(152,19,0,.46);border-radius:.13333rem;margin:0 .4rem}.bargain-container>.bargain-content>.team-box>.page-title[data-v-15206b3a]{position:relative;width:100%;display:block;height:1.33333rem;line-height:1.33333rem;font-size:.42667rem;text-align:center;color:#fff}.bargain-container>.bargain-content>.team-box>.team-list[data-v-15206b3a]{margin-bottom:.50667rem;padding-bottom:.4rem;max-height:8rem;overflow-y:scroll}.bargain-container>.bargain-content>.team-box>.team-list>li[data-v-15206b3a]{height:1.33333rem;margin:0 .66667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-top:1px dotted #ffb893;color:#fff}.bargain-container>.bargain-content>.team-box>.team-list>li>.column[data-v-15206b3a]{-webkit-box-flex:2;-webkit-flex:2;flex:2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.bargain-container>.bargain-content>.team-box>.team-list>li>.column+.column[data-v-15206b3a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item[data-v-15206b3a]{background:url('+t(i("637d"))+") no-repeat 100%;background-size:.54667rem .54667rem}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item .team-img>img[data-v-15206b3a]{width:.98667rem;height:.98667rem;border-radius:.49333rem;overflow:hidden;margin:0 .16rem 0 .08rem}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item .team-name[data-v-15206b3a]{font-size:.33333rem;margin-bottom:.06667rem}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item .team-date[data-v-15206b3a]{font-size:.25333rem}.bargain-container>.bargain-content>.team-box>.team-list>.team-list-item .dollar[data-v-15206b3a]{font-size:.33333rem;margin-right:2rem}.bargain-container>.bargain-content>.recommend-products[data-v-15206b3a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;background-color:#fff;padding:0 .46667rem}.bargain-container>.bargain-content>.recommend-products>.page-title[data-v-15206b3a]{position:relative;width:100%;display:block;height:1.33333rem;line-height:1.33333rem;font-size:.45333rem;text-align:center;color:#e65137;background:-webkit-linear-gradient(top,#f44a02 .26855%,#d40e05);background:linear-gradient(180deg,#f44a02 .26855%,#d40e05);-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.bargain-container>.bargain-content>.recommend-products>.page-title>img[data-v-15206b3a]{width:.53333rem;height:.53333rem;margin-right:.32rem}.bargain-container>.bargain-content>.recommend-products>.recommend-item[data-v-15206b3a]{background:#fff;box-sizing:border-box;width:calc(50% - .13333rem);height:6.66667rem;border-radius:.13333rem .13333rem 0 0;overflow:hidden;margin-bottom:.37333rem}.bargain-container>.bargain-content>.recommend-products>.recommend-item>.products-photo[data-v-15206b3a]{width:100%;height:4.45333rem}.bargain-container>.bargain-content>.recommend-products>.recommend-item>.products-title[data-v-15206b3a]{margin:.2rem .13333rem .36rem .13333rem;color:#323232;font-size:.37333rem;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bargain-container>.bargain-content>.recommend-products>.recommend-item>.products-ctrl[data-v-15206b3a]{line-height:.66667rem;color:#888;font-size:.32rem;padding:0 .18667rem;margin-bottom:.6rem}.bargain-container>.bargain-content>.recommend-products>.recommend-item>.products-ctrl>.btn[data-v-15206b3a]{display:block;float:right;font-size:.32rem;color:#fff;text-align:center;width:2.13333rem;height:.66667rem;background:-webkit-linear-gradient(left,#d30c05,#f64e01);background:linear-gradient(90deg,#d30c05,#f64e01);border-radius:.33333rem;text-decoration:none}.bargain-container>.bargain-content>.recommend-products>.recommend-item[data-v-15206b3a]:nth-of-type(2n){margin-left:.26667rem}.bargain-container>.bargain-content>.goods-detail[data-v-15206b3a]{background:-webkit-linear-gradient(top,#e53931,#e94840);background:linear-gradient(180deg,#e53931,#e94840);box-shadow:0 .02667rem .05333rem 0 rgba(152,19,0,.46);border-radius:.13333rem;margin:0 .4rem .4rem .4rem}.bargain-container>.bargain-content>.goods-detail>.page-title[data-v-15206b3a]{position:relative;width:100%;display:block;height:1.33333rem;line-height:1.33333rem;font-size:.42667rem;text-align:center;color:#fff}.bargain-container>.bargain-content>.goods-detail>img[data-v-15206b3a]{display:block;width:100%;height:auto}.down-box[data-v-15206b3a]{width:100vw;height:1.30667rem;position:fixed;bottom:0;left:0;z-index:10}.down-box[data-v-15206b3a],.down-box .home-btn[data-v-15206b3a]{display:-webkit-box;display:-webkit-flex;display:flex}.down-box .home-btn[data-v-15206b3a]{width:1.94667rem;height:100%;background:#fff;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;font-size:.24rem;font-weight:400;color:#c2c2c2}.down-box .home-btn img[data-v-15206b3a]{width:.57333rem;height:auto}.down-box .buy-now[data-v-15206b3a]{width:3.36rem;background:#f58b01;font-size:.32rem;font-weight:500}.down-box .buy-now[data-v-15206b3a],.down-box .share-friends[data-v-15206b3a]{height:1.30667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#fff}.down-box .share-friends[data-v-15206b3a]{width:4.69333rem;background:-webkit-linear-gradient(left,#d30c05,#f64e01);background:linear-gradient(90deg,#d30c05,#f64e01);font-size:.42667rem;font-weight:400}",""])},abbb:function(a,e,i){"use strict";var t=i("2553");i.n(t).a},d6bd:function(a,e){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAA/1BMVEX///8AAAD////////fRTz86Ob////////////////////////////tgXT////////aGwv////////////////qfnX////YGAvqOgvlMgz////////////////////////WFw3////YGg/aHw3vTRf////////yaTr62NH87+3hLA3uQwz3nX74rJXwnZT////eLBfkTj3vbEnkX1fobWD1jWv0uLH6wbDaMiriPynwWyzePjTjRzPxkXztk4v6z8P////////lQCLqTSfVDgXgIwTXEgXiJwTaGATcGwTrNwPtOwPlLAPoMQPeIATjKgTdHgTYFQXmLwPpNAPuPgNMm0DoAAAARHRSTlOzAKql6rmZQhAKBItf1mUi/a1rHRXWh/38+52DW1ItKPyi+/v3dTjqvrf7+9TNzXD46eXg3trGxvDw7+3t1NDBk1Xz8HZgcnYAAANtSURBVFjDzdmHVhpBGIbh313dxgpSo9SgKE3FbixR01BixJb7v5aMy5ghON8MsHuI7wU8x/M7ulNoTp+XsP31mGUalDStq9i6bye8OX1aulLMJelNyVyxEo4up0yCmanytLRbskiTVXKnoJ24QWNkxJ0JadcXsA733Ulou0oTVLXHpjMFmrBCZjzaNmjiDHsM2kvRVKU8He3EaMpijppO52nq8mkVnTApRGYC02mNrMtIIzqTp5DlM3LasSh0liOjvRhFUMyT0HGKpPhbeoMiamOUzphR0WZmhC5QZBX+pW3StrBZr7Vr9cMG6bKHabdKujbbv1m3t7fLh6Sp6g7RPmlq1jnM+nm6QOp8QTsGqbusCZjVPiZlhsNp/ZLeEnDQ8/Nn3eLmtGuQskMGD+Lw893dHqkyXE6X1CujPvoj3730TblSSpy2SNFxbQQO5Kenp5UtwlkDuqxccwD+xVokXDmgU4Tb40OWwPf393tNQqUC2iRU41QyZA6zrq+/XhLIfKEreM214Sxe4KBtAlUYXYRj1sI/WGiFFxmdQ0tDyBBm9Y9IWm6OvCSga3jIQu73+zskLelRAg1aNQsBPzw8gHEnyAZ0XQ8P5N6uHLDJR/PQDZnDvR6YiE/rgF5WDVnArDWSxeAYovVD7gXdADpGFqL1Qw7gG0RbZCJaNWQBY9okA9EjMEsGY5rBkGawkCH8+LiGiCSiNUPmMGsVCHDWK8ohC7jbBbRBeUTrhxzAkDbpCtJM1sOYtiiHaP2Qu4M+oj+ZDqK1Q+Z9B3SHvqhoDp8virJBZ92/MqAZvIFoMQvZf835VxjRDE4DuiWGLPtEHXEY02n4AWuJIcu2MlkOQzrpwc9uS/z2li4WRrsQMqBzeLPQGl4WS6994AUwT76ui3iLcxLAaMEN94lkVfDG7CCQMSw6ABszuJ1sIJjLogbYTuJN8AGHWRhm7cNNMN66n/QQrJ+0pT5wNM/hkEVnTZJV0h2TsjsBjOXVLDomaQ93ze393XnY/vYCOtyBI2n4DAccpMPng+N/+EwXXFqEz57NVQsrY0Q2jswMrrVmcBkX8RVi9BefeenFp/4iWJ+ZRpfMiZC2kZj91Xj4C/1ZP0OIvM50cseb+ZNP+Ieq//+8NvGj4Ht5yhz/Afa9PRtH+ditf6Inw7TGfqL/AwjnuP7ZEnAWAAAAAElFTkSuQmCC"}}]);