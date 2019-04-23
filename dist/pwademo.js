/**
 * @description:  增加到桌面图标的事件
 */
window.addEventListener('beforeinstallprompt', function(e) {
    // beforeinstallprompt event fired
    e.userChoice.then(function(choiceResult) {
        if (choiceResult.outcome === 'dismissed') {
            console.log('用户取消安装应用');
        } else {
            console.log('用户安装了应用');
        }
    });
});

/****************************************************** 浏览器消息推送相关逻辑start *******************************************/
/**
 * base64的相关操作，具体可以参考
 * https://github.com/web-push-libs/web-push#using-vapid-key-for-applicationserverkey
 */
window.urlBase64ToUint8Array = function(base64String) {
    var padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
};

/**
 * 将service worker的注册封装为一个方法，方便使用
 * @param {string} file service worker文件路径
 * @return {Promise}
 */
function registerServiceWorker(file) {
    return navigator.serviceWorker.register(file);
}

/**
 * 用户订阅相关的push信息
 * 会生成对应的pushSubscription数据，用于标识用户与安全验证
 * @param {ServiceWorker Registration} registration
 * @param {string} publicKey 公钥
 * @return {Promise}
 */
function subscribeUserToPush(registration, publicKey) {
    var subscribeOptions = {
        userVisibleOnly: true,
        applicationServerKey: window.urlBase64ToUint8Array(publicKey),
    };
    return registration.pushManager.subscribe(subscribeOptions).then(function(pushSubscription) {
        console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
        return pushSubscription;
    });
}

var env = document.getElementById('app').dataset.env;
function getUrl(VUE_APP_ENV) {
    var url = '';
    switch (VUE_APP_ENV) {
        case 'mock':
            url = '';
        case 'development':
            break;
        case 'dev': // 开发域名环境
            url = 'https://dev-ht-zdd-api.istarbuy.com/';
            // 阳
            // url = 'http://192.168.4.32:8024';
            break;
        case 'test':
            // url =' https://test-ht-zdd-api.istarbuy.com/';
            // url = 'https://test-ht-zdd-api.istarbuy.com:8443';
            url = 'https://pubtest-ht-zdd-api.istarbuy.com';
            break;
        case 'newProduction':
        case 'production':
            url = 'https://api.istarbuy.com';
            break;
    }
    return url;
}

/**
 * 将浏览器生成的subscription信息提交到服务端
 * 服务端保存该信息用于向特定的客户端用户推送
 * @param {string} body 请求体
 * @param {string} url 提交的api路径，默认为/subscription
 * @return {Promise}
 */
function sendSubscriptionToServer(body, url) {
    var httpPath = getUrl(env);
    url = httpPath + (url || '/subscription');
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.timeout = 60000;
        xhr.onreadystatechange = function() {
            var response = {};
            if (xhr.readyState === 4 && xhr.status === 200) {
                try {
                    response = JSON.parse(xhr.responseText);
                } catch (e) {
                    response = xhr.responseText;
                }
                resolve(response);
            } else if (xhr.readyState === 4) {
                resolve();
            }
        };
        xhr.onabort = reject;
        xhr.onerror = reject;
        xhr.ontimeout = reject;
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(body);
    });
}

var notification = {}; // Notification的实例对象

/**                               Notification API
 * @description: Notification的功能本身与Push并不耦合 你完全可以只使用Notification API或者Push API来构建Web App的某些功能 作为Notification的“黄金搭档” 组合使用Push & Notification（消息推送与提醒）
 */
function askPermission() {
    return new Promise(function(resolve) {
        // var options = {
        //     dir: 'rtl', // auto（自动）, ltr（从左到右）, or rtl（从右到左）
        //     // lang: 指定通知中所使用的语言。这个字符串必须在 BCP 47 language tag 文档中是有效的
        //     body: '111111111111111111',
        //     tag: '1',
        //     icon: 'https://www.lovingistarbuy.com/bitbug_favicon.ico',
        // };
        // 先检查浏览器是否支持
        if (!('Notification' in window)) {
            console.warn('浏览器不支持Notification API');
        } else if (Notification.permission === 'granted') {
            // 检查用户是否同意接受通知
            // notification = new Notification('Hi there!', options);
            resolve(true);
        } else if (Notification.permission !== 'denied') {
            // 否则我们需要向用户获取权限
            var permissionResult = Notification.requestPermission(function(permission) {
                //     // 如果用户同意，就可以向他们发送通知
                if (permission === 'granted') {
                    // notification = new Notification('Hi there!', options);
                    resolve(true);
                } else {
                    resolve(false);
                }
            });

            if (permissionResult == 'granted') {
                // 用户同意接受通知
                resolve(true);
            } else {
                resolve(false);
            }
        }
    }).then(function(result) {
        if (!result) {
            throw new Error("We weren't granted permission.");
        }
    });
}

if ('serviceWorker' in navigator && 'PushManager' in window) {
    var publicKey = 'BOEQSjdhorIf8M0XFNlwohK3sTzO9iJwvbYU-fuXRF0tvRpPPMGO6d_gJC_pUQwBT7wD8rKutpNTFHOHN3VqJ0A';
    // 注册service worker
    registerServiceWorker('./swdemo.js')
        .then(function(registration) {
            console.warn('Service Worker 注册成功');
            // 开启该客户端的消息推送订阅功能
            // return subscribeUserToPush(registration, publicKey);

            return Promise.all([subscribeUserToPush(registration, publicKey), registration, askPermission()]);
        })
        .then(function(result) {
            var registration = result[1];
            document.querySelector('#pwaT').addEventListener('click', function() {
                console.warn('点击了');
                var title = 'PWA即学即用';
                var options = {
                    body: '邀请你一起学习',
                    icon: '/static/icons/book-128.png',
                    actions: [
                        {
                            action: 'show-book',
                            title: '去看看',
                        },
                        {
                            action: 'contact-me',
                            title: '联系我',
                        },
                    ],
                    tag: 'pwa-starter',
                    renotify: true,
                };
                registration.showNotification(title, options);

                // 目前移动端浏览器普遍还不支持该特性。但是在Mac OS上的safari里面是支持该特性的，不过其调用方式与上文代码有些不太一样
                // notification = new Notification(title, options);
            });

            // 服务器推送消息主要逻辑
            var body = { subscription: result[0] };
            // 为了方便之后的推送，为每个客户端简单生成一个标识
            body.uniqueid = new Date().getTime();
            console.log('uniqueid', body.uniqueid);
            console.log('body---------------------', body);
            // 将生成的客户端订阅信息存储在自己的服务器上(得后台输出个接口)
            return sendSubscriptionToServer(JSON.stringify(body));
        })
        .then(function(res) {
            console.log(res);
        })
        .catch(function(err) {
            console.log(err);
        });

    /**
     * @description:  在client中监听message事件，判断data，进行不同的操作
     */
    navigator.serviceWorker.addEventListener('message', function(e) {
        var action = e.data;
        console.log(`receive post-message from sw, action is '${e.data}'`);
        switch (action) {
            case 'show-book':
                location.href = 'https://www.lovingistarbuy.com/'; // 跳转到新域名
                break;
            case 'contact-me':
                location.href = 'http://hao1.91nzh.com/q/34/';
                break;
            default:
                // 默认点击别的地方的行为
                // document.querySelector('.panel').classList.add('show');
                break;
        }
    });

    // /**
    //  * @description: Mac OS上的safari   notification全局变量 Notification的实例
    //  */
    // notification.addEventListener('click', function(e) {
    //     var action = e.data;
    //     console.log(`receive post-message from sw, action is '${e.data}'`);
    //     switch (action) {
    //         case 'show-book':
    //             location.href = 'https://www.lovingistarbuy.com/'; // 跳转到新域名
    //             break;
    //         case 'contact-me':
    //             alert(2);
    //             location.href = '1311737393@qq.com';
    //             break;
    //         default:
    //             // 默认点击别的地方的行为
    //             // document.querySelector('.panel').classList.add('show');
    //             break;
    //     }
    // });
}


























// /**                               Notification API
//  * @description: Notification的功能本身与Push并不耦合 你完全可以只使用Notification API或者Push API来构建Web App的某些功能 作为Notification的“黄金搭档” 组合使用Push & Notification（消息推送与提醒）
//  * 对Notification API的方法Notification.requestPermission()进行封装
//  * 由于Notification.requestPermission()在某些版本浏览器中会接收一个回调函数（Notification.requestPermission(callback)）作为参数，而在另一些浏览器版本中会返回一个promise，因此将该方法进行包装，统一为promise调用
//  */
// function askPermission() {
//     return new Promise(function(resolve, reject) {
//         var permissionResult = Notification.requestPermission(function(result) {
//             resolve(result);
//         });

//         if (permissionResult) {
//             permissionResult.then(resolve, reject);
//         }
//     }).then(function(permissionResult) {
//         if (permissionResult !== 'granted') {
//             throw new Error("We weren't granted permission.");
//         }
//     });
// }

// if ('serviceWorker' in navigator) {
//     // 单独使用Notification API时的逻辑  （移动端还是注释掉）
//     registerServiceWorker('./sw.js')
//         .then(function(registration) {
//             return Promise.all([registration, askPermission()]);
//         })
//         .then(function(result) {
//             var registration = result[0];
//             /* ===== 添加提醒功能 ====== */
//             document.querySelector('#app').addEventListener('click', function() {
//                 var title = 'PWA即学即用';
//                 var options = {
//                     body: '邀请你一起学习',
//                     icon: '/static/icons/book-128.png',
//                     actions: [
//                         {
//                             action: 'show-book',
//                             title: '去看看',
//                         },
//                         {
//                             action: 'contact-me',
//                             title: '联系我',
//                         },
//                     ],
//                     tag: 'pwa-starter',
//                     renotify: true,
//                 };
//                 registration.showNotification(title, options);

//                 // 目前移动端浏览器普遍还不支持该特性。但是在Mac OS上的safari里面是支持该特性的，不过其调用方式与上文代码有些不太一样
//                 // var notification = new Notification(title, options);
//             });
//             /* ======================= */
//         });

//     /**
//      * @description:  在client中监听message事件，判断data，进行不同的操作
//      */
//     navigator.serviceWorker.addEventListener('message', function(e) {
//         var action = e.data;
//         console.log(`receive post-message from sw, action is '${e.data}'`);
//         switch (action) {
//             case 'show-book':
//                 location.href = 'https://www.lovingistarbuy.com/'; // 跳转到新域名
//                 break;
//             case 'contact-me':
//                 alert(2);
//                 location.href = '1311737393@qq.com';
//                 break;
//             default:
//                 // 默认点击别的地方的行为
//                 // document.querySelector('.panel').classList.add('show');
//                 break;
//         }
//     });

//     /**
//      * @description: Mac OS上的safari
//      */
//     notification.addEventListener('click', function(e) {
//         var action = e.data;
//         console.log(`receive post-message from sw, action is '${e.data}'`);
//         switch (action) {
//             case 'show-book':
//                 location.href = 'https://www.lovingistarbuy.com/'; // 跳转到新域名
//                 break;
//             case 'contact-me':
//                 alert(2);
//                 location.href = '1311737393@qq.com';
//                 break;
//             default:
//                 // 默认点击别的地方的行为
//                 // document.querySelector('.panel').classList.add('show');
//                 break;
//         }
//     });
// }
