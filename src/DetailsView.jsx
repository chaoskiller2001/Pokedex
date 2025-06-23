import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchDetails } from "./pokemonService";
import PokemonDetails from "./PokemonDetails";

function DetailsView() {
  const { name } = useParams();
  const [pokemDetails, setPokeDetails] = useState({});

  useEffect(() => {
    fetchDetails(name).then((pokemonDetails) => setPokeDetails(pokemonDetails));
  }, []);

  return (
    <>
      <Link to="/">Back to list</Link>
      <h1>{name}</h1>
      <img src={`https://img.pokemondb.net/artwork/${name}.jpg`}></img>
      <h2>height: {pokemDetails.height}</h2>
      <h2>weight: {pokemDetails.weight}</h2>
      <PokemonDetails stat={pokemDetails.stats} />
    </>
  );
}

export default DetailsView;
