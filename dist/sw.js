var cacheName = 'zdd-0-0-1';
var cacheFiles = ['/About us.html', '/bitbug_favicon.ico', '/Contact us.html', '/Privacy Policy.html', '/Terms & Conditions.html', '/timg.jpg', '/timg1.gif', '/timg2.gif', '/timg3.gif', '/wangzhanicon.png', '/static/lib/vue.runtime.min.js', '/static/lib/vue-router.min.js', '/static/lib/vuex.min.js', '/static/lib/axios.min.js'];

// // 监听install事件，安装完成后，进行文件缓存
self.addEventListener('install', function(e) {
    console.log('Service Worker 状态： install');
    var cacheOpenPromise = caches.open(cacheName).then(function(cache) {
        return cache.addAll(cacheFiles);
    });
    e.waitUntil(cacheOpenPromise);
});

//  缓存可能造成问题
// 简单缓存
// self.addEventListener('fetch', function(e) {
//     // 如果有cache则直接返回，否则不操作
//     e.respondWith(
//         caches
//             .match(e.request)
//             .then(function(cache) {
//                 // return cache || fetch(e.request);
//                 return cache;
//             })
//             .catch(function(err) {
//                 console.log(err);
//                 // return fetch(e.request);
//                 return false;
//             })
//     );
// });

// 复杂缓存
// self.addEventListener('fetch', function(e) {
//     // 需要缓存的xhr请求
//     var cacheRequestUrls = [
//         /* '/my/Tutorial' */
//     ];
//     // console.log('现在正在请求：' + e.request.url);

//     // 判断当前请求是否需要缓存
//     var needCache = cacheRequestUrls.some(function(url) {
//         return e.request.url.indexOf(url) > -1;
//     });

//     /**** 这里是对XHR数据缓存的相关操作 ****/
//     if (needCache) {
//         // 需要缓存
//         // 使用fetch请求数据，并将请求结果clone一份缓存到cache
//         // 此部分缓存后在browser中使用全局变量caches获取
//         caches.open(apiCacheName).then(function(cache) {
//             return fetch(e.request).then(function(response) {
//                 cache.put(e.request.url, response.clone());
//                 return response;
//             });
//         });
//     } else {
//         /* ******************************* */
//         // 非api请求，直接查询cache
//         // 如果有cache则直接返回，否则通过fetch请求
//         e.respondWith(
//             caches
//                 .match(e.request)
//                 .then(function(cache) {
//                     return cache || fetch(e.request);
//                 })
//                 .catch(function(err) {
//                     console.log(err);
//                     return fetch(e.request);
//                 })
//         );
//     }
// });

// 监听activate事件，激活后通过cache的key来判断是否更新cache中的静态资源
self.addEventListener('activate', function(e) {
    console.log('Service Worker 状态： activate');
    var cachePromise = caches.keys().then(function(keys) {
        return Promise.all(
            keys.map(function(key) {
                if (key !== cacheName) {
                    return caches.delete(key);
                }
            })
        );
    });
    e.waitUntil(cachePromise);
    return self.clients.claim();
});

/**
 * @description: push处理相关部分
 */
self.addEventListener('push', function(e) {
    var data = e.data;
    if (e.data) {
        data = data.json();
        console.log('push的数据为：', data);
        var title = 'PWA即学即用';
        var options = {
            body: data,
            icon: '/img/icons/book-128.png',
            image: '/img/icons/book-521.png', // no effect
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
        self.registration.showNotification(title, options);
    } else {
        console.log('push没有任何数据');
    }
});

/**
 * @description: 响应用户对于提醒框的点击事件
 */
self.addEventListener('notificationclick', function(e) {
    var action = e.action;
    console.log(`action tag: ${e.notification.tag}`, `action: ${action}`);

    switch (action) {
        case 'show-book':
            console.log('show-book');
            break;
        case 'contact-me':
            console.log('contact-me');
            break;
        default:
            console.log(`未处理的action: ${e.action}`);
            action = 'default';
            break;
    }

    e.waitUntil(
        // 获取所有clients
        self.clients
            .matchAll()
            .then(function(clients) {
                if (!clients || clients.length === 0) {
                    console.warn("不存在该client");
                    // 当不存在client时，打开该网站
                    self.clients.openWindow && self.clients.openWindow('https://www.lovingistarbuy.com/');
                    return;
                }
                // 切换到该站点的tab
                clients[0].focus && clients[0].focus();
                clients.forEach(function(client) {
                    // 使用postMessage进行通信
                    client.postMessage(action);
                });
            })
            .then(() => {
                console.warn("关闭系统通知框");
                e.notification.close();
            })
    );
});
