// import Vue from 'vue';
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

var googleUser = {};
var startApp = function () {
    gapi.load('auth2', function () {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        auth2 = gapi.auth2.init({
            client_id: 'xxxx', //客户端ID
            cookiepolicy: 'single_host_origin',
            scope: 'profile' //可以请求除了默认的'profile' and 'email'之外的数据
        });
        attachSignin(document.getElementById('customBtn'));
    });
};

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
