const router = require('express').Router()
const db = require('../services/db')

router.get('/', async (req, res) => {
    res.send(await db.select().from('userprofile').orderBy('userprofileid'))
})

router.get('/:id', async (req, res) => {
    const userid = req.params.id
    res.send(
        await db
            .select()
            .from('userprofile')
            .where('userprofileid', '=', userid)
    )
})

router.post('/', async (req, res) => {
    const newUser = req.body
    await db.insert(newUser).into('userprofile')
    res.send(
        `The user "${newUser.name}" added succesful with email: "${newUser.email}" phone: "${newUser.phone}"`
    )
})

router.put('/:id', async (req, res) => {
    const userid = req.params.id
    const updUser = req.body
    await db('userprofile').update(updUser).where('userprofileid', '=', userid)
    res.send(`The user "${userid}" updated succesful"`)
})

router.delete('/:id', async (req, res) => {
    const userid = req.params.id
    await db('userprofile').delete().where('userprofileid', '=', userid)
    res.send(`The user "${userid}" deleted succesful`)
})

module.exports = router
