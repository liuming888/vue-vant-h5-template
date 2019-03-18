import $request from '../utils/api/request.js';

// 我的账户信息 
export function getMyAccount() {
    return $request.post({
        url: '/api/v1/user/account/get_my_account',
    });
}
