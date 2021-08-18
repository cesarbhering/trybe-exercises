import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        {/* {this.fetchCharacters()} */}
        <div className="body">
          {characters.map((char) => {
            return (
            <div className="container" key={char.name}>
             <h3>{char.name}</h3>
             <img src={char.image} alt={char.name}/>
            </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
