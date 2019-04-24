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
    <div v-else
      class="without-order">
      <img src="@/assets/images/order-none.png"
        alt
        class="none-file-icon">
      <p>{{$t('myOrder.tidakAdaPesananTerkait')}}</p>
      <div class="btn"
        @click="$router.push('/');">{{$t('myOrder.bukaHalamanBerandaDanLihat')}}</div>
    </div>

    <!-- 弹窗 -->
    <dialog-contact-us :dialogVisible.sync="contactVisible"/>
  </div>
</template>

<script>
import { orderList } from "@/server/pay.js";
export default {
  components: {
    pendingPaymentOrderItem: resolve => 
      require(["@/components/order/pendingPaymentOrderItem.vue"].resolve),  // 待完成
    orderCompletedItem: resolve =>
      request(["@/components/order/orderCompletedItem.vue"], resolve), // 已完成
    dialogContactUs: resolve =>
      require(["@/components/dialogs/dialogContactUs.vue"], resolve)  //联系我们弹窗
  },
  data() {
    return {
      orderList: [],
      orderPageDat: {
        page_num: 1,
        page_size: 10
      },
      //联系我们弹窗
      contactVisible:{
        show:false
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
    },
    // 联系我们弹窗
    handleCustomerService() {
      this.contactVisible.show = true;
    }
  }
};
</script>


