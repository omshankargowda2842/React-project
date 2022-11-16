import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
       <footer>
    <div className="container-fluid  ">
      <div className="row ">
        <div className="col-md-6 footer-left mt-4 ">
        <img src="https://assets.herbalifenutrition.com/content/dam/sites_structure/herbalife-nutrition/logos/herbalife-nut-green-small.png" height="50px" width="140px" alt="" />
         <h6>© 2022 Herbalife International of America, Inc. No reproduction in whole or in part without written permission. All Rights Reserved. All trademarks and product images exhibited on this site, unless otherwise indicated, are the property of Herbalife International, Inc.</h6>
        </div>
        <div className="col-md-6 mt-4  ">
         
          <h5 className='information'>INFORMATION</h5>
          <div className='fontmove'> <i className="fa fa-facebook icon ml-3 mr-1"></i>
           <i className="fa fa-twitter icon mr-1" ></i>
           <i className="fa fa-instagram icon mr-1 "></i>
           <i className="fa fa-youtube icon"></i>
          </div>
          <div className='navbar-nav FOOT-LINKS mt-3 mb-5'> 
            <li className='nav-item'><Link className=' nav-link' rel='' to="">Contact Us</Link></li>
            <li className='nav-item'><Link className=' nav-link' rel='' to="">Terms of Use</Link></li>
            <li className='nav-item'><Link className=' nav-link' rel='' to="">Privacy Policy</Link></li>
            <li className='nav-item'><Link className=' nav-link' rel='' to="">Corporate Opportunities</Link></li>
            <li className='nav-item'><Link className=' nav-link' rel='' to="">Carrer Opportunities</Link></li>
          </div>
        
         
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
