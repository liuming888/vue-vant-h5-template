import $request from '../utils/api/request.js';

export function getHomeTip() {
    return $request.post({
        url: '/api/v1/tip/get_home_tip',
    });
}

