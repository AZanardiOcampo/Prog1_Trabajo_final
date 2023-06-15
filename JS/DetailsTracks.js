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
        let botonfavs = document.querySelector("#addfavs")

        titulo.innerText = "Title: " + data.title
        artista.innerText = "Artist: " + data.artist.name
        album.innerText = "Album: " + data.album.title
        imagen.src = data.album.cover_big
        reproductor.src = data.preview

        let recuperoStorage = localStorage.getItem("Favoritos");
        let storageToArray = JSON.parse(recuperoStorage)
        
        let favoritos = []
        if(recuperoStorage !== null)
        {
          favoritos = storageToArray
        }

        if (favoritos.includes(id)) 
        {
          botonfavs.innerText = "REMOVE FROM FAVOURITES";
          botonfavs.style.backgroundColor = "#424242";
          botonfavs.addEventListener("click", function(e) {
            e.preventDefault();
            const index = favoritos.indexOf(id);
            if (index > -1) {
              favoritos.splice(index, 1);
            }
            let nuevofavoritos = JSON.stringify(favoritos);
            localStorage.setItem("Favoritos", nuevofavoritos);
            console.log(localStorage);
            botonfavs.innerText = "ADD TO FAVOURITES";
            botonfavs.style.backgroundColor = ""; // Restaurar el color original
          })
        } else 
        {
          botonfavs.addEventListener("click", function(e) {
            e.preventDefault();
            favoritos.push(id);
            let nuevofavoritos = JSON.stringify(favoritos);
            localStorage.setItem("Favoritos", nuevofavoritos);
            console.log(localStorage);
            botonfavs.innerText = "REMOVE FROM FAVOURITES";
            botonfavs.style.backgroundColor = "#424242";
          });
        }
  });
