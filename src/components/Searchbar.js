import React from 'react';

export default function Searchbar({text, handleChange}) {
    return (
        <div className="text-center searchbar">
            <input value={text} type="text" placeholder="  SEARCH NAME" onChange={(e) => { handleChange(e.target.value) }}></input>
        </div>
    )
}