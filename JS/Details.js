let queryString = location.search;
let id = queryString.substring(4);
console.log(id);
console.log(queryString);

apiurl = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`

let seccion = document.querySelector(".detalles");

fetch(apiurl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

        let characters = ""

        characters += `<img class="portadadetalle" src="${data.album.cover}" alt="">
            <p>${data.title}</p>
            <p>${data.artist.name}</p>
            <p>${data.album.title}</p>
            <button>Add to favs</button>
            <p><a href="Playlist.html">Playlist / Favourites</a></p>` 
        
    
        seccion.innerHTML = characters;
  });
