import React from "react";


function Comment(props) {
    let {name, body, email} = props;
  return (
      <div className="col-4">
        <div className="card">
            <div className="card-body my-2">
                <h5 className="card-title">{name}</h5>
                <h5 className="card-title">{email}</h5>
                <p className="card-text">{body}</p>
               
            </div>
        </div>
    </div>
  )
}
export default Comment