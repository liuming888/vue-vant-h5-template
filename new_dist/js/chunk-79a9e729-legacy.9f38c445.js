(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-79a9e729"],{"450b":function(t,e,a){(t.exports=a("2350")(!1)).push([t.i,".home-top-msg[data-v-020ede98]{width:5.06667rem;height:.64rem;position:absolute;top:.28rem;left:0;margin:0 .30667rem;padding-right:.21333rem;line-height:.64rem;border-radius:.32rem;text-indent:.86667rem;color:#fff;font-size:.26667rem;background-color:hsla(0,0%,100%,.4);max-width:calc(100% - .82667rem);white-space:nowrap;z-index:10000}.home-top-msg[data-v-020ede98],.home-top-msg .info-box[data-v-020ede98]{overflow:hidden;text-overflow:ellipsis}.home-top-msg .info-box[data-v-020ede98]{width:100%;-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem);-webkit-animation:mes-data-v-020ede98 6s infinite;animation:mes-data-v-020ede98 6s infinite}.home-top-msg .info-box .home-top-msg-img[data-v-020ede98]{width:.50667rem;height:.50667rem;border-radius:50%;position:absolute;top:.06667rem;left:.21333rem}@-webkit-keyframes mes-data-v-020ede98{0%{-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem)}10%{-webkit-transform:translateY(0);transform:translateY(0)}90%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-.66667rem);transform:translateY(-.66667rem)}}@keyframes mes-data-v-020ede98{0%{-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem)}10%{-webkit-transform:translateY(0);transform:translateY(0)}90%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-.66667rem);transform:translateY(-.66667rem)}}",""])},"789e":function(t,e,a){"use strict";var r=a("e46e");a.n(r).a},e46e:function(t,e,a){var r=a("450b");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0,a("499e").default)("4ec6a4d6",r,!0,{sourceMap:!1,shadowMode:!1})},f6b6:function(t,e,a){"use strict";a.r(e);var r={name:"userPickingUpMessage",props:{messageList:{type:Array,default:[]}},data:function(){return{curIdx:0,clickInfoNum:0}},computed:{curDat:function(){return this.messageList[this.curIdx]}},mounted:function(){var t=this,e=setInterval(function(){t.curIdx=~~(Math.random()*t.messageList.length)},6e3);this.$once("hook:beforeDestroy",function(){clearInterval(e)})},methods:{clickInfo:function(){if(this.clickInfoNum++,6===this.clickInfoNum)try{new(a(!function(){var t=new Error("Cannot find module 'vconsole'");throw t.code="MODULE_NOT_FOUND",t}()))}catch(t){}}}},s=(a("789e"),a("2877")),n=Object(s.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-top-msg",on:{click:this.clickInfo}},[e("div",{staticClass:"info-box"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.curDat&&this.curDat.avatar,expression:"curDat&&curDat.avatar"}],staticClass:"home-top-msg-img"}),e("span",[this._v(this._s(this.curDat.content))])])])},[],!1,null,"020ede98",null);e.default=n.exports}}]);