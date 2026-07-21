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

export async function remove(movieId, userId) {
    const result = await prisma.movie.delete({
        where: { id: movieId, userId: userId }
    })

    return result;
}

export async function edit(movieId, userId, updatedData) {
    const result =await prisma.movie.update({
        where: { id: movieId, userId: userId },
        data: updatedData,
    })

    return result;
}

const movieRepository = {
    getAll,
    create,
    getById,
    attachArtist,
    remove,
    edit
}

export default movieRepository;