<style lang="scss" scoped>
.my-container {
  background: rgb(245, 245, 245);
  height: 92vh;
  overflow-y: auto;
  > .my-header {
    padding: 32px 30px 0 30px;
    position: relative;
    background: url("./../../assets/images/my-background.png") no-repeat;
    background-size: 100% 100%;
    height: 356px;
    > .my-info {
      display: flex;
      align-items: center;
      > .my-img {
        margin-right: 27px;
        width: 88px;
        height: 88px;
        border-radius: 50%;
        overflow: hidden;
        background-color: #fff;
        > img {
          width: 100%;
          height: 88px;
        }
      }
      > .my-info-detail {
        flex: 1;
        color: #fff;
        > .name {
          // margin: 34px 0 20px 0;
          font-size: 36px;
          // line-height: 40px;
          white-space: nowrap;
          span {
            background: url("./../../assets/images/member.png") left top
              no-repeat;
            background-size: 100% auto;
            display: inline-block;
            // width: 160px;
            height: 36px;
            line-height: 36px;
            padding-left: 40px;
            padding-right: 15px;
            font-size: 22px;
            vertical-align: middle;
          }
        }
        > .member {
          height: 32px;
          width: auto;
        }
      }
      > .my-right-btn {
        // flex: 1;
        margin-top: 30px;
        display: block;
        width: 137px;
        height: 50px;
        border-radius: 25px;
        text-align: center;
        line-height: 50px;
        color: #d40e07;
        background-color: #fff;
        font-size: 24px;
        white-space:nowrap; 
      }
    }
    > .my-wallet {
      position: absolute;
      left: 30px;
      right: 30px;
      height: 393px;
      top: 141px;
      background: linear-gradient(
        90deg,
        rgba(255, 226, 166, 1) 0%,
        rgba(255, 203, 90, 1) 100%
      );
      border-radius: 20px;
      text-align: center;
      .my-right-btn {
        position: absolute;
        right: 0;
        top: 70px;
        // width: 280px;
        padding: 0 24px;
        height: 70px;
        line-height: 70px;
        background: rgba(153, 103, 16, 1);
        border: 2px solid rgba(148, 103, 29, 1);
        border-radius: 14px 0px 0px 14px;
        box-sizing: border-box;
        color: #fff;
        font-size: 28px;
        white-space:nowrap; 
      }
      > .top {
        margin-bottom: 40px;
        > .title {
          font-size: 26px;
          color: #94671d;
          padding: 43px 30px 10px 30px;
          text-align: left;
        }
        > .number {
          font-size: 60px;
          color: #996710;
          text-align: left;
          padding: 0 30px 68px 30px;
        }
      }
      > .bottom {
        display: flex;
        > .bottom-item {
          flex: 1;
          text-align: left;
          position: relative;

          > .title {
            font-size: 20px;
            color: #996710;
            padding: 0 0 20px 30px;
          }
          > .number {
            padding: 0 30px;
            font-size: 40px;
            color: #996710;
            margin-bottom: 10px;
          }
        }

        .bottom-item-1::after {
          content: "";
          width: 1px;
          height: 50px;
          background: #211f1d;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto 0;
        }
      }
    }
  }
  > .my-control {
    margin: 168px 30px 24px 30px;
    border-radius: 20px;
    height: 190px;
    display: flex;
    background: #fff;
    align-items: center;
    > .my-control-item {
      flex: 1;
      display: block;
      text-align: center;
      font-size: 22px;
      color: #323232;
      height: 100%;
      cursor: pointer;
      > img {
        padding-top: 48px;
        width: 64px;
        height: auto;
      }
    }
  }

  .hero-rank {
    margin: 0 30px;
    background: #fff;
    > .title {
      padding: 28px 0 16px 0;
      font-size: 40px;
      color: #323232;
      text-align: center;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        width: 80px;
        height: 2px;
        background: rgba(237, 238, 243, 1);
        border-radius: 1px;
      }
    }

    .hero-list-title {
      width: 100%;
      font-size: 22px;
      height: 77px;
      // line-height: 77px;
      display: flex;
      text-align: center;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f2f2f2;

      > .column {
        flex: 1;
        color: #888888;
        font-size: 22px;
      }
    }

    > .hero-list {
      max-height: 765px;
      overflow-y: auto;
      margin-bottom: 27px;

      > li {
        text-align: center;
        display: flex;
        align-items: center;
        // padding-bottom: 10px;
        border-bottom: 1px solid #f2f2f2;
        > .column {
          flex: 1;
          color: #888888;
          font-size: 22px;
        }
      }
    }
  }

  .sing-out {
    width: 690px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    margin: 20px auto 25px;
    font-size: 32px;
    font-family: Helvetica;
    font-weight: 400;
    color: rgba(212, 13, 5, 1);
  }
}
</style>
<template>
  <div>
    <div class="my-container">
      <section class="my-header">
        <div class="my-info">
          <div class="my-img">
            <img v-lazy="accountInfo.avatar"
              alt>
          </div>
          <div class="my-info-detail">
            <p class="name">
              {{accountInfo.user_name}}
              <span>{{$t('my.VIPMember')}}</span>
            </p>
          </div>
        </div>
        <div class="my-wallet">
          <a class="my-right-btn"
            @click="handleCashOut">{{$t('my.cashOut')}}</a>
          <div class="top">
            <p class="title">{{$t('my.cumulativeReturn')}}(Rp)</p>
            <p class="number">{{accountInfo.total_future_price||0}}</p>
          </div>
          <div class="bottom">
            <div class="bottom-item bottom-item-1">
              <p class="number">{{accountInfo.today_future_price||0}}</p>
              <p class="title">{{$t('my.estimatedEarningsToday')}}(Rp)</p>
            </div>
            <div class="bottom-item">
              <p class="number">{{accountInfo.today_received_price||0}}</p>
              <p class="title">{{$t('my.revenueArrivedToday')}}(Rp)</p>
            </div>
          </div>
        </div>
      </section>
      <ul class="my-control">
        <li class="my-control-item"
          @click="handleToMyFriend">
          <img v-lazy="require('@/assets/images/Myfriends@2x.png')"
            alt>
          <p>{{$t('my.friendsTxt')}}</p>
        </li>
        <li class="my-control-item"
          @click="handleToMyOrder">
          <img v-lazy="require('@/assets/images/Myorder@2x.png')"
            alt>
          <p>{{$t('my.myOrderTxt')}}</p>
        </li>
        <li class="my-control-item"
          @click="handleMyIncomeDetail">
          <img v-lazy="require('@/assets/images/Revenuedetails@2x.png')"
            alt>
          <p>{{$t('my.revenueDetailsTxt')}}</p>
        </li>
        <li class="my-control-item"
          @click="hadnleToTutorial">
          <img v-lazy="require('@/assets/images/Tutorial@2x.png')"
            alt>
          <p>{{$t('my.tutorialTxt')}}</p>
        </li>
      </ul>
      <div class="hero-rank"
        v-if="hero_tips.length>0">
        <p class="title">{{$t('my.heroesTxt')}}</p>
        <div class="hero-list-title">
          <div class="column">{{$t('my.rankingsTxt')}}</div>
          <div class="column">{{$t('my.numberOfFansTxt')}}</div>
          <div class="column">{{$t('my.cumulativeReturnTxt')}}(RP)</div>
        </div>
        <ul class="hero-list">

          <FriendListCommon v-for="(item, index) in hero_tips"
            :key="index"
            :item="item"
            :index="index" />
        </ul>
      </div>

      <div v-if="$store.state.userInfo.user_id"
        class="sing-out"
        @click="signOut">
        {{$t('my.signOutTxt')}}
      </div>
    </div>

    <tabBar></tabBar>
  </div>
</template>
<script>
import axios from "axios";
import tabBar from "@/components/layout/tabBar/tabBar.vue";

import { getMyAccount, getHeroList } from "@/server/user.js";

import loadings from "@/mixins/loadings.js";
export default {
  mixins: [loadings],
  components: {
    tabBar,
    FriendListCommon: resolve =>
      require(["@/components/FriendListCommon.vue"], resolve)
  },
  data() {
    return {
      accountInfo: {
        user_id: "", //类型：String  可有字段  备注：用户ID
        user_name: "", //类型：String  必有字段  备注：用户名
        vip_type: 1, //类型：Number  必有字段  备注：vip等级（1：普通会员 2：高级会员）
        avatar: "", //类型：String  必有字段  备注：头像地址
        total_future_price: 0, //类型：String  必有字段  备注：累计预估收益
        today_future_price: 0, //类型：String  必有字段  备注：今日预估收益
        today_received_price: 0 //类型：String  必有字段  备注：今日到账收益
      },

      hero_tips: []
    };
  },
  created() {
    // if (this.$store.state.userInfo.user_id) {
    this.ininMyAccount();
    this.initHeroTips();
    // }
  },
  methods: {
    /**
     * @description: 退出登录
     */
    async signOut() {
      this.mx_showLoad();

      this.$store.commit("setUserInfo", {});
      axios.defaults.headers.common["User-Id"] = "";
      axios.defaults.headers.common["Access-Token"] = "";
      localStorage.clear();
      this.accountInfo = {
        user_id: "", //类型：String  可有字段  备注：用户ID
        user_name: "", //类型：String  必有字段  备注：用户名
        vip_type: 1, //类型：Number  必有字段  备注：vip等级（1：普通会员 2：高级会员）
        avatar: "", //类型：String  必有字段  备注：头像地址
        total_future_price: 0, //类型：String  必有字段  备注：累计预估收益
        today_future_price: 0, //类型：String  必有字段  备注：今日预估收益
        today_received_price: 0 //类型：String  必有字段  备注：今日到账收益
      };
      this.hero_tips = [];
      this.$toast({
        message: this.$t('common.pleaseLoginAgain'),
        duration: 1000
      });

      // 退出FB接口暂时无效
      // try {
      //   await window.$faceBookApi.logoutFB();
      // } catch (error) {
      //   console.warn("FB退出登录无效", error);
      // }
      
      this.$util.deleteAllCookies();
      this.$store.commit("setLoginSelectShow", true);

      this.mx_closeLoad();
    },
    async initHeroTips() {
      let result = await getHeroList();
      if (result && result.data) {
        this.hero_tips = result.data.hero_tips;
      }
    },
    async ininMyAccount() {
      let result = await getMyAccount();
      if (result && result.data) {
        this.accountInfo = result.data;
      }
    },
    // 去支付
    handleCashOut() {
      //统计
      this.$gaSend({
        eventCategory: "我的账户页面_立即提现",
        eventAction: "点击"
      });
      this.$router.push("/withdrawRelated");
    },
    // 我的朋友
    handleToMyFriend() {
      //统计
      this.$gaSend({
        eventCategory: "我的账户_我的好友",
        eventAction: "点击"
      });
      this.$router.push("/my/myFriends");
    },
    // 我的订单
    handleToMyOrder() {
      //统计
      this.$gaSend({
        eventCategory: "我的账户_我的订单",
        eventAction: "点击"
      });
      this.$router.push("/my/myOrder");
    },
    // 收入明细
    handleMyIncomeDetail() {
      //统计
      this.$gaSend({
        eventCategory: "我的账户_收益明细",
        eventAction: "点击"
      });
      this.$router.push("/my/revenueDetails");
    },
    // 新手教程
    hadnleToTutorial() {
      //统计
      this.$gaSend({
        eventCategory: "我的账户_新手教程",
        eventAction: "点击"
      });
      this.$router.push("/my/Tutorial");
    }
    // 立即提现
  }
};
</script>
