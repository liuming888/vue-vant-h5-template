(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01a4969e"],{"427a":function(t,e,a){var r=a("f083");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var s=a("499e").default;s("651265d2",r,!0,{sourceMap:!1,shadowMode:!1})},d89c:function(t,e,a){"use strict";var r=a("427a"),s=a.n(r);s.a},f083:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".home-top-msg[data-v-debc7890]{width:5.06667rem;height:.64rem;position:absolute;top:.28rem;left:100vw;margin:0 .30667rem;padding-right:.21333rem;height:48px;line-height:.64rem;border-radius:.32rem;text-indent:.86667rem;color:#fff;font-size:.26667rem;background-color:hsla(0,0%,100%,.4);max-width:calc(100% - .82667rem);white-space:nowrap;z-index:9999}.home-top-msg[data-v-debc7890],.home-top-msg .info-box[data-v-debc7890]{overflow:hidden;text-overflow:ellipsis}.home-top-msg .info-box[data-v-debc7890]{width:100%;-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem);-webkit-animation:mes-data-v-debc7890 6s infinite;animation:mes-data-v-debc7890 6s infinite}.home-top-msg .info-box .home-top-msg-img[data-v-debc7890]{width:.50667rem;height:.50667rem;border-radius:50%;position:absolute;top:.06667rem;left:.21333rem}@-webkit-keyframes mes-data-v-debc7890{0%{-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem)}10%{-webkit-transform:translateY(0);transform:translateY(0)}90%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-.66667rem);transform:translateY(-.66667rem)}}@keyframes mes-data-v-debc7890{0%{-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem)}10%{-webkit-transform:translateY(0);transform:translateY(0)}90%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-.66667rem);transform:translateY(-.66667rem)}}",""])},f6b6:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-top-msg"},[a("div",{staticClass:"info-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.curDat&&t.curDat.avatar,expression:"curDat&&curDat.avatar"}],staticClass:"home-top-msg-img"}),a("span",[t._v(t._s(t.curDat.content))])])])},s=[],n={name:"userPickingUpMessage",props:{messageList:{type:Array,default:[]}},data(){return{curIdx:0}},computed:{curDat(){return this.messageList[this.curIdx]}},mounted(){const t=setInterval(()=>{this.curIdx=~~(Math.random()*this.messageList.length)},6e3);this.$once("hook:beforeDestroy",()=>{clearInterval(t)})}},o=n,i=(a("d89c"),a("2877")),m=Object(i["a"])(o,r,s,!1,null,"debc7890",null);e["default"]=m.exports}}]);