(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-77804c87"],{"20c5":function(e,t,a){"use strict";a.r(t),a("386d");var i={name:"dialogShareEarningEntry",props:{dialogVisible:{type:Object,default:()=>({show:!0})},preAmount:{type:String,default:"903.879"}},data:()=>({}),methods:{goBuyNow(){if(this.closeDialog(),this.$gaSend({eventCategory:"砍价完成浮窗_去购买",eventAction:"点击"}),!this.$store.state.userInfo.user_id){const e=window.location,t=e.pathname,a=e.search;return this.$store.commit("setLoginJumpUrl",`${t+a}&showShareEarningEntry=no`),void this.$store.commit("setLoginSelectShow",!0)}},closeDialog(){this.$emit("update:dialogVisible",{show:!1})}},watch:{dialogVisible:{handler(){this.dialogVisible.show&&this.$gaSend({eventCategory:"砍价完成浮窗",eventAction:"浮窗展示"})},immediate:!0,deep:!0}}},o=(a("88c1"),a("2877")),n=Object(o.a)(i,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dialogShareEarningEntry-container"},[i("van-popup",{staticStyle:{"background-color":"transparent",width:"100%"},attrs:{"close-on-click-overlay":!1},model:{value:e.dialogVisible.show,callback:function(t){e.$set(e.dialogVisible,"show",t)},expression:"dialogVisible.show"}},[i("div",{staticClass:"box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("55d5"),expression:"require('@/assets/images/fenxiangzhuang.png')"}],staticClass:"bg"}),i("div",{staticClass:"box-info"},[i("p",{staticClass:"top-tips"},[e._v("Your friends help you save")]),i("p",{staticClass:"cut-num"},[i("span",[e._v("Rp")]),e._v(" "+e._s(e.preAmount))]),i("div",{staticClass:"go-buy-btn",on:{click:e.goBuyNow}},[e._v("Go buy now")])]),i("div",{staticClass:"close",on:{click:e.closeDialog}})])])],1)},[],!1,null,"63aa4d4f",null);t.default=n.exports},"55d5":function(e,t,a){e.exports=a.p+"img/fenxiangzhuang.d96f37a7.png"},"6eff":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAXVBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzQDM+LAAAAHnRSTlMAya/D3uvXZF2nPo/yGw34lBQJS+UmMrmHd2xVRDYH+mWiAAACHklEQVRYw62Y2ZqCMAyFTyt7AQFx177/Y04zg6NICVv+C/mkeEzTJqQBwzOptArCPA8DpavkieUUcdraL9o0LrCEQ5rbjrwNgvb/2z49YC6J+vuJMrfsWDdAUx+zm1F7S6hkniXqV0MnxWCiif5VUtMWFSk9GFyLkeFrQOPphI/uIYncwHAjofAOBmMdlwYszYWeMhhF08RPmORE7jvDT6kGf8KaHZVelcgNxZhJPKZDKg/M5kE6GHB2tzMsIPP5xzC2MPaYr63L+IX1z6HnXrfJKyymckFT9jdMhOXQsui+t45YwbG3LoGLAKzi8jGNuws1rMSF8v09wxgrif/NyXhjps3JXst0xWqu3WKVzts1VlN3eychuSHP3WA/pueTP0kl3cW/sxR6KM8efZsR+ueU2i8dRancP6sQONHTHpod6fRVlC9L08gJ8WhQqk+dl6g/QGMY+hjX2U2qkCEGmkl6O9KZUkFGPlYU3KxOd+HCXCGweQ1WR2tWBXVuA7febQNeh1dB07oVJykOTSoaDDQhIRmhSUm4eG8DoQUX2H4PZ7BQMAiFplCi2J62CkpbMkmUSenndFFKL/fbXzAyrzuhl69MKSBbmCDaVCYJFW0yJaRQQStTXksV+/JHDyIamMhCbojkjmX+Q2I1e42sKiWOrHrqAF1uOEBvOM5vaS7Itzr4xotV1WfjpXrdTYTbQPJNKb5FZt4tMsO2yH4Ard5PekYm0V4AAAAASUVORK5CYII="},"70f3":function(e,t,a){var i=a("7d6a");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,a("499e").default)("a6438f38",i,!0,{sourceMap:!1,shadowMode:!1})},"7d6a":function(e,t,a){var i=a("b041");(e.exports=a("2350")(!1)).push([e.i,".box[data-v-63aa4d4f]{position:relative;padding:0 .13333rem}.box>img[data-v-63aa4d4f]{width:100%;height:auto}.box>.box-info[data-v-63aa4d4f]{position:absolute;top:0;left:0;width:100%;height:100%;text-align:center}.box>.box-info>.top-tips[data-v-63aa4d4f]{margin-top:5.33333rem;font-size:.37333rem;font-weight:700;color:#6c0c06;line-height:.62667rem}.box>.box-info>.cut-num[data-v-63aa4d4f]{display:inline-block;margin:0 auto;margin-top:.08rem;padding:0 .77333rem 0 .74667rem;height:1.26667rem;line-height:1.26667rem;font-size:.66667rem;color:#d30c05;background:#fff}.box>.box-info .go-buy-btn[data-v-63aa4d4f]{width:5.72rem;height:1.08rem;line-height:1.08rem;text-align:center;background:-webkit-linear-gradient(bottom,#ffe559,gold);background:linear-gradient(0deg,#ffe559,gold);border-radius:.53333rem;margin:.90667rem auto 0;font-size:.45333rem;font-weight:700;color:#d30c05}.box>.close[data-v-63aa4d4f]{position:relative;width:.93333rem;height:.93333rem;margin:0 auto;background:url("+i(a("6eff"))+") no-repeat;background-size:100% auto}",""])},"88c1":function(e,t,a){"use strict";var i=a("70f3");a.n(i).a}}]);