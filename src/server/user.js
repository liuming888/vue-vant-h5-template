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

// 我的配送地址管理 
export function dealMyAddress({ operation, id, username, telephone, address_one, address_two  }) {
    return $request.get({
        url: '/api/v1/user/deal_my_address',
        data: { tp_id, tp_token, tp_type, invite_user_id, spu_id, bargain_id },
    });
}

// 我的配送地址管理 
export function getMyAddress() {
    return $request.get({
        url: '/api/v1/user/get_my_address'
    });
}
