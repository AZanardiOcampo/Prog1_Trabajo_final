let recuperoStorage = localStorage.getItem("Favoritos");
let storageToArray = JSON.parse(recuperoStorage);
apiurl = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/`
let songs = ""
for (let i = 0; i < storageToArray.length; i++) {
    fetch(apiurl + storageToArray[i]).then(function (response) {
        console.log (response.json())
        return response.json();
    }).then(function (response){
        songs += `<ul class="cancion"><a href="DetailsTracks.html?id=${response.id}">
      <div class="portadas"><img class="imgportadas" src="${response.album.cover}" alt=""></div>
          <li><p class="ajuste">${response.title}</p></li>
          <li><p class="ajuste">${response.artist.name}</p></li></a>
      </ul>`

    })
}





canciones=document.querySelector('.cancionesFav')
canciones.innerHTML += songs
