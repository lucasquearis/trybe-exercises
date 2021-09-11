import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    }
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        this.setState({characters: data.results})
      })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return(
      <div>
        <h1>
          Rick and Morty Characters:
        </h1>
        <div className="body">
          { characters.map(({ name, image }) => {
            return(
              <div className="container" key={name}>
                <h3>{ name }</h3>
                <img src={image} alt={name} />
              </div>
            )
          }) }
        </div>
      </div>
    );
  }
}

export default App;
