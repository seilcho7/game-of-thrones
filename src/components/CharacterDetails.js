import React from 'react';
import styles from '../CharacterDetails.module.css';
import avatar from '../data/img/avatar.png';
import allyrion from '../data/img/allyrion.jpg';
import arryn from '../data/img/arryn.jpg';
import baratheon from '../data/img/baratheon.jpg';
import bolton from '../data/img/bolton.jpg';
import cerwyn from '../data/img/cerwyn.jpg';
import clegane from '../data/img/clegane.jpg';
import crakehall from '../data/img/crakehall.jpg';
import dondarrion from '../data/img/dondarrion.jpg';
import frey from '../data/img/frey.jpg';
import greyjoy from '../data/img/greyjoy.jpg';
import hornwood from '../data/img/hornwood.jpg';
import karstark from '../data/img/karstark.jpg';
import lannister from '../data/img/lannister.jpg';
import mallister from '../data/img/mallister.jpg';
import martell from '../data/img/martell.jpg';
import mormont from '../data/img/mormont.jpg';
import seaworth from '../data/img/seaworth.jpg';
import selmy from '../data/img/selmy.jpg';
import stark from '../data/img/stark.jpg';
import swyft from '../data/img/swyft.jpg';
import targaryen from '../data/img/targaryen.jpg';
import tully from '../data/img/tully.jpg';
import tyrell from '../data/img/tyrell.jpg';
import westerling from '../data/img/westerling.jpg';

export default function CharacterDetails({character}) {
    let names = [];
    if (character.actorName) {
        names.push(<a target="_blank" rel="noopener noreferrer" href={character.actorLink ? `https://www.imdb.com${character.actorLink}` : null}>{character.actorName}</a>);
    } else if (character.actors) {
        character.actors.forEach((actor) => {
        names.push(<span><a target="_blank" rel="noopener noreferrer" href={actor.actorLink ? `https://www.imdb.com${actor.actorLink}` : null}>{actor.actorName}</a> (S: {actor.seasonsActive.join(', ')})</span>)
        });
    } else {
        names = [];
    };

    const sigils = {
        Allyrion: allyrion,
        Arryn: arryn,
        Baratheon: baratheon,
        Bolton: bolton,
        Cerwyn: cerwyn,
        Clegane: clegane,
        Crakehall: crakehall,
        Dondarrion: dondarrion,
        Frey: frey,
        Greyjoy: greyjoy,
        Hornwood: hornwood,
        Karstark: karstark,
        Lannister: lannister,
        Mallister: mallister,
        Martell: martell,
        Mormont: mormont,
        Seaworth: seaworth,
        Selmy: selmy,
        Stark: stark,
        Swyft: swyft,
        Targaryen: targaryen,
        Tully: tully,
        Tyrell: tyrell,
        Westerling: westerling
    }

    let houses = '';
    if (character.houseName) {
        houses = character.houseName;
    } else {
        houses = null;
    };

    let sigil = [];
    if (houses && typeof houses === "string") {
        sigil.push(<img alt="error" src={character.houseName && sigils[character.houseName] ? sigils[character.houseName] : null}></img>)
    } else if (houses && typeof houses === "object") {
        houses.map((s) => {
            return sigil.push(<img alt="error" src={sigils[s] ? sigils[s] : null}></img>)
        })
    }
    
    return (
        <div className={styles.detailContainer}>
            <div className={styles.imageContainer}>
                <img alt="error" className={styles.image} src={character.characterImageFull ? character.characterImageFull : avatar}></img>
            </div>
            <div className={styles.sigils}>
                {sigil.map((s) => (s))}
            </div>
            <div className={styles.details}> 
                <ul>
                    <li><strong>Name: </strong>{character.characterName}</li>
                    <li><strong>Actor: </strong>{names.length === 1 ? names[0] : names.length > 1 ? names.map((name) => (name)).reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null) : "N/A"}</li>
                    <li><strong>House: </strong>{typeof houses === "string" ? houses : houses && typeof houses === "object" ? houses.join(', ') : "N/A"}</li>
                    <li><strong>Parents: </strong>{character.parents ? character.parents.join(', ') : null || "N/A"}</li>
                    <li><strong>Siblings: </strong>{character.siblings ? character.siblings.join(', ') : null || "N/A"}</li>
                    <li><strong>Serves: </strong>{character.serves ? character.serves.join(', ') : null || "N/A"}</li>
                    <li><strong>Killed: </strong>{character.killed ? character.killed.join(', ') : null || "N/A"}</li>
                    <li><strong>Killed By: </strong>{character.killedBy ? character.killedBy.join(', ') : null || "N/A"}</li>
                </ul>
            </div>
        </div>
    )
}