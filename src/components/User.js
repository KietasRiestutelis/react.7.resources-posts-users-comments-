import React from "react";

function User(props) {
    let {name, username, email} = props;
    
  return (
      <div className="col-4">
        <div className="card my-2">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h5 className="card-title">{username}</h5>
                <p className="card-text">{email}</p>
            </div>
        </div>
    </div>
  )
}
export default User