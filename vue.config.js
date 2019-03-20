
function getUrl(VUE_APP_ENV) {
    let url = '';
    switch (VUE_APP_ENV) {
        case 'mock':
            break;
        case 'development':
            // 锦涛
            // url = 'http://192.168.4.128:8024/api';
            // 阳
            // url = 'http://192.168.4.32:8024/api';

            // 开发环境
            url = 'https://dev-ht-zdd-api.istarbuy.com/api';

            // 测试环境内网
            // url = 'https://test-ht-zdd-api.istarbuy.com/api';

            // 测试环境外网
            // url ='https://test-ht-zdd-api.istarbuy.com:8443/api'
            break;
        case 'test':
            // url = 'http://127.0.0.1:7001';
            break;
        case 'production':
            // url = 'http://127.0.0.1:9078';
            break;
    }
    return url;
}

module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        port: 8088,
        // disableHostCheck: true,
        proxy: {
            '/api': {
                target: getUrl(process.env.VUE_APP_ENV),

                ws: true,

                changeOrigin: true,

                pathRewrite: {
                    '^/api': '/', // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                },
            },
        },
    }
};