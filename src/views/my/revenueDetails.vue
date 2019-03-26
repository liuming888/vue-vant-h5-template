<!--  -->
<template>
  <div class="revenue_detail">
    <header>
      Revenue Rp
      <span>{{total_revenue||0}}</span> &nbsp; &nbsp;
      Expenses Rp
      <span>{{total_expenses||0}}</span>
    </header>
    <div class="revenue-content">
      <ul>
        <li v-for="(item,index) in detailList"
          :key="index">
          <div>
            <img :src="item.icon">
          </div>
          <div class="con">
            <div class="intro">
              <p>{{item.summary}}</p>
              <p>{{item.update_time}}</p>
            </div>
            <div class="count"
              :class="{cash:item.amount_status==2}">{{item.amount_status==2?'-':'+'}}{{item.amount}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getFundRecordList } from "@/server/finance.js";
export default {
  data() {
    return {
      detailList: [],
      curPageDat: {
        page_size: 10,
        page_num: 1
      },
      total_revenue: 0,
      total_expenses: 0
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      let result = await getFundRecordList(this.curPageDat);
      if (result && result.data) {
        const { total_revenue, total_expenses, fund_records } = result.data;
        this.detailList = fund_records;
        this.total_revenue=total_revenue;
        this.total_expenses=total_expenses;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.revenue_detail {
  header {
    height: 92px;
    background: rgba(245, 245, 245, 1);
    line-height: 100px;
    font-size: 24px;
    color: #888888;
    padding: 0 30px;
    span {
      font-size: 28px;
    }
  }
}
.revenue-content {
  padding: 0 30px;
  li {
    display: flex;
    align-items: center;
    > div {
      &:first-child {
        width: 88px;
        img {
          width: 88px;
          height: 88px;
        }
      }
      &.con {
        flex: 1;
        padding-left: 20px;
        display: flex;
        > div {
          border-bottom: 1px solid #ececec;
          padding: 30px 0;
          &.count {
            width: 100px;
            color: #d30c05;
            font-size: 36px;
            &.cash {
              color: #323232;
            }
          }
          &.intro {
            flex: 1;
            p {
              line-height: 40px;
              color: #323232;
              font-size: 30px;
              &:last-child {
                color: #888888;
                font-size: 24px;
                margin-top: 15px;
              }
            }
          }
        }
      }
    }
  }
}
</style>