

const searchButton = document.getElementById('search-button')
const movieContainer= document.getElementById('movie-container')

searchButton.addEventListener('click', function(){

    fetch("http://www.omdbapi.com/?apikey=8092a520&s=blade+runner")
    .then(res=> res.json())
    .then(data => { 
        
        console.log(data)

    movieContainer.innerHTML = `
    <div id='movie-poster'>
        <img src=${data.Search[0].Poster}> 
    </div>
    <div id='movie-info-container'>
        <div id='row-one'>
        <h1>${data.Search[0].Title}</h1>
        <p>${data.Search[0].review} </p>
        </div>
    </div>
    `
    }
) } )