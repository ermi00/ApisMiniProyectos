let URL = 'https://dog.ceo/api/breeds/image/random'

fetch(URL)
    .then(res => res.json())
    .then(res => {
        console.log(res)

        function imprimirPerro(informacion){
            let img = document.querySelector('img')
            img.src = informacion.message
        }
        
        imprimirPerro(res)
    })

