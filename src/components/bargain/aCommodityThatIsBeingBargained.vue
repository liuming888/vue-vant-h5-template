<template>
   <div class="freebing-box">
    <div class="freebing-title">Ongoing Freebies</div>
    <div class="freebing-container">
      <div class="good-box">
        <img class="good-img" src="./../../assets/images/good-mini.png" alt="">
        <div class="good-detail">
          <p class="good-title">Casual Large Capacity Comp</p>
          <div class="progress">
            <img src="./../../assets/images/progress-bar.png" width="65%" alt="">
            <div class="progress-content">
              <span>has been cut $8</span>
              <span>65%</span>
            </div>
          </div>
          <div class="count-down">
            <span class="time">12</span>
              :
            <span class="time">12</span>
              :
            <span class="time">12</span>
            <span class="dec">overdued</span>
          </div>
          <div class="goods-control">
            <a href="javascrip:;" class="button-l">
              Cash Back
            </a>
            <router-link to="/bargain" class="button-r">Go On</router-link>
          </div>
        </div>
      </div>
      <a href="javascript:;" class="freebing-more">More About ></a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.freebing-box {
  position: relative;
  margin: 0 30px;
  padding-bottom: 67px;
  // height: 300px;
  > .freebing-title {
    position: absolute;
    top: -20px;
    left: calc(50% - 175px);
    width: 350px;
    height: 60px;
    background: linear-gradient(0deg,rgba(246,76,1,1),rgba(246,171,1,1));
    border-radius: 0px 0px 8px 8px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
    color: #fff;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -2px;
      left: -21px;
      width: 0;
      height: 0;
      border-color: #AC4D07 transparent;
      border-width: 0px 0px 21px 21px;
      border-style: solid;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: -2px;
      right: -21px;
      width: 0;
      height: 0;
      border-color: #AC4D07 transparent;
      border-width: 0px 21px 21px 0;
      border-style: solid;
    }
  }
  > .freebing-container {
    padding: 24px;
    background-color: #fff;
    border-radius: 20px;
    > .good-box {
      margin-top: 44px;
      display: flex;
      > .good-img {
        width: 202px;
        height: 202px;
        margin-right: 30px;
      }
      > .good-detail {
        > .good-title {
          font-size: 30px;
          color: #323232;
        }
        > .progress {
          margin: 19px 0;
          position: relative;
          width: 236px;
          height: 28px;
          border-radius: 14px;
          background-color: #FECECA;
          padding: 0 16px;
          line-height: 28px;
          color: #fff;
          font-size: 20px;
          > img {
            // z-index: 1;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
          }
          > .progress-content {
            position: relative;
            > span:last-child {
              float: right;
              color: #D30C05;
            }
          }
        }
        > .count-down {
          font-size: 26px;
          color: #585858;
          line-height: 33px;
          > .time {
            display: inline-block;
            background-color: #585858;
            color: #fff;
            border-radius: 8px;
            padding: 0 6px;
          }
          > .dec {
            padding-left: 12px;
          }
        }
        > .goods-control {
          margin-top: 23px;
          // padding: 0 31px 39px 31px;
          // display: flex;
          height: 45px;
          > .button-l {
            position: relative;
            display: inline-block;
            font-size: 24px;
            color: #fff;
            text-indent: 49px;
            line-height: 45px;
            width:184px;
            height:45px;
            background:linear-gradient(90deg,rgba(246,174,1,1) 0%,rgba(246,75,1,1) 100%);
            border-radius:35px;
            text-decoration: none;
            &::before {
              content: '';
              display: block;
              width: 28px;
              height: 28px;
              position: absolute;
              top: 8px;
              left: 15px;
              background: url('./../../assets/images/btn-1.png') no-repeat;
              background-size: 100% auto;
            }
          }
          > .button-r {
            position: relative;
            float: right;
            font-size: 24px;
            color: #fff;
            text-indent: 69px;
            line-height: 45px;
            width:184px;
            height:45px;
            background:linear-gradient(90deg,rgba(211,12,5,1) 0%,rgba(246,78,1,1) 100%);
            border-radius:35px;
            text-decoration: none;
            &::before {
              content: '';
              display: block;
              width: 28px;
              height: 28px;
              position: absolute;
              top: 8px;
              left: 15px;
              background: url('./../../assets/images/btn-3.png') no-repeat;
              background-size: 100% auto;
            }
          }
        }
      }
    }
    > .freebing-more {
      margin-top: 35px;
      display: block;
      font-size: 24px;
      text-align: center;
      color: #585858;
    }
  }
  // background-color: #fff;
}
</style>
