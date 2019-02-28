<style lang="scss" scoped>

</style>


<template>
  <div class="dialogBidPriceCompleted-container">
    砍价完成弹窗
    <van-popup v-model="show" :close-on-click-overlay="false">内容</van-popup>
  </div>
</template>

<script>
import { Popup } from 'vant';
export default {
    name:"dialogBidPriceCompleted",
    components: {
      [Popup.name]:Popup
    },
    data(){
      return {
        show:false
      }
    }
};
</script>
