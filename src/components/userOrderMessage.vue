<style lang="scss" scoped>
.home-top-msg {
  height: 48px;
  background: rgb(231, 212, 212);
  overflow: hidden;

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

  .info-box {
    height: 48px;
    padding-left: 42px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: Helvetica;
    font-weight: 400;
    color: rgba(51, 32, 31, 1);
     animation: mes 6s infinite;

    .home-top-msg-img {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      margin-right: 11px;
    }
  }
}
</style>

<template>
  <div class="home-top-msg">
    <div class="info-box">
      <img class="home-top-msg-img"
        v-lazy="curDat&&curDat.avatar">
      <span>{{curDat.content}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "userOrderMessage",
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
