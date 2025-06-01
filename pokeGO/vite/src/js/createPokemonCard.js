export const createPokemonCard = (pokemon) => {
    return `<li class="card">
            <div class="stat">
             <h3 class="card__title">${pokemon.name || "noname"}</h3>
            <p class="card__text hp">48HP</p> 
            </div>
            <img class="card__img" src="${pokemon.Img}" alt="pokemon" />
            <div class="bac">
             <p class="card__text type">normal</p>
            <p class="card__text ability">limber imposter</p> 
            </div>
            <button class="card__btn like"><img class="icon-heart" src="pokeGO/vite/src/svg/heart-like-.svg" alt="like"></img></button>
          </li`;
};
