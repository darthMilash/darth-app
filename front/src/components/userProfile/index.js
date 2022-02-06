import React from 'react';
import UserProfilePropType from '../propTypes/userProfilePropTypes';
import { Stack, Avatar, Box } from "@mui/material";

import "./style.css"

const UserProfile = ({user}) => {

  // const currentDate = new Date();
  // const dateBday = new Date(user.bday);
  // const profileAge = Math.floor((currentDate-dateBday) / (1000*60*60*24*366)) ;
  
  return (
    <div className="userProfile">
      {user?.map(({userprofileid, name, avatar, email, phone }) => (
    <div key={userprofileid}>
      <Stack>
                <Avatar alt="Avatar" className="avatar" src={avatar} sx={{ width: 300, height: 300, margin: '10px' }} />
                <div className="name">HANDLE:{name}#{userprofileid}</div>
                <div className="email">EMAIL: {email}</div>
                <div className="phone">PHONE: {phone}</div>
      </Stack>

    </div>
      )
    )}
    </div>
  );
};

UserProfile.propTypes = UserProfilePropType;

export default UserProfile;