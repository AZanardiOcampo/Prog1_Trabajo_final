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

        let seccion = document.querySelector(".details");
        let reproductor = document.querySelector("audio")
        let titulo = document.querySelector(".titulo")
        let artista = document.querySelector(".artistatracks")
        let album = document.querySelector(".albumtracks")
        let imagen = document.querySelector(".portadadetalle")

        titulo.innerText = "Title: " + data.title
        artista.innerText = "Artist: " + data.artist.name
        album.innerText = "Album: " + data.album.title
        imagen.src = data.album.cover_big
        reproductor.src = data.preview
  });

  let botonfavs = document.querySelector("#addfavs")
  let recuperoStorage = localStorage.getItem("Favoritos");
  let storageToArray = JSON.parse(recuperoStorage)
  
  let favoritos = []
  if(recuperoStorage !== null)
  {
    favoritos = storageToArray
  }

  if(id in favoritos)
  {
    botonfavs.innerText = "REMOVE FROM FAVOURITES"
    botonfavs.style.backgroundcolor = "#424242";
    botonfavs.addEventListener("click", function(e)
    {
      
    })
  }
  botonfavs.addEventListener("click", function(e) 
  {
      e.preventDefault()
      favoritos.push(id)
      let nuevofavoritos = JSON.stringify(favoritos)
      localStorage.setItem("Favoritos", nuevofavoritos)
      console.log(localStorage);
      botonfavs.innerText = "REMOVE FROM FAVOURITES"
      botonfavs.style.backgroundcolor = "#424242";
  })

