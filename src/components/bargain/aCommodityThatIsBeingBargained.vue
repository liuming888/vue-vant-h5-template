<style lang='scss' scoped>
// .freebing-box {
//   position: relative;
//   margin: 0 30px;
//   padding-bottom: 67px;
//   // height: 300px;
//   > .freebing-title {
//     position: absolute;
//     top: -20px;
//     left: calc(50% - 175px);
//     width: 350px;
//     height: 60px;
//     background: linear-gradient(
//       0deg,
//       rgba(246, 76, 1, 1),
//       rgba(246, 171, 1, 1)
//     );
//     border-radius: 0px 0px 8px 8px;
//     font-size: 28px;
//     text-align: center;
//     line-height: 60px;
//     color: #fff;
//     &::before {
//       content: "";
//       display: block;
//       position: absolute;
//       top: -2px;
//       left: -21px;
//       width: 0;
//       height: 0;
//       border-color: #ac4d07 transparent;
//       border-width: 0px 0px 21px 21px;
//       border-style: solid;
//     }
//     &::after {
//       content: "";
//       display: block;
//       position: absolute;
//       top: -2px;
//       right: -21px;
//       width: 0;
//       height: 0;
//       border-color: #ac4d07 transparent;
//       border-width: 0px 21px 21px 0;
//       border-style: solid;
//     }
//   }
.freebing-container {
  padding: 24px;
  // background-color: #fff;
  // border-radius: 20px;
  > .good-box {
    margin-top: 44px;
    display: flex;
    > .good-img {
      width: 202px;
      height: 202px;
      margin-right: 30px;
    }
    > .good-detail {
      overflow: hidden;
      > .good-title {
        font-size: 30px;
        color: #323232;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      > .progress {
        margin: 19px 0;
        position: relative;
        width: 300px;
        height: 28px;
        border-radius: 14px;
        background-color: #fececa;
        padding: 0 16px;
        line-height: 28px;
        color: #fff;
        font-size: 20px;
        overflow: hidden;
        > img {
          // z-index: 1;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
        }
        > .progress-content {
          position: relative;
          > span:last-child {
            float: right;
            color: #d30c05;
          }
        }
      }
      > .count-down {
        font-size: 26px;
        color: #585858;
        line-height: 33px;
        > .time {
          display: inline-block;
          background-color: #585858;
          color: #fff;
          border-radius: 8px;
          padding: 0 6px;
        }
        > .dec {
          padding-left: 12px;
        }
      }
      > .goods-control {
        margin-top: 23px;
        // padding: 0 31px 39px 31px;
        // display: flex;
        height: 45px;
        > .button-l {
          position: relative;
          display: inline-block;
          font-size: 24px;
          color: #fff;
          text-indent: 49px;
          line-height: 45px;
          width: 184px;
          height: 45px;
          margin-right: 30px;
          background: linear-gradient(
            90deg,
            rgba(246, 174, 1, 1) 0%,
            rgba(246, 75, 1, 1) 100%
          );
          border-radius: 35px;
          text-decoration: none;
          &::before {
            content: "";
            display: block;
            width: 28px;
            height: 28px;
            position: absolute;
            top: 8px;
            left: 15px;
            background: url("./../../assets/images/btn-1.png") no-repeat;
            background-size: 100% auto;
          }
        }
        > .button-r {
          position: relative;
          float: right;
          font-size: 24px;
          color: #fff;
          text-indent: 69px;
          line-height: 45px;
          width: 184px;
          height: 45px;
          background: linear-gradient(
            90deg,
            rgba(211, 12, 5, 1) 0%,
            rgba(246, 78, 1, 1) 100%
          );
          border-radius: 35px;
          text-decoration: none;
          &::before {
            content: "";
            display: block;
            width: 28px;
            height: 28px;
            position: absolute;
            top: 8px;
            left: 15px;
            background: url("./../../assets/images/btn-3.png") no-repeat;
            background-size: 100% auto;
          }
        }
      }
    }
  }
  // > .freebing-more {
  //   margin-top: 35px;
  //   display: block;
  //   font-size: 24px;
  //   text-align: center;
  //   color: #585858;
  // }
}
// background-color: #fff;
// }
</style>

<template>
  <div>
    <!-- <div class="freebing-title">Ongoing Freebies</div> -->
    <div class="freebing-container">
      <div class="good-box">
        <img class="good-img"
          v-lazy="spuBargainItem.spu_pics[0]">
        <div class="good-detail">
          <p class="good-title">{{spuBargainItem.title}}</p>
          <div class="progress">
            <img src="~@/assets/images/progress-bar.png"
              :width="spuBargainItem.bargain_rate+'%'">
            <div class="progress-content">
              <span>has been cut {{spuBargainItem.bargain_amount}}</span>
              <span>{{spuBargainItem.bargain_rate}}%</span>
            </div>
          </div>
          <count-down :dateDiff="3333"></count-down>
          <!-- <div class="count-down">
            <span class="time">{{expirationDat.h}}</span>
            :
            <span class="time">{{expirationDat.p}}</span>
            :
            <span class="time">{{expirationDat.m}}</span>
            <span class="dec">overdued</span>
          </div> -->
          <div class="goods-control">
            <a href="javascrip:;"
              class="button-l"
              @click="cashBack">
              Cash Back
            </a>
            <a href="javascrip:;"
              class="button-r"
              @click="jumpBargain">Go On</a>
          </div>
        </div>
      </div>
      <!-- <a href="javascript:;"
        class="freebing-more"
        @click="$router.push({path:'/isBargainingList'})">More About ></a> -->
    </div>

    <!-- 弹窗 -->
    <!-- <dialog-sharing-friends :dialogVisible.sync="dialogs.sharingFriends"
      :shareInfo="shareInfo" /> -->

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


