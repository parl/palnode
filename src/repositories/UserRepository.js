class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async create(userData) {
        return await this.userModel.create(userData);
    }

    // Other data access methods...
}

module.exports = UserRepository;
