import PropTypes from "prop-types";

const AddPostPropType = {
    post: PropTypes.arrayOf(
        PropTypes.shape({
    userprofileid: PropTypes.number.isRequired,
    content: PropTypes.number.isRequired,
    hlevel: PropTypes.number.isRequired
})
),
};

export default AddPostPropType;