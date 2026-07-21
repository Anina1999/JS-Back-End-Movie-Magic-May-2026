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

export async function remove(movieId, userId) {
    const movie = await movieRepository.getById(movieId);

    if (!movie) {
        throw new Error('Movie not found');
    }

    if (movie.userId !== userId) {
        throw new Error('Unauthorized to delete this movie');
    }

    await movieRepository.remove(movieId);
}

const movieService = {
    getAll,
    create,
    getById,
    attachArtist,
    remove
}

export default movieService;