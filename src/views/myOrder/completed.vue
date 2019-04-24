<template>
  <div>
    <!-- 未完成订单 -->
    <ul class="all-order"
      v-if="orderList.length>0">
      <li class="all-order-item"
        v-for="item of orderList"
        :key="item.order_no">
        <order-completed-item :curDat="item"  @on-customer-service="handleCustomerService" :key="item.order_no"/>
      </li>
    </ul>
    <!-- 无订单 -->
    <div class="without-order"
      v-else>
      <img src="@/assets/images/order-none.png"
        alt
        class="none-file-icon">
      <p>{{$t('myOrder.tidakAdaPesananTerkait')}}</p>
      <div class="btn"  @click="$router.push('/');">{{$t('myOrder.bukaHalamanBerandaDanLihat')}}</div>
    </div>

     <!-- 联系我们弹窗 -->
     <dialog-contact-us :dialogVisible.sync="contactVisible"/>
  </div>
</template>

<script>
import { orderList } from "@/server/pay.js";
export default {
  components: {
    orderCompletedItem:resolve=>require(['@/components/order/orderCompletedItem.vue'],resolve),
     dialogContactUs: resolve =>
      require(["@/components/dialogs/dialogContactUs.vue"], resolve)  //联系我们弹窗
  },
  data() {
    return {
      orderList: [],
      orderPageDat: {
        page_num: 1,
        page_size: 5
      },
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
      let result = await orderList({ ...this.orderPageDat, type: 2 });
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

