export default {
    getUrl(VUE_APP_ENV) {
        let url = '';
        switch (VUE_APP_ENV) {
            case 'mock':
                url = '';
            case 'development':
                break;
            case 'dev': // 开发域名环境
                // 阳
                url = 'http://192.168.4.32:8024';
                break;
            case 'test':
              url = 'http://192.168.4.32:8024';
                break;
            case 'newProduction':
            case 'production':
                url = '';
                break;
        }
        return url;
    },
};
