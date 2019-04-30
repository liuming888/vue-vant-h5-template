<style lang="scss" scoped>
.home-goods-item {
  border-radius: 20px;
  background-color: #fff;
  overflow: hidden;

  & + .home-goods-item {
    margin-top: 60px;
  }
  > .goods-img {
    height: 369px;
    img {
      width: 100%;
      // height: auto;
      height: 369px;
    }
  }
  > .goods-detail {
    padding: 32px 24px 28px;
    overflow: hidden;
    > .goods-title {
      display: block;
      color: #323232;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 28px;
      font-family: Helvetica;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 35px;
      margin-bottom: 30px;
    }
    > .goods-description {
      line-height: 40px;
      font-size: 24px;
      color: #888888;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    > .goods-price {
      // padding: 10px 0;
      line-height: 35px;
      > .discount {
        color: #d30c05;
        font-size: 38px;
        font-family: "DIN-Medium";
        font-weight: 500;
        color: rgba(211, 12, 5, 1);
      }
      > .real {
        margin-left: 17px;
        text-decoration: line-through;
        font-size: 20px;
        font-family: Helvetica;
        font-weight: 400;
        color: rgba(136, 136, 136, 1);
      }
    }
  }
  > .goods-control {
    padding: 0 31px 32px 31px;
    // display: flex;
    height: 70px;
    overflow: hidden;

    > span {
      position: relative;
      font-size: 28px;
      display: inline-block;
      color: #fff;
      height: 60px;
      line-height: 60px;
      border-radius: 30px;
      text-decoration: none;
      padding: 0 24px ;

      &::before {
        content: "";
        display: block;
        width: 34px;
        height: 34px;
        position: absolute;
        top: 18px;
        left: 19px;
      }

      &.button-l {
        color: #f64e01;
        border: 1px solid rgba(246, 78, 1, 1);
      }
      &.button-r {
        float: right;
        color: #d30c05;
        border: 1px solid rgba(211, 12, 5, 1);
      }
    }
  }
}
</style>

<template>
  <div class="commodityItem-container">
    <div class="home-goods-item">
      <div class="goods-img"
        @click="jumpBargain">
        <div v-if="itemData.spu_pics&&itemData.spu_pics.length<2">
           <img v-lazy="itemData.spu_pics[0]">
        </div>
        <van-swipe v-else-if="itemData.spu_pics"
          :autoplay="bannerAutoPlayTime"
          :show-indicators="false"
          indicator-color="white">
          <template v-for="(swipeItem,swipeIdx) of itemData.spu_pics">
            <van-swipe-item :key="swipeIdx"
              v-if="!isLoad&&index==0||isLoad">
              <img v-lazy="swipeItem||''">
            </van-swipe-item>
          </template>
        </van-swipe>
      </div>

      <div class="goods-detail">
        <a href="javascript:;"
          class="goods-title"
          @click="jumpBargain">{{itemData.title || ''}}</a>
        <!-- <p class="goods-description">{{itemData.sub_title || ''}}</p> -->
        <!-- <p class="goods-description">{{itemData.deliver_count}} Sent</p> -->
        <div class="goods-price">
          <span class="discount">Rp{{itemData.price || 0}}</span>
          <span class="real">{{$t('commodityItem.platformPrice')}}:Rp{{itemData.original_price || 0}}</span>
        </div>
      </div>
      <div class="goods-control">
        <span class="button-l"
          @click="cashBack">
          {{$t('commodityItem.cashBack')}}
        </span>
        <span class="button-r"
          @click="jumpBargain">{{$t('commodityItem.getAFreebie')}}</span>
      </div>
    </div>

    <!-- <dialog-sharing-friends :dialogVisible.sync="dialogs.sharingFriends"  :shareInfo="shareInfo"/> -->
    <dialog-sharing-makes :dialogVisible.sync="dialogs.sharingFriends"
      :shareInfo="shareInfo"
      v-if="dialogs.sharingFriends.show"
      :itemData="itemData" />
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";

import { shareSpu } from "@/server/share.js";
export default {
  name: "commodityItem",
  components: {
    dialogSharingMakes: resolve =>
      require(["./dialogSharingMakes.vue"], resolve), // 点击分享赚弹起浮窗

    // ...vantCom,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  props: {
    itemData: {
      type: Object,
      default() {
        return {
          //类型：Object  必有字段  备注：无
          spu_id: 1, //类型：Number  必有字段  备注：商品id
          title: "mock", //类型：String  必有字段  备注：商品标题
          price: 1, //类型：Number  必有字段  备注：商品售价
          deliver_count: 1, //类型：Number  必有字段  备注：已送出数量
          spu_pics: [
            "http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg",
            "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"
          ]
        };
      }
    },
    gaInfo: {
      type: Object
    }
  },
  data() {
    return {
      dialogs: {
        // sharingMakes: {
        //   show: true
        // },
        sharingFriends: {
          show: false
        }
      },
      bannerAutoPlayTime: 1000000, // banner自动播放时间
      shareInfo: {},
      // ga填充信息
      gaInfo: {},
      isLoad: false // 页面是否已经加载的差不多了
    };
  },
  mounted() {
    setTimeout(() => {
      this.bannerAutoPlayTime = 12000; // 首屏渲染后才设置为12秒自动轮播
      this.isLoad = true; // 页面是否已经加载的差不多了
    }, 1000);
  },
  methods: {
    /**
     * @description: 分享赚
     */
    async cashBack() {
      this.$emit("cashBackGa", this.itemData);

      fbq("track", "Subscribe", {
        value: this.itemData.title,
        currency: "USD",
        predicted_ltv: this.itemData.spu_id
      });

      if (
        !this.$store.state.userInfo.user_id &&
        process.env.VUE_APP_ENV != "development"
      ) {
        this.$store.commit("setLoginJumpUrl", ``);
        // this.$store.commit("setLoginJumpUrl", `/?loginShare=ok`);
        this.$store.commit("setLoginSelectShow", true);
        return;
      }

      let result = await shareSpu({
        spu_id: this.itemData.spu_id
      });
      if (result && result.data) {
        this.shareInfo = result.data;
        console.log("this.shareInfo: ", this.shareInfo);
        this.dialogs.sharingFriends.show = true;
      } else {
        this.$toast("Failed to get sharing information");
      }
    },
    /**
     * @description: 跳转到砍价页（商品详情页）
     */
    jumpBargain() {
      this.$emit("jumpBargainGa", this.itemData);
      // if (
      //   !this.$store.state.userInfo.user_id &&
      //   process.env.VUE_APP_ENV != "development"
      // ) {
      //   this.$store.commit("setLoginJumpUrl", ""); // 不跳砍价页面，因为登录后这商品可能被这用户砍了
      //   this.$store.commit("setLoginSelectShow", true);
      //   return;
      // }

      this.$router.push({
        path: "/bargain",
        query: {
          spuId: this.itemData.spu_id
        }
      });
    }
  }
  /* ,
  beforeRouteUpdate(to, from, next) {
    const { loginShare } = to.query;
    if (loginShare == "ok") {
      this.$store.commit("setLoginSelectShow", false); // 测试（上线后可去掉）
      this.cashBack();
    }
    next();
  } */
};
</script>
