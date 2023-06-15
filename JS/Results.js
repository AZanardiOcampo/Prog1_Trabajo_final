let querystring = location.search
let qsToObject = new URLSearchParams(querystring)
let datoABuscar = qsToObject.get("q")

let busqueda = document.querySelector("h1")
busqueda.innerHTML += `<h1>Resultados de busqueda para <i>${datoABuscar}</i></h1>`

let endpointCanciones = `https://api.allorigins.win/raw?url=https://api.deezer.com/search/track?q=${datoABuscar}`

fetch(endpointCanciones)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

        if (data.data.length == 0){
            let hola = document.querySelector(".canciones")
            hola.innerHTML += `<h2><small>No hubo resultados :(</small></h2>`
        }

        let canciones = document.querySelector(".canciones")
        let songs = ""
        
        for (let i=0; i<7; i++) 
        {
            songs +=`<ul class="cancion"><a href="DetailsTracks.html?id=${data.data[i].id}">
            <div class="portadas"><img class="imgportadas" src="${data.data[i].album.cover}" alt=""></div>
                <li><p class="ajuste">${data.data[i].title}</p></li>
                <li><p class="ajuste">${data.data[i].artist.name}</p></li></a>
            </ul>`
        }
        
        canciones.innerHTML += songs

    })
    .catch(function(e){
        console.log(e)
    })

let endpointAlbumes = `https://api.allorigins.win/raw?url=https://api.deezer.com/search/album?q=${datoABuscar}`

fetch(endpointAlbumes)
    .then(function(response)
    {
      return response.json()  
    })
    .then(function(data)
    {
        console.log(data);

        if (data.data.length == 0){
            let hola = document.querySelector(".albums")
            hola.innerHTML += `<h2><small>No hubo resultados :(</small></h2>`
        }

        let albumshtml = document.querySelector(".albums")
        let albums = ""
        for (let i=0; i<7; i++) 
        {
            albums +=`<ul class="album"><a href="DetailsAlbums.html?id=${data.data[i].id}">
                <li class="portadas"><img class="imgportadas" src="${data.data[i].cover}" alt=""></li>
                <li><p class="ajuste">${data.data[i].title}</p></li>
                <li><p class="ajuste">${data.data[i].artist.name}</p></li></a>
            </ul>`
        }
        
        albumshtml.innerHTML+= albums
    })
    .catch(function(error)
    {
        console.log("El error es: " + error);
    })

let endpointArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/search/artist?q=${datoABuscar}`

fetch(endpointArtistas)
    .then(function(response)
    {
      return response.json()  
    })
    .then(function(data)
    {
        console.log(data);

        if (data.data.length == 0){
            let hola = document.querySelector(".artistas")
            hola.innerHTML += `<h2><small>No hubo resultados :(</small></h2>`
        }

        let albumshtml = document.querySelector(".artistas")
        let albums = ""
        for (let i=0; i<7; i++) 
        {
            albums +=`<ul class="artista">
                <a href="DetailsArtists.html?id=${data.data[i].id}">
                <li><img src="${data.data[i].picture}" class="portadas2" alt=""></li>
                <li><div class="centrar"><p>${data.data[i].name}</p></div></li></a>
            </ul>`
        }
        
        albumshtml.innerHTML+= albums
    })
    .catch(function(error)
    {
        console.log("El error es: " + error);
    })


let form = document.querySelector("form");
let input = document.querySelector("input");

form.addEventListener("submit", function(e){
    e.preventDefault();
                
    if(input.value === ""){
        alert("El campo es obligatorio!")
    }  else {
            this.submit()
    }
})