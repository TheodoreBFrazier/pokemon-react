import { Component } from 'react';
import './App.css';
import data from './data/sortedData';

import PokemonCard from './components/PokemonCard';

class App extends Component{
  constructor(){
    super();
    this.state = {
      pokemonList: data.pokemon,
      selectedPokemon: {}
    }
  }
  
  render(){

    let pokemonNameElArr = this.state.pokemonList.map((pokemon)=>{
      return(
        <PokemonCard pokemon={pokemon} />
      )
    })

    return(
      <div className="app" id="app-container">
        <h1>Pokémon React Code Along</h1>
        <div>
          <h3>Currently Selected Pokemon</h3>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Selected pokemon image" />
          <div>Pikachu</div>
        </div>
        <div id="pokemon-list-container">
          { pokemonNameElArr }
        </div>
      </div>
    )
  }
}

export default App;
