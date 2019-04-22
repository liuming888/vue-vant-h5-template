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

if ('serviceWorker' in navigator && 'PushManager' in window) {
    var publicKey = 'BOEQSjdhorIf8M0XFNlwohK3sTzO9iJwvbYU-fuXRF0tvRpPPMGO6d_gJC_pUQwBT7wD8rKutpNTFHOHN3VqJ0A';
    // 注册service worker
    registerServiceWorker('./sw.js')
        .then(function(registration) {
            console.log('Service Worker 注册成功');
            // 开启该客户端的消息推送订阅功能
            return subscribeUserToPush(registration, publicKey);
        })
        .then(function(subscription) {
            var body = { subscription: subscription };
            // 为了方便之后的推送，为每个客户端简单生成一个标识
            body.uniqueid = new Date().getTime();
            console.log('uniqueid', body.uniqueid);
            console.log('body---------------------', body);
            // 将生成的客户端订阅信息存储在自己的服务器上
            // return sendSubscriptionToServer(JSON.stringify(body));
        })
        .then(function(res) {
            console.log(res);
        })
        .catch(function(err) {
            console.log(err);
        });
}

// if (navigator.serviceWorker) {
//     navigator.serviceWorker.register('./sw.js').then(function() {
//         console.log('Service Worker 注册成功');
//     });
// }

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
