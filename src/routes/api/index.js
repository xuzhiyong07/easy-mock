const router = require('koa-router')()

router.get('/api', async (ctx, next) => {
    ctx.body = {
        code: 0,
        title: 'api test'
    }
})

module.exports = router
