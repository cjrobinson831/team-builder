import React, { useState } from 'react';
import './App.css';
import NoteForm from "./component/NoteForm";
import Notes from "./component/Notes";


function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      name: "Chazaray Robinson",
      email: "cjrobinson831@gmail.com",
      role: "FullStack Developer "
    }
  ]);

  const addNewNote = note => {
    const newNote = {
      id: Date.now(),
      name: note.name,
      email: note.email,
      role: note.role
    };
    setNotes([...notes, newNote]);
  }

  return (
    <div className="App">
      {/* <Hello /> */}
      <NoteForm addNewNote={addNewNote} />
      <Notes notes={notes} />
    </div>
  )
}

export default App;
