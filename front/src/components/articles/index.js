import React from 'react';
import { useParams } from "react-router-dom";
import "./style.css"

export function Articles({authorPost, content, date}) {
  const params = useParams();
  
  return (
    
    <div className="post">
    <div className="authorPost">AUTHOR: {authorPost}</div>
    <div className="contentPost">{content}</div>
    <div className="datePost">created: {date}</div>
    </div>
  );
};