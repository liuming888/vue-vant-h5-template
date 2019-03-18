/**
 * @param  {string} name  要检查的cookie项的key
 * @return true 有   false 无
 */
export function getCookie(name) {
    if (document.cookie.length > 0) {
        let result = document.cookie.indexOf(name + '=');
        if (result != -1) {
            return true;
        }
    }
    return false;
}

// 删除这项cookie
/**
 *
 * @param {string} name   要删除的cookie项的key
 */
export function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var result = getCookie(name);
    if (result) {
        document.cookie = name + '=' + ';expires=' + exp.toGMTString();
    }
}

/**
 *
 * @param {string} inputTime   时间字符串
 * @return {string} 转换后的时间字符串
 */
export function formatDateTime(inputTime) {
    var date = new Date(inputTime);
    // var y = date.getFullYear();
    // var m = date.getMonth() + 1;
    // m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? '0' + d : d;
    var h = date.getHours();
    h = h < 10 ? '0' + h : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    return /* y + '.' + m + '.' + d + ' ' + */ h + ':' + minute + ':' + second;
}

/**
 *
 * @param {number | string} inputTime   时间字符串或时间戳
 * @return {string} 格式化后的时间字符串
 */
export function formatTimeDemonstration(timerStr) {
    var date = new Date(timerStr);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? '0' + d : d;
    return `${d}/${m}/${y}`;
}

/**
 * @msg: js输入金额自动格式化
 * @param {number | string} coin 金额
 * @return: 格式化后的金额，三位逗号隔开(不包含小数)
 */
export function formatMoney(coin) {
    var s = '' + coin;
    if (/[^0-9\.]/.test(s)) return 'invalid value';
    s = s.replace(/^(\d*)$/, '$1.');
    s = s.replace(/(\d*\.\d\d)\d*/, '$1');
    s = s.replace('.', ',');
    var re = /(\d)(\d{3},)/;
    while (re.test(s)) s = s.replace(re, '$1,$2');
    var result = s.replace(/^\./, '0.');
    return result.substring('0', result.length - 1);
}

/**
 * @description: 过期时间倒计时
 * @param {expire_time} 过期时间段（单位时间戳）
 * @return {false | 格式化后的时间对象}
 */
export function expiration(expire_time) {
    if (isNaN(expire_time)) {
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
    let m = expirationNum - 1000 * 60 * 60 * h - 1000 * 60 * p;
    m = m < 10 ? '0' + m : m;
    this.expirationDat = { h, p, m };
    return { h, p, m };
}

/**
 * @description: 点击返回按钮，回到上一步的页面。弹出Toast提示：支付已取消，可以在“我的订单”重新发起支付。Toast2s后消失。
 */
export function paymentCancellationPrompt() {
    setTimeout(() => {
        const Toast = require('vant').Toast;
        Toast({
            message: `Payment has been cancelled, you can re-initiate payment in "My Order" !`,
            duration: 2000,
        });
    }, 500);
}
