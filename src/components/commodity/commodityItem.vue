<style lang="scss" scoped>

</style>


<template>
  <div class="commodityItem-container">
    商品列表展示的商品X

    <dialog-sharing-makes :dialogVisible.sync="dialogs.sharingMakes"/>
  </div>
</template>

<script>
import dialogSharingMakes from "./dialogSharingMakes.vue";
export default {
    name:"aCommodityThatIsBeingBargained",
    components: {
      dialogSharingMakes // 分享赚弹起浮窗 
    },
    data(){
      return {
        dialogs:{
          sharingMakes:{
            show:true
          }
        }
      }
    }
};
</script>
