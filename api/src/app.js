const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const config = require('./services/config')
const usersRoutes = require('./routes/users')
const postsRoutes = require('./routes/posts')
const commentsRoutes = require('./routes/comments')
const likesRoutes = require('./routes/likes')

const app = express()

const host = config.appHost
const port = config.appPort

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors({ origin: ['http://localhost:3000', 'http://localhost'] }))

app.use('/users', usersRoutes)
app.use('/posts', postsRoutes)
app.use('/comments', commentsRoutes)
app.use('/likes', likesRoutes)

app.listen(port, () => {
    console.log(`server started on http://${host}:${port}`)
})
