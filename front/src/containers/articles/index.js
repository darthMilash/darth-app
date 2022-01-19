import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useParams } from "react-router-dom";


import  Articles  from "../../components/articles";
import { NotFound } from "../../components/errors/notFound";


export const ArticlesContainer = () => {
    const { id } = useParams();
    const isNumber = /^\d+$/;
    const isUpperCase = /^[A-Z]+$/;
    const isFile = /^\w+\.doc$|pdf$|jpeg$/;

    if (isNumber.test(id) || isUpperCase.test(id) || isFile.test(id)) {
        return (
            <ErrorBoundary>
                <Articles 
                                article={{
                                    postId: 1,
                                    createDate: "2022-01-16 12:45",
                                    content: "May the force be with you",
                                    likesCount: 45,
                                    commentsCount: 4,
                                    user: {
                                      userId: 12,
                                      name: "Obi van Kenobe",
                                      avatar: ".png",
                                    },
                                  }}
                            />
            </ErrorBoundary>
        );
    }
    else {
        return (
            <ErrorBoundary>
                <NotFound />
            </ErrorBoundary>
        );
    }
}