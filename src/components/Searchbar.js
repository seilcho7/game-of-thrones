import React from 'react';
import styles from '../Searchbar.module.css';

export default function Searchbar({text, handleChange}) {
    return (
        <div>
            <input className={styles.bar} value={text} type="text" placeholder="SEARCH NAME" onChange={(e) => { handleChange(e.target.value) }}></input>
        </div>
    )
}