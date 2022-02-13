import React from "react";
import { useQuery } from 'react-query';
import { getPost } from "./api/crud";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary";
import EditPost from "../../components/post/editPost";


const EditPostContainer = () => {
    const { id } = useParams();
    
    
        const { isFetching, data } = useQuery(`posts/${id}`, () => getPost(id));
        const post = data?.data || [];
        
        return (
            <ErrorBoundary>
            <div>
             {isFetching && <div> Loading...</div>}
             <EditPost post={post} />
            </div>
            </ErrorBoundary>
        );
    }
    
    export default EditPostContainer;