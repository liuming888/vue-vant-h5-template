import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
// import $request from '@/utils/api/request.js';
import * as $util from './utils/util.js';
// import './utils/faceBookSdk.js';
import { Toast, Popup, Lazyload } from 'vant';
Vue.use(Toast);
Vue.use(Popup);
Vue.use(Lazyload);

Vue.prototype.$curStore = store;
Vue.prototype.$curRouter = router;
Vue.prototype.$util = $util;
Vue.prototype.$gaSend = $util.gaSend;
// Vue.prototype.$request = $request;

Vue.config.productionTip = false;
// router.afterEach(current => {
    
// })
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
