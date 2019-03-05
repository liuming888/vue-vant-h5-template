<style lang="scss" scoped>
</style>

<template>
  <div class="dialogOldUsersHelpCutSuccessfully-container">
    <van-popup v-model="dialogVisible.show"
      :close-on-click-overlay="false">老用户帮砍成功弹窗</van-popup>
  </div>
</template>

<script>
export default {
  name: "dialogOldUsersHelpCutSuccessfully",
  props: {
    dialogVisible: {
      type: Object,
      default() {
        return {
          show: false
        };
      }
    }
  },
  data() {
    return {};
  }
};
</script>

