let queryString = location.search;
let id = queryString.substring(4);
console.log(id);
console.log(queryString);

apiurl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`

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

  apiurl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`

  fetch(apiurl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
   
        let seccion2 = document.querySelector(".details");
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
          let characters2 = ""

        for (let i = 0; i < data.tracks.data.length; i++) {
          characters2 += `
            <li>
              <a href="Details.html?id=${data.tracks.data[i].id}">
              <div class="portadas"><img class="imgportadas" src="${data.tracks.data[i].album.cover_medium}" width="400" height="600" alt=""></div>
              <p>${data.tracks.data[i].title}</p></a>
            </li>
          `
          articulo.innerHTML = characters2;
        }})

        apiurl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`

        fetch(apiurl)
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            console.log(data);
        
                let seccion = document.querySelector(".details");
                let characters = ""
                let albums = document.querySelector("h2")
        
                characters += `<section class="detalles">
                    <p><div class="centrar"><img class="portadadetalle" src="${data.picture_big}" alt=""></div></p>
                    <div class="centrar"><h2>${data.name}</h2></div>
                    </section>` 
            
                seccion.innerHTML = characters;
          });

          urlalbumsartista = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`

          fetch(urlalbumsartista)
              .then(function(response)
              {
                return response.json()  
              })
              .then(function(data)
              {
                  console.log(data);
                  let canciones = document.querySelector(".cancionesdetails")
                  let tracks = document.querySelector(".cambio")
                  tracks.innerText = "Albums"
                  let songs = ""
                  for (let i=0; i<5; i++) 
                  {
                      songs +=`<ul class="album"><a href="Details.html?id=${data.data[i].id}">
                      <div class="portadas"><img class="imgportadas" src="${data.data[i].cover}" alt=""></div>
                          <li><p>${data.data[i].title}</p></li></a>
                      </ul>`
                  }
                  
                  canciones.innerHTML+= songs
              })