
// import { root } from "../root";


let favorites = JSON.parse(localStorage.getItem('pokemonFavorites')) || [];

export const removeFav = (id) => {
    const dataName = document.querySelector(`[data-id="${id}"]`);
    if (dataName) {
        dataName.remove();
    }
}

export const showLiked = () => {
    const btn =  document.getElementById("BTNlist");
    const modal = document.querySelector(".modal");
    const remove =  document.querySelector(".modal__btn");

    btn.addEventListener("click", () => {
        modal.classList.toggle("show");
        createFavCard();
    })
    remove.addEventListener("click", () => {
        modal.classList.remove("show");
    })
}

export const addFavorite = () => {
    const pokeLike = document.getElementById("like");
    pokeLike.addEventListener("click", (event) => {
        let card = event.target.closest(".card");
        let id = card.dataset.id;
        if (!event.target.classList.contains("liked")) {
            event.target.classList.add("liked");
            favorites.unshift(id);
            console.log("yep");
        } else {
            event.target.classList.remove("liked");
            favorites = favorites.filter((e) => e !== id);
            removeFav(id);
            console.log("no");

        }
        favorites.forEach(() => { });
        favorites = Array.from(new Set(favorites));
        localStorage.setItem("favorites", JSON.stringify(favorites));
    });
}



