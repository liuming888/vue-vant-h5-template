(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b124237a"],{"68f7":function(t,a,e){a=t.exports=e("690e")(!1),a.push([t.i,".home-top-msg[data-v-b221a470]{height:.64rem;background:#e7d4d4;overflow:hidden}@-webkit-keyframes mes-data-v-b221a470{0%{-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem)}10%{-webkit-transform:translateY(0);transform:translateY(0)}90%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-.66667rem);transform:translateY(-.66667rem)}}@keyframes mes-data-v-b221a470{0%{-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem)}10%{-webkit-transform:translateY(0);transform:translateY(0)}90%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-.66667rem);transform:translateY(-.66667rem)}}.home-top-msg .info-box[data-v-b221a470]{height:.64rem;padding-left:.56rem;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:.26667rem;font-family:Helvetica;font-weight:400;color:#33201f;-webkit-animation:mes-data-v-b221a470 6s infinite;animation:mes-data-v-b221a470 6s infinite}.home-top-msg .info-box .home-top-msg-img[data-v-b221a470]{width:.50667rem;height:.50667rem;border-radius:50%;margin-right:.14667rem}",""])},b1fb:function(t,a,e){"use strict";var r=e("dd66"),s=e.n(r);s.a},dd66:function(t,a,e){var r=e("68f7");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var s=e("85cb").default;s("f0d16db4",r,!0,{sourceMap:!1,shadowMode:!1})},dd75:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home-top-msg"},[e("div",{staticClass:"info-box"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.curDat&&t.curDat.avatar,expression:"curDat&&curDat.avatar"}],staticClass:"home-top-msg-img"}),e("span",[t._v(t._s(t.curDat.content))])])])},s=[],n={name:"userOrderMessage",props:{messageList:{type:Array,default:[]}},data:function(){return{curIdx:0}},computed:{curDat:function(){return this.messageList[this.curIdx]}},mounted:function(){var t=this,a=setInterval(function(){t.curIdx=~~(Math.random()*t.messageList.length)},6e3);this.$once("hook:beforeDestroy",function(){clearInterval(a)})}},i=n,o=(e("b1fb"),e("17cc")),m=Object(o["a"])(i,r,s,!1,null,"b221a470",null);a["default"]=m.exports}}]);