const UserFactory = require('../factories/UserFactory');

class UserController {
    static async createuser(req, res) {
        try {
            const userService = UserFactory.createUserService();
            const user = await userService.createuser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message, location: "controller" });
        }
    }
}

module.exports = UserController;
