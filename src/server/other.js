import $request from '../utils/api/request.js';

// 首页上方滚动条接口
export function getHomeTip() {
    return $request.post({
        url: '/api/v1/tip/get_home_tip',
    });
}

// 首页banner接口
export function getBanners() {
    return $request.get({
        url: '/api/v1/sys/get_banners ',
    });
}

// 世界消息接口
export function getWorldTip(params={}) {
    return $request.get({
        url: '/api/v1/tip/get_world_tip',
        data:params
    });
}
