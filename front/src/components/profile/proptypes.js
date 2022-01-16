import PropTypes from "prop-types";

const ProfileProptype =  {
    user: PropTypes.shape ({
        userId: PropTypes.number.isRequired,
        avatar: PropTypes.element,
        name: PropTypes.string.isRequired,
        bday: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired
    }).isRequired
}

export default ProfileProptype;