import { Link } from "react-router-dom";

export default function PokemonList(props) {
    const poke = props.pokemon;

    return <ul>
        {poke.map((pok) => {
        return (
          <div className='pokemon-id' key={pok.name}>
            <Link className='pokemon-url' to={`details/${pok.name}`}>{pok.name}</Link>
          </div>
        );
      })}
      </ul>
}