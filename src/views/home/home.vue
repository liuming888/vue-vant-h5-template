
<style lang="scss" scoped>
.home-container {
  background-color: #D30C05;
  > .home-top-container {
    position: relative;
    &::after {
      content: '';
      display: block;
      height: 39px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: url('./../../assets/images/clapboard.png') no-repeat top center;
      background-size: 100% auto;
    }
    > .home-top-msg {
      position: absolute;
      top: 21px;
      left: 0;
      // width: 355px;
      margin: 0 23px;
      padding-right: 16px;
      height: 48px;
      line-height: 48px;
      border-radius: 24px;
      text-indent: 65px;
      color: #fff;
      font-size: 20px;
      background-color: rgba(255,255,255,.4);
      max-width: calc(100% - 62px);
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      > .home-top-msg-img {
        width: 38px;
        height: 38px;
        position: absolute;
        top: 5px;
        left: 16px;
      }
    }
    > .home-banner > img {
      width: 100%;
      height: auto;
    }
    
  }
  > .home-goods {
    > .home-goods-title {
      position: relative;
      text-align: center;
      padding: 37px 0;
      font-size: 28px;
      color: #fff;
      // background: url('./../../assets/images/clapboard.png') no-repeat top center;
      // background-size: 100% auto;
      &::before, &::after {
        content: '';
        width: 95px;
        height: 4px;
        display: block;
        background: url('./../../assets/images/line-l.png') no-repeat;
        background-size: 100% auto;
        position: absolute;
        top: 50px;
        // left: 124px;
      }
      &::before {
        left: 124px;
      }
      &::after {
        background: url('./../../assets/images/line-r.png') no-repeat;
        background-size: 100% auto;
        right: 124px;
      }
    }
    > .home-goods-list {
      padding: 0 30px 36px 30px;
      > div + div {
        margin-top: 30px;
      }
    }
  }
  > .fudai {
    position: fixed;
    bottom: 221px;
    right: 0;
    cursor: pointer;
    > img {
      width: 120px;
    }
  }
}
</style>
<template>
  <div class="home-container">
    <!-- home页面 -->
    <section class="home-top-container">
      <!-- 用户消息 -->
      <user-picking-up-message></user-picking-up-message>
      <div class="home-banner">
        <img src="@/assets/images/home-banner.png" alt="">
      </div>
      <!-- 抢购商品 -->
      <freebing-box></freebing-box>
    </section>
    <!-- 商品列表 -->
    <section class="home-goods">
      <div class="home-goods-title">DAILY DISCOVER</div>
      <ul class="home-goods-list">
        <commodity-item v-for="(item, index) in goodsList" :key="index" :itemData="item" />
      </ul>
    </section>
    <!-- 福袋 -->
    <div class="fudai">
      <img src="@/assets/images/fudai.png" alt="">
    </div>
  </div>
</template>

<script>
import userPickingUpMessage from "@/components/userPickingUpMessage.vue";
import FreebingBox from "@/components/bargain/aCommodityThatIsBeingBargained.vue";
import commodityItem from "@/components/commodity/commodityItem.vue";
export default {
  components: {
    userPickingUpMessage, // 用户领取消息播放
    FreebingBox, // 一件正在进行砍价商品
    commodityItem // 商品列表展示的商品X
    // ...vantCom // vant组件
  },
  data() {
    return {
      // 商品列表数据
      goodsList: [
        {
          title: 'Casual Large Capacity Compartment',
          path: '/',
          description: 'Details details details details details details details details',
          discount: '0.00',
          realAmount: '1258',
          imgUrl: require('@/assets/images/good-large.png')
        },
        {
          title: 'Casual Large Capacity Compartment',
          path: '/',
          description: 'Details details details details details details details details',
          discount: '0.00',
          realAmount: '1258',
          imgUrl: require('@/assets/images/good-large.png')
        }
      ]
    };
  },
  mounted() {},
  methods: {
  }
};
</script>
