const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'easy-mock',
        message: '接口测试数据'
    })
})

router.get('/json', async (ctx, next) => {
    ctx.body = {
        code: 0,
        title: 'koa2 json'
    }
})

router.get('/profile/:userName', async (ctx, next) => {
    const { userName } = ctx.params
    ctx.body = {
        title: 'profile API',
        userName
    }
})

router.get('/loadMore/:userName/:pageIndex', async (ctx, next) => {
    const { userName, pageIndex } = ctx.params
    ctx.body = {
        title: 'loadMore API',
        userName,
        pageIndex
    }
})

router.post('/isExist', async (ctx, next) => {
    const {userName} = ctx.request.body
    ctx.body = userName
})

module.exports = router
