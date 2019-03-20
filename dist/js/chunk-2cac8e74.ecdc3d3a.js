(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cac8e74"],{"0529":function(t,a,e){"use strict";var n=e("bb80"),i=e.n(n);i.a},1933:function(t,a,e){},"33cf":function(t,a,e){"use strict";var n=e("d2e4"),i=e.n(n);i.a},4107:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogVisible,expression:"dialogVisible"}],staticClass:"dialog-default"},[e("div",{staticClass:"bg",on:{click:function(a){return a.stopPropagation(),t.closeDialog()}}}),e("div",{staticClass:"dialog-container"},[e("div",{staticClass:"content"},[e("span",[t._v(t._s(t.info.content))]),t._t("content")],2),e("div",{staticClass:"footer"},[t.noCancle?t._e():e("div",{staticClass:"cancel",on:{click:t.closeDialog}},[t._v(t._s(t.info.cancelText||"cancel"))]),e("div",{staticClass:"ok",on:{click:t.okHandle}},[t._v(t._s(t.info.okText||"ok"))])])])])},i=[],s={name:"dialog-default",props:{dialogVisible:{type:Boolean,default:!1},noCancle:{type:Boolean,default:!1},info:{type:Object,default:{content:"test",cancleText:"cancel",okText:"ok",delId:0}}},methods:{closeDialog:function(){this.$emit("update:dialogVisible",!1)},okHandle:function(){this.$emit("ok",this.info.delId),this.closeDialog()}}},r=s,c=(e("33cf"),e("17cc")),o=Object(c["a"])(r,n,i,!1,null,"042141a6",null);a["a"]=o.exports},"5de4":function(t,a,e){"use strict";e.d(a,"d",function(){return i}),e.d(a,"a",function(){return s}),e.d(a,"c",function(){return r}),e.d(a,"b",function(){return c});var n=e("007a");function i(){return n["a"].post({url:"/api/v1/withdraw/get_withdraw_info"})}function s(t){var a=t.pay_type,e=t.account_name,i=t.account_no,s=t.amount;return n["a"].post({url:"/api/v1/withdraw/apply_withdraw",data:{pay_type:a,account_name:e,account_no:i,amount:s}})}function r(t){var a=t.page_size,e=t.page_num;return n["a"].post({url:"/api/v1/withdraw/get_fund_record_list",data:{page_size:a,page_num:e}})}function c(t){var a=t.currency_code,e=void 0===a?"IDR":a;return n["a"].post({url:"/api/v1/currency/get_exchange_rate",data:{currency_code:e}})}},"789e":function(t,a,e){"use strict";e.r(a);var n,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"withdrawImmediately-container"},[t.showAlert?e("div",{staticClass:"alertBox"},[e("div",{staticClass:"alertWrap"},[e("h1",[t._v("Withdrawal application")]),t._m(0),e("div",{on:{click:t.cashOk}},[t._v("I know")])])]):t._e(),e("div",{staticClass:"balance-box"},[e("div",{staticClass:"current-balance"},[e("h5",{staticClass:"tit"},[t._v("Current balance")]),e("div",{staticClass:"balance-item"},[e("span",{staticClass:"units"},[t._v("Rp")]),e("span",{staticClass:"balance-num"},[t._v(t._s(t.user_fund.balance))])])]),e("div",{staticClass:"can-withdraw"},[e("h5",{staticClass:"tit"},[t._v("Can withdraw")]),e("div",{staticClass:"balance-item"},[e("span",{staticClass:"units"},[t._v("Rp")]),e("span",{staticClass:"balance-num"},[t._v(t._s(t.user_fund.withdraw_amount))])])])]),e("div",{staticClass:"play-box"},[e("div",{staticClass:"top-txt"},[e("div",{staticClass:"cash-withdrawal-method"},[t._v("Cash withdrawal method")]),e("div",{staticClass:"embodiment-statement",on:{click:function(a){t.dialogVisible=!0}}},[t._v("Introduction")])]),e("div",{staticClass:"play-types"},t._l(t.pay_type,function(a,n){return e("div",{key:n,staticClass:"play-item",class:{active:a.type==t.withdrawParam.pay_type},on:{click:function(e){t.withdrawParam.pay_type=a.type}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.icon,expression:"item.icon"}],staticClass:"play-img"})])}),0)]),e("div",{staticClass:"list"},[e("ul",[e("li",[e("span",[t._v("Withdrawal Amount")]),e("span",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.user_fund.withdraw_amount))])]),e("li",[e("span",[t._v("Account Name")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.withdrawParam.account_name,expression:"withdrawParam.account_name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Papal110"},domProps:{value:t.withdrawParam.account_name},on:{input:function(a){a.target.composing||t.$set(t.withdrawParam,"account_name",a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}})]),e("li",[e("span",[t._v("Confirm the account")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.withdrawParam.account_no,expression:"withdrawParam.account_no",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Papal110"},domProps:{value:t.withdrawParam.account_no},on:{input:function(a){a.target.composing||t.$set(t.withdrawParam,"account_no",a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}})])])]),e("div",{staticClass:"cash-withdrawal-box"},[e("p",{staticClass:"cash-withdrawal-tit"},[t._v("Cash withdrawal method")]),e("div",{staticClass:"progress-box"},[e("div",{staticClass:"schedule"},[e("div",{staticClass:"active",style:{width:t.rule.length?t.user_fund.withdraw_amount/t.rule[t.rule.length-1].amount*100+"%":"0%"}}),t._l(t.rule,function(a,n){return e("div",{key:n,staticClass:"schedule-item ball",class:t.setScheduleItemCls(a,n)},[e("span",{staticClass:"description"},[t._v("Rp"+t._s(a.threshold))])])})],2)])]),e("div",{staticClass:"cash-out-btn",on:{click:function(a){return a.stopPropagation(),t.goApplyWithdraw(a)}}},[t._v("Cash out")]),e("dialog-default",{attrs:{info:t.info,dialogVisible:t.dialogVisible,noCancle:""},on:{ok:function(a){t.dialogVisible=!1}}},[e("div",{staticClass:"cash-description",attrs:{slot:"content"},slot:"content"},[e("p",[t._v("1. The balance is over 88 rounds, and 8 rounds can be withdrawn. The arrival time is the same day;")]),e("p",[t._v("2. The balance is 338 rounds, 138 rounds can be withdrawn, and the time of arrival is 3-5 working days;")]),e("p",[t._v("3. The balance is 438 rounds, 188 rounds can be withdrawn, and the time of arrival is 7-14 working days;")]),e("p",[t._v("4. The balance is 538 rounds, 238 rounds can be withdrawn, and the time of arrival is 15-20 working days;")])])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("\n        Your withdrawal request has been initiated, please check it out!\n        "),e("br"),t._v("If you have any questions, please ask customer service\n      ")])}],r=(e("b5aa"),e("2c46")),c=e("d4fd"),o=(e("36d9"),e("2bf8"),e("1933"),e("2774")),l=(e("3a23"),e("f01a"),e("f20e")),u=e("4107"),d=e("5de4"),h={components:(n={DialogDefault:u["a"]},Object(c["a"])(n,l["a"].name,l["a"]),Object(c["a"])(n,o["a"].name,o["a"]),n),data:function(){return{info:{content:"Withdrawal rules",cancleText:"cancel",okText:"I know"},dialogVisible:!1,username:"",password:"",amount:"",name:"",account:"",showAlert:!1,withdrawParam:{pay_type:1,account_name:"",account_no:"",amount:""},rule:[],pay_type:[],user_fund:{balance:0,withdraw_amount:0}}},created:function(){this.initWithdrawInfo()},methods:{initWithdrawInfo:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var a,e,n,i,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["d"])();case 2:a=t.sent,a&&a.data&&(e=a.data,n=e.rule,i=e.pay_type,s=e.user_fund,this.rule=n,this.pay_type=i,this.user_fund=s,this.withdrawParam.pay_type=this.pay_type[0].type,this.withdrawParam.amount=this.user_fund.withdraw_amount);case 4:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),goApplyWithdraw:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var a,e,n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=this.withdrawParam,e=a.account_name,n=a.account_no,e&&n){t.next=4;break}return o["a"].alert({message:"Informasi akun tidak boleh kosong",confirmButtonText:"Tentukan"}),t.abrupt("return");case 4:if(e===n){t.next=7;break}return o["a"].alert({message:"Akun tidak konsisten dimasukkan dua kali",confirmButtonText:"Tentukan"}),t.abrupt("return");case 7:return console.log("this.withdrawParam",this.withdrawParam),t.next=10,Object(d["a"])(this.withdrawParam);case 10:i=t.sent,i&&0==i.code&&(this.showAlert=!0);case 12:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),setScheduleItemCls:function(t,a){var e=this.user_fund.withdraw_amount;return[{"ball-left":0==a},{"ball-active":e>=t.amount},"ball-center-".concat(a),{"ball-right":a==this.rule.length-1},{"ball-center-cur":a>0&&e>this.rule[a-1].amount&&e<t.amount||e<t.amount&&1==a}]},cashOk:function(){console.log("ok"),this.$router.push("/my")}}},p=h,m=(e("0529"),e("17cc")),w=Object(m["a"])(p,i,s,!1,null,"0eaa86e8",null);a["default"]=w.exports},bb80:function(t,a,e){},d2e4:function(t,a,e){},f01a:function(t,a,e){"use strict";e("36d9")}}]);