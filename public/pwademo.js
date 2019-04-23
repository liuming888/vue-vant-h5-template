/*
 * @Description: PWA系列
 * @Date: 2019-04-23 01:38:25
 * @LastEditTime: 2019-04-23 23:35:51
 */

/**
 * @description: 判断是pc不
 */
function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod');
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

function isBrowser() {
    var explorer = window.navigator.userAgent;
    //判断是否为IE浏览器
    if (explorer.indexOf('MSIE') >= 0) {
        return 'ie';
    }
    //判断是否为Firefox浏览器
    else if (explorer.indexOf('Firefox') >= 0) {
        return 'Firefox';
    }
    //判断是否为Chrome浏览器
    else if (explorer.indexOf('Chrome') >= 0) {
        return 'Chrome';
    }
    //判断是否为Opera浏览器
    else if (explorer.indexOf('Opera') >= 0) {
        return 'Opera';
    }
    //判断是否为Safari浏览器
    else if (explorer.indexOf('Safari') >= 0) {
        return 'Safari';
    }
}

/**
 * @description: 判断系统类型
 */
function OSnow() {
    var agent = navigator.userAgent.toLowerCase();
    var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
    if (agent.indexOf('win32') >= 0 || agent.indexOf('wow32') >= 0) {
        return 'windows32';
    }
    if (agent.indexOf('win64') >= 0 || agent.indexOf('wow64') >= 0) {
        return 'windows64';
    }
    if (isMac) {
        return 'mac';
    }
}

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

function getUrl(VUE_APP_ENV) {
    var url = '';
    switch (VUE_APP_ENV) {
        case 'mock':
            url = '';
        case 'development':
        case 'dev': // 开发域名环境
            url = 'https://dev-ht-zdd-api.istarbuy.com';
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
var env = document.getElementById('pageBody').dataset.env;
console.log('env---------------------------------------------------: ', env);
var notification = {}; // 全局变量  存放Notification的实例对象
notification.addEventListener = function() {};

var title = 'PWA即学即用';
var options = {
    dir: 'rtl', // auto（自动）, ltr（从左到右）, or rtl（从右到左）
    body: '邀请你一起学习',
    // icon: '/static/icons/book-128.png',
    icon: 'https://www.lovingistarbuy.com/bitbug_favicon.ico',
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

/**
 * 将浏览器生成的subscription信息提交到服务端
 * 服务端保存该信息用于向特定的客户端用户推送
 * @param {string} body 请求体
 * @param {string} url 提交的api路径，默认为/subscription
 * @return {Promise}
 */
function sendSubscriptionToServer(body, url) {
    var httpPath = getUrl(env);
    console.log('httpPath: ', httpPath);
    url = httpPath + (url || '/check');
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

/**
 * @description: Service Worker : Push API （移动端兼容些）
 */
function showNotification() {
    Notification.requestPermission(function(result) {
        if (result === 'granted') {
            navigator.serviceWorker.ready.then(function(registration) {
                registration.showNotification(title, options);
            });
        }
    });
}

/**
 * @description: Notification Api (PC端兼容些)
 */
function notifyMe() {
    // 先检查浏览器是否支持
    if (!('Notification' in window)) {
       console.warn('浏览器不支持Notification API,直接使用Service Worker : Push API');
       throw "浏览器不支持Notification API";
    }else if (Notification.permission === 'granted') {
    // 检查用户是否同意接受通知
        // If it's okay let's create a notification
      notification = new Notification(title, options);
    }else if (Notification.permission !== 'denied') {
         // 否则我们需要向用户获取权限
        Notification.requestPermission(function(permission) {
            // 如果用户同意，就可以向他们发送通知
            if (permission === 'granted') {
               notification = new Notification(title, options);
            }
        });
    }

    // 最后，如果执行到这里，说明用户已经拒绝对相关通知进行授权
    // 出于尊重，我们不应该再打扰他们了
}

/**
 * @description: 组合使用Push & Notification（消息推送与提醒）
 */
function pushInfo(registration) {
    var curIsPc = isPC();
    try {
        if (!curIsPc) {
            // Service Worker : Push API （移动端兼容些）
            showNotification(registration);
        } else {
            //  Notification Api (PC端兼容些)
            notifyMe();
        }
    } catch (error) {
        console.log('推送消息错误', error);
        // 默认使用Service Worker : Push API
        showNotification(registration);
    }
}

if ('serviceWorker' in navigator && 'PushManager' in window) {
    var publicKey = 'BOEQSjdhorIf8M0XFNlwohK3sTzO9iJwvbYU-fuXRF0tvRpPPMGO6d_gJC_pUQwBT7wD8rKutpNTFHOHN3VqJ0A';
    // 注册service worker
    registerServiceWorker('./swdemo.js')
        .then(function(registration) {
            console.warn('Service Worker 注册成功');
            // 开启该客户端的消息推送订阅功能
            // return subscribeUserToPush(registration, publicKey);

            return Promise.all([subscribeUserToPush(registration, publicKey), registration]);
        })
        .then(function(result) {
            var registration = result[1];
            document.querySelector('#pwaT').addEventListener('click', function() {
                console.warn('点击了');
                // 推送消息（pc和移动都支持）
                pushInfo(registration);
            });

            /*********************************** 服务器推送消息主要逻辑 start ************************************************************/
            var body = { subscription: result[0] };
            // 为了方便之后的推送，为每个客户端简单生成一个标识
            body.uniqueid = new Date().getTime();
            console.log('uniqueid', body.uniqueid);
            console.log('body---------------------', body);
            // 将生成的客户端订阅信息存储在自己的服务器上(得后台输出个接口)
            return sendSubscriptionToServer(JSON.stringify(body));
            /*********************************** 服务器推送消息主要逻辑 end ************************************************************/
        })
        .then(function(res) {
            console.log(res);
        })
        .catch(function(err) {
            console.log(err);
        });

    /**
     * @description:  在client中监听  message事件，判断data，进行不同的操作
     */
    navigator.serviceWorker.addEventListener('message', function(e) {
        var action = e.data;
        console.log(`receive post-message from sw, action is '${e.data}'`);
        switch (action) {
            case 'show-book':
                location.href = 'https://www.lovingistarbuy.com/'; // 跳转到新域名
                break;
            case 'contact-me':
                location.href = 'https://abicenter.todaysindia.net/?cbType=3&isf=1&category=';
                break;
            default:
                // 默认点击别的地方的行为
                location.href = 'https://www.lovingistarbuy.com/';
                break;
        }
    });

    /**
     * @description:notification全局变量 Notification的实例 
     */
    notification.addEventListener('click', function(e) {
        var action = e.data;
        console.log(`receive post-message from sw, action is '${e.data}'`);
        switch (action) {
            case 'show-book':
                location.href = 'https://www.lovingistarbuy.com/'; // 跳转到新域名
                break;
            case 'contact-me':
                location.href = 'https://abicenter.todaysindia.net/?cbType=3&isf=1&category=';
                break;
            default:
                // 默认点击别的地方的行为
                location.href = 'https://www.lovingistarbuy.com/';
                break;
        }
    });
}
