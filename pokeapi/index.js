function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

let pokemonAleatorio = getRandomNumber(1,150);

let fetchData = async () => {
    try{
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}`)
        let data = await res.json()
        console.log(data);

        function imprimirPokemon(pokemon){
            let nombrePokemon = document.getElementById("nombrePokemon");
            nombrePokemon.textContent = `${pokemon.name}`

            let img = document.querySelector('img');
            img.src = pokemon.sprites.front_default

            let numeroPokemon = document.querySelector('span');
            numeroPokemon.textContent = `${pokemon.id}`
        }

        imprimirPokemon(data);
    }

    catch{
        console.log('ERROR');
    }
}

let botonNuevoPokemon = document.getElementById("botonNuevoPokemon")
botonNuevoPokemon.addEventListener("click", function(){
    location.reload(fetchData())
})


fetchData();