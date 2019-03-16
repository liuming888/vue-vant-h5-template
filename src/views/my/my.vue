<style lang="scss" scoped>
.my-container {
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
        margin-right: 37px;
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
          margin: 14px 0 20px 0;
          font-size: 36px;
          height: 28px;
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
      bottom: -38px;
      left: 30px;
      right: 30px;
      padding: 0 18px 42px 18px;
      height: 260px;
      background-color: #fff;
      border-radius: 20px;
      text-align: center;
      > .top {
        > .title {
          font-size: 20px;
          color: #ababae;
          padding: 33px 0 20px 0;
        }
        > .number {
          font-size: 60px;
          color: #d30c05;
          padding-bottom: 38px;
        }
      }
      > .bottom {
        display: flex;
        > .bottom-item {
          flex: 1;
          > .title {
            font-size: 20px;
            color: #ababae;
            padding: 0 0 20px 0;
          }
          > .number {
            font-size: 30px;
            color: #323232;
          }
        }
      }
    }
  }
  > .my-control {
    margin: 58px 0 20px 0;
    padding: 0 30px;
    height: 158px;
    display: flex;
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
  padding: 0 30px;
  > .title {
    padding: 28px 0;
    font-size: 40px;
    color: #323232;
    text-align: center;
  }
  > .hero-list {
    margin: 38px 0;
    > li {
      display: flex;
      align-items: center;
      > .column {
        flex: 1;
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
            <p class="name">DUODUO</p>
            <img
              class="member"
              src="@/assets/images/VIPmember.png"
              alt
            >
          </div>
          <a
            class="my-right-btn"
            @click="$router.push('/withdrawRelated')"
          >Cash out</a>
        </div>
        <div class="my-wallet">
          <div class="top">
            <p class="title">Cumulative estimated return($)</p>
            <p class="number">1688.68</p>
          </div>
          <div class="bottom">
            <div class="bottom-item">
              <p class="title">Estimated earnings today</p>
              <p class="number">1000</p>
            </div>
            <div class="bottom-item">
              <p class="title">Revenue arrived today($)</p>
              <p class="number">500</p>
            </div>
          </div>
        </div>
      </section>
      <ul class="my-control">
        <li class="my-control-item" @click="$router.push('/my/myFriends')">
          <img
            src="@/assets/images/Invitefriends.png"
            alt
          >
          <p>Friends</p>
        </li>
        <li class="my-control-item" @click="$router.push('/my/myOrder')">
          <img
            src="@/assets/images/Invitefriends.png"
            alt
          >
          <p>My order</p>
        </li>
        <li class="my-control-item" @click="$router.push('/my/revenueDetails')">
          <img
            src="@/assets/images/Invitefriends.png"
            alt
          >
          <p>Revenue details</p>
        </li>
        <li class="my-control-item" @click="$router.push('/my/Tutorial')">
          <img
            src="@/assets/images/Invitefriends.png"
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
