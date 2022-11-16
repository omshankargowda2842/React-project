import React from 'react'

const Login = () => {
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a href="/" className="navbar-brand"><img src="https://i.pinimg.com/originals/da/97/7a/da977a562e1450cf5526c12bef2bd782.jpg" height="50 0px" alt="" />
            </a></nav>
    <div className="container mt-5">
       
        <center>
           
                
                <div className="row">
                <div className="col-md-6">
                <form  className='form-group'>
                <div><input className='form-control mr-10 ' type="email" placeholder='Enter Email' required="required" /><br/>
                <input className='form-control' type="password" placeholder='Enter Password' required="required"  /></div><br />
                <button className='btn btn-success'>Login</button>
                </form>
                </div>
                </div>

               
        </center>
    </div>
    </div>
  )
}

export default Login
