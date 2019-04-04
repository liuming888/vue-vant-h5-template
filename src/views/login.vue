<template>
  <div>
    <div style="margin:100px auto;text-align:center;"
      @click="goLogin">登录</div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.commit("setLoginSelectShow", false);
  },
  created() {},
  methods: {
    async goLogin() {
      let result = false;
      if (result && result.data) {
        let userInfo = result.data;
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
          this.$router.go(-1); // 返回上一页
        }
        return true;
      }
    }
  }
};
</script>
