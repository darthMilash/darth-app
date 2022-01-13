import { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import your route components too

import { AddArticle } from './components/addArticle';
import { Articles } from './components/articles';
import { Profile } from './components/profile';

import './App.css';


export function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <App /> }/>
            <Route path="/profile" element={ <Profile /> }/>
            <Route path="/articles" element={ <Articles /> }/>
            <Route path="/articles/:id" element={ <Articles /> }/>
            <Route path="/addArticle" element={ <AddArticle /> }/>
            <Route path="*" element={ <div>404</div> }/>
          </Routes>
        
        </BrowserRouter>
      </div>
    );
  }
  