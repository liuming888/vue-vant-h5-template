<style lang="scss" scoped src="./index.scss"></style>

<template>
  <div class="purchase-container">
    <div class="top-info">
      <div class="info-box">
        <img v-lazy="require('@/assets/images/btn-1.png')"
          class="head-portrait">
        <span class="info-txt">Michelle got a freebie just now</span>
      </div>
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
            Receiver: {{myAddress.username}}
          </span>

          <span class="phone">{{myAddress.telephone}}</span>
        </div>
        <div class="receiving-address">
          Receiving address:
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
      <div class="txt">Tambahkan alamat secara manual</div>
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
            {{spu.price}}
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
        v-for="(item,idx) in 1"
        @click="paly_id=item"
        :key="idx">
        <span class="paly-txt">Papal payment</span>
        <img class="paly-select-icon"
          :src="paly_id==item?require('@/assets/images/select-fill.png'):require('@/assets/images/select.png')">
      </li>
    </ul>

    <div class="down-box">
      <div class="left-box">
        <div class="l-t-box">
          Actual payment:
          <div class="num-box">
            <b>$</b>{{spu.price}}
          </div>
        </div>

        <div class="l-d-box">About Rp{{spu.price/exchangeRateDat.exchange_rate}}</div>
      </div>

      <!-- <div class="pay-immediately"
        @click="dialogVisible = true">
        pay immediately
      </div> -->
      <div class="pay-immediately"
        @click="goPaly">
        pay immediately
      </div>
    </div>

    <!-- 商品列表页以组件形式  默认阻止点击穿透 -->
    <div class="dialog-box"
      v-if="showShippingAddressPage"
      @click.stop="abc=1">
      <shipping-address :showAddressPage.sync="showShippingAddressPage" />
    </div>

    <!-- 弹窗 --------------------------------->
    <dialog-post-add-address :dialogVisible.sync="showAddressDialog"></dialog-post-add-address>
    <dialog-wait-payment :dialogVisible.sync="showWaitPaymentDialog"
      @continuePlay="goPaly"
      @playfail="dialogVisible = true" />

    <!-- 支付失败调用的弹窗 -->
    <dialog-default :info="info"
      :dialogVisible.sync="dialogVisible"
      @ok="goRepaidPay">
      <div slot="content"
        class="pay-error">
        <p>Pesanan pembayaran akan kedaluwarsa dalam waktu dekat, harap membayar sesegera mungkin</p>
      </div>
    </dialog-default>
  </div>
</template>

<script>
import { Icon } from "vant";

import shippingAddress from "../shippingAddress.vue";
import dialogPostAddAddress from "@/components/dialogs/dialogPostAddAddress.vue";
import DialogDefault from "@/components/dialogs/dialogDefault.vue";
import dialogWaitPayment from "@/components/dialogs/dialogWaitPayment.vue";
const obj = { Icon };
const vantCom = {};
for (let k in obj) {
  vantCom[obj[k].name] = obj[k];
}

import { getInfo, getSpuSpecs } from "@/server/goods.js";
import { orderCreate, repaidOrder } from "@/server/pay.js";
import { getMyAddress } from "@/server/user.js";
import { getExchangeRate } from "@/server/finance.js";
export default {
  components: {
    DialogDefault,
    shippingAddress, // 地址列表组件
    dialogPostAddAddress,
    dialogWaitPayment, // 等待用户付款弹窗
    ...vantCom
  },
  data() {
    return {
      spu: {
        //类型：Object  必有字段  备注：商品
        spu_id: 1, //类型：Number  必有字段  备注：商品id
        title: "mock", //类型：String  必有字段  备注：商品标题
        spu_pics: [],
        price: "mock", //类型：String  必有字段  备注：商品售价
        original_price: "mock", //类型：String  必有字段  备注：原价
        desp: "mock", //类型：String  必有字段  备注：商品详情描述
        expire_ttl: "mock" //类型：String  必有字段  备注：商品砍价过期时间（剩余的时间）单位：秒
      },
      specs: [
        /* 
        {
          //类型：Object  必有字段  备注：无
          id: 1, //类型：Number  必有字段  备注：无
          spu_id: 1, //类型：Number  必有字段  备注：商品id
          spec_name: "颜色", //类型：String  必有字段  备注：规格类名称
          seq: 10, //类型：Number  必有字段  备注：无
          create_time: "2019-03-10 00:29:27", //类型：String  必有字段  备注：无
          update_time: "2019-03-10 00:37:50", //类型：String  必有字段  备注：无
          spu_spec_items: [
            //类型：Array  必有字段  备注：规格可选参考值列表
            {
              //类型：Object  必有字段  备注：无
              id: 1, //类型：Number  必有字段  备注：规格参考值id（下单，需要上报服务端）
              spec_id: 1, //类型：Number  必有字段  备注：规格类id
              item_name: "红色", //类型：String  必有字段  备注：规格参考值名称
              seq: 10 //类型：Number  必有字段  备注：无
            }
          ]
        }
       */
      ],

      paly_id: 1,

      showShippingAddressPage: false, //显示地址列表页
      showAddressDialog: {
        show: false
      },
      showWaitPaymentDialog: {
        show: false
      },
      myAddress: {
        //类型：Object  必有字段  备注：无
        username: "mock", //类型：String  必有字段  备注：用户名
        telephone: "mock", //类型：String  必有字段  备注：手机号
        id: 1, //类型：Number  必有字段  备注：id
        address_one: "mock", //类型：String  必有字段  备注：一级地址
        address_two: "mock", //类型：String  必有字段  备注：二级地址
        is_default: 1, //类型：Number  必有字段  备注：是否默认地址（1：默认 0：常规）
        email: "mock", //类型：String  必有字段  备注：无
        country: "mock", //类型：String  必有字段  备注：无
        region: "mock", //类型：String  必有字段  备注：无
        city: "mock", //类型：String  必有字段  备注：无
        zip: "mock" //类型：String  必有字段  备注：无
      },
      info: {
        content: "Konfirmasikan untuk melunasi?",
        cancleText: "Menyerah",
        okText: "Terus bayar"
      },
      dialogVisible: false,

      exchangeRateDat: {
        //类型：Object  必有字段  备注：无
        currency_code: "IDR", //类型：String  必有字段  备注：货币符号
        exchange_rate: 1 //类型：Number  必有字段  备注：汇率
      }
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
  methods: {
    async init() {
      let result = await getInfo({ spu_id: this.$route.query.spuId });
      if (result) {
        this.spu = result.data.spu;
      }
    },
    async initExchangeRate() {
      let result = await getExchangeRate({ currency_code: "IDR" });
      if (result && result.data) {
        this.exchangeRateDat=result.data;
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

      // let spuSpecItems = {};
      let spu_spec_items = "";
      this.specs.forEach(item => {
        spu_spec_items =
          spu_spec_items +
          item.spec_name +
          ":" +
          item.spu_spec_items.find(typeItem => typeItem.id == item.id)
            .item_name +
          " ";
        // spuSpecItems[item.spec_name]=item.spu_spec_items.find(typeItem=>typeItem.id==item.id).item_name;
      });
      // spu_spec_items=JSON.stringify(spuSpecItems);
      console.log("spu_spec_items----------", spu_spec_items);
      let param = {
        spu_spec_items,
        address_id: this.myAddress.id,
        spu_id: this.spu.spu_id,
        // pay_type: this.paly_id
        pay_type: 1,
        spu_name: this.spu.title
      };
      if (this.$route.query.bargainId) {
        param = { ...param, bargain_id: this.$route.query.bargainId };
      }
      console.log("param--------------", param);
      let result = await orderCreate(param);
      if (result && result.data) {
        let { pay_url, order_no } = result.data;
        console.log("pay_url: ", pay_url);
        this.showWaitPaymentDialog.show = true;
        window.open(pay_url);
        // window.location.href=pay_url;
      }
    },
    /**
     * @description: 继续支付
     */
    async goRepaidPay() {
      let result = await repaidOrder({
        order_no: this.$route.query.orderNo,
        spu_name: this.spu.title,
        pay_type: 1
      });
      if (result && result.data) {
        let { pay_url, order_no } = result.data;
        console.log("pay_url: ", pay_url);
        this.showWaitPaymentDialog.show = true;
        window.open(pay_url);
      }
    },
    goShippingAddressList() {
      this.showShippingAddressPage = true;
    }
  },
  watch: {
    showShippingAddressPage(val) {
      if (!val) {
        console.log("66666666666666");
        this.getMyAddressInfo();
      }
    }
  }
};
</script>

