<style lang="scss" scoped>
</style>


<template>
  <div class="bargain-container">
    砍价页面
  </div>
</template>

<script>
import bargainingProgressBar from "@/components/bargain/bargainingProgressBar.vue";
import  sharingFriends from '@/components/sharingFriends.vue';
import bargainingHelpInformation from '@/components/bargain/bargainingHelpInformation.vue';
import commodityItem from '@/components/commodity/commodityItem.vue';
export default {
  components: {
    bargainingProgressBar, // 砍价进度条
    sharingFriends,  // 分享好友
    bargainingHelpInformation, // 砍价帮
    commodityItem // 商品列表展示的商品X 
  }
};
</script>
