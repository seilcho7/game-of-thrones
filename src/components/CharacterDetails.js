import React from 'react';
import styles from '../CharacterDetails.module.css';
import avatar from '../data/img/avatar.png';

export default function CharacterDetails({character}) {
    let names = [];
    if (character.actorName) {
        names.push(<a target="_blank" href={character.actorLink ? `https://www.imdb.com${character.actorLink}` : null}>{character.actorName}</a>);
    } else if (character.actors) {
        character.actors.forEach((actor) => {
            console.log(actor.actorName)
        names.push(<span><a target="_blank" href={actor.actorLink ? `https://www.imdb.com${actor.actorLink}` : null}>{actor.actorName}</a> (S: {actor.seasonsActive.join(', ')})</span>)
        });
    } else {
        names = [];
    }

    let houses = '';
    if (character.houseName) {
        houses = character.houseName
    } else {
        houses = null
    }
    console.log(houses);
    
    return (
        <div className={styles.detailContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={character.characterImageFull ? character.characterImageFull : avatar}></img>
            </div>
            <div className={styles.details}>   
                <ul>
                    <li>Name: <span className={styles.name}>{character.characterName}</span></li>
                    <li>Actor: <span className={styles.actor}>{names.length === 1 ? names[0] : names.length > 1 ? names.map((name) => (name)).reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null) : "N/A"}</span></li>
                    <li>House: <span className={styles.house}>{typeof houses === "string" ? houses : houses && typeof houses === "object" ? houses.join(', ') : "N/A"}</span></li>
                    <li>Parents: <span className={styles.parents}>{character.parents ? character.parents.join(', ') : null || "N/A"}</span></li>
                    <li>Siblings: <span className={styles.siblings}>{character.siblings ? character.siblings.join(', ') : null || "N/A"}</span></li>
                    <li>Serves: <span className={styles.serves}>{character.serves ? character.serves.join(', ') : null || "N/A"}</span></li>
                    <li>Killed: <span className={styles.killed}>{character.killed ? character.killed.join(', ') : null || "N/A"}</span></li>
                    <li>Killed By: <span className={styles.killedby}>{character.killedBy ? character.killedBy.join(', ') : null || "N/A"}</span></li>
                </ul>
            </div>
        </div>
    )
}