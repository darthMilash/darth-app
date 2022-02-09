module.exports = (options) => {
    const { db, table } = options

    return (err, req, res, next) => {
        const { method, path } = req
        const logDate = new Date().toLocaleString()
        db.insert({
            method,
            path,
            date: logDate,
            errors: err.stack,
        })
            .into(table)
            .then(() => {
                res.status(500).send('Error')
                next()
            })
    }
}
