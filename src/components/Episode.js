import React from 'react';
import styles from '../Episode.module.css';

export default function Episode({episode}) {
    let locations = [];
    episode.openingSequenceLocations.map((name) => {
        return locations.push(name);
    });

    return (
        <div className={styles.episodes}>
        <div className={styles.image}>
            <img src="https://i.imgur.com/lIqDx7c.jpg"></img>
        </div>
            <ul className={styles.details}>
                <li><strong>Season: </strong>{episode.seasonNum}</li>
                <li><strong>Episode: </strong>{episode.episodeNum}</li>
                <li><strong>Title: </strong><a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com${episode.episodeLink}`}>{episode.episodeTitle}</a></li>
                <li><strong>Air Date: </strong>{episode.episodeAirDate}</li>
                <li><strong>Description: </strong>{episode.episodeDescription || "N/A"}</li>
                <li><strong>Locations: </strong>{locations.join(', ') || "N/A"}</li>
            </ul>
        </div>
    )
}