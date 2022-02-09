const db = require('../services/db')
const tableConfig = require('../services/config')

const errorHandler = async (err, req, res, next) => {
    const { method, path } = req
    const logDate = new Date().toLocaleString()
    await db
        .insert({
            method,
            path,
            date: logDate,
            errors: err.stack,
        })
        .into(tableConfig.logsTable)
    res.status(500).send('Error')
    next()
}

module.exports = errorHandler
