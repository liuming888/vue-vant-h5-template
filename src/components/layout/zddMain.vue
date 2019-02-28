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
    <zdd-tab-bar></zdd-tab-bar>
  </div>
</template>

<script>
import content from "./content/content.vue";
import tabBar from "./tabBar/tabBar.vue";

import dialogBidPriceCompleted from "@/components/dialogs/dialogBidPriceCompleted.vue";
export default {
  name: "zddMain",
  components: {
    "zdd-content": content,
    "zdd-tab-bar": tabBar,

    dialogBidPriceCompleted // 砍价完成弹窗
  }
};
</script>

