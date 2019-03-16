export default {
    userInfo: {}, // 当前用户信息
    isreFreshToken: false, // 是否已经请求了刷新token（前提本地存了上次的）
    goodsList: [
        // 商品列表数据（默认每个商品前端更改记录是否已砍价是否已砍价）
        /*  {                //类型：Object  必有字段  备注：无
            "spu_id": 1,                //类型：Number  必有字段  备注：商品id
            "title": "mock",                //类型：String  必有字段  备注：商品标题
            "sub_title": "mock",                //类型：String  必有字段  备注：副标题（商品推荐语）
            "price": 1,                //类型：Number  必有字段  备注：商品售价
            "deliver_count": 1,                //类型：Number  必有字段  备注：已送出数量
            "spu_pics": -[                //类型：Array  必有字段  备注：图片地址列表（已排好序）
            ],
            "original_price": "mock",                //类型：String  必有字段  备注：原价
            isBargain:false   // 前端自己标记下是否已砍价
        } */
    ],
    dialogs: {
        // 全局弹窗
        loginSelect: {
            // 登录选择弹窗
            show: false,
            jumpUrl: '', // 登录成功后跳转的链接
        },
        bidPriceCompleted: {
            // 砍价完成弹窗
            show: false,
        },
    },
};
