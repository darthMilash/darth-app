import PropTypes from "prop-types";

const UserProfilePropType = {
    user: PropTypes.arrayOf(
        PropTypes.shape({
            userprofileid: PropTypes.number.isRequired,
            name: PropTypes.string,
            avatar: PropTypes.string,
            email: PropTypes.string,
            phone: PropTypes.string
        })
    ),
};

export default UserProfilePropType;