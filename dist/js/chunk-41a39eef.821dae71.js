(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41a39eef"],{"083e":function(t,e,i){"use strict";var n=i("270c"),a=i.n(n);a.a},"248a":function(t,e,i){},"270c":function(t,e,i){},"61a7":function(t,e,i){"use strict";var n=i("248a"),a=i.n(n);a.a},"67e5":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"myFriends-container"},[t._m(0),t.friendList.length>0?i("div",{staticClass:"friendsContent"},[i("ul",t._l(t.friendList,function(t,e){return i("FriendListCommon",{key:e,attrs:{item:t,index:e}})}),1)]):t._e()])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"friendsHeader"},[i("ul",[i("li",[t._v("Friend nickname")]),i("li",[t._v("Join time")]),i("li",[t._v("Contribution")])])])}],s=i("0348"),r=i("f894"),c=i("3007"),o={components:{FriendListCommon:r["a"]},data(){return{friendList:[],curPageDat:{page_size:10,page_num:1}}},created(){this.init()},methods:{init(){var t=this;return Object(s["a"])(function*(){let e=yield Object(c["e"])(t.curPageDat);e&&e.data&&(t.friendList=e.data)})()}}},l=o,u=(i("61a7"),i("17cc")),m=Object(u["a"])(l,n,a,!1,null,"5cafb519",null);e["default"]=m.exports},f894:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"hero-list-item"},[i("div",{staticClass:"column"},[i("div",{staticClass:"hero-img first"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.avatar,expression:"item.avatar"}],attrs:{alt:""}})]),i("div",{staticClass:"hero-info"},[t.index<3?i("div",{class:"hero-no hero-no-"+(t.index+1),attrs:{alt:""}}):i("p",{staticClass:"hero-no"},[t._v("NO."+t._s(t.index+1))]),i("p",{staticClass:"hero-name"},[t._v(t._s(t.item.username))])])]),i("div",{staticClass:"column"},[t._v(t._s(t.item.joinTime||t.item.fans_count))]),i("div",{staticClass:"column"},[t._v(t._s(t.item.profit||t.item.sum_amount))])])},a=[],s={name:"FriendListCommon",props:{item:{type:Object,default(){return{user_id:1,joinTime:"2019-03-08 16:50:50",avatar:"12",profit:50,username:"1212"}}},index:{type:Number}}},r=s,c=(i("083e"),i("17cc")),o=Object(c["a"])(r,n,a,!1,null,"43317fcc",null);e["a"]=o.exports}}]);