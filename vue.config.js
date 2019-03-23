const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
const TerserPlugin = require('terser-webpack-plugin');

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
            // url = 'https://test-ht-zdd-api.istarbuy.com:8443/api';
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
    productionSourceMap: false,
    lintOnSave: process.env.NODE_ENV !== 'production',
    configureWebpack: config => {
        //入口文件
        config.entry.app = ['babel-polyfill', './src/main.js'];
        //删除console插件
        let plugins = [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: false, // Must be set to true if using source-maps in production
                terserOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                    },
                },
            }),
        ];
        //只有打包生产环境才需要将console删除
        // if (process.env.VUE_APP_build_type == 'production') {
        config.plugins = [...config.plugins, ...plugins];
        // }
    },
    //允许对内部的 webpack 配置进行更细粒度的修改。
    chainWebpack: config => {
        //命名
        // config.resolve.alias
        //     .set('SRC', resolve('src'))
        //     .set('ASSET', resolve('src/assets'))
        //     .set('VIEW', resolve('src/components/page'))
        //     .set('COMPONENT', resolve('src/components/common'))
        //     .set('UTIL', resolve('src/utils'))
        //     .set('SERVICE', resolve('src/services'));
        //打包文件带hash
        // config.output.filename('[name].[hash].js').end();
        //为了补删除换行而加的配置
        // config.module
        //     .rule('vue')
        //     .use('vue-loader')
        //     .loader('vue-loader')
        //     .tap(options => {
        //         // modify the options...
        //         options.compilerOptions.preserveWhitespace = true;
        //         return options;
        //     });
    },
    devServer: {
        port: 8088,
        disableHostCheck: true,
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
    },
};
