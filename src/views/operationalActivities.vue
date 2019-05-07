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
    <img v-for="(item,index) of $t('operationalActivities.imagesList')"
      :key="index"
      v-lazy="item"
      class="img-item">
  </div>
</template>

<script>
export default {
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
