import bcrypt from "bcrypt";
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

   console.log(user);
}

const authService = {
    register,
    login,
};

export default authService;