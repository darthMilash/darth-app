import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../anonym.png';
import "./style.css"

const Profile = ({name, avatar, bday, email, phone}) => {

  const currentDate = new Date();
  const dateBday = new Date(bday);
  const profileAge = Math.floor((currentDate-dateBday) / (1000*60*60*24*366)) ;
  
  return (
    <div className="profile">
    <div className="avatar">{avatar}</div>
    <div className="name">NAME: {name}</div>
    <div className="bday">AGE: {profileAge}</div>
    <div className="email">EMAIL: {email}</div>
    <div className="phone">PHONE: {phone}</div>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.element,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  bday: PropTypes.string.isRequired
};

Profile.defaultProps = {
  avatar: <img className="defaultIcon" src={Icon} alt="Icon" />
};

export default Profile;