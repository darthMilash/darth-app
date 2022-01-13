import "./style.css"

import { useParams } from "react-router-dom";

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