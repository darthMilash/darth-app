module.exports = (options) => {
    const { db, table } = options

    return (req, res, next) => {
        const { method, path } = req
        const logDate = new Date().toLocaleString()
        db.insert({
            method,
            path,
            date: logDate,
        })
            .into(table)
            .then(() => {
                next()
            })
    }
}
