<style lang="scss" scoped>
.purchase-container {
  width: 100vw;
  background: #f9f9f9;
  min-height: calc(100vh - 1.24rem);
  box-sizing: border-box;
  padding-bottom: 50px;
  overflow: hidden;
}

.top-info {
  height: 48px;
  padding: 0 30px;
  box-align: border-box;
  background: rgb(231, 212, 212);
  display: flex;
  align-items: center;

  .info-box {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: Helvetica;
    font-weight: 400;
    color: rgba(51, 32, 31, 1);

    .head-portrait {
      width: 38px;
      height: 38px;
      margin-right: 10px;
    }
  }
}

.no-shipping-address {
  width: 100%;
  height: 93px;
  padding: 0 30px;
  box-align: border-box;
  display: flex;
  align-items: center;
  position: relative;
  background: #fff;

  .add-icon {
    width: 44px;
    height: 44px;
    margin-right: 20px;
  }

  .txt {
    font-size: 28px;
    font-family: Helvetica;
    font-weight: 400;
    color: rgba(50, 50, 50, 1);
    margin-right: 195px;
  }
}

.y-shipping-address {
  width: 100%;
  height: 169px;
  background: #fff;
  padding: 30px;
  box-align: border-box;
  display: flex;
  align-items: center;

  .position {
    width: 32px;
    height: 40px;
  }

  .shipping-address-content {
    width: 590px;
    height: 100%;
    padding: 50px 30px 0 20px;
    box-align: border-box;
    font-size: 28px;
    font-family: Helvetica;
    font-weight: 400;
    color: rgba(50, 50, 50, 1);

    .top-box {
      width: 100%;
      display: flex;
      margin-bottom: 20px;

      .phone {
        flex: 1;
        text-align: right;
      }
    }
  }
}

.commodity-info {
  background: #f9f9f9;
  width: 100%;
  height: 238px;
  padding: 13px 30px;
  box-align: border-box;
  display: flex;
  margin-bottom: 31px;

  .commodity-img {
    width: 220px;
    height: auto;
    margin-right: 24px;
  }

  .commodity-content {
    .commodity-tit {
      padding-top: 15px;
      width: 450px;
      font-size: 28px;
      font-family: Helvetica;
      font-weight: 400;
      color: rgba(50, 50, 50, 1);
      line-height: 37px;
      margin-bottom: 10px;
    }

    .type-num {
      height: 19px;
      font-size: 24px;
      font-family: Helvetica;
      font-weight: 400;
      color: rgba(136, 136, 136, 1);
      margin-bottom: 54px;
    }

    .price-quantity {
      display: flex;
      .current-price {
        font-size: 42px;
        font-weight: 500;
        color: rgba(211, 12, 5, 1);
        line-height: 37px;
        margin-right: 21px;
      }

      .original-price {
        font-size: 24px;
        font-weight: 500;
        text-decoration: line-through;
        color: rgba(136, 136, 136, 1);
      }

      .commodity-num {
        flex: 1;
        text-align: right;
      }
    }
  }
}

.commodity-type {
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  background: #fff;
  margin-bottom: 20px;

  .commodity-item {
    width: 100%;
    margin-bottom: 45px;

    .tit {
      font-size: 28px;
      font-weight: 400;
      color: rgba(50, 50, 50, 1);
      margin-bottom: 30px;
    }

    .type-box {
      display: flex;
      flex-wrap: wrap;
      //   align-items: center;

      .type-item-box {
        margin-right: 30px;
        width: 110px;
        height: 64px;
        text-align: center;
        line-height: 64px;
        background: rgba(245, 245, 245, 1);
        border-radius: 32px;
        font-size: 24px;
        font-family: Helvetica;
        font-weight: 400;
        color: rgba(50, 50, 50, 1);
        margin-bottom: 26px;

        &.cur {
          background: rgba(255, 251, 251, 1);
          border: 1px solid rgba(211, 12, 5, 1);
          color:rgba(211, 12, 5, 1);
        }

        &:nth-of-type(5n) {
          margin-right: 0;
        }
      }
    }
  }
}

.paly-type-list {
  width: 100%;
  padding: 0 30px;
  box-align: border-box;
  font-size: 28px;
  font-family: Helvetica;
  font-weight: 400;
  color: rgba(50, 50, 50, 1);
  background: #fff;

  .paly-item {
    width: 100%;
    height: 92px;
    line-height: 92px;
    overflow: hidden;
    margin-bottom: 62px;

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }

    .paly-select-icon {
      float: right;
      width: 30px;
      height: 30px;
      position: relative;
      top: 36px;
      left: -6px;
    }
  }
}

.down-box {
  width: 100vw;
  height: 98px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: pink;
  display: flex;

  .left-box {
    width: 465px;
    line-height: 98px;
    background: #fff;
    padding-left: 30px;
    padding-top: 12px;
    box-sizing: border-box;
    font-size: 24px;
    display: flex;

    .num-box {
      margin-left: 10px;
      font-size: 50px;
      color: #d30c05;
      vertical-align: bottom;
      font-weight: 500;
      position: relative;
      top: -12px;

      b {
        font-size: 20px;
        font-weight: 400;
      }
    }
  }

  .pay-immediately {
    flex: 1;
    height: 98px;
    line-height: 98px;
    text-align: center;
    background: linear-gradient(
      90deg,
      rgba(211, 12, 5, 1) 0%,
      rgba(246, 78, 1, 1) 100%
    );
    font-size: 32px;
    font-family: Helvetica;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
}
</style>

<template>
  <div class="purchase-container">
    <div class="top-info">
      <div class="info-box">
        <img v-lazy="require('@/assets/images/btn-1.png')"
          class="head-portrait">
        <span class="info-txt">Michelle got a freebie just now</span>
      </div>
    </div>

    <!-- 无收货地址 -->
    <!-- <div class="no-shipping-address">
      <img v-lazy="require('@/assets/images/add.png')"
        class="add-icon">
      <div class="txt">Tambahkan alamat secara manual</div>
      <van-icon name="arrow" />
    </div> -->

    <!-- 显示的收货地址 -->
    <div class="y-shipping-address">
      <img src="~@/assets/images/position.png"
        class="position">

      <div class="shipping-address-content">
        <div class="top-box">
          <span class="Receiver">
            Receiver: duoduo
          </span>

          <span class="phone">13502866688</span>
        </div>
        <div class="receiving-address">
          Receiving address: Xintai Technology Building,Tianhe District, Guangzhou
        </div>
      </div>

      <van-icon name="arrow"
        style="font-size:22px;color:#888888;" />
    </div>

    <img v-lazy="require('@/assets/images/Addressmodification.png')"
      style="width:100vw;height:auto;margin-bottom:50px;">

    <div class="commodity-info">
      <img v-lazy="require('@/assets/images/add.png')"
        class="commodity-img">

      <div class="commodity-content">
        <div class="commodity-tit">
          Casual Large Capacity Copartment Handbag women
        </div>

        <div class="type-num">
          Color :386
        </div>

        <div class="price-quantity">
          <span class="current-price">
            <b style="font-size:1px;">Rp</b>
            0.00
          </span>

          <span class="original-price">
            Rp299.000
          </span>

          <span class="commodity-num">
            x1
          </span>
        </div>
      </div>
    </div>

    <ul class="commodity-type">
      <li class="commodity-item"
        v-for="item in 2"
        :key="item">
        <p class="tit">Warna</p>
        <div class="type-box">
          <div class="type-item-box"
            :class="{cur:item==1}"
            v-for="item in 6"
            :key="item">
            386
          </div>
        </div>
      </li>
    </ul>

    <ul class="paly-type-list">
      <li class="paly-item"
        v-for="item in 2"
        :key="item">
        <span class="paly-txt">Papal payment</span>
        <img class="paly-select-icon"
          :src="item==1?require('@/assets/images/select.png'):require('@/assets/images/select-fill.png')">
      </li>
    </ul>

    <div class="down-box">
      <div class="left-box">
        Actual payment:
        <div class="num-box">
          <b>Rp</b>0.00
        </div>
      </div>

      <div class="pay-immediately">
        pay immediately
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
const obj = { Icon };
const vantCom = {};
for (let k in obj) {
  vantCom[obj[k].name] = obj[k];
}
export default {
  components: {
    ...vantCom
  }
};
</script>

