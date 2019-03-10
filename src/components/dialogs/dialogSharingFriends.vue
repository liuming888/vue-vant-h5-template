<style lang="scss" scoped>
.dialogSharingFriends-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
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

  img {
    width: 110px;
    height: auto;
  }
}

.tip {
  width: 400px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 136px;
}
.copy-link {
  display: block;
  background: none;
  padding-left: 230px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(211, 12, 5, 1);
}
</style>

<template>
  <div class="dialogSharingFriends-container"
    v-if="dialogVisible.show"
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
        <img src="~@/assets/images/fb.png"
          class="fb"
          alt="fb"
          @click="mx_shareFacebook">
      </div>

      <div class="tip">
        Tip: Sharing to new friends will cut faster and more.
      </div>

      <!-- <button class="copy-link"
        :data-clipboard-text="mx_copyUrl">Copy Link</button> -->

      
      <button ref="copy"  class="copy-link"
        data-clipboard-action="copy"
        data-clipboard-target="#success_form_input"
        @click="mx_copyLink">Copy Link</button>

      <div class="close-img">

      </div>
      
      <!-- 复制用到input -->
      <input type="text"
        id="success_form_input"
        readonly="readonly"
        v-model="mx_copyUrl"  style="margin-left:-99999px;" />
    </div>
  </div>
</template>

<script>
import { FBConfig } from "@/config/index.js";

import share from "@/mixins/share.js";
export default {
  mixins: [share],
  name: "dialogSharingFriends",
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
          shareUrl: window.location.origin + "/forBargain", // 从点击打开的链接
          shareTitle: "分享标题",
          shareDescription: "分享的描述",
          shareImage: "https://s.pinimg.com/images/facebook_share_image.png", //  分享的预览图（图片有限制）
          quote:
            "FB随分享的链接一同显示的引文可由用户自行高亮选择，也可由开发者预先定义（例如文章的醒目引文）"
          // hashtag:"FB分享的tag标签"
        };
      }
    }
  }
};
</script>


