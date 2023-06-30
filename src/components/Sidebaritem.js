import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Sidebaritem = ({item}) => {
    return (
    <div className='side-bar'>
        <Link className='text-link' to={`/${item.link}`}>
            {item.id}
        </Link>
    </div>
    )
}

export default Sidebaritem
