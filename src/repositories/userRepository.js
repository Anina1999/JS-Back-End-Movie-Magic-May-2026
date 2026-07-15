import { prisma } from '../lib/prisma.js';

export async function create(userData) {
    const result = await prisma.user.create({
        data: {
            email: userData.email,
            password: userData.password,   
        }
    });
};

const userRepository = {
    create,
};

export default userRepository;