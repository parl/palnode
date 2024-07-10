class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async createuser(userData) {
        // Business logic can go here
        return await this.userRepository.create(userData);
    }

    // Other service methods...
}

module.exports = UserService;
