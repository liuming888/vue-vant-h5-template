import $request from '../utils/api/request.js';

// login
export function login({ tp_id, tp_token, tp_type, invite_user_id, spu_id, bargain_id }) {
    return $request.get({
        url: '/api/v1/user/login',
        data: { tp_id, tp_token, tp_type, invite_user_id, spu_id, bargain_id },
    });
}
