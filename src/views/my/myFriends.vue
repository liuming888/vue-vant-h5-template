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
    <div class="friendsContent"
      v-if="friendList.length>0">
      <ul>
        <FriendListCommon v-for="(item, index) in friendList"
          :key="index"
          :item="item"
          :index="index" />
      </ul>
    </div>
  </div>
</template>

<script>
import FriendListCommon from "@/components/FriendListCommon.vue";

import { getMyFriends } from "@/server/user.js";
export default {
  components: { FriendListCommon },
  data() {
    return {
      friendList: [],
      curPageDat: {
        page_size: 10,
        page_num: 1
      }
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      let result = await getMyFriends(this.curPageDat);
      if (result && result.data) {
        this.friendList = result.data;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.friendsHeader {
  line-height: 92px;
  text-align: center;
  background: #f5f5f5;
  ul {
    display: flex;
    align-items: center;
    li {
      flex: 1;
      color: #888888;
      font-size: 24px;
    }
  }
}
</style>