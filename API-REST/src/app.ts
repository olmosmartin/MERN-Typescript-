import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from './config/config';

import videoRoutes from './routes/videos.route';

//INICIALIZACIONES-------------------------------------------------
const app = express();
require('./config/database');

//MIDDLEWARES------------------------------------------
//app.use(morgan('combined'));
app.use(express.urlencoded({extended:false}))//para q cuando envien un POST desde un form lo entienda
app.use(express.json());//para q entienda objetos json
app.use(morgan('dev'));
app.use(cors());//para q permita q cualquier servidor pida cosas y haga operaciones


//SETTINGS---------------------------------------------
app.set('port', process.env.PORT || config.PORT);
app.set('json spaces', 2);

//ROUTES-----------------------------------------------
//app.use(require('./routes/videos.route'));
app.use(videoRoutes);

//STATIC-FILES-----------------------------------------


export default app;