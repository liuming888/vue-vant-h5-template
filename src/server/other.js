import $request from '../utils/api/request.js';

// 首页上方滚动条接口
export function getHomeTip() {
    return $request.post({
        url: '/api/v1/tip/get_home_tip'
    });
}
