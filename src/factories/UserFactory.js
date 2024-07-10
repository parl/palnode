const UserService = require('../services/UserService');
const UserRepository = require('../repositories/UserRepository');
const { user } = require('../models');

class userFactory {
    static createUserService() {
        const user_repository = new UserRepository(user);
        return new UserService(user_repository);
    }
}

module.exports = userFactory;
