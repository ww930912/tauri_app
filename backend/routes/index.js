const router = require('koa-router')()
const fs = require('fs')
const jwt = require('jsonwebtoken');
const path = require('path')
const { getToken } = require('../module/jwt')

const { secret } = require('../config/index')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

// 登录
router.post("/login", async (ctx, next) => {
  const { name } = ctx.request.body;
  let payload = { name };
  let permissions
  await new Promise((resolve, reject) => {
    fs.readFile(path.resolve('db/', `${name}_permissions.json`), (err, dataStr) => {
      if(err) {
        reject()
      } else {
        permissions = JSON.parse(dataStr.toString());
        resolve()
      }
    })
  }).then(()=>{
     ctx.response.body = {
      status: 1,
      code: "200",
      data: { token: getToken(payload) },
    }
  }).catch(()=>{
    ctx.response.body = {
      status: 1,
      code: "-1",
      message: 'user does not exist!'
    }
  })
})


module.exports = router
