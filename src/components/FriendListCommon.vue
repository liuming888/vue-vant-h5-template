<style lang='scss' scoped>
.hero-list-title {
  color: #888;
  font-size: 22px;
  text-align: center;
  > div:first-child {
    text-align: left;
  }
}
.hero-list-item {
  height: 148px;
  border-bottom: 1px solid #ececec;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  padding-left: 37px;

  & > .column:nth-child(2) {
    text-align: center;
    display: block;
    font-size: 28px;
    color: #323232;
  }
  & > .column:nth-child(3) {
    text-align: center;
    display: block;
    font-size: 28px;
    color: #d30c05;
  }
  > .column {
    display: flex;
    flex: 1;
    align-items: center;

    &.column-time{
      font-size: 20px;
      
    }

    > .hero-img {
      // padding: 17px 0 0 9px;
      margin-right: 15px;
      display: inline-block;
      > img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
      }
    }
    .first {
      position: relative;

      &::before {
        content: "";
        width: 40px;
        height: 40px;
        position: absolute;
        left: -8px;
        top: -18px;
      }

      .avatar-img{
        position: relative;
        z-index: 10;
      }
    }

    .first0{
        &::before {
        background: url("../assets/images/huangguan1.png") no-repeat 0 0/36px 36px;
      }
    }

    .first1{
        &::before {
        background: url("../assets/images/huangguan2.png") no-repeat 0 0/36px 36px;
      }
    }

    .first2{
        &::before {
        background: url("../assets/images/huangguan3.png") no-repeat 0 0/36px 36px;
      }
    }

    > .hero-info {
      flex: 1;
      > .hero-no {
        display: block;
        width: auto;
        height: 34px;
        // margin: 29px 0 12px 0;
        color: #323232;
        font-size: 24px;
        text-align: left;
      }
      > .hero-no-1 {
        background: url("../assets/images/no.1.png") no-repeat;
        background-size: auto 100%;
      }
      > .hero-no-2 {
        background: url("../assets/images/no.2.png") no-repeat;
        background-size: auto 100%;
      }
      > .hero-no-3 {
        background: url("../assets/images/no.3.png") no-repeat;
        background-size: auto 100%;
      }
      > .hero-name {
        width: 120px;
        font-size: 24px;
        color: #888;
        text-align: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>

<template>
  <li class="hero-list-item">
    <div class="column">
      <div class="hero-img first" :class="'first'+index">
        <img v-lazy="item.avatar" class="avatar-img"
          alt>
      </div>
      <div class="hero-info">
        <div v-if="index < 3"
          alt
          :class="`hero-no hero-no-${index + 1}`"></div>
        <p v-else
          class="hero-no">NO.{{index + 1}}</p>
        <p class="hero-name">{{item.username}}</p>
      </div>
    </div>
    <div class="column column-time">{{item.joinTime||item.fans_count}}</div>
    <div class="column">{{item.profit||item.sum_amount||0}}</div>
  </li>
</template>

<script>
export default {
  name: "FriendListCommon",
  props: {
    item: {
      type: Object,
      default() {
        return {
          //类型：Object  必有字段  备注：无
          user_id: 1, //类型：Number  必有字段  备注：无
          joinTime: "2019-03-08 16:50:50", //类型：String  必有字段  备注：无
          avatar: "12", //类型：String  必有字段  备注：无
          profit: 50, //类型：Number  必有字段  备注：无
          username: "1212" //类型：String  必有字段  备注：无
        };
      }
    },
    index: {
      type: Number
    }
  }
};
</script>
