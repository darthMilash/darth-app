const router = require('express').Router()
const db = require('../services/db')
const asyncHandler = require('../asyncHandler')

router.get(
    '/',
    asyncHandler(async (req, res) => {
        res.send(
            await db.select().from('userpostlikes').orderBy('userpostlikesid')
        )
    })
)

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const addLike = req.body
        await db.insert(addLike).into('userpostlikes')
        res.send(`The like was added`)
    })
)

router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const likeId = req.params.id
        await db('userpostlikes').delete().where('userpostlikesid', '=', likeId)
        res.send(`The like "${likeId}" deleted succesful`)
    })
)

module.exports = router
