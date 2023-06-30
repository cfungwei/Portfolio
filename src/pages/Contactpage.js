import React from 'react'
import Sidebar from '../components/Sidebar'
import Profile from '../components/Profile'

import linkedin from '../images/linkedin-icon.png'
import github from '../images/github-logo.png'
import mail from '../images/mail-logo.png'

const Contactpage = () => {
  return (
    <div>
      <div className='box backgroundBox'>
        <Profile />
        <Sidebar />
        <div className='content'>
          <div className='contact-content-text'>
            <div>
              <div style={{ display:'block', justifyContent:'space-evenly'}}>
                <div style={{display:'flex', alignItems:'center'}}>
                  <img src={mail} className='contact-logo' alt='mail logo'/>
                  <span>cfungwei@outlook.com</span>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={linkedin} className='contact-logo' alt='linkedin logo'/>
                    <a href='https://www.linkedin.com/in/cheongfungwei/' target="_blank" rel="noopener noreferrer" className='contact-link'>Linkedin</a>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                  <img src={github} className='contact-logo' alt='github logo'/>
                  <a href='https://github.com/fungiiiii' target="_blank" rel="noopener noreferrer" className='contact-link'>Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactpage