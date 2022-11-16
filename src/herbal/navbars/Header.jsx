import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navheight navbar-light">
    <Link className="navbar-brand" to="/"><img src="https://assets.herbalifenutrition.com/content/dam/herbalife/sites/herbalife_nutrition/logos/herbalife-nut-green-small.png" alt="" /></Link>
    
    <div className="ml-auto nav1" >
      <ul className="navbar-nav ">
        <li className="nav-item  navfont">
          <Link className="nav-link" to="Member"><h6>Member login</h6> </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Find"><h6>Find a Member</h6></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link globe mb-3" to="India"><h6> <i className="fa fa-globe"></i> India</h6></Link>
        </li>

      </ul>
      
    </div>
  </nav>
    </div>
  )
}

export default Header
