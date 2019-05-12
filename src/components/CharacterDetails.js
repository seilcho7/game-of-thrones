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
        names.push(<span><a target="_blank" href={actor.actorLink ? `https://www.imdb.com${actor.actorLink}` : null}>{actor.actorName}</a> (Seasons: {actor.seasonsActive.join(', ')})</span>)
        });
    } else {
        names = [];
    }
 
    return (
        <div>
            <img className={styles.image} src={character.characterImageFull ? character.characterImageFull : avatar}></img>
            <div className={styles.details}>
            <div>
                <ul>
                    <li>Name:</li>
                    <li>Actor:</li>
                    <li>House:</li>
                    <li>Parents:</li>
                    <li>Siblings:</li>
                    <li>Serves:</li>
                    <li>Killed:</li>
                    <li>Killed By:</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>{character.characterName}</li>
                    <li>{names.length === 1 ? names[0] : names.length > 1 ? names.map((name) => (name)).reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null) : "N/A"}</li>
                    <li>{character.houseName || "N/A"}</li>
                    <li>{character.parents ? character.parents.join(', ') : null || "N/A"}</li>
                    <li>{character.siblings ? character.siblings.join(', ') : null || "N/A"}</li>
                    <li>{character.serves ? character.serves.join(', ') : null || "N/A"}</li>
                    <li>{character.killed ? character.killed.join(', ') : null || "N/A"}</li>
                    <li>{character.killedBy ? character.killedBy.join(', ') : null || "N/A"}</li>
                </ul>
            </div>
            </div>
            {/* <ul>
                <li>Name: {character.characterName}</li>
                <li>Actor: {names.length === 1 ? names[0] : names.length > 1 ? names.map((name) => (name)).reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null) : "N/A"}</li>         
                <li>House: {character.houseName || "N/A"}</li>
                <li>Parents: {character.parents ? character.parents.join(', ') : null || "N/A"}</li>
                <li>Siblings: {character.siblings ? character.siblings.join(', ') : null || "N/A"}</li>
                <li>Serves: {character.serves ? character.serves.join(', ') : null || "N/A"}</li>
                <li>Killed: {character.killed ? character.killed.join(', ') : null || "N/A"}</li>
                <li>Killed By: {character.killedBy ? character.killedBy.join(', ') : null || "N/A"}</li>
            </ul> */}
        </div>
    )
}