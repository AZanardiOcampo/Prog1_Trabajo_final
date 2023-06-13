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
        
        for (let i=0; i<6; i++) 
        {
            songs +=`<ul class="cancion"><a href="DetailsTracks.html?id=${data.data[i].id}">
            <div class="portadas"><img class="imgportadas" src="${data.data[i].album.cover}" alt=""></div>
                <li><p class="ajuste">${data.data[i].title}</p></li>
                <li><p class="ajuste">${data.data[i].artist.name}</p></li></a>
            </ul>`
        }
        
        canciones.innerHTML+= songs
    })
    .catch(function(error)
    {
        console.log("El error es: " + error);
    })