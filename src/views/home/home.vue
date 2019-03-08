<template>
  <div class="home-container">
    <!-- home页面 -->
    <!-- <a href="javascript:whatsApp();" class="xq-whatsapp" data-action="share/whatsapp/share">whatsapp</a> -->

    <!-- <a href="fb-messenger://share/?link=https://liuming.mynatapp.cc/&app_id=844618395883361"
      style="font-size:20px;">Send In Messenger(url带link分享链接)</a>
    <br>

    <a href="javascript:;"
<<<<<<< HEAD
      style="font-size:20px;" @click="whatsApp">whatsapp(url带test分享文字)</a> -->
    <section class="home-top-container">
      <!-- <div class="home-top-msg">
        <img class="home-top-msg-img" src="@/assets/images/tabBar-me-active.png" alt="">
        <span>Michelle got a freebie just now</span>
      </div> -->
      <!-- 用户消息 -->
      <user-picking-up-message></user-picking-up-message>
      <div class="home-banner">
        <img src="@/assets/images/home-banner.png" alt="">
      </div>
      <!-- 抢购商品 -->
      <freebing-box></freebing-box>
    </section>
    <section class="home-goods">
      <div class="home-goods-title">DAILY DISCOVER</div>
      <ul class="home-goods-list">
        <commodity-item v-for="(item, index) in goodsList" :key="index" :itemData="item" />
        <!-- <li class="home-goods-item" v-for="(item, index) in goodsList" :key="index">
          <div class="goods-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="goods-detail">
            <a :href="item.path" class="goods-title">{{item.title}}</a>
            <p class="goods-description">{{item.description}}</p>
            <p class="goods-description">2432 Sent</p>
            <div class="goods-price">
              <span class="discount">$ {{item.discount}}</span>
              <span class="real">${{item.realAmount}}</span>
            </div>
          </div>
          <div class="goods-control">
            <a href="javascrip:;" class="button-l">
              Cash Back
            </a>
            <a href="javascrip:;" class="button-r">Get Freebie</a>
          </div>
        </li> -->
      </ul>
    </section>
=======
      style="font-size:20px;" @click="whatsApp">whatsapp(url带test分享文字)</a>

    <br>
    <a href="line://msg/text/11111111111111111111111"  style="font-size:20px;">LINE文字</a>

    <br>
    <a href="https://social-plugins.line.me/lineit/share?url=https://liuming.mynatapp.cc"  style="font-size:20px;">LINE图文</a>
    <br>
    <div class="line-it-button" data-lang="zh_Hant" data-type="share-c" data-ver="2" data-url="https://liuming.mynatapp.cc" style ="display: none;"></div> 
>>>>>>> efe637e374edc106ee79fa654f4ab6e808073f6f
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
export default {
  components: {
    userPickingUpMessage, // 用户领取消息播放
    FreebingBox, // 一件正在进行砍价商品
    commodityItem // 商品列表展示的商品X
    // ...vantCom // vant组件
  },
  data() {
    return {
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
    // 测试登录FB
    async testA() {
      let loginInfo = await window.$faceBookApi.loginFB();
      console.warn("loginInfo: ", loginInfo);
      if (loginInfo) {
        let {
          authResponse: { accessToken },
          id,
          name,
          pic_square
        } = loginInfo;
        this.$store.commit("setUserInfo", {
          accessToken,
          id,
          name,
          pic_square
        });
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ accessToken, id, name, pic_square })
        );
        console.log("1111111111111", this.$store.state.userInfo);
        console.log("222222222222", localStorage.getItem("userInfo"));
      }
    },
    // 分享到whatsApp
    whatsApp(contentId) {
      var u = document.getElementsByClassName("share_url")[0].content;
      console.log('u: ', u);
      var t = document.getElementsByClassName("share_title")[0].content;
      console.log('t: ', t);
      location =
        "whatsapp://send?text=" +
        encodeURIComponent(t) +
        encodeURIComponent("\n\n" + u) +
        "&via=lopscoop";
    },

  }
};
</script>
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
}
</style>
