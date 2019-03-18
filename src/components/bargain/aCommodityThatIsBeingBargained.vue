<style lang='scss' scoped src="./aCommodityThatIsBeingBargained.scss"></style>

<template>
  <div>
    <!-- <div class="freebing-title">Ongoing Freebies</div> -->
    <div class="freebing-container">
      <div class="good-box">
        <img class="good-img"
          v-lazy="spuBargainItem.spu_pics[0]">
        <div class="good-detail">
          <p class="good-title">{{spuBargainItem.title}}</p>
          <count-down :dateDiff="3333"></count-down>

          <div class="left-box">
            <div class="num-box">
              <span class="rp-box">Rp0.00</span> <span class="compeled">compeled</span>
            </div>

            <div class="progress">
              <img v-lazy="require('@/assets/images/progress-bar.png')"
                :width="spuBargainItem.bargain_rate+'%'">
              <div class="progress-content">
                <span>has been cut {{spuBargainItem.bargain_amount}}</span>
                <span>{{spuBargainItem.bargain_rate}}%</span>
              </div>
            </div>
          </div>

          <div class="goods-control">
            <a href="javascrip:;"
              class="go-on-btn"
              :class="{'r-b':spuBargainItem.can_buy==2}"
              @click="jumpBargain">
              Go On
            </a>
            <a href="javascrip:;"
              class="buy-btn r-b"
              v-if="spuBargainItem.can_buy==1"
              @click="jumpPurchasePage">Buy</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹窗 -->
    <dialog-sharing-makes :dialogVisible.sync="dialogs.sharingFriends"
      :shareInfo="shareInfo"
      v-if="dialogs.sharingFriends.show" />
  </div>
</template>

<script>
// import dialogSharingFriends from "@/components/dialogs/dialogSharingFriends.vue";
import dialogSharingMakes from "@/components/commodity/dialogSharingMakes.vue";
import countDown from "@/components/countDown.vue";

import { shareBargain } from "@/server/share.js";
export default {
  name: "aCommodityThatIsBeingBargained",
  components: {
    // dialogSharingFriends, // 分享好友弹窗
    dialogSharingMakes, // 分享赚弹起浮窗
    countDown
  },
  props: {
    spuBargainItem: {
      type: Object,
      default() {
        return {
          //类型：Object  必有字段  备注：无
          spu_id: 1, //类型：Number  必有字段  备注：商品id
          title: "mock", //类型：String  必有字段  备注：商品标题
          bargain_rate: 1, //类型：Number  必有字段  备注：已砍价比例
          bargain_coin: "mock", //类型：String  必有字段  备注：已砍价金额
          expire_time: "mock", //类型：String  必有字段  备注：砍价过期时间
          bargain_id: "mock" //类型：String  必有字段  备注：砍价号
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
      shareInfo: {
        // 分享信息
        shareUrl: window.location.origin + "/forBargain", // 从点击打开的链接
        shareTitle: "分享标题",
        shareDescription: "分享的描述",
        shareImage: "https://s.pinimg.com/images/facebook_share_image.png", //  分享的预览图（图片有限制）
        quote:
          "FB随分享的链接一同显示的引文可由用户自行高亮选择，也可由开发者预先定义（例如文章的醒目引文）"
        // hashtag:"FB分享的tag标签"
      }
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.refreshTime();
    },
    jumpPurchasePage() {
      const { spu_id: spuId, bargain_id: bargainId } = this.spuBargainItem;
      this.$router.push({
        path: "/purchase",
        query: {
          spuId,
          bargainId
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
    async cashBack() {
      let result = await shareBargain({
        bargain_id: this.spuBargainItem.bargain_id
      });
      if (result) {
        this.shareInfo = result.data;
        console.log("this.shareInfo: ", this.shareInfo);
      }
      this.dialogs.sharingFriends.show = true;
    },
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


