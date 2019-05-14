import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import styles from '../Seasons.module.css';

export default function Seasons({episodes, showEpisode}) {
    const season1 = episodes.filter((s) => {
        return s.seasonNum === 1;
    }).map((e, i) => {
        // console.log(e);
        return <Dropdown.Item key={i} onClick={() => (showEpisode(e))}>{`Episode: ${e.episodeNum}`}</Dropdown.Item>
    })

    const season2 = episodes.filter((s) => {
        return s.seasonNum === 2;
    }).map((e, i) => {
        return <Dropdown.Item key={i} onClick={() => (showEpisode(e))}>{`Episode: ${e.episodeNum}`}</Dropdown.Item>
    })

    const season3 = episodes.filter((s) => {
        return s.seasonNum === 3;
    }).map((e, i) => {
        return <Dropdown.Item key={i} onClick={() => (showEpisode(e))}>{`Episode: ${e.episodeNum}`}</Dropdown.Item>
    })
    const season4 = episodes.filter((s) => {
        return s.seasonNum === 4;
    }).map((e, i) => {
        return <Dropdown.Item key={i} onClick={() => (showEpisode(e))}>{`Episode: ${e.episodeNum}`}</Dropdown.Item>
    })
    const season5 = episodes.filter((s) => {
        return s.seasonNum === 5;
    }).map((e, i) => {
        return <Dropdown.Item key={i} onClick={() => (showEpisode(e))}>{`Episode: ${e.episodeNum}`}</Dropdown.Item>
    })
    const season6 = episodes.filter((s) => {
        return s.seasonNum === 6;
    }).map((e, i) => {
        return <Dropdown.Item key={i} onClick={() => (showEpisode(e))}>{`Episode: ${e.episodeNum}`}</Dropdown.Item>
    })
    const season7 = episodes.filter((s) => {
        return s.seasonNum === 7;
    }).map((e, i) => {
        return <Dropdown.Item key={i} onClick={() => (showEpisode(e))}>{`EPISODE: ${e.episodeNum}`}</Dropdown.Item>
    })
    const season8 = episodes.filter((s) => {
        return s.seasonNum === 8;
    }).map((e, i) => {
        return <Dropdown.Item key={i} onClick={() => (showEpisode(e))}>{`Episode: ${e.episodeNum}`}</Dropdown.Item>
    })

    return (
        <div className={styles.seasons}>
            <DropdownButton id="dropdown-basic-button" title="Season 1">
                {season1}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Season 2">
                {season2}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Season 3">
                {season3}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Season 4">
                {season4}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Season 5">
                {season5}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Season 6">
                {season6}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Season 7">
                {season7}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Season 8">
                {season8}
            </DropdownButton>
        </div>
    )
}