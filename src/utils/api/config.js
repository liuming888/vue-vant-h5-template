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
                url = 'https://test-ht-zdd-api.istarbuy.com:8443';
                break;
            case 'production':
                url = 'https://api.istarbuy.com';
                break;
        }
        return url;
    },
};
