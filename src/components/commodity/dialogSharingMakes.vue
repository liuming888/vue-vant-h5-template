<style lang="scss" scoped>
</style>

<template>
  <div class="dialogSharingMakes-container">
    <van-popup v-model="show"
      :close-on-click-overlay="false">
      分享赚
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "dialogSharingMakes",
  data() {
    return {
      show: false
    };
  }
};
</script>

