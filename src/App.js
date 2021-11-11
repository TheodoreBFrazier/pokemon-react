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
    console.log(this.state.pokemonList);

    let pokemonElArr = this.state.pokemonList.map((pokemonItem)=>{
      return <img src={pokemonItem.image} alt="Pokemon Image" />
    });

    // console.log(pokemonElArr);
    
    // [
    //   {
    //     name: "Bulbasaur"
    //   },
    //   {
    //     name: "Ivysaur"
    //   }
    // ]

    // [
    //   <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="" />,
    //   <img src="" alt="" />,
    // ]

    return(
      <div>
        <h1>Pokémon React Code Along</h1>
        { pokemonElArr }
      </div>
    )
  }
}

export default App;
