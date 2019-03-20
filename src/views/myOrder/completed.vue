<template>
  <div>
    <!-- 未完成订单 -->
    <ul class="all-order"
      v-if="orderList.length>0">
      <li class="all-order-item"
        v-for="item of orderList"
        :key="item.order_no">
        <order-completed-item :curDat="item" />
      </li>
    </ul>
    <!-- 无订单 -->
    <div class="without-order"
      v-if="false">
      <img src="@/assets/images/order-none.png"
        alt
        class="none-file-icon">
      <p>Tidak ada pesanan terkait</p>
      <div class="btn">Buka halaman beranda dan lihat</div>
    </div>
  </div>
</template>

<script>
import orderCompletedItem from "@/components/order/orderCompletedItem.vue";

import { orderList } from "@/server/pay.js";
export default {
  components: {
    orderCompletedItem
  },
  data() {
    return {
      orderList: [],
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
      let result = await orderList({ ...this.orderPageDat, type: 3 });
      if (result && result.data) {
        this.orderList = result.data;
      }
    }
  }
};
</script>

