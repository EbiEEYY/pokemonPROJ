export const createPokemonCard = (pokemon) => {
  const types = pokemon.types.map((x) => x.type.name);
  const abilities = pokemon.abilities.map((x) => x.ability.name);
  return `<li class="card">
            <div class="stat">
             <h3 class="card__title">${pokemon.name || "noname"}</h3>
            <p class="card__text hp">${pokemon.stats[0].base_stat}HP</p> 
            </div>
            <img id="img" class="card__img" src="${pokemon.sprites.other.dream_world.front_default}" alt="pokemon" />
            <div class="bac">
             <p class="card__text type">${types}</p>
            <p class="card__text ability">ability: ${abilities}</p> 
            <button class="card__like" id="like">❤</button>
            </div>
          </li`;
};
