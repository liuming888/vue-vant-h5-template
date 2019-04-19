<style lang="scss" scoped src="./withdrawImmediately.scss"></style>

<template>
  <div class="withdrawImmediately-container">

    <!-- 提现成功弹窗 -->
    <div class="alertBox"
      v-if="showAlert">
      <div class="alertWrap">
        <h1>{{$t('withdrawImmediately.withdrawalApplication')}}</h1>
        <p>
          {{$t('withdrawImmediately.pleaseCheckItOut')}}
          <br>{{$t('withdrawImmediately.pleaseAskCustomerService')}}
        </p>
        <div @click="cashOk">{{$t('withdrawImmediately.iKnow')}}</div>
      </div>
    </div>

    <div class="balance-box border-bttom">
      <div class="current-balance">
        <h5 class="tit">{{$t('withdrawImmediately.currentBalance')}}</h5>
        <div class="balance-item">
          <span class="units">Rp</span>
          <span class="balance-num">{{user_fund.balance}}</span>
        </div>
      </div>

      <div class="can-withdraw">
        <h5 class="tit">{{$t('withdrawImmediately.canWithdraw')}}</h5>
        <div class="balance-item">
          <span class="units">Rp</span>
          <span class="balance-num">{{user_fund.withdraw_amount}}</span>
        </div>
      </div>
    </div>
    <div class="border-bttom border-bttom2">
      <div class="play-box ">
        <div class="top-txt">
          <div class="cash-withdrawal-method">{{$t('withdrawImmediately.cashWithdrawalMethod')}}</div>
          <div class="embodiment-statement"
            @click="goHash">{{$t('withdrawImmediately.introduction')}}</div>
        </div>

        <div class="play-types clearfix">
          <div class="play-item"
            v-for="(item,index) of pay_type"
            :class="{active:item.type==withdrawParam.pay_type}"
            @click="withdrawParam.pay_type=item.type"
            :key="index">
            <img :src="item.icon"
              class="play-img">
            <!-- <span class="play-txt">{{item.name}}</span> -->
          </div>
        </div>
      </div>

      <div v-if="withdrawParam.pay_type === 2"
        class="operator-type play-box">
        <div class="top-txt">
          <div class="cash-withdrawal-method">{{$t('withdrawImmediately.operator')}}</div>
        </div>
        <div class="play-types clearfix">
          <div class="play-item"
            v-for="(item,index) of operatorList"
            :class="{active:item.product_id==withdrawParam.product_id||!withdrawParam.product_id&&index==0}"
            @click="setProduct(item,index)"
            :key="index">
            <img :src="item.product_pic"
              class="play-img">
          </div>
        </div>
      </div>

      <div class="play-box"
        v-if="withdrawParam.pay_type === 2">
        <div class="top-txt">
          <div class="cash-withdrawal-method">{{$t('withdrawImmediately.rechargeDenomination')}}</div>
        </div>
        <div class="play-types clearfix play-types2">
          <div class="play-item"
            v-for="(item,index) of rechargeDenominations"
            :class="{
              active:currentRechargeDenomination===item,
              invalid: user_fund.withdraw_amount<item,
            }"
            @click="handleRechargeDenominations(item)"
            :key="index">
            <span>Rp </span><span>{{moneyFormat(item)}}</span>
            <!-- <span class="play-txt">{{item.name}}</span> -->
          </div>
        </div>

      </div>
    </div>

    <div class="list border-bttom border-bttom-no">
      <ul v-if="withdrawParam.pay_type !== 2">
        <li>
          <span>{{$t('withdrawImmediately.withdrawalAmount')}}</span>
          <!-- <input v-model="amount"
            type="text"
            placeholder="Enter the amount"> -->
          <span style="text-align: right;">{{user_fund.withdraw_amount}}</span>
        </li>
        <li>
          <span>{{$t('withdrawImmediately.accountName')}}</span>
          <input v-model.trim="withdrawParam.account_name"
            onfocus="this.select();"
            @blur="mx_resizeWindow"
            :placeholder="$t('withdrawImmediately.enterTheAmount')"
            type="text">
        </li>
        <li>
          <span>{{$t('withdrawImmediately.confirmTheAccount')}}</span>
          <input v-model.trim="withdrawParam.account_no"
            onfocus="this.select();"
            @blur="mx_resizeWindow"
            :placeholder="$t('withdrawImmediately.confirmTheAmount')"
            type="text">
        </li>
      </ul>
      <ul v-else>
        <li>
          <span>{{$t('withdrawImmediately.phoneNumber')}}</span>
          <input v-model.trim.number="withdrawParam.account_name"
            onfocus="this.select();"
            @blur="mx_resizeWindow"
            :placeholder="$t('withdrawImmediately.enterPhoneNumber')"
            type="number">

        </li>
        <li> <span>{{$t('withdrawImmediately.confirmPhoneNumber')}}</span>
          <input v-model.trim.number="withdrawParam.account_no"
            onfocus="this.select();"
            @blur="mx_resizeWindow"
            :placeholder="$t('withdrawImmediately.enterPhoneNumber')"
            type="number"></li>
      </ul>
    </div>
    <div class="cash-withdrawal-box border-bttom border-bttom2">
      <p class="cash-withdrawal-tit">{{$t('withdrawImmediately.cashWithdrawalMethod')}}</p>

      <div class="progress-content-box">
        <div class="progress-box">
          <div class="schedule">
            <div class="active"
              :style="{'width':rule.length?user_fund.withdraw_amount/rule[rule.length-1].amount*100+'%':'0%'}"></div>

            <div v-for="(item,index) of rule"
              :key="index"
              :class="setScheduleItemCls(item,index)">
              Rp{{item.threshold}}
            </div>

          </div>
        </div>
      </div>

    </div>
    <div class="cash-withdrawal-rule border-bttom">
      <div class="cash-withdrawal-rule-title"
        id="cashWithdrawalRule">{{$t('withdrawImmediately.withdrawalRules')}}</div>

      <div class="cash-withdrawal-rule-img">
        <img :src="$t('withdrawImmediately.withdrawRule')">
      </div>
    </div>

    <div class="cash-out-btn"
      @click.stop="goApplyWithdraw">{{$t('withdrawImmediately.cashOut')}}</div>
    <dialog-default :info="info"
      :dialogVisible="dialogVisible"
      noCancle
      @ok="dialogVisible = false">
      <div slot="content"
        class="cash-description">
        <p v-for="(item,index) of $t('withdrawImmediately.cashDescriptionList')"
          :key="index">
          {{item}}
        </p>
      </div>
    </dialog-default>
  </div>
</template>

<script>
import { Icon, Dialog } from "vant";
import DialogDefault from "@/components/dialogs/dialogDefault.vue";

import {
  getWithdrawInfo,
  applyWithdraw,
  getOperatorList
} from "@/server/finance.js";
export default {
  components: {
    DialogDefault,
    [Icon.name]: Icon
    // [Dialog.name]: Dialog
  },
  data() {
    return {
      info: this.$t("withdrawImmediately.info"),
      dialogVisible: false,
      username: "",
      password: "",
      amount: "",
      name: "",
      account: "",
      showAlert: false,

      withdrawParam: {
        pay_type: 1, //类型：Number  必有字段  备注：支付类型
        product_id: "", // 当前充值卡运营商ID
        account_name: "", //类型：String  必有字段  备注：账号名称
        account_no: "", //类型：String  必有字段  备注：账号
        amount: "" //类型：String  必有字段  备注：金额
      },
      operatorList: [], // 运营商列表

      rule: [],
      pay_type: [],
      user_fund: {
        //类型：Object  必有字段  备注：用户金额
        balance: 0, //类型：Number  必有字段  备注：用户余额
        withdraw_amount: 0 //类型：Number  必有字段  备注：用户可提现金额
      },
      //充值面额
      rechargeDenominations: [],
      // 当前面额
      currentRechargeDenomination: 0
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      await Promise.all([this.initWithdrawInfo(), this.initOperatorList()]);
      // 提现方式初始配置处理
      this.payTypeConfig(
        this.operatorList &&
          this.operatorList[0] &&
          this.operatorList[0].config,
        this.user_fund.withdraw_amount || 0
      );
    },
    async initWithdrawInfo() {
      let result = await getWithdrawInfo();
      if (result && result.data) {
        const { rule, pay_type, user_fund } = result.data;
        this.rule = rule;
        this.pay_type = pay_type;
        this.user_fund = user_fund;

        this.withdrawParam.pay_type = this.pay_type[0].type;
        this.withdrawParam.amount = this.user_fund.withdraw_amount;
        // 提现方式配置处理
        // this.payTypeConfig(pay_type, user_fund.withdraw_amount || 0);
      }
    },
    async initOperatorList() {
      let result = await getOperatorList();
      if (result && result.data) {
        this.operatorList = result.data;
        this.withdrawParam.product_id = this.operatorList[0].product_id;
      }
    },
    setProduct(item, index) {
      this.withdrawParam.product_id = item.product_id;
      // 提现方式配置处理
      this.payTypeConfig(
        this.operatorList &&
          this.operatorList[index] &&
          this.operatorList[index].config,
        this.user_fund.withdraw_amount || 0
      );
    },
    // 提现方式配置处理
    payTypeConfig(config, withdrawAmount) {
      if (config) {
        this.rechargeDenominations = config.split(",");
        const isCanWirhdraw = this.rechargeDenominations.some(
          current => current <= withdrawAmount
        );
        if (isCanWirhdraw && this.rechargeDenominations.length > 0) {
          this.currentRechargeDenomination = this.rechargeDenominations[0];
        }
      }

      // payType.forEach(item => {
      //   // 充值卡提现
      //   if (item.type === 2) {
      //     this.rechargeDenominations = item.config.split(",");
      //     const isCanWirhdraw = this.rechargeDenominations.some(
      //       current => current <= withdrawAmount
      //     );
      //     if (isCanWirhdraw && this.rechargeDenominations.length > 0) {
      //       this.currentRechargeDenomination = this.rechargeDenominations[0];
      //     }
      //   }
      // });
    },
    async goApplyWithdraw() {
      const { account_name, account_no } = this.withdrawParam;
      if (!account_name || !account_no) {
        // Dialog.alert({
        //   message: "Account information cannot be empty",
        //   confirmButtonText: "ok"
        // });
        this.$toast("Account information cannot be empty");
        return;
      }
      if (account_name !== account_no) {
        // Dialog.alert({
        //   message: "Inconsistent accounts are entered twice",
        //   confirmButtonText: "ok"
        // });
        this.$toast("Inconsistent accounts are entered twice");
        return;
      }

      console.log("this.withdrawParam", this.withdrawParam);
      const params = Object.assign({}, this.withdrawParam);
      if (this.withdrawParam.pay_type === 2) {
        params.amount = parseInt(this.currentRechargeDenomination);
      }
      console.log("1111111111111111111111111", params);
      let result = await applyWithdraw(params);
      if (result && result.code == 0) {
        this.showAlert = true;
      }
    },
    setScheduleItemCls(item, index) {
      let withdrawAmount = this.user_fund.withdraw_amount || 0;
      return [
        { "schedule-item": index != this.rule.length - 1 },
        { "schedule-item-1": index == 0 },
        { "schedule-item-last": index == this.rule.length - 1 },
        { "schedule-item-cur": withdrawAmount >= item.amount },
        {
          "ball-cur":
            (index != 0 &&
              withdrawAmount >= this.rule[index - 1].amount &&
              withdrawAmount < this.rule[index].amount) ||
            (index == this.rule.length - 1 &&
              withdrawAmount >= this.rule[index].amount) ||
            (index == 0 && withdrawAmount == 0)
        }
      ];
    },
    // 提现ok
    cashOk() {
      console.log("ok");
      this.$router.push("/my");
    },
    // 货币格式化，
    moneyFormat(value) {
      const arr = [];
      value = value
        .toString()
        .split("")
        .reverse()
        .join("");
      for (let i = 0; i < Math.ceil(value.length / 3); i++) {
        const str = value.substr(3 * i, 3);
        arr.push(str);
      }
      return arr
        .join(".")
        .split("")
        .reverse()
        .join("");
    },
    // 充值面额选择
    handleRechargeDenominations(item) {
      if (this.user_fund.withdraw_amount >= item) {
        this.currentRechargeDenomination = item;
      }
    },
    goHash() {
      window.location.href = "#cashWithdrawalRule";
    }
  }
};
</script>
