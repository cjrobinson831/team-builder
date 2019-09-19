import React, { useState } from "react";

const NoteForm = props => {
    const [note, setNote] = useState({ name: "", email: "", role: "" });

    const handleChanges = e => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewNote(note)
        setNote({ name: "", email: "", role: "" });
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlForm="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                value={note.name}
            />
            <label htmlForm="email">Email</label>
            <input
                id="email"
                type="text"
                name="email"
                onChange={handleChanges}
                value={note.email}
            />
            <label htmlForm="role">Role</label>
            <inputt
                id="role"
                type="text"
                name="role"
                onChange={handleChanges}
                value={note.role}
            />
            <button type="submit">ADD NOTE</button>


        </form>
    )

};

export default NoteForm;