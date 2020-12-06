import express from 'express';
import './database/connection';
import path from 'path';
import cors from 'cors';

import 'express-async-errors'

import routes  from './routes'
import errorHandler from './errors/handler'

const app = express();

//para permitir acesso dizer a origem do aceeso origin:['dominio'] endeco do front para permitir acesso
app.use(cors());
app.use(express.json());
app.use(routes);

//buscar as images
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler)

app.listen(3333);