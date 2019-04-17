<style lang="scss" scoped>
.dec {
  margin-right: 10px;
  font-size: 20px;
  font-weight: 400;
  color: rgba(88, 88, 88, 1);
  line-height: 42px;
  position: relative;
  top:3px;
}

.count-down {
  margin: 22px 0;
  font-size: 24px;
  color: #585858;
  line-height: 31px;
  > .time {
    display: inline-block;
    background-color: #585858;
    color: #fff;
    border-radius: 8px;
    padding: 0 6px;
  }
  > .dec {
    // font-weight: lighter;
    // padding-left: 12px;
  }
}
</style>


<template>
  <div class="count-down">
    <span class="dec">End in</span>

    <span class="time">{{time.h}}</span>
    :
    <span class="time">{{time.p}}</span>
    :
    <span class="time">{{time.m}}</span>
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";
export default {
  data() {
    return {
      time: {
        h: "00",
        p: "00",
        m: "00"
      },
      setIntervalBox: null,
      newTime: 0
    };
  },
  props: {
    dateDiff: {
      // type: Number,
      default: 0
    }
  },
  mounted() {
    this.startCountDown();
  },
  destroyed() {
    // 清除计时器
    clearInterval(this.setIntervalBox);
  },
  methods: {
    getDifferTime(dateDiff) {
      this.time = this.$util.expiration(dateDiff);
    },
    startCountDown() {
      clearInterval(this.setIntervalBox);
      // 创建计时器
      this.newTime = this.dateDiff;
      this.setIntervalBox = setInterval(() => {
        if (this.newTime > 1000) {
          this.newTime -= 1000;
          this.getDifferTime(this.newTime);
        } else {
          clearInterval(this.setIntervalBox);
        }
      }, 1000);
    }
  },
  watch: {
    dateDiff(val) {
      this.startCountDown();
    }
  }
};
</script>

