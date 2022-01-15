import React from 'react';

import { Routes, Route
} from "react-router-dom";

import { Main } from '../../components/mainPage';
import { AddArticle } from '../../components/addArticle';
import { Articles } from '../../components/articles';
import { Profile } from '../../components/profile';

import "./style.css"

export const Body = () => {
  return (
  <main>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/profile" element={ <Profile />}/>
      <Route path="/articles" element={ <Articles /> }/>
      <Route path="/articles/:id" element={ <Articles /> }/>
      <Route path="/addArticle" element={ <AddArticle /> }/>
      <Route path="*" element={ <h1>404<p>Not Found</p></h1> }/>
      </Routes>  
  </main>
  );
}