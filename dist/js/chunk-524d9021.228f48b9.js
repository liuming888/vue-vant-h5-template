(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-524d9021","chunk-73d3bca9","chunk-0f9f5313"],{"02fe":function(e,i,t){i=e.exports=t("690e")(!1),i.push([e.i,".dec[data-v-625089b2]{margin-right:.13333rem;font-size:.26667rem;font-weight:400;color:#585858;line-height:.56rem;position:relative;top:.04rem}.count-down[data-v-625089b2]{margin:.29333rem 0;font-size:.32rem;color:#585858;line-height:.41333rem}.count-down>.time[data-v-625089b2]{display:inline-block;background-color:#585858;color:#fff;border-radius:.10667rem;padding:0 .08rem}.count-down>.dec[data-v-625089b2]{padding-left:.16rem}",""])},1180:function(e,i,t){"use strict";var a=t("533b"),n=t.n(a);n.a},"17ef":function(e,i,t){"use strict";t.r(i);var a=function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("div",{staticClass:"isBargainingList-container"},[e.finishList.length>0?a("div",{staticClass:"finish-box"},[a("div",{staticClass:"banner"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("6815"),expression:"require('./../assets/images/bargain-finish-banner.png')"}]})]),a("ul",{staticClass:"goods-list"},e._l(e.finishList,function(i,t){return a("li",{key:t,staticClass:"goods-item"},[a("div",{staticClass:"img-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.spu&&i.spu.spu_pics&&i.spu.spu_pics[0],expression:"item.spu&&item.spu.spu_pics&&item.spu.spu_pics[0]"}]})]),a("div",{staticClass:"detail"},[a("p",{staticClass:"title"},[e._v(e._s(i.spu.title))]),a("div",{staticClass:"price-box"},[a("div",{staticClass:"price-item"},[a("p",{staticClass:"now-price"},[a("span",[e._v("Rp")]),e._v(e._s(i.bargain_info.bargain_ater))]),a("p",{staticClass:"real-price"},[a("span",[e._v("Rp")]),e._v(e._s(i.bargain_info.price))])]),a("div",{staticClass:"price-item"},[a("div",{staticClass:"btn",on:{click:function(t){return e.jumpPurchasePage(i.spu.spu_id)}}},[e._v("To Buy")]),a("p",{staticClass:"completed"},[e._v("completed")])])])])])}),0)]):e._e(),e.ingList.length>0?a("div",{staticClass:"ing-box"},[a("div",{staticClass:"banner"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("1b4e"),expression:"require('./../assets/images/bargin-active-banner.png')"}]})]),a("ul",{staticClass:"goods-list"},e._l(e.ingList,function(i,t){return a("li",{key:t,staticClass:"goods-item"},[a("div",{staticClass:"img-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.spu&&i.spu.spu_pics&&i.spu.spu_pics[0],expression:"item.spu&&item.spu.spu_pics&&item.spu.spu_pics[0]"}]})]),a("div",{staticClass:"detail"},[a("p",{staticClass:"title"},[e._v(e._s(i.spu.title))]),a("count-down",{attrs:{dateDiff:i.spu.expire_ttl}}),a("div",{staticClass:"price-box go-on-price-box"},[a("div",{staticClass:"price-item"},[a("div",{staticClass:"msg-box"},[e._v("cut Rp "+e._s(i.bargain_info.bargain_amount))]),a("p",{staticClass:"now-price"},[a("span",[e._v("Rp")]),e._v(e._s(i.bargain_info.bargain_ater))]),a("p",{staticClass:"real-price"},[a("span",[e._v("Rp")]),e._v(e._s(i.bargain_info.price))])]),a("div",{staticClass:"price-item go-on-item-btn"},[a("div",{staticClass:"btn go-on",staticStyle:{margin:"0"},on:{click:function(t){return e.jumpCurBargainPage(i.bargain_info.spu_id,i.bargain_info.bargain_id)}}},[e._v("Go On")]),a("div",{directives:[{name:"show",rawName:"v-show",value:1==i.bargain_info.can_buy,expression:"item.bargain_info.can_buy==1"}],staticClass:"btn",on:{click:function(t){return e.jumpPurchasePage(i.spu.spu_id)}}},[e._v("To Buy")])])]),a("div",{staticClass:"cut-schedule"},[a("span",{staticClass:"cut"},[e._v("cut "),a("span",[e._v(e._s(i.bargain_info.bargain_rate)+"%")])]),a("div",{staticClass:"schedule"},[a("div",{staticClass:"active",style:{width:i.bargain_info.bargain_rate+"%"}})])])],1)])}),0)]):e._e()])},n=[],o=t("0348"),r=t("3f9a"),s=t("cd26"),d=t("31e7"),c={components:{aCommodityThatIsBeingBargained:r["default"],countDown:s["default"]},data(){return{finishList:[],ingList:[]}},created(){this.getMyBargainInfo()},methods:{getMyBargainInfo(){var e=this;return Object(o["a"])(function*(){const i={page_size:10,page_num:1};try{const a=yield Object(d["e"])(i);e.finishList=a.data.filter(e=>{return 1===e.bargain_info.can_buy&&2===e.bargain_info.status}),e.ingList=a.data.filter(e=>1===e.bargain_info.status)}catch(t){}})()},jumpCurBargainPage(e,i){this.$router.push({path:"/bargain",query:{spuId:e,bargainId:i}})},jumpPurchasePage(e){this.$router.push({path:"/purchase",query:{spuId:e}})}}},l=c,g=(t("1180"),t("17cc")),f=Object(g["a"])(l,a,n,!1,null,"3ae639c7",null);i["default"]=f.exports},"1b4e":function(e,i,t){e.exports=t.p+"img/bargin-active-banner.ede30de9.png"},"31e7":function(e,i,t){"use strict";t.d(i,"c",function(){return n}),t.d(i,"d",function(){return o}),t.d(i,"a",function(){return r}),t.d(i,"e",function(){return s}),t.d(i,"b",function(){return d});var a=t("007a");function n(e){let i=e.bargain_id;return a["a"].post({url:"/api/v1/bargain/get_bargain_info",data:{bargain_id:i}})}function o(e){let i=e.bargain_id,t=e.page_size,n=e.page_num;return a["a"].post({url:"/api/v1/bargain/get_help_bargain_list",data:{bargain_id:i,page_size:t,page_num:n}})}function r(e){let i=e.bargain_id,t=e.spu_id;return a["a"].post({url:"/api/v1/bargain/chop",data:{spu_id:t,bargain_id:i}})}function s(e){let i=e.page_size,t=void 0===i?10:i,n=e.page_num,o=void 0===n?1:n;return a["a"].post({url:"/api/v1/spu/get_mybargain_spus",data:{page_size:t,page_num:o}})}function d(e){let i=e.relation_id;return a["a"].post({url:"/api/v1/bargain/chop_share",data:{relation_id:i}})}},"3f9a":function(e,i,t){"use strict";t.r(i);var a=function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("div",[a("div",{staticClass:"freebing-container"},[a("div",{staticClass:"good-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.spuBargainItem.spu_pics&&e.spuBargainItem.spu_pics.length>0&&e.spuBargainItem.spu_pics[0],expression:"spuBargainItem.spu_pics&&spuBargainItem.spu_pics.length>0&&spuBargainItem.spu_pics[0]"}],staticClass:"good-img"}),a("div",{staticClass:"good-detail"},[a("p",{staticClass:"good-title"},[e._v(e._s(e.spuBargainItem.title))]),e.spuBargainItem.expire_ttl?a("count-down",{attrs:{dateDiff:e.spuBargainItem.expire_ttl}}):e._e(),a("div",{staticClass:"left-box"},[a("div",{staticClass:"num-box"},[a("span",{staticClass:"rp-box"},[e._v("Rp"+e._s(e.spuBargainItem.bargain_amount))]),a("span",{staticClass:"compeled"},[e._v("completed")])]),a("div",{staticClass:"progress"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("ae4a"),expression:"require('@/assets/images/progress-bar.png')"}],attrs:{width:e.spuBargainItem.bargain_rate+"%"}}),a("div",{staticClass:"progress-content"},[a("span",[e._v("has been cut "+e._s(e.spuBargainItem.bargain_amount))]),a("span",[e._v(e._s(e.spuBargainItem.bargain_rate)+"%")])])])]),a("div",{staticClass:"goods-control"},[1==e.spuBargainItem.status?a("a",{staticClass:"go-on-btn",class:{"r-b":2==e.spuBargainItem.can_buy},attrs:{href:"javascrip:;"},on:{click:e.jumpBargain}},[e._v("\n            Go On\n          ")]):e._e(),1==e.spuBargainItem.can_buy?a("a",{staticClass:"buy-btn r-b",attrs:{href:"javascrip:;"},on:{click:e.jumpPurchasePage}},[e._v("Buy")]):e._e()])],1)])])])},n=[],o=(t("5616"),{name:"aCommodityThatIsBeingBargained",components:{countDown:e=>t.e("chunk-73d3bca9").then(function(){var i=[t("cd26")];e.apply(null,i)}.bind(this)).catch(t.oe)},props:{spuBargainItem:{type:Object,default(){return{spu_id:1,title:"mock",bargain_rate:1,bargain_coin:"mock",expire_time:"mock",bargain_id:"mock"}}}},data(){return{expirationDat:{h:"00",p:"00",m:"00"},dialogs:{sharingFriends:{show:!1}},shareInfo:{}}},created(){this.init()},methods:{init(){this.refreshTime()},jumpPurchasePage(){const e=this.spuBargainItem,i=e.spu_id,t=e.bargain_id,a=e.order_no;this.$router.push({path:"/purchase",query:{spuId:i,bargainId:t,orderNo:a}})},refreshTime(){let e=this.$util.expiration(this.spuBargainItem.expire_time);if(!e)return;this.expirationDat=e;const i=setInterval(()=>{this.expirationDat=this.$util.expiration(this.spuBargainItem.expire_time)},1e3);this.$once("hook:beforeDestroy",()=>{clearInterval(i)})},jumpBargain(){this.$router.push({path:"/bargain",query:{spuId:this.spuBargainItem.spu_id,bargainId:this.spuBargainItem.bargain_id}})}}}),r=o,s=(t("8683"),t("17cc")),d=Object(s["a"])(r,a,n,!1,null,"30fe9f9d",null);i["default"]=d.exports},"4f45":function(e,i,t){(function(e){var a="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,n=Function.prototype.apply;function o(e,i){this._id=e,this._clearFn=i}i.setTimeout=function(){return new o(n.call(setTimeout,a,arguments),clearTimeout)},i.setInterval=function(){return new o(n.call(setInterval,a,arguments),clearInterval)},i.clearTimeout=i.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(a,this._id)},i.enroll=function(e,i){clearTimeout(e._idleTimeoutId),e._idleTimeout=i},i.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},i._unrefActive=i.active=function(e){clearTimeout(e._idleTimeoutId);var i=e._idleTimeout;i>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},i))},t("de8a"),i.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,i.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,t("66fa"))},"533b":function(e,i,t){var a=t("aea7");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("85cb").default;n("909975ec",a,!0,{sourceMap:!1,shadowMode:!1})},5454:function(e,i){e.exports=function(e){return"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},5616:function(e,i,t){"use strict";t.d(i,"c",function(){return n}),t.d(i,"a",function(){return o}),t.d(i,"b",function(){return r});var a=t("007a");function n(e){let i=e.spu_id;return a["a"].get({url:"/api/v1/share/share_spu",data:{spu_id:i}})}function o(e){let i=e.bargain_id;return a["a"].get({url:"/api/v1/share/share_bargain",data:{bargain_id:i}})}function r(e){let i=e.relation_id;return a["a"].get({url:"/api/v1/share/get_share_info",data:{relation_id:i}})}},"56f9":function(e,i,t){var a=t("5e8e");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("85cb").default;n("6ddc311d",a,!0,{sourceMap:!1,shadowMode:!1})},"5e8e":function(e,i,t){i=e.exports=t("690e")(!1),i.push([e.i,".freebing-container[data-v-30fe9f9d]{padding:.32rem}.freebing-container>.good-box[data-v-30fe9f9d]{position:relative;margin-top:.58667rem;display:-webkit-box;display:-webkit-flex;display:flex}.freebing-container>.good-box>.good-img[data-v-30fe9f9d]{width:2.69333rem;height:2.69333rem;margin-right:.4rem}.freebing-container>.good-box>.good-detail[data-v-30fe9f9d]{overflow:hidden}.freebing-container>.good-box>.good-detail>.good-title[data-v-30fe9f9d]{font-size:.4rem;color:#323232;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.freebing-container>.good-box>.good-detail .left-box[data-v-30fe9f9d]{width:3.13333rem}.freebing-container>.good-box>.good-detail .left-box .num-box[data-v-30fe9f9d]{max-width:100%}.freebing-container>.good-box>.good-detail .left-box .num-box .rp-box[data-v-30fe9f9d]{font-size:.32rem;font-weight:700;color:#d40d05;line-height:.44rem;margin-right:.21333rem}.freebing-container>.good-box>.good-detail .left-box .num-box .compeled[data-v-30fe9f9d]{font-size:.32rem;font-weight:400;color:#888;line-height:.44rem}.freebing-container>.good-box>.good-detail .left-box .progress[data-v-30fe9f9d]{margin:.25333rem 0;position:relative;width:100%;height:.37333rem;border-radius:.18667rem;background-color:#fececa;padding:0 .21333rem;line-height:.37333rem;color:#fff;font-size:.26667rem;overflow:hidden}.freebing-container>.good-box>.good-detail .left-box .progress>img[data-v-30fe9f9d]{position:absolute;top:0;left:0;height:100%}.freebing-container>.good-box>.good-detail .left-box .progress>.progress-content[data-v-30fe9f9d]{position:relative}.freebing-container>.good-box>.good-detail .left-box .progress>.progress-content>span[data-v-30fe9f9d]:last-child{float:right;color:#d30c05}.freebing-container>.good-box>.good-detail>.count-down[data-v-30fe9f9d]{font-size:.34667rem;color:#585858;line-height:.44rem}.freebing-container>.good-box>.good-detail>.count-down>.time[data-v-30fe9f9d]{display:inline-block;background-color:#585858;color:#fff;border-radius:.10667rem;padding:0 .08rem}.freebing-container>.good-box>.good-detail>.count-down>.dec[data-v-30fe9f9d]{padding-left:.16rem}.freebing-container>.good-box>.good-detail>.goods-control[data-v-30fe9f9d]{width:1.6rem;position:absolute;right:0;bottom:.08rem}.freebing-container>.good-box>.good-detail>.goods-control>a[data-v-30fe9f9d]{display:block;width:100%;height:.74667rem;line-height:.74667rem;text-align:center;box-sizing:border-box}.freebing-container>.good-box>.good-detail>.goods-control .go-on-btn[data-v-30fe9f9d]{background:#fff;border:1px solid #d30c05;border-radius:.37333rem;font-size:.34667rem;font-weight:700;color:#d30c05;margin-bottom:.26667rem}.freebing-container>.good-box>.good-detail>.goods-control .r-b[data-v-30fe9f9d]{background:-webkit-linear-gradient(135deg,#d30c05,#f64e01);background:linear-gradient(-45deg,#d30c05,#f64e01);border-radius:.37333rem;font-size:.34667rem;font-weight:700;color:#fff}",""])},"60ac":function(e,i,t){i.nextTick=function(e){setTimeout(e,0)},i.platform=i.arch=i.execPath=i.title="browser",i.pid=1,i.browser=!0,i.env={},i.argv=[],i.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,a="/";i.cwd=function(){return a},i.chdir=function(i){e||(e=t("d4df")),a=e.resolve(i,a)}}(),i.exit=i.kill=i.umask=i.dlopen=i.uptime=i.memoryUsage=i.uvCounters=function(){},i.features={}},6815:function(e,i,t){e.exports=t.p+"img/bargain-finish-banner.98d4a732.png"},8683:function(e,i,t){"use strict";var a=t("56f9"),n=t.n(a);n.a},"9a4f":function(e,i,t){"use strict";var a=t("cbf2"),n=t.n(a);n.a},ae4a:function(e,i){e.exports="data:image/png;base64,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"},aea7:function(e,i,t){var a=t("5454");i=e.exports=t("690e")(!1),i.push([e.i,".isBargainingList-container .banner[data-v-3ae639c7]{width:100%;height:1.97333rem}.isBargainingList-container .banner>img[data-v-3ae639c7]{width:100%;height:100%}.isBargainingList-container>.finish-box[data-v-3ae639c7]{margin-bottom:.4rem}.isBargainingList-container>.finish-box>.goods-list[data-v-3ae639c7]{padding:.53333rem .4rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item[data-v-3ae639c7]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:1px solid #f2f2f2;padding-bottom:.53333rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item+.goods-item[data-v-3ae639c7]{margin-top:.53333rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.img-box[data-v-3ae639c7]{width:2.8rem;height:2.8rem;margin-right:.26667rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.img-box>img[data-v-3ae639c7]{width:100%}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail[data-v-3ae639c7]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.title[data-v-3ae639c7]{font-size:.37333rem;color:#323232;line-height:.49333rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.count-down[data-v-3ae639c7]{margin:.29333rem 0;font-size:.32rem;color:#585858;line-height:.41333rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.count-down>.time[data-v-3ae639c7]{display:inline-block;background-color:#585858;color:#fff;border-radius:.10667rem;padding:0 .08rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.count-down>.dec[data-v-3ae639c7]{padding-left:.16rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box[data-v-3ae639c7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box>.price-item[data-v-3ae639c7]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.btn[data-v-3ae639c7]{width:2.24rem;height:.88rem;line-height:.88rem;background:-webkit-linear-gradient(left,#f6ad01,#f64d01);background:linear-gradient(90deg,#f6ad01,#f64d01);border-radius:.45333rem;text-align:center;font-size:.45333rem;color:#fff;margin:.66667rem 0 .18667rem 0;display:inline-block}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.completed[data-v-3ae639c7]{display:inline-block;width:2.24rem;text-align:center;color:#888;font-size:.32rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.now-price[data-v-3ae639c7]{color:#d30c05;font-size:.48rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.now-price>span[data-v-3ae639c7]{font-size:.29333rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.real-price[data-v-3ae639c7]{color:#888;font-size:.32rem;text-decoration:line-through}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.real-price>span[data-v-3ae639c7]{font-size:.21333rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box>.price-item[data-v-3ae639c7]:last-of-type{text-align:right}.isBargainingList-container>.ing-box[data-v-3ae639c7]{margin-bottom:.4rem}.isBargainingList-container>.ing-box>.goods-list[data-v-3ae639c7]{padding:.53333rem .4rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item[data-v-3ae639c7]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:1px solid #f2f2f2;padding-bottom:.53333rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item+.goods-item[data-v-3ae639c7]{margin-top:.53333rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.img-box[data-v-3ae639c7]{width:2.8rem;height:2.8rem;margin-right:.26667rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.img-box>img[data-v-3ae639c7]{width:100%}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail[data-v-3ae639c7]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.title[data-v-3ae639c7]{width:100%;font-size:.37333rem;color:#323232;line-height:.49333rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.count-down[data-v-3ae639c7]{margin:0;font-size:.32rem;color:#585858;line-height:.41333rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.count-down>.time[data-v-3ae639c7]{display:inline-block;background-color:#585858;color:#fff;border-radius:.10667rem;padding:0 .08rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.count-down>.dec[data-v-3ae639c7]{padding-left:.16rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box[data-v-3ae639c7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item[data-v-3ae639c7]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.msg-box[data-v-3ae639c7]{display:inline-block;padding:0 .13333rem;min-width:2rem;height:.42667rem;background:url("+a(t("bac9"))+") no-repeat;background-size:100% 100%;text-align:center;color:#f65e10;font-size:.26667rem;line-height:.32rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.btn[data-v-3ae639c7]{width:2.24rem;height:.88rem;line-height:.88rem;background:-webkit-linear-gradient(left,#f6ad01,#f64d01);background:linear-gradient(90deg,#f6ad01,#f64d01);border-radius:.45333rem;text-align:center;font-size:.45333rem;color:#fff;margin:.53333rem 0 .18667rem 0;display:inline-block}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.completed[data-v-3ae639c7]{display:inline-block;width:2.24rem;text-align:center;color:#888;font-size:.32rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.now-price[data-v-3ae639c7]{color:#d30c05;font-size:.48rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.now-price>span[data-v-3ae639c7]{font-size:.29333rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.real-price[data-v-3ae639c7]{color:#888;font-size:.32rem;text-decoration:line-through}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.real-price>span[data-v-3ae639c7]{font-size:.21333rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item[data-v-3ae639c7]:last-of-type{text-align:right}.go-on[data-v-3ae639c7]{background:-webkit-linear-gradient(left,#d30c05,#f64d01)!important;background:linear-gradient(90deg,#d30c05,#f64d01)!important;margin-top:0!important}.cut-schedule[data-v-3ae639c7]{margin-top:.26667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cut-schedule>.cut[data-v-3ae639c7]{color:#888;font-size:.24rem}.cut-schedule>.cut>span[data-v-3ae639c7]{font-size:.32rem;margin-right:.13333rem}.cut-schedule>.schedule[data-v-3ae639c7]{line-height:.26667rem;display:inline-block;margin-left:.13333rem;position:relative;width:4.53333rem;height:.21333rem;background:#fff;border:1px solid #fc7b77;border-radius:.10667rem}.cut-schedule>.schedule>.active[data-v-3ae639c7]{position:absolute;top:0;left:0;width:60%;height:100%;border-radius:.10667rem;background:-webkit-linear-gradient(315deg,#d50f04,#f54c01);background:linear-gradient(135deg,#d50f04,#f54c01)}.go-on-price-box[data-v-3ae639c7]{margin-top:.53333rem;position:relative}.go-on-price-box .go-on-item-btn[data-v-3ae639c7]{position:absolute;right:0;top:-.48rem;width:2.24rem;height:2rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse}",""])},bac9:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAAhCAMAAADnJxkeAAAAaVBMVEUAAAD2XhD2XhD2XhD2XhH2XhD2XhD3ayT2XhD2XhD2XhD2XhD2XhD2XhD2ZBj2XhD2XhD2XhD2XhD2XhD////2XhD7s4/3djP+7ub+7OP7q4P//v3/9/T91sL7uJX5jlb4iE/94dL94NHXL+XfAAAAFHRSTlMAh3UI5vpt/c/HfFpNFfnzo6ExL9Sa/bAAAACdSURBVFjD7ddLEoJADIThlsyMoOAzUUER9P6HtKZKXM+yq8x/gm+RRQeApGZvJMVwPCPX1dP4UJLu/XNdAZB6UKpu1y2QJiXrHQTNqGzNLSLNTf0aNjCl67JylavUVeW5qjxXleeq8v5ExbkZ5pZQ9QrCp8q7nUy1/Di2CI2icDghq76oCkwZIwrGiIIxomCMKFhPiELcJfAlHfj6AHPDJG7O/zwRAAAAAElFTkSuQmCC"},cbf2:function(e,i,t){var a=t("02fe");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("85cb").default;n("23cccd8e",a,!0,{sourceMap:!1,shadowMode:!1})},cd26:function(e,i,t){"use strict";t.r(i);var a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"count-down"},[t("span",{staticClass:"dec"},[e._v("End in")]),t("span",{staticClass:"time"},[e._v(e._s(e.time.h))]),e._v("\n  :\n  "),t("span",{staticClass:"time"},[e._v(e._s(e.time.p))]),e._v("\n  :\n  "),t("span",{staticClass:"time"},[e._v(e._s(e.time.m))])])},n=[],o=t("4f45"),r={data(){return{time:{h:"00",m:"00",s:"00"},setIntervalBox:null,newTime:0}},props:{dateDiff:{default:0}},mounted(){this.startCountDown()},destroyed(){Object(o["clearInterval"])(this.setIntervalBox)},methods:{getDifferTime(e){this.time=this.$util.expiration(e)},startCountDown(){Object(o["clearInterval"])(this.setIntervalBox),this.newTime=this.dateDiff,this.setIntervalBox=Object(o["setInterval"])(()=>{this.newTime>1e3?(this.newTime-=1e3,this.getDifferTime(this.newTime)):Object(o["clearInterval"])(this.setIntervalBox)},1e3)}},watch:{dateDiff(e){this.startCountDown()}}},s=r,d=(t("9a4f"),t("17cc")),c=Object(d["a"])(s,a,n,!1,null,"625089b2",null);i["default"]=c.exports},d4df:function(e,i,t){(function(e){function t(e,i){for(var t=0,a=e.length-1;a>=0;a--){var n=e[a];"."===n?e.splice(a,1):".."===n?(e.splice(a,1),t++):t&&(e.splice(a,1),t--)}if(i)for(;t--;t)e.unshift("..");return e}var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(e){return a.exec(e).slice(1)};function o(e,i){if(e.filter)return e.filter(i);for(var t=[],a=0;a<e.length;a++)i(e[a],a,e)&&t.push(e[a]);return t}i.resolve=function(){for(var i="",a=!1,n=arguments.length-1;n>=-1&&!a;n--){var r=n>=0?arguments[n]:e.cwd();if("string"!==typeof r)throw new TypeError("Arguments to path.resolve must be strings");r&&(i=r+"/"+i,a="/"===r.charAt(0))}return i=t(o(i.split("/"),function(e){return!!e}),!a).join("/"),(a?"/":"")+i||"."},i.normalize=function(e){var a=i.isAbsolute(e),n="/"===r(e,-1);return e=t(o(e.split("/"),function(e){return!!e}),!a).join("/"),e||a||(e="."),e&&n&&(e+="/"),(a?"/":"")+e},i.isAbsolute=function(e){return"/"===e.charAt(0)},i.join=function(){var e=Array.prototype.slice.call(arguments,0);return i.normalize(o(e,function(e,i){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},i.relative=function(e,t){function a(e){for(var i=0;i<e.length;i++)if(""!==e[i])break;for(var t=e.length-1;t>=0;t--)if(""!==e[t])break;return i>t?[]:e.slice(i,t-i+1)}e=i.resolve(e).substr(1),t=i.resolve(t).substr(1);for(var n=a(e.split("/")),o=a(t.split("/")),r=Math.min(n.length,o.length),s=r,d=0;d<r;d++)if(n[d]!==o[d]){s=d;break}var c=[];for(d=s;d<n.length;d++)c.push("..");return c=c.concat(o.slice(s)),c.join("/")},i.sep="/",i.delimiter=":",i.dirname=function(e){var i=n(e),t=i[0],a=i[1];return t||a?(a&&(a=a.substr(0,a.length-1)),t+a):"."},i.basename=function(e,i){var t=n(e)[2];return i&&t.substr(-1*i.length)===i&&(t=t.substr(0,t.length-i.length)),t},i.extname=function(e){return n(e)[3]};var r="b"==="ab".substr(-1)?function(e,i,t){return e.substr(i,t)}:function(e,i,t){return i<0&&(i=e.length+i),e.substr(i,t)}}).call(this,t("60ac"))},de8a:function(e,i,t){(function(e,i){(function(e,t){"use strict";if(!e.setImmediate){var a,n=1,o={},r=!1,s=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?m():u()?p():e.MessageChannel?b():s&&"onreadystatechange"in s.createElement("script")?h():v(),d.setImmediate=c,d.clearImmediate=l}function c(e){"function"!==typeof e&&(e=new Function(""+e));for(var i=new Array(arguments.length-1),t=0;t<i.length;t++)i[t]=arguments[t+1];var r={callback:e,args:i};return o[n]=r,a(n),n++}function l(e){delete o[e]}function g(e){var i=e.callback,a=e.args;switch(a.length){case 0:i();break;case 1:i(a[0]);break;case 2:i(a[0],a[1]);break;case 3:i(a[0],a[1],a[2]);break;default:i.apply(t,a);break}}function f(e){if(r)setTimeout(f,0,e);else{var i=o[e];if(i){r=!0;try{g(i)}finally{l(e),r=!1}}}}function m(){a=function(e){i.nextTick(function(){f(e)})}}function u(){if(e.postMessage&&!e.importScripts){var i=!0,t=e.onmessage;return e.onmessage=function(){i=!1},e.postMessage("","*"),e.onmessage=t,i}}function p(){var i="setImmediate$"+Math.random()+"$",t=function(t){t.source===e&&"string"===typeof t.data&&0===t.data.indexOf(i)&&f(+t.data.slice(i.length))};e.addEventListener?e.addEventListener("message",t,!1):e.attachEvent("onmessage",t),a=function(t){e.postMessage(i+t,"*")}}function b(){var e=new MessageChannel;e.port1.onmessage=function(e){var i=e.data;f(i)},a=function(i){e.port2.postMessage(i)}}function h(){var e=s.documentElement;a=function(i){var t=s.createElement("script");t.onreadystatechange=function(){f(i),t.onreadystatechange=null,e.removeChild(t),t=null},e.appendChild(t)}}function v(){a=function(e){setTimeout(f,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,t("66fa"),t("60ac"))}}]);