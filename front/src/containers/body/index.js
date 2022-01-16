import React from 'react';

import { Routes, Route } from "react-router-dom";

import { Main } from '../../components/mainPage';
import { AddArticle } from '../../components/addArticle';
import Articles from '../../components/articles';
import Profile from '../../components/profile';
import { AddDate } from '../../components/date';

import "./style.css"

export const Body = () => {
  return (
  <main>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/profile" element={ <Profile 
      user = {{
        userId: 1,
        name: "Obi van Kenobe",
        bday: "1992-09-01",
        email: "obevan@gmail.com",
        phone: "+380667778866"
      }}
      />}/>
      <Route path="/articles/:id" element={ <Articles 
      article = {{
        postId: 1,
        createDate: "2022-01-16 12:45",
        content: "May the force be with you",
        likesCount: 45,
        commentsCount: 4,
        user: {
          userId: 12,
          name: "Obi van Kenobe",
          avatar: ".png"
        }
      }}    
      /> }/>
      <Route path="/addArticle" element={ <AddArticle /> }/>
      <Route path="/date/:date" element={ <AddDate /> }/>
      <Route path="*" element={ <h1>404<p>Not Found</p></h1> }/>
      </Routes>  
  </main>
  );
}