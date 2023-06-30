import React from 'react'
import Sidebar from '../components/Sidebar'
import Profile from '../components/Profile'

const Projectpage = () => {
  return (
    <div>
      <div className='box backgroundBox'>
        <Profile />
        <Sidebar />
        <div className='content'>
          test
        </div>
      </div>
    </div>
  )
}

export default Projectpage