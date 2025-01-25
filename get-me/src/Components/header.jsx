import React from 'react'
import "./header.css"

function header() {
  return (
    <div className='header-container'>
    <div className='header-main'>
      <div className='header-element'>Home</div>
      <div className='header-element'>About</div>
      <div className='header-element'>Portfolio</div>
      <div className='header-element'>Reume</div>
      <div className='header-element'>Contact</div>
    </div>
    </div>
  )
}

export default header