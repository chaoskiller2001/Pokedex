import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchDetails } from "./pokemonService"
import PokemonDetails from "./PokemonDetails"

function DetailsView() {
    const { name } = useParams()
    const [pokemDetails, setPokeDetails] = useState({});
    const [pokeStats, setPokeStats] = useState([])

    useEffect(() => {
        fetchDetails(name).then((pokemonDetails) => setPokeDetails(pokemonDetails))
        fetchDetails(name).then((pokemonDetails) => setPokeStats(pokemonDetails.stats))
    }, [])
    console.log(pokemDetails);

    return <>
        <Link id="123" to="/">Back to list</Link>
        <h1>{name}</h1>
        <h2>height: {pokemDetails.height}</h2>
        <h2>weight: {pokemDetails.weight}</h2>
        <PokemonDetails stat={pokeStats} />
    </>

    
}

export default DetailsView