import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Users from "./Users";
import Comments from "./Comments";


function PageData() {
  const [type, setType] = useState("posts");
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((arr) => {
        console.log(arr);
        setData(arr);
      })
      .catch((e) => console.log(e));
    };

    const timer = setTimeout(() =>{
      fetchData();
    },5000);
     return () => clearTimeout(timer);
  }, [type]);

  return (
    
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <button 
            onClick={() => setType("posts")}
            type="button"
            className="btn btn-outline-danger mx-3"
          >
            posts
          </button>
          <button
            onClick={() => setType("users")}
            type="button"
            className="btn btn-outline-danger mx-3"
          >
            users
          </button>
          <button
            onClick={() => setType("comments")}
            type="button"
            className="btn btn-outline-danger mx-3"
          >
            comments
          </button>
        </div>
      </div>
      <div className="row">
        {type === "posts" ? (<Posts data={data} />) : type === "comments" ? (<Comments data={data} />) : (<Users data={data} />)}
      </div>
    </div>
  );
}
export default PageData