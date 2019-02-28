<style lang="scss" scoped>
.home {
  width: 750px;
  height: 1px;
  background: red;
}
</style>


<template>
  <div class="home-container">
    home页面
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
const obj = { Swipe, SwipeItem };
const vantCom = {};
for (let k in obj) {
  vantCom[obj[k].name] = obj[k];
}

import userPickingUpMessage from "@/components/userPickingUpMessage.vue";
import aCommodityThatIsBeingBargained from "@/components/bargain/aCommodityThatIsBeingBargained.vue";
import commodityItem from "@/components/commodity/commodityItem.vue";
export default {
  components: {
    userPickingUpMessage, // 用户领取消息播放
    aCommodityThatIsBeingBargained, // 一件正在进行砍价商品  
    commodityItem, // 商品列表展示的商品X
    ...vantCom  // vant组件
  }
};
</script>
