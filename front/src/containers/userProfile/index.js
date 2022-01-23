import React from "react";
import { useQuery } from 'react-query';
import { getUserProfile } from "./api/crud";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary";
import UserProfile from "../../components/userProfile";


const UserProfileContainer = () => {
const { id } = useParams();


    const { isFetching, data } = useQuery(`users/${id}`, () => getUserProfile(id));
    const user = data?.data;
    
    return (
        <ErrorBoundary>
        <div>
         {isFetching && <div> Loading...</div>}
         <UserProfile user={user} />
        </div>
        </ErrorBoundary>
    );
}

export default UserProfileContainer;