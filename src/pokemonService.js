import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon"
});


