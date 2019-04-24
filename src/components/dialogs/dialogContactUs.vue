<style scoped lang="scss">
.alertBox {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: rgba(0, 0, 0, 0.5);
    .alertWrap {
      width: 610px;
      height: 460px;
      background: rgba(255, 255, 255, 1);
      border-radius: 20px;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      position: absolute;
      .alertWrap-item {
        height: 45px;
        text-indent: 67px;
        line-height: 45px;
        background-repeat: no-repeat;
        background-size: auto 100%;
        background-position: 30px center;
        &:nth-of-type(1) {
          background-image: url("../../assets/images/facbookIcon.png");
        }
        &:nth-of-type(2) {
          background-image: url("../../assets/images/whatsappIcon.png");
        }
        &:nth-of-type(3) {
          background-image: url("../../assets/images/lineIcon.png");
        }
      }
      h1 {
        height: 34px;
        font-size: 36px;
        font-weight: bold;
        color: rgba(50, 50, 50, 1);
        line-height: 40px;
        margin: 40px 0;
        text-align: center;
      }
      li {
        font-size: 28px;
        color: #323232;
        margin-top: 30px;
        padding: 0 20px;
        white-space: nowrap;

        &:first-of-type {
          margin-top: 0;
        }
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
  <div class="alertBox"
    v-if="dialogVisible.show">
    <div class="alertWrap">
      <h1>{{$t('myOrder.contactUsBy')}}</h1>
      <ul>
        <li class="alertWrap-item">facebook fanpage : Istarbuyofficial</li>
        <li class="alertWrap-item">Whatsapp : 18027340756</li>
        <li class="alertWrap-item">Line : ISTARBUY</li>
      </ul>
      <div @click="close">{{$t('myOrder.iKnow')}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dialogContactUs", // 联系我们弹窗
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
      close(){
          this.$emit("update:dialogVisible",{show:false});
      }
  }
};
</script>
