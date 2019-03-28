import Vue from 'vue';
import Router from 'vue-router';
import {
    gaSend
} from '../utils/util.js';
// import quicklink from 'quicklink/dist/quicklink.mjs';
Vue.use(Router);

const curRouter = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            redirect: '/',
        },
        {
            path: '/',
            name: '首页',
            component: resolve => require(['../views/home/home.vue'], resolve),
        },
        {
            path: '/bargain',
            name: '砍价详情页',
            component: resolve => require(['../views/bargain.vue'], resolve),
        },
        {
            path: '/isBargainingList',
            name: '更多砍价内页',
            component: resolve => require(['../views/isBargainingList.vue'], resolve),
        },

        {
            path: '/forBargain',
            name: '帮砍页面',
            component: resolve => require(['../views/forBargain.vue'], resolve),
        },
        {
            path: '/purchase',
            name: '支付页面',
            component: resolve => require(['../views/purchase/index.vue'], resolve),
        },
        {
            path: '/shippingAddress',
            name: '（已有）收货地址页',
            component: resolve => require(['../views/shippingAddress.vue'], resolve),
        },
        {
            path: '/purchase/paymentSuccess',
            name: '支付成功页面',
            component: resolve => require(['../views/purchase/paymentSuccess.vue'], resolve),
        },

        {
            path: '/my',
            name: '我的账户页面',
            component: resolve => require(['../views/my/my.vue'], resolve),
        },
        {
            path: '/withdrawRelated',
            name: '提现页面',
            component: resolve => require(['../views/withdrawRelated/withdrawImmediately.vue'], resolve),
        },

        {
            path: '/my/myFriends',
            name: '我的好友',
            component: resolve => require(['../views/my/myFriends.vue'], resolve),
        },
        {
            path: '/my/myOrder',
            name: '我的订单',
            component: resolve => require(['../views/myOrder/index.vue'], resolve),
            redirect: '/my/myOrder/semua',
            children: [
                {
                    path: '/my/myOrder/semua',
                    name: '所有订单',
                    component: resolve => require(['../views/myOrder/semua.vue'], resolve),
                },
                {
                    path: '/my/myOrder/pendingPayment',
                    name: '待完成订单',
                    component: resolve => require(['../views/myOrder/pendingPayment.vue'], resolve),
                },
                {
                    path: '/my/myOrder/completed',
                    name: '已完成订单',
                    component: resolve => require(['../views/myOrder/completed.vue'], resolve),
                },
            ],
        },
        {
            path: '/my/revenueDetails',
            name: '收益明细',
            component: resolve => require(['../views/my/revenueDetails.vue'], resolve),
        },
        {
            path: '/my/Tutorial',
            name: '新手教程',
            component: resolve => require(['../views/my/Tutorial.vue'], resolve),
        },
    ],
});

// 全局前置守卫
curRouter.beforeEach((to, from, next) => {
    let userStr = localStorage.getItem('userInfo');
    // 第一次进页面时，得先刷新token接口调用了后才行
    if (process.env.VUE_APP_ENV != 'development' && userStr && !Vue.prototype.$curStore.state.isreFreshToken) {
        Vue.prototype.$curStore.watch(
            // 当返回结果改变...
            function (state) {
                return state.isreFreshToken;
            },
            // 执行回调函数
            function () {
                next();
            }
        );
    } else {
        next();
    }
});
// 需要统计的页面展示
const routerShows = ['/', '/bargain', '/purchase', '/my', '/purchase/paymentSuccess', '/withdrawRelated', '/isBargainingList'];
// 全局后置钩子
curRouter.afterEach(current => {
    const path = current.path;
    if (routerShows.includes(path)) {
        gaSend({
            eventCategory: current.name,
            eventAction: '页面展示'
        });
    }
    // quicklink({
    //     // 默认2秒
    //     // timeout: 2000,
    //     // 如果不设置，默认为 document
    //     // el: document.getElementById('app'),
    //     // 设置预取 URL 数组
    //     // urls: ['2.html', '3.html', '4.js'],
    //     // 设置预取的请求优先级
    //     // priority: true,
    //     // 启用所有跨 origin 请求
    // origins: true,
    //     //过滤
    //     // ignores: [/\/api\/?/, url => url.includes('.zip'), (url, elem) => elem.hasAttribute('noprefetch')],
    // });
    // 直接使用 prefetcher
    // const prefetch = require('quicklink/src/prefetch.mjs');
    // const urls = ['1.html', '2.html'];
    // const promises = urls.map(url => prefetch(url));
    // Promise.all(promises);
});

export default curRouter;