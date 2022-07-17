import express from 'express';
import HomeController from '../controllers/HomeController';
import UserController from '../controllers/UserController'
const router = express.Router();

const initWebRoute = (app) => {
    app.get('/crud', HomeController.getCRUD); //[GET]  /crud
    app.post('/post-crud', HomeController.postCRUD); //[POST]
    app.get('/get-crud', HomeController.displayGetCRUD); //[GET]
    app.get('/edit-crud', HomeController.getEditCRUD); //[GET]
    app.post('/put-crud', HomeController.updateCRUD); //[POST]
    app.get('/delete-crud', HomeController.displayGetCRUD); //[GET]

    app.post('/api/login', UserController.handleLogin)

    app.get('/', HomeController.getHomePage);
    return app.use('/', router);
};

module.exports = initWebRoute;
