<style lang="scss" scoped>
.tabBar-container {
  height: 5vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    flex: 6;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<template>
  <div class="tabBar-container">
    <router-link to="/">首页</router-link>
    <router-link to="/my">我的</router-link>
  </div>
</template>
