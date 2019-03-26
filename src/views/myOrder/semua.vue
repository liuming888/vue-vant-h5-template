<template>
  <div>
    <!-- 所有订单 -->
    <ul class="all-order"
      v-if="orderList.length>0">
      <template v-for="item of orderList">
        <li class="all-order-item"
          :key="item.order_no+'1'"
          v-if="item.order_status==1">
          <pending-payment-order-item :curDat="item"
            :key="item.order_no" />
        </li>
        <li class="all-order-item"
          :key="item.order_no+'2'"
          v-if="item.order_status==2||item.order_status==3">
          <order-completed-item :curDat="item"
            @on-customer-service="handleCustomerService"
            :key="item.order_no" />
        </li>
      </template>
    </ul>
    <!-- 无订单 -->
    <div class="without-order"
      v-if="orderList.length<1">
      <img src="@/assets/images/order-none.png"
        alt
        class="none-file-icon">
      <p>Tidak ada pesanan terkait</p>
      <div class="btn">Buka halaman beranda dan lihat</div>
    </div>
    <!-- 联系我们弹窗 -->
    <div class="alertBox"
      v-if="contactVisible">
      <div class="alertWrap">
        <h1>Contact us by</h1>
        <ul>
          <li class="alertWrap-item">facebook fanpage : @Lovingistarbuy</li>
          <li class="alertWrap-item">Wechat : @Istarbuy</li>
          <li class="alertWrap-item">Line : @istarbuy</li>
        </ul>
        <div @click="contactVisible=false">I know</div>
      </div>
    </div>
  </div>
</template>

<script>
import pendingPaymentOrderItem from "@/components/order/pendingPaymentOrderItem.vue";
import orderCompletedItem from "@/components/order/orderCompletedItem.vue";
import { orderList } from "@/server/pay.js";
export default {
  components: {
    pendingPaymentOrderItem,
    orderCompletedItem
  },
  data() {
    return {
      orderList: [
        //类型：Array  必有字段  备注：无
        {
          //类型：Object  必有字段  备注：无
          order_no: "", //类型：String  必有字段  备注：订单号
          spu_title: "", //类型：String  必有字段  备注：商品标题
          sku_attr: "", //类型：String  必有字段  备注：sku属性（颜色：黑色，尺码：M）
          amount: "", //类型：String  必有字段  备注：订单金额
          create_time: "", //类型：String  必有字段  备注：创建时间
          expire_time: 1, //类型：Number  必有字段  备注：过期时间，毫秒
          order_status: "" //类型：String  必有字段  备注：订单状态（1：待支付 2：已支付 3：已发货 4：订单超时失效）
        }
      ],
      orderPageDat: {
        page_num: 1,
        page_size: 10
      },
      //联系我们弹窗
      contactVisible: false
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      let result = await orderList({ ...this.orderPageDat, type: 0 });
      if (result && result.data) {
        this.orderList = result.data;
      }
    },
    // 联系我们弹窗
    handleCustomerService() {
      this.contactVisible = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.alertBox {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.5);
  .alertWrap {
    width: 610px;
    height: 460px;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    .alertWrap-item {
      height: 45px;
      text-indent: 67px;
      line-height: 45px;
      background-repeat: no-repeat;
      background-size: auto 100%;
      background-position: 30px center;
      &:nth-of-type(1) {
        background-image: url("../../assets/images/facbookIcon.png");
      }
      &:nth-of-type(2) {
        background-image: url("../../assets/images/weixinIcon.png");
      }
      &:nth-of-type(3) {
        background-image: url("../../assets/images/lineIcon.png");
      }
    }
    h1 {
      height: 34px;
      font-size: 36px;
      font-weight: bold;
      color: rgba(50, 50, 50, 1);
      line-height: 40px;
      margin: 40px 0;
      text-align: center;
    }
    li {
      font-size: 28px;
      color: #323232;
      margin-top: 30px;
      padding: 0 20px;
      white-space: nowrap;

      &:first-of-type {
        margin-top: 0;
      }
    }
    div {
      font-size: 32px;
      font-weight: bold;
      color: rgba(211, 12, 5, 1);
      height: 100px;
      line-height: 100px;
      text-align: center;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-top: 1px solid rgba(242, 242, 242, 1);
    }
  }
}
</style>

