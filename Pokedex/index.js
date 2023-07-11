console.log("Hola");

let URL = 'https://pokeapi.co/api/v2/pokemon/'

fetch(URL)
    .then(res => res.json())
    .then(res => {
        console.log(res);
    })