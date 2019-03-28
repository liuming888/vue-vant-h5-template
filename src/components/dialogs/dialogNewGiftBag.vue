<style lang="scss" scoped>
.dialogLoginSelect-container {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  padding-top: 180px;
  display: flex;
  justify-content: center;

  .dialog-content {
    width: 596px;
    height: 522px;
    background-size: 100% 100%;
    position: relative;
    padding-top: 280px;
    box-sizing: border-box;
    text-align: center;

    .close-img {
      display: block;
      width: 70px;
      height: auto;
      // margin: 96px auto 0;
      position: absolute;
      bottom: -250px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

    .receive {
      width: 454px;
      height: 86px;
      background: rgba(255, 194, 31, 1);
      border-radius: 43px;
      position: absolute;
      bottom: -120px;
      left: 0;
      right: 0;
      margin: 0 auto;
      font-size: 34px;
      font-weight: bold;
      color: rgba(172, 45, 32, 1);
      text-align: center;
      line-height: 86px;
    }

    .tit {
      font-size: 24px;
      color: #e5e8ee;
      margin-bottom: 20px;
      padding-left: 20px;
    }

    .num {
      font-size: 80px;
      font-weight: 600;
      color: gold;

      .dw {
        font-size: 20px;
        position: relative;
        top: -50px;
      }
    }
  }
}
</style>

<template>
  <div class="dialogLoginSelect-container">
    <div class="dialog-content"
      v-lazy:background-image="require('@/assets/images/xinrenlibao.png')">

      <div class="tit">Newcomer Gift Bag</div>

      <div class="num"><span class="dw">Rp</span>{{reward_amount}}</div>

      <div class="receive"
        @click="goReceive">Receive</div>

      <img src="@/assets/images/guanbi@2x.png"
        class="close-img"
        @click="close">
    </div>

  </div>

  </div>
</template>

<script>
import { Dialog } from "vant";
import { getMyNewRp } from "@/server/user.js";
export default {
  name: "dialogLoginSelect",
  data() {
    return {
      reward_amount: 1 //类型：Number  必有字段  备注：登录奖励金额
    };
  },
  created() {
    let str = window.localStorage.getItem("newUserInfo");
    let newUserInfo = str ? JSON.parse(str) : {};
    this.reward_amount = newUserInfo.reward_amount || 8888;
    // window.localStorage.removeItem("newUserInfo"); // 弹了次后就不弹了
  },
  methods: {
    close() {
      this.$store.commit("setNewGiftBagShow", false);
    },
    async goReceive() {
      let result = await getMyNewRp();
      if (result && result.data) {
        Dialog.alert({
          message: "You have successfully received a new gift package",
          confirmButtonText: "ok"
        });
        window.localStorage.removeItem("newUserInfo");  // 点击领取后不弹了
        this.$store.commit("setNewGiftBagShow", false);
      }
    }
  }
};
</script>

