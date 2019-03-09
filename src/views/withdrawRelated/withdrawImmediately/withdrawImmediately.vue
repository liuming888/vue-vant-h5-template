<style lang="scss" scoped>
.withdrawImmediately-container{
  background: #f9f9f9;
  min-height: 100vh
}

.tabs {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(236, 236, 236, 1);
  box-align: border-box;
  font-size: 30px;
  font-family: Helvetica;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);

  li {
    flex: 4;
    text-align: center;
    line-height: 70px;
    border: 1px solid #ececec;
    box-align: border-box;

    &:nth-last-child(1) {
      border-right: none;
    }
    &.cur {
      background: rgba(255, 238, 237, 1);
      color: #323232;
      border-right: none;
    }
  }
}
</style>


<template>
  <div class="withdrawImmediately-container">
    <ul class="tabs">
      <li class="toWithdraw cur">Cash out1</li>
      <li class="withdrawalsRecord">Cash out2</li>
      <li class="incomeBreakdown">Cash out3</li>
    </ul>

    <div class="withdrawImmediately-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>
