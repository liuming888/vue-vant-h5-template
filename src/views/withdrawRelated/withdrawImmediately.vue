<style lang="scss" scoped>
.cash-out-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 98px;
  line-height: 98px;
  text-align: center;
  width: 100vw;
  background: linear-gradient(
    -45deg,
    rgba(211, 12, 5, 1) 0%,
    rgba(255, 54, 47, 1) 100%
  );
  font-size: 32px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}

.withdrawImmediately-container {
  width: 100%;
  box-sizing: border-box;
}

.balance-box {
  width: 100%;
  padding: 35px 30px 49px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  margin-bottom: 20px;

  > div {
    h5.tit {
      margin-bottom: 29px;
      font-size: 22px;
      font-weight: 400;
      color: rgba(136, 136, 136, 1);
    }

    .units {
      font-size: 20px;
      display: inline-block;
      vertical-align: top;
    }

    .balance-num {
      font-size: 50px;
      font-weight: 500;
      position: relative;
      top: -10px;
    }
  }

  .current-balance {
    flex: 1;
    text-align: left;

    .balance-item {
      color: #323232;
    }
  }

  .can-withdraw {
    flex: 1;
    text-align: right;

    .balance-item {
      color: #d30c05;
    }
  }
}

.play-box {
  background: #fff;
  padding: 0 30px 1px 30px;
  box-sizing: border-box;
  margin-bottom: 26px;

  .top-txt {
    height: 102px;
    line-height: 102px;
    box-sizing: border-box;
    display: flex;
    font-size: 28px;
    font-weight: 400;

    .cash-withdrawal-method {
      flex: 1;
      text-align: left;
      color: #323232;
    }

    .embodiment-statement {
      width: 170px;
      height: 58px;
      line-height: 58px;
      color: #f65e10;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(246, 94, 16, 1);
      border-radius: 29px;
      text-align: center;
      margin-top: 20px;
    }
  }
  .play-types {
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 70px;

    .play-item {
      width: 210px;
      height: 88px;
      line-height: 88px;
      text-align: center;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(236, 236, 236, 1);
      border-radius: 10px;
      font-size: 28px;
      font-weight: 400;
      color: rgba(50, 50, 50, 1);

      .play-img {
        width: 100%;
        height: 100%;
        margin-right: 12px;
      }
    }
    .active {
      border: 1px solid #d30c05;
      background: url("~@/assets/images/Selected.png") no-repeat 0 0;
      background-size: 28px;
    }
  }
}

.precautions-box {
  margin-top: 170px;
  padding: 0 31px 20px;
  box-sizing: border-box;

  .precautions {
    font-size: 28px;
    font-weight: 400;
    color: rgba(50, 50, 50, 1);
    margin-bottom: 26px;
  }

  .precautions-txt {
    font-size: 24px;
    color: #888888;
    line-height: 36px;

    p {
      margin-bottom: 20px;
    }
  }
}
.schedule {
  position: relative;
  margin: 0 auto;
  width: 580px;
  height: 10px;
  border-radius: 9px;
  background-color: #fececa;
  display: flex;
  > .active {
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    height: 100%;
    background: url("~@/assets/images/progress-bar-2.png") no-repeat;
    background-size: 100%;
    background-color: #f65e10;
    border-radius: 9px;
  }
  > .schedule-item {
    position: relative;
    flex: 1;
    padding-top: 40px;
    text-align: center;
    font-size: 18px;
    color: #323232;
    .highlight {
      color: #d30c05;
      font-size: 20px;
    }
  }
  > .schedule-item:nth-of-type(2) {
    text-align: left;
  }
  > .schedule-item:last-of-type {
    text-align: right;

    &.ball-center-cur::after {
      margin: 0;
      left: calc(50% - 20px);
    }
  }
  > .ball::after {
    content: "";
    position: absolute;
    top: -14px;
    // left: 0;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: #ffece6;
  }
  > .ball-active::after {
    background: linear-gradient(
      -45deg,
      rgba(238, 93, 47, 1),
      rgba(255, 155, 4, 1)
    );
  }
  > .ball-center::after {
    left: calc(50% - 12px);
  }
  > .ball-center-1 {
    // text-indent: -25%;
  }
  > .ball-center-1::after {
    left: calc(30% - 12px);
  }
  > .ball-center-cur::after {
    width: 60px;
    height: 60px;
    top: -25px;
    background: url("~@/assets/images/coin.gif") no-repeat center;
    background-size: 60px;
    // left: calc(50% - 20px);
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  > .ball-center-2 {
    position: relative;

    &::after {
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
  > .ball-center-3::after {
    left: calc(70% - 12px);
  }
  > .ball-center-3 {
    text-indent: 50%;
  }
  > .ball-right::after {
    right: 0;
  }
  > .ball-left::after {
    left: 0;
  }
}
.cash-description {
  margin-top: 50px;
  font-size: 28px;
  text-align: left;
  > p + p {
    margin-top: 20px;
  }
}

.list {
  overflow: hidden;
  margin: 20px 0;
  background: #fff;
  padding: 0 30px;
  li {
    line-height: 111px;
    border-bottom: 1px solid #ddd;
    color: #323232;
    font-size: 28px;
    display: flex;
    span {
      flex: 1;
    }
    input {
      width: 250px;
      text-align: right;
      color: #919395;
    }
  }
}

.cash-withdrawal-box {
  height: 362px;
  background: #fff;
  .cash-withdrawal-tit {
    font-size: 28px;
    padding: 40px;
    margin-bottom: 20px;
  }
}
.alertBox {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background: rgba(0, 0, 0, 0.5);
  .alertWrap {
    width: 610px;
    height: 432px;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    h1 {
      height: 34px;
      font-size: 36px;
      font-weight: bold;
      color: rgba(50, 50, 50, 1);
      line-height: 40px;
      margin: 40px 0;
      text-align: center;
    }
    p {
      height: 141px;
      font-size: 28px;
      font-weight: 400;
      color: rgba(50, 50, 50, 1);
      line-height: 40px;
      padding: 0 30px;
    }
    div {
      font-size: 32px;
      font-weight: bold;
      color: rgba(211, 12, 5, 1);
      height: 100px;
      line-height: 100px;
      text-align: center;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-top: 1px solid rgba(242, 242, 242, 1);
    }
  }
}
</style>


<template>
  <div class="withdrawImmediately-container">

    <!-- 提现成功弹窗 -->
    <div class="alertBox"
      v-if="showAlert">
      <div class="alertWrap">
        <h1>Withdrawal application</h1>
        <p>
          Your withdrawal request has been initiated, please check it out!
          <br>If you have any questions, please ask customer service
        </p>
        <div @click="cashOk">I know</div>
      </div>
    </div>

    <div class="balance-box">
      <div class="current-balance">
        <h5 class="tit">Current balance</h5>
        <div class="balance-item">
          <span class="units">Rp</span>
          <span class="balance-num">{{user_fund.balance}}</span>
        </div>
      </div>

      <div class="can-withdraw">
        <h5 class="tit">Can withdraw</h5>
        <div class="balance-item">
          <span class="units">Rp</span>
          <span class="balance-num">{{user_fund.withdraw_amount}}</span>
        </div>
      </div>
    </div>

    <div class="play-box">
      <div class="top-txt">
        <div class="cash-withdrawal-method">Cash withdrawal method</div>
        <div class="embodiment-statement"
          @click="dialogVisible = true">Introduction</div>
      </div>

      <div class="play-types">
        <div class="play-item"
          v-for="(item,index) of pay_type"
          :class="{active:item.type==withdrawParam.pay_type}"
          @click="withdrawParam.pay_type=item.type"
          :key="index">
          <img class="play-img"
            v-lazy="item.icon">
          <!-- <span class="play-txt">{{item.name}}</span> -->
        </div>

      </div>
    </div>

    <div class="list">
      <ul>
        <li>
          <span>Withdrawal Amount</span>
          <!-- <input v-model="amount"
            type="text"
            placeholder="Enter the amount"> -->
          <span style="text-align: right;">{{user_fund.withdraw_amount}}</span>
        </li>
        <li>
          <span>Account Name</span>
          <input v-model.trim="withdrawParam.account_name"
            type="text">
        </li>
        <li>
          <span>Confirm the account</span>
          <input v-model.trim="withdrawParam.account_no"
            type="text">
        </li>
      </ul>
    </div>
    <div class="cash-withdrawal-box">
      <p class="cash-withdrawal-tit">Cash withdrawal method</p>
      <div class="progress-box">
        <div class="schedule">
          <div class="active"
            :style="{'width':rule.length?user_fund.withdraw_amount/rule[rule.length-1].amount*100+'%':'0%'}"></div>

          <div class="schedule-item ball"
            v-for="(item,index) of rule"
            :key="index"
            :class="setScheduleItemCls(item,index)">
            <span class="description">Rp{{item.threshold}}</span>
          </div>

        </div>
      </div>
    </div>
    <!-- 
    <div class="precautions-box">
      <h5 class="precautions">Precautions</h5>
      <div class="precautions-txt">
        <p>1. The first withdrawal will arrive within 1 second. If you encounter the peak period, you may delay the payment. Please be patient.</p>
        <p>2. Please pay attention to the "My - Withdrawal Record" to check the status of the redemption record.</p>
      </div>
    </div>-->
    <div class="cash-out-btn"
      @click.stop="goApplyWithdraw">Cash out</div>
    <dialog-default :info="info"
      :dialogVisible="dialogVisible"
      noCancle
      @ok="dialogVisible = false">
      <div slot="content"
        class="cash-description">
        <p>1. The balance is over 88 rounds, and 8 rounds can be withdrawn. The arrival time is the same day;</p>
        <p>2. The balance is 338 rounds, 138 rounds can be withdrawn, and the time of arrival is 3-5 working days;</p>
        <p>3. The balance is 438 rounds, 188 rounds can be withdrawn, and the time of arrival is 7-14 working days;</p>
        <p>4. The balance is 538 rounds, 238 rounds can be withdrawn, and the time of arrival is 15-20 working days;</p>
      </div>
    </dialog-default>
  </div>
</template>

<script>
import { Icon, Dialog } from "vant";
import DialogDefault from "@/components/dialogs/dialogDefault.vue";

import { getWithdrawInfo, applyWithdraw } from "@/server/finance.js";
export default {
  components: {
    DialogDefault,
    [Icon.name]: Icon,
    [Dialog.name]: Dialog
  },
  data() {
    return {
      info: {
        content: "Withdrawal rules",
        cancleText: "cancel",
        okText: "I know"
      },
      dialogVisible: false,
      username: "",
      password: "",
      amount: "",
      name: "",
      account: "",
      showAlert: false,

      withdrawParam: {
        pay_type: 1, //类型：Number  必有字段  备注：支付类型
        account_name: "", //类型：String  必有字段  备注：账号名称
        account_no: "", //类型：String  必有字段  备注：账号
        amount: "" //类型：String  必有字段  备注：金额
      },

      rule: [],
      pay_type: [],
      user_fund: {
        //类型：Object  必有字段  备注：用户金额
        balance: 0, //类型：Number  必有字段  备注：用户余额
        withdraw_amount: 0 //类型：Number  必有字段  备注：用户可提现金额
      }
    };
  },
  created() {
    this.initWithdrawInfo();
  },
  methods: {
    async initWithdrawInfo() {
      let result = await getWithdrawInfo();
      if (result && result.data) {
        const { rule, pay_type, user_fund } = result.data;
        this.rule = rule;
        this.pay_type = pay_type;
        this.user_fund = user_fund;

        this.withdrawParam.pay_type = this.pay_type[0].type;
        this.withdrawParam.amount = this.user_fund.withdraw_amount;
      }
    },
    async goApplyWithdraw() {
      const { account_name, account_no } = this.withdrawParam;
      if (!account_name || !account_no) {
        Dialog.alert({
          message: "Informasi akun tidak boleh kosong",
          confirmButtonText: "Tentukan"
        });
        return;
      }
      if (account_name !== account_no) {
        Dialog.alert({
          message: "Akun tidak konsisten dimasukkan dua kali",
          confirmButtonText: "Tentukan"
        });
        return;
      }

      console.log("this.withdrawParam", this.withdrawParam);

      let result = await applyWithdraw(this.withdrawParam);
      if (result && result.code == 0) {
        this.showAlert = true;
      }
    },
    setScheduleItemCls(item, index) {
      let withdrawAmount = this.user_fund.withdraw_amount;
      return [
        { "ball-left": index == 0 },
        { "ball-active": withdrawAmount >= item.amount },
        `ball-center-${index}`,
        { "ball-right": index == this.rule.length - 1 },
        {
          "ball-center-cur":
            (index > 0 &&
              withdrawAmount > this.rule[index - 1].amount &&
              withdrawAmount < item.amount) ||
            (withdrawAmount < item.amount && index == 1)
        }
      ];
    },
    // 提现ok
    cashOk() {
      console.log("ok");
      this.$router.push("/my");
    }
  }
};
</script>


