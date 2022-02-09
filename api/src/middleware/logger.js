const db = require('../services/db')
const tableConfig = require('../services/config')

const logger = async (req, res, next) => {
    const { method, path } = req
    const logDate = new Date().toLocaleString()
    await db
        .insert({
            method,
            path,
            date: logDate,
        })
        .into(tableConfig.logsTable)
    next()
}

module.exports = logger
