<style scoped>
.turn-home {
  position: fixed;
  top: 80%;
  right: 10px;
  width: 96px;
  height: 96px;
  background: url("~@/assets/images/home@2x(1).png") no-repeat;
  background-size: 100%;
  z-index: 99;
}
</style>

<template>
  <div class="turn-home"
    @click="$router.push('/')"></div>
</template>



