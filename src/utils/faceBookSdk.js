

(function() {
    function FBsdk() {
        try {
            console.warn('hello faceBookSdk!');
            (function (d, s, id) {
                var js,
                    fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk.js';
                fjs.parentNode.insertBefore(js, fjs);
            })(document, 'script', 'facebook-jssdk');
        } catch (error) {
            console.error('出错了', error);
        }
    }

    /**
   * @msg: 登录
   *  @return {pormise} 返回用户的信息如id token name pic_square（头像）或者登录失败的false
   */
    FBsdk.prototype.loginFB = function () {
        var that = this;
        return new Promise(resolve => {
            FB.login(
                function (response) {
                    // console.log('FBlogin');
                    if (response.status === 'connected') {
                        console.warn('login_success!!!!!', response);
                        FB.api('/me', function (res) {
                            // console.log('用户信息为: ', res);
                            var param = { ...response, ...res };

                            // 获取用户头像
                            FB.api('/' + res.id + '/picture', 'GET', { redirect: 'false' }, function (response) {
                                var pic_square = response.data.url;
                                param = { ...param, pic_square };
                                resolve(param);
                            });

                            // ceshi(可以拿到好友列表)
                            // FB.api('/104497707249033/friends', 'GET', {}, function (response) {
                            //     // console.log('shang', response);
                            // });
                        });
                    } else {
                        console.error('login_error!');
                        // console.log(response);
                        resolve(false);
                    }
                } /* ,
                { scope: 'public_profile,email,user_friends,pic_square,user_photos' } */
            );
        });
    };

    /**
     * @msg: 检查登录状态
     * @return {pormise} 返回用户的信息如id token name pic_square（头像）  或者没登录的false
     */
    FBsdk.prototype.checkFBLoginState = function () {
        var that = this;
        return new Promise((resolve, rejcet) => {
            // console.log('FB.getLoginStatus', FB.getLoginStatus);
            FB.getLoginStatus(function (response) {
                that.statusChangeCallback(response)
                    .then(res => {
                        // console.log('哈哈哈');
                        resolve(res);
                    })
                    .catch(e => {
                        rejcet(false);
                    });
            });
        });
    };

    /**
   * @msg:  检查接口或者登录接口的回调参数处理
   * @param {object} response  回调参数
   * @return {pormise} 返回用户的信息如id token name pic_square（头像）  或者没登录的false不是promise
   */
    FBsdk.prototype.statusChangeCallback = function (response) {
        var that = this;
        // {
        //     status: 'connected',
        //         authResponse: {
        //         accessToken: '...',
        //             expiresIn: '...',
        //                 reauthorize_required_in: '...'
        //         signedRequest: '...',
        //             userID: '...'
        //     }
        // }

        // console.log('statusChangeCallback状态检查', response);

        if (response.status === 'connected') {
            return that.getUserInfo(response);
        } else {
            console.error('没登录！');
            // console.log(response);
            return false;
        }
    };

    /**
   * @msg: 返回获取到的用户信息
   * @param {promise} 返回用户的信息如id token name pic_square（头像）
   * @return:
   */
    FBsdk.prototype.getUserInfo = function (response) {
        var that = this;
        // console.log('Welcome!  Fetching your information.... ');
        return new Promise(resolve => {
            FB.api('/me', function (res) {
                // console.log('用户信息为: ', res);
                var param = { ...response, ...res };

                // 获取用户头像
                FB.api('/' + res.id + '/picture', 'GET', { redirect: 'false' }, function (response) {
                    var pic_square = response.data.url;
                    param = { ...param, pic_square };
                    resolve(param);
                });

                // ceshi(可以拿到好友列表)
                // FB.api('/104497707249033/friends', 'GET', {}, function (response) {
                //     // console.log('shang', response);
                // });
            });
        });
    };

    /**
     * @msg: 退出登录
     */
    FBsdk.prototype.logoutFB = function logoutFB() {
        FB.logout(function(response) {
            // Person is now logged out
        });
    };




    
    /**
     * @msg:  分享好友
     */
    FBsdk.prototype.shareFB = function(invite_url) {
        // console.log('当前执行分享的用户ID为', user_id);
        return new Promise(resolve => {
            FB.ui({ method: 'share', href: invite_url, /* mobile_iframe: true, */ hashtag: '#' + document.title, quote: 'Come to the game box and play games and get rewards' }, function(response) {
                if (response && !response.error_message) {
                    // console.log('Posting completed.');
                    resolve(response);
                } else {
                    resolve(false);
                    console.error('Error while posting.');
                }
            });
        });
    };

    // /**
    //  * @description: sdk加载完初始化下（引用时可能SDK还在加载中）
    //  * @param {type}
    //  * @return:
    //  */
    // FBsdk.prototype.fbAsyncInit = function(callBack) {
    //     window.fbAsyncInit = function() {
    //         FB.init({ appId: '259750671380714', cookie: true, xfbml: true, version: 'v3.2' });
    //         FB.AppEvents.logPageView();
    //         callBack();
    //     };
    // };

    window.$faceBookApi = new FBsdk();
})();
