const router = require('express').Router()
const commentsService = require('../services/store/comments.service')

router.get('/', async (req, res) => {
    try {
        res.status(200).json(await commentsService.getAllComments())
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const commentId = req.params.id
        res.status(200).json(await commentsService.getCommentId(commentId))
    } catch (error) {
        res.send(error)
    }
})

router.post('/', async (req, res) => {
    try {
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
    } catch (error) {
        res.send(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { content } = req.body
        const commentId = req.params.id
        const dateUpdate = new Date().toLocaleString()
        res.status(200).json(
            await commentsService.putComment({ commentId, content, dateUpdate })
        )
    } catch (error) {
        res.send(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const commentId = req.params.id
        res.status(200).json(await commentsService.delCommentId(commentId))
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
