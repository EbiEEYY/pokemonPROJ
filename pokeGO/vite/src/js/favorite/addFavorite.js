import { root } from "../root";


export const addFavorite = async () => {
    const pokeLike = root.likePokemon.value
    pokeLike.addEventListener("click", (event) => {
let id = event.target.dataset.pokemonId;
console.log("ID покемона:", id);


    });
}