(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c300a8e0"],{"04be":function(e,t,i){(e.exports=i("2350")(!1)).push([e.i,".dialogLoginSelect-container[data-v-68300116]{width:100vw;height:100vh;background:rgba(0,0,0,.5);position:fixed;top:0;left:0;z-index:10000;padding-top:2.4rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.dialogLoginSelect-container .dialog-content[data-v-68300116]{width:7.94667rem;height:6.96rem;background-size:100% 100%;position:relative;padding-top:3.73333rem;box-sizing:border-box;text-align:center}.dialogLoginSelect-container .dialog-content .close-img[data-v-68300116]{display:block;width:.93333rem;height:auto;position:absolute;bottom:-3.33333rem;left:0;right:0;margin:0 auto}.dialogLoginSelect-container .dialog-content .receive[data-v-68300116]{width:6.05333rem;height:1.14667rem;background:#ffc21f;border-radius:.57333rem;position:absolute;bottom:-1.6rem;left:0;right:0;margin:0 auto;font-size:.45333rem;font-weight:700;color:#ac2d20;text-align:center;line-height:1.14667rem}.dialogLoginSelect-container .dialog-content .tit[data-v-68300116]{font-size:.32rem;color:#e5e8ee;margin-bottom:.26667rem;padding-left:.26667rem}.dialogLoginSelect-container .dialog-content .num[data-v-68300116]{font-size:1.06667rem;font-weight:600;color:gold}.dialogLoginSelect-container .dialog-content .num .dw[data-v-68300116]{font-size:.26667rem;position:relative;top:-.66667rem}",""])},"3f73":function(e,t,i){"use strict";i.r(t),i("96cf");var a=i("3b8d"),o=i("3007"),n={name:"dialogNewGiftBag",data:function(){return{reward_amount:1}},created:function(){var e=window.localStorage.getItem("newUserInfo"),t=e?JSON.parse(e):{};this.reward_amount=t.reward_amount||8888},methods:{close:function(){this.$store.commit("setNewGiftBagShow",!1)},goReceive:function(){var e=Object(a.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.f)();case 2:(t=e.sent)&&t.data&&(this.$toast(this.$t("dialogNewGiftBag.youHaveSuccessfullyReceivedANewGiftPackage")),window.localStorage.removeItem("newUserInfo"),this.$store.commit("setNewGiftBagShow",!1));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},r=(i("c373"),i("2877")),c=Object(r.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialogLoginSelect-container"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:i("e89a"),expression:"require('@/assets/images/xinrenlibao.png')",arg:"background-image"}],staticClass:"dialog-content"},[a("div",{staticClass:"tit"},[e._v(e._s(e.$t("dialogNewGiftBag.newcomerGiftBag")))]),a("div",{staticClass:"num"},[a("span",{staticClass:"dw"},[e._v("Rp")]),e._v(e._s(e.reward_amount))]),a("div",{staticClass:"receive",on:{click:e.goReceive}},[e._v(e._s(e.$t("dialogNewGiftBag.receive")))]),a("img",{staticClass:"close-img",attrs:{src:i("6eff")},on:{click:e.close}})])])},[],!1,null,"68300116",null);t.default=c.exports},"401d":function(e,t,i){var a=i("04be");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),(0,i("499e").default)("764348e0",a,!0,{sourceMap:!1,shadowMode:!1})},"6eff":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAXVBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzQDM+LAAAAHnRSTlMAya/D3uvXZF2nPo/yGw34lBQJS+UmMrmHd2xVRDYH+mWiAAACHklEQVRYw62Y2ZqCMAyFTyt7AQFx177/Y04zg6NICVv+C/mkeEzTJqQBwzOptArCPA8DpavkieUUcdraL9o0LrCEQ5rbjrwNgvb/2z49YC6J+vuJMrfsWDdAUx+zm1F7S6hkniXqV0MnxWCiif5VUtMWFSk9GFyLkeFrQOPphI/uIYncwHAjofAOBmMdlwYszYWeMhhF08RPmORE7jvDT6kGf8KaHZVelcgNxZhJPKZDKg/M5kE6GHB2tzMsIPP5xzC2MPaYr63L+IX1z6HnXrfJKyymckFT9jdMhOXQsui+t45YwbG3LoGLAKzi8jGNuws1rMSF8v09wxgrif/NyXhjps3JXst0xWqu3WKVzts1VlN3eychuSHP3WA/pueTP0kl3cW/sxR6KM8efZsR+ueU2i8dRancP6sQONHTHpod6fRVlC9L08gJ8WhQqk+dl6g/QGMY+hjX2U2qkCEGmkl6O9KZUkFGPlYU3KxOd+HCXCGweQ1WR2tWBXVuA7febQNeh1dB07oVJykOTSoaDDQhIRmhSUm4eG8DoQUX2H4PZ7BQMAiFplCi2J62CkpbMkmUSenndFFKL/fbXzAyrzuhl69MKSBbmCDaVCYJFW0yJaRQQStTXksV+/JHDyIamMhCbojkjmX+Q2I1e42sKiWOrHrqAF1uOEBvOM5vaS7Itzr4xotV1WfjpXrdTYTbQPJNKb5FZt4tMsO2yH4Ard5PekYm0V4AAAAASUVORK5CYII="},c373:function(e,t,i){"use strict";var a=i("401d");i.n(a).a},e89a:function(e,t,i){e.exports=i.p+"img/xinrenlibao.7580f8c7.png"}}]);