const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const koaRouter = require('koa-router');
const koaJson = require('koa-json');

const app = new Koa();
const router = new koaRouter();

app.use(cors());
app.use(bodyParser());
app.use(koaJson());
app.use(router.routes()).use(router.allowedMethods());

router.get("/test", async (ctx) => (
  ctx.body = {
    "msg": "kkkkkkkkkk"
  }
))

app.use(async ctx => ctx.body = "kkkkk")

app.listen(3003, () => {
  console.log("App listening on port 3003!!")
});
