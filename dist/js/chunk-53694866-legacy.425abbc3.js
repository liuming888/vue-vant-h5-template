(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-53694866"],{"8fcf":function(t,a,e){"use strict";var r=e("f826");e.n(r).a},f6b6:function(t,a,e){"use strict";e.r(a);var r={name:"userPickingUpMessage",props:{messageList:{type:Array,default:[]}},data:function(){return{curIdx:0}},computed:{curDat:function(){return this.messageList[this.curIdx]}},mounted:function(){var t=this,a=setInterval(function(){t.curIdx=~~(Math.random()*t.messageList.length)},6e3);this.$once("hook:beforeDestroy",function(){clearInterval(a)})}},s=(e("8fcf"),e("17cc")),n=Object(s.a)(r,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"home-top-msg"},[a("div",{staticClass:"info-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.curDat&&this.curDat.avatar,expression:"curDat&&curDat.avatar"}],staticClass:"home-top-msg-img"}),a("span",[this._v(this._s(this.curDat.content))])])])},[],!1,null,"59ff76f1",null);a.default=n.exports},f826:function(t,a,e){var r=e("fdab");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0,e("85cb").default)("1d49c937",r,!0,{sourceMap:!1,shadowMode:!1})},fdab:function(t,a,e){(t.exports=e("690e")(!1)).push([t.i,".home-top-msg[data-v-59ff76f1]{width:5.06667rem;height:.64rem;position:absolute;top:.28rem;left:0;margin:0 .30667rem;padding-right:.21333rem;line-height:.64rem;border-radius:.32rem;text-indent:.86667rem;color:#fff;font-size:.26667rem;background-color:hsla(0,0%,100%,.4);max-width:calc(100% - .82667rem);white-space:nowrap;z-index:10000}.home-top-msg[data-v-59ff76f1],.home-top-msg .info-box[data-v-59ff76f1]{overflow:hidden;text-overflow:ellipsis}.home-top-msg .info-box[data-v-59ff76f1]{width:100%;-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem);-webkit-animation:mes-data-v-59ff76f1 6s infinite;animation:mes-data-v-59ff76f1 6s infinite}.home-top-msg .info-box .home-top-msg-img[data-v-59ff76f1]{width:.50667rem;height:.50667rem;border-radius:50%;position:absolute;top:.06667rem;left:.21333rem}@-webkit-keyframes mes-data-v-59ff76f1{0%{-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem)}10%{-webkit-transform:translateY(0);transform:translateY(0)}90%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-.66667rem);transform:translateY(-.66667rem)}}@keyframes mes-data-v-59ff76f1{0%{-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem)}10%{-webkit-transform:translateY(0);transform:translateY(0)}90%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-.66667rem);transform:translateY(-.66667rem)}}",""])}}]);