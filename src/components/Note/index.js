import React from 'react';
import './note.css'

export default function Note({ data, index, onClickDelete, onClickPrior }) {

    return (
        <>
            <div className="container">
                <p className="note">{data}</p>
                <button className="button" value={index} type="onSubmit" onClick={onClickDelete}>❌</button>
                <button className="button" value={index} onClick={onClickPrior}>🔺</button>
            </div>
        </>
    )
}