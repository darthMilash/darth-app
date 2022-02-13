import React from "react";
import { Link } from "react-router-dom";
import PostPropType from "../propTypes/postPropType";
import { Stack, Avatar, Box } from "@mui/material";

import "./style.css";

const Post = ({ post }) => {




  return (
    <div className="postForm">
      {post?.map(
        ({ postid, content, datecreate, commentscount, likescount }) => (
          <div key={postid}>
            <Box className="headerPost" sx={{ height: 90 }}>
              <Stack direction="row">
                <Avatar alt="Avatar" className="avatar" src="/src/anonym.png" sx={{ width: 56, height: 56, margin: '10px' }} />
                <div className="authorPost" >POST#{postid}   </div>
                <div className="authorPost"><Link to={`/posts/${postid}/edit`}>
                  {" "}
                  &#9998; Edit{" "}
                </Link>
                </div>
              </Stack>
            </Box>
            <div className="contentBlock">
              <Box sx={{ height: 150, margin: "10px" }}>
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
  );
};

Post.propTypes = PostPropType;

export default Post;
