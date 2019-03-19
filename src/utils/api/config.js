export default {
    getUrl(NODE_ENV) {
        let url = '';
        switch (NODE_ENV) {
            case 'mock':
                url = '';
            case 'development':
                // url = 'http://dev-ht-zdd-api.batmobi.net';
                break;
            case 'dev':  // 开发域名环境
                url = 'https://dev-ht-zdd-api.batmobi.net';
                // 阳
                // url = 'http://192.168.4.32:8024';
                break;
            case 'test':
                url = 'https://test-ht-zdd-api.batmobi.net';
                // url = 'http://test-ht-zdd-api.batmobi.cn:43321';
                break;
            case 'production':
                url = 'https://api.istarbuy.com';
                break;
        }
        return url;
    }
};
