const router = require('express').Router()
const db = require('../services/db')
const asyncHandler = require('../middleware/asyncHandler')

router.get(
    '/',
    asyncHandler(async (req, res) => {
        res.status(200).json(await db.select().from('post').orderBy('postid'))
    })
)

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const postid = req.params.id
        res.status(200).json(
            await db.select().from('post').where('postid', postid)
        )
    })
)

router.get(
    '/:id/likes',
    asyncHandler(async (req, res) => {
        const postid = req.params.id
        res.status(200).json(
            await db.select().from('userpostlikes').where('postid', postid)
        )
    })
)

router.get(
    '/:id/comments',
    asyncHandler(async (req, res) => {
        const postid = req.params.id
        res.status(200).json(
            await db.select().from('userpostcomments').where('postid', postid)
        )
    })
)

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { userprofileid, content, hiddenlevel } = req.body
        const date = new Date().toLocaleString()
        res.status(200).json(
            await db
                .insert({
                    userprofileid,
                    content,
                    datecreate: date,
                    likescount: 0,
                    commentscount: 0,
                    hiddenlevel,
                })
                .into('post')
        )
    })
)

router.put(
    '/:id',
    asyncHandler(async (req, res) => {
        const { content, hiddenlevel } = req.body
        const postid = req.params.id
        const dateUpdate = new Date().toLocaleString()
        res.status(200).json(
            await db('post')
                .update({
                    content,
                    hiddenlevel,
                    dateupdate: dateUpdate,
                })
                .where('postid', postid)
        )
    })
)

router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const postid = req.params.id
        res.status(200).json(await db('post').delete().where('postid', postid))
    })
)

module.exports = router
