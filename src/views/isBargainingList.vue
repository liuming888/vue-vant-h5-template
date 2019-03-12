<style lang="scss" scoped>
.isBargainingList-container {
  .banner {
    width: 100%;
    height: 148px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  > .finish-box {
    margin-bottom: 30px;
    > .goods-list {
      padding: 40px 30px;
      > .goods-item {
        display: flex;
        border-bottom: 1px solid #f2f2f2;
        padding-bottom: 40px;
        & + .goods-item {
          margin-top: 40px;
        }
        > .img-box {
          width: 210px;
          height: 210px;
          margin-right: 20px;
          > img {
            width: 100%;
          }
        }
        > .detail {
          flex: 1;
          > .title {
            font-size: 28px;
            color: #323232;
            line-height: 37px;
            // overflow: hidden;
            // text-overflow:ellipsis;
            // white-space: nowrap;
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
            > .price-item {
              flex: 1;
              > .btn {
                width: 168px;
                height: 66px;
                line-height: 66px;
                background: linear-gradient(
                  90deg,
                  rgba(246, 173, 1, 1) 0%,
                  rgba(246, 77, 1, 1) 100%
                );
                border-radius: 34px;
                text-align: center;
                font-size: 34px;
                color: #fff;
                margin: 50px 0 14px 0;
                display: inline-block;
              }
              > .completed {
                display: inline-block;
                width: 168px;
                text-align: center;
                color: #888888;
                font-size: 24px;
              }
              > .now-price {
                color: #d30c05;
                font-size: 36px;
                > span {
                  font-size: 22px;
                }
              }
              > .real-price {
                color: #888888;
                font-size: 24px;
                text-decoration: line-through;
                > span {
                  font-size: 16px;
                }
              }
              &:last-of-type {
                text-align: right;
              }
            }
          }
        }
      }
    }
  }
  > .ing-box {
    margin-bottom: 30px;
    > .goods-list {
      padding: 40px 30px;
      > .goods-item {
        display: flex;
        border-bottom: 1px solid #f2f2f2;
        padding-bottom: 40px;
        & + .goods-item {
          margin-top: 40px;
        }
        > .img-box {
          width: 210px;
          height: 210px;
          margin-right: 20px;
          > img {
            width: 100%;
          }
        }
        > .detail {
          flex: 1;
          overflow: hidden;
          > .title {
            width: 100%;
            font-size: 28px;
            color: #323232;
            line-height: 37px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          > .count-down {
            margin: 0;
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
            > .price-item {
              flex: 1;
              > .msg-box {
                display: inline-block;
                padding: 0 10px;
                min-width: 150px;
                height: 32px;
                background: url("./../assets/images/goods-msg-box.png")
                  no-repeat;
                background-size: 100% 100%;
                text-align: center;
                color: #f65e10;
                font-size: 20px;
                line-height: 24px;
              }
              > .cut-schedule {
                > .cut {
                  color: #888;
                  font-size: 18px;
                  > span {
                    font-size: 24px;
                  }
                }
                > .schedule {
                  line-height: 20px;
                  display: inline-block;
                  margin-left: 10px;
                  position: relative;
                  width: 120px;
                  height: 16px;
                  background: rgba(255, 255, 255, 1);
                  border: 1px solid rgba(252, 123, 119, 1);
                  border-radius: 8px;
                  > .active {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 60%;
                    height: 100%;
                    background: rgba(254, 206, 202, 1);
                    border-radius: 8px;
                  }
                }
              }
              > .btn {
                width: 168px;
                height: 66px;
                line-height: 66px;
                background: linear-gradient(
                  90deg,
                  rgba(246, 173, 1, 1) 0%,
                  rgba(246, 77, 1, 1) 100%
                );
                border-radius: 34px;
                text-align: center;
                font-size: 34px;
                color: #fff;
                margin: 40px 0 14px 0;
                display: inline-block;
              }
              > .completed {
                display: inline-block;
                width: 168px;
                text-align: center;
                color: #888888;
                font-size: 24px;
              }
              > .now-price {
                color: #d30c05;
                font-size: 36px;
                > span {
                  font-size: 22px;
                }
              }
              > .real-price {
                color: #888888;
                font-size: 24px;
                text-decoration: line-through;
                > span {
                  font-size: 16px;
                }
              }
              &:last-of-type {
                text-align: right;
              }
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="isBargainingList-container">
    <div class="finish-box"
      v-if="finishList.length > 0">
      <div class="banner">
        <img src="./../assets/images/bargain-finish-banner.png"
          alt="">
      </div>
      <ul class="goods-list">
        <li class="goods-item"
          v-for="(item, index) in finishList"
          :key="index">
          <div class="img-box">
            <img v-lazy="item.spu.spu_pics[0]">
          </div>
          <div class="detail">
            <p class="title">{{item.spu.title}}</p>
            <div class="price-box">
              <div class="price-item">
                <p class="now-price"><span>Rp</span>{{item.bargain_info.bargain_ater}}</p>
                <p class="real-price"><span>Rp</span>{{item.bargain_info.price}}</p>
              </div>
              <div class="price-item">
                <div class="btn"
                  @click="jumpPurchasePage(item.spu.spu_id)">To Buy</div>
                <p class="completed">completed</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="ing-box"
      v-if="ingList.length > 0">
      <div class="banner">
        <img src="./../assets/images/bargin-active-banner.png"
          alt="">
      </div>
      <ul class="goods-list">
        <li class="goods-item"
          v-for="(item, index) in ingList"
          :key="index">
          <div class="img-box">
            <img v-lazy="item.spu.spu_pics[0]">
          </div>
          <div class="detail">
            <p class="title">{{item.spu.title}}</p>
            <count-down :dateDiff="item.spu.expire_ttl"></count-down>
            <div class="price-box">
              <div class="price-item">
                <div class="msg-box">cut Rp {{item.bargain_info.bargain_amount}}</div>
                <p class="now-price"><span>Rp</span>{{item.bargain_info.bargain_ater}}</p>
                <p class="real-price"><span>Rp</span>{{item.bargain_info.price}}</p>
              </div>
              <div class="price-item">
                <div class="btn"
                  @click="jumpCurBargainPage(item.spu.spu_id)">Go On</div>
                <div class="cut-schedule">
                  <span class="cut">cut <span>{{item.bargain_info.bargain_rate}}%</span></span>
                  <div class="schedule">
                    <div class="active"
                      :style="{'width': `${item.bargain_info.bargain_rate}%`}"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import aCommodityThatIsBeingBargained from "@/components/bargain/aCommodityThatIsBeingBargained.vue";
import countDown from "@/components/countDown.vue";
import { getMyBargainSpus } from "@/server/bargain.js";
export default {
  components: {
    aCommodityThatIsBeingBargained, // 一件正在进行砍价商品
    countDown
  },
  data() {
    return {
      finishList: [],
      ingList: []
    };
  },
  created() {
    this.getMyBargainInfo();
  },
  methods: {
    async getMyBargainInfo() {
      const params = {
        page_size: 10,
        page_num: 1
      };
      try {
        const result = await getMyBargainSpus(params);
        this.finishList = result.data.filter(
          item => item.bargain_info.status === 2
        );
        this.ingList = result.data.filter(
          item => item.bargain_info.status === 1
        );
      } catch (error) {}
    },
    jumpCurBargainPage(spu_id) {
      this.$router.push({
        path: "/bargain",
        query: {
          spuId: spu_id
        }
      });
    },
    jumpPurchasePage(spu_id) {
      this.$router.push({
        path: "/purchase",
        query: {
          spuId: spu_id
        }
      });
    }
  }
};
</script>
