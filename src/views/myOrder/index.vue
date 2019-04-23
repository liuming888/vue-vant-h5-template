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

  .alertBox {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: rgba(0, 0, 0, 0.5);
    .alertWrap {
      width: 610px;
      height: 460px;
      background: rgba(255, 255, 255, 1);
      border-radius: 20px;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      position: absolute;
      .alertWrap-item {
        height: 45px;
        text-indent: 67px;
        line-height: 45px;
        background-repeat: no-repeat;
        background-size: auto 100%;
        background-position: 30px center;
        &:nth-of-type(1) {
          background-image: url("../../assets/images/facbookIcon.png");
        }
        &:nth-of-type(2) {
          background-image: url("../../assets/images/weixinIcon.png");
        }
        &:nth-of-type(3) {
          background-image: url("../../assets/images/lineIcon.png");
        }
      }
      h1 {
        height: 34px;
        font-size: 36px;
        font-weight: bold;
        color: rgba(50, 50, 50, 1);
        line-height: 40px;
        margin: 40px 0;
        text-align: center;
      }
      li {
        font-size: 28px;
        color: #323232;
        margin-top: 30px;
        padding: 0 20px;
        white-space: nowrap;

        &:first-of-type {
          margin-top: 0;
        }
      }
      div {
        font-size: 32px;
        font-weight: bold;
        color: rgba(211, 12, 5, 1);
        height: 100px;
        line-height: 100px;
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-top: 1px solid rgba(242, 242, 242, 1);
      }
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

      </van-tab>
    </van-tabs>

    <router-view></router-view>
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
          tit: this.$t('myOrder.myOdersTit'),
          path: "/my/myOrder/semua"
        },
        {
          tit: this.$t('myOrder.pendingPaymentTit'),
          path: "/my/myOrder/pendingPayment"
        },
        {
          tit: this.$t('myOrder.completedTit'),
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

