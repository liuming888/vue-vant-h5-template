(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b37831ea"],{"09fd":function(t,a,e){"use strict";var r=e("7a3a");e.n(r).a},"7a3a":function(t,a,e){var r=e("b830");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0,e("85cb").default)("4534a093",r,!0,{sourceMap:!1,shadowMode:!1})},b830:function(t,a,e){(t.exports=e("690e")(!1)).push([t.i,".home-top-msg[data-v-9c0e62a8]{width:5.06667rem;height:.64rem;position:absolute;top:.28rem;left:100vw;margin:0 .30667rem;padding-right:.21333rem;height:48px;line-height:.64rem;border-radius:.32rem;text-indent:.86667rem;color:#fff;font-size:.26667rem;background-color:hsla(0,0%,100%,.4);max-width:calc(100% - .82667rem);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;z-index:9999}.home-top-msg .info-box[data-v-9c0e62a8]{-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem);-webkit-animation:mes-data-v-9c0e62a8 6s infinite;animation:mes-data-v-9c0e62a8 6s infinite}.home-top-msg .info-box .home-top-msg-img[data-v-9c0e62a8]{width:.50667rem;height:.50667rem;border-radius:50%;position:absolute;top:.06667rem;left:.21333rem}@-webkit-keyframes mes-data-v-9c0e62a8{0%{-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem)}10%{-webkit-transform:translateY(0);transform:translateY(0)}90%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-.66667rem);transform:translateY(-.66667rem)}}@keyframes mes-data-v-9c0e62a8{0%{-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem)}10%{-webkit-transform:translateY(0);transform:translateY(0)}90%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-.66667rem);transform:translateY(-.66667rem)}}",""])},f6b6:function(t,a,e){"use strict";e.r(a);var r={name:"userPickingUpMessage",props:{messageList:{type:Array,default:[]}},data:()=>({curIdx:0}),computed:{curDat(){return this.messageList[this.curIdx]}},mounted(){const t=setInterval(()=>{this.curIdx=~~(Math.random()*this.messageList.length)},6e3);this.$once("hook:beforeDestroy",()=>{clearInterval(t)})}},s=(e("09fd"),e("17cc")),n=Object(s.a)(r,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"home-top-msg"},[a("div",{staticClass:"info-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.curDat&&this.curDat.avatar,expression:"curDat&&curDat.avatar"}],staticClass:"home-top-msg-img"}),a("span",[this._v(this._s(this.curDat&&this.curDat.username)+" got a freebie just now")])])])},[],!1,null,"9c0e62a8",null);a.default=n.exports}}]);