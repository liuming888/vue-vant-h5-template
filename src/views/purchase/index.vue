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
          Receiving address: {{myAddress.address_two}},{{myAddress.address_one}},{{myAddress.city}},{{myAddress.region}},{{myAddress.country}}
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
        v-for="(item,idx) in 2"
        @click="paly_id=idx"
        :key="item">
        <span class="paly-txt">Papal payment</span>
        <img class="paly-select-icon"
          :src="paly_id==idx?require('@/assets/images/select-fill.png'):require('@/assets/images/select.png')">
      </li>
    </ul>

    <div class="down-box">
      <div class="left-box">
        Actual payment:
        <div class="num-box">
          <b>Rp</b>{{spu.price}}
        </div>
      </div>

      <div class="pay-immediately"
        @click="dialogVisible = true">
        pay immediately
      </div>
    </div>

    <!-- 商品列表页以组件形式  默认阻止点击穿透 -->
    <div class="dialog-box"
      v-if="showShippingAddressPage"
      @click.stop="abc=1">
      <shipping-address :showAddressPage.sync="showShippingAddressPage" />
    </div>

    <!-- 弹窗 -->
    <dialog-post-add-address :dialogVisible.sync="showAddressDialog"></dialog-post-add-address>
    <!-- 支付失败调用的弹窗 -->
    <dialog-default :info="info"
      :dialogVisible.sync="dialogVisible"
      @ok="dialogVisible = false">
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
const obj = { Icon };
const vantCom = {};
for (let k in obj) {
  vantCom[obj[k].name] = obj[k];
}

import { getInfo, getSpuSpecs } from "@/server/goods.js";
import { orderCreate } from "@/server/pay.js";
import { getMyAddress } from "@/server/user.js";
export default {
  components: {
    DialogDefault,
    shippingAddress, // 地址列表组件
    dialogPostAddAddress,
    ...vantCom
  },
  data() {
    return {
      spu: {
        //类型：Object  必有字段  备注：商品
        spu_id: 1, //类型：Number  必有字段  备注：商品id
        title: "mock", //类型：String  必有字段  备注：商品标题
        spu_pics: [
          //类型：Array  必有字段  备注：图片地址列表
          "mock" //类型：String  必有字段  备注：无
        ],
        // specs: [
        //   //类型：Array  必有字段  备注：规格列表
        //   {
        //     //类型：Object  必有字段  备注：无
        //     spec_name: "mock", //类型：String  必有字段  备注：规格名
        //     spec_id: "mock", //类型：String  必有字段  备注：规格id
        //     spec_values: [
        //       //类型：Array  必有字段  备注：规格列表
        //       "mock" //类型：String  必有字段  备注：无
        //     ]
        //   }
        // ],
        price: "mock", //类型：String  必有字段  备注：商品售价
        original_price: "mock", //类型：String  必有字段  备注：原价
        desp: "mock", //类型：String  必有字段  备注：商品详情描述
        expire_ttl: "mock" //类型：String  必有字段  备注：商品砍价过期时间（剩余的时间）单位：秒
      },
      specs: [
        // 备注：规格列表
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
            },
            {
              //类型：Object  必有字段  备注：无
              id: 2, //类型：Number  必有字段  备注：规格参考值id（下单，需要上报服务端）
              spec_id: 1, //类型：Number  必有字段  备注：规格类id
              item_name: "h色", //类型：String  必有字段  备注：规格参考值名称
              seq: 10 //类型：Number  必有字段  备注：无
            },
            {
              //类型：Object  必有字段  备注：无
              id: 3, //类型：Number  必有字段  备注：规格参考值id（下单，需要上报服务端）
              spec_id: 1, //类型：Number  必有字段  备注：规格类id
              item_name: "l色", //类型：String  必有字段  备注：规格参考值名称
              seq: 10 //类型：Number  必有字段  备注：无
            }
          ]
        },
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
            },
            {
              //类型：Object  必有字段  备注：无
              id: 2, //类型：Number  必有字段  备注：规格参考值id（下单，需要上报服务端）
              spec_id: 1, //类型：Number  必有字段  备注：规格类id
              item_name: "h色", //类型：String  必有字段  备注：规格参考值名称
              seq: 10 //类型：Number  必有字段  备注：无
            },
            {
              //类型：Object  必有字段  备注：无
              id: 3, //类型：Number  必有字段  备注：规格参考值id（下单，需要上报服务端）
              spec_id: 1, //类型：Number  必有字段  备注：规格类id
              item_name: "l色", //类型：String  必有字段  备注：规格参考值名称
              seq: 10 //类型：Number  必有字段  备注：无
            }
          ]
        }
      ],

      paly_id: 0,

      showShippingAddressPage: false, //显示地址列表页
      showAddressDialog: {
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
      dialogVisible: false
    };
  },
  created() {
    this.init();
    this.getMyAddressInfo();
    this.curSpuSpecs();
  },
  methods: {
    async init() {
      let result = await getInfo({ spu_id: this.$route.query.spuId });
      if (result) {
        this.spu = result.data.spu;
      }
    },
    async getMyAddressInfo() {
      const result = await getMyAddress({
        page_size: 10,
        page_num: 1,
        is_default: 1
      });
      if (result && result.data) {
        this.myAddress = result.data.filter(
          item => item.is_default === 1
        )[0];
      }
    },
    /**
     * @description: 当前商品规格
     */
    async curSpuSpecs() {
      let result = await getSpuSpecs({ spu_id: this.$route.query.spuId });
      if (result && result.data) {
        this.specs = result.data;
      }
    },
    /**
     * @description: 支付下单接口流程
     */
    async goPaly() {
      let param = {
        specs: spu.specs,
        address_id: "地址id",
        spu_id: spu.spu_id,
        pay_type: "支付方式"
      };
      if (this.$route.query.bargain_id) {
        param = { ...param, bargain_id: this.$route.query.bargain_id };
      }
      let result = await orderCreate(param);
      if (result) {
      }
    },
    goShippingAddressList() {
      this.showShippingAddressPage=true;
    }
  },
  watch:{
    showShippingAddressPage(val){
      if(!val){
        console.log("66666666666666");
        this.getMyAddressInfo();
      }
    }
  }
};
</script>

