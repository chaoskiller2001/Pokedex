import axios from "axios";


const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon"
});

export async function fetchData(offset) {
    const response = await api.get(`?offset=${offset}&limit=20`);
    return response.data.results
};

export async function fetchDetails(name) {
    const response = await api.get(`/${name}`);
    console.log(response)
    return response.data
};
