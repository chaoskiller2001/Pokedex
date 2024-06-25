export default function PokemonList(props) {
    const poke = props.pokemon;

    return <ul>
        {poke.map((pok) => {
        return (
          <div className='pokemon-id' key={pok.name}>
            <a className='pokemon-url' href={pok.url}>{pok.name}</a>
          </div>
        );
      })}
      </ul>
}