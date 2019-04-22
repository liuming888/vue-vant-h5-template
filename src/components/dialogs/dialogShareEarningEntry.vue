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
      margin-top: 400px;
      font-size: 26px;
      font-weight: bold;
      color: rgba(108, 12, 6, 1);
      line-height: 47px;
    }
    > .cut-num {
      // margin: 0 auto;
      // width: 420px;
      // height: 105px;
      // line-height: 105px;
      // font-size: 70px;
      // color: #d30c05;
      // > span {
      //   font-size: 34px;
      // }

       display: inline-block;
      margin: 0 auto;
      margin-top: 6px;
      padding: 0 58px 0 56px;
      height: 95px;
      line-height: 95px;
      font-size: 50px;
      color: #d30c05;
      background: #fff;
      > span {
        // font-size: 34px;
      }
    }

    .go-buy-btn {
      width: 429px;
      height: 81px;
      line-height: 81px;
      text-align: center;
      background: linear-gradient(
        0deg,
        rgba(255, 229, 89, 1) 0%,
        rgba(255, 215, 0, 1) 100%
      );
      border-radius: 40px;
      margin: 68px auto 0;
      font-size: 34px;
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
  <div class="dialogShareEarningEntry-container">
    <van-popup v-model="dialogVisible.show"
      :close-on-click-overlay="false"
      style="background-color: transparent;width: 100%">
      <div class="box">
        <img v-lazy="$t('dialogShareEarningEntry.fenxiangzhuang')"
          class="bg">
        <div class="box-info">
          <p class="top-tips">{{$t('dialogShareEarningEntry.yourFriendsHelpYouSave')}}</p>
          <p class="cut-num"><span>Rp</span> {{preAmount}}</p>

          <div class="go-buy-btn"
            @click="goBuyNow">{{$t('dialogShareEarningEntry.goBuyNow')}}</div>
        </div>
        <div class="close"
          @click="closeDialog"></div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "dialogShareEarningEntry", //从分享赚点击进入时弹出的弹窗
  props: {
    dialogVisible: {
      type: Object,
      default() {
        return {
          show: true
        };
      }
    },
    preAmount:{
      type:String,
      default:"903.879"
    }
  },
  data() {
    return {};
  },
  methods: {
    goBuyNow() {
      this.closeDialog();
      //统计
      this.$gaSend({
        eventCategory: "砍价完成浮窗_去购买",
        eventAction: "点击"
      });
      if (!this.$store.state.userInfo.user_id) {
        const { pathname, search } = window.location;
        this.$store.commit(
          "setLoginJumpUrl",
          `${pathname + search}&showShareEarningEntry=no`
        );
        this.$store.commit("setLoginSelectShow", true);
        return;
      }
    },
    closeDialog() {
      this.$emit("update:dialogVisible", { show: false });
    }
  },
  watch: {
    dialogVisible: {
      handler() {
        if (this.dialogVisible.show) {
          //统计
          this.$gaSend({
            eventCategory: "砍价完成浮窗",
            eventAction: "浮窗展示"
          });
        }
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

