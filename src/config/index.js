let appId="";
if (process.env.NODE_ENV == 'dev'){
    appId = "844618395883361"; // 自己的
} else if (process.env.NODE_ENV=='test'){
    // appId ="641363916309941";  // 自己的
    appId = '411009183037605';  // 公司测试的
} else if (process.env.NODE_ENV =="production"){
    appId ='2292102501067089'; // 公司正式的
}

export const FBConfig = {
    appId,
    cookie: true,
    xfbml: true,
    version: 'v3.2',
};