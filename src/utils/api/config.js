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
                break;
            case 'test':
                // url = 'https://test-ht-zdd-api.batmobi.net';
                url = 'http://test-ht-zdd-api.batmobi.cn:43321';
                break;
            case 'production':
                url = 'http://127.0.0.1:9078';
                break;
        }
        return url;
    }
};
