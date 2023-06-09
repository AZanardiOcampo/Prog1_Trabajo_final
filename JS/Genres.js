let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"

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

        for (let i=0; i<data.length; i++)
        {
           characters += `
            <img src="${data.data[i].picture}" alt="">
            <p>${data.data[i].name}</p>  `     
        } 
        container.innerHTML += characters
    })       
    