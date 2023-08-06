
import React from "react";
import Notes from "./Notes";
import Radium, {StyleRoot} from 'radium'
 const Home = (props) => {
 const showalert=props.showalert

  return (  
    <div >
    <Notes  showalert={showalert} />
    </div>
  )
}

export default Home
