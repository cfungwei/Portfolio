import React from 'react'

const Theme = ({theme, selected}) => {
    let square;
    if (theme === selected) {
        square = <div className='theme-box'>◼</div>
    } else {
        square = <div className='theme-box'>◻</div>
    }
  return (
    <div className='theme-container'>
        {square}
        <div className='theme-text'>{theme}</div>
    </div>
  )
}

export default Theme