import fs from 'fs/promises';
import { prisma } from '../lib/prisma.js';

async function getAll(filter = {}) {
    let movies = await prisma.movie.findMany({
        where: {
            year: filter.year || undefined,
            genre: {
                equals: filter.genre || undefined,
                mode: 'insensitive'
            },
            title: {
                contains: filter.search,
                mode: 'insensitive'
            }
        }
    });

    return movies;
}

async function getById(movieId) {
    const movie = await prisma.movie.findUnique({
        where: { id : movieId },
        include: {
            cast: true
        }
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