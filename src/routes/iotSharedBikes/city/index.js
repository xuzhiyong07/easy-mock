/**
 * @description 城市相关接口
 * @author xuzhiy
 */

const router = require('koa-router')()
const { list } = require('./mock.json')

router.get('/open_city', async (ctx, next) => {
    ctx.body = {
        code: 0,
        list
    }
})

module.exports = router
