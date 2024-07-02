import { useState } from "react";
import { Link } from "react-router-dom";

export default function PokemonList(props) {
    const poke = props.pokemon;
    const [favorites, setFavorites] = useState([])
    
    function storeFavorites(props) {
      let name = props
      console.log(name)
    }
    return <ul>
        {poke.map((pok) => {
        return (
          <div className='pokemon-id' key={pok.name}>
            <Link className='pokemon-url' to={`details/${pok.name}`}>{pok.name}</Link> <button onClick={storeFavorites(pok.name)}>add to favorites</button>
          </div>
        );
      })}
      </ul>
}