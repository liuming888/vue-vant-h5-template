<style lang="scss" scoped src="./bargain.scss"></style>

<template>
  <div class="bargain-container">
    <!-- 返回首页 -->
    <div class="turn-home"
      @click="$router.push('/')"></div>
    <!-- 头部信息 -->
    <div class="bargain-header">
      <div class="bargain-info-box">
        <img class="bg"
          src="./../assets/images/bargain-bg-2.png"
          alt="">
        <div class="bargain-content">
          <!-- 砍价商品信息 -->
          <div class="bargain-info">
            <div class="img-box">
              <img v-lazy="spu.spu_pics&&spu.spu_pics[0]||require('./../assets/images/good-large.png')">
            </div>
            <div class="detail">
              <p class="title">{{spu.title}}</p>
              <!-- <count-down :dateDiff="spu.expire_ttl"></count-down> -->
              <div class="price-box">
                <div class="price-box-item">
                  <p class="p-t-3">244d Sent</p>
                  <p class="p-t-1">
                    Price
                    <span>RP</span><span>{{spu.original_price}}</span>
                  </p>
                  <p class="p-t-2">current price</p>
                </div>
                <div class="price-box-item">
                  <p class="p-n-1"><span>Rp</span>{{spu.price}}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 砍价进度 -->
          <div class="bargain-schedule">
            <p class="title"><span class="n-1"><span class="dollar">RP</span>{{bargain_info.bargain_amount||0}}</span>cheaper now, leaving<span class="n-2"><span class="dollar">RP</span>{{bargain_info.bargain_after||spu.price}}</span></p>
            <div class="schedule">
              <div class="active"
                :style="{'width':bargain_info.bargain_rate+'%'}"></div>
              <div class="schedule-item">
                <span class="description">cut <span class="highlight">{{bargain_info.bargain_rate}}%</span></span>
              </div>
              <div class="schedule-item ball ball-center">
                <span class="description">Available for purchase</span>
              </div>
              <div class="schedule-item ball ball-right">
                <span class="description">Take it free</span>
              </div>
            </div>
          </div>
          <count-down :dateDiff="spu.expire_ttl"
            class="spu-count-down"></count-down>
          <div class="ctrl-box">
            <div class="share-btn"
              @click="openSharingFriendsDialog"
              v-if="!isShareEarningEntry">SHARE FRIEDNS FOR FREEBIES</div>
            <div class="share-btn"
              v-else
              @click="goBargainChop({ bargain_id:$route.query.bargainId, spu_id:$route.query.spuId })">POTONG PISAU</div>
            <div class="buy-btn"
              v-if="bargain_info.can_buy&&bargain_info.can_buy==1"
              @click="jumpBuyPage">Rp {{bargain_info.bargain_after}} buy now</div>
            <div class="buy-btn cur"
              v-else>
              <!-- Rp {{bargain_info.left_amount}} buy now -->
              BUY NOW
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
                <img v-lazy="item.avatar||require('./../assets/images/good-large.png')">
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
        v-if="!$route.query.bargainId">
        <!-- 商品详情图 -->
        <p class="page-title">Product Petails</p>
        <img v-lazy="spu&&spu.spu_pics[0]">
      </div>

      <!-- 推荐商品 -->
      <div class="recommend-products"
        v-if="spu_list.length>0">
        <p class="page-title">
          <img v-lazy="require('./../assets/images/start.png')">
          <span>You might like</span>
        </p>
        <div class="recommend-item"
          v-for="item in spu_list"
          :key="item.spu_id">
          <img v-lazy="item.spu_pics&&item.spu_pics[0]||require('./../assets/images/good-large.png')"
            class="products-photo">
          <p class="products-title">{{item.title}}</p>
          <div class="products-ctrl">
            <span class="money">{{item.deliver_count}} Sent</span>
            <a href="javascrip:;"
              class="btn"
              @click="jumpCurBargainPage(item.spu_id)">Get a freebie</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹窗 -->
    <dialog-sharing-friends :dialogVisible.sync="dialogs.sharingFriends"
      :shareInfo="shareInfo"
      v-if="dialogs.sharingFriends.show" />
    <dialog-potong-sendiri :chopInfo="chop_info"
      :dialogVisible.sync="dialogs.potongSendiri"
      v-if="dialogs.potongSendiri.show" />
    <!-- <dialog-share-earning-entry :chopInfo="chop_info"
      :dialogVisible.sync="dialogs.shareEarningEntry"
      v-if="dialogs.shareEarningEntry.show" /> -->
  </div>
</template>

<script>
import { getInfo, getBargainSpus } from "@/server/goods.js";
import { shareBargain, shareInfo } from "@/server/share.js";
import {
  getBargainInfo,
  getHelpBargainList,
  bargainChop
} from "@/server/bargain.js";
export default {
  components: {
    dialogSharingFriends: resolve =>
      require(["@/components/dialogs/dialogSharingFriends.vue"], resolve), // 分享好友弹窗
    countDown: resolve => require(["@/components/countDown.vue"], resolve), // 倒计时
    dialogPotongSendiri: resolve =>
      require(["@/components/dialogs/dialogPotongSendiri.vue"], resolve), // 自砍成功弹窗
    dialogShareEarningEntry: resolve =>
      require(["@/components/dialogs/dialogShareEarningEntry.vue"], resolve) // 分享赚链接首次进入弹窗
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
      chop_info: {},

      shareInfo: {},

      spu: {
        spu_pics: []
      },

      bargain_info: {},
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
  created() {
    this.init();
  },
  mounted() {
    if(document.getElementsByClassName("content-container")[0].scrollTop){  // 0  false
      document.getElementsByClassName("content-container")[0].scroll(0, 0);
    }
    document.title = "Getting Freebies";
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
        if (!bargainId) {
          // 系统自砍
          await this.goBargainChop({
            spu_id: spuId
          });
        }

        this.initBargainInfo();
        this.initHelpBargainList();
      }

      this.initSpuInfo();
      this.initSpuList();
    },
    async initShareInfo(relationId) {
      let result = await shareInfo({ relation_id: relationId });
      if (result && result.data) {
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
    async goBargainChop({ bargain_id, spu_id }) {
      console.log('spu_id: ', spu_id);
      if (!this.$store.state.userInfo.user_id&&process.env.VUE_APP_ENV!=="development") {
        console.log("666")
        this.$store.commit("setLoginJumpUrl", "");
        this.$store.commit("setLoginSelectShow", true);
        return;
      }

      let result = await bargainChop({ bargain_id, spu_id });
      if (result && result.data && result.data.chop_info) {
        const chop_info = result.data.chop_info;
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
        if (this.$route.query.relationId) {
          // 分享赚自己点击按钮自砍成功
          this.isShareEarningEntry = false;
        } else {
          // 系统自砍成功
          this.dialogs.potongSendiri.show = true;
        }
        return Promise.resolve();
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
          this.spu[k] = spu[k];
        }
        // this.refreshTime();
      }
    },
    /**
     * @description: 获取砍价信息
     */
    async initBargainInfo() {
      let result = await getBargainInfo({
        bargain_id: this.$route.query.bargainId
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
      let result = await getHelpBargainList({
        bargain_id: this.$route.query.bargainId,
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
        this.$store.commit("setGoodsList", this.spu_list);
        // } else {
        //   let arr = JSON.parse(JSON.stringify(this.$store.state.goodsList));
        //   this.$store.commit("setGoodsList", arr.push(result.data.spu_list));
        // }
      }
    },
    async openSharingFriendsDialog() {
      if (
        !this.$store.state.userInfo.user_id &&
        process.env.VUE_APP_ENV != "development"
      ) {
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
      }
      this.dialogs.sharingFriends.show = true;
    },
    jumpCurBargainPage(spu_id) {
      if (!this.$store.state.userInfo.user_id) {
        // const { pathname, search } = window.location;
        this.$store.commit("setLoginJumpUrl", "");
        this.$store.commit("setLoginSelectShow", true);
        return;
      }

      this.$router.replace({
        query: {
          spuId: spu_id
        }
      });
      document.getElementsByClassName("content-container")[0].scroll(0, 0);
      this.init();
    },

    jumpBuyPage() {
      // 上线时不能注释
      if (!this.$store.state.userInfo.user_id) {
        // const { pathname, search } = window.location;
        this.$store.commit("setLoginJumpUrl", "");
        // this.$store.commit("setLoginJumpUrl", `/purchase${search}`);
        this.$store.commit("setLoginSelectShow", true);
        return;
      }
      if (this.bargain_info.can_buy != 1) return;

      this.$router.push({ path: "/purchase", query: { ...this.$route.query } });
    },
    /**
     * @description: 时间定时器
     */
    refreshTime() {
      let result = this.$util.expiration(this.spu.expire_ttl);
      if (!result) return;
      this.expirationDat = result;
      const timer = setInterval(() => {
        this.expirationDat = this.$util.expiration(this.spu.expire_ttl);
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
    // if(bargainType=='another'){
    //   this.init();
    // }
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
