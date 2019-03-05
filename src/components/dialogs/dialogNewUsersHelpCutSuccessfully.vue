<style lang="scss" scoped>
</style>

<template>
  <div class="dialogNewUsersHelpCutSuccessfully-container">
    <van-popup v-model="dialogVisible.show"
      :close-on-click-overlay="false">新用户帮砍成功弹窗</van-popup>
  </div>
</template>

<script>
export default {
  name: "dialogNewUsersHelpCutSuccessfully",
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

