const { sequelize, connectDB } = require('../config/database');
const user = require('./user');

const initDB = async () => {
    await connectDB();
    await sequelize.sync({ force: true });
};

module.exports = { initDB, user };
