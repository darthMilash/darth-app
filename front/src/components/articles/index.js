import React from 'react';
import { useParams } from "react-router-dom";
import ArticlesProptype  from './proptypes';
import ArticlesProptypeDefault  from './proptypesDefault';
import "./style.css"

const Articles = ({article}) => {
  const { id } = useParams();
  const isNumber = /^\d+$/;
  const isUpperCase = /^[A-Z]+$/;
  const isFile = /^\w+\.doc$|pdf$|jpeg$/;
  
  if (isNumber.test(id) || isUpperCase.test(id) || isFile.test(id)) {
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
  else {
    return (
      <main>
        <h1>404<p>Not Found</p></h1>
      </main>
    )
  }
};

Articles.propTypes = ArticlesProptype;

Articles.defaultProps = ArticlesProptypeDefault;

export default Articles;