import React from 'react';
import { useParams } from "react-router-dom";
import "./style.css"

export function Articles({authorPost, content, date}) {
  const { id } = useParams();
  const isNumber = /^\d+$/;
  const isUpperCase = /^[A-Z]+$/;
  const isFile = /^\w+\.doc$|pdf$|jpeg$/;
  
  if (isNumber.test(id)) {
    return (
      <div className="post">
      <div className="authorPost">AUTHOR: Darth Vader. PostId:{id} </div>
      <div className="contentPost">Choose the dark side</div>
      <div className="datePost">created: 15/01/21 </div>
      </div>
    );
  }
  else if (isUpperCase.test(id)) {
    return (
      <div className="post">
      <div className="authorPost">AUTHOR: Darth Vader. PostId:{id} </div>
      <div className="contentPost">Choose the dark side</div>
      <div className="datePost">created: 15/01/21 </div>
      </div>
    );
  }
  else if (isFile.test(id)) {
    return (
      <div className="post">
      <div className="authorPost">AUTHOR: Darth Vader. PostId:{id} </div>
      <div className="contentPost">Choose the dark side</div>
      <div className="datePost">created: 15/01/21 </div>
      </div>
    );
  }
    else {
      return (
        <div className="post">
        <div className="authorPost">AUTHOR: {authorPost}</div>
        <div className="contentPost">{content}</div>
        <div className="datePost">created: {date}</div>
        </div>
      );
    }
};