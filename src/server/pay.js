import $request from '../utils/api/request.js';

// 下单接口
export function orderCreate(params = {}) {
    return $request.post({
        url: '/api/v1/order/create_order',
        data: params,
    });
}
// 订单列表
export function orderList(params = {}) {
    return $request.post({
        url: '/api/v1/order/get_order_list',
        data: params,
    });
}

// 重新支付
export function repaidOrder(params = {}) {
    return $request.post({
        url: '/api/v1/order/repaid_order',
        data: params,
    });
}

// 获取支付渠道信息 
export function getPayType() {
    return $request.post({
        url: '/api/v1/pay/get_pay_type',
    });
}

// 根据砍价号获取订单
export function getOrderByBargainId(params = {}) {
    return $request.post({
        url: '/api/v1/order/get_order_by_bargainId',
        data: params,
    });
}
