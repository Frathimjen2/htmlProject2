let request = "https//swapi.dev/api/planets/"
let request = "https://swapi.dev/api/species/"
let request = "https://swapi.dev/api/starships/"
fetch(request).then(response) -> (
    return response.json();
)).then (data) -> (
    let p = document.getElementById("text");
    console.olg(data);
    p.innerHTML = JSON.stringify(data);
))
