import './style.css'

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));


async function fetchPOK() {
    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error("non pokemon");
        }

        const data = await response.json();
        console.log(data);

        const pokemonImg = data.sprites.front_default;

        const card = document.getElementById("pokeCard");
        const pokeImg = document.getElementById("pokemonImg");
        
        pokeImg.src = pokemonImg;
        pokeImg.style.display = "block"; 

    }
    catch (error) {
        console.error(error);
        alert("pokemon not found");
    }
}

window.fetchPOK = fetchPOK;
