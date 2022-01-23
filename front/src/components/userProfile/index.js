import React from 'react';
import UserProfilePropType from '../propTypes/userProfilePropTypes';

import "./style.css"

const UserProfile = ({user}) => {

  // const currentDate = new Date();
  // const dateBday = new Date(user.bday);
  // const profileAge = Math.floor((currentDate-dateBday) / (1000*60*60*24*366)) ;
  
  return (
    <div className="profile">
      {user?.map(({userprofileid, name, avatar, email, phone }) => (
    <div key={userprofileid}>
    <div className="avatar"><img src={avatar} alt="ava" /></div>
    <div className="name">HANDLE:{name}#{userprofileid}</div>
    <div className="email">EMAIL: {email}</div>
    <div className="phone">PHONE: {phone}</div>
    </div>
      )
    )}
    </div>
  );
};

UserProfile.propTypes = UserProfilePropType;

export default UserProfile;