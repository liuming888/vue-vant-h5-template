<style lang="scss" scoped>
.my-container {
  background: rgb(245, 245, 245);
  height: 92vh;
  overflow-y: auto;
  > .my-header {
    padding: 40px 30px 0 30px;
    position: relative;
    background: url("./../../assets/images/my-background.png") no-repeat;
    background-size: 100% 100%;
    height: 400px;
    > .my-info {
      display: flex;
      > .my-img {
        margin-right: 27px;
        width: 110px;
        height: 110px;
        border-radius: 50%;
        overflow: hidden;
        background-color: #fff;
        > img {
          width: 100%;
          height: auto;
        }
      }
      > .my-info-detail {
        flex: 1;
        color: #fff;
        > .name {
          margin: 34px 0 20px 0;
          font-size: 36px;
          line-height: 40px;
          white-space:nowrap;
          span {
            background: url("./../../assets/images/member.png") left top
              no-repeat;
            background-size: 100% auto;
            display: inline-block;
            width: 160px;
            height: 36px;
            line-height: 36px;
            padding-left: 40px;
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
      }
    }
    > .my-wallet {
      position: absolute;
      left: 30px;
      right: 30px;
      height: 393px;
      top: 180px;
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
        width: 199px;
        height: 70px;
        line-height: 70px;
        background: rgba(153, 103, 16, 1);
        border: 2px solid rgba(148, 103, 29, 1);
        border-radius: 14px 0px 0px 14px;
        color: #fff;
        font-size: 28px;
      }
      > .top {
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
      }
    }
  }
  > .my-control {
    margin: 158px 30px 20px 30px;
    border-radius: 20px;
    height: 158px;
    display: flex;
    background: #fff;
    // align-items: center;
    > .my-control-item {
      flex: 1;
      display: block;
      text-align: center;
      font-size: 22px;
      color: #323232;
      height: 100%;
      cursor: pointer;
      > img {
        padding-top: 38px;
        width: auto;
        height: 50px;
      }
    }
  }

  .hero-rank {
    margin: 0 30px;
    background: #fff;
    > .title {
      padding: 28px 0 0 0;
      font-size: 40px;
      color: #323232;
      text-align: center;
    }
    > .hero-list {
      height: 480px;
      overflow-y: auto;
      margin: 38px 0;
      > li {
        text-align: center;
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 1px solid #f2f2f2;
        > .column {
          flex: 1;
          color: #888888;
          font-size: 22px;
        }
      }
    }
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
              <span>VIP Member</span>
            </p>
          </div>
        </div>
        <div class="my-wallet">
          <a class="my-right-btn"
            @click="handleCashOut">Cash out</a>
          <div class="top">
            <p class="title">Cumulative estimated return(Rp)</p>
            <p class="number">{{accountInfo.total_future_price||0}}</p>
          </div>
          <div class="bottom">
            <div class="bottom-item">
              <p class="number">{{accountInfo.today_future_price||0}}</p>
              <p class="title">Estimated earnings today</p>
            </div>
            <div class="bottom-item">
              <p class="number">{{accountInfo.today_received_price||0}}</p>
              <p class="title">Revenue arrived today(Rp)</p>
            </div>
          </div>
        </div>
      </section>
      <ul class="my-control">
        <li class="my-control-item"
          @click="handleToMyFriend">
          <img src="@/assets/images/Myfriends@2x.png"
            alt>
          <p>Friends</p>
        </li>
        <li class="my-control-item"
          @click="handleToMyOrder">
          <img src="@/assets/images/Myorder@2x.png"
            alt>
          <p>My order</p>
        </li>
        <li class="my-control-item"
          @click="handleMyIncomeDetail">
          <img src="@/assets/images/Revenuedetails@2x.png"
            alt>
          <p>Revenue details</p>
        </li>
        <li class="my-control-item"
          @click="hadnleToTutorial">
          <img src="@/assets/images/Tutorial@2x.png"
            alt>
          <p>Tutorial</p>
        </li>
      </ul>
      <div class="hero-rank"
        v-if="heroList.length>0">
        <p class="title">Heroes</p>
        <ul class="hero-list">
          <li class="hero-list-title">
            <div class="column">Rankings</div>
            <div class="column">Number of fans</div>
            <div class="column">Cumulative income(RP)</div>
          </li>
          <FriendListCommon v-for="(item, index) in hero_tips"
            :key="index"
            :item="item"
            :index="index" />
        </ul>
      </div>
    </div>

    <tabBar></tabBar>
  </div>
</template>
<script>
import tabBar from "@/components/layout/tabBar/tabBar.vue";
import FriendListCommon from "@/components/FriendListCommon.vue";

import { getMyAccount, getHeroList } from "@/server/user.js";
export default {
  components: {
    tabBar,
    FriendListCommon
  },
  data() {
    return {
      accountInfo: {
        user_id: "mock", //类型：String  可有字段  备注：用户ID
        user_name: "mock", //类型：String  必有字段  备注：用户名
        vip_type: 1, //类型：Number  必有字段  备注：vip等级（1：普通会员 2：高级会员）
        avatar: "mock", //类型：String  必有字段  备注：头像地址
        total_future_price: "mock", //类型：String  必有字段  备注：累计预估收益
        today_future_price: "mock", //类型：String  必有字段  备注：今日预估收益
        today_received_price: "mock" //类型：String  必有字段  备注：今日到账收益
      },
      heroList: [
        {
          name: "Zoe",
          options1: 10000,
          options2: 20000,
          imgUrl: require("@/assets/images/tabBar-me-active.png")
        }
      ],

      hero_tips: [
        //类型：Array  必有字段  备注：无
        {
          //类型：Object  必有字段  备注：无
          username: "用户1", //类型：String  必有字段  备注：无
          avatar:
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=2a5524e6e8cd7b89f66c3c833f244291/1e30e924b899a901b25a7f1a13950a7b0208f5ab.jpg", //类型：String  必有字段  备注：无
          fans_count: 5131, //类型：Number  必有字段  备注：无
          sum_amount: 1229 //类型：Number  必有字段  备注：无
        }
      ]
    };
  },
  created() {
    // if (this.$store.state.userInfo.user_id) {
    this.ininMyAccount();
    this.initHeroTips();
    // }
  },
  methods: {
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
    handleCashOut(){
      //统计
      this.$gaSend({
        eventCategory: "我的账户页面_立即提现",
        eventAction: "点击",
      });
      this.$router.push('/withdrawRelated');
    },
    // 我的朋友
    handleToMyFriend() {
      //统计
      this.$gaSend({
        eventCategory: "我的账户_我的好友",
        eventAction: "点击",
      });
      this.$router.push('/my/myFriends')
    },
    // 我的订单
    handleToMyOrder(){
      //统计
      this.$gaSend({
        eventCategory: "我的账户_我的订单",
        eventAction: "点击",
      });
      this.$router.push('/my/myOrder');
    },
    // 收入明细
    handleMyIncomeDetail() {
      //统计
      this.$gaSend({
        eventCategory: "我的账户_收益明细",
        eventAction: "点击",
      });
      this.$router.push('/my/revenueDetails');
    },
    // 新手教程
    hadnleToTutorial() {
      //统计
      this.$gaSend({
        eventCategory: "我的账户_新手教程",
        eventAction: "点击",
      });
      this.$router.push('/my/Tutorial');
    },
    // 立即提现
  }
};
</script>
