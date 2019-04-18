<style lang="scss" scoped>
.dialogWaitPayment-container {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  z-index: 99999;
  > .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  > .dialog-container {
    position: relative;
    width: 100%;
    margin: 0 80px;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    text-align: center;
    > .content {
      padding: 40px;
      height: 216px;
      box-sizing: border-box;
      padding-top: 96px;

      color: #323232;
      font-size: 32px;
      > span {
        font-weight: bold;
      }
    }
    > .footer {
      height: 100px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      > div {
        flex: 1;
      }
      > .cancel {
        color: #888;
      }
      > .ok {
        color: #d30c05;
      }
    }

    .close-icon {
      width: 62px;
      height: 62px;
      border-radius: 50%;
      position: absolute;
      right: -20px;
      top: -20px;
    }
  }
}
</style>

<template>
  <div class="dialogWaitPayment-container"
    v-show="dialogVisible.show">
    <div class="bg"></div>
    <div class="dialog-container">
      <img src="~@/assets/images/delete-1.png"
        class="close-icon"
        @click="$emit('update:dialogVisible', { show: false })">

      <div class="content">
        <span>Waiting for buyer payment~</span>
      </div>
      <div class="footer">
        <div class="cancel"
          @click="goContinue">Continue</div>
        <div class="ok"
          @click="completeOk">Complete</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dialogWaitPayment",
  props: {
    dialogVisible: {
      type: Object,
      default() {
        return {
          show: false
        };
      }
    }
  },
  methods: {
    completeOk() {
      this.$emit("playfail"); // 开启支付失败弹窗
      this.$emit("update:dialogVisible", { show: false });

      // 查询是否真的支付成功
      if (false) {
        this.$router.push({ path: "/purchase/paymentSuccess" });
      }
    },
    goContinue() {
      this.$emit("continuePlay");
      this.$emit("update:dialogVisible", { show: false });
    }
  }
};
</script>