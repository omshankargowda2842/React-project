import React from 'react'
import { useState } from 'react'
import Login from './Login';
import {Link} from 'react-router-dom'



const Submit = () => {

  //  const[submit,SETsubmit]=useState() 
    
  return (
    <div>
     <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a href="/" className="navbar-brand"><img src="https://i.pinimg.com/originals/da/97/7a/da977a562e1450cf5526c12bef2bd782.jpg" height="50 0px" alt="" />
            </a>
                <div className='ml-auto'>
                    <ul className="navbar-nav">
                      {/* <a href="./form.jsx"><button className='btn btn-success' onClick={()=>{SETsubmit(<Login/>)}}>LOGIN</button></a> */}
                      <Link to='/login'>Login</Link>
                    </ul>
                </div>
            </nav>
           
                
            
    </div>
  )
}

export default Submit
