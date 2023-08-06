import React, { useState } from 'react'

import {useNavigate} from "react-router-dom"
const Login = (props) => {
  let history=useNavigate()
    const [password,setpassword]=useState("")
    const [email,setemail]=useState("")
    const handelclick =async (e) => {

        e.preventDefault();
        const response = await fetch("http://localhost:3001/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
            
        },
        body: JSON.stringify({password,email}),
    })
 
    console.log(password,email)
        const json=await response.json()
        console.log(json)
        if(json.success===false){
          props.showalert("Invalid Credential","danger")
                }

                else{
                  //save the authtoken
                  props.showalert("Account Login Successfully","success")
                  localStorage.setItem('token',json.authtoken)
                  history("/Image");
                  setTimeout(() => {
                    history('/Home')
                   }, 1200);
                }
       
      }
const setp=(e)=>{
setpassword(e.target.value);
}
const sete=(e)=>{
    setemail(e.target.value); 
}

  return (
    <>
    <div  className="container" style={{paddingBottom:10,marginTop:150,backgroundColor:"#877c7cba",width:700}}>
        <div style={{backgroundColor:"#ddbe0f",color:"#971d1d",position:"relative",textAlign:"center"}} ><b>Login</b></div>
      <form onSubmit={handelclick}>
      
  <div className="mb-3">
    <label  style={{color:"#ffc107"}}htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className  ="form-control" name="email" onChange={sete} value={email} id="email" />
    
  </div>
  <div className="mb-3">
    <label  style={{color:"#ffc107"}}htmlFor="exampleInputPassword1" name="password"  className="form-label">Password</label>
    <input type="password" className="form-control" onChange={setp} value={password} id="password"/>
  </div>
 
  <button type="submit"  className="btn btn-primary"><h3>Submit</h3></button>
</form>
</div>
<div>
    <h1 style={{position:"relative",marginTop:1200}}>*</h1>
        </div>
   </>
  )
}

export default Login
