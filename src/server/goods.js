import $request from '../utils/api/request.js';

// 砍价支付成功的商品历史列表
export function getOrderTips({ pageSize, pageNum, spu_id }) {
    return $request.post({
        url: '/api/v1/spu/get_order_tips',
        data: { pageSize, pageNum, spu_id },
    });
}

// 获取用户正在砍价的商品列表（首页进行中和我的砍价页面）
export function getMybargainSpus({ page_size, page_num }) {
    return $request.post({
        url: '/api/v1/spu/get_mybargain_spus',
        data: { page_size, page_num },
    });
}

// 获取砍价商品信息
export function getInfo({ spu_id }) {
    return $request.post({
        url: '/api/v1/spu/get_info',
        data: { spu_id },
    });
}

// 获取砍价商品列表
export function getBargainSpus({ page_size, page_num, is_all }) {
    return $request.post({
        url: '/api/v1/spu/get_bargain_spus',
        data: { page_size, page_num, is_all },
    });
}
