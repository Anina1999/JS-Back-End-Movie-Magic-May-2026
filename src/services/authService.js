import userRepository from "../repositories/userRepository.js";

export function register(userData) {
    return userRepository.create(userData);
}

const authService = {
    register,
};

export default authService;