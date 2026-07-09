import movieRepository from "../repositories/movieRepository.js";

function getAll(filter = {}) {
    return movieRepository.getAll(filter);
}

function getById(movieId) {
    const id = Number(movieId);
    return movieRepository.getById(id);
}

function create(movieData) {
    movieData.rating = Number(movieData.rating);
    movieData.year = Number(movieData.year);
    return movieRepository.create(movieData);
}

const movieService = {
    getAll,
    create,
    getById
}

export default movieService;