(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b37831ea"],{"09fd":function(t,a,e){"use strict";var r=e("7a3a"),s=e.n(r);s.a},"7a3a":function(t,a,e){var r=e("b830");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var s=e("85cb").default;s("4534a093",r,!0,{sourceMap:!1,shadowMode:!1})},b830:function(t,a,e){a=t.exports=e("690e")(!1),a.push([t.i,".home-top-msg[data-v-9c0e62a8]{width:5.06667rem;height:.64rem;position:absolute;top:.28rem;left:100vw;margin:0 .30667rem;padding-right:.21333rem;height:48px;line-height:.64rem;border-radius:.32rem;text-indent:.86667rem;color:#fff;font-size:.26667rem;background-color:hsla(0,0%,100%,.4);max-width:calc(100% - .82667rem);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;z-index:9999}.home-top-msg .info-box[data-v-9c0e62a8]{-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem);-webkit-animation:mes-data-v-9c0e62a8 6s infinite;animation:mes-data-v-9c0e62a8 6s infinite}.home-top-msg .info-box .home-top-msg-img[data-v-9c0e62a8]{width:.50667rem;height:.50667rem;border-radius:50%;position:absolute;top:.06667rem;left:.21333rem}@-webkit-keyframes mes-data-v-9c0e62a8{0%{-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem)}10%{-webkit-transform:translateY(0);transform:translateY(0)}90%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-.66667rem);transform:translateY(-.66667rem)}}@keyframes mes-data-v-9c0e62a8{0%{-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem)}10%{-webkit-transform:translateY(0);transform:translateY(0)}90%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-.66667rem);transform:translateY(-.66667rem)}}",""])},f6b6:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home-top-msg"},[e("div",{staticClass:"info-box"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.curDat&&t.curDat.avatar,expression:"curDat&&curDat.avatar"}],staticClass:"home-top-msg-img"}),e("span",[t._v(t._s(t.curDat&&t.curDat.username)+" got a freebie just now")])])])},s=[],n={name:"userPickingUpMessage",props:{messageList:{type:Array,default:[]}},data:function(){return{curIdx:0}},computed:{curDat:function(){return this.messageList[this.curIdx]}},mounted:function(){var t=this,a=setInterval(function(){t.curIdx=~~(Math.random()*t.messageList.length)},6e3);this.$once("hook:beforeDestroy",function(){clearInterval(a)})}},o=n,i=(e("09fd"),e("17cc")),m=Object(i["a"])(o,r,s,!1,null,"9c0e62a8",null);a["default"]=m.exports}}]);