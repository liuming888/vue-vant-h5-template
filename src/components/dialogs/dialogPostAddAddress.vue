<style lang="scss" scoped>
.van-popup {
  width: 610px;
  height: 630px;
  overflow: visible;
}

.close {
  width: 62px;
  height: 62px;
  position: absolute;
  right: -31px;
  top: -31px;
  z-index: 3000;
}

.tit {
  height: 119px;
  line-height: 119px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: rgba(50, 50, 50, 1);
}

.name-and-phone-box {
  width: 100%;
  overflow: hidden;
  height: 90px;
  line-height: 90px;
  display: flex;
  border: 1px solid #f2f2f2;
  border-left: 0;
  border-right: 0;

  .van-field {
    flex: 6;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }
}

.alamat-pengiriman {
  width: 100%;
  height: 90px;
  display: flex;
  padding: 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #f2f2f2;

  .txt {
    font-size: 28px;
    font-family: Helvetica;
    font-weight: 400;
    color: rgba(50, 50, 50, 1);
  }

  .arrow-icon {
    flex: 1;
    text-align: right;
    font-size: 34px;
  }
}

.alamat-lengkap {
  width: 100%;
  height: 179px;
  border-bottom: 1px solid #f2f2f2;
  padding: 24px 0 0 28px;
  box-sizing: border-box;
}

.simpan-btn {
  width: 564px;
  height: 88px;
  text-align: center;
  line-height: 88px;
  background: linear-gradient(
    -45deg,
    rgba(211, 12, 5, 1) 0%,
    rgba(255, 54, 47, 1) 100%
  );
  border-radius: 44px;
  font-size: 32px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  margin: 30px auto 0;
}
</style>

<template>
  <div class="dialogPostAddAddress-container">
    <van-popup v-model="dialogVisible.show"
      :close-on-click-overlay="false">
      <img src="~@/assets/images/delete-1.png"
        class="close" @click="closeDialog">

      <h5 class="tit">Tambahkan alamat panen</h5>

      <div class="name-and-phone-box">
        <van-field v-model="username"
          placeholder="name"
          class="user-name"
          style="border-right:1px solid #F2F2F2;" />
        <van-field v-model="telephone"
          placeholder="phone"
          class="user-phone" />
      </div>

      <div class="alamat-pengiriman">
        <span class="txt">Pilih alamat pengiriman</span>
        <div class="arrow-icon">
          <van-icon name="arrow" />
        </div>
      </div>

      <textarea class="alamat-lengkap"
        placeholder="Alamat lengkap (jalan, nomor rumah)"></textarea>

      <div class="simpan-btn" @click="simpan">
        Simpan
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Field, Icon } from "vant";

import {dealMyAddress} from "@/server/user.js";
export default {
  name: "dialogPostAddAddress",
  components: {
    [Field.name]: Field,
    [Icon.name]: Icon
  },
  props: {
    dialogVisible: {
      type: Object,
      default() {
        return {
          show: true
        };
      }
    }
  },
  data() {
    return {
      username:"",
      telephone:""
    };
  },
  methods: {
    async simpan(){
      let result=await dealMyAddress({operation:1,username:this.username,telephone:this.telephone,address_one:"",address_two:""});
      if(result){
        this.closeDialog();
      }
    },
    closeDialog(){
       this.$emit("update:dialogVisible",{show:false});
    }
  }
};
</script>

