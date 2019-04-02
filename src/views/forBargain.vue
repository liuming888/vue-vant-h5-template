<style lang="scss" scoped src="./forBargain.scss"></style>

<style lang="scss">
.bargain-container {
  .spu-box {
    .count-down {
      margin: 0 !important;
    }
  }
}
</style>


<template>
  <div class="bargain-container">

    <div class="banner-box">
      <!-- 用户消息 -->
      <user-picking-up-message :messageList="messageList"
        v-if="messageList.length>0"></user-picking-up-message>

      <!-- 头部返回首页 -->
      <img v-lazy="require('./../assets/images/HOME@2x.png')"
        class="turn-home"
        @click="$router.push('/')">

      <img v-lazy="require('@/assets/images/forBargain-banner.png')"
        class="banner-img">
    </div>

    <div class="main-content">
      <div class="spu-box">
        <img v-lazy="spu.spu_pics&&spu.spu_pics[0]||''"
          alt=""
          class="spu-img">
        <div class="spu-info">

          <p class="spu-tit">{{spu.title}}</p>

          <div class="time-and-sum">
            <count-down :dateDiff="spu.expire_ttl"
              class="spu-count-down"
              v-if="spu.expire_ttl"></count-down>

            <span class="spu-num">{{spu.deliver_count || 1}} Sent</span>
          </div>

          <div class="rp-box">
            <div>
              <span class="rp">Rp</span>{{spu.price}}
            </div>

            <div class="original-price"
              v-if="true">
              <span class="rp">Rp</span>{{spu.original_price}}
            </div>
          </div>
        </div>
      </div>

      <!-- 砍价进度 -->
      <div class="bargain-schedule">
        <p v-if="isBargain"
          class="title"><span class="n-1"><span class="dollar">Rp</span>{{bargain_info.bargain_after||spu.price||0}}</span>&nbsp; cheaper now, leaving &nbsp;<span class="n-2"><span class="dollar">Rp</span>{{bargain_info.bargain_amount||0}}</span></p>
        <p v-else
          class="title">
          He had cut down&nbsp;<span class="n-1"><span class="dollar">Rp</span>{{bargain_info.bargain_after||spu.price||0}}</span>
          , you <br> contributed &nbsp;<span class="n-2"><span class="dollar">Rp</span>{{bargain_info.bargain_amount||0}}</span>
        </p>

        <div class="schedule">
          <div class="active"
            :style="{'width':bargain_info.bargain_rate+'%'}"></div>

          <div class="highlight">{{bargain_info.bargain_rate||0}}% &nbsp;off</div>

          <div class="schedule-item ball ball-right">
          </div>
        </div>

      </div>

      <div class="main-btn"
        v-if="isBargain"
        @click="goBargainChop">
        Help friends bargin, you earn you save
      </div>

      <div class="main-btn"
        v-else-if="isNewBargainSucess"
        @click="$router.push('/')">
        Newcomer get Rp8888 gift package
      </div>

      <div class="main-btn"
        v-else-if="isNGo"
        @click="$router.push('/')">
        I also take it for free
      </div>

      <!-- 好友第一次进入  帮砍团队 -->
      <div class="team-box"
        v-if="isBargain&&help_bargain_list&&help_bargain_list.length>0">
        <p class="page-title">Bargaining team</p>
        <ul class="team-list">
          <li class="team-list-item"
            v-for="(item, index) in help_bargain_list"
            :key="index">
            <div class="column">
              <div :class="`team-img huangguan${index + 1}`">
                <img v-lazy="item.avatar">
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

      <!-- 第一次帮砍成功的新用户 世界消息   以及  第n次帮砍的用户帮完成 -->
      <div class="world-news"
        v-else-if="worldTipList.length>0&&(isNewBargainSucess||isNGo)">
        <p class="world-info-tit">8 million+ people have taken it for free</p>

        <ul class="world-list">
          <li class="world-item"
            v-for="(item,index) in worldTipList"
            :key="index">
            <img v-lazy="item.avatar"
              alt=""
              class="cur-user-icon">
            <div class="info-box">
              <P class="info-txt">{{item.content}}</P>
              <div class="time">{{item.time}}</div>
            </div>
          </li>
        </ul>
      </div>

      <!-- 第n次帮砍的用户帮完成 -->
      <!-- <div class="team-end-n"
        v-else-if="isNGo">
        <p class="team-end-title">Bargaining team</p>
        <ul class="team-n-list">
          <li class="team-n-list-item"
            v-for="(item, index) in help_bargain_list"
            :key="index">
            <div class="team-img">
              <img v-lazy="item.avatar">
            </div>

            <div class="info-box">
              <P class="info-txt">Tred bray got a freebie Belanja Flash Deal 11111111111111agag</P>
              <div class="time">2 minutes ago</div>
            </div>
          </li>
        </ul>
      </div> -->
    </div>

    <div class="bargain-content">

      <div class="help-page"
        id="helpCurOk">
        <!-- 帮助 -->
        <p class="page-title">How to get a freebie</p>
        <ul class="help-list">
          <li class="help-item">
            <img v-lazy="require('./../assets/images/shouji@2x.png')">
            <p>Click on favorite goods</p>
          </li>
          <li class="help-item">
            <img v-lazy="require('./../assets/images/yaoqinghaoyou@2x.png')">
            <p>Invite friends to bargain</p>
          </li>
          <li class="help-item">
            <img v-lazy="require('./../assets/images/liwu@2x.png')">
            <p>Cut into free</p>
          </li>
        </ul>
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
          <img v-lazy="item.spu_pics&&item.spu_pics[0]"
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
    <!-- <dialog-sharing-friends :dialogVisible.sync="dialogs.sharingFriends"
      :shareInfo="shareInfo"
      v-if="dialogs.sharingFriends.show" /> -->
    <dialog-old-users-help-cut-successfully :dialogVisible.sync="dialogs.oldUsersHelpCutSuccessfully"
      :chopInfo="chop_info"
      v-if="dialogs.oldUsersHelpCutSuccessfully.show" />
  </div>
</template>

<script>
import { getInfo, getBargainSpus } from "@/server/goods.js";
import { shareSpu, shareInfo } from "@/server/share.js";
import { getHomeTip, getWorldTip } from "@/server/other.js";
import {
  getBargainInfo,
  getHelpBargainList,
  bargainChop
} from "@/server/bargain.js";
export default {
  components: {
    // dialogSharingFriends: resolve =>
    //   require(["@/components/dialogs/dialogSharingFriends.vue"], resolve), // 分享好友弹窗
    countDown: resolve => require(["@/components/countDown.vue"], resolve),
    userPickingUpMessage: resolve =>
      require(["@/components/userPickingUpMessage.vue"], resolve), // 用户领取消息播放,
    dialogOldUsersHelpCutSuccessfully: resolve =>
      require([
        "@/components/dialogs/dialogOldUsersHelpCutSuccessfully.vue"
      ], resolve) // 帮砍成功弹窗
  },
  data() {
    return {
      messageList: [], // 顶部滚动消息
      isOne: false, // 用户是否第一次进入帮砍页面
      dialogs: {
        sharingFriends: {
          show: false
        },
        oldUsersHelpCutSuccessfully: {
          // 砍价完成
          show: false
        }
      },

      shareInfo: {},

      spu: { spu_pics: [] },

      bargain_info: {},
      bargain_user_info: {},

      chop_info: {},

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

      worldTipList: [],
      worldTipPageDat: {
        page_size: 10,
        page_num: 1
      },

      spu_list: []
    };
  },
  computed: {
    // 是否帮砍成功
    isHelpOk() {
      return this.$route.query.helpCur == "ok";
    },
    //  没砍价以及可以帮好友砍（之前没砍过的）以及该商品还在砍价中时  或   没登陆
    isBargain() {
      return (
        (this.$route.query.helpCur != "ok" &&
          !this.bargain_user_info &&
          this.bargain_info.status == 1) ||
        !this.$store.state.userInfo.user_id
      );
    },
    // 是否是老用户帮砍过的
    isNGo() {
      return (
        !this.isOne &&
        this.bargain_user_info &&
        this.bargain_info.status != 2 /* &&
        this.isHelpOk */
      );
    },
    // 新用户帮砍成功
    isNewBargainSucess() {
      return this.isOne && this.isHelpOk;
    }
  },
  created() {
    if (localStorage.getItem("newUserInfo")) {
      // 是否新用户
      this.isOne = true;
    }

    this.init();
  },
  mounted() {
    document.title = "Getting Freebies";

    this.$gaSend({
      eventCategory: "帮砍页面",
      eventAction: "页面展示"
    });
  },
  methods: {
    async init() {
      this.initHomeTip();
      this.initWorldTip();

      // 分享链接直接点击进入的，而不是第二次刷新时
      const {
        relationId,
        bargainId,
        spuId,
        type,
        inviteUserId
      } = this.$route.query;
      if (relationId && !bargainId && !spuId && !type && !inviteUserId) {
        await this.initShareInfo(relationId);
      }
      this.initSpuInfo();
      this.initSpuList();

      // 用户帮砍按钮点击登录后重新进入页面时
      const helpCur = this.$util.getQueryVariable("helpCur");
      if (helpCur == "ok" /*  && window.location.hash != "#helpCurOk" */) {
        console.log("login kan  ok--------");
        this.$store.commit("setLoginSelectShow", false); // 测试（上线后可去掉）
        await this.goBargainChop();
      }

      this.initBargainInfo();
      this.initHelpBargainList();
    },

    async initHomeTip() {
      let result = await getHomeTip();
      if (result && result.data) {
        this.messageList = result.data.home_tips;
        console.log("this.messageList: ", this.messageList);
      }
    },

    async initWorldTip() {
      let result = await getWorldTip(this.worldTipPageDat);
      if (result && result.data) {
        this.worldTipList = result.data;
      }
    },

    async goBargainChop() {
      this.$gaSend({
        eventCategory: "帮砍页面_帮好友砍一刀",
        eventAction: "点击"
      });
      // vuex里的状态，如果直接有登陆会在localStorage缓存，下次进入时会全局先刷新登陆状态（目前商品砍价时间是24小时，token过期是7天，所以这里判断没登陆的就是没帮砍过的）
      if (
        !this.$store.state.userInfo.user_id &&
        process.env.VUE_APP_ENV != "development"
      ) {
        const { pathname, search } = window.location;
           // 原型要求登陆后直接弹起帮砍弹窗
        this.$store.commit(
          "setLoginJumpUrl",
          pathname + search + "&helpCur=ok"
        );

       /*  // 刷新当前页面
        this.$store.commit("setLoginJumpUrl", ""); */
        this.$store.commit("setLoginSelectShow", true);
        return;
      }

      const { bargainId, spuId } = this.$route.query;
      let result = await bargainChop({ bargain_id: bargainId, spu_id: spuId });

      fbq("track", "StartTrial", {
        value: this.spu.title,
        currency: "USD",
        predicted_ltv: spuId
      });

      if (result && result.data) {
        this.chop_info = result.data.chop_info;
        this.dialogs.oldUsersHelpCutSuccessfully.show = true;
        const helpCur = this.$util.getQueryVariable("helpCur");
        if (!helpCur) {
          // 之前有登陆的用户帮好友砍（不是新用户登陆刷新后的）
          this.$router.replace({
            query: {
              ...this.$route.query,
              helpCur: "ok"
            }
          });
          this.initBargainInfo();
          this.initHelpBargainList();
        }
        this.$gaSend({
          eventCategory: "帮砍成功浮窗",
          eventAction: "浮窗展示"
        });
      }

      return Promise.resolve();
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
      return Promise.resolve();
    },

    /**
     * @description: 获取商品信息
     */
    async initSpuInfo() {
      let result = await getInfo({ spu_id: this.$route.query.spuId });
      if (result && result.data) {
        let spu = result.data.spu;
        for (let k in spu) {
          this.$set(this.spu, k, spu[k]);
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
        this.bargain_info = result.data.bargain_info;
        this.bargain_user_info = result.data.bargain_user_info;

        if (!this.bargain_user_info) {
          // 如果没有帮砍 （没bargain_user_info返回就是没帮砍）
          this.$router.replace({
            query: {
              ...this.$route.query
            }
          });
        }
        console.log("this.bargain_user_info: ", this.bargain_user_info);
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
      if (stateGoodsList && stateGoodsList.length > 6) {
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

        //  if (page_num == 1) {
        this.$store.commit("setGoodsList", this.spu_list);
        // } else {
        //   let arr = JSON.parse(JSON.stringify(this.$store.state.goodsList));
        //   this.$store.commit("setGoodsList", arr.push(result.data.spu_list));
        // }
      }
    },
    async openSharingFriendsDialog() {
      let result = await shareSpu({ spu_id: this.$route.query.spuId });
      if (result && result.data) {
        this.shareInfo = result.data;
        this.dialogs.sharingFriends.show = true;
      }
    },
    jumpCurBargainPage(spu_id) {
      if (!this.$store.state.userInfo.user_id) {
        const { pathname, search } = window.location;
        this.$store.commit("setLoginJumpUrl", ""); // 登陆成功后不跳，刷新当前页
        // this.$store.commit("setLoginJumpUrl", `/forBargain?spuId=${spu_id}`);
        this.$store.commit("setLoginSelectShow", true);
        return;
      }

      this.$router.push({
        path: "/bargain",
        query: {
          spuId: spu_id
        }
      });
      this.init();
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
    },
    // 我也要免费拿
    handleGetFree() {
      this.$gaSend({
        eventCategory: "帮砍页面_我也要免费拿",
        eventAction: "点击"
      });
      this.$router.push("/");
    }
  }
  /*  beforeRouteUpdate(to, from, next) {
    const { helpCur } = to.query;
    if (helpCur == "ok" && window.location.hash != "#helpCurOk") {
      this.$store.commit("setLoginSelectShow", false); // 测试（上线后可去掉）
      this.goBargainChop();
    }
    next();
  } */
};
</script>
