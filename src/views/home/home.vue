<style lang="scss" scoped>
.home-container {
  background-color: #d30c05;
  height: 89vh;
  overflow-y: auto;
  padding-bottom: 36px;
  > .home-top-container {
    position: relative;
    width: 100vw;
    overflow: hidden;
    &::after {
      content: "";
      display: block;
      height: 39px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: url("./../../assets/images/clapboard.png") no-repeat top
        center;
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
      background-color: rgba(255, 255, 255, 0.4);
      max-width: calc(100% - 62px);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      > .home-top-msg-img {
        width: 38px;
        height: 38px;
        position: absolute;
        top: 5px;
        left: 16px;
      }
    }
    > .home-banner img {
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
        left: 124px;
      }
      &::after {
        background: url("./../../assets/images/line-r.png") no-repeat;
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
}

.freebing-box {
  position: relative;
  z-index: 10;
  margin: 0 30px;
  padding-bottom: 30px;
  background-color: #fff;
  border-radius: 20px;
  // height: 300px;

  > .freebing-title {
    position: absolute;
    top: -20px;
    left: calc(50% - 175px);
    width: 350px;
    height: 60px;
    background: linear-gradient(
      0deg,
      rgba(246, 76, 1, 1),
      rgba(246, 171, 1, 1)
    );
    border-radius: 0px 0px 8px 8px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
    color: #fff;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: -2px;
      left: -21px;
      width: 0;
      height: 0;
      border-color: #ac4d07 transparent;
      border-width: 0px 0px 21px 21px;
      border-style: solid;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: -2px;
      right: -21px;
      width: 0;
      height: 0;
      border-color: #ac4d07 transparent;
      border-width: 0px 21px 21px 0;
      border-style: solid;
    }
  }

  .freebing-more {
    // margin-top: 35px;
    display: block;
    font-size: 24px;
    text-align: center;
    color: #585858;
  }
}
</style>

<template>
  <div>
    <div class="home-container">
      <section class="home-top-container">
        <!-- 用户消息 -->
        <user-picking-up-message :messageList="messageList"></user-picking-up-message>

        <van-swipe :autoplay="3000"
          indicator-color="white"
          class="home-banner">
          <van-swipe-item>
            <img v-lazy="require('@/assets/images/home-banner.png')"
              @click="testLogin">
          </van-swipe-item>
        </van-swipe>

        <div class="freebing-box"
          v-if="spuBargainList.length>0&&spuBargainList.some(item=>item.bargain_info.status==1)">
          <div class="freebing-title">Ongoing Freebies</div>
          <template v-for="item of spuBargainList">
            <!-- 抢购商品 -->
            <freebing-box :key="item.bargain_info.spu_id"
              :spuBargainItem="{...item.bargain_info,...item.spu}"
              v-if="item.bargain_info.status==1" />
          </template>

          <a href="javascript:;"
            class="freebing-more"
            @click="$router.push({path:'/isBargainingList'})">More About ></a>
        </div>

      </section>
      <section class="home-goods"
        v-if="goodsList.length>0">
        <div class="home-goods-title">DAILY DISCOVER</div>
        <ul class="home-goods-list">
          <commodity-item v-for="(item, index) of goodsList"
            :key="index"
            :itemData="item" />
        </ul>
      </section>

    </div>
    <tabBar></tabBar>

  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
const obj = { Swipe, SwipeItem };
const vantCom = {};
for (let k in obj) {
  vantCom[obj[k].name] = obj[k];
}

import tabBar from "@/components/layout/tabBar/tabBar.vue";
import userPickingUpMessage from "@/components/userPickingUpMessage.vue";
import FreebingBox from "@/components/bargain/aCommodityThatIsBeingBargained.vue";
import commodityItem from "@/components/commodity/commodityItem.vue";

import axios from "axios";
import { getHomeTip } from "@/server/other.js";
import { login } from "@/server/user.js";
import { getMybargainSpus, getBargainSpus } from "@/server/goods.js";
export default {
  components: {
    tabBar, // 底部tab
    userPickingUpMessage, // 用户领取消息播放
    FreebingBox, // 一件正在进行砍价商品
    commodityItem, // 商品列表展示的商品X
    ...vantCom // vant组件
  },
  data() {
    return {
      messageList: [], // 顶部滚动消息
      // 正在砍价的商品列表（默认最多展示两条）
      spuBargainList: [],
      goodsList: [],
      goodsListPageDat: {
        page_size: 10,
        page_num: 1
      }
    };
  },
  created() {
    this.initHomeTip();
    this.initMybargainSpus();
    this.initGoodsList({ ...this.goodsListPageDat });
  },
  methods: {
    async initHomeTip() {
      let result = await getHomeTip();
      if (result) {
        this.messageList = result.data.home_tips;
        console.log("this.messageList: ", this.messageList);
      }
    },
    async initMybargainSpus() {
      let result = await getMybargainSpus({ page_size: 2, page_num: 1 });
      console.log("result: ", result);
      if (result && result.data) {
        this.spuBargainList = result.data;
      }
    },
    async initGoodsList({ page_size, page_num, is_all = 0 }) {
      let result = await getBargainSpus({ page_size, page_num, is_all });
      if (result && result.data) {
        this.goodsList = result.data.spu_list;
      }
    },
    async testLogin() {
      let loginInfo = await window.$faceBookApi.loginFB();
      console.warn("loginInfo: ", loginInfo);
      if (loginInfo) {
        let {
          authResponse: { accessToken },
          id,
          name,
          pic_square
        } = loginInfo;

        let result = await login({
          tp_id: id,
          tp_token: accessToken,
          tp_type: 1,
          tp_username: name,
          tp_avatar: pic_square
        });
        //   let result = await login({
        //   tp_id: "104497707249033",
        //   tp_token: "EAAMALQt1F2EBAPIkLNSuTpi4YftnZBUoQPo0OI0Y3Ea9g00LoA2N0w78YV1xYI8KdQ1XIoOEzE6iEFVP702l0mTKzsASYn1jSqCcOeBlNrzgt80PWbNXrKrEpgnmrRdxMcjVXG6Kjd5LQDDYsXmLJWMSRVofQqwIahzoAAmRCWyRwb6UadzUyT368lug39CWd8Oje3gZDZD",
        //   tp_type: 1
        // });
        console.log("result: ", result);
        if (result && result.data) {
          let userInfo = result.data;
          this.$store.commit("setUserInfo", userInfo);
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          axios.defaults.headers.common["user_id"] = userInfo.user_id;
          axios.defaults.headers.common["access_token"] = userInfo.access_token;
          this.$emit("update:dialogVisible", { show: false });
          if (this.jumpUrl) {
            this.$router.push({ path: this.jumpUrl });
          }
          return true;
        }
      }
      return false;
    }
  }
};
</script>

