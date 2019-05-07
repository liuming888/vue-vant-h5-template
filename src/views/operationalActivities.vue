<style lang="scss" scoped>
.operationalActivities-container {
  width: 100%;
  overflow: hidden;

  .img-item {
    width: 100%;
    height: auto;
  }
}
</style>

<template>
  <div class="operationalActivities-container">
    <turn-home />
    <img v-for="(item,index) of $t('operationalActivities.imagesList')"
      :key="index"
      v-lazy="item"
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
