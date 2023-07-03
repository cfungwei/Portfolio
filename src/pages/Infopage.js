import React from 'react'
import Sidebar from '../components/Sidebar'
import Profile from '../components/Profile'

import iota from '../images/iota-logo.png'

const Infopage = () => {
  return (
    <div>
      <div className='box backgroundBox'>
        <Profile />
        <Sidebar />

        <div className='info-content'>
          <h1>Work Experience</h1>
          <div>    
            <img src={iota} className='info-logo' alt='iota logo'/>
            <b>AI and Software Engineer</b>
            <ul className='info-work-point'>
              <li>
                Collaborated with radiologists and data engineers in training an AI model with 
                an accuracy of 0.93 to improve the speed and workflow for radiologists
              </li>
              <li>
                Developed an award-winning product in a team of four that integrated AI models 
                into hospitals using multiple AWS services, winning the AWS AI/ML Reactor 
                competition among more than 200 applicants and 33 startups
              </li>
              <li>
                Corresponded with AWS solutions architect to create an AI automated 
                annotation solution in the cloud to reduce time spent annotating medical images
              </li>
              <li>
                Gained valuable skills in AI development, AWS services, and cross-functional 
                team collaboration to drive project success
              </li>
            </ul>
          </div>
          <h1>Academic History</h1>
          <p>
            <b>Nanyang Technological University</b>
            <span>Bachelor of Science in Mathematical Sciences</span>
            <span>CGPA: 4.68 <i>(Distinciton)</i></span>
            <span>Minor in Computing and Data Analytics</span>
          </p>
          <p>
            <b>Pioneer Junior College</b>
            <span>GCE A' Levels</span>
            <span>H2 Mathematics, Chemistry, Biology</span>
            <span>H1 China Studies in English, General Paper, Project Work</span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Infopage