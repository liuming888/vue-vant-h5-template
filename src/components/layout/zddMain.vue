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
    <!-- <zdd-tab-bar></zdd-tab-bar> -->

    <!-- 弹窗 -->
    <dialog-login-select v-if="$store.state.dialogs.loginSelect.show" />
    <dialog-new-gift-bag v-if="$store.state.dialogs.newGiftBag.show" />
  </div>
</template>

<script>
import content from "./content/content.vue";
// import tabBar from "./tabBar/tabBar.vue";

import dialogBidPriceCompleted from "@/components/dialogs/dialogBidPriceCompleted.vue";
import dialogLoginSelect from "@/components/dialogs/dialogLoginSelect.vue";
import dialogNewGiftBag from "@/components/dialogs/dialogNewGiftBag.vue";
export default {
  name: "zddMain",
  components: {
    "zdd-content": content,
    // "zdd-tab-bar": tabBar,

    dialogBidPriceCompleted, // 砍价完成弹窗
    dialogLoginSelect, // 登录选择弹窗
    dialogNewGiftBag // 新人礼包
  },
  mounted() {},
  watch: {
    $route(val) {
      console.log("当前路径", val.path);
      // 如果登陆成功后刷新界面发现登陆的是新用户并且不是在帮砍页
      if (
        localStorage.getItem("newUserInfo")&&
        this.$route.path != "/forBargain"
      ) {
        this.$store.commit("setNewGiftBagShow", true);
      }
    }
  }
};
</script>

