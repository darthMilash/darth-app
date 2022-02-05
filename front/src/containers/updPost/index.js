import React from "react";
import { useQuery } from 'react-query';
import { getPost } from "./api/crud";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary";
import UpdPost from "../../components/updPost";


const UpdPostContainer = () => {
    const { id } = useParams();
    
    
        const { isFetching, data } = useQuery(`posts/${id}`, () => getPost(id));
        const post = data?.data || [];
        
        return (
            <ErrorBoundary>
            <div>
             {isFetching && <div> Loading...</div>}
             <UpdPost post={post} />
            </div>
            </ErrorBoundary>
        );
    }
    
    export default UpdPostContainer;