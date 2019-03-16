<!--  -->
<template>
  <li class="hero-list-item">
    <div class="column">
      <div class="hero-img first">
        <img
          :src="item.imgUrl"
          alt
        >
      </div>
      <div class="hero-info">
        <div
          v-if="index < 3"
          alt
          :class="`hero-no hero-no-${index + 1}`"
        ></div>
        <p
          v-else
          class="hero-no"
        >NO.{{index + 1}}</p>
        <p class="hero-name">{{item.name}}</p>
      </div>
    </div>
    <div class="column">{{item.options1}}</div>
    <div class="column">{{item.options2}}</div>
  </li>
</template>

<script>
export default {
  data() {
    return {};
  },

  name: "FriendListCommon",

  components: {},

  computed: {},

  mounted() {},

  props: ["item", "index"],

  methods: {}
};
</script>
<style lang='scss' scoped>
.hero-list-title {
  color: #888;
  font-size: 22px;
  text-align: center;
  > div:first-child {
    text-align: left;
  }
}
.hero-list-item {
  border-bottom: 1px solid #ececec;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  display: flex;
  padding: 10px 30px;
  & > .column:nth-child(2) {
    text-align: center;
    display: block;
    font-size: 28px;
    color: #323232;
  }
  & > .column:nth-child(3) {
    text-align: center;
    display: block;
    font-size: 28px;
    color: #d30c05;
  }
  > .column {
    display: flex;
    flex: 1;
    > .hero-img {
      padding: 17px 0 0 9px;
      margin-right: 15px;
      display: inline-block;
      > img {
        width: 90px;
        height: 90px;
      }
    }
    .first {
      background: url("../assets/images/huangguan1.png") no-repeat 0 0;
      background-size: 44px 44px;
    }
    > .hero-info {
      flex: 1;
      > .hero-no {
        display: block;
        width: auto;
        height: 34px;
        margin: 29px 0 12px 0;
        color: #323232;
        font-size: 24px;
      }
      > .hero-no-1 {
        background: url("../assets/images/no.1.png") no-repeat;
        background-size: auto 100%;
      }
      > .hero-no-2 {
        background: url("../assets/images/no.2.png") no-repeat;
        background-size: auto 100%;
      }
      > .hero-no-3 {
        background: url("../assets/images/no.3.png") no-repeat;
        background-size: auto 100%;
      }
      > .hero-name {
        font-size: 24px;
        color: #888;
      }
    }
  }
}
</style>