module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                // ���Ի���
                // target: 'http://119.23.230.72:8088/',

                // Ȩ
                // target: 'http://192.168.4.142:8091/',

                // ����������
                target: 'http://dev-xhz-backend.batmobi.net/',

                ws: true,
	
	email: xxx@batmobi.net,

                changeOrigin: true,

                pathRewrite: {
                    '^/api': '/', // ���������á�/api������target����ĵ�ַ��������������ǵ��ӿ�ʱֱ����api���� ������Ҫ����'http://40.00.100.100:3002/user/add'��ֱ��д��/api/user/add������
                },
            },
        },
    }
};
