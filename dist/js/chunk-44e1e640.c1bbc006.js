(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44e1e640"],{"17ef":function(a,i,s){"use strict";s.r(i);var t=function(){var a=this,i=a.$createElement,s=a._self._c||i;return s("div",{staticClass:"isBargainingList-container"})},e=[],n=s("3f9a"),r={components:{aCommodityThatIsBeingBargained:n["a"]}},o=r,c=s("17cc"),g=Object(c["a"])(o,t,e,!1,null,"988585a0",null);i["default"]=g.exports},"28fd":function(a,i,s){"use strict";var t=function(){var a=this,i=a.$createElement,s=a._self._c||i;return s("div",{staticClass:"dialogSharingFriends-container"},[s("van-popup",{attrs:{"close-on-click-overlay":!1},model:{value:a.dialogVisible.show,callback:function(i){a.$set(a.dialogVisible,"show",i)},expression:"dialogVisible.show"}},[s("h3",[a._v(" 分享好友")]),s("div",{staticClass:"share-messenger",staticStyle:{"font-size":"36px"},on:{click:a.shareMessenger}},[a._v("Messenger")]),s("div",{staticClass:"share-whatsapp",staticStyle:{"font-size":"36px"},on:{click:a.shareWhatsapp}},[a._v("whatsapp")]),s("div",{staticClass:"share-line",staticStyle:{"font-size":"36px"},on:{click:a.shareLine}},[a._v("LINE")]),s("div",{staticClass:"share-facebook",staticStyle:{"font-size":"36px"},on:{click:a.shareFacebook}},[a._v("FB")])])],1)},e=[],n=s("0348"),r=s("f121"),o={name:"dialogSharingFriends",props:{dialogVisible:{type:Object,default(){return{show:!1}}},shareInfo:{type:Object,default(){return{shareUrl:window.location.origin+"/forBargain",shareTitle:"分享标题",shareDescription:"分享的描述",shareImage:"https://s.pinimg.com/images/facebook_share_image.png",quote:"FB随分享的链接一同显示的引文可由用户自行高亮选择，也可由开发者预先定义（例如文章的醒目引文）"}}}},methods:{shareMessenger(){const a=r["a"].appId;console.log("appId: ",a);const i="https://liuming.mynatapp.cc/forBargain";window.location.href=`fb-messenger://share/?link=${i}/&app_id=${a}`},shareWhatsapp(){var a=this.shareInfo.shareTitle;const i=encodeURIComponent("\n\n"+this.shareInfo.shareUrl);window.location.href="whatsapp://send?text="+encodeURIComponent(a)+i+"&via=lopscoop"},shareLine(){const a=encodeURIComponent("https://liuming.mynatapp.cc/forBargain");window.location.href=`line://msg/text/${a}`},shareFacebook(){var a=this;return Object(n["a"])(function*(){const i="https://liuming.mynatapp.cc/forBargain?a=1",s=a.shareInfo.quote;yield window.$faceBookApi.shareFB(i,s)})()}}},c=o,g=s("17cc"),p=Object(g["a"])(c,t,e,!1,null,"1abb7180",null);i["a"]=p.exports},"3f9a":function(a,i,s){"use strict";var t=function(){var a=this,i=a.$createElement,t=a._self._c||i;return t("div",{staticClass:"freebing-box"},[t("div",{staticClass:"freebing-title"},[a._v("Ongoing Freebies")]),t("div",{staticClass:"freebing-container"},[t("div",{staticClass:"good-box"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s("8979"),expression:"require('./../../assets/images/good-mini.png')"}],staticClass:"good-img"}),t("div",{staticClass:"good-detail"},[t("p",{staticClass:"good-title"},[a._v(a._s(a.spuBargainItem.title))]),t("div",{staticClass:"progress"},[t("img",{attrs:{src:s("ae4a"),width:"65%"}}),t("div",{staticClass:"progress-content"},[t("span",[a._v("has been cut "+a._s(a.spuBargainItem.bargain_coin))]),t("span",[a._v("65%")])])]),t("div",{staticClass:"count-down"},[t("span",{staticClass:"time"},[a._v(a._s(a.expirationDat.h))]),a._v("\n          :\n          "),t("span",{staticClass:"time"},[a._v(a._s(a.expirationDat.p))]),a._v("\n          :\n          "),t("span",{staticClass:"time"},[a._v(a._s(a.expirationDat.m))]),t("span",{staticClass:"dec"},[a._v("overdued")])]),t("div",{staticClass:"goods-control"},[t("a",{staticClass:"button-l",attrs:{href:"javascrip:;"},on:{click:a.cashBack}},[a._v("\n            Cash Back\n          ")]),t("a",{staticClass:"button-r",attrs:{href:"javascrip:;"},on:{click:a.jumpBargain}},[a._v("Go On")])])])]),t("a",{staticClass:"freebing-more",attrs:{href:"javascript:;"},on:{click:function(i){return a.$router.push({path:"/isBargainingList"})}}},[a._v("More About >")])]),t("dialog-sharing-friends",{attrs:{dialogVisible:a.dialogs.sharingFriends,shareInfo:a.shareInfo},on:{"update:dialogVisible":function(i){return a.$set(a.dialogs,"sharingFriends",i)},"update:dialog-visible":function(i){return a.$set(a.dialogs,"sharingFriends",i)}}})],1)},e=[],n=s("0348"),r=s("28fd"),o=s("5616"),c={name:"aCommodityThatIsBeingBargained",components:{dialogSharingFriends:r["a"]},props:{spuBargainItem:{type:Object,default(){return{spu_id:1,title:"mock",bargain_rate:1,bargain_coin:"mock",expire_time:"mock",bargain_id:"mock"}}}},data(){return{expirationDat:{h:"00",p:"00",m:"00"},dialogs:{sharingFriends:{show:!1}},shareInfo:{shareUrl:window.location.origin+"/forBargain",shareTitle:"分享标题",shareDescription:"分享的描述",shareImage:"https://s.pinimg.com/images/facebook_share_image.png",quote:"FB随分享的链接一同显示的引文可由用户自行高亮选择，也可由开发者预先定义（例如文章的醒目引文）"}}},created(){this.init()},methods:{init(){this.refreshTime()},refreshTime(){let a=this.expiration(this.spuBargainItem.expire_time);if(!a)return;const i=setInterval(()=>{this.expiration(this.spuBargainItem.expire_time)},1e3);this.$once("hook:beforeDestroy",()=>{clearInterval(i)})},expiration(a){if(isNaN(a))return!1;let i=new Date(a),s=+new Date,t=i-s,e=Math.floor(t/36e5);e=e<10?"0"+e:e;let n=Math.floor((t-36e5*e)/6e4);n=n<10?"0"+n:n;let r=t-36e5*e-6e4*n;return r=r<10?"0"+r:r,this.expirationDat={h:e,p:n,m:r},!0},cashBack(){var a=this;return Object(n["a"])(function*(){let i=yield Object(o["a"])({bargain_id:a.spuBargainItem.bargain_id});i&&(a.shareInfo=i.data.share_info,a.dialogs.sharingFriends.show=!0)})()},jumpBargain(){this.$router.push({path:"/bargain",query:{spuId:this.spuBargainItem.spu_id,bargainId:this.spuBargainItem.bargain_id}})}}},g=c,p=(s("4e46"),s("17cc")),l=Object(p["a"])(g,t,e,!1,null,"49a3bf9c",null);i["a"]=l.exports},"4e46":function(a,i,s){"use strict";var t=s("c7c8"),e=s.n(t);e.a},5616:function(a,i,s){"use strict";s.d(i,"b",function(){return e}),s.d(i,"a",function(){return n});var t=s("007a");function e(a){let i=a.spu_id;return t["a"].get({url:"/api/v1/share/shareSpu",data:{spu_id:i}})}function n(a){let i=a.bargain_id;return t["a"].post({url:"/api/v1/share/shareBargain",data:{bargain_id:i}})}},8979:function(a,i,s){a.exports=s.p+"img/good-mini.ab18644c.png"},ae4a:function(a,i){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZQAAAAsCAMAAAB19b4+AAABLFBMVEUAAAD1SwHWEQX2XRraKB3kKgTyURfkORvjMRHuPgPmOBL2TQTZKB7sPwr1SwH2UAnZJhzZIxn2XBn1SwHZKB7ZIxn2Ug3VEAXZJx3VEAX2UQvYIBbVEAX2XRv2XRvVEAX1SwH2XRrZKB7zRgHoMAPxQgHbGgTfLx7eHwTcLB3lLAPvPwLtSxvjKAPuOwLXEgXWFwzgNB3YFAbwTxziNx7xUxznQB3XGhDlPBz1TQTZFwT2VQ/1UgrsOQLpNAPyVRzfIgTcHAXzVxvpRR3YIRf0WRvrRx3qNgLhJgPpQhzZJhz1TwfjOh72WBTZJRrhJQTgIwTrNwLYHxXXHRPlNxPhMBbySw3cJhbyTxPpPBHrQhP2VxLlMQrfKRLtSBTgKgzwRgruQgrbIg70VRV+VPnYAAAAH3RSTlMAZmZmZmZlZg5mNdn2Ie6DTdS+u7GJTbOdx5538uXw+e/bWwAACMxJREFUeNrF23lX2kAUBfCu1rq02rp0rxUEwirggrYquKHWqtUsJGX3+3+HGsmFO43pHITE9+e0R895P2/ezEAe/VujU7Pz05++otYXnTr52q1LrO1jxfVfqZYXUcvCusfyCZbXheWzxUXltoxcLrd5U5HbqmWd0mKxWLFYvLg4Pz86OqoW1jp1HI+HUdvb5aRT+UTarkSnlnbs2r0pPdSphU59/4Za4Ppx9/LP7vIGL290l38scN0uffn85sPI5KP/19TMhFePpO08u7ud+xLCMw9CcRkmSolNIlHHZKXBJikVJiqbbFswqQsmOkx2uyahBRvGq52o78LyHyz/wopMFoTjj0f/QzKNHvVah+ojER7Lcm0mvBSXYWIIJjWYZItsUoXJcZVNyjDJt9hkaRUmFZgMloiftOop+0uQffXag2Vy5q6nhlNX923nFSXiHs86LCsICptENMdkpcYmKRUmJptsWzBJCiZNmOxSTtyJcLfzT5+JcMky4fjcnTGZkPTIMzzy0SHRlj7rrhSUYNKGyUqRTeIwOa6ySRkm+RabLFUck4NOUKidgyfCLQtC97Putdvko2QeeLRzgOkPWfn0z3SD0maTkgYTjU1SKkyOBRMTJnnBpAmTgwXKCRIhaedQp/+bUZeJ5K9/gM2UTFv+rFNQETaJwWTlnE3iBcdkT2WTch0mdTZZqsDk2ja5Vzslzzrp9MdP/kflmWQeDHsz1Rdh5gwmBgWlVKrBRGOTlAqTY8HEhEk+wSYhmBzoyEm/m6nBn3X4yW/YZGxCMg8G30zd/1mX6QYlWmKTGExWGmySKjgmeyqblOswqbPJUgUmdlCGsZnqj/CfX0hzZXRa0qPhbKbud9LJZAyYGGxSqsFEFUyqtsktimCyBZN8i02WYHKgIycDbqbu96zDTx7roszK/vqHu5mSEwomOZhES2wSg8lKg01SJkxMNvltwUQXTHSYHIBDspnybfp3FsZhMjkhmQdD3kzJn3VsktmHiSGY1GCycs4mVZjsCSZbMMk32WTpGiY/kJMhXqXITzpuv6cOyjtZj4a9mZJOfzbJwSTaZpOYBhONTeImTCw2+W3BpCKY6DA5QHMk7fRt+uMnfx7tTJQJ2TwY7mZKftJhk8wlTJQIm7RhcnrEJnGY7KlssgWT1SZMEJRbErv3lJPBN1P9nXQ4giO0HZbNA3d4/L82ztgFk6jBJjENJppgosLkWDBpwSQvmOgwQe8l7fTr2pg34G9vUWZk80DSTn+ujWGyDpOoYFKEyWmDTDpB2bPLZJOtumOyqrNJqAKT6wU7KdLNlG/XxhzBUX567fd3cPT32hgmOQMmBpvENJiogokKk71tNmnBZHWJTUIwsXsfkjxgfL02Zqg5++Ao65EkEf5cG8OkBJNoiU1iMDltsEm84JgcmmyyVYeJLphUYIImSxLhx7WxG+o1RsoAB0efro0zTlBgYggmNZicCiZVmBxus0kaJqtNMnGC4rQiFMhVilvWHcG3dHKUzgP5Zmp40x8mmzCJttkkloWJxiZxEyYWm2zVYVIRTHSYoPeSdvpybeyGGu+dUk76PDj6em0Mk5wBE0UwacCkkGKTKkwOy2yShslqk01C1zBBkwM9OP7yiuAroEjmQRCfwYOQTXIwibbZJKbBRGOTuAkTSzBpwaRCJp2goBWSdvp7bcwRFFECOTjKTzpngkk7iuqYICgwKaRg0gvK4U2ZbNILis4mdlAwn339DF5GyBtwoMxK5kEAn8Hz9GeTnAGTmhgUmKhsEldhYrFJLyirgskCTNBkyWbKv2tjHkrOTHkumQcBfAbPhGxSiqJKbHIOk0KVTcLHjsmhySbpOkx0Ngl9P6BW+P0ZvJvQA8rZfU1J54E7PL5dG1+RCQeFTYoaTFTBRIXJYZlNWjDZEUxCB9wKvw6OckJ3BD/YJ/p7HBx9uzZeJhMKSoxNLmBSqLJJ+NgxSVpskq7DpCKYVKgVw9pMDX5wtOvxo5uals0Dd3j8uja+ZJNNAyYGmxQbMCkIJipMkr/ZJAGTnaYkKJJ2+jT93REcs1Fmh/YNvMEPjmwSiaLabFJUYaKxSdiCicUmaR0mYlC4yUPaTA1+cMScv6mxoA6O8pMOm/SCogkmDZgU4mwShknShAkFZQdBCTl1Ta2QJMLfa2OG4u/kTff5DTz/ro3ZJIKDY7bGJkUVJqpgYsKkzibpJkxWBRNdEhSfv4H303sDvjHZQZnq8+Do27Uxm2y2YRKNsUkDJmvxngmCkrSDwiaJimOyU4EJgoImB/QZvPyDFOy9nHovPTjyml/Xxso6m2wqjkm2xiYXGkxMwcSESbLMJi2Y7ITYBN10HxyD/QaeO4L6JFDG+jo4+nRtrCwKJiWYZGNscgSTtSqbhC2YWGyS0GFSYRN3kwffTA1+cMREQX38+uCvbinKJZtEDJjU2ORCg0lBMDFhktxikxZMdppk4tlkwnqgg+Nb/jbx/IO9urUOEyXHJiWYZItscn7qmCAoYScoMLHIhINCJiGhyYNspoZ+cHw1Kbzp+P6hXt06g4nBJhEDJppgosGkIJiYMEmm2SQBk12dTNxNDvjVLU+oV2PwgMoDvboFE2WZTSIwyTbY5Eh1TNZUNglbMKkLJjpMrsnEo8lBv7rl/oUwYZX5h3l1CyZngokBE00wacBkTTDZhknSZJMETHZ1MvGYz0G/uuWO4DhMuJ58Cv7VrWWYKOtsEoFJtsYmRypMVDYJWzCpCyZNmOwKJhseQQn+1S3egPOM55qcD/7VLZicCCZtmGQFkxRM1qpsUu4GpcUmiQpMKmTins/Bv7rljiC9h+qqsZmJYF/dgolSYpOIBpNaz8QOCkxMNtm2kqg0mzRh0guKx9PowV7dQo2PEIK7Rp/ZLgG+uqV0SjBpwyRbZJMUTNaqbNJFybdg0gvKLgfF3eQHf3Xrpt68pmHiDTM29aRXz1BYCGD5Beo514u7l1+OoF5y9ZYfC/UU9VisEY9/GO7yiPgL5+Ym7wD4C0kmNjtyKs2QAAAAAElFTkSuQmCC"},c7c8:function(a,i,s){}}]);