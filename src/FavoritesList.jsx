import { Link } from "react-router-dom";

export default function FavoritesList() {
  let favorites = localStorage.getItem("favorites");
  let favoritesArray = JSON.parse(favorites);
  let favoritesSet = new Set();
  favoritesSet = new Set(favoritesArray);
  let arrayFromSet = Array.from(favoritesSet);

  function removeFavorite(props) {
    localStorage.removeItem(props);
  }

  return (
    <>
      <Link to={"/"}>Back to list</Link>
      <ul>
        {arrayFromSet.map((pokemonName) => {
          return (
            <div className="pokemon-id" key={pokemonName}>
              <Link className="pokemon-url" to={`/details/${pokemonName}`}>
                {pokemonName}
              </Link>
              <button onClick={removeFavorite(pokemonName)}>remove Favorite</button>
            </div>
          );
        })}
      </ul>
    </>
  );
}
