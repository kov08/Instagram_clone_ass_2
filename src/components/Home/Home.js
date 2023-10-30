import React, { useEffect, useState } from 'react'

import { toast } from 'react-toastify';
import './styles.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([])
  const [comment, setComment] = useState("")
  const [show, setShow] = useState(false)
  const [item, setItem] = useState([])

  // Tost function
  const notify_error = (msg) => toast.error(msg)
  const notify_success = (msg) => toast.success(msg)


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

  // To Show and hide comments
  const toggleComment = (posts) => {
    if(show){
      setShow(false);
    }else{
      setItem(posts)
      // console.log(item)
      setShow(true);
    }
  }

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
      const newData = data.map((posts)=>{
        if(posts._id === result._id){
          return result
        }else{
          return posts
        }
      })
      setData(newData)
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
      const newData = data.map((posts)=>{
        if(posts._id === result._id){
          return result
        }else{
          return posts
        }
      })
      setData(newData)
      console.log(result)
    })
  }

  // Function to make comment
  const makeComment = (text,id )=>{
    // console.log(comment)
    fetch("http://localhost:5000/comment", {
      method:"put",
      headers:{
        "Content-Type" : "application/json",
        Authorization: "Bearer "+ localStorage.getItem("jwt")        
      },
      body:JSON.stringify({
        text: text,
        postId: id
      })
    }).then((res)=>res.json())
    .then((result)=>{
      const newData = data.map((posts)=>{
        if(posts._id === result._id){
          return result
        }else{
          return posts
        }
      })
      setData(newData)
      setComment("");
      notify_success("Commented!")
      // console.log(result)
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
          {posts.likes.includes(
            JSON.parse(localStorage.getItem("user"))._id
          )?(
          <span className="material-symbols-outlined material-symbols-outlined-f" onClick={()=>{unlikePost(posts._id)}}>favorite</span>
          ):(
          <span className="material-symbols-outlined" onClick={()=>{likePost(posts._id)}}>favorite</span>
          )}        
          
          <p> {posts.likes.length} Likes</p>
          <p> {posts.body}</p>
          <p style={{fontWeight: "bold", cursor: "pointer"}}onClick={()=>{toggleComment(posts)}}>View All comments</p>
        </div>
        {/* Add comment */}
        <div className="add-comment">
          <span className="material-symbols-outlined">mood</span>
          <input type='text' placeholder='Add a Comment' value={comment} onChange={(e)=>{setComment(e.target.value)}} />
          <button className='comment' onClick={()=>{makeComment(comment, posts._id)}}>Post</button>
        </div>
      
      </div>
      )})}

      {/* Show Comments */}
      {show && (
      <div className="showComment">
        <div className="container">
          <div className="postPic">
            <img src={item.photo} alt="" />          
          </div>
           <div className="details">
              <div className="card-header" 
              style={{borderBottom: "1px solid #00000029" }}>
                <div className="card-pic">
                  <img src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185628/Asset-1-8-300x300.png" alt="" />
                </div>
                  <h5>{item.postedBy.name}</h5>
              </div>
              {/* CommentSection */}
              <div className="comment-section" 
              style={{borderBottom: "1px solid #00000029" }}>
                {
                item.comments.map((comment)=>{
                  return(
                  <p className='comm' >
                  <span className='commenter' style={ {fontWeight: "bolder"}}>
                    {comment.postedBy.name}
                    {" "} 
                    </span>
                  <span className='commentText'>
                    { comment.comment}
                  </span>
                </p>
                )})}
              </div>

              {/* card content */}
              <div className="card-content">               
                <p> {item.likes.length} Likes</p>
                <p> {item.body}</p>
              </div>

              {/* Add comment */}
              <div className="add-comment">
                <span className="material-symbols-outlined">mood</span>
                <input type='text' placeholder='Add a Comment' value={comment} onChange={(e)=>{setComment(e.target.value)}} />
                <button className='comment' 
                onClick={()=>{
                  makeComment(comment, item._id);
                  toggleComment()
                }}
                >Post</button>
              </div>
            </div>
        </div>
        <div className="close-comment" onClick={()=>{toggleComment()}}>
          <span className="material-symbols-outlined material-symbols-outlined-comment">
          close
          </span>
        </div>
      </div>)
      }
    </div>
  )
}
