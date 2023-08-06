import React, { useContext,useState, useEffect, useRef } from 'react'

import NoteContext from "../context/notes/NoteContext";
import NoteItem from './NoteItem';
import AddNotes from './AddNotes';
import { useNavigate } from 'react-router-dom';
const Notes = (props) => {
 const Navigate =useNavigate()

  const showalert=props.showalert
  const context = useContext(NoteContext);
  const { notes,editNote, fetchallnotes } = context;

  useEffect(() => {
    if(localStorage.getItem('token')!==undefined && localStorage.getItem('token')!==null ){
    fetchallnotes()
  }
    else{
      Navigate('/Login')
    }
  }
    , [])
    const[note,setNote]=useState({eid:"",eTitle:" ",edescription:" ",etag:""});

  const updatenotes = (currentNote) => {
    console.log(currentNote.Title)
   
    ref.current.click()
    setNote({eid:currentNote._id,eTitle:currentNote.Title,edescription:currentNote.description,etag:currentNote.tag})
  
  }
  const ref = useRef(null) 
const refclose = useRef(null) 
  
  const handelclick =(e)=>{
    console.log("update note",note)
    e.preventDefault();
    editNote(note.eid,note.eTitle,note.edescription,note.etag);
    props.showalert("Note is updated Successfully","success")
    refclose.current.click()
    
}
const onchange =(e)=>{
setNote({...note,[e.target.name]:e.target.value})
}


  return (
    <div>
      <AddNotes  showalert={showalert} />


      <button ref={ref}  type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel"><b><h1 style={{color:"red"}}>Edit Note</h1></b></h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="eTitle" className="form-label"><h3>Title</h3></label>
                <input type="text" className="form-control"  minLength={5}value={note.eTitle}name="eTitle" id="eTitle" aria-describedby="emailHelp" onChange={onchange} />

                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label"><h3>Description</h3></label>
                  <input type="text" className="form-control" value={note.edescription}name="edescription" id="edescription" minLength={6} onChange={onchange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label"><h3>Tag</h3></label>
                  <input type="text" className="form-control"value={note.etag} name="etag" id="etag" onChange={onchange} />
                </div>
              
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refclose} className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handelclick}><h3>Update Note</h3></button>
            </div>
          </div>
        </div>
      </div>

      <div >
      <div  style={{color:"yellow",position:"relative",textAlign:"center"}}><label ><b><u>Your Notes ---</u> </b></label></div>
      
      {(notes.length===0)?<div className='container' style={{color:"white"}}><i><h3>Your Notes Collection is Empty........</h3><h3>*Click on Add Note Button for making your notes collection</h3></i></div>:
       
       <div   className="row my-4">
          {notes.map((note) => {
         
            return <NoteItem  key={note._id} updatenotes={updatenotes} note={note} />
          })}
        </div>
      }
      </div>
      <div style={{width:"100%",backgroundColor:'black',height:100,color:"grey", textAlign:"center"}}>
      <div style={{fontSize:30}}>   <b> @Digital-Notebook</b> <br></br></div>
        <div style={{fontSize:30,color:'grey'}}><i> *Collection of  important information and notes of  various field </i></div>
       
        </div>
    </div>
  )
}

export default Notes
