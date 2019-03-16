<template>
  <div class="order-container">
    <van-tabs
      swipeable
      title-active-color="#D30C05"
      title-inactive-color="#323232"
    >
      <van-tab
        v-for="(item, index) in tabList"
        :title="item"
        :key="index"
      >
        <!-- 所有订单 -->
        <ul
          class="all-order"
          v-if="true"
        >
          <li class="all-order-item">
            <div class="order-header">
              <span>2019-02-27 12:20</span>
              <label>Pending payment</label>
            </div>
            <div class="info-box">
              <img
                src="./../../assets/images/good-large.png"
                alt
              >
              <div class="info">
                <div class="info-top">
                  <p class="title">Casual Large Capacity Copartment Handbag women</p>
                  <div class="price">Rp0.00</div>
                </div>
                <p class="info-description">
                  Color :386
                  &nbsp;
                </p>
                <p class="address">Order Number:854664456666</p>
              </div>
            </div>
            <div class="ctrl-box">
              <div class="pay-time">
                Please
                <span>10:05:30</span> complete payment
              </div>
              <div class="btn">pelanggan</div>
            </div>
          </li>
        </ul>
        <!-- 无订单 -->
        <div
          class="without-order"
          v-if="false"
        >
          <img
            src="@/assets/images/order-none.png"
            alt
            class="none-file-icon"
          >
          <p>Tidak ada pesanan terkait</p>
          <div class="btn">Buka halaman beranda dan lihat</div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";

import { orderList } from "@/server/pay.js";
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data() {
    return {
      tabList: ["Semua", "Pembayaran tertunda", "Kwitansi tertunda"],

      orderList: [
        //类型：Array  必有字段  备注：无
        {
          //类型：Object  必有字段  备注：无
          order_no: "mock", //类型：String  必有字段  备注：订单号
          spu_title: "mock", //类型：String  必有字段  备注：商品标题
          sku_attr: "mock", //类型：String  必有字段  备注：sku属性（颜色：黑色，尺码：M）
          amount: "mock" //类型：String  必有字段  备注：订单金额
        }
      ],
      orderPageDat: {
        page_num: 1,
        page_size: 5
      }
    };
  },
  created() {},
  methods: {
    async init() {
      let result = await orderList({ ...this.orderPageDat, type: 0 });
      if (result && result.data) {
        this.orderList = result.data;
      }
    }
  }
};
</script>
<style lang="scss">
.order-container {
  background: #f9f9f9;
  .van-ellipsis {
    // font-size: 30px;
  }
}
</style>
<style lang="scss" scoped>
.all-order {
  padding: 20px 30px;
  > .all-order-item {
    .order-header {
      height: 70px;
      line-height: 40px;
      border-bottom: 1px solid rgba(242, 242, 242, 1);
      display: flex;
      span {
        display: inline-block;
        width: 300px;
        font-size: 28px;
        color: #323232;
      }
      label {
        flex: 1;
        text-align: right;
        color: #d4160f;
        font-size: 30px;
      }
    }
    background: #fff;
    border-radius: 15px;
    padding: 30px 20px;
    & + .all-order-item {
      margin-top: 20px;
    }
    > .info-box {
      padding: 20px;
      display: flex;
      margin-bottom: 20px;
      border-bottom: 1px solid #f2f2f2;
      > img {
        width: 200px;
        height: 200px;
        margin-right: 20px;
      }
      > .info {
        flex: 1;
        overflow: hidden;
        > .info-top {
          display: flex;
          color: #323232;
          font-size: 28px;
          font-weight: lighter;
          > .title {
            flex: 3;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          > .price {
            flex: 1;
            text-align: right;
          }
        }
        > .info-description,
        > .address {
          font-size: 24px;
          color: #888;
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 40px;
        }
      }
    }
    > .ctrl-box {
      text-align: right;
      display: flex;
      align-items: center;
      > .pay-time {
        flex: 1;
        text-align: left;
        span {
          color: #d4160f;
        }
      }
      > .btn {
        display: inline-block;
        width: 190px;
        height: 64px;
        border: 1px solid rgba(211, 12, 5, 1);
        border-radius: 32px;
        color: #d30c05;
        line-height: 64px;
        font-size: 28px;
        text-align: center;
      }
      > .active {
        color: #fff;
        background-color: #d30c05;
      }
    }
  }
}
.without-order {
  padding: 0 30px;
  text-align: center;
  font-size: 28px;
  color: #888;
  > .none-file-icon {
    width: auto;
    height: 140px;
    margin: 170px 0 70px 0;
  }
  > .btn {
    margin-top: 100px;
    height: 88px;
    line-height: 88px;
    border: 1px solid rgba(211, 12, 5, 1);
    border-radius: 44px;
    color: #d30c05;
    font-size: 32px;
  }
}
</style>

