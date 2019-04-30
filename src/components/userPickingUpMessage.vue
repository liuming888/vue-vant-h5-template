<style lang="scss" scoped>
.home-top-msg {
  width: 380px;
  height: 48px;
  position: absolute;
  top: 21px;
  left: 0;
  margin: 0 23px;
  padding-right: 16px;
  line-height: 48px;
  border-radius: 24px;
  text-indent: 65px;
  color: #fff;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  max-width: calc(100% - 62px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 10000;

  .info-box {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    transform: translateY(50px);
    animation: mes 6s infinite;

    .home-top-msg-img {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      position: absolute;
      top: 5px;
      left: 16px;
    }
  }
}

@keyframes mes {
  0% {
    transform: translateY(50px);
  }

  10% {
    transform: translateY(0);
  }

  90% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-50px);
  }
}
</style>

<template>
  <div class="home-top-msg"
    @click="clickInfo">
    <div class="info-box">
      <img class="home-top-msg-img"
        v-lazy="curDat&&curDat.avatar">
      <span>{{curDat.content}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "userPickingUpMessage",
  props: {
    messageList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      curIdx: 0, // 当前播放的消息下标
      clickInfoNum: 0 // 点击消息框次数，默认点击6次就出现调试的Vconsole框
    };
  },
  computed: {
    curDat() {
      return this.messageList[this.curIdx];
    }
  },
  mounted() {
    const timer = setInterval(() => {
      this.curIdx = ~~(Math.random() * this.messageList.length);
    }, 6000);
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  },
  methods: {
    clickInfo() {
      console.log("点击info框了");
      this.clickInfoNum++;
      if (this.clickInfoNum === 6) {
        try {
          let $Vconsole = require("vconsole");
          new $Vconsole;
        } catch (error) {
          console.log("error vconsole: ", error);
        }
      }
    }
  }
};
</script>
