import $request from '../utils/api/request.js';

// 分享赚
export function shareSpu(params = {}) {
    return $request.get({
        url: '/api/v1/share/share_spu',
        data: params,
    });
}

// 帮砍价
export function shareBargain(params = {}) {
    return $request.get({
        url: '/api/v1/share/share_bargain',
        data: params,
    });
}

// 根据分享号获取分享信息
export function shareInfo(params = {}) {
    return $request.get({
        url: '/api/v1/share/get_share_info',
        data: params,
    });
}
