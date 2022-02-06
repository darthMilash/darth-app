import React from 'react';
import { Stack, Avatar, Box } from "@mui/material";
// import PostsListPropType  from '../propTypes/postsListPropType';
import { Link } from 'react-router-dom';

import "./style.css"

const Posts = ({posts}) => {

 
    return (

<div className="postForm">
      {posts?.map(
        ({ postid, content, datecreate, commentscount, likescount }) => (
          <div key={postid}>
            <Box className="headerPost" sx={{ height: 90 }}>
              <Stack direction="row">
                <Avatar alt="Avatar" className="avatar" src="/src/anonym.png" sx={{ width: 56, height: 56, margin: '10px' }} />
                <Link to={`/posts/${postid}`} className="authorPost"> POST#{postid}</Link>
              </Stack>
            </Box>
            <div className="contentBlock">
              <Box sx={{ height: 100, margin: "10px" }}>
                {content}
              </Box>
            </div>
            <div className="commentsPost">
              <Link to={`/posts/${postid}/comments`}>
                {" "}
                &#9998; {commentscount}{" "}
              </Link>
            </div>
            <div className="likesPost">
              <Link to={`/posts/${postid}/likes`}> &#9829; {likescount} </Link>
            </div>
            <div className="dateCreate">
              was created: {datecreate}
            </div>
          </div>
        )
      )}
    </div>


    //     <div className="postList">
    //       {posts?.map(({postid, content, datecreate, commentscount, likescount }) => (
    //     <div className="postBox" key={postid}>
    //      <Stack direction="row">
    //     <Avatar alt="Avatar" className="avatar" src="/src/anonym.png" sx={{ width: 26, height: 26 }} />
    //     <div className="authorPost">Author   </div>
    //     </Stack>
    //     <div>
    //       <Link to={`/posts/${postid}`} className="postId"> POST#{postid}</Link> 
    //     </div>
    //     <div className="contentPost">{content}</div>
    //     <div className="commentsPost">
    //     <Link to={`/posts/${postid}/comments`}> &#9998; {commentscount} </Link></div>
    // <div className="likesPost">
    //     <Link to={`/posts/${postid}/likes`}> &#9829; {likescount} </Link>
    //     </div>
    //     </div>
    //       )
    //     )}
    //     </div>
      );
    };

// PostsList.propTypes = PostsListPropType;

export default Posts;