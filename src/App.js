import { Component } from 'react';
import './App.css';
import data from './data/sortedData';

class App extends Component{
  constructor(){
    super();
    this.state = {
      pokemonList: data.pokemon
    }
  }
  
  render(){

    let pokemonNameElArr = this.state.pokemonList.map((pokemon)=>{
      return(
        <div className="pokemon-item-container">
          <img src={pokemon.image} alt="Pokemon Image" />
          <div>Name: {pokemon.name}</div>
          <div>Weight: {pokemon.weight}</div>
          <div>Height: {pokemon.height}</div>
          <div>Health: {pokemon.hp}</div>
          <div>Attack: {pokemon.atk}</div>
          <div>Defense: {pokemon.def}</div>
        </div>
      )
    })

    return(
      <div className="app" id="app-container">
        <h1>Pokémon React Code Along</h1>
        <div id="pokemon-list-container">
          { pokemonNameElArr }
        </div>
        {/* { pokemonElArr } */}
      </div>
    )
  }
}

export default App;
