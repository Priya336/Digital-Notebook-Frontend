import React ,{useState}from 'react'
import Radium, {StyleRoot} from 'radium'
import {useNavigate} from "react-router-dom"
const Signup = (props) => {
  let history=useNavigate()
    const [credential,setcredential]=useState({name:"", email:"",password:""})
    const handelclick= async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:3001/api/auth/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name:credential.name,password:credential.password,email:credential.email}),
          });
          const json=await response.json();
          console.log(json)
          
          if(json.success===false){
            props.showalert("Invalid Details","danger")
                  }
  
                  else{
                    //save the authtoken
                  
                    props.showalert("Account Created Successfully","success")
                    localStorage.setItem('token',json.jwtData)
                    history("/Image");
                    setTimeout(() => {
                      history('/Home')
                     }, 1200);
                  }
         
        
        
    }
    const setc=(e)=>{
        setcredential({...credential,[e.target.name]:e.target.value})
    }
  return (
    <>
    <div className='container' style={{marginTop:150,paddingBottom:10,backgroundColor:"#877c7cba",width:700}}>
       <div style={{backgroundColor:"#ddbe0f",color:"#971d1d",position:"relative",textAlign:"center"}} ><b>Sign up</b></div>
      <form onSubmit={handelclick}>
      <div className="mb-3">
    <label style={{color:"#ffc107"}} htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" name="name" onChange={setc} value={credential.name} id="name" />
  </div>
  <div className="mb-3">
    <label style={{color:"#ffc107"}} htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email"id="email" value={credential.email} onChange={setc} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label style={{color:"#ffc107"}} htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" onChange={setc}  value={credential.password}id="password" minLength={6}required/>
  </div>
  
  <button type="submit" className="btn btn-primary"><h3>Submit</h3></button>
</form>
    </div>
    <div>
    <h1 style={{position:"relative",marginTop:1200}}>*</h1>
        </div>
       </>
  )
}

export default Signup
