(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a22ec55a"],{"5b3c":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"bargain-container"},[a._v("\n  砍价页面\n  "),e("dialog-sharing-friends",{attrs:{dialogVisible:a.dialogs.sharingFriends},on:{"update:dialogVisible":function(t){return a.$set(a.dialogs,"sharingFriends",t)},"update:dialog-visible":function(t){return a.$set(a.dialogs,"sharingFriends",t)}}})],1)},n=[],i=e("af87"),r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"dialogSharingFriends-container"},[e("van-popup",{attrs:{"close-on-click-overlay":!1},model:{value:a.dialogVisible.show,callback:function(t){a.$set(a.dialogVisible,"show",t)},expression:"dialogVisible.show"}},[e("h3",[a._v(" 分享好友")]),e("div",{staticClass:"share-messenger",staticStyle:{"font-size":"36px"},on:{click:a.shareMessenger}},[a._v("Messenger")]),e("div",{staticClass:"share-whatsapp",staticStyle:{"font-size":"36px"},on:{click:a.shareWhatsapp}},[a._v("whatsapp")]),e("div",{staticClass:"share-line",staticStyle:{"font-size":"36px"},on:{click:a.shareLine}},[a._v("LINE")]),e("div",{staticClass:"share-facebook",staticStyle:{"font-size":"36px"},on:{click:a.shareFacebook}},[a._v("FB")])])],1)},o=[],c=(e("b5aa"),e("2c46")),l=e("f121"),d={name:"dialogSharingFriends",props:{dialogVisible:{type:Object,default:function(){return{show:!1}}},shareInfo:{type:Object,default:function(){return{shareUrl:window.location.origin+"/forBargain",shareTitle:"分享标题",shareDescription:"分享的描述",shareImage:"https://s.pinimg.com/images/facebook_share_image.png",quote:"FB随分享的链接一同显示的引文可由用户自行高亮选择，也可由开发者预先定义（例如文章的醒目引文）",hashtag:"FB分享的tag标签"}}}},methods:{shareMessenger:function(){var a=l["a"].appId;console.log("appId: ",a);var t="https://liuming.mynatapp.cc/forBargain";window.location.href="fb-messenger://share/?link=".concat(t,"/&app_id=").concat(a)},shareWhatsapp:function(){var a=this.shareInfo.shareTitle,t=encodeURIComponent("\n\n"+this.shareInfo.shareUrl);window.location.href="whatsapp://send?text="+encodeURIComponent(a)+t+"&via=lopscoop"},shareLine:function(){var a=encodeURIComponent("https://liuming.mynatapp.cc/forBargain");window.location.href="line://msg/text/".concat(a)},shareFacebook:function(){var a=Object(c["a"])(regeneratorRuntime.mark(function a(){var t,e,s;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return t="https://liuming.mynatapp.cc/forBargain?a=1",e=this.shareInfo.quote,s=this.shareInfo.hashtag,a.next=5,window.$faceBookApi.shareFB(t,e,s);case 5:a.sent;case 7:case"end":return a.stop()}},a,this)}));function t(){return a.apply(this,arguments)}return t}()}},g=d,h=e("8c9c"),u=Object(h["a"])(g,r,o,!1,null,"724ff914",null),p=u.exports,f=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"bargainingHelpInformation-container"},[a._v("\n  砍价帮\n")])},m=[],v={name:"bargainingHelpInformation"},b=v,_=Object(h["a"])(b,f,m,!1,null,"5fa52e4b",null),w=_.exports,k=e("7e1f"),C={components:{bargainingProgressBar:i["a"],dialogSharingFriends:p,bargainingHelpInformation:w,commodityItem:k["a"]},data:function(){return{dialogs:{sharingFriends:{show:!0}}}}},I=C,x=Object(h["a"])(I,s,n,!1,null,"98f11a48",null);t["default"]=x.exports},"7e1f":function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"commodityItem-container"},[e("div",{staticClass:"home-goods-item"},[e("div",{staticClass:"goods-img"},[e("img",{attrs:{src:a.itemData.imgUrl||"",alt:""}})]),e("div",{staticClass:"goods-detail"},[e("a",{staticClass:"goods-title",attrs:{href:a.itemData.path||"/"}},[a._v(a._s(a.itemData.title||""))]),e("p",{staticClass:"goods-description"},[a._v(a._s(a.itemData.description||""))]),e("p",{staticClass:"goods-description"},[a._v("2432 Sent")]),e("div",{staticClass:"goods-price"},[e("span",{staticClass:"discount"},[a._v("$ "+a._s(a.itemData.discount||0))]),e("span",{staticClass:"real"},[a._v("$"+a._s(a.itemData.realAmount||0))])])]),a._m(0)]),e("dialog-sharing-makes",{attrs:{dialogVisible:a.dialogs.sharingMakes},on:{"update:dialogVisible":function(t){return a.$set(a.dialogs,"sharingMakes",t)},"update:dialog-visible":function(t){return a.$set(a.dialogs,"sharingMakes",t)}}})],1)},n=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"goods-control"},[e("a",{staticClass:"button-l",attrs:{href:"javascrip:;"}},[a._v("\n        Cash Back\n      ")]),e("a",{staticClass:"button-r",attrs:{href:"javascrip:;"}},[a._v("Get Freebie")])])}],i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"dialogSharingMakes-container"},[e("van-popup",{attrs:{"close-on-click-overlay":!1},model:{value:a.show,callback:function(t){a.show=t},expression:"show"}},[a._v("\n    分享赚\n  ")])],1)},r=[],o={name:"dialogSharingMakes",data:function(){return{show:!1}}},c=o,l=e("8c9c"),d=Object(l["a"])(c,i,r,!1,null,"375d83d5",null),g=d.exports,h={components:{dialogSharingMakes:g},data:function(){return{dialogs:{sharingMakes:{show:!0}}}},props:{itemData:{type:Object}}},u=h,p=(e("abf8"),Object(l["a"])(u,s,n,!1,null,"896eb938",null));t["a"]=p.exports},abf8:function(a,t,e){"use strict";var s=e("fd47"),n=e.n(s);n.a},af87:function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"bargainingProgressBar-container"},[a._v("\n  砍价进度条\n")])},n=[],i={name:"bargainingProgressBar"},r=i,o=e("8c9c"),c=Object(o["a"])(r,s,n,!1,null,"9152d290",null);t["a"]=c.exports},fd47:function(a,t,e){}}]);