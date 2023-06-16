let queryString = location.search;
let id = queryString.substring(4);
console.log(id);
console.log(queryString);

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}`

fetch(url)
    .then(function(response)
    {
      return response.json()  
    })
    .then(function(data)
    {
        console.log(data);
        let titulo = document.querySelector("h1")
        titulo.innerHTML += `<h1>${data.name} most popular artists</h1>`
    })  

let urlartistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}/artists`

fetch(urlartistas)
    .then(function(response)
    {
      return response.json()  
    })
    .then(function(data)
    {
    console.log(data)
    let artistas = document.querySelector(".artistas")
    let loader = document.querySelector(".loader")
    let artists = ""

    for (let i=0; i<7; i++){
        artists += `<ul class="cancion"><a href="DetailsArtists.html?id=${data.data[i].id}">
        <div class="portadas"><img class="imgportadas" src="${data.data[i].picture}" alt=""></div>
            <li><p class="ajuste">${data.data[i].name}</p></li></a>
        </ul>`
    }

    loader.style.display = "none"
    artistas.innerHTML += artists
    })  