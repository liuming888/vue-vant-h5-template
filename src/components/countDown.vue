<template>
  <div class="count-down">
    <span class="time">{{time.h}}</span>
    :
    <span class="time">{{time.p}}</span>
    :
    <span class="time">{{time.m}}</span>
    <span class="dec">overdued</span>
  </div>
</template>

<script>
import moment from 'moment';
import { setInterval, clearInterval } from 'timers';
export default {
  data() {
    return {
      time: {
        h: '00',
        m: '00',
        s: '00'
      },
      setIntervalBox: null,
      newTime: 0,
    }
  },
  props: {
    dateDiff: {
      // type: Number,
      default: 0
    }
  },
  mounted() {
    this.startCountDown()
  },
  destroyed() {
    // 清除计时器
    clearInterval(this.setIntervalBox)
  },
  methods: {
    
    getDifferTime(dateDiff) {//di作为一个变量传进来
      // // const dateDiff = moment(dateDiff, "YYYYMMDD h:mm:ss").unix() - moment().unix();//时间差的毫秒数
      // const dayDiff = Math.floor(dateDiff / (24 * 3600));//计算出相差天数
      // const leave1=dateDiff%(24*3600)    //计算天数后剩余的毫秒数
      // const hour=Math.floor(dateDiff/(3600))//计算出小时数
      // //计算相差分钟数
      // const leave2=leave1%(3600)    //计算小时数后剩余的毫秒数
      // const minute=Math.floor(leave2/(60))//计算相差分钟数
      // //计算相差秒数
      // const leave3=leave2%(60)      //计算分钟数后剩余的毫秒数
      // const second=Math.round(leave3)
      // // console.log(" 相差 "+dayDiff+"天 "+hour+"小时 "+minute+" 分钟"+second+" 秒")


      // const {h,p,m}=this.$util.expiration(dateDiff);

      this.time =  this.$util.expiration(dateDiff);
    },
    startCountDown() {
      clearInterval(this.setIntervalBox)
      // 创建计时器
      this.newTime = this.dateDiff
      this.setIntervalBox = setInterval(() => {
        if (this.newTime > 1000) {
          this.newTime -= 1000
          this.getDifferTime(this.newTime)
        } else {
          clearInterval(this.setIntervalBox)
        }
      }, 1000)
    }
  },
  watch: {
    dateDiff() {
      this.startCountDown()
    }
  }
}
</script>

<style lang="scss" scoped>
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
      font-weight: lighter;
      padding-left: 12px;
  }
}
</style>
