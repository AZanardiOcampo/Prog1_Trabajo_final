let queryString = location.search;
let id = queryString.substring(4);
console.log(id);
console.log(queryString);

apiurl = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}`