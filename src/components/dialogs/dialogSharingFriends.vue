<style lang="scss" scoped>
</style>


<template>
  <div class="dialogSharingFriends-container">
    <van-popup v-model="dialogVisible.show"
      :close-on-click-overlay="false">
      <h3> 分享好友</h3>
      <div class="share-messenger"
        @click="shareMessenger"
        style="font-size:36px;">Messenger</div>
      <div class="share-whatsapp"
        @click="shareWhatsapp"
        style="font-size:36px;">whatsapp</div>
      <div class="share-line"
        @click="shareLine"
        style="font-size:36px;">LINE</div>
      <!-- LINE网站生成button按钮 -->
      <!-- <div class="line-it-button" data-lang="zh_Hant" data-type="share-c" data-ver="2" data-url="https://liuming.mynatapp.cc" style ="display: none;"></div>  -->
      <div class="share-facebook"
        @click="shareFacebook"
        style="font-size:36px;">FB</div>
    </van-popup>
  </div>
</template>

<script>
import { FBConfig } from "@/config/index.js";
export default {
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
  },
  methods: {
    /**
     * @description: 分享到Messenger
     */
    shareMessenger() {
      const appId = FBConfig.appId; // FB的appid
      console.log("appId: ", appId);
      // const link=this.shareInfo.shareUrl; // 分享的链接（必须和FB应用设置的一致）
      const link = "https://liuming.mynatapp.cc/forBargain"; // 测试
      window.location.href = `fb-messenger://share/?link=${link}/&app_id=${appId}`;
    },
    /**
     * @description: 分享到whatsapp
     */
    shareWhatsapp() {
      var t = this.shareInfo.shareTitle;
      const link = encodeURIComponent("\n\n" + this.shareInfo.shareUrl); // 分享的链接
      window.location.href =
        "whatsapp://send?text=" +
        encodeURIComponent(t) +
        link +
        "&via=lopscoop";
    },
    /**
     * @description: 分享到LINE
     */
    shareLine() {
      //  分享第一种没限制服务器ip地区的（分享文字为主，好像也可以显示图片了）
      // const link = encodeURIComponent(this.shareInfo.shareUrl); // 分享的链接
      const link = encodeURIComponent("https://liuming.mynatapp.cc/forBargain"); // 测试
      window.location.href = `line://msg/text/${link}`;


      // 分享第二种（得翻墙到日本等）
      //  window.location.href = `https://social-plugins.line.me/lineit/share?url=${link}`;
    },
    /**
     * @description: 分享到FB
     */
    async shareFacebook(){
      //  const link =this.shareInfo.shareUrl; // 分享的链接
      const link = "https://liuming.mynatapp.cc/forBargain?a=1"; // 测试
      const quote=this.shareInfo.quote;
      // const hashtag=this.shareInfo.hashtag;
      let result=await window.$faceBookApi.shareFB(link,quote/* ,hashtag */);
      if(result){
        // 分享成功
      }else{
        // 分享失败
      }
    }
  }
};
</script>
