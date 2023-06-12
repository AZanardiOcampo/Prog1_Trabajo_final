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
        let characters = ""

        characters += `<section class="detalles">
            <div class="centrar"><img class="portadadetalle" src="${data.album.cover_big}" alt=""></div>
            <p>Title: ${data.title}</p>
            <p>Artist: ${data.artist.name}</p>
            <p>Album: ${data.album.title}</p>
            <div class="favs"><button class="favoritos">ADD TO FAVOURITES</button> <a href="Playlist.html" class="favoritos">Playlist / Favourites</a></div>
            </section>` 
    
        seccion.innerHTML = characters;
        reproductor.src = data.preview
  });

