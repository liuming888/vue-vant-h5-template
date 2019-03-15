export default {
    userInfo: {}, // 当前用户信息
    isreFreshToken: false, // 是否已经请求了刷新token（前提本地存了上次的）

    dialogs: {
        // 全局弹窗
        loginSelect: {
            // 登录选择弹窗
            show: true,
        },
        bidPriceCompleted: {
            // 砍价完成弹窗
            show: false,
        },
    },
};