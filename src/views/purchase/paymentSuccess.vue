<style lang="scss" scoped>
.purchase-container {
  > .info-box {
    padding: 0 30px 100px 30px;
    text-align: center;
    > .success-icon {
      widows: 136px;
      height: 136px;
      margin: 80px 0 60px 0;
    }
    > p {
      font-size: 32px;
      color: #323232;
      font-weight: bold;
    }
  }
}
.like-goods {
  background-color: #D30C05;
  > .like-goods-title {
    position: relative;
    text-align: center;
    padding: 37px 0;
    font-size: 28px;
    color: #fff;
    // background: url('./../../assets/images/clapboard.png') no-repeat top center;
    // background-size: 100% auto;
    &::before,
    &::after {
      content: "";
      width: 95px;
      height: 4px;
      display: block;
      background: url("./../../assets/images/line-l.png") no-repeat;
      background-size: 100% auto;
      position: absolute;
      top: 50px;
      // left: 124px;
    }
    &::before {
      left: 50px;
    }
    &::after {
      background: url("./../../assets/images/line-r.png") no-repeat;
      background-size: 100% auto;
      right: 50px;
    }
  }
  > .like-goods-list {
    padding: 0 30px 36px 30px;
    > div + div {
      margin-top: 30px;
    }
  }
}
</style>

<template>
  <div class="purchase-container">
    <div class="info-box">
      <img src="@/assets/images/success.png" alt class="success-icon">
      <p>Selamat, Anda telah berhasil membayar!</p>
    </div>
     <!-- v-if="goodsList.length>0" -->
    <section class="like-goods" v-show="goodsList.length > 0">
      <div class="like-goods-title">Tebak apa yang kamu suka</div>
      <ul class="like-goods-list">
        <commodity-item v-for="(item, index) of goodsList" :key="index" :itemData="item"/>
      </ul>
    </section>
  </div>
</template>

<script>
import commodityItem from "@/components/commodity/commodityItem.vue";
export default {
  data() {
    return {
      goodsList: []
    }
  },
  components: {
    commodityItem //商品列表展示的商品X
  }
};
</script>
