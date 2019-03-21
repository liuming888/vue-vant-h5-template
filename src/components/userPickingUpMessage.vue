<style lang="scss" scoped>
.home-top-msg {
  width: 355px;
  height: 48px;
  position: absolute;
  top: 21px;
  left: 100vw;
  // width: 355px;
  margin: 0 23px;
  padding-right: 16px;
  height: 48px;
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
  // animation: mes 20s infinite;
  z-index: 9999;

  .info-box {
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

  90%{
     transform: translateY(0);
  }

  100% {
    transform: translateY(-50px);
  }
}
</style>


<template>
  <div class="home-top-msg">
    <div class="info-box">
      <img class="home-top-msg-img"
        v-lazy="curDat&&curDat.avatar">
      <span>{{curDat&&curDat.username}} got a freebie just now</span>
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
      curIdx: 0 // 当前播放的消息下标
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
  }
};
</script>
