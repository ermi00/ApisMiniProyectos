let URL = 'https://dog.ceo/api/breeds/image/random'

fetch(URL)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        function imprimirPerro(informacion){
            let img = document.querySelector('img')
            img.src = informacion.message
        }

        let boton = document.querySelector('button')
        boton.addEventListener('click', function(){
            location.reload(imprimirPerro(response))
        })
        
        imprimirPerro(response)
    })

