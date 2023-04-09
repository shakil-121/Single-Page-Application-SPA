import React from "react";
import { useLoaderData } from "react-router-dom";
import SP from "../SP/SP";


const Post = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h1>Number of Post :{posts.length}</h1>
      <div>
         { 
         posts.map(post=><SP key={post.id} post={post}></SP>)
         }
      </div>
    </div>
  );
};

export default Post;
