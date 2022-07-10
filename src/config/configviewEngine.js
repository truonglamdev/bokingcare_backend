import express from 'express';

const initViewEngine = (app) => {
    app.use(express.static('src/public'));
    app.set('views', 'src/views');
    app.set('view engine', 'ejs');
};

module.exports = initViewEngine