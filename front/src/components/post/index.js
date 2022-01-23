import React from 'react';
import { Link } from 'react-router-dom';
import PostPropType from '../propTypes/postPropType';

import "./style.css"

const Post = ({post}) => {

return (
    <div className="postList">
      {post?.map(({postid, content, datecreate, commentscount, likescount }) => (
    <div className="postBox"key={postid}>
    <div className="avatarPost">AVATAR</div> 
    <div className="datePost"> Post#{postid} was created: {datecreate}</div>
    <div className="authorPost">Author   </div>
    <div className="contentPost">{content}</div>
    <div className="commentsPost">
        <Link to={`/posts/${postid}/comments`}> &#9998; {commentscount} </Link></div>
    <div className="likesPost">
        <Link to={`/posts/${postid}/likes`}> &#9829; {likescount} </Link>
        </div>
    </div>
      )
    )}
    </div>
  );
};

Post.propTypes = PostPropType;

export default Post;