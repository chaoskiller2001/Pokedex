import { useState, useEffect } from 'react'
import './App.css'
import { fetchData } from './pokemonService';
import PokemonList from './PokemonList';
import NextPage, { offset } from './nextPage';
import { PreviousPage } from './nextPage';
function App() {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    fetchData().then((pokemonData) => setPoke(pokemonData));
  }, [{offset}]);
  
  return (
    <>
      <PokemonList pokemon={poke} />
      <button onClick={NextPage}>Next page</button>
      <button onClick={PreviousPage}>Previous Page</button>
    </>
  )
}

export default App
