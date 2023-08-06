import React, { useContext, useState } from 'react'
import Radium, {StyleRoot} from 'radium'
import NoteContext from '../context/notes/NoteContext';
const AddNotes = (props) => {
    const context = useContext(NoteContext);
    const {addNote} = context;
    const myStyle={
      backgroundColor:"#877c7cba",
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  paddingBottom:5
  };
  const[note,setNote]=useState({Title:" ",description:" ",tag:"general",date:Date});
  

  
  
    const handelclick =async (e)=>{
        e.preventDefault();
        addNote(note.Title,note.description,note.tag);
        await setNote({Title:" ",description:" ",tag:""})
    
    }
    const onchange =(e)=>{
 setNote({...note,[e.target.name]:e.target.value})
    }
  return (   
     <div className="container">
          <div  style={myStyle}>
      <div className="container my-3">
      <div style={{backgroundColor:"#ddbe0f",color:"#971d1d",position:"relative",textAlign:"center",marginTop:120}}><label ><b>Add Your Note</b></label></div>
      </div>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="Title" style={{color:"white"}} className="form-label">Title</label>
            <input type="text" className="form-control"  style={{fontSize:25}} value={note.Title} minLength={5} required name="Title"id="Title" aria-describedby="emailHelp" onChange={onchange}  />
          
          </div>
          <div className="mb-3">
            <label htmlFor="description"  style={{color:"white"}}  className="form-label">Description</label>
            <textarea type="text" className="form-control" style={{fontSize:25}}   value={note.description}minLength={6}required  name="description" id="description"  onChange={onchange} row="0"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" style={{color:"white"}} className="form-label">Tag</label>
            <input  type="text" className="form-control" style={{fontSize:25,width:200}}   value={note.tag}   name="tag" id="tag"  onChange={onchange} />
          </div>
      
          <button disabled={note.Title.length<5 || note.description.length<6}type="submit" className="btn btn-primary"  onClick={handelclick}><h2>Add Note</h2></button>
        </form>  
      </div>
    
         
  
      </div>
    </div>
  )
}

export default AddNotes
