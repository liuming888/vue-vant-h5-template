(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d9b4b64"],{"33cf":function(a,t,e){"use strict";var n=e("d2e4"),i=e.n(n);i.a},4107:function(a,t,e){"use strict";var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:a.dialogVisible,expression:"dialogVisible"}],staticClass:"dialog-default"},[e("div",{staticClass:"bg",on:{click:function(t){return t.stopPropagation(),a.closeDialog()}}}),e("div",{staticClass:"dialog-container"},[e("div",{staticClass:"content"},[e("span",[a._v(a._s(a.info.content))]),a._t("content")],2),e("div",{staticClass:"footer"},[a.noCancle?a._e():e("div",{staticClass:"cancel",on:{click:a.closeDialog}},[a._v(a._s(a.info.cancelText||"cancel"))]),e("div",{staticClass:"ok",on:{click:a.okHandle}},[a._v(a._s(a.info.okText||"ok"))])])])])},i=[],s={name:"dialog-default",props:{dialogVisible:{type:Boolean,default:!1},noCancle:{type:Boolean,default:!1},info:{type:Object,default:{content:"test",cancleText:"cancel",okText:"ok",delId:0}}},methods:{closeDialog(){this.$emit("update:dialogVisible",!1)},okHandle(){this.$emit("ok",this.info.delId),this.closeDialog()}}},o=s,r=(e("33cf"),e("17cc")),c=Object(r["a"])(o,n,i,!1,null,"042141a6",null);t["a"]=c.exports},"4d17":function(a,t,e){"use strict";var n=e("62e6"),i=e.n(n);i.a},"5de4":function(a,t,e){"use strict";e.d(t,"d",function(){return i}),e.d(t,"a",function(){return s}),e.d(t,"c",function(){return o}),e.d(t,"b",function(){return r});var n=e("007a");function i(){return n["a"].post({url:"/api/v1/withdraw/get_withdraw_info"})}function s(a){let t=a.pay_type,e=a.account_name,i=a.account_no,s=a.amount;return n["a"].post({url:"/api/v1/withdraw/apply_withdraw",data:{pay_type:t,account_name:e,account_no:i,amount:s}})}function o(a){let t=a.page_size,e=a.page_num;return n["a"].post({url:"/api/v1/withdraw/get_fund_record_list",data:{page_size:t,page_num:e}})}function r(a){let t=a.currency_code,e=void 0===t?"IDR":t;return n["a"].post({url:"/api/v1/currency/get_exchange_rate",data:{currency_code:e}})}},"62e6":function(a,t,e){},"7a57":function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"withdrawImmediately-container"},[a.showAlert?e("div",{staticClass:"alertBox"},[e("div",{staticClass:"alertWrap"},[e("h1",[a._v("Withdrawal application")]),a._m(0),e("div",{on:{click:a.cashOk}},[a._v("I know")])])]):a._e(),e("div",{staticClass:"balance-box"},[e("div",{staticClass:"current-balance"},[e("h5",{staticClass:"tit"},[a._v("Current balance")]),e("div",{staticClass:"balance-item"},[e("span",{staticClass:"units"},[a._v("Rp")]),e("span",{staticClass:"balance-num"},[a._v(a._s(a.user_fund.balance))])])]),e("div",{staticClass:"can-withdraw"},[e("h5",{staticClass:"tit"},[a._v("Can withdraw")]),e("div",{staticClass:"balance-item"},[e("span",{staticClass:"units"},[a._v("Rp")]),e("span",{staticClass:"balance-num"},[a._v(a._s(a.user_fund.withdraw_amount))])])])]),e("div",{staticClass:"play-box"},[e("div",{staticClass:"top-txt"},[e("div",{staticClass:"cash-withdrawal-method"},[a._v("Cash withdrawal method")]),e("div",{staticClass:"embodiment-statement",on:{click:function(t){a.dialogVisible=!0}}},[a._v("Introduction")])]),e("div",{staticClass:"play-types"},a._l(a.pay_type,function(t,n){return e("div",{key:n,staticClass:"play-item",class:{active:t.type==a.withdrawParam.pay_type},on:{click:function(e){a.withdrawParam.pay_type=t.type}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.icon,expression:"item.icon"}],staticClass:"play-img"})])}),0)]),e("div",{staticClass:"list"},[e("ul",[e("li",[e("span",[a._v("Withdrawal Amount")]),e("span",{staticStyle:{"text-align":"right"}},[a._v(a._s(a.user_fund.withdraw_amount))])]),e("li",[e("span",[a._v("Account Name")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:a.withdrawParam.account_name,expression:"withdrawParam.account_name",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:a.withdrawParam.account_name},on:{input:function(t){t.target.composing||a.$set(a.withdrawParam,"account_name",t.target.value.trim())},blur:function(t){return a.$forceUpdate()}}})]),e("li",[e("span",[a._v("Confirm the account")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:a.withdrawParam.account_no,expression:"withdrawParam.account_no",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:a.withdrawParam.account_no},on:{input:function(t){t.target.composing||a.$set(a.withdrawParam,"account_no",t.target.value.trim())},blur:function(t){return a.$forceUpdate()}}})])])]),e("div",{staticClass:"cash-withdrawal-box"},[e("p",{staticClass:"cash-withdrawal-tit"},[a._v("Cash withdrawal method")]),e("div",{staticClass:"progress-box"},[e("div",{staticClass:"schedule"},[e("div",{staticClass:"active",style:{width:a.rule.length?a.user_fund.withdraw_amount/a.rule[a.rule.length-1].amount*100+"%":"0%"}}),a._l(a.rule,function(t,n){return e("div",{key:n,staticClass:"schedule-item ball",class:a.setScheduleItemCls(t,n)},[e("span",{staticClass:"description"},[a._v("Rp"+a._s(t.threshold))])])})],2)])]),e("div",{staticClass:"cash-out-btn",on:{click:function(t){return t.stopPropagation(),a.goApplyWithdraw(t)}}},[a._v("Cash out")]),e("dialog-default",{attrs:{info:a.info,dialogVisible:a.dialogVisible,noCancle:""},on:{ok:function(t){a.dialogVisible=!1}}},[e("div",{staticClass:"cash-description",attrs:{slot:"content"},slot:"content"},[e("p",[a._v("1. The balance is over 88 rounds, and 8 rounds can be withdrawn. The arrival time is the same day;")]),e("p",[a._v("2. The balance is 338 rounds, 138 rounds can be withdrawn, and the time of arrival is 3-5 working days;")]),e("p",[a._v("3. The balance is 438 rounds, 188 rounds can be withdrawn, and the time of arrival is 7-14 working days;")]),e("p",[a._v("4. The balance is 538 rounds, 238 rounds can be withdrawn, and the time of arrival is 15-20 working days;")])])])],1)},i=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",[a._v("\n        Your withdrawal request has been initiated, please check it out!\n        "),e("br"),a._v("If you have any questions, please ask customer service\n      ")])}],s=e("0348"),o=(e("4e5b"),e("2774")),r=(e("f01a"),e("f20e")),c=e("4107"),l=e("5de4"),u={components:{DialogDefault:c["a"],[r["a"].name]:r["a"],[o["a"].name]:o["a"]},data(){return{info:{content:"Withdrawal rules",cancleText:"cancel",okText:"I know"},dialogVisible:!1,username:"",password:"",amount:"",name:"",account:"",showAlert:!1,withdrawParam:{pay_type:1,account_name:"",account_no:"",amount:""},rule:[],pay_type:[],user_fund:{balance:0,withdraw_amount:0}}},created(){this.initWithdrawInfo()},methods:{initWithdrawInfo(){var a=this;return Object(s["a"])(function*(){let t=yield Object(l["d"])();if(t&&t.data){const e=t.data,n=e.rule,i=e.pay_type,s=e.user_fund;a.rule=n,a.pay_type=i,a.user_fund=s,a.withdrawParam.pay_type=a.pay_type[0].type,a.withdrawParam.amount=a.user_fund.withdraw_amount}})()},goApplyWithdraw(){var a=this;return Object(s["a"])(function*(){const t=a.withdrawParam,e=t.account_name,n=t.account_no;if(!e||!n)return void o["a"].alert({message:"Informasi akun tidak boleh kosong",confirmButtonText:"Tentukan"});if(e!==n)return void o["a"].alert({message:"Akun tidak konsisten dimasukkan dua kali",confirmButtonText:"Tentukan"});console.log("this.withdrawParam",a.withdrawParam);let i=yield Object(l["a"])(a.withdrawParam);i&&0==i.code&&(a.showAlert=!0)})()},setScheduleItemCls(a,t){let e=this.user_fund.withdraw_amount;return[{"ball-left":0==t},{"ball-active":e>=a.amount},`ball-center-${t}`,{"ball-right":t==this.rule.length-1},{"ball-center-cur":t>0&&e>this.rule[t-1].amount&&e<a.amount||e<a.amount&&1==t}]},cashOk(){console.log("ok"),this.$router.push("/my")}}},d=u,h=(e("4d17"),e("17cc")),m=Object(h["a"])(d,n,i,!1,null,"30c6ff78",null);t["default"]=m.exports},d2e4:function(a,t,e){},f01a:function(a,t,e){"use strict";e("36d9")}}]);