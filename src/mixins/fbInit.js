import { FBConfig } from '@/config/index.js';
export default {
    beforeCreate() {
        if (process.env.VUE_APP_ENV == 'development' || process.env.VUE_APP_ENV == 'mock' || window.FB) {
            return;
        }
        // require('@/utils/faceBookSdk.js');

        if (window.FB){
            FB.init(FBConfig);
            FB.AppEvents.logPageView();
            console.warn('已经初始化FB了');
        }else{
            window.fbAsyncInit = async function() {
                FB.init(FBConfig);
                FB.AppEvents.logPageView();
                console.warn('已经初始化FB了');
            };
        }
    },
};
