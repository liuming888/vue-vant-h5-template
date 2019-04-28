<style lang="scss" scoped>
.userGuidance-container {
  width: 100%;
  overflow: hidden;

  .img-item {
    width: 100%;
    height: auto;
  }
}
</style>

<template>
  <div class="userGuidance-container">
    <turn-home />
    <img v-for="item in 4"
      :key="item"
      v-lazy="require(`@/assets/images/user_guidance/yindao_0${item}.jpg`)"
      class="img-item">
  </div>
</template>

<script>
export default {
  components: {
    turnHome: resolve => require(["@/components/turnHome.vue"], resolve) // 返回首页按钮
  },
  mounted() {
    if (
      !Vue.prototype.$mainAppLoad &&
      document.getElementById("mainApp").style.display != "none"
    ) {
      document.getElementById("mainApp").style.display = "none";
      Vue.prototype.$mainAppLoad = true; // 已经加载了首屏
    }
  }
};
</script>

