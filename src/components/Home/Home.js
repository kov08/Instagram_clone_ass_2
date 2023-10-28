import React, { useEffect, useState } from 'react'

import './styles.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([])
    
  useEffect(() => {
    const token = localStorage.getItem("jwt")
    if(!token){
      navigate("./signup")
    }  

    // Fetching all posts
    fetch("http://localhost:5000/allposts",{
      headers: {
        Authorization: "Bearer "+ localStorage.getItem("jwt")        
      },
    }).then(res => res.json())
    // .then(result => console.log(result))
    .then(result => setData(result))
    .catch(err => console.log(err))
  }, [])

  const likePost = (id)=>{
    fetch("http://localhost:5000/like", {
      method:"put",
      headers:{
        "Content-Type" : "application/json",
        Authorization: "Bearer "+ localStorage.getItem("jwt")        
      },
      body:JSON.stringify({
        postId: id
      })
    }).then(res=>res.json())
    .then((result)=>{
      console.log(result)
    })
  }
  
  const unlikePost = (id)=>{
    fetch("http://localhost:5000/unlike", {
      method:"put",
      headers:{
        "Content-Type" : "application/json",
        Authorization: "Bearer "+ localStorage.getItem("jwt")        
      },
      body:JSON.stringify({
        postId:id
      })
    }).then(res=>res.json())
    .then((result)=>{
      console.log(result)
    })
  }

  return (
    
    <div className='home'>
      {/* card */}
      {data.map((posts)=>{
        // console.log(posts)
      return (
      
      <div className="card">
        {/* card header */}
        <div className="card-header">
          <div className="card-pic">
            <img src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185628/Asset-1-8-300x300.png" alt="" />
          </div>
            <h5>{posts.postedBy.name}</h5>
        </div>
        {/* card image */}
        <div className="card-image">
          <img src={posts.photo} alt="" />
        </div>
        {/* card content */}
        <div className="card-content">
          <span className="material-symbols-outlined" onClick={()=>{likePost(posts._id)}}>favorite</span>
          <span className="material-symbols-outlined material-symbols-outlined-f" onClick={()=>{unlikePost(posts._id)}}>favorite</span>
          <p> 1 Like</p>
          <p> {posts.body}</p>
        </div>
        {/* Add comment */}
        <div className="add-comment">
          <span className="material-symbols-outlined">mood</span>
          <input type='text' placeholder='Add a Comment' />
          <button className='comment'>Post</button>
        </div>
      
      </div>
      )})}
    </div>
  )
}
