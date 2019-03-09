import $request from '../utils/api/request.js';

// 下单接口
export function orderCreate({ address_id, spu_id, bargain_id, pay_type }) {
    return $request.post({
        url: '/api/v1/order/create',
        data: { address_id, spu_id, bargain_id, pay_type },
    });
}
