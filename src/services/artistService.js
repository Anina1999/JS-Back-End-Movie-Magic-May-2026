import artistRepository from "../repositories/artistRepository.js";

export function getAll(filter = {}) {
    return artistRepository.getAll(filter);
}

export function create(artistData) {
    artistData.age = Number(artistData.age);
    return artistRepository.create(artistData);
}

const artistService = {
    getAll,
    create,
}

export default artistService;