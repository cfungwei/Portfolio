import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Profile from '../components/Profile'
import ProjectItem from '../components/Projectitem'

const Projectpage = () => {

  let [repos, setRepos] = useState([])
  let [check, setCheck] = useState(false)

  let getRepos = async () => {
    let response = await fetch('https://api.github.com/search/repositories?q=user:fungiiiii')
    let data = await response.json()
    setRepos(data)
    setCheck(true)
  }

  useEffect(() => {
    getRepos()
  }, [])
   

  console.log(repos.items)

  return (
    <div>
      <div className='box backgroundBox'>
        <Profile />
        <Sidebar />
        <div className='project-content'>
        { check &&
          Object.keys(repos.items).map((key, repo) =>(
            repos.items[repo].name !== 'fungiiiii' &&
            <ProjectItem key={key} repo={repos.items[repo]} />
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Projectpage