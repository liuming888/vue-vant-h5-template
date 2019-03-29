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
      width: 500px;
      font-size: 26px;
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
      bottom: 50px;

      .login-item {
        // width: 100px;
        flex: 1;
        margin-right: 20px;
        text-align: center;
        font-size: 20px;
        color: #323232;

        img {
          width: 130px;
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
        Tips: If you help your friend cut down the price, you will get cash rewards.
      </div>

      <div class="login-types">

        <div class="login-item"
          @click="loginFB">
          <img v-lazy="require('@/assets/images/facbook.png')">
          <p>Facebook login</p>
        </div>
      </div>

      <img v-lazy="require('@/assets/images/guanbi@2x.png')"
        class="close-img"
        @click="close">
    </div>

  </div>

  </div>
</template>

<script>
import axios from "axios";
import { login, check_login } from "@/server/user.js";
import fbInit from "@/mixins/fbInit.js";
export default {
  name: "dialogLoginSelect",
  mixins: [fbInit],
  data() {
    return {};
  },
  conputed: {
    setLoginSelectShow() {
      return this.$store.state.dialogs.loginSelect.show;
    }
  },
  watch: {
    setLoginSelectShow: {
      handler() {
        console.log(this.$route);
        if (this.$route.path === "forBargain" && this.setLoginSelectShow) {
          this.$gaSend({
            eventCategory: "帮砍_第三方登陆浮窗",
            eventAction: "浮窗展示"
          });
        }
      },
      deep: true,
      immediate: true
    }
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
        const { spuId, bargainId, inviteUserId, source } = this.$route.query;
        if (spuId) {
          param.spu_id = spuId;
        }
        if (bargainId) {
          param.bargain_id = bargainId;
        }
        if (inviteUserId) {
          param.invite_user_id = inviteUserId;
        }
        if (source) {
          param.source = source;
        }

        let result = await login(param);
        console.log("result: ", result);
        if (result && result.data) {
          let userInfo = result.data;
          this.$store.commit("setUserInfo", userInfo);
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          axios.defaults.headers.common["User-Id"] = userInfo.user_id;
          axios.defaults.headers.common["Access-Token"] = userInfo.access_token;
          this.$store.commit("setLoginSelectShow", false);

          if (userInfo.is_new == 1) {
            // 如果是新用户
            window.localStorage.setItem(
              "newUserInfo",
              JSON.stringify(userInfo)
            );

            fbq('track', 'CompleteRegistration');
          }

          if (this.$store.state.dialogs.loginSelect.jumpUrl) {
            window.location.href = this.$store.state.dialogs.loginSelect.jumpUrl;
          } else {
            window.location.reload(); // 刷新当前页
          }

          return true;
        }
      }
      return false;
    }
  }
};
</script>

