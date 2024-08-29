// Datos de ejemplo de películas
const movies = [
    {
        title: "El Padrino",
        description: "La saga de una familia mafiosa italiana que se desarrolla en la década de 1940.",
        image: "https://example.com/el-padrino.jpg"
    },
    {
        title: "Inception",
        description: "Un ladrón que roba secretos corporativos a través del uso de la tecnología de los sueños.",
        image: "https://example.com/inception.jpg"
    },
    {
        title: "Interstellar",
        description: "Un grupo de exploradores viaja a través de un agujero de gusano en el espacio para asegurar la supervivencia de la humanidad.",
        image: "https://example.com/interstellar.jpg"
    }
];

function displayMovies() {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie';
        movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
        `;
        movieList.appendChild(movieElement);
    });
}

// Cargar las películas al cargar la página
window.onload = displayMovies;
