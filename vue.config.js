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
            // url = 'https://dev-ht-zdd-api.istarbuy.com/api';

            // 测试环境内网
            // url = 'https://test-ht-zdd-api.istarbuy.com/api';

            // 测试环境外网
            url = 'https://test-ht-zdd-api.istarbuy.com:8443/api';
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
    },
};

var arr = [
    { bargain_info: { bargain_id: 213, user_id: 121, spu_id: 188, bargain_amount: 6080, bargain_rate: 19, bargain_after: 25920, expire_ttl: 746612391, price: 32000, status: 2, can_buy: 1, order_no: '306563703778574336', order_expire_time: 38360406, order_status: 1 }, spu: { spu_id: 188, title: 'Bioaqua BB Cream Air Cushion with SPF50++ Krim BB Cushion Dengan Tabir Surya Menyejukan Kulit 01 Natural Tone', sub_title: 'Keep your makeup beautiful all day，give a clean and bright skin effect Oil Control &amp; Waterproof', original_price: 86000, price: 32000, deliver_count: 10000, expire_ttl: 746612372, spu_pics: ['http://rscdn.istarbuy.com/i/20190320/53b0e801b552449c8d3254a9f6acd617.png'] } },
    { bargain_info: { bargain_id: 215, user_id: 121, spu_id: 182, bargain_amount: 4320, bargain_rate: 18, bargain_after: 19680, expire_ttl: 746612391, price: 24000, status: 2, can_buy: 1, order_no: '306515757276069888', order_expire_time: 26929392, order_status: 1 }, spu: { spu_id: 182, title: "STYLEBASICS Men's Round Neck Basic T-shirt - Black [L]", sub_title: 'so comfortable to use for activities for a relaxed atmosphere Thickness，coolness，durable.', original_price: 68000, price: 24000, deliver_count: 1000, expire_ttl: 746612372, spu_pics: ['http://rscdn.istarbuy.com/i/20190320/bd98747f3052498fa2c1f7cdb286db85.jpg'] } },
];
