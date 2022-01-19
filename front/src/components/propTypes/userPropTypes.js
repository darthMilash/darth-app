import PropTypes from "prop-types";
import AddrPropType from "./addrPropTypes";
import FilePropType from "./filePropTypes";

const UserPropType = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    avatar: PropTypes.shape({
        file: PropTypes.shape(FilePropType)
    }),
    files: PropTypes.arrayOf(PropTypes.shape(FilePropType)),
    addr: PropTypes.shape({
        main: PropTypes.shape(AddrPropType),
        alt: PropTypes.shape(AddrPropType)
    })
}

export default UserPropType;