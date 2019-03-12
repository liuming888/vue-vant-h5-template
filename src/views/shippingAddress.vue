<style lang="scss" scoped>
  .shipping-address-container{
    width: 100%;
    // height: 100%;
    > .address-list {
      padding: 0 32px;
      > .address-item {
        padding: 26px 0;
        & + .address-item {
          margin-top: 20px;
        }
        > .info-box {
          position: relative;
          color: #323232;
          font-size: 28px;
          line-height: 40px;
          > p {
            max-width: 500px;
          }
          > .close {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            width: 21px;
            height: 21px;
          }
        }
        > .info-ctrl {
          height: 90px;
          line-height: 90px;
          background: url('./../assets/images/select.png') no-repeat 0 center;
          background-size: auto 30px;
          text-indent: 30px;
          font-size: 24px;
          color: #888;
          cursor: pointer;
          > .default {
            display: inline-block;
          }
          > .edit {
            color: #888;
            float: right;
          }
        }
        > .active {
          color: #D30C05;
          background: url('./../assets/images/select-fill.png') no-repeat 0 center;
          background-size: auto 30px;
        }
      }
    }
    > .add-address-btn {
      margin: 20px 32px 50px 32px;
      background: url('./../assets/images/add-white.png') no-repeat 25% center;
      background-size: 44px;
      background-color: #D30C05;
      border-radius:44px;
      line-height: 95px;
      height: 88px;
      text-align: center;
      text-indent: 50px;
      color: #fff;
      font-size: 32px;
    }
    > .without-address {
      text-align: center;
      padding: 150px 0 50px 0;
      font-size: 28px;
      color: #888;
      > img {
        margin-bottom: 50px;
        width: auto;
        height: 150px;
      }
    }
  }
</style>

<template>
  <div class="shipping-address-container">
    <!-- 没有地址 -->
    <div class="without-address" v-if="address_list.length  === 0">
      <img src="@/assets/images/address-none.png" alt="">
      <p>Tidak ada alamat pengiriman</p>
    </div>
    <!-- 有地址 -->
    <ul class="address-list" v-else>
      <li class="address-item" v-for="(item, index) in address_list" :key="index">
        <div class="info-box">
          <p>{{item.username}}, {{item.telephone}} </p>
          <p>Receiving address: {{item.address_two}},{{item.address_one}}, {{item.city}}, {{item.country}}</p>
          <img src="@/assets/images/delete.png" alt="" class="close" @click="dialogDefaultShow = true">
        </div>
        <div :class="`info-ctrl ${item.is_default === 1 ? 'active' : ''}`">
          <div class="default">Tetapkan sebagai alamat default</div>
          <div class="edit">Edit</div>
        </div>
      </li>
    </ul>
    <!-- 新增地址按钮 -->
    <div class="add-address-btn" @click="dialogs.postAddAddress.show = true">
      <span>Tambahkan alamat</span>
    </div>
    <!-- 已有收货地址列表页 -->
    <dialog-post-add-address :dialogVisible.sync="dialogs.postAddAddress" />
    <!-- 删除地址弹窗 -->
    <dialog-default :info="dialogDefaultInfo" :dialogVisible.sync="dialogDefaultShow" @ok="() => {}"></dialog-default>
  </div>
</template>

<script>
import dialogPostAddAddress from "@/components/dialogs/dialogPostAddAddress.vue";
import dialogDefault from "@/components/dialogs/dialogDefault.vue";

import { getMyAddress } from "@/server/user.js";
export default {
  name: "shippingAddress",
  components: {
    dialogPostAddAddress, // （已有）收货地址页
    dialogDefault
  },
  props:{
    showShippingAddressPage:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
      dialogs: {
        postAddAddress: {
          show: false
        }
      },
      // 删除按钮弹窗信息
      dialogDefaultShow: false,
      dialogDefaultInfo: {
        content: 'Anda yakin ingin menghapus alamatnya?',
        cancelText: 'Batalkan',
        okText: 'Tentukan'
      },
      
      address_list: [
        //类型：Array  必有字段  备注：用户地址列表
        {
          //类型：Object  必有字段  备注：无
          username: "mock", //类型：String  必有字段  备注：用户名
          telephone: "mock", //类型：String  必有字段  备注：手机号
          id: 1, //类型：Number  必有字段  备注：id
          address_one: "mock", //类型：String  必有字段  备注：一级地址
          address_two: "mock", //类型：String  必有字段  备注：二级地址
          is_default: 1 //类型：Number  必有字段  备注：是否默认地址（1：默认 0：常规）
        }
      ]
    };
  },
  created () {
    this.init();
  },
  methods: {
    async init() {
      let result = await getMyAddress();
      if(result){
        this.address_list=result.data.address_list;
      }
    },
    // 关闭当前
    cloneCurPageCom(){
      this.$emit("update:showShippingAddressPage",false)
    }
  },
  watch:{
    "dialogs.postAddAddress.show"(val){
      if(!val){
        this.init();
      }
    }
  }
};
</script>

