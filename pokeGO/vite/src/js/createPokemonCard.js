export const createPokemonCard = (pokemon) => {
  return `<li>
    ${pokemon.name || "no name"}
    </li>`;
};
