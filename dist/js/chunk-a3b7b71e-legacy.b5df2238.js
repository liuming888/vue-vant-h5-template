(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a3b7b71e"],{"1d4a":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAMAAACBKikvAAABs1BMVEUAAADpNQPlLAPXEgTlLgPdHgTjKwPpNAPnMQPjKQPrOALbGwTrOALeHwTeIQTaGQTmLgPcGgTXEwTiKAPpMwPXEQXoMgPXEwTqNgPYFQXpNAPrOAPrOQPlLQThJgPlLQPYFQTbGgTUDwXZFgTvQQLkKwPyRALqNwPoMwPzRwLrOALhJQTXEwX0SQLeIATeIQTqNwPZGATVEAXrOQPvPwLrOQPUDgXZFgXnMwPxQwLYFAToNQPXFQXZFwThJQTrOQPfIwTpNQPhJwPjKQPzSALXEgXiJgPYFAXVDwXuPgLZFwTpNAPsOwPtPALbGwXqNwPqNwPVEQXcHQThJwTXEwXXFAXaGgTuQALaGgTuQAPWEgTsPAPtPAPtPAPtPAPWFAXWEwXfIwTnMQPfIwTaGgXyRgLyRQLXFAXeIQTuPwPWEQXxRALUDgX0SgLsOwPxRQLpNQPYFQToMwPXEwTVEATWEgTqNwPaGQTrOQPkKgPiJwPfIgTZFwTxQwLtPQLmLwPgJAPuPgLeHwTdHQTcGwTZFgTnMQPlLQPyRgLmMQPvQALsOwLeIQTzSALwQQLuQALhJQSqOO2PAAAAcHRSTlMAAvotLRwK9/E2KSMgDgX19e3q6srIw5mLbF9aUE9IQCkV/Pv78vLt6uTj3dbSycW8ureysainopqXk4+NhoGBeXlxYmFfV01APz03JhT5+ffu5+Pi4dvb19bOzMnFwK6pk5GPgH95cVxTUExFRDgYROQk8gAAAipJREFUOMuNkwVz4kAYhhcpXqS4FOru7u69nru7S3MkhyQ4BIf+5NuFdJqwGeCZyLfvPhP5dhaI8OMXaAvJ5KSkLfGgXD5ox1OM5sqjijbETznI59ben6FILhIZumgprkZqrLbyNAOFSqVQqAzcaiEuFAqJZ0+q1epCc+80EU0kPN/Q9bSp+CIajb4G4BW8vWzmuYLFYvAcgN/wXnSLOzrP9vxYELKIRouoGpvf9uj4a6txO2aG/3HcrU3p7qD6Ep7DMw63Bq39rkV5yccBaqwLQqVtF2hG/t6gtKx01sWLFYuSNzEC26pW5dk8y6ps6y65HvDQy13vbSqWzedZlRwFPmMsFst3A1G6YxDjeX3glWazWaNPzPOhKakXcBxJQ6HQoBr31INwQsp72X4YBmZ5oyc3h8Lh0D4/2gtDHmiFntaM0j1huBWPx6/GO/hRx/gVDLdAA+/iNE3v8JMdGvIB36TTJZo+4idfS6XStARgTCWTScGPn8FgCuCYUqlUr+AbYXAf9zrT6bSBKxX1j7kNI3yDywKBwFNU9G6aTB9rj34Mox5MPGYYZha+b83ABAKMYQN2ahaKXkx0Egxjly33ZzJMhoBH/3KPPZMhnJi4QRBEFyEADTcx8Y3/mkfOLw/9FDd4i4nPKYSfmjjUA6A/nIAlwoqJ90iKIknrsYRbqO9WkiQpsgtrIwmZO+NHJ3MoUzS2kexbkmG9XeojGxv5c00LRNDaT7jqP6Lou9LnIx4CAAAAAElFTkSuQmCC"},"1d61":function(t,a,i){t.exports=i.p+"img/bargain-bg-2.55ed7a66.png"},"2ec1":function(t,a,i){"use strict";var e=i("db49");i.n(e).a},"31e7":function(t,a,i){"use strict";i.d(a,"b",function(){return n}),i.d(a,"c",function(){return r}),i.d(a,"a",function(){return s}),i.d(a,"d",function(){return u});var e=i("007a");function n(t){var a=t.bargain_id;return e.a.post({url:"/api/v1/bargain/get_bargain_info",data:{bargain_id:a}})}function r(t){var a=t.bargain_id,i=t.page_size,n=t.page_num;return e.a.post({url:"/api/v1/bargain/get_help_bargain_list",data:{bargain_id:a,page_size:i,page_num:n}})}function s(t){var a=t.bargain_id,i=t.spu_id;return e.a.post({url:"/api/v1/bargain/chop",data:{spu_id:i,bargain_id:a}})}function u(t){var a=t.page_size,i=void 0===a?10:a,n=t.page_num,r=void 0===n?1:n;return e.a.post({url:"/api/v1/spu/get_mybargain_spus",data:{page_size:i,page_num:r}})}},5616:function(t,a,i){"use strict";i.d(a,"c",function(){return n}),i.d(a,"a",function(){return r}),i.d(a,"b",function(){return s});var e=i("007a");function n(t){var a=t.spu_id;return e.a.get({url:"/api/v1/share/share_spu",data:{spu_id:a}})}function r(t){var a=t.bargain_id;return e.a.get({url:"/api/v1/share/share_bargain",data:{bargain_id:a}})}function s(t){var a=t.relation_id;return e.a.get({url:"/api/v1/share/get_share_info",data:{relation_id:a}})}},"595f":function(t,a,i){t.exports=i.p+"img/good-large.47423e8c.png"},"5b3c":function(t,a,i){"use strict";i.r(a),i("aaa4");var e=i("2e73"),n=i.n(e),r=(i("612f"),i("f46d")),s=i.n(r),u=i("a98d"),o=(i("f91a"),i("b5aa"),i("2c46")),c=i("996b"),p=i("5616"),g=i("31e7"),l={components:{dialogSharingFriends:function(t){return Promise.all([i.e("chunk-23201e18"),i.e("chunk-26e10f10")]).then(function(){var a=[i("28fd")];t.apply(null,a)}.bind(this)).catch(i.oe)},countDown:function(t){return i.e("chunk-36dc85fc").then(function(){var a=[i("cd26")];t.apply(null,a)}.bind(this)).catch(i.oe)},dialogPotongSendiri:function(t){return i.e("chunk-e6f68d18").then(function(){var a=[i("fd89")];t.apply(null,a)}.bind(this)).catch(i.oe)},dialogShareEarningEntry:function(t){return i.e("chunk-6614f1e7").then(function(){var a=[i("20c5")];t.apply(null,a)}.bind(this)).catch(i.oe)}},data:function(){return{dialogs:{sharingFriends:{show:!1},potongSendiri:{show:!1},shareEarningEntry:{show:!1}},chop_info:{},shareInfo:{},spu:{spu_pics:[]},bargain_info:{},bargain_user_info:{},expirationDat:{h:"24",p:"00",m:"00"},help_bargain_list:[],helpBargainPageDat:{page_size:10,page_num:1},spu_list:[],isShareEarningEntry:!1}},created:function(){this.init()},mounted:function(){this.$refs.bargainContainer.scrollTo&&this.$refs.bargainContainer.scroll(0,0),document.title="Getting Freebies"},methods:{init:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var a,i,e,n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=this.$route.query,i=a.relationId,e=a.showShareEarningEntry,n=a.bargainId,r=a.spuId,!i){t.next=8;break}return this.isShareEarningEntry=!0,this.dialogs.shareEarningEntry.show="no"!=e,t.next=6,this.initShareInfo(i);case 6:t.next=13;break;case 8:if(n){t.next=11;break}return t.next=11,this.goBargainChop({spu_id:r});case 11:this.initBargainInfo(),this.initHelpBargainList();case 13:this.initSpuInfo(),this.initSpuList();case 15:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),initShareInfo:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(a){var i,e,n,r,s,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.b)({relation_id:a});case 2:(i=t.sent)&&i.data&&(e=i.data,n=e.bargain_id,r=e.spu_id,s=e.type,o=e.invite_user_id,this.$router.replace({query:Object(u.a)({},this.$route.query,{bargainId:n,spuId:r,type:s,inviteUserId:o})}));case 4:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}(),goBargainChop:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(a){var i,e,r,o,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=a.bargain_id,e=a.spu_id,this.$store.state.userInfo.user_id){t.next=7;break}return this.$store.commit("setLoginJumpUrl",""),this.$store.commit("setLoginSelectShow",!0),t.abrupt("return");case 7:return t.next=9,Object(g.a)({bargain_id:i,spu_id:e});case 9:if(!((r=t.sent)&&r.data&&r.data.chop_info)){t.next=20;break}return o=r.data.chop_info,this.chop_info=o,this.$router.replace({query:Object(u.a)({},this.$route.query,{bargainId:o.bargain_id})}),(c=JSON.parse(s()(this.$store.state.goodsList))).forEach(function(t){t.spu_id==e&&(t.isBargain=!0)}),this.$store.commit("setGoodsList",c),this.$route.query.relationId?this.isShareEarningEntry=!1:this.dialogs.potongSendiri.show=!0,t.abrupt("return",n.a.resolve());case 20:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}(),initSpuInfo:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var a,i,e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.b)({spu_id:this.$route.query.spuId});case 2:if((a=t.sent)&&a.data&&a.data.spu)for(e in i=a.data.spu)this.spu[e]=i[e];case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),initBargainInfo:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(g.b)({bargain_id:this.$route.query.bargainId});case 2:(a=t.sent)&&a.data&&(this.bargain_info=a.data.bargain_info||a.data,this.bargain_user_info=a.data.bargain_user_info);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),initHelpBargainList:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(g.c)(Object(u.a)({bargain_id:this.$route.query.bargainId},this.helpBargainPageDat));case 2:(a=t.sent)&&a.data&&(this.help_bargain_list=a.data);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),initSpuList:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var a,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!((a=this.$store.state.goodsList.filter(function(t){return!t.isBargain})).length>6)){t.next=4;break}return this.spu_list=a,t.abrupt("return");case 4:return t.next=6,Object(c.a)({page_size:16,page_num:1,is_all:0});case 6:(i=t.sent)&&i.data&&(this.spu_list=i.data.spu_list,this.$store.commit("setGoodsList",this.spu_list));case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),openSharingFriendsDialog:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var a,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.$store.state.userInfo.user_id){t.next=5;break}return a=window.location,a.pathname,a.search,this.$store.commit("setLoginJumpUrl",""),this.$store.commit("setLoginSelectShow",!0),t.abrupt("return");case 5:return t.next=7,Object(p.a)({bargain_id:this.$route.query.bargainId});case 7:(i=t.sent)&&i.data&&(this.shareInfo=i.data),this.dialogs.sharingFriends.show=!0;case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),jumpCurBargainPage:function(t){if(!this.$store.state.userInfo.user_id)return this.$store.commit("setLoginJumpUrl",""),void this.$store.commit("setLoginSelectShow",!0);this.$router.replace({query:{spuId:t}}),document.getElementsByClassName("content-container")[0].scroll(0,0),this.init()},jumpBuyPage:function(){if(!this.$store.state.userInfo.user_id)return this.$store.commit("setLoginJumpUrl",""),void this.$store.commit("setLoginSelectShow",!0);1==this.bargain_info.can_buy&&this.$router.push({path:"/purchase",query:Object(u.a)({},this.$route.query)})},refreshTime:function(){var t=this,a=this.$util.expiration(this.spu.expire_ttl);if(a){this.expirationDat=a;var i=setInterval(function(){t.expirationDat=t.$util.expiration(t.spu.expire_ttl)},1e3);this.$once("hook:beforeDestroy",function(){clearInterval(i)})}}},beforeRouteUpdate:function(t,a,i){var e=t.query,n=e.loginGoShare;e.bargainType,"ok"==n&&(this.$store.commit("setLoginSelectShow",!1),this.openSharingFriendsDialog()),i()},beforeRouteEnter:function(t,a,i){i(function(t){"/purchase"==a.path&&t.$util.paymentCancellationPrompt()})}},d=(i("2ec1"),i("17cc")),h=Object(d.a)(l,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"bargainContainer",staticClass:"bargain-container"},[e("div",{staticClass:"turn-home",on:{click:function(a){return t.$router.push("/")}}}),e("div",{staticClass:"bargain-header"},[e("div",{staticClass:"bargain-info-box"},[e("img",{staticClass:"bg",attrs:{src:i("1d61"),alt:""}}),e("div",{staticClass:"bargain-content"},[e("div",{staticClass:"bargain-info"},[e("div",{staticClass:"img-box"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.spu.spu_pics&&t.spu.spu_pics[0]||i("595f"),expression:"spu.spu_pics&&spu.spu_pics[0]||require('./../assets/images/good-large.png')"}]})]),e("div",{staticClass:"detail"},[e("p",{staticClass:"title"},[t._v(t._s(t.spu.title))]),e("div",{staticClass:"price-box"},[e("div",{staticClass:"price-box-item"},[e("p",{staticClass:"p-t-3"},[t._v("244d Sent")]),e("p",{staticClass:"p-t-1"},[t._v("\n                  Price\n                  "),e("span",[t._v("RP")]),e("span",[t._v(t._s(t.spu.original_price))])]),e("p",{staticClass:"p-t-2"},[t._v("current price")])]),e("div",{staticClass:"price-box-item"},[e("p",{staticClass:"p-n-1"},[e("span",[t._v("Rp")]),t._v(t._s(t.spu.price))])])])])]),e("div",{staticClass:"bargain-schedule"},[e("p",{staticClass:"title"},[e("span",{staticClass:"n-1"},[e("span",{staticClass:"dollar"},[t._v("RP")]),t._v(t._s(t.bargain_info.bargain_amount||0))]),t._v("cheaper now, leaving"),e("span",{staticClass:"n-2"},[e("span",{staticClass:"dollar"},[t._v("RP")]),t._v(t._s(t.bargain_info.bargain_after||t.spu.price))])]),e("div",{staticClass:"schedule"},[e("div",{staticClass:"active",style:{width:t.bargain_info.bargain_rate+"%"}}),e("div",{staticClass:"schedule-item"},[e("span",{staticClass:"description"},[t._v("cut "),e("span",{staticClass:"highlight"},[t._v(t._s(t.bargain_info.bargain_rate)+"%")])])]),t._m(0),t._m(1)])]),e("count-down",{staticClass:"spu-count-down",attrs:{dateDiff:t.spu.expire_ttl}}),e("div",{staticClass:"ctrl-box"},[t.isShareEarningEntry?e("div",{staticClass:"share-btn",on:{click:function(a){return t.goBargainChop({bargain_id:t.$route.query.bargainId,spu_id:t.$route.query.spuId})}}},[t._v("POTONG PISAU")]):e("div",{staticClass:"share-btn",on:{click:t.openSharingFriendsDialog}},[t._v("SHARE FRIEDNS FOR FREEBIES")]),t.bargain_info.can_buy&&1==t.bargain_info.can_buy?e("div",{staticClass:"buy-btn",on:{click:t.jumpBuyPage}},[t._v("Rp "+t._s(t.bargain_info.bargain_after)+" buy now")]):e("div",{staticClass:"buy-btn cur"},[t._v("\n            BUY NOW\n          ")])])],1)])]),e("div",{staticClass:"bargain-content"},[t.$route.query.bargainId&&t.help_bargain_list.length>0?e("div",{staticClass:"team-box"},[e("p",{staticClass:"page-title"},[t._v("Bargaining team")]),e("ul",{staticClass:"team-list"},t._l(t.help_bargain_list,function(a,n){return e("li",{key:n,staticClass:"team-list-item"},[e("div",{staticClass:"column"},[e("div",{class:"team-img huangguan"+(n+1)},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.avatar||i("595f"),expression:"item.avatar||require('./../assets/images/good-large.png')"}]})]),e("div",{staticClass:"team-info"},[e("p",{staticClass:"team-name"},[t._v(t._s(a.username))]),e("p",{staticClass:"team-date"},[t._v(t._s(a.bargain_time))])])]),e("div",{staticClass:"column"},[e("p",{staticClass:"dollar"},[t._v("Rp"),e("span",[t._v(t._s(a.bargain_amount))])])])])}),0)]):t._e(),t.$route.query.bargainId?t._e():e("div",{staticClass:"goods-detail"},[e("p",{staticClass:"page-title"},[t._v("Product Petails")]),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.spu&&t.spu.spu_pics[0],expression:"spu&&spu.spu_pics[0]"}]})]),t.spu_list.length>0?e("div",{staticClass:"recommend-products"},[e("p",{staticClass:"page-title"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i("1d4a"),expression:"require('./../assets/images/start.png')"}]}),e("span",[t._v("You might like")])]),t._l(t.spu_list,function(a){return e("div",{key:a.spu_id,staticClass:"recommend-item"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.spu_pics&&a.spu_pics[0]||i("595f"),expression:"item.spu_pics&&item.spu_pics[0]||require('./../assets/images/good-large.png')"}],staticClass:"products-photo"}),e("p",{staticClass:"products-title"},[t._v(t._s(a.title))]),e("div",{staticClass:"products-ctrl"},[e("span",{staticClass:"money"},[t._v(t._s(a.deliver_count)+" Sent")]),e("a",{staticClass:"btn",attrs:{href:"javascrip:;"},on:{click:function(i){return t.jumpCurBargainPage(a.spu_id)}}},[t._v("Get a freebie")])])])})],2):t._e()]),t.dialogs.sharingFriends.show?e("dialog-sharing-friends",{attrs:{dialogVisible:t.dialogs.sharingFriends,shareInfo:t.shareInfo},on:{"update:dialogVisible":function(a){return t.$set(t.dialogs,"sharingFriends",a)},"update:dialog-visible":function(a){return t.$set(t.dialogs,"sharingFriends",a)}}}):t._e(),t.dialogs.potongSendiri.show?e("dialog-potong-sendiri",{attrs:{chopInfo:t.chop_info,dialogVisible:t.dialogs.potongSendiri},on:{"update:dialogVisible":function(a){return t.$set(t.dialogs,"potongSendiri",a)},"update:dialog-visible":function(a){return t.$set(t.dialogs,"potongSendiri",a)}}}):t._e()],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"schedule-item ball ball-center"},[a("span",{staticClass:"description"},[this._v("Available for purchase")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"schedule-item ball ball-right"},[a("span",{staticClass:"description"},[this._v("Take it free")])])}],!1,null,"3cb62a7b",null);a.default=h.exports},"996b":function(t,a,i){"use strict";i.d(a,"d",function(){return n}),i.d(a,"b",function(){return r}),i.d(a,"a",function(){return s}),i.d(a,"e",function(){return u}),i.d(a,"c",function(){return o});var e=i("007a");function n(t){var a=t.page_size,i=t.page_num;return e.a.post({url:"/api/v1/spu/get_mybargain_spus",data:{page_size:a,page_num:i}})}function r(t){var a=t.spu_id;return e.a.post({url:"/api/v1/spu/get_info",data:{spu_id:a}})}function s(t){var a=t.page_size,i=t.page_num,n=t.is_all;return e.a.post({url:"/api/v1/spu/get_bargain_spus",data:{page_size:a,page_num:i,is_all:n}})}function u(t){var a=t.spu_id;return e.a.get({url:"/api/v1/spu/get_spu_specs",data:{spu_id:a}})}function o(t){var a=t.page_size,i=t.page_num;return e.a.post({url:"/api/v1/spu/get_my_bargain_order_spus",data:{page_size:a,page_num:i}})}},db49:function(t,a,i){}}]);