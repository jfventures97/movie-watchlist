

const searchButton = document.getElementById('search-button')
const movieContainer= document.getElementById('inner-movie-container')

searchButton.addEventListener('click', function(){

    fetch("http://www.omdbapi.com/?apikey=8092a520&s=blade+runner")
    .then(res=> res.json())
    .then(data => { 
        movieContainer.innerHTML ="";
        data.Search.forEach(movie=> {
            fetch(`http://www.omdbapi.com/?apikey=8092a520&i=${movie.imdbID}&plot=short`)
            .then(res=>res.json())
            .then(details => {
                console.log(details)
                movieContainer.innerHTML+= `
                <div class="movie-card">
                                <div class="left-side">
                                    <img class="poster-image" src="${details.Poster}" alt="${details.Title}"> 
                                </div>

                                <div id="right-side">
                                    <div class="first-row">
                                        <h2 class="font18">${details.Title}</h2>
                                        <p class="font12"> ${details.imdbRating}</p>
                                    </div>
                                    <div class="second-row">
                                        <p class="font12"> ${details.Runtime} </p>
                                        <p class="font12"> ${details.Genre} </p>
                                    </div>
                                    <p class="font14">${details.Plot}</p>
                                </div>
                            </div>
                `

            })
        } )

    
    }
) } )