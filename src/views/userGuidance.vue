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
    <img v-for="(item,index) in $t('userGuidance.imagesList')"
      :key="index"
      :src="item"
      @load="loadItemImg"
      class="img-item">
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadNum: 0 // 加载完的图片个数
    };
  },
  beforeCreate() {
    this.$store.commit("setLoaddingNum", 1);
  },
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
  },
  methods: {
    loadItemImg() {
      this.loadNum++;
      console.log("this.loadNum: ", this.loadNum);
      if (this.loadNum == 5) {
        // 加载5张就首屏加载完了
        this.$store.commit("setLoaddingNum", -1);
      }
    }
  }
};
</script>

