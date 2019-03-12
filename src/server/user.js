import $request from '../utils/api/request.js';

// login
export function login({ tp_id, tp_token, tp_type, invite_user_id, spu_id, bargain_id }) {
    return $request.post({
        url: '/api/v1/user/login',
        data: { tp_id, tp_token, tp_type, invite_user_id, spu_id, bargain_id },
    });
}

// 测试登录
export function check_login({ tp_id, tp_token, tp_type, invite_user_id, spu_id, bargain_id }) {
    return $request.post({
        url: '/api/v1/user/check_login',
        data: { tp_id, tp_token, tp_type, invite_user_id, spu_id, bargain_id },
    });
}

// 用户凭证刷新接口
export function refreshToken({ user_id, access_token }) {
    return $request.post({
        url: '/api/v1/user/refresh_token',
        data: { user_id, access_token },
    });
}

// 我的配送地址管理
export function dealMyAddress({ operation, user_address }) {
    return $request.post({
        url: '/api/v1/user/addresses/deal_my_address ',
        data: { operation, user_address },
    });
}

// 获取我的配送地址列表
export function getMyAddress({ page_size, page_num, is_default }) {
    return $request.post({
        url: '/api/v1/user/addresses/get_my_address',
        data: { page_size, page_num, is_default },
    });
}
