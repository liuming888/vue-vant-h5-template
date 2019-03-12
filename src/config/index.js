const appId="";
if (process.env.NODE_ENV == 'dev'){
    appId = "844618395883361";
} else if (process.env.NODE_ENV=='test'){
    appId ="641363916309941";
} else if (process.env.NODE_ENV =="production"){

}

export const FBConfig = {
    appId,
    cookie: true,
    xfbml: true,
    version: 'v3.2',
};