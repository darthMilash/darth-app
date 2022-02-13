import React from "react";
import { Routes, Route } from "react-router-dom";

import { Main } from "../../components/mainPage";
import { AddPostContainer } from "../post/addPost";
import PostsListContainer from "../post/posts";
import UsersListContainer from "../user/usersList";
import UserProfileContainer from "../user/userProfile";
import PostContainer from "../post/userPost";

import "./style.css";
import { NotFound } from "../../components/errors/notFound";
import EditPostContainer from "../post/editPost";
import EditUserProfileContainer from "../user/editUserProfile";



export const Body = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/posts"
          element={
            <PostsListContainer />
          }
        />
        <Route
          path="/posts/:id"
          element={
            <PostContainer />
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
          path="/posts/:id/edit"
          element={
            <EditPostContainer />
          }
        />
        <Route
          path="/users/:id/edit"
          element={
            <EditUserProfileContainer />
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
