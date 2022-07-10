import express from 'express';
import HomeController from '../controllers/HomeController';
const router = express.Router();

const initWebRoute = (app) => {
    app.get('/', HomeController.getHomePage);
    return app.use('/', router);
};

module.exports = initWebRoute;
