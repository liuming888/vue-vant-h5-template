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
      margin-top: 430px;
      font-size: 28px;
      font-weight: bold;
      color: rgba(108, 12, 6, 1);
      line-height: 47px;
    }
    > .cut-num {
      margin: 0 auto;
      width: 420px;
      height: 105px;
      line-height: 105px;
      font-size: 70px;
      color: #d30c05;
      > span {
        font-size: 34px;
      }
    }
    > .bottom-tips {
      margin: 90px auto 0 auto;
      width: 420px;
      font-size: 24px;
      color: #ffeebb;
      font-weight: lighter;
      > span {
        font-weight: bold;
        color: #fff;
        > span {
          font-size: 20px;
        }
      }
    }
  }
  > .close {
    position: relative;
    width: 70px;
    height: 70px;
    margin: 0 auto;
    background: url("./../../assets/images/guanbi@2x.png") no-repeat;
    background-size: 100% auto;
  }
}
</style>

<template>
  <div class="dialogPotongSendiri-container">
    <van-popup v-model="dialogVisible.show"
      style="background-color: transparent;width: 100%">
      <div class="box">
        <img v-lazy="require('@/assets/images/zikanyidaotanchuang.png')"
          class="bg">
        <div class="box-info">
          <p class="top-tips">Help yourself cut down</p>
          <p class="cut-num"><span>Rp</span> {{chopInfo.bargain_amount}}</p>
          <!-- <p class="bottom-tips">After he bys, you get <span><span>Rp</span> {{chopInfo.reward_amount}}</span> to help cut rewards</p> -->
        </div>
        <div class="close"
          @click="closeDialog"></div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "dialogPotongSendiri",  // 自砍一刀成功弹窗
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
  data() {
    return {};
  },
  methods: {
    closeDialog() {
      this.$emit("update:dialogVisible", { show: false });
    }
  }
};
</script>

