import $request from '../utils/api/request.js';

// 下单接口
export function orderCreate({ spu_spec_items, address_id, spu_id, bargain_id, pay_type, spu_name }) {
    return $request.post({
        url: '/api/v1/order/create_order',
        data: { spu_spec_items, address_id, spu_id, bargain_id, pay_type, spu_name },
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
