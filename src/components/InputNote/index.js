import React, { useState } from 'react';
import styles from './inputNote.module.css';


export default function InputNote({ onInputSubmit }) {
    const [input, setInput] = useState();
    const handleChange = evt => setInput(evt.target.value)

    const sendNote = (evt) => {
        evt.preventDefault()
        onInputSubmit(input)
        setInput("")
    }



    return (
        <>
            <div className={styles.container}>

                <label className={styles.label}>Escribe una nota</label>
                <input
                    type="text"
                    value={input}
                    name="note"
                    className={styles.input}
                    onChange={handleChange}></input>
                <button className={styles.button} type="submit" onClick={sendNote}>Añadir</button>

            </div>
        </>
    )
}