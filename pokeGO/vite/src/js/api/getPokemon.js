import axios from "./axiosSets.js";

export const getPokemon = async (pockemonName) => {
  try {
    const response = await axios.get(`/pokemon/${pockemonName}`);
    return response.data;
    
  } catch (error) {
    console.error(error);
    alert("pokemon not found");
  }
};