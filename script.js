const apiKey = '3f42753'; // Reemplaza con tu clave API de OMDb
const baseUrl = 'http://www.omdbapi.com/';
const movieList = document.getElementById('movie-list');

async function fetchMovies(query) {
    const response = await fetch(`${baseUrl}?apikey=${apiKey}&s=${query}`);
    const data = await response.json();
    return data.Search;
}

function displayMovies(movies) {
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

window.onload = async () => {
    const movies = await fetchMovies('Inception'); // Reemplaza 'Inception' con el título que quieras buscar
    displayMovies(movies);
};
