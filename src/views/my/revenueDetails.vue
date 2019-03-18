<!--  -->
<template>
  <div class="revenue_detail">
    <header>
      Revenue Rp
      <span>9.886.587</span>Expenses Rp
      <span>9.886.587</span>
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
      detailList: [
        {
          //类型：Object  必有字段  备注：无
          id: 1, //类型：Number  必有字段  备注：id
          type: 1, //类型：Number  必有字段  备注：收入类型（1：购物佣金 2：砍价分成 3.提现）
          txid: 1, //类型：Number  必有字段  备注：业务id
          summary: "213", //类型：String  必有字段  备注：转账或者奖励摘要信息
          amount: 12, //类型：Number  必有字段  备注：金额数值
          user_id: 1, //类型：Number  必有字段  备注：用户id
          icon: "mock", //类型：String  必有字段  备注：无
          amount_status: "1", //类型：String  必有字段  备注：1: 增加 2：减少
          create_time: "2019-03-15 03:24:28", //类型：String  必有字段  备注：创建时间
          update_time: "2019-03-15 03:24:28" //类型：String  必有字段  备注：更新时间
        }
      ],
      curPageDat:{
        page_size:10,
        page_num:1
      }
    };
  },
  created () {
    this.init();
  },
  methods: {
    async init(){
      let result=await getFundRecordList(this.curPageDat);
      if(result&&result.data){
        this.detailList=result.data;
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