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
          span {
            background: url("./../../assets/images/member.png") left top
              no-repeat;
            background-size: 100% auto;
            display: inline-block;
            width: 144px;
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
          > .title {
            font-size: 20px;
            color: #996710;
            padding: 0 0 20px 0;
          }
          > .number {
            padding: 0 30px;
            font-size: 40px;
            color: #996710;
            text-align: left;
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
      margin: 38px 0;
      > li {
        text-align: center;
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 1px solid #F2F2F2;
        > .column {
          flex: 1;
          color:#888888;
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
            <img
              src
              alt
            >
          </div>
          <div class="my-info-detail">
            <p class="name">
              DUODUO
              <span>VIP Member</span>
            </p>
          </div>
        </div>
        <div class="my-wallet">
          <a
            class="my-right-btn"
            @click="$router.push('/withdrawRelated')"
          >Cash out</a>
          <div class="top">
            <p class="title">Cumulative estimated return($)</p>
            <p class="number">1688.68</p>
          </div>
          <div class="bottom">
            <div class="bottom-item">
              <p class="number">1000</p>
              <p class="title">Estimated earnings today</p>
            </div>
            <div class="bottom-item">
              <p class="number">500</p>
              <p class="title">Revenue arrived today($)</p>
            </div>
          </div>
        </div>
      </section>
      <ul class="my-control">
        <li
          class="my-control-item"
          @click="$router.push('/my/myFriends')"
        >
          <img
            src="@/assets/images/Myfriends@2x.png"
            alt
          >
          <p>Friends</p>
        </li>
        <li
          class="my-control-item"
          @click="$router.push('/my/myOrder')"
        >
          <img
            src="@/assets/images/Myorder@2x.png"
            alt
          >
          <p>My order</p>
        </li>
        <li
          class="my-control-item"
          @click="$router.push('/my/revenueDetails')"
        >
          <img
            src="@/assets/images/Revenuedetails@2x.png"
            alt
          >
          <p>Revenue details</p>
        </li>
        <li
          class="my-control-item"
          @click="$router.push('/my/Tutorial')"
        >
          <img
            src="@/assets/images/Tutorial@2x.png"
            alt
          >
          <p>Tutorial</p>
        </li>
      </ul>
      <div class="hero-rank">
        <p class="title">Heroes</p>
        <ul class="hero-list">
          <li class="hero-list-title">
            <div class="column">Rankings</div>
            <div class="column">Number of fans</div>
            <div class="column">Cumulative income($)</div>
          </li>
          <FriendListCommon
            v-for="(item, index) in heroList"
            :key="index"
            :item="item"
            :index="index"
          />
        </ul>
      </div>
    </div>

    <tabBar></tabBar>
  </div>
</template>
<script>
import tabBar from "@/components/layout/tabBar/tabBar.vue";
import FriendListCommon from "@/components/FriendListCommon.vue";
export default {
  components: {
    tabBar,
    FriendListCommon
  },
  data() {
    return {
      heroList: [
        {
          name: "Zoe",
          options1: 10000,
          options2: 20000,
          imgUrl: require("@/assets/images/tabBar-me-active.png")
        }
      ]
    };
  }
};
</script>
