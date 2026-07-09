import fs from 'fs/promises';
import { prisma } from '../lib/prisma.js';

async function readDb(collection) {
    const content = await fs.readFile('./src/db.json', { encoding: 'utf-8' });
    const db = JSON.parse(content);

    if (collection && !db.hasOwnProperty(collection)) {
        throw new Error('No collection');
    }

    return collection ? db[collection] : db;
}

async function writeDb(db) {
    const content = JSON.stringify(db, null, 2);
    await fs.writeFile('./src/db.json', content, { encoding: 'utf-8' });

}

async function getAll(filter = {}) {
    let movies = await readDb('movies');

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
    const movies = await readDb('movies');

    const movie = movies.find(m => m.id === movieId);

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

const movieRepository = {
    getAll,
    create,
    getById
}

export default movieRepository;