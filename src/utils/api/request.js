// import Vue from 'vue';
import axios from 'axios';
// import qs from 'qs';
// import md5 from 'md5';
import config from './config';

const { Toast } = require('vant');

let user_id = '';
let access_token = '';
if (process.env.VUE_APP_ENV == 'development') {
    // 最初固定开发时账号
      user_id = 1;
      access_token = '486dcad761f8425e8aa2a49e964a984c';
}

let userStr = localStorage.getItem('userInfo');
if (userStr && process.env.VUE_APP_ENV == 'development') {
    // 主要复制localStorage用来模拟线上环境
    let userInfo = JSON.parse(userStr);
    user_id = userInfo.user_id;
    access_token = userInfo.access_token;
}



console.log('666666666666', process.env.VUE_APP_ENV);

axios.defaults.headers.common['User-Id'] = user_id;
axios.defaults.headers.common['Access-Token'] = access_token;

var instance = axios.create();

let url = config.getUrl(process.env.VUE_APP_ENV);
console.log('url: ', url);
instance.defaults.baseURL = url;
instance.defaults.timeout = 6000;
instance.defaults.withCredentials = true;

const curCode = process.env.VUE_APP_ENV == 'mock' ? 1 : 0; // 当前代表成功的code (mock 1为成功)
console.log('curCode: ', curCode);

// 请求拦截
instance.interceptors.request.use(
    config => {
        Vue.prototype.$curStore.commit('setLoaddingNum', 1);
        if (!Vue.prototype.$mainAppLoad && document.getElementById('mainApp').style.display != 'none') {
            document.getElementById('mainApp').style.display = 'none';
            Vue.prototype.$mainAppLoad = true; // 已经加载了首屏
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

/**
 *      响应拦截
 * 状态码说明
 * 0: 成功
 * -1: 失败
 * 1: 参数错误
 * 2: 数据库错误
 * 3: 未登录
 * 4: 用户不存在
 * 5: 无权限访问
 * 500: 内部服务器错误
 * 6: 没有此纪录
 */
instance.interceptors.response.use(
    response => {
        // Vue.prototype.$loaddingNum--;
        // if (Vue.prototype.$loaddingNum <= 0) {
        //     Vue.prototype.$toast.clear();
        // }

        Vue.prototype.$curStore.commit('setLoaddingNum', -1);
        try {
            if (response.data.code == curCode) {
                return response.data;
            } else if (response.data.code == 3) {
                try {
                    Toast({
                        message: window.curVueObj.$t('common.pleaseLoginAgain'),
                        //   duration: 1000,
                    });
                } catch (error) {
                    console.warn('请求提示这里出错1', error);
                }

                Vue.prototype.$curStore.commit('setUserInfo', {});
                axios.defaults.headers.common['User-Id'] = '';
                axios.defaults.headers.common['Access-Token'] = '';
                localStorage.clear();
                Vue.prototype.$curStore.commit('setLoginSelectShow', true);
                // Vue.prototype.$curRouter.replace('/');
            } else if (response.data.code == 1000) {
                //  主要砍价接口  前后端约定的
                return response.data;
            } else {
                throw response.data;
            }
        } catch (error) {
            if (error.code) {
                Toast(error.msg);
                if (error.code == '-1') {
                    return error;
                }
            } else {
                try {
                    Toast({
                        message: window.curVueObj.$t('common.theRequestFailed'),
                        //  duration: 1000,
                    });
                } catch (error) {
                    console.warn('请求提示这里出错2', error);
                }
            }
            console.error('封装的接口异常处理,', error);
            return false;
        }
    },
    error => {
        // Vue.prototype.$loaddingNum--;
        // if (Vue.prototype.$loaddingNum <= 0) {
        //     Vue.prototype.$toast.clear();
        // }

        Vue.prototype.$curStore.commit('setLoaddingNum', -1);
        return false;
    }
);

const $request = {
    // url,
    post({ url, data, config = {} }) {
        // let dat = data;
        // if (!config.headers) {
        //     config.headers = {
        //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        //     };
        //     dat = qs.stringify(data);
        // }
        return instance({ method: 'post', url, data, ...config })
            .then(response => {
                return response;
            })
            .catch(error => {
                console.error(error, 'error');
                return false;
            })
            .finally(() => {});
    },
    get(params = {}) {
        return instance.get(params.url, { params: params.data }).then(response => {
            return response;
        });
    },
    /**
     *   instance 的原始默认用法。详情谷歌看instance
     * @param {object} instance(config)的config
     */
    request(parame = {}) {
        let { method = 'get', url, data = {}, params = {}, config = {} } = parame;

        method = method.toLowerCase();
        // if (method !== 'get' && !config.headers) {
        //     data = qs.stringify(data);
        // }
        return instance({ method: method, url: url, data, params, ...config })
            .then(response => {
                return response;
            })
            .catch(error => {
                console.error(error, 'error');
                return false;
            });
    },
};
export default $request;
