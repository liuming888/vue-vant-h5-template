<!--  -->
<template>
  <div class="totorial">
    <div class="totorial-bg">
      <div class="totorial-ct">
        <div class="totorial-ct-tit"></div>
        <ul class="totorial-ct-ul">
          <li class="totorial-ct-li">
            <p class="totorial-ct-li-q">Q: How long can I receive the goods?</p>
            <p class="totorial-ct-li-a">A: 3-15 Days.</p>
          </li>
          <li class="totorial-ct-li">
            <p class="totorial-ct-li-q">Q: When can I withdraw cash？</p>
            <p class="totorial-ct-li-a"><img src="../../assets/images/withdrawRule.png"></p>
          </li>
          <li class="totorial-ct-li">
            <p class="totorial-ct-li-q">Q: Share & Earn</p>
            <p class="totorial-ct-li-a">A: Invite your friends to join Istarbuy, and you will get referral bonus.
              Sharing Istarbuy to one or multiple friends.
              Copy & paste the invite link to your friends.
            </p>
          </li>
          <li class="totorial-ct-li">
            <p class="totorial-ct-li-q">Q: You can contact us in the way as follow</p>
            <p class="totorial-ct-li-a">A: ① Facebook fan page: @Lovingistarbuy
              ② LINE: Istarbuy
              ③ WeChat: Istarbuy</p>
          </li>
        </ul>
      </div>
      <div class="totorial-ct-contact"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.totorial {
  position: absolute;
  width: 100%;
  min-height: 100%;
  background: -webkit-linear-gradient(#d30c05, #e2431e);
  background: linear-gradient(#d30c05, #e2431e);
}
.totorial-bg {
  // width: 100%;
  padding: 485px 30px 60px;
  background-repeat: no-repeat;
  background-image: url("../../assets/images/tutorial/theme.png");
  background-size: 100% auto;
  .totorial-ct {
    padding: 20px 44px 60px;
    background-color: #fff;
    border-radius: 10px;
  }
  .totorial-ct-tit {
    width: 490px;
    height: 80px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-image: url("../../assets/images/tutorial/commonProblem.png");
    background-size: 100% auto;
  }
  .totorial-ct-ul {
    margin-top: 40px;
  }
  .totorial-ct-li {
    margin-top: 80px;
    &:first-of-type {
      margin-top: 0;
    }
  }
  .totorial-ct-li-q {
    font-size: 30px;
    color: #323232;
    line-height: 45px;
  }
  .totorial-ct-li-a {
    font-size: 30px;
    color: #888888;
    line-height: 45px;
    margin-top: 10px;
    img{
      width: 100%;
    }
  }
}
.totorial-ct-contact {
  margin-top: 48px;
  min-height: 412px;
  background-repeat: no-repeat;
  background-image: url("~@/assets/images/contactUs.png");
  background-size: 100% auto;
}
</style>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
