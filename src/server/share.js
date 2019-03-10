import $request from '../utils/api/request.js';

// 分享赚
export function shareSpu({ spu_id }) {
    return $request.post({
        url: '/api/v1/share/shareSpu',
        data: { spu_id },
    });
}

// 帮砍价
export function shareBargain({ bargain_id }) {
           return $request.post({
               url: '/api/v1/share/shareBargain',
               data: { bargain_id },
           });
       }
