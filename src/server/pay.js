import $request from '../utils/api/request.js';

// 下单接口
export function orderCreate(params={}) {
    return $request.post({
        url: '/api/v1/order/create_order',
        data: params,
    });
}
// 订单列表
export function orderList({ page_size, page_num, type }) {
    return $request.post({
        url: '/api/v1/order/get_order_list',
        data: { page_size, page_num, type },
    });
}

// 重新支付
export function repaidOrder({ order_no, spu_name, pay_type }) {
    return $request.post({
        url: '/api/v1/order/repaid_order',
        data: { order_no, spu_name, pay_type },
    });
}

// 重新支付
export function getPayType() {
    return $request.post({
        url: '/api/v1/pay/get_pay_type',
    });
}
