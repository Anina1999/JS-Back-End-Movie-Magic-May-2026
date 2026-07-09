import { prisma } from '../lib/prisma.js';

export async function create(artistData) {
    const artist = await prisma.artist.create({
        data: artistData
    });

    return artist;
}

const artistRepository = {
    create,
}

export default artistRepository;