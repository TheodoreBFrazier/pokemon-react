import { Component } from 'react';
import './App.css';
import data from './data/sortedData';

import PokemonCard from './components/PokemonCard';

class App extends Component{
  constructor(){
    super();
    this.state = {
      pokemonList: data.pokemon,
      selectedPokemon: {name: "No Pokemon Selected", image:"https://via.placeholder.com/100"}
    }
  }
  
  handlePokemonClick=(pokemon)=>{
    this.setState({
      selectedPokemon: pokemon
    });
  }

  render(){

    let pokemonNameElArr = this.state.pokemonList.map((pokemon)=>{
      return(
        <PokemonCard key={pokemon.id} pokemon={pokemon} handlePokemonClick={this.handlePokemonClick} />
      )
    });

    return(
      <div className="app" id="app-container">
        <h1>Pokémon React Code Along</h1>
        <div>
          <h3>Currently Selected Pokemon</h3>
          <img src={this.state.selectedPokemon.image} alt="Selected pokemon image" />
          <div>{this.state.selectedPokemon.name}</div>
        </div>
        <div id="pokemon-list-container">
          { pokemonNameElArr }
        </div>
      </div>
    )
  }
}

export default App;
