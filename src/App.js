
import React,{useState} from "react";
import Radium, {StyleRoot} from 'radium'
import Navbar from './components/Navbar';
import Home from './components/Home';
import{ About} from './components/About';
import Alert from './components/alert'
import book from './components/book.jpg'
import Image from './components/Image'
import {
  Route,
  Routes,
  BrowserRouter as Router,
  BrowserRouter,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';

function App() {
  const [alert, setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
     msg:message,
     type:type
    })
    setTimeout(() => {
   setalert(null)
    }, 1200);
     }
     const myStyle={
     
      backgroundImage:`url(${book})`,
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      
  };
 
  return (
<StyleRoot>
    <div style={myStyle} >
        <NoteState showalert={showalert}>
          <BrowserRouter basename="/Digital-Notebook">
        <Router >
         
        <Navbar showalert={showalert} />
        <Alert alert={alert} ></Alert>
       <div>
        <Routes>
        <Route  exact path="/Digital-Notebook" element={ <div style={{backgroundColor:"#bcc1d342"}}><Welcome/></div> }>
          </Route>
          <Route  exact path="/about" element={ <div ><About/></div>}>
          </Route>
          <Route exact  path="/home" element={<Home showalert={showalert} />}>
          </Route>
          <Route exact  path="/Login" element={<Login  showalert={showalert}/>}>
          </Route>
          <Route exact  path="/Signup" element={<Signup  showalert={showalert}/>}>
          </Route>
          <Route exact  path="/Image" element={<div style={{backgroundColor:"#932d2d"}}><Image/></div> }>
          </Route>
         
      </Routes>
      </div>
      </Router>
      </BrowserRouter>
      </NoteState>
      </div>
      </StyleRoot>
  );
}

export default Radium(App);
