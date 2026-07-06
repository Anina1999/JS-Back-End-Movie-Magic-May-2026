import movieRepository from "../repositories/movieRepository.js";

function getAll() {
    return movieRepository.getAll();
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