(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c021cee"],{"04ac":function(t,e,i){var a=i("4d65"),n=i("9208"),s=i("2ba0"),r=i("5ee9")("IE_PROTO"),o=function(){},c="prototype",u=function(){var t,e=i("bce2")("iframe"),a=s.length,n="<",r=">";e.style.display="none",i("5b58").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(n+"script"+r+"document.F=Object"+n+"/script"+r),t.close(),u=t.F;while(a--)delete u[c][s[a]];return u()};t.exports=Object.create||function(t,e){var i;return null!==t?(o[c]=a(t),i=new o,o[c]=null,i[r]=t):i=u(),void 0===e?i:n(i,e)}},"0d0d":function(t,e,i){var a=i("54a3"),n=i("33f2"),s=i("8da8");t.exports=function(t){return function(e,i,r){var o,c=a(e),u=n(c.length),l=s(r,u);if(t&&i!=i){while(u>l)if(o=c[l++],o!=o)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===i)return t||l||0;return!t&&-1}}},1145:function(t,e,i){"use strict";var a=i("4725"),n=i("2d2c"),s=i("7f00"),r=i("c84b"),o=i("f03e"),c=i("648e"),u=i("c67d"),l=i("d6e1"),p=i("f3ae")("iterator"),g=!([].keys&&"next"in[].keys()),d="@@iterator",f="keys",h="values",b=function(){return this};t.exports=function(t,e,i,v,_,m,w){c(i,e,v);var y,P,x,C=function(t){if(!g&&t in O)return O[t];switch(t){case f:return function(){return new i(this,t)};case h:return function(){return new i(this,t)}}return function(){return new i(this,t)}},A=e+" Iterator",L=_==h,S=!1,O=t.prototype,k=O[p]||O[d]||_&&O[_],T=k||C(_),I=_?L?C("entries"):T:void 0,Q="Array"==e&&O.entries||k;if(Q&&(x=l(Q.call(new t)),x!==Object.prototype&&x.next&&(u(x,A,!0),a||"function"==typeof x[p]||r(x,p,b))),L&&k&&k.name!==h&&(S=!0,T=function(){return k.call(this)}),a&&!w||!g&&!S&&O[p]||r(O,p,T),o[e]=T,o[A]=b,_)if(y={values:L?T:C(h),keys:m?T:C(f),entries:I},w)for(P in y)P in O||s(O,P,y[P]);else n(n.P+n.F*(g||S),e,y);return y}},"14c3":function(t,e,i){},"1d4a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAMAAACBKikvAAABs1BMVEUAAADpNQPlLAPXEgTlLgPdHgTjKwPpNAPnMQPjKQPrOALbGwTrOALeHwTeIQTaGQTmLgPcGgTXEwTiKAPpMwPXEQXoMgPXEwTqNgPYFQXpNAPrOAPrOQPlLQThJgPlLQPYFQTbGgTUDwXZFgTvQQLkKwPyRALqNwPoMwPzRwLrOALhJQTXEwX0SQLeIATeIQTqNwPZGATVEAXrOQPvPwLrOQPUDgXZFgXnMwPxQwLYFAToNQPXFQXZFwThJQTrOQPfIwTpNQPhJwPjKQPzSALXEgXiJgPYFAXVDwXuPgLZFwTpNAPsOwPtPALbGwXqNwPqNwPVEQXcHQThJwTXEwXXFAXaGgTuQALaGgTuQAPWEgTsPAPtPAPtPAPtPAPWFAXWEwXfIwTnMQPfIwTaGgXyRgLyRQLXFAXeIQTuPwPWEQXxRALUDgX0SgLsOwPxRQLpNQPYFQToMwPXEwTVEATWEgTqNwPaGQTrOQPkKgPiJwPfIgTZFwTxQwLtPQLmLwPgJAPuPgLeHwTdHQTcGwTZFgTnMQPlLQPyRgLmMQPvQALsOwLeIQTzSALwQQLuQALhJQSqOO2PAAAAcHRSTlMAAvotLRwK9/E2KSMgDgX19e3q6srIw5mLbF9aUE9IQCkV/Pv78vLt6uTj3dbSycW8ureysainopqXk4+NhoGBeXlxYmFfV01APz03JhT5+ffu5+Pi4dvb19bOzMnFwK6pk5GPgH95cVxTUExFRDgYROQk8gAAAipJREFUOMuNkwVz4kAYhhcpXqS4FOru7u69nru7S3MkhyQ4BIf+5NuFdJqwGeCZyLfvPhP5dhaI8OMXaAvJ5KSkLfGgXD5ox1OM5sqjijbETznI59ben6FILhIZumgprkZqrLbyNAOFSqVQqAzcaiEuFAqJZ0+q1epCc+80EU0kPN/Q9bSp+CIajb4G4BW8vWzmuYLFYvAcgN/wXnSLOzrP9vxYELKIRouoGpvf9uj4a6txO2aG/3HcrU3p7qD6Ep7DMw63Bq39rkV5yccBaqwLQqVtF2hG/t6gtKx01sWLFYuSNzEC26pW5dk8y6ps6y65HvDQy13vbSqWzedZlRwFPmMsFst3A1G6YxDjeX3glWazWaNPzPOhKakXcBxJQ6HQoBr31INwQsp72X4YBmZ5oyc3h8Lh0D4/2gtDHmiFntaM0j1huBWPx6/GO/hRx/gVDLdAA+/iNE3v8JMdGvIB36TTJZo+4idfS6XStARgTCWTScGPn8FgCuCYUqlUr+AbYXAf9zrT6bSBKxX1j7kNI3yDywKBwFNU9G6aTB9rj34Mox5MPGYYZha+b83ABAKMYQN2ahaKXkx0Egxjly33ZzJMhoBH/3KPPZMhnJi4QRBEFyEADTcx8Y3/mkfOLw/9FDd4i4nPKYSfmjjUA6A/nIAlwoqJ90iKIknrsYRbqO9WkiQpsgtrIwmZO+NHJ3MoUzS2kexbkmG9XeojGxv5c00LRNDaT7jqP6Lou9LnIx4CAAAAAElFTkSuQmCC"},"1d61":function(t,e,i){t.exports=i.p+"img/bargain-bg-2.55ed7a66.png"},"240e":function(t,e,i){var a=i("9b6d");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==a(t)?t.split(""):Object(t)}},"28fd":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogVisible.show,expression:"dialogVisible.show"}],staticClass:"dialogSharingFriends-container",on:{click:function(e){e.stopPropagation(),t.abc=1}}},[a("div",{staticClass:"share-box"},[a("div",{staticClass:"tip"},[t._v("\n      Tip: Share to friends and you can get freebies faster.\n    ")]),a("h5",{staticClass:"tit"},[t._v("Share on")]),a("div",{staticClass:"share-types"},[a("div",{staticClass:"share-item"},[a("img",{attrs:{src:i("23b7")},on:{click:t.mx_shareFacebook}}),a("p",[t._v("Facebook")])]),a("div",{staticClass:"share-item"},[a("img",{attrs:{src:i("fe82")},on:{click:t.mx_shareLine}}),a("p",[t._v("LINE")])]),a("div",{staticClass:"share-item"},[a("img",{attrs:{src:i("d253")},on:{click:t.mx_shareWhatsapp}}),a("p",[t._v("WhatsApp")])]),a("div",{staticClass:"share-item"},[a("img",{attrs:{src:i("c64e")},on:{click:t.mx_shareMessenger}}),a("p",[t._v("Messenger")])])]),a("button",{ref:"copy",staticClass:"copy-link",attrs:{"data-clipboard-action":"copy","data-clipboard-text":t.shareInfo.share_url},on:{click:t.mx_copyLink}}),a("img",{staticClass:"close-img",attrs:{src:i("6eff")},on:{click:t.closeDialog}})])])},n=[],s=i("0f35"),r=i("59d0"),o={mixins:[s["a"],r["a"]],name:"dialogSharingFriends",props:{dialogVisible:{type:Object,default:function(){return{show:!1}}},shareInfo:{type:Object,default:function(){return{share_url:window.location.origin+"/forBargain",share_title:"分享标题",share_desp:"分享的描述",share_image:"https://s.pinimg.com/images/facebook_share_image.png"}}}},methods:{closeDialog:function(){this.$emit("update:dialogVisible",{show:!1})}}},c=o,u=(i("9d73"),i("17cc")),l=Object(u["a"])(c,a,n,!1,null,"3eaf11ca",null);e["a"]=l.exports},"2ba0":function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"31e7":function(t,e,i){"use strict";i.d(e,"b",function(){return n}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return r}),i.d(e,"d",function(){return o});var a=i("007a");function n(t){var e=t.bargain_id;return a["a"].post({url:"/api/v1/bargain/get_bargain_info",data:{bargain_id:e}})}function s(t){var e=t.bargain_id,i=t.page_size,n=t.page_num;return a["a"].post({url:"/api/v1/bargain/get_help_bargain_list",data:{bargain_id:e,page_size:i,page_num:n}})}function r(t){var e=t.bargain_id,i=t.spu_id;return a["a"].post({url:"/api/v1/bargain/chop",data:{spu_id:i,bargain_id:e}})}function o(t){var e=t.page_size,i=void 0===e?10:e,n=t.page_num,s=void 0===n?1:n;return a["a"].post({url:"/api/v1/spu/get_mybargain_spus",data:{page_size:i,page_num:s}})}},"3fd6":function(t,e,i){},"54a3":function(t,e,i){var a=i("240e"),n=i("2b11");t.exports=function(t){return a(n(t))}},"5b3c":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bargain-container"},[a("div",{staticClass:"bargain-header"},[a("div",{staticClass:"bargain-info-box"},[a("img",{staticClass:"bg",attrs:{src:i("1d61"),alt:""}}),a("div",{staticClass:"bargain-content"},[a("div",{staticClass:"bargain-info"},[a("div",{staticClass:"img-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.spu.spu_pics&&t.spu.spu_pics[0]||i("595f"),expression:"spu.spu_pics&&spu.spu_pics[0]||require('./../assets/images/good-large.png')"}]})]),a("div",{staticClass:"detail"},[a("p",{staticClass:"title"},[t._v(t._s(t.spu.title))]),a("div",{staticClass:"price-box"},[a("div",{staticClass:"price-box-item"},[a("p",{staticClass:"p-t-3"},[t._v("244d Sent")]),a("p",{staticClass:"p-t-1"},[t._v("\n                  Price\n                  "),a("span",[t._v("$")]),a("span",[t._v(t._s(t.spu.original_price))])]),a("p",{staticClass:"p-t-2"},[t._v("current price")])]),a("div",{staticClass:"price-box-item"},[a("p",{staticClass:"p-n-1"},[a("span",[t._v("Rp")]),t._v(t._s(t.spu.price))])])])])]),a("div",{staticClass:"bargain-schedule"},[a("p",{staticClass:"title"},[a("span",{staticClass:"n-1"},[a("span",{staticClass:"dollar"},[t._v("RP")]),t._v(t._s(t.bargain_info.bargain_amount||0))]),t._v("cheaper now, leaving"),a("span",{staticClass:"n-2"},[a("span",{staticClass:"dollar"},[t._v("RP")]),t._v(t._s(t.bargain_info.bargain_after||t.spu.price))])]),a("div",{staticClass:"schedule"},[a("div",{staticClass:"active",style:{width:t.bargain_info.bargain_rate+"%"}}),a("div",{staticClass:"schedule-item"},[a("span",{staticClass:"description"},[t._v("cut "),a("span",{staticClass:"highlight"},[t._v(t._s(t.bargain_info.bargain_rate)+"%")])])]),t._m(0),t._m(1)])]),a("count-down",{staticClass:"spu-count-down",attrs:{dateDiff:t.spu.expire_ttl}}),a("div",{staticClass:"ctrl-box"},[a("div",{staticClass:"share-btn",on:{click:t.openSharingFriendsDialog}},[t._v("SHARE FRIEDNS FOR FREEBIES")]),t.bargain_info.can_buy&&2!=t.bargain_info.can_buy?a("div",{staticClass:"buy-btn",on:{click:t.jumpBuyPage}},[t._v("Rp "+t._s(t.bargain_info.bargain_after)+" buy now")]):a("div",{staticClass:"buy-btn cur"},[t._v("\n            BUY NOW\n          ")])])],1)])]),a("div",{staticClass:"bargain-content"},[t.$route.query.bargainId&&t.help_bargain_list.length>0?a("div",{staticClass:"team-box"},[a("p",{staticClass:"page-title"},[t._v("Bargaining team")]),a("ul",{staticClass:"team-list"},t._l(t.help_bargain_list,function(e,n){return a("li",{key:n,staticClass:"team-list-item"},[a("div",{staticClass:"column"},[a("div",{class:"team-img huangguan"+(n+1)},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar||i("595f"),expression:"item.avatar||require('./../assets/images/good-large.png')"}]})]),a("div",{staticClass:"team-info"},[a("p",{staticClass:"team-name"},[t._v(t._s(e.username))]),a("p",{staticClass:"team-date"},[t._v(t._s(e.bargain_time))])])]),a("div",{staticClass:"column"},[a("p",{staticClass:"dollar"},[t._v("Rp"),a("span",[t._v(t._s(e.bargain_amount))])])])])}),0)]):t._e(),t.$route.query.bargainId?t._e():a("div",{staticClass:"goods-detail"},[a("p",{staticClass:"page-title"},[t._v("Product Petails")]),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.spu&&t.spu.spu_pics[0],expression:"spu&&spu.spu_pics[0]"}]})]),t.spu_list.length>0?a("div",{staticClass:"recommend-products"},[t._m(2),t._l(t.spu_list,function(e){return a("div",{key:e.spu_id,staticClass:"recommend-item"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.spu_pics&&e.spu_pics[0]||i("595f"),expression:"item.spu_pics&&item.spu_pics[0]||require('./../assets/images/good-large.png')"}],staticClass:"products-photo"}),a("p",{staticClass:"products-title"},[t._v(t._s(e.title))]),a("div",{staticClass:"products-ctrl"},[a("span",{staticClass:"money"},[t._v(t._s(e.deliver_count)+" Sent")]),a("a",{staticClass:"btn",attrs:{href:"javascrip:;"},on:{click:function(i){return t.jumpCurBargainPage(e.spu_id)}}},[t._v("Get a freebie")])])])})],2):t._e()]),a("dialog-sharing-friends",{attrs:{dialogVisible:t.dialogs.sharingFriends,shareInfo:t.shareInfo},on:{"update:dialogVisible":function(e){return t.$set(t.dialogs,"sharingFriends",e)},"update:dialog-visible":function(e){return t.$set(t.dialogs,"sharingFriends",e)}}}),a("dialog-potong-sendiri",{attrs:{chopInfo:t.chop_info,dialogVisible:t.dialogs.potongSendiri},on:{"update:dialogVisible":function(e){return t.$set(t.dialogs,"potongSendiri",e)},"update:dialog-visible":function(e){return t.$set(t.dialogs,"potongSendiri",e)}}})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"schedule-item ball ball-center"},[i("span",{staticClass:"description"},[t._v("Available for purchase")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"schedule-item ball ball-right"},[i("span",{staticClass:"description"},[t._v("Take it free")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"page-title"},[a("img",{attrs:{src:i("1d4a"),alt:""}}),a("span",[t._v("You might like")])])}],s=(i("aaa4"),i("2e73")),r=i.n(s),o=(i("612f"),i("f46d")),c=i.n(o),u=i("a98d"),l=(i("b5aa"),i("2c46")),p=i("af87"),g=i("28fd"),d=i("cd26"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialogPotongSendiri-container"},[a("van-popup",{staticStyle:{"background-color":"transparent",width:"100%"},model:{value:t.dialogVisible.show,callback:function(e){t.$set(t.dialogVisible,"show",e)},expression:"dialogVisible.show"}},[a("div",{staticClass:"box"},[a("img",{staticClass:"bg",attrs:{src:i("ca81"),alt:""}}),a("div",{staticClass:"box-info"},[a("p",{staticClass:"top-tips"},[t._v("Help him cut down")]),a("p",{staticClass:"cut-num"},[a("span",[t._v("Rp")]),t._v(" "+t._s(t.chopInfo.bargain_amount))])]),a("div",{staticClass:"close",on:{click:t.closeDialog}})])])],1)},h=[],b={name:"dialogPotongSendiri",props:{dialogVisible:{type:Object,default:function(){return{show:!0}}},chopInfo:{type:Object,default:function(){return{bargain_id:1,bargain_amount:1,bargain_rate:1,reward_amount:"mock"}}}},data:function(){return{}},methods:{closeDialog:function(){this.$emit("update:dialogVisible",{show:!1})}}},v=b,_=(i("e276"),i("17cc")),m=Object(_["a"])(v,f,h,!1,null,"0638bbb4",null),w=m.exports,y=i("996b"),P=i("5616"),x=i("31e7"),C={components:{bargainingProgressBar:p["a"],dialogSharingFriends:g["a"],countDown:d["a"],dialogPotongSendiri:w},data:function(){return{dialogs:{sharingFriends:{show:!1},potongSendiri:{show:!0}},chop_info:{},shareInfo:{},spu:{spu_pics:[]},bargain_info:{},bargain_user_info:{},expirationDat:{h:"24",p:"00",m:"00"},help_bargain_list:[],helpBargainPageDat:{page_size:10,page_num:1},spu_list:[]}},created:function(){this.init()},mounted:function(){document.getElementsByClassName("content-container")[0].scroll(0,0),document.title="Getting Freebies"},methods:{init:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$route.query.relationId){t.next=5;break}return t.next=3,this.initShareInfo(this.$route.query.relationId);case 3:t.next=10;break;case 5:if(this.$route.query.bargainId){t.next=8;break}return t.next=8,this.goBargainChop({spu_id:this.$route.query.spuId});case 8:this.initBargainInfo(),this.initHelpBargainList();case 10:this.initSpuInfo(),this.initSpuList();case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initShareInfo:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){var i,a,n,s,r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(P["b"])({relation_id:e});case 2:i=t.sent,i&&i.data&&(a=i.data,n=a.bargain_id,s=a.spu_id,r=a.type,o=a.invite_user_id,this.$router.push({query:Object(u["a"])({},this.$route.query,{bargainId:n,spuId:s,type:r,inviteUserId:o})}));case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),goBargainChop:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){var i,a,n,s,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.bargain_id,a=e.spu_id,t.next=3,Object(x["a"])({bargain_id:i,spu_id:a});case 3:if(n=t.sent,!(n&&n.data&&n.data.chop_info)){t.next=14;break}return s=n.data.chop_info,this.chop_info=s,console.log("chop_info: ",s),this.$router.push({query:Object(u["a"])({},this.$route.query,{bargainId:s.bargain_id})}),o=JSON.parse(c()(this.$store.state.goodsList)),o.forEach(function(t){t.spu_id==a&&(t.isBargain=!0)}),this.$store.commit("setGoodsList",o),this.dialogs.potongSendiri.show=!0,t.abrupt("return",r.a.resolve());case 14:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),initSpuInfo:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,i,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(y["b"])({spu_id:this.$route.query.spuId});case 2:if(e=t.sent,e&&e.data&&e.data.spu)for(a in i=e.data.spu,i)this.spu[a]=i[a];case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initBargainInfo:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(x["b"])({bargain_id:this.$route.query.bargainId});case 2:e=t.sent,e&&(this.bargain_info=e.data.bargain_info||e.data,this.bargain_user_info=e.data.bargain_user_info,console.log("this.bargain_info: ",this.bargain_info));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initHelpBargainList:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(x["c"])(Object(u["a"])({bargain_id:this.$route.query.bargainId},this.helpBargainPageDat));case 2:e=t.sent,e&&e.data&&(this.help_bargain_list=e.data);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initSpuList:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$store.state.goodsList.filter(function(t){return!t.isBargain}),!(e.length>6)){t.next=4;break}return this.spu_list=e,t.abrupt("return");case 4:return t.next=6,Object(y["a"])({page_size:16,page_num:1,is_all:0});case 6:i=t.sent,i&&i.data&&(this.spu_list=i.data.spu_list,this.$store.commit("setGoodsList",this.spu_list));case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),openSharingFriendsDialog:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.$store.state.userInfo.user_id){t.next=5;break}return e=window.location,e.pathname,e.search,this.$store.commit("setLoginJumpUrl",""),this.$store.commit("setLoginSelectShow",!0),t.abrupt("return");case 5:return t.next=7,Object(P["a"])({bargain_id:this.$route.query.bargainId});case 7:i=t.sent,i&&(this.shareInfo=i.data),this.dialogs.sharingFriends.show=!0;case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),jumpCurBargainPage:function(t){if(!this.$store.state.userInfo.user_id)return this.$store.commit("setLoginJumpUrl",""),void this.$store.commit("setLoginSelectShow",!0);this.$router.push({path:"/bargain",query:{spuId:t}}),document.getElementsByClassName("content-container")[0].scroll(0,0),this.init()},jumpBuyPage:function(){if(!this.$store.state.userInfo.user_id)return this.$store.commit("setLoginJumpUrl",""),void this.$store.commit("setLoginSelectShow",!0);1==this.bargain_info.can_buy&&this.$router.push({path:"/purchase",query:Object(u["a"])({},this.$route.query)})},refreshTime:function(){var t=this,e=this.$util.expiration(this.spu.expire_ttl);if(e){this.expirationDat=e;var i=setInterval(function(){t.expirationDat=t.$util.expiration(t.spu.expire_ttl)},1e3);this.$once("hook:beforeDestroy",function(){clearInterval(i)})}}},beforeRouteUpdate:function(t,e,i){var a=t.query,n=a.loginGoShare;a.bargainType;"ok"==n&&(this.$store.commit("setLoginSelectShow",!1),this.openSharingFriendsDialog()),i()},beforeRouteEnter:function(t,e,i){i(function(t){"/purchase"==e.path&&t.$util.paymentCancellationPrompt()})}},A=C,L=(i("5e7f"),Object(_["a"])(A,a,n,!1,null,"0c572616",null));e["default"]=L.exports},"5b58":function(t,e,i){var a=i("4839").document;t.exports=a&&a.documentElement},"5c07":function(t,e,i){"use strict";var a=i("68fb"),n=i("b725"),s=i("f03e"),r=i("54a3");t.exports=i("1145")(Array,"Array",function(t,e){this._t=r(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,i=this._i++;return!t||i>=t.length?(this._t=void 0,n(1)):n(0,"keys"==e?i:"values"==e?t[i]:[i,t[i]])},"values"),s.Arguments=s.Array,a("keys"),a("values"),a("entries")},"5e7f":function(t,e,i){"use strict";var a=i("9bf9"),n=i.n(a);n.a},"5ee9":function(t,e,i){var a=i("13c4")("keys"),n=i("75ff");t.exports=function(t){return a[t]||(a[t]=n(t))}},"612f":function(t,e,i){for(var a=i("5c07"),n=i("d753"),s=i("7f00"),r=i("4839"),o=i("c84b"),c=i("f03e"),u=i("f3ae"),l=u("iterator"),p=u("toStringTag"),g=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=n(d),h=0;h<f.length;h++){var b,v=f[h],_=d[v],m=r[v],w=m&&m.prototype;if(w&&(w[l]||o(w,l,g),w[p]||o(w,p,v),c[v]=g,_))for(b in a)w[b]||s(w,b,a[b],!0)}},"648e":function(t,e,i){"use strict";var a=i("04ac"),n=i("b915"),s=i("c67d"),r={};i("c84b")(r,i("f3ae")("iterator"),function(){return this}),t.exports=function(t,e,i){t.prototype=a(r,{next:n(1,i)}),s(t,e+" Iterator")}},"68fb":function(t,e,i){var a=i("f3ae")("unscopables"),n=Array.prototype;void 0==n[a]&&i("c84b")(n,a,{}),t.exports=function(t){n[a][t]=!0}},"7cbd":function(t,e,i){var a=i("3301"),n=i("54a3"),s=i("0d0d")(!1),r=i("5ee9")("IE_PROTO");t.exports=function(t,e){var i,o=n(t),c=0,u=[];for(i in o)i!=r&&a(o,i)&&u.push(i);while(e.length>c)a(o,i=e[c++])&&(~s(u,i)||u.push(i));return u}},"8da8":function(t,e,i){var a=i("ae63"),n=Math.max,s=Math.min;t.exports=function(t,e){return t=a(t),t<0?n(t+e,0):s(t,e)}},9208:function(t,e,i){var a=i("694f"),n=i("4d65"),s=i("d753");t.exports=i("3a0f")?Object.defineProperties:function(t,e){n(t);var i,r=s(e),o=r.length,c=0;while(o>c)a.f(t,i=r[c++],e[i]);return t}},"9bf9":function(t,e,i){},"9d73":function(t,e,i){"use strict";var a=i("3fd6"),n=i.n(a);n.a},af87:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bargainingProgressBar-container"},[t._v("\n  砍价进度条\n")])},n=[],s={name:"bargainingProgressBar"},r=s,o=i("17cc"),c=Object(o["a"])(r,a,n,!1,null,"9152d290",null);e["a"]=c.exports},b725:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},c67d:function(t,e,i){var a=i("694f").f,n=i("3301"),s=i("f3ae")("toStringTag");t.exports=function(t,e,i){t&&!n(t=i?t:t.prototype,s)&&a(t,s,{configurable:!0,value:e})}},ca81:function(t,e,i){t.exports=i.p+"img/$@2x.bfc24151.png"},d6e1:function(t,e,i){var a=i("3301"),n=i("aa91"),s=i("5ee9")("IE_PROTO"),r=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=n(t),a(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?r:null}},d753:function(t,e,i){var a=i("7cbd"),n=i("2ba0");t.exports=Object.keys||function(t){return a(t,n)}},e276:function(t,e,i){"use strict";var a=i("14c3"),n=i.n(a);n.a},f03e:function(t,e){t.exports={}}}]);