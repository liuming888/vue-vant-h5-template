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

// .close-img {
//   display: block;
//   width: 70px;
//   height: auto;
//   // margin: 96px auto 0;
//   position: absolute;
//   bottom: -90px;
//   left: 0;
//   right: 0;
//   margin: 0 auto;
// }

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
      margin: 30px auto 0;
      background: pink;
      display: flex;
      align-items: center;
      padding-left: 25px;
      box-sizing: border-box;

      .good-img {
        width: 150px;
        height: 150px;
      }

      .right-box {
        margin-left: 20px;
        height: 150px;
        width: 320px;

        .good-tit {
          font-size: 24px;
          font-family: Helvetica;
          font-weight: 400;
          color: rgba(50, 50, 50, 1);
          line-height: 32px;
          margin-bottom: 20px;
        }

        .old-m {
          font-size: 20px;
          font-family: Helvetica;
          font-weight: 400;
          text-decoration: line-through;
          color: rgba(136, 136, 136, 1);
        }

        .cur-n {
          font-size: 30px;
          font-weight: 600;
          color: rgba(211, 12, 5, 1);

          .rp{
            
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="dialogSharingMakes-container"
    v-show="dialogVisible.show"
    @click.stop="abc=1">

    <div class="share-box">
      <!-- <h5 class="tit">Share To</h5>

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

      <button ref="copy"
        class="copy-link"
        data-clipboard-action="copy"
        :data-clipboard-text="shareInfo.share_url"
        @click="mx_copyLink">Copy Link</button>

      <img src="@/assets/images/guanbi@2x.png"
        class="close-img"
        @click="closeDialog"> -->

      <h5 class="tit">Share with friends, friends buy up to <span>$29</span></h5>

      <div class="content">
        <div class="good-box">
          <img v-lazy="require('@/assets/images/bargain-finish-banner.png')"
            class="good-img">
          <div class="right-box">
            <div class="good-tit">
              Casual Large Capacity Copartment Handbag women
            </div>
            <div class="old-m">Rp280.000</div>
            <div class="cur-n">
              <span class="rp">Rp</span>0.00
            </div>
          </div>
        </div>
      </div>
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


