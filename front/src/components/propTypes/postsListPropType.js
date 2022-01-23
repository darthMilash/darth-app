import PropTypes from "prop-types";

const PostsListPropType = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            postid: PropTypes.number.isRequired,
            content: PropTypes.string.isRequired,
            datecreate: PropTypes.string.isRequired,
            commentscount: PropTypes.number,
            likescount: PropTypes.number
        })
    ),
};

export default PostsListPropType;
