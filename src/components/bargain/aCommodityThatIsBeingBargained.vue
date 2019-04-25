<style lang='scss' scoped src="./aCommodityThatIsBeingBargained.scss"></style>

<template>
  <div class="freebing-big-box">

    <div class="t-box">
      <img class="good-img"
        v-lazy="spuBargainItem.spu_pics&&spuBargainItem.spu_pics.length>0&&spuBargainItem.spu_pics[0]">

      <div class="c-content">
        <p class="good-title">{{spuBargainItem.title}}</p>

        <count-down :dateDiff="spuBargainItem.expire_ttl"
          v-if="spuBargainItem.expire_ttl"
          :timeType="timeType"
          page="home"></count-down>

        <div class="progress">
          <div class="progress-content"
            :style="{'width':spuBargainItem.bargain_rate+'%'}">
          </div>
          <span>{{spuBargainItem.bargain_rate}}%</span>
        </div>
      </div>

      <div class="price-box">
        <div class="price-num">
          Rp{{spuBargainItem.price}}
        </div>
        <div class="original-price"
          v-if="spuBargainItem.status==1&&spuBargainItem.can_buy!=1">
          Rp{{spuBargainItem.original_price}}
        </div>
        <div class="complete-txt"
          v-else>
          {{$t('home.complete')}}
        </div>
      </div>
    </div>

    <div class="d-box">
      <div class="lanjutkan-btn"
        v-if="spuBargainItem.status==1"
        :class="{'hot':spuBargainItem.can_buy==2}"
        @click="jumpBargain">{{$t('aCommodityThatIsBeingBargained.goOn')}}</div>
      <div class="beli-btn hot"
        v-if="spuBargainItem.can_buy==1"
        @click="jumpPurchasePage">{{$t('aCommodityThatIsBeingBargained.buy')}}</div>
    </div>

    <!-- 弹窗 -->
    <!-- <dialog-sharing-makes :dialogVisible.sync="dialogs.sharingFriends"
      :shareInfo="shareInfo"
      v-if="dialogs.sharingFriends.show" /> -->
  </div>
</template>

<script>
import { shareBargain } from "@/server/share.js";
export default {
  name: "aCommodityThatIsBeingBargained",
  components: {
    countDown: resolve => require(["@/components/countDown.vue"], resolve)
  },
  props: {
    spuBargainItem: {
      type: Object,
      default() {
        return {
          //类型：Object  必有字段  备注：无
          spu_id: 1, //类型：Number  必有字段  备注：商品id
          title: "", //类型：String  必有字段  备注：商品标题
          bargain_rate: 1, //类型：Number  必有字段  备注：已砍价比例
          bargain_coin: "", //类型：String  必有字段  备注：已砍价金额
          expire_time: "", //类型：String  必有字段  备注：砍价过期时间
          bargain_id: "" //类型：String  必有字段  备注：砍价号
        };
      }
    }
  },
  data() {
    return {
      expirationDat: {
        h: "00",
        p: "00",
        m: "00"
      },
      dialogs: {
        sharingFriends: {
          show: false
        }
      },
      shareInfo: {}
    };
  },
  computed: {
    timeType() {
      if (this.spuBargainItem.can_buy == 1) {
        return "buy";
      } else {
        return "endIn";
      }
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.refreshTime();
    },
    jumpPurchasePage() {
      const {
        spu_id: spuId,
        bargain_id: bargainId,
        order_no: orderNo
      } = this.spuBargainItem;
      this.$router.push({
        path: "/purchase",
        query: {
          spuId,
          bargainId,
          orderNo
        }
      });
    },
    /**
     * @description: 时间定时器
     */
    refreshTime() {
      let result = this.$util.expiration(this.spuBargainItem.expire_time);
      if (!result) return;
      this.expirationDat = result;
      const timer = setInterval(() => {
        this.expirationDat = this.$util.expiration(
          this.spuBargainItem.expire_time
        );
      }, 1000);
      this.$once("hook:beforeDestroy", () => {
        clearInterval(timer);
      });
    },
    /**
     * @description: 分享赚
     */
    // async cashBack() {
    //   let result = await shareBargain({
    //     bargain_id: this.spuBargainItem.bargain_id
    //   });
    //   if (result) {
    //     this.shareInfo = result.data;
    //     console.log("this.shareInfo: ", this.shareInfo);
    //   }
    //   this.dialogs.sharingFriends.show = true;
    // },
    /**
     * @description: 跳转到砍价页（商品详情页）
     */
    jumpBargain() {
      this.$router.push({
        path: "/bargain",
        query: {
          spuId: this.spuBargainItem.spu_id,
          bargainId: this.spuBargainItem.bargain_id
        }
      });
    }
  }
};
</script>


