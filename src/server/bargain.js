import $request from '../utils/api/request.js';

// 根据砍价号获取砍价信息
export function getBargainInfo(params = {}) {
    return $request.post({
        url: '/api/v1/bargain/get_bargain_info',
        data: params,
    });
}

// 根据砍价号获取砍价帮列表
export function getHelpBargainList(params = {}) {
    return $request.post({
        url: '/api/v1/bargain/get_help_bargain_list',
        data: params,
    });
}

// 砍价接口
export function bargainChop(params = {}) {
    return $request.post({
        url: '/api/v1/bargain/chop',
        data: params,
    });
}

// 获取用户正在砍价商品列表
export function getMyBargainSpus(params = {}) {
    return $request.post({
        url: '/api/v1/spu/get_mybargain_spus',
        data: params,
    });
}

// 根据分享号发起自砍
export function chopShare(params = {}) {
    return $request.post({
        url: '/api/v1/bargain/chop_share',
        data: params,
    });
}
