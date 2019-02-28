import $request from '../utils/api/request.js';

// demo
export  function transferList(params) {
    return $request.get({
        url: '/fund/transfer/list',
        data: {
            ...params,
            transationType: '1',
        },
    });
}