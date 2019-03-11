import $request from '../utils/api/request.js';

// 根据砍价号获取砍价信息
export function getBargainInfo({ bargain_id }) {
    return $request.post({
        url: '/api/v1/bargain/get_bargain_info',
        data: { bargain_id },
    });
}

// 根据砍价号获取砍价帮列表
export function getHelpBargainList({ bargain_id, page_size, page_num }) {
    return $request.post({
        url: '/api/v1/bargain/get_help_bargain_list',
        data: { bargain_id, page_size, page_num },
    });
}

// 砍价接口
export function bargainChop({ type, bargain_id }) {
    return $request.post({
        url: '/api/v1/bargain/chop',
        data: { type, bargain_id },
    });
}

// 获取砍价商品列表
export function getBargainSpus({ page_size = 10, page_num = 1, is_all = 1 }) {
    return $request.post({
        url: '/api/v1/spu/get_bargain_spus',
        data: { page_size, page_num, is_all },
    });
}
