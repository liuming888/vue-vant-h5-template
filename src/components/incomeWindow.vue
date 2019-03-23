<style lang="scss" scoped>
.incomeWindow-container {
  width: 185px;
  // width: (185px / 1.5);
  height: 224px;
  // height: (224px / 1.5);
  background-size: 100% 100%;
  position: fixed;
  bottom: 380px;
  right: -30px;
  z-index: 100;
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  color: rgba(255, 255, 255, 1);
  // text-shadow:0px 0px 1px rgba(8,8,8,0.28);
  padding-top: 56px;
  text-align: center;
  transform: rotate(-2deg) scale(0.7) translateX(0);
  transition: all 1s;
  animation: move1 1s infinite alternate;

  &.cur {
    transform: rotate(2deg) scale(0.7) translateX(120px);
    animation: move2 1s infinite alternate;
  }


  .num{
    font-size:12px;
  }
}

@keyframes move1 {
  0% {
    transform: rotate(-2deg) scale(0.7) translateX(0);
  }

  100% {
    transform: rotate(2deg) scale(0.7) translateX(0);
  }
}

@keyframes move2 {
  0% {
    transform: rotate(-2deg) scale(0.7) translateX(120px);
  }

  100% {
    transform: rotate(2deg) scale(0.7) translateX(120px);
  }
}
</style>


<template>
  <div class="incomeWindow-container"
    :class="{cur:showCur}"
    @click="setShow"
    v-lazy:background-image="require('@/assets/images/fudai.png')">
    <p class="income">Income</p>
    <p class="num">RP6.00</p>
  </div>
</template>

<script>
export default {
  name: "incomeWindow",
  data() {
    return {
      showCur: false
    };
  },
  methods: {
    setShow() {
      this.showCur = !this.showCur;
    }
  }
};
</script>
