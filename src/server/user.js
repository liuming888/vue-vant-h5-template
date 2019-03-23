import $request from '../utils/api/request.js';

// login
export function login({ tp_id, tp_token, tp_type, invite_user_id, spu_id, bargain_id, tp_username, tp_avatar }) {
    return $request.post({
        url: '/api/v1/user/login',
        data: { tp_id, tp_token, tp_type, invite_user_id, spu_id, bargain_id, tp_username, tp_avatar },
    });
}

// 测试登录
export function check_login({ tp_id, tp_token, tp_type, invite_user_id, spu_id, bargain_id, tp_username, tp_avatar }) {
    return $request.post({
        url: '/api/v1/user/check_login',
        data: { tp_id, tp_token, tp_type, invite_user_id, spu_id, bargain_id, tp_username, tp_avatar },
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

// 我的账户信息
export function getMyAccount() {
    return $request.post({
        url: '/api/v1/user/account/get_my_account',
    });
}

// 获取我的好友明细
export function getMyFriends({ page_size, page_num }) {
    return $request.post({
        url: '/api/v1/user/account/get_my_friends',
        data: { page_size, page_num },
    });
}

// 获取英雄榜
export function getHeroList() {
    return $request.post({
        url: '/api/v1/tip/get_hero_list',
    });
}

// 用户首次登录领取新人礼包 
export function getMyNewRp() {
    return $request.post({
        url: '/api/v1/user/get_my_new_rp',
    });
}
