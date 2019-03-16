<style lang="scss">
.order-container {
  background: #f9f9f9;
  height: 100vh;
  overflow-y: auto;

  .van-tab {
    font-size: 0.32rem;
    font-weight: 500;

    &.van-tab--active {
      color: #d30c05;
    }

    .van-tabs__line {
      background-color: #d30c05;
    }
  }
}
</style>

<template>
  <div class="order-container">
    <van-tabs swipeable
      @click="goPath"
      title-active-color="#D30C05"
      title-inactive-color="#323232">
      <van-tab v-for="(item, index) in tabList"
        :title="item.tit"
        :key="index">
        <router-view></router-view>
      </van-tab>
    </van-tabs>

  </div>
</template>
<script>
import { Tab, Tabs } from "vant";

export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data() {
    return {
      tabList: [
        {
          tit: "Semua",
          path: "/my/myOrder/semua"
        },
        {
          tit: "Pending payment",
          path: "/my/myOrder/pendingPayment"
        },
        {
          tit: "Completed",
          path: "/my/myOrder/completed"
        }
      ]
    };
  },
  methods: {
    goPath(index) {
      this.$router.push(this.tabList[index].path);
    }
  }
};
</script>

