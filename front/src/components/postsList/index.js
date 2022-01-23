import React from 'react';
import PostsListPropType  from '../propTypes/postsListPropType';
import { Link } from 'react-router-dom';

import "./style.css"

const PostsList = ({posts}) => {

 
    return (
        <div className="postList">
          {posts?.map(({postid, content, datecreate, commentscount, likescount }) => (
        <div className="postBox"key={postid}>
        <div className="avatarPost">AVATAR</div> 
        <div className="datePost">
          <Link to={`/posts/${postid}`} className="postId"> Post#{postid}</Link> 
          was created: {datecreate}</div>
        <div className="authorPost">Author   </div>
        <div className="contentPost">{content}</div>
        <div className="commentsPost">&#9998; {commentscount}</div>
        <div className="likesPost">&#9829; {likescount}</div>
        </div>
          )
        )}
        </div>
      );
    };

PostsList.propTypes = PostsListPropType;

export default PostsList;