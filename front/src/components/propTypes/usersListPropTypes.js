import PropTypes from "prop-types";

const UsersListPropType = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            userprofileid: PropTypes.number.isRequired,
            name: PropTypes.string,
            avatar: PropTypes.string
        })
    ),
};

export default UsersListPropType;
