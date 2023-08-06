import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host='http://localhost:3001'
  const notesinitial = []
  const [notes, setnotes] = useState(notesinitial)


  //get all notes
  const fetchallnotes =async () => {
    //API Call
       
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
       // "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
    const json=await response.json()
    console.log(json)
    setnotes(json);
  }
  //Add a note
  const addNote =async (Title, description, tag) => {
    //API Call
  
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({Title,description,tag}),
    });
    const json=await response.json();
    const note = json;
    console.log(json)
    setnotes(notes.concat(note))
    props.showalert("  Note is Added  Successfully ","success")
  }

  //delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify(),
    });
    const json= await response.json();
    console.log(json)
    const newnotes = notes.filter((note) => { return note._id !== id })
    setnotes(newnotes)
    
  }
  //Edit a NOte
  const editNote = async (id, Title, description, tag) => {
    //API CALL
   
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({Title,description,tag}),
    });
   const json= await response.json();
   let Newnotes=JSON.parse(JSON.stringify(notes))
  for (let index = 0; index < Newnotes.length; index++) {
    const element = Newnotes[index];
    if (element._id === id) {
      Newnotes[index].Title = Title;
      Newnotes[index].description = description;
      Newnotes[index].tag = tag;
  
      break;
    }
  }
  setnotes(Newnotes);
}
return (
  <NoteContext.Provider value={{ notes, setnotes, deleteNote, addNote, editNote ,fetchallnotes}}>
    {props.children}
  </NoteContext.Provider>
)
}
export default NoteState