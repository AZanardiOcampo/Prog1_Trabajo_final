let queryString = location.search;
let id = queryString.substring(4);
console.log(id);
console.log(queryString);


apiurl = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`

fetch(apiurl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

        let reproductor = document.querySelector("audio")
        let titulo = document.querySelector(".titulo")
        let artista = document.querySelector(".artistatracks")
        let album = document.querySelector(".albumtracks")
        let imagen = document.querySelector(".portadadetalle")
        let loader = document.querySelector(".loader")

        titulo.innerText = "Title: " + data.title
        artista.innerText = "Artist: " + data.artist.name
        album.innerText = "Album: " + data.album.title
        imagen.src = data.album.cover_big
        reproductor.src = data.preview
        loader.style.display = "none"
})

let recuperoStorage = localStorage.getItem("Favoritos");
let storageToArray = JSON.parse(recuperoStorage);

let favoritos = [];
if (recuperoStorage !== null) {
  favoritos = storageToArray;
}

let botonfavs = document.querySelector("#addfavs");

function agregarAFavoritos() {
  favoritos.push(id);
  let nuevofavoritos = JSON.stringify(favoritos);
  localStorage.setItem("Favoritos", nuevofavoritos);
  console.log(localStorage);
  botonfavs.innerHTML = `REMOVE FROM FAVOURITES`;
  botonfavs.removeEventListener("click", agregarAFavoritos);
  botonfavs.addEventListener("click", eliminarDeFavoritos);
  botonfavs.style.backgroundColor = "#424242";
}

function eliminarDeFavoritos() {
  let index = favoritos.indexOf(id);
  favoritos.splice(index, 1);
  let nuevofavoritos = JSON.stringify(favoritos);
  localStorage.setItem("Favoritos", nuevofavoritos);
  console.log(localStorage);
  botonfavs.innerHTML = `ADD TO FAVOURITES`;
  botonfavs.removeEventListener("click", eliminarDeFavoritos);
  botonfavs.addEventListener("click", agregarAFavoritos);
  botonfavs.style.backgroundColor = "#4c4c4c";
}

if (favoritos.includes(id)) {
  botonfavs.innerHTML = `REMOVE FROM FAVOURITES`;
  botonfavs.addEventListener("click", eliminarDeFavoritos);
  botonfavs.style.backgroundColor = "#424242";
} else {
  botonfavs.innerHTML = `ADD TO FAVOURITES`;
  botonfavs.addEventListener("click", agregarAFavoritos);
  botonfavs.style.backgroundColor = "#4c4c4c";
}
