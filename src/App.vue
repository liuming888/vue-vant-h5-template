
<style lang="scss" src="./assets/css/init.scss"></style>

<template>
  <div id="app">
    <zdd-layout></zdd-layout>
  </div>
</template>

<script>
import zddMain from "@/components/layout/zddMain.vue";
export default {
  name: "App",
  components: {
    "zdd-layout": zddMain
  },
  created() {
    this.initFB();
  },
  methods: {
    /**
     * @description: 初始化FB
     */
    initFB() {
      const vm = this;
      window.fbAsyncInit = async function() {
        FB.init({
          appId: "844618395883361",
          cookie: true,
          xfbml: true,
          version: "v3.2"
        });
        FB.AppEvents.logPageView();
        console.warn("已经初始化FB了");
        let checkResInfo = await window.$faceBookApi.checkFBLoginState();
        console.log("是否已经登录了checkResInfo: ", checkResInfo);
        if (checkResInfo) {
          let {
            authResponse: { accessToken },
            id,
            name,
            pic_square
          } = checkResInfo;
          vm.$store.commit("setUserInfo", {
            accessToken,
            id,
            name,
            pic_square
          });
          localStorage.setItem(
            "userInfo",
            JSON.stringify({ accessToken, id, name, pic_square })
          );
          console.log("1111111111111", vm.$store.state.userInfo);
          console.log("222222222222", localStorage.getItem("userInfo"));
        } else {
          // 直接弹起会被浏览器阻止
          // let loginInfo=await  window.$faceBookApi.loginFB();
          // console.log('loginInfo: ', loginInfo);
        }
      };
    }
  }
};
</script>

