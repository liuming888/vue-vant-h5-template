// import Vue from 'vue';
import { i18n, loadLanguageAsync } from './language/index.js';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import * as $util from './utils/util.js';
import { Toast, Popup, Lazyload, Notify } from 'vant';
Vue.use(Toast);
Vue.use(Popup);
Vue.use(Lazyload);
// loadLanguageAsync('us'); // 设置为英语

Vue.prototype.$curStore = store;
Vue.prototype.$curRouter = router;
Vue.prototype.$util = $util;
Vue.prototype.$gaSend = $util.gaSend;
Vue.prototype.$loadLanguageAsync = loadLanguageAsync;
Vue.prototype.$lang = i18n.locale;

Vue.config.productionTip = false;
Vue.mixin({
    mounted () {
        if (!Vue.prototype.$mainAppLoad && document.getElementById('mainApp').style.display != 'none') {
            document.getElementById('mainApp').style.display = 'none';
            Vue.prototype.$mainAppLoad = true; // 已经加载了首屏
        }  
    },
    methods: {
        mx_resizeWindow() {
            console.warn('表单blur');
            document.body.scrollTop = 0;
        },
    },
});

window.curVueObj = new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app');

import '@/utils/pwa.js';

window.addEventListener('online', function() {
    console.log('网络连接恢复！');
    console.log("")
    Notify.clear();
});
window.addEventListener('offline', function() {
    console.log('网络连接中断！');
    Notify({
        message: window.curVueObj.$t('common.pleaseCheckTheNetwork'),
        duration: 10000,
        background: '#D30C05',
    });
});
