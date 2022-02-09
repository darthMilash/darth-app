const router = require('express').Router()
const commentsService = require('../services/store/comments.service')
const asyncHandler = require('../asyncHandler')

router.get(
    '/',
    asyncHandler(async (req, res) => {
        res.status(200).json(await commentsService.getAllComments())
    })
)

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const commentId = req.params.id
        res.status(200).json(await commentsService.getCommentId(commentId))
    })
)

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { userprofileid, postid, content, maincomment } = req.body
        const date = new Date().toLocaleString()
        res.status(200).json(
            await commentsService.postComment({
                userprofileid,
                postid,
                content,
                date,
                maincomment,
            })
        )
    })
)

router.put(
    '/:id',
    asyncHandler(async (req, res) => {
        const { content } = req.body
        const commentId = req.params.id
        const dateUpdate = new Date().toLocaleString()
        res.status(200).json(
            await commentsService.putComment({ commentId, content, dateUpdate })
        )
    })
)

router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const commentId = req.params.id
        res.status(200).json(await commentsService.delCommentId(commentId))
    })
)

module.exports = router
