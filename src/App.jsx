import { useState, useEffect } from 'react'
import './App.css'
import { fetchData } from './pokemonService';
import PokemonList from './PokemonList';
function App() {
  const [poke, setPoke] = useState([]);
  const [offset, setoffset] = useState(0);

  function nextPage() {
    setoffset(offset+20);
    console.log(offset);
  };

  function previousPage() {
    if(offset>0){
      setoffset(offset-20);
    };
  };
  useEffect(() => {
    fetchData(offset).then((pokemonData) => setPoke(pokemonData));
  }, [offset]);
  
  return (
    <>
      <PokemonList pokemon={poke} />
      <button onClick={nextPage}>Next page</button>
      <button onClick={previousPage}>Previous Page</button>
    </>
  )
}

export default App
