module.exports = {
    plugins: {
        autoprefixer: {
            browsers: ['Android >= 4.0', 'iOS >= 7']
        },
        'postcss-pxtorem': {
            rootValue: 75, // 设计稿宽度的1/10,（JSON文件中不加注释，此行注释及下行注释均删除）
            propList: ['*'], // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
            minPixelValue: 2,  // 小于2px的不转换
        },
    },
};
