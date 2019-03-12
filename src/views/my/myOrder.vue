<style lang="scss" scoped>
    .all-order {
        padding: 20px 30px;
        > .all-order-item {
            padding: 30px 20px;
            & + .all-order-item {
                margin-top: 20px;
            }
            > .info-box {
                display: flex;
                margin-bottom: 20px;
                > img {
                    width: 200px;
                    height: 200px;
                    margin-right: 20px;
                }
                > .info {
                    flex: 1;
                    overflow: hidden;
                    > .info-top {
                        display: flex;
                        color: #323232;
                        font-size: 28px;
                        font-weight: lighter;
                        > .title {
                            flex: 3;

                        }
                        > .price {
                            flex: 1;
                            text-align: right;
                        }
                    }
                    > .info-description, > .address {
                        font-size: 24px;
                        color: #888;
                        margin-top: 10px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
            > .ctrl-box {
                text-align: right;
                > .btn {
                    display: inline-block;
                    width: 190px;
                    height: 64px;
                    border:1px solid rgba(211,12,5,1);
                    border-radius:32px;
                    color: #D30C05;
                    line-height: 64px;
                    font-size: 28px;
                    text-align: center;
                }
                > .active {
                    color: #fff;
                    background-color: #D30C05;
                }
            }
        }
    }
</style>

<template>
    <div class="order-container">
        <van-tabs swipeable title-active-color="#D30C05" title-inactive-color="#323232">
            <van-tab v-for="(item, index) in tabList" :title="item" :key="index">
                <!-- 所有订单 -->
                <ul class="all-order">
                    <li class="all-order-item">
                        <div class="info-box">
                            <img src="./../../assets/images/good-large.png" alt="">
                            <div class="info">
                                <div class="info-top">
                                    <p class="title">Casual Large Capacity Copartment Handbag women</p>
                                    <div class="price">Rp0.00</div>
                                </div>
                                <p class="info-description">Color :386</p>
                                <p class="address">Dikirim ke Jakarta Dikirim ke Jakar...</p>
                            </div>
                        </div>
                        <div class="ctrl-box">
                            <div class="btn">pelanggan</div>
                        </div>
                    </li>
                    <li class="all-order-item">
                        <div class="info-box">
                            <img src="./../../assets/images/good-large.png" alt="">
                            <div class="info">
                                <div class="info-top">
                                    <p class="title">Casual Large Capacity Copartment Handbag women</p>
                                    <div class="price">Rp0.00</div>
                                </div>
                                <p class="info-description">Color :386</p>
                                <p class="address">Dikirim ke Jakarta Dikirim ke Jakar...</p>
                            </div>
                        </div>
                        <div class="ctrl-box">
                            <div class="btn active">Beli</div>
                        </div>
                    </li>
                </ul>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>

import { Tab, Tabs } from "vant";
export default {
    data() {
        return {
            tabList: [
                'Semua',
                'Pembayaran tertunda',
                'Kwitansi tertunda'
            ]
        }
    },
    components: {
        [Tab.name]: Tab,
        [Tabs.name]: Tabs
    }
}
</script>

