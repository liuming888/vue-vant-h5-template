const koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const app = new koa();
const router = new Router();

var Datastore = require('nedb'),
    db = new Datastore();

var webpush = require('web-push');

/**
 * VAPID值
 * 这里可以替换为你业务中实际的值
 */
var vapidKeys = {
    publicKey: 'BIptml2QKXHTp68CMcjVTXsVO9puoZdENwYEEXygL_6JocgYGUOhSLED2avqUCxd5PuoDbhYDhrB3067sBsV9JQ',
    privateKey: '9NxiyeyeiFZ-P2pbpBjSdnnvrGYZH_htTgH0RbmhrkM'
};

webpush.setVapidDetails(
    'mailto:liu1311737393@outlook.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);


router.get('/', async (ctx, next) => {
    ctx.body = `<h1 style="font-size:66px;text-align:center;margin-top:66px;">Hello World!</h1>`;
    await next();
});
router.get('/check', async (ctx, next) => {
    ctx.body = 'ok';
    await next();
});

/**
 * @description: 存储浏览器post来的订阅信息
 */
function saveRecord(obj) {
    let { uniqueid, subscription } = obj;
    return new Promise((r, j) => {
        db.findOne({ 'subscription.endpoint': subscription.endpoint }, (err, res) => {
            if (err) {
                j(err);
                return;
            }
            if (res) {
                console.log('已存在');
                res.uniqueid = uniqueid;
                db.update({ subscription }, res, {}, err => {
                    if (err) {
                        j(err);
                        return;
                    }
                    r(obj);
                });
                return;
            }
            db.insert(obj, (err, item) => {
                if (err) {
                    j(err);
                    return;
                }
                console.log('存储完毕');
                r(obj);
            });
        });
    });
}

function findAll() {
    return new Promise((r, j) => {
        db.find({}, (err, list) => {
            if (err) {
                j(err);
                return;
            }
            r(list);
        });
    });
}

function find(query) {
    return new Promise((r, j) => {
        db.find(query, (err, list) => {
            if (err) {
                j(err);
                return;
            }
            r(list);
        });
    });
}

/* ===================== */
/* 使用web-push进行消息推送 */
/* ===================== */
const options = {
    // proxy: 'http://localhost:1087' // 使用FCM（Chrome）需要配置代理
};

/**
 * 向push service推送信息
 * @param {*} subscription
 * @param {*} data
 */
function pushMessage(subscription, data = {}) {
    webpush
        .sendNotification(subscription, data, options)
        .then(data => {
            console.log('push service的相应数据:', JSON.stringify(data));
            return;
        })
        .catch(err => {
            // 判断状态码，440和410表示失效
            if (err.statusCode === 410 || err.statusCode === 404) {
                return util.remove(subscription);
            } else {
                console.log(subscription);
                console.log(err);
            }
        });
}

/**
 * 提交subscription信息，并保存
 */
router.post('/subscription', async (ctx, next) => {
    console.log('66666666666666666', ctx.request.body);
    // 检查请求请求的 body, 且至少要检查是否含有 endpoint
    if (!ctx.request.body || (ctx.request.body.subscription && !ctx.request.body.subscription.endpoint)) {
        // 不是有效的订阅
        ctx.status = 400;
        ctx.body = JSON.stringify({
            error: {
                id: 'no-endpoint',
                message: 'Subscription must have an endpoint.',
            },
        });
        return false;
    }

    let result = await saveRecord(ctx.request.body);
    console.log('result22222222222222222222222222222222222222222222: ', result);
    ctx.body = {
        status: 0,
        msg: 'sucesss',
    };
});

/**
 * 消息推送API，可以在管理后台进行调用
 */
router.post('/push', koaBody(), async ctx => {
    let { uniqueid, payload } = ctx.request.body;
    let list = uniqueid ? await find({ uniqueid }) : await findAll();
    let status = list.length > 0 ? 0 : -1;

    for (let i = 0; i < list.length; i++) {
        let subscription = list[i].subscription;
        pushMessage(subscription, /* JSON.stringify(payload) */'ceshi server push');
    }

    ctx.response.body = {
        status,
    };
});

app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
    console.log('已经为你开启3000端口', app);
});
