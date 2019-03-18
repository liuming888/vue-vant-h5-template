import $request from '../utils/api/request.js';

// 分享赚
export function shareSpu({ spu_id }) {
    return $request.get({
        url: '/api/v1/share/share_spu',
        data: { spu_id },
    });
}

// 帮砍价
export function shareBargain({ bargain_id }) {
    return $request.get({
        url: '/api/v1/share/share_bargain',
        data: { bargain_id },
    });
}

// 根据分享号获取分享信息
export function shareInfo({ relation_id }) {
    return $request.get({
        url: '/api/v1/share/get_share_info',
        data: { relation_id },
    });
}
