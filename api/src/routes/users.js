const router = require('express').Router()
const path = require('path')
const db = require('../services/db')
const fileMiddleware = require('../middlewares/file')
const asyncHandler = require('../asyncHandler')

router.get(
    '/',
    asyncHandler(async (req, res) => {
        res.send(await db.select().from('userprofile').orderBy('userprofileid'))
    })
)

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const userid = req.params.id
        res.send(
            await db.select().from('userprofile').where('userprofileid', userid)
        )
    })
)

router.get(
    '/:id/avatar',
    asyncHandler(async (req, res) => {
        const userid = req.params.id
        const user = await db
            .select()
            .from('userprofile')
            .where('userprofileid', userid)
        try {
            res.sendFile(`${user[0].avatar}`, { root: path.dirname('') })
        } catch (error) {
            res.send(error)
        }
    })
)

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const newUser = req.body
        await db.insert(newUser).into('userprofile')
        res.send(
            `The user "${newUser.name}" added succesful with email: "${newUser.email}" phone: "${newUser.phone}"`
        )
    })
)

router.post(
    '/:id/avatar',
    fileMiddleware.single('avatar'),
    asyncHandler(async (req, res) => {
        const userid = req.params.id
        const userfile = req.file
        try {
            if (userfile) {
                await db('userprofile')
                    .update('avatar', userfile.path)
                    .where('userprofileid', userid)
                res.send('Avatar is changed')
            }
        } catch (error) {
            res.send('Avatar is not changed')
        }
    })
)

router.put(
    '/:id',
    asyncHandler(async (req, res) => {
        const userid = req.params.id
        const updUser = req.body
        await db('userprofile').update(updUser).where('userprofileid', userid)
        res.send(`The user "${userid}" updated succesful"`)
    })
)

router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const userid = req.params.id
        await db('userprofile').delete().where('userprofileid', userid)
        res.send(`The user "${userid}" deleted succesful`)
    })
)

module.exports = router
