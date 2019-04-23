<style lang="scss" scoped src="./bargain.scss"></style>

<template>
  <div class="bargain-container"
    ref="bargainContainer"
    id="bargainContainer">
    <!-- 返回首页 -->
    <turn-home />

    <!-- 头部信息 -->
    <div class="bargain-header">
      <div class="bargain-info-box">
        <img class="bg"
          v-lazy="require('./../assets/images/bargain-bg-2.png')">
        <div class="bargain-content">
          <!-- 砍价商品信息 -->
          <div class="bargain-info">
            <div class="img-box">
              <img v-lazy="spu.spu_pics&&spu.spu_pics[0]||''">
            </div>
            <div class="detail">
              <p class="title">{{spu.title}}</p>
              <div class="price-box">
                <div class="price-box-item">
                  <p class="p-t-3">{{spu.deliver_count || 1}} {{$t('bargain.sent')}}</p>
                  <p class="p-t-1">
                    {{$t('bargain.price')}}
                    <span>RP</span><span>{{spu.original_price}}</span>
                  </p>
                  <p class="p-t-2">{{$t('bargain.currentPrice')}}</p>
                </div>
                <div class="price-box-item">
                  <p class="p-n-1"><span>Rp</span>{{spu.price}}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 砍价进度 -->
          <div class="bargain-schedule">
            <p class="title"><span class="n-1"><span class="dollar">RP</span>{{bargain_info.bargain_amount||shareInfo.pre_bargain_amount||0}}</span>&nbsp; {{$t('bargain.cheaperNowLeaving')}} &nbsp;<span class="n-2"><span class="dollar">RP</span>{{bargain_info.bargain_after||spu.price}}</span></p>
            <div class="schedule">
              <div class="active"
                :style="{'width':curRate+'%'}"></div>
              <div class="schedule-item">
                <span class="description"><span class="highlight">{{curRate}}%</span> {{$t('bargain.off')}}</span>
              </div>
              <div class="schedule-item ball ball-center">
                <span class="description">{{$t('bargain.availableForPurchase')}}</span>
              </div>
              <div class="schedule-item ball ball-right">
                <span class="description">{{$t('bargain.takeItFree')}}{{bargain_info.must_buy_price||0}}</span>
              </div>
            </div>
          </div>
          <count-down :dateDiff="bargain_info.expire_ttl||spu.ttl"
            class="spu-count-down"  :timeType="timeType"></count-down>
          <div class="ctrl-box">
            <div class="share-btn"
              @click="openSharingFriendsDialog"
              v-if="!isShareEarningEntry">{{$t('bargain.shareFriendsForFreebies')}}</div>
            <div class="share-btn"
              v-else
              @click="goChopShare">{{$t('bargain.cutAKnife')}}</div>
            <div class="buy-btn"
              v-if="bargain_info.can_buy&&bargain_info.can_buy==1"
              @click="jumpBuyPage">Rp {{bargain_info.bargain_after}} {{$t('bargain.buyNow')}}</div>
            <div class="buy-btn cur"
              v-else>
              <!-- Rp {{bargain_info.left_amount}} buy now -->
              {{$t('bargain.BuyNow')}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bargain-content">

      <!-- 帮砍团队 -->
      <div class="team-box"
        v-if="$route.query.bargainId&&help_bargain_list.length>0">
        <p class="page-title">Bargaining team</p>
        <ul class="team-list">
          <li class="team-list-item"
            v-for="(item, index) in help_bargain_list"
            :key="index">
            <div class="column">
              <div :class="`team-img huangguan${index + 1}`">
                <img v-lazy="item.avatar||''">
              </div>
              <div class="team-info">
                <p class="team-name">{{item.username}}</p>
                <p class="team-date">{{item.bargain_time}}</p>
              </div>
            </div>
            <div class="column">
              <p class="dollar">Rp<span>{{item.bargain_amount}}</span></p>
            </div>
          </li>
        </ul>
      </div>
      <div class="goods-detail"
        v-if="!$route.query.bargainId&&spu.desp_pics&&spu.desp_pics.length>0">
        <!-- 商品详情图 -->
        <p class="page-title">Product details</p>
        <!-- <img v-lazy="spu&&spu.spu_pics[0]"> -->

        <!-- <van-swipe :autoplay="spuImgPlayTime"
          :show-indicators="false"
          indicator-color="#D30C05"
          class="product-item">
          <template>
            <template v-for="(item,index) of spu.spu_pics">
              <van-swipe-item :key="index"
                v-if="!isLoad&&index==0||isLoad">
                <img v-lazy="item">
              </van-swipe-item>
            </template>
          </template>
        </van-swipe> -->

        <ul>
          <li v-for="(item,index) of spu.desp_pics" :key="index">
            <img v-lazy="item">
          </li>
        </ul>
      </div>

      <!-- 推荐商品 -->
      <div class="recommend-products"
        v-if="spu_list.length>0">
        <p class="page-title">
          <img v-lazy="$t('bargain.xingzhuang')">
        </p>
        <div class="recommend-item"
          v-for="item in spu_list"
          :key="item.spu_id">
          <img v-lazy="item.spu_pics&&item.spu_pics[0]||''"
            class="products-photo"
            @click="jumpCurBargainPage(item)">
          <p class="products-title">{{item.title}}</p>
          <div class="money">{{item.deliver_count}} {{$t('bargain.sent')}}</div>
          <div class="btn"
            @click="jumpCurBargainPage(item)">{{$t('bargain.getAFreebie')}}</div>
        </div>
      </div>
    </div>

    <!-- 弹窗 -->
    <dialog-sharing-friends :itemData="spu"
      :dialogVisible.sync="dialogs.sharingFriends"
      :shareInfo="shareInfo"
      v-if="dialogs.sharingFriends.show" />
    <dialog-potong-sendiri :chopInfo="chop_info"
      :dialogVisible.sync="dialogs.potongSendiri"
      v-if="dialogs.potongSendiri.show" />
    <dialog-share-earning-entry :preAmount="shareInfo.pre_bargain_amount"
      :dialogVisible.sync="dialogs.shareEarningEntry"
      v-if="dialogs.shareEarningEntry.show" />
  </div>
</template>

<script>
import { Dialog, Swipe, SwipeItem } from "vant";
import { getInfo, getBargainSpus } from "@/server/goods.js";
import { shareBargain, shareInfo } from "@/server/share.js";
import {
  getBargainInfo,
  getHelpBargainList,
  bargainChop,
  chopShare
} from "@/server/bargain.js";
export default {
  components: {
    dialogSharingFriends: resolve =>
      require(["@/components/dialogs/dialogSharingFriends.vue"], resolve), // 分享好友弹窗
    countDown: resolve => require(["@/components/countDown.vue"], resolve), // 倒计时
    dialogPotongSendiri: resolve =>
      require(["@/components/dialogs/dialogPotongSendiri.vue"], resolve), // 自砍成功弹窗
    dialogShareEarningEntry: resolve =>
      require(["@/components/dialogs/dialogShareEarningEntry.vue"], resolve), // 分享赚链接首次进入弹窗
    turnHome: resolve => require(["@/components/turnHome.vue"], resolve), // 返回首页按钮

    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      dialogs: {
        sharingFriends: {
          show: false
        },
        potongSendiri: {
          show: false
        },
        shareEarningEntry: {
          show: false
        }
      },

      spuImgPlayTime: 1000000, // banner自动播放时间
      isLoad: false, // 页面是否已经加载的差不多了

      chop_info: {},

      shareInfo: {},

      spu: {
        spu_pics: []
      },

      bargain_info: {
        // bargain_rate: 5 // 给个默认值
      },
      bargain_user_info: {},

      expirationDat: {
        h: "24",
        p: "00",
        m: "00"
      },

      help_bargain_list: [],
      helpBargainPageDat: {
        page_size: 10,
        page_num: 1
      },

      spu_list: [],

      isShareEarningEntry: false // 是否是分享赚链接进入的
    };
  },
  computed: {
    /**
     * @description:  当前砍价比例
     */
    curRate() {
      return (
        this.bargain_info.bargain_rate ||
        parseInt((this.shareInfo.pre_bargain_amount / this.spu.price) * 100) ||
        0
      );
    },
    isLogin() {
      return this.$store.state.userInfo.user_id;
    },
    timeType(){
      if(this.bargain_info&&this.bargain_info.can_buy==1){
        return 'buy';
      }else{
        return 'endIn';
      }
    }
  },
  created() {
    this.init();
  },
  mounted() {
    if (this.$refs.bargainContainer.scrollTo) {
      this.$refs.bargainContainer.scroll(0, 0);
    }

    if (document.getElementById("contentContainer").scrollTop) {
      document.getElementById("contentContainer").scroll(0, 0);
    }

    document.title = this.$t("bargain.gettingFreebies");
    setTimeout(() => {
      this.bannerAutoPlayTime = 8000; // 首屏渲染后才设置为8秒自动轮播
      this.isLoad = true;
    }, 1000);
  },
  methods: {
    async init() {
      const {
        relationId,
        showShareEarningEntry,
        bargainId,
        spuId
      } = this.$route.query;
      // 分享链接点击进入的
      if (relationId) {
        this.isShareEarningEntry = true;
        if (showShareEarningEntry != "no") {
          // 分享赚链接进入

          this.dialogs.shareEarningEntry.show = true;
        } else {
          // 分享赚进入后登陆刷新进入时  不显示dialogShareEarningEntry
          this.dialogs.shareEarningEntry.show = false;
        }

        await this.initShareInfo(relationId);
      } else {
        if (!bargainId && this.isLogin) {
          // 已登录用户系统自砍（自砍成功 和  之前已经砍过了，返回之前的砍价bargain_id等信息）
          await this.goBargainChop({
            spu_id: spuId
          });
        }

        if (this.isLogin) {
          this.initBargainInfo();
          this.initHelpBargainList();
        }
      }

      this.initSpuInfo(); // 必须有spu_id
      this.initSpuList();
    },
    async initShareInfo(relationId) {
      let result = await shareInfo({ relation_id: relationId });
      if (result && result.data) {
        this.shareInfo = result.data;
        const {
          bargain_id: bargainId,
          spu_id: spuId,
          type,
          invite_user_id: inviteUserId
        } = result.data;

        this.$router.replace({
          query: {
            ...this.$route.query,
            bargainId,
            spuId,
            type,
            inviteUserId
          }
        });
      }
    },
    /**
     * @description: 获取商品信息
     */
    async initSpuInfo() {
      let result = await getInfo({ spu_id: this.$route.query.spuId });
      if (result && result.data && result.data.spu) {
        let spu = result.data.spu;
        for (let k in spu) {
          this.$set(this.spu, k, spu[k]);
        }

        // 统计
        this.$gaSend({
          eventCategory: "砍价详情页",
          eventAction: "页面展示",
          eventLabel: this.spu.title.substr(0, 10)
        });
        // this.refreshTime();
      }
    },
    /**
     * @description: 获取砍价信息
     */
    async initBargainInfo() {
      const { bargainId } = this.$route.query;
      if (!bargainId) return;
      let result = await getBargainInfo({
        bargain_id: bargainId
      });
      if (result && result.data) {
        this.bargain_info = result.data.bargain_info || result.data;
        this.bargain_user_info = result.data.bargain_user_info;
        console.log("this.bargain_info: ", this.bargain_info);
      }
    },
    /**
     * @description: 帮砍列表
     */
    async initHelpBargainList() {
      const { bargainId } = this.$route.query;
      if (!bargainId) return;
      let result = await getHelpBargainList({
        bargain_id: bargainId,
        ...this.helpBargainPageDat
      });
      if (result && result.data) {
        this.help_bargain_list = result.data;
      }
    },
    /**
     * @description: 更多商品列表（目前后端没做分页，前端暂时也不做）
     */
    async initSpuList() {
      // 看看vuex里有木有缓存6条没砍价的
      let stateGoodsList = this.$store.state.goodsList.filter(
        item => !item.isBargain
      );
      if (stateGoodsList.length > 6) {
        this.spu_list = stateGoodsList;
        return;
      }

      let result = await getBargainSpus({
        page_size: 16,
        page_num: 1,
        is_all: 0
      });
      if (result && result.data) {
        this.spu_list = result.data.spu_list;

        // if (page_num == 1) {
        // this.$store.commit("setGoodsList", this.spu_list);  // 注释掉不缓存，防止没登陆的用户到首页展示有问题
        // } else {
        //   let arr = JSON.parse(JSON.stringify(this.$store.state.goodsList));
        //   this.$store.commit("setGoodsList", arr.push(result.data.spu_list));
        // }
      }
    },
    async goBargainChop({ bargain_id, spu_id }) {
      console.log("spu_id: ", spu_id);
      if (!this.isLogin && process.env.VUE_APP_ENV !== "development") {
        console.log("666");
        this.$store.commit("setLoginJumpUrl", "");
        this.$store.commit("setLoginSelectShow", true);
        return;
      }

      let result = await bargainChop({ bargain_id, spu_id });

      fbq("track", "StartTrial", {
        value: this.spu.title,
        currency: "USD",
        predicted_ltv: spu_id
      });

      if (result && result.data && result.data.chop_info) {
        this.chopSucess(result.data.chop_info, spu_id);
        // let arr = JSON.parse(JSON.stringify(this.$store.state.goodsList));
        // arr.forEach(item => {
        //   if (item.spu_id == spu_id) {
        //     item.isBargain = true;
        //   }
        // });
        // this.$store.commit("setGoodsList", arr);

        if (result.code == 0) {
          // 砍价成功
          this.dialogs.potongSendiri.show = true;
          gtag("event", "conversion", {
            send_to: "AW-768708825/ELBKCLuq85gBENmhxu4C"
          });
          console.log("砍价成功！ spu_id:", spu_id);
        } else if (result.code == 1000) {
          // 该商品之前已经砍过了
          console.warn("该商品已经砍价了！ spu_id:", spu_id);
        }
        return Promise.resolve();
      } else if (result.code == -1) {
        // 该商品已经过期或者别的

        // 强制返回首页去
        Dialog({
          message: this.$t("bargain.pleaseReturnToTheHomepage"),
          confirmButtonText: "ok"
        }).then(() => {
          this.$router.replace("/");
        });

        console.warn("该商品已经过期或者别的！ spu_id:", spu_id);
      }
    },
    /**
     * @description:  砍价接口调用成功后的系列处理
     */
    chopSucess(chop_info, spu_id) {
      this.chop_info = chop_info;
      console.log("chop_info: ", chop_info);
      this.$router.replace({
        query: {
          ...this.$route.query,
          bargainId: chop_info.bargain_id
        }
      });

      let arr = JSON.parse(JSON.stringify(this.$store.state.goodsList));
      arr.forEach(item => {
        if (item.spu_id == spu_id) {
          item.isBargain = true;
        }
      });
      this.$store.commit("setGoodsList", arr);
    },
    /**
     * @description: 分享赚自砍
     */
    async goChopShare() {
      if (!this.isLogin && process.env.VUE_APP_ENV !== "development") {
        const { pathname, search } = window.location;
        this.$store.commit(
          "setLoginJumpUrl",
          pathname + search + "&showShareEarningEntry=no"
        );
        this.$store.commit("setLoginSelectShow", true);
        return;
      }
      let result = await chopShare({
        relation_id: this.$route.query.relationId
      });

      fbq("track", "StartTrial", {
        value: this.spu.title,
        currency: "USD",
        predicted_ltv: this.$route.query.spuId
      });

      if (result && result.data) {
        this.chop_info = result.data.chop_info;
        this.$router.replace({
          query: {
            ...this.$route.query,
            bargainId: this.chop_info.bargain_id
          }
        });
        this.dialogs.potongSendiri.show = true;
        this.initBargainInfo();
        this.initHelpBargainList();
        // 分享赚自己点击按钮自砍
        this.isShareEarningEntry = false;

        gtag("event", "conversion", {
          send_to: "AW-768708825/ELBKCLuq85gBENmhxu4C"
        });
      }
    },
    async openSharingFriendsDialog() {
      // 统计
      this.$gaSend({
        eventCategory: "砍价详情页_分享给好友",
        eventAction: "点击",
        eventLabel: this.spu.title.substr(0, 10)
      });
      if (!this.isLogin /*  && process.env.VUE_APP_ENV != "development" */) {
        const { pathname, search } = window.location;
        this.$store.commit("setLoginJumpUrl", ""); // 不跳，防止有登陆后有问题
        // this.$store.commit(
        //   "setLoginJumpUrl",
        //   pathname + search + "&loginGoShare=ok"
        // );
        this.$store.commit("setLoginSelectShow", true);
        return;
      }

      let result = await shareBargain({
        bargain_id: this.$route.query.bargainId
      });
      if (result && result.data) {
        this.shareInfo = result.data;
        this.dialogs.sharingFriends.show = true;
      } else {
        this.$toast(this.$t("bargain.failedToGetSharingInformation"));
      }
    },
    jumpCurBargainPage(item) {
      // if (!this.isLogin) {
      //   // const { pathname, search } = window.location;
      //   this.$store.commit("setLoginJumpUrl", "");
      //   this.$store.commit("setLoginSelectShow", true);
      //   return;
      // }

      // 统计
      this.$gaSend({
        eventCategory: "砍价详情页_底部商品列表",
        eventAction: "点击",
        eventLabel: item.title.substr(0, 10)
      });

      this.$router.replace({
        query: {
          spuId: item.spu_id
        }
      });
      document.getElementsByClassName("content-container")[0].scroll(0, 0);
      this.init();
    },

    jumpBuyPage() {
      // 上线时不能注释
      if (!this.isLogin) {
        // const { pathname, search } = window.location;
        this.$store.commit("setLoginJumpUrl", "");
        // this.$store.commit("setLoginJumpUrl", `/purchase${search}`);
        this.$store.commit("setLoginSelectShow", true);
        return;
      }
      if (this.bargain_info.can_buy != 1) return;

      // 统计
      this.$gaSend({
        eventCategory: "砍价详情页_去购买",
        eventAction: "点击",
        eventLabel: this.spu.title.substr(0, 10)
      });

      this.$router.push({ path: "/purchase", query: { ...this.$route.query } });
    },
    /**
     * @description: 时间定时器
     */
    refreshTime() {
      let result = this.$util.expiration(
        this.bargain_info.expire_ttl || this.spu.ttl
      );
      if (!result) return;
      this.expirationDat = result;
      const timer = setInterval(() => {
        this.expirationDat = this.$util.expiration(
          this.bargain_info.expire_ttl || this.spu.ttl
        );
      }, 1000);
      this.$once("hook:beforeDestroy", () => {
        clearInterval(timer);
      });
    }
  },
  beforeRouteUpdate(to, from, next) {
    const { loginGoShare, bargainType } = to.query;
    if (loginGoShare == "ok") {
      this.$store.commit("setLoginSelectShow", false); // 测试（上线后可去掉）
      this.openSharingFriendsDialog();
    }
    next();
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      if (from.path == "/purchase") {
        vm.$util.paymentCancellationPrompt();
      }
    });
  }
};
</script>
