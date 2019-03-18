import $request from '../utils/api/request.js';

// 获取提现页面数据
export function getWithdrawInfo() {
    return $request.post({
        url: '/api/v1/withdraw/get_withdraw_info',
    });
}

// 申请提现
export function applyWithdraw({ pay_type, account_name, account_no, amount }) {
    return $request.post({
        url: '/api/v1/withdraw/apply_withdraw',
        data: { pay_type, account_name, account_no, amount },
    });
}

// 获取提现列表
export function getWithdrawList({ pay_type, account_name, account_no, amount }) {
    return $request.post({
        url: '/api/v1/withdraw/get_withdraw_list',
        data: { pay_type, account_name, account_no, amount },
    });
}

// 获取明细列表
export function getFundRecordList({ pay_type, account_name, account_no, amount }) {
    return $request.post({
        url: '/api/v1/withdraw/get_fund_record_list',
        data: { pay_type, account_name, account_no, amount },
    });
}
