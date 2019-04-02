<style lang="scss" scoped>
.box {
  position: relative;
  z-index: 999;
  padding: 0 10px;
  > img {
    width: 100%;
    height: auto;
  }
  > .box-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    > .top-tips {
      margin-top: 380px;
      font-size: 28px;
      font-weight: bold;
      color: rgba(108, 12, 6, 1);
      line-height: 47px;
    }
    > .cut-num {
      margin: 0 auto;
      width: 426px;
      height: 88px;
      line-height: 88px;
      font-size: 64px;
      color: #d30c05;
      background: #fff;
      font-weight: 600;
      > span {
        font-size: 31px;
        font-weight: 500;
      }
    }
    > .bottom-tips {
      margin: 70px auto 0 auto;
      width: 420px;
      font-size: 24px;
      font-weight: 500;
      color: rgba(255, 238, 187, 1);
      line-height: 30px;

      > span {
        font-weight: bold;
        color: #fff;
        > span {
          font-size: 20px;
        }
      }
    }

    .take-btn {
      width: 429px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      background: linear-gradient(
        0deg,
        rgba(255, 229, 89, 1) 0%,
        rgba(255, 215, 0, 1) 100%
      );
      border-radius: 40px;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 142px;
      font-size: 30px;
      font-family: "Helvetica_cyr-Bold";
      font-weight: bold;
      color: rgba(211, 12, 5, 1);
    }
  }
  > .close {
    position: relative;
    width: 70px;
    height: 70px;
    margin: 0 auto;
    background: url("~@/assets/images/guanbi@2x.png") no-repeat;
    background-size: 100% auto;
  }
}
</style>

<template>
  <div class="dialogOldUsersHelpCutSuccessfully-container">
    <van-popup v-model="dialogVisible.show"
      :close-on-click-overlay="false"
      style="background-color: transparent;width: 100%">
      <div class="box">
        <img src="~@/assets/images/forBargain-sucess.png"
          class="bg">
        <div class="box-info">
          <p class="top-tips">You help him cut down</p>
          <p class="cut-num"><span>Rp</span> {{chopInfo.bargain_amount}}</p>
          <p class="bottom-tips">After your friend order, you will get<span><span>Rp</span>{{chopInfo.reward_amount}}</span>rewards on your account</p>

          <div class="take-btn"
            @click="$router.push('/')">
            Also take it for free
          </div>

        </div>
        <div class="close"
          @click="closeDialog"></div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "dialogOldUsersHelpCutSuccessfully", // 好友帮砍成功弹窗（暂时没分是不是新老用户）
  props: {
    dialogVisible: {
      type: Object,
      default() {
        return {
          show: true
        };
      }
    },
    chopInfo: {
      type: Object,
      default() {
        return {
          //类型：Object  必有字段  备注：无
          bargain_id: 1, //类型：Number  必有字段  备注：砍价号
          bargain_amount: 1, //类型：Number  必有字段  备注：砍价金额
          bargain_rate: 1, //类型：Number  必有字段  备注：砍价比例
          reward_amount: "mock" //类型：String  必有字段  备注：下单能获取的金额
        };
      }
    }
  },
  methods: {
    closeDialog() {
      // this.$store.commit("setNewGiftBagShow", true);  // 帮砍完成弹出新人礼包
      this.$emit("update:dialogVisible", { show: false });
    }
  }
};
</script>

