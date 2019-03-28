<style lang="scss" scoped>
.tabBar-container {
  width: 100vw;
  height: 93px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-align: center;
  color: #c2c2c2;
  // line-height: 93px;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  border-top:1px solid #dfdede; 
  z-index: 100;
  > .tabBar-item {
    flex: 1;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    color: inherit;
    text-decoration: none;
    > .tabBar-item-img {
      width: 44px;
      height: auto;
    }
  }
  > .active {
    color: #d30c05;
  }
}
</style>

<template>
  <div class="tabBar-container" @touchmove.prevent>
    <span v-for="(item, index) in tabBarList"
      :key="index"
      :class="{'tabBar-item': true, 'active': activeRouter === item.path}"
      @click="jumpPage(item.path)">
      <img class="tabBar-item-img"
        v-lazy="activeRouter === item.path ? item.imgActiveUrl : item.imgUrl">
      <p>{{item.title}}</p>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabBarList: [
        {
          path: "/",
          title: "HOME",
          imgUrl: require("../../../assets/images/tabBar-home.png"),
          imgActiveUrl: require("../../../assets/images/tabBar-home-active.png")
        },
        {
          path: "/my",
          title: "ME",
          imgUrl: require("../../../assets/images/tabBar-me.png"),
          imgActiveUrl: require("../../../assets/images/tabBar-me-active.png")
        }
      ]
    };
  },
  computed: {
    activeRouter() {
      return this.$route.path;
    }
  },
  methods: {
    stopDefault(event){
      event.stopPropagation();
    },
    jumpPage(path) {
      if (
        path == "/my" &&
        !this.$store.state.userInfo.user_id &&
        process.env.VUE_APP_ENV != "development"
      ) {
        this.$store.commit("setLoginJumpUrl", "/my");
        this.$store.commit("setLoginSelectShow", true);
        return;
      }

      this.$router.push(path);
    }
  }
};
</script>

