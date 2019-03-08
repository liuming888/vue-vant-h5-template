<style lang="scss" scoped>
.tabBar-container {
  height: 93px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-align: center;
  color: #C2C2C2;
  // line-height: 93px;
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
    color: #D30C05
  }
}
</style>

<template>
  <div class="tabBar-container">
    <router-link v-for="(item, index) in tabBarList" :key="index" :class="{'tabBar-item': true, 'active': activeRouter === item.path}" :to="item.path">
      <img class="tabBar-item-img" :src="activeRouter === item.path ? item.imgActiveUrl : item.imgUrl" alt="">
      <p>{{item.title}}</p>
    </router-link>
    <!-- <router-link :class="{'tabBar-item': true, 'active': activeRouter === '/my'}" to="/my">
      <img class="tabBar-item-img" src="@/assets/images/tabBar-me.png" alt="">
      <p>Me</p>
    </router-link> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabBarList: [
        {
          path: '/',
          title: 'Home',
          imgUrl: require('../../../assets/images/tabBar-home.png'),
          imgActiveUrl: require('../../../assets/images/tabBar-home-active.png')
        },
        {
          path: '/my',
          title: 'Me',
          imgUrl: require('../../../assets/images/tabBar-me.png'),
          imgActiveUrl: require('../../../assets/images/tabBar-me-active.png')
        }
      ]
    }
  },
  computed: {
    activeRouter() {
      return this.$route.path
    }
  }
}
</script>

