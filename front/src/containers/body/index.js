import React from 'react';

import { Routes, Route
} from "react-router-dom";

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
      name = "Han Solo"
      email = "hansolovich@gmail.com"
      phone = "+380507778777"
      bday = "1992-09-02"
      />}/>
      <Route path="/articles" element={ <Articles 
      authorPost = "Darth Vader"
      content = "You underestimate the power of the dark side!!"
      date = "2022-01-16"
      /> }/>
      <Route path="/articles/:id" element={ <Articles 
      authorPost = ""
      content = ""
      date = ""     
      /> }/>
      <Route path="/addArticle" element={ <AddArticle /> }/>
      <Route path="/date/:date" element={ <AddDate /> }/>
      <Route path="*" element={ <h1>404<p>Not Found</p></h1> }/>
      </Routes>  
  </main>
  );
}