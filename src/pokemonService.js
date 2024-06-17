import axios from "axios";
import { offset } from "./nextPage";

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon"
});

export async function fetchData() {
    const response = await api.get(`?offset=${String(offset)}&limit=20`);
    return response.data.results
};
