import React from 'react'
import Sidebaritem from './Sidebaritem'

const Sidebar = () => {
  const itemList = [
    {id:'Home', link:''},
    {id:'Projects', link:'project'},
    {id:'Info', link:'info'},
    {id:'Contact', link:'contact'}]
  return (
    <div>
      {itemList.map((item) => (
        <Sidebaritem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Sidebar