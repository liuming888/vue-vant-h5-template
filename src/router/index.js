import Vue from 'vue';
import Router from 'vue-router';
import quicklink from 'quicklink/dist/quicklink.mjs';
Vue.use(Router);

const curRouter = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '*', redirect: '/' },
        {
            path: '/',
            name: '首页',
            component: () => import('../views/home/home.vue'),
        },
        {
            path: '/bargain',
            name: '砍价页',
            component: () => import('../views/bargain.vue'),
        },
        {
            path: '/isBargainingList',
            name: '正在砍价列表页',
            component: () => import('../views/isBargainingList.vue'),
        },

        {
            path: '/forBargain',
            name: '好友帮砍页',
            component: () => import('../views/forBargain.vue'),
        },
        {
            path: '/purchase',
            name: '购买商品页',
            component: () => import('../views/purchase/index.vue'),
        },
        {
            path: '/shippingAddress',
            name: '（已有）收货地址页',
            component: () => import('../views/shippingAddress.vue'),
        },
        {
            path: '/purchase/paymentSuccess',
            name: '支付成功页',
            component: () => import('../views/purchase/paymentSuccess.vue'),
        },

        {
            path: '/my',
            name: '我的',
            component: () => import('../views/my/my.vue'),
        },
        {
            path: '/withdrawRelated',
            name: '提现相关tab主页面',
            component: () => import('../views/withdrawRelated/index.vue'),
            redirect: '/withdrawRelated/withdrawImmediately',
            children: [
                {
                    path: '/withdrawRelated/withdrawImmediately',
                    name: '立即提现',
                    component: () => import('../views/withdrawRelated/withdrawImmediately/withdrawImmediately.vue'),
                },
                {
                    path: '/withdrawRelated/withdrawalsRecord',
                    name: '提现记录',
                    component: () => import('../views/withdrawRelated/withdrawalsRecord.vue'),
                },
                {
                    path: '/withdrawRelated/incomeBreakdown',
                    name: '收益明细',
                    component: () => import('../views/withdrawRelated/incomeBreakdown.vue'),
                },
            ],
        },
        {
            path: '/withdrawRelated/toWithdraw',
            name: '我要提现',
            component: () => import('../views/withdrawRelated/withdrawImmediately/toWithdraw.vue'),
        },

        // 以下为v0.2版本得做的页面
        {
            path: '/my/myFriends',
            name: '我的好友',
            component: () => import('../views/my/myFriends.vue'),
        },
        {
            path: '/my/myOrder',
            name: '我的订单',
            component: () => import('../views/my/myOrder.vue'),
        },
        {
            path: '/my/inviteFriends',
            name: '邀请好友',
            component: () => import('../views/my/inviteFriends.vue'),
        },
        {
            path: '/my/howToMakeMoney',
            name: '如何赚钱',
            component: () => import('../views/my/howToMakeMoney.vue'),
        },
        {
            path: '/my/billboard',
            name: '排行榜',
            component: () => import('../views/my/billboard.vue'),
        },
    ],
});

// 全局前置守卫
curRouter.beforeEach((to, from, next) => {
    let userStr = localStorage.getItem('userInfo');
    // 第一次进页面时，得先刷新token接口调用了后才行
    if (process.env.NODE_ENV != 'development' && userStr && !Vue.prototype.$curStore.state.isreFreshToken) {
        Vue.prototype.$curStore.watch(
            // 当返回结果改变...
            function(state) {
                return state.isreFreshToken;
            },
            // 执行回调函数
            function() {
                next();
            }
        );
    } else {
        next();
    }
});

// 全局后置钩子
curRouter.afterEach(() => {
    quicklink({
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
    });

    // 直接使用 prefetcher
    // const prefetch = require('quicklink/src/prefetch.mjs');
    // const urls = ['1.html', '2.html'];
    // const promises = urls.map(url => prefetch(url));
    // Promise.all(promises);
});

export default curRouter;
