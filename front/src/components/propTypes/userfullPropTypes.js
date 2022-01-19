import PropTypes from "prop-types";

import UserPropType from "./userPropTypes";

const UserfullPropType = {
    user: PropTypes.shape(UserPropType),
    friends: PropTypes.arrayOf(PropTypes.shape(UserPropType))
};

export default UserfullPropType;
