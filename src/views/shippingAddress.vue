<style lang="scss" scoped>
.shipping-address-container {
  width: 100%;
  min-height: 100%;
  padding-bottom: 20px;
  > .address-list {
    max-height: 86vh;
    padding: 0 32px;
    overflow: hidden;
    overflow-y: scroll;
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
          width: 100px;
          height: 100px;
          text-align: right;
          vertical-align: top;

          img {
            width: 21px;
            height: auto;
          }
        }
      }
      > .info-ctrl {
        height: 90px;
        line-height: 90px;
        background: url("./../assets/images/select.png") no-repeat 0 center;
        background-size: auto 30px;
        text-indent: 30px;
        font-size: 24px;
        color: #888;
        cursor: pointer;
        > .default {
          display: inline-block;
        }
        > .edit {
          width: 100px;
          text-align: right;
          color: #888;
          float: right;
        }
      }
      > .active {
        color: #d30c05;
        background: url("./../assets/images/select-fill.png") no-repeat 0 center;
        background-size: auto 30px;
      }
    }
  }
  > .add-address-btn {
    margin: 20px 32px 50px 32px;
    background: url("./../assets/images/add-white.png") no-repeat 25% center;
    background-size: 44px;
    background-color: #d30c05;
    border-radius: 44px;
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

.address-txt-box {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>

<template>
  <div class="shipping-address-container">
    <!-- 没有地址 -->
    <div class="without-address"
      v-if="address_list.length  === 0">
      <img src="@/assets/images/address-none.png"
        alt="">
      <p>Tidak ada alamat pengiriman</p>
    </div>
    <!-- 有地址 -->
    <ul class="address-list"
      v-else>
      <li class="address-item"
        v-for="(item, index) in address_list"
        :key="index"
        @click="setActiveCls(item)">
        <div class="info-box">
          <p>{{item.username}}, {{item.telephone}} </p>
          <p class="address-txt-box">Receiving address: {{item.address_two}},{{item.address_one}},{{item.city}},{{item.region}},{{item.country}}</p>

          <div class="close"
            @click.stop="delItem(item.id)"
            v-if="item.is_default!==1">
            <img src="@/assets/images/delete.png">
          </div>
        </div>
        <div :class="`info-ctrl ${item.is_default === 1 ? 'active' : ''}`">
          <div class="default">Tetapkan sebagai alamat default</div>
          <div class="edit"
            @click.stop="editAddress(item)">Edit</div>
        </div>
      </li>
    </ul>
    <!-- 新增地址按钮 -->
    <div class="add-address-btn"
      @click="openAddressDialog('add')">
      <span>Tambahkan alamat</span>
    </div>

    <!-- 弹窗 -->
    <dialog-post-add-address :dialogVisible.sync="dialogs.postAddAddress"
      ref="address_dialog"
      :showType="addressDialogType"
      v-show="dialogs.postAddAddress.show" />
    <!-- 删除地址弹窗 -->
    <dialog-default :info="dialogDefaultInfo"
      :dialogVisible.sync="dialogDefaultShow"
      @ok="delOk"></dialog-default>
  </div>
</template>

<script>
import dialogPostAddAddress from "@/components/dialogs/dialogPostAddAddress.vue";
import dialogDefault from "@/components/dialogs/dialogDefault.vue";

import { getMyAddress, dealMyAddress } from "@/server/user.js";
export default {
  name: "shippingAddress",
  components: {
    dialogPostAddAddress, // （已有）收货地址页
    dialogDefault
  },
  props: {
    showAddressPage: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dialogs: {
        postAddAddress: {
          show: false
        }
      },
      addressDialogType: "add", // 地址弹窗当前显示时的类型
      // 删除按钮弹窗信息
      dialogDefaultShow: false,
      dialogDefaultInfo: {
        content: "Anda yakin ingin menghapus alamatnya?",
        cancelText: "Batalkan",
        okText: "Tentukan",
        delId: 0
      },

      address_list: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      let result = await getMyAddress({
        page_size: 10,
        page_num: 1
      });
      if (result && result.data) {
        this.address_list = result.data;
      }
    },
    delItem(id) {
      this.dialogDefaultInfo.delId = id;
      this.dialogDefaultShow = true;
    },
    async delOk(id) {
      let result = await dealMyAddress({
        operation: -1,
        user_address: this.address_list.find(item => item.id == id)
      });
      if (result && result.code == 0) {
        this.address_list = this.address_list.filter(item => item.id != id);
      }
    },
    openAddressDialog(type) {
      this.addressDialogType = type;
      this.dialogs.postAddAddress.show = true;
    },
    // 关闭当前
    cloneCurPageCom() {
      this.$emit("update:showAddressPage", false);
    },
    editAddress(item) {
      this.$refs.address_dialog.curAddress = item;
      this.openAddressDialog("edit");
    },
    /**
     * @description: 设置当前默认选择地址
     */
    async setActiveCls(item) {
      item.is_default = 1;
      this.address_list.forEach(dat => {
        if (dat.id !== item.id) {
          dat.is_default = 0;
        }
      });
      let result = await dealMyAddress({ operation: 2, user_address: item });
      if (result.code == 0) {
        this.cloneCurPageCom();
      }
    }
  },
  watch: {
    "dialogs.postAddAddress.show"(val) {
      if (!val) {
        this.init();
      }
    }
  }
};
</script>

