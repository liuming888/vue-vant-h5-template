import $request from '../utils/api/request.js';

// login
export function login(params) {
    return $request.get({
        url: '/fund/transfer/list',
        data: {
            ...params,
            transationType: '1',
        },
    });
}