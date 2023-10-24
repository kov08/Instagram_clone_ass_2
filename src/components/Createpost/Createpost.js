import React from 'react'

import "./styles.css"

export default function Createpost() {
  const loadfile = (event) => {
      var output = document.getElementById('output');
      output.src = URL.createObjectURL(event.target.files[0]);
      output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
  }}
  return (
    <div className='createPost'>
      {/* Header */}
      <div className="post-header">
        <h4 style={{margin:"3px auto"}}>creat new post</h4>
        <button id='post-btn'>Share</button>
      </div> 
      {/* Image Preview */}
      <div className="main-div">
        <img id="output" src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Circle-icons-image.svg/512px-Circle-icons-image.svg.png'/>
        <input type='file' accept='image/*' onChange={(event)=> {loadfile(event)}}/>
      </div>
      {/* Details */}
      <div className="details">
        <div className="card-header">
          <div className="card-pic">
            <img src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185628/Asset-1-8-300x300.png" alt="" />
          </div>
          <h5>Ram</h5>
        </div>
        <textarea type="text" placeholder='write a caption'></textarea>
      </div>
      
    </div>
  )
}
