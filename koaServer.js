const koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const app = new koa();
const router = new Router();

var Datastore = require('nedb'),
    db = new Datastore();

router.get('/', async (ctx, next) => {
    ctx.body = `<h1 style="font-size:66px;text-align:center;margin-top:66px;">Hello World!</h1>`;
    await next();
});
router.get('/check', async (ctx, next) => {
    ctx.body = 'ok';
    await next();
});

function saveSubscriptionToDatabase(subscription) {
    return new Promise(function(resolve, reject) {
        db.insert(subscription, function(err, newDoc) {
            if (err) {
                reject(err);
                return;
            }
            console.log('newDoc: ', newDoc);
            resolve(newDoc._id);
        });
    });
}

router.post('/save-subscription', async (ctx, next) => {
    console.log('66666666666666666', ctx.request.body);
    // ctx.body = 'save-subscription';
    // await next();

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

    let result=await saveSubscriptionToDatabase(ctx.request.body.subscription);
    console.log('result22222222222222222222222222222222222222222222: ', result);

    ctx.body="111";
   
});

app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
    console.log('已经为你开启3000端口', app);
});
