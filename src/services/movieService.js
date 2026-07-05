import movieRepository from "../repositories/movieRepository.js";

function getAll() {
    return movieRepository.getAll();
}

const movieService = {
    getAll
}

export default movieService;