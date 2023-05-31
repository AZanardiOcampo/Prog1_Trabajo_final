

let urlcanciones = "https://api.allorigins.win/raw?url="

fetch(urlcanciones)
    .then(function(response)
    {
      return response.json()  
    })
    .then(function(data)
    {
        console.log(data);
        let canciones = document.querySelector(".canciones")
        
    })
    .catch(function(error)
    {
        console.log("El error es: " + error);
    })