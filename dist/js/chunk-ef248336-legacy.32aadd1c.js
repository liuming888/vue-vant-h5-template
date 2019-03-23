(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ef248336"],{1933:function(t,a,e){},"33cf":function(t,a,e){"use strict";var n=e("d2e4");e.n(n).a},4107:function(t,a,e){"use strict";var n={name:"dialog-default",props:{dialogVisible:{type:Boolean,default:!1},noCancle:{type:Boolean,default:!1},info:{type:Object,default:{content:"test",cancleText:"cancel",okText:"ok",delId:0}}},methods:{closeDialog:function(){this.$emit("update:dialogVisible",!1)},okHandle:function(){this.$emit("ok",this.info.delId),this.closeDialog()}}},i=(e("33cf"),e("17cc")),s=Object(i.a)(n,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogVisible,expression:"dialogVisible"}],staticClass:"dialog-default"},[e("div",{staticClass:"bg",on:{click:function(a){return a.stopPropagation(),t.closeDialog()}}}),e("div",{staticClass:"dialog-container"},[e("div",{staticClass:"content"},[e("span",[t._v(t._s(t.info.content))]),t._t("content")],2),e("div",{staticClass:"footer"},[t.noCancle?t._e():e("div",{staticClass:"cancel",on:{click:t.closeDialog}},[t._v(t._s(t.info.cancelText||"cancel"))]),e("div",{staticClass:"ok",on:{click:t.okHandle}},[t._v(t._s(t.info.okText||"ok"))])])])])},[],!1,null,"042141a6",null);a.a=s.exports},"4d17":function(t,a,e){"use strict";var n=e("62e6");e.n(n).a},"4e5b":function(t,a,e){"use strict";e("36d9"),e("2bf8"),e("1933")},"5de4":function(t,a,e){"use strict";e.d(a,"d",function(){return i}),e.d(a,"a",function(){return s}),e.d(a,"c",function(){return r}),e.d(a,"b",function(){return c});var n=e("007a");function i(){return n.a.post({url:"/api/v1/withdraw/get_withdraw_info"})}function s(t){var a=t.pay_type,e=t.account_name,i=t.account_no,s=t.amount;return n.a.post({url:"/api/v1/withdraw/apply_withdraw",data:{pay_type:a,account_name:e,account_no:i,amount:s}})}function r(t){var a=t.page_size,e=t.page_num;return n.a.post({url:"/api/v1/withdraw/get_fund_record_list",data:{page_size:a,page_num:e}})}function c(t){var a=t.currency_code,e=void 0===a?"IDR":a;return n.a.post({url:"/api/v1/currency/get_exchange_rate",data:{currency_code:e}})}},"62e6":function(t,a,e){},"7a57":function(t,a,e){"use strict";e.r(a),e("b5aa");var n,i=e("2c46"),s=e("d4fd"),r=(e("4e5b"),e("2774")),c=(e("3a23"),e("f01a"),e("f20e")),o=e("4107"),u=e("5de4"),l={components:(n={DialogDefault:o.a},Object(s.a)(n,c.a.name,c.a),Object(s.a)(n,r.a.name,r.a),n),data:function(){return{info:{content:"Withdrawal rules",cancleText:"cancel",okText:"I know"},dialogVisible:!1,username:"",password:"",amount:"",name:"",account:"",showAlert:!1,withdrawParam:{pay_type:1,account_name:"",account_no:"",amount:""},rule:[],pay_type:[],user_fund:{balance:0,withdraw_amount:0}}},created:function(){this.initWithdrawInfo()},methods:{initWithdrawInfo:function(){var t=Object(i.a)(regeneratorRuntime.mark(function t(){var a,e,n,i,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.d)();case 2:(a=t.sent)&&a.data&&(e=a.data,n=e.rule,i=e.pay_type,s=e.user_fund,this.rule=n,this.pay_type=i,this.user_fund=s,this.withdrawParam.pay_type=this.pay_type[0].type,this.withdrawParam.amount=this.user_fund.withdraw_amount);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),goApplyWithdraw:function(){var t=Object(i.a)(regeneratorRuntime.mark(function t(){var a,e,n,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=this.withdrawParam,e=a.account_name,n=a.account_no,e&&n){t.next=4;break}return r.a.alert({message:"Informasi akun tidak boleh kosong",confirmButtonText:"Tentukan"}),t.abrupt("return");case 4:if(e===n){t.next=7;break}return r.a.alert({message:"Akun tidak konsisten dimasukkan dua kali",confirmButtonText:"Tentukan"}),t.abrupt("return");case 7:return t.next=10,Object(u.a)(this.withdrawParam);case 10:(i=t.sent)&&0==i.code&&(this.showAlert=!0);case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),setScheduleItemCls:function(t,a){var e=this.user_fund.withdraw_amount;return[{"ball-left":0==a},{"ball-active":e>=t.amount},"ball-center-".concat(a),{"ball-right":a==this.rule.length-1},{"ball-center-cur":a>0&&e>this.rule[a-1].amount&&e<t.amount||e<t.amount&&1==a}]},cashOk:function(){this.$router.push("/my")}}},d=(e("4d17"),e("17cc")),h=Object(d.a)(l,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"withdrawImmediately-container"},[t.showAlert?e("div",{staticClass:"alertBox"},[e("div",{staticClass:"alertWrap"},[e("h1",[t._v("Withdrawal application")]),t._m(0),e("div",{on:{click:t.cashOk}},[t._v("I know")])])]):t._e(),e("div",{staticClass:"balance-box"},[e("div",{staticClass:"current-balance"},[e("h5",{staticClass:"tit"},[t._v("Current balance")]),e("div",{staticClass:"balance-item"},[e("span",{staticClass:"units"},[t._v("Rp")]),e("span",{staticClass:"balance-num"},[t._v(t._s(t.user_fund.balance))])])]),e("div",{staticClass:"can-withdraw"},[e("h5",{staticClass:"tit"},[t._v("Can withdraw")]),e("div",{staticClass:"balance-item"},[e("span",{staticClass:"units"},[t._v("Rp")]),e("span",{staticClass:"balance-num"},[t._v(t._s(t.user_fund.withdraw_amount))])])])]),e("div",{staticClass:"play-box"},[e("div",{staticClass:"top-txt"},[e("div",{staticClass:"cash-withdrawal-method"},[t._v("Cash withdrawal method")]),e("div",{staticClass:"embodiment-statement",on:{click:function(a){t.dialogVisible=!0}}},[t._v("Introduction")])]),e("div",{staticClass:"play-types"},t._l(t.pay_type,function(a,n){return e("div",{key:n,staticClass:"play-item",class:{active:a.type==t.withdrawParam.pay_type},on:{click:function(e){t.withdrawParam.pay_type=a.type}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.icon,expression:"item.icon"}],staticClass:"play-img"})])}),0)]),e("div",{staticClass:"list"},[e("ul",[e("li",[e("span",[t._v("Withdrawal Amount")]),e("span",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.user_fund.withdraw_amount))])]),e("li",[e("span",[t._v("Account Name")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.withdrawParam.account_name,expression:"withdrawParam.account_name",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:t.withdrawParam.account_name},on:{input:function(a){a.target.composing||t.$set(t.withdrawParam,"account_name",a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}})]),e("li",[e("span",[t._v("Confirm the account")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.withdrawParam.account_no,expression:"withdrawParam.account_no",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:t.withdrawParam.account_no},on:{input:function(a){a.target.composing||t.$set(t.withdrawParam,"account_no",a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}})])])]),e("div",{staticClass:"cash-withdrawal-box"},[e("p",{staticClass:"cash-withdrawal-tit"},[t._v("Cash withdrawal method")]),e("div",{staticClass:"progress-box"},[e("div",{staticClass:"schedule"},[e("div",{staticClass:"active",style:{width:t.rule.length?t.user_fund.withdraw_amount/t.rule[t.rule.length-1].amount*100+"%":"0%"}}),t._l(t.rule,function(a,n){return e("div",{key:n,staticClass:"schedule-item ball",class:t.setScheduleItemCls(a,n)},[e("span",{staticClass:"description"},[t._v("Rp"+t._s(a.threshold))])])})],2)])]),e("div",{staticClass:"cash-out-btn",on:{click:function(a){return a.stopPropagation(),t.goApplyWithdraw(a)}}},[t._v("Cash out")]),e("dialog-default",{attrs:{info:t.info,dialogVisible:t.dialogVisible,noCancle:""},on:{ok:function(a){t.dialogVisible=!1}}},[e("div",{staticClass:"cash-description",attrs:{slot:"content"},slot:"content"},[e("p",[t._v("1. The balance is over 88 rounds, and 8 rounds can be withdrawn. The arrival time is the same day;")]),e("p",[t._v("2. The balance is 338 rounds, 138 rounds can be withdrawn, and the time of arrival is 3-5 working days;")]),e("p",[t._v("3. The balance is 438 rounds, 188 rounds can be withdrawn, and the time of arrival is 7-14 working days;")]),e("p",[t._v("4. The balance is 538 rounds, 238 rounds can be withdrawn, and the time of arrival is 15-20 working days;")])])])],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("\n        Your withdrawal request has been initiated, please check it out!\n        "),a("br"),this._v("If you have any questions, please ask customer service\n      ")])}],!1,null,"30c6ff78",null);a.default=h.exports},d2e4:function(t,a,e){},f01a:function(t,a,e){"use strict";e("36d9")}}]);