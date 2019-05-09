// const path = require('path');
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
            // url = '';


            // 最新测试环境
            url = '';

            // url = '';
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
    // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
    productionSourceMap: false,
    lintOnSave: process.env.NODE_ENV !== 'production',
    css: {
        // 将组件内部的css提取到一个单独的css文件（只用在生产环境）

        // 也可以是传递给 extract-text-webpack-plugin 的选项对象

        extract: false, // 允许生成 CSS source maps?

        sourceMap: false, // pass custom options to pre-processor loaders. e.g. to pass options to // sass-loader, use { sass: { ... } }

        loaderOptions: {}, // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.

        modules: false,
    },
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
                    output: {
                        comments: false,
                    },
                },
            }),
        ];
        //打包将console删除
        if (process.env.VUE_APP_ENV == 'test' || process.env.VUE_APP_ENV == 'production' || process.env.VUE_APP_ENV =='newProduction') {
            config.plugins = [...config.plugins, ...plugins];
        }

        config.externals = {
            vue: 'Vue',
            vuex: 'Vuex',
            'vue-router': 'VueRouter',
            // 暂时随便命名（没影响）
            // vant: 'vant',
            // axios: 'axios',
        };
    },
    //允许对内部的 webpack 配置进行更细粒度的修改。
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = false;
                return options;
            });
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 10240 }));
    },
    devServer: {
        port: 8099,
        disableHostCheck: true,
        proxy: {/* 
            '/api': {
                target: getUrl(process.env.VUE_APP_ENV),

                ws: true,

                changeOrigin: true,

                pathRewrite: {
                    '^/api': '/', // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                },
            },
            '/pwa': {
                target:"http://127.0.0.1:3000",  // PWA测试

                ws: true,

                changeOrigin: true,

                pathRewrite: {
                    '^/pwa': '/', // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                },
            },
         */},
    },
};

// require("./koaServer.js");  // koa测试服务
