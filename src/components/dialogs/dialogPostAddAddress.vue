<style lang="scss" scoped>
.cur-popup {
  width: 610px;
  height: 630px;
  overflow: visible;
  top: 36%;
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
  height: 109px;
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

.input-size {
  font-size: 30px;
}

.zip-code {
  padding-left: 24px;
}
</style>

<template>
  <div class="dialogPostAddAddress-container">
    <van-popup v-model="dialogVisible.show"
      :close-on-click-overlay="false"
      class="cur-popup">
      <img src="~@/assets/images/delete-1.png"
        class="close"
        @click="closeDialog">

      <h5 class="tit">Add address</h5>

      <div class="name-and-phone-box">
        <van-field v-model.trim="curAddress.username"
          placeholder="name"
          class="user-name input-size"
          style="border-right:1px solid #F2F2F2;" />
        <van-field v-model.trim="curAddress.telephone"
          placeholder="phone"
          class="user-phone input-size"
          type="number" />
      </div>

      <div class="alamat-pengiriman"
        @click="dialogs.area.show=true;">
        <span class="txt">Pilih alamat pengiriman</span>
        <div class="arrow-icon">
          <van-icon name="arrow" />
        </div>
      </div>

      <textarea class="alamat-lengkap input-size"
        placeholder="Alamat lengkap (jalan, nomor rumah)"
        v-model="curAddress.address_one"></textarea>

      <van-field v-model.trim="curAddress.zip"
        placeholder="Zip code"
        class="input-size zip-code" />

      <div class="simpan-btn"
        @click="simpan">
        Confirm
      </div>
    </van-popup>

    <!-- 弹窗 -->
    <dialog-area :dialogVisible.sync="dialogs.area"
      v-if="dialogVisible.show"
      :curDat.sync="curAddress" />
  </div>
</template>

<script>
import { Field, Icon, Dialog } from "vant";
import dialogArea from "./dialogArea.vue";

import { dealMyAddress } from "@/server/user.js";
const defaultAddress = {
  //类型：Object  必有字段  备注：无
  // id: "mixed", //类型：Mixed  必有字段  备注：operation 2和-1时必须
  username: "", //类型：String  必有字段  备注：用户名 1和2时必须
  telephone: "", //类型：String  必有字段  备注：电话号码 1和2时必须
  // email: "617639941@qq.com", //类型：String  必有字段  备注：邮箱 选填
  country: "Indonesia", //类型：String  必有字段  备注：国家1和2时必须
  region: "", //类型：String  必有字段  备注：省州 1和2时必须
  city: "", //类型：String  必有字段  备注：城市 1和2时必须
  zip: "", //类型：String  必有字段  备注：邮编 1和2时必须
  address_one: "", //类型：String  必有字段  备注：配送地址-一级 1和2时必须
  address_two: "", //类型：String  必有字段  备注：配送地址-二级
  // is_default: 0, //类型：Number  必有字段  备注：默认（0：正常 1：默认）
  country_code: "ID"
};

export default {
  name: "dialogPostAddAddress",
  components: {
    dialogArea, // 地区选择弹窗
    [Field.name]: Field,
    [Icon.name]: Icon
  },
  props: {
    dialogVisible: {
      type: Object,
      default() {
        return {
          show: false
        };
      }
    },
    showType: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dialogs: {
        area: {
          show: false
        }
      },
      curAddress: JSON.parse(JSON.stringify(defaultAddress))
    };
  },
  created() {},
  methods: {
    async simpan() {
      let { username, telephone, country, region, city, zip } = this.curAddress;
      if (!username || !telephone || !country || !region || !city || !zip) {
        Dialog.alert({
          message: "Silakan isi informasi alamat lengkap",
          confirmButtonText: "Tentukan"
        });
        return;
      }

      let operation = 1;
      if (this.showType == "add") {
        operation = 1;
        this.curAddress.is_default = 1;
      } else if (this.showType == "edit") {
        operation = 2;
      }
      let result = await dealMyAddress({
        operation,
        user_address: this.curAddress
      });
      if (result) {
        this.$toast("success !");
        this.closeDialog();
      }
    },
    closeDialog() {
      this.$emit("update:dialogVisible", { show: false });
    }
  },
  watch: {
    "dialogVisible.show": {
      deep: true,
      immediate: true,
      handler(val) {
        console.log("val: ", val, this.showType);
        if (val && this.showType == "add") {
          this.curAddress = {
            //类型：Object  必有字段  备注：无
            // id: "mixed", //类型：Mixed  必有字段  备注：operation 2和-1时必须
            username: "", //类型：String  必有字段  备注：用户名 1和2时必须
            telephone: "", //类型：String  必有字段  备注：电话号码 1和2时必须
            // email: "617639941@qq.com", //类型：String  必有字段  备注：邮箱 选填
            country: "Indonesia", //类型：String  必有字段  备注：国家1和2时必须
            region: "", //类型：String  必有字段  备注：省州 1和2时必须
            city: "", //类型：String  必有字段  备注：城市 1和2时必须
            zip: "", //类型：String  必有字段  备注：邮编 1和2时必须
            address_one: "", //类型：String  必有字段  备注：配送地址-一级 1和2时必须
            address_two: "", //类型：String  必有字段  备注：配送地址-二级
            // is_default: 0, //类型：Number  必有字段  备注：默认（0：正常 1：默认）
            country_code: "ID"
          };
        }
      }
    }
  }
};
</script>

