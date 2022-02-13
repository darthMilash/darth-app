import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useQuery } from 'react-query';
import { getUsersList } from "./api/crud";
import  UsersList  from "../../components/user/usersList";


const UsersListContainer = () => {
    const { isFetching, data } = useQuery('users', () => getUsersList());
    const users = data?.data;
    return (
        <ErrorBoundary>

        <div>
         {isFetching && <div> Loading...</div>}
         <UsersList users={users} />
        </div>
        </ErrorBoundary>
    );
}

export default UsersListContainer;