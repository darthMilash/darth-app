import React from 'react';

import { Routes, Route
} from "react-router-dom";

import { AddArticle } from '../../components/addArticle';
import { Articles } from '../../components/articles';
import { Profile } from '../../components/profile';

import "./style.css"

export const Body = () => {
  return (
  <main>
    <Routes>
      <Route path="/" element={<p>hello</p>}/>
      <Route path="/profile" element={ <Profile />}/>
      <Route path="/articles" element={ <Articles /> }/>
      {/* <Route path="/articles/:id" element={ <Articles /> }/> */}
      <Route path="/addArticle" element={ <AddArticle /> }/>
      {/* <Route path="*" element={ <div>404</div> }/> */}
      </Routes>  
  </main>
  );
}