(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-54ba2f5e"],{"2b42":function(t,e,a){var r=a("e516");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0,a("499e").default)("161d9114",r,!0,{sourceMap:!1,shadowMode:!1})},dbfe:function(t,e,a){"use strict";var r=a("2b42");a.n(r).a},dd75:function(t,e,a){"use strict";a.r(e);var r={name:"userOrderMessage",props:{messageList:{type:Array,default:[]}},data:()=>({curIdx:0}),computed:{curDat(){return this.messageList[this.curIdx]}},mounted(){const t=setInterval(()=>{this.curIdx=~~(Math.random()*this.messageList.length)},6e3);this.$once("hook:beforeDestroy",()=>{clearInterval(t)})}},s=(a("dbfe"),a("2877")),n=Object(s.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-top-msg"},[e("div",{staticClass:"info-box"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.curDat&&this.curDat.avatar,expression:"curDat&&curDat.avatar"}],staticClass:"home-top-msg-img"}),e("span",[this._v(this._s(this.curDat.content))])])])},[],!1,null,"62c7de45",null);e.default=n.exports},e516:function(t,e,a){(t.exports=a("2350")(!1)).push([t.i,".home-top-msg[data-v-62c7de45]{height:.64rem;background:#e7d4d4;overflow:hidden}@-webkit-keyframes mes-data-v-62c7de45{0%{-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem)}10%{-webkit-transform:translateY(0);transform:translateY(0)}90%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-.66667rem);transform:translateY(-.66667rem)}}@keyframes mes-data-v-62c7de45{0%{-webkit-transform:translateY(.66667rem);transform:translateY(.66667rem)}10%{-webkit-transform:translateY(0);transform:translateY(0)}90%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-.66667rem);transform:translateY(-.66667rem)}}.home-top-msg .info-box[data-v-62c7de45]{height:.64rem;padding-left:.56rem;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:.26667rem;font-family:Helvetica;font-weight:400;color:#33201f;-webkit-animation:mes-data-v-62c7de45 6s infinite;animation:mes-data-v-62c7de45 6s infinite}.home-top-msg .info-box .home-top-msg-img[data-v-62c7de45]{width:.50667rem;height:.50667rem;border-radius:50%;margin-right:.14667rem}",""])}}]);