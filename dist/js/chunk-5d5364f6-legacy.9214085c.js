(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d5364f6"],{"0fbc":function(e,t,i){var o=i("5454");t=e.exports=i("690e")(!1),t.push([e.i,".box[data-v-1ec3bffe]{position:relative;padding:0 .13333rem}.box>img[data-v-1ec3bffe]{width:100%;height:auto}.box>.box-info[data-v-1ec3bffe]{position:absolute;top:0;left:0;width:100%;height:100%;text-align:center}.box>.box-info>.top-tips[data-v-1ec3bffe]{margin-top:5.33333rem;font-size:.37333rem;font-weight:700;color:#6c0c06;line-height:.62667rem}.box>.box-info>.cut-num[data-v-1ec3bffe]{margin:0 auto;width:5.6rem;height:1.4rem;line-height:1.4rem;font-size:.93333rem;color:#d30c05}.box>.box-info>.cut-num>span[data-v-1ec3bffe]{font-size:.45333rem}.box>.box-info .go-buy-btn[data-v-1ec3bffe]{width:5.72rem;height:1.08rem;line-height:1.08rem;text-align:center;background:-webkit-linear-gradient(bottom,#ffe559,gold);background:linear-gradient(0deg,#ffe559,gold);border-radius:.53333rem;margin:1.17333rem auto 0;font-size:.45333rem;font-weight:700;color:#d30c05}.box>.close[data-v-1ec3bffe]{position:relative;width:.93333rem;height:.93333rem;margin:0 auto;background:url("+o(i("6eff"))+") no-repeat;background-size:100% auto}",""])},"20c5":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dialogShareEarningEntry-container"},[o("van-popup",{staticStyle:{"background-color":"transparent",width:"100%"},attrs:{"close-on-click-overlay":!1},model:{value:e.dialogVisible.show,callback:function(t){e.$set(e.dialogVisible,"show",t)},expression:"dialogVisible.show"}},[o("div",{staticClass:"box"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i("55d5"),expression:"require('@/assets/images/fenxiangzhuang.png')"}],staticClass:"bg"}),o("div",{staticClass:"box-info"},[o("p",{staticClass:"top-tips"},[e._v("Your friends help you save")]),o("p",{staticClass:"cut-num"},[o("span",[e._v("Rp")]),e._v(" "+e._s(e.chopInfo.bargain_amount))]),o("div",{staticClass:"go-buy-btn",on:{click:e.goBuyNow}},[e._v("Go buy now")])]),o("div",{staticClass:"close",on:{click:e.closeDialog}})])])],1)},a=[],n=(i("aaa4"),{name:"dialogShareEarningEntry",props:{dialogVisible:{type:Object,default:function(){return{show:!0}}},chopInfo:{type:Object,default:function(){return{bargain_id:1,bargain_amount:1,bargain_rate:1,reward_amount:"mock"}}}},data:function(){return{}},methods:{goBuyNow:function(){if(this.closeDialog(),this.$gaSend({eventCategory:"砍价完成浮窗_去购买",eventAction:"点击"}),!this.$store.state.userInfo.user_id){var e=window.location,t=e.pathname,i=e.search;return this.$store.commit("setLoginJumpUrl","".concat(t+i,"&showShareEarningEntry=no")),void this.$store.commit("setLoginSelectShow",!0)}},closeDialog:function(){this.$emit("update:dialogVisible",{show:!1})}},watch:{dialogVisible:{handler:function(){this.dialogVisible.show&&this.$gaSend({eventCategory:"砍价完成浮窗",eventAction:"浮窗展示"})},immediate:!0,deep:!0}}}),r=n,s=(i("db9e"),i("17cc")),c=Object(s["a"])(r,o,a,!1,null,"1ec3bffe",null);t["default"]=c.exports},"3fd9":function(e,t,i){var o=i("0fbc");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=i("85cb").default;a("0e83cf93",o,!0,{sourceMap:!1,shadowMode:!1})},"55d5":function(e,t,i){e.exports=i.p+"img/fenxiangzhuang.d8ba4fde.png"},"6eff":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAXVBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzQDM+LAAAAHnRSTlMAya/D3uvXZF2nPo/yGw34lBQJS+UmMrmHd2xVRDYH+mWiAAACHklEQVRYw62Y2ZqCMAyFTyt7AQFx177/Y04zg6NICVv+C/mkeEzTJqQBwzOptArCPA8DpavkieUUcdraL9o0LrCEQ5rbjrwNgvb/2z49YC6J+vuJMrfsWDdAUx+zm1F7S6hkniXqV0MnxWCiif5VUtMWFSk9GFyLkeFrQOPphI/uIYncwHAjofAOBmMdlwYszYWeMhhF08RPmORE7jvDT6kGf8KaHZVelcgNxZhJPKZDKg/M5kE6GHB2tzMsIPP5xzC2MPaYr63L+IX1z6HnXrfJKyymckFT9jdMhOXQsui+t45YwbG3LoGLAKzi8jGNuws1rMSF8v09wxgrif/NyXhjps3JXst0xWqu3WKVzts1VlN3eychuSHP3WA/pueTP0kl3cW/sxR6KM8efZsR+ueU2i8dRancP6sQONHTHpod6fRVlC9L08gJ8WhQqk+dl6g/QGMY+hjX2U2qkCEGmkl6O9KZUkFGPlYU3KxOd+HCXCGweQ1WR2tWBXVuA7febQNeh1dB07oVJykOTSoaDDQhIRmhSUm4eG8DoQUX2H4PZ7BQMAiFplCi2J62CkpbMkmUSenndFFKL/fbXzAyrzuhl69MKSBbmCDaVCYJFW0yJaRQQStTXksV+/JHDyIamMhCbojkjmX+Q2I1e42sKiWOrHrqAF1uOEBvOM5vaS7Itzr4xotV1WfjpXrdTYTbQPJNKb5FZt4tMsO2yH4Ard5PekYm0V4AAAAASUVORK5CYII="},db9e:function(e,t,i){"use strict";var o=i("3fd9"),a=i.n(o);a.a}}]);