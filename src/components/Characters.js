import React from 'react';
import styles from '../Characters.module.css';
import avatar from '../data/img/avatar.png';

export default function Characters({search, characters, handleClick}) {
    const characterList = characters.map((char, i) => {
        if (char.characterName.toLowerCase().includes(search.toLowerCase())) {
            return (
                <li key={i}><button onClick={() => {
                    handleClick(i)
                }}><img className={styles.thumb} src={char.characterImageThumb || avatar} onError={(e)=>{e.target.onerror = null; e.target.src=avatar}}></img>{char.characterName}</button></li>
            )
        }
    });
    return (
        <div>
            <ul className={`${styles.list}`}>
                {characterList}
            </ul> 
        </div>
    )
}