const router = require('express').Router()
// const db = require('../services/db')
const fileMiddleware = require('../middleware/file')

router.post('/uploads', fileMiddleware.single('avatar'), (req, res) => {
    try {
        if (req.file) {
            res.json(req.file)
        }
    } catch (error) {
        console.log('error')
    }
})

module.exports = router
