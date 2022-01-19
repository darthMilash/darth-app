import PropTypes from "prop-types";

const FilePropType = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}

export default FilePropType;