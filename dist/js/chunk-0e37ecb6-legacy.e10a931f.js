(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0e37ecb6"],{"29ac":function(e,t,a){(e.exports=a("2350")(!1)).push([e.i,".van-dialog{position:fixed;top:50%;left:50%;width:85%;font-size:16px;overflow:hidden;-webkit-transition:.3s;transition:.3s;border-radius:4px;background-color:#fff;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.van-dialog__header{font-weight:500;padding-top:25px;text-align:center}.van-dialog__header--isolated{padding:25px 0}.van-dialog__message{padding:25px;font-size:14px;line-height:1.5;max-height:60vh;overflow-y:auto;text-align:center;-webkit-overflow-scrolling:touch;white-space:pre-wrap}.van-dialog__message--has-title{padding-top:12px;color:#7d7e80}.van-dialog__message--left{text-align:left}.van-dialog__message--right{text-align:right}.van-dialog__footer{overflow:hidden;-webkit-user-select:none;user-select:none}.van-dialog__footer--buttons{display:-webkit-box;display:-webkit-flex;display:flex}.van-dialog__footer--buttons .van-button{-webkit-box-flex:1;-webkit-flex:1;flex:1}.van-dialog .van-button{border:0}.van-dialog__confirm,.van-dialog__confirm:active{color:#1989fa}.van-dialog-bounce-enter{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7)}.van-dialog-bounce-leave-active{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9)}",""])},"2fcb":function(e,t,a){var i=a("29ac");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,a("499e").default)("273c6727",i,!0,{sourceMap:!1,shadowMode:!1})},"3f73":function(e,t,a){"use strict";a.r(t),a("e17f");var i=a("2241"),o=(a("96cf"),a("3b8d")),n=a("3007"),r={name:"dialogLoginSelect",data:function(){return{reward_amount:1}},created:function(){var e=window.localStorage.getItem("newUserInfo"),t=e?JSON.parse(e):{};this.reward_amount=t.reward_amount||8888},methods:{close:function(){this.$store.commit("setNewGiftBagShow",!1)},goReceive:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(n.f)();case 2:(t=e.sent)&&t.data&&(i.a.alert({message:"You have successfully received a new gift package",confirmButtonText:"ok"}),window.localStorage.removeItem("newUserInfo"),this.$store.commit("setNewGiftBagShow",!1));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},s=(a("e38f"),a("2877")),l=Object(s.a)(r,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dialogLoginSelect-container"},[i("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:a("e89a"),expression:"require('@/assets/images/xinrenlibao.png')",arg:"background-image"}],staticClass:"dialog-content"},[i("div",{staticClass:"tit"},[e._v("Newcomer Gift Bag")]),i("div",{staticClass:"num"},[i("span",{staticClass:"dw"},[e._v("Rp")]),e._v(e._s(e.reward_amount))]),i("div",{staticClass:"receive",on:{click:e.goReceive}},[e._v("Receive")]),i("img",{staticClass:"close-img",attrs:{src:a("6eff")},on:{click:e.close}})])])},[],!1,null,"3093716e",null);t.default=l.exports},"5e63":function(e,t,a){(e.exports=a("2350")(!1)).push([e.i,".dialogLoginSelect-container[data-v-3093716e]{width:100vw;height:100vh;background:rgba(0,0,0,.5);position:fixed;top:0;left:0;z-index:10000;padding-top:2.4rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.dialogLoginSelect-container .dialog-content[data-v-3093716e]{width:7.94667rem;height:6.96rem;background-size:100% 100%;position:relative;padding-top:3.73333rem;box-sizing:border-box;text-align:center}.dialogLoginSelect-container .dialog-content .close-img[data-v-3093716e]{display:block;width:.93333rem;height:auto;position:absolute;bottom:-3.33333rem;left:0;right:0;margin:0 auto}.dialogLoginSelect-container .dialog-content .receive[data-v-3093716e]{width:6.05333rem;height:1.14667rem;background:#ffc21f;border-radius:.57333rem;position:absolute;bottom:-1.6rem;left:0;right:0;margin:0 auto;font-size:.45333rem;font-weight:700;color:#ac2d20;text-align:center;line-height:1.14667rem}.dialogLoginSelect-container .dialog-content .tit[data-v-3093716e]{font-size:.32rem;color:#e5e8ee;margin-bottom:.26667rem;padding-left:.26667rem}.dialogLoginSelect-container .dialog-content .num[data-v-3093716e]{font-size:1.06667rem;font-weight:600;color:gold}.dialogLoginSelect-container .dialog-content .num .dw[data-v-3093716e]{font-size:.26667rem;position:relative;top:-.66667rem}",""])},"6eff":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAXVBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzQDM+LAAAAHnRSTlMAya/D3uvXZF2nPo/yGw34lBQJS+UmMrmHd2xVRDYH+mWiAAACHklEQVRYw62Y2ZqCMAyFTyt7AQFx177/Y04zg6NICVv+C/mkeEzTJqQBwzOptArCPA8DpavkieUUcdraL9o0LrCEQ5rbjrwNgvb/2z49YC6J+vuJMrfsWDdAUx+zm1F7S6hkniXqV0MnxWCiif5VUtMWFSk9GFyLkeFrQOPphI/uIYncwHAjofAOBmMdlwYszYWeMhhF08RPmORE7jvDT6kGf8KaHZVelcgNxZhJPKZDKg/M5kE6GHB2tzMsIPP5xzC2MPaYr63L+IX1z6HnXrfJKyymckFT9jdMhOXQsui+t45YwbG3LoGLAKzi8jGNuws1rMSF8v09wxgrif/NyXhjps3JXst0xWqu3WKVzts1VlN3eychuSHP3WA/pueTP0kl3cW/sxR6KM8efZsR+ueU2i8dRancP6sQONHTHpod6fRVlC9L08gJ8WhQqk+dl6g/QGMY+hjX2U2qkCEGmkl6O9KZUkFGPlYU3KxOd+HCXCGweQ1WR2tWBXVuA7febQNeh1dB07oVJykOTSoaDDQhIRmhSUm4eG8DoQUX2H4PZ7BQMAiFplCi2J62CkpbMkmUSenndFFKL/fbXzAyrzuhl69MKSBbmCDaVCYJFW0yJaRQQStTXksV+/JHDyIamMhCbojkjmX+Q2I1e42sKiWOrHrqAF1uOEBvOM5vaS7Itzr4xotV1WfjpXrdTYTbQPJNKb5FZt4tMsO2yH4Ard5PekYm0V4AAAAASUVORK5CYII="},e17f:function(e,t,a){"use strict";a("68ef"),a("4d75"),a("2fcb")},e38f:function(e,t,a){"use strict";var i=a("f669");a.n(i).a},e89a:function(e,t,a){e.exports=a.p+"img/xinrenlibao.7580f8c7.png"},f669:function(e,t,a){var i=a("5e63");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,a("499e").default)("e6cb1616",i,!0,{sourceMap:!1,shadowMode:!1})}}]);