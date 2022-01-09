const router = require('express').Router()
const db = require('../services/db')

router.get('/', async (req, res) => {
    res.send(await db.select().from('userpostlikes').orderBy('userpostlikesid'))
})

router.post('/', async (req, res) => {
    const addLike = req.body
    await db.insert(addLike).into('userpostlikes')
    res.send(`The like was added`)
})

router.delete('/:id', async (req, res) => {
    const likeId = req.params.id
    await db('userpostlikes').delete().where('userpostlikesid', '=', likeId)
    res.send(`The like "${likeId}" deleted succesful`)
})

module.exports = router
