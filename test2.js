console.log('111111111111111', process.env.NODE_ENV);
function getUrl(NODE_ENV) {
    let url = '';
    switch (NODE_ENV) {
        case 'mock':
            url = 'http://doclever.batmobi.cn/mock/5c7f95350fcb632d8754e6bf/api';
            break;
        case 'development':
            // ����
            // url = 'http://192.168.4.128:8024/api';
            // ��
            // url = 'http://192.168.4.32:8024/api';
            // url = 'https://dev-ht-zdd-api.batmobi.net/api';
            url = 'https://test-ht-zdd-api.batmobi.net/api';
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
        // disableHostCheck: true,
        proxy: {
            '/api': {
                target: getUrl(process.env.NODE_ENV),

                ws: true,
	 email: xx@batmobi.net,
                changeOrigin: true,

                pathRewrite: {
                    '^/api': '/', // ���������á�/api������target����ĵ�ַ��������������ǵ��ӿ�ʱֱ����api���� ������Ҫ����'http://40.00.100.100:3002/user/add'��ֱ��д��/api/user/add������
                },
            },
        },
    }
};
