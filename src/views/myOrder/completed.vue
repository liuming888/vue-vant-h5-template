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
    <div class="alertBox"
      v-if="contactVisible">
      <div class="alertWrap">
        <h1>{{$t('myOrder.contactUsBy')}}</h1>
        <ul>
          <li class="alertWrap-item">facebook fanpage : @Lovingistarbuy</li>
          <li class="alertWrap-item">Wechat : ISTARBUY</li>
          <li class="alertWrap-item">Line : ISTARBUY</li>
        </ul>
        <div @click="contactVisible=false">{{$t('myOrder.iKnow')}}</div>
      </div>
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
      },
      contactVisible:false
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
      this.contactVisible = true;
    }
  }
};
</script>

