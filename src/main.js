import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import * as $util from './utils/util.js';
import './utils/faceBookSdk.js';
import { Toast, Popup, Lazyload } from 'vant';
Vue.use(Toast);
Vue.use(Popup);
Vue.use(Lazyload);

// Vue.prototype.$toast.loading({
//   mask: true, // 是否显示背景蒙层
//   duration: 0, // 展示时长(ms)，值为 0 时，toast 不会消失
//   forbidClick: 0 // 是否禁止背景点击
// })

// setTimeout(() => {
//   Vue.prototype.$toast.clear();
// }, 1000);

Vue.prototype.$util = $util;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
