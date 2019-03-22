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
  width: 610px;
  height: 828px;
  background: url("~@/assets/images/fenxiangzhuanba.png") no-repeat 0 0/100%
    100%;
  padding-top: 180px;
  box-sizing: border-box;
  position: relative;

  .tit {
    width: 438px;
    text-align: center;
    margin: 0 auto;
    font-size: 30px;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 38px;
  }

  .content {
    width: 560px;
    height: 480px;
    margin: 0 auto;

    .good-box {
      width: 514px;
      height: 195px;
      margin: 24px auto 0;
      // background: pink;
      display: flex;
      align-items: center;
      padding-left: 12px;
      box-sizing: border-box;
      transform: scale(0.9);

      .good-img {
        width: 150px;
        height: 150px;
      }

      .right-box {
        margin-left: 20px;
        height: 150px;
        width: 320px;

        .good-tit {
          width: 282px;
          height: 60px;
          font-size: 24px;
          font-weight: 400;
          color: rgba(50, 50, 50, 1);
          line-height: 32px;
          margin-bottom: 25px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }

        .old-m {
          font-size: 16px;
          font-weight: 400;
          text-decoration: line-through;
          color: rgba(136, 136, 136, 1);
        }

        .cur-n {
          font-size: 36px;
          font-weight: 600;
          color: rgba(211, 12, 5, 1);

          .rp {
            font-size: 20px;
            margin-right: 4px;
          }
        }
      }
    }

    .share-to {
      font-size: 34px;
      font-weight: bold;
      color: rgba(211, 12, 5, 1);
      text-align: center;
      margin-bottom: 14px;
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
  }

  .copy-link {
    position: absolute;
    width: 429px;
    height: 81px;
    bottom: 42px;
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
    bottom: -110px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}
</style>

<template>
  <div class="dialogSharingMakes-container"
    v-show="dialogVisible.show"
    @click.stop="abc=1">

    <div class="share-box">
      <!-- <h5 class="tit">Share with friends, friends buy up to <span>$29</span></h5> -->
      <h5 class="tit">Share to your friends.You will gain bonus if your friends buy it.</h5>

      <div class="content">
        <div class="good-box">
          <img v-lazy="itemData.spu_pics&&itemData.spu_pics[0]"
            class="good-img">
          <div class="right-box">
            <div class="good-tit">
              {{itemData.title}}
            </div>
            <div class="old-m">Rp{{itemData.original_price}}</div>
            <div class="cur-n">
              <span class="rp">Rp</span>{{itemData.price}}
            </div>
          </div>
        </div>

        <div class="share-to">Share To</div>

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
      </div>

      <img src="~@/assets/images/guanbi@2x.png"
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
    },
    itemData: {
      type: Object
    }
  },
  methods: {
    closeDialog() {
      this.$emit("update:dialogVisible", { show: false });
    }
  }
};
</script>


