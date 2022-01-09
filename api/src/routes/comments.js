const router = require('express').Router()
const db = require('../services/db')

router.get('/', async (req, res) => {
    res.send(
        await db.select().from('userpostcomments').orderBy('userpostcommentsid')
    )
})

router.get('/:id', async (req, res) => {
    const commentId = req.params.id
    res.send(
        await db
            .select()
            .from('userpostcomments')
            .where('userpostcommentsid', '=', commentId)
    )
})

router.post('/', async (req, res) => {
    const { userprofileid, postid, content, maincomment } = req.body
    const date = new Date().toLocaleString()
    await db
        .insert({
            userprofileid,
            postid,
            content,
            datecreate: date,
            maincomment,
        })
        .into('userpostcomments')
    res.send(`The comment was created`)
})

router.put('/:id', async (req, res) => {
    const { content } = req.body
    const commentId = req.params.id
    const dateUpdate = new Date().toLocaleString()
    await db('userpostcomments')
        .update({
            content,
            dateupdate: dateUpdate,
        })

        .where('userpostcommentsid', '=', commentId)
    res.send(`The post "${commentId}" updated succesful"`)
})

router.delete('/:id', async (req, res) => {
    const commentId = req.params.id
    await db('userpostcomments')
        .delete()
        .where('userpostcommentsid', '=', commentId)
    res.send(`The post "${commentId}" deleted succesful`)
})

module.exports = router
