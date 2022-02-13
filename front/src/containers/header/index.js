import React from 'react';
import { Link } from 'react-router-dom';


import "./style.css"

export const Header = () => {
  return (
      <header>
        <Link to='/addPost'>
        <button className="clickMenu"> ADD POST </button>
        </Link>

        <Link to='/users'>
        <button className="clickMenu"> USERS LIST </button>
        </Link>

        <Link to='/posts'>
        <button className="clickMenu"> POSTS </button>
        </Link>
      </header>
  );
};