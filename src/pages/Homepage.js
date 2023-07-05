import React from 'react'
import Sidebar from '../components/Sidebar'
import Profile from '../components/Profile'

const Homepage = () => {
  return (
    <div>
      <div className='box backgroundBox'>
        <Profile />
        <Sidebar />
        <div className='content'>
            <p>
              <span>Hello <span className='wave'>👋</span></span>
              <span>Welcome to my portfolio!</span>
              <span>I am a math graduate</span>
              <span>deeply passionate about</span>
              <span>tech and mathematics.</span>
              <span>I invite you to explore</span>
              <span>my portfolio and witness</span>
              <span>my growth and</span>
              <span>pursuit of excellence.</span>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Homepage