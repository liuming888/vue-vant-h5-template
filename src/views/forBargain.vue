<style lang="scss" scoped src="./forBargain.scss"></style>

<template>
  <div class="bargain-container">
    <!-- 用户消息 -->
    <!-- <user-picking-up-message :messageList="messageList"></user-picking-up-message> -->
    <!-- 头部信息 -->
    <div class="bargain-header">
      <!-- 头部返回首页 -->
      <img v-lazy="require('./../assets/images/HOME@2x.png')"
        class="turn-home"
        @click="$router.push('/')">
      <!-- banner -->
      <div class="bargain-banner">
        <img v-lazy="require('./../assets/images/WaterWomenBagba@2x.png')">
      </div>
      <div class="bargain-info-box">
        <img class="bg"
          src="./../assets/images/bargain-2.png">
        <div class="bargain-content">
          <!-- 砍价商品信息 -->
          <div class="bargain-info">
            <div class="img-box">
              <img v-lazy="spu.spu_pics[0]||require('./../assets/images/good-large.png')">
            </div>
            <div class="detail">
              <p class="title">{{spu.title}}</p>
              <!-- <count-down :dateDiff="spu.expire_ttl"></count-down> -->
              <div class="price-box">
                <div class="price-box-item">
                  <p class="p-t-3">244d Sent</p>
                  <p class="p-t-1">
                    Price
                    <span>$</span><span>{{spu.original_price}}</span>
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
            <p class="title">Has been cut <span class="n-1"><span class="dollar">$</span>{{bargain_info.bargain_amount||0}}</span>, leaving <span class="n-2"><span class="dollar">$</span>{{bargain_info.bargain_after||spu.price}}</span></p>
            <div class="schedule">
              <div class="active"
                :style="{'width':bargain_info.bargain_rate+'%'}"></div>
              <div class="schedule-item">
                <span class="description">cut <span class="highlight">{{bargain_info.bargain_rate}}%</span></span>
              </div>
              <div class="schedule-item ball ball-right">
                <!-- <span class="description">Take it free</span> -->
              </div>
            </div>
          </div>
          <count-down :dateDiff="spu.expire_ttl"
            class="spu-count-down"></count-down>
          <div class="ctrl-box">
            <div class="share-btn"
              v-if="$route.query.helpCur!='ok'"
              @click="goBargainChop">Help friend cut a knife</div>
            <div class="share-btn"
              v-if="$route.query.helpCur=='ok'"
              onclick="window.location.href='#helpCurOk'">Also take it for free</div>

            <!-- 用户第N次进入帮砍界面,不管该商品是否砍价成功 bargain_user_info无的话就没帮砍 -->
            <div class="share-btn"
              v-if="bargain_info.bargain_user_info">Receive reward</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bargain-content">

      <!-- 帮砍团队 -->
      <div class="team-box">
        <p class="page-title">Bargaining team</p>
        <ul class="team-list">
          <li class="team-list-item"
            v-for="(item, index) in help_bargain_list"
            :key="index">
            <div class="column">
              <div :class="`team-img huangguan${index + 1}`">
                <img src="./../assets/images/good-large.png"
                  alt="">
                <!-- <img v-lazy="item.avatar"> -->
              </div>
              <div class="team-info">
                <p class="team-name">{{item.username}}</p>
                <p class="team-date">2019-03-11 10:36:54</p>
              </div>
            </div>
            <div class="column">
              <p class="dollar">Rp<span>{{item.bargain_amount}}</span></p>
            </div>
          </li>
        </ul>
      </div>
      <div class="help-page"
        v-if="isOne"
        id="helpCurOk">
        <!-- 帮助 -->
        <p class="page-title">How to get a free gift</p>
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
      <div class="recommend-products">
        <p class="page-title">
          <img v-lazy="require('./../assets/images/start.png')">
          <span>More Products</span>
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
              @click="jumpCurBargainPage(item.spu_id)">Get Freebie</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹窗 -->
    <dialog-sharing-friends :dialogVisible.sync="dialogs.sharingFriends"
      :shareInfo="shareInfo" />
    <dialog-old-users-help-cut-successfully :dialogVisible.sync="dialogs.oldUsersHelpCutSuccessfully"
      :chopInfo="chop_info" />
  </div>
</template>

<script>
import bargainingProgressBar from "@/components/bargain/bargainingProgressBar.vue";
import dialogSharingFriends from "@/components/dialogs/dialogSharingFriends.vue";
import bargainingHelpInformation from "@/components/bargain/bargainingHelpInformation.vue";
import countDown from "@/components/countDown.vue";
import userPickingUpMessage from "@/components/userPickingUpMessage.vue";
import dialogOldUsersHelpCutSuccessfully from "@/components/dialogs/dialogOldUsersHelpCutSuccessfully.vue";

import { getInfo, getBargainSpus } from "@/server/goods.js";
import { shareSpu, shareInfo } from "@/server/share.js";
import {
  getBargainInfo,
  getHelpBargainList,
  bargainChop
} from "@/server/bargain.js";
export default {
  components: {
    bargainingProgressBar, // 砍价进度条
    dialogSharingFriends, // 分享好友弹窗
    bargainingHelpInformation, // 砍价帮
    countDown,
    userPickingUpMessage,
    dialogOldUsersHelpCutSuccessfully // 帮砍成功弹窗
    // commodityItem // 商品列表展示的商品X
  },
  data() {
    return {
      isOne: false, // 用户是否第一次进入帮砍页面
      dialogs: {
        sharingFriends: {
          show: false
        },
        oldUsersHelpCutSuccessfully: {
          show: false
        }
      },

      shareInfo: {
        shareUrl: window.location.origin + "/forBargain", // 从点击打开的链接
        shareTitle: "分享标题",
        shareDescription: "分享的描述",
        shareImage: "https://s.pinimg.com/images/facebook_share_image.png", //  分享的预览图（图片有限制）
        quote:
          "FB随分享的链接一同显示的引文可由用户自行高亮选择，也可由开发者预先定义（例如文章的醒目引文）"
        // hashtag:"FB分享的tag标签"
      },

      spu: {
        //类型：Object  必有字段  备注：商品
        spu_id: 1, //类型：Number  必有字段  备注：商品id
        title: "mock", //类型：String  必有字段  备注：商品标题
        spu_pics: [
          //类型：Array  必有字段  备注：图片地址列表
          "mock" //类型：String  必有字段  备注：无
        ],
        specs: [
          //类型：Array  必有字段  备注：规格列表
          {
            //类型：Object  必有字段  备注：无
            spec_name: "mock", //类型：String  必有字段  备注：规格名
            spec_values: [
              //类型：Array  必有字段  备注：规格列表
              "mock" //类型：String  必有字段  备注：无
            ]
          }
        ],
        price: "mock", //类型：String  必有字段  备注：商品售价
        desp: "mock", //类型：String  必有字段  备注：商品详情描述
        expire_ttl: 0, //类型：String  必有字段  备注：商品砍价过期时间（剩余的时间）单位：秒 (需要跟后台沟通改为毫秒)
        expire_time: "mock", //类型：String  必有字段  备注：砍价过期时间
        deliver_count: "mock" //类型：String  必有字段  备注：已免费拿数量
      },

      bargain_info: {
        //类型：Object  必有字段  备注：砍价信息
        bargain_id: 1, //类型：Number  必有字段  备注：砍价号
        bargain_rate: 1, //类型：Number  必有字段  备注：已砍价比例
        bargain_amount: 1, //类型：Number  必有字段  备注：已砍价金额
        bargain_after: 1, //类型：Number  必有字段  备注：剩余金额
        spu_id: "mock", //类型：String  必有字段  备注：商品id
        status: 1, //类型：Number  必有字段  备注：1:砍价中 2：砍价过期 3: 砍价购买完成
        can_buy: 1 //类型：Number  必有字段  备注： 1:可购买 2：不可购买
      },
      bargain_user_info: {
        //类型：Object  可有字段  备注：登录用户会，判断是否帮砍
        type: "mock", //类型：String  必有字段  备注：1:自砍 2：帮砍
        reward_amount: "mock" //类型：String  必有字段  备注：奖励金额
      },

      chop_info: {
        //类型：Object  必有字段  备注：无
        bargain_id: 1, //类型：Number  必有字段  备注：砍价号
        bargain_amount: 1, //类型：Number  必有字段  备注：砍价金额
        bargain_rate: 1, //类型：Number  必有字段  备注：砍价比例
        reward_amount: "mock" //类型：String  必有字段  备注：下单能获取的金额
      },

      expirationDat: {
        h: "24",
        p: "00",
        m: "00"
      },

      help_bargain_list: [
        //类型：Array  必有字段  备注：帮砍列表
        {
          //类型：Object  必有字段  备注：无
          user_id: 1, //类型：Number  必有字段  备注：用户id
          username: "mock", //类型：String  必有字段  备注：用户名
          bargain_amount: 1, //类型：Number  必有字段  备注：帮砍额度
          bargain_time: "mock", //类型：String  必有字段  备注：帮砍时间
          avatar: "mock" //类型：String  必有字段  备注：头像
        }
      ],
      helpBargainPageDat: {
        page_size: 10,
        page_num: 1
      },

      spu_list: [
        //类型：Array  必有字段  备注：砍价商品列表
        {
          //类型：Object  必有字段  备注：无
          spu_id: 2, //类型：Number  必有字段  备注：商品id
          title: "mock", //类型：String  必有字段  备注：商品标题
          price: 1, //类型：Number  必有字段  备注：商品售价
          deliver_count: 1, //类型：Number  必有字段  备注：已送出数量
          spu_pics: [
            //类型：Array  必有字段  备注：图片地址列表（已排好序）
          ]
        }
      ]
    };
  },
  created() {
    if (!localStorage.getItem("userInfo")) {
      // 用户第一次进入砍价页面
      this.isOne = true;
    }

    this.init();
  },
  methods: {
    async init() {
      // 分享链接点击进入的
      if (this.$route.query.relationId) {
        await this.initShareInfo(this.$route.query.relationId);
      }

      this.initBargainInfo();
      this.initHelpBargainList();
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

        this.$router.push({
          path: "/forBargain",
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
    async goBargainChop() {
      if (!this.$store.state.userInfo.user_id) {
        const { pathname, search } = window.location;
        this.$store.commit("setLoginJumpUrl", pathname + search + "&helpCur=ok");
        this.$store.commit("setLoginSelectShow", true);
        return;
      }
      const { bargainId, spuId } = this.$route.query;
      let result = await bargainChop({ bargain_id: bargainId, spu_id: spuId });
      if (result) {
        const chop_info = result.data.bargain_info;
        this.dialogs.oldUsersHelpCutSuccessfully.show = true;
        // this.$router.push({
        //   path: "/bargain",
        //   query: {
        //     ...this.$route.query,
        //     bargainId: chop_info.bargain_id
        //   }
        // });
      }
    },
    /**
     * @description: 获取商品信息
     */
    async initSpuInfo() {
      let result = await getInfo({ spu_id: this.$route.query.spuId });
      if (result) {
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
        this.bargain_info = result.data.bargain_info;
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
      if (result) {
        this.help_bargain_list = result.data;
      }
    },

    /**
     * @description: 更多商品列表
     */
    async initSpuList() {
      let result = await getBargainSpus({
        page_size: 16,
        page_num: 1,
        is_all: 0
      });
      if (result && result.data) {
        this.spu_list = result.data.spu_list;
      }
    },
    async openSharingFriendsDialog() {
      let result = await shareSpu({ spu_id: this.$route.query.spuId });
      if (result) {
        this.shareInfo = result.data;
        this.dialogs.sharingFriends.show = true;
      }
    },
    jumpCurBargainPage(spu_id) {
      if (!this.$store.state.userInfo.user_id) {
        const { pathname, search } = window.location;
        this.$store.commit("setLoginJumpUrl", `/bargain?spuId=${spu_id}`);
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
    }
  },
  beforeRouteUpdate(to, from, next) {
    const { helpCur } = to.query;
    if (helpCur == "ok" && window.location.hash != "#helpCurOk") {
      this.$store.commit("setLoginSelectShow", false); // 测试（上线后可去掉）
      this.goBargainChop();
    }
  }
};
</script>
