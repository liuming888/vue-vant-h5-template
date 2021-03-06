/**
 * @description: 过期时间倒计时
 * @param {expire_time} 过期时间段（单位时间戳）
 * @return {false | 格式化后的时间对象}
 */
export function expiration(expire_time) {
    if (isNaN(expire_time) || expire_time < 0) {
        return false;
    }

    // let expireTimeNum = new Date(expire_time);
    // let curTimeNum = +new Date();
    // let expirationNum = expireTimeNum - curTimeNum;
    // let h = Math.floor(expirationNum / (1000 * 60 * 60));
    // h = h < 10 ? "0" + h : h;
    // let p = Math.floor((expirationNum - 1000 * 60 * 60 * h) / (1000 * 60));
    // p = p < 10 ? "0" + p : p;
    // let m = expirationNum - 1000 * 60 * 60 * h - 1000 * 60 * p;
    // m = m < 10 ? "0" + m : m;
    // this.expirationDat = { h, p, m };

    let expirationNum = expire_time;
    let h = Math.floor(expirationNum / (1000 * 60 * 60));
    h = h < 10 ? '0' + h : h;
    let p = Math.floor((expirationNum - 1000 * 60 * 60 * h) / (1000 * 60));
    p = p < 10 ? '0' + p : p;
    let m = ~~((expirationNum - 1000 * 60 * 60 * h - 1000 * 60 * p) / 1000);
    m = m < 10 ? '0' + m : m;
    this.expirationDat = {
        h,
        p,
        m
    };
    return {
        h,
        p,
        m
    };
}

/**
 * @description: 点击返回按钮，回到上一步的页面。弹出Toast提示：支付已取消，可以在“我的订单”重新发起支付。Toast2s后消失。
 */
export function paymentCancellationPrompt() {
    setTimeout(() => {
        const Toast = require('vant').Toast;
          try {
              Toast({
                  message: window.curVueObj.$t('common.youCanReInitiatePaymentInMyOrder'),
                    duration: 2000,
              });
          } catch (error) {
              console.warn('这里出错3', error);
          }
    }, 500);
}


export function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

export function gaSend(params = {}) {
    if (window.ga) {
        console.log('ga');
        ga('send', {
            ...params,
            hitType: params.hitType || 'event',
        })
    }
}
/**
 * @description: 清除所有cookie
 */
export function deleteAllCookies() {
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf('=');
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
    console.log("已清除所有cookie!")
}