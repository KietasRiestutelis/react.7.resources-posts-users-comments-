import React from "react";

function Post({title, body}) {
    
  return (
      <div className="col-12">
        <div className="card">
            <div className="card-body my-2">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
            </div>
        </div>
    </div>
  )
}
export default Post