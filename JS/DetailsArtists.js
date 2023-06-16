let queryString = location.search;
let id = queryString.substring(4);
console.log(id);
console.log(queryString);

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
        let loader = document.querySelector(".loader")
        albums.innerText = "Albums"

        characters += `<section class="detalles">
            <p><div class="centrar"><img class="portadadetalle" src="${data.picture_big}" alt=""></div></p>
            <div class="centrar"><h2>${data.name}</h2></div>
            </section>` 
    
        loader.style.display = "none"
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
        let loader = document.querySelector(".loaderDetails")
        let songs = ""
        
        for (let i=0; i<5; i++) 
        {
            songs +=`<ul class="album"><a href="DetailsAlbums.html?id=${data.data[i].id}">
            <div class="portadas"><img class="imgportadas" src="${data.data[i].cover}" alt=""></div>
                <li><p class="ajuste">${data.data[i].title}</p></li></a>
            </ul>`
        }
        
        loader.style.display = "none"
        canciones.innerHTML+= songs
    })