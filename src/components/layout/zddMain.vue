<style lang="scss" scoped>
.main-container {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
</style>

<template>
  <div class="main-container">
    <zdd-content></zdd-content>

    <!-- 弹窗 -->
    <dialog-login-select v-if="$store.state.dialogs.loginSelect.show" />
    <dialog-new-gift-bag v-if="$store.state.dialogs.newGiftBag.show" />
  </div>
</template>

<script>
import content from "./content/content.vue";
export default {
  name: "zddMain",
  components: {
    "zdd-content": content,

    dialogBidPriceCompleted: resolve =>
      require(["@/components/dialogs/dialogBidPriceCompleted.vue"], resolve), // 砍价完成弹窗
    dialogLoginSelect: resolve =>
      require(["@/components/dialogs/dialogLoginSelect.vue"], resolve), // 登录选择弹窗
    dialogNewGiftBag: resolve =>
      require(["@/components/dialogs/dialogNewGiftBag.vue"], resolve) // 新人礼包
  },
  mounted() {},
  watch: {
    $route(val) {
      console.log("当前路径", val.path);
      // 如果登陆成功后刷新界面发现登陆的是新用户并且不是在帮砍页
      if (
        localStorage.getItem("newUserInfo") &&
        // this.$route.path != "/forBargain" &&
        this.$route.path == "/"
      ) {
        this.$store.commit("setNewGiftBagShow", true);
      }
    }
  }
};
</script>

