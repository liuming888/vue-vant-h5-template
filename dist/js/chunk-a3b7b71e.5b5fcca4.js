(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a3b7b71e"],{"1d4a":function(a,i){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAMAAACBKikvAAABs1BMVEUAAADpNQPlLAPXEgTlLgPdHgTjKwPpNAPnMQPjKQPrOALbGwTrOALeHwTeIQTaGQTmLgPcGgTXEwTiKAPpMwPXEQXoMgPXEwTqNgPYFQXpNAPrOAPrOQPlLQThJgPlLQPYFQTbGgTUDwXZFgTvQQLkKwPyRALqNwPoMwPzRwLrOALhJQTXEwX0SQLeIATeIQTqNwPZGATVEAXrOQPvPwLrOQPUDgXZFgXnMwPxQwLYFAToNQPXFQXZFwThJQTrOQPfIwTpNQPhJwPjKQPzSALXEgXiJgPYFAXVDwXuPgLZFwTpNAPsOwPtPALbGwXqNwPqNwPVEQXcHQThJwTXEwXXFAXaGgTuQALaGgTuQAPWEgTsPAPtPAPtPAPtPAPWFAXWEwXfIwTnMQPfIwTaGgXyRgLyRQLXFAXeIQTuPwPWEQXxRALUDgX0SgLsOwPxRQLpNQPYFQToMwPXEwTVEATWEgTqNwPaGQTrOQPkKgPiJwPfIgTZFwTxQwLtPQLmLwPgJAPuPgLeHwTdHQTcGwTZFgTnMQPlLQPyRgLmMQPvQALsOwLeIQTzSALwQQLuQALhJQSqOO2PAAAAcHRSTlMAAvotLRwK9/E2KSMgDgX19e3q6srIw5mLbF9aUE9IQCkV/Pv78vLt6uTj3dbSycW8ureysainopqXk4+NhoGBeXlxYmFfV01APz03JhT5+ffu5+Pi4dvb19bOzMnFwK6pk5GPgH95cVxTUExFRDgYROQk8gAAAipJREFUOMuNkwVz4kAYhhcpXqS4FOru7u69nru7S3MkhyQ4BIf+5NuFdJqwGeCZyLfvPhP5dhaI8OMXaAvJ5KSkLfGgXD5ox1OM5sqjijbETznI59ben6FILhIZumgprkZqrLbyNAOFSqVQqAzcaiEuFAqJZ0+q1epCc+80EU0kPN/Q9bSp+CIajb4G4BW8vWzmuYLFYvAcgN/wXnSLOzrP9vxYELKIRouoGpvf9uj4a6txO2aG/3HcrU3p7qD6Ep7DMw63Bq39rkV5yccBaqwLQqVtF2hG/t6gtKx01sWLFYuSNzEC26pW5dk8y6ps6y65HvDQy13vbSqWzedZlRwFPmMsFst3A1G6YxDjeX3glWazWaNPzPOhKakXcBxJQ6HQoBr31INwQsp72X4YBmZ5oyc3h8Lh0D4/2gtDHmiFntaM0j1huBWPx6/GO/hRx/gVDLdAA+/iNE3v8JMdGvIB36TTJZo+4idfS6XStARgTCWTScGPn8FgCuCYUqlUr+AbYXAf9zrT6bSBKxX1j7kNI3yDywKBwFNU9G6aTB9rj34Mox5MPGYYZha+b83ABAKMYQN2ahaKXkx0Egxjly33ZzJMhoBH/3KPPZMhnJi4QRBEFyEADTcx8Y3/mkfOLw/9FDd4i4nPKYSfmjjUA6A/nIAlwoqJ90iKIknrsYRbqO9WkiQpsgtrIwmZO+NHJ3MoUzS2kexbkmG9XeojGxv5c00LRNDaT7jqP6Lou9LnIx4CAAAAAElFTkSuQmCC"},"1d61":function(a,i,t){a.exports=t.p+"img/bargain-bg-2.55ed7a66.png"},"2ec1":function(a,i,t){"use strict";var e=t("db49");t.n(e).a},"31e7":function(a,i,t){"use strict";t.d(i,"b",function(){return s}),t.d(i,"c",function(){return n}),t.d(i,"a",function(){return r}),t.d(i,"d",function(){return o});var e=t("007a");function s(a){let i=a.bargain_id;return e.a.post({url:"/api/v1/bargain/get_bargain_info",data:{bargain_id:i}})}function n(a){let i=a.bargain_id,t=a.page_size,s=a.page_num;return e.a.post({url:"/api/v1/bargain/get_help_bargain_list",data:{bargain_id:i,page_size:t,page_num:s}})}function r(a){let i=a.bargain_id,t=a.spu_id;return e.a.post({url:"/api/v1/bargain/chop",data:{spu_id:t,bargain_id:i}})}function o(a){let i=a.page_size,t=void 0===i?10:i,s=a.page_num,n=void 0===s?1:s;return e.a.post({url:"/api/v1/spu/get_mybargain_spus",data:{page_size:t,page_num:n}})}},5616:function(a,i,t){"use strict";t.d(i,"c",function(){return s}),t.d(i,"a",function(){return n}),t.d(i,"b",function(){return r});var e=t("007a");function s(a){let i=a.spu_id;return e.a.get({url:"/api/v1/share/share_spu",data:{spu_id:i}})}function n(a){let i=a.bargain_id;return e.a.get({url:"/api/v1/share/share_bargain",data:{bargain_id:i}})}function r(a){let i=a.relation_id;return e.a.get({url:"/api/v1/share/get_share_info",data:{relation_id:i}})}},"595f":function(a,i,t){a.exports=t.p+"img/good-large.47423e8c.png"},"5b3c":function(a,i,t){"use strict";t.r(i),t("aaa4"),t("612f");var e=t("5fbf"),s=(t("f91a"),t("0348")),n=t("996b"),r=t("5616"),o=t("31e7"),u={components:{dialogSharingFriends:a=>Promise.all([t.e("chunk-23201e18"),t.e("chunk-26e10f10")]).then(function(){var i=[t("28fd")];a.apply(null,i)}.bind(this)).catch(t.oe),countDown:a=>t.e("chunk-36dc85fc").then(function(){var i=[t("cd26")];a.apply(null,i)}.bind(this)).catch(t.oe),dialogPotongSendiri:a=>t.e("chunk-e6f68d18").then(function(){var i=[t("fd89")];a.apply(null,i)}.bind(this)).catch(t.oe),dialogShareEarningEntry:a=>t.e("chunk-6614f1e7").then(function(){var i=[t("20c5")];a.apply(null,i)}.bind(this)).catch(t.oe)},data:()=>({dialogs:{sharingFriends:{show:!1},potongSendiri:{show:!1},shareEarningEntry:{show:!1}},chop_info:{},shareInfo:{},spu:{spu_pics:[]},bargain_info:{},bargain_user_info:{},expirationDat:{h:"24",p:"00",m:"00"},help_bargain_list:[],helpBargainPageDat:{page_size:10,page_num:1},spu_list:[],isShareEarningEntry:!1}),created(){this.init()},mounted(){this.$refs.bargainContainer.scrollTo&&this.$refs.bargainContainer.scroll(0,0),document.title="Getting Freebies"},methods:{init(){var a=this;return Object(s.a)(function*(){const i=a.$route.query,t=i.relationId,e=i.showShareEarningEntry,s=i.bargainId,n=i.spuId;t?(a.isShareEarningEntry=!0,a.dialogs.shareEarningEntry.show="no"!=e,yield a.initShareInfo(t)):(s||(yield a.goBargainChop({spu_id:n})),a.initBargainInfo(),a.initHelpBargainList()),a.initSpuInfo(),a.initSpuList()})()},initShareInfo(a){var i=this;return Object(s.a)(function*(){let t=yield Object(r.b)({relation_id:a});if(t&&t.data){const a=t.data,s=a.bargain_id,n=a.spu_id,r=a.type,o=a.invite_user_id;i.$router.replace({query:Object(e.a)({},i.$route.query,{bargainId:s,spuId:n,type:r,inviteUserId:o})})}})()},goBargainChop(a){var i=this;return Object(s.a)(function*(){let t=a.bargain_id,s=a.spu_id;if(!i.$store.state.userInfo.user_id)return i.$store.commit("setLoginJumpUrl",""),void i.$store.commit("setLoginSelectShow",!0);let n=yield Object(o.a)({bargain_id:t,spu_id:s});if(n&&n.data&&n.data.chop_info){const a=n.data.chop_info;i.chop_info=a,i.$router.replace({query:Object(e.a)({},i.$route.query,{bargainId:a.bargain_id})});let t=JSON.parse(JSON.stringify(i.$store.state.goodsList));return t.forEach(a=>{a.spu_id==s&&(a.isBargain=!0)}),i.$store.commit("setGoodsList",t),i.$route.query.relationId?i.isShareEarningEntry=!1:i.dialogs.potongSendiri.show=!0,Promise.resolve()}})()},initSpuInfo(){var a=this;return Object(s.a)(function*(){let i=yield Object(n.b)({spu_id:a.$route.query.spuId});if(i&&i.data&&i.data.spu){let t=i.data.spu;for(let i in t)a.spu[i]=t[i]}})()},initBargainInfo(){var a=this;return Object(s.a)(function*(){let i=yield Object(o.b)({bargain_id:a.$route.query.bargainId});i&&i.data&&(a.bargain_info=i.data.bargain_info||i.data,a.bargain_user_info=i.data.bargain_user_info)})()},initHelpBargainList(){var a=this;return Object(s.a)(function*(){let i=yield Object(o.c)(Object(e.a)({bargain_id:a.$route.query.bargainId},a.helpBargainPageDat));i&&i.data&&(a.help_bargain_list=i.data)})()},initSpuList(){var a=this;return Object(s.a)(function*(){let i=a.$store.state.goodsList.filter(a=>!a.isBargain);if(i.length>6)return void(a.spu_list=i);let t=yield Object(n.a)({page_size:16,page_num:1,is_all:0});t&&t.data&&(a.spu_list=t.data.spu_list,a.$store.commit("setGoodsList",a.spu_list))})()},openSharingFriendsDialog(){var a=this;return Object(s.a)(function*(){if(!a.$store.state.userInfo.user_id){const i=window.location;return i.pathname,i.search,a.$store.commit("setLoginJumpUrl",""),void a.$store.commit("setLoginSelectShow",!0)}let i=yield Object(r.a)({bargain_id:a.$route.query.bargainId});i&&i.data&&(a.shareInfo=i.data),a.dialogs.sharingFriends.show=!0})()},jumpCurBargainPage(a){if(!this.$store.state.userInfo.user_id)return this.$store.commit("setLoginJumpUrl",""),void this.$store.commit("setLoginSelectShow",!0);this.$router.replace({query:{spuId:a}}),document.getElementsByClassName("content-container")[0].scroll(0,0),this.init()},jumpBuyPage(){if(!this.$store.state.userInfo.user_id)return this.$store.commit("setLoginJumpUrl",""),void this.$store.commit("setLoginSelectShow",!0);1==this.bargain_info.can_buy&&this.$router.push({path:"/purchase",query:Object(e.a)({},this.$route.query)})},refreshTime(){let a=this.$util.expiration(this.spu.expire_ttl);if(!a)return;this.expirationDat=a;const i=setInterval(()=>{this.expirationDat=this.$util.expiration(this.spu.expire_ttl)},1e3);this.$once("hook:beforeDestroy",()=>{clearInterval(i)})}},beforeRouteUpdate(a,i,t){const e=a.query,s=e.loginGoShare;e.bargainType,"ok"==s&&(this.$store.commit("setLoginSelectShow",!1),this.openSharingFriendsDialog()),t()},beforeRouteEnter(a,i,t){t(a=>{"/purchase"==i.path&&a.$util.paymentCancellationPrompt()})}},l=(t("2ec1"),t("17cc")),c=Object(l.a)(u,function(){var a=this,i=a.$createElement,e=a._self._c||i;return e("div",{ref:"bargainContainer",staticClass:"bargain-container"},[e("div",{staticClass:"turn-home",on:{click:function(i){return a.$router.push("/")}}}),e("div",{staticClass:"bargain-header"},[e("div",{staticClass:"bargain-info-box"},[e("img",{staticClass:"bg",attrs:{src:t("1d61"),alt:""}}),e("div",{staticClass:"bargain-content"},[e("div",{staticClass:"bargain-info"},[e("div",{staticClass:"img-box"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.spu.spu_pics&&a.spu.spu_pics[0]||t("595f"),expression:"spu.spu_pics&&spu.spu_pics[0]||require('./../assets/images/good-large.png')"}]})]),e("div",{staticClass:"detail"},[e("p",{staticClass:"title"},[a._v(a._s(a.spu.title))]),e("div",{staticClass:"price-box"},[e("div",{staticClass:"price-box-item"},[e("p",{staticClass:"p-t-3"},[a._v("244d Sent")]),e("p",{staticClass:"p-t-1"},[a._v("\n                  Price\n                  "),e("span",[a._v("RP")]),e("span",[a._v(a._s(a.spu.original_price))])]),e("p",{staticClass:"p-t-2"},[a._v("current price")])]),e("div",{staticClass:"price-box-item"},[e("p",{staticClass:"p-n-1"},[e("span",[a._v("Rp")]),a._v(a._s(a.spu.price))])])])])]),e("div",{staticClass:"bargain-schedule"},[e("p",{staticClass:"title"},[e("span",{staticClass:"n-1"},[e("span",{staticClass:"dollar"},[a._v("RP")]),a._v(a._s(a.bargain_info.bargain_amount||0))]),a._v("cheaper now, leaving"),e("span",{staticClass:"n-2"},[e("span",{staticClass:"dollar"},[a._v("RP")]),a._v(a._s(a.bargain_info.bargain_after||a.spu.price))])]),e("div",{staticClass:"schedule"},[e("div",{staticClass:"active",style:{width:a.bargain_info.bargain_rate+"%"}}),e("div",{staticClass:"schedule-item"},[e("span",{staticClass:"description"},[a._v("cut "),e("span",{staticClass:"highlight"},[a._v(a._s(a.bargain_info.bargain_rate)+"%")])])]),a._m(0),a._m(1)])]),e("count-down",{staticClass:"spu-count-down",attrs:{dateDiff:a.spu.expire_ttl}}),e("div",{staticClass:"ctrl-box"},[a.isShareEarningEntry?e("div",{staticClass:"share-btn",on:{click:function(i){return a.goBargainChop({bargain_id:a.$route.query.bargainId,spu_id:a.$route.query.spuId})}}},[a._v("POTONG PISAU")]):e("div",{staticClass:"share-btn",on:{click:a.openSharingFriendsDialog}},[a._v("SHARE FRIEDNS FOR FREEBIES")]),a.bargain_info.can_buy&&1==a.bargain_info.can_buy?e("div",{staticClass:"buy-btn",on:{click:a.jumpBuyPage}},[a._v("Rp "+a._s(a.bargain_info.bargain_after)+" buy now")]):e("div",{staticClass:"buy-btn cur"},[a._v("\n            BUY NOW\n          ")])])],1)])]),e("div",{staticClass:"bargain-content"},[a.$route.query.bargainId&&a.help_bargain_list.length>0?e("div",{staticClass:"team-box"},[e("p",{staticClass:"page-title"},[a._v("Bargaining team")]),e("ul",{staticClass:"team-list"},a._l(a.help_bargain_list,function(i,s){return e("li",{key:s,staticClass:"team-list-item"},[e("div",{staticClass:"column"},[e("div",{class:"team-img huangguan"+(s+1)},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.avatar||t("595f"),expression:"item.avatar||require('./../assets/images/good-large.png')"}]})]),e("div",{staticClass:"team-info"},[e("p",{staticClass:"team-name"},[a._v(a._s(i.username))]),e("p",{staticClass:"team-date"},[a._v(a._s(i.bargain_time))])])]),e("div",{staticClass:"column"},[e("p",{staticClass:"dollar"},[a._v("Rp"),e("span",[a._v(a._s(i.bargain_amount))])])])])}),0)]):a._e(),a.$route.query.bargainId?a._e():e("div",{staticClass:"goods-detail"},[e("p",{staticClass:"page-title"},[a._v("Product Petails")]),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.spu&&a.spu.spu_pics[0],expression:"spu&&spu.spu_pics[0]"}]})]),a.spu_list.length>0?e("div",{staticClass:"recommend-products"},[e("p",{staticClass:"page-title"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("1d4a"),expression:"require('./../assets/images/start.png')"}]}),e("span",[a._v("You might like")])]),a._l(a.spu_list,function(i){return e("div",{key:i.spu_id,staticClass:"recommend-item"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.spu_pics&&i.spu_pics[0]||t("595f"),expression:"item.spu_pics&&item.spu_pics[0]||require('./../assets/images/good-large.png')"}],staticClass:"products-photo"}),e("p",{staticClass:"products-title"},[a._v(a._s(i.title))]),e("div",{staticClass:"products-ctrl"},[e("span",{staticClass:"money"},[a._v(a._s(i.deliver_count)+" Sent")]),e("a",{staticClass:"btn",attrs:{href:"javascrip:;"},on:{click:function(t){return a.jumpCurBargainPage(i.spu_id)}}},[a._v("Get a freebie")])])])})],2):a._e()]),a.dialogs.sharingFriends.show?e("dialog-sharing-friends",{attrs:{dialogVisible:a.dialogs.sharingFriends,shareInfo:a.shareInfo},on:{"update:dialogVisible":function(i){return a.$set(a.dialogs,"sharingFriends",i)},"update:dialog-visible":function(i){return a.$set(a.dialogs,"sharingFriends",i)}}}):a._e(),a.dialogs.potongSendiri.show?e("dialog-potong-sendiri",{attrs:{chopInfo:a.chop_info,dialogVisible:a.dialogs.potongSendiri},on:{"update:dialogVisible":function(i){return a.$set(a.dialogs,"potongSendiri",i)},"update:dialog-visible":function(i){return a.$set(a.dialogs,"potongSendiri",i)}}}):a._e()],1)},[function(){var a=this.$createElement,i=this._self._c||a;return i("div",{staticClass:"schedule-item ball ball-center"},[i("span",{staticClass:"description"},[this._v("Available for purchase")])])},function(){var a=this.$createElement,i=this._self._c||a;return i("div",{staticClass:"schedule-item ball ball-right"},[i("span",{staticClass:"description"},[this._v("Take it free")])])}],!1,null,"3cb62a7b",null);i.default=c.exports},"996b":function(a,i,t){"use strict";t.d(i,"d",function(){return s}),t.d(i,"b",function(){return n}),t.d(i,"a",function(){return r}),t.d(i,"e",function(){return o}),t.d(i,"c",function(){return u});var e=t("007a");function s(a){let i=a.page_size,t=a.page_num;return e.a.post({url:"/api/v1/spu/get_mybargain_spus",data:{page_size:i,page_num:t}})}function n(a){let i=a.spu_id;return e.a.post({url:"/api/v1/spu/get_info",data:{spu_id:i}})}function r(a){let i=a.page_size,t=a.page_num,s=a.is_all;return e.a.post({url:"/api/v1/spu/get_bargain_spus",data:{page_size:i,page_num:t,is_all:s}})}function o(a){let i=a.spu_id;return e.a.get({url:"/api/v1/spu/get_spu_specs",data:{spu_id:i}})}function u(a){let i=a.page_size,t=a.page_num;return e.a.post({url:"/api/v1/spu/get_my_bargain_order_spus",data:{page_size:i,page_num:t}})}},db49:function(a,i,t){}}]);