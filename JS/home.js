

let urlcanciones = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks"

fetch(urlcanciones)
    .then(function(response)
    {
      return response.json()  
    })
    .then(function(data)
    {
        console.log(data);
        let canciones = document.querySelector(".canciones")
        let songs = ""
        let loader = document.querySelector(".loaderTracks")
        
        for (let i=0; i<6; i++) 
        {
            songs +=`<ul class="cancion"><a href="DetailsTracks.html?id=${data.data[i].id}">
            <div class="portadas"><img class="imgportadas" src="${data.data[i].album.cover}" alt=""></div>
                <li><p class="ajuste">${data.data[i].title}</p></li>
                <li><p class="ajuste">${data.data[i].artist.name}</p></li></a>
            </ul>`
        }
        
        loader.style.display = "none"
        canciones.innerHTML+= songs
    })
    .catch(function(error)
    {
        console.log("El error es: " + error);
    })

    let urlalbums = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums"

    fetch(urlalbums)
        .then(function(response)
        {
          return response.json()  
        })
        .then(function(data)
        {
            console.log(data);
            let albumshtml = document.querySelector(".albums")
            let albums = ""
            let loader = document.querySelector(".loaderAlbums")

            for (let i=0; i<6; i++) 
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


        let urlartistas = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists"

        fetch(urlartistas)
            .then(function(response)
            {
              return response.json()  
            })
            .then(function(data)
            {
                console.log(data);
                let albumshtml = document.querySelector(".artistas")
                let albums = ""
                let loader = document.querySelector(".loaderArtists")

                for (let i=1; i<7; i++) 
                {
                    albums +=`<ul class="artista">
                        <a href="DetailsArtists.html?id=${data.data[i].id}">
                        <li><img src="${data.data[i].picture}" class="portadas2" alt=""></li>
                        <li><div class="centrar"><p>${data.data[i].name}</p></div></li></a>
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