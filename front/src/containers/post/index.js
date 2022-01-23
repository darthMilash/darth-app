import React from "react";
import { useQuery } from 'react-query';
import { getPost } from "./api/crud";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary";
import Post from "../../components/post";


const PostContainer = () => {
    const { id } = useParams();
    
    
        const { isFetching, data } = useQuery(`posts/${id}`, () => getPost(id));
        const post = data?.data;
        
        return (
            <ErrorBoundary>
            <div>
             {isFetching && <div> Loading...</div>}
             <Post post={post} />
            </div>
            </ErrorBoundary>
        );
    }
    
    export default PostContainer;