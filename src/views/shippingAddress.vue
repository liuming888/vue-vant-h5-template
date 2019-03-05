<style lang="scss" scoped>
</style>

<template>
  <div class="shippingAddress-container">
    已有收货地址列表页

    <dialog-post-add-address :dialogVisible.sync="dialogs.postAddAddress" />
  </div>
</template>

<script>
import dialogPostAddAddress from "@/components/dialogs/dialogPostAddAddress.vue";
export default {
  components: {
    dialogPostAddAddress // （已有）收货地址页
  },
  data() {
    return {
      dialogs: {
        postAddAddress: {
          show: false
        }
      }
    };
  }
};
</script>

