const router = require('express').Router()
const db = require('../services/db')

router.get('/', async (req, res) => {
    try {
        res.status(200).json(await db.select().from('post').orderBy('postid'))
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const postid = req.params.id
        res.status(200).json(
            await db.select().from('post').where('postid', postid)
        )
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id/likes', async (req, res) => {
    try {
        const postid = req.params.id
        res.status(200).json(
            await db.select().from('userpostlikes').where('postid', postid)
        )
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id/comments', async (req, res) => {
    try {
        const postid = req.params.id
        res.status(200).json(
            await db.select().from('userpostcomments').where('postid', postid)
        )
    } catch (error) {
        res.send(error)
    }
})

router.post('/', async (req, res) => {
    try {
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
    } catch (error) {
        res.send(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
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
    } catch (error) {
        res.send(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const postid = req.params.id
        res.status(200).json(await db('post').delete().where('postid', postid))
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
