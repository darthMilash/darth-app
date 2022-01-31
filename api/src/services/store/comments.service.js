const db = require('../db')

module.exports = {
    getAllComments: async () =>
        db.select().from('userpostcomments').orderBy('userpostcommentsid'),
    getCommentId: async (id) =>
        db.select().from('userpostcomments').where('userpostcommentsid', id),
}
