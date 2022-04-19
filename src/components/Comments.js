import React from "react";
import Comment from "./Comment"


function Comments( props ) {
  let {data: posts} = props;

  let list = posts.map( (post) =>{
    return <Comment key={post.id} name={post.name} body={post.body}  email={post.email}/>
  })
  return (
  <>{list}</>
)
}
  
export default Comments
