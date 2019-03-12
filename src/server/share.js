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
