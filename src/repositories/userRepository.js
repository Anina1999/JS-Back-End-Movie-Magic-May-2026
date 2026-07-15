export function create(userData) {
    console.log('Creating user in repo:', userData);
}

const userRepository = {
    create,
};

export default userRepository;