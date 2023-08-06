import React from 'react'
import Radium, {StyleRoot} from 'radium'
import image from './image.jpg'
import { useNavigate } from 'react-router-dom'
import DN from './DN.png'
const Welcome = () => {
 
    const Navigate=useNavigate()
   const handleclick=()=>{
   Navigate('/Image')
     setTimeout(() => {
      Navigate('/Home')
     }, 1200);   
   
   }
   const mystyle={
    height:800,
    width:"850px",
     position:"relaive",
     marginBottom:"20%",
     marginLeft:"30%",
    marginTop:"4%",
    backgroundImage:`url(${image})`, 
    backgroundRepeat: 'no-repeat', 
     backgroundSize:'relative',
     textAlign:"center",
     paddingTop:150,
     fontSize:70,
     '@media(max-width:720px)':{
      fontSize:30,
     
      height:"1200px",
      width:"350px",
   marginLeft:"20%",
      marginTop:"10%",
      marginBottom:"20%",
     backgroundImage:`url(${DN})`,
     backgroundSize:'350px',
     } 
    
   };
  const mystyle2={
    '@media(max-width:720px)':{
     
      paddingTop:100,
      height:450,
      backgroundColor:"#e7b644f5",
      marginTop:"25%",
      borderStyle:"inset",
      borderWidth:"20px",
    }
  };
 
  return (
   
      <div  style={mystyle}>
      
      <div style={mystyle2}>
        <b > <div>WELCOME
        </div>
      
        <div>
        TO
          </div> 
         
          <div>
            <i style={{color:'#9f3131'}}>DIGITAL-NOTEBOOK</i>
            </div></b>
            
      <div style={{'@media(max-width:720px)':{paddingTop:20}}}>
        <button  className="btn btn-primary" onClick={handleclick}><h2>START</h2></button>
        
        </div></div>
        </div>
  )
}

export default Radium(Welcome)
