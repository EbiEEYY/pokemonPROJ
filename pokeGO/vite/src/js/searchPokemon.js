import { getPokemon } from "./api/getPokemon";
import { createPokemonCard } from "./createPokemonCard.js";
import { root } from "./root.js";
import { addFavorite } from "./favorite/addFavorite";


export const searchPokemon = async(e) => {
    root.pokemonList.innerHTML = ""
    const pokemonName = root.nameInput.value
    const pokemon = await getPokemon(pokemonName)
    root.nameInput.value = ""
    const pokemonEl = createPokemonCard(pokemon)
    root.pokemonList.insertAdjacentHTML("beforeend", pokemonEl)
    addFavorite();
};
