const express = require('express')
const bodyParser = require('body-parser')

const config = require('./services/config')
const usersRoutes = require('./routes/users')
const postsRoutes = require('./routes/posts')
const commentsRoutes = require('./routes/comments')

const app = express()

const host = config.appHost
const port = config.appPort

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use('/users', usersRoutes)
app.use('/posts', postsRoutes)
app.use('/comments', commentsRoutes)

app.listen(port, () => {
    console.log(`server started on http://${host}:${port}`)
})

// const date = new Date();
// console.log(date.toLocaleString());
