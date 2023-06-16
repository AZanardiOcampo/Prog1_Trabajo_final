let querystring = location.search
let qsToObject = new URLSearchParams(querystring)
let datoABuscar = qsToObject.get("q")

let busqueda = document.querySelector("h1")
busqueda.innerHTML += `<h2>Search results for <i>${datoABuscar}</i></h2>`

let botonTracks = document.querySelector(".botontracks")
let botonAlbums = document.querySelector(".botonalbums")
let botonArtists = document.querySelector(".botonartists")
let canciones = document.querySelector(".canciones")
let albums = document.querySelector(".albums")
let artistas = document.querySelector(".artistas")
let todos = document.querySelector(".botontodos")
let h2tracks = document.querySelector(".h2tracks")
let h2albums = document.querySelector(".h2albums")
let h2artists = document.querySelector(".h2artists")
 
botonTracks.addEventListener("click", function() {
    canciones.style.display = "flex";
    albums.style.display = "none";
    artistas.style.display = "none";
    h2tracks.style.display = "flex";
    h2albums.style.display = "none";
    h2artists.style.display = "none";
});

botonAlbums.addEventListener("click", function() {
    canciones.style.display = "none";
    albums.style.display = "flex";
    artistas.style.display = "none";
    h2tracks.style.display = "none";
    h2albums.style.display = "flex";
    h2artists.style.display = "none";
});

botonArtists.addEventListener("click", function() {
    canciones.style.display = "none";
    albums.style.display = "none";
    artistas.style.display = "flex";
    h2tracks.style.display = "none";
    h2albums.style.display = "none";
    h2artists.style.display = "flex";
});

todos.addEventListener("click", function() {
    canciones.style.display = "flex";
    albums.style.display = "flex";
    artistas.style.display = "flex";
    h2tracks.style.display = "flex";
    h2albums.style.display = "flex";
    h2artists.style.display = "flex";
});

let loader = document.querySelector(".loader")

let endpointCanciones = `https://api.allorigins.win/raw?url=https://api.deezer.com/search/track?q=${datoABuscar}`

fetch(endpointCanciones)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

        if (data.data.length == 0){
            let hola = document.querySelector(".canciones")
            hola.innerHTML += `<h2><small>No results :(</small></h2>`
        }

        let canciones = document.querySelector(".canciones")
        let songs = ""
        let loader = document.querySelector(".loaderTracks")
        
        for (let i=0; i<7; i++) 
        {
            songs +=`<ul class="cancion"><a href="DetailsTracks.html?id=${data.data[i].id}">
            <div class="portadas"><img class="imgportadas" src="${data.data[i].album.cover}" alt=""></div>
                <li><p class="ajuste">${data.data[i].title}</p></li>
                <li><p class="ajuste">${data.data[i].artist.name}</p></li></a>
            </ul>`
        }
        
        loader.style.display = "none"
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
            hola.innerHTML += `<h2><small>No results :(</small></h2>`
        }

        let albumshtml = document.querySelector(".albums")
        let albums = ""
        let loader = document.querySelector(".loaderAlbums")

        for (let i=0; i<7; i++) 
        {
            albums +=`<ul class="album"><a href="DetailsAlbums.html?id=${data.data[i].id}">
                <li class="portadas"><img class="imgportadas" src="${data.data[i].cover}" alt=""></li>
                <li><p class="ajuste">${data.data[i].title}</p></li>
                <li><p class="ajuste">${data.data[i].artist.name}</p></li></a>
            </ul>`
        }

        loader.style.display = "none"
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
            hola.innerHTML += `<h2><small>No results :(</small></h2>`
        }

        let albumshtml = document.querySelector(".artistas")
        let albums = ""
        let loader = document.querySelector(".loaderArtists")

        for (let i=0; i<7; i++) 
        {
            albums +=`<ul class="artista">
                <a href="DetailsArtists.html?id=${data.data[i].id}">
                <li><img src="${data.data[i].picture}" class="portadas2" alt=""></li>
                <li><div class="centrar"><p class="ajuste">${data.data[i].name}</p></div></li></a>
            </ul>`
        }
        loader.style.display = "none"
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
        alert("This field is required!")
    }  else {
            this.submit()
    }
})