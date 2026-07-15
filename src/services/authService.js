import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/userRepository.js";

export async function register(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const result = await userRepository.create({
        ...userData,
        password: hashedPassword,
    });

    return result;
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

    const payload = { userId: user.id, email: user.email };

    //TODO fix this secret
    const token = jwt.sign(payload, 'SECRET', { expiresIn: '1h' });

    return token;
}

const authService = {
    register,
    login,
};

export default authService;