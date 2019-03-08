<style lang="scss" scoped>
</style>


<template>
  <div class="bargain-container">
    砍价页面
    <dialog-sharing-friends :dialogVisible.sync="dialogs.sharingFriends"/>
  </div>
</template>

<script>
import bargainingProgressBar from "@/components/bargain/bargainingProgressBar.vue";
import  dialogSharingFriends from '@/components/dialogs/dialogSharingFriends.vue';
import bargainingHelpInformation from '@/components/bargain/bargainingHelpInformation.vue';
import commodityItem from '@/components/commodity/commodityItem.vue';
export default {
  components: {
    bargainingProgressBar, // 砍价进度条
    dialogSharingFriends,  // 分享好友弹窗
    bargainingHelpInformation, // 砍价帮
    commodityItem // 商品列表展示的商品X 
  },
  data(){
    return {
      dialogs:{
        sharingFriends:{
          show:true
        }
      }
    }
  }
};
</script>
