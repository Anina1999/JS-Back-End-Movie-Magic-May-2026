import movieRepository from "../repositories/movieRepository.js";

function getAll() {
    return movieRepository.getAll();
}

function create(movieData) {
    return movieRepository.create(movieData);
}

const movieService = {
    getAll,
    create,
}

export default movieService;