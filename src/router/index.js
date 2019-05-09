// import Vue from 'vue';
// import Router from 'vue-router';
import { gaSend } from '../utils/util.js';
// import quicklink from 'quicklink/dist/quicklink.mjs';
// Vue.use(Router);

const curRouter = new VueRouter({
    mode: process.env.VUE_APP_CUR == 'apk' ? 'hash' : 'history',
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
    ],
});

// 全局前置守卫
curRouter.beforeEach((to, from, next) => {
    const { lang } = to.query;
    if (lang && lang != Vue.prototype.$lang) {
        Vue.prototype.$loadLanguageAsync(lang);
        Vue.prototype.$lang = lang;
    }

    Vue.prototype.$curStore.commit('setLoaddingNum', 1);
    next();

  /*   let userStr = localStorage.getItem('userInfo');
    // 第一次进页面时，得先刷新token接口调用了后才行
    if (process.env.VUE_APP_ENV != 'development' && userStr && !Vue.prototype.$curStore.state.isreFreshToken) {
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
    } */
});
// 需要统计的页面展示
// const routerShows = ['/', '/bargain', '/purchase', '/my', '/purchase/paymentSuccess', '/withdrawRelated', '/isBargainingList'];
// 全局后置钩子
curRouter.afterEach(current => {
    console.log('current: ', current);
    Vue.prototype.$curStore.commit('setLoaddingNum', -1);
    // const path = current.path;
    // if (routerShows.includes(path)) {

   /*  const { pathname, search } = window.location;
    gaSend({
        eventCategory: current.name,
        eventAction: '页面展示',
        hitType: 'pageview',
        page: pathname + search,
    }); */
    // }
});

export default curRouter;
