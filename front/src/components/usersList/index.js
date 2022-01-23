import React from 'react';
import { Link } from 'react-router-dom';
import UsersListPropType from '../propTypes/usersListPropTypes';

import "./style.css"

const UsersList = ({users}) => {
    return (
        <div>
        <ol className="usersList">
            {users?.map(({userprofileid, name, avatar }) => (

                <li className="userBox" key={userprofileid}> 
                <div className="userAvatar"><img src={avatar} alt="ava"/></div>
                <Link to={`/users/${userprofileid}`} className="userNameId">{name}#{userprofileid}</Link>
                </li>
            )
            )}
        </ol>
        </div>
    )
}

UsersList.propTypes = UsersListPropType;

export default UsersList;
