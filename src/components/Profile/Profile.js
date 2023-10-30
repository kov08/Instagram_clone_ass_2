import React,{useEffect, useState} from 'react'
import PostDetail from "../PostDetail/PostDetail"
import './styles.css'

export default function Profile() {
  const [pic, setPic] = useState([])
  const [show, setShow] = useState(false)
  const [posts, setPosts] = useState([])

  // To Show and hide comments
  const toggleDetails = (posts) => {
    if(show){
      setShow(false);
    }else{
      setShow(true);
      setPosts(posts)
      // console.log(item)
    }
  }
  

  useEffect(() => {
    fetch("http://localhost:5000/myposts",{
      headers:{
        Authorization: "Bearer "+localStorage.getItem("jwt")
        }
    })
    .then(res => res.json())
    .then((result)=>{
      setPic(result)
      console.log(pic)
  })
  }, [])
  

  return (
    <div className='profile'>
      {/* Profile frame */}
      <div className="profile-frame">
        
        {/* Profile Pic */}
        <div className="profile-pic">
          <img src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185628/Asset-1-8-300x300.png" alt="" />
        </div>

        {/* Profile data */}
        <div className="profile-data">
          <h1> {JSON.parse(localStorage.getItem("user")).name}</h1>
          <div className="profile-info" style={{display:'flex'}}>
            <p>5 post</p>
            <p>5 follower</p>
            <p>5 following</p>
          </div>
        </div>
      </div>
<hr style={{
  width:"95%",
  opacity:"0.75",
  margin: "25px auto"
}} 
/>
      {/* Gallery */}
      <div className="gallery">
        {pic.map((pic)=>{
          return <img key={pic._id} src={pic.photo} 
          onClick={() => {toggleDetails(pic)}}
          className='item'>
          </img>
        })}
      </div>
      {show &&
      <PostDetail item={posts} toggleDetails={toggleDetails}/>}

    </div>
  )
}
