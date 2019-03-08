<style lang="scss" scoped>
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
  background-color: rgba(255,255,255,.4);
  max-width: calc(100% - 62px);
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
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
    <img class="home-top-msg-img" src="@/assets/images/tabBar-me-active.png" alt="">
    <span>Michelle got a freebie just now</span>
  </div>
</template>

<script>
export default {
    name:"userPickingUpMessage"
};
</script>
