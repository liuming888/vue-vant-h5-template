(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-58940340","chunk-e5abdc10","chunk-51c30f8e"],{"0ee2":function(i,e,t){(i.exports=t("690e")(!1)).push([i.i,".freebing-container[data-v-53761fd4]{padding:.32rem}.freebing-container>.good-box[data-v-53761fd4]{position:relative;margin-top:.58667rem;display:-webkit-box;display:-webkit-flex;display:flex}.freebing-container>.good-box>.good-img[data-v-53761fd4]{width:2.69333rem;height:2.69333rem;margin-right:.4rem}.freebing-container>.good-box>.good-detail[data-v-53761fd4]{overflow:hidden}.freebing-container>.good-box>.good-detail>.good-title[data-v-53761fd4]{font-size:.4rem;color:#323232;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.freebing-container>.good-box>.good-detail .left-box[data-v-53761fd4]{width:3.13333rem}.freebing-container>.good-box>.good-detail .left-box .num-box[data-v-53761fd4]{max-width:100%}.freebing-container>.good-box>.good-detail .left-box .num-box .rp-box[data-v-53761fd4]{font-size:.32rem;font-weight:700;color:#d40d05;line-height:.44rem;margin-right:.21333rem}.freebing-container>.good-box>.good-detail .left-box .num-box .compeled[data-v-53761fd4]{font-size:.32rem;font-weight:400;color:#888;line-height:.44rem}.freebing-container>.good-box>.good-detail .left-box .progress[data-v-53761fd4]{margin:.25333rem 0;position:relative;width:100%;height:.37333rem;border-radius:.18667rem;background-color:#fececa;padding:0 .21333rem;line-height:.37333rem;color:#fff;font-size:.32rem;overflow:hidden}.freebing-container>.good-box>.good-detail .left-box .progress>img[data-v-53761fd4]{position:absolute;top:0;left:0;height:100%}.freebing-container>.good-box>.good-detail .left-box .progress>.progress-content[data-v-53761fd4]{position:relative;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.freebing-container>.good-box>.good-detail .left-box .progress>.progress-content>span[data-v-53761fd4]:last-child{float:right;color:#fff}.freebing-container>.good-box>.good-detail>.count-down[data-v-53761fd4]{font-size:.34667rem;color:#585858;line-height:.44rem}.freebing-container>.good-box>.good-detail>.count-down>.time[data-v-53761fd4]{display:inline-block;background-color:#585858;color:#fff;border-radius:.10667rem;padding:0 .08rem}.freebing-container>.good-box>.good-detail>.goods-control[data-v-53761fd4]{width:1.6rem;position:absolute;right:0;bottom:.08rem}.freebing-container>.good-box>.good-detail>.goods-control>a[data-v-53761fd4]{display:block;width:100%;height:.74667rem;line-height:.74667rem;text-align:center;box-sizing:border-box}.freebing-container>.good-box>.good-detail>.goods-control .go-on-btn[data-v-53761fd4]{background:#fff;border:1px solid #d30c05;border-radius:.37333rem;font-size:.34667rem;font-weight:700;color:#d30c05;margin-bottom:.26667rem}.freebing-container>.good-box>.good-detail>.goods-control .r-b[data-v-53761fd4]{background:-webkit-linear-gradient(135deg,#d30c05,#f64e01);background:linear-gradient(-45deg,#d30c05,#f64e01);border-radius:.37333rem;font-size:.34667rem;font-weight:700;color:#fff;border:0}",""])},"17ef":function(i,e,t){"use strict";t.r(e),t("4453");var a=t("fa8b"),n=t("3f9a"),o=t("cd26"),r=t("31e7"),s={components:{aCommodityThatIsBeingBargained:n.default,countDown:o.default},data:function(){return{finishList:[],ingList:[]}},created:function(){this.getMyBargainInfo()},methods:{getMyBargainInfo:function(){var i=Object(a.a)(regeneratorRuntime.mark(function i(){var e,t;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return e={page_size:10,page_num:1},i.prev=1,i.next=4,Object(r.e)(e);case 4:t=i.sent,this.finishList=t.data.filter(function(i){return 1===i.bargain_info.can_buy&&2===i.bargain_info.status}),this.ingList=t.data.filter(function(i){return 1===i.bargain_info.status}),i.next=11;break;case 9:i.prev=9,i.t0=i.catch(1);case 11:case"end":return i.stop()}},i,this,[[1,9]])}));return function(){return i.apply(this,arguments)}}(),jumpCurBargainPage:function(i,e){this.$router.push({path:"/bargain",query:{spuId:i,bargainId:e}})},jumpPurchasePage:function(i,e){this.$router.push({path:"/purchase",query:{spuId:i,bargainId:e}})}}},d=(t("6577"),t("17cc")),c=Object(d.a)(s,function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"isBargainingList-container"},[i.finishList.length>0?a("div",{staticClass:"finish-box"},[a("div",{staticClass:"banner"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("6815"),expression:"require('./../assets/images/bargain-finish-banner.png')"}]})]),a("ul",{staticClass:"goods-list"},i._l(i.finishList,function(e,t){return a("li",{key:t,staticClass:"goods-item"},[a("div",{staticClass:"img-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.spu&&e.spu.spu_pics&&e.spu.spu_pics[0],expression:"item.spu&&item.spu.spu_pics&&item.spu.spu_pics[0]"}]})]),a("div",{staticClass:"detail"},[a("p",{staticClass:"title"},[i._v(i._s(e.spu.title))]),a("div",{staticClass:"price-box"},[a("div",{staticClass:"price-item"},[a("p",{staticClass:"now-price"},[a("span",[i._v("Rp")]),i._v(i._s(e.bargain_info.bargain_after||0))]),a("p",{staticClass:"real-price"},[a("span",[i._v("Rp")]),i._v(i._s(e.bargain_info.price||0))])]),a("div",{staticClass:"price-item"},[a("div",{staticClass:"btn",on:{click:function(t){return i.jumpPurchasePage(e.spu.spu_id,e.bargain_info.bargain_id)}}},[i._v("To Buy")]),a("p",{staticClass:"completed"},[i._v("completed")])])])])])}),0)]):i._e(),i.ingList.length>0?a("div",{staticClass:"ing-box"},[a("div",{staticClass:"banner"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("1b4e"),expression:"require('./../assets/images/bargin-active-banner.png')"}]})]),a("ul",{staticClass:"goods-list"},i._l(i.ingList,function(e,t){return a("li",{key:t,staticClass:"goods-item"},[a("div",{staticClass:"img-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.spu&&e.spu.spu_pics&&e.spu.spu_pics[0],expression:"item.spu&&item.spu.spu_pics&&item.spu.spu_pics[0]"}]})]),a("div",{staticClass:"detail"},[a("p",{staticClass:"title"},[i._v(i._s(e.spu.title))]),a("count-down",{attrs:{dateDiff:e.spu.expire_ttl}}),a("div",{staticClass:"price-box go-on-price-box"},[a("div",{staticClass:"price-item"},[a("div",{staticClass:"msg-box"},[i._v("cut Rp "+i._s(e.bargain_info.bargain_amount||0))]),a("p",{staticClass:"now-price"},[a("span",[i._v("Rp")]),i._v(i._s(e.bargain_info.bargain_after||0))]),a("p",{staticClass:"real-price"},[a("span",[i._v("Rp")]),i._v(i._s(e.bargain_info.price||0))])]),a("div",{staticClass:"price-item go-on-item-btn"},[a("div",{staticClass:"btn go-on",staticStyle:{margin:"0"},on:{click:function(t){return i.jumpCurBargainPage(e.bargain_info.spu_id,e.bargain_info.bargain_id)}}},[i._v("Go On")]),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.bargain_info.can_buy,expression:"item.bargain_info.can_buy==1"}],staticClass:"btn",on:{click:function(t){return i.jumpPurchasePage(e.spu.spu_id,e.bargain_info.bargain_id)}}},[i._v("To Buy")])])]),a("div",{staticClass:"cut-schedule"},[a("span",{staticClass:"cut"},[i._v("cut "),a("span",[i._v(i._s(e.bargain_info.bargain_rate)+"%")])]),a("div",{staticClass:"schedule"},[a("div",{staticClass:"active",style:{width:e.bargain_info.bargain_rate+"%"}})])])],1)])}),0)]):i._e()])},[],!1,null,"3c0dbfe7",null);e.default=c.exports},"1b4e":function(i,e,t){i.exports=t.p+"img/bargin-active-banner.ede30de9.png"},"31e7":function(i,e,t){"use strict";t.d(e,"c",function(){return n}),t.d(e,"d",function(){return o}),t.d(e,"a",function(){return r}),t.d(e,"e",function(){return s}),t.d(e,"b",function(){return d});var a=t("007a");function n(i){var e=i.bargain_id;return a.a.post({url:"/api/v1/bargain/get_bargain_info",data:{bargain_id:e}})}function o(i){var e=i.bargain_id,t=i.page_size,n=i.page_num;return a.a.post({url:"/api/v1/bargain/get_help_bargain_list",data:{bargain_id:e,page_size:t,page_num:n}})}function r(i){var e=i.bargain_id,t=i.spu_id;return a.a.post({url:"/api/v1/bargain/chop",data:{spu_id:t,bargain_id:e}})}function s(i){var e=i.page_size,t=void 0===e?10:e,n=i.page_num,o=void 0===n?1:n;return a.a.post({url:"/api/v1/spu/get_mybargain_spus",data:{page_size:t,page_num:o}})}function d(i){var e=i.relation_id;return a.a.post({url:"/api/v1/bargain/chop_share",data:{relation_id:e}})}},"3f9a":function(i,e,t){"use strict";t.r(e),t("5616");var a={name:"aCommodityThatIsBeingBargained",components:{countDown:function(i){return t.e("chunk-e5abdc10").then(function(){var e=[t("cd26")];i.apply(null,e)}.bind(this)).catch(t.oe)}},props:{spuBargainItem:{type:Object,default:function(){return{spu_id:1,title:"mock",bargain_rate:1,bargain_coin:"mock",expire_time:"mock",bargain_id:"mock"}}}},data:function(){return{expirationDat:{h:"00",p:"00",m:"00"},dialogs:{sharingFriends:{show:!1}},shareInfo:{}}},created:function(){this.init()},methods:{init:function(){this.refreshTime()},jumpPurchasePage:function(){var i=this.spuBargainItem,e=i.spu_id,t=i.bargain_id,a=i.order_no;this.$router.push({path:"/purchase",query:{spuId:e,bargainId:t,orderNo:a}})},refreshTime:function(){var i=this,e=this.$util.expiration(this.spuBargainItem.expire_time);if(e){this.expirationDat=e;var t=setInterval(function(){i.expirationDat=i.$util.expiration(i.spuBargainItem.expire_time)},1e3);this.$once("hook:beforeDestroy",function(){clearInterval(t)})}},jumpBargain:function(){this.$router.push({path:"/bargain",query:{spuId:this.spuBargainItem.spu_id,bargainId:this.spuBargainItem.bargain_id}})}}},n=(t("fbfa"),t("17cc")),o=Object(n.a)(a,function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"freebing-big-box"},[a("div",{staticClass:"freebing-container"},[a("div",{staticClass:"good-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.spuBargainItem.spu_pics&&i.spuBargainItem.spu_pics.length>0&&i.spuBargainItem.spu_pics[0],expression:"spuBargainItem.spu_pics&&spuBargainItem.spu_pics.length>0&&spuBargainItem.spu_pics[0]"}],staticClass:"good-img"}),a("div",{staticClass:"good-detail"},[a("p",{staticClass:"good-title"},[i._v(i._s(i.spuBargainItem.title))]),i.spuBargainItem.expire_ttl?a("count-down",{attrs:{dateDiff:i.spuBargainItem.expire_ttl}}):i._e(),a("div",{staticClass:"left-box"},[a("div",{staticClass:"num-box"},[a("span",{staticClass:"rp-box"},[i._v("Rp"+i._s(i.spuBargainItem.bargain_amount||0))]),a("span",{staticClass:"compeled"},[i._v("completed")])]),a("div",{staticClass:"progress"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t("ae4a"),expression:"require('@/assets/images/progress-bar.png')"}],attrs:{width:i.spuBargainItem.bargain_rate+"%"}}),a("div",{staticClass:"progress-content"},[a("span",[i._v(i._s(i.spuBargainItem.bargain_rate)+"%")])])])]),a("div",{staticClass:"goods-control"},[1==i.spuBargainItem.status?a("a",{staticClass:"go-on-btn",class:{"r-b":2==i.spuBargainItem.can_buy},attrs:{href:"javascrip:;"},on:{click:i.jumpBargain}},[i._v("\n            Go On\n          ")]):i._e(),1==i.spuBargainItem.can_buy?a("a",{staticClass:"buy-btn r-b",attrs:{href:"javascrip:;"},on:{click:i.jumpPurchasePage}},[i._v("Buy")]):i._e()])],1)])])])},[],!1,null,"53761fd4",null);e.default=o.exports},4467:function(i,e,t){"use strict";var a=t("b3de");t.n(a).a},"4f45":function(i,e,t){(function(i){var a=void 0!==i&&i||"undefined"!=typeof self&&self||window,n=Function.prototype.apply;function o(i,e){this._id=i,this._clearFn=e}e.setTimeout=function(){return new o(n.call(setTimeout,a,arguments),clearTimeout)},e.setInterval=function(){return new o(n.call(setInterval,a,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(i){i&&i.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(a,this._id)},e.enroll=function(i,e){clearTimeout(i._idleTimeoutId),i._idleTimeout=e},e.unenroll=function(i){clearTimeout(i._idleTimeoutId),i._idleTimeout=-1},e._unrefActive=e.active=function(i){clearTimeout(i._idleTimeoutId);var e=i._idleTimeout;e>=0&&(i._idleTimeoutId=setTimeout(function(){i._onTimeout&&i._onTimeout()},e))},t("de8a"),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==i&&i.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==i&&i.clearImmediate||this&&this.clearImmediate}).call(this,t("66fa"))},5454:function(i,e){i.exports=function(i){return"string"!=typeof i?i:(/^['"].*['"]$/.test(i)&&(i=i.slice(1,-1)),/["'() \t\n]/.test(i)?'"'+i.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':i)}},5616:function(i,e,t){"use strict";t.d(e,"c",function(){return n}),t.d(e,"a",function(){return o}),t.d(e,"b",function(){return r});var a=t("007a");function n(i){var e=i.spu_id;return a.a.get({url:"/api/v1/share/share_spu",data:{spu_id:e}})}function o(i){var e=i.bargain_id;return a.a.get({url:"/api/v1/share/share_bargain",data:{bargain_id:e}})}function r(i){var e=i.relation_id;return a.a.get({url:"/api/v1/share/get_share_info",data:{relation_id:e}})}},"571c":function(i,e,t){var a=t("5454");(i.exports=t("690e")(!1)).push([i.i,".isBargainingList-container .banner[data-v-3c0dbfe7]{width:100%;height:1.97333rem}.isBargainingList-container .banner>img[data-v-3c0dbfe7]{width:100%;height:100%}.isBargainingList-container>.finish-box[data-v-3c0dbfe7]{margin-bottom:.4rem}.isBargainingList-container>.finish-box>.goods-list[data-v-3c0dbfe7]{padding:.53333rem .4rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item[data-v-3c0dbfe7]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:1px solid #f2f2f2;padding-bottom:.53333rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item+.goods-item[data-v-3c0dbfe7]{margin-top:.53333rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.img-box[data-v-3c0dbfe7]{width:2.8rem;height:2.8rem;margin-right:.26667rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.img-box>img[data-v-3c0dbfe7]{width:100%}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail[data-v-3c0dbfe7]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.title[data-v-3c0dbfe7]{font-size:.37333rem;color:#323232;line-height:.49333rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.count-down[data-v-3c0dbfe7]{margin:.29333rem 0;font-size:.32rem;color:#585858;line-height:.41333rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.count-down>.time[data-v-3c0dbfe7]{display:inline-block;background-color:#585858;color:#fff;border-radius:.10667rem;padding:0 .08rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.count-down>.dec[data-v-3c0dbfe7]{padding-left:.16rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box[data-v-3c0dbfe7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box>.price-item[data-v-3c0dbfe7]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.btn[data-v-3c0dbfe7]{width:2.24rem;height:.88rem;line-height:.88rem;background:-webkit-linear-gradient(left,#f6ad01,#f64d01);background:linear-gradient(90deg,#f6ad01,#f64d01);border-radius:.45333rem;text-align:center;font-size:.45333rem;color:#fff;margin:.66667rem 0 .18667rem 0;display:inline-block}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.completed[data-v-3c0dbfe7]{display:inline-block;width:2.24rem;text-align:center;color:#888;font-size:.32rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.now-price[data-v-3c0dbfe7]{color:#d30c05;font-size:.48rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.now-price>span[data-v-3c0dbfe7]{font-size:.29333rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.real-price[data-v-3c0dbfe7]{color:#888;font-size:.32rem;text-decoration:line-through}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.real-price>span[data-v-3c0dbfe7]{font-size:.21333rem}.isBargainingList-container>.finish-box>.goods-list>.goods-item>.detail>.price-box>.price-item[data-v-3c0dbfe7]:last-of-type{text-align:right}.isBargainingList-container>.ing-box[data-v-3c0dbfe7]{margin-bottom:.4rem}.isBargainingList-container>.ing-box>.goods-list[data-v-3c0dbfe7]{padding:.53333rem .4rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item[data-v-3c0dbfe7]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:1px solid #f2f2f2;padding-bottom:.53333rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item+.goods-item[data-v-3c0dbfe7]{margin-top:.53333rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.img-box[data-v-3c0dbfe7]{width:2.8rem;height:2.8rem;margin-right:.26667rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.img-box>img[data-v-3c0dbfe7]{width:100%}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail[data-v-3c0dbfe7]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.title[data-v-3c0dbfe7]{width:100%;font-size:.37333rem;color:#323232;line-height:.49333rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.count-down[data-v-3c0dbfe7]{margin:0;font-size:.32rem;color:#585858;line-height:.41333rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.count-down>.time[data-v-3c0dbfe7]{display:inline-block;background-color:#585858;color:#fff;border-radius:.10667rem;padding:0 .08rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.count-down>.dec[data-v-3c0dbfe7]{padding-left:.16rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box[data-v-3c0dbfe7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item[data-v-3c0dbfe7]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.msg-box[data-v-3c0dbfe7]{display:inline-block;padding:0 .13333rem;min-width:2rem;height:.42667rem;background:url("+a(t("bac9"))+") no-repeat;background-size:100% 100%;text-align:center;color:#f65e10;font-size:.26667rem;line-height:.32rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.btn[data-v-3c0dbfe7]{width:2.24rem;height:.88rem;line-height:.88rem;background:-webkit-linear-gradient(left,#f6ad01,#f64d01);background:linear-gradient(90deg,#f6ad01,#f64d01);border-radius:.45333rem;text-align:center;font-size:.45333rem;color:#fff;margin:.53333rem 0 .18667rem 0;display:inline-block}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.completed[data-v-3c0dbfe7]{display:inline-block;width:2.24rem;text-align:center;color:#888;font-size:.32rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.now-price[data-v-3c0dbfe7]{color:#d30c05;font-size:.48rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.now-price>span[data-v-3c0dbfe7]{font-size:.29333rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.real-price[data-v-3c0dbfe7]{color:#888;font-size:.32rem;text-decoration:line-through}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item>.real-price>span[data-v-3c0dbfe7]{font-size:.21333rem}.isBargainingList-container>.ing-box>.goods-list>.goods-item>.detail>.price-box>.price-item[data-v-3c0dbfe7]:last-of-type{text-align:right}.go-on[data-v-3c0dbfe7]{background:-webkit-linear-gradient(left,#d30c05,#f64d01)!important;background:linear-gradient(90deg,#d30c05,#f64d01)!important;margin-top:0!important}.cut-schedule[data-v-3c0dbfe7]{margin-top:.26667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cut-schedule>.cut[data-v-3c0dbfe7]{color:#888;font-size:.24rem}.cut-schedule>.cut>span[data-v-3c0dbfe7]{font-size:.32rem;margin-right:.13333rem}.cut-schedule>.schedule[data-v-3c0dbfe7]{line-height:.26667rem;display:inline-block;margin-left:.13333rem;position:relative;width:4.53333rem;height:.21333rem;background:#fff;border:1px solid #fc7b77;border-radius:.10667rem}.cut-schedule>.schedule>.active[data-v-3c0dbfe7]{position:absolute;top:0;left:0;width:60%;height:100%;border-radius:.10667rem;background:-webkit-linear-gradient(315deg,#d50f04,#f54c01);background:linear-gradient(135deg,#d50f04,#f54c01)}.go-on-price-box[data-v-3c0dbfe7]{margin-top:.53333rem;position:relative}.go-on-price-box .go-on-item-btn[data-v-3c0dbfe7]{position:absolute;right:0;top:-.48rem;width:2.24rem;height:2rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse}",""])},"572f":function(i,e,t){(i.exports=t("690e")(!1)).push([i.i,".dec[data-v-71c843e8]{margin-right:.13333rem;font-size:.26667rem;font-weight:400;color:#585858;line-height:.56rem;position:relative;top:.04rem}.count-down[data-v-71c843e8]{margin:.29333rem 0;font-size:.32rem;color:#585858;line-height:.41333rem}.count-down>.time[data-v-71c843e8]{display:inline-block;background-color:#585858;color:#fff;border-radius:.10667rem;padding:0 .08rem}",""])},6577:function(i,e,t){"use strict";var a=t("77ce");t.n(a).a},6815:function(i,e,t){i.exports=t.p+"img/bargain-finish-banner.98d4a732.png"},7547:function(i,e,t){var a=t("0ee2");"string"==typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals),(0,t("85cb").default)("13be6ecb",a,!0,{sourceMap:!1,shadowMode:!1})},"77ce":function(i,e,t){var a=t("571c");"string"==typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals),(0,t("85cb").default)("cf651a2a",a,!0,{sourceMap:!1,shadowMode:!1})},ae4a:function(i,e){i.exports="data:image/png;base64,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"},b3de:function(i,e,t){var a=t("572f");"string"==typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals),(0,t("85cb").default)("23072a92",a,!0,{sourceMap:!1,shadowMode:!1})},bac9:function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAAhCAMAAADnJxkeAAAAaVBMVEUAAAD2XhD2XhD2XhD2XhH2XhD2XhD3ayT2XhD2XhD2XhD2XhD2XhD2XhD2ZBj2XhD2XhD2XhD2XhD2XhD////2XhD7s4/3djP+7ub+7OP7q4P//v3/9/T91sL7uJX5jlb4iE/94dL94NHXL+XfAAAAFHRSTlMAh3UI5vpt/c/HfFpNFfnzo6ExL9Sa/bAAAACdSURBVFjD7ddLEoJADIThlsyMoOAzUUER9P6HtKZKXM+yq8x/gm+RRQeApGZvJMVwPCPX1dP4UJLu/XNdAZB6UKpu1y2QJiXrHQTNqGzNLSLNTf0aNjCl67JylavUVeW5qjxXleeq8v5ExbkZ5pZQ9QrCp8q7nUy1/Di2CI2icDghq76oCkwZIwrGiIIxomCMKFhPiELcJfAlHfj6AHPDJG7O/zwRAAAAAElFTkSuQmCC"},cd26:function(i,e,t){"use strict";t.r(e);var a=t("4f45"),n={data:function(){return{time:{h:"00",m:"00",s:"00"},setIntervalBox:null,newTime:0}},props:{dateDiff:{default:0}},mounted:function(){this.startCountDown()},destroyed:function(){Object(a.clearInterval)(this.setIntervalBox)},methods:{getDifferTime:function(i){this.time=this.$util.expiration(i)},startCountDown:function(){var i=this;Object(a.clearInterval)(this.setIntervalBox),this.newTime=this.dateDiff,this.setIntervalBox=Object(a.setInterval)(function(){i.newTime>1e3?(i.newTime-=1e3,i.getDifferTime(i.newTime)):Object(a.clearInterval)(i.setIntervalBox)},1e3)}},watch:{dateDiff:function(i){this.startCountDown()}}},o=(t("4467"),t("17cc")),r=Object(o.a)(n,function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"count-down"},[t("span",{staticClass:"dec"},[i._v("End in")]),t("span",{staticClass:"time"},[i._v(i._s(i.time.h))]),i._v("\n  :\n  "),t("span",{staticClass:"time"},[i._v(i._s(i.time.p))]),i._v("\n  :\n  "),t("span",{staticClass:"time"},[i._v(i._s(i.time.m))])])},[],!1,null,"71c843e8",null);e.default=r.exports},de8a:function(i,e,t){(function(i,e){!function(i,t){"use strict";if(!i.setImmediate){var a,n,o,r,s,d=1,c={},g=!1,l=i.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(i);f=f&&f.setTimeout?f:i,"[object process]"==={}.toString.call(i.process)?a=function(i){e.nextTick(function(){p(i)})}:function(){if(i.postMessage&&!i.importScripts){var e=!0,t=i.onmessage;return i.onmessage=function(){e=!1},i.postMessage("","*"),i.onmessage=t,e}}()?(r="setImmediate$"+Math.random()+"$",s=function(e){e.source===i&&"string"==typeof e.data&&0===e.data.indexOf(r)&&p(+e.data.slice(r.length))},i.addEventListener?i.addEventListener("message",s,!1):i.attachEvent("onmessage",s),a=function(e){i.postMessage(r+e,"*")}):i.MessageChannel?((o=new MessageChannel).port1.onmessage=function(i){p(i.data)},a=function(i){o.port2.postMessage(i)}):l&&"onreadystatechange"in l.createElement("script")?(n=l.documentElement,a=function(i){var e=l.createElement("script");e.onreadystatechange=function(){p(i),e.onreadystatechange=null,n.removeChild(e),e=null},n.appendChild(e)}):a=function(i){setTimeout(p,0,i)},f.setImmediate=function(i){"function"!=typeof i&&(i=new Function(""+i));for(var e=new Array(arguments.length-1),t=0;t<e.length;t++)e[t]=arguments[t+1];var n={callback:i,args:e};return c[d]=n,a(d),d++},f.clearImmediate=m}function m(i){delete c[i]}function p(i){if(g)setTimeout(p,0,i);else{var e=c[i];if(e){g=!0;try{!function(i){var e=i.callback,a=i.args;switch(a.length){case 0:e();break;case 1:e(a[0]);break;case 2:e(a[0],a[1]);break;case 3:e(a[0],a[1],a[2]);break;default:e.apply(t,a)}}(e)}finally{m(i),g=!1}}}}}("undefined"==typeof self?void 0===i?this:i:self)}).call(this,t("66fa"),t("60ac"))},fbfa:function(i,e,t){"use strict";var a=t("7547");t.n(a).a}}]);