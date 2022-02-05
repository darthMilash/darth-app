import React from "react";
import { Routes, Route } from "react-router-dom";

import { Main } from "../../components/mainPage";
import { AddPostContainer } from "../addPost";
import { ProfileContainer } from "../profile";
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
          path="/addPost"
          element={
            <AddPostContainer />
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
