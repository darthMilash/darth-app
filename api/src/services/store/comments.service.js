const db = require('../db')

module.exports = {
    getAllComments: async () =>
        db.select().from('userpostcomments').orderBy('userpostcommentsid'),
    getCommentId: async (id) =>
        db.select().from('userpostcomments').where('userpostcommentsid', id),
    postComment: async ({
        userprofileid,
        postid,
        content,
        date,
        maincomment,
    }) =>
        db
            .insert({
                userprofileid,
                postid,
                content,
                datecreate: date,
                maincomment,
            })
            .into('userpostcomments'),
    putComment: async ({ commentId, content, date }) =>
        db('userpostcomments')
            .update({
                content,
                dateupdate: date,
            })
            .where('userpostcommentsid', commentId),
    delCommentId: async ({ commentId }) =>
        db('userpostcomments').delete().where('userpostcommentsid', commentId),
}
