/*
 * @Description: PWA系列
             window.getPushReq  获取权限方法
             window.pwaPush  推送条默认消息的方法
 * @Date: 2019-04-23 01:38:25
 * @LastEditTime: 2019-05-07 16:08:03
 */
// import $request from './api/request.js';

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
let { BASE_URL, VUE_APP_ENV: env, VUE_APP_URL } = process.env;
var notification = {}; // 全局变量  存放Notification的实例对象
notification.addEventListener = function() {};

var title = 'ISTARBUY';
var options = {
    dir: 'auto', // auto（自动）, ltr（从左到右）, or rtl（从右到左）
    body: 'Buy your favorite products with your friends.',
    data: {
        time: new Date().toString(),
        message: 'Hello World!',
    },
    icon: BASE_URL + 'static/icons/istarbuy-128.png',
    badge: BASE_URL + 'static/icons/istarbuy-72.png',
    // image: BASE_URL + 'static/icons/istarbuy-32.png',
    vibrate: [500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40, 500],
    //  sound: '/demos/notification-examples/audio/notification-sound.mp3',
    timestamp: +new Date(),
    actions: [
        {
            action: 'show-istarbuy',
            // title: '去看看',
            title: 'Go and see',
            // "icon": "images/yes.png"
        },
        {
            action: 'contact-me',
            // title: '联系我',
            title: 'contact me',
            // "icon": "images/yes.png"
        },
    ],
    tag: 'pwa-starter',
    renotify: true,
    //  silent: true, // 静音
    //  requireInteraction: true  // 此选项会展示通知直到用户消除或点击
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
    return registration.pushManager
        .subscribe(subscribeOptions)
        .then(function(pushSubscription) {
            console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
            return pushSubscription;
        })
        .catch(function(err) {
            console.warn('异常err: ', err);
            return false;
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
    console.log('httpPath------------------------------------------: ', httpPath);
    // url = httpPath + (url || '/check');
    url = '/pwa/subscription'; // 自己本地测试
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

    // $request.post({
    //     url:'/pwa/save-subscription'
    // })
}

/**
 * @description: 获取权限的 API 相对简单，但是不太好的是这个 API 最近由原来的回调方式变为返回一个 Promise 对象。这个变动造成了我们不能分辨当前浏览器究竟实现了哪一个，所以必须同时实现并处理两者。
 */
function askPermission() {
    return new Promise(function(resolve, reject) {
        const permissionResult = Notification.requestPermission(function(result) {
            resolve(result);
        });

        if (permissionResult) {
            permissionResult.then(resolve, reject);
        }
    }); /* .then(function(permissionResult) {
        if (permissionResult !== 'granted') {
            throw new Error("We weren't granted permission.");
        }
    }); */
}

/**
 * @description: Service Worker : Push API （移动端兼容些）
 */
function showNotification(tit, opt) {
    askPermission().then(function(result) {
        if (result === 'granted') {
            navigator.serviceWorker.ready.then(function(registration) {
                registration.showNotification(tit || title, opt || options);
            });
        }
    });
}

/**
 * @description: Notification Api (PC端兼容些)
 */
function notifyMe(tit, opt) {
    // 先检查浏览器是否支持
    if (!('Notification' in window)) {
        console.warn('浏览器不支持Notification API,直接使用Service Worker : Push API');
        throw '浏览器不支持Notification API';
    } else if (Notification.permission === 'granted') {
        // 检查用户是否同意接受通知
        notification = new Notification(tit || title, opt || options);
    } else if (Notification.permission !== 'denied') {
        askPermission().then(function(permission) {
            // 如果用户同意，就可以向他们发送通知
            if (permission === 'granted') {
                notification = new Notification(tit || title, opt || options);
            }
        });
    }

    // 最后，如果执行到这里，说明用户已经拒绝对相关通知进行授权
    // 出于尊重，我们不应该再打扰他们了
}

/**
 * @description: 组合使用Push & Notification（消息推送与提醒）
 */
function pushInfo(tit, opt) {
    var curIsPc = isPC();
    try {
        if (!curIsPc) {
            console.warn('走Service Worker : Push API Api推送');
            // Service Worker : Push API （移动端兼容些）
            showNotification(tit, opt);
            console.log('tit, opt: ', tit, opt);
        } else {
            console.warn('走Notification Api推送');
            //  Notification Api (PC端兼容些)
            notifyMe(tit, opt);
        }
    } catch (error) {
        console.log('推送消息错误', error);
        // 默认使用Service Worker : Push API
        showNotification(tit, opt);
    }
}

if ('serviceWorker' in navigator && 'PushManager' in window) {
    window.getPushReq = askPermission; // **************************************************************获取权限方法

    var publicKey = 'BFikkgYxQH1ymWOzWhFaVduuCcA3VGLSu7vCh_bMQfF22LLINmI_r-8241pEBJeZqh25dUN_zlRewBWgU3MLhEs';
    // 注册service worker
    registerServiceWorker('/sw.js')
        .then(function(registration) {
            console.warn('Service Worker 注册成功');
            /*********************************** 服务器推送消息主要逻辑 start ************************************************************/
            // var res = subscribeUserToPush(registration, publicKey); // 开启该客户端的服务端消息推送订阅功能
            // if (res) {
            //     //  当一打开网页就请求权限时
            //     var body = { subscription: res };
            //     // 为了方便之后的推送，为每个客户端简单生成一个标识
            //     body.uniqueid = new Date().getTime();
            //     console.log('uniqueid', body.uniqueid);
            //     console.log('body---------------------', body);
            //     // 将生成的客户端订阅信息存储在自己的服务器上(得后台输出个接口)
            //     // return sendSubscriptionToServer(JSON.stringify(body));
            // }
            /*********************************** 服务器推送消息主要逻辑 end ************************************************************/

            /*********************************** 前端直接推送消息主要逻辑 start ************************************************************/
            var pwaPush = (window.pwaPush = function(obj) {
                console.warn('点击了');
                var tit = obj && obj.tit;
                var opt = obj && obj.opt;
                // 前端直接推送消息（pc和移动都支持）
                pushInfo(tit, opt);
            });
            document.querySelector('#pwaT').addEventListener('click', pwaPush);
            /*********************************** 前端直接推送消息主要逻辑 end ************************************************************/
        })
        .catch(function(err) {
            console.warn('异常', err);
        });

    /******************************************** 点击消息通知框时的操作 start  ************************************************/
    /**
     * @description: 点击消息通知框后
     */
    function clickAction(e) {
        var action = e.data;
        switch (action) {
            case 'show-istarbuy':
                location.href = location.href; // 跳转当前页面
                // window.open(location.href);
                break;
            case 'contact-me':
                // location.href = location.origin+'/my/Tutorial#contactUs'; // 跳转到新手教程底部联系方式那了
                window.open(location.origin + '/my/Tutorial#contactUs');
                break;
            default:
                // 默认点击别的打开首页
                location.href = location.origin;
                // window.open(location.origin);
                break;
        }
    }

    /**
     * @description:  在client中监听sw文件postMessage过来的  message事件，判断data，进行不同的操作
     */
    navigator.serviceWorker.addEventListener('message', clickAction);

    /**
     * @description:notification全局变量 Notification的实例
     */
    notification.addEventListener('click', clickAction);
    /******************************************** 点击消息通知框时的操作 end  ************************************************/

    /**
     * @description:   判断用户进入和离开当前页面
     */
    document.addEventListener('visibilitychange', function() {
        var isHidden = document.hidden;

        if (isHidden) {
            console.log("'死鬼，你去哪儿了'");
            window.pwaPush();
        } else {
            console.log('你终于回来了啊');
        }
    });
}
