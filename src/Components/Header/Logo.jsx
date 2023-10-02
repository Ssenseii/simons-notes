import React from 'react'

const Logo = ({text}) => {
  return (
    <div className='header__logo'>
      <a href='/'>{text}</a>
    </div>
  )
}

export default Logo