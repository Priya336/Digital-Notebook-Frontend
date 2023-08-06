import React,{useEffect} from 'react'

import{Link,useLocation, useNavigate} from "react-router-dom";
import img from'./DN.png'
import Radium, {StyleRoot} from 'radium'


 export const Navbar = () => {
  let location = useLocation();
  let Navigate=useNavigate()
  useEffect(() => {
    console.log(location.pathname)
   }, [location]);
   const handellogout=()=>{
    localStorage.removeItem('token')
    Navigate('/Login')
  }
  return (
   <nav style={{backgroundColor:"#af3939" ,position:"sticky",marginTop:0}} className="navbar fixed-top  navbar-expand-lg navbar-dark">
    <div className="container-fluid">
  
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link to="/home" className={`nav-link ${location.pathname==="/home"?"active":{}} mx-2`} aria-current="page"><h4><b>Home</b></h4></Link>
          </li>
          <li className="nav-item">
          <Link to="/about"className={`nav-link ${location.pathname==="/about"?"active":{}} mx-2`} ><h4><b >About</b></h4></Link>
          </li>
         
         <img style={{width:70,height:50 ,position:'relative',left:750, '@media(max-width:720px':{left:10}}}src={img}/>
        </ul>
        {(!localStorage.getItem('token'))?<form className="d-flex" role="search">
      
          <Link className="btn btn-primary"  to="/Login"  style={{marginRight:10}}role="button"><h3>Log In</h3></Link>
          <Link className="btn btn-primary"  to="/Signup"role="button"><h3>Sign up</h3></Link>
        </form>:<button className="btn btn-primary" onClick={handellogout}><h3>Log Out</h3></button>}
      </div>
    </div>
  </nav>
     
  )
}

export default Navbar
