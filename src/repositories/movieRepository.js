import fs from 'fs/promises';
import { prisma } from '../lib/prisma.js';

async function getAll(filter = {}) {
    let movies = await prisma.movie.findMany();

    if (filter.search) {
        movies = movies.filter(m => m.title.toLowerCase().includes(filter.search));
    }

    if (filter.genre) {
        movies = movies.filter(m => m.genre.toLowerCase() === filter.genre.toLowerCase());
    }

    if (filter.year) {
        movies = movies.filter(m => m.year === filter.year);
    }

    return movies;
}

async function getById(movieId) {
    const movie = await prisma.movie.findUnique({
        where: { id : movieId }
    })

    if (!movie) {
        throw new Error('No movie found!');
    }

    return movie;
}

async function create(movieData) {
    const movie = await prisma.movie.create({
        data: movieData,
});

    return movie;
}

async function attachArtist(movieId, artistId) {
    const result = await prisma.movie.update({
        where: { id: movieId },
        data: {
            cast: {
                connect: { id: artistId }
            }
        }
    });
    return result;
}

const movieRepository = {
    getAll,
    create,
    getById,
    attachArtist,
}

export default movieRepository;