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
  align-items: center;
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
      display: block;
      background: none;
      text-align: left;
      font-size: 24px;
      line-height: 30px;
      color: #888;
      margin-top: 10px;
      margin-bottom: 20px;
      word-break: break-all;
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
      <label>{{$t('myOrder.pendingPayment')}}</label>
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

        <button v-if="curDat.order_no"
          ref="copy2"
          class="address"
          data-clipboard-action="copy"
          :data-clipboard-text="curDat.order_no"
          @click="mx_copyLink">{{$t('myOrder.orderNumber')}}:{{curDat.order_no}}</button>
        <button v-if="curDat.shipment_no"
          ref="copy1"
          class="address"
          data-clipboard-action="copy"
          :data-clipboard-text="curDat.shipment_no"
          @click="mx_copyLink">{{$t('myOrder.shipmentNumber')}}: {{curDat.shipment_no}}</button>

      </div>
    </div>
    <div class="ctrl-box">
      <div class="pay-time">
        {{$t('myOrder.please')}}
        <span>{{exitTime}}</span> {{$t('myOrder.completePayment')}}
      </div>
      <div class="btn"
        @click="goRepaidPay">{{$t('myOrder.goBuy')}}</div>
    </div>
  </div>
</template>

<script>
import { repaidOrder } from "@/server/pay.js";

import copy from "@/mixins/copy.js";
export default {
  mixins: [copy],
  props: {
    curDat: {
      type: Object,
      default() {
        return {
          //类型：Object  必有字段  备注：无
          order_no: "", //类型：String  必有字段  备注：订单号
          spu_title: "", //类型：String  必有字段  备注：商品标题
          sku_attr: "", //类型：String  必有字段  备注：sku属性（颜色：黑色，尺码：M）
          amount: "" //类型：String  必有字段  备注：订单金额
        };
      }
    }
  },
  computed: {
    exitTime() {
      let { h, p, m } = this.$util.expiration(this.curDat.expire_time);
      if (h || p || m) {
        return `${h}:${p}:${m}`;
      } else {
        return "00:00:00";
      }
    }
  },
  methods: {
    /**
     * @description: 继续支付
     */
    async goRepaidPay() {
      // let result = await repaidOrder({
      //   order_no: this.curDat.order_no,
      //   spu_name: this.curDat.spu_title,
      //   pay_type: this.curDat.type||1,
      //   pay_product: this.curDat.product
      // });
      // if (result && result.data) {
      //   let { pay_url, order_no } = result.data;
      //   console.log("pay_url: ", pay_url);
      //   // this.showWaitPaymentDialog.show = true;
      //   // window.open(pay_url);
      //   window.location.href = pay_url;
      // }

      this.$router.push({
        path: "/purchase",
        query: {
          orderNo: this.curDat.order_no,
          bargainId: this.curDat.bargain_id,
          spuId: this.curDat.spu_id
        }
      });
    }
  }
};
</script>

