import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import { Routes, Route } from "react-router-dom";

import { Main } from "../../components/mainPage";
import { AddArticleContainer } from "../addArticle";
import { ArticlesContainer } from "../articles";
import { ProfileContainer } from "../profile";
import { AddDate } from "../../components/date";
import PostsListContainer from "../postsList";
import UsersListContainer from "../usersList";
import UserProfileContainer from "../userProfile";
import PostsContainer from "../post/";

import "./style.css";
import { NotFound } from "../../components/errors/notFound";


export const Body = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/profile"
          element={
            <ProfileContainer />
          }
        />
        <Route
          path="/posts"
          element={
            <PostsListContainer />
          }
        />
        <Route
          path="/posts/:id"
          element={
            <PostsContainer />
          }
        />
        <Route
          path="/users"
          element={
            <UsersListContainer />
          }
        />
        <Route
          path="/users/:id"
          element={
            <UserProfileContainer />
          }
        />
        <Route
          path="/articles/:id"
          element={
            <ArticlesContainer />
          }
        />
        <Route
          path="/addArticle"
          element={
            <AddArticleContainer />
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
            <NotFound />
          }
        />
      </Routes>
    </main>
  );
};
