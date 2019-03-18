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
        <li
          v-for="(item,index) in detailList"
          :key="index"
        >
          <div>
            <img :src="item.icon">
          </div>
          <div class="con">
            <div class="intro">
              <p>{{item.name}}</p>
              <p>{{item.time}}</p>
            </div>
            <div class="count" :class="{cash:item.isCash}">{{item.count}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailList: [
        {
          icon: "",
          name: "Newcomer  reward",
          time: "2019-02-15 13:24:56",
          count: "+5.00",
          isCash:false
        },
        {
          icon: "",
          name: "Newcomer  reward",
          time: "2019-02-15 13:24:56",
          count: "+5.00",
          isCash:true
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
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
            color: #D30C05;
            font-size: 36px;
            &.cash{
                color: #323232;
            }
          }
          &.intro {
            flex: 1;
            p{
                line-height: 40px;
                color: #323232;
                font-size: 30px;
                &:last-child{
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