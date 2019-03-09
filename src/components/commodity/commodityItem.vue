<style lang="scss" scoped>
.home-goods-item {
  border-radius: 20px;
  background-color: #fff;
  overflow: hidden;
  & + .home-goods-item {
    margin-top: 30px;
  }
  > .goods-img {
    img {
      width: 100%;
      height: auto;
    }
  }
  > .goods-detail {
    padding: 49px 31px 0 31px;
    > .goods-title {
      font-size: 36px;
      color: #323232;
    }
    > .goods-description {
      line-height: 40px;
      font-size: 24px;
      color: #888888;
    }
    > .goods-price {
      padding: 10px 0;
      line-height: 44px;
      > .discount {
        font-size: 44px;
        color: #d30c05;
      }
      > .real {
        padding-left: 17px;
        font-size: 24px;
        color: #888888;
        text-decoration: line-through;
      }
    }
  }
  > .goods-control {
    padding: 0 31px 39px 31px;
    // display: flex;
    height: 70px;
    > .button-l {
      position: relative;
      display: inline-block;
      font-size: 28px;
      color: #fff;
      text-indent: 84px;
      line-height: 70px;
      width: 260px;
      height: 70px;
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
        width: 34px;
        height: 34px;
        position: absolute;
        top: 18px;
        left: 39px;
        background: url("./../../assets/images/btn-1.png") no-repeat;
        background-size: 100% auto;
      }
    }
    > .button-r {
      position: relative;
      float: right;
      font-size: 28px;
      color: #fff;
      text-indent: 84px;
      line-height: 70px;
      width: 260px;
      height: 70px;
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
        width: 34px;
        height: 34px;
        position: absolute;
        top: 18px;
        left: 39px;
        background: url("./../../assets/images/btn-2.png") no-repeat;
        background-size: 100% auto;
      }
    }
  }
}
</style>


<template>
  <div class="commodityItem-container">
    <div class="home-goods-item">
      <div class="goods-img">
        <van-swipe v-if="itemData.spu_pics.length>0"
          :autoplay="3000"
          indicator-color="white">
          <van-swipe-item v-for="(swipeItem,swipeIdx) of itemData.spu_pics"
            :key="swipeIdx">
            <img v-lazy="swipeItem || require('@/assets/images/good-large.png')">
          </van-swipe-item>
        </van-swipe>
        <img v-else
          v-lazy="itemData.imgUrl || require('@/assets/images/good-large.png')">
      </div>

      <div class="goods-detail">
        <a :href="itemData.path || '/'"
          class="goods-title">{{itemData.title || ''}}</a>
        <p class="goods-description">{{itemData.description || ''}}</p>
        <p class="goods-description">{{itemData.deliver_count}} Sent</p>
        <div class="goods-price">
          <span class="discount">$ {{itemData.discount || 0}}</span>
          <span class="real">${{itemData.realAmount || 0}}</span>
        </div>
      </div>
      <div class="goods-control">
        <a href="javascrip:;"
          class="button-l"
          @click="cashBack">
          Cash Back
        </a>
        <a href="javascrip:;"
          class="button-r"
          @click="jumpBargain">Get Freebie</a>
      </div>
    </div>

    <dialog-sharing-friends :dialogVisible.sync="dialogs.sharingFriends"  :shareInfo="shareInfo"/>
    <!-- <dialog-sharing-makes :dialogVisible.sync="dialogs.sharingMakes" /> -->
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
const obj = { Swipe, SwipeItem };
const vantCom = {};
for (let k in obj) {
  vantCom[obj[k].name] = obj[k];
}

// import dialogSharingMakes from "./dialogSharingMakes.vue";
import dialogSharingFriends from "@/components/dialogs/dialogSharingFriends.vue";

import { shareSpu } from "@/server/share.js";
export default {
  name: "commodityItem",
  components: {
    // dialogSharingMakes, // 分享赚弹起浮窗
    dialogSharingFriends, // 分享好友弹窗

    ...vantCom
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
    console.log("66666666666666666666", this.itemData);
  },
  methods: {
    /**
     * @description: 分享赚
     */
    async cashBack() {
      let result = await shareSpu({
        spu_id: this.itemData.spu_id
      });
      if (result.code == 0) {
        this.shareInfo = result.data.share_info;
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
          spuId: this.itemData.spu_id
        }
      });
    }
  }
};
</script>
