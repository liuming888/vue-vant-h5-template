<template>
  <div>
    <!-- 所有订单 -->
    <ul class="all-order"
      v-if="orderList.length>0">
      <template v-for="item of orderList">
        <li class="all-order-item"
          :key="item.order_no+'1'" v-if="item.order_status==1">
          <pending-payment-order-item :curDat="item"
            :key="item.order_no" />
        </li>
        <li class="all-order-item"
          :key="item.order_no+'2'"  v-if="item.order_status==2||item.order_status==3">
          <order-completed-item :curDat="item"
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
      }
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
    }
  }
};
</script>

