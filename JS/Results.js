let querystring = location.search
let qsToObject = new URLSearchParams(querystring)
let datoABuscar = qsToObject.get("buscar")

let busqueda = document.querySelector("h1")
busqueda.innerHTML += `<h1>Resultados de busqueda para <i>${datoABuscar}</i></h1>`

let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/search?buscar=${datoABuscar}`

fetch(endpoint)
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        console.log(datos);
        let resultados = document.querySelector("h1");
        let contenidobuscado = document.querySelector("section");

        if (datos.results.length==0){
            resultados.innerText = `No hubo resultados para su busqueda`
        } 

        else{
            for(i=0; i<5; i++) {
                contenidobuscado.innerHTML += 
                `
                
                `
        }}


    })
    .catch(function(e){
        console.log(e)
    })