import React from "react";
import Post from "./Post";

function Posts({ data: posts }) {
  let list = posts.map((post) => {
    return (
      <Post
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
      />
    );
  });
  return <>{list}</>;
}

export default Posts;