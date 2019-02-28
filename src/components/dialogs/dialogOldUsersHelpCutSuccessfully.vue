<style lang="scss" scoped>
</style>

<template>
  <div class="dialogOldUsersHelpCutSuccessfully-container">
    老用户帮砍成功弹窗
    <van-popup v-model="show"
      :close-on-click-overlay="false">内容</van-popup>
  </div>
</template>

<script>
export default {
  name: "dialogOldUsersHelpCutSuccessfully",
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

