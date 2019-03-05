<style lang="scss" scoped>
</style>

<template>
  <div class="dialogPostAddAddress-container">
    <van-popup v-model="dialogVisible.show"
      :close-on-click-overlay="false">
      添加新收货地址
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "dialogPostAddAddress",
  props:{
    dialogVisible:{
      type:Object,
      default(){
        return {
          show:false
        }
      }
    }
  },
  data() {
    return {};
  }
};
</script>

