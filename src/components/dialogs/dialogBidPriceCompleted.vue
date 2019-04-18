<style lang="scss" scoped>
.box {
  position: relative;
  margin: 0 70px;
  > .bg {
    width: 100%;
    height: auto;
  }
  > .info-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 915px;
    > .title {
      padding: 0 80px;
      color: #fff;
      font-size: 40px;
      text-align: center;
      margin-top: 200px;
    }
    > .goods-list {
      margin: 24px 30px 26px 30px;
      padding: 10px;
      height: 400px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      overflow-y: auto;
      > li {
        padding: 20px;
        display: flex;
        > .photo {
          margin-right: 20px;
          width: 150px;
          height: 150px;
        }
        > .content {
          flex: 1;
          > .c-title {
            margin-bottom: 25px;
            font-size: 28px;
            color: #323232;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          > .p-1 {
            margin-bottom: 5px;
            font-size: 20px;
            color: #888;
            text-decoration: line-through;
          }
          > .p-2 {
            font-size: 32px;
            color: #d30c05;
            > span {
              font-size: 20px;
            }
          }
        }
      }
    }
    > .btn {
      margin: 0 65px 10px 65px;
      line-height: 80px;
      height: 80px;
      background: linear-gradient(
        0deg,
        rgba(255, 229, 89, 1) 0%,
        rgba(255, 215, 0, 1) 100%
      );
      border-radius: 40px;
      color: #d30c05;
      font-size: 32px;
      text-align: center;
    }
    > .description {
      padding: 0 80px;
      color: #ffbebc;
      font-size: 22px;
      text-align: center;
    }
  }
  > .close {
    display: block;
    width: 70px;
    height: 70px;
    margin: 60px auto 0 auto;
  }
}
</style>

<template>
  <div class="dialogBidPriceCompleted-container">
    <van-popup v-model="show"
      :close-on-click-overlay="false"
      style="background-color: transparent;width: 100%;">
      <div class="box">
        <img src="./../../assets/images/bargain-success-bg.png"
          alt=""
          class="bg">
        <div class="info-container">
          <p class="title">Congratulations on completing the bargain!</p>
          <ul class="goods-list">
            <li>
              <img src="./../../assets/images/good-large.png"
                alt=""
                class="photo">
              <div class="content">
                <p class="c-title">Casual Large Capacity Copartment Handbag</p>
                <p class="p-1">Rp280.000</p>
                <p class="p-2"><span>Rp</span>0.00</p>
              </div>
            </li>
            <li>
              <img src="./../../assets/images/good-large.png"
                alt=""
                class="photo">
              <div class="content">
                <p class="c-title">Casual Large Capacity Copartment Handbag</p>
                <p class="p-1">Rp280.000</p>
                <p class="p-2"><span>Rp</span>0.00</p>
              </div>
            </li>
            <li>
              <img src="./../../assets/images/good-large.png"
                alt=""
                class="photo">
              <div class="content">
                <p class="c-title">Casual Large Capacity Copartment Handbag</p>
                <p class="p-1">Rp280.000</p>
                <p class="p-2"><span>Rp</span>0.00</p>
              </div>
            </li>
          </ul>
          <div class="btn"
            @click="goBuy">Go buy</div>
          <p class="description">After the purchase is completed, you can view the details in [My] - [My order].</p>
        </div>
        <img src="./../../assets/images/guanbi@2x.png"
          alt=""
          class="close">
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "dialogBidPriceCompleted",
  data() {
    return {
      show: true
    };
  },
  mounted() {
    this.$gaSend({
      eventCategory: "砍价完成浮窗",
      eventAction: "浮窗展示"
    });
  },
  methods: {
    goBuy() {
      this.$gaSend({
        eventCategory: "砍价完成浮窗",
        eventAction: "点击"
      });
    }
  }
};
</script>
