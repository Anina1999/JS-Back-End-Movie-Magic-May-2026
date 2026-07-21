import bcrypt from "bcrypt";
import userRepository from "../repositories/userRepository.js";
import { generateAuthToken } from "../utils/tokenUtils.js";

export async function register(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const createdUser = await userRepository.create({
        ...userData,
        password: hashedPassword,
    });

    const token = generateAuthToken(createdUser);

    return token;
}

export async function login(userData) {
    const user = await userRepository.findByEmail(userData.email);

     if (!user) {
        throw new Error('Invalid username or password');
    }

    const isMatch = await bcrypt.compare(userData.password, user.password);

    if (!isMatch) {
        throw new Error('Invalid username or password');
    }

    const token = generateAuthToken(user);

    return token;
}

const authService = {
    register,
    login,
};

export default authService;