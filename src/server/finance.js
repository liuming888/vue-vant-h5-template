import $request from '../utils/api/request.js';

// 获取提现页面数据
export function getWithdrawInfo() {
    return $request.post({
        url: '/api/v1/withdraw/get_withdraw_info',
    });
}

// 申请提现
export function applyWithdraw(params = {}) {
    return $request.post({
        url: '/api/v1/withdraw/apply_withdraw',
        data: params,
    });
}

// 获取提现列表
export function getWithdrawList(params = {}) {
    return $request.post({
        url: '/api/v1/withdraw/get_withdraw_list',
        data: params,
    });
}

// 获取明细列表
export function getFundRecordList(params = {}) {
    return $request.post({
        url: '/api/v1/fund/get_fund_record_list',
        data: params,
    });
}

// 根据货币code获取兑美元汇率
export function getExchangeRate({ currency_code = 'IDR' }) {
    return $request.post({
        url: '/api/v1/currency/get_exchange_rate',
        data: { currency_code },
    });
}
