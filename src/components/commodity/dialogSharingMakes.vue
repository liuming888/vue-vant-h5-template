<style lang="scss" scoped>
.dialogSharingMakes-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.share-box {
  width: 571px;
  height: 836px;
  background: url("~@/assets/images/share-background.png") no-repeat 0 0/100%
    100%;
  padding-top: 320px;
  box-sizing: border-box;
  position: relative;

  .tit {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: rgba(211, 12, 5, 1);
    margin-bottom: 29px;
  }
}

.share-types {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 41px;
  position: relative;

  img {
    width: 100px;
    margin-right: 20px;
    height: auto;
  }
}

.tip {
  width: 400px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 135px;
  font-size:26px;
}
.copy-link {
  display: block;
  background: none;
  // padding-left: 230px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(211, 12, 5, 1);
  position: absolute;
  left: 230px;
  bottom:50px;
}

.close-img {
  display: block;
  width: 70px;
  height: auto;
  // margin: 96px auto 0;
  position: absolute;
  bottom:-90px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
</style>

<template>
  <div class="dialogSharingMakes-container"
    v-show="dialogVisible.show"
    @click.stop="abc=1">
    <!-- <van-popup v-model="dialogVisible.show">
      <h3> 分享好友</h3>
      <div class="share-messenger"
        @click="mx_shareMessenger"
        style="font-size:36px;">Messenger</div>
      <div class="share-whatsapp"
        @click="mx_shareWhatsapp"
        style="font-size:36px;">whatsapp</div>
      <div class="share-line"
        @click="mx_shareLine"
        style="font-size:36px;">LINE</div> -->
    <!-- LINE网站生成button按钮 -->
    <!-- <div class="line-it-button" data-lang="zh_Hant" data-type="share-c" data-ver="2" data-url="https://liuming.mynatapp.cc" style ="display: none;"></div>  -->
    <!-- <div class="share-facebook"
        @click="mx_shareFacebook"
        style="font-size:36px;">FB</div> -->
    <!-- </van-popup> -->

    <div class="share-box">
      <h5 class="tit">Share To</h5>

      <div class="share-types">
        <img src="@/assets/images/messenger.png"
          class="fb"
          alt="fb"
          @click="mx_shareMessenger">

        <img src="@/assets/images/line.png"
          @click="mx_shareLine">

        <img src="@/assets/images/whatsapp.png"
          @click="mx_shareWhatsapp">
          
        <img src="@/assets/images/facbook.png"
          @click="mx_shareFacebook">
      </div>

      <div class="tip">
        Tip: Sharing to new friends will cut faster and more.
      </div>

      <!-- <button class="copy-link"
        :data-clipboard-text="mx_copyUrl">Copy Link</button> -->

      <button ref="copy"
        class="copy-link"
        data-clipboard-action="copy"
        :data-clipboard-text="shareInfo.share_url"
        @click="mx_copyLink">Copy Link</button>

      <img src="@/assets/images/guanbi@2x.png"
        class="close-img"
        @click="closeDialog">
    </div>
  </div>
</template>

<script>
import share from "@/mixins/share.js";
export default {
  mixins: [share],
  name: "dialogSharingMakes",
  props: {
    dialogVisible: {
      type: Object,
      default() {
        return {
          show: false
        };
      }
    },
    shareInfo: {
      type: Object,
      default() {
        return {
          share_url: window.location.origin + "/forBargain", // 从点击打开的链接
          share_title: "分享标题",
          share_desp: "分享的描述",
          share_image: "https://s.pinimg.com/images/facebook_share_image.png" //  分享的预览图（图片有限制）
          // quote:
          //   "FB随分享的链接一同显示的引文可由用户自行高亮选择，也可由开发者预先定义（例如文章的醒目引文）"
          // hashtag:"FB分享的tag标签"
        };
      }
    }
  },
  methods: {
    closeDialog() {
      this.$emit("update:dialogVisible", { show: false });
    }
  }
};
</script>


