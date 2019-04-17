<style lang="scss" scoped src="./index.scss"></style>

<template>
  <div class="purchase-container">
    <div class="top-info">
      <user-order-message :messageList="messageList"
        v-if="messageList.length>0" />
    </div>
    <!-- 显示的收货地址 -->
    <div v-if="myAddress && myAddress.id"
      class="y-shipping-address"
      @click="goShippingAddressList">
      <img src="~@/assets/images/position.png"
        class="position">

      <div class="shipping-address-content">
        <div class="top-box">
          <span class="Receiver">
            {{$t('purchase.receiver')}}: {{myAddress.username}}
          </span>

          <span class="phone">{{myAddress.telephone}}</span>
        </div>
        <div class="receiving-address">
          {{$t('purchase.receivingAddress')}}:
          <!--  {{myAddress.address_two}}, -->{{myAddress.address_one}},{{myAddress.city}},{{myAddress.region}},{{myAddress.country}}
        </div>
      </div>

      <van-icon name="arrow"
        style="font-size:22px;color:#888888;" />
    </div>
    <!-- 无收货地址 -->
    <div v-else
      class="no-shipping-address"
      @click="showAddressDialog.show = true">
      <img v-lazy="require('@/assets/images/add.png')"
        class="add-icon">
      <div class="txt">{{$t('purchase.addShippingAddress')}}</div>
      <van-icon name="arrow" />
    </div>

    <img v-lazy="require('@/assets/images/Addressmodification.png')"
      style="width:100vw;height:auto;margin-bottom:50px;">

    <div class="commodity-info">
      <img v-lazy="spu.spu_pics&&spu.spu_pics[0]||require('@/assets/images/add.png')"
        class="commodity-img">

      <div class="commodity-content">
        <div class="commodity-tit">
          {{spu.title}}
        </div>

        <div class="type-num">
          <!-- Color :386 -->
        </div>

        <div class="price-quantity">
          <span class="current-price">
            <b style="font-size:1px;">Rp</b>
            {{bargain_info.bargain_after}}
          </span>

          <span class="original-price">
            Rp{{spu.original_price}}
          </span>

          <span class="commodity-num">
            x1
          </span>
        </div>
      </div>
    </div>

    <ul class="commodity-type">
      <li class="commodity-item"
        v-for="(specItem,index) in specs"
        :key="index">
        <p class="tit">{{specItem.spec_name}}</p>
        <div class="type-box">
          <div class="type-item-box"
            v-for="(specValuesItem,index) in specItem.spu_spec_items"
            :class="{cur:specValuesItem.id==specItem.id}"
            :key="index"
            @click="specItem.id=specValuesItem.id">
            {{specValuesItem.item_name}}
          </div>
        </div>
      </li>
    </ul>

    <ul class="paly-type-list">
      <li class="paly-item"
        v-for="item in payTypes"
        @click="handlePayType(item)"
        :key="item.id">
        <span class="paly-txt">{{item.name}}</span>
        <img class="paly-select-icon"
          :src="currentType.id===item.id?require('@/assets/images/select-fill.png'):require('@/assets/images/select.png')">
      </li>
    </ul>

    <div class="down-box">
      <div class="left-box">
        <div class="l-t-box">
          {{$t('purchase.actualPayment')}}:
          <div class="num-box">
            <b>Rp</b>{{bargain_info.bargain_after||0}}
          </div>
        </div>

        <div class="l-d-box">{{$t('purchase.about')}} ${{bargain_info.bargain_after?(bargain_info.bargain_after/exchangeRateDat.exchange_rate).toFixed(2):0}}</div>
      </div>

      <div class="pay-immediately"
        @click="goPaly">
        {{$t('purchase.placeOder')}}
      </div>
    </div>

    <!-- 商品列表页以组件形式  默认阻止点击穿透 -->
    <div class="dialog-box"
      v-if="showShippingAddressPage"
      @click.stop>
      <shipping-address :showAddressPage.sync="showShippingAddressPage" />
    </div>

    <!-- 弹窗 --------------------------------->
    <dialog-post-add-address :dialogVisible.sync="showAddressDialog"
      showType="add"></dialog-post-add-address>
    <!-- <dialog-wait-payment :dialogVisible.sync="showWaitPaymentDialog"
      @continuePlay="goPaly"
      @playfail="dialogVisible = true" /> -->

    <!-- 支付失败调用的弹窗 -->
    <dialog-default :info="info"
      :dialogVisible.sync="dialogVisible"
      @ok="goRepaidPay">
      <div slot="content"
        class="pay-error">
        <p>{{$t('purchase.harapMembayarSesegeraMungkin')}}</p>
      </div>
    </dialog-default>
  </div>
</template>

<script>
import { Icon, Dialog } from "vant";

import shippingAddress from "../shippingAddress.vue";
import dialogPostAddAddress from "@/components/dialogs/dialogPostAddAddress.vue";
import DialogDefault from "@/components/dialogs/dialogDefault.vue";
import dialogWaitPayment from "@/components/dialogs/dialogWaitPayment.vue";

import loadings from "@/mixins/loadings.js";

import { getInfo, getSpuSpecs } from "@/server/goods.js";
import { getHomeTip } from "@/server/other.js";
import {
  orderCreate,
  repaidOrder,
  getPayType,
  getOrderByBargainId
} from "@/server/pay.js";
import { getMyAddress } from "@/server/user.js";
import { getExchangeRate } from "@/server/finance.js";
import { getBargainInfo } from "@/server/bargain.js";
export default {
  mixins: [loadings],
  components: {
    userOrderMessage: resolve =>
      require(["@/components/userOrderMessage.vue"], resolve), // 用户订单消息播放
    DialogDefault,
    shippingAddress, // 地址列表组件
    dialogPostAddAddress,
    dialogWaitPayment, // 等待用户付款弹窗
    // ...vantCom,
    [Icon.name]: Icon
  },
  data() {
    return {
      messageList: [], // 顶部滚动消息
      spu: {},
      specs: [],
      bargain_info: {},
      bargain_user_info: {},

      paly_id: 1,

      showShippingAddressPage: false, //显示地址列表页
      showAddressDialog: {
        show: false
      },
      showWaitPaymentDialog: {
        show: false
      },
      myAddress: {},
      info: this.$t('purchase.info'),
      dialogVisible: false,

      exchangeRateDat: {
        //类型：Object  必有字段  备注：无
        currency_code: "IDR", //类型：String  必有字段  备注：货币符号
        exchange_rate: 1 //类型：Number  必有字段  备注：汇率
      },
      // 支付类型列表
      payTypes: [],
      // 当前支付类型
      currentType: ""
    };
  },
  created() {
    this.init();
    this.getMyAddressInfo();
    this.curSpuSpecs();
    this.initExchangeRate();

    // 支付失败回调进入的
    if (this.$route.query.payment === "failed") {
      this.dialogVisible = true;
    }
  },
  mounted() {
    document.title = this.$t('purchase.checkOut');

    fbq("track", "AddToCart");
  },
  methods: {
    async init() {
      // let result = await getInfo({ spu_id: this.$route.query.spuId });
      // if (result) {
      //   this.spu = result.data.spu;
      // }
      this.initHomeTip();
      this.initSpuInfo();
      this.initBargainInfo();
      this.getMyAddressInfo();
      this.curSpuSpecs();
      this.initExchangeRate();
      this.getPayType();
      this.initOrderByBargainIdDat(this.$route.query.bargainId);
    },
    async initHomeTip() {
      let result = await getHomeTip();
      if (result && result.data) {
        this.messageList = result.data.home_tips;
        console.log("this.messageList: ", this.messageList);
      }
    },
    /**
     * @description: 根据砍价号获取订单信息  看之前有支付下单没
     */
    async initOrderByBargainIdDat(bargain_id) {
      let result = await getOrderByBargainId({ bargain_id });
      if (result && result.data) {
        if (result.data.can_pay) {
          this.$router.replace({
            query: {
              ...this.$route.query,
              orderNo: result.data.order_no
            }
          });
        }
      }
    },
    // 获取支付渠道信息
    async getPayType() {
      const res = await getPayType();
      this.payTypes = res.data.pay_types;
      this.currentType = this.payTypes[0];
      // 统计
      this.$gaSend({
        eventCategory: "支付_选择支付方式",
        eventAction: "点击"
      });
    },
    // 支付类型选择
    handlePayType(item) {
      this.currentType = item;
    },
    async initSpuInfo() {
      let result = await getInfo({ spu_id: this.$route.query.spuId });
      if (result && result.data) {
        this.spu = result.data.spu;
      }
    },
    async initBargainInfo() {
      let result = await getBargainInfo({
        bargain_id: this.$route.query.bargainId
      });
      if (result && result.data) {
        const { bargain_info, bargain_user_info } = result.data;
        this.bargain_info = bargain_info;
        this.bargain_user_info = bargain_user_info;
      }
    },
    async initExchangeRate() {
      let result = await getExchangeRate({ currency_code: "IDR" });
      if (result && result.data) {
        this.exchangeRateDat = result.data;
      }
    },
    async getMyAddressInfo() {
      const result = await getMyAddress({
        page_size: 10,
        page_num: 1,
        is_default: 1
      });
      if (result && result.data) {
        this.myAddress = result.data.filter(item => item.is_default === 1)[0];
      }
    },
    /**
     * @description: 当前商品规格
     */
    async curSpuSpecs() {
      let result = await getSpuSpecs({ spu_id: this.$route.query.spuId });
      if (result && result.data) {
        this.specs = result.data.map(item => {
          item.id = item.spu_spec_items[0].id;
          return item;
        });
      }
    },
    /**
     * @description: 支付下单接口流程
     */
    async goPaly() {
      this.dialogVisible = false; // 关闭支付失败弹窗

      const { bargain_after } = this.bargain_info;
      if (bargain_after < this.currentType.min_amount) {
        this.$toast(this.$t('purchase.pleaseTryAgainByAlternativePaymentMethod'));
        return;
      }

      fbq("track", "InitiateCheckout");

      if (!this.myAddress.id) {
        Dialog.alert(this.$t('purchase.pleaseChooseAShippingAddressDialog'));
        return;
      }

      let param = {
        address_id: this.myAddress.id,
        spu_id: this.spu.spu_id,
        // pay_type: this.paly_id
        pay_type: this.currentType.type, // 暂时写死
        pay_product: this.currentType.product,
        spu_name: this.spu.title
      };
      let spu_spec_items = "";
      this.specs.forEach(item => {
        spu_spec_items =
          spu_spec_items +
          item.spec_name +
          ":" +
          item.spu_spec_items.find(typeItem => typeItem.id == item.id)
            .item_name +
          " ";
      });
      console.log("spu_spec_items----------", spu_spec_items);

      if (spu_spec_items) {
        param.spu_spec_items = spu_spec_items;
      }

      if (this.$route.query.bargainId) {
        param.bargain_id = this.$route.query.bargainId;
      }
      console.log("param--------------", param);

      if (this.$route.query.orderNo) {
        // 跳转过来继续支付的
        this.goRepaidPay();
      } else {
        let result = await orderCreate(param);
        if (result && result.data) {
          fbq("track", "Purchase", { value: 0.0, currency: "USD" });

          let { pay_url, order_no } = result.data;
          console.log("pay_url: ", pay_url);
          this.showWaitPaymentDialog.show = true;

          this.mx_showLoad();

          window.location.href = pay_url;

          // this.mx_closeLoad();
        }
      }
    },
    /**
     * @description: 继续支付
     */
    async goRepaidPay() {
      const { bargain_after } = this.bargain_info;
      if (bargain_after < this.currentType.min_amount) {
        this.$toast(this.$t('purchase.pleaseTryAgainByAlternativePaymentMethod'));
        return;
      }

      let result = await repaidOrder({
        order_no: this.$route.query.orderNo,
        spu_name: this.spu.title,
        pay_type: this.currentType.type,
        pay_product: this.currentType.product
      });
      if (result && result.data) {
        let { pay_url, order_no } = result.data;
        console.log("pay_url: ", pay_url);
        this.showWaitPaymentDialog.show = true;

        this.mx_showLoad();

        window.location.href = pay_url;

        //  this.mx_closeLoad();
      }
    },
    goShippingAddressList() {
      this.showShippingAddressPage = true;
    }
  },
  watch: {
    showShippingAddressPage(val) {
      if (!val) {
        this.getMyAddressInfo();
      }
    },
    "showAddressDialog.show"(val) {
      if (!val) {
        this.getMyAddressInfo();
      }
    },
    dialogVisible(val) {
      if (val) {
        // 统计
        this.$gaSend({
          eventCategory: "支付失败页面",
          eventAction: "页面展示"
        });
      }
    }
  }
};
</script>

