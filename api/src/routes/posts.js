const router = require('express').Router()
const db = require('../services/db')

router.get('/', async (req, res) => {
    res.send(await db.select().from('post').orderBy('postid'))
})

router.get('/:id', async (req, res) => {
    const postid = req.params.id
    res.send(await db.select().from('post').where('postid', '=', postid))
})

router.post('/', async (req, res) => {
    const { userprofileid, content, hiddenlevel } = req.body
    const date = new Date().toLocaleString()
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
    res.send(`The post was created`)
})

router.put('/:id', async (req, res) => {
    const { content, hiddenlevel } = req.body
    const postid = req.params.id
    const dateUpdate = new Date().toLocaleString()
    await db('post')
        .update({
            content,
            hiddenlevel,
            dateupdate: dateUpdate,
        })

        .where('postid', '=', postid)
    res.send(`The post "${postid}" updated succesful"`)
})

router.delete('/:id', async (req, res) => {
    const postid = req.params.id
    await db('post').delete().where('postid', '=', postid)
    res.send(`The post "${postid}" deleted succesful`)
})

module.exports = router
