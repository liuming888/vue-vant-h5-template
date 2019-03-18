<style lang="scss" scoped>
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

.info-box {
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
.ctrl-box {
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
    border-radius: 32px;
    color: #d30c05;
    line-height: 64px;
    font-size: 28px;
    text-align: center;
    background: linear-gradient(
      -30deg,
      rgba(211, 12, 5, 1) 0%,
      rgba(255, 54, 47, 1) 100%
    );

    font-size: 30px;
    font-family: Helvetica;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
  > .active {
    color: #fff;
    background-color: #d30c05;
  }
}
</style>


<template>
  <div>
    <div class="order-header">
      <span>{{curDat.create_time}}</span>
      <label>Pending payment</label>
    </div>
    <div class="info-box">
      <img v-lazy="curDat.spu_url"
        alt>
      <div class="info">
        <div class="info-top">
          <p class="title">{{curDat.spu_title}}</p>
          <div class="price">Rp{{curDat.amount}}</div>
        </div>
        <p class="info-description">
         {{curDat.sku_attr}}
        </p>
        <p class="address">Order Number:{{curDat.order_no}}</p>
      </div>
    </div>
    <div class="ctrl-box">
      <div class="pay-time">
        Please
        <span>{{exitTime}}</span> complete payment
      </div>
      <div class="btn"
        @click="goRepaidPay">Go buy</div>
    </div>
  </div>
</template>

<script>
import { repaidOrder } from "@/server/pay.js";
export default {
  props: {
    curDat: {
      type: Object,
      default() {
        return {
          //类型：Object  必有字段  备注：无
          order_no: "mock", //类型：String  必有字段  备注：订单号
          spu_title: "mock", //类型：String  必有字段  备注：商品标题
          sku_attr: "mock", //类型：String  必有字段  备注：sku属性（颜色：黑色，尺码：M）
          amount: "mock" //类型：String  必有字段  备注：订单金额
        };
      }
    }
  },
  computed: {
    exitTime(){
      let {h,p,m}=$util.expiration(curDat.expire_time);
      return `${h}:${p}:${m}`;
    }
  },
  methods: {
    /**
     * @description: 继续支付
     */
    async goRepaidPay() {
      let result = await repaidOrder({
        order_no: curDat.order_no,
        spu_name: curDat.spu_title,
        pay_type: 1
      });
      if (result && result.data) {
        let { pay_url, order_no } = result.data;
        console.log("pay_url: ", pay_url);
        // this.showWaitPaymentDialog.show = true;
        window.open(pay_url);
      }
    }
  }
};
</script>

