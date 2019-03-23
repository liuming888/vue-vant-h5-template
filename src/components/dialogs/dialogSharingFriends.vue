<style lang="scss" scoped>
.dialogSharingFriends-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20vh;
  box-sizing: border-box;
}

// .share-types {
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 41px;
//   position: relative;

//   img {
//     width: 100px;
//     margin-right: 20px;
//     height: auto;
//   }
// }

// .tip {
//   width: 400px;
//   margin: 0 auto;
//   text-align: center;
//   margin-bottom: 135px;
//   font-size: 26px;
// }
// .copy-link {
//   display: block;
//   background: none;
//   // padding-left: 230px;
//   font-size: 34px;
//   font-weight: bold;
//   color: rgba(211, 12, 5, 1);
//   position: absolute;
//   left: 230px;
//   bottom: 50px;
// }

.share-box {
  width: 571px;
  height: 836px;
  background: url("~@/assets/images/share-background.png") no-repeat 0 0/100%
    100%;
  padding-top: 220px;
  box-sizing: border-box;
  position: relative;

  .tip {
    width: 463px;
    font-size: 30px;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 38px;
    margin: 0 auto;
    margin-bottom: 66px;
  }

  .tit {
    height: 31px;
    font-size: 40px;
    font-weight: bold;
    color: rgba(211, 12, 5, 1);
    text-align: center;
    margin-bottom: 41px;
  }

  .share-types {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 41px;
    position: relative;

    .share-item {
      width: 100px;
      margin-right: 20px;
      height: auto;
      text-align: center;
      font-size: 20px;
      color: #323232;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .copy-link {
    position: absolute;
    width: 429px;
    height: 81px;
    bottom: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: url("~@/assets/images/copylink.png") no-repeat 0 0/100% 100%;
  }

  .close-img {
    display: block;
    width: 70px;
    height: auto;
    // margin: 96px auto 0;
    position: absolute;
    bottom: -90px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}
</style>

<template>
  <div class="dialogSharingFriends-container"
    v-show="dialogVisible.show"
    @click.stop="abc=1">
    <div class="share-box">
      <div class="tip">
        Tip: Share to friends and you can get freebies faster.
      </div>

      <h5 class="tit">Share on</h5>

      <!-- <div class="share-types">
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
      </div> -->

      <div class="share-types">

        <div class="share-item">
          <img src="@/assets/images/facbook.png"
            @click="mx_shareFacebook">
          <p>Facebook</p>
        </div>

        <div class="share-item">
          <img src="@/assets/images/line.png"
            @click="mx_shareLine">
          <p>LINE</p>
        </div>

        <div class="share-item">
          <img src="@/assets/images/whatsapp.png"
            @click="mx_shareWhatsapp">
          <p>WhatsApp</p>
        </div>

        <div class="share-item">
          <img src="@/assets/images/messenger.png"
            @click="mx_shareMessenger">
          <p>Messenger</p>
        </div>

      </div>

      <button ref="copy"
        class="copy-link"
        data-clipboard-action="copy"
        :data-clipboard-text="shareInfo.share_url"
        @click="mx_copyLink"></button>

      <img src="@/assets/images/guanbi@2x.png"
        class="close-img"
        @click="closeDialog">
    </div>
  </div>
</template>

<script>
import share from "@/mixins/share.js";
import fbInit from "@/mixins/fbInit.js";
export default {
  mixins: [share, fbInit],
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



