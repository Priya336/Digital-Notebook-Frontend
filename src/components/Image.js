import React from 'react'
import Radium, {StyleRoot} from 'radium'
import DN from './DN.png'
const Image = () => {

  const myStyle={
    width:"1000px",
    height:"850px",
   marginTop:"100px",
   marginLeft:"500px",
  paddingBottom:"200px",
   marginRight:"400px",
    '@media(max-width:720px)':{
      width:"400px",
      height:"1000px",
      marginTop:"200px",
      marginLeft:"100px",
   marginRight:"10px",
   paddingBottom:"600px",
    }

  };
  return (
    <>
  <img style={myStyle} src={DN}/>
  <div>
    <h1 style={{position:"relative",marginTop:1200}}>*</h1>
        </div>
        </>
  )
}

export default Radium(Image)
