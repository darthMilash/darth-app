import React from "react";

import ErrorBoundary from "../../components/ErrorBoundary";

import AddPost from "../../components/post/addPost";

export const AddPostContainer = () => {
    return (
        <ErrorBoundary>
            <AddPost />
        </ErrorBoundary>
    );
}