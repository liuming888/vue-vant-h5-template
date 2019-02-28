import Vue from 'vue';
import Router from 'vue-router';
import quicklink from "quicklink/dist/quicklink.mjs";
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
            path: '/my',
            name: '我的',
            component: () => import('../views/my/my.vue'),
        },
        {
            path: '/withdrawRelated',
            name: '提现相关tab主页面',
            component: () => import('../views/withdrawRelated/index.vue'),
        },
        {
            path: '/withdrawRelated/withdrawImmediately',
            name: '立即提现',
            component: () => import('../views/withdrawRelated/withdrawImmediately/withdrawImmediately.vue'),
        },
        {
            path: '/withdrawRelated/toWithdraw',
            name: '我要提现',
            component: () => import('../views/withdrawRelated/withdrawImmediately/toWithdraw.vue'),
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
});

// 全局前置守卫
curRouter.beforeEach((to, from, next) => {
    next();
})

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
