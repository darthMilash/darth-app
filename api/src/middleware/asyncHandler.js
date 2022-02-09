module.exports = (fn) => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).then(next).catch(next)
