import React , {useContext} from 'react'
import Radium, {StyleRoot} from 'radium'
import NoteContext from '../context/notes/NoteContext';
import myGif from './delete.png'
import myGif2 from './pencil.png'

const NoteItem = (props) => {
  
  const { note ,updatenotes,colour } = props;
  const context = useContext(NoteContext);
  const {deleteNote,editNote} = context;
  

  return (
 
    <div style={{width:500,marginLeft:100}} className="col-md-3">

      <div className="card my-3" >
      {
          (note.tag==="important" && <div style={{backgroundColor:"yellow",textAlign:"center",fontsize:20,height:20}}>
        
            </div>)
        }
      <div   className="col-md-3">
      
      <img src={myGif} style={{width:35,height:35,position:"relative",marginLeft:20,marginTop:-4.5}} onClick={()=>{deleteNote(note._id)}}></img>
            <img src={myGif2} style={{width:30,height:30,marginLeft:5,position:"relative"}} onClick={()=>{updatenotes(note)}}></img>
           
          {console.log(note.date.dates)}
      </div>
   
      <h1>-----------------------------</h1>
     
        <div  className="card-body">
          <h1 className="card-title" style={{color:'red'}}><b>{note.Title}</b></h1>
          <h5><p className="card-text">{note.description}</p></h5>
          <h3>{note.date}</h3>
      
        </div>
      </div>
    </div>

  )
}

export default NoteItem
