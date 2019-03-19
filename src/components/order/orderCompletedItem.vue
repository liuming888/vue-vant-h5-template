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
    color: rgba(53, 178, 15, 1);
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
    width: 274px;
    height: 64px;
    color: #d30c05;
    line-height: 64px;
    font-size: 28px;
    text-align: center;
    font-size: 30px;
    font-family: Helvetica;
    font-weight: 400;
    color: rgba(211, 12, 5, 1);
    border: 1px solid rgba(211, 12, 5, 1);
    border-radius: 32px;
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
      <label>Completed</label>
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
      <div class="pay-time"></div>
      <div class="btn">Customer Service</div>
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
          order_no: "", //类型：String  必有字段  备注：订单号
          spu_title: "", //类型：String  必有字段  备注：商品标题
          sku_attr: "", //类型：String  必有字段  备注：sku属性（颜色：黑色，尺码：M）
          amount: "" //类型：String  必有字段  备注：订单金额
        };
      }
    }
  },
  methods: {}
};
</script>

