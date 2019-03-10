<template>
  <div class="dialogSharingFriends-container">
    <van-popup v-model="dialogVisible.show">
      <h3> 分享好友</h3>
      <div class="share-messenger"
        @click="mx_shareMessenger"
        style="font-size:36px;">Messenger</div>
      <div class="share-whatsapp"
        @click="mx_shareWhatsapp"
        style="font-size:36px;">whatsapp</div>
      <div class="share-line"
        @click="mx_shareLine"
        style="font-size:36px;">LINE</div>
      <!-- LINE网站生成button按钮 -->
      <!-- <div class="line-it-button" data-lang="zh_Hant" data-type="share-c" data-ver="2" data-url="https://liuming.mynatapp.cc" style ="display: none;"></div>  -->
      <div class="share-facebook"
        @click="mx_shareFacebook"
        style="font-size:36px;">FB</div>
    </van-popup>
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
    shareInfo:{
      type:Object,
      default(){
        return {
          shareUrl:window.location.origin+"/forBargain", // 从点击打开的链接
          shareTitle:"分享标题",
          shareDescription:"分享的描述",
          shareImage:"https://s.pinimg.com/images/facebook_share_image.png", //  分享的预览图（图片有限制）
          quote:"FB随分享的链接一同显示的引文可由用户自行高亮选择，也可由开发者预先定义（例如文章的醒目引文）",
          // hashtag:"FB分享的tag标签"
        }
      }
    }
  }
};
</script>


