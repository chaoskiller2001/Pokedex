import { Link } from "react-router-dom";

export default function FavoritesList() {
  let favorites = localStorage.getItem("favorites");
  let favoritesArray = JSON.parse(favorites);
  let favoritesSet = new Set();
  favoritesSet = new Set(favoritesArray);
  let arrayFromSet = Array.from(favoritesSet);

  return (
    <>
      <Link to={"/"}>Back to list</Link>
      <ul>
        {arrayFromSet.map((names) => {
          return (
            <div className="pokemon-id" key={names}>
              <Link className="pokemon-url" to={`/details/${names}`}>
                {names}
              </Link>
            </div>
          );
        })}
      </ul>
    </>
  );
}
