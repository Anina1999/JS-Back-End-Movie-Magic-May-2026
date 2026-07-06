import fs from 'fs/promises';
import {v4 as uuid} from 'uuid';

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
    fs.writeFile('./src/db.json', content, { encoding: 'utf-8' });

}

async function getAll() {
    const movies = await readDb('movies');

    return movies;
}

async function create(movieData) {
    movieData.id = uuid();
    const db = await readDb();

    db.movies.push(movieData);
    await writeDb(db);
}

const movieRepository = {
    getAll,
    create
}

export default movieRepository;