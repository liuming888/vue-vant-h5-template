<style lang="scss" scoped>
.home-container {
  background-color: #d30c05;
  > .home-top-container {
    position: relative;
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
</style>

<template>
  <div class="home-container">
    <section class="home-top-container">
      <!-- 用户消息 -->
      <user-picking-up-message :messageList="messageList"></user-picking-up-message>
      <div class="home-banner">
        <img v-lazy="require('@/assets/images/home-banner.png')"
          @click="testLogin">
      </div>

      <template v-for="item of spuBargainList">
        <!-- 抢购商品 -->
        <freebing-box :key="item.bargain_info.spu_id"
          :spuBargainItem="item.bargain_info" v-if="item.bargain_info.status==2"/>
      </template>

    </section>
    <section class="home-goods">
      <div class="home-goods-title">DAILY DISCOVER</div>
      <ul class="home-goods-list">
        <commodity-item v-for="(item, index) of goodsList"
          :key="index"
          :itemData="item" />
      </ul>
    </section>
  </div>
</template>

<script>
// import { Swipe, SwipeItem } from "vant";
// const obj = { Swipe, SwipeItem };
// const vantCom = {};
// for (let k in obj) {
//   vantCom[obj[k].name] = obj[k];
// }

import userPickingUpMessage from "@/components/userPickingUpMessage.vue";
import FreebingBox from "@/components/bargain/aCommodityThatIsBeingBargained.vue";
import commodityItem from "@/components/commodity/commodityItem.vue";

import axios from "axios";
import { getHomeTip } from "@/server/other.js";
import { login } from "@/server/user.js";
import { getMybargainSpus, getBargainSpus } from "@/server/goods.js";
export default {
  components: {
    userPickingUpMessage, // 用户领取消息播放
    FreebingBox, // 一件正在进行砍价商品
    commodityItem // 商品列表展示的商品X
    // ...vantCom // vant组件
  },
  data() {
    return {
      messageList:[],  // 顶部滚动消息
      // 正在砍价的商品列表（默认最多展示两条）
      spuBargainList: [],
      goodsList: [
        //类型：Array  必有字段  备注：砍价商品列表
        {
          //类型：Object  必有字段  备注：无
          spu_id: 1, //类型：Number  必有字段  备注：商品id
          title: "mock", //类型：String  必有字段  备注：商品标题
          price: 1, //类型：Number  必有字段  备注：商品售价
          deliver_count: 1, //类型：Number  必有字段  备注：已送出数量
          spu_pics: [
            "http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg",
            "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"
          ]
        }
      ],
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
    async initHomeTip(){
      let result=await getHomeTip();
      if(result){
        this.messageList=result.data.home_tips;
        console.log('this.messageList: ', this.messageList);
      }
    },
    async initMybargainSpus() {
      let result = await getMybargainSpus({ page_size: 2, page_num: 1 });
      console.log("result: ", result);
      if (result) {
        this.spuBargainList = result.data;
      }
    },
    async initGoodsList({ page_size, page_num, is_all }) {
      let result = await getBargainSpus({ page_size, page_num, is_all });
      if (result) {
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
          tp_type: 1
        });
        //   let result = await login({
        //   tp_id: "104497707249033",
        //   tp_token: "EAAMALQt1F2EBAPIkLNSuTpi4YftnZBUoQPo0OI0Y3Ea9g00LoA2N0w78YV1xYI8KdQ1XIoOEzE6iEFVP702l0mTKzsASYn1jSqCcOeBlNrzgt80PWbNXrKrEpgnmrRdxMcjVXG6Kjd5LQDDYsXmLJWMSRVofQqwIahzoAAmRCWyRwb6UadzUyT368lug39CWd8Oje3gZDZD",
        //   tp_type: 1
        // });
        console.log("result: ", result);
        if (result) {
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

