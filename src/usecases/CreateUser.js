class CreateUser {
    constructor(userService) {
        this.userService = userService;
    }

    async execute(userData) {
        // Add additional business logic or validation if needed
        return await this.userService.CreateUser(userData);
    }
}

module.exports = CreateUser;
