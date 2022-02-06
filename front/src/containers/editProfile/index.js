import React from "react";
import { useQuery } from 'react-query';
import { getProfile } from "./api/crud";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary";
import EditProfile from "../../components/editProfile";


const EditProfileContainer = () => {
const { id } = useParams();


    const { isFetching, data } = useQuery(`users/${id}`, () => getProfile(id));
    const user = data?.data;
    
    return (
        <ErrorBoundary>
        <div>
         {isFetching && <div> Loading...</div>}
         <EditProfile user={user} />
        </div>
        </ErrorBoundary>
    );
}

export default EditProfileContainer;