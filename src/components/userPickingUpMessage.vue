<style lang="scss" scoped>
@keyframes mes {
  0% {
    transform: translateX(100vw);
  }
 
  100% {
     transform: translateX(-100vw);
  }
}

.home-top-msg {
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
  animation: mes 20s infinite;
  z-index: 9999;
  > .home-top-msg-img {
    width: 38px;
    height: 38px;
    border-radius:50%; 
    position: absolute;
    top: 5px;
    left: 16px;
  }
}
</style>


<template>
  <div class="home-top-msg">
    <img class="home-top-msg-img"
      v-lazy="curDat&&curDat.avatar">
    <span>{{curDat&&curDat.username}} got a freebie just now</span>
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
    }, 20000);
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  }
};
</script>
