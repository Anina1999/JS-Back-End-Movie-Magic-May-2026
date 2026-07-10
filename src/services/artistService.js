import artistRepository from "../repositories/artistRepository.js";

export function getAll() {
    return artistRepository.getAll();
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