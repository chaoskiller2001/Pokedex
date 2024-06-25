function PokemonDetails(props) {
    const pokeDetails = props.stat;

    return <ul>
        {pokeDetails?.map((poke) => {
        return (
          <div className='pokemon-id' key={poke.stat.name}>
            <h2 className="pokemon-stats">{poke.stat.name}: {poke.base_stat}</h2>
          </div>
        );
      })}
      </ul>
}

export default PokemonDetails