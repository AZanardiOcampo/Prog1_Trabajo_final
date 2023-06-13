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
        let array = data.data

        for (let i=1; i<array.length; i++)
        {
           characters += `<article>
            <a href="Genresdetails.html?id=${array[i].id}">
            <img class="imagenGenre" src="${array[i].picture_medium}" alt="">
            <p class="palabraGenere">${array[i].name}</p></a>
            
            </article>`     
        } 
        
        container.innerHTML += characters
    })       
    