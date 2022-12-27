import React from 'react'
import {AiFillLinkedin, AiFillGithub,AiOutlineMail} from 'react-icons/ai'

const Container = () => {
  return (
    <div className="container">
    <h1>Oghenebrume Kofi</h1>
    <h2>Building Tomorrows UI Today</h2>
    <div className="links">
      <ul className='styled--links'>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/kofi-oghenebrume-1b9879196/">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/tegakay" target="_blank">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <AiOutlineMail />
        </li>
      </ul>
      
    </div>
  </div>

  )
}

export default Container