<style lang="scss" scoped>
.incomeWindow-container {
  width: 185px;
  // width: (185px / 1.5);
  height: 224px;
  // height: (224px / 1.5);
  background-size: 100% 100%;
  position: fixed;
  bottom: 254px;
  right: -30px;
  z-index: 100;
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  color: rgba(255, 255, 255, 1);
  // text-shadow:0px 0px 1px rgba(8,8,8,0.28);
  padding-top: 36px;
  text-align: center;
  transform: rotate(-2deg) scale(0.7) translateX(0);
  animation: move 1s infinite;
}

@keyframes move {
  0% {
    transform: rotate(-2deg) scale(0.7) translateX(0);
  }

  100% {
    transform: rotate(2deg) scale(0.7) translateX(0);
  }
}
</style>


<template>
  <div class="incomeWindow-container"
    ref="incomeWindow"
    @click="setShow"
    v-lazy:background-image="require('@/assets/images/fudai.png')">
    <p class="income">Income</p>
    <p class="num">$6.00</p>
  </div>
</template>

<script>
export default {
  name: "incomeWindow",
  methods: {
    setShow() {
      this.$refs.incomeWindow.style.transform=" transform: rotate(2deg) scale(0.7) translateX(100px)";
    }
  }
};
</script>
