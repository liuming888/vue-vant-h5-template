(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52865158"],{"196a":function(e,t,n){var i=n("8d1f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("499e").default;r("0043a033",i,!0,{sourceMap:!1,shadowMode:!1})},"67e5":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"myFriends-container"},[n("div",{staticClass:"friendsHeader"},[n("ul",[n("li",[e._v(e._s(e.$t("myFriends.friendNickname")))]),n("li",[e._v(e._s(e.$t("myFriends.joinTime")))]),n("li",[e._v(e._s(e.$t("myFriends.contribution"))+"(Rp)")])])]),e.friendList.length>0?n("div",{staticClass:"friendsContent"},[n("ul",e._l(e.friendList,function(e,t){return n("FriendListCommon",{key:t,tag:"li",attrs:{item:e,index:t}})}),1)]):e._e()])},r=[],a=(n("96cf"),n("3b8d")),s=n("3007"),c={components:{FriendListCommon:function(e){return n.e("chunk-5dc5ca62").then(function(){var t=[n("f894")];e.apply(null,t)}.bind(this)).catch(n.oe)}},data:function(){return{friendList:[],curPageDat:{page_size:10,page_num:1}}},created:function(){this.init()},methods:{init:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["e"])(this.curPageDat);case 2:t=e.sent,t&&t.data&&(this.friendList=t.data);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},o=c,d=(n("cf3d"),n("2877")),u=Object(d["a"])(o,i,r,!1,null,"3644c443",null);t["default"]=u.exports},"8d1f":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".friendsHeader[data-v-3644c443]{line-height:1.22667rem;text-align:center;background:#f5f5f5}.friendsHeader ul[data-v-3644c443]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.friendsHeader ul li[data-v-3644c443]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#888;font-size:.32rem;white-space:nowrap}",""])},cf3d:function(e,t,n){"use strict";var i=n("196a"),r=n.n(i);r.a}}]);