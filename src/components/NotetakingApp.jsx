import React, { useState } from 'react'

const NotetakingApp = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([
    {id:1, title: "Note1"},
    {id:2, title: "Note2"}
  ]);
  const [editMode, seteditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  
  const submitHandler = (e)=>{
    e.preventDefault(); 
    if(noteTitle.trim()=== "")
        return alert("please provide a valid title")
    
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
    };
    setNotes([newNote, ...notes]);
    setNoteTitle("");
  }

  const changeTitleHaldler = (e)=>{
    setNoteTitle(e.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler} >
        <input type="text" className=' border-2 border-amber-950' 
        value={noteTitle}
        onChange={changeTitleHaldler}
        />
        <button className=' py-1.5 bg-red-500 border-2' type='submit'>Add Note</button>
      </form> 

      <div className="note-list">
        <h2>All Notes</h2>
        <ul>
            {notes.map((note)=>(
            <>
            <li key={note.id} >
                <span>{note.title}</span>
                <button className='bg-red-500 border-2'>Edit</button>
                <button onClick={()=> removeHandler(note.id)} className='bg-red-500 border-2 '>Delete</button>
            </li>
            <br />
            </>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default NotetakingApp
