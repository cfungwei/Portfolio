import React from 'react'

const Projectitem = ({repo}) => {
  return (
    <div className='project-group'>
      <div className='project-title'>{repo.name.replaceAll('-',' ')}</div>
      <div className='project-desc'>{repo.description}</div>
    </div>
  )
}

export default Projectitem