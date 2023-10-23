import React from 'react'

import './styles.css'

export default function Home() {
  return (
    <div className='home'>
      {/* card */}
      <div className="card">
        {/* card header */}
        <div className="card-header">
          <div className="card-pic">
            <img src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185628/Asset-1-8-300x300.png" alt="" />
          </div>
            <h5>RAM</h5>
        </div>
        {/* card image */}
        <div className="card-image">
          <img src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg" alt="" />
        </div>
        {/* card content */}
        <div className="card-content">
          <span className="material-symbols-outlined">favorite</span>
          <p> 1 Like</p>
          <p> This is amazing</p>
        </div>
        {/* Add comment */}
        <div className="add-comment">
          <span className="material-symbols-outlined">mood</span>
          <input type='text' placeholder='Add a Comment' />
          <button className='comment'>Post</button>
        </div>
    
      </div>
    </div>
  )
}
