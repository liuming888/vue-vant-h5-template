<style lang="scss" scoped>
.box {
  position: relative;
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
      margin-top: 437px;
      font-size: 28px;
      color: #6C0C06;
    }
    > .cut-num {
      margin: 0 auto;
      width: 420px;
      height: 105px;
      line-height: 105px;
      font-size: 70px;
      color: #D30C05;
      > span {
        font-size: 34px;
      }
    }
    > .bottom-tips {
      margin: 90px auto 0 auto;
      width: 420px;
      font-size: 24px;
      color: #FFEEBB;
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
    margin: 100px auto 0 auto;
    background: url('./../../assets/images/guanbi@2x.png') no-repeat;
    background-size: 100% auto;
  }
}
</style>

<template>
  <div class="dialogOldUsersHelpCutSuccessfully-container">
    <van-popup v-model="dialogVisible.show" :close-on-click-overlay="false" style="background-color: transparent;width: 100%">
      <div class="box">
        <img src="@/assets/images/$@2x.png" alt="" class="bg">
        <div class="box-info">
          <p class="top-tips">Help Him Cut </p>
          <p class="cut-num"><span>Rp</span> 903.879</p>
          <p class="bottom-tips">After he bys, you get <span><span>Rp</span> 5.500</span> to help cut rewards</p>
        </div>
        <div class="close" @click="closeDialog()"></div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "dialogOldUsersHelpCutSuccessfully",
  props: {
    dialogVisible: {
      type: Object,
      default() {
        return {
          show: true
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    closeDialog(){
       this.$emit("update:dialogVisible",{show:false});
    }
  }
};
</script>

