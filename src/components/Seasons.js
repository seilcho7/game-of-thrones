import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export default function Seasons({episodes}) {
    const season1 = episodes.filter((s) => {
        console.log(s.seasonNum)
        return s.seasonNum === 1;
    }).map(e => {
        return <Dropdown.Item href="#/action-1">{`EPISODE: ${e.episodeNum}`}</Dropdown.Item>
    })

    const season2 = episodes.filter((s) => {
        console.log(s.seasonNum)
        return s.seasonNum === 2;
    }).map(e => {
        return <Dropdown.Item href="#/action-1">{`EPISODE: ${e.episodeNum}`}</Dropdown.Item>
    })

    const season3 = episodes.filter((s) => {
        console.log(s.seasonNum)
        return s.seasonNum === 3;
    }).map(e => {
        return <Dropdown.Item href="#/action-1">{`EPISODE: ${e.episodeNum}`}</Dropdown.Item>
    })
    const season4 = episodes.filter((s) => {
        console.log(s.seasonNum)
        return s.seasonNum === 4;
    }).map(e => {
        return <Dropdown.Item href="#/action-1">{`EPISODE: ${e.episodeNum}`}</Dropdown.Item>
    })
    const season5 = episodes.filter((s) => {
        console.log(s.seasonNum)
        return s.seasonNum === 5;
    }).map(e => {
        return <Dropdown.Item href="#/action-1">{`EPISODE: ${e.episodeNum}`}</Dropdown.Item>
    })
    const season6 = episodes.filter((s) => {
        console.log(s.seasonNum)
        return s.seasonNum === 6;
    }).map(e => {
        return <Dropdown.Item href="#/action-1">{`EPISODE: ${e.episodeNum}`}</Dropdown.Item>
    })
    const season7 = episodes.filter((s) => {
        console.log(s.seasonNum)
        return s.seasonNum === 7;
    }).map(e => {
        return <Dropdown.Item href="#/action-1">{`EPISODE: ${e.episodeNum}`}</Dropdown.Item>
    })

    const season8 = episodes.filter((s) => {
        console.log(s.seasonNum)
        return s.seasonNum === 8;
    }).map(e => {
        return <Dropdown.Item href="#/action-1">{`EPISODE: ${e.episodeNum}`}</Dropdown.Item>
    })

    console.log(season1)
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title="SEASON 1">
                {season1}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="SEASON 2">
                {season2}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="SEASON 3">
                {season3}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="SEASON 4">
                {season4}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="SEASON 5">
                {season5}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="SEASON 6">
                {season6}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="SEASON 7">
                {season7}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="SEASON 8">
                {season8}
            </DropdownButton>
        </div>
    )
}