import PropTypes from "prop-types";

const ArticlesPropType =  {
    article: PropTypes.shape ({
        postId: PropTypes.number.isRequired,
        createDate: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        likesCount: PropTypes.number,
        commentsCount: PropTypes.number,
        user: PropTypes.shape ({
            userId: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}

export default ArticlesPropType;