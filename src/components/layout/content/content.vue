<style lang="scss" scoped>
.content-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}
</style>

<template>
  <div class="content-container">
    <router-view></router-view>

    <income-window />
  </div>
</template>

<script>
export default {
  components: {
    incomeWindow: resolve => require(["../../incomeWindow.vue"], resolve) //收益浮窗
  },
  mounted() {
    document.getElementById("mainApp").style.display = "none";
  }
};
</script>

