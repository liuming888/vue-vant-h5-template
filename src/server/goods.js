import $request from '../utils/api/request.js';

// 砍价支付成功的商品历史列表
export function getOrderTips(params = {}) {
    return $request.post({
        url: '/api/v1/spu/get_order_tips',
        data: params,
    });
}

// 获取用户正在砍价的商品列表（首页进行中和我的砍价页面）
export function getMybargainSpus(params = {}) {
    return $request.post({
        url: '/api/v1/spu/get_mybargain_spus',
        data: params,
    });
}

// 获取砍价商品信息
export function getInfo(params = {}) {
    return $request.post({
        url: '/api/v1/spu/get_info',
        data: params,
    });
}

// 获取砍价商品列表（目前后端没做分页，前端暂时也不做）
export function getBargainSpus(params = {}) {
    return $request.post({
        url: '/api/v1/spu/get_bargain_spus',
        data: params,
    });
}

// 根据商品id获取商品规格接口
export function getSpuSpecs(params = {}) {
    return $request.get({
        url: '/api/v1/spu/get_spu_specs',
        data: params,
    });
}

// 获取处理中砍价订单列表
export function getMyBargainOrderSpus(params = {}) {
    return $request.post({
        url: '/api/v1/spu/get_my_bargain_order_spus',
        data: params,
    });
}
