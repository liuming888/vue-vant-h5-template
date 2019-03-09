export default {
    getUrl(NODE_ENV) {
        let url = '';
        switch (NODE_ENV) {
            case 'mock':
                url = '';
            case 'development':
                url = '';
                break;
            case 'test':
                // url = 'http://127.0.0.1:7001';
                break;
            case 'production':
                url = 'http://127.0.0.1:9078';
                break;
        }
        return url;
    }
};
