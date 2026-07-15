export function register(userData) {
    console.log('Registering user:', userData);
}

const authService = {
    register,
};

export default authService;