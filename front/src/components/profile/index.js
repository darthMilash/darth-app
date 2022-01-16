import React from 'react';
import ProfileProptype  from './proptypes';
import ProfileProptypeDefault  from './proptypesDefault';

import "./style.css"

const Profile = ({user,testavatar}) => {

  const currentDate = new Date();
  const dateBday = new Date(user.bday);
  const profileAge = Math.floor((currentDate-dateBday) / (1000*60*60*24*366)) ;
  
  return (
    <div className="profile">
    <div className="avatar">{user.avatar} {testavatar}</div>
    <div className="name">NAME: {user.name}</div>
    <div className="bday">AGE: {profileAge}</div>
    <div className="email">EMAIL: {user.email}</div>
    <div className="phone">PHONE: {user.phone}</div>
    </div>
  );
};

Profile.propTypes = ProfileProptype;

Profile.defaultProps = ProfileProptypeDefault;

export default Profile;