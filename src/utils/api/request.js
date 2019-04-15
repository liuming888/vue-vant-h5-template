// import Vue from 'vue';
import axios from 'axios';
// import qs from 'qs';
// import md5 from 'md5';
import config from './config';

let user_id = '';
let access_token = '';
let userStr = localStorage.getItem('userInfo');
if (userStr) {
    let userInfo = JSON.parse(userStr);
    user_id = userInfo.user_id;
    access_token = userInfo.access_token;
}

if (process.env.VUE_APP_ENV == 'development') {
    //   user_id = 1;
    //   access_token = '486dcad761f8425e8aa2a49e964a984c';
    user_id = 753;
    access_token = 'd434876a73e74f9d91c7d8e396ff53e4';
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

Vue.prototype.$loaddingNum = 0;

const curCode = process.env.VUE_APP_ENV == 'mock' ? 1 : 0; // 当前代表成功的code (mock 1为成功)
console.log('curCode: ', curCode);

// 请求拦截
instance.interceptors.request.use(
    config => {
        Vue.prototype.$loaddingNum++;
        Vue.prototype.$toast.loading({
            mask: true, // 是否显示背景蒙层
            duration: 0, // 展示时长(ms)，值为 0 时，toast 不会消失
            forbidClick: true, // 是否禁止背景点击
        });
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
        Vue.prototype.$loaddingNum--;
        if (Vue.prototype.$loaddingNum <= 0) {
            Vue.prototype.$toast.clear();
        }
        try {
            if (response.data.code == curCode) {
                return response.data;
            } else if (response.data.code == 3) {
                Vue.prototype.$toast('please log in first !');
                Vue.prototype.$curStore.commit('setUserInfo', {});
                axios.defaults.headers.common['User-Id'] = '';
                axios.defaults.headers.common['Access-Token'] = '';
                localStorage.clear();
                Vue.prototype.$curStore.commit('setLoginSelectShow', true);
                // Vue.prototype.$curRouter.replace('/');
            } else {
                console.log('test11111111111111111111111111');
                throw response.data;
            }
        } catch (error) {
            console.log('test22222222222222222222222222');
            if (error.code) {
                Vue.prototype.$toast(error.msg);
                if (error.code == '-1') {
                    return error;
                }
            } else {
                Vue.prototype.$toast('The request failed. Please try again later!');
            }
            console.error(error);
            return false;
        }
    },
    error => {
        console.log('test33333333333333333333333333');
        Vue.prototype.$loaddingNum--;
        if (Vue.prototype.$loaddingNum <= 0) {
            Vue.prototype.$toast.clear();
        }
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
