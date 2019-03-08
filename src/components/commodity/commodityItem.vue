<style lang="scss" scoped>
.home-goods-item {
  border-radius: 20px;
  background-color: #fff;
  overflow: hidden;
  & + .home-goods-item {
    margin-top: 30px;
  }
  > .goods-img {
    > img {
      width: 100%;
      height: auto;
    }
  }
  > .goods-detail {
    padding: 49px 31px 0 31px;
    > .goods-title {
      font-size: 36px;
      color: #323232;
    }
    > .goods-description {
      line-height: 40px;
      font-size: 24px;
      color: #888888;
    }
    > .goods-price {
      padding: 10px 0;
      line-height: 44px;
      > .discount {
        font-size: 44px;
        color: #D30C05;
      }
      > .real {
        padding-left: 17px;
        font-size: 24px;
        color: #888888;
        text-decoration: line-through;
      }
    }
  }
  > .goods-control {
    padding: 0 31px 39px 31px;
    // display: flex;
    height: 70px;
    > .button-l {
      position: relative;
      display: inline-block;
      font-size: 28px;
      color: #fff;
      text-indent: 84px;
      line-height: 70px;
      width:260px;
      height:70px;
      background:linear-gradient(90deg,rgba(246,174,1,1) 0%,rgba(246,75,1,1) 100%);
      border-radius:35px;
      text-decoration: none;
      &::before {
        content: '';
        display: block;
        width: 34px;
        height: 34px;
        position: absolute;
        top: 18px;
        left: 39px;
        background: url('./../../assets/images/btn-1.png') no-repeat;
        background-size: 100% auto;
      }
    }
    > .button-r {
      position: relative;
      float: right;
      font-size: 28px;
      color: #fff;
      text-indent: 84px;
      line-height: 70px;
      width:260px;
      height:70px;
      background:linear-gradient(90deg,rgba(211,12,5,1) 0%,rgba(246,78,1,1) 100%);
      border-radius:35px;
      text-decoration: none;
      &::before {
        content: '';
        display: block;
        width: 34px;
        height: 34px;
        position: absolute;
        top: 18px;
        left: 39px;
        background: url('./../../assets/images/btn-2.png') no-repeat;
        background-size: 100% auto;
      }
    }
  }
}
</style>


<template>
  <div class="commodityItem-container">
    <div class="home-goods-item">
      <div class="goods-img">
        <img :src="itemData.imgUrl || ''" alt="">
      </div>
      <div class="goods-detail">
        <a :href="itemData.path || '/'" class="goods-title">{{itemData.title || ''}}</a>
        <p class="goods-description">{{itemData.description || ''}}</p>
        <p class="goods-description">2432 Sent</p>
        <div class="goods-price">
          <span class="discount">$ {{itemData.discount || 0}}</span>
          <span class="real">${{itemData.realAmount || 0}}</span>
        </div>
      </div>
      <div class="goods-control">
        <a href="javascrip:;" class="button-l">
          Cash Back
        </a>
        <a href="javascrip:;" class="button-r">Get Freebie</a>
      </div>
    </div>
    <dialog-sharing-makes :dialogVisible.sync="dialogs.sharingMakes"/>
  </div>
</template>

<script>
import dialogSharingMakes from "./dialogSharingMakes.vue";
export default {
    components: {
      dialogSharingMakes // 分享赚弹起浮窗 
    },
    data(){
      return {
        dialogs:{
          sharingMakes:{
            show:true
          }
        }
      }
    },
    props: {
      itemData: {
        type: Object,
        // default: {
        //   title: 'Casual Large Capacity Compartment',
        //   path: '/',
        //   description: 'Details details details details details details details details',
        //   discount: '0.00',
        //   realAmount: '1258',
        //   imgUrl: require('@/assets/images/good-large.png')
        // },
      }
    }
};
</script>
