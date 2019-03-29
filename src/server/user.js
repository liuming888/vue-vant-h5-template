import $request from '../utils/api/request.js';

// login
export function login(params = {}) {
    return $request.post({
        url: '/api/v1/user/login',
        data: params,
    });
}

// 测试登录
export function check_login(params = {}) {
    return $request.post({
        url: '/api/v1/user/check_login',
        data: params,
    });
}

// 用户凭证刷新接口
export function refreshToken(params = {}) {
    return $request.post({
        url: '/api/v1/user/refresh_token',
        data: params,
    });
}

// 我的配送地址管理
export function dealMyAddress(params = {}) {
    return $request.post({
        url: '/api/v1/user/addresses/deal_my_address ',
        data: params,
    });
}

// 获取我的配送地址列表
export function getMyAddress(params = {}) {
    return $request.post({
        url: '/api/v1/user/addresses/get_my_address',
        data: params,
    });
}

// 我的账户信息
export function getMyAccount() {
    return $request.post({
        url: '/api/v1/user/account/get_my_account',
    });
}

// 获取我的好友明细
export function getMyFriends(params = {}) {
    return $request.post({
        url: '/api/v1/user/account/get_my_friends',
        data: params,
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
