// import Vue from 'vue';
import { i18n, loadLanguageAsync } from './language/index.js';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import * as $util from './utils/util.js';
import { Toast, Popup, Lazyload } from 'vant';
Vue.use(Toast);
Vue.use(Popup);
Vue.use(Lazyload);

Vue.prototype.$curStore = store;
Vue.prototype.$curRouter = router;
Vue.prototype.$util = $util;
Vue.prototype.$gaSend = $util.gaSend;
Vue.prototype.$loadLanguageAsync = loadLanguageAsync;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app');
