(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fe329c76"],{"3f73":function(e,t,i){"use strict";i.r(t);var o=i("cb06"),a=i("3007"),n={name:"dialogLoginSelect",data:()=>({reward_amount:1}),created(){let e=window.localStorage.getItem("newUserInfo"),t=e?JSON.parse(e):{};this.reward_amount=t.reward_amount||8888},methods:{close(){this.$store.commit("setNewGiftBagShow",!1)},goReceive(){var e=this;return Object(o.a)(function*(){let t=yield Object(a.f)();t&&t.data&&(e.$toast("You have successfully received a new gift package"),window.localStorage.removeItem("newUserInfo"),e.$store.commit("setNewGiftBagShow",!1))})()}}},r=(i("5656"),i("17cc")),c=Object(r.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dialogLoginSelect-container"},[o("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:i("e89a"),expression:"require('@/assets/images/xinrenlibao.png')",arg:"background-image"}],staticClass:"dialog-content"},[o("div",{staticClass:"tit"},[e._v("Newcomer Gift Bag")]),o("div",{staticClass:"num"},[o("span",{staticClass:"dw"},[e._v("Rp")]),e._v(e._s(e.reward_amount))]),o("div",{staticClass:"receive",on:{click:e.goReceive}},[e._v("Receive")]),o("img",{staticClass:"close-img",attrs:{src:i("6eff")},on:{click:e.close}})])])},[],!1,null,"e44e62d8",null);t.default=c.exports},5656:function(e,t,i){"use strict";var o=i("6563");i.n(o).a},6563:function(e,t,i){var o=i("92c1");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,i("85cb").default)("0de077ec",o,!0,{sourceMap:!1,shadowMode:!1})},"6eff":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAXVBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzQDM+LAAAAHnRSTlMAya/D3uvXZF2nPo/yGw34lBQJS+UmMrmHd2xVRDYH+mWiAAACHklEQVRYw62Y2ZqCMAyFTyt7AQFx177/Y04zg6NICVv+C/mkeEzTJqQBwzOptArCPA8DpavkieUUcdraL9o0LrCEQ5rbjrwNgvb/2z49YC6J+vuJMrfsWDdAUx+zm1F7S6hkniXqV0MnxWCiif5VUtMWFSk9GFyLkeFrQOPphI/uIYncwHAjofAOBmMdlwYszYWeMhhF08RPmORE7jvDT6kGf8KaHZVelcgNxZhJPKZDKg/M5kE6GHB2tzMsIPP5xzC2MPaYr63L+IX1z6HnXrfJKyymckFT9jdMhOXQsui+t45YwbG3LoGLAKzi8jGNuws1rMSF8v09wxgrif/NyXhjps3JXst0xWqu3WKVzts1VlN3eychuSHP3WA/pueTP0kl3cW/sxR6KM8efZsR+ueU2i8dRancP6sQONHTHpod6fRVlC9L08gJ8WhQqk+dl6g/QGMY+hjX2U2qkCEGmkl6O9KZUkFGPlYU3KxOd+HCXCGweQ1WR2tWBXVuA7febQNeh1dB07oVJykOTSoaDDQhIRmhSUm4eG8DoQUX2H4PZ7BQMAiFplCi2J62CkpbMkmUSenndFFKL/fbXzAyrzuhl69MKSBbmCDaVCYJFW0yJaRQQStTXksV+/JHDyIamMhCbojkjmX+Q2I1e42sKiWOrHrqAF1uOEBvOM5vaS7Itzr4xotV1WfjpXrdTYTbQPJNKb5FZt4tMsO2yH4Ard5PekYm0V4AAAAASUVORK5CYII="},"92c1":function(e,t,i){(e.exports=i("690e")(!1)).push([e.i,".dialogLoginSelect-container[data-v-e44e62d8]{width:100vw;height:100vh;background:rgba(0,0,0,.5);position:fixed;top:0;left:0;z-index:10000;padding-top:2.4rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.dialogLoginSelect-container .dialog-content[data-v-e44e62d8]{width:7.94667rem;height:6.96rem;background-size:100% 100%;position:relative;padding-top:3.73333rem;box-sizing:border-box;text-align:center}.dialogLoginSelect-container .dialog-content .close-img[data-v-e44e62d8]{display:block;width:.93333rem;height:auto;position:absolute;bottom:-3.33333rem;left:0;right:0;margin:0 auto}.dialogLoginSelect-container .dialog-content .receive[data-v-e44e62d8]{width:6.05333rem;height:1.14667rem;background:#ffc21f;border-radius:.57333rem;position:absolute;bottom:-1.6rem;left:0;right:0;margin:0 auto;font-size:.45333rem;font-weight:700;color:#ac2d20;text-align:center;line-height:1.14667rem}.dialogLoginSelect-container .dialog-content .tit[data-v-e44e62d8]{font-size:.32rem;color:#e5e8ee;margin-bottom:.26667rem;padding-left:.26667rem}.dialogLoginSelect-container .dialog-content .num[data-v-e44e62d8]{font-size:1.06667rem;font-weight:600;color:gold}.dialogLoginSelect-container .dialog-content .num .dw[data-v-e44e62d8]{font-size:.26667rem;position:relative;top:-.66667rem}",""])},e89a:function(e,t,i){e.exports=i.p+"img/xinrenlibao.7580f8c7.png"}}]);