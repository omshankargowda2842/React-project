import React from 'react'
import {Link} from "react-router-dom"
import Home1 from '../Navbar2 pages/Home1'
import Footer from './Footer'
import './Home.css'
const Home = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg  navheight navbar-light">
    <Link className="navbar-brand" to="Home1"><img src="https://assets.herbalifenutrition.com/content/dam/herbalife/sites/herbalife_nutrition/logos/herbalife-nut-green-small.png" alt="" /></Link>
    
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
  <nav  className="navbar navbar-expand-lg  nav2 bg-red  mt-1 ">
  <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link text-black" to="Home1"><h6>Home</h6> </Link>
        </li> 
        <li className="nav-item dropdown">
         <Link className='nav-link dropdown-toggle ml-3' to="Allproducts">All Products</Link>
         <div className='dropdown-menu'>
            <Link className='dropdown-item' to="#">Writelife</Link>
            <Link className='dropdown-item' to="#">Weight Management</Link>
            <Link className='dropdown-item' to="#">Energy & Fightness</Link>
            <Link className='dropdown-item' to="#">Targetted Nutrition</Link>
            <Link className='dropdown-item' to="Allproducts">All Products</Link>
           
            
         </div>
        </li>
        <li className="nav-item dropdown">
         <Link className='nav-link dropdown-toggle ml-3' to="Article">Live Healthy</Link>
         <div className='dropdown-menu'>
            <Link className='dropdown-item' to="#">Article</Link>
            
         </div>
        </li>
        <li className="nav-item active">
          <Link className="nav-link text-black ml-3" to="Business"><h6>Business Opportunity</h6> </Link>
        </li> 
        <li className="nav-item dropdown">
         <Link className='nav-link dropdown-toggle ml-3' to="Aboutus">About Us </Link>
         <div className='dropdown-menu'>
            <Link className='dropdown-item' to="#">Sponsership</Link>
            <Link className='dropdown-item' to="#">Awards & Recoginition</Link>
            <Link className='dropdown-item' to="#">Contact Us</Link>
            <Link className='dropdown-item' to="#">India Management</Link>
            <Link className='dropdown-item' to="#">Social Responsibility</Link>
           
            
         </div>
        </li>
        <li className="nav-item active">
          <Link className="nav-link text-black ml-3" to="Buyproducts"><h6>Buy Products</h6> </Link>
        </li> 
        
    </ul>
  </nav>
   <Home1/>
  </div>
  )
}


export default Home
