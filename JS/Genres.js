let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/genre"

fetch(url)
    .then(function(response)
    {
      return response.json()  
    })
    .then(function(data)

    {
        console.log(data);
        let container = document.querySelector(".generos")
        let characters = ""
        let loader = document.querySelector(".loader")
        let array = data.data

        for (let i=1; i<array.length; i++)
        {
           characters += `<article>
            <a href="DetailsGenres.html?id=${array[i].id}">
            <img class="imagenGenre" src="${array[i].picture_medium}" alt="">
            <p class="palabraGenere">${array[i].name}</p></a>
            
            </article>`     
        } 
        loader.style.display = "none"
        container.innerHTML += characters
        
    })       
    