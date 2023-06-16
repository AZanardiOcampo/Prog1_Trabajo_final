let queryString = location.search;
let id = queryString.substring(4);
console.log(id);
console.log(queryString);

apiurl = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}`

fetch(apiurl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
 
      let titulo = document.querySelector(".title");
      let artista = document.querySelector(".artist");
      let genres = document.querySelector(".listagenres");
      let released = document.querySelector(".released");
      let img = document.querySelector(".portadadetalle")
      let tracks = document.querySelector(".cambio");
      let loader = document.querySelector(".loader");
      tracks.innerText = "Tracks";

      titulo.innerText = "Title: " + data.title
      img.src = data.cover_big
      artista.innerText = "Artist: " + data.artist.name
      released.innerText = "Released: " + data.release_date

        for (let i = 0; i < data.genres.data.length; i++)
        {
            genres.innerHTML +=`<li>${data.genres.data[i].name}</li>`
        }

        let articulo = document.querySelector(".cancionesdetails")
        let characters2 = ""

      for (let i = 0; i < data.tracks.data.length; i++) {
        characters2 += `<ul class="songs">
            <a href="DetailsTracks.html?id=${data.tracks.data[i].id}">
            <li>${i+1}. ${data.tracks.data[i].title}</li></a>
            </ul>
        `
        loader.style.display = "none"
        articulo.innerHTML = characters2;
      }})