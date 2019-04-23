
<style lang="scss">
.freebing-box {
  .freebing-container {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 24px;
      width: 638px;
      height: 1px;
      background: rgba(242, 242, 242, 1);
    }
  }

  .freebing-big-box:nth-last-of-type(1) {
    .freebing-container {
      &::after {
        display: none;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.home-container {
  background-color:#f5f5f5;
  height: 89vh;
  overflow-y: auto;
  padding-bottom: 36px;
  > .home-top-container {
    position: relative;
    min-height: 20vh;
    width: 100vw;

    overflow: hidden;

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
    > .home-banner {
      width: 100%;
      max-height: 324px;
      overflow: hidden;
      margin-bottom: 26px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  > .home-goods {
    min-height: 70vh;

    > .home-goods-title {
      padding: 37px 0;
      padding-bottom: 47px;
      font-size: 28px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 560px;
        height: auto;
      }
    }
    > .home-goods-list {
      padding: 0 22px 36px;
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
  margin-bottom: 10px;
  padding-bottom: 30px;
  margin-top: 42px;
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
    font-weight: 600;
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
      border-color: #f06904 transparent;
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
      border-color: #f06904 transparent;
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

.go-top-btn {
  position: fixed;
  bottom: 292px;
  right: 12px;
  width: 96px;
  height: 96px;
  z-index: 99;
  border-radius: 50%;
}

.privacy-agreement-box {
  margin-top: 20px;
  text-align: center;
  color: #fff;

  p {
    margin-bottom: 10px;
    font-size: 26px;
  }

  ul {
    width: 90%;
    margin: 0 auto;
    display: flex;
    font-size: 20px;

    li {
      flex: 3;
      border-left: 1px solid #fff;
      line-height: 30px;

      &:nth-of-type(1) {
        border-left: 0;
      }
    }
  }
}
</style>

<template>
  <div>
    <img v-lazy="$t('home.goTopBtn')"
      class="go-top-btn"
      v-if="showGoTopBtn"
      @click.stop="goPageTop" />

    <div class="home-container"
      @scroll="scrollEvent"
      ref="homeContainer">
      <section class="home-top-container">
        <!-- 用户消息 -->
        <user-picking-up-message :messageList="messageList"
          v-if="messageList.length>0"></user-picking-up-message>

        <van-swipe :autoplay="bannerAutoPlayTime"
          :show-indicators="false"
          indicator-color="#D30C05"
          class="home-banner"
          @click.native="$router.push('/my/Tutorial')">
          <template v-if="bannerList.length>0">
            <template v-for="(item,index) of bannerList">
              <van-swipe-item @click="handleBannerClick"
                :key="item.id"
                v-if="!isLoad&&index==0||isLoad">
                <img v-lazy="item.url">
              </van-swipe-item>
            </template>
          </template>
        </van-swipe>

        <div class="freebing-box"
          v-if="homeBargainList.length>0">
          <div class="freebing-title">{{$t('home.ongoingFreebies')}}</div>
          <template v-for="(item,index) of homeBargainList">
            <!-- 抢购商品 -->
            <freebing-box :key="index"
              :spuBargainItem="{...item.bargain_info,...item.spu}" />
          </template>

          <a href="javascript:;"
            class="freebing-more"
            @click="handleMoreAbout">{{$t('home.moreAbout')}} ></a>
        </div>

      </section>
      <section class="home-goods">
        <template v-if="goodsList.length>0">
          <div class="home-goods-title"
            v-if="goodsList.length>0&&homeBargainList.length>0">
            <img v-lazy="$t('home.gengduotop')">
          </div>
          <ul class="home-goods-list">
            <li is="commodity-item"
              v-for="(item, index) of goodsList"
              @cashBackGa=cashBackGa
              @jumpBargainGa=jumpBargainGa
              :key="index"
              :itemData="item">
            </li>
          </ul>
        </template>
      </section>

      <div class="privacy-agreement-box">
        <p>{{$t('home.copyright_2019Istarbuy')}}</p>

        <ul>
          <li onclick="window.open('Privacy Policy.html');">{{$t('home.privacyPolicy')}}</li>
          <li onclick="window.open('Terms & Conditions.html');">{{$t('home.tCs')}}</li>
          <li onclick="window.open('About us.html');">{{$t('home.aboutUs')}}</li>
          <li onclick="window.open('Contact us.html');">{{$t('home.contactUs')}}</li>
        </ul>
      </div>
    </div>
    <tabBar></tabBar>

  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
// const obj = { Swipe, SwipeItem };
// const vantCom = {};
// for (let k in obj) {
//   vantCom[obj[k].name] = obj[k];
// }

import tabBar from "@/components/layout/tabBar/tabBar.vue";

import { getHomeTip, getBanners } from "@/server/other.js";
import { login } from "@/server/user.js";
import {
  getMybargainSpus,
  getBargainSpus,
  getMyBargainOrderSpus
} from "@/server/goods.js";
export default {
  components: {
    tabBar, // 底部tab
    userPickingUpMessage: resolve =>
      require(["@/components/userPickingUpMessage.vue"], resolve), // 用户领取消息播放
    FreebingBox: resolve =>
      require([
        "@/components/bargain/aCommodityThatIsBeingBargained.vue"
      ], resolve), // 一件正在进行砍价商品
    commodityItem: resolve =>
      require(["@/components/commodity/commodityItem.vue"], resolve), // 商品列表展示的商品X
    // ...vantCom, // vant组件
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      messageList: [], // 顶部滚动消息
      bannerAutoPlayTime: 1000000, // banner自动播放时间
      bannerList: [], // banner列表
      bargainOrderSpusList: [], // 获取处理中砍价订单列表
      spuBargainList: [], // 正在砍价的商品列表（默认最多展示两条）
      goodsList: [],
      goodsListPageDat: {
        page_size: 10,
        page_num: 1
      },
      showGoTopBtn: false, // 是否显示回到顶部按钮
      isLoad: false // 页面是否已经加载的差不多了
    };
  },
  computed: {
    homeBargainList() {
      const { bargainOrderSpusList, spuBargainList } = this;
      if (bargainOrderSpusList.length >= 2) {
        return bargainOrderSpusList.slice(0, 2);
      } else if (
        bargainOrderSpusList.length > 0 &&
        bargainOrderSpusList.length < 2
      ) {
        let arr = [bargainOrderSpusList[0]];
        if (spuBargainList.length > 0) {
          arr.push(spuBargainList[0]);
        }
        return arr;
      } else if (spuBargainList.length > 0) {
        return spuBargainList;
      } else {
        return [];
      }
    }
  },
  created() {
    this.init();
  },
  mounted() {
    setTimeout(() => {
      this.bannerAutoPlayTime = 8000; // 首屏渲染后才设置为8秒自动轮播
      this.isLoad = true;
    }, 3000);
  },
  methods: {
    scrollEvent(event) {
      if (event.target.scrollTop) {
        this.showGoTopBtn = true;
      } else {
        this.showGoTopBtn = false;
      }
    },
    goPageTop() {
      this.$refs.homeContainer.scroll(0, 0);
    },
    init() {
      this.initBanners();
      this.initHomeTip();
      if (
        localStorage.getItem(
          "userInfo"
        ) /* ||
        process.env.VUE_APP_ENV == "development" */
      ) {
        this.initBargainOrderSpusList();
        this.initMybargainSpus();
      }
      this.initGoodsList({ ...this.goodsListPageDat });
    },
    async initBargainOrderSpusList() {
      let result = await getMyBargainOrderSpus({ page_size: 2, page_num: 1 });
      if (result && result.data) {
        this.bargainOrderSpusList = result.data.filter(item => {
          // 正式不能注释
          if (
            item.bargain_info.order_expire_time > 0 &&
            item.bargain_info.order_status == 1
          ) {
            return true;
          } else {
            return false;
          }
        });
      }
    },
    async initBanners() {
      let result = await getBanners();
      if (result && result.data) {
        this.bannerList = result.data;
      }
    },
    async initHomeTip() {
      let result = await getHomeTip();
      if (result && result.data) {
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
    /**
     * @description: 获取砍价商品列表（目前后端没做分页，前端暂时也不做）
     */
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
    // banner点击
    handleBannerClick() {
      // console.log(1);
      this.$gaSend({
        eventCategory: "banner",
        eventAction: "点击"
      });
    },
    // 更多砍价点击
    handleMoreAbout() {
      this.$router.push({ path: "/isBargainingList" });
      this.$gaSend({
        eventCategory: "首页_更多砍价",
        eventAction: "点击"
      });
    },
    //ga统计商品列表点击
    cashBackGa(item) {
      //统计
      this.$gaSend({
        eventCategory: "首页_分享赚",
        eventAction: "点击",
        eventLabel: item.title.substr(0, 10)
      });
    },
    jumpBargainGa(item) {
      //统计
      this.$gaSend({
        eventCategory: "首页_免费拿",
        eventAction: "点击",
        eventLabel: item.title.substr(0, 10)
      });
    }
  },
  watch: {
    goodsList() {
      if (this.goodsList.length > 0) {
        this.goodsList.forEach(item => {
          this.$gaSend({
            eventCategory: "首页_商品",
            eventAction: "商品展示",
            eventLabel: item.title.substr(0, 10)
          });
        });
      }
    }
  }
};
</script>
