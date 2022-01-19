import React from 'react';

import ArticlesPropType  from '../propTypes/articlePropTypes';
import "./style.css"

const Articles = ({article}) => {
      return (
      <div className="post">
      <div className="avatarPost">{article.user.avatar}</div>  
      <div className="datePost">{article.createDate}</div>
      <div className="authorPost">{article.user.name}#{article.user.userId}</div>
      <div className="contentPost">{article.content}</div>
      <div className="commentsPost">&#9998; {article.commentsCount}</div>
      <div className="likesPost">&#9829; {article.likesCount}</div>
      </div>
    );
  }

Articles.propTypes = ArticlesPropType;

export default Articles;