import React from "react";
import User from "./User"



function Users( props ) {
  let {data: posts} = props;

  let list = posts.map( (post) =>{
    return <User 
            key={post.id} 
            name={post.name} 
            username={post.username} 
            email={post.email}/>
          })
  return (
  <>{list}</>
)


}


export default Users