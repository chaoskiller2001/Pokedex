import { useState } from "react";
import { Link } from "react-router-dom";

export default function PokemonList(props) {
  const poke = props.pokemon;

  function storeFavorites(name) {
    // Get the favorites element out of localstorage AS STRING
    let favorites = localStorage.getItem("favorites");
    let favoritesSet = new Set();

    if (favorites) {
      // Deserialize the string into a JS array
      let favoritesArray = JSON.parse(favorites);
      // Convert the array into a set (array of unique elements)
      favoritesSet = new Set(favoritesArray);
    }

    favoritesSet.add(name);

    let arrayFromSet = Array.from(favoritesSet);
    let stringifiedArray = JSON.stringify(arrayFromSet);

    localStorage.setItem("favorites", stringifiedArray);

  }
  return <ul>
    {poke.map((pok) => {
      return (
        <div className='pokemon-id' key={pok.name}>
          <Link className='pokemon-url' to={`details/${pok.name}`}>{pok.name}</Link> <button onClick={() => storeFavorites(pok.name)}>add to favorites</button>
        </div>
      );
    })}
  </ul>
}