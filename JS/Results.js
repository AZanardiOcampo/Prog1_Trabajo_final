let querystring = location.search
let qsToObject = new URLSearchParams(querystring)
let datoABuscar = qsToObject.get("buscar")

let endpoint = `https://api.deezer.com/search?q=${datoABuscar}`

fetch(endpoint)
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        console.log(datos)
    })
    .catch(function(e){
        console.log(e)
    })