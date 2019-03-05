<style lang="scss" scoped>
</style>


<template>
  <div class="bargain-container">
    帮砍页面

    <!-- 弹窗 -->
    <dialog-login-select :dialogVisible.sync="dialogs.loginSelect" />
    <dialog-new-users-help-cut-successfully :dialogVisible.sync="dialogs.newUsersHelpCutSuccessfully" />
    <dialog-old-users-help-cut-successfully :dialogVisible.sync="dialogs.oldUsersHelpCutSuccessfully" />
  </div>
</template>

<script>
import bargainingProgressBar from "@/components/bargain/bargainingProgressBar.vue";
import commodityItem from "@/components/commodity/commodityItem.vue";
import dialogLoginSelect from "@/components/dialogs/dialogLoginSelect.vue";
import dialogNewUsersHelpCutSuccessfully from "@/components/dialogs/dialogNewUsersHelpCutSuccessfully.vue";
import dialogOldUsersHelpCutSuccessfully from "@/components/dialogs/dialogOldUsersHelpCutSuccessfully.vue";
export default {
  components: {
    bargainingProgressBar, // 砍价进度条
    commodityItem, // 商品列表展示的商品X

    dialogLoginSelect, // 登录选择弹窗
    dialogNewUsersHelpCutSuccessfully, // 新用户帮砍成功弹窗
    dialogOldUsersHelpCutSuccessfully // 老用户帮砍成功弹窗
  },
  data() {
    return {
      dialogs: {
        loginSelect: {
          show: false
        },
        newUsersHelpCutSuccessfully: {
          show: false
        },
        oldUsersHelpCutSuccessfully: {
          show: true
        }
      }
    };
  },
  methods: {}
};
</script>
