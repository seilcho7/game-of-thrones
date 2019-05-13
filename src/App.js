import React from 'react';
import './App.css';

import {
  Link,
  Route
} from 'react-router-dom';

import characters from './data/characters';
import episodes from './data/episodes';

import Home from './components/Home';
import Characters from './components/Characters';
import Searchbar from './components/Searchbar';
import CharacterDetails from './components/CharacterDetails';
import Seasons from './components/Seasons';
import Episode from './components/Episode';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: characters.characters,
      inputText: '',
      charIndex: '',
      episodes: episodes.episodes,
      episode: ''
    }
  }

  render() {
    return (
      <div>
        <div>
          <div className="title">
            #
          </div>
          <div className="soundcloud">
            <iframe title="soundcloud" width="20px" height="20px" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/30990827&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"></iframe>
          </div>
        </div>
        <div>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/characters">CHARACTERS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/episodes">EPISODES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/musics">MAP</Link>
            </li>
          </ul>
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/characters'
          render={(props) => (
            <div>
              <div className="char-container">
              <div className="list-search">
                <Searchbar text={this.state.inputText} handleChange={this._setInput} />
                <div className="list">
                  <Characters {...props} search={this.state.inputText} characters={this.state.characters} handleClick={this._setIndex}/>
                </div>
              </div>
                <div className="detail">
                {
                  this.state.charIndex !== '' ? 
                    <CharacterDetails character={this.state.characters[this.state.charIndex]} /> : null} 
                </div>
              </div>
            </div>
          )} />
        <Route path='/episodes'
          render={(props) => (
            <div>
            <Seasons {...props} episodes={this.state.episodes} showEpisode={this._setEpisode} />
            <Episode episode={this.state.episode} />
            </div>
          )} />
      </div>
    );
  }

  _setInput = (inputText) => {
    this.setState({
      inputText
    })
  }

  _setIndex = (charIndex) => {
    this.setState({
      charIndex
    })
  }

  _setEpisode = (e) => {
    console.log(this.state.episode);
    this.setState({
      episode: e
    })
  }
}

export default App;
