<style lang="scss" scoped>
.dialogLoginSelect-container {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding-top: 200px;
  display: flex;
  justify-content: center;

  .dialog-content {
    width: 596px;
    height: 522px;
    background-size: 100% 100%;
    position: relative;
    padding-top: 280px;
    box-sizing:border-box;
    text-align: center;


    .close-img {
      display: block;
      width: 70px;
      height: auto;
      // margin: 96px auto 0;
      position: absolute;
      bottom: -228px;
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
      bottom: -118px;
      left: 0;
      right: 0;
      margin: 0 auto;
      font-size: 34px;
      font-weight: bold;
      color: rgba(172, 45, 32, 1);
      text-align: center;
      line-height: 86px;
    }

    .tit{
        font-size: 24px;
        color:#e5e8ee;
        margin-bottom: 20px;
    }

    .num{
        font-size: 80px;
        color:gold;

        .dw{
            font-size:20px;
            position: relative;
            top:-50px;
        }
    }
  }
}
</style>

<template>
  <div class="dialogLoginSelect-container">
    <!-- <van-popup v-model="dialogVisible.show"
      :close-on-click-overlay="false">
      <h3 style="margin-bottom:30px;">通过以下方式登录</h3>
      <div style="text-align:center;font-size:36px"
        @click="checkLogin">
        FB
      </div>
    </van-popup> -->

    <div class="dialog-content"
      v-lazy:background-image="require('@/assets/images/xinrenlibao.png')">

      <div class="tit">Newcomer Gift Bag</div>

      <div class="num"><span class="dw">Rp</span>8.888</div>

      <div class="receive">Receive</div>

      <img src="@/assets/images/guanbi@2x.png"
        class="close-img"
        @click="close">
    </div>

  </div>

  </div>
</template>

<script>
import axios from "axios";
import { login, check_login } from "@/server/user.js";
export default {
  name: "dialogLoginSelect",
  data() {
    return {};
  },
  methods: {
    close() {
    //   this.$store.commit("setLoginSelectShow", false);
    },
    /**
     * @description: FB登录
     * @return: true 登录成功   false 登录失败
     */
    async loginFB() {
      let loginInfo = await window.$faceBookApi.loginFB();
      console.warn("loginInfo: ", loginInfo);
      if (loginInfo) {
        let {
          authResponse: { accessToken },
          id,
          name,
          pic_square
        } = loginInfo;
        let param = {
          tp_id: id,
          tp_token: accessToken,
          tp_type: 1,
          tp_username: name,
          tp_avatar: pic_square
        };
        const { spuId, bargainId, inviteUserId } = this.$route.query;
        if (spuId) {
          param.spu_id = spuId;
        }
        if (bargainId) {
          param.bargain_id = bargainId;
        }
        if (inviteUserId) {
          param.invite_user_id = inviteUserId;
        }

        let result = await login(param);
        //   let result = await login({
        //   tp_id: "104497707249033",
        //   tp_token: "EAAMALQt1F2EBANKqB2pizpPVMyiV7JQ3ZA4nPBNPT1BwwfUdWVZBi0nwjtv6kNEZBZCr3v1XzmZCvgnmBZAd3DHI362pDGzHTRNQiZADK8IqsMgZCvZCSvdhFeL6ZBz3sFIoigZBGtLOlnzuQeEIrUKcqcdYyLAVn4QzhnQIZAyCkQlJqHRZAgUjE5OP2KG9t0v3zmZC5ZBEneAEW03iwZDZD",
        //   tp_type: 1
        // });
        console.log("result: ", result);
        if (result) {
          let userInfo = result.data;
          this.$store.commit("setUserInfo", userInfo);
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          axios.defaults.headers.common["user_id"] = userInfo.user_id;
          axios.defaults.headers.common["access_token"] = userInfo.access_token;
          // this.$emit("update:dialogVisible", { show: false });
          this.$store.commit("setLoginSelectShow", false);
          if (this.$store.state.dialogs.loginSelect.jumpUrl) {
            this.$router.push({
              path: this.$store.state.dialogs.loginSelect.jumpUrl
            });
          }

          // if (this.$route.path == "/forBargain") {
          //   // 如果是帮砍页面用户登录
          //   this.$router.push({
          //     path: this.$route.path,
          //     query: {
          //       ...this.$route.query,
          //       helpCur: "ok"
          //     }
          //   });
          // }

          return true;
        }
      }
      return false;
    }
  }
};
</script>

