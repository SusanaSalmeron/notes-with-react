import React, { useState } from 'react';
import Note from '../Note';
import InputNote from '../InputNote';

export default function ListOfNotes() {
    const [notes, setNotes] = useState(["sacar la basura", "comprar el pan"])

    localStorage.setItem('notes', JSON.stringify(notes))




    const handleSubmit = text => {
        setNotes(notes.concat(text))
    }

    const handleRemoval = (evt) => {
        let index = evt.target.value
        /*console.log(index)*/
        let newNotes = notes.filter((_, i) => i.toString() !== index)
        setNotes(newNotes)
    }

    const handlePriority = (evt) => {
        let newNotes = [...notes]
        let note = newNotes.splice(evt.target.value, 1)
        newNotes.unshift(note)
        setNotes(newNotes)
    }

    return (
        <>
            <InputNote
                onInputSubmit={handleSubmit} />
            {Object.keys(notes).map(key => <Note data={notes[key]} index={key}
                onClickDelete={handleRemoval}
                onClickPrior={handlePriority}
            />
            )}

        </>
    )

}