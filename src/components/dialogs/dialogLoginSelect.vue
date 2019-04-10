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
    width: 610px;
    height: 672px;
    border-radius: 20px;
    background: #fff;
    padding-top: 64px;
    box-sizing: border-box;
    position: relative;

    &.show-fb {
      height: 847px;
    }

    .close-icon {
      position: absolute;
      right: 30px;
      top: 30px;
      width: 32px;
      height: auto;
    }

    .icon-img {
      display: block;
      margin: 0 auto;
      width: 120px;
      height: auto;
      margin-bottom: 33px;
    }

    .input-box {
      width: 490px;
      height: 100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 474px;
        height: 1px;
        background: rgba(242, 242, 242, 1);
      }

      .icon {
        width: 42px;
        height: auto;
        margin-right: 19px;
      }

      .input {
        font-size: 28px;
        font-weight: 400;
      }
    }

    .phone-box {
      .quhao {
        font-size: 28px;
        font-family: "PingFangSC-Regular";
        font-weight: 400;
        color: rgba(50, 50, 50, 1);
        margin-right: 24px;
      }
    }

    .sms-box {
      .code-input {
        width: 340px;
        margin-right: 10px;
      }

      .send {
        font-size: 26px;
        font-family: "PingFangSC-Regular";
        font-weight: 400;
        color: rgba(211, 12, 5, 1);
      }
    }

    .login-btn {
      width: 480px;
      height: 84px;
      line-height: 84px;
      text-align: center;
      background: linear-gradient(
        -45deg,
        rgba(211, 12, 5, 1),
        rgba(245, 78, 1, 1)
      );
      border-radius: 42px;
      margin: 58px auto;
      font-size: 32px;
      font-family: "Helvetica_cyr-Bold";
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }

    .other-log {
      font-size: 24px;
      font-family: "PingFangSC-Regular";
      font-weight: 400;
      color: rgba(136, 136, 136, 1);
      text-align: center;
      position: relative;

      &::after,
      &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        width: 112px;
        height: 1px;
        background: rgba(242, 242, 242, 1);
      }

      &::after {
        left: 66px;
      }

      &::before {
        right: 66px;
      }
    }

    .login-types {
      margin-top: 36px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .login-item {
        flex: 1;
        margin-right: 20px;
        text-align: center;
        font-size: 20px;
        color: #323232;

        img {
          width: 80px;
          height: auto;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>

<template>
  <div class="dialogLoginSelect-container"
    @click="close">

    <div class="dialog-content"
      :class="{'show-fb':showFB}"
      @click.stop>
      <img src="~@/assets/images/xxicon.png"
        alt=""
        class="close-icon"
        @click.stop="close">

      <img src="~@/assets/images/logo.png"
        alt=""
        class="icon-img">

      <div class="phone-box input-box">
        <img src="~@/assets/images/shoujiicon.png"
          alt=""
          class="icon">
        <span class="quhao">+62</span>
        <input type="number"
          class="input"
          placeholder="Enter Mobile Number"
          onfocus="this.select();"
          v-model="phone">
      </div>

      <div class="sms-box input-box">
        <img src="~@/assets/images/duanxinicon.png"
          alt=""
          class="icon">
        <input type="text"
          class="input code-input"
          onfocus="this.select();"
          placeholder="Enter Code SMS"
          v-model="authCode">

        <span class="send"
          v-if="!initCodeTime"
          @click.stop="getCode">Send</span>
        <span class="send"
          v-else>{{initCodeTime}} s</span>
      </div>

      <div class="login-btn"
        @click.stop="loginTel">
        Sign in / Register
      </div>

      <template v-if="showFB">
        <p class="other-log">Other ways to log in</p>
        <div class="login-types">
          <div class="login-item"
            @click="loginFB">
            <img v-lazy="require('@/assets/images/facbookIcon.png')">
          </div>

          <div class="login-item"
            id="customBtn">
            goole login
          </div>
        </div>
      </template>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import { login, check_login, telLogin, sendCode } from "@/server/user.js";
import fbInit from "@/mixins/fbInit.js";
import loadings from "@/mixins/loadings.js";
export default {
  name: "dialogLoginSelect",
  mixins: [fbInit, loadings],
  data() {
    return {
      phone: "",
      authCode: "",
      initCodeTime: 0 // 初始化验证码时间（单位S）
    };
  },
  computed: {
    setLoginSelectShow() {
      return this.$store.state.dialogs.loginSelect.show;
    },
    /**
     * @description: 显示FB相关（旧dsp投放的环境不显示）
     */
    showFB() {
      if (process.env.VUE_APP_ENV != "production") {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.init();
  },
  mounted() {
    this.$gaSend({
      eventCategory: "第三方登陆浮窗",
      eventAction: "浮窗展示"
    });

    this.startApp();
  },
  methods: {
    init() {
      this.phone = "";
      this.authCode = "";
      this.initCodeTime = 0;
    },
    startApp() {
      var vm = this;
      vm.auth2 = null;
      gapi.load("auth2", function() {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        vm.auth2 = gapi.auth2.init({
          client_id:
            "1003879582574-d1k8jo3b1m55m7pfhvqlvfug5gqk3omg.apps.googleusercontent.com", //客户端ID
          cookiepolicy: "single_host_origin",
          scope: "profile" //可以请求除了默认的'profile' and 'email'之外的数据
        });
        vm.attachSignin(document.getElementById("customBtn"));
      });
    },
    attachSignin(element) {
      let vm = this;
      vm.auth2.attachClickHandler(
        element,
        {},
        function(googleUser) {
          var profile = vm.auth2.currentUser.get().getBasicProfile();
          console.log("ID: " + profile.getId());
          console.log("Full Name: " + profile.getName());
          console.log("Given Name: " + profile.getGivenName());
          console.log("Family Name: " + profile.getFamilyName());
          console.log("Image URL: " + profile.getImageUrl());
          console.log("Email: " + profile.getEmail());
        },
        function(error) {
          console.log(JSON.stringify(error, undefined, 2));
        }
      );
    },
    close() {
      this.$store.commit("setLoginSelectShow", false);
    },
    async getCode() {
      if (!this.phone) {
        this.$toast("Number cannot be empty !");
        return;
      }
      let params = {
        phone: this.phone
      };
      if (process.env.VUE_APP_ENV == "development") {
        params.user = "zztest";
      }
      const result = await sendCode(params);
      if (result) {
        if (result.code == 0) {
          this.$toast({
            message: "Verification code sent !",
            duration: 1000
          });
          this.authCode = result.data;

          // 开始倒计时（60s）
          this.initCodeTime = 60;
          let timer = setInterval(() => {
            if (this.initCodeTime <= 0) {
              clearInterval(timer);
              return;
            }
            this.initCodeTime--;
          }, 1000);
          this.$once("hook:beforeDestroy", () => {
            clearInterval(timer);
          });
        }
      }
    },
    /**
     * @description: 登录接口返回正常
     */
    loginApiEnd(userInfo) {
      this.$store.commit("setUserInfo", userInfo);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      axios.defaults.headers.common["User-Id"] = userInfo.user_id;
      axios.defaults.headers.common["Access-Token"] = userInfo.access_token;
      this.$store.commit("setLoginSelectShow", false);

      if (userInfo.is_new == 1) {
        // 如果是新用户
        window.localStorage.setItem("newUserInfo", JSON.stringify(userInfo));

        fbq("track", "CompleteRegistration");
      }

      if (this.$store.state.dialogs.loginSelect.jumpUrl) {
        window.location.href = this.$store.state.dialogs.loginSelect.jumpUrl;
      } else {
        window.location.reload(); // 刷新当前页
      }
    },
    /**
     * @description: 手机号码 验证码登录
     */
    async loginTel() {
      if (!this.phone) {
        this.$toast("Number cannot be empty !");
        return;
      }
      if (!this.authCode) {
        this.$toast("verification code must be filled !");
        return;
      }
      let params = {
        phone: this.phone,
        auth_code: this.authCode
      };

      if (process.env.VUE_APP_ENV == "development") {
        params.user = "zztest";
      }

      let result = await telLogin(params);
      if (result && result.data) {
        this.loginApiEnd(result.data);
      }
    },
    /**
     * @description: FB登录
     * @return: true 登录成功   false 登录失败
     */
    async loginFB() {
      this.mx_showLoad();

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
        this.mx_closeLoad();

        if (result && result.data) {
          this.loginApiEnd(result.data);
          return true;
        }
      }
      this.mx_closeLoad();
      return false;
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
  }
};
</script>

