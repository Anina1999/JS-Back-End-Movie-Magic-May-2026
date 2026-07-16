import movieRepository from "../repositories/movieRepository.js";

function getAll(filter = {}) {
    return movieRepository.getAll(filter);
}

function getById(movieId) {
    const id = Number(movieId);
    return movieRepository.getById(id);
}

function create(movieData, userId) {
    movieData.rating = Number(movieData.rating);
    movieData.year = Number(movieData.year);
    movieData.userId = userId;
    return movieRepository.create(movieData);
}

async function attachArtist(movieId, artistId) {
    const movieIdNumber = Number(movieId);
    const artistIdNumber = Number(artistId);

    const result = await movieRepository.attachArtist(movieIdNumber, artistIdNumber);
    return result;
}

const movieService = {
    getAll,
    create,
    getById,
    attachArtist,
}

export default movieService;