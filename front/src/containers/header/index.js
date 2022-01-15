import React from 'react';
import { Link } from 'react-router-dom';


import "./style.css"

export const Header = () => {
  return (
      <header>
        <Link to='/articles'>
        <button className="clickMenu"> ARTICLES </button>
        </Link>

        <Link to='/addArticle'>
        <button className="clickMenu"> ADD ARTICLE </button>
        </Link>

        <Link to='/profile'>
        <button className="clickMenu"> PROFILE </button>
        </Link>
      </header>
  );
};