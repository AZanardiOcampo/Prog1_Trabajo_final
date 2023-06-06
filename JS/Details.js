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
        let characters = ""

        characters += `<section class="detalles"><img class="portadadetalle" src="${data.album.cover}" alt="">
            <p>${data.title}</p>
            <p>${data.artist.name}</p>
            <p>${data.album.title}</p>
            <button>Add to favs</button>
            <p><a href="Playlist.html">Playlist / Favourites</a></p>
            </section>` 
    
        seccion.innerHTML = characters;
  });


  apiurl = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}`

 
  
  fetch(apiurl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
   
        let seccion2 = document.querySelector(".details");
        let characters = ""
  
          characters +=  `
          <p class="centrar"><img class="portadadetalle" src="${data.cover}" alt=""></p>
          <p>${data.title}</p>
          <p>${data.artist.name}</p>
          <p>${data.title}</p>
          <p>Genre/s: ${data.genres.data[0].name}</p>
          <p>Released: ${data.release_date}</p>
          <h2>Tracks</h2>
        `

        for (let i = 0; i < data.tracks.data.length; i++) {
          characters += `
            <section class="canciones">
              <ul class="cancion">
                <a href="Details.html?id=${data.tracks.data[i].id}">
                  <div class="portadas"><img class="imgportadas" src="${data.tracks.data[i].album.cover}" alt=""></div>
                  <li><p>${data.tracks.data[i].title}</p></li>
                </a>
              </ul>
            </section>
          `;

          seccion2.innerHTML = characters;

        }})