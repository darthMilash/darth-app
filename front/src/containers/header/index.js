import React from 'react';

import "./style.css"

export const HeaderContainer = ({ changePage }) => {

  return (
      <header>
        <button className="clickMenu" onClick={() => 
          changePage('articles')}> ARTICLES
        </button>
        <button className="clickMenu" onClick={() => 
          changePage('addArticle')}>ADD ARTICLE
        </button>
        <button className="clickMenu" onClick={() => 
          changePage('profile')}>PROFILE
        </button>
      </header>
  );
};