<template>
  <div>
    <!-- 未完成订单 -->
    <ul class="all-order"
      v-if="orderListDat.length>0">
      <li class="all-order-item"
        v-for="item of orderListDat"
        :key="item.order_no">
        <pending-payment-order-item :curDat="item" />
      </li>
    </ul>
    <!-- 无订单 -->
    <div class="without-order"
      v-else>
      <img src="~@/assets/images/order-none.png"
        alt
        class="none-file-icon">
      <p>{{$t('myOrder.tidakAdaPesananTerkait')}}</p>
      <div class="btn"
        @click="$router.push('/');">{{$t('myOrder.bukaHalamanBerandaDanLihat')}}</div>
    </div>
  </div>
</template>

<script>
import { orderList } from "@/server/pay.js";
export default {
  components: {
    pendingPaymentOrderItem: resolve =>
      require(["@/components/order/pendingPaymentOrderItem.vue"], resolve)
  },
  data() {
    return {
      orderListDat: [],
      orderPageDat: {
        page_num: 1,
        page_size: 5
      }
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      let result = await orderList({ ...this.orderPageDat, type: 1 });
      if (result && result.data) {
        this.orderListDat = result.data;
      }
    }
  }
};
</script>

