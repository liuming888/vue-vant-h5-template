let appId = '';
if (process.env.VUE_APP_ENV == 'dev') {
    appId = "844618395883361"; // 自己的
} else if (process.env.VUE_APP_ENV == 'test') {
    appId ="641363916309941";  // 自己的
} else if (process.env.VUE_APP_ENV == 'production') {
    appId = ''; // 公司正式的
} else if (process.env.VUE_APP_ENV=='newProduction'){
    appId ='';
}

export const FBConfig = {
    appId,
    cookie: true,
    xfbml: true,
    version: 'v3.2',
};
