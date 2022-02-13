import React from 'react';
import UserProfilePropType from '../propTypes/userProfilePropTypes';
import {Stack, Avatar, Box} from "@mui/material";

import "./style.css"
import { Link } from "react-router-dom";

const UserProfile = ({user}) => {
  
  return (
    <div className="userProfileForm">
      {user?.map(({userprofileid, name, avatar, email, phone }) => (
    <div key={userprofileid}>
      <Stack sx={{ margin: "0 0 0 65px"}}>
        <Avatar alt="Avatar" className="avatar" src={avatar} sx={{ width: 300, height: 300, margin: '10px' }} />
        <div className="authorPost"><Link to={`/users/${userprofileid}/edit`}>
          {" "}
          &#9998; Edit{" "}
        </Link>
        </div>
        <div className="containerField">
          HANDLE:
          <Box className="field" sx={{ height: 50 }}>        {name}#{userprofileid}</Box>
        </div>
        <div className="containerField">
          EMAIL
        <Box className="field" sx={{ height: 50 }}> {email}</Box>
        </div>
        <div className="containerField">
          PHONE
        <Box className="field" sx={{ height: 50 }}> {phone}</Box>
        </div>
      </Stack>

    </div>
      )
    )}
    </div>
  );
};

UserProfile.propTypes = UserProfilePropType;

export default UserProfile;