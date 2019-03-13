<style lang="scss" scoped src="./bargain.scss"></style>

<template>
  <div class="bargain-container">
    <!-- 返回首页 -->
    <div class="turn-home"></div>
    <!-- 头部信息 -->
    <div class="bargain-header">
      <div class="bargain-info-box">
        <img class="bg" src="./../assets/images/bargain-bg-2.png" alt="">
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
            <p class="title">Has been cut <span class="n-1"><span class="dollar">$</span>{{bargain_info.bargain_price||0}}</span>, leaving <span class="n-2"><span class="dollar">$</span>{{bargain_info.left_price||spu.price}}</span></p>
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
          <count-down :dateDiff="spu.expire_ttl" class="spu-count-down"></count-down>
          <div class="ctrl-box">
            <div class="share-btn">Share friends to cut</div>
            <div class="buy-btn">Rp 987.987  buy now</div>
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
                <img src="./../assets/images/good-large.png" alt="">
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
      <div class="goods-detail">
        <!-- 商品详情图 -->
        <p class="page-title">Product Petails</p>
        <img v-lazy="spu.spu_pics[0]">
      </div>

      <!-- 推荐商品 -->
      <div class="recommend-products">
        <p class="page-title">
          <img src="./../assets/images/start.png" alt="">
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

    <!-- <div class="down-box">
      <div class="home-btn"
        @click.stop="$router.push({path:'/'})">
        <img src="~@/assets/images/tabBar-home.png">
        <p>HOME</p>
      </div>

      <div class="buy-now"
        @click.stop="jumpBuyPage">
        <div class="paly-num">${{spu.price}}</div>
        <p>buy now</p>
      </div>

      <div class="share-friends"
        @click.stop="openSharingFriendsDialog">
        Share to friends
      </div>
    </div> -->
    <dialog-sharing-friends :dialogVisible.sync="dialogs.sharingFriends"
      :shareInfo="shareInfo" />
  </div>
</template>

<script>
import bargainingProgressBar from "@/components/bargain/bargainingProgressBar.vue";
import dialogSharingFriends from "@/components/dialogs/dialogSharingFriends.vue";
import bargainingHelpInformation from "@/components/bargain/bargainingHelpInformation.vue";
import countDown from "@/components/countDown.vue";
// import commodityItem from "@/components/commodity/commodityItem.vue";

import { getInfo, getBargainSpus } from "@/server/goods.js";
import { shareSpu } from "@/server/share.js";
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
    countDown
    // commodityItem // 商品列表展示的商品X
  },
  data() {
    return {
      dialogs: {
        sharingFriends: {
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
        bargain_price: 1, //类型：Number  必有字段  备注：已砍价金额
        left_price: 1 //类型：Number  必有字段  备注：剩余金额
      },

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
    this.init();
  },
  methods: {
    async init() {
      if (!this.$route.query.bargainId) {
        let result = await this.goBargainChop({
          spu_id: this.$route.query.spuId
        });
      }

      this.initBargainInfo();
      this.initHelpBargainList();
      this.initSpuInfo();
      this.initSpuList();
    },
    async goBargainChop({ bargain_id, spu_id }) {
      let result = await bargainChop({ bargain_id, spu_id });
      if (result && result.data && result.data.chop_info) {
        const chop_info = result.data.chop_info;
        this.$router.push({
          path: "/bargain",
          query: {
            ...this.$route.query,
            bargainId: chop_info.bargain_id
          }
        });
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
      if (result) {
        this.bargain_info = result.data;
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
      }
      this.dialogs.sharingFriends.show = true;
    },
    jumpCurBargainPage(spu_id) {
      this.$router.push({
        path: "/bargain",
        query: {
          spuId: spu_id
        }
      });
      this.init();
    },

    jumpBuyPage() {
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
  }
};
</script>
