import React from 'react'
import Radium, {StyleRoot} from 'radium'
export const About = () => {
  
  return (
    <>
    <div className='container ' style={{marginTop:150,paddingBottom:500}}>
      <div style={{backgroundColor:"#877c7cba",padding:10,paddingTop:0}}>
   <div  style={{textAlign:"center",color:"#fbff00",marginTop:50}}><b >About Digital-Notebook</b></div>
   <p style={{fontSize:30,marginTop:10}}>Digital-Notebook is a website which help you to keep your notes in a secure manner in a backend database .<br></br>
    You can use this website for muliple purpose-:
    <ol type="1">
      <li>
        KEYWORDS
      </li>
      <li>
        Collection of Thoughts
      </li>
      <li>
        Information about the employees in any organisation
      </li>
      <li>
        Personal Diary-"as it is completly secure"
      </li>
      many more................<br></br>
      <b><i>*you can mark the note as important by using tag </i></b>
      
      
    </ol>
   </p>
    </div>
    <div>
    <h1 style={{position:"relative",marginTop:1200}}>*</h1>
        </div>
    </div>
    </>
  )
}

export default About
