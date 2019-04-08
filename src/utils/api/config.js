export default {
    getUrl(VUE_APP_ENV) {
        let url = '';
        switch (VUE_APP_ENV) {
            case 'mock':
                url = '';
            case 'development':
                break;
            case 'dev': // 开发域名环境
               url = 'https://dev-ht-zdd-api.istarbuy.com/';
                // 阳
                // url = 'http://192.168.4.32:8024';
                break;
            case 'test':
                // url =' https://test-ht-zdd-api.istarbuy.com/';
                // url = 'https://test-ht-zdd-api.istarbuy.com:8443';
                url = 'https://pubtest-ht-zdd-api.istarbuy.com';
                break;
            case 'newProduction':
            case 'production':
                url = 'https://api.istarbuy.com';
                break;
        }
        return url;
    },
};
