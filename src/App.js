import React from 'react';
import './App.css';

import {
  Link,
  Route
} from 'react-router-dom';

import characters from './data/characters';

import Home from './components/Home';
import Characters from './components/Characters';
import Searchbar from './components/Searchbar';
import CharacterDetails from './components/CharacterDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: characters.characters,
      inputText: '',
      charIndex: ''
    }
  }

  render() {
    return (
      <div>
        <div className="title">
          #
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
              <Link className="nav-link" to="/">WHAT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">NO</Link>
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
}

export default App;
