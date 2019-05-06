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
  // align-items: flex-end;
  padding-top: 10vh;
  box-sizing: border-box;
}

.share-box {
  width: 610px;
  height: 749px;
  // background: url("~@/assets/images/share-background.png") no-repeat 0 0/100%
  //   100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top: 200px;
  box-sizing: border-box;
  position: relative;

  .tip {
    width: 580px;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
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
    margin-bottom: 48px;
  }

  .share-types {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 41px;
    position: relative;
    left: 10px;

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
    bottom: 40px;
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
    @click.stop>
    <div class="share-box"
      :style="{'background-image':`url(${$t('dialogSharingFriends.shareBackground')})`}">
      <div class="tip">
        {{$t('dialogSharingFriends.shareToFriendsAndYouCanGetFreebiesFaster')}}
      </div>

      <h5 class="tit">
        <!-- Share on -->
      </h5>

      <div class="share-types">

        <div class="share-item">
          <img v-lazy="require('@/assets/images/line.png')"
            @click="share(mx_shareLine)">
          <p>LINE</p>
        </div>

        <div class="share-item">
          <img v-lazy="require('@/assets/images/whatsapp.png')"
            @click="share(mx_shareWhatsapp)">
          <p>WhatsApp</p>
        </div>

        <template v-if="mx_showFB">
          <div class="share-item">
            <img v-lazy="require('@/assets/images/messenger.png')"
              @click="share(mx_shareMessenger)">
            <p>Messenger</p>
          </div>
          <!-- <div class="share-item">
            <img v-lazy="require('@/assets/images/facbook.png')"
              @click="share(mx_shareFacebook)">
            <p>Facebook</p>
          </div> -->
        </template>

      </div>

      <button ref="copy"
        class="copy-link"
        :style="{'background-image':`url(${$t('dialogSharingFriends.copylink')})`}"
        data-clipboard-action="copy"
        :data-clipboard-text="mx_copyTxt"
        @click="mx_copyLink"></button>

      <img v-lazy="require('@/assets/images/guanbi@2x.png')"
        class="close-img"
        @click="closeDialog">
    </div>
  </div>
</template>

<script>
import share from "@/mixins/share.js";
// import fbInit from "@/mixins/fbInit.js";
export default {
  mixins: [share/* , fbInit */],
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
          share_title: "",
          share_desp: "",
          share_image: "https://s.pinimg.com/images/facebook_share_image.png" //  分享的预览图（图片有限制）
          // quote:
          //   "FB随分享的链接一同显示的引文可由用户自行高亮选择，也可由开发者预先定义（例如文章的醒目引文）"
          // hashtag:"FB分享的tag标签"
        };
      }
    },
    itemData: {
      type: Object
    }
  },
  methods: {
    closeDialog() {
      this.$emit("update:dialogVisible", { show: false });
    },
    share(fun) {
      fun();
      //统计
      this.$gaSend({
        eventCategory: "分享好友帮砍浮窗_分享按钮",
        eventAction: "点击",
        eventLabel: this.itemData.title.substr(0, 10)
      });
    }
  }
};
</script>



