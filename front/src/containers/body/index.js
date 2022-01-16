import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import { Routes, Route } from "react-router-dom";

import { Main } from "../../components/mainPage";
import { AddArticle } from "../../components/addArticle";
import Articles from "../../components/articles";
import Profile from "../../components/profile";
import { AddDate } from "../../components/date";

import "./style.css";

export const Body = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <Profile
                user={{
                  userId: 1,
                  name: "Obi van Kenobe",
                  bday: "1992-09-01",
                  email: "obevan@gmail.com",
                  phone: "+380667778866",
                }}
              />
            </ErrorBoundary>
          }
        />
        <Route
          path="/articles/:id"
          element={
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
          }
        />
        <Route
          path="/addArticle"
          element={
            <ErrorBoundary>
              <AddArticle />
            </ErrorBoundary>
          }
        />
        <Route
          path="/date/:date"
          element={
            <ErrorBoundary>
              <AddDate />
            </ErrorBoundary>
          }
        />
        <Route
          path="*"
          element={
            <h1>
              404<p>Not Found</p>
            </h1>
          }
        />
      </Routes>
    </main>
  );
};
