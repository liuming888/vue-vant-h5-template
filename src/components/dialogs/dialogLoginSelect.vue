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
    width: 618px;
    height: 626px;
    background-size: 100% 100%;
    position: relative;

    .tips {
      width: 463px;
      font-size: 30px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 38px;
      margin: 210px auto 0;
      text-align: center;
    }

    .close-img {
      display: block;
      width: 70px;
      height: auto;
      // margin: 96px auto 0;
      position: absolute;
      bottom: -90px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

    .login-types {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      // margin-bottom: 41px;
      position: absolute;
      bottom: 80px;

      .login-item {
        // width: 100px;
        flex: 1;
        margin-right: 20px;
        text-align: center;
        font-size: 20px;
        color: #323232;

        img {
          width: 100px;
          height: auto;
        }
      }
    }
  }
}
</style>

<template>
  <div class="dialogLoginSelect-container">
    <div class="dialog-content"
      v-lazy:background-image="require('@/assets/images/login-dialog.png')">
      <div class="tips">
        Tips: If you help cut, you will get the income.
      </div>

      <div class="login-types">

        <div class="login-item"
          @click="loginFB">
          <img src="~@/assets/images/facbook.png">
          <p>Facebook login</p>
        </div>
      </div>

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
      this.$store.commit("setLoginSelectShow", false);
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
          axios.defaults.headers.common["User-Id"] = userInfo.user_id;
          axios.defaults.headers.common["Access-Token"] = userInfo.access_token;
          // this.$emit("update:dialogVisible", { show: false });
          this.$store.commit("setLoginSelectShow", false);
          if (this.$store.state.dialogs.loginSelect.jumpUrl) {
            // this.$router.push({
            //   path: this.$store.state.dialogs.loginSelect.jumpUrl
            // });
            window.location.href= this.$store.state.dialogs.loginSelect.jumpUrl;
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

