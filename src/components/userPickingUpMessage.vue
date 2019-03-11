<style lang="scss" scoped>
@keyframes mes {
  0% {
    transform: translateX(0);
    transform: translateY(0);
  }
  20% {
    transform: translateX(-100vw);
  }
  21% {
    transform: translateX(-100vw);
    transform: translateY(-70px);
  }
  22% {
    transform: translateX(100vw);
    transform: translateY(-70px);
  }
  23% {
    transform: translateX(100vw);
    transform: translateY(0);
  }

  40% {
    transform: translateX(60vw);
    transform: translateY(0);
  }

  60% {
    transform: translateX(30vw);
    transform: translateY(0);
  }
  // 50% {
  //   transform: translateX(-00px);
  // }

  100% {
    transform: translateX(0);
    transform: translateY(0);
  }
}

.home-top-msg {
  position: absolute;
  top: 21px;
  left: 0;
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
  animation: mes 10s infinite;

  > .home-top-msg-img {
    width: 38px;
    height: 38px;
    position: absolute;
    top: 5px;
    left: 16px;
  }
}
</style>


<template>
  <div class="home-top-msg">
    <img class="home-top-msg-img"
      src="@/assets/images/tabBar-me-active.png">
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
    }, 1000);
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  }
};
</script>
