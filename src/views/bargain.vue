<style lang="scss" scoped>
.bargain-container {
  > .bargain-header {
    position: relative;
    padding: 40px 30px 150px 30px;
    height: 400px;
    background: url('./../assets/images/bargain-bg.png') no-repeat;
    background-size: 100%;
    > .bargain-info-box {
      background-color: #fff;
      border-radius: 20px;
      padding: 34px;
      > .bargain-info {
        display: flex;
        > .img-box {
          width: 220px;
          height: 220px;
          margin-right: 24px;
          > img {
            width: 100%;
            // height: 100%;
          }
        }
        > .detail {
          flex: 1;
          > .title {
            font-size: 26px;
            color: #323232;
            line-height: 37px;
          }
          > .count-down {
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
              padding-left: 12px;
            }
          }
          > .price-box {
            display: flex;
            align-items: flex-end;
            > .price-box-item {
              flex: 1;
              & + .price-box-item {
                margin-left: 10px;
              }
              > .p-t-1 {
                font-size: 18px;
                color: #888;
                > span:first-child {
                  font-size: 16px;
                  color: #F77E18;
                  // text-decoration: line-through;
                }
                > span:last-child {
                  font-size: 24px;
                  color: #F77E18;
                  text-decoration: line-through;
                }
              }
              > .p-t-2 {
                display: block;
                padding: 0 6px;
                background-color: #D30C05;
                line-height: 22px;
                color: #fff;
                font-size: 18px;
                border-radius: 6px;
              }
              > .p-n-1 {
                color: #D30C05;
                font-size: 41px;
                > span {
                  font-size: 22px;
                }
              }
              > .p-n-2 {
                color: #888;
                font-size: 24px;
                margin-bottom: 6px;
              }
            }
          }
        }
      }
      > .bargain-schedule {
        margin: 78px 0 25px 0;
        > .title {
          font-size: 24px;
          color: #323232;
          text-align: center;
          margin-bottom: 25px;
          .dollar {
            font-size: 20px; 
          }
          > .n-1 {
            font-size: 30px;
            color: #F75E10;
          }
          > .n-2 {
            font-size: 30px;
            color: #D30C05;
          }
        }
        .schedule {
          position: relative;
          margin: 0 auto;
          width: 580px;
          height: 18px;
          border-radius: 9px;
          background-color: #FECECA;
          display: flex;
          > .active {
            position: absolute;
            top: 0;
            left: 0;
            width: 30%;
            height: 100%;
            background: url('./../assets/images/progress-bar-1.png') no-repeat;
            background-size: auto 100%;
            border-radius: 9px;
          }
          > .schedule-item {
            position: relative;
            flex: 1;
            padding-top: 40px;
            text-align: center;
            font-size: 18px;
            color: #323232;
            .highlight {
              color: #D30C05;
              font-size: 20px;
            }
          }
          > .schedule-item:nth-of-type(2) {
            text-align: left;
          }
          > .schedule-item:last-of-type {
            text-align: right;
          }
          > .ball::after {
            content: '';
            position: absolute;
            top: -3px;
            // left: 0;
            width: 24px;
            height: 24px;
            border-radius: 12px;
            background:linear-gradient(-45deg,rgba(238,93,47,1),rgba(255,155,4,1));
          }
          > .ball-center::after {
            left: calc(50% - 12px);
          }
          > .ball-right::after {
            right: 0;
          }
        }
      }
    }
  }
  > .bargain-content {
    padding: 0 30px;
    .page-title {
      position: relative;
      width: 100%;
      display: block;
      height: 75px;
      line-height: 75px;
      // margin: 50px 0;
      font-size: 26px;
      text-align: center;
      color: #323232;
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 20%;
        width: 70px;
        height: 1px;
        background-color: #ccc;
      }
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        right: 20%;
        width: 70px;
        height: 1px;
        background-color: #ccc;
      }
    }
    > .team-box {
      > .team-list {
          margin-bottom: 38px;
          > li {
              display: flex;
              align-items: center;
              > .column {
                  flex: 1;
              }
          }
          > .team-list-title {
              color: #888;
              font-size: 22px;
              text-align: center;
              > div:first-child {
                  text-align: left;
              }
          }
          > .team-list-item {
              margin-top: 30px;
              & > .column:nth-child(2) {
                  text-align: center;
                  display: block;
                  font-size: 26px;
                  color: #888888;
                  line-height: 90px;
                  > .dollar {
                    font-size: 22px;
                    color: #D30C05;
                    > span {
                      font-size: 30px;
                    }
                  }
              }
              > .column {
                  display: flex;
                  > .team-img {
                      padding: 17px 0 0 9px;
                      margin-right: 20px;
                      display: inline-block;
                      > img {
                          width: 90px;
                          height: 90px;
                      }
                  }
                  .first {
                      background: url('./../assets/images/huangguan1.png') no-repeat 0 0;
                      background-size: 44px 44px;
                  }
                  > .team-info {
                      flex: 1;
                      > .team-name {
                        margin-top: 17px;
                        line-height: 90px;
                        font-size: 24px;
                        color: #323232;
                      }
                  }
              }
          }
      }
    }
    > .recommend-products {
      display: flex;
      flex-wrap: wrap;
      > .page-title {
        margin-bottom: 30px;
      }
      > .recommend-item {
        box-sizing: border-box;
        width: calc(50% - 10px);
        border:1px solid rgba(229,229,229,1);
        border-radius:10px 10px 0px 0px;
        overflow: hidden;
        margin-bottom: 28px;
        > .products-photo {
          width: 100%;
          height: auto;
        }
        > .products-title {
          margin: 15px 0 27px 0;
          color: #323232;
          font-size: 28px;
          text-align: center;
        }
        > .products-ctrl {
          line-height: 50px;
          color: #888;
          font-size: 24px;
          padding: 0 24px;
          margin-bottom: 45px;
          > .btn {
            display: block;
            float: right;
            font-size: 24px;
            color: #fff;
            text-align: center;
            width:160px;
            height:50px;
            background:linear-gradient(90deg,rgba(211,12,5,1) 0%,rgba(246,78,1,1) 100%);
            border-radius:25px;
            text-decoration: none;
          }
        }
      }
      > .recommend-item:nth-of-type(2n) {
        margin-left: 20px;
      }
    }
  }
}
</style>


<template>
  <div class="bargain-container">
    <!-- 头部信息 -->
    <div class="bargain-header">
      <div class="bargain-info-box">
        <!-- 砍价商品信息 -->
        <div class="bargain-info">
          <div class="img-box">
            <img src="./../assets/images/good-large.png" alt="">
          </div>
          <div class="detail">
            <p class="title">Casual Large Capacity Copartment Handbag women</p>
            <div class="count-down">
              <span class="time">12</span>
                :
              <span class="time">12</span>
                :
              <span class="time">12</span>
              <span class="dec">overdued</span>
            </div>
            <div class="price-box">
              <div class="price-box-item">
                <p class="p-t-1">
                  Price
                  <span>$</span><span>999</span>
                </p>
                <p class="p-t-2">current price</p>
              </div>
              <div class="price-box-item">
                <p class="p-n-1"><span>$</span>9.80</p>
              </div>
              <div class="price-box-item">
                <p class="p-n-2">2432 Sent</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 砍价进度 -->
        <div class="bargain-schedule">
          <p class="title">Has been cut <span class="n-1"><span class="dollar">$</span>10.00</span>, leaving <span class="n-2"><span class="dollar">$</span>39.8</span></p>
          <div class="schedule">
            <div class="active ball ball-right"></div>
            <div class="schedule-item">
              <span class="description">cut <span class="highlight">45%</span></span>
            </div>
            <div class="schedule-item ball ball-center">
              <span class="description">Available for purchase</span>
            </div>
            <div class="schedule-item ball ball-right">
              <span class="description">Take it free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bargain-content">
      <!-- 商品详情 -->
      <div class="goods-detail">

      </div>
      <!-- 帮砍团队 -->
      <div class="team-box">
        <p class="page-title">Bargaining team</p>
        <ul class="team-list">
          <li class="team-list-item" v-for="(item, index) in teamList" :key="index">
              <div class="column">
                  <div class="team-img first">
                      <img :src="item.imgUrl" alt="">
                  </div>
                  <div class="team-info">
                      <p class="team-name">{{item.name}}</p>
                  </div>
              </div>
              <div class="column">cut <span class="dollar">$<span>{{item.money}}</span></span></div>
          </li>
      </ul>
      </div>
      <!-- 推荐商品 -->
      <div class="recommend-products">
        <p class="page-title">More Products</p>
        <div class="recommend-item">
          <img src="./../assets/images/good-large.png" alt="" class="products-photo">
          <p class="products-title">Water Women Bagba</p>
          <div class="products-ctrl">
            <span class="money">2432 Sent</span>
            <a href="javascrip:;" class="btn">Get Freebie</a>
          </div>
        </div>
        <div class="recommend-item">
          <img src="./../assets/images/good-large.png" alt="" class="products-photo">
          <p class="products-title">Water Women Bagba</p>
          <div class="products-ctrl">
            <span class="money">2432 Sent</span>
            <a href="javascrip:;" class="btn">Get Freebie</a>
          </div>
        </div>
        <div class="recommend-item">
          <img src="./../assets/images/good-large.png" alt="" class="products-photo">
          <p class="products-title">Water Women Bagba</p>
          <div class="products-ctrl">
            <span class="money">2432 Sent</span>
            <a href="javascrip:;" class="btn">Get Freebie</a>
          </div>
        </div>
        <div class="recommend-item">
          <img src="./../assets/images/good-large.png" alt="" class="products-photo">
          <p class="products-title">Water Women Bagba</p>
          <div class="products-ctrl">
            <span class="money">2432 Sent</span>
            <a href="javascrip:;" class="btn">Get Freebie</a>
          </div>
        </div>
      </div>
    </div>
    <!-- <dialog-sharing-friends :dialogVisible.sync="dialogs.sharingFriends"/> -->
  </div>
</template>

<script>
import bargainingProgressBar from "@/components/bargain/bargainingProgressBar.vue";
import  dialogSharingFriends from '@/components/dialogs/dialogSharingFriends.vue';
import bargainingHelpInformation from '@/components/bargain/bargainingHelpInformation.vue';
import commodityItem from '@/components/commodity/commodityItem.vue';
export default {
  components: {
    bargainingProgressBar, // 砍价进度条
    dialogSharingFriends,  // 分享好友弹窗
    bargainingHelpInformation, // 砍价帮
    commodityItem // 商品列表展示的商品X 
  },
  data(){
    return {
      dialogs:{
        sharingFriends:{
          show:true
        }
      },
      // 团队
      teamList: [
          {
              name: 'Chrsitin  Andy',
              money: 20000,
              imgUrl: require('@/assets/images/tabBar-me-active.png')
          },
          {
              name: 'Chrsitin  Andy',
              money: 20000,
              imgUrl: require('@/assets/images/tabBar-me-active.png')
          },
          {
              name: 'Chrsitin  Andy',
              money: 20000,
              imgUrl: require('@/assets/images/tabBar-me-active.png')
          },
          {
              name: 'Chrsitin  Andy',
              money: 20000,
              imgUrl: require('@/assets/images/tabBar-me-active.png')
          },
          {
              name: 'Chrsitin  Andy',
              money: 20000,
              imgUrl: require('@/assets/images/tabBar-me-active.png')
          },
          {
              name: 'Chrsitin  Andy',
              money: 20000,
              imgUrl: require('@/assets/images/tabBar-me-active.png')
          },
      ]
    }
  }
};
</script>
