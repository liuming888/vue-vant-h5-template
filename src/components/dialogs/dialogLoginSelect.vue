<style lang="scss" scoped>
.van-popup {
  width: 60vw;
  height: 300px;
}
</style>

<template>
  <div class="dialogLoginSelect-container">
    <van-popup v-model="dialogVisible.show"
      :close-on-click-overlay="false">
      <h3 style="margin-bottom:30px;">通过以下方式登录</h3>
      <div style="text-align:center;font-size:36px"
        @click="checkLogin">
        FB
      </div>
    </van-popup>
  </div>
</template>

<script>
import axios from "axios";
import { login,check_login } from "@/server/user.js";
export default {
  name: "dialogLoginSelect",
  props: {
    dialogVisible: {
      type: Object,
      default() {
        return {
          show: false
        };
      }
    },
    jumpUrl: {
      // 登录完成要跳转的页面
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    /**
     * @description: 测试登录
     */
    async checkLogin(){
       let result = await check_login({
          tp_id: "104497707249033",
          tp_token: "EAAMALQt1F2EBANKqB2pizpPVMyiV7JQ3ZA4nPBNPT1BwwfUdWVZBi0nwjtv6kNEZBZCr3v1XzmZCvgnmBZAd3DHI362pDGzHTRNQiZADK8IqsMgZCvZCSvdhFeL6ZBz3sFIoigZBGtLOlnzuQeEIrUKcqcdYyLAVn4QzhnQIZAyCkQlJqHRZAgUjE5OP2KG9t0v3zmZC5ZBEneAEW03iwZDZD",
          tp_type: 1
        });
    },
    /**
     * @description: FB登录
     * @return: true 登录成功   false 登录失败
     */
    async loginFB() {
      let loginInfo = await window.$faceBookApi.loginFB();
      console.warn("loginInfo: ", loginInfo);
      if (loginInfo) {
        let {
          authResponse: { accessToken },
          id,
          name,
          pic_square
        } = loginInfo;

        let result = await login({
          tp_id: id,
          tp_token: accessToken,
          tp_type: 1
        });
        //   let result = await login({
        //   tp_id: "104497707249033",
        //   tp_token: "EAAMALQt1F2EBANKqB2pizpPVMyiV7JQ3ZA4nPBNPT1BwwfUdWVZBi0nwjtv6kNEZBZCr3v1XzmZCvgnmBZAd3DHI362pDGzHTRNQiZADK8IqsMgZCvZCSvdhFeL6ZBz3sFIoigZBGtLOlnzuQeEIrUKcqcdYyLAVn4QzhnQIZAyCkQlJqHRZAgUjE5OP2KG9t0v3zmZC5ZBEneAEW03iwZDZD",
        //   tp_type: 1
        // });
        console.log("result: ", result);
        if (result.code == 0) {
          let userInfo = result.data;
          this.$store.commit("setUserInfo", userInfo);
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          axios.defaults.headers.common["user_id"] = userInfo.user_id;
          axios.defaults.headers.common["access_token"] = userInfo.access_token;
          this.$emit("update:dialogVisible", { show: false });
          if (this.jumpUrl) {
            this.$router.push({ path: this.jumpUrl });
          }
          return true;
        }
      }
      return false;
    }
  }
};
</script>

