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
  background-color: #d30c05;
  > .like-goods-title {
    padding: 37px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 720px;
      height: 33px;
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
    <!-- 返回首页 -->
    <turn-home />

    <div class="info-box">
      <img src="@/assets/images/success.png"
        alt
        class="success-icon">
      <p>{{$t('paymentSuccess.successTit')}}</p>
    </div>
    <section class="like-goods"
      v-show="goodsList.length > 0">
      <div class="like-goods-title">
        <img :src="$t('paymentSuccess.loveproducts')">
      </div>

      <ul class="like-goods-list">
        <li is="commodity-item"
          v-for="(item, index) of goodsList"
          @jumpBargainGa="jumpBargain"
          :key="index"
          :itemData="item">
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import commodityItem from "@/components/commodity/commodityItem.vue";
import { getBargainSpus } from "@/server/goods.js";
export default {
  components: {
    commodityItem, //商品列表展示的商品X
    turnHome: resolve => require(["@/components/turnHome.vue"], resolve) // 返回首页按钮
  },
  data() {
    return {
      goodsList: [],
      goodsListPageDat: {
        page_size: 10,
        page_num: 1
      }
    };
  },
  created() {
    this.initGoodsList({ ...this.goodsListPageDat });
  },
  mounted() {
    // setTimeout(() => {
    //   this.$router.push("/");
    // }, 6000);
  },
  methods: {
    async initGoodsList({ page_size, page_num, is_all = 0 }) {
      // 看看vuex里有木有缓存6条没砍价的
      let stateGoodsList = this.$store.state.goodsList.filter(
        item => !item.isBargain
      );
      if (stateGoodsList.length > 6) {
        this.goodsList = stateGoodsList;
        return;
      }

      let result = await getBargainSpus({ page_size, page_num, is_all });
      if (result && result.data) {
        this.goodsList = result.data.spu_list;
        if (page_num == 1) {
          this.$store.commit("setGoodsList", this.goodsList);
        } else {
          let arr = JSON.parse(JSON.stringify(this.$store.state.goodsList));
          this.$store.commit("setGoodsList", arr.push(result.data.spu_list));
        }
      }
    },
    jumpBargain() {
      this.$gaSend({
        eventCategory: "支付成功页面_商品列表点击",
        eventAction: "点击"
      });
    }
  }
  //  beforeRouteLeave (to, from, next) {
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  //   window.location.href="http://192.168.4.77:8080/";
  // }
};
</script>
