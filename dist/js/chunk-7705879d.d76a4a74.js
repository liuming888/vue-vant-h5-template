(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7705879d"],{1933:function(e,t,a){var i=a("7253");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,a("85cb4").default)("a8d371ae",i,!0,{sourceMap:!1,shadowMode:!1})},"3f73":function(e,t,a){"use strict";a.r(t),a("4e5b");var i=a("2774"),o=a("0348"),n=a("3007"),r={name:"dialogLoginSelect",data:()=>({reward_amount:1}),created(){let e=window.localStorage.getItem("newUserInfo"),t=e?JSON.parse(e):{};this.reward_amount=t.reward_amount||8888},methods:{close(){this.$store.commit("setNewGiftBagShow",!1)},goReceive(){var e=this;return Object(o.a)(function*(){let t=yield Object(n.f)();t&&t.data&&(i.a.alert({message:"Anda telah berhasil menerima paket hadiah baru",confirmButtonText:"Tentukan"}),window.localStorage.removeItem("newUserInfo"),e.$store.commit("setNewGiftBagShow",!1))})()}}},s=(a("9456"),a("17cc")),l=Object(s.a)(r,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dialogLoginSelect-container"},[i("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:a("e89a"),expression:"require('@/assets/images/xinrenlibao.png')",arg:"background-image"}],staticClass:"dialog-content"},[i("div",{staticClass:"tit"},[e._v("Newcomer Gift Bag")]),i("div",{staticClass:"num"},[i("span",{staticClass:"dw"},[e._v("Rp")]),e._v(e._s(e.reward_amount))]),i("div",{staticClass:"receive",on:{click:e.goReceive}},[e._v("Receive")]),i("img",{staticClass:"close-img",attrs:{src:a("6eff")},on:{click:e.close}})])])},[],!1,null,"e45a6300",null);t.default=l.exports},"4e5b":function(e,t,a){"use strict";a("36d9"),a("2bf8"),a("1933")},"5d9c":function(e,t,a){var i=a("e4a8");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,a("85cb").default)("bf9a6e38",i,!0,{sourceMap:!1,shadowMode:!1})},"6eff":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAXVBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzQDM+LAAAAHnRSTlMAya/D3uvXZF2nPo/yGw34lBQJS+UmMrmHd2xVRDYH+mWiAAACHklEQVRYw62Y2ZqCMAyFTyt7AQFx177/Y04zg6NICVv+C/mkeEzTJqQBwzOptArCPA8DpavkieUUcdraL9o0LrCEQ5rbjrwNgvb/2z49YC6J+vuJMrfsWDdAUx+zm1F7S6hkniXqV0MnxWCiif5VUtMWFSk9GFyLkeFrQOPphI/uIYncwHAjofAOBmMdlwYszYWeMhhF08RPmORE7jvDT6kGf8KaHZVelcgNxZhJPKZDKg/M5kE6GHB2tzMsIPP5xzC2MPaYr63L+IX1z6HnXrfJKyymckFT9jdMhOXQsui+t45YwbG3LoGLAKzi8jGNuws1rMSF8v09wxgrif/NyXhjps3JXst0xWqu3WKVzts1VlN3eychuSHP3WA/pueTP0kl3cW/sxR6KM8efZsR+ueU2i8dRancP6sQONHTHpod6fRVlC9L08gJ8WhQqk+dl6g/QGMY+hjX2U2qkCEGmkl6O9KZUkFGPlYU3KxOd+HCXCGweQ1WR2tWBXVuA7febQNeh1dB07oVJykOTSoaDDQhIRmhSUm4eG8DoQUX2H4PZ7BQMAiFplCi2J62CkpbMkmUSenndFFKL/fbXzAyrzuhl69MKSBbmCDaVCYJFW0yJaRQQStTXksV+/JHDyIamMhCbojkjmX+Q2I1e42sKiWOrHrqAF1uOEBvOM5vaS7Itzr4xotV1WfjpXrdTYTbQPJNKb5FZt4tMsO2yH4Ard5PekYm0V4AAAAASUVORK5CYII="},7253:function(e,t,a){(e.exports=a("690ed")(!1)).push([e.i,".van-dialog{position:fixed;top:50%;left:50%;width:85%;font-size:16px;overflow:hidden;-webkit-transition:.3s;transition:.3s;border-radius:4px;background-color:#fff;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.van-dialog__header{font-weight:500;padding-top:25px;text-align:center}.van-dialog__header--isolated{padding:25px 0}.van-dialog__message{padding:25px;font-size:14px;line-height:1.5;max-height:60vh;overflow-y:auto;text-align:center;-webkit-overflow-scrolling:touch;white-space:pre-wrap}.van-dialog__message--has-title{padding-top:12px;color:#7d7e80}.van-dialog__message--left{text-align:left}.van-dialog__message--right{text-align:right}.van-dialog__footer{overflow:hidden;-webkit-user-select:none;user-select:none}.van-dialog__footer--buttons{display:-webkit-box;display:-webkit-flex;display:flex}.van-dialog__footer--buttons .van-button{-webkit-box-flex:1;-webkit-flex:1;flex:1}.van-dialog .van-button{border:0}.van-dialog__confirm,.van-dialog__confirm:active{color:#1989fa}.van-dialog-bounce-enter{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7)}.van-dialog-bounce-leave-active{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9)}",""])},9456:function(e,t,a){"use strict";var i=a("5d9c");a.n(i).a},e4a8:function(e,t,a){(e.exports=a("690e")(!1)).push([e.i,".dialogLoginSelect-container[data-v-e45a6300]{width:100vw;height:100vh;background:rgba(0,0,0,.5);position:fixed;top:0;left:0;z-index:100;padding-top:2.66667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.dialogLoginSelect-container .dialog-content[data-v-e45a6300]{width:7.94667rem;height:6.96rem;background-size:100% 100%;position:relative;padding-top:3.73333rem;box-sizing:border-box;text-align:center}.dialogLoginSelect-container .dialog-content .close-img[data-v-e45a6300]{display:block;width:.93333rem;height:auto;position:absolute;bottom:-3.04rem;left:0;right:0;margin:0 auto}.dialogLoginSelect-container .dialog-content .receive[data-v-e45a6300]{width:6.05333rem;height:1.14667rem;background:#ffc21f;border-radius:.57333rem;position:absolute;bottom:-1.57333rem;left:0;right:0;margin:0 auto;font-size:.45333rem;font-weight:700;color:#ac2d20;text-align:center;line-height:1.14667rem}.dialogLoginSelect-container .dialog-content .tit[data-v-e45a6300]{font-size:.32rem;color:#e5e8ee;margin-bottom:.26667rem}.dialogLoginSelect-container .dialog-content .num[data-v-e45a6300]{font-size:1.06667rem;color:gold}.dialogLoginSelect-container .dialog-content .num .dw[data-v-e45a6300]{font-size:.26667rem;position:relative;top:-.66667rem}",""])},e89a:function(e,t,a){e.exports=a.p+"img/xinrenlibao.7580f8c7.png"}}]);