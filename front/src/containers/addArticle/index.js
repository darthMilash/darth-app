import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";

import { AddArticle } from "../../components/addArticle";

export const AddArticleContainer = () => {
    return (
        <ErrorBoundary>
            <AddArticle />
        </ErrorBoundary>
    );
}