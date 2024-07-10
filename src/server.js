const app = require('./app');
const { initDB } = require('./models');

const port = 3000;

const startServer = async () => {
    await initDB();
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
};

startServer();
