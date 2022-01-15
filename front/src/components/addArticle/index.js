import React from 'react';
import "./style.css"

export function AddArticle() {
    return (
      <div className="post">
      <input type="text" name="content" placeholder="Write the post"></input>
      <div><button className="buttomPost">POST</button></div>
      </div>
    );
  };
  