import express from 'express';
import HomeController from '../controllers/HomeController';
const router = express.Router();

const initWebRoute = (app) => {
    app.get('/crud', HomeController.getCRUD); //[GET]  /crud
    app.post('/post-crud', HomeController.postCRUD); //[POST]
    app.get('/get-crud', HomeController.displayGetCRUD); //[GET]

    app.get('/', HomeController.getHomePage);
    return app.use('/', router);
};;

module.exports = initWebRoute;
