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
        let tracks = document.querySelector(".cambio")
        tracks.style.display="none"

        characters += `<section class="detalles">
            <div class="centrar"><img class="portadadetalle" src="${data.album.cover_big}" alt=""></div>
            <p>Title: ${data.title}</p>
            <p>Artist: ${data.artist.name}</p>
            <p>Album: ${data.album.title}</p>
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
        let tracks = document.querySelector(".cambio")
        tracks.innerText = "Tracks"
        let characters = ""
  
          characters +=  `<section class="detalles">
          <div class="centrar"><img class="portadadetalle" src="${data.cover_big}" alt=""></div>
          <p>${data.title}</p>
          <p>Artist: ${data.artist.name}</p>
          <p>Genre/s: ${data.genres.data[0].name}</p>
          <p>Released: ${data.release_date}</p>
          </section>`

          seccion2.innerHTML = characters;

          let articulo = document.querySelector(".cancionesdetails")
          let containeralbums = document.querySelector(".albumsdetails")
          containeralbums.style.display="none"
          let characters2 = ""

        for (let i = 0; i < data.tracks.data.length; i++) {
          characters2 += `<ul class="songs">
              <a href="Details.html?id=${data.tracks.data[i].id}">
              <li>${i}. ${data.tracks.data[i].title}</li></a>
              </ul>
          `
          articulo.innerHTML = characters2;
        }})

        apiurl = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`

        fetch(apiurl)
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            console.log(data);
        
                let seccion = document.querySelector(".details");
                let characters = ""
                let albums = document.querySelector(".cambio")
                albums.innerText = "Albums"
        
                characters += `<section class="detalles">
                    <p><div class="centrar"><img class="portadadetalle" src="${data.picture_big}" alt=""></div></p>
                    <div class="centrar"><h2>${data.name}</h2></div>
                    </section>` 
            
                seccion.innerHTML = characters;
          });

          urlalbumsartista = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/albums`

          fetch(urlalbumsartista)
              .then(function(response)
              {
                return response.json()  
              })
              .then(function(data)
              {
                  console.log(data);
                  let canciones = document.querySelector(".albumsdetails")
                  let containercanciones = document.querySelector(".cancionesdetails")
                  containercanciones.style.display="none"
                  let songs = ""
                  for (let i=0; i<5; i++) 
                  {
                      songs +=`<ul class="album"><a href="Details.html?id=${data.data[i].id}">
                      <div class="portadas"><img class="imgportadas" src="${data.data[i].cover}" alt=""></div>
                          <li><p class="ajuste">${data.data[i].title}</p></li></a>
                      </ul>`
                  }
                  
                  canciones.innerHTML+= songs
              })