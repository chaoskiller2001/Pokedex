import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon"
  });

function App() {
  const [poke, setPoke] = useState([]);
  
  
  useEffect(()=>{
    async function fetchData() {
      api.get('?offset=0&limit=20').then((response) => {
        setPoke(response.data.results)
        console.log(response.data)
        
     });
    };
    fetchData();
    console.log(poke);  
  }, []);
  return (
    <>
      <div className='app'>
        <h2>pokemons</h2>
        {poke.map((pok) => {
          return (
            <div className='pokemon-id' key={pok.name}>
              <h1 className='pokemon-name'>{pok.name}</h1>
              <p className='pokemon-url'>{pok.url}</p>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default App
