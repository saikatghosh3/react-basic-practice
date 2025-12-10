import React, { useState } from 'react';

const NotetakingApp = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([
    { id: 1, title: "Note1" },
    { id: 2, title: "Note2" }
  ]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (noteTitle.trim() === "") {
      return alert("Please provide a valid title");
    }

    editMode ? updateHandler() : createHandler();
  };

  const createHandler = () => {
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
    };

    setNotes([newNote, ...notes]);
    setNoteTitle("");
  };

  const updateHandler = () => {
    const updatedNotes = notes.map((item) =>
      item.id === editableNote.id ? { ...item, title: noteTitle } : item
    );

    setNotes(updatedNotes);
    setEditMode(false);
    setEditableNote(null);
    setNoteTitle("");
  };

  const changeTitleHandler = (e) => {
    setNoteTitle(e.target.value);
  };

  const removeHandler = (noteId) => {
    const updatedNotes = notes.filter((item) => item.id !== noteId);
    setNotes(updatedNotes);
  };

  const editHandler = (note) => {
    setEditMode(true);
    setEditableNote(note);
    setNoteTitle(note.title);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="border-2 border-amber-950"
          value={noteTitle}
          onChange={changeTitleHandler}
        />
        <button className="py-1.5 bg-red-500 border-2" type="submit">
          {editMode ? "Update Note" : "Add Note"}
        </button>
      </form>

      <div className="note-list">
        <h2>All Notes</h2>
        <ul>
          {notes.map((note) => (
            <div key={note.id}>
              <li>
                <span>{note.title}</span>
                <button onClick={() => editHandler(note)} className="bg-red-500 border-2">
                  Edit
                </button>
                <button onClick={() => removeHandler(note.id)} className="bg-red-500 border-2">
                  Delete
                </button>
              </li>
              <br />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotetakingApp;
