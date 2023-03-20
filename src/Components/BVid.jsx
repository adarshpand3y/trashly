import React from 'react'
import bVid from '../Assets/video.mp4'

export const BVid = () => {
  return (
    <div>
        <video className='bV' autoPlay loop muted>
            <source src={bVid} type='video/mp4' />
        </video>    
    </div>
  )
}
