// let user_id=1;
// let access_token = '486dcad761f8425e8aa2a49e964a984c';
let user_id="";
let access_token = '';
let userStr = localStorage.getItem('userInfo');
if (userStr && process.env.VUE_APP_ENV == 'development') {
    let userInfo = JSON.parse(userStr);
    user_id = userInfo.user_id;
    access_token = userInfo.access_token;
}
export default {
    loaddingNum: 0, // 当前loading的请求数
    userInfo: {
        user_id: process.env.VUE_APP_ENV == 'development' ? user_id : '',
        access_token: process.env.VUE_APP_ENV == 'development' ? access_token : '',
    }, // 当前用户信息
    isreFreshToken: false, // 是否已经请求了刷新token（前提本地存了上次的）
};
