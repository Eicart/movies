const apiKey = '3f42753'; // Reemplaza con tu clave API de OMDb
const baseUrl = 'http://www.omdbapi.com/';
const categories = {
    action: 'action',
    comedy: 'comedy',
    drama: 'drama'
};

async function fetchMoviesByCategory(category) {
    const response = await fetch(`${baseUrl}?apikey=${apiKey}&s=${category}`);
    const data = await response.json();
    return data.Search || [];
}

function displayMovies(category, movies) {
    const movieList = document.getElementById(`${category}-movies`);
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie';
        movieElement.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'default-image.jpg'}" alt="${movie.Title}" onerror="this.src='default-image.jpg';">
            <h2>${movie.Title}</h2>
            <p>${movie.Year}</p>
        `;
        movieList.appendChild(movieElement);
    });
}

async function loadMovies() {
    for (const [category, query] of Object.entries(categories)) {
        const movies = await fetchMoviesByCategory(query);
        displayMovies(category, movies);
    }
}

window.onload = loadMovies;
