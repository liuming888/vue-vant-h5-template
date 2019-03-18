<!--  -->
<template>
  <div class="myFriends-container">
    <div class="friendsHeader">
      <ul>
        <li>Friend nickname</li>
        <li>Join time</li>
        <li>Contribution</li>
      </ul>
    </div>
    <div class="friendsContent">
      <ul>
        <FriendListCommon
          v-for="(item, index) in friendList"
          :key="index"
          :item="item"
          :index="index"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import FriendListCommon from "@/components/FriendListCommon.vue";
export default {
  data() {
    return {
      friendList: [
        {
          name: "Zoe",
          options1: 10000,
          options2: 20000,
          imgUrl: require("@/assets/images/tabBar-me-active.png")
        },
        {
          name: "Zoe",
          options1: 10000,
          options2: 20000,
          imgUrl: require("@/assets/images/tabBar-me-active.png")
        },
        {
          name: "Zoe",
          options1: 10000,
          options2: 20000,
          imgUrl: require("@/assets/images/tabBar-me-active.png")
        },
        {
          name: "Zoe",
          options1: 10000,
          options2: 20000,
          imgUrl: require("@/assets/images/tabBar-me-active.png")
        },
        {
          name: "Zoe",
          options1: 10000,
          options2: 20000,
          imgUrl: require("@/assets/images/tabBar-me-active.png")
        },
      ]
    };
  },

  components: { FriendListCommon },

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.friendsHeader{
    line-height: 92px;
    text-align: center;
    background: #F5F5F5;
    ul{
        display: flex;
        align-items: center;
        li{
            flex:1;
            color: #888888;
            font-size: 24px;
        }
    }
}
</style>