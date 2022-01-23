import React from "react";
import { useQuery } from 'react-query';
import { getPostsList } from "./api/crud";
import ErrorBoundary from "../../components/ErrorBoundary";
import PostsList from "../../components/postsList";


const PostsListContainer = () => {
    const { isFetching, data } = useQuery('posts', () => getPostsList());
    const posts = data?.data;
    
    return (
        <ErrorBoundary>
        <div>
         {isFetching && <div> Loading...</div>}
         <PostsList posts={posts} />
        </div>
        </ErrorBoundary>
    );
}

export default PostsListContainer;