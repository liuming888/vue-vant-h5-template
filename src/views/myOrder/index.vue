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

<style lang="scss">
.all-order {
  padding: 20px 30px;
  > .all-order-item {
    background: #fff;
    border-radius: 15px;
    padding: 30px 20px;
    margin-bottom: 20px;
  }
}

.without-order {
  padding: 0 30px;
  text-align: center;
  font-size: 28px;
  color: #888;
  > .none-file-icon {
    width: auto;
    height: 140px;
    margin: 170px 0 70px 0;
  }
  > .btn {
    margin-top: 100px;
    height: 88px;
    line-height: 88px;
    border: 1px solid rgba(211, 12, 5, 1);
    border-radius: 44px;
    color: #d30c05;
    font-size: 32px;
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
      this.$router.replace(this.tabList[index].path);
    }
  }
};
</script>

