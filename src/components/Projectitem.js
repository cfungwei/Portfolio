import React from 'react'

const Projectitem = ({repo}) => {
  return (
    <div className='project-group'>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className='project-title'>{repo.name.replaceAll('-',' ')}</a>
      <div className='project-desc'>{repo.description}</div>
    </div>
  )
}

export default Projectitem