<style lang="scss" scoped>
.toWithdraw-container {
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
      font-family: Helvetica;
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
  padding: 0 30px;
  box-sizing: border-box;
  margin-bottom: 76px;

  .top-txt {
    height: 102px;
    line-height: 102px;
    box-sizing: border-box;
    display: flex;
    font-size: 28px;
    font-family: Helvetica;
    font-weight: 400;

    .cash-withdrawal-method {
      flex: 1;
      text-align: left;
      color: #323232;
    }

    .embodiment-statement {
      color: #888888;
      display: flex;
      align-items: center;
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
      font-family: Helvetica;
      font-weight: 400;
      color: rgba(50, 50, 50, 1);

      .play-img {
        width: 40px;
        height: auto;
        margin-right: 12px;
      }
    }
  }

  .cash-withdrawal-box{
    .cash-withdrawal-tit{
      margin-bottom: 82px;
    }
  }
}

.precautions-box {
  padding: 0 31px 20px;
  box-sizing: border-box;

  .precautions {
    font-size: 28px;
    font-family: Helvetica;
    font-weight: 400;
    color: rgba(50, 50, 50, 1);
    margin-bottom: 26px;
  }

  .precautions-txt {
    font-size: 24px;
    color: #888888;
    line-height: 36px;

    p{
      margin-bottom: 20px;
    }
  }
}
</style>


<template>
  <div class="toWithdraw-container">

    <div class="balance-box">
      <div class="current-balance">
        <h5 class="tit">Current balance</h5>
        <div class="balance-item">
          <span class="units">$</span>
          <span class="balance-num">1688.68</span>
        </div>
      </div>

      <div class="can-withdraw">
        <h5 class="tit">Can withdraw</h5>
        <div class="balance-item">
          <span class="units">$</span>
          <span class="balance-num">10</span>
        </div>
      </div>
    </div>

    <div class="play-box">
      <div class="top-txt">
        <div class="cash-withdrawal-method">Cash withdrawal method</div>
        <div class="embodiment-statement">Embodiment statement
          <van-icon name="arrow" />
        </div>
      </div>

      <div class="play-types">
        <div class="play-item">
          <img class="play-img"
            v-lazy="require('@/assets/images/paybal.png')">
          <span class="play-txt">Alipay</span>
        </div>

        <div class="play-item">
          <img class="play-img"
            v-lazy="require('@/assets/images/paybal.png')">
          <span class="play-txt">Alipay</span>
        </div>

        <div class="play-item">
          <img class="play-img"
            v-lazy="require('@/assets/images/paybal.png')">
          <span class="play-txt">Alipay</span>
        </div>
      </div>

      <div class="cash-withdrawal-box">
        <p class="cash-withdrawal-tit">Cash withdrawal method</p>
        <div class="progress-box">
          进度条
        </div>
      </div>
    </div>

    <div class="precautions-box">
      <h5 class="precautions">Precautions</h5>
      <div class="precautions-txt">
        <p>
          1. The first withdrawal will arrive within 1 second. If you encounter the peak period, you may delay the payment. Please be patient.
        </p>
        <p>
          2. Please pay attention to the "My - Withdrawal Record" to check the status of the redemption record.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  components: {
    [Icon.name]: Icon
  }
};
</script>
