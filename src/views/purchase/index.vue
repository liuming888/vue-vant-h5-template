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

    <!-- 无收货地址 -->
    <!-- <div class="no-shipping-address">
      <img v-lazy="require('@/assets/images/add.png')"
        class="add-icon">
      <div class="txt">Tambahkan alamat secara manual</div>
      <van-icon name="arrow" />
    </div> -->

    <!-- 显示的收货地址 -->
    <div class="y-shipping-address">
      <img src="~@/assets/images/position.png"
        class="position">

      <div class="shipping-address-content">
        <div class="top-box">
          <span class="Receiver">
            Receiver: duoduo
          </span>

          <span class="phone">13502866688</span>
        </div>
        <div class="receiving-address">
          Receiving address: Xintai Technology Building,Tianhe District, Guangzhou
        </div>
      </div>

      <van-icon name="arrow"
        style="font-size:22px;color:#888888;" />
    </div>

    <img v-lazy="require('@/assets/images/Addressmodification.png')"
      style="width:100vw;height:auto;margin-bottom:50px;">

    <div class="commodity-info">
      <img v-lazy="spu.pic_urls&&spu.pic_urls[0]||require('@/assets/images/add.png')"
        class="commodity-img">

      <div class="commodity-content">
        <div class="commodity-tit">
          {{spu.title}}
        </div>

        <div class="type-num">
          Color :386
        </div>

        <div class="price-quantity">
          <span class="current-price">
            <b style="font-size:1px;">Rp</b>
            0.00
          </span>

          <span class="original-price">
            Rp299.000
          </span>

          <span class="commodity-num">
            x1
          </span>
        </div>
      </div>
    </div>

    <ul class="commodity-type">
      <li class="commodity-item"
        v-for="(specItem,index) in spu.specs"
        :key="index">
        <p class="tit">{{specItem.spec_name}}</p>
        <div class="type-box">
          <div class="type-item-box"
            v-for="(specValuesItem,index) in specItem.spec_values"
            :class="{cur:specItem.spec_id==index}"
            :key="specValuesItem"
            @click="specItem.spec_id=index">
            {{specValuesItem}}
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
          <b>Rp</b>0.00
        </div>
      </div>

      <div class="pay-immediately"
        @click="goPaly">
        pay immediately
      </div>
    </div>

    <!-- 商品列表页以组件形式  默认阻止点击穿透 -->
    <div class="dialog-box" v-if="showShippingAddressPage"
      @click.stop="abc=1">
      <shipping-address :showShippingAddressPage.sync="showShippingAddressPage" />
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";

import shippingAddress from "../shippingAddress.vue";
const obj = { Icon };
const vantCom = {};
for (let k in obj) {
  vantCom[obj[k].name] = obj[k];
}

import { getInfo } from "@/server/goods.js";
import { orderCreate } from "@/server/pay.js";
export default {
  components: {
    shippingAddress, // 地址列表组件

    ...vantCom
  },
  data() {
    return {
      spu: {
        //类型：Object  必有字段  备注：商品
        spu_id: 1, //类型：Number  必有字段  备注：商品id
        title: "mock", //类型：String  必有字段  备注：商品标题
        pic_urls: [
          //类型：Array  必有字段  备注：图片地址列表
          "mock" //类型：String  必有字段  备注：无
        ],
        specs: [
          //类型：Array  必有字段  备注：规格列表
          {
            //类型：Object  必有字段  备注：无
            spec_name: "mock", //类型：String  必有字段  备注：规格名
            spec_values: [
              //类型：Array  必有字段  备注：规格列表
              "mock1", //类型：String  必有字段  备注：无
              "mock2",
              "mock3"
            ],
            spec_id: 0 // 当前选择下标
          }
        ],
        price: "mock", //类型：String  必有字段  备注：商品售价
        desp: "mock", //类型：String  必有字段  备注：商品详情描述
        expire_ttl: "mock" //类型：String  必有字段  备注：商品砍价过期时间（剩余的时间）单位：秒
      },

      paly_id: 0,

      showShippingAddressPage:false  //显示地址列表页
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      let result = await getInfo({ spu_id: this.$route.query.spuId });
      if (result) {
        this.spu = result.data.spu;
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
    }
  }
};
</script>

