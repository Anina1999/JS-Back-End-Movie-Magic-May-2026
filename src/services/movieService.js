import movieRepository from "../repositories/movieRepository.js";

function getAll(filter = {}) {
    return movieRepository.getAll(filter);
}

function getById(movieId) {
    return movieRepository.getById(movieId);
}

function create(movieData) {
    return movieRepository.create(movieData);
}

const movieService = {
    getAll,
    create,
    getById
}

export default movieService;