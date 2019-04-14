<style lang="scss">
#app {
  width: 100vw;
  overflow: hidden;
}
</style>

<style lang="scss" src="./assets/css/init.scss"></style>

<template>
  <div id="app">
  {{ $t("home.test1") }}
    <zdd-layout></zdd-layout>
  </div>
</template>

<script>
import axios from "axios";
import { FBConfig } from "@/config/index.js";
import zddMain from "@/components/layout/zddMain.vue";

import { login, refreshToken } from "@/server/user.js";
export default {
  name: "App",
  components: {
    "zdd-layout": zddMain
  },
  created() {
    let newUserStr = localStorage.getItem("newUserInfo");
    if (newUserStr) {
      this.$store.commit("setIsreFreshToken", true);
      let userInfo = JSON.parse(newUserStr);
      this.$store.commit("setUserInfo", userInfo);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      axios.defaults.headers.common["User-Id"] = userInfo.user_id;
      axios.defaults.headers.common["Access-Token"] = userInfo.access_token;
      return;
    }

    if (
      process.env.VUE_APP_ENV == "development" ||
      process.env.VUE_APP_ENV == "mock"
    ) {
      return;
    }
    this.initToken();

    if(process.env.VUE_APP_ENV == "production") return;
    this.initFB();
  },
  methods: {
    /**
     * @description: 初始化FB
     */
    initFB() {
      require("@/utils/faceBookSdk.js");
      const vm = this;
      window.fbAsyncInit = async function() {
        FB.init(FBConfig);
        FB.AppEvents.logPageView();
        console.warn("已经初始化FB了");
        // let checkResInfo = await window.$faceBookApi.checkFBLoginState();
        // console.log("是否已经登录了checkResInfo: ", checkResInfo);
        // if (checkResInfo) {
        //   let {
        //     authResponse: { accessToken },
        //     id,
        //     name,
        //     pic_square
        //   } = checkResInfo;
        //   let result = await login({
        //     tp_id: id,
        //     tp_token: accessToken,
        //     tp_type: 1
        //   });

        //   if (result) {
        //     let userInfo = result.data;
        //     vm.$store.commit("setUserInfo", userInfo);
        //     localStorage.setItem("userInfo", JSON.stringify(userInfo));
        //     axios.defaults.headers.common["user_id"] = userInfo.user_id;
        //     axios.defaults.headers.common["access_token"] =
        //       userInfo.access_token;
        //     console.log("1111111111111", vm.$store.state.userInfo);
        //     console.log("222222222222", localStorage.getItem("userInfo"));
        //   }
        // } else {
        //   // 直接弹起会被浏览器阻止
        //   // let loginInfo=await  window.$faceBookApi.loginFB();
        //   // console.log('loginInfo: ', loginInfo);
        // }
      };
    },
    /**
     * @description: 刷新下登录token
     */
    async initToken() {
      let userStr = localStorage.getItem("userInfo");
      if (userStr) {
        let userInfo = JSON.parse(userStr);
        axios.defaults.headers.common["User-Id"] = userInfo.user_id;
        axios.defaults.headers.common["Access-Token"] = userInfo.access_token;

        let result = await refreshToken(JSON.parse(userStr));
        this.$store.commit("setIsreFreshToken", true);
        if (result && result.data) {
          let userInfo = result.data;
          this.$store.commit("setUserInfo", userInfo);
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          axios.defaults.headers.common["User-Id"] = userInfo.user_id;
          axios.defaults.headers.common["Access-Token"] = userInfo.access_token;
          console.log("已经刷新token了");
        }
      }
    }
  }
};
</script>

