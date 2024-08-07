import { useState, useEffect } from "react";
import { fetchData } from "./pokemonService";
import PokemonList from "./PokemonList";
import { Link } from "react-router-dom";

function ListView() {
  const [poke, setPoke] = useState([]);
  const [offset, setoffset] = useState(0);

  function nextPage() {
    setoffset(offset + 20);
    console.log(offset);
  }

  function previousPage() {
    if (offset > 0) {
      setoffset(offset - 20);
    }
  }
  useEffect(() => {
    fetchData(offset).then((pokemonData) => setPoke(pokemonData));
  }, [offset]);

  return (
    <>
      <PokemonList pokemon={poke} />
      <Link to={"favorites"}>favorites</Link>
      <button onClick={previousPage}>Previous Page</button>
      <button onClick={nextPage}>Next page</button>
    </>
  );
}

export default ListView;
