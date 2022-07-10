import express from 'express';
import initWebRoute from './routes/webRoute';
import initViewEngine from './config/configviewEngine';
import bodyParser from 'body-parser';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//SETUP VIEW ENGINE
initViewEngine(app);

//SETUP WEB ROUTE
initWebRoute(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
