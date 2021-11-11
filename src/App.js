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

    // let pokemonElArr = this.state.pokemonList.map((pokemonItem)=>{
    //   return(
    //     <img src={pokemonItem.image} alt="Pokemon Image" />
    //   ) 
    // });

    let pokemonNameElArr = this.state.pokemonList.map((pokemon)=>{
      return(
        <div className="pokemon-item-container">
          Name: {pokemon.name}, Weight: {pokemon.weight}, Height: {pokemon.height}
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
