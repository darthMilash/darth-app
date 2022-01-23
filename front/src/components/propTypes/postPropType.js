import PropTypes from "prop-types";

const PostPropType = {
    post: PropTypes.arrayOf(
        PropTypes.shape({
            postid: PropTypes.number.isRequired,
            content: PropTypes.string.isRequired,
            datecreate: PropTypes.string.isRequired,
            commentscount: PropTypes.number,
            likescount: PropTypes.number
        })
    ),
};

export default PostPropType;