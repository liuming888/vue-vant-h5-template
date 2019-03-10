<style lang="scss" scoped>
  .shippingAddress-container{
    width: 100%;
    height: 100%;
  }
</style>

<template>
  <div class="shippingAddress-container">
    已有收货地址列表页
    {{JSON.stringify(this.address_list)}}
    <dialog-post-add-address :dialogVisible.sync="dialogs.postAddAddress" />
  </div>
</template>

<script>
import dialogPostAddAddress from "@/components/dialogs/dialogPostAddAddress.vue";

import { getMyAddress } from "@/server/user.js";
export default {
  name: "shippingAddress",
  components: {
    dialogPostAddAddress // （已有）收货地址页
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

