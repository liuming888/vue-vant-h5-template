<style lang="scss" scoped>
</style>

<template>
  <div class="dialogLoginSelect-container">
    登录选择弹窗

    <van-popup v-model="show"
      :close-on-click-overlay="false">内容</van-popup>
  </div>
</template>

<script>
export default {
  name: "dialogLoginSelect",
  components: {
    [Popup.name]: Popup
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

