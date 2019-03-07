<style lang="scss" scoped>
.home {
  width: 750px;
  height: 1px;
  background: red;
}
</style>


<template>
  <div class="home-container">
    <!-- home页面 -->
    <!-- <a href="javascript:whatsApp();" class="xq-whatsapp" data-action="share/whatsapp/share">whatsapp</a> -->

    <a href="fb-messenger://share/?link=https://liuming.mynatapp.cc/&app_id=844618395883361"
      style="font-size:20px;">Send In Messenger(url带link分享链接)</a>
    <br>

    <a href="javascript:;"
      style="font-size:20px;" @click="whatsApp">whatsapp(url带test分享文字)</a>
  </div>
</template>

<script>
// import { Swipe, SwipeItem } from "vant";
// const obj = { Swipe, SwipeItem };
// const vantCom = {};
// for (let k in obj) {
//   vantCom[obj[k].name] = obj[k];
// }

import userPickingUpMessage from "@/components/userPickingUpMessage.vue";
import aCommodityThatIsBeingBargained from "@/components/bargain/aCommodityThatIsBeingBargained.vue";
import commodityItem from "@/components/commodity/commodityItem.vue";
export default {
  components: {
    userPickingUpMessage, // 用户领取消息播放
    aCommodityThatIsBeingBargained, // 一件正在进行砍价商品
    commodityItem // 商品列表展示的商品X
    // ...vantCom // vant组件
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    // 测试登录FB
    async testA() {
      let loginInfo = await window.$faceBookApi.loginFB();
      console.warn("loginInfo: ", loginInfo);
      if (loginInfo) {
        let {
          authResponse: { accessToken },
          id,
          name,
          pic_square
        } = loginInfo;
        this.$store.commit("setUserInfo", {
          accessToken,
          id,
          name,
          pic_square
        });
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ accessToken, id, name, pic_square })
        );
        console.log("1111111111111", this.$store.state.userInfo);
        console.log("222222222222", localStorage.getItem("userInfo"));
      }
    },
    // 分享到whatsApp
    whatsApp(contentId) {
      var u = document.getElementsByClassName("share_url")[0].content;
      console.log('u: ', u);
      var t = document.getElementsByClassName("share_title")[0].content;
      console.log('t: ', t);
      location =
        "whatsapp://send?text=" +
        encodeURIComponent(t) +
        encodeURIComponent("\n\n" + u) +
        "&via=lopscoop";
    },

  }
};
</script>
